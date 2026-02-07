<svg xmlns="http://www.w3.org/2000/svg" width="100" height="22" viewBox="0 0 100 22">
  <defs>
    <linearGradient id="iconGrad-{{_id}}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#6366f1"/>
      <stop offset="100%" style="stop-color:#8b5cf6"/>
    </linearGradient>
    <clipPath id="iconClip-{{_id}}">
      <path d="M 11,0 L 26,0 L 26,22 L 11,22 A 11,11 0 0 1 0,11 A 11,11 0 0 1 11,0 Z"/>
    </clipPath>
  </defs>
  {{#if isGradient}}
  <rect x="0" y="0" width="100" height="22" rx="11" ry="11" fill="url(#iconGrad-{{_id}})"/>
  {{#if iconPath}}
  <g clip-path="url(#iconClip-{{_id}})">
    <g transform="translate(10, 3) scale(0.667)">
      <path d="{{{iconPath}}}" fill="white"/>
    </g>
  </g>
  <text x="36" y="12" text-anchor="start" dominant-baseline="middle" fill="white" font-size="10" font-weight="600" font-family="system-ui, sans-serif">{{{label}}}</text>
  {{else}}
  <text x="50" y="12" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="10" font-weight="600" font-family="system-ui, sans-serif">{{{label}}}</text>
  {{/if}}
  {{else}}
  <rect x="0" y="0" width="100" height="22" rx="11" ry="11" fill="white"/>
  {{#if iconPath}}
  <g transform="translate(10, 3) scale(0.667)">
    <path d="{{{iconPath}}}" fill="{{iconColor}}"/>
  </g>
  <text x="36" y="12" text-anchor="start" dominant-baseline="middle" fill="#334155" font-size="10" font-weight="600" font-family="system-ui, sans-serif">{{{label}}}</text>
  {{else}}
  <text x="50" y="12" text-anchor="middle" dominant-baseline="middle" fill="#334155" font-size="10" font-weight="600" font-family="system-ui, sans-serif">{{{label}}}</text>
  {{/if}}
  {{/if}}
</svg>
