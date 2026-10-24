# Hopf Algebras & Hecke Algebras visual audit — lane 07

Reviewed all 23 assigned items and all 41 revision-2 screenshot tiles at original resolution. Each rendered title and complete ItemBody was inspected against its frozen source snapshot and local HTML. No production HTTP(S) or live site was accessed.

## Findings

One confirmed rendering failure: `thm-quasi-bialgebra-modules-form-a-monoidal-category`, source lines 40–53. Its pentagon diagram is replaced by a red failure block showing raw TikZ-cd source. The textual proof states the two pentagon operator products (line 87) and triangle relation (line 89); because the diagram did not render, its arrow geometry and labels could not be visually checked.

No literal ASCII math/caret/underscore leakage, KaTeX errors, Scratch text, reference-title leakage, or standalone-image clipping was found in the other reviewed items. Internal links displayed as blocks and isolated punctuation were treated as the renderer’s intentional link presentation. The uppercase technique labels are also intentional.

## Optional diagram candidate

`lem-hh-colored-permutation-rsk-and-tableau-square-count`, lines 24, 40–42: a colored RSK schematic could route positions `i` with values `σ(i)` and colors `κ_i` into componentwise insertion tableaux `P^(c)` and recording tableaux `Q^(c)`, then show descending reverse deletion recovering the same data. Label the common multipartition shape and the count `Σ_λ(f^λ)^2 = r^n n!`. The proof already gives the bijection, so this would be explanatory.

## Coverage

Per-item source hashes, complete-body coverage, screenshot paths, hashes, offsets, and dimensions are recorded in `lane-07.json`. All 41 listed PNG tiles were opened individually with original-resolution detail.
