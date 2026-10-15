# Step 5 adjudication — group **h**, run `physics-td-qft-rpm-62-2026-10-14`

You are the group Alpha for batches 43, 44, 45: 3 A/B pair(s), 6 page(s), 32 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **43**: `research/physics-td-qft-rpm-62-2026-10-14-batch-43-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **44**: `research/physics-td-qft-rpm-62-2026-10-14-batch-44-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **45**: `research/physics-td-qft-rpm-62-2026-10-14-batch-45-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 43 | `qft-mf04` | A | quantum-field-theory-mathematics | 525 | `qft-mf03`, `qm-uncertainty-and-compatibility` |
| 43 | `qft-mf04-examples` | B | quantum-field-theory-mathematics | 526 | `qft-mf04` |
| 44 | `qft-mg01` | A | quantum-field-theory-mathematics | 527 | `fundamental-solutions-newtonian-potentials-and-green-functions`, `orthonormal-bases-parseval-and-fourier-series`, `qft-mf04`, `em-primitives-and-postulates`, `em-potentials-and-gauge`, `em-retarded-fields-and-radiation`, `homology-axioms-degree-and-classical-applications` |
| 44 | `qft-mg01-examples` | B | quantum-field-theory-mathematics | 528 | `qft-mg01` |
| 45 | `qft-mg03` | A | quantum-field-theory-mathematics | 529 | `qft-mg01`, `euclidean-surface-measure-divergence-and-green-identities`, `the-complex-exponential-and-eulers-formula` |
| 45 | `qft-mg03-examples` | B | quantum-field-theory-mathematics | 530 | `qft-mg03` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qft-mf04` — Tempered time-ordered scalar two-point carrier (3 item(s))

- `lem-qft-free-time-ordered-kernel` · lemma — Tempered time-ordered scalar two-point carrier
- `lem-qft-free-action-equations` · lemma — Classical free action variations and normalization
- `lem-qft-free-domain-observables` · lemma — Domain-qualified free observables and point-field obstruction

### `qft-mf04-examples` — Tempered time-ordered scalar two-point carrier — Examples (1 item(s))

- `ex-qftmath-timeordered-jump` · example — Timeordered derivative jump gives iδ Green source

### `qft-mg01` — Charged gauge data and SI-natural conventions (12 item(s))

- `def-qft-photon-transverse-space` · definition — Positive transverse photon one-particle space
- `def-qft-qed-gauge-data` · definition — Charged gauge data and SI-natural conventions
- `lem-qft-photon-no-global-polarization-frame` · lemma — No global continuous real polarization frame
- `lem-qft-photon-null-quotient` · lemma — Lorenz auxiliary subsidiary null quotient
- `lem-qft-photon-smeared-potential` · lemma — Smeared Coulomb photon operator distribution
- `lem-qft-photon-transverse-projector-kernel` · lemma — Newtonian off-diagonal kernel of the transverse projector
- `lem-qft-qed-dirac-gauge-current` · lemma — Dirac gauge covariance, action and conserved current
- `lem-qft-qed-coulomb-constraint` · lemma — Gauss multiplier and smooth periodic Coulomb solver
- `lem-qft-qed-dirac-first-order-constraints` · lemma — Finite-mode Dirac first-order constraint reduction
- `lem-qft-photon-covariance-spectrum` · lemma — Photon quotient Lorentz representation and positive dynamics
- `lem-qft-photon-local-field-strength` · lemma — Local covariant physical field-strength observables
- `lem-qft-photon-local-weyl-observables` · lemma — Bounded local photon Weyl observable algebra

### `qft-mg01-examples` — Charged gauge data and SI-natural conventions — Examples (4 item(s))

- `ex-qft-qed-two-polarizations` · example — Two physical photon fibers without global frame
- `cex-qft-qed-negative-auxiliary` · counterexample — Auxiliary timelike vector has negative form
- `cex-qft-qed-coulomb-potential-locality` · counterexample — Coulomb potential has nonlocal equal-time commutator
- `cex-qft-qed-torus-charge` · counterexample — Periodic smooth Gauss excludes nonzero net charge

### `qft-mg03` — Finite matrix formal inverse and gauge-covariant kernel (9 item(s))

- `def-qft-qed-finite-graph-gauge-data` · definition — Finite-graph U(1) phases for matrix kernels
- `def-qft-qed-finite-grassmann-algebra` · definition — Finite Grassmann algebra and top-coefficient integral
- `def-qft-qed-photon-energy-multiplier` · definition — Free transverse-photon energy multiplier
- `def-qft-qed-formal-ring` · definition — Finite matrix formal kernel and inverse series
- `lem-qft-qed-coherent-ir-obstruction` · lemma — Logarithmic coherent infrared tail: finite energy, no Fock limit
- `lem-qft-qed-formal-matrix-ward` · lemma — Finite/formal gauge covariance and matrix Ward identity
- `lem-qft-qed-tree-ward` · lemma — Off-shell free Dirac Ward telescoping and tree currents
- `lem-qft-qed-grassmann-determinant` · lemma — Finite Grassmann Gaussian and gauge-invariant determinant
- `lem-qft-qed-conserved-current-gauge` · lemma — Gauge-longitudinal kernel decoupling for explicit tree currents

### `qft-mg03-examples` — Finite matrix formal inverse and gauge-covariant kernel — Examples (3 item(s))

- `ex-qft-qed-tree-matrix-example` · example — Exact rational Dirac Ward matrix example
- `ex-qft-qed-coherent-angular` · example — Fixed-vector transverse angular coefficient $8\pi/3$
- `cex-qft-qed-energy-fock-limit` · counterexample — Bounded free-photon energy need not yield a Fock-vector limit

## Your seams

Your pages depend on another group's:

- `qft-mf04` requires `qft-mf03` (group g, batch 42)

Another group's pages depend on yours:

- `qft-f01` (group b) requires your `qft-mf04`
- `qft-g01` (group b) requires your `qft-mg01`
- `qft-g02` (group c) requires your `qft-mg03`
- `qft-f04` (group d) requires your `qft-mf04`
- `qft-mx02` (group i) requires your `qft-mg03`
- `qft-mx03` (group i) requires your `qft-mg03`
- `qft-ir03` (group k) requires your `qft-mf04`

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
