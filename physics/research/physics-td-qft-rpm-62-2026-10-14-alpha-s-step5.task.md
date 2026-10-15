# Step 5 adjudication — group **s**, run `physics-td-qft-rpm-62-2026-10-14`

You are the group Alpha for batches 3, 4, 21: 3 A/B pair(s), 6 page(s), 55 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **3**: `research/physics-td-qft-rpm-62-2026-10-14-batch-3-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **4**: `research/physics-td-qft-rpm-62-2026-10-14-batch-4-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **21**: `research/physics-td-qft-rpm-62-2026-10-14-batch-21-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-td-qft-rpm-62-2026-10-14-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 3 | `td-math-ordered-composition` | A | thermodynamics-mathematics | 267 | `linear-independence-bases-and-dimension`, `order-zorn-and-the-axiom-of-choice`, `the-zfc-axioms-and-basic-set-constructions`, `the-analytic-hahn-banach-theorem`, `foundations-of-the-real-numbers`, `vector-spaces-and-subspaces`, `rings-subrings-and-integral-domains`, `construction-of-r-via-cauchy-sequences`, `roots-and-rational-powers`, `relations-functions-and-quotients` |
| 3 | `td-math-ordered-composition-examples` | B | thermodynamics-mathematics | 288 | `td-math-ordered-composition` |
| 4 | `td-math-nonsmooth-equilibrium` | A | thermodynamics-mathematics | 268 | `compactness-in-metric-spaces`, `the-derivative-and-mean-value-theorems`, `the-total-derivative`, `continuity-ivt-evt-and-uniform-continuity`, `convexity`, `convex-and-semicontinuous-functions-on-rn`, `td-math-ordered-composition`, `the-inverse-function-theorem-completed`, `inverse-and-implicit-function-theorems` |
| 4 | `td-math-nonsmooth-equilibrium-examples` | B | thermodynamics-mathematics | 289 | `td-math-nonsmooth-equilibrium` |
| 21 | `td-interacting-equilibrium-preparations` | A | thermodynamics | 303 | `td-finite-statistical-bridge`, `td-math-interacting-ensemble-geometry` |
| 21 | `td-interacting-equilibrium-preparations-examples` | B | thermodynamics | 304 | `td-interacting-equilibrium-preparations` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `td-math-ordered-composition` — Ordered Composition (16 item(s))

- `def-tdmath-tagged-scalable-compound` · definition — Tagged scalable compounds
- `lem-tdmath-compound-mass-well-defined` · lemma — Compound mass is well-defined and additive
- `def-tdmath-comparison-and-stability` · definition — Comparison and stability for compounds
- `def-tdmath-signed-comparison` · definition — Signed comparison of finite coefficient maps
- `lem-tdmath-reciprocal-naturals-tend-zero` · lemma — Reciprocals of the positive integers decrease to zero
- `lem-tdmath-spectator-cancellation` · lemma — Spectator cancellation and signed-order algebra
- `lem-tdmath-reference-order` · lemma — Ordering the two-state reference mixtures
- `lem-tdmath-reference-supremum-bounds` · lemma — Reference entropy supremum is finite and attained
- `thm-tdmath-additive-entropy-representation` · theorem — Additive extensive representation of compound comparison
- `thm-tdmath-affine-entropy-uniqueness` · theorem — Uniqueness up to a positive affine transformation
- `thm-tdmath-common-meter-calibration` · theorem — Finite-family calibration by a common meter
- `thm-tdmath-finite-inequality-alternative` · theorem — Finite inequality alternative by Fourier–Motzkin elimination
- `thm-tdmath-reaction-offset-feasibility` · theorem — Feasibility of finite reaction offsets
- `def-tdmath-type-offset-vector-space` · definition — Type-offset quotient vector space
- `lem-tdmath-type-offset-vector-space-well-defined` · lemma — Type-offset quotient is a real vector space
- `thm-tdmath-infinite-no-sinks-sandwich` · theorem — Infinite-valued no-sinks Hahn–Banach sandwich and conditional offsets

### `td-math-ordered-composition-examples` — Ordered Composition — Examples (4 item(s))

- `ex-tdmath-reference-order-two-state` · example — Two-state reference order
- `ex-tdmath-common-meter-two-types` · example — Two types on one meter scale
- `ex-tdmath-reaction-offset-cycle-obstruction` · example — A two-channel cycle obstructs reaction offsets
- `ex-tdmath-no-sinks-sandwich-on-r` · example — A no-sinks sandwich on the real line

### `td-math-nonsmooth-equilibrium` — Nonsmooth Equilibrium (15 item(s))

- `def-tdmath-extended-convex-function` · definition — Proper, convex, and lower-semicontinuous extended-real functions on Euclidean space
- `def-tdmath-fenchel-transform-and-subgradient` · definition — Fenchel conjugate, biconjugate, and subdifferential
- `lem-tdmath-extended-convex-epigraph-equivalence` · lemma — Extended-real convexity and lower semicontinuity are characterized by the epigraph
- `lem-tdmath-closed-convex-separation` · lemma — Strictly separate a point from a nonempty closed convex Euclidean set
- `lem-tdmath-fenchel-young-equality` · lemma — Fenchel inequality and its equality condition
- `thm-tdmath-finite-dimensional-biconjugation` · theorem — Finite-dimensional Fenchel-Moreau biconjugation
- `thm-tdmath-fenchel-attainment` · theorem — A coercive Fenchel tilt attains its minimum and conjugate supremum
- `thm-tdmath-finite-mixture-envelope` · theorem — Finite-mixture convex envelope and its supporting-face condition
- `cor-tdmath-ordered-finite-mixture-envelope` · corollary — Conditional finite-mixture envelope for an additive ordered representation
- `lem-tdmath-lever-rule` · lemma — The two-point lever rule on a scalar interval
- `lem-tdmath-concave-affine-maximizer-and-hessian` · lemma — Concave supporting bound, affine maxima, and Hessian sign
- `lem-tdmath-constrained-curvature` · lemma — Second-order curvature tests on an affine feasible slice
- `lem-tdmath-stoichiometric-tangent-cone` · lemma — The feasible tangent cone for nonnegative stoichiometric amounts
- `thm-tdmath-local-implicit-rank` · theorem — Local graph form at a nonsingular derivative minor
- `thm-tdmath-phase-dimension` · theorem — Regular rank form of the finite-component phase dimension count

### `td-math-nonsmooth-equilibrium-examples` — Nonsmooth Equilibrium — Examples (4 item(s))

- `ex-tdmath-vertical-separation-biconjugate` · example — A vertical separator and biconjugation outside the domain
- `ex-tdmath-flat-face-nonunique-minimizer` · example — A flat exposed face with many Fenchel minimizers
- `ex-tdmath-singular-phase-rank` · example — A singular two-phase equation map with a four-dimensional solution set
- `ex-tdmath-water-reaction-boundary-tangent` · example — Water formation at a boundary of the feasible extent interval

### `td-interacting-equilibrium-preparations` — Interacting Equilibrium Preparations (12 item(s))

- `def-td-stable-tempered-continuum-preparation` · definition — Stable regularly tempered classical positional preparation
- `def-td-admissible-van-hove-and-tempered-exterior` · definition — Van Hove regions and uniformly tempered exterior preparations
- `post-td-classical-indistinguishable-particle-measure` · postulate — Indistinguishable-particle positional measure
- `def-td-controlled-fixed-n-energy-shell` · definition — Exact-particle-number positional energy shell
- `def-td-retained-hard-core-zero-beta-preparation` · definition — Retained hard-core continuation at zero inverse temperature
- `post-td-equilibrium-ensemble-sampling` · postulate — Finite-volume equilibrium ensemble sampling
- `post-td-grand-variational-phase-uniqueness` · postulate — Selected grand-variational phase uniqueness
- `pthm-td-stable-tempered-free-cube-grand-pressure` · physics-theorem — Stable-tempered free-cube grand pressure
- `pthm-td-controlled-continuum-thermodynamic-limit` · physics-theorem — Controlled continuum interval-energy thermodynamic limit
- `pthm-td-controlled-thermodynamic-ensemble-duality` · physics-theorem — Controlled canonical–grand thermodynamic duality
- `pthm-td-interacting-three-ensemble-local-limit` · physics-theorem — Interacting exact-N shrinking-shell three-ensemble local limit
- `pthm-td-qualified-van-hove-and-exterior-limit` · physics-theorem — Qualified van Hove and tempered-exterior thermodynamic limits

### `td-interacting-equilibrium-preparations-examples` — Interacting Equilibrium Preparations — Examples (4 item(s))

- `ex-td-two-particle-hard-core-preparation` · example — Two indistinguishable hard-core particles in an interval
- `ex-td-nonunique-variational-phases` · example — Two minimizers in a reduced coexistence model
- `ex-td-forbidden-pair-beta-zero` · example — Hard-core exclusion retained at zero inverse temperature
- `ex-td-volume-sized-external-field` · example — A volume-filling field changes ideal-gas pressure

## Your seams

Your pages depend on another group's:

- `td-interacting-equilibrium-preparations` requires `td-finite-statistical-bridge` (group q, batch 15)
- `td-interacting-equilibrium-preparations` requires `td-math-interacting-ensemble-geometry` (group v, batch 18)

Another group's pages depend on yours:

- `td-representation-and-equilibrium` (group p) requires your `td-math-nonsmooth-equilibrium`
- `td-math-local-pfaff-geometry` (group t) requires your `td-math-nonsmooth-equilibrium`
- `td-math-ensembles-and-limits` (group t) requires your `td-math-nonsmooth-equilibrium`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-td-qft-rpm-62-2026-10-14-judge.jsonl` yourself before reporting nothing to do —
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

# Step 5 batch adjudication, `physics-td-qft-rpm-62-2026-10-14`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
