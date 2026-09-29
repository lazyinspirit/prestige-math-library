# Step 6 whole-group reading — group **d**, run `frontier-36-complete`

You are the group Alpha for batches **3**, **26**, **27**: 3 A/B pair(s), 6 page(s), 75 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-7 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 3 | `recurrence-transience-and-hitting-times-for-markov-chains` | A | probability | 288.127 | `probability-spaces-random-variables-and-expectation`, `independence-borel-cantelli-and-zero-one-laws`, `stopping-times-and-optional-stopping`, `markov-kernels-and-markov-chains` |
| 3 | `recurrence-transience-and-hitting-times-for-markov-chains-examples` | B | probability | 288.128 | `recurrence-transience-and-hitting-times-for-markov-chains` |
| 26 | `green-functions-harmonic-measure-and-conformal-invariance` | A | complex-analysis | 831 | `harmonic-functions-and-the-poisson-integral`, `subharmonic-functions-and-the-dirichlet-problem`, `the-riemann-mapping-theorem`, `the-lebesgue-integral-and-the-convergence-theorems`, `radon-measures-and-the-riesz-markov-kakutani-theorem`, `harmonic-functions-and-mean-values-in-rn`, `fundamental-solutions-newtonian-potentials-and-green-functions`, `analytic-majorants-and-the-cauchy-kovalevskaya-theorem`, `compact-operators-and-riesz-schauder-theory`, `riemannian-metrics-length-distance-and-volume` |
| 26 | `green-functions-harmonic-measure-and-conformal-invariance-examples` | B | complex-analysis | 832 | `green-functions-harmonic-measure-and-conformal-invariance`, `further-trigonometric-identities-and-inverses` |
| 27 | `jensen-theory-and-nevanlinnas-first-main-theorem` | A | complex-analysis | 839 | `isolated-singularities-and-laurent-series`, `the-argument-principle-and-rouche`, `harmonic-functions-and-the-poisson-integral`, `the-lebesgue-integral-and-the-convergence-theorems` |
| 27 | `jensen-theory-and-nevanlinnas-first-main-theorem-examples` | B | complex-analysis | 840 | `jensen-theory-and-nevanlinnas-first-main-theorem`, `the-gamma-function`, `holomorphic-functions-of-several-variables` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `recurrence-transience-and-hitting-times-for-markov-chains` — Recurrence Transience and Hitting Times for Markov Chains (27 item(s))

- `def-transition-matrix-and-n-step-transition-probabilities` · definition — Transition matrices and n-step probabilities
- `lem-matrix-chapman-kolmogorov-equations` · lemma — Matrix Chapman–Kolmogorov equations
- `def-accessibility-communication-and-irreducibility` · definition — Accessibility, communication, and irreducibility
- `lem-communication-is-an-equivalence-relation` · lemma — Communication is an equivalence relation
- `def-hitting-return-and-visit-times` · definition — Hitting, return, and visit times
- `def-recurrent-and-transient-state` · definition — Recurrent and transient states
- `thm-renewal-decomposition-at-successive-return-times` · theorem — Renewal decomposition at successive returns
- `thm-recurrence-transience-equivalent-criteria` · theorem — Equivalent criteria for recurrence and transience
- `def-green-kernel-of-a-transient-chain` · definition — Green kernel of a transient chain
- `lem-green-kernel-resolvent-identity` · lemma — Green-kernel resolvent identity
- `thm-recurrence-and-transience-are-class-properties` · theorem — Recurrence and transience are class properties
- `cor-an-irreducible-chain-is-either-recurrent-or-transient` · corollary — Irreducible recurrence/transience dichotomy
- `thm-hitting-probability-is-the-minimal-nonnegative-harmonic-extension` · theorem — Hitting probability as minimal harmonic extension
- `lem-finite-irreducible-chain-hitting-time-geometric-tail` · lemma — Geometric tail for hitting in a finite irreducible chain
- `thm-dirichlet-problem-for-finite-state-hitting-probabilities` · theorem — Bounded Dirichlet problem for hitting probabilities
- `def-period-of-a-state` · definition — Period of a state
- `lem-period-is-constant-on-a-communicating-class` · lemma — Period is constant on communicating classes
- `def-aperiodic-chain` · definition — Aperiodic irreducible chain
- `def-simple-symmetric-walk-on-zd` · definition — Simple symmetric walk on the integer lattice
- `cor-recurrence-of-the-one-dimensional-simple-symmetric-random-walk` · corollary — One-dimensional simple symmetric walk is recurrent
- `cor-recurrence-of-the-two-dimensional-simple-symmetric-random-walk` · corollary — Two-dimensional simple symmetric walk is recurrent
- `cor-transience-of-simple-symmetric-random-walk-in-dimension-at-least-three` · corollary — Higher-dimensional simple symmetric walks are transient
- `def-nonnegative-discrete-drift-for-countable-chains` · definition — Nonnegative kernel action and finite drift
- `thm-first-step-equations-for-nonnegative-exit-costs` · theorem — First-step equations for nonnegative exit costs
- `thm-superharmonic-majorants-bound-exit-costs` · theorem — Superharmonic majorants bound exit costs
- `cor-expected-exit-time-solves-the-poisson-equation` · corollary — Expected exit time solves the Poisson equation
- `thm-lyapunov-drift-bound-for-markov-chain-hitting-times` · theorem — Lyapunov drift bound for hitting times

### `recurrence-transience-and-hitting-times-for-markov-chains-examples` — Recurrence Transience and Hitting Times for Markov Chains — Examples (10 item(s))

- `ex-communicating-classes-of-a-finite-chain` · example — Communicating classes in a four-state chain
- `ex-gamblers-ruin-hitting-probabilities-from-harmonicity` · example — Gambler’s ruin from harmonicity
- `ex-birth-and-death-chain-recurrence-criterion` · example — Birth–death recurrence through scale products
- `ex-green-kernel-for-a-biased-random-walk-on-the-integers` · example — Green kernel of a biased integer walk
- `ex-period-two-of-simple-random-walk-on-a-bipartite-graph` · example — Period two on a bipartite graph
- `ex-lazy-chain-is-aperiodic` · example — Laziness removes periodicity
- `cex-recurrence-is-not-a-property-shared-by-different-communicating-classes` · counterexample — Different classes can have different recurrence types
- `cex-a-bounded-harmonic-boundary-value-problem-can-be-nonunique-without-almost-sure-boundary-hitting` · counterexample — A bounded harmonic boundary problem without uniqueness
- `cex-a-transient-chain-can-return-with-positive-probability` · counterexample — A transient chain can return with positive probability
- `ex-negative-drift-reflected-walk-has-a-finite-mean-small-set-hitting-time` · example — Negative drift gives a finite mean small-set hit

### `green-functions-harmonic-measure-and-conformal-invariance` — Green Functions, Harmonic Measure, and Conformal Invariance (15 item(s))

- `def-green-function-plane-domain` · definition — The canonical Green kernel of a plane domain
- `lem-log-modulus-is-harmonic-off-its-centre` · lemma — Logarithmic modulus is harmonic off its centre
- `thm-planar-green-kernel-conformal-covariance` · theorem — Conformal covariance of the canonical planar Green kernel
- `lem-analytic-exhaustion-of-plane-domains` · lemma — Analytic-boundary exhaustion of a plane domain
- `thm-green-function-exists-on-bounded-plane-domains` · theorem — Green functions exist on all bounded plane domains
- `lem-planar-barrier-controls-perron-solutions` · lemma — A barrier controls Perron boundary limits
- `lem-analytic-boundary-green-corrector-is-smooth` · lemma — Green correctors are smooth at analytic boundaries
- `thm-green-function-uniqueness-symmetry-and-monotonicity` · theorem — Canonical Green kernels are unique, symmetric and domain monotone
- `thm-green-function-simply-connected-plane-domain` · theorem — Green function from a Riemann map
- `def-harmonic-measure-plane-domain` · definition — Harmonic measure on a bounded regular plane domain
- `thm-harmonic-measure-is-well-defined` · theorem — The Dirichlet operator defines a unique harmonic measure
- `thm-harmonic-measure-disc-poisson-density` · theorem — Harmonic measure of a disc has Poisson density
- `thm-harmonic-measure-conformal-invariance` · theorem — Harmonic measure is transported by a closure-homeomorphic conformal map
- `thm-harmonic-measure-maximum-principle-and-domain-comparison` · theorem — Borel harmonicity and comparison of harmonic measure
- `thm-green-function-harmonic-measure-representation` · theorem — Green and harmonic-measure representation with the 2π sign

### `green-functions-harmonic-measure-and-conformal-invariance-examples` — Green Functions, Harmonic Measure, and Conformal Invariance: Examples and Counterexamples (7 item(s))

- `ex-green-function-disc-with-nonzero-pole` · example — Green kernel of the disc at a nonzero pole
- `ex-harmonic-measure-of-a-disc-arc` · example — Harmonic measure of an arc of the unit circle
- `ex-upper-half-plane-harmonic-measure-density` · example — Upper half-plane Poisson boundary density
- `ex-interval-harmonic-measure-in-upper-half-plane` · example — Harmonic measure of a real interval from the upper half-plane
- `ex-annulus-harmonic-measure-of-boundary-circles` · example — Harmonic measure of the two annulus boundary circles
- `ex-slit-plane-green-function-from-square-root` · example — Green kernel of a slit plane via the square-root map
- `ex-punctured-disc-irregular-boundary-green-function` · example — An irregular puncture does not force the Green kernel to vanish

### `jensen-theory-and-nevanlinnas-first-main-theorem` — Jensen Theory and Nevanlinna's First Main Theorem (10 item(s))

- `thm-poisson-jensen-formula-meromorphic-function` · theorem — Poisson–Jensen formula for a meromorphic function on a disc
- `def-nevanlinna-counting-proximity-and-characteristic` · definition — Counting, chordal proximity and characteristic of a meromorphic function
- `thm-nevanlinna-quantities-well-defined` · theorem — Well-definedness and radius conventions for Nevanlinna quantities
- `lem-meromorphic-jensen-formula-with-centre-divisor` · lemma — Meromorphic Jensen identity with a zero or pole at the centre
- `thm-ahlfors-shimizu-characteristic-identity` · theorem — Ahlfors–Shimizu area form of the characteristic
- `thm-nevanlinna-first-main-theorem` · theorem — Nevanlinna’s First Main Theorem with exact centre constant
- `thm-nevanlinna-characteristic-elementary-laws` · theorem — Elementary characteristic laws and fixed rational composition
- `def-order-of-growth-meromorphic-function` · definition — Order and lower order from the Nevanlinna characteristic
- `prop-nevanlinna-order-agrees-with-entire-maximum-modulus-order` · proposition — Entire-function order agrees with maximum-modulus order
- `thm-rational-functions-characterized-by-logarithmic-characteristic` · theorem — Rational functions are exactly those with logarithmic characteristic

### `jensen-theory-and-nevanlinnas-first-main-theorem-examples` — Jensen Theory and Nevanlinna's First Main Theorem: Examples and Counterexamples (6 item(s))

- `ex-poisson-jensen-with-a-repeated-zero` · example — A repeated zero contributes its Green kernel twice
- `ex-nevanlinna-regularisation-when-f-zero-equals-a` · example — A centre a-point requires regularised counting
- `ex-nevanlinna-characteristics-of-elementary-functions` · example — Characteristics of a monomial, an exponential and a tangent
- `ex-nevanlinna-characteristic-under-target-mobius-map` · example — Characteristic under a target Möbius change
- `ex-nevanlinna-characteristic-of-reciprocal-gamma` · example — Reciprocal Gamma has order one and characteristic of size r log r
- `ex-rational-degree-as-logarithmic-characteristic` · example — Rational degree appears as logarithmic characteristic

## Your seams

Your pages depend on another group's:

- `green-functions-harmonic-measure-and-conformal-invariance` requires `fundamental-solutions-newtonian-potentials-and-green-functions` (group g, batch 11)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 — group reading digest, `frontier-36-complete`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

The reply is parsed as JSON, so every backslash inside a string is an escape:
write a LaTeX command as a doubled backslash (`\\perp`, `\\omega`), never as
`\perp`. An invalid escape invalidates the whole digest. When a symbol is
available in plain text or Unicode (⊥, ω, ≤, ∈), prefer it over TeX.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
