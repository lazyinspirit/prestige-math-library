# Hecke algebras and categorification visual audit — lane 05

Reviewed all 23 assigned items and all 65 revision-2 screenshot tiles at original resolution. Each rendered title and complete ItemBody was inspected, including references, Scratch-field presence, math, and proof technique banners. No production HTTP(S) or live site was accessed.

## Findings

One confirmed title rendering defect: `ex-degenerate-level-one-hecke-klr-map-for-s3`, line 4, displays `S_3` with a literal underscore instead of a mathematical subscript. Wrap it in math delimiters, for example `$S_3$`.

The other 22 titles rendered as authored. In the inspected bodies, LaTeX/MathMarkdown rendered as mathematics; no raw markup, clipping, or reference-title leak was confirmed. No Scratch field was present in the assigned snapshots. No existing TikZ diagrams were present in these items or screenshot manifests, so there were no diagram maps to validate. The technique banners did not contain math needing separate typesetting.

## Optional diagram candidates

- `lem-ultra-tight-multisets-admit-column-potentials`, lines 97 and 99: a directed graph with edges `k → l` witnessed by `y_k − y_l = a_kl − 1`; show either a shortest `t`-to-`r` path or the reachable set `T` and complement `R`. In the no-path case, annotate the potential shift `ŝ_k = s_k + 1` on `T`, unchanged on `R`, and the absence of arrows from `T` to `R`. This could make the graph argument and bound-preserving cut easier to follow; it is optional, not a rendering defect.
- `lem-fixed-component-core-multipartitions-are-cyclotomic-jantzen-connected`, lines 86, 88, and 90: two charged beta-set rows with charges `c_a,c_b`; show the bead moves `u → u−e` and `v → v+e`, both with charged foot residue `f`, then annotate core preservation, total-rank preservation, and the dominance direction. Label the target runner in the uncharged display by `f−c_b−1 (mod e)`. This could clarify the transfer that creates a Jantzen edge; it is optional, not a rendering defect.

## Coverage

Per-item hashes, complete-body coverage, screenshot paths, hashes, offsets, and dimensions are recorded in `lane-05.json`. All 65 listed PNG tiles were opened individually at original resolution. All assignment, snapshot, HTML, and tile hashes matched their local frozen manifests. Review is limited to the frozen local previews.
