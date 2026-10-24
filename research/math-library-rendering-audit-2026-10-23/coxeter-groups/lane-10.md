# Coxeter Groups rendering audit — lane 10

Reviewed **35 assigned items** and opened all **96 screenshot tiles** individually with original resolution. Frozen source, snapshot and HTML hashes matched every assignment entry; all tile SHA256 values matched capture metadata. All 35 capture records report zero KaTeX errors, zero TikZ diagrams and no diagram failures.

## Confirmed rendering findings

- **ex-cg-reflection-subgroups-parabolic-and-not**, source line 101: CSS-uppercase Proof technique banner shows raw `$S_4$` instead of typesetting the formula. Evidence: `screenshots/ex-cg-reflection-subgroups-parabolic-and-not--02.png`.
- **ex-hh-minimal-representatives-for-s2-in-s3**, source line 59: the banner exposes raw `$W$` and `$J=\{s_1\}$`. Evidence: `screenshots/ex-hh-minimal-representatives-for-s2-in-s3--02.png`.
- **thm-cg-double-coset-unique-minimum-and-normal-form**, source line 107: the banner exposes raw `$W_I$`, `$W_J$`, and `$W_K$`. Evidence: `screenshots/thm-cg-double-coset-unique-minimum-and-normal-form--02.png`.

These are the only confirmed defects. Other mathematical notation rendered in KaTeX. There were no reference-title leaks or Scratch content. Wiki links display as separate block lines, sometimes leaving punctuation on the next line; that is expected behavior. I found no clipping in standalone original-resolution images; some long items continue at adjacent tile boundaries.

## Diagram review

No assigned item contains an existing TikZ/tikzcd diagram, so there were no diagram maps, orientations, indices, or signs to validate and no questionable existing diagram math. Inline formulas and matrices were visually checked.

Source-supported diagram candidates (not rendering defects):

- **ex-cg-heap-of-one-three-two-in-a3** — a labeled V-shaped heap with cover edges 1→3 and 2→3, plus optional five-element order-ideal lattice. Source lines 39, 43, 45. Evidence: `screenshots/ex-cg-heap-of-one-three-two-in-a3--01.png`.
- **ex-cg-chamber-face-stabilizers-in-a2** — the three root lines $x_s=0$, $x_t=0$, $x_s+x_t=0$, six sectors, wall stabilizers and orbit of $(0,1)$. Source lines 34–44. Evidence: `screenshots/ex-cg-chamber-face-stabilizers-in-a2--01.png` and `--03.png`.
- **lem-cg-affine-diagram-enumeration** — schematics for the listed affine graph families and low-rank aliases. Source lines 59–61, with the A-tilde examples at line 71. Evidence: `screenshots/lem-cg-affine-diagram-enumeration--01.png` and `--06.png`.

The JSON report records exact assignment/source/snapshot/HTML hashes and all 96 tile paths, hashes, crop coordinates, and review status. It also records line-specific findings and diagram candidate content.
