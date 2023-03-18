# ngx-serp-preview
[![npm](https://img.shields.io/npm/v/ngx-serp-preview.svg)](https://www.npmjs.com/package/ngx-serp-preview)
[![npm](https://img.shields.io/npm/dm/ngx-serp-preview.svg)](https://www.npmjs.com/package/ngx-serp-preview)
[![npm](https://img.shields.io/librariesio/release/npm/ngx-serp-preview)](https://www.npmjs.com/package/ngx-serp-preview)

### SERP (Search Engine Result Page) Preview Component for Angular


```sh
# Install the Angular component
npm i -S ngx-serp-preview
```

### <a href="https://btxtiger.github.io/ngx-serp-preview/" target="_blank">⇨ DEMO</a>

### Multiple preview tabs with Google, Mobile, Bing, Yahoo
```html
<ngx-serp-tabs [title]="title" [description]="description" [siteName]="siteName"
               [faviconUrl]="faviconUrl" [url]="url">
</ngx-serp-tabs>
```

### Google Preview
```html
<ngx-serp-google [title]="title" [description]="description" [siteName]="siteName" 
                 [url]="url" [faviconUrl]="faviconUrl">
</ngx-serp-google>
```

### Mobile Google Preview
```html
<ngx-serp-google-mobile [title]="title" [description]="description" [siteName]="siteName" 
                 [url]="url" [faviconUrl]="faviconUrl">
</ngx-serp-google-mobile>
```

### Bing Preview
```html
<ngx-serp-bing [title]="title" [description]="description" [url]="url">
</ngx-serp-bing>
```

### Yahoo Preview
```html
<ngx-serp-yahoo [title]="title" [description]="description" [url]="url">
</ngx-serp-yahoo>
```
