#  HOSTINGER DEPLOYMENT GUIDE

## Complete steps to host Gaon Dry Fruits on Hostinger

---

##  1. HOSTINGER ACCOUNT SETUP

### Step 1: Sign Up
- Go to [hostinger.in](https://hostinger.in)
- Choose **Premium Web Hosting** plan (~₹149/month)
- This plan gives you:
  - Free domain for 1 year
  - 100 GB SSD storage
  - Unlimited bandwidth
  - Free SSL certificate
  - PHP & MySQL support

### Step 2: Get Domain
- During signup, choose your domain: `gaondryfruits.in` (or any available name)
- If you already have a domain, you can connect it later

---

##  2. UPLOAD FILES TO HOSTINGER

### Method 1: File Manager (Easiest)
1. Login to Hostinger **hPanel**
2. Go to **Files → File Manager**
3. Navigate to `public_html/` folder
4. Delete the default `default.php` file
5. Click **Upload** button
6. Upload the ZIP file (`gaon-dry-fruits-static.zip`)
7. Right-click the ZIP → **Extract**
8. Move all files to `public_html/` root

### Method 2: FTP (For large files)
1. In hPanel, go to **FTP Accounts**
2. Note FTP credentials (host, username, password)
3. Use FileZilla or similar FTP client
4. Connect and upload all files to `public_html/`

### Folder Structure on Hostinger:
```
public_html/
── index.html          ← Homepage
├── shop.html
├── product.html
├── cart.html
├── checkout.html
├── login.html
├── register.html
├── track-order.html
├── my-orders.html
├── admin.html
├── about.html
├── blog.html
├── contact.html
├── faq.html
├── css/
│   └── style.css
└── js/
    └── main.js
```

---

##  3. DATABASE SETUP (For Real Backend)

### Current Setup: localStorage (No Database Needed)
The current static version uses **browser localStorage** for:
- Cart items
- User login
- Orders
- Admin data

**Pros:** No database needed, works immediately, free
**Cons:** Data is browser-specific, not shared across devices

### Option A: Keep Static (Recommended for Start)
- No database needed
- Everything works with localStorage
- Good for demo/testing/small scale
- **Zero cost**

### Option B: Add PHP + MySQL Backend (For Production)

#### Step 1: Create MySQL Database
1. In hPanel → **Databases → MySQL Databases**
2. Create new database:
   - Name: `gaon_db`
   - Username: `gaon_user`
   - Password: (strong password)
3. Note the **hostname** (usually `localhost`)

#### Step 2: Import Database Schema
Create file `database.sql`:
```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  phone VARCHAR(20),
  isAdmin TINYINT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200),
  nameHindi VARCHAR(100),
  category VARCHAR(50),
  price DECIMAL(10,2),
  maxPrice DECIMAL(10,2),
  weight INT,
  description TEXT,
  image VARCHAR(500),
  isBestSeller TINYINT DEFAULT 0,
  stock INT DEFAULT 100,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  trackingId VARCHAR(20) UNIQUE,
  userEmail VARCHAR(100),
  items TEXT,
  totalAmount DECIMAL(10,2),
  paymentMethod VARCHAR(20),
  orderStatus VARCHAR(20) DEFAULT 'Pending',
  shippingAddress TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert admin user
INSERT INTO users (name, email, password, isAdmin) 
VALUES ('Admin', 'admin@gaondryfruits.in', MD5('admin123'), 1);

-- Insert sample products
INSERT INTO products (name, category, price, maxPrice, weight, isBestSeller, image) VALUES
('California Almonds', 'Badam', 540, 1990, 250, 1, 'https://images.unsplash.com/photo-1508061253366-f7da158b6d4b?w=400'),
('Premium Cashews', 'Kaju', 620, 2250, 250, 1, 'https://images.unsplash.com/photo-1536591375624-9b535f7a8bf7?w=400');
```

In hPanel → **phpMyAdmin** → Select database → Import → Upload `database.sql`

#### Step 3: Create PHP API Files
Create `api/` folder in `public_html/`:

**api/config.php:**
```php
<?php
$host = 'localhost';
$db = 'u123456789_gaon_db';  // Your database name
$user = 'u123456789_gaon';   // Your DB username
$pass = 'YourPassword123';    // Your DB password

try {
  $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
  die("Connection failed: " . $e->getMessage());
}
?>
```

**api/products.php:**
```php
<?php
require 'config.php';
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$stmt = $pdo->query("SELECT * FROM products ORDER BY id DESC");
$products = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($products);
?>
```

**api/orders.php:**
```php
<?php
require 'config.php';
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents('php://input'), true);
  $trackingId = 'GDF' . substr(time(), -8);
  
  $stmt = $pdo->prepare("INSERT INTO orders (trackingId, userEmail, items, totalAmount, paymentMethod, shippingAddress) VALUES (?, ?, ?, ?, ?, ?)");
  $stmt->execute([
    $trackingId,
    $data['userEmail'],
    json_encode($data['items']),
    $data['totalAmount'],
    $data['paymentMethod'],
    json_encode($data['shippingAddress'])
  ]);
  
  echo json_encode(['success' => true, 'trackingId' => $trackingId]);
}
?>
```

---

##  4. SSL CERTIFICATE (HTTPS)

### Enable Free SSL:
1. In hPanel → **Security → SSL**
2. Find your domain
3. Click **Install SSL** (Free Let's Encrypt)
4. Wait 5-10 minutes for activation
5. Enable **Force HTTPS** redirect

Your site will now be: `https://gaondryfruits.in`

---

##  5. EMAIL SETUP

### Create Business Email:
1. In hPanel → **Emails → Email Accounts**
2. Create: `support@gaondryfruits.in`
3. Password: (strong password)
4. Use in contact form or forward to Gmail

### SMTP Settings:
- Host: `smtp.hostinger.com`
- Port: 587 (TLS) or 465 (SSL)
- Username: `support@gaondryfruits.in`
- Password: (your email password)

---

##  6. PAYMENT GATEWAY INTEGRATION

### For Real Payments, Add:
1. **Razorpay** (Recommended for India)
   - Sign up at [razorpay.com](https://razorpay.com)
   - Get API keys
   - Add Razorpay checkout script to `checkout.html`

2. **PhonePe / Paytm Business**
   - Similar process
   - Get merchant API keys

### Razorpay Integration Example:
```javascript
// Add to checkout.html
function payWithRazorpay() {
  const options = {
    key: 'rzp_live_YOUR_KEY',
    amount: totalAmount * 100, // In paise
    currency: 'INR',
    name: 'Gaon Dry Fruits',
    description: 'Order Payment',
    handler: function(response) {
      // Payment successful
      placeOrder('UPI', response.razorpay_payment_id);
    },
    prefill: {
      email: formData.email,
      contact: formData.phone
    }
  };
  const rzp = new Razorpay(options);
  rzp.open();
}
```

---

##  7. DOMAIN CONFIGURATION

### Point Domain to Hostinger:
1. In hPanel → **Domains**
2. Click your domain
3. Note **Nameservers**:
   - `ns1.dns-parking.com`
   - `ns2.dns-parking.com`
4. Go to your domain registrar (GoDaddy, Namecheap, etc.)
5. Update nameservers to Hostinger's
6. Wait 24-48 hours for DNS propagation

---

##  8. PERFORMANCE OPTIMIZATION

### Enable Caching:
1. In hPanel → **Advanced → PHP Configuration**
2. Set PHP version to **8.1** or higher
3. Enable **OPcache**

### Compress Images:
- Use [tinypng.com](https://tinypng.com) to compress product images
- Recommended size: 400x400px, < 100KB each

### Enable GZIP:
Create `.htaccess` in `public_html/`:
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

##  9. SECURITY

### Protect Admin Panel:
Create `.htaccess` in `public_html/`:
```apache
# Protect admin page
<Files "admin.html">
  AuthType Basic
  AuthName "Admin Area"
  AuthUserFile /home/username/.htpasswd
  Require valid-user
</Files>
```

### Backup:
1. In hPanel → **Files → Backups**
2. Enable **Automatic Backups** (daily/weekly)
3. Download backup monthly

---

##  10. TESTING CHECKLIST

Before going live:
- [ ] Homepage loads correctly
- [ ] Shop page shows all products
- [ ] Add to cart works
- [ ] Checkout process completes
- [ ] Order tracking works
- [ ] Admin login works (admin@gaondryfruits.in / admin123)
- [ ] Mobile responsive design
- [ ] SSL certificate active (https://)
- [ ] Contact form sends emails
- [ ] All images load properly

---

##  11. COST BREAKDOWN

| Item | Cost |
|------|------|
| Hostinger Premium (1 year) | ₹1,788 |
| Domain (1 year, free with hosting) | ₹0 |
| SSL Certificate (free) | ₹0 |
| Business Email | ₹0 |
| **Total First Year** | **₹1,788** (~₹149/month) |

---

##  12. SUPPORT

### Hostinger Support:
- 24/7 Live Chat
- Knowledge Base: [support.hostinger.com](https://support.hostinger.com)
- Video Tutorials available

### For Custom Development:
- Hire developer on [fiverr.com](https://fiverr.com) (~₹5,000-15,000)
- Or [upwork.com](https://upwork.com) for complex features

---

##  QUICK START SUMMARY

1. **Buy Hostinger Premium** → ₹149/month
2. **Upload ZIP to public_html** → Extract files
3. **Enable SSL** → Free in hPanel
4. **Done!** → Site live at `https://yourdomain.com`

**No database needed for static version!** Everything works with localStorage.

For production with real payments and multi-user support, add PHP + MySQL backend (guide above).

---

##  FILES TO UPLOAD

Upload this entire `gaon-dry-fruits-static` folder content to `public_html/`:
- All `.html` files
- `css/style.css`
- `js/main.js`
- (Optional) `images/` folder if you have local product images

**Total size:** ~500KB (very lightweight!)

---

**Need help?** Contact Hostinger 24/7 chat support or email: support@gaondryfruits.in
