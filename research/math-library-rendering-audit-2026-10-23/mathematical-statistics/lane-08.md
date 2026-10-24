# Mathematical Statistics rendering audit — lane 08

Reviewed all 48 assigned items and all 76 screenshot tiles. Every title and full frozen ItemBody was reviewed. Frozen source snapshots, current item sources, local HTML files, and screenshot bytes match their assignment or screenshot manifest SHA-256 values; exact per-item and per-tile hashes are recorded in `lane-08.json`.
Every assigned PNG was opened individually with `tools.view_image` at original resolution. The item tiles show rendered text and KaTeX; local capture metadata reports no KaTeX errors or diagram failures. No assigned item contains a TikZ diagram.

## Findings

No confirmed rendering defects or existing diagram errors. No literal ASCII math, caret or underscore leakage, raw TeX/TikZ, Scratch text, reference-title leak, or standalone-image clipping was found. Continuation tiles account for content cut at tile boundaries. Reference links rendering as blocks and uppercase technique banners are intentional.

## Editorial diagram candidate

- **alg-split-conformal-prediction-set** — frozen snapshot lines 30–48. Optional algorithm flow diagram: training statistic `H` → score rule `s_H`; calibration examples `Z_i` → scores `R_i` → ordered keys `(R_i,i)` → threshold `q` (or `+∞`); candidate `(x,y)` → score comparison `s_H(x,y) ≤ q` → `C(x)`. An optional branch shows shared independent `U` → tie-randomized rank `p_U(y)` → `p_U(y) > α` → `C_U(x)`. Preserve fixed-index tie-breaking, candidate inclusion in its tie group, and the single shared randomizer. The source fully states these relations; this is an editorial aid, not a defect.

No item content, publication state, build, test, gate, route, or external source was changed or checked.
