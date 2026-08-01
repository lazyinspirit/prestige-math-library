# Frontier 6 Alpha Step 4 report

Date: 2026-08-01

Role: Alpha for Step 4 propagation. This pass changed prose scaffolds only. It
did not author items or pages, change `research/plan-spec.json`, run proof
prechecks or judges, publish, audit publication, commit, push, or alter the
owner-owned `items/thm-reals-ordered-field.md` and `research/frontier-3-*`
worktree state.

## Independent scaffold and dependency decision

All six planned A/B pairs are mathematically coherent and dependency-closed at
scaffold level, so Alpha confirms the Step 3 decision to accept them without
scope expansion.

1. **Cosets.** The published finite-counting definitions and sum rule license
   the finite coset partition and Lagrange count. The published unit group,
   unit criterion, and totient clauses license Euler and Fermat. The cyclic
   converse example correctly says positive divisor because divisibility is an
   integer relation. The proposed A4 witness remains deferred until sign and
   the economical description of A4 are available.
2. **Trees.** The finite simple graph convention licenses the forest identity,
   spanning-tree existence without Choice, Prüfer enumeration, and finite MST
   exchange arguments. The null graph, K1, and n at least 2 boundaries are
   explicitly assigned. No infinite spanning-tree or complexity claim is made.
3. **Induced subgraphs.** Counting injective induced embeddings gives
   `ind_{K_2}(G)=2|E(G)|`. Isomorphism closure is part of hereditary closure.
   For finite graphs, choosing an outside induced subgraph of least finite
   order proves existence of a minimal obstruction, and the collection of all
   minimal obstructions is the unique possibly infinite basis up to
   isomorphism. Empty vertex-set conventions make complete and anticomplete
   both vacuous, so the pair is pure rather than mixed.
4. **Darboux, L'Hopital, and Taylor.** Darboux plus Baire class one does not
   imply continuity, since discontinuous derivatives supply counterexamples.
   The valid partial converse uses injectivity or monotonicity. The family
   `x^k|x|` is C^k and not C^{k+1}; the old exponent was off by one. The
   natural-parameter Schlomilch-Roche remainder has the Lagrange and Cauchy
   specializations under the proposed degree convention. Integral remainder,
   Borel, and Dini claims are correctly deferred.
5. **Exponential.** The construction order from absolute series convergence to
   the Cauchy-product addition law, positivity, differentiation, monotonicity,
   range, and the normalized characterizations is acyclic. The product-limit
   strategy controls a fixed finite head and a series tail rather than relying
   on coefficientwise convergence. The discontinuous multiplicative solution
   explicitly spends the Axiom of Choice through a Hamel basis. General smooth
   partitions of unity and nowhere-analytic smooth functions are properly
   deferred.
6. **Multidimensional Riemann integration and Jordan content.** The restriction
   m at least 1 matches the published R^m metric statements. Countable and
   finite cube covers are kept distinct from finite rectangle covers for Jordan
   outer content. The one-dimensional dictionaries handle the isometry between
   R and R^1. Closed grid-cell overlap is handled by the cover-to-grid estimate.
   Equal-dimensional Lipschitz images of null sets are in scope; the broader C1
   image statement, Fubini, iterated integration, and change of variables are
   deferred.

The 62 distinct external dependencies of batch 1 and the 113 distinct external
dependencies of batch 2 all have files on disk with `status: published`.
Across both artifacts, 405 dependency edges stay inside an A/B pair and point
backward to an earlier licensed item, while 579 dependency occurrences point to
published content. There are no disallowed cross-pair edges, forward references,
or ordering violations.

### RA-37 compactness decision

Do not add `compactness-in-metric-spaces` to the direct `requires` of
`the-riemann-integral-in-rn-and-jordan-content`. The current plan graph reaches
it through each existing direct root:

```text
the-riemann-integral
  -> continuity-ivt-evt-and-uniform-continuity
  -> compactness-in-metric-spaces

rn-as-a-normed-space
  -> the-derivative-and-mean-value-theorems
  -> continuity-ivt-evt-and-uniform-continuity
  -> compactness-in-metric-spaces
```

The second root also reaches `the-riemann-integral` through
`properties-of-the-integral-and-the-working-ftc`. A direct compactness edge
would therefore be redundant, while the exact metric compactness items remain
valid item-level dependencies.

## Prose propagation decisions

| proposal | target decision | disposition |
|---|---|---|
| Batch 1 section 3.1, AA-2 replacement | The named block and obsolete counting paragraph existed in `research/plan-algebra-track.md`. | Applied the approved replacement verbatim. |
| Batch 1 section 3.2, GT-2 replacement | The named order-191 block existed in `research/plan-combinatorics-and-categories.md`. | Applied the approved replacement verbatim. |
| Batch 1 section 3.3, induced-subgraph row and convention amendment | The exact 393/394 row and table existed in `research/plan-combinatorics-and-categories.md`. | Replaced the row verbatim and inserted the approved convention paragraph immediately after the table. |
| Batch 2 section 6 item 2, stale Darboux sine/cosine forward reference | No authored library B page exists yet, so there was no page-content target. The matching RA-16 inventory and D-TRIG whitelist prose did exist in `research/plan-realanalysis-pages.md`. | Removed the trigonometric example from the RA-16 inventory, recorded the polynomial replacement, and removed RA-16 from the grandfathered prose whitelist. No plan-spec edit was made. |
| Batch 2 section 6 item 3, RA-16 correction | The RA-16 prose block existed. | Removed the false Darboux plus Baire-one claim, corrected `x^{k+1}|x|` to `x^k|x|`, and recorded the approved integral-remainder, Borel, and Dini deferrals. The block now cites the published finite-counting prerequisite instead of retaining the obsolete local-binomial instruction. |
| Batch 2 section 6 item 4, RA-26 correction | The RA-26 prose block existed. | Retained E1, E2, E3, E6, E11, the factorial tail, irrationality of e, the flat and compact bump, the Choice-based discontinuous multiplicative solution, and nonuniform convergence. Recorded the approved partition-of-unity and nowhere-analytic deferrals. |
| Batch 2 section 6 item 5, RA-37 correction | The RA-37 prose block existed. | Recorded the cube-cover convention, one-dimensional dictionaries, equal-dimensional Lipschitz theorem, and the C1/Fubini/iterated-integral/change-of-variables boundary. |

No approved prose amendment lacked a matching prose-scaffold target. The only
missing literal target was the unbuilt Darboux B page in batch 2 item 2; its two
matching higher-level prose targets were updated instead, as Step 4 requires.

Batch 2 section 6 item 1 was already settled by the Step 3 acceptance and
required no Alpha prose decision beyond the updates above. Item 6 was declined:
the direct compactness prerequisite is redundant for the graph reason recorded
above. Item 7 is an orchestrator splice constraint, not a prose-plan amendment;
Alpha did not use, alter, or co-splice the dormant Frontier 3 objects.

## Checks

- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0. The full live
  plan is acyclic and consistent, with no item cycle, forward reference, B-page
  dependency, or unresolved id among pages with item lists. Existing
  `redundant-prereq` warnings elsewhere remain warnings.
- Custom artifact dependency audit: 405 in-pair edges, 579 external dependency
  occurrences, 0 disallowed cross-pair edges, 0 forward references, 0 ordering
  violations.
- External dependency status audit: batch 1 has 62 distinct external ids and
  batch 2 has 113; all files exist and all are published.
- `node tools/prosecheck.mjs research/plan-algebra-track.md`: exit 0, 0 errors,
  25 heuristic count warnings.
- `node tools/prosecheck.mjs research/plan-combinatorics-and-categories.md`: exit
  0, 0 errors, 53 heuristic warnings.
- `node tools/prosecheck.mjs research/plan-realanalysis-pages.md`: exit 0, 0
  errors, 20 heuristic warnings.
- Proof precheck and judges: not applicable at Step 4 and not run.

## Touched paths

- `research/plan-algebra-track.md`
- `research/plan-combinatorics-and-categories.md`
- `research/plan-realanalysis-pages.md`
- `research/frontier-6-alpha-step4.md`
