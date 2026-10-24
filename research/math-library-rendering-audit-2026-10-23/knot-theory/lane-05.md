# Knot Theory visual audit — lane 05

## Scope and coverage

Reviewed all 94 assigned frozen titles and complete ItemBodies, their local HTML, and all 190 assigned screenshot tiles individually at original resolution. Source, frozen snapshot, HTML, screenshot receipt, and PNG hashes match the assignment/capture records; no items or tiles remain unreviewed. Per-item hashes and tile coverage are in [lane-05.json](lane-05.json).

## Confirmed rendering findings

- **`cex-knot-kt-14-boundary-case`**, line 86: the empty surgery diagram and +1-framed unknot figure show literal TikZ source. [Tile 02](screenshots/cex-knot-kt-14-boundary-case--02.png)
- **`def-generic-movie-of-an-oriented-knot-cobordism`**, line 64: a red diagram-failure box replaces the merge-saddle schematic. [Tile 01](screenshots/def-generic-movie-of-an-oriented-knot-cobordism--01.png)
- **`def-epsilon-from-filtered-knot-floer-complex`**, line 47: the three-case epsilon display collides with the explanatory sentence immediately after it. [Tile 01](screenshots/def-epsilon-from-filtered-knot-floer-complex--01.png)
- **`def-knot-floer-cobordism-map`**, line 45: the nested triangle-count formula is compressed and crowded enough that its summation conditions are difficult to distinguish. [Tile 01](screenshots/def-knot-floer-cobordism-map--01.png)
- **`def-kauffman-bracket-smoothing-and-loop-value`**, line 61: labels and weights overlap the smoothing drawings. [Tile 01](screenshots/def-kauffman-bracket-smoothing-and-loop-value--01.png)
- **`lem-cyclic-cover-linking-form-inverse-matrix`**, line 91: a red diagram-failure box replaces the forward/reverse surgery arrows. [Tile 03](screenshots/lem-cyclic-cover-linking-form-inverse-matrix--03.png)
- **`lem-integral-seifert-form-is-realized-by-a-knot`**, line 89: the clasp figure shows literal TikZ source. [Tile 02](screenshots/lem-integral-seifert-form-is-realized-by-a-knot--02.png), [tile 03](screenshots/lem-integral-seifert-form-is-realized-by-a-knot--03.png)

## Potential diagram addition

- **`def-rack-fundamental-quandle-and-adjoint-group`**, lines 45–49 and 59–60: an optional crossing chart could label source under-arc `u`, target under-arc `v`, and overarc `o`, with the relation `x_v = x_u * x_o` and the inverse-operation convention when traversal is reversed. [Tile 01](screenshots/def-rack-fundamental-quandle-and-adjoint-group--01.png)

The other existing diagrams were checked against their captions and local orientation/map conventions; correct diagrams are not listed as defects. No separate clipping or literal ASCII caret/underscore math defect was confirmed. Reference-title links rendering as blocks and uppercase technique banners are expected. This review made no item, application, build, or publication-status changes.
