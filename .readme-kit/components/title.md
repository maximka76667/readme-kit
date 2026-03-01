<svg xmlns="http://www.w3.org/2000/svg" width="{{#if width}}{{width}}{{else}}400{{/if}}" height="48" viewBox="0 0 {{#if width}}{{width}}{{else}}400{{/if}} 48">
  <defs>
    <linearGradient id="titleGrad-{{_id}}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:{{#if color}}{{color}}{{else}}#6366f1{{/if}}"/>
      <stop offset="100%" style="stop-color:{{#if color2}}{{color2}}{{else}}#8b5cf6{{/if}}"/>
    </linearGradient>
  </defs>

{{#if isGradient}}
<text x="0" y="32" fill="url(#titleGrad-{{_id}})" font-size="28" font-weight="800" font-family="system-ui, sans-serif">{{label}}</text>
<rect x="0" y="44" width="40" height="4" rx="2" fill="url(#titleGrad-{{_id}})"/>
{{else}}
<text x="0" y="32" fill="{{#if color}}{{color}}{{else}}#1e293b{{/if}}" font-size="28" font-weight="800" font-family="system-ui, sans-serif">{{label}}</text>
<rect x="0" y="44" width="40" height="4" rx="2" fill="{{#if color}}{{color}}{{else}}#6366f1{{/if}}"/>
{{/if}}
</svg>
