# Scheme Theory rendering audit — lane 09

Reviewed all 109 assigned items and all 257 screenshot tiles individually with `tools.view_image` at original resolution. Titles and complete ItemBody content were checked against the matching frozen local HTML and source snapshots. The JSON records the title, page placements, source/snapshot/HTML hashes, screenshot metadata, and SHA-256 for every tile. All source, snapshot, HTML, and tile hashes match the assignment/capture records; no source or snapshot drift was found.

## Confirmed rendering findings

- **cor-riemann-theorem-large-degree**, Proof technique line 70: inline math such as `$h^1$` and `$D_0+nA+E$` is printed literally in the technique banner. The individual original tile `screenshots/cor-riemann-theorem-large-degree--02.png` (SHA-256 `8768ca724329f037d374903368d667a69dd1f9b46c99b9d69a7f8832d51befdb`) shows the raw delimiters. The same behavior appears in several assigned proof-technique entries; representative source lines are recorded in the JSON.
- **thm-projective-map-line-bundle-data-equivalence**, proof conclusion line 90: the final `\qed` command is printed literally. The same leak occurs at line 56 of **ex-proj-quotient-projective-hypersurface** and line 82 of **lem-projective-space-saturation-local-criterion**. The original final tile `screenshots/thm-projective-map-line-bundle-data-equivalence--03.png` (SHA-256 `bdda16ca628188e80295f6d36ecd52263b303c1e07a686974555e9ce61a13376`) confirms the visible text.

## Optional title typography

The title of **ex-adding-point-section-dimension-jump** displays `l(D+p) - l(D)` as plain text, while the item body formats its mathematics. This is a typography observation, not a body rendering failure.

## Diagram review

No TikZ or tikzcd diagrams occur among the 109 assigned items, and no high-likelihood missing diagram was identified. Existing sequence and map content was checked for direction and consistency, including the cotangent sequence for schemes, the universal projective-space data maps, and the pullback/pushforward adjunction. The JSON records these checks. No clipping was confirmed; all 257 tiles were inspected individually, including sequential captures of tall bodies.
