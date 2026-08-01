# `frontier-6` — selected six-pair build state

**Started 2026-08-01.** The owner selected six ready A/B pairs: Cosets,
Trees, Induced subgraphs, Exponential function, the as-yet-unbuilt
multidimensional Riemann/Jordan pair, and Darboux/L'Hôpital/Taylor. This run
follows `LEVELS.md` through step 10 and then stops at the owner pause. All
new content remains `status: draft`; nothing in this record authorizes an
owner audit, publication, commit, or push.

## Step 0 — selection and batching

The live frontier was recomputed from `research/plan-spec.json` and the page
files. All direct prerequisites are published. “Riemann integral” means
`the-riemann-integral-in-rn-and-jordan-content`, since the one-dimensional
Riemann page is already published.

| order | work stream | category | direct prerequisites |
|---:|---|---|---|
| 32/33 | `cosets-and-lagranges-theorem` | abstract algebra | `congruences-and-the-chinese-remainder-theorem` |
| 155/156 | `darboux-lhopital-and-taylor` | real analysis | `the-derivative-and-mean-value-theorems`, `finite-counting-and-binomial-coefficients` |
| 175/176 | `the-exponential-function` | real analysis | `power-series-and-real-analytic-functions` |
| 209/210 | `trees-forests-and-spanning-trees` | combinatorics | `graphs-walks-and-connectivity` |
| 235/236 | `the-riemann-integral-in-rn-and-jordan-content` | real analysis | `the-riemann-integral`, `rn-as-a-normed-space` |
| 393/394 | `induced-subgraphs-and-hereditary-graph-classes` | combinatorics | `graphs-walks-and-connectivity` |

The selected work is split into two independent authoring batches:

1. **Batch 1:** cosets, trees, and induced subgraphs.
2. **Batch 2:** Darboux/L'Hôpital/Taylor, exponential, and multidimensional
   Riemann/Jordan content.

Item-level seams were not computable at initial selection. The completed
scaffolds declare no cross-pair item edge, so the final seam count is zero.
The untracked `research/frontier-3-*` files are owner-owned dormant work and
remain outside this run.

## Step 3 — scaffold adjudication

The two Beta scaffolds contain 188 planned draft items: Batch 1 has 97
(15/8 cosets, 27/12 trees, 23/12 induced subgraphs) and Batch 2 has 91
(20/8 Darboux, 19/6 exponential, 30/8 Riemann/Jordan). Their scratch splices
passed structural validation with no duplicate IDs, unresolved dependencies,
cycles, forward item references, or B-page leaf violations. The orchestrator
accepted all twelve page objects subject to the following binding decisions.

1. **Cosets:** use the published finite-counting material; do not re-mint a
   competing counting theory. Retain the A4-converse witness as a later
   symmetric-group/sign obligation. The immediate cyclic-group example says
   *positive* divisor, because this library's divisibility is over integers.
2. **Trees:** replace the stale order/inventory with the finite forest,
   Prüfer, spanning-tree, and MST suite. State finite, simple, undirected
   graph conventions, exceptional null/K1 cases, and make no complexity or
   infinite-spanning-tree claim.
3. **Induced subgraphs:** `ind_H(G)` counts injective induced embeddings;
   hereditary includes isomorphism closure; and the minimal forbidden basis is
   unique only up to isomorphism and may be infinite. The null graph and
   empty-set pure-pair conventions are explicit.
4. **Darboux/L'Hôpital/Taylor:** delete the false “Darboux plus Baire-1 implies
   continuity” claim and correct the smoothness family from
   \(x^{k+1}|x|\) to \(x^k|x|\). The zero-over-zero infinity proof must not
   use the invalid fixed-basepoint route; Peano uses Cauchy MVT/induction and
   does not assume continuity of the top derivative. The generalized
   Schlömilch parameter stays natural. Integral remainder, Borel, and Dini
   derivatives are deferred.
5. **Exponential:** retain the acyclic series-to-functional-characterization
   construction, factorial tail, irrationality, flat/bump examples, Hamel
   multiplicative counterexample (with explicit Choice), and non-uniformity.
   Logarithms, arbitrary real powers, general partitions of unity, and
   nowhere-analytic constructions are deferred.
6. **Riemann/Jordan:** fix \(m\ge1\), distinguish cube covers for nullity from
   finite rectangle covers for Jordan content, supply the one-dimensional
   dictionary, retain only the equal-dimensional Lipschitz null-image theorem,
   and defer unclosed C1-image, Fubini, iterated-integral, and
   change-of-variables claims. Closed grid-cell overlap cannot be treated as
   disjointness.
7. **Plan provenance:** do **not** add
   `compactness-in-metric-spaces` directly to the Riemann/Jordan page. It is
   already reached from both direct roots through
   `continuity-ivt-evt-and-uniform-continuity`; adding it would be a redundant
   page prerequisite. The cited metric compactness items remain exact item
   dependencies.
8. **Canonical artifact:** splice the Frontier-6 Riemann/Jordan objects once.
   Do not read, alter, or co-splice the duplicate dormant Frontier-3 objects.
   Remove the obsolete Darboux B-page sine/cosine forward reference.

Alpha is independently reconciling the matching prose-plan amendments in Step
4. No mathematical item has been authored yet.
