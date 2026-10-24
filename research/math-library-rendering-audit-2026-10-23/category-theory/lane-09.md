# Category Theory rendering audit — lane 09

## Coverage

Reviewed all **109 assigned items** and opened all **128 assigned PNG tiles** with `tools.view_image` at original resolution. Item IDs, assignment/source SHA256 values, ItemBody hashes, screenshot paths and PNG hashes are recorded in [`lane-09.json`](lane-09.json). Every current source SHA256 matched the assignment manifest.

## Confirmed rendering defects

None found. The reviewed tiles showed no confirmed LaTeX/TikZ rendering defect or literal ASCII formula markup.

## Diagram review

- **Displayed diagram checked:** [`thm-four-lemma-in-an-abelian-category.md`](../../../items/thm-four-lemma-in-an-abelian-category.md#L34) has a two-row `tikzcd` with the four horizontal objects and vertical maps α, β, γ, δ. It matches the exact-row assumptions and both stated conclusions; no defect found.
- **Source-supported missing figure:** [`thm-sharp-nine-lemma.md`](../../../items/thm-sharp-nine-lemma.md#L33) states a commutative 3×3 diagram and assumes exactness on specific rows and columns, but the statement does not display the grid. A diagram can mark the given exactness nodes and distinguish the additional short-exact hypotheses from the short-exact conclusion.
- **Source-supported missing figure:** [`thm-weak-four-lemma-with-the-exactness-hypotheses-named.md`](../../../items/thm-weak-four-lemma-with-the-exactness-hypotheses-named.md#L34) invokes a four-term commutative diagram but does not display it. A two-row, four-column diagram can make the exactness nodes and the two separate implication clauses explicit.
- **Editorial candidate only:** [`thm-zassenhaus-butterfly-lemma-in-an-abelian-category.md`](../../../items/thm-zassenhaus-butterfly-lemma-in-an-abelian-category.md#L28) gives the quotient isomorphism algebraically. A compact lattice/interval schematic might help, but it is not necessary to understand the statement. Any proposed figure must faithfully show the two quotient intervals and their shared comparison object; no figure is required by this review.

No other mismatch in a displayed diagram was confirmed. This was read-only: no item or publication status changed, and no live website or HTTP(S) was accessed.
