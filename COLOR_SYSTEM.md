# CoinPort Design System - Color Variables

**Last Updated:** October 28, 2025

This document describes the color system used across the entire CoinPort website and API documentation.

## CSS Custom Properties

All colors are defined as CSS custom properties (variables) for consistency and easy maintenance.

### Light Mode Colors

```css
:root {
  /* Call-to-Action Colors */
  --primary-cta-color: rgb(0, 120, 240);              /* Blue - Primary buttons, links */
  --contrast-cta-color: rgb(250, 200, 72);            /* Yellow/Gold - Accents, hover states */
  --secondary-contrast-cta-color: rgb(255, 144, 104); /* Orange - Secondary accents */

  /* Text Colors */
  --primary-text-color: rgb(0, 35, 58);               /* Dark blue - Main text */
  --text-contrast-color: rgb(120, 120, 120);          /* Gray - Secondary text */

  /* Background Colors */
  --main-background-color: rgb(255, 255, 255);        /* White - Page background */
  --body-background-color: rgb(243, 244, 250);        /* Light gray - Content areas */
  --header-background-color: rgb(0, 35, 85);          /* Dark blue - Headers */
  --subheader-background-color: rgb(255, 255, 255);   /* White - Subheaders */

  /* UI Element Colors */
  --dropdown-background-color: rgb(255, 255, 255);    /* White - Dropdowns */
  --icons: rgb(119, 127, 147);                        /* Gray - Icon color */
  --cta-layer-color: rgb(255, 255, 255);              /* White - CTA layers */

  /* System Colors */
  --system-green: rgb(75, 198, 74);                   /* Green - Success states */
  --system-red: rgb(255, 97, 127);                    /* Red - Error states */
  --system-yellow: rgb(247, 214, 0);                  /* Yellow - Warning states */

  /* Trading Colors */
  --asks: rgb(255, 97, 127);                          /* Red - Sell orders */
  --bids: rgb(75, 198, 74);                           /* Green - Buy orders */

  /* Input & Border Colors */
  --input-background-color: rgb(243, 244, 250);       /* Light gray - Input backgrounds */
  --input-border-color: rgb(243, 244, 250);           /* Light gray - Input borders */
  --divider-color: rgb(200, 200, 200);                /* Gray - Dividers, HR */
  --table-border-color: rgb(230, 230, 230);           /* Light gray - Table borders */
  --shadow-color: rgb(0, 0, 0);                       /* Black - Box shadows */
}
```

### Dark Mode Colors

```css
body.dark-mode {
  /* Call-to-Action Colors */
  --primary-cta-color: rgb(0, 120, 240);              /* Blue - Primary buttons, links */
  --contrast-cta-color: rgb(250, 200, 72);            /* Yellow/Gold - Accents, hover */
  --secondary-contrast-cta-color: rgb(246, 92, 85);   /* Red/Orange - Secondary accents */

  /* Text Colors */
  --primary-text-color: rgb(255, 255, 255);           /* White - Main text */
  --text-contrast-color: rgb(245, 245, 245);          /* Off-white - Secondary text */

  /* Background Colors */
  --main-background-color: rgb(0, 25, 60);            /* Dark blue - Page background */
  --body-background-color: rgb(0, 35, 85);            /* Medium dark blue - Content */
  --header-background-color: rgb(0, 25, 60);          /* Dark blue - Headers */
  --subheader-background-color: rgb(15, 26, 61);      /* Darker blue - Subheaders */

  /* UI Element Colors */
  --dropdown-background-color: rgb(3, 28, 58);        /* Dark blue - Dropdowns */
  --icons: rgb(115, 127, 146);                        /* Gray - Icon color */
  --cta-layer-color: rgb(255, 255, 255);              /* White - CTA layers */

  /* System Colors */
  --system-green: rgb(75, 198, 94);                   /* Green - Success states */
  --system-red: rgb(255, 97, 127);                    /* Red - Error states */
  --system-yellow: rgb(247, 214, 0);                  /* Yellow - Warning states */

  /* Trading Colors */
  --asks: rgb(255, 97, 127);                          /* Red - Sell orders */
  --bids: rgb(75, 198, 94);                           /* Green - Buy orders */

  /* Input & Border Colors */
  --input-background-color: rgb(0, 35, 90);           /* Dark blue - Input backgrounds */
  --input-border-color: rgb(0, 35, 90);               /* Dark blue - Input borders */
  --divider-color: rgb(55, 55, 55);                   /* Dark gray - Dividers, HR */
  --table-border-color: rgb(30, 55, 95);              /* Dark blue - Table borders */
  --shadow-color: rgb(23, 28, 41);                    /* Very dark blue - Shadows */
}
```

## Usage Examples

### Backgrounds
```css
.container {
  background: var(--main-background-color);
}

.card {
  background: var(--body-background-color);
}

.header {
  background: var(--header-background-color);
}
```

### Text
```css
h1, h2, h3 {
  color: var(--primary-text-color);
}

p, span {
  color: var(--text-contrast-color);
}
```

### Buttons & Links
```css
.btn-primary {
  background: var(--primary-cta-color);
  color: white;
}

.btn-primary:hover {
  background: var(--contrast-cta-color);
  color: var(--header-background-color);
}

a {
  color: var(--primary-cta-color);
}

body.dark-mode a {
  color: var(--contrast-cta-color);
}
```

### Borders & Dividers
```css
hr {
  background: var(--divider-color);
}

table {
  border: 1px solid var(--table-border-color);
}

input {
  background: var(--input-background-color);
  border: 1px solid var(--input-border-color);
}
```

### System States
```css
.success {
  color: var(--system-green);
}

.error {
  color: var(--system-red);
}

.warning {
  color: var(--system-yellow);
}
```

### Trading UI
```css
.ask-price {
  color: var(--asks);
}

.bid-price {
  color: var(--bids);
}
```

## Files Updated

### ✅ Completed
1. **style.css** (root) - Main stylesheet with all CSS variables
2. **api/index.html** - API documentation page
3. **api/authentication.html** - Authentication guide page

### Color Mappings

| Old Color | New Variable | Usage |
|-----------|--------------|-------|
| `#0078F0` | `var(--primary-cta-color)` | Primary buttons, links |
| `#fac848` / `#FAC848` | `var(--contrast-cta-color)` | Accent color, hover states |
| `#00233a` | `var(--primary-text-color)` | Main text (light mode) |
| `#ffffff` | `var(--primary-text-color)` | Main text (dark mode) |
| `#fff` | `var(--main-background-color)` | Page background |
| `#002355` | `var(--header-background-color)` | Header background |
| `#00193c` | `var(--main-background-color)` | Dark mode background |
| `#e6e6e6` | `var(--table-border-color)` | Light borders |
| `#1e375f` | `var(--table-border-color)` | Dark mode borders |
| `#1aadff` | `var(--primary-cta-color)` | Alternative blue |

## Browser Support

CSS Custom Properties are supported in:
- Chrome 49+
- Firefox 31+
- Safari 9.1+
- Edge 15+
- Mobile browsers (iOS Safari 9.3+, Chrome Android 49+)

## Theme Switching

The color system supports automatic theme switching through the `.dark-mode` class on the `<body>` element:

```javascript
// Enable dark mode
document.body.classList.add('dark-mode');

// Enable light mode
document.body.classList.remove('dark-mode');

// Toggle theme
document.body.classList.toggle('dark-mode');
```

## Benefits of This System

1. **Consistency** - All colors come from a single source of truth
2. **Maintainability** - Change a color once, updates everywhere
3. **Theme Support** - Easy light/dark mode switching
4. **Readability** - Semantic variable names (e.g., `--primary-cta-color` vs `#0078F0`)
5. **Scalability** - Easy to add new themes or color variations
6. **Design System Alignment** - Matches Figma design specifications

## Future Enhancements

- [ ] Add color contrast checker
- [ ] Add accessibility audit for WCAG compliance
- [ ] Create color palette documentation with swatches
- [ ] Add more semantic color names for specific use cases
- [ ] Create theme builder tool

---

**Maintained by:** CoinPort Development Team
**Version:** 1.0.0
**Last Updated:** October 28, 2025
