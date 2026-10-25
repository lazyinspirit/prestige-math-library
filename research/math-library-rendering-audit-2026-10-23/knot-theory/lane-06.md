# Knot Theory visual audit — lane 06

## Scope and coverage

The assignment contains 94 items and 173 screenshot tiles. The assignment SHA256 is recorded in [lane-06.json](lane-06.json). Current source and frozen snapshot hashes match the assignment, local HTML hashes match the assignment, and all 173 PNG hashes match their local capture receipts. The JSON records each item’s source, snapshot and HTML hashes, each tile’s hash and resolution, receipt match, and whether I opened it through `view_image` individually at original resolution.

I opened all 173 assigned PNGs at original resolution, covering all 94 assigned items. Findings below are limited to the local screenshots and frozen source snapshots. No live website, HTTP(S) sources, publication status or production route was checked or changed. I did not run builds, tests or gates.

## Confirmed rendering defects

### `ex-knot-kt-19-worked-cases` — lines 59–69

- **Kind:** failed TikZ render.
- **Source/snapshot SHA256:** `079302e47d12ac0037cc2d95909fe860b61c8a5b3cbea75ead1f474b8088eb15` (identical).
- **Visual evidence:** [`ex-knot-kt-19-worked-cases--01.png`](screenshots/ex-knot-kt-19-worked-cases--01.png), SHA256 `c8593598bf5c417ffb7c1e4f0aa60c02c8db6f94c91be68126df4a26f6bdefba`, 1200×1400, opened at original resolution.
- **Finding:** The figure-eight zero-filling diagram is replaced by a red “diagram failed to render” block. The source diagram describes the capped torus fiber, opposite-edge identifications, monodromy matrix and separate base circle.
- **Repair direction:** Adjust the TikZ construct to supported renderer syntax while preserving those labels and relations.

### `lem-kontsevich-braid-and-knot-isotopy-invariance` — lines 55–66

- **Kind:** failed TikZ render.
- **Source/snapshot SHA256:** `1b05217eb9acc47074bf67fc26e8365582afc09414e3ed1331a50f3c6fe385c2` (identical).
- **Visual evidence:** [`lem-kontsevich-braid-and-knot-isotopy-invariance--01.png`](screenshots/lem-kontsevich-braid-and-knot-isotopy-invariance--01.png), SHA256 `14ca708fb72441744aa555e4a61eb5f5e193a2d07d55be3bf44e5cfbfe4b0900`, 1200×1400, opened at original resolution.
- **Finding:** The horizontal-deformation figure is replaced by a red “diagram failed to render” block. The axes, initial and final arcs, fixed critical levels, and deformation label are present in the source.
- **Repair direction:** Use locally supported TikZ syntax and preserve the source’s deformation data.

### `ex-knot-kt-49-worked-cases` — lines 44–57

- **Kind:** TikZ source rendered literally.
- **Source/snapshot SHA256:** `d0004dc200606e1c05ca53d07af06e1b1ee76d920a37b1bc275de691df3432ea` (identical).
- **Visual evidence:** [`ex-knot-kt-49-worked-cases--01.png`](screenshots/ex-knot-kt-49-worked-cases--01.png), opened at original resolution.
- **Finding:** The Diagram section prints its TikZ commands literally. The snapshot uses a tilde fence (`~~~tikz`), which the local renderer does not parse as a diagram fence. The schematic is supported by the surrounding text: it depicts the staircase subdivision of a triangular prism, the dashed diagonals, and the red midpoint disk.
- **Repair direction:** Use the supported triple-backtick TikZ fence and preserve the tetrahedron and disk labels.

### `lem-ideal-orthoscheme-volume` — lines 50–68

- **Kind:** TikZ source rendered literally.
- **Source/snapshot SHA256:** `7226ee41e818bcfe01c8f1e9058e504f56e457a1ca0623950fa1cd355ce92b63` (identical).
- **Visual evidence:** [`lem-ideal-orthoscheme-volume--01.png`](screenshots/lem-ideal-orthoscheme-volume--01.png), opened at original resolution.
- **Finding:** The Diagram section prints the `center` and `tikzpicture` environments and commands rather than drawing the shaded projection.
- **Repair direction:** Put the existing picture in the supported diagram fence and remove unsupported wrappers if required. Keep the points O, A, B, the unit-circle arc, and the angle label.

### `def-zero-surgery-on-a-knot` — line 41

- **Kind:** literal ASCII math notation in prose.
- **Source/snapshot SHA256:** recorded in [lane-06.json](lane-06.json) (identical).
- **Visual evidence:** [`def-zero-surgery-on-a-knot--01.png`](screenshots/def-zero-surgery-on-a-knot--01.png), opened at original resolution.
- **Finding:** The definition is written as ordinary prose, so symbolic expressions such as `E_K`, `mu_K`, `lambda_K`, `D²×S¹`, `M(K)` and the boundary maps appear as raw or unformatted notation.
- **Repair direction:** Mark the mathematical expressions and assignments as inline math.

### `lem-alexander-one-knot-has-trivial-alexander-basis` — lines 82–86

- **Kind:** literal ASCII math notation in proof prose.
- **Source/snapshot SHA256:** recorded in [lane-06.json](lane-06.json) (identical).
- **Visual evidence:** [`lem-alexander-one-knot-has-trivial-alexander-basis--01.png`](screenshots/lem-alexander-one-knot-has-trivial-alexander-basis--01.png), opened at original resolution.
- **Finding:** Expressions including `omega(a_i,b_j)=delta_ij`, `T_v(z)=z+omega(z,v)v`, indexed vectors, and matrix operations are emitted as ordinary text with raw underscores and operators.
- **Repair direction:** Typeset the formulas in the affected proof steps while retaining their prose explanations.

### `thm-framed-knot-surgery-trace-boundary` — lines 79–88

- **Kind:** diagram label overlap.
- **Source/snapshot SHA256:** `b4f26fcf40754de4a3144500832b92843f268290b9d1cf30c29484a013f952ea` (identical).
- **Visual evidence:** [`thm-framed-knot-surgery-trace-boundary--02.png`](screenshots/thm-framed-knot-surgery-trace-boundary--02.png), SHA256 `938478ac6ecac036a3f954ef7aaebd0e4ef6807faf840102749f178f59d8da2b`, 1200×492, opened at original resolution.
- **Finding:** In the rendered boundary-decomposition schematic, the dashed transition captions overlap the arrows and the row captions. This makes the two stages difficult to distinguish; the boxes and slope text remain visible.
- **Repair direction:** Increase separation between the rows and move the transition captions into clear whitespace. Preserve `E_K`, `N(K)`, `D²×S¹`, the attaching torus and the meridian slope `n mu + lambda`.

## Source-supported missing-diagram candidates

These are editorial candidates supported by the definitions, not confirmed defects or mathematical errors.

- **`alg-enumerate-diagrams-up-to-crossing-bound`, lines 55–65.** A planar rotation-system enumeration schematic could show a crossing labelled `c` with four cyclically ordered darts, sign-selected incoming/outgoing positions, edge involution `alpha`, clockwise rotation `sigma`, cycles of `phi = alpha composed with sigma`, and the selected outer face. This would illustrate the exact code data enumerated by the procedure.
- **`alg-reidemeister-move-neighbors-from-code`, lines 45–49.** A local move-disk certificate schematic could show cyclically ordered cut points, noncrossing face arcs forming the candidate disk boundary, the outer-face point at infinity, one oriented/sign-labelled R1, R2 or R3 template, and the outside-code isomorphism fixing the boundary decorations.

## Displayed diagram checks

The isolated one-chord diagram in `cex-knot-kt-35-boundary-case` matches the stated one-chord generator and supports the 1T quotient discussion. The oriented-slope lattice picture displays the stated primitive displacement and basis directions. No other confirmed mathematical mismatch in an actually viewed diagram was recorded. The two failed figures and two literal TikZ blocks above are rendering defects; no production-rendering conclusion is made.

The exact item and per-tile inventory is in [lane-06.json](lane-06.json). All assigned tiles were opened individually; the JSON records the complete viewed set and exact per-item/per-tile hashes.
