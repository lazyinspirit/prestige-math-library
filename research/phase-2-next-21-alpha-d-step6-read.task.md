# Step 6 whole-group reading — group **d**, run `phase-2-next-21`

You are the group Alpha for batches **11**, **12**, **4**: 6 A/B pair(s), 12 page(s), 130 item(s).

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
| 11 | `preservation-cohen-forcing-and-the-continuum` | A | foundations | 683 | `the-forcing-theorem-and-formal-consistency-transfer`, `set-theoretic-trees-delta-systems-and-diamond` |
| 11 | `preservation-cohen-forcing-and-the-continuum-examples` | B | foundations | 684 | `preservation-cohen-forcing-and-the-continuum` |
| 11 | `finite-support-iterations-and-martins-axiom` | A | foundations | 685 | `preservation-cohen-forcing-and-the-continuum`, `complete-metrizability-and-baire`, `lebesgue-measure-on-euclidean-space`, `condensation-gch-and-diamond-in-l` |
| 11 | `finite-support-iterations-and-martins-axiom-examples` | B | foundations | 686 | `finite-support-iterations-and-martins-axiom` |
| 12 | `permutation-models-and-transfer-to-zf` | A | foundations | 689 | `the-forcing-theorem-and-formal-consistency-transfer`, `weak-choice-principles-and-sierpinskis-theorem`, `condensation-gch-and-diamond-in-l` |
| 12 | `permutation-models-and-transfer-to-zf-examples` | B | foundations | 690 | `permutation-models-and-transfer-to-zf` |
| 12 | `symmetric-extensions-and-basic-choice-failure-models` | A | foundations | 691 | `permutation-models-and-transfer-to-zf`, `condensation-gch-and-diamond-in-l` |
| 12 | `symmetric-extensions-and-basic-choice-failure-models-examples` | B | foundations | 692 | `symmetric-extensions-and-basic-choice-failure-models` |
| 4 | `martingale-inequalities-and-convergence` | A | probability | 288.121 | `modes-of-convergence-for-random-variables`, `central-limit-theorems`, `conditional-expectation`, `discrete-time-martingales`, `the-lebesgue-integral-and-the-convergence-theorems`, `modes-of-convergence-egorov-and-lusin`, `the-lp-spaces-holder-minkowski-and-riesz-fischer` |
| 4 | `martingale-inequalities-and-convergence-examples` | B | probability | 288.122 | `martingale-inequalities-and-convergence` |
| 4 | `stopping-times-and-optional-stopping` | A | probability | 288.123 | `conditional-expectation`, `discrete-time-martingales`, `martingale-inequalities-and-convergence` |
| 4 | `stopping-times-and-optional-stopping-examples` | B | probability | 288.124 | `stopping-times-and-optional-stopping` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `preservation-cohen-forcing-and-the-continuum` — Preservation, Cohen Forcing, and the Continuum (15 item(s))

- `def-kappa-closure-distributivity-and-chain-condition` · definition — Closure, distributivity, and chain conditions for forcing orders
- `thm-closure-distributivity-and-no-short-sequences` · theorem — Closure, distributivity, and absence of new short sequences
- `thm-chain-condition-preserves-cofinalities-and-cardinals` · theorem — Chain conditions preserve high cofinalities and ccc preserves cardinals
- `def-nice-name-for-a-subset` · definition — Nice names for subsets of a ground-model set
- `thm-nice-name-reduction-and-counting` · theorem — Nice-name reduction and the ccc counting bound
- `def-cohen-collapse-and-levy-collapse-forcings` · definition — Cohen, collapse, and Lévy-collapse forcing orders
- `lem-generalized-delta-system-for-small-supports` · lemma — Generalized delta systems for small supports
- `thm-cohen-forcing-closure-and-chain-condition` · theorem — Closure and chain conditions of Cohen forcing
- `thm-collapse-and-levy-collapse-effects` · theorem — Cardinal effects of collapse and Lévy-collapse forcing
- `thm-mutually-generic-cohen-coordinate-reals` · theorem — Cohen coordinates are distinct and mutually generic
- `thm-cohen-forcing-controls-the-continuum` · theorem — Cohen forcing raises and, under a name count, fixes the continuum
- `thm-higher-cohen-forcing-violates-gch` · theorem — Higher Cohen forcing violates GCH at a regular cardinal
- `rem-easton-support-for-continuum-patterns` · remark — Easton-support orientation for many regular cardinals
- `lem-formal-cohen-forcing-verification-compiler` · lemma — Formal finite-fragment compiler for the Cohen countermodels
- `cor-formal-negative-consistency-of-ch-and-gch` · corollary — Formal negative relative consistency of CH and GCH

### `preservation-cohen-forcing-and-the-continuum-examples` — Preservation, Cohen Forcing, and the Continuum: Examples and Counterexamples (4 item(s))

- `ex-nice-name-for-a-cohen-coordinate-real` · example — A nice name for one Cohen coordinate
- `ex-levy-collapse-of-a-regular-cardinal` · example — The Lévy collapse of a regular uncountable cardinal
- `ex-two-cohen-reals-as-mutually-generic-coordinates` · example — Two Cohen reals as mutually generic coordinates
- `fs-ccc-means-countably-closed` · false-statement — Every ccc forcing is countably closed

### `finite-support-iterations-and-martins-axiom` — Finite-Support Iterations and Martin's Axiom (19 item(s))

- `def-two-step-forcing-iteration` · definition — Two-step forcing iterations
- `thm-two-step-generic-factorization-and-ccc` · theorem — Generic factorization and ccc preservation for two-step iterations
- `def-finite-support-forcing-iteration` · definition — Finite-support forcing iterations
- `lem-iteration-restrictions-and-complete-embeddings` · lemma — Restriction maps and complete embeddings in an iteration
- `thm-finite-support-iterations-preserve-ccc` · theorem — Finite-support iterations of ccc forcing are ccc
- `lem-bounded-stage-capture-in-finite-support-iterations` · lemma — Small sets are captured at a bounded iteration stage
- `lem-finite-support-iteration-size-bound` · lemma — Size bound for finite-support ccc iterations
- `def-martins-axiom` · definition — Martin's Axiom at a cardinal and Martin's Axiom
- `thm-rasiowa-sikorski-and-ch-implies-ma` · theorem — MA(aleph_0) and the implication from CH to MA
- `lem-ma-reduction-to-small-ccc-orders` · lemma — Martin's Axiom reduces to small ccc orders
- `def-omega-two-ma-bookkeeping-iteration` · definition — The omega_2 bookkeeping iteration for MA
- `thm-omega-two-iteration-forces-ma-and-not-ch` · theorem — The omega_2 iteration forces MA and continuum aleph_2
- `lem-formal-ma-iteration-verification-compiler` · lemma — Formal finite-fragment compiler for the MA iteration
- `cor-formal-consistency-of-ma-and-not-ch` · corollary — Formal relative consistency of MA with the failure of CH
- `lem-continuum-sized-almost-disjoint-family-on-omega` · lemma — A continuum-sized almost-disjoint family on omega
- `thm-ma-cardinal-exponentiation-below-continuum` · theorem — Cardinal exponentiation below the continuum under MA
- `thm-ma-small-unions-of-meagre-sets` · theorem — MA makes unions of fewer than continuum many meagre sets meagre
- `thm-ma-small-unions-of-null-sets` · theorem — MA makes unions of fewer than continuum many null sets null
- `thm-ma-products-of-ccc-spaces-are-ccc` · theorem — Under MA, arbitrary products of ccc spaces are ccc

### `finite-support-iterations-and-martins-axiom-examples` — Finite-Support Iterations and Martin's Axiom: Examples and Counterexamples (4 item(s))

- `ex-two-step-cohen-iteration-is-a-product` · example — A two-step Cohen iteration is a product
- `ex-ma-diagonal-real` · example — MA produces a real outside a small listed family
- `ex-ma-small-set-is-null-and-meagre` · example — A small set of reals is both null and meagre under MA
- `fs-ma-implies-ch` · false-statement — Martin's Axiom implies CH

### `permutation-models-and-transfer-to-zf` — Permutation Models and Transfer to ZF (13 item(s))

- `def-zfa-universe-atoms-and-kernel` · definition — ZFA universes, atoms, pure sets, and the kernel
- `def-permutation-support-system-and-normal-filter` · definition — Permutation groups, stabilizers, supports, and normal filters
- `def-symmetric-and-hereditarily-symmetric-sets` · definition — Symmetric and hereditarily symmetric sets
- `thm-fraenkel-mostowski-permutation-model` · theorem — Fraenkel–Mostowski permutation-model theorem
- `thm-basic-fraenkel-model` · theorem — The basic Fraenkel model
- `thm-second-fraenkel-model-countable-pairs-without-choice` · theorem — The second Fraenkel model has countable pairs without a choice function
- `thm-ordered-mostowski-model` · theorem — The ordered Mostowski model
- `def-boundable-sentence-over-an-atom-set` · definition — Boundable sentences over an atom set
- `thm-jech-sochor-first-embedding` · theorem — Jech–Sochor first embedding theorem
- `thm-jech-sochor-transfer-for-boundable-sentences` · theorem — Jech–Sochor transfer for boundable sentences
- `rem-pincus-transfer-interface-and-preservation-limits` · remark — Pincus transfer interfaces and preservation limits
- `lem-jech-sochor-socks-transfer-is-uniformly-formalizable` · lemma — Uniform formalization of the Jech–Sochor socks transfer
- `cor-zf-countable-family-of-pairs-without-choice` · corollary — Relative consistency of a countable family of pairs without choice

### `permutation-models-and-transfer-to-zf-examples` — Permutation Models and Transfer to ZF: Examples and Counterexamples (4 item(s))

- `ex-basic-fraenkel-finite-or-cofinite-support-test` · example — Finite support forces a finite-or-cofinite atom subset
- `ex-second-fraenkel-sock-swap` · example — The unsupported sock swap
- `ex-ordered-mostowski-order-has-empty-support` · example — The ordered Mostowski relation has empty support
- `fs-a-zfa-model-is-a-zf-model` · false-statement — A ZFA model is a ZF model

### `symmetric-extensions-and-basic-choice-failure-models` — Symmetric Extensions and Basic Choice-Failure Models (14 item(s))

- `def-forcing-name-automorphism-action` · definition — Automorphisms acting on forcing names
- `def-symmetric-forcing-system-and-hereditarily-symmetric-names` · definition — Symmetric forcing systems, supports, and hereditarily symmetric names
- `lem-symmetry-lemma-for-forcing-automorphisms` · lemma — Symmetry lemma for forcing automorphisms
- `lem-canonical-check-names-are-hereditarily-symmetric` · lemma — Canonical check names are hereditarily symmetric
- `thm-hereditarily-symmetric-interpretations-form-a-zf-model` · theorem — Hereditarily symmetric interpretations form a transitive ZF model
- `def-basic-cohen-symmetric-system` · definition — The basic Cohen symmetric system
- `lem-basic-cohen-generic-reals-form-a-symmetric-set` · lemma — The Cohen reals form a symmetric set but their enumeration is not symmetric
- `thm-basic-cohen-generic-real-set-has-no-countably-infinite-subset` · theorem — The basic Cohen set has no countably infinite subset
- `thm-basic-cohen-model-has-an-infinite-dedekind-finite-set-of-reals` · theorem — The basic Cohen model has an infinite Dedekind-finite set of reals
- `cor-basic-cohen-model-fails-well-orderability-and-choice` · corollary — The basic Cohen model fails well-orderability and AC
- `lem-basic-cohen-symmetric-construction-is-uniformly-formalizable` · lemma — Uniform formalization of the basic Cohen symmetric construction
- `thm-formal-consistency-of-zf-with-failure-of-choice` · theorem — Formal consistency of ZF with failure of Choice
- `def-atom-free-socks-symmetric-system` · definition — The atom-free socks symmetric system
- `thm-atom-free-socks-model-has-countable-pairs-without-choice` · theorem — An atom-free symmetric model has countable pairs without choice

### `symmetric-extensions-and-basic-choice-failure-models-examples` — Symmetric Extensions and Basic Choice-Failure Models: Examples and Counterexamples (4 item(s))

- `ex-basic-cohen-orbit-name-without-enumeration` · example — An orbit set can be symmetric when its enumeration is not
- `ex-equivalent-dedekind-finiteness-tests-in-basic-cohen-model` · example — Equivalent Dedekind-finiteness tests in the basic Cohen model
- `ex-atom-free-socks-coordinate-swap` · example — A coordinate swap defeats an atom-free sock choice
- `fs-every-symmetric-submodel-satisfies-choice` · false-statement — Every symmetric submodel satisfies Choice

### `martingale-inequalities-and-convergence` — Martingale Inequalities and Convergence (18 item(s))

- `def-upcrossing-number-of-an-interval` · definition — Upcrossing number of an interval
- `lem-doob-upcrossing-inequality` · lemma — Doob upcrossing inequality
- `thm-doob-submartingale-convergence` · theorem — Doob submartingale convergence theorem
- `thm-doob-l1-maximal-inequality` · theorem — Doob L1 maximal inequality
- `thm-doob-lp-maximal-inequality` · theorem — Doob Lp maximal inequality
- `thm-lp-bounded-martingale-convergence` · theorem — Lp bounded martingale convergence
- `thm-uniformly-integrable-martingale-convergence` · theorem — Uniformly integrable martingale convergence
- `thm-closed-martingale-characterization` · theorem — Closed martingale characterization
- `def-reverse-filtration-and-reverse-martingale` · definition — Reverse filtration and reverse martingale
- `thm-reverse-martingale-convergence` · theorem — Reverse martingale convergence
- `thm-levy-upward-convergence-of-conditional-expectations` · theorem — Levy upward convergence of conditional expectations
- `thm-levy-downward-convergence-of-conditional-expectations` · theorem — Levy downward convergence of conditional expectations
- `cor-kolmogorov-zero-one-law-from-reverse-martingales` · corollary — Kolmogorov zero-one law from martingale convergence
- `lem-conditional-hoeffding-bound-for-bounded-martingale-differences` · lemma — Conditional Hoeffding bound for bounded martingale differences
- `thm-azuma-hoeffding-inequality` · theorem — Azuma-Hoeffding inequality
- `cor-symmetric-bounded-increment-azuma-bound` · corollary — Symmetric bounded-increment Azuma bound
- `def-square-integrable-martingale-difference-array-and-variance-clock` · definition — Square-integrable martingale-difference array and variance clock
- `thm-martingale-central-limit-theorem` · theorem — Martingale central limit theorem

### `martingale-inequalities-and-convergence-examples` — Martingale Inequalities and Convergence — Examples (9 item(s))

- `ex-doob-maximal-bound-for-a-centered-random-walk` · example — Doob maximal bound for a centered random walk
- `ex-nonnegative-martingale-converges-almost-surely` · example — A nonnegative martingale converges almost surely
- `ex-dyadic-martingale-converges-to-the-original-l1-variable` · example — A dyadic martingale converges to the original L1 variable
- `ex-reverse-martingale-and-the-tail-sigma-algebra` · example — A reverse martingale and the tail sigma-algebra
- `ex-lp-bounded-martingale-with-an-lp-terminal-value` · example — An Lp-bounded martingale with an Lp terminal value
- `cex-l1-bounded-martingale-need-not-converge-in-l1` · counterexample — An L1-bounded martingale need not converge in L1
- `cex-almost-sure-martingale-convergence-need-not-preserve-expectation` · counterexample — Almost-sure martingale convergence need not preserve expectation
- `cex-doob-lp-maximal-inequality-excludes-p-equals-one` · counterexample — Doob Lp maximal inequality excludes p equals one
- `ex-azuma-bound-for-simple-random-walk` · example — Azuma bound for simple random walk

### `stopping-times-and-optional-stopping` — Stopping Times and Optional Stopping (17 item(s))

- `def-discrete-stopping-time` · definition — Discrete stopping time
- `lem-equivalent-event-tests-for-a-discrete-stopping-time` · lemma — Equivalent event tests for a discrete stopping time
- `lem-first-hitting-time-of-an-adapted-process-is-a-stopping-time` · lemma — First hitting time of an adapted process is a stopping time
- `lem-minimum-maximum-and-bounded-shifts-of-stopping-times` · lemma — Minimum maximum and deterministic shifts of stopping times
- `def-sigma-algebra-at-a-stopping-time` · definition — Sigma-algebra at a stopping time
- `lem-stopping-time-sigma-algebra-is-a-sigma-algebra` · lemma — The stopping-time event family is a sigma-algebra
- `def-stopped-random-variable-and-stopped-process` · definition — Stopped random variable and stopped process
- `lem-stopped-random-variable-is-measurable-at-the-stopping-time` · lemma — A stopped random variable is measurable at the stopping time
- `thm-a-stopped-martingale-is-a-martingale` · theorem — A stopped martingale is a martingale
- `thm-optional-sampling-for-bounded-stopping-times` · theorem — Optional sampling for bounded stopping times
- `thm-optional-stopping-under-uniform-integrability` · theorem — Optional stopping under uniform integrability
- `thm-optional-stopping-with-integrable-time-and-bounded-increments` · theorem — Optional stopping with integrable time and bounded increments
- `thm-optional-stopping-with-a-dominating-integrable-variable` · theorem — Optional stopping with a dominating integrable variable
- `cor-wald-first-equation-under-integrable-stopping` · corollary — Wald first equation under integrable stopping
- `cor-gamblers-ruin-hitting-probability-from-optional-stopping` · corollary — Gambler's ruin hitting probability
- `cor-gamblers-ruin-expected-duration` · corollary — Gambler's ruin expected duration
- `rem-optional-stopping-requires-a-passage-to-the-limit-hypothesis` · remark — Optional stopping requires a passage-to-the-limit hypothesis

### `stopping-times-and-optional-stopping-examples` — Stopping Times and Optional Stopping — Examples (9 item(s))

- `ex-first-exit-time-from-an-interval` · example — First exit time from an interval
- `ex-gamblers-ruin-probability-for-a-biased-walk` · example — Biased gambler's ruin via an exponential martingale
- `ex-expected-duration-of-simple-gamblers-ruin` · example — Expected duration of simple gambler's ruin
- `ex-walds-equation-for-a-bounded-stopping-time` · example — Wald equation for a bounded success time
- `ex-stopping-a-likelihood-ratio-martingale` · example — Likelihood ratio at a bounded stopping time
- `cex-a-last-exit-time-need-not-be-a-stopping-time` · counterexample — A last exit time need not be a stopping time
- `cex-optional-stopping-fails-for-unbounded-simple-random-walk-hitting-time` · counterexample — Optional stopping fails at the first hit of plus one
- `cex-almost-surely-finite-stopping-does-not-imply-integrable-stopping` · counterexample — An almost-surely finite stopping time need not be integrable
- `cex-integrable-stopping-time-alone-does-not-suffice-for-arbitrary-martingale-increments` · counterexample — An integrable stopping time alone does not control unbounded increments

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 — group reading digest, `phase-2-next-21`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
