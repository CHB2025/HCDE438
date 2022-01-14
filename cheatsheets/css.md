# CSS

## Box-Sizing
Use this to prevent padding from overflowing the sides of your document:
```css
*{
   box-sizing: border-box;
}
```

## Units
```css
{
   width: 10px;
   /* Relative Units */
   width: 10%; /* 10% of the parent element */
   width: 10vw; /* 10% of the ENTIRE screen width */
   width: 10vh; /* 10% of the ENTIRE screen height */
   width: 10vmin; /* 10% of the viewport's smaller dimension */
   width: 10vmax; /* 10% of the viewport's larger dimension */
   width: 10rem; /* 10 * the font-size of the html element */
   width: 10em; /* 10 * the font-size of the parent element */
   width: 10ex; /* 10 * the x-height of the element's font */
   width: 10lh; /* 10 * the line height of the element */
}
```

## Responsive Font Sizes
Also helps making everything else responsive through the use of `rem`

```css
html {
   font-size: 14px;
}
/* tablet */
@media only screen and (min-width: 480px) {
   html {
       font-size: 16px;
   }
}
/* desktop */
@media only screen and (min-width: 768px) {
   html {
       font-size: 18px;
   }
}
/* extra large */
@media only screen and (min-width: 1024px) {
   html {
       font-size: 20px;
   }
}
```