# Frontier 4 topology — Alpha step 6b/6c audit

Date: 2026-07-30

## Disposition

Step 6b/6c is complete for all 234 items and all 12 pages in the two topology
batches. Both Beta audits had complete coverage: batch 1 read 127/127 items and
changed 62; batch 2 read 107/107 items and changed 33 item files plus one page
summary. The touch ledger confirms 95 distinct Beta item repairs. Alpha verified
all 95 from the files on disk. There are no unresolved fatal defects, no
results added or deleted, and no item or page was published, judged, or marked
audited.

Of the 95 Beta repairs, 91 are accepted as written. Four are accepted after
Alpha amendment:

- `lem-metric-open-covers-have-point-finite-refinements`;
- `lem-pseudometric-from-a-normal-entourage-sequence`;
- `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity`;
- `ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence`.

No Beta repair was rejected or reverted. The 91 accepted without amendment,
grouped by page, are:

- Euclidean A: `cor-components-of-open-subsets-of-rn-are-polygonally-connected`,
  `cor-euclidean-compactness-equivalence-chart`,
  `cor-euclidean-spheres-are-path-connected`,
  `cor-rn-is-locally-compact-and-sigma-compact`,
  `cor-rn-is-polygonally-connected-and-locally-path-connected`,
  `fs-connected-subsets-of-rn-are-polygonally-connected`,
  `lem-euclidean-polygonal-paths-are-continuous`,
  `lem-polygonally-reachable-set-is-clopen`,
  `lem-pseudocompact-euclidean-subset-is-bounded`,
  `lem-pseudocompact-euclidean-subset-is-closed`,
  `lem-radial-normalisation-is-continuous`,
  `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`,
  `thm-open-connected-subsets-of-rn-are-polygonally-connected`,
  `thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space`,
  `thm-radial-straight-line-map-on-punctured-rn`, and
  `thm-rational-points-and-boxes-in-rn`.
- Euclidean B: `cex-closed-unbounded-euclidean-subset-not-compact`,
  `cex-open-bounded-euclidean-subset-not-compact`, and
  `cex-pseudocompact-noncompact-particular-point-space`.
- Nets A: `cor-compactness-via-universal-nets`,
  `def-net-convergence-and-cluster-point`,
  `fs-every-subnet-of-a-sequence-is-a-subsequence`,
  `lem-every-net-has-a-universal-subnet`,
  `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma`,
  `thm-first-countable-frechet-urysohn-sequential-hierarchy`, and
  `thm-net-cluster-point-iff-convergent-subnet`.
- Nets B: `ex-arens-space-is-sequential-not-frechet-urysohn`,
  `ex-cocountable-closure-detected-by-a-net-not-a-sequence`,
  `ex-free-ultrafilter-converging-in-a-convergent-sequence-space`,
  `ex-sequential-fan-is-frechet-urysohn-not-first-countable`, and
  `thm-unordered-summability-of-real-families`.
- Uniform A: `cor-compact-domain-maps-are-uniformly-continuous`,
  `cor-separated-uniformizable-iff-tychonoff`,
  `def-completion-of-a-uniform-space`, `def-gauge-of-pseudometrics`,
  `def-left-and-right-uniformities-of-a-topological-group`,
  `def-pointwise-and-uniform-convergence-uniformities`,
  `def-uniform-space-by-entourages`,
  `def-upper-and-roelcke-uniformities-of-a-topological-group`,
  `lem-compact-uniform-spaces-are-totally-bounded`,
  `lem-convergent-filters-are-cauchy`,
  `lem-countable-uniform-base-normalisation`,
  `lem-entourage-and-uniform-cover-dictionary`,
  `lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity`,
  `lem-finite-star-refinement-for-compact-hausdorff-spaces`,
  `lem-metric-uniformity-dictionary`,
  `lem-minimal-cauchy-filter-associated-to-a-cauchy-filter`,
  `lem-minimal-cauchy-filter-space-is-complete`,
  `lem-normal-sequences-of-entourages`,
  `lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space`,
  `lem-ultrafilters-on-totally-bounded-uniform-spaces-are-cauchy`,
  `lem-uniformizable-spaces-are-completely-regular`,
  `lem-uniformizable-spaces-are-regular`,
  `thm-entourage-uniformities-are-generated-by-gauges`,
  `thm-hausdorff-completion-of-a-uniform-space`,
  `thm-uniform-completion-universal-property-and-uniqueness`, and
  `thm-uniformity-induces-a-topology`.
- Uniform B: `ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic` and
  `ex-uncountable-cantor-cube-uniformizable-not-first-countable`.
- Paracompactness A: `fs-paracompactness-is-hereditary`,
  `fs-paracompactness-is-productive`,
  `lem-algebra-of-continuous-real-maps-on-a-space`,
  `lem-countably-compact-paracompact-hausdorff-is-compact`,
  `lem-locally-finite-unions-and-closures`,
  `lem-metric-point-finite-refinements-can-be-made-locally-finite`,
  `lem-paracompact-hausdorff-cover-shrinking`,
  `rem-paracompactness-choice-and-convention-ledger`, and
  `thm-stone-metric-spaces-are-paracompact`.
- Paracompactness B: `cex-paracompactness-is-not-open-hereditary`.
- Countability A: `cor-cardinal-functions-detect-countability-axioms`,
  `fs-lindelofness-is-hereditary`, `fs-lindelofness-is-productive`,
  `fs-separability-is-hereditary`,
  `fs-separable-spaces-are-second-countable`,
  `lem-cellularity-is-well-defined`, `lem-character-is-well-defined`,
  `lem-countable-local-bases-can-be-open-and-decreasing`,
  `lem-large-cantor-cubes-are-not-separable`,
  `lem-uncountable-delta-system-for-finite-sets`,
  `prop-continuous-image-density-and-lindelof-degree`,
  `prop-separable-spaces-are-ccc`,
  `rem-countability-axiom-implication-and-choice-ledger`,
  `thm-cantor-cubes-are-ccc`,
  `thm-countable-products-of-first-countable-spaces`,
  `thm-countable-products-of-second-countable-spaces`,
  `thm-metric-countability-equivalences`, and
  `thm-metric-weight-equals-density`.
- Countability B: `ex-cardinal-functions-of-a-one-point-compactification`,
  `ex-cardinal-functions-of-the-lower-limit-line`,
  `ex-countability-profile-of-omega-one`, and
  `ex-countability-profile-of-the-lower-limit-plane`.

The corrected Part (A)-then-Part (B) Ornstein chain is retained. Part (A)
produces the point-finite refinement; Part (B) consumes that refinement and
upgrades it to a locally finite refinement; Stone's theorem then concludes
paracompactness. The primary-chain title, Statement, dependencies, proof and
Remarks now agree. The completion, star-refinement, Frink, countability,
choice-ledger and raw-cardinal chains were also reread. No remaining
title/Statement-strength defect was found.

## Page audit

All 12 page files were read. Each A summary has exactly two nonempty prose
paragraphs, each below 150 words; current whitespace counts are 60/64, 48/55,
52/65, 64/68, 66/79 and 52/64 in page order. Every B page has zero authored
body paragraphs. Page lists agree with the batch artifacts. Alpha made no page
prose edit. The Beta correction to
`library/topology/partitions-of-unity-and-paracompactness.md` is accepted.

## Dependency-edge coverage

The required mechanical checklist is
`research/frontier-4-topology-audit-manifest.json`. It contains 1,024 declared
edges: 570 `published-backward` and 454 `same-batch`; there are zero
`cross-batch`, zero `forward`, zero unresolved and zero missing-source edges.
Every one of the 570 published-backward edges was checked by reading the source
use and the target body. All 79 companion B-to-A seams were separately checked:
9 Euclidean, 13 nets, 15 uniform, 10 hereditary/separation, 11
paracompactness, and 21 countability. The remaining same-batch edges were
reconciled against the two complete Beta audits. The two nonempty
`justified_by` declarations, on `def-weight-density-and-character` and
`def-lindelof-degree-and-cellularity`, were checked against all five same-page
well-definedness lemmas.

Alpha repairs changed the live graph after the manifest snapshot. The live
files have 1,040 edges: 579 published-backward and 461 same-batch, still with
zero cross-batch and zero direct forward edges. The exact delta is 17 added
edges and one removal:

- added
  `ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence`
  to `thm-continuity-characterised-by-nets`;
- added ten Frink dependencies:
  `lem-geometric-sequence-null`, `thm-infimum-property`, `lem-inf-epsilon`,
  `lem-finite-sum-laws`, `lem-rational-power-laws`,
  `lem-rational-power-monotone`, `def-uniform-space-by-entourages`,
  `def-filter`, `thm-strong-induction`, and the already stated exact
  definitions needed by those uses;
- added `lem-entourage-and-uniform-cover-dictionary` and
  `thm-uniformity-induces-a-topology` to
  `thm-compact-hausdorff-open-cover-uniformity`;
- added `lem-finite-star-refinement-for-compact-hausdorff-spaces`,
  `lem-symmetric-entourages-form-a-base`,
  `thm-uniformity-induces-a-topology`, and `def-compact-space` to the unique
  compatible-uniformity theorem;
- added `lem-geometric-sequence-null` to Ornstein Part (A);
- removed the insufficient `cor-archimedean-reciprocal` edge from the Frink
  lemma.

Each delta edge was audited directly. The batch/plan artifacts were not edited
under Alpha's write boundary, so the orchestrator must splice this exact live
delta before the final plan validation intended to describe authored
dependencies. Direct frontier `forward_refs` remain empty. The exact published
geometric-decay target does itself carry a previously declared and closed
forward reference; `fwdcheck` accepts the inherited propagation.

## Files changed by Alpha

Five item files changed after Beta:

1. `items/lem-metric-open-covers-have-point-finite-refinements.md`
2. `items/lem-pseudometric-from-a-normal-entourage-sequence.md`
3. `items/thm-compact-hausdorff-open-cover-uniformity.md`
4. `items/thm-compact-hausdorff-space-has-a-unique-compatible-uniformity.md`
5. `items/ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence.md`

Alpha also generated
`research/frontier-4-topology-audit-manifest.json` and this report. No page,
plan, spec, brief, resume, schema, architecture, or other normative file was
edited.

The first-touch item is
`thm-compact-hausdorff-open-cover-uniformity`. The other four item files are
twice-touched under `research/frontier-4-topology-touches.json`. The
orchestrator personally audited all four and recorded PASS:

- Ornstein Part (A): current construction, exact dyadic-decay dependency and
  Part (A)-to-Part (B) Remark pass.
- Frink pseudometric: infimum existence and epsilon approximation,
  nonnegative/positive weights, empty-chain base, strong chain compression,
  dyadic monotonicity, and entourage upward closure pass. Dropping it would
  break gauge generation, countable-base pseudometrization and downstream
  uniformizability/completely-regular machinery.
- Unique compatible uniformity: both cover-structure inclusions,
  induced-topology recovery, finite witness construction, ball refinement and
  dictionary uniqueness pass.
- Coordinate-reading example: continuity of product projections composed with
  the net characterization licenses the repaired coordinate argument; the
  increasing subsequence indices make the alternating-coordinate witness
  well-defined.

## Consolidated fatal-error ledger

The following is the consolidated step-9 ledger. “Repaired” means verified from
the current file by Alpha; “amended” means Alpha found and repaired a remaining
fatal gap after the Beta repair.

### Batch 1 fatal defects

| Item(s) | Classification and location | Final disposition |
|---|---|---|
| `lem-pseudocompact-euclidean-subset-is-closed`, `lem-radial-normalisation-is-continuous` | Invalid/incompletely licensed continuity; Proof and Facts/deps | Beta proof/dependency repair accepted |
| `thm-net-cluster-point-iff-convergent-subnet`, `lem-every-net-has-a-universal-subnet` | Invalid subnet indices/value map; Proof | Beta replacement accepted |
| `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma` | Missing exact universal-net criterion and choice accounting; Proof/Facts | Beta repair accepted |
| `fs-every-subnet-of-a-sequence-is-a-subsequence` | Invalid counterexample indexing; Refutation | Beta replacement accepted |
| `thm-unordered-summability-of-real-families` | Finite-support overstatement and missing support/bounds proof; Title/Statement/Proof | Beta restatement/replacement accepted |
| `ex-free-ultrafilter-converging-in-a-convergent-sequence-space` | Ultrafilter and freeness unproved; Proof | Beta replacement accepted |
| sequential fan, Arens space, uncountable Cantor-cube examples | Hidden/unjustified choice; Proof/Facts | Beta canonical/hypothesis repairs accepted |
| `thm-uniformity-induces-a-topology` | Entourage balls incorrectly treated as open; Proof | Beta replacement accepted |
| `lem-metric-uniformity-dictionary` | Filter-base verification missing; Proof | Beta replacement accepted |
| `lem-entourage-and-uniform-cover-dictionary` | Insufficient star strength and both recovery inclusions; Proof | Beta replacement accepted |
| `lem-normal-sequences-of-entourages` | Bad indexing and hidden simultaneous choice; Statement/Proof | Beta restatement/replacement accepted |
| `lem-pseudometric-from-a-normal-entourage-sequence` | Frink compression absent; Proof | Beta repair materially amended by Alpha; final proof personally passes |
| `thm-entourage-uniformities-are-generated-by-gauges` | Hidden simultaneous pseudometric choice; Proof/Facts | Beta choice-free construction accepted |
| `def-completion-of-a-uniform-space` | Pullback condition too weak; Definition | Beta restatement accepted |
| six minimal-filter/completion items from `lem-minimal-cauchy-filter-associated-to-a-cauchy-filter` through `thm-uniform-completion-universal-property-and-uniqueness` | Incomplete construction, composition, separation, completeness, density, extension and uniqueness; Proof | Beta rebuilt block accepted |
| `lem-compact-uniform-spaces-are-totally-bounded` | Entourage balls incorrectly treated as open; Proof | Beta repair accepted |
| `lem-finite-star-refinement-for-compact-hausdorff-spaces` | Finite shrinking/twice-star construction absent; Proof | Beta replacement accepted |
| `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity` | Required cover inclusion unproved; Proof | Beta repair amended by Alpha; final chain personally passes |
| `cor-compact-domain-maps-are-uniformly-continuous` | Insufficient target-root estimate; Proof | Beta repair accepted |
| `lem-countable-uniform-base-normalisation` | Hidden countable choice; Proof | Beta least-index recursion accepted |
| the two `lem-uniformizable-spaces-are-*regular` items | Closure/separating function unproved; Proof | Beta replacements accepted |
| three group/function-space uniformity definitions | Uniformity well-definedness absent; Definition/Statement | Beta direct verifications accepted |

### Batch 2 fatal defects

| Item(s) | Classification and location | Final disposition |
|---|---|---|
| `lem-locally-finite-unions-and-closures` | Arbitrary neighbourhood treated as open; Proof | Beta open-subneighbourhood repair accepted |
| `lem-paracompact-hausdorff-cover-shrinking` | Whole shrinking construction missing; Proof | Beta two-stage construction accepted |
| both Ornstein lemmas | Part (A) materially incomplete; Part (B) had wrong arbitrary-cover input; Title/Statement/Proof/Facts/Remark | Beta restored primary chain; Alpha amended Part (A); final chain passes |
| `thm-metric-weight-equals-density` | Rational-ball proof and raw finite/empty cases missing; Proof | Beta replacement accepted |
| delta-system, Cantor-cube ccc, and large-cube nonseparability lemmas | Essential combinatorial proofs absent; Proof | Beta replacements accepted |
| `fs-lindelofness-is-productive` | Nonexistent least rational and unsupported thinning; Refutation | Beta enumerated-rational repair accepted |
| `lem-countable-local-bases-can-be-open-and-decreasing` | Hidden countable choice; Proof | Beta canonical-interior repair accepted |
| `prop-continuous-image-density-and-lindelof-degree` | Choice missing from Statement/Given | Beta hypothesis repair accepted |
| `fs-separable-spaces-are-second-countable` | Hidden arbitrary choice; Refutation | Beta least eligible basis index accepted |
| one-point-compactification cardinal example | Choice-sensitive arbitrary-discrete overclaim; example claim/prose | Beta discrete-real witness accepted |
| paracompact productivity/heredity false statements and worked counterexample | Missing lower-limit/choice/T1 dependencies; Facts/Refutation | Beta dependency/hypothesis repairs accepted |
| character and cellularity well-definedness | Well-ordering theorem mis-cited for cardinal suprema; Facts/Proof | Beta direct union-of-cardinals proofs accepted |
| metric countability equivalence and two countable-product theorems | Missing countable-union/finite-support closure; Facts/Proof | Beta explicit constructions accepted |
| `fs-separability-is-hereditary` | Wrong topology dependency and unproved basis; Facts/Refutation | Beta basis-criterion repair accepted |
| lower-limit-plane profile | Antidiagonal conclusions lacked obstruction dependencies; Facts/example | Beta dependency/prose repair accepted |
| lower-limit-line cardinal profile | Raw lower bounds and continuum weight argument absent; Facts/example | Beta witness/cardinal repair accepted |
| paracompactness choice ledger and paracompactness page summary | False claim that Ornstein Part (B) restarted independently; Remark/page summary | Beta primary-source correction accepted |
| countability choice ledger | Unsupported companion/corpus scope claim; Remark | Beta deletion accepted |

### Fatal defects found or completed by Alpha

| Item | Classification and exact location | Disposition |
|---|---|---|
| `lem-metric-open-covers-have-point-finite-refinements` | Ambiguous least-index condition invalidated the later minimality inference; dyadic-radius existence lacked the exact convergence dependency; Remark contradicted the A-to-B chain. Proof 1.1/3.1/3.2, Facts/deps, Remark | Repaired definition and inference, added `lem-geometric-sequence-null`, corrected Remark; personal PASS |
| `thm-compact-hausdorff-open-cover-uniformity` | “Compatible” was asserted without proving equality with the original topology. Statement conclusion/Proof | Added dictionary/topology dependencies and both topology inclusions via open refinement and star refinement; first-touch item, precheck PASS |
| `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity` | Reverse cover inclusion for an arbitrary compatible uniformity was circular/unsupported. Proof 1.2 onward | Added finite star-refinement, symmetric-root, topology and compactness facts; supplied finite witnesses and one entourage whose balls refine the cover; personal PASS |
| `ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence` | Product universal property was cited for an unstated iff characterization of product-net convergence. Fact L4/Verification 2.1 | Narrowed to the needed direction and composed continuous projections with `thm-continuity-characterised-by-nets`; personal PASS |
| `lem-pseudometric-from-a-normal-entourage-sequence` | Dyadic decay mis-cited; infimum existence absent; triangle and controlled-ball steps lacked infimum epsilon approximation; compression omitted the empty base and positivity; final entourage claim lacked filter upward closure. Facts/deps and Proof 1.1–3.1 | Added exact GLB, epsilon, finite-sum, rational-power, strong-induction, uniformity and filter dependencies; replaced the proof details; personal PASS |

## Gates and residual gaps

- Direct-loader `reflow`: five Alpha-changed items, clean.
- Direct-loader `precheck`: 5 checked, 0 failing.
- `depcheck`: exit 0; no cycles, all references resolve, no draft item occurs
  on a published page.
- `fwdcheck`: exit 0.
- `extcheck`: exit 0.
- `depsource`: exit 0; 0 unresolved, 11,891 dependencies to published pages,
  0 to an earlier planned page, 418 same/unlisted classifications.
- `prosecheck`: exit 0; 1,933 files, 0 errors; 678 global heuristic warnings.
- `citecheck`: exit 0; 1,832 items scanned; only global heuristic triage
  warnings.
- `rendercheck`: exit 0; 1,933 files clean under real KaTeX.
- Final global `validate-plan research/plan-spec.json`: one unrelated concurrent
  hard error remains: page `cardinal-arithmetic-and-cofinality` has an item
  depending on `monotone-sequences-and-cauchy-completeness` outside its declared
  prerequisite closure. This is outside the topology Alpha write boundary and
  was not edited. The same gate passed earlier in this audit before that
  concurrent external change.

The remaining required handoff is therefore mechanical/orchestrator-owned:
splice the 17-added/one-removed live dependency delta into the plan artifacts
and resolve the unrelated cardinal-arithmetic prerequisite error. There is no
unresolved mathematical, citation, choice, page-summary, title, Statement, or
same-pair seam defect in Frontier 4 topology.
