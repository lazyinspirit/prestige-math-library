# Category Theory rendering audit — lane 10

Reviewed all **109 assigned items** and opened all **124 revision-2 screenshot tiles** with `tools.view_image` at original resolution. I read each item title and complete rendered ItemBody from the frozen local preview. Source, snapshot, and HTML hashes match the assignment; screenshot hashes are recorded in `lane-10.json`. No item content or publication status was changed. No live website or HTTP(S) was accessed.

## Confirmed rendering findings

None. No LaTeX/TikZ rendering defects, literal ASCII formula markup, clipping, or displayed-diagram/source mismatches were confirmed. Internal wikilinks breaking onto their own lines and uppercase technique banners are expected in this preview.

## Diagram checks

- `lem-pasted-squares-commute`: both square equations and the outer composite agree with the TikZ labels and source proof (source lines 31–60).
- `thm-a-commuting-square-with-monic-legs-is-a-pullback-exactly-when-the-induced-morphism-to-the-intersection-is-an-isomorphism`: the drawn cospan, monic legs, and comparison to the intersection match the source (lines 32–57).
- `thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses`: vertical maps and induced kernel/cokernel sequences match the source hypotheses and proof (lines 30–71).
- `thm-short-five-lemma-by-pullback-without-members`: the square is the pullback of `p': B' -> C'` along `h: C -> C'`, and the comparison-map equations match the proof (lines 54–73).

## Optional source-supported diagram candidate

- `fs-every-diagram-in-a-monoidal-category-commutes`, Refutation lines 39–41: an optional four-vertex square would show all vertices $A$, top edge $c$, and other edges $1_A$. Labeling the two path composites $c$ and $1_A$ would expose the exact witness `c(1)=0` and `1_A(1)=1`. This is an editorial candidate, not a confirmed rendering defect.

Exact item IDs, source/snapshot/HTML hashes, screenshot paths, and per-PNG SHA-256 hashes are in `lane-10.json`.
