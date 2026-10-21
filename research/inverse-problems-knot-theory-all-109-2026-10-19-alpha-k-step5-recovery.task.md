# Step 5 adjudication — group **k**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the group Alpha for batches 31, 32, 33: 3 A/B pair(s), 6 page(s), 50 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **31**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-31-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **32**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-32-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **33**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-33-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/inverse-problems-knot-theory-all-109-2026-10-19-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 31 | `spatial-bv-and-total-variation-regularization` | A | inverse-problems | 3058 | `radon-measures-and-the-riesz-markov-kakutani-theorem`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `bounded-variation-and-riemann-stieltjes`, `tempered-distributions-and-the-fourier-transform`, `strongly-continuous-semigroups-and-hille-yosida`, `sard-theorem-and-transversality`, `hausdorff-measure-and-hausdorff-dimension` |
| 31 | `spatial-bv-and-total-variation-regularization-examples` | B | inverse-problems | 3059 | `spatial-bv-and-total-variation-regularization` |
| 32 | `tv-source-certificates-and-geometric-convergence` | A | inverse-problems | 3060 | `spatial-bv-and-total-variation-regularization`, `variational-source-conditions-and-bregman-rates`, `proximal-gradient-and-accelerated-composite-optimization`, `reeb-stability-and-global-foliation-constructions` |
| 32 | `tv-source-certificates-and-geometric-convergence-examples` | B | inverse-problems | 3061 | `tv-source-certificates-and-geometric-convergence` |
| 33 | `sparse-recovery-and-nullspace-certificates` | A | inverse-problems | 3062 | `inverse-problems-identifiability-and-stability`, `linear-operators-pseudoinverses-and-picard-criteria`, `proximal-gradient-and-accelerated-composite-optimization` |
| 33 | `sparse-recovery-and-nullspace-certificates-examples` | B | inverse-problems | 3063 | `sparse-recovery-and-nullspace-certificates`, `decision-theoretic-upper-bounds-and-oracle-risk` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `spatial-bv-and-total-variation-regularization` — Spatial BV, finite perimeter, and TV conventions (23 item(s))

- `lem-ip-distributional-radon-representation-unique` · lemma — Uniqueness of a Radon measure representing a distribution
- `lem-ip-vector-radon-variation-is-radon` · lemma — Variation of a finite vector Radon measure is Radon
- `lem-ip-open-euclidean-locally-finite-smooth-partition` · lemma — Locally finite smooth partitions of unity on Euclidean open sets
- `lem-ip-smooth-compact-support-dense-in-c0` · lemma — Smooth compactly supported functions are dense in C0 on an open Euclidean set
- `lem-ip-lw-integral-inequality` · lemma — Loomis–Whitney integral inequality
- `lem-ip-bv-zero-gradient-constant-on-connected-domain` · lemma — A zero distributional gradient is constant on a connected domain
- `lem-ip-l1-sequence-compactness-by-cell-averages` · lemma — Sequence compactness in L1 by finite cell averages
- `lem-ip-lipschitz-graph-area-and-calculus-under-countable-choice` · lemma — Lipschitz graph area and calculus under Countable Choice
- `def-ip-spatial-bv-and-distributional-tv` · definition — Spatial BV and distributional total variation
- `lem-ip-unit-vector-density-has-scalar-variation` · lemma — A unit vector density has scalar variation measure
- `lem-ip-euclidean-radon-representation-under-countable-choice` · lemma — Euclidean real Radon representation under Countable Choice
- `lem-ip-bv-test-field-characterization-and-lsc` · lemma — Test-field formula and L1 lower semicontinuity of spatial TV
- `def-ip-boundary-tv-conventions` · definition — Full-space, Dirichlet, and Neumann TV conventions
- `lem-ip-bv-smooth-coarea` · lemma — Coarea identity for smooth scalar functions
- `lem-ip-bv-one-sided-trace-on-lipschitz-graph` · lemma — One-sided BV traces and Green identity on a Lipschitz graph
- `lem-ip-bv-strict-approximation` · lemma — Strict smooth approximation in BV
- `lem-ip-bv-lipschitz-trace-and-zero-extension` · lemma — Trace formula and bounded zero extension on Lipschitz domains
- `lem-ip-bv-coarea-formula` · lemma — Coarea formula for spatial BV
- `lem-ip-bv-sobolev-inequality` · lemma — BV Sobolev inequality in full space
- `lem-ip-bv-extension-and-translation` · lemma — BV extension and translation bounds
- `lem-ip-bv-compactness-lower-semicontinuity` · lemma — Compactness and lower semicontinuity for bounded-domain BV
- `lem-ip-bv-extension-translation-and-coarea` · lemma — BV extension, translation, and coarea
- `lem-ip-finite-perimeter-relative-isoperimetry` · lemma — Relative isoperimetric inequality on bounded connected Lipschitz domains

### `spatial-bv-and-total-variation-regularization-examples` — Spatial BV, finite perimeter, and TV conventions — Examples and Counterexamples (3 item(s))

- `ex-ip-bv-jump-across-smooth-curve` · example — A smooth-curve jump has perimeter total variation
- `cex-ip-oscillatory-sequence-unbounded-tv` · counterexample — An oscillatory L1-bounded sequence with unbounded spatial TV
- `ex-ip-neumann-constants-and-dirichlet-boundary-cost` · example — Neumann constants and the Dirichlet boundary cost

### `tv-source-certificates-and-geometric-convergence` — TV source certificates and level-set convergence (15 item(s))

- `def-ip-tv-functional-on-l2-distributional-variation` · definition — Distributional TV as an extended functional on L²
- `def-ip-tv-level-set-representatives-and-boundaries` · definition — Canonical TV level sets and their boundaries
- `def-ip-tv-variational-curvature` · definition — Variational curvature of a finite-perimeter set
- `lem-ip-tv-l2-finite-variation-has-radon-derivative` · lemma — Finite L² distributional variation has a finite Radon derivative
- `lem-ip-tv-l2-functional-properties` · lemma — Convexity, lower semicontinuity, and BV agreement of L² TV
- `def-ip-tv-dual-source-certificate` · definition — Dual source certificates for TV regularization
- `lem-ip-planar-isoperimetric-inequality-for-finite-perimeter-sets` · lemma — Sharp planar isoperimetric inequality for finite-perimeter sets
- `lem-ip-tv-l2-cutoff-approximation` · lemma — Compactly supported BV cutoffs for finite-variation L² functions
- `lem-ip-tv-dual-attainment-and-certificate-limit` · lemma — Dual attainment and convergence of TV source certificates
- `lem-ip-tv-l2-coarea-formula` · lemma — Coarea for finite-variation L² functions
- `lem-ip-tv-l2-sobolev-inequality` · lemma — Full-space BV Sobolev inequality for L² distributional TV
- `lem-ip-neumann-bv-sobolev-poincare` · lemma — BV Sobolev–Poincaré inequality for Neumann TV
- `lem-ip-tv-vanishing-noise-primal-compactness` · lemma — Primal compactness and selection of a minimum-TV limit
- `lem-ip-tv-level-set-uniform-density-and-hausdorff` · lemma — Uniform density and Hausdorff convergence of TV level-set boundaries
- `thm-ip-2d-tv-level-set-convergence` · theorem — Two-dimensional TV level-set convergence under a source condition

### `tv-source-certificates-and-geometric-convergence-examples` — TV source certificates and level-set convergence — Examples and Counterexamples (3 item(s))

- `cex-ip-tv-minimum-truth-without-source-certificate` · counterexample — A minimum-TV truth can lack an L² source certificate
- `ex-ip-tv-circular-radon-zero-truth` · example — Circular Radon inversion at the zero truth
- `ex-ip-tv-bessel-deblurring-source-certificate` · example — A smooth Bessel-blur truth with an explicit TV source certificate

### `sparse-recovery-and-nullspace-certificates` — Sparse recovery and nullspace certificates (3 item(s))

- `def-ip-nullspace-property` · definition — The strict nullspace property
- `thm-ip-basis-pursuit-exact-recovery-under-nsp` · theorem — Exact basis-pursuit recovery under the strict nullspace property
- `lem-ip-nullspace-property-stability-cone` · lemma — A uniform stability margin for the nullspace cone

### `sparse-recovery-and-nullspace-certificates-examples` — Sparse recovery and nullspace certificates — Examples and Counterexamples (3 item(s))

- `ex-ip-failed-nsp-two-column-nonunique-basis-pursuit` · example — A two-column matrix where basis pursuit is not unique
- `ex-ip-nontrivial-order-one-nsp-matrix` · example — A nontrivial three-column matrix with the nullspace property
- `ex-ip-gaussian-identity-design-minimax-lower-bound` · example — Identity design: noiseless recovery and a noisy minimax lower bound

## Your seams

Your pages depend on another group's:

- `tv-source-certificates-and-geometric-convergence` requires `variational-source-conditions-and-bregman-rates` (group i, batch 27)
- `sparse-recovery-and-nullspace-certificates` requires `inverse-problems-identifiability-and-stability` (group a, batch 1)
- `sparse-recovery-and-nullspace-certificates` requires `linear-operators-pseudoinverses-and-picard-criteria` (group a, batch 2)

Another group's pages depend on yours:

- `compressed-sensing-with-noise-and-model-selection` (group l) requires your `sparse-recovery-and-nullspace-certificates`
- `eit-logarithmic-stability-and-conductivity-classes` (group o) requires your `spatial-bv-and-total-variation-regularization`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/inverse-problems-knot-theory-all-109-2026-10-19-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `inverse-problems-knot-theory-all-109-2026-10-19`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
