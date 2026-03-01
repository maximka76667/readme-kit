<svg xmlns="http://www.w3.org/2000/svg" width="{{width}}" height="32" viewBox="0 0 {{width}} 32">
  <defs>
    <linearGradient id="splitGrad-{{_id}}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:{{#if color}}{{color}}{{else}}#6366f1{{/if}}"/>
      <stop offset="100%" style="stop-color:{{#if color2}}{{color2}}{{else}}#4f46e5{{/if}}"/>
    </linearGradient>
  </defs>

  <!-- Main Unified Background -->
  <rect width="{{width}}" height="32" rx="16" fill="url(#splitGrad-{{_id}})"/>
  
  <!-- Subtle Left Section (Glass effect) -->
  <rect width="{{splitPos}}" height="32" rx="16" fill="white" fill-opacity="0.15"/>
  
  <!-- Minimalist Separator Line -->
  <line x1="{{splitPos}}" y1="10" x2="{{splitPos}}" y2="22" stroke="white" stroke-opacity="0.2" stroke-width="1"/>

  <!-- Platform Name (Clean Typography) -->

<text x="{{prefixX}}" y="17" text-anchor="middle" dominant-baseline="middle" fill="white" fill-opacity="0.8" font-size="10" font-weight="800" font-family="system-ui, sans-serif" style="text-transform: uppercase; letter-spacing: 0.8px;">{{prefix}}</text>

  <!-- The Data (High Contrast) -->

<text x="{{labelX}}" y="17" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="12" font-weight="600" font-family="system-ui, sans-serif">{{label}}</text>
</svg>
