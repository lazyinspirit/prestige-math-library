# Knot Theory visual audit — lane 04

## Scope and coverage

The assignment contains 95 items and 192 screenshot tiles. I reviewed every frozen snapshot and local HTML item in the assignment, including the displayed title and full ItemBody, and opened every assigned PNG individually at original resolution with `view_image`. The JSON records each assignment/source/snapshot/HTML/capture hash, every tile hash and resolution, and its receipt match. All 95 source, snapshot, and HTML bindings match the assignment; all 192 image hashes match their local capture receipts.

Review stayed within the frozen local snapshot and local HTML. No live route, external image, publication status, or item source was changed; no build, test, or gate was run. Findings below are limited to displayed render defects. Plain L2/H1 typography, intended uppercase technique banners, source-authored IDs, block-rendered links, and punctuation wrapping are not defects.

## Confirmed rendering defects

### `cex-knot-kt-43-boundary-case` — lines 66–84

- **Kind:** failed TikZ render.
- **Visual evidence:** [`cex-knot-kt-43-boundary-case--01.png`](screenshots/cex-knot-kt-43-boundary-case--01.png), SHA256 recorded in [lane-04.json](lane-04.json), opened at original resolution.
- **Finding:** The diagram description and TikZ specify two punctured Poincaré summands, a separating connected-sum sphere, and an unknot in a ball in the left summand. The local HTML shows a red “diagram failed to render” box in place of the figure.
- **Repair direction:** Correct the TikZ render failure while preserving the two summand boxes, separating sphere, and unknot location.

### `ex-knot-kt-07-worked-cases` — lines 124–152

- **Kind:** literal TikZ source leak.
- **Visual evidence:** [`ex-knot-kt-07-worked-cases--03.png`](screenshots/ex-knot-kt-07-worked-cases--03.png) and [`ex-knot-kt-07-worked-cases--04.png`](screenshots/ex-knot-kt-07-worked-cases--04.png), tile hashes recorded in [lane-04.json](lane-04.json), opened at original resolution.
- **Finding:** The Diagram section prints the `tikzpicture` source literally. The snapshot uses a tilde-delimited `~~~tikz` fence. The intended panels distinguish the positive-positive trefoil Hopf-band plumbing from the positive-negative figure-eight plumbing and label the core intersection as +1.
- **Repair direction:** Use a supported TikZ fence and verify both panels, band labels, signs, and intersection label render.

### `lem-link-diagram-upper-region-free-meridians` — lines 92–109

- **Kind:** literal TikZ source leak.
- **Visual evidence:** [`lem-link-diagram-upper-region-free-meridians--02.png`](screenshots/lem-link-diagram-upper-region-free-meridians--02.png), SHA256 recorded in [lane-04.json](lane-04.json), opened at original resolution.
- **Finding:** The Remarks section prints the `tikzpicture` source literally. The snapshot uses a tilde-delimited `~~~tikz` fence. Its description and source specify one strand, a sheet below it, side collars, and the level sphere.
- **Repair direction:** Use a supported TikZ fence and verify the strand, sheet, collars, and level sphere render.

### `lem-seifert-cut-open-cover-alexander-module-presentation` — lines 113–128

- **Kind:** failed TikZ render.
- **Visual evidence:** [`lem-seifert-cut-open-cover-alexander-module-presentation--03.png`](screenshots/lem-seifert-cut-open-cover-alexander-module-presentation--03.png), SHA256 recorded in [lane-04.json](lane-04.json), opened at original resolution.
- **Finding:** The seam/stack diagram is replaced by a red “diagram failed to render” box. The text and diagram source specify adjacent copies `Y_n` and `Y_{n+1}`, the shared `S_-` / `S_+` seam, and the positive-meridian deck map `t`.
- **Repair direction:** Correct the TikZ render failure while preserving the adjacent-copy seam and positive-meridian arrow.

### `thm-knot-slice-iff-zero-trace-embeds-in-s-four` — lines 95–123

- **Kind:** literal TikZ source leak.
- **Visual evidence:** [`thm-knot-slice-iff-zero-trace-embeds-in-s-four--02.png`](screenshots/thm-knot-slice-iff-zero-trace-embeds-in-s-four--02.png) and [`thm-knot-slice-iff-zero-trace-embeds-in-s-four--03.png`](screenshots/thm-knot-slice-iff-zero-trace-embeds-in-s-four--03.png), tile hashes recorded in [lane-04.json](lane-04.json), opened at original resolution.
- **Finding:** The Diagram section emits the three-stage cone-disk / 2-handle-core / slice-disk TikZ source as literal text. The snapshot uses a tilde-delimited `~~~tikz` fence.
- **Repair direction:** Use a supported TikZ fence and verify the three construction stages and their boundary labels render.

### `def-kauffman-bracket-skein-module-of-a-three-manifold` — lines 47–75

- **Kind:** diagram-label overlap.
- **Visual evidence:** [`def-kauffman-bracket-skein-module-of-a-three-manifold--01.png`](screenshots/def-kauffman-bracket-skein-module-of-a-three-manifold--01.png), SHA256 recorded in [lane-04.json](lane-04.json), opened at original resolution.
- **Finding:** The labels beneath the crossing, A-smoothing, and B-smoothing crowd and overlap one another, obscuring the labels and weights that identify the three local skein diagrams.
- **Repair direction:** Increase panel spacing or reposition labels so each tangle and its weight can be read independently.

### `ex-knot-kt-17-worked-cases` — lines 57–85

- **Kind:** diagram-label overlap.
- **Visual evidence:** [`ex-knot-kt-17-worked-cases--01.png`](screenshots/ex-knot-kt-17-worked-cases--01.png), SHA256 recorded in [lane-04.json](lane-04.json), opened at original resolution.
- **Finding:** Labels in the two-panel cable and JSJ schematic overlap one another and the panel content, obscuring slope annotations and boundary labels described in the item.
- **Repair direction:** Give the panels more room and separate the slope, boundary, and piece labels while retaining the `(2,1)` lift and companion-torus cut data.

### `lem-signature-additivity-under-gluing` — lines 41–46

- **Kind:** literal ASCII math leak.
- **Visual evidence:** [`lem-signature-additivity-under-gluing--01.png`](screenshots/lem-signature-additivity-under-gluing--01.png), SHA256 recorded in [lane-04.json](lane-04.json), opened at original resolution.
- **Finding:** Both displayed signature equalities appear as ordinary ASCII text (`sign(X)=...` and `sign_Γ^(2)(X)=...`), exposing the underscore and caret syntax rather than typeset notation.
- **Repair direction:** Wrap the equalities in math delimiters and typeset the ordinary and L² signature notation.

## Existing diagram checks

The positive type-I kink picture in `cex-knot-kt-03-boundary-case` shows the added curl and crossing-free unknot used by its text. In `def-kauffman-bracket-skein-module-of-a-three-manifold`, the visible arcs pair the endpoints as described: A-smoothing joins left-to-left and right-to-right; B-smoothing joins top-to-top and bottom-to-bottom. Its defect is the overlapping labels, not the depicted pairings. Other diagrams that rendered legibly in the reviewed tiles were consistent with their stated maps, labels, and geometric roles. Failed or literal-source figures are recorded above as render defects, not mathematical diagram errors.

No source-supported missing-diagram candidate was identified from the complete assigned snapshot and render review. Diagrams already present, including the failed or crowded ones above, are recorded as coverage and defects rather than as missing-figure candidates.
