# Step 5 adjudication — group **y**, run `physics-remaining-80-2026-10-17`

You are the group Alpha for batches 64, 65, 69: 3 A/B pair(s), 6 page(s), 32 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **64**: `research/physics-remaining-80-2026-10-17-batch-64-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **65**: `research/physics-remaining-80-2026-10-17-batch-65-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **69**: `research/physics-remaining-80-2026-10-17-batch-69-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 64 | `tgr-et03` | A | thermodynamics-and-general-relativity-mathematics | 625 | `qsm-dt-response`, `qsm-kms-equilibrium`, `tgr-et02` |
| 64 | `tgr-et03-examples` | B | thermodynamics-and-general-relativity-mathematics | 626 | `tgr-et03` |
| 65 | `tgr-et04` | A | thermodynamics-and-general-relativity-mathematics | 627 | `tgr-et01`, `tgr-mc02` |
| 65 | `tgr-et04-examples` | B | thermodynamics-and-general-relativity-mathematics | 628 | `tgr-et04` |
| 69 | `tgr-mg01` | A | thermodynamics-and-general-relativity-mathematics | 635 | `qsm-bose-fermi-gases` |
| 69 | `tgr-mg01-examples` | B | thermodynamics-and-general-relativity-mathematics | 636 | `tgr-mg01` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `tgr-et03` — Constructed independent cell Gibbs states (5 item(s))

- `thm-tgr-finite-cell-gibbs-factorization` · theorem — Constructed independent cell Gibbs states
- `thm-tgr-kms-orbit-time-rescaling` · theorem — KMS orbit clock rescaling
- `thm-tgr-finite-response-redshift` · theorem — Finite response and spectral clock redshift
- `lem-tgr-countable-l2-completeness` · lemma — Completeness of countable square-summable sequences
- `prop-tgr-rotating-mode-gibbs-obstruction` · proposition — Rotating mode Gibbs obstruction

### `tgr-et03-examples` — Constructed independent cell Gibbs states — Examples (1 item(s))

- `ex-tgr-proper-clock-qubit-response` · example — Proper clock two-level response

### `tgr-et04` — Heat and viscous entropy specialization (3 item(s))

- `lem-tgr-spatial-shear-properties` · lemma — Spatial shear properties and nonnegative norm
- `lem-tgr-eckart-entropy-specialization` · lemma — Heat and viscous entropy specialization
- `thm-tgr-supported-static-heat-evolution` · theorem — Constructed supported static heat evolution

### `tgr-et04-examples` — Heat and viscous entropy specialization — Examples (1 item(s))

- `ex-tgr-static-cosine-heat-relaxation` · example — Static cosine relaxation

### `tgr-mg01` — Finite gravitational phase and entropy reference (15 item(s))

- `def-tgr-gravitating-phase-reference` · definition — Finite gravitational phase and entropy reference
- `lem-tgr-finite-gaussian-moment-envelope` · lemma — Finite-dimensional Gaussian normalization and moment envelope
- `lem-tgr-annular-radial-integration` · lemma — Radial integration over a bounded Euclidean shell
- `def-tgr-softened-gravity-finite-phase` · definition — Finite softened gravitational Hamiltonian and domain
- `def-tgr-regulated-kepler-shell-law` · definition — Regulated relative Kepler phase volume and shell law
- `lem-tgr-static-gas-finite-normalization` · lemma — Static relativistic finite gas normalization and hydrostatics
- `lem-tgr-finite-gravitational-gibbs` · lemma — Finite gravitational Gibbs normalization and differentiable moments
- `thm-tgr-gravity-collapse-nonextensivity` · theorem — Point collapse and unscaled gravity nonextensivity
- `lem-tgr-regulated-kepler-shell-law-normalization` · lemma — Finite regulated Kepler shell measure is normalized
- `lem-tgr-relative-shell-canonical-response` · lemma — Exact relative-shell canonical normalization and response
- `thm-tgr-regulated-kepler-negative-capacity` · theorem — Negative Gibbs-volume capacity in a finite regulated shell
- `thm-tgr-gravitational-canonical-response` · theorem — Nonnegative fixed-Hamiltonian canonical heat capacity
- `thm-tgr-finite-gravitational-entropy-optimum` · theorem — Unique finite gravitational Gibbs variational optimum
- `lem-tgr-static-finite-fermi-occupations` · lemma — Supplied static finite-mode Fermi occupation identity
- `lem-tgr-finite-bath-exchange-stability` · lemma — Finite-bath entropy curvature and specified exchange stability

### `tgr-mg01-examples` — Finite gravitational phase and entropy reference — Examples (7 item(s))

- `cex-tgr-volume-surface-entropy-response` · counterexample — Bound relative Kepler entropies give different heat capacities
- `ex-tgr-softened-box-normalization` · example — Finite softened two-body box
- `cex-tgr-point-box-collapse` · counterexample — Finite box fails to cure point gravitational collapse
- `cex-tgr-softened-nonlinear-free-energy` · counterexample — Fixed softening does not guarantee finite extensive free energy
- `cex-tgr-hardcore-long-range-limit` · counterexample — Hard-core exclusion does not guarantee a finite unscaled-gravity limit
- `ex-tgr-regulated-negative-response` · example — Regulated Kepler branch has negative volume response
- `ex-tgr-finite-bath-stabilization` · example — Finite bath can stabilize negative heat capacity exchange

## Your seams

Your pages depend on another group's:

- `tgr-et03` requires `qsm-dt-response` (group p, batch 47)
- `tgr-et03` requires `qsm-kms-equilibrium` (group n, batch 41)
- `tgr-et03` requires `tgr-et02` (group x, batch 63)
- `tgr-et04` requires `tgr-et01` (group x, batch 62)
- `tgr-et04` requires `tgr-mc02` (group w, batch 55)
- `tgr-mg01` requires `qsm-bose-fermi-gases` (group o, batch 45)

Another group's pages depend on yours:

- `tgr-pet01` (group s) requires your `tgr-et03`
- `tgr-pet03` (group s) requires your `tgr-et04`
- `tgr-g01` (group t) requires your `tgr-mg01`

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
