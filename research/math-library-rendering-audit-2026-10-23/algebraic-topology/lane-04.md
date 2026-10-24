# Algebraic Topology rendering audit — lane 04

Reviewed all 92 assigned items and every listed revision-2 screenshot tile (155 tiles) at original resolution. Titles and complete rendered ItemBody sections were checked, including linked reference titles. No TikZ tiles were present in this assignment.

## Findings

- **thm-finite-generation-cohomological-uct-gives-integral-cone-comparison — Statement, snapshot line 40.** The statement’s mathematical notation is visible as ordinary text, including `H_i(C)`, `Hom_Z`, and `f*`; wrap these expressions in inline math delimiters. Evidence: `screenshots/thm-finite-generation-cohomological-uct-gives-integral-cone-comparison--01.png`.

- **thm-finite-generation-cohomological-uct-gives-integral-cone-comparison — Proof, snapshot lines 56, 58, and 60.** The same untypeset notation appears throughout the proof, including `Hom(H_i(C),Q)`, `H^i(Hom(C_f,F))`, and `f_*`; wrap the mathematical expressions in inline math delimiters. Evidence: both `screenshots/thm-finite-generation-cohomological-uct-gives-integral-cone-comparison--01.png` and `screenshots/thm-finite-generation-cohomological-uct-gives-integral-cone-comparison--02.png`.

## Coverage

All other assigned items were visually clean in the reviewed revision-2 tiles. Coverage rows and exact tile paths are recorded in `lane-04.json`.
