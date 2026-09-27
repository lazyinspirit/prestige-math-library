# Shard 08 repair report

All 32 assigned original items have current per-item receipts: 16 repaired, 14 accepted, 2 deferred. All 22 centrally reserved maintenance items have receipts: 18 repaired and 4 accepted. Latest receipt SHA-256 values match current item files. No commits or autopilot transitions were run.

## Original item dispositions

| Position | Item | Decision |
| ---: | --- | --- |
| 8 | `thm-recursion` | repair |
| 18 | `thm-nakayama-lemma` | repair |
| 28 | `cor-nowhere-differentiable-functions-are-residual-in-c01` | repair |
| 38 | `thm-continuous-mapping-theorem` | accept |
| 48 | `def-product-measure-on-sigma-finite-spaces` | accept |
| 58 | `thm-lebesgue-stieltjes-correspondence-with-distribution-functions` | repair |
| 68 | `thm-uniform-integrability-of-conditional-expectations-of-one-variable` | accept |
| 78 | `thm-fatou-lemma` | repair |
| 88 | `def-conditional-expectation-as-an-ae-class` | accept |
| 98 | `prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class` | accept |
| 108 | `cor-finite-nonnegative-integral-implies-finite-almost-everywhere` | repair |
| 118 | `def-integral-of-a-nonnegative-simple-function` | accept |
| 128 | `prop-the-null-set-definition-is-independent-of-the-smooth-atlas` | repair |
| 138 | `cor-cohomology-over-a-field-is-dual-to-homology-for-finite-dimensional-complexes` | repair |
| 148 | `thm-root-space-decomposition-relative-to-a-cartan-subalgebra` | repair |
| 158 | `cor-second-countable-lch-locally-finite-borel-measures-are-regular` | repair |
| 168 | `thm-total-variation-is-a-measure` | repair |
| 178 | `cor-the-loglog-bound-eventually-dominates-the-classical-bound` | accept |
| 188 | `cor-positive-entire-harmonic-functions-are-constant` | repair |
| 198 | `cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter` | defer |
| 208 | `thm-onan-scott-classification-of-finite-primitive-groups` | defer |
| 218 | `lem-dominant-affine-image-contains-principal-open` | repair |
| 228 | `thm-halting-is-sigma-one-complete` | accept |
| 238 | `def-morphism-to-projective-space-homogeneous-coordinates` | repair |
| 248 | `lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets` | repair |
| 258 | `thm-smooth-partitions-of-unity-exist-on-manifolds` | repair |
| 268 | `def-annihilator-ideal-and-minimal-polynomial-of-an-endomorphism` | accept |
| 278 | `def-invertible-matrix-and-general-linear-group` | accept |
| 288 | `ex-gaussian-and-eisenstein-frobenius` | accept |
| 298 | `fs-complex-symmetric-matrices-are-unitarily-diagonalizable` | accept |
| 308 | `fs-zero-product-property-modulo-n` | accept |
| 318 | `thm-second-mertens-theorem-for-primes` | accept |

## Reserved maintenance repairs

- `lem-pointwise-lipschitz-sets-in-c01-are-closed` — repair; immediate before snapshot in `agent-08-before-maintenance/lem-pointwise-lipschitz-sets-in-c01-are-closed.md`.
- `thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure` — repair; immediate before snapshot in `agent-08-before-maintenance/thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure.md`.
- `thm-harnack-inequality-on-a-ball` — repair; immediate before snapshot in `agent-08-before-maintenance/thm-harnack-inequality-on-a-ball.md`.
- `thm-liouville-theorem-for-bounded-harmonic-functions` — repair; immediate before snapshot in `agent-08-before-maintenance/thm-liouville-theorem-for-bounded-harmonic-functions.md`.
- `cor-entire-harmonic-functions-with-bounded-gradient-are-affine` — repair; immediate before snapshot in `agent-08-before-maintenance/cor-entire-harmonic-functions-with-bounded-gradient-are-affine.md`.
- `lem-derivative-estimate-proof-of-one-sided-harmonic-liouville` — repair; immediate before snapshot in `agent-08-before-maintenance/lem-derivative-estimate-proof-of-one-sided-harmonic-liouville.md`.
- `cex-liouville-needs-one-sided-boundedness` — repair; immediate before snapshot in `agent-08-before-maintenance/cex-liouville-needs-one-sided-boundedness.md`.
- `thm-stieltjes-interval-set-function-is-a-premeasure` — repair; immediate before snapshot in `agent-08-before-maintenance/thm-stieltjes-interval-set-function-is-a-premeasure.md`.
- `def-regular-root-hyperplane-arrangement-in-a-cartan-subalgebra` — accept; definition is conditional on a supplied finite root set.
- `prop-centralizer-of-a-cartan-element-from-its-vanishing-roots` — repair; proof now uses its supplied decomposition.
- `thm-triangular-decomposition-from-a-chosen-positive-root-system` — repair; supplied decomposition and direct Jacobi bracket proof.
- `lem-central-elements-have-weight-zero` — repair; unused root-structure edges removed.
- `prop-casimir-eigenvalue-on-a-highest-weight-module` — repair; direct choice-free proof from supplied root data and finite maximal-toral lemma.
- `thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra` — repair; full AC and the published complete connected-group conjugacy theorem.
- `lem-local-chevalley-restriction-for-kostant-freeness` — repair; full AC bridge for an arbitrary Cartan.
- `thm-kostant-harmonic-decomposition-of-the-symmetric-algebra` — repair; full AC inherited from local Chevalley and finite-Weyl invariant freeness.
- `lem-measurable-density-chart-integrals-agree-on-overlaps` — repair; AC_omega for Borel substitution and boundary-face nullity.
- `thm-chart-gluing-defines-a-countably-additive-borel-density-measure` — accept; conditional on supplied gluing data.
- `thm-density-measure-is-independent-of-the-chart-gluing` — repair; AC_omega for gluing existence and overlap substitution.
- `ex-chart-gluing-recovers-euclidean-lebesgue-measure` — repair; AC_omega for current intrinsic-measure, completion, and box-mass suppliers.
- `ex-density-measure-in-two-overlapping-circle-charts` — accept; already states AC_omega.
- `ex-positive-weighted-volume-on-an-open-interval` — accept; already states AC_omega.

## Substantial unresolved prerequisites

- `cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter`: empty case and exponent arithmetic are sound, but the two-narrow input still needs locally discharged weak perfect graph theorem, substitution perfection and structural bull-free chain. Chudnovsky–Safra, *The Erdős–Hajnal conjecture for bull-free graphs*, PDF pp.2 and 11, explicitly lists weak perfection and substitution as external inputs.
- `thm-onan-scott-classification-of-finite-primitive-groups`: proof [A2] assumes the five-type case partition/exclusivity. The local socle/affine/product lemmas do not supply diagonal/twisted-wreath alternatives and exact convention. Soicher, *Primitive permutation groups*, PDF pp.2–5, is a survey and refers to Dixon–Mortimer for proof. The LPS URL in historical evidence returned 404 in this session; its full text was not newly read. The earlier local audit describes Schreier-dependent missing branches.

## Changed-claim consumer closure

- `cor-second-countable-lch-locally-finite-borel-measures-are-regular` and reserved positive-density Radon theorem: both now state `AC_omega`; exact full closures are `agent-08-impact-regularity.json` and `agent-08-impact-density-radon.json`. Shard02 repaired six directly affected density consumers; the others already assumed choice.
- `thm-smooth-partitions-of-unity-exist-on-manifolds`: now states `AC_omega`, uses an at-most-countable shrinking and groups normalized bumps by original cover index. `agent-08-impact-partitions.json` records 11 original direct and 243 indirect item paths. Shards01/02/10 closed direct and descendant uses; root owns the unaffected comparative page remark.
- `prop-the-null-set-definition-is-independent-of-the-smooth-atlas`: now states `AC_omega` and uses elementary closed-cube nullity consistently. `agent-08-impact-atlas-independence.json` records 2 direct and 46 indirect paths; shard07 repaired definition/detector terminology and shard02 repaired generic-height downstream use.
- `lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets`: now states `AC_omega` for the exact elementary/Lebesgue-null bridge. `agent-08-impact-euclidean-diffeomorphism-nullity.json` records 2 direct and 6 indirect paths; both direct uses already state `AC_omega`.
- Harmonic chain: reserved Harnack, bounded Liouville, bounded-gradient corollary, derivative-estimate lemma and original positive-entire corollary now state `AC_omega`. Five `agent-08-impact-<ID>.json` files trace direct and indirect uses. Shard06 repaired compact Harnack/convergence, shard09 repaired kernel-ratio example, and this shard made the `x_1` counterexample independent of Liouville.
- `def-morphism-to-projective-space-homogeneous-coordinates`: literal Definition expansion is recorded in `agent-08-impact-projective-coordinate-definition.json` (4 direct, 5 indirect). Each direct user applies the unchanged tuple/overlap criterion; the page has only item-list metadata.
- `thm-root-space-decomposition-relative-to-a-cartan-subalgebra`: now states full AC for an arbitrary nilpotent self-normalizing Cartan. The published AC Cartan=maximal-toral bridge and published choice-free finite root lemma supply the exact missing proof. `agent-08-impact-root-space-decomposition.json` records 8 historical direct and 107 indirect item paths. Five direct consumers were closed here using supplied-root conditional arguments or an independent Casimir calculation; shards02/04/09 repaired the remaining direct root propositions and their descendants. The indirect Cartan-conjugacy branch was repaired here under AC; shard10 repaired dense regularity and cut the old invariant-injectivity edge with an independent proof. No root-origin consumer remains open.
- `thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra`: the older unsupported maximal-torus argument now cites the published full connected-group conjugacy proof under AC. `agent-08-impact-cartan-conjugacy.json` records 1 direct and 33 historical indirect items. Shard10 repaired dense regularity under AC and removed the old edge to invariant injectivity, closing this branch.
- Local Chevalley restriction and Kostant harmonic decomposition now both state full AC for their current suppliers. `agent-08-impact-local-chevalley-kostant.json` records the chain from local Chevalley to Kostant to freeness; `agent-08-impact-kostant-harmonic.json` records freeness as Kostant's sole direct consumer. Shard10 repaired freeness with AC and verified it has no item descendants. Root updated both affected Lie-theory page assumption summaries.
- Density overlap and intrinsic chart gluing now explicitly state `AC_omega`. `agent-08-impact-density-overlap.json` records 1 direct and 21 indirect historical/current item paths; `agent-08-impact-density-independence.json` records 11 direct and 10 indirect. Shard02 AC-qualified global-measure witnesses and supplied a direct choice-free proof for zero-dimensional weighted counting, removing that old edge. Our Euclidean example was AC-qualified; the circle and weighted-interval examples already were. The fixed-data chart-gluing measure theorem remains a valid conditional statement. The density page already states countable choice throughout, and root added the same scope to its examples page. No consumer remains open.

## Other resolved prerequisite chains

- Simple-integral definition accepted unchanged: current well-definedness lemma already includes zero-coefficient complement cells. Current simple-indefinite measure, MCT, zero-integral criterion, conditional class, Fatou, product-section equality, Portmanteau/DCT and conditional uniform-integrability uses were rechecked. Shard09 independently concurred on the central integral chain. A missing zero-criterion direct simple-integral-agreement citation was routed to root; its mathematical proof remains sound.
- Stieltjes premeasure repaired choice-free via a fixed rational enumeration and least eligible endpoint witnesses. Shard06 closed existence under `AC_omega`; shard07 repaired uniqueness on a genuine pi-system. The assigned correspondence now has a repaired/no-unresolved receipt.
- Total variation measure countable additivity uses only finitely many near-maximizing partitions at a time, including infinite variation. Shard03 was notified for its simple-integral consumer.

## Checks and scope

Focused precheck and rendercheck passed after each local edit; the six geometry items also passed a focused precheck/rendercheck batch and `git diff --check`. No-edit accepts match immediate-before snapshots and mathematical reading. Repo-wide depcheck fails, including `published-unaudited` metadata on five of these six geometry items plus many other findings and page cycles; no self-certification stamp was added, and its filtered output reports no targeted dependency defect. Changed-claim impact files include published/draft item dependency/reference paths and page scans; outside-owner closure files are named in replacement receipts. No current shard08 receipt hash is stale. Sources actually retrieved in this turn were the Etingof, Chudnovsky–Safra, and Soicher PDFs above. Other citations in item metadata were not newly fetched. Root owns ledger, shared page and plan integration.
