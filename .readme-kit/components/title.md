<svg xmlns="http://www.w3.org/2000/svg" width="{{#if width}}{{width}}{{else}}450{{/if}}" height="56" viewBox="0 0 {{#if width}}{{width}}{{else}}450{{/if}} 56">
  <defs>
    <linearGradient id="titleGrad-{{_id}}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:{{#if color}}{{color}}{{else}}#6366f1{{/if}}"/>
      <stop offset="100%" style="stop-color:{{#if color2}}{{color2}}{{else}}#8b5cf6{{/if}}"/>
    </linearGradient>
  </defs>

{{#if isGradient}}
<text x="0" y="38" fill="url(#titleGrad-{{_id}})" font-size="32" font-weight="900" font-family="'Segoe UI Variable Display', 'Segoe UI', system-ui, sans-serif" style="letter-spacing: -0.02em;">{{label}}</text>
<rect x="0" y="48" width="48" height="6" rx="3" fill="url(#titleGrad-{{_id}})"/>
{{else}}
<text x="0" y="38" fill="{{#if color}}{{color}}{{else}}#1e293b{{/if}}" font-size="32" font-weight="900" font-family="'Segoe UI Variable Display', 'Segoe UI', system-ui, sans-serif" style="letter-spacing: -0.02em;">{{label}}</text>
<rect x="0" y="48" width="48" height="6" rx="3" fill="{{#if color}}{{color}}{{else}}#6366f1{{/if}}"/>
{{/if}}
</svg>
