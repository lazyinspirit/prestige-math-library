# Algebraic Geometry visual audit — lane 05

Reviewed all 111 assigned items and all 238 revision-2 screenshot tiles at original resolution. Each rendered title and complete item body was inspected, including available sections, proof steps, facts, remarks/source notes, internal reference titles, and any TikZ content. No TikZ tiles were listed for this lane. The per-item coverage and exact screenshot paths are in `lane-05.json`.

## Findings

Four items have confirmed rendering defects: two proof-technique fields expose raw LaTeX and differ from their frozen snapshot text; two rendered titles/reference titles expose literal underscore subscripts. The exact frozen source lines, excerpts, screenshots, and repair suggestions are recorded in the JSON evidence.

- `lem-euler-characteristic-finite-support-twist-invariance`: raw LaTeX in the rendered proof technique; screenshot `--03`.
- `lem-positive-square-divisor-has-effective-multiple`: raw LaTeX in the rendered proof technique; screenshots `--01` and `--02`.
- `lem-upper-unitriangular-central-series`: literal `U_n` in the title and linked definition title; screenshot `--01`.
- `cex-lie-root-system-does-not-record-full-root-datum`: literal `SL_2` in a linked title; screenshot `--01`.

## Coverage verification

Coverage IDs equal the lane assignment, every screenshot manifest is revision 2, all manifest PNG paths exist, and every listed tile was opened with `detail: original`.
