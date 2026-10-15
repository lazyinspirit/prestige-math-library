# Step 5 adjudication — group **k**, run `bayesian-computational-statistics-62`

You are the group Alpha for batches 35, 36, 37: 3 A/B pair(s), 6 page(s), 84 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **35**: `research/bayesian-computational-statistics-62-batch-35-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **36**: `research/bayesian-computational-statistics-62-batch-36-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **37**: `research/bayesian-computational-statistics-62-batch-37-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/bayesian-computational-statistics-62-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 35 | `mcmc-ergodicity-and-mixing` | A | bayesian-computational-statistics | 2110 | `gibbs-sampling-and-scan-schemes` |
| 35 | `mcmc-ergodicity-and-mixing-examples` | B | bayesian-computational-statistics | 2111 | `mcmc-ergodicity-and-mixing` |
| 36 | `mcmc-clt-and-monte-carlo-standard-error` | A | bayesian-computational-statistics | 2112 | `mcmc-ergodicity-and-mixing`, `concentration-inequalities-and-tail-bounds`, `linear-prediction-for-dependent-data`, `temporal-point-process-intensity-and-likelihood`, `polyhedral-selective-inference`, `gaussian-process-priors-and-posterior-laws` |
| 36 | `mcmc-clt-and-monte-carlo-standard-error-examples` | B | bayesian-computational-statistics | 2113 | `mcmc-clt-and-monte-carlo-standard-error` |
| 37 | `hamiltonian-monte-carlo-and-leapfrog` | A | bayesian-computational-statistics | 2114 | `numerical-optimization-for-statistical-computation`, `metropolis-hastings-algorithm-and-invariance`, `picard-lindelof-and-first-order-odes`, `codimension-one-foliations-and-secondary-classes`, `finite-sample-point-estimation-and-unbiased-optimality`, `conjugate-families-and-posterior-prediction` |
| 37 | `hamiltonian-monte-carlo-and-leapfrog-examples` | B | bayesian-computational-statistics | 2115 | `hamiltonian-monte-carlo-and-leapfrog` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `mcmc-ergodicity-and-mixing` — General-state MCMC ergodicity and mixing (21 item(s))

- `lem-total-variation-coupling-and-kernel-contraction` · lemma — Total variation duality, kernel contraction, and coupling bound
- `def-petite-set-for-markov-kernel` · definition — Petite sets for a Markov kernel
- `def-phi-irreducible-chain` · definition — Phi-irreducibility for a general-state Markov kernel
- `def-small-set-minorization-and-drift` · definition — Small-set minorization and geometric drift
- `lem-countably-generated-kernel-lebesgue-decomposition` · lemma — Measurable Lebesgue decomposition of a kernel on a countably generated space
- `lem-positive-triple-set-yields-uniform-overlap` · lemma — A positive triple set has uniformly overlapping sections
- `def-general-state-aperiodic-markov-chain` · definition — Aperiodicity for a general-state Markov kernel
- `def-harris-recurrent-markov-chain` · definition — Harris recurrence relative to an irreducibility measure
- `lem-bivariate-drift-minorization-coupling-rate` · lemma — A bivariate drift and minorization bound geometric coupling error
- `lem-drift-sublevel-union-is-petite` · lemma — A drift sublevel enlargement of a small set is petite
- `lem-invariant-law-integrates-bounded-set-drift` · lemma — An invariant law integrates a drift function bounded on its small set
- `lem-invariant-law-positive-set-and-almost-sure-hitting` · lemma — Invariant mass and almost-sure hitting of accessible sets
- `lem-iterated-kernel-density-convolution-bounds` · lemma — Iterated kernel densities retain convolution lower bounds
- `thm-uniform-ergodicity-from-whole-space-minorization` · theorem — Whole-space minorization gives uniform geometric ergodicity
- `lem-aperiodic-minorization-times-are-cofinite` · lemma — Aperiodicity makes minorization times eventually consecutive
- `lem-phi-irreducible-chain-has-small-set` · lemma — A countably generated phi-irreducible chain has a positive-measure small set
- `lem-aperiodic-petite-set-with-accessible-small-set-is-small` · lemma — A petite drift enlargement is small under aperiodicity
- `lem-small-set-coupling-converges-from-almost-every-start` · lemma — Small-set coupling yields almost-everywhere total-variation convergence
- `lem-geometric-drift-minorization-reduces-to-bounded-small-set` · lemma — Geometric drift yields a bounded small set and bivariate drift
- `thm-general-state-markov-chain-convergence-under-recurrence-conditions` · theorem — General-state Markov-chain convergence under recurrence conditions
- `thm-geometric-ergodicity-under-drift-and-minorization` · theorem — Geometric ergodicity under drift and small-set minorization

### `mcmc-ergodicity-and-mixing-examples` — General-state MCMC ergodicity and mixing — Examples (6 item(s))

- `ex-null-set-start-fails-total-variation-convergence` · example — A phi-irreducible chain can fail to converge from a pi-null start
- `ex-periodic-finite-chain-fails-time-convergence` · example — A finite periodic chain need not converge in total variation
- `ex-uniformly-ergodic-chains-can-mix-arbitrarily-slowly` · example — Uniform ergodicity gives no uniform practical mixing time
- `ex-gibbs-chain-invariant-but-reducible` · example — An invariant Gibbs target can still give reducible dynamics
- `ex-sticky-general-state-chain-is-not-geometrically-ergodic` · example — A sticky general-state chain can converge without a geometric rate
- `ex-drift-minorization-geometric-ergodicity-on-a-birth-death-chain` · example — Drift and minorization certify geometric ergodicity

### `mcmc-clt-and-monte-carlo-standard-error` — MCMC central limit theorems, MCSE, and long-run variance (43 item(s))

- `def-flegal-jones-obm-batch-size-conditions` · definition — Flegal–Jones overlapping-batch size conditions
- `def-geometric-and-uniform-ergodicity-for-mcmc-clt` · definition — Geometric and uniform ergodicity for MCMC CLTs
- `def-long-run-variance-for-stationary-markov-chain` · definition — Long-run variance for a stationary Markov chain
- `def-mixing-coefficients-for-stationary-markov-chain` · definition — Strong, uniform, and maximal-correlation mixing coefficients
- `def-polynomial-ergodicity-with-integrable-rate-envelope` · definition — Polynomial ergodicity with an integrable rate envelope
- `def-state-dependent-one-step-minorization` · definition — State-dependent one-step minorization
- `lem-square-integrable-markov-transition-conditional-expectation` · lemma — Kernel conditional expectations for square-integrable Markov observables
- `lem-countably-generated-kernel-stable-sub-sigma-field` · lemma — A kernel has a countably generated stable sub-sigma-field containing a given observable
- `lem-gaussian-quadratic-form-centered-even-moment-bound` · lemma — Centered Gaussian quadratic forms have dimension-free even-moment bounds
- `thm-summable-l-two-projections-give-stationary-clt` · theorem — Summable conditional projections give a stationary martingale CLT
- `lem-finite-moment-moving-window-increments` · lemma — Finite moments control increments over short moving windows
- `lem-brownian-poisson-independent-clock-composition` · lemma — Independent Brownian motion straightens a Poisson clock
- `lem-gaussian-anchored-sums-have-cumulant-and-fourier-bounds` · lemma — Gaussian anchored bounded sums have uniform cumulant and Fourier bounds
- `alg-overlapping-batch-means-mcse` · algorithm — Overlapping batch means for MCMC standard errors
- `lem-geometric-total-variation-rate-controls-strong-mixing` · lemma — A total-variation rate bounds strong-mixing coefficients
- `lem-measurable-observation-does-not-increase-mixing-coefficients` · lemma — A measurable observation does not increase stationary mixing coefficients
- `lem-stationary-chain-tv-convergence-implies-strong-mixing` · lemma — Stationary Markov-chain total-variation convergence implies strong mixing
- `lem-uniform-ergodicity-controls-uniform-mixing` · lemma — Uniform ergodicity bounds the uniform-mixing coefficient
- `lem-zero-long-run-variance-gives-degenerate-clt` · lemma — Zero covariance long-run variance gives a degenerate CLT under absolute summability
- `thm-poisson-equation-martingale-decomposition-clt` · theorem — Poisson-equation martingale decomposition and MCMC CLT
- `lem-geometric-split-renewal-gives-integrable-hitting-time` · lemma — Geometric small-set renewal convergence gives an integrable exponential hitting moment
- `lem-strong-mixing-quantile-covariance-bound` · lemma — Strong-mixing covariance bound in terms of tail quantiles
- `lem-two-sided-stationary-extension-preserves-rho-mixing` · lemma — Two-sided stationary extension preserves maximal-correlation bounds
- `lem-gaussian-anchored-sum-density-moderate-deviation-bound` · lemma — Moderate deviation density bounds for Gaussian anchored sums
- `lem-geometrically-ergodic-chain-has-standard-borel-observation-factor` · lemma — A geometrically ergodic chain has an all-start standard-Borel observation factor
- `lem-geometric-reversible-chain-rho-mixing` · lemma — Geometric ergodicity and reversibility give exponential rho-mixing
- `thm-rho-mixing-clt-for-square-integrable-sequences` · theorem — A rho-mixing CLT for square-integrable stationary sequences
- `lem-obm-consistency-from-strong-brownian-approximation` · lemma — Strong Brownian approximation implies overlapping-batch consistency
- `thm-bounded-summable-strong-mixing-clt` · theorem — Bounded stationary CLT under summable strong mixing
- `lem-geometric-strong-mixing-gives-lp-poisson-solution` · lemma — Geometric strong mixing gives an Lp Poisson solution
- `lem-gaussian-anchored-conditional-quantile-coupling` · lemma — Conditional quantile couplings for Gaussian anchored sums
- `lem-harris-geometric-ergodicity-has-integrable-rate-envelope` · lemma — Harris geometric ergodicity admits an integrable total-variation envelope
- `thm-strong-mixing-clt-with-moment-conditions` · theorem — Strong-mixing CLTs under bounded, moment, and logarithmic-moment conditions
- `thm-uniform-mixing-clt-for-square-integrable-sequences` · theorem — A uniform-mixing CLT for square-integrable stationary sequences
- `lem-bounded-vector-log-cubed-gaussian-coupling` · lemma — Bounded independent vector rows admit a logarithmic cubed Gaussian coupling
- `lem-geometric-markov-chain-has-adjacent-iid-split-tours` · lemma — Geometric Markov chains admit delayed adjacent-iid split tours with spare moments
- `lem-heterogeneous-bounded-atom-vector-log-cubed-gaussian-coupling` · lemma — Heterogeneous bounded atom vector rows admit a logarithmic cubed Gaussian coupling
- `thm-mcmc-clt-sufficient-regimes` · theorem — Sufficient MCMC CLT regimes
- `lem-zero-variance-geometric-markov-sums-have-strong-rate` · lemma — Zero-variance geometric Markov sums have a uniform strong rate
- `lem-iid-finite-moment-vector-strong-approximation` · lemma — Finite-moment iid vectors admit a strong Gaussian approximation
- `lem-adjacent-iid-finite-moment-vector-strong-approximation` · lemma — Adjacent iid vector functionals admit a finite-moment strong approximation
- `thm-geometrically-ergodic-chain-strong-invariance-principle` · theorem — Strong invariance principle for geometrically ergodic chains
- `thm-overlapping-batch-means-strong-consistency` · theorem — Strong consistency of overlapping batch means

### `mcmc-clt-and-monte-carlo-standard-error-examples` — MCMC central limit theorems, MCSE, and long-run variance — Examples (3 item(s))

- `cex-sticky-reducible-chain-has-no-root-n-clt` · counterexample — A stationary sticky chain with finite variance and no root-n CLT
- `ex-overlapping-batch-size-fails-a-source-condition` · example — A batch-size sequence fails the OBM consistency conditions
- `ex-poisson-equation-ar1-long-run-variance` · example — Poisson equation and long-run variance for a stationary AR(1) chain

### `hamiltonian-monte-carlo-and-leapfrog` — Hamiltonian Monte Carlo and leapfrog correction (7 item(s))

- `def-leapfrog-step-map` · definition — One-step leapfrog map as force and drift shears
- `thm-exact-hamiltonian-flow-preserves-energy-and-volume` · theorem — A complete C2 Hamiltonian flow preserves energy and phase volume
- `lem-real-line-exponential-tail-integrable` · lemma — The real-line exponential tail is Lebesgue integrable
- `thm-leapfrog-is-reversible-and-volume-preserving` · theorem — Leapfrog is reversible and volume-preserving
- `def-hamiltonian-monte-carlo` · definition — Hamiltonian Monte Carlo
- `alg-leapfrog-hamiltonian-monte-carlo` · algorithm — Leapfrog Hamiltonian Monte Carlo
- `thm-metropolized-hamiltonian-chain-preserves-target` · theorem — The Metropolized Hamiltonian chain preserves its target

### `hamiltonian-monte-carlo-and-leapfrog-examples` — Hamiltonian Monte Carlo and leapfrog correction — Examples (4 item(s))

- `ex-hmc-globally-lipschitz-force` · example — A globally Lipschitz Hamiltonian force
- `ex-hmc-exact-flow-limit` · example — The exact-flow Hamiltonian Monte Carlo limit
- `ex-hmc-leapfrog-harmonic-resonance` · example — A Gaussian harmonic leapfrog resonance
- `ex-hmc-finite-step-energy-error` · example — Finite-step leapfrog energy error

## Your seams

Your pages depend on another group's:

- `mcmc-ergodicity-and-mixing` requires `gibbs-sampling-and-scan-schemes` (group j, batch 34)
- `mcmc-clt-and-monte-carlo-standard-error` requires `gaussian-process-priors-and-posterior-laws` (group d, batch 14)
- `hamiltonian-monte-carlo-and-leapfrog` requires `numerical-optimization-for-statistical-computation` (group g, batch 23)
- `hamiltonian-monte-carlo-and-leapfrog` requires `metropolis-hastings-algorithm-and-invariance` (group j, batch 33)
- `hamiltonian-monte-carlo-and-leapfrog` requires `conjugate-families-and-posterior-prediction` (group a, batch 6)

Another group's pages depend on yours:

- `adaptive-mcmc-convergence-and-limitations` (group l) requires your `mcmc-ergodicity-and-mixing`
- `mcmc-diagnostics-and-finite-run-limitations` (group l) requires your `mcmc-clt-and-monte-carlo-standard-error`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/bayesian-computational-statistics-62-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `bayesian-computational-statistics-62`

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
