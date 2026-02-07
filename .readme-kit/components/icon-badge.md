<svg xmlns="http://www.w3.org/2000/svg" width="105" height="32" viewBox="0 0 105 32">
  <defs>
    <linearGradient id="iconGrad-{{_id}}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#6366f1"/>
      <stop offset="100%" style="stop-color:#8b5cf6"/>
    </linearGradient>
    <clipPath id="iconClip-{{_id}}">
      <path d="M 16,0 L 34,0 L 34,32 L 16,32 A 16,16 0 0 1 0,16 A 16,16 0 0 1 16,0 Z"/>
    </clipPath>
  </defs>
  {{#if isGradient}}
  <rect x="0" y="0" width="105" height="32" rx="16" ry="16" fill="url(#iconGrad-{{_id}})"/>
  {{#if iconPath}}
  <g clip-path="url(#iconClip-{{_id}})">
    <g transform="translate(10, 6) scale(0.833)">
      <path d="{{{iconPath}}}" fill="white"/>
    </g>
  </g>
  <text x="39" y="17" text-anchor="start" dominant-baseline="middle" fill="white" font-size="12" font-weight="600" font-family="system-ui, sans-serif">{{{label}}}</text>
  {{else}}
  <text x="53" y="17" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="12" font-weight="600" font-family="system-ui, sans-serif">{{{label}}}</text>
  {{/if}}
  {{else}}
  <rect x="0" y="0" width="105" height="32" rx="16" ry="16" fill="white"/>
  {{#if iconPath}}
  <g transform="translate(10, 6) scale(0.833)">
    <path d="{{{iconPath}}}" fill="{{iconColor}}"/>
  </g>
  <text x="39" y="17" text-anchor="start" dominant-baseline="middle" fill="#334155" font-size="12" font-weight="600" font-family="system-ui, sans-serif">{{{label}}}</text>
  {{else}}
  <text x="53" y="17" text-anchor="middle" dominant-baseline="middle" fill="#334155" font-size="12" font-weight="600" font-family="system-ui, sans-serif">{{{label}}}</text>
  {{/if}}
  {{/if}}
</svg>
