import React, { useMemo, useState } from "react"
import * as d3 from "d3"
import { arc } from "d3-shape"
import { scaleLinear } from "d3-scale"
import { format } from "d3-format"
import Gauge from "components/_ui/Gauge/Gauge"

const lines = {
  percentScale: d3.range(21, 26),
  angleScale: d3.range(26, 31),
  angle: d3.range(31, 33),
  filledArc: d3.range(33, 41),
  markerLocation: d3.range(41, 46),
  colorScale: d3.range(46, 50),
  gradientSteps: d3.range(50, 53),
  divStart: d3.range(54, 61),
  defs: d3.range(67, 86),
  filledArcPath: d3.range(90, 94),
  midline: d3.range(94, 100),
  marker: d3.range(100, 108),
  pin: d3.range(108, 117),
  number: d3.range(118, 127),
  label: d3.range(127, 139),
  units: d3.range(139, 149),
  getPositionFromPoint : d3.range(153, 159),
}
const completedCode = (
`import React from "react"
import { arc } from "d3-shape"
import { scaleLinear } from "d3-scale"
import { format } from "d3-format"

const Gauge = ({
  value=50,
  min=0,
  max=100,
  label,
  units,
}) => {
  const backgroundArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .cornerRadius(1)
    ()

  const percentScale = scaleLinear()
    .domain([min, max])
    .range([0, 1])
  const percent = percentScale(value)

  const angleScale = scaleLinear()
    .domain([0, 1])
    .range([-Math.PI / 2, Math.PI / 2])
    .clamp(true)

  const angle = angleScale(percent)

  const filledArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(angle)
    .cornerRadius(1)
    ()

  const markerLocation = getPositionFromPoint(
    angle,
    0.825,
  )

  const colorScale = scaleLinear()
    .domain([0, 1])
    .range(["#dbdbe7", "#4834d4"])

  const gradientSteps = colorScale.ticks(10)
    .map(value => colorScale(value))

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}>
      <svg style={{overflow: "visible"}}
        width="9em"
        viewBox={[
          -1, -1,
          2, 1,
        ].join(" ")}>
        <defs>
          <linearGradient
            id="Gauge__gradient"
            gradientUnits="userSpaceOnUse"
            x1="-1"
            x2="1"
            y2="0">
            {gradientSteps.map((color, index) => (
              <stop
                key={color}
                stopColor={color}
                offset={\`\${
                  index
                  / (gradientSteps.length - 1)
                }\`}
              />
            ))}
          </linearGradient>
        </defs>
        <path
          d={backgroundArc}
          fill="#dbdbe7"
        />
        <path
          d={filledArc}
          fill="url(#Gauge__gradient)"
        />
        <line
          y1={-1}
          y2={-0.5}
          stroke="#fff"
          strokeWidth="0.027"
        />
        <circle
          cx={markerLocation[0]}
          cy={markerLocation[1]}
          r="0.2"
          fill={colorScale(percent)}
          stroke="#2c3e50"
          stroke-width="0.01"
        />
        <path
          d="M0.136364 0.0290102C0.158279 -0.0096701 0.219156 -0.00967009 0.241071 0.0290102C0.297078 0.120023 0.375 0.263367 0.375 0.324801C0.375 0.422639 0.292208 0.5 0.1875 0.5C0.0852272 0.5 -1.8346e-08 0.422639 -9.79274e-09 0.324801C0.00243506 0.263367 0.0803571 0.120023 0.136364 0.0290102ZM0.1875 0.381684C0.221591 0.381684 0.248377 0.356655 0.248377 0.324801C0.248377 0.292947 0.221591 0.267918 0.1875 0.267918C0.153409 0.267918 0.126623 0.292947 0.126623 0.324801C0.126623 0.356655 0.155844 0.381684 0.1875 0.381684Z"
          transform={\`rotate(\${angle * (180 / Math.PI)} -1 -1) translate(-0.2, -0.33)\`}
          fill="#6a6a85"
          style={{
            transformOrigin: "50% 100%",
            transition: "all 0.1s ease-out",
          }}
        />
      </svg>

      <div style={{
        fontSize: "3em",
        lineHeight: "1em",
        fontWeight: "900",
        fontFeatureSettings: "'zero', 'tnum' 1",
      }}>
        { format(",")(value) }
      </div>

      {!!label && (
        <div style={{
          color: "#8b8ba7",
          marginTop: "0.6em",
          fontSize: "1.3em",
          lineHeight: "1.3em",
          fontWeight: "700",
        }}>
          { label }
        </div>
      )}

      {!!units && (
        <div style={{
          color: "#8b8ba7",
          lineHeight: "1.3em",
          fontWeight: "300",
        }}>
          { units }
        </div>
      )}
    </div>
  )
}

const getPositionFromPoint = (angle, offset=10) => [
  Math.cos(angle - (Math.PI / 2)) * offset,
  Math.sin(angle - (Math.PI / 2)) * offset,
]
`)

export const codeExamples = [{
code: `import React from "react"

const Gauge = ({
  value=50,
  min=0,
  max=100,
  label,
  units,
}) => {
  return (
    <div>
    </div>
  )
}

export default Gauge`,
Example: ({ value }) => {
  return (
    <div>
    </div>
  )
},
markers: [[4],[5],[6],[7],[8]],
},{
code: `import React from "react"

const Gauge = ({
  value=50,
  min=0,
  max=100,
  label,
  units,
}) => {
  return (
    <div>
      <svg style={{
        border: "1px solid pink"
      }}>
      </svg>
    </div>
  )
}

export default Gauge`,
Example: ({ value }) => {
  return (
    <div>
      <svg style={{
        border: "1px solid pink"
      }}>
      </svg>
    </div>
  )
},
highlightedLines: d3.range(12, 16)
},{
code: `import React from "react"

const Gauge = ({
  value=50,
  min=0,
  max=100,
  label,
  units,
}) => {
  return (
    <div>
      <svg
        width="9em"
        style={{
          border: "1px solid pink"
        }}>
      </svg>
    </div>
  )
}

export default Gauge`,
Example: ({ value }) => {
  return (
    <div>
      <svg
        width="9em"
        style={{
          border: "1px solid pink"
          }}>
      </svg>
    </div>
  )
},
highlightedLines: [13]
}, {
code: `import React from "react"

const Gauge = ({
  value=50,
  min=0,
  max=100,
  label,
  units,
}) => {
  return (
    <div>
      <svg
        width="9em"
        viewBox={[
          -1, -1,
          2, 1,
        ].join(" ")}
        style={{
          border: "1px solid pink"
        }}>
      </svg>
    </div>
  )
}

export default Gauge`,
Example: ({ value }) => {
  return (
    <div>
      <svg
        width="9em"
        viewBox={[
          -1, -1,
          2, 1,
        ].join(" ")}
        style={{
          border: "1px solid pink"
          }}>
      </svg>
    </div>
  )
},
highlightedLines: d3.range(14, 18),
},{
code: `import React from "react"
import { arc } from "d3-shape"

const Gauge = ({
  value=50,
  min=0,
  max=100,
  label,
  units,
}) => {
  const backgroundArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .cornerRadius(1)

  return (
    <div>
      <svg
        width="9em"
        viewBox={[
          -1, -1,
          2, 1,
        ].join(" ")}
        style={{
          border: "1px solid pink"
        }}>
      </svg>
    </div>
  )
}

export default Gauge`,
Example: ({ value }) => {
  const backgroundArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .cornerRadius(1)

  return (
    <div>
      <svg
        width="9em"
        viewBox={[
          -1, -1,
          2, 1,
        ].join(" ")}
        style={{
          border: "1px solid pink"
          }}>
      </svg>
    </div>
  )
},
highlightedLines: d3.range(11, 17),
markers: [[12, 13],[14, 15],[16]],
},{
code: `import React from "react"
import { arc } from "d3-shape"

const Gauge = ({
  value=50,
  min=0,
  max=100,
  label,
  units,
}) => {
  const backgroundArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .cornerRadius(1)
    ()

  return (
    <div>
      <svg
        width="9em"
        viewBox={[
          -1, -1,
          2, 1,
        ].join(" ")}
        style={{
          border: "1px solid pink"
        }}>
      </svg>
    </div>
  )
}

export default Gauge`,
Example: ({ value }) => {
  const backgroundArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .cornerRadius(1)
    ()

  return (
    <div>
      <svg
        width="9em"
        viewBox={[
          -1, -1,
          2, 1,
        ].join(" ")}
        style={{
          border: "1px solid pink"
          }}>
      </svg>
    </div>
  )
},
highlightedLines: [17],
},{
  code: completedCode,
  removedLines: [
    3, 4,
    ...lines.angleScale,
    ...lines.percentScale,
    ...lines.angle,
    ...lines.filledArc,
    ...lines.markerLocation,
    ...lines.colorScale,
    ...lines.gradientSteps,
    ...lines.divStart,
    ...lines.defs,
    ...lines.filledArcPath,
    ...lines.midline,
    ...lines.marker,
    ...lines.pin,
    ...lines.number,
    ...lines.label,
    ...lines.units,
    ...lines.getPositionFromPoint,
  ],
  insertedLines: [{
    start: 19,
    code: `    <div>`,
  }],
Example: ({ value }) => {
  const backgroundArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .cornerRadius(1)
    ()

  return (
    <div>
      <svg
        width="9em"
        viewBox={[
          -1, -1,
          2, 1,
        ].join(" ")}
        style={{
          border: "1px solid pink"
          }}>
        <path
          d={backgroundArc}
          fill="#dbdbe7"
        />
      </svg>
    </div>
  )
},
highlightedLines: d3.range(27, 31),
},{
  code: completedCode,
  removedLines: [
    4,
    // ...lines.angleScale,
    // ...lines.angle,
    // ...lines.filledArc,
    ...lines.markerLocation,
    ...lines.colorScale,
    ...lines.gradientSteps,
    ...lines.divStart,
    ...lines.defs,
    ...lines.filledArcPath.slice(-2, -1),
    ...lines.midline,
    ...lines.marker,
    ...lines.pin,
    ...lines.number,
    ...lines.label,
    ...lines.units,
    ...lines.getPositionFromPoint,
  ],
  insertedLines: [{
    start: 40,
    code: `    <div>`,
  },{
    start: 53,
    code: `          fill="#9980FA"`,
  }],
Example: ({ value, min, max }) => {
  const backgroundArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .cornerRadius(1)
    ()

  const percentScale = scaleLinear()
    .domain([min, max])
    .range([0, 1])
  const percent = percentScale(value)

  const angleScale = scaleLinear()
    .domain([0, 1])
    .range([-Math.PI / 2, Math.PI / 2])
    .clamp(true)

  const angle = angleScale(percent)

  const filledArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(angle)
    .cornerRadius(1)
    ()

  return (
    <div>
      <svg
        width="9em"
        viewBox={[
          -1, -1,
          2, 1,
        ].join(" ")}>
        <path
          d={backgroundArc}
          fill="#dbdbe7"
        />
        <path
          d={filledArc}
          fill="#9980FA"
        />
      </svg>
    </div>
  )
},
highlightedLines: [
  ...d3.range(20, 24),
  ...d3.range(25, 29),
  30  ,
  ...d3.range(32, 39),
  ...d3.range(52, 56),
],
markers: [
  d3.range(20, 24),
  d3.range(25, 31),
  d3.range(32, 39),
  d3.range(52, 56),
]
},{
  code: completedCode,
  removedLines: [
    4,
    ...lines.markerLocation,
    // ...lines.colorScale,
    // ...lines.gradientSteps,
    ...lines.divStart,
    ...lines.defs,
    ...lines.filledArcPath.slice(-2, -1),
    ...lines.midline,
    ...lines.marker,
    ...lines.pin,
    ...lines.number,
    ...lines.label,
    ...lines.units,
    ...lines.getPositionFromPoint,
  ],
  insertedLines: [{
    start: 47,
    code: `    <div>`,
  },{
    start: 53,
    code: `          fill="#9980FA"`,
  }],
Example: ({ value, min, max }) => {
  const backgroundArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .cornerRadius(1)
    ()

  const percentScale = scaleLinear()
    .domain([min, max])
    .range([0, 1])
  const percent = percentScale(value)

  const angleScale = scaleLinear()
    .domain([0, 1])
    .range([-Math.PI / 2, Math.PI / 2])
    .clamp(true)

  const angle = angleScale(percent)

  const filledArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(angle)
    .cornerRadius(1)
    ()

  const colorScale = scaleLinear()
    .domain([0, 1])
    .range(["#dbdbe7", "#4834d4"])

  const gradientSteps = colorScale.ticks(10)
    .map(value => colorScale(value))

  return (
    <div>
      <svg
        width="9em"
        viewBox={[
          -1, -1,
          2, 1,
        ].join(" ")}>
        <path
          d={backgroundArc}
          fill="#dbdbe7"
        />
        <path
          d={filledArc}
          fill="#9980FA"
        />
      </svg>
    </div>
  )
},
highlightedLines: [
  ...d3.range(40, 43),
  ...d3.range(44, 46),
],
markers: [
  d3.range(40, 43),
  d3.range(44, 46),
]
},{
  code: completedCode,
  removedLines: [
    4,
    ...lines.markerLocation,
    ...lines.divStart,
    ...lines.defs.slice(7, -2),
    // ...lines.filledArcPath.slice(-2, -1),
    ...lines.midline,
    ...lines.marker,
    ...lines.pin,
    ...lines.number,
    ...lines.label,
    ...lines.units,
    ...lines.getPositionFromPoint,
  ],
  insertedLines: [{
    start: 47,
    code: `    <div>`,
  }],
Example: ({ value, min, max }) => {
  const backgroundArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .cornerRadius(1)
    ()

  const percentScale = scaleLinear()
    .domain([min, max])
    .range([0, 1])
  const percent = percentScale(value)

  const angleScale = scaleLinear()
    .domain([0, 1])
    .range([-Math.PI / 2, Math.PI / 2])
    .clamp(true)

  const angle = angleScale(percent)

  const filledArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(angle)
    .cornerRadius(1)
    ()

  const colorScale = scaleLinear()
    .domain([0, 1])
    .range(["#dbdbe7", "#4834d4"])

  const gradientSteps = colorScale.ticks(10)
    .map(value => colorScale(value))

  return (
    <div>
      <svg
        width="9em"
        viewBox={[
          -1, -1,
          2, 1,
        ].join(" ")}>
        <defs>
          <linearGradient
            id="Gauge__gradient"
            gradientUnits="userSpaceOnUse"
            x1="-1"
            x2="1"
            y2="0">
          </linearGradient>
        </defs>
        <path
          d={backgroundArc}
          fill="#dbdbe7"
        />
        <path
          d={filledArc}
          fill="#9980FA"
        />
      </svg>
    </div>
  )
},
highlightedLines: [
  ...d3.range(55, 64),
],
markers: [
  [55, 63],
  [56, 62],
  [57],
  [58],
  [59, 60, 61],
]
},{
  code: completedCode,
  removedLines: [
    4,
    ...lines.markerLocation,
    ...lines.divStart,
    // ...lines.defs,
    // ...lines.filledArcPath.slice(-2, -1),
    ...lines.midline,
    ...lines.marker,
    ...lines.pin,
    ...lines.number,
    ...lines.label,
    ...lines.units,
    ...lines.getPositionFromPoint,
  ],
  insertedLines: [{
    start: 47,
    code: `    <div>`,
  }],
Example: ({ value, min, max }) => {
  const backgroundArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .cornerRadius(1)
    ()

  const percentScale = scaleLinear()
    .domain([min, max])
    .range([0, 1])
  const percent = percentScale(value)

  const angleScale = scaleLinear()
    .domain([0, 1])
    .range([-Math.PI / 2, Math.PI / 2])
    .clamp(true)

  const angle = angleScale(percent)

  const filledArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(angle)
    .cornerRadius(1)
    ()

  const colorScale = scaleLinear()
    .domain([0, 1])
    .range(["#dbdbe7", "#4834d4"])

  const gradientSteps = colorScale.ticks(10)
    .map(value => colorScale(value))

  return (
    <div>
      <svg
        width="9em"
        viewBox={[
          -1, -1,
          2, 1,
        ].join(" ")}>
        <defs>
          <linearGradient
            id="Gauge__gradient"
            gradientUnits="userSpaceOnUse"
            x1="-1"
            x2="1"
            y2="0">
            {gradientSteps.map((color, index) => (
              <stop
                key={color}
                stopColor={color}
                offset={`${
                  index
                  / (gradientSteps.length - 1)
                }`}
              />
            ))}
          </linearGradient>
        </defs>
        <path
          d={backgroundArc}
          fill="#dbdbe7"
        />
        <path
          d={filledArc}
          fill="url(#Gauge__gradient)"
        />
      </svg>
    </div>
  )
},
highlightedLines: [
  ...d3.range(62, 72),
  80,
],
markers: [
  [62, 71],
  [63, 70],
  [64],
  [65],
  [66, 67, 68, 69],
  [80],
]
},{
  code: completedCode,
  removedLines: [
    4,
    // ...lines.markerLocation,
    ...lines.divStart,
    // ...lines.midline,
    ...lines.marker,
    ...lines.pin,
    ...lines.number,
    ...lines.label,
    ...lines.units,
    ...lines.getPositionFromPoint,
  ],
  insertedLines: [{
    start: 48,
    code: `    <div>`,
  }],
Example: ({ value, min, max }) => {
  const backgroundArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .cornerRadius(1)
    ()

  const percentScale = scaleLinear()
    .domain([min, max])
    .range([0, 1])
  const percent = percentScale(value)

  const angleScale = scaleLinear()
    .domain([0, 1])
    .range([-Math.PI / 2, Math.PI / 2])
    .clamp(true)

  const angle = angleScale(percent)

  const filledArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(angle)
    .cornerRadius(1)
    ()

  const colorScale = scaleLinear()
    .domain([0, 1])
    .range(["#dbdbe7", "#4834d4"])

  const gradientSteps = colorScale.ticks(10)
    .map(value => colorScale(value))

  const markerLocation = getPositionFromPoint(
    angle,
    0.825,
  )

  return (
    <div>
      <svg style={{overflow: "visible"}}
        width="9em"
        viewBox={[
          -1, -1,
          2, 1,
        ].join(" ")}>
        <defs>
          <linearGradient
            id="Gauge__gradient"
            gradientUnits="userSpaceOnUse"
            x1="-1"
            x2="1"
            y2="0">
            {gradientSteps.map((color, index) => (
              <stop
                key={color}
                stopColor={color}
                offset={`${
                  index
                  / (gradientSteps.length - 1)
                }`}
              />
            ))}
          </linearGradient>
        </defs>
        <path
          d={backgroundArc}
          fill="#dbdbe7"
        />
        <path
          d={filledArc}
          fill="url(#Gauge__gradient)"
        />
        <line
          y1={-1}
          y2={-0.5}
          stroke="#fff"
          strokeWidth="0.027"
        />
      </svg>
    </div>
  )
},
highlightedLines: [
  ...d3.range(55, 74),
],
markers: [
]
},{
  code: completedCode,
  removedLines: [
    4,
    // ...lines.markerLocation,
    ...lines.divStart,
    // ...lines.marker,
    ...lines.pin,
    ...lines.number,
    ...lines.label,
    ...lines.units,
    // ...lines.getPositionFromPoint,
  ],
  insertedLines: [{
    start: 48,
    code: `    <div>`,
  }],
Example: ({ value, min, max }) => {
  const backgroundArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .cornerRadius(1)
    ()

  const percentScale = scaleLinear()
    .domain([min, max])
    .range([0, 1])
  const percent = percentScale(value)

  const angleScale = scaleLinear()
    .domain([0, 1])
    .range([-Math.PI / 2, Math.PI / 2])
    .clamp(true)

  const angle = angleScale(percent)

  const filledArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(angle)
    .cornerRadius(1)
    ()

  const colorScale = scaleLinear()
    .domain([0, 1])
    .range(["#dbdbe7", "#4834d4"])

  const gradientSteps = colorScale.ticks(10)
    .map(value => colorScale(value))

  const markerLocation = getPositionFromPoint(
    angle,
    0.825,
  )

  return (
    <div>
      <svg style={{overflow: "visible"}}
        width="9em"
        viewBox={[
          -1, -1,
          2, 1,
        ].join(" ")}>
        <defs>
          <linearGradient
            id="Gauge__gradient"
            gradientUnits="userSpaceOnUse"
            x1="-1"
            x2="1"
            y2="0">
            {gradientSteps.map((color, index) => (
              <stop
                key={color}
                stopColor={color}
                offset={`${
                  index
                  / (gradientSteps.length - 1)
                }`}
              />
            ))}
          </linearGradient>
        </defs>
        <path
          d={backgroundArc}
          fill="#dbdbe7"
        />
        <path
          d={filledArc}
          fill="url(#Gauge__gradient)"
        />
        <line
          y1={-1}
          y2={-0.5}
          stroke="#fff"
          strokeWidth="0.027"
        />
        <circle
          cx={markerLocation[0]}
          cy={markerLocation[1]}
          r="0.2"
          fill={colorScale(percent)}
          stroke="#2c3e50"
          stroke-width="0.01"
        />
      </svg>
    </div>
  )
},
highlightedLines: [
  ...d3.range(55, 74),
],
markers: [
]
},{
  code: completedCode,
  removedLines: [
    4,
    // ...lines.markerLocation,
    ...lines.divStart,
    ...lines.pin.slice(-4, -1),
    ...lines.number,
    ...lines.label,
    ...lines.units,
    // ...lines.getPositionFromPoint,
  ],
  insertedLines: [{
    start: 48,
    code: `    <div>`,
  }],
Example: ({ value, min, max }) => {
  const backgroundArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .cornerRadius(1)
    ()

  const percentScale = scaleLinear()
    .domain([min, max])
    .range([0, 1])
  const percent = percentScale(value)

  const angleScale = scaleLinear()
    .domain([0, 1])
    .range([-Math.PI / 2, Math.PI / 2])
    .clamp(true)

  const angle = angleScale(percent)

  const filledArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(angle)
    .cornerRadius(1)
    ()

  const colorScale = scaleLinear()
    .domain([0, 1])
    .range(["#dbdbe7", "#4834d4"])

  const gradientSteps = colorScale.ticks(10)
    .map(value => colorScale(value))

  const markerLocation = getPositionFromPoint(
    angle,
    0.825,
  )

  return (
    <div>
      <svg style={{overflow: "visible"}}
        width="9em"
        viewBox={[
          -1, -1,
          2, 1,
        ].join(" ")}>
        <defs>
          <linearGradient
            id="Gauge__gradient"
            gradientUnits="userSpaceOnUse"
            x1="-1"
            x2="1"
            y2="0">
            {gradientSteps.map((color, index) => (
              <stop
                key={color}
                stopColor={color}
                offset={`${
                  index
                  / (gradientSteps.length - 1)
                }`}
              />
            ))}
          </linearGradient>
        </defs>
        <path
          d={backgroundArc}
          fill="#dbdbe7"
        />
        <path
          d={filledArc}
          fill="url(#Gauge__gradient)"
        />
        <line
          y1={-1}
          y2={-0.5}
          stroke="#fff"
          strokeWidth="0.027"
        />
        <circle
          cx={markerLocation[0]}
          cy={markerLocation[1]}
          r="0.2"
          fill={colorScale(percent)}
          stroke="#2c3e50"
          stroke-width="0.01"
        />
        <path
          d="M0.136364 0.0290102C0.158279 -0.0096701 0.219156 -0.00967009 0.241071 0.0290102C0.297078 0.120023 0.375 0.263367 0.375 0.324801C0.375 0.422639 0.292208 0.5 0.1875 0.5C0.0852272 0.5 -1.8346e-08 0.422639 -9.79274e-09 0.324801C0.00243506 0.263367 0.0803571 0.120023 0.136364 0.0290102ZM0.1875 0.381684C0.221591 0.381684 0.248377 0.356655 0.248377 0.324801C0.248377 0.292947 0.221591 0.267918 0.1875 0.267918C0.153409 0.267918 0.126623 0.292947 0.126623 0.324801C0.126623 0.356655 0.155844 0.381684 0.1875 0.381684Z"
          transform={`rotate(${angle * (180 / Math.PI)} -1 -1) translate(-0.2, -0.33)`}
          fill="#6a6a85"
        />
      </svg>
    </div>
  )
},
highlightedLines: [
  ...d3.range(55, 74),
],
markers: [
]
},{
  code: completedCode,
  removedLines: [
    4,
    // ...lines.markerLocation,
    ...lines.divStart,
    // ...lines.midline,
    // ...lines.marker,
    // ...lines.pin,
    ...lines.number,
    ...lines.label,
    ...lines.units,
    // ...lines.getPositionFromPoint,
  ],
  insertedLines: [{
    start: 48,
    code: `    <div>`,
  }],
Example: ({ value, min, max }) => {
  const backgroundArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .cornerRadius(1)
    ()

  const percentScale = scaleLinear()
    .domain([min, max])
    .range([0, 1])
  const percent = percentScale(value)

  const angleScale = scaleLinear()
    .domain([0, 1])
    .range([-Math.PI / 2, Math.PI / 2])
    .clamp(true)

  const angle = angleScale(percent)

  const filledArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(angle)
    .cornerRadius(1)
    ()

  const colorScale = scaleLinear()
    .domain([0, 1])
    .range(["#dbdbe7", "#4834d4"])

  const gradientSteps = colorScale.ticks(10)
    .map(value => colorScale(value))

  const markerLocation = getPositionFromPoint(
    angle,
    0.825,
  )

  return (
    <div>
      <svg style={{overflow: "visible"}}
        width="9em"
        viewBox={[
          -1, -1,
          2, 1,
        ].join(" ")}>
        <defs>
          <linearGradient
            id="Gauge__gradient"
            gradientUnits="userSpaceOnUse"
            x1="-1"
            x2="1"
            y2="0">
            {gradientSteps.map((color, index) => (
              <stop
                key={color}
                stopColor={color}
                offset={`${
                  index
                  / (gradientSteps.length - 1)
                }`}
              />
            ))}
          </linearGradient>
        </defs>
        <path
          d={backgroundArc}
          fill="#dbdbe7"
        />
        <path
          d={filledArc}
          fill="url(#Gauge__gradient)"
        />
        <line
          y1={-1}
          y2={-0.5}
          stroke="#fff"
          strokeWidth="0.027"
        />
        <circle
          cx={markerLocation[0]}
          cy={markerLocation[1]}
          r="0.2"
          fill={colorScale(percent)}
          stroke="#2c3e50"
          stroke-width="0.01"
        />
        <path
          d="M0.136364 0.0290102C0.158279 -0.0096701 0.219156 -0.00967009 0.241071 0.0290102C0.297078 0.120023 0.375 0.263367 0.375 0.324801C0.375 0.422639 0.292208 0.5 0.1875 0.5C0.0852272 0.5 -1.8346e-08 0.422639 -9.79274e-09 0.324801C0.00243506 0.263367 0.0803571 0.120023 0.136364 0.0290102ZM0.1875 0.381684C0.221591 0.381684 0.248377 0.356655 0.248377 0.324801C0.248377 0.292947 0.221591 0.267918 0.1875 0.267918C0.153409 0.267918 0.126623 0.292947 0.126623 0.324801C0.126623 0.356655 0.155844 0.381684 0.1875 0.381684Z"
          transform={`rotate(${angle * (180 / Math.PI)} -1 -1) translate(-0.2, -0.33)`}
          fill="#6a6a85"
          style={{
            transformOrigin: "50% 100%",
            transition: "all 0.1s ease-out",
          }}
        />
      </svg>
    </div>
  )
},
highlightedLines: [
  ...d3.range(55, 74),
],
markers: [
]
},{
  code: completedCode,
Example: ({
  value=50,
  min=0,
  max=100,
  label,
  units,
}) => {
  const backgroundArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .cornerRadius(1)
    ()

  const percentScale = scaleLinear()
    .domain([min, max])
    .range([0, 1])
  const percent = percentScale(value)

  const angleScale = scaleLinear()
    .domain([0, 1])
    .range([-Math.PI / 2, Math.PI / 2])
    .clamp(true)

  const angle = angleScale(percent)

  const filledArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(angle)
    .cornerRadius(1)
    ()

  const markerLocation = getPositionFromPoint(
    angle,
    0.825,
  )

  const colorScale = scaleLinear()
    .domain([0, 1])
    .range(["#dbdbe7", "#4834d4"])

  const gradientSteps = colorScale.ticks(10)
    .map(value => colorScale(value))

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}>
      <svg style={{overflow: "visible"}}
        width="9em"
        viewBox={[
          -1, -1,
          2, 1,
        ].join(" ")}>
        <defs>
          <linearGradient
            id="Gauge__gradient"
            gradientUnits="userSpaceOnUse"
            x1="-1"
            x2="1"
            y2="0">
            {gradientSteps.map((color, index) => (
              <stop
                key={color}
                stopColor={color}
                offset={`${
                  index
                  / (gradientSteps.length - 1)
                }`}
              />
            ))}
          </linearGradient>
        </defs>
        <path
          d={backgroundArc}
          fill="#dbdbe7"
        />
        <path
          d={filledArc}
          fill="url(#Gauge__gradient)"
        />
        <line
          y1={-1}
          y2={-0.5}
          stroke="#fff"
          strokeWidth="0.027"
        />
        <circle
          cx={markerLocation[0]}
          cy={markerLocation[1]}
          r="0.2"
          fill={colorScale(percent)}
          stroke="#2c3e50"
          stroke-width="0.01"
        />
        <path
          d="M0.136364 0.0290102C0.158279 -0.0096701 0.219156 -0.00967009 0.241071 0.0290102C0.297078 0.120023 0.375 0.263367 0.375 0.324801C0.375 0.422639 0.292208 0.5 0.1875 0.5C0.0852272 0.5 -1.8346e-08 0.422639 -9.79274e-09 0.324801C0.00243506 0.263367 0.0803571 0.120023 0.136364 0.0290102ZM0.1875 0.381684C0.221591 0.381684 0.248377 0.356655 0.248377 0.324801C0.248377 0.292947 0.221591 0.267918 0.1875 0.267918C0.153409 0.267918 0.126623 0.292947 0.126623 0.324801C0.126623 0.356655 0.155844 0.381684 0.1875 0.381684Z"
          transform={`rotate(${angle * (180 / Math.PI)} -1 -1) translate(-0.2, -0.33)`}
          fill="#6a6a85"
          style={{
            transformOrigin: "50% 100%",
            transition: "all 0.1s ease-out",
          }}
        />
      </svg>

      <div style={{
        fontSize: "3em",
        lineHeight: "1em",
        fontWeight: "900",
        fontFeatureSettings: "'zero', 'tnum' 1",
      }}>
        { format(",")(value) }
      </div>

      {!!label && (
        <div style={{
          color: "#8b8ba7",
          marginTop: "0.6em",
          fontSize: "1.3em",
          lineHeight: "1.3em",
          fontWeight: "700",
        }}>
          { label }
        </div>
      )}

      {!!units && (
        <div style={{
          color: "#8b8ba7",
          lineHeight: "1.3em",
          fontWeight: "300",
        }}>
          { units }
        </div>
      )}
    </div>
  )
},
highlightedLines: [
  ...d3.range(55, 74),
],
markers: [
]
}]

const getPositionFromPoint = (angle, offset=10) => [
  Math.cos(angle - (Math.PI / 2)) * offset,
  Math.sin(angle - (Math.PI / 2)) * offset,
]