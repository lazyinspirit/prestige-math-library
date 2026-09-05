# Step 9 changed-mathematics adjudication — `frontier-30`

## `thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade`

| Field | Record |
| --- | --- |
| Exact rejection tuple | `(thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade, gpt-5.6-terra, 3291e1d28dbb3162009ab946f1c0e79d4d0d549af3321de5d748c528aadef53c)` |
| Current judge item hash | `7a52da709cffeecc31f24814371f2d328988607eb8786a82d838308ddb504f00` |
| Pre-edit guard hash | `8fa4e81a87e6aa07436e68e3b411e8f9755ef88016ed5b37aff139f909257685` |
| Outcome | `false_positive` |
| Edit | None |
| Rejudge target | None; a nonfatal/false-positive outcome does not license or require a content repair. |

The tuple is the sole current Step 9 rejection for the sole changed item. The
item is a published, pre-existing item, so it has no owning `frontier-30`
manifest or proof-contract row; its published page is
`library/combinatorics/iterative-sparsification-and-the-five-vertex-path.md`.
Its direct dependencies include the current blockade interface
`def-blockade-length-and-width`, which defines an `(ell,w)`-blockade using a
real lower length threshold and an integral actual length at least `ell`.

The proposed defect is not present. Step 1.1 retains a blockade whose actual
integral length is at least `r`; after `k=floor(r)`, step 2.1 has actual length
at least `k`, exactly the required length condition. This is the condition the
rejection itself says is retained. Step 3.1 then proves
`|V(G)|/r^D >= |V(G)|/k^(2D)`, so it weakens the width requirement in the
valid direction. The cited primary source, Nguyen--Scott--Seymour, [*Induced
subgraph density. VII. The five-vertex path*, Lemma 5.5](https://arxiv.org/html/2312.15333v2),
states the same existence conclusion for a pure or `x`-sparse
`(k,|G|/k^d)`-blockade.

Focused validation: `node tools/tsx-run.mjs tools/precheck.mts
items/thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade.md`
passed (one checked, zero failing). The adjudication ledger received the exact
tuple with the pre-edit guard hash above; no defect-ledger row is due because
no fatal defect was confirmed.
