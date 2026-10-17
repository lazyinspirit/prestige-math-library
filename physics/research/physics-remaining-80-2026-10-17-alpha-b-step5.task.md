# Step 5 adjudication — group **b**, run `physics-remaining-80-2026-10-17`

You are the group Alpha for batches 29, 30, 31: 3 A/B pair(s), 6 page(s), 43 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **29**: `research/physics-remaining-80-2026-10-17-batch-29-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **30**: `research/physics-remaining-80-2026-10-17-batch-30-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **31**: `research/physics-remaining-80-2026-10-17-batch-31-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-remaining-80-2026-10-17-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 29 | `csm-full-phase-local-equivalence` | A | classical-statistical-mechanics | 493 | `csm-gibbs-lattice`, `td-math-interacting-ensemble-geometry`, `minimax-lower-bounds-and-information-theoretic-methods`, `stationary-markov-chains-and-ergodic-limits` |
| 29 | `csm-full-phase-local-equivalence-examples` | B | classical-statistical-mechanics | 494 | `csm-full-phase-local-equivalence` |
| 30 | `csm-hamiltonian-statistics` | A | classical-statistical-mechanics | 495 | `euclidean-ordinary-differential-equations-with-smooth-dependence`, `hamiltonian-mechanics-and-completely-integrable-systems`, `measure-preserving-transformations-and-poincare-recurrence`, `product-measures-and-the-fubini-tonelli-theorems`, `strong-laws-of-large-numbers`, `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory`, `td-math-mixture-dynamics-and-shells`, `the-lebesgue-integral-and-the-convergence-theorems`, `integration-of-forms-and-the-general-stokes-theorem`, `measurable-densities-and-radon-volume-on-manifolds` |
| 30 | `csm-hamiltonian-statistics-examples` | B | classical-statistical-mechanics | 496 | `csm-hamiltonian-statistics` |
| 31 | `csm-mean-field-hierarchy` | A | classical-statistical-mechanics | 497 | `cm-math-dynamics`, `csm-hamiltonian-statistics`, `markov-kernels-and-markov-chains`, `sigma-algebras-and-borel-sets`, `schwartz-space-and-the-plancherel-theorem` |
| 31 | `csm-mean-field-hierarchy-examples` | B | classical-statistical-mechanics | 498 | `csm-mean-field-hierarchy` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `csm-full-phase-local-equivalence` — Conditional entropy chain and disjoint-block bounds (14 item(s))

- `lem-csm-kl-chain-disjoint` · lemma — Conditional entropy chain and disjoint-block bounds
- `lem-csm-gaussian-mark-moments` · lemma — Gaussian mark normalization, moments, and exponential controls
- `lem-csm-information-contraction-pinsker` · lemma — Measurable information contraction and Pinsker bound
- `def-csm-full-marked-model` · definition — Interacting marked phase-space and reference measures
- `def-csm-marked-periodic-continuation` · definition — Marked periodic continuation and local restriction
- `lem-csm-gaussian-marked-lift-existence` · lemma — Existence of the independent Gaussian-marked positional lift
- `thm-csm-total-canonical-window` · theorem — Total-energy concentration and controlled canonical windows
- `post-csm-fullphase-interacting-preparations` · postulate — Classical full-phase interacting ensemble preparations
- `thm-csm-uniform-phase-shell-entropy` · theorem — Full uniform phase shell has vanishing specific canonical KL
- `thm-csm-full-shell-positional-minimizer` · theorem — Full phase shell marginal satisfies the positional variational bound
- `thm-csm-local-mark-kl-bound` · theorem — Spatial random-occupation conditional mark entropy bound
- `thm-csm-local-full-phase-equivalence` · theorem — Full interacting shell, canonical, and variational-grand local marked equivalence
- `thm-csm-local-momentum-moments` · theorem — Local kinetic energy and first and second momentum expectations
- `pthm-csm-full-interacting-phase-equivalence` · physics-theorem — Physical interacting local phase-space ensemble bridge

### `csm-full-phase-local-equivalence-examples` — Conditional entropy chain and disjoint-block bounds — Examples (2 item(s))

- `cex-csm-energy-concentration-not-local` · counterexample — Energy concentration without local equivalence
- `cex-csm-specific-entropy-not-local` · counterexample — Small entropy density without homogeneous local convergence

### `csm-hamiltonian-statistics` — Hamiltonian phase, complete-domain flow and reference measure (12 item(s))

- `lem-csm-dk-volume-form-pullback-preserves-reference-measure` · lemma — A volume-preserving diffeomorphism preserves its induced Borel measure
- `def-csm-dk-hamiltonian-flow-measure` · definition — Hamiltonian phase, complete-domain flow and reference measure
- `thm-csm-dk-integrable-covariance-green-kubo` · theorem — Green–Kubo covariance limit under absolute integrability
- `def-csm-dk-ergodic-and-mixing-notions` · definition — Ergodicity and mixing for a selected probability map
- `post-csm-dk-selected-hamiltonian-dynamics` · postulate — Adopted classical Hamiltonian dynamics and preparation
- `thm-csm-dk-compact-hamiltonian-linear-response` · theorem — Exact finite-time response on a compact Hamiltonian phase
- `thm-csm-dk-finite-measure-recurrence` · theorem — Hamiltonian recurrence under the exact finite-measure hypothesis
- `thm-csm-dk-invariant-hamiltonian-and-shell-measures` · theorem — Invariant energy-weighted and regular-shell probabilities
- `thm-csm-dk-qualified-time-averages` · theorem — Conditional sampled and continuous-time averages
- `thm-csm-dk-mixing-hierarchy` · theorem — Mixing hierarchy for a selected probability-preserving map
- `thm-csm-dk-liouville-and-fine-entropy` · theorem — Liouville probability transport and constant fine entropy
- `pthm-csm-dk-qualified-hamiltonian-statistical-predictions` · physics-theorem — Conditional Hamiltonian ensemble and response predictions

### `csm-hamiltonian-statistics-examples` — Hamiltonian phase, complete-domain flow and reference measure — Examples (3 item(s))

- `cex-csm-dk-weak-mixing-not-strong-mixing` · counterexample — Weak mixing need not imply strong mixing
- `cex-csm-dk-recurrent-hamiltonian-nonergodicity` · counterexample — Two oscillators are recurrent but nonergodic on their total shell
- `cex-csm-dk-coarse-entropy-returns` · counterexample — Coarse Shannon entropy rises and falls in a reversible rotor

### `csm-mean-field-hierarchy` — Smooth periodic finite-N and scaled mean-field phase data (11 item(s))

- `lem-csm-dk-continuous-time-field-smooth-flow` · lemma — Smooth state flow for continuous-time smooth-state force fields
- `def-csm-dk-periodic-mean-field-model` · definition — Smooth periodic finite-N and scaled mean-field phase data
- `def-csm-dk-phase-space-wasserstein-one` · definition — Wasserstein-1 coupling cost on dimensionless phase space
- `post-csm-dk-mean-field-particle-and-iid-model` · postulate — Selected mean-field particle model and iid preparation
- `thm-csm-dk-finite-n-complete-flow` · theorem — Complete finite-N flow and permutation-invariant Liouville law
- `thm-csm-dk-exact-bbgky` · theorem — Exact normalized BBGKY hierarchy
- `lem-csm-dk-smooth-tests-determine-phase-probability` · lemma — Smooth compact tests determine phase-space probabilities
- `thm-csm-dk-global-lipschitz-vlasov` · theorem — Complete global bounded-Lipschitz mean-field characteristic evolution
- `thm-csm-dk-dobrushin-and-particle-limit` · theorem — Dobrushin coupling estimate and actual particle-to-Vlasov limit
- `thm-csm-dk-compact-iid-propagation-of-chaos` · theorem — Compact iid empirical convergence and propagation of chaos
- `pthm-csm-dk-qualified-mean-field-limit` · physics-theorem — Conditional mean-field particle distribution limit

### `csm-mean-field-hierarchy-examples` — Smooth periodic finite-N and scaled mean-field phase data — Examples (1 item(s))

- `ex-csm-dk-product-law-develops-correlations` · example — Finite pair dynamics immediately creates correlations

## Your seams

Your pages depend on another group's:

- `csm-full-phase-local-equivalence` requires `csm-gibbs-lattice` (group a, batch 27)

Another group's pages depend on yours:

- `csm-stochastic-response` (group c) requires your `csm-mean-field-hierarchy`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-remaining-80-2026-10-17-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Mandatory physics instructions

Read `CLAUDE.md`, `SCHEMA.md`, and `../PHYSICS-CONTENT-MODEL.md`. Follow the assigned role and scope. These rules apply to every physics framework.

**Define, do not merely name.** Be as mathematically rigorous and explicit as possible. Before using a technical term, give its mathematical definition or identify an exact earlier definition and state its relevant content. Specify objects, domains, maps, regularity, hypotheses, and conventions. Use published, draft or planned mathematics suppliers with exact statements, hypotheses and honest proof status; complete remaining gaps locally.

**Example—classical EM:** write $\mathbf E,\mathbf B:\Omega\times I\to\mathbb R^3$, with spatial region $\Omega\subseteq\mathbb R^3$, time interval $I$, and stated regularity; at fixed time these are spatial vector fields. Specify units. Do not assume smoothness across point charges or surface sources; state exclusions or use an appropriate weak/distributional formulation. Likewise, define a worldline as a curve with specified domain and conditions, and a reference frame as a precise geometric object appropriate to the framework.

**Model deductions and empirical observations are distinct.** A physics proof establishes a logical consequence of explicitly stated model postulates, mathematical hypotheses and idealizations; it does not establish that the model or its postulates describe nature. Experiments report source-backed observations with apparatus, calibration, sampling and uncertainty qualifications. Comparing predictions with observations tests the combined model and apparatus assumptions; agreement is evidence, not a deductive proof of the model. Explicitly distinguish adopted assumptions, derived predictions, reported observations and statistical inference. If a deduction uses measured inputs, state them as qualified empirical premises and carry their uncertainty and conditions into the conclusion.

**Evidence is statistical.** Separate predictions, observations, and inference. State preparation, apparatus assumptions, sampling model, uncertainty, and source limitations. Never invent measurements or statistical precision. Carry empirical qualifications into downstream conclusions.

**Example—double slit:** each detection is localized; fringes concern the accumulated distribution. A finite sample can lack visible fringes with nonzero probability under ordinary coherent sampling models. Agreement does not prove quantum mechanics; missing fringes do not automatically falsify it. Test a specified competing model, not “all classical physics.” A p-value is not the probability that a theory is false. Classical waves also interfere, and reviewer confidence is not empirical certainty.

Postulates are adopted assumptions; experiments report source-backed observations, not proofs. Physics theorems and thought experiments require complete conditional deductions. Use schema classifications, dependency roles, uncertainty records, and nonproof reviews. Keep evidence links separate from acyclic prerequisites. Mathematical items cannot depend on physics; imports and the root mathematics workspace are read-only. Physical public-interface changes require consumer review.

Authors supply definitions and prerequisites; reviewers and adjudicators check them, source fidelity, and statistical qualifications. Reject undefined reasoning and fabricated certainty.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks. In physics, algorithms may have either domain like definitions. Pure mathematical properties use mathematical result kinds and only mathematical prerequisites; consequences relying on physical premises use `physics-theorem` (or `thought-experiment`). Preserve physical scope and empirical qualifications.

---

# Step 5 batch adjudication, `physics-remaining-80-2026-10-17`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
