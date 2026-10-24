# Group Theory visual audit — lane 07

## Scope and coverage

Reviewed all 97 assigned items and all 118 screenshot tiles. Every tile was opened individually with `tools.view_image` at original resolution. Source, frozen snapshot, rendered HTML, and all screenshot tile SHA-256 hashes match their assignment or screenshot manifests; no drift or unreviewed tiles were found.

The per-item and per-tile hashes, checked sections, findings, diagram candidates, and limitations are recorded in [lane-07.json](lane-07.json). Six confirmed visible notation findings concern raw ASCII math in titles or ItemBody prose. No TikZ source or existing diagram was present in this lane; no clipping, unintended reference-title leaks, or TikZ failures were observed. Wikilink titles render as separate block lines as expected, and uppercase CSS technique banners are expected.

## Confirmed findings

### Raw notation in titles and prose

- **ex-bass-dimension-of-unitriangular-four-by-four-integers**, title line 4: `UT_4(Z)` is displayed literally instead of as matrix-group notation. See `screenshots/ex-bass-dimension-of-unitriangular-four-by-four-integers--01.png`.
- **ex-the-cp-squared-extension-as-a-nonzero-two-cocycle**, title line 4: `C_p^2` is displayed literally with underscore and caret. The example body typesets its extension and cocycle correctly. See `screenshots/ex-the-cp-squared-extension-as-a-nonzero-two-cocycle--01.png`.
- **def-p-adic-integers-as-compatible-residue-classes**, title line 4: `Z mod p^n` leaves the caret and mathematical notation unformatted; the Definition body is typeset correctly. See `screenshots/def-p-adic-integers-as-compatible-residue-classes--01.png`.
- **rem-cyclic-and-alternating-simple-families**, body line 24: `A_n for n≥5` appears as baseline text rather than mathematical notation. See `screenshots/rem-cyclic-and-alternating-simple-families--01.png`.
- **lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings**, Facts & Assumptions lines 32 and 34: `I<=Lm` and `E<=Lm+n` appear as plain ASCII, while the Statement formats related bounds. See `screenshots/lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings--01.png`.
- **lem-weighted-coordinate-boxes-give-matching-growth-bounds**, Statement and Proof lines 27, 43, 45, and 49: comparisons and asymptotic notation such as `a,b>0`, `b>=1`, `O(R^i)`, `K>=1`, and `a=1/K` are left as plain text. See both listed screenshot tiles.

## Diagram review

No existing TikZ diagrams occurred in the assigned items, so there were no existing diagram maps, orientations, indices, or signs to check. Two optional schematic candidates are recorded in the JSON ledger, with source lines, proposed content, local image evidence, and uncertainty: the Schreier-tree path/edge correspondence, and the vertex-disk/edge-band/face-cap construction. Neither is required by the written proof.

## Limitations

These were local Chromium ItemBody previews, not HTTP/live website routes. The review covered visible rendering and diagram opportunities, not a full mathematical audit of each proof. No item, application, build, or publication files were modified.
