# Alpha

For Step 3 onward, follow `briefs/tasks/frontier-dependency-ledger.md` within
your write scope. Step 8's lead must refresh and read the unified frontier ledger.

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/phase-2-next-21-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-7
adjudicators may add fully proved missing-dependency lemmas and register them
on their owned pages under the Step-7 task's explicit exception; otherwise
report the issue without changing it.

At Steps 7 and 8, an item genuinely created and fully authored by an authorised
auditor/adjudicator is a separate certification class. Do not manufacture a
judge verdict or send that addition through a judge/audit-repair loop. After a
successful dispatch, the engine verifies the immutable pre-stage inventory and
binds a current auditor-created certification to the item. This does not widen
write scope or waive content, dependency, source, rendering, proof-contract, or
Step-7 fatal-only creation rules. Existing-item edits still require ordinary
current judge evidence.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-7 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: phase-2-next-21
role: alpha-adjudicate
label: step7-d
covers: 11, 12, 4

# Step 7 adjudication — group **d**, run `phase-2-next-21`

You are the group Alpha for batches **11**, **12**, **4**: 6 A/B pair(s), 12 page(s), 130 item(s), 74 open rejection(s) over 74 item(s).

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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-almost-sure-martingale-convergence-need-not-preserve-expectation` | `martingale-inequalities-and-convergence-examples` | gpt-5.6-terra | `d5b952d624a245c53c085fd3d7ed192d5ff965530acb40d9475e09effbce5caa` |
| `cex-l1-bounded-martingale-need-not-converge-in-l1` | `martingale-inequalities-and-convergence-examples` | gpt-5.6-terra | `697b5a4eab303bd3ed2146e1333eaca3afb55373d7936dfbd3080ffef9163a88` |
| `cex-optional-stopping-fails-for-unbounded-simple-random-walk-hitting-time` | `stopping-times-and-optional-stopping-examples` | gpt-5.6-terra | `df624261e20b95827012415fc365238dd32d66ee2a9b7e7bcfc386252e7cd8ab` |
| `cor-basic-cohen-model-fails-well-orderability-and-choice` | `symmetric-extensions-and-basic-choice-failure-models` | gpt-5.6-terra | `4a79cf89f26827972635ecbdf0becbc6108eaa1933d94913ad474603eb5a5ff3` |
| `cor-gamblers-ruin-hitting-probability-from-optional-stopping` | `stopping-times-and-optional-stopping` | gpt-5.6-terra | `2d450a7cfc494410ef757b8220cc626c66ac94aa90266307ba5a26ec0641aea1` |
| `cor-kolmogorov-zero-one-law-from-reverse-martingales` | `martingale-inequalities-and-convergence` | gpt-5.6-terra | `52e1e4a5d25fa7f49477a3704bf031ec0051743de63d4d4e50712dfafda16578` |
| `cor-zf-countable-family-of-pairs-without-choice` | `permutation-models-and-transfer-to-zf` | gpt-5.6-terra | `bcc9b1289772ab5213a8721e905d26ac0fec171e0fd87a563bec54d4609b6a09` |
| `def-basic-cohen-symmetric-system` | `symmetric-extensions-and-basic-choice-failure-models` | gpt-5.6-terra | `9bc178bde5a8a7710fb8dabe74ce4bf1ebf100e565a9afa32a1e4541f60a3e1e` |
| `def-boundable-sentence-over-an-atom-set` | `permutation-models-and-transfer-to-zf` | gpt-5.6-terra | `1a783e208d6f6f99abd728877aba58395e4e4dc2935d76988ae2171744929f43` |
| `def-finite-support-forcing-iteration` | `finite-support-iterations-and-martins-axiom` | gpt-5.6-terra | `9e31196d92636cab42db66f324e7486f964b2689495e6f79ef026aeb50a78036` |
| `def-forcing-name-automorphism-action` | `symmetric-extensions-and-basic-choice-failure-models` | gpt-5.6-terra | `6e994ac3751e83aafe21923a47a6ad6a64e446823198426373880145f77852be` |
| `def-martins-axiom` | `finite-support-iterations-and-martins-axiom` | gpt-5.6-terra | `5f7731d2560071d3583e3733677f8691000ec0e0559863bc725a14fa861f9c8e` |
| `def-omega-two-ma-bookkeeping-iteration` | `finite-support-iterations-and-martins-axiom` | gpt-5.6-terra | `453c315907894d557a41d57671a0c4d807040bfce7cfa0a8c5fbbfad43dc8daf` |
| `def-square-integrable-martingale-difference-array-and-variance-clock` | `martingale-inequalities-and-convergence` | gpt-5.6-terra | `78860f69db5c821cb9738ec9aebe971e697ae6297ee4ee2be64eaab3fe06f7ae` |
| `def-symmetric-and-hereditarily-symmetric-sets` | `permutation-models-and-transfer-to-zf` | gpt-5.6-terra | `58d94e359d264e8ea4c06d9fae59ace53d8bf06c66283a6899c1c5ea5fc0beb9` |
| `def-symmetric-forcing-system-and-hereditarily-symmetric-names` | `symmetric-extensions-and-basic-choice-failure-models` | gpt-5.6-terra | `9ae5ca46c32d02949a5508dd7dadc810a3057f4cdcce6bb77175622fbc599ed6` |
| `def-zfa-universe-atoms-and-kernel` | `permutation-models-and-transfer-to-zf` | gpt-5.6-terra | `e3e3ac2251643e5149741c70113e1b3ba6c3cf7cd4dcfd9a80408b0d99a2f0bf` |
| `ex-atom-free-socks-coordinate-swap` | `symmetric-extensions-and-basic-choice-failure-models-examples` | gpt-5.6-terra | `4e9639e5d9c578b515bcb1fc1b772c351b0022a46292c677d372d7bb7e325b87` |
| `ex-azuma-bound-for-simple-random-walk` | `martingale-inequalities-and-convergence-examples` | gpt-5.6-terra | `a3095f640243b89a33272968f310bc42e154b2b3c2570e09a9a78594116473d0` |
| `ex-basic-cohen-orbit-name-without-enumeration` | `symmetric-extensions-and-basic-choice-failure-models-examples` | gpt-5.6-terra | `b794648be2427967efef8257d754f59ed2e2f04784f7c1418e42e8a87de07ad1` |
| `ex-dyadic-martingale-converges-to-the-original-l1-variable` | `martingale-inequalities-and-convergence-examples` | gpt-5.6-terra | `2b3c4a61e865e8620b326e8b184f89a740a03319f512ca4df390467f7c3ed2a2` |
| `ex-expected-duration-of-simple-gamblers-ruin` | `stopping-times-and-optional-stopping-examples` | gpt-5.6-terra | `97cb398a30ce0963fbc967f156106c5fdfd3c856c2af61806f6cbe35a71e21c5` |
| `ex-gamblers-ruin-probability-for-a-biased-walk` | `stopping-times-and-optional-stopping-examples` | gpt-5.6-terra | `b908387821f47454dddbe6dc136f1648694f9e2ae47e6d08ab460e348d8c24ce` |
| `ex-lp-bounded-martingale-with-an-lp-terminal-value` | `martingale-inequalities-and-convergence-examples` | gpt-5.6-terra | `e723d1278d73e9f58e0b8f7b3c1ea0b2ded3d015c1a9527082812a85380389a3` |
| `ex-ma-diagonal-real` | `finite-support-iterations-and-martins-axiom-examples` | gpt-5.6-terra | `7927aa4559d942c4ed456e031ae48f0e29b3eab91f0aa46476fa0bd9e5c6de0c` |
| `ex-nonnegative-martingale-converges-almost-surely` | `martingale-inequalities-and-convergence-examples` | gpt-5.6-terra | `dcb2ea4d1502332b55254044a67f14f469ae27183c5c30627ef33b0a874155d6` |
| `ex-reverse-martingale-and-the-tail-sigma-algebra` | `martingale-inequalities-and-convergence-examples` | gpt-5.6-terra | `e25a53c951494137f8a9d9af50937ceb2d633da58cbd32fd0f1a2d25087bfab5` |
| `ex-second-fraenkel-sock-swap` | `permutation-models-and-transfer-to-zf-examples` | gpt-5.6-terra | `fbdb881d8892472f44608c91cf6fc8b2193b51f952316bf58d907d1d20930eb0` |
| `ex-stopping-a-likelihood-ratio-martingale` | `stopping-times-and-optional-stopping-examples` | gpt-5.6-terra | `ba2c74f1ee5fa488b77c84d4cc93ffbf11840bc590fc8e88ba23362f28cb0bc6` |
| `ex-two-cohen-reals-as-mutually-generic-coordinates` | `preservation-cohen-forcing-and-the-continuum-examples` | gpt-5.6-terra | `7d2c49c6568b023ea2511273501eba22e429947d840b1fa59b68098776d13ff4` |
| `ex-walds-equation-for-a-bounded-stopping-time` | `stopping-times-and-optional-stopping-examples` | gpt-5.6-terra | `f70b8674cd15ec3ca661d3bb1451c9f8698280b4c65f3955dd47fb6dcf57892c` |
| `fs-ccc-means-countably-closed` | `preservation-cohen-forcing-and-the-continuum-examples` | gpt-5.6-terra | `ad3ba5ef795f169371b331f6b6b0f328d9131970117058f68ce66406b33459ec` |
| `lem-basic-cohen-generic-reals-form-a-symmetric-set` | `symmetric-extensions-and-basic-choice-failure-models` | gpt-5.6-terra | `6fad8fb7c427b9882ff24cd32d0fbeb608339c8c1f244958ebf4f88cb66a87f2` |
| `lem-basic-cohen-symmetric-construction-is-uniformly-formalizable` | `symmetric-extensions-and-basic-choice-failure-models` | gpt-5.6-terra | `b40b54f55ec3f7dbe1c727f0f1e7875e897876d7fe151bf6fde6b1740dad2d2a` |
| `lem-bounded-stage-capture-in-finite-support-iterations` | `finite-support-iterations-and-martins-axiom` | gpt-5.6-terra | `e3d48787994db22fe0f8a4c0faea40ea0dba3e78bb7a9b62738e682083442590` |
| `lem-conditional-hoeffding-bound-for-bounded-martingale-differences` | `martingale-inequalities-and-convergence` | gpt-5.6-terra | `0897b512fbb3db1707c0315b9169f1b792515316dce58511d22aa8a3daad7316` |
| `lem-doob-upcrossing-inequality` | `martingale-inequalities-and-convergence` | gpt-5.6-terra | `19b758222b6b0bf15585f1c2b43b982c9759c16b030b4390cb4d3468a569e85c` |
| `lem-equivalent-event-tests-for-a-discrete-stopping-time` | `stopping-times-and-optional-stopping` | gpt-5.6-terra | `64783e765c40d1755bf7a6ce4261833198a07ca725290d1980cae2bb297a1cb2` |
| `lem-finite-support-iteration-size-bound` | `finite-support-iterations-and-martins-axiom` | gpt-5.6-terra | `eb5381cdec8f9650231b89e09222f4661273aa583d9139e3036f87c4892b3cc0` |
| `lem-formal-cohen-forcing-verification-compiler` | `preservation-cohen-forcing-and-the-continuum` | gpt-5.6-terra | `b5193953862c999174efeb15326a3bab414c32afbfbe4f994557695d3711031f` |
| `lem-formal-ma-iteration-verification-compiler` | `finite-support-iterations-and-martins-axiom` | gpt-5.6-terra | `e2f8caf6320dcd10d7feeeca7ba51510dcb445ca4e6a6c709df454fed0bc8c0b` |
| `lem-iteration-restrictions-and-complete-embeddings` | `finite-support-iterations-and-martins-axiom` | gpt-5.6-terra | `e4dc006d565698bb1c88c011895782ffd63b8aad31cd7239f20fadf55bb7ab2e` |
| `lem-jech-sochor-socks-transfer-is-uniformly-formalizable` | `permutation-models-and-transfer-to-zf` | gpt-5.6-terra | `80e35bc152432cd036d5a0f7be8217bb8dfbc40456179fead52472ab718b19d8` |
| `lem-ma-reduction-to-small-ccc-orders` | `finite-support-iterations-and-martins-axiom` | gpt-5.6-terra | `96bebee70dc8f9f8b50dccfb09ff8dead73d64db5c9da18863e5b58f7c89b0dc` |
| `lem-minimum-maximum-and-bounded-shifts-of-stopping-times` | `stopping-times-and-optional-stopping` | gpt-5.6-terra | `92499befa6b64f198ea7ea7072cbff31508e68acbdc39a3261465446e16afa14` |
| `lem-symmetry-lemma-for-forcing-automorphisms` | `symmetric-extensions-and-basic-choice-failure-models` | gpt-5.6-terra | `e98be6eb17e9eb136a962c1ac9a1af87d7b44fa300df0a215ed13bf04e71a705` |
| `rem-optional-stopping-requires-a-passage-to-the-limit-hypothesis` | `stopping-times-and-optional-stopping` | gpt-5.6-terra | `c9b12b64223f7bb9f7498103801a8213f3f1009e2adc877444baebbc1aff951d` |
| `thm-a-stopped-martingale-is-a-martingale` | `stopping-times-and-optional-stopping` | gpt-5.6-terra | `f8f20f394866330265c546dc1fe1c39c8adbd06f6375f7b9e305fdae358f2789` |
| `thm-azuma-hoeffding-inequality` | `martingale-inequalities-and-convergence` | gpt-5.6-terra | `6b77bd1574f6ce8901fde34daeca9824cffc432709cfdd6edf1483fe16f9193e` |
| `thm-basic-cohen-generic-real-set-has-no-countably-infinite-subset` | `symmetric-extensions-and-basic-choice-failure-models` | gpt-5.6-terra | `8cbac5027b6761a3988ad3a8a7c52deb3c5bae95acec8e1f332b9ba108d02a95` |
| `thm-basic-cohen-model-has-an-infinite-dedekind-finite-set-of-reals` | `symmetric-extensions-and-basic-choice-failure-models` | gpt-5.6-terra | `66bff6f031c5f7ffbdc06cef097a626ad0f9fd3286b35b69b28cd427a93e3a1e` |
| `thm-closed-martingale-characterization` | `martingale-inequalities-and-convergence` | gpt-5.6-terra | `463b8b0a5d7e2aa2f1c7055e043618da85b0d381009170a0519911551ee93502` |
| `thm-collapse-and-levy-collapse-effects` | `preservation-cohen-forcing-and-the-continuum` | gpt-5.6-terra | `c5cad2f666ff19cc2d123a7c61f522925a3f3227e5c51c64065cc7df223405e9` |
| `thm-doob-l1-maximal-inequality` | `martingale-inequalities-and-convergence` | gpt-5.6-terra | `93c863330f148e385f235d15feb07d9c946078d6e3dd6fd8168313e013fd03ca` |
| `thm-doob-lp-maximal-inequality` | `martingale-inequalities-and-convergence` | gpt-5.6-terra | `0ac35141ea99cb571f93bee117369b2315019997e25daf79778b3c42a57d9b6e` |
| `thm-finite-support-iterations-preserve-ccc` | `finite-support-iterations-and-martins-axiom` | gpt-5.6-terra | `e58ade7fa7df5961050a42d75ea0b3c5046da8c6189186d0036234862a1d1372` |
| `thm-fraenkel-mostowski-permutation-model` | `permutation-models-and-transfer-to-zf` | gpt-5.6-terra | `80700258b38c9b577611cbfc9ac764e070a4869e88a3a55d4826183adfc75890` |
| `thm-hereditarily-symmetric-interpretations-form-a-zf-model` | `symmetric-extensions-and-basic-choice-failure-models` | gpt-5.6-terra | `222ac418a34e2208a793409cd5d80b48a8886971c5ebfafd93054d7bab90a337` |
| `thm-jech-sochor-first-embedding` | `permutation-models-and-transfer-to-zf` | gpt-5.6-terra | `9b41c0fe14be880c73560a6d13ea9a86cd87b2e7ad1e330b3ae333a222829370` |
| `thm-jech-sochor-transfer-for-boundable-sentences` | `permutation-models-and-transfer-to-zf` | gpt-5.6-terra | `6fa7023842c8765500a33e2219bc2a91c44a31d6fe06dae82668bfaccf9a9091` |
| `thm-levy-downward-convergence-of-conditional-expectations` | `martingale-inequalities-and-convergence` | gpt-5.6-terra | `ef4ecc8db55ca26b3453e7a3ef4ca94847e2f74c2a2f1b647dcd326ff19c89b8` |
| `thm-lp-bounded-martingale-convergence` | `martingale-inequalities-and-convergence` | gpt-5.6-terra | `39270df835bc13e5c6a247f73f3fe36ded2dad9cb3a57a79bc6654f81dbdc83d` |
| `thm-ma-products-of-ccc-spaces-are-ccc` | `finite-support-iterations-and-martins-axiom` | gpt-5.6-terra | `cc87c199bef38be2868be296b9a5b78abd3dc4d60902aca50f608bb8bfd468fe` |
| `thm-ma-small-unions-of-meagre-sets` | `finite-support-iterations-and-martins-axiom` | gpt-5.6-terra | `d5c3497a01e0c7d629642a8320af414521f30770ea79236bf5ac67f9be501f27` |
| `thm-ma-small-unions-of-null-sets` | `finite-support-iterations-and-martins-axiom` | gpt-5.6-terra | `657fa2dbba50fb9be15e6e40843cef64a7a78dc10ef9ba9e648f73e3541bf3f4` |
| `thm-martingale-central-limit-theorem` | `martingale-inequalities-and-convergence` | gpt-5.6-terra | `826807ff82fdce73b14d05be14b046a5c32c4cffc48156332581f55d07aa837e` |
| `thm-mutually-generic-cohen-coordinate-reals` | `preservation-cohen-forcing-and-the-continuum` | gpt-5.6-terra | `14698ecb9c9b2a9a57768c929760e2f7fc11a0ff76df63f336a3ecc8546083be` |
| `thm-nice-name-reduction-and-counting` | `preservation-cohen-forcing-and-the-continuum` | gpt-5.6-terra | `7d6c0caaf4708d163b8527c2f88978122dbad3368158106d543d5592f73ad8b0` |
| `thm-omega-two-iteration-forces-ma-and-not-ch` | `finite-support-iterations-and-martins-axiom` | gpt-5.6-terra | `6d730e40476a0b53e7d8238d897c7108fd001ba4956aed5c29f54a066dc5dcce` |
| `thm-optional-sampling-for-bounded-stopping-times` | `stopping-times-and-optional-stopping` | gpt-5.6-terra | `55c0bffaaed1160b911cb497b8eceffafd54ad75522ce5c12ff65dbe712daaa8` |
| `thm-optional-stopping-under-uniform-integrability` | `stopping-times-and-optional-stopping` | gpt-5.6-terra | `d296d7517428a0d0d9de12964645666e0bb7390b385b92ac09477261bf475d85` |
| `thm-optional-stopping-with-integrable-time-and-bounded-increments` | `stopping-times-and-optional-stopping` | gpt-5.6-terra | `6dcf48c6fa47144d6251419f513358b4c8d865dcdc7008bf07c31133a37e1146` |
| `thm-second-fraenkel-model-countable-pairs-without-choice` | `permutation-models-and-transfer-to-zf` | gpt-5.6-terra | `90f7c90f9ac7cd70e3ad80043457584d4160e7a5e6e6b7ecf3044434f29654a0` |
| `thm-two-step-generic-factorization-and-ccc` | `finite-support-iterations-and-martins-axiom` | gpt-5.6-terra | `ce063bd6432affabf0ee43dc86fd05fc48fa5af9c20e770fd2970953d9222cb8` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-next-21`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Audit one item, record its decision, complete its authorized repair and focused
checks, then continue to the next item. Do not run judges or final adjudicators.
The engine runs repair checks, one rejudge, then one terminal adjudication pass
after every group finishes. On resume, retain completed decisions and repairs.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/phase-2-next-21-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set after preflight.

You may add and author new lemma items when a licensed fatal repair needs a
genuinely missing dependency. Prove each lemma fully, verify unfamiliar or
uncertain mathematics against authoritative sources, and cite it in the
consumer's `deps` and proof. Supporting chains of new lemmas are permitted.
Place the lemmas on an owned page before their consumers and update that page,
the owning batch manifest and proof contract, and the Step-7 scope's group item
list and `by_item` entries. Record the missing dependency and its consuming
fatal repair in your report. This is an authorized scope addition; do not
invent a rejection or adjudication for a new lemma. New lemmas enter the
engine's normal coverage and targeted judgment checks.

Every entry under **Step-6 reader warnings** also requires an owning-group
decision in `research/phase-2-next-21-step7-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-6 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-6 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

A warning may name an owned page, for example a missing prerequisite page.
Read the page and its declared prerequisites and retain an explicit disposition.
The frontier policy permits unbuilt cross-category prerequisites. Check actual
item dependencies and citations before classifying such an absence as fatal;
the scheduling allowance does not excuse a missing fact used in a proof.
A page warning grants no item-edit authority: identify the affected item and its
fatal evidence, or report an unresolved page defect with
`confirmed_fatal_unlicensed`. Never dismiss it merely because it names a page.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/phase-2-next-21-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-next-21-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-next-21-alpha-step7-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
