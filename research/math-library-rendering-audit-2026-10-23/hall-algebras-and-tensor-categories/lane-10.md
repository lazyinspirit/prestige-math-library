# Hall Algebras and Tensor Categories rendering audit — lane 10

Reviewed all 25 assigned frozen item bodies and all 46 screenshot tiles individually at original resolution. Exact item and tile coverage, source/snapshot/HTML/tile SHA256 values, tile dimensions, checked sections, and drift status are in `lane-10.json`. No assigned item or tile was unreviewed. All assigned source and snapshot hashes match their frozen assignment item hashes, and all HTML hashes match their assigned HTML hashes. No assigned hash drift or confirmed clipping defect was found. Apparent first-letter clipping in the multi-image display was checked against standalone original tiles; it is not present there. Wiki-link references render as block lines by design.

The existing diagrams were checked against their stated maps and orientations. The A2 quiver arrow is correctly oriented `1 → 2`. In the Toën correspondence, the horizontal `c` map records target and the vertical `s × t` map records source and homotopy cofiber, matching the text. No index or sign mismatch was visible.

## Confirmed rendering findings outside lane 10

These two items were opened because their capture metadata reported rendering failures. The original tiles independently confirm the visible failures:

- **def-monoidal-weak-two-category** — lines 48, 50–53. Its associator pentagon is replaced by a red “diagram failed to render” box containing raw tikzcd source. The standalone original tile is recorded in `lane-10.json` with its SHA256 and dimensions.
- **def-frobenius-object-and-knowledgeable-sewing-data** — lines 46, 59–61, 134–140. The tiles show raw TeX commands and red parse-error text through the colored Frobenius equations; the source diagram code is visible as text rather than a rendered diagram. The two original tiles and their SHA256 values are recorded in `lane-10.json`.

## Optional typography

This source-authored title notation faithfully appears as plain text in the tile; it is separate from a renderer defect.

- **thm-three-cochain-gauge-equivalence-2vect-g** — source line 4. `2Vect_G^omega` is displayed literally with underscore and caret notation, while the body uses typeset `2\mathrm{Vect}^{\omega}_G`. Suggested repair: typeset the title notation as `$2\mathrm{Vect}^{\omega}_G$`.

## Potential missing diagram

This is an optional visual aid supported by explicit source maps; no omission defect is confirmed.

- **lem-quiver-exact-sequence-correspondence-is-smooth-and-proper** — source lines 49–67, 73, 81, 105, 109. A TikZ correspondence span could show `M_a × M_b ← E_{a,b} → M_{a+b}`. Label the left leg `q` as subobject then quotient, with subobject dimension `a`, and the right leg `p` as forgetting the filtration to the total object. The source establishes `q` as smooth and `p` as representable proper. The drawing should remain a span, not a commutative square, and preserve the `a,b` order. Certainty: optional candidate; the maps and their orientation are explicit in the source, with no missing-diagram defect established. The source screenshot evidence is recorded in the JSON.

No HTTP/live website, application or item edits, build, tests, native renderer, publication-status change, or Git operation was performed. This was a rendering and diagram review, not an independent proof audit.
