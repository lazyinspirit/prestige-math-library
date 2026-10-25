# Numerical PDEs and Spatial Discretization visual audit — lane 07

## Scope and coverage

Reviewed all 114 assigned items and all 163 screenshot tiles. Every PNG was opened individually at original resolution; titles and complete ItemBodies were reviewed across the tile sequence. The frozen source, snapshot, rendered HTML, and receipt-listed tile hashes match the assignments and screenshot manifests. Per-item source and image hashes, section coverage, findings, diagram checks, and limitations are recorded in [lane-07.json](lane-07.json).

Five confirmed rendering defects were found: two unrendered mathematical-notation cases, one literal TikZ block, one failed `tikzcd` diagram, and two KaTeX parse errors. Five existing figures rendered successfully and matched the relationships stated in their accompanying text. One optional geometry-schematic candidate is recorded as uncertain.

## Confirmed findings

- **cex-fixed-neighbor-irregular-derivative-not-consistent**, Facts & Assumptions and Counterexample lines 36–56: formula-heavy definitions and claims are printed as baseline ASCII/TeX, including literal `\partial_x`, underscores, and subscripts. See both listed tiles.
- **ex-na-periodic-taylor-green-vortex**, Example lines 35–44: the center/TikZ picture block is displayed as source text instead of a diagram. See `screenshots/ex-na-periodic-taylor-green-vortex--01.png`.
- **lem-na-piola-divergence-and-flux-identities**, Commuting diagram lines 61–70: the `tikzcd` commuting square is replaced by a red diagram-failure panel and literal source. See `screenshots/lem-na-piola-divergence-and-flux-identities--01.png`.
- **lem-sph-pair-forces-antisymmetric-and-central**, Statement, Facts & Assumptions, and Proof lines 34–50: indexed force/kernel equations are plain baseline text with raw underscores. See `screenshots/lem-sph-pair-forces-antisymmetric-and-central--01.png`.
- **thm-parabolic-theta-scheme-local-truncation-error**, Statement lines 38–48: the PDE and subsequent residual estimates trigger two visible KaTeX parse errors; the expressions and adjacent prose show up as raw TeX. See `screenshots/thm-parabolic-theta-scheme-local-truncation-error--01.png`.

## Diagram review

The successful hybrid-mimetic, periodic interpolation, TPFA, disk-mesh, and three-node periodic-grid figures were checked for labels, indices, orientations, signs, and stated geometric relations. No incorrect relation or label overlap was visible. No content clipping was found in standalone tile views. The failed Piola diagram is not readable as a rendered figure, so its intended commuting relationship was checked against the source description only.

An uncertain optional schematic candidate is recorded for **cex-positive-nurbs-weights-do-not-imply-admissible-patch**: show the unit-square fold at `ξ=1/2`, the Jacobian sign on both sides, and two distinct parameter points with the same image. The written proof already establishes the counterexample algebraically.

## Parser scope and limitations

The four strict YAML blockers in `frontmatter-parse-blockers.json` refer to other category items and are not in this lane. They are distinct from the visual findings; no lane-07 coverage is labeled `recovered-body-preview`.

These are local Chromium ItemBody previews, not HTTP/live-site or production-route checks. The work assesses rendering and diagram opportunities, not a full mathematical proof audit. No item, application, build, or publication files were modified.
