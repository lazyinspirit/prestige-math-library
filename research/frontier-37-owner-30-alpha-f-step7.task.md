# Step 7 adjudication — group **f**, run `frontier-37-owner-30`

You are the group Alpha for batches **1**, **14**, **16**: 3 A/B pair(s), 6 page(s), 79 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-37-owner-30-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `stationary-markov-chains-and-ergodic-limits` | A | probability | 288.129 | `strong-laws-of-large-numbers`, `conditional-expectation`, `conditional-distributions-and-regular-conditional-probability`, `discrete-time-martingales`, `martingale-inequalities-and-convergence`, `stopping-times-and-optional-stopping`, `markov-kernels-and-markov-chains`, `recurrence-transience-and-hitting-times-for-markov-chains`, `the-ergodic-theorems-of-von-neumann-and-birkhoff` |
| 1 | `stationary-markov-chains-and-ergodic-limits-examples` | B | probability | 288.13 | `stationary-markov-chains-and-ergodic-limits` |
| 14 | `the-branching-rule-and-the-young-graph` | A | representation-theory | 510.049 | `young-diagrams-tableaux-and-permutation-modules`, `specht-modules-and-the-irreducibles-of-the-symmetric-group`, `induced-representations-and-frobenius-reciprocity`, `tensor-products-of-modules` |
| 14 | `the-branching-rule-and-the-young-graph-examples` | B | representation-theory | 510.05 | `the-branching-rule-and-the-young-graph` |
| 16 | `induced-unitary-representations-of-locally-compact-groups` | A | representation-theory | 510.075 | `haar-measure-existence-and-uniqueness`, `the-modular-function-and-l1-group-algebras`, `unitary-representations-positive-type-and-gns`, `partitions-of-unity-and-paracompactness`, `radon-measures-and-the-riesz-markov-kakutani-theorem`, `the-radon-nikodym-theorem-and-lebesgue-decomposition`, `banach-valued-integration-and-the-radon-nikodym-property` |
| 16 | `induced-unitary-representations-of-locally-compact-groups-examples` | B | representation-theory | 510.076 | `induced-unitary-representations-of-locally-compact-groups`, `induced-representations-and-frobenius-reciprocity` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `stationary-markov-chains-and-ergodic-limits` — Stationary Markov Chains and Ergodic Limits (22 item(s))

- `def-invariant-and-stationary-distribution-for-a-markov-kernel` · definition — Invariant and stationary distribution for a Markov kernel
- `thm-invariant-initial-law-makes-the-chain-stationary` · theorem — Invariant initial law makes a Markov chain stationary
- `thm-every-finite-transition-matrix-has-a-stationary-distribution` · theorem — Every finite transition matrix has a stationary distribution
- `def-positive-recurrent-and-null-recurrent-state` · definition — Positive and null recurrence of a state
- `lem-return-cycle-occupation-measure-and-minimality` · lemma — Return-cycle occupation measure and minimality
- `thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains` · theorem — Positive recurrence and stationary probability for irreducible countable chains
- `thm-kac-return-time-formula-for-a-state` · theorem — Kac return-time formula for a state
- `cor-uniqueness-of-the-stationary-distribution-for-an-irreducible-positive-recurrent-chain` · corollary — Uniqueness of the stationary law for an irreducible positive-recurrent chain
- `def-reversible-measure-and-detailed-balance` · definition — Reversible measure and detailed balance
- `lem-detailed-balance-implies-invariance` · lemma — Detailed balance implies invariance
- `thm-time-reversal-of-a-stationary-markov-chain` · theorem — Time reversal of a stationary Markov chain
- `thm-kac-return-time-formula-for-a-positive-mass-set` · theorem — Kac return-time formula for a positive-mass set
- `def-total-variation-distance-for-probability-laws` · definition — Total variation distance for probability laws
- `lem-total-variation-half-l1-formula-on-a-countable-space` · lemma — Half-l1 formula for total variation on a countable space
- `lem-aperiodic-return-times-are-eventually-positive` · lemma — Aperiodic return times are eventually positive
- `thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains` · theorem — Convergence to stationarity for irreducible aperiodic positive-recurrent chains
- `thm-markov-chain-ergodic-theorem` · theorem — Ergodic theorem for an irreducible positive-recurrent Markov chain
- `thm-cesaro-convergence-for-irreducible-positive-recurrent-chains` · theorem — Cesaro convergence for irreducible positive-recurrent chains
- `def-stationary-process-and-canonical-shift` · definition — Stationary process and canonical path shift
- `thm-stationary-process-birkhoff-ergodic-limit` · theorem — Birkhoff limit for a stationary integrable process
- `cor-stationary-irreducible-markov-shift-is-ergodic` · corollary — Stationary irreducible Markov shift is ergodic
- `rem-aperiodicity-is-needed-for-ordinary-time-convergence-not-ergodic-averages` · remark — Aperiodicity separates ordinary convergence from ergodic averages

### `stationary-markov-chains-and-ergodic-limits-examples` — Stationary Markov Chains and Ergodic Limits — Examples (10 item(s))

- `ex-stationary-law-of-a-two-state-chain` · example — Stationary law of a two-state chain
- `ex-stationary-distribution-of-a-finite-birth-and-death-chain` · example — Stationary law of a finite birth-and-death chain
- `ex-random-walk-on-a-finite-undirected-graph-is-reversible` · example — Random walk on a finite undirected graph is reversible
- `ex-doubly-stochastic-transition-matrix-has-uniform-stationary-law` · example — Uniform law for a finite doubly stochastic matrix
- `ex-empirical-state-frequencies-converge-to-stationary-masses` · example — Empirical state frequencies converge to stationary masses
- `ex-periodic-chain-has-cesaro-but-not-ordinary-convergence` · example — A periodic chain has Cesaro but not ordinary convergence
- `cex-a-null-recurrent-chain-has-no-stationary-probability` · counterexample — A null recurrent chain has no stationary probability
- `cex-a-stationary-chain-need-not-be-ergodic` · counterexample — A stationary chain need not be ergodic
- `cex-invariance-does-not-imply-reversibility` · counterexample — An invariant law need not be reversible
- `cex-positive-recurrence-without-aperiodicity-does-not-give-total-variation-convergence` · counterexample — Positive recurrence without aperiodicity does not imply total-variation convergence

### `the-branching-rule-and-the-young-graph` — The Branching Rule and the Young Graph (20 item(s))

- `def-polytabloid-specht-module-over-an-arbitrary-field` · definition — Integral and field-valued Specht modules
- `lem-integral-specht-garnir-straightening-and-field-basis` · lemma — Integral Garnir straightening and the field-uniform standard basis
- `def-corner-order-and-specht-deletion-map` · definition — Ordered removable corners and tabloid deletion maps
- `lem-specht-branching-subspaces-are-invariant` · lemma — The corner-indexed Specht subspaces are stable under restriction
- `lem-specht-branching-successive-quotients` · lemma — Deletion identifies each Specht branching quotient
- `thm-specht-restriction-branching-filtration` · theorem — Specht restriction has a removable-corner filtration over every field
- `cor-complex-specht-restriction-branching-rule` · corollary — Multiplicity-free complex Specht restriction
- `thm-complex-specht-induction-branching-rule` · theorem — Multiplicity-free complex Specht induction
- `def-young-graph` · definition — The Young graph of partitions
- `cor-paths-in-the-young-graph-index-standard-tableaux` · corollary — Young-graph paths correspond to standard tableaux
- `lem-semistandard-tableau-homomorphisms-to-young-permutation-modules` · lemma — Semistandard fillings construct Specht-to-permutation homomorphisms
- `lem-semistandard-homomorphisms-are-independent-and-dominance-triangular` · lemma — Semistandard maps are independent and respect dominance
- `lem-semistandard-homomorphisms-span-in-characteristic-zero` · lemma — Semistandard maps span the complex intertwiner space
- `thm-youngs-rule-for-permutation-modules` · theorem — Young’s rule for complex permutation modules
- `def-commuting-symmetric-and-linear-actions-on-tensor-power` · definition — Commuting symmetric-group and linear actions on a tensor power
- `lem-tensor-place-operators-span-the-symmetric-centralizer` · lemma — Diagonal tensor operators span the symmetric centralizer
- `thm-schur-weyl-double-centralizer` · theorem — Schur–Weyl mutual centralizers for GL(V) and gl(V)
- `lem-schur-weyl-length-cutoff-by-column-antisymmetrization` · lemma — Column antisymmetrization gives the exact Schur–Weyl length cutoff
- `lem-schur-weyl-polytabloid-highest-weight` · lemma — The row-labelled polytabloid map has highest weight lambda
- `thm-schur-weyl-decomposition-with-length-cutoff` · theorem — Schur–Weyl decomposition and highest weights

### `the-branching-rule-and-the-young-graph-examples` — The Branching Rule and the Young Graph — Examples (5 item(s))

- `ex-young-graph-through-s4` · example — The Young graph through size four
- `ex-youngs-rule-for-m-two-one` · example — Young’s rule for M^(2,1)
- `ex-schur-weyl-for-two-tensor-factors` · example — Symmetric and alternating squares in two tensor factors
- `ex-schur-weyl-for-c2-tensor-three` · example — Schur–Weyl decomposition of (C^2)^tensor3
- `cex-branching-filtration-need-not-split-in-modular-characteristic` · counterexample — A nonsplit modular Specht branching filtration

### `induced-unitary-representations-of-locally-compact-groups` — Induced Unitary Representations of Locally Compact Groups (18 item(s))

- `lem-closed-subgroup-quotient-averaging-and-compact-lifts` · lemma — Compact lifts and averaging onto C_c(G/H)
- `def-quasi-invariant-measure-on-a-homogeneous-space` · definition — Quasi-invariant Radon measure on G/H
- `def-rho-function-for-a-closed-subgroup` · definition — Rho-function for a closed subgroup
- `lem-bruhat-cutoff-on-a-closed-subgroup-quotient` · lemma — Bruhat cutoff normalized along H-fibers
- `thm-weil-quotient-integration-formula-with-rho-function` · theorem — Weil formula with a rho-function
- `thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h` · theorem — Existence of rho-functions and quotient measure classes
- `prop-invariant-measure-on-g-mod-h-iff-modular-functions-agree` · proposition — Criterion for an invariant quotient measure
- `lem-radon-nikodym-cocycle-of-a-homogeneous-measure` · lemma — Continuous quotient translation cocycle
- `def-covariant-function-model-of-unitary-induction` · definition — Continuous covariant model and measurable completion
- `lem-the-induced-inner-product-is-independent-of-coset-representatives` · lemma — Well-defined induced inner product
- `lem-compactly-supported-covariant-generators-are-dense` · lemma — Density of averaged covariant generators
- `lem-the-induced-action-is-unitary` · lemma — Unitary cocycle-corrected left action
- `lem-the-induced-action-is-strongly-continuous` · lemma — Strong continuity of unitary induction
- `thm-unitary-induction-from-a-closed-subgroup` · theorem — Unitary induction from a closed subgroup
- `lem-equivalent-radon-measures-on-a-homogeneous-space-have-local-densities` · lemma — Local densities for equivalent Radon quotient measures
- `thm-induced-representation-is-independent-of-rho-function-and-measure-representative` · theorem — Independence of rho and equivalent quotient representative
- `lem-composition-of-quotient-integrals-for-subgroup-chains` · lemma — Composition of Weil quotient integrals
- `thm-unitary-induction-in-stages` · theorem — Induction in stages for closed subgroup chains

### `induced-unitary-representations-of-locally-compact-groups-examples` — Induced Unitary Representations of Locally Compact Groups — Examples (4 item(s))

- `ex-unitary-induction-from-the-trivial-subgroup` · example — Induction from the trivial subgroup
- `ex-unitary-induction-from-a-cocompact-lattice` · example — Uniform lattice quotient and quasi-regular action
- `ex-unitary-induction-for-a-finite-group-recovers-the-counting-model` · example — Finite-group counting model for induction
- `cex-g-mod-h-need-not-have-an-invariant-measure` · counterexample — A homogeneous quotient without invariant measure

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-37-owner-30-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 batch adjudication, `frontier-37-owner-30`

- Follow `briefs/step7-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
