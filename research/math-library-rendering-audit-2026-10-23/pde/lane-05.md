# PDE — lane 05 visual review

## Coverage and integrity

Reviewed all 94 assigned frozen titles and complete rendered item bodies. Opened every one of the 195 receipt-listed PNG tiles individually at original resolution; no collage or downscaled image substituted for tile review. For every item, the frozen snapshot SHA256, current source SHA256, and local HTML SHA256 match the assignment record. Every tile SHA256 matches its screenshot receipt. There is no source, preview, or tile drift, and no unreviewed item or tile. All captures are revision 2; every sidecar reports zero KaTeX errors, zero TikZ diagrams, and zero diagram failures.

Rendered mathematics is legible overall. I found no confirmed LaTeX/TikZ rendering defect or clipping. A long line that looked close to the right edge was checked against the standalone original, its overlapping tile, the local preview CSS, and pixel bounds; the content stayed inside the 1104px main region of the 1200px capture. Wikilink titles shown as block lines and uppercase proof technique banners are expected.

## Optional title typography

These are title presentation observations, not body rendering defects:

- **`cex-not-every-open-set-is-a-w-one-p-extension-domain`, line 4:** the title shows literal `W^{1,3/2}` caret/braces; the body typesets the exponent.
- **`def-radial-mollifier-family-in-rn`, line 4:** the title displays plain `Rn`; the definition body typesets `\mathbb R^n`.
- **`lem-absolute-value-does-not-increase-dirichlet-energy-or-change-ltwo-normalisation`, line 4:** the title shows literal `L^2` and `H^1_0`; the body typesets both.
- **`lem-strong-ltwo-compactness-preserves-unit-normalisation`, line 4:** the title shows literal `H^1` and `L^2`; the body typesets both.
- **`thm-instantaneous-smoothing-of-lp-heat-flow`, line 4:** the title displays plain `Lp`; the body uses typeset `L^p`.

## Diagram review and candidates

No assigned item contains an existing TikZ diagram, so there were no current diagram maps, orientations, indices, or signs to validate. Four optional diagrams have plausible source support; each is editorial and uncertain, not a required repair:

- **`ex-punctured-domains-and-truncated-cones-with-explicit-faces`, line 27 (with verification lines 45, 47, 51):** show the space-time region `K={ (x,t): a_0<t<b_0, |x|<R(t) }`, its top and bottom caps, lateral face, and the outward normal `(x/|x|,-c)/sqrt(1+c^2)`. A second cross-section could show the truncated conical tip and artificial cap while labeling the three vanishing error terms. The source makes the face orientation and tip truncation central. Evidence: [tile 1](screenshots/ex-punctured-domains-and-truncated-cones-with-explicit-faces--01.png), [tile 2](screenshots/ex-punctured-domains-and-truncated-cones-with-explicit-faces--02.png).
- **`thm-local-linear-transport-cauchy-problem`, lines 34–39 and 71–75:** show the noncharacteristic data hypersurface `sigma(eta)`, the transverse transport vector `B=(a,1)`, characteristic curves, and the local coordinate map `Phi(s,eta)=Gamma(s;sigma(eta))`. An inset can show that the tangent vectors to the surface together with `B` form the columns of the invertible `D Phi`. Keep the drawing schematic for general spatial dimension. Evidence: [tile 1](screenshots/thm-local-linear-transport-cauchy-problem--01.png), [tile 2](screenshots/thm-local-linear-transport-cauchy-problem--02.png).
- **`thm-support-dichotomy-for-free-wave-fundamental-solutions`, lines 36–39 and 57–63:** pair an odd-dimensional sphere-neighbourhood support picture with an even-dimensional ball-filling kernel `K(rho,t)`, `rho=|y-x|`, `K(0,t) != 0`. Label the odd-dimensional picture as dependence on an open neighbourhood of the sphere, not pointwise data on the sphere. Evidence: [tile 1](screenshots/thm-support-dichotomy-for-free-wave-fundamental-solutions--01.png), [tile 2](screenshots/thm-support-dichotomy-for-free-wave-fundamental-solutions--02.png).
- **`lem-dunford-contour-construction-satisfies-the-semigroup-law`, lines 51, 61, 63, 65, 69:** sketch the sector and a truncated keyhole contour, then show the nested `Gamma_1`, `Gamma_2` with `theta_1<theta_2`, `r_2<r_1`; mark the pole positions inside/outside the corresponding limiting interiors used by the two inner-integral evaluations. The source explicitly relies on this nesting and winding geometry. Follow the contour convention of the cited definition. Evidence: [tile 1](screenshots/lem-dunford-contour-construction-satisfies-the-semigroup-law--01.png), [tile 2](screenshots/lem-dunford-contour-construction-satisfies-the-semigroup-law--02.png), [tile 3](screenshots/lem-dunford-contour-construction-satisfies-the-semigroup-law--03.png).

Full per-item and per-tile coverage, exact tile hashes and dimensions, title observations, and diagram-check details are in [lane-05.json](lane-05.json).

## Limits

This review is limited to frozen local Markdown, local HTML previews, and captured screenshot assets. No application, item, build, test, publication, or workflow state was modified.
