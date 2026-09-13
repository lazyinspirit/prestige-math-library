# Step 7 adjudication — group **d**, run `phase-2-next-21`

You are the group Alpha for batches **11**, **12**, **4**: 6 A/B pair(s), 12 page(s), 130 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-21-alpha-d-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
in `research/phase-2-next-21-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

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

## Step-6 reader warnings

5 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-a04a60298d9df547868c48b9 · `thm-ma-small-unions-of-null-sets`** (from group d, gap-a-reader-closes) — Step 1.2 says 'For a condition U use F2 to choose a finite union W ⊆ U of rational intervals with m(U∖W) < (ε-m(U))/2', citing [F2] lem-elementary-sets-admit-compact-inner-and-open-outer-approximations, and then counts 'Only countably many sets W occur'. The cited lemma supplies inner approximation by elementary sets with arbitrary real endpoints and says nothing about rational endpoints, so the citation is stronger than its source and the countability claim is not licensed as written. The missing fact is closable from the cited lemma plus density of the rational intervals (U is a countable union of rational subintervals, and continuity from below of the measure gives a finite subunion W ⊆ U with the required slack), but the proof as written has to be repaired by the reader before the σ-centeredness argument is valid.
- **s8a-549dec4e87a71bad130215ed · `thm-finite-support-iterations-preserve-ccc`** (from group d, gap-a-reader-closes) — Step 1.1 (limit of countable cofinality) argues: uncountably many members of an alleged ω₁-antichain have supports below one stage α, 'their restrictions cannot all be pairwise incompatible there by induction, and compatible restrictions amalgamate their disjoint tails using F2'. Compatibility of restrictions does not imply amalgamation for arbitrary P_β-conditions — in a two-step P_α*Q̇, conditions with compatible first coordinates and forced-incompatible second coordinates have no common extension — so the stated reason is a non-sequitur as written. The argument is correct only on the reading that the subfamily in question has support below α, so its members already are P_α-conditions with top tails; a reader must supply that reading (the uncountable-cofinality case 2.1 uses the correct disjoint-petal argument).
- **s8a-05445f4da8fc6da0a3ecf93e · `thm-ma-products-of-ccc-spaces-are-ccc`** (from group d, gap-a-reader-closes) — Step 1.1's 'otherwise choose for each α an extension q_α ≤ p_α incompatible with a tail, and recursively select an uncountable subsequence of the q_α that is pairwise incompatible, contradicting ccc' is compressed to the point that the selection is not justified: each q_α is only incompatible with a tail of the p_α's, so pairwise incompatibility of the selected q_α's requires the recursion to choose each next index above all previously produced tail-bounds, and it requires the set of α at which p_α admits such an extension to be unbounded (otherwise a single p_* already works). The conclusion (MA(ℵ₁) ⇒ every ccc order is Knaster ⇒ ccc products) is correct once that reading is supplied.
- **s8a-6f938c9ad0dc0a0f545d1ee3 · `lem-jech-sochor-socks-transfer-is-uniformly-formalizable`** (from group d, gap-a-reader-closes) — This is a meta-mathematical claim that PA proves totality and checker acceptance for a large emitted proof construction. The proof describes the reflection/Skolem-hull/collapse block, the tagged ZFA+AC interpretation, the forcing/symmetry blocks and the two interpretation passes at the level of fixed templates, and asserts the checker invariant and PA induction rather than discharging them block by block; I could not verify the coding-level details in a reading pass, so I record residual uncertainty rather than a located defect (the statement itself is explicitly hedged to fixed certified presentations and disclaims full-ZFC CTM inferences). The same character applies to the sibling compilers lem-formal-cohen-forcing-verification-compiler, lem-formal-ma-iteration-verification-compiler and lem-basic-cohen-symmetric-construction-is-uniformly-formalizable, whose interfaces with lem-forcing-transfer-for-finite-zfc-fragments, thm-formal-consistency-transfer-by-forcing and thm-formal-relative-consistency-from-verified-proof-reduction I checked and found faithful.
- **s8a-2f74408766f4271313c244f7 · `lem-generalized-delta-system-for-small-supports`** (from group d, presentation) — The recursion in step 1.2 is worded ambiguously: 'Recursively choose x_{ξ_μ} for μ < θ so that x_{ξ_μ}(i_0) exceeds α_0 and every element of the earlier chosen sets.' For the subsequent claim ('distinct chosen sets meet only below α_0' and hence intersection r) what is needed is that the i_0-th point of each new set exceeds α_0 and also exceeds every element of all earlier chosen sets; with that reading the argument is correct (elements of an earlier set above α_0 are ≥ its i_0-th point, and the later i_0-th point sits above all of them), and the choice is possible because the i_0-th coordinates are unbounded in θ. Only the wording of the requirement is at issue.

Append one owning-group disposition per warning to `research/phase-2-next-21-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-next-21-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — exact closure recovery, `phase-2-next-21`

Read `research/phase-2-next-21-judge-closure.json`,
`research/phase-2-next-21-judge.jsonl`,
`research/phase-2-next-21-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/phase-2-next-21-step7-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/phase-2-next-21-step7-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/phase-2-next-21-alpha-step7-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
