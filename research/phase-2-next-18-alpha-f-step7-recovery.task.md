# Step 7 adjudication — group **f**, run `phase-2-next-18`

You are the group Alpha for batches **2**: 2 A/B pair(s), 4 page(s), 60 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-18-alpha-f-step7-context.json` is what a group Alpha for this group wrote during step 6,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-next-18-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `markov-kernels-and-markov-chains` | A | probability | 288.125 | `infinite-product-measures-and-kolmogorov-extension`, `conditional-expectation`, `conditional-distributions-and-regular-conditional-probability`, `stopping-times-and-optional-stopping`, `product-measures-and-the-fubini-tonelli-theorems` |
| 2 | `markov-kernels-and-markov-chains-examples` | B | probability | 288.126 | `markov-kernels-and-markov-chains` |
| 2 | `brownian-motion-construction-and-continuity` | A | probability | 288.131 | `probability-spaces-random-variables-and-expectation`, `independence-borel-cantelli-and-zero-one-laws`, `infinite-product-measures-and-kolmogorov-extension`, `weak-convergence-tightness-and-representation`, `central-limit-theorems`, `markov-kernels-and-markov-chains`, `product-measures-and-the-fubini-tonelli-theorems`, `complete-metrizability-and-baire`, `function-space-topologies` |
| 2 | `brownian-motion-construction-and-continuity-examples` | B | probability | 288.132 | `brownian-motion-construction-and-continuity` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `markov-kernels-and-markov-chains` — Markov Kernels and Markov Chains (22 item(s))

- `def-time-homogeneous-markov-chain-with-transition-kernel` · definition — Time-homogeneous Markov chain with transition kernel
- `lem-bounded-function-form-of-the-markov-property` · lemma — Bounded-function form of the Markov property
- `def-conditional-independence-given-a-sigma-algebra` · definition — Conditional independence given a sigma-algebra
- `lem-conditional-independence-equivalences-and-preservation` · lemma — Conditional-independence equivalences and preservation
- `lem-conditional-independence-splicing-over-a-standard-borel-variable` · lemma — Conditional-independence splice lemma
- `thm-markov-property-as-past-future-conditional-independence` · theorem — The Markov property is past-future conditional independence
- `def-initial-distribution-of-a-markov-chain` · definition — Initial distribution of a Markov chain
- `def-iterated-transition-kernels` · definition — Iterated transition kernels
- `thm-chapman-kolmogorov-equations` · theorem — Chapman-Kolmogorov equations
- `thm-finite-dimensional-laws-of-a-markov-chain` · theorem — Finite-dimensional laws of a Markov chain
- `thm-ionescu-tulcea-construction-of-a-markov-chain` · theorem — Ionescu-Tulcea construction of a Markov chain
- `cor-canonical-markov-chain-on-path-space` · corollary — Canonical Markov chain on path space
- `thm-markov-chain-law-is-determined-by-initial-law-and-kernel` · theorem — A Markov-chain law is determined by its initial law and kernel
- `def-shift-operator-and-future-coordinate-sigma-algebra` · definition — Shift operator and future-coordinate sigma-algebra
- `thm-markov-property-for-bounded-future-path-functionals` · theorem — Markov property for bounded future path functionals
- `thm-discrete-strong-markov-property` · theorem — Discrete strong Markov property
- `cor-post-hitting-chain-restarts-from-the-hit-state` · corollary — The post-hitting chain restarts from the hit state
- `def-killed-and-absorbed-transition-kernels` · definition — Killed and absorbed transition kernels
- `lem-killed-and-absorbed-kernels-are-probability-kernels` · lemma — Killed and absorbed kernels are probability kernels
- `def-discrete-generator-of-a-countable-state-transition-matrix` · definition — Discrete generator of a countable-state transition matrix
- `thm-countable-state-martingale-problem-characterization` · theorem — Countable-state martingale-problem characterization
- `cor-bounded-harmonic-functions-yield-markov-chain-martingales` · corollary — Bounded harmonic functions yield Markov-chain martingales

### `markov-kernels-and-markov-chains-examples` — Markov Kernels and Markov Chains — Examples (9 item(s))

- `ex-iid-sequences-as-markov-chains-with-state-independent-kernel` · example — IID sequences as Markov chains with state-independent kernel
- `ex-deterministic-dynamical-system-as-a-markov-kernel` · example — A deterministic dynamical system as a Markov kernel
- `ex-simple-random-walk-transition-kernel` · example — Simple random-walk transition kernel
- `ex-absorbing-gamblers-ruin-chain` · example — Absorbing gambler's-ruin chain
- `ex-gaussian-ar-one-chain` · example — Gaussian AR(1) chain
- `ex-random-mapping-representation-for-a-finite-transition-matrix` · example — Random-mapping representation for a finite transition matrix
- `cex-identical-one-step-marginals-do-not-determine-a-markov-chain` · counterexample — Identical one-time marginals do not determine a Markov chain
- `cex-a-process-with-the-right-transition-probabilities-relative-to-its-natural-filtration-may-fail-for-a-larger-filtration` · counterexample — The Markov property can fail for a larger filtration
- `cex-time-inhomogeneous-chain-cannot-be-encoded-by-one-kernel-without-enlarging-state` · counterexample — A time-inhomogeneous chain may require enlarged state

### `brownian-motion-construction-and-continuity` — Brownian Motion Construction and Continuity (21 item(s))

- `def-gaussian-process` · definition — Gaussian process
- `lem-mean-and-covariance-determine-gaussian-finite-dimensional-laws` · lemma — Mean and covariance determine Gaussian finite-dimensional laws
- `lem-positive-semidefiniteness-of-the-brownian-covariance-kernel` · lemma — Positive semidefiniteness of the Brownian covariance kernel
- `lem-consistency-of-brownian-finite-dimensional-laws` · lemma — Consistency of Brownian finite-dimensional laws
- `thm-kolmogorov-construction-of-the-canonical-gaussian-process` · theorem — Kolmogorov construction of the canonical Gaussian process
- `lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments` · lemma — Brownian covariance is equivalent to independent stationary normal increments
- `def-brownian-motion` · definition — Brownian motion
- `thm-kolmogorov-continuity-criterion-one-parameter` · theorem — Kolmogorov continuity criterion in one parameter
- `lem-gaussian-even-moment-bound-for-brownian-increments` · lemma — Gaussian even-moment bound for Brownian increments
- `thm-existence-of-continuous-brownian-motion` · theorem — Existence of continuous Brownian motion
- `cor-brownian-paths-are-locally-holder-of-every-order-below-one-half` · corollary — Brownian paths are locally Holder below one half
- `def-uniform-on-compacts-metric-on-continuous-path-space` · definition — Uniform-on-compacts metric on continuous path space
- `lem-continuous-path-space-is-polish` · lemma — Under countable choice, continuous path space is Polish
- `def-wiener-measure-on-continuous-path-space` · definition — Wiener measure on continuous path space
- `lem-borel-sigma-algebra-of-continuous-path-space-is-generated-by-coordinates` · lemma — Borel sigma-algebra of continuous path space is generated by coordinates
- `thm-uniqueness-of-wiener-measure` · theorem — Uniqueness of Wiener measure
- `thm-brownian-scaling` · theorem — Brownian scaling
- `thm-brownian-time-inversion` · theorem — Brownian time inversion
- `def-d-dimensional-brownian-motion` · definition — d-dimensional Brownian motion
- `cor-existence-and-scaling-of-d-dimensional-brownian-motion` · corollary — Existence and scaling of d-dimensional Brownian motion
- `def-continuous-time-filtration-and-all-pairs-martingale` · definition — Continuous-time filtrations and all-pairs martingales

### `brownian-motion-construction-and-continuity-examples` — Brownian Motion Construction and Continuity — Examples (8 item(s))

- `ex-brownian-finite-dimensional-density` · example — Brownian finite-dimensional density
- `ex-covariance-of-overlapping-brownian-increments` · example — Covariance of overlapping Brownian increments
- `ex-linear-combinations-of-brownian-values-are-gaussian` · example — Linear combinations of Brownian values are Gaussian
- `ex-brownian-bridge-from-brownian-motion` · example — Brownian bridge from Brownian motion
- `ex-deterministic-integral-construction-of-a-gaussian-process` · example — A deterministic integral construction of a Gaussian process
- `ex-multidimensional-brownian-radial-second-moment` · example — Radial second moment of multidimensional Brownian motion
- `cex-kolmogorov-extension-alone-does-not-give-a-continuous-version` · counterexample — Kolmogorov extension alone does not give a continuous version
- `cex-modifying-a-process-at-each-time-can-destroy-path-continuity-on-an-uncountable-index-set` · counterexample — Pointwise modification can destroy path continuity

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

5 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-34586613b50d6ab66c8a06d4 · `thm-discrete-strong-markov-property`** (from group f, gap-a-reader-closes) — Step 1.1 asserts '|Z_H|, |R_h| <= ||H||_inf, so both variables are integrable', but only R_h is shown F_tau-measurable (via the stopped-variable supplier). Measurability of the slice sum Z_H = sum_n 1_{tau=n} H(X_n, X_{n+1}, ...) is never stated, although integrability requires it and step 2.1's dominated-convergence passage to 1_A Z_H presupposes it. The gap closes in one line (each summand is measurable and at most one is nonzero), but the proof as written does not address it.
- **s8a-8b6e5d4f713727b2a1516045 · `cor-post-hitting-chain-restarts-from-the-hit-state`** (from group f, gap-a-reader-closes) — The closing sentence of the Statement ('Thus, conditional on the information at the hit, the shifted chain has the canonical path law started from the hit state') and step 2.1 ('it identifies the conditional path law, not only its one-time marginals') assert an identification of a conditional law, but the item and its declared dependencies provide only the bounded-functional identity: no regular conditional distribution is produced and no statement that x -> P_x(B) is measurable (the kernel property in the initial state) is available in the item or in [F1]-[F2]. The display itself is correct and fully supported; only the prose identification outruns the declared machinery.
- **s8a-a137b77dda1503645311143c · `thm-markov-property-for-bounded-future-path-functionals`** (from group f, presentation) — The Statement defines h(x) := E_x[H(X_0, X_1, ...)] for a general K-chain X on an arbitrary space, but the subscript-x law P_x = P_{delta_x} is fixed only by def-initial-distribution-of-a-markov-chain, which is not among the declared deps, and the proof silently realises h through the canonical law P_x of [F5]. Standard notation, but the notational commitment to the canonical law should be declared or cross-referenced.
- **s8a-8cc750df2cc6d3567f87ba29 · `thm-brownian-scaling`** (from group f, presentation) — Statement: 'After redefining the paths of Y to be zero on its common exceptional continuity event, its path-space law is Wiener measure.' Read literally (zero the paths on the probability-one continuity event) this gives the zero path almost surely and hence not Wiener measure; the intended reading is the Wiener-measure repair of def-wiener-measure, namely zeroing off the continuity event, as step 4.1 does. The word 'exceptional' is carrying the meaning of 'complement' and the sentence should say so.
- **s8a-e5929daf49c3efbb67a2c755 · `thm-countable-state-martingale-problem-characterization`** (from group f, presentation) — Statement: 'let X be adapted to (F_n). Then X is a p-chain if and only if ...', but f(X_n), Lf(X_n) and the phrase p-chain all presuppose that X takes values in the countable state space S; S-valuedness of the adapted process is nowhere stated (the Given repeats only 'the adapted process X'). Type-checking forces the intended hypothesis, but it is an unstated hypothesis of the statement.

Append one owning-group disposition per warning to `research/phase-2-next-18-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-next-18-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — exact closure recovery, `phase-2-next-18`

Read `research/phase-2-next-18-judge-closure.json`,
`research/phase-2-next-18-judge.jsonl`,
`research/phase-2-next-18-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/phase-2-next-18-step7-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/phase-2-next-18-step7-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/phase-2-next-18-alpha-step7-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
