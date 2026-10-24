# Computability Theory rendering audit — lane 02

Reviewed all 88 assigned items and all 105 revision-2 screenshot tiles individually at original resolution. Frozen snapshot bodies matched the current item bodies for every assignment. Assignment source hashes, captured HTML hashes, and screenshot tile hashes all matched their local files.

## Findings

1. **cex-sigma-n-and-pi-n-are-disjoint** — Title (source line 4, confirmed). The title displays Sigma_n^0 and Pi_n^0 with literal underscores and carets; the set symbols render properly in the Statement. Repair: Use renderer-supported inline math in the title or spell the hierarchy names out. Screenshot: `screenshots/cex-sigma-n-and-pi-n-are-disjoint--01.png`.
2. **ex-many-one-reductions-transfer-decidability-and-recognizability** — Title (source line 4, confirmed). The title displays A_TM <=m as raw ASCII rather than a subscripted machine language and many-one reduction symbol. Repair: Use inline math for A_{TM} and the many-one reduction notation, or phrase the title without symbolic shorthand. Screenshot: `screenshots/ex-many-one-reductions-transfer-decidability-and-recognizability--01.png`.
3. **ex-time-bounds-imply-space-bounds** — Title (source line 4, confirmed). The title displays both n^2 expressions with a literal caret. Repair: Use inline math for the quadratic bounds or spell out “quadratic time” and “quadratic space”. Screenshot: `screenshots/ex-time-bounds-imply-space-bounds--01.png`.

The reference titles render as readable titles. Their links intentionally occupy block lines, so adjacent punctuation can appear on its own line; this occurred in multiple bodies and was not counted as a reference-title leak. Technique banners are CSS uppercase labels; no raw math inside a technique banner was found. No clipping was found: tiles that meet mid-body were individually opened at original resolution and their continuation/overlap was present in the neighboring tile.

## Diagram review

The lane has no existing TikZ diagrams (capture metadata reports zero TikZ, zero diagram failures, and zero KaTeX errors). Therefore, existing diagram maps, orientations, indices, and signs are not applicable. No diagram defect was confirmed. One optional candidate is listed below; it is explanatory rather than required.

- **thm-directed-reduces-to-undirected-hamiltonian-cycle** — source lines 45, 47, 49, and 51 describe a directed-to-undirected Hamiltonian-cycle gadget reduction. A schematic could show each path `v_1—v_2—v_3`, each directed arc `(u,v)` mapped to the target edge `u_3—v_1`, and the induced cycle order. The center vertex has degree two and the cross-edge endpoint order encodes direction. This is an uncertain optional aid, not a confirmed defect. Local screenshot: `screenshots/thm-directed-reduces-to-undirected-hamiltonian-cycle--01.png (proof steps 1.1–3.1; currently text-only).`.

## Coverage and limitations

- Coverage: 88/88 items and 105/105 screenshot tiles reviewed; no unreviewed items or tiles.
- Source SHA256: 88/88 match assignment. Frozen ItemBody: 88/88 byte-identical to current source ItemBody. HTML SHA256: 88/88 match assignment. Tile SHA256: 105/105 match capture manifests.
- Every coverage row in `lane-02.json` records item source, frozen snapshot, HTML, and every screenshot tile path with expected and observed SHA256 values.
- All assigned items are published; no Scratch item or open item is in this assignment. The local captures show the item title and body, not workflow status controls.
- No HTTP/live-site access or rendering/build/test commands were used. Only the two lane-02 report files were written.
