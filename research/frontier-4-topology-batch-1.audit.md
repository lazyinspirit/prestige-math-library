# Frontier 4 topology batch 1 — step 6a Beta audit ledger

Audit scope:

- `the-topology-of-euclidean-space` and companion
- `nets-and-filters` and companion
- `uniform-spaces` and companion

Completed step 6a for all 127 items and six pages. No results or pages were
added, deleted, or renamed. All remain `draft`, item origins remain `session`,
and no judge, audit, or publish metadata was introduced.

## Changed-item ledger

62 items changed.

### The topology of Euclidean space

- `lem-pseudocompact-euclidean-subset-is-bounded`: dependency pruning.
- `lem-pseudocompact-euclidean-subset-is-closed`: proof order and continuity
  estimate.
- `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`: dependency
  correction.
- `cor-euclidean-compactness-equivalence-chart`: choice hypotheses and
  citations.
- `lem-euclidean-polygonal-paths-are-continuous` and
  `lem-polygonally-reachable-set-is-clopen`: exact definitions and citations.
- `thm-open-connected-subsets-of-rn-are-polygonally-connected`: empty case and
  dependencies.
- `cor-components-of-open-subsets-of-rn-are-polygonally-connected`,
  `cor-rn-is-polygonally-connected-and-locally-path-connected`, and
  `cor-rn-is-locally-compact-and-sigma-compact`: citation and dependency repair.
- `thm-rational-points-and-boxes-in-rn`: box-containment justification.
- `lem-radial-normalisation-is-continuous` and
  `thm-radial-straight-line-map-on-punctured-rn`: continuity algebra and
  dependencies.
- `cor-euclidean-spheres-are-path-connected`,
  `fs-connected-subsets-of-rn-are-polygonally-connected`, and
  `thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space`:
  dependency cleanup.
- `cex-open-bounded-euclidean-subset-not-compact`,
  `cex-closed-unbounded-euclidean-subset-not-compact`, and
  `cex-pseudocompact-noncompact-particular-point-space`: valid witnesses and
  exact pseudocompactness argument.

### Nets and filters

- `def-net-convergence-and-cluster-point`: arbitrary-threshold cluster
  argument.
- `thm-net-cluster-point-iff-convergent-subnet`: correct directed indices.
- `lem-every-net-has-a-universal-subnet`: subnet values and indices.
- `cor-compactness-via-universal-nets` and
  `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma`: exact
  compactness criterion and choice accounting.
- `thm-first-countable-frechet-urysohn-sequential-hierarchy`: exact
  definitions.
- `fs-every-subnet-of-a-sequence-is-a-subsequence`: valid counterexample.
- `thm-unordered-summability-of-real-families`: at-most-countable support,
  finite-support case, and absolute estimates.
- `ex-free-ultrafilter-converging-in-a-convergent-sequence-space`: proved both
  the ultrafilter property and freeness.
- `ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence`:
  coordinate argument and citation.
- `ex-cocountable-closure-detected-by-a-net-not-a-sequence`: net fact.
- `ex-sequential-fan-is-frechet-urysohn-not-first-countable` and
  `ex-arens-space-is-sequential-not-frechet-urysohn`: canonical constructions
  and choice accounting.

### Uniform spaces

- `def-uniform-space-by-entourages`: diagonal notation.
- `thm-uniformity-induces-a-topology`: valid interior and neighbourhood
  argument.
- `lem-metric-uniformity-dictionary`: filter-base proof.
- `lem-entourage-and-uniform-cover-dictionary`: triple-star refinement and both
  recovery directions.
- `def-gauge-of-pseudometrics`: meaning clarified.
- `lem-normal-sequences-of-entourages`: correct indexing and no hidden global
  choice.
- `lem-pseudometric-from-a-normal-entourage-sequence`: complete Frink
  chain-compression argument.
- `thm-entourage-uniformities-are-generated-by-gauges`: removed a simultaneous
  choice assumption.
- `lem-convergent-filters-are-cauchy`: correct entourage root.
- `def-completion-of-a-uniform-space`: exact pullback definition.
- `lem-minimal-cauchy-filter-associated-to-a-cauchy-filter`,
  `lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity`,
  `lem-minimal-cauchy-filter-space-is-complete`,
  `lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space`,
  `thm-hausdorff-completion-of-a-uniform-space`, and
  `thm-uniform-completion-universal-property-and-uniqueness`: completion
  construction rebuilt.
- `lem-ultrafilters-on-totally-bounded-uniform-spaces-are-cauchy` and
  `lem-compact-uniform-spaces-are-totally-bounded`: valid small-set and
  neighbourhood arguments.
- `lem-finite-star-refinement-for-compact-hausdorff-spaces`: finite shrinking
  and twice-barycentric refinement.
- `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity` and
  `cor-compact-domain-maps-are-uniformly-continuous`: exact cover and root
  estimates.
- `lem-countable-uniform-base-normalisation`: canonical recursive choices.
- `lem-uniformizable-spaces-are-regular`,
  `lem-uniformizable-spaces-are-completely-regular`, and
  `cor-separated-uniformizable-iff-tychonoff`: closure and pseudometric
  separation proofs.
- `def-left-and-right-uniformities-of-a-topological-group`,
  `def-upper-and-roelcke-uniformities-of-a-topological-group`, and
  `def-pointwise-and-uniform-convergence-uniformities`: well-definedness.
- `ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic`: reciprocal
  Archimedean citation.
- `ex-uncountable-cantor-cube-uniformizable-not-first-countable`: explicit
  ultrafilter-lemma and countable-choice hypotheses.

No page prose changed.

## Added or deleted results

None.

## Fatal-error ledger for step 9

| Item(s) | Defect type | Location | Fix disposition |
|---|---|---|---|
| `lem-pseudocompact-euclidean-subset-is-closed`, `lem-radial-normalisation-is-continuous` | Invalid or incompletely licensed continuity proofs | Proof; Facts/dependencies | Repair/replace proof and correct dependencies |
| `thm-net-cluster-point-iff-convergent-subnet`, `lem-every-net-has-a-universal-subnet` | Constructed indices did not correctly license the claimed subnet and value map | Proof | Repair/replace proof |
| `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma` | Product-limit and compactness argument lacked the exact universal-net criterion and precise choice accounting | Proof; Facts/dependencies | Repair proof and correct dependencies/hypotheses |
| `fs-every-subnet-of-a-sequence-is-a-subsequence` | Counterexample indexing was invalid for the stated subnet convention | Refutation | Repair/replace refutation |
| `thm-unordered-summability-of-real-families` | Statement mishandled finite support; proof did not establish at-most-countable support and absolute convergence with valid bounds | Title/Statement; Proof | Restate and replace proof |
| `ex-free-ultrafilter-converging-in-a-convergent-sequence-space` | Claimed image filter was not shown to be an ultrafilter or free | Proof | Repair/replace proof |
| `ex-sequential-fan-is-frechet-urysohn-not-first-countable`, `ex-arens-space-is-sequential-not-frechet-urysohn`, `ex-uncountable-cantor-cube-uniformizable-not-first-countable` | Hidden or unjustified choice selections | Proof; Facts/dependencies | Correct hypotheses and replace selections canonically where possible |
| `thm-uniformity-induces-a-topology` | Entourage balls were incorrectly treated as open, invalidating the neighbourhood-base proof | Proof | Repair/replace proof |
| `lem-metric-uniformity-dictionary` | Metric entourages were asserted to generate a uniformity without a complete filter-base verification | Proof | Repair/replace proof |
| `lem-entourage-and-uniform-cover-dictionary` | Star-refinement strength and recovery inclusions were insufficient in both directions | Proof | Repair/replace proof |
| `lem-normal-sequences-of-entourages` | Incorrect initial indexing and hidden simultaneous choice | Statement; Proof | Restate and replace proof |
| `lem-pseudometric-from-a-normal-entourage-sequence` | Frink chain-compression step was not established | Proof | Repair/replace proof |
| `thm-entourage-uniformities-are-generated-by-gauges` | Construction implicitly selected pseudometrics for all entourages simultaneously | Proof; Facts/dependencies | Replace construction to avoid added choice |
| `def-completion-of-a-uniform-space` | Completion did not require exact pullback of the uniformity, too weak for the subsequent universal property | Definition/Statement | Restate definition |
| `lem-minimal-cauchy-filter-associated-to-a-cauchy-filter` | Minimal Cauchy filter construction was incomplete | Proof | Repair/replace proof |
| `lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity` | Proposed entourages lacked complete composition and separation verification | Proof | Repair/replace proof |
| `lem-minimal-cauchy-filter-space-is-complete` | Completeness argument did not correctly flatten a Cauchy filter of filters | Proof | Repair/replace proof |
| `lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space` | Density and uniform continuity of the point embedding were incomplete | Proof | Repair/replace proof |
| `thm-hausdorff-completion-of-a-uniform-space` | Completion theorem depended on the defective construction block | Proof | Repair/replace proof |
| `thm-uniform-completion-universal-property-and-uniqueness` | Extension, uniform continuity, uniqueness, and isomorphism arguments were incomplete | Proof | Repair/replace proof |
| `lem-compact-uniform-spaces-are-totally-bounded` | Entourage balls were incorrectly treated as open in the compactness cover | Proof | Repair proof |
| `lem-finite-star-refinement-for-compact-hausdorff-spaces` | Required finite shrinking and twice-star-refinement were asserted without a valid construction | Proof | Repair/replace proof |
| `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity` | Cover-to-entourage comparison did not establish the required inclusion | Proof | Repair/replace proof |
| `cor-compact-domain-maps-are-uniformly-continuous` | Target-root estimate was insufficient | Proof | Repair proof |
| `lem-countable-uniform-base-normalisation` | Recursive base selection hid countable choice | Proof | Replace with least-index canonical recursion |
| `lem-uniformizable-spaces-are-regular`, `lem-uniformizable-spaces-are-completely-regular` | Closure containment and separating-function construction were not proved | Proof | Repair/replace proof |
| `def-left-and-right-uniformities-of-a-topological-group`, `def-upper-and-roelcke-uniformities-of-a-topological-group`, `def-pointwise-and-uniform-convergence-uniformities` | Families were named as uniformities without sufficient well-definedness verification | Definition/Statement | Repair prose and add direct verification |

Mechanical formatting, unused-dependency pruning, and short citation gaps are
excluded from the fatal ledger.

## Complete checked-clean remainder

The following 65 items were read in full and required no content change:

- `rem-euclidean-topology-dictionary`
- `def-euclidean-spheres-and-closed-balls`
- `def-pseudocompact-space`
- `cor-euclidean-closed-balls-and-spheres-are-compact`
- `def-polygonal-path-and-polygonal-connectedness`
- `lem-finite-powers-of-countable-sets-are-countable`
- `lem-punctured-rn-is-polygonally-connected`
- `ex-euclidean-closed-ball-and-sphere-through-the-compactness-chart`
- `ex-open-euclidean-ball-is-polygonally-connected`
- `ex-punctured-line-versus-punctured-plane`
- `def-directed-set-and-net`
- `def-net-eventually-and-frequently`
- `def-subnet`
- `lem-subnets-preserve-eventual-properties-and-limits`
- `thm-closure-characterised-by-nets`
- `thm-continuity-characterised-by-nets`
- `thm-hausdorff-iff-net-limits-are-unique`
- `def-tail-filter-of-a-net`
- `def-filter-convergence-and-cluster-point`
- `lem-tail-filter-preserves-net-convergence-and-cluster-points`
- `def-net-derived-from-a-filter`
- `lem-filter-derived-net-preserves-convergence-and-cluster-points`
- `thm-net-filter-convergence-dictionary`
- `def-universal-net`
- `thm-universal-nets-and-ultrafilters-correspond`
- `lem-ultrafilter-cluster-points-are-limits`
- `thm-compactness-via-nets-filters-and-ultrafilters`
- `lem-universal-net-cluster-points-are-limits`
- `lem-continuous-images-of-universal-nets-are-universal`
- `rem-tychonoff-choice-strengths`
- `def-frechet-urysohn-and-sequential-spaces`
- `ex-neighbourhood-indexed-net-converging-to-a-closure-point`
- `ex-finite-subset-net-for-unordered-real-summation`
- `lem-symmetric-entourages-form-a-base`
- `def-separated-uniform-space`
- `thm-separated-uniformity-iff-induced-topology-is-hausdorff`
- `def-uniformly-continuous-map`
- `thm-uniformly-continuous-maps-are-continuous`
- `def-uniform-cover-space`
- `thm-three-definitions-of-uniform-space-are-equivalent`
- `def-cauchy-filter-in-a-uniform-space`
- `lem-cauchy-filter-with-a-cluster-point-converges`
- `def-complete-uniform-space`
- `def-uniform-embedding-and-uniform-isomorphism`
- `def-totally-bounded-uniform-space`
- `lem-compact-uniform-spaces-are-complete`
- `thm-complete-and-totally-bounded-uniform-spaces-are-compact`
- `cor-uniform-compactness-equivalence`
- `thm-compact-hausdorff-open-cover-uniformity`
- `def-countably-based-uniformity`
- `thm-countably-based-uniformity-is-pseudometrizable`
- `def-uniformizable-space`
- `lem-completely-regular-topologies-come-from-continuous-pseudometrics`
- `thm-uniformizable-iff-completely-regular`
- `def-topological-group`
- `lem-topological-group-translations-and-inversion`
- `thm-topological-group-uniformities-induce-the-given-topology`
- `cor-topological-groups-are-completely-regular`
- `lem-uniform-convergence-uniformity-is-finer-than-pointwise`
- `ex-usual-metric-uniformity-on-r`
- `fs-a-compatible-uniformity-is-unique`
- `ex-additive-group-uniformity-on-r`
- `ex-pointwise-but-not-uniform-convergence-on-a-countable-domain`
- `ex-closed-unit-interval-has-one-compatible-uniformity`
- `cex-k-topology-is-not-uniformizable`

All six pages were also checked. A-page summaries contain exactly two paragraphs
of 66/72, 52/58, and 61/67 words respectively. All B pages have zero authored
body paragraphs. Page item and example lists agree with the plan.

## Dependency, source, choice, and plan review

Every proof step and every dependency citation across all 127 items was read;
there are no exceptions. Titles, Statements, Remarks, examples,
counterexamples, six pages, source records, and all 32 applicable
source/choice/plan decisions were reviewed.

All dependencies resolve and respect plan and page order. The ultrafilter lemma,
countable choice, and dependent choice are stated where used. Every item has a
source block, with no fabricated scraped source.

`depsource` found no unresolved, homeless, or planned-later dependencies on any
of the six pages. Its remaining `draft-page` classifications are expected
same-batch links.

The plan scaffold still names `thm-of-archimedean` in the
interval-homeomorphism example, while the authored item now correctly cites
`cor-archimedean-reciprocal`. The plan was outside this batch's write authority
and remains mechanically valid.

There is nothing unresolved within the write boundary.

## Gates

- Direct-loader reflow: all 133 scoped files; three syntactic reflows.
- Direct-loader precheck: 94 proof-bearing items, 0 failing.
- Prosecheck: 133 files, 0 errors, 0 warnings.
- Rendercheck: 133 files, clean under real KaTeX.
- Citecheck: scoped files clean.
- Depcheck, fwdcheck, and extcheck: no hard errors; reported warnings are
  pre-existing global warnings outside this batch.
- `validate-plan research/plan-spec.json`: pass; redundancy warnings only.
- Metadata scan: all scoped files remain draft/session with no forbidden
  verification state.
