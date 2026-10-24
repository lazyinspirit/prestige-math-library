# Diagram supplement, round 02, lane 09

## Finding

| Item | Finding | Severity | Assessment |
|---|---|---|---|
| `lem-blowup-charts-of-the-quadric-cone` | `optional-missing-diagram` | Editorial | A diagram is a useful optional aid connecting the global blowup resolution, its exceptional conic, and the three chart equations. This is not a mathematical error. |

The recommendation is grounded in statement lines 61, 63, 67, 69, and 71 of the assignment-bound snapshot. The snapshot SHA256 matches the assignment binding: `e7d805ec507d7d12649cd145c812ef616bcffbfceedd8e4040437f91936e2e9e`.

## Suggested diagram content

Use a global panel and a chart panel.

- Global panel: `C=V(xy-z^2) subset A^3_k`, with vertex `0`; blowup `pi:X->A^3_k`; exceptional divisor `E=pi^-1(0) ~= P^2_k`; and strict transform `C-tilde subset X`. Show the restricted map `pi|C-tilde:C-tilde->C`, labelled proper birational and an isomorphism over `C minus {0}`. Mark `C-tilde intersect E` as the conic `{xy=z^2} subset P^2_k`, with the transverse intersection claim from line 71.
- Chart panel: record each blowup substitution, total transform, strict-transform equation, and exceptional equation:

| Chart | Substitution | Total transform of `xy-z^2` | Strict transform | Exceptional equation |
|---|---|---|---|---|
| `U_x` | `y=xu, z=xv` | `x^2(u-v^2)` | `u=v^2` | `x=0` |
| `U_y` | `x=ys, z=yt` | `y^2(s-t^2)` | `s=t^2` | `y=0` |
| `U_z` | `x=zp, y=zq` | `z^2(pq-1)` | `pq=1` | `z=0` |

The strict-transform equations come after saturation by the exceptional parameter. A chart-to-`C` map can be labelled as `(x,v)->(x,xv^2,xv)`, `(y,t)->(yt^2,y,yt)`, and `(p,z)->(pz,z/p,z)` on `pq=1`. On `E`, the induced conic equations are `u=v^2`, `s=t^2`, and `pq=1`; the first two affine pieces cover the conic because `x=y=0` in `xy=z^2` forces `z=0`.

Keep the figure specific to this blowup example. It may illustrate the source's smoothness and transverse-intersection claims, but the proof must remain in the text and the figure should not imply a general resolution criterion.

## Preview review

Viewed all three assignment-listed local screenshot tiles at original resolution:

- `screenshots/lem-blowup-charts-of-the-quadric-cone--01.png` shows the statement and beginning of Facts & Assumptions; no diagram is present.
- `screenshots/lem-blowup-charts-of-the-quadric-cone--02.png` shows the remainder of Facts & Assumptions; no diagram is present.
- `screenshots/lem-blowup-charts-of-the-quadric-cone--03.png` shows the proof; no diagram is present.

No domain, codomain, composition, indexing, sign, or chart convention defect was found in the diagram-relevant claims. The chart substitutions give the displayed equations directly, and the exceptional equations agree with the stated blowup charts.
