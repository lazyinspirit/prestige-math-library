# Frontier 5, batch 2 Step-6 Beta audit

Audit scope: the newly authored Power Series and Real-Analytic Functions,
Graphs, Walks and Connectivity, and Homotopy and Homotopy Equivalence A/B
pairs. All 110 assigned items and all six page files were read from disk. Every
published dependency cited by an assigned item was opened and checked against
the exact Definition or Statement used.

## Changes made

### Power-series statements and proofs

1. `items/cor-power-series-convergence-dichotomy.md`
   - Fatal proof-scope defect: the Statement asserted both possible behaviours
     at either endpoint, but the two witnesses proved only the alternatives at
     the right endpoint.
   - Added the sign-changed harmonic-coefficient series as a divergent witness
     at the left endpoint and made absolute convergence of the square-denominator
     witness at both endpoints explicit.

2. `items/cor-power-series-sums-are-smooth-with-coefficient-formula.md`
   - Fatal typing defect: the general derivative formula used the natural-number
     quotient `(m+j)!/j!`, which the cited factorial definition does not define.
   - Replaced it by the falling factorial `(m+j)^{\underline m}` and rewrote the
     induction with the published falling-factorial recursion. The centre formula
     still specializes to `m!`.

3. `items/lem-power-series-reexpansion-double-series.md`
   - Fatal typing defect: natural binomial coefficients were multiplied directly
     by real coefficients and real powers.
   - Inserted the canonical-real embedding `\iota` in the Statement, Facts, and
     regrouped series.

4. `items/thm-power-series-reexpansion-at-an-interior-point.md`
   - Fatal semantic-citation defect: `thm-binomial-theorem` was cited for the
     factorial closed formula, which its Statement does not contain; the proof
     also inherited the undefined factorial quotient and missing real embedding.
   - Replaced that dependency by `thm-binomial-closed-formula`, used falling
     factorials in the derivative expansion, and embedded the binomial
     coefficients canonically in the real coefficient series.

5. `items/lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical.md`
   - Nonfatal proof gap: continuity was applied to the tail series without first
     establishing a positive convergence radius for it.
   - Added `cor-power-series-convergence-dichotomy` and proved convergence of the
     shifted tail from absolute convergence of the original local expansion.

6. `items/thm-identity-theorem-for-real-analytic-functions-on-an-interval.md`
   - Removed the unused `thm-algebra-of-derivatives` dependency.

7. `items/lem-local-composition-of-real-power-series.md`
   - Removed the unused `cor-power-series-sums-are-continuous` dependency.

8. `items/fs-power-series-uniform-on-its-open-interval.md`
   - Removed the unused compact-subinterval uniform-convergence theorem; the
     geometric witness and uniform-Cauchy definition are sufficient.

9. `items/fs-power-series-convergence-at-one-point-forces-global-convergence.md`
   - Removed the unused convergence-dichotomy dependency; the geometric-series
     Statement directly licenses both witness values.

### Abel, Cesaro, and Tauber arguments

10. `items/thm-abel-limit-theorem.md`
    - Fatal semantic-citation defect: a finite summation-by-parts lemma was stated
      as though it directly supplied an infinite-series identity.
    - Stated the exact finite identity, proved absolute convergence and vanishing
      of the boundary term, and only then passed to the infinite identity. Removed
      the unused direct `def-function-limit` dependency.

11. `items/lem-abel-transform-of-cesaro-means.md`
    - Fatal semantic-citation defect: the proof twice invoked the same finite
      summation lemma as an infinite transform.
    - Replaced both invocations by direct difference identities
      `S_n=T_n-T_{n-1}` and `a_n=S_n-S_{n-1}`, after proving the required absolute
      convergence from the Cauchy square of the geometric series. Removed the
      inapplicable summation-by-parts dependency.

12. `items/thm-frobenius-cesaro-implies-abel-summability.md`
    - Removed unused `thm-abel-limit-theorem` and `def-cesaro-mean` dependencies
      and cited the exact Abel-summability definition at the conclusion.

13. `items/lem-tauber-block-estimate.md`
    - Fatal citation defect: the finite geometric identity was attributed to
      Abel summation by parts, while the infinite geometric tail used later had
      no licensing dependency.
    - Proved the finite identity by multiplication, added the geometric-series
      tail as an exact fact, and removed the unused Archimedean and summation-by-parts
      dependencies.

14. `items/thm-tauber-converse-for-abel-summability.md`
    - Fatal missing-support defect: `x_N\uparrow1` was asserted from a limit
      definition without a result establishing that reciprocal naturals tend to
      zero.
    - Added and cited `cor-archimedean-reciprocal`; removed the unused geometric
      and summation-by-parts dependencies.

### Graph proofs and dependencies

15. `items/lem-graph-reachability-is-an-equivalence-relation.md`
    - Fatal dependency-metadata defect: the Facts cited
      `def-graph-walk-trail-path-and-cycle`, but it was absent from `deps`.
    - Added the cited definition to the dependency list.

16. `items/thm-bipartite-iff-no-odd-cycle.md`
    - Fatal proof-step defect: appending an edge to a root path was said to
      produce another path, although the endpoint can already occur on the path.
    - Replaced the step by the valid argument that same-parity root paths joined
      through the edge form an odd closed walk.

### Homotopy prose

17. `items/lem-straight-line-homotopies-are-continuous.md`
    - Replaced an A-page/B-page meta-remark by a direct mathematical remark
      distinguishing the continuity input from the role of convexity.

No result or page was added or deleted. No item id, title, page membership, or
example/counterexample witness was changed. No page summary required an edit.

## Proof-step and semantic-citation findings

- The three coefficient-formula defects were genuine type errors, not merely
  notational preferences: binomial coefficients and factorial quotients are
  naturals in the cited foundations, while the power-series coefficients are
  real. The repaired chain consistently uses canonical embeddings and the
  published falling-factorial identity.
- The Abel and Cesaro identities are mathematically true, but the published
  `lem-abel-summation-by-parts` states only a finite formula with a boundary
  term. The repaired proofs establish convergence and dispose of boundary terms
  before writing infinite identities.
- The Tauber block estimates themselves were correct. Their supporting Facts
  did not license the geometric identities actually used, and the converse
  lacked the Archimedean reciprocal step needed for its chosen approach to one.
- The original bipartite proof made an invalid path claim. The odd-closed-walk
  replacement preserves the intended parity construction and uses exactly the
  stated odd-cycle lemma.
- The three `citecheck` warnings are false positives: each occurrence concerns
  reflexivity or transitivity of an equivalence/homotopy relation, not an order.
  No order dependency was added.
- The sole prose warning, “one of these” in
  `lem-an-odd-closed-walk-contains-an-odd-cycle`, refers to one of two explicitly
  constructed closed walks and is not a page-position claim.
- All remaining proof steps, example verifications, counterexample witnesses,
  false-statement refutations, Remarks, titles, Statements, and dependency Fact
  rows were checked against the cited files. No further false claim, invalid
  witness, missing hypothesis, wrong-direction citation, or forward dependency
  was found.

## Unresolved or outside the write boundary

- The batch snapshot and master plan retain pre-audit dependency lists for some
  repaired items. The orchestrator must synchronize dependency changes during
  its post-Beta plan update. This Beta was explicitly forbidden to edit plan
  files.
- Nothing mathematical remains unresolved in the assigned draft files.
  Published dependencies were read-only, and none required an owner-bound edit.

## Coverage

Every proof step and dependency citation in every assigned item was read. Every
distinct published dependency target was checked for its exact domain,
hypotheses, conclusion, and direction. There were no coverage exceptions.

### Power Series and Real-Analytic Functions (A)

- `def-real-power-series-and-radius-of-convergence`
- `thm-cauchy-hadamard-for-real-power-series`
- `cor-power-series-convergence-dichotomy`
- `thm-power-series-uniform-on-compact-subintervals`
- `cor-power-series-sums-are-continuous`
- `lem-derived-and-integrated-power-series-have-the-same-radius`
- `thm-termwise-differentiation-of-a-real-power-series`
- `cor-termwise-integration-of-a-real-power-series`
- `cor-power-series-sums-are-smooth-with-coefficient-formula`
- `lem-power-series-reexpansion-double-series`
- `thm-power-series-reexpansion-at-an-interior-point`
- `def-real-analytic-function`
- `thm-power-series-sums-are-real-analytic`
- `cor-real-analytic-functions-are-smooth`
- `lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical`
- `thm-identity-theorem-for-real-analytic-functions-on-an-interval`
- `lem-cauchy-product-of-real-power-series`
- `lem-local-composition-of-real-power-series`
- `lem-local-reciprocal-of-a-real-power-series`
- `thm-real-analytic-functions-closed-under-algebra-quotients-and-composition`
- `def-abel-and-cesaro-summability-of-a-series`
- `thm-abel-limit-theorem`
- `lem-abel-transform-of-cesaro-means`
- `thm-frobenius-cesaro-implies-abel-summability`
- `cor-convergent-series-are-cesaro-and-abel-summable`
- `lem-tauber-block-estimate`
- `thm-tauber-converse-for-abel-summability`
- `fs-power-series-uniform-on-its-open-interval`
- `fs-power-series-convergence-at-one-point-forces-global-convergence`
- `fs-abel-summability-implies-ordinary-convergence`

### Power Series and Real-Analytic Functions (B)

- `ex-geometric-power-series-and-an-interior-reexpansion`
- `ex-three-radius-one-series-with-different-endpoint-behaviour`
- `cex-factorial-power-series-has-radius-zero`
- `cex-geometric-power-series-not-uniform-on-its-open-interval`
- `ex-a-rational-function-is-real-analytic-via-a-geometric-series`
- `ex-abel-theorem-on-the-alternating-harmonic-series`
- `cex-grandi-series-abel-summable-but-divergent`
- `cex-one-minus-two-plus-three-is-abel-but-not-cesaro-summable`

### Graphs, Walks and Connectivity (A)

- `def-finite-simple-graph`
- `rem-finite-simple-graph-convention`
- `def-multigraph-loop-and-digraph`
- `def-graph-adjacency-incidence-neighbourhood-and-degree`
- `def-subgraph-induced-subgraph-and-spanning-subgraph`
- `def-graph-walk-trail-path-and-cycle`
- `lem-every-graph-walk-contains-a-path-between-its-endpoints`
- `def-connected-graph-and-connected-component`
- `lem-graph-reachability-is-an-equivalence-relation`
- `cor-connected-components-partition-the-vertex-set`
- `def-graph-distance-and-girth`
- `lem-graph-distance-is-a-metric-on-each-component`
- `def-bipartite-graph`
- `lem-an-odd-closed-walk-contains-an-odd-cycle`
- `thm-bipartite-iff-no-odd-cycle`
- `def-standard-complete-bipartite-path-and-cycle-graphs`
- `def-petersen-graph`
- `def-graph-isomorphism-and-complement`
- `def-graph-deletion-contraction-minor-and-subdivision`
- `def-line-graph`
- `thm-handshake-lemma-for-finite-simple-graphs`
- `cor-a-graph-has-an-even-number-of-odd-degree-vertices`
- `cor-complete-graph-edge-count`
- `cor-number-of-labelled-simple-graphs`
- `def-vertex-and-edge-connectivity`
- `lem-edge-connectivity-at-most-minimum-degree`
- `lem-vertex-connectivity-at-most-edge-connectivity`
- `thm-whitney-connectivity-inequalities`
- `thm-minimum-degree-forces-a-long-path`
- `cor-minimum-degree-two-forces-a-cycle`
- `thm-dense-finite-graph-is-connected`
- `fs-degree-sequence-determines-a-simple-graph`
- `fs-all-even-degrees-force-one-cycle`
- `fs-vertex-and-edge-connectivity-always-agree`
- `fs-a-shortest-walk-need-not-be-a-path`

### Graphs, Walks and Connectivity (B)

- `ex-walk-trail-path-and-cycle-in-one-small-graph`
- `ex-components-distance-and-girth-in-a-disconnected-graph`
- `ex-complete-and-complete-bipartite-graphs-k5-and-k33`
- `ex-petersen-graph-basic-invariants`
- `cex-c6-and-two-triangles-share-a-degree-sequence`
- `cex-connected-even-degree-bowtie-is-not-a-cycle`
- `cex-strict-whitney-connectivity-inequalities`
- `ex-deletion-contraction-and-a-minor-model`

### Homotopy and Homotopy Equivalence (A)

- `def-homotopy-relative-and-path-homotopy`
- `lem-homotopy-reflexive-and-symmetric`
- `lem-homotopy-transitivity-by-reparametrisation`
- `cor-homotopy-relative-and-path-homotopy-are-equivalence-relations`
- `thm-composition-respects-homotopy`
- `def-nullhomotopic-map-and-contractible-space`
- `cor-contractible-iff-identity-nullhomotopic`
- `def-homotopy-equivalence`
- `thm-homotopy-equivalence-is-an-equivalence-relation`
- `cor-a-map-homotopic-to-a-homotopy-equivalence-is-a-homotopy-equivalence`
- `def-retraction-and-deformation-retract`
- `thm-a-deformation-retract-is-a-homotopy-equivalence`
- `cor-a-retract-of-a-contractible-space-is-contractible`
- `cor-homotopy-equivalence-bijection-on-path-components`
- `lem-straight-line-homotopies-are-continuous`
- `thm-two-maps-into-a-convex-set-are-homotopic`
- `cor-convex-subsets-of-rn-are-contractible`
- `cor-contractible-spaces-are-path-connected`
- `thm-punctured-rn-deformation-retracts-onto-the-sphere`
- `cor-punctured-rn-homotopy-equivalent-to-the-sphere`
- `fs-a-retract-must-be-a-deformation-retract`
- `fs-homotopy-equivalent-spaces-are-homeomorphic`

### Homotopy and Homotopy Equivalence (B)

- `ex-straight-line-homotopy-between-maps-into-rn`
- `ex-intervals-and-euclidean-spaces-are-contractible`
- `ex-a-point-and-r-are-homotopy-equivalent-not-homeomorphic`
- `ex-a-two-point-retract-that-is-not-a-deformation-retract`
- `ex-a-cylinder-deformation-retracts-onto-an-end`
- `ex-radial-deformation-retraction-of-punctured-rn`
- `ex-path-homotopy-through-straight-segments-in-a-convex-set`

The Power Series A-page summary has two paragraphs of 52 and 55 words; the
Graphs A-page has two of 53 and 73 words; and the Homotopy A-page has two of 52
and 72 words. Each is nonempty and below 150 words. All three B pages have no
authored body.

## Gate evidence

- `reflow.mts`: unchanged on all 17 modified items.
- `precheck.mts`: pass on all 88 proof-bearing assigned items.
- `prosecheck.mjs --warnings`: 116 assigned items/pages, zero errors and one
  triaged false-positive warning.
- `rendercheck.mjs`: all 116 assigned items/pages pass real KaTeX and delimiter
  checks.
- `citecheck.mjs`: 110 assigned items, three triaged false-positive order-axiom
  warnings.
- `depcheck.mjs --quiet`: exit 0; zero warning lines concern an assigned item.
- `fwdcheck.mjs --quiet` and `extcheck.mjs --quiet`: exit 0; no assigned forward
  or recorded-not-proved issue.
- `depsource.mjs`: exit 0 with zero unresolved dependencies. Its reciprocal
  worklist mention of `lem-tauber-block-estimate` is legitimate: that lemma
  assumes `(n+1)a_n\to0` and does not derive reciprocal convergence.
- `audit-manifest.mjs`: 202 same-batch edges and 151 published-backward edges;
  every edge was audited and there is no cross-batch or open-forward edge.

## Fatal-error ledger for Step 10

| Item | Defect type | Location | Defect | Fix disposition |
|---|---|---|---|---|
| `cor-power-series-convergence-dichotomy` | proof scope / witness completeness | Statement and proof step 1.2 | Claimed either behaviour at either endpoint but supplied witnesses only at the right endpoint | Repair proof by adding the sign-changed left-endpoint witness |
| `cor-power-series-sums-are-smooth-with-coefficient-formula` | ill-typed formula | Statement, Facts, and induction | Used an undefined quotient of naturals inside the real coefficient formula | Restate with falling factorials and replace the induction algebra |
| `lem-power-series-reexpansion-double-series` | ill-typed formula | Statement and Facts | Multiplied natural binomial coefficients directly by reals | Restate with canonical-real embeddings |
| `thm-power-series-reexpansion-at-an-interior-point` | semantic citation / ill-typed formula | Facts/dependencies and proof steps 1.1–2.1 | Cited the binomial theorem for an absent closed formula and inherited undefined natural quotients | Correct dependency, restate with falling factorials, and repair coefficient calculation |
| `thm-abel-limit-theorem` | semantic citation / limit justification | Facts and proof step 1.1 | Treated a finite summation identity as an infinite identity without its boundary term | Replace proof by finite identity plus justified limit passage |
| `lem-abel-transform-of-cesaro-means` | semantic citation / convergence justification | Facts and proof steps 2.1–3.1 | Applied the finite Abel lemma twice as an infinite transform | Replace proof by absolutely convergent difference identities |
| `lem-tauber-block-estimate` | semantic citation / missing dependency | Facts and proof step 3.1 | Misattributed a finite geometric identity and used an uncited infinite geometric tail | Repair Facts and correct dependencies |
| `thm-tauber-converse-for-abel-summability` | missing support | Facts/dependencies | The chosen sequence was asserted to approach one without the reciprocal Archimedean result | Add and cite `cor-archimedean-reciprocal` |
| `lem-graph-reachability-is-an-equivalence-relation` | dependency citation | Facts/dependencies | Cited the walk/path definition without declaring it in `deps` | Correct dependency metadata |
| `thm-bipartite-iff-no-odd-cycle` | invalid proof step | Proof step 4.1 | Appending an edge to a path need not produce a path | Replace by the odd-closed-walk parity argument |

The remaining repairs were nonfatal proof-completeness, dependency cleanup, and
natural-prose corrections under the audit triage rule.
