<svg xmlns="http://www.w3.org/2000/svg" width="{{width}}" height="32" viewBox="0 0 {{width}} 32">
  <!-- Right background -->
  <rect x="0" y="0" width="{{width}}" height="32" rx="16" ry="16" fill="white" stroke="#e2e8f0" stroke-width="1"/>
  
  <!-- Left background (Platform/Prefix) -->
  <path d="M 16,0 L {{splitPos}},0 L {{splitPos}},32 L 16,32 A 16,16 0 0 1 0,16 A 16,16 0 0 1 16,0 Z" fill="{{#if color}}{{color}}{{else}}#6366f1{{/if}}"/>
  
  <!-- Prefix Text (e.g., EMAIL) -->
  <text x="{{prefixX}}" y="17" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="10" font-weight="800" font-family="system-ui, sans-serif" style="text-transform: uppercase; letter-spacing: 0.5px;">{{prefix}}</text>
  
  <!-- Label Text (e.g., your email) -->
  <text x="{{labelX}}" y="17" text-anchor="middle" dominant-baseline="middle" fill="#334155" font-size="12" font-weight="600" font-family="system-ui, sans-serif">{{label}}</text>
</svg>
