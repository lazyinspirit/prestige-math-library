# Mathematical Statistics — lane 02 rendering review

## Scope and result

Read-only review of the 49 assigned frozen snapshots and their local HTML previews. Opened each of the 76 assigned PNG tiles individually at original resolution. Snapshot and HTML SHA256 values match the assignment inventory. Per-item source, HTML, and tile hashes are recorded in `lane-02.json`.

No confirmed rendering defects were found. Across the reviewed cards, formulas render through KaTeX; no literal source math delimiters, raw caret/underscore math, Scratch placeholders, or reference-title leaks were observed. Section titles and full ItemBody content were checked. Reference links appear as block links as intended; punctuation wrapping and source-authored inline-code IDs were not classified as defects. No TikZ diagrams or standalone embedded images occur in this lane; consequently, no image clipping finding applies. The SVGs in local HTML are KaTeX glyph output, not authored diagrams.

## Candidate diagrams

These are optional editorial ideas supported by the frozen source, not confirmed defects.

- **`ex-b-spline-basis-and-polynomial-reproduction`, lines 43–47:** Plot the three quadratic basis functions on `[0,1]`, label the endpoints and midpoint, and check nonnegativity and partition of unity.
- **`lem-adaptive-covariance-lepski-scale-reduction`, lines 33–40, 53–54, 60–62, 68–70:** Show the dyadic scales, `sigma_0`, the first eligible index, the agreement tolerance, and the selected smallest admissible index. Check the exact `ceil(L_g)` grid count and `j* <= bar-j` conclusion.
- **`lem-sparse-hamming-packing`, lines 52–64, 84–86, 96:** Show two codewords with one selected coordinate in each of `k` blocks of size `m`; highlight `s` differing blocks and the resulting `2s` differing binary coordinates. Mark `s > r` and `k < 4(r+1)`, which give squared distance `2s > k/2`, and show zero padding to dimension `d`.

The JSON report contains exact per-item paths and hashes, exact per-tile paths, offsets, heights, hashes, and the complete reviewed coverage inventory.
