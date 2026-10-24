# Group Theory rendering audit — lane 03

Reviewed all 98 assigned items and all 115 listed screenshot tiles individually at original resolution. Every source hash matches `assignment-03.json`; each frozen snapshot is byte-identical to its current source; all rendered HTML and PNG tile hashes match their manifests. Per-item and per-tile SHA-256 values and exact coverage are recorded in `lane-03.json`.

Confirmed rendering findings: 2. Both are source-formatting defects. No independent text or formula clipping was confirmed from the original tiles; multi-tile boundaries are continuations. CSS uppercase technique banners and block-line wikilinks appear as expected.

## Confirmed findings

### `ex-a-three-shell-after-arc-reduction`

- Section: Diagram; source lines 45–47.
- Kind: Malformed TikZ block.
- The `tikz` fence and `\begin{tikzpicture}` share the same source line, so the tile prints the code literally under DIAGRAM instead of drawing it.
- Mathematical check: perimeter 19 with three internal arcs of length 3 leaves exterior length 10. The code's labels (10, 3, 3, 3) agree with that calculation. No diagram orientation or label error was found.
- Screenshot: `screenshots/ex-a-three-shell-after-arc-reduction--01.png`.
- Repair: move `\begin{tikzpicture}` to its own line after the fence opener.

### `def-schur-multiplier-of-a-group`

- Section: Definition; source line 26.
- Kind: Raw ASCII formula.
- The screenshot renders `M(G)=H_2(G;Z), not H²(G,C×)` as plain text, leaving the underscore and ASCII notation untypeset.
- Mathematical check: the intended distinction is homology `H_2(G; Z)` versus cohomology `H^2(G; C×)`; no index or sign ambiguity was detected.
- Screenshot: `screenshots/def-schur-multiplier-of-a-group--01.png`.
- Repair: put the two formulas in inline math delimiters.

## Optional diagram candidates

These are source-supported explanation ideas, not mathematical defects.

- `ex-the-infinite-dihedral-group-is-quasi-isometric-to-the-integers`, lines 58–62: show the two-sided path and two-sided ladder Cayley graphs side by side, with the projection `(n, ε) ↦ n`. The text already asserts these graph shapes and the quasi-isometry conclusion. The current proof is consistent; a drawing could make the bounded-fibre comparison concrete. Evidence: the two original tiles listed in `lane-03.json`.
- `thm-transitive-imprimitive-groups-embed-in-an-imprimitive-wreath-product`, lines 33–46, 54, 60–64: show the block-coordinate bijection `Ψ(b,C)=t_C·b` and the action-intertwining identity. Preserve the wreath action's `f(k·C)` convention and the inverse block index in `f_g(C)`. The map directions and indices in the source agree, so this is optional explanatory support. Evidence: its original tile listed in `lane-03.json`.

## Diagram checks and limits

The three-shell item is the only assigned item containing intentional TikZ source. It fails to render as described above. The screenshot manifest did not recognize that malformed fence (`tikz_count: 0`), so I compared the raw source directly with the original tile. No other valid rendered TikZ diagrams were present in this lane. No HTTP/live website, build, renderer, or broad mathematical argument audit was performed.
