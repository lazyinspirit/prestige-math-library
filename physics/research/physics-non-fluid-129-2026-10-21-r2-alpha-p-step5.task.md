# Step 5 adjudication — group **p**, run `physics-non-fluid-129-2026-10-21-r2`

You are the group Alpha for batches 33, 34, 35: 3 A/B pair(s), 6 page(s), 25 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **33**: `research/physics-non-fluid-129-2026-10-21-r2-batch-33-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **34**: `research/physics-non-fluid-129-2026-10-21-r2-batch-34-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **35**: `research/physics-non-fluid-129-2026-10-21-r2-batch-35-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-non-fluid-129-2026-10-21-r2-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 33 | `gr-fx05-bondi-news-and-memory` | A | general-relativity | 763 | `gr-fx01-hypersurface-and-null-geometry`, `gr-linearized-waves`, `gr-curvature-and-tides` |
| 33 | `gr-fx05-bondi-news-and-memory-examples` | B | general-relativity | 764 | `gr-fx05-bondi-news-and-memory` |
| 34 | `gr-fx06-trapped-surfaces-and-incompleteness` | A | general-relativity | 765 | `gr-fx01-hypersurface-and-null-geometry`, `gr-gr13-convex-normal-neighborhoods`, `gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability`, `orientations-poincare-lefschetz-and-alexander-duality`, `relations-functions-and-quotients` |
| 34 | `gr-fx06-trapped-surfaces-and-incompleteness-examples` | B | general-relativity | 766 | `gr-fx06-trapped-surfaces-and-incompleteness`, `gr-flat-and-newtonian-bridges`, `gr-spherical-vacuum-model` |
| 35 | `gr-fx07-kerr-and-hidden-symmetry` | A | general-relativity | 767 | `gr-spherical-vacuum-model`, `gr-fx01-hypersurface-and-null-geometry`, `gr-connections-and-free-fall`, `gr-curvature-and-tides`, `gr-einstein-and-matter`, `gr-framework-and-geometry` |
| 35 | `gr-fx07-kerr-and-hidden-symmetry-examples` | B | general-relativity | 768 | `gr-fx07-kerr-and-hidden-symmetry` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `gr-fx05-bondi-news-and-memory` — Null infinity, Bondi news and classical memory (5 item(s))

- `def-gr-fx-bondi-expansion` · definition — A smooth vacuum Bondi expansion
- `def-gr-fx-bms-supertranslation` · definition — Bondi supertranslations and their action on the shear
- `lem-gr-fx-bondi-mass-coefficient` · lemma — Bondi mass-aspect constraint coefficient
- `prop-gr-fx-memory-integral` · proposition — Classical shear memory and the leading displacement approximation
- `prop-gr-fx-bondi-mass-loss` · proposition — Integrated vacuum Bondi mass loss

### `gr-fx05-bondi-news-and-memory-examples` — Null infinity, Bondi news and classical memory — Examples (2 item(s))

- `ex-gr-fx05-1` · example — A compact Bondi-news pulse with prescribed shear memory
- `ex-gr-fx05-2` · example — Static supertranslation shear without Bondi news

### `gr-fx06-trapped-surfaces-and-incompleteness` — Trapped surfaces and Penrose incompleteness (5 item(s))

- `def-gr-fx-future-null-geodesic-completeness` · definition — Future null geodesic completeness and incompleteness
- `lem-gr-fx-cauchy-slices-are-diffeomorphic` · lemma — A complete temporal flow identifies smooth Cauchy slices
- `def-gr-fx-trapped-surface-and-black-region` · definition — Trapping and the asymptotic black-hole region
- `lem-gr-fx-trapped-boundary-compactness` · lemma — Compactness of the future horismos under null completeness
- `thm-gr-fx-penrose-incompleteness` · theorem — Penrose null geodesic incompleteness

### `gr-fx06-trapped-surfaces-and-incompleteness-examples` — Trapped surfaces and Penrose incompleteness — Examples (2 item(s))

- `ex-gr-fx06-1` · example — Minkowski round spheres are not future trapped
- `ex-gr-fx06-2` · example — Compact Cauchy slices in de Sitter block the Penrose conclusion

### `gr-fx07-kerr-and-hidden-symmetry` — Kerr geometry and hidden symmetry (9 item(s))

- `def-gr-fx-kerr-exterior` · definition — Subextremal Kerr exterior in length coordinates
- `def-gr-fx-killing-tensor` · definition — Killing tensors and quadratic geodesic integrals
- `def-gr-fx-killing-energy-current` · definition — Killing-multiplier current and its observer density
- `lem-gr-fx-kerr-exterior-properties` · lemma — Lorentzian signature and time orientation of the Kerr exterior datum
- `prop-gr-fx-killing-tensor-conservation` · proposition — Conservation of quadratic geodesic integrals
- `prop-gr-fx-kerr-horizon-generator` · proposition — Kerr horizon angular velocity and the ergoregion
- `lem-gr-fx-kerr-vacuum-verification` · lemma — Kerr exterior vacuum verification
- `thm-gr-fx-kerr-hamilton-jacobi-separation` · theorem — Local Kerr Hamilton-Jacobi separation
- `rem-gr-fx-kerr-units-and-physical-parameters` · remark — Kerr geometric parameters and SI unit restoration

### `gr-fx07-kerr-and-hidden-symmetry-examples` — Kerr geometry and hidden symmetry — Examples (2 item(s))

- `ex-gr-fx07-1` · example — Kerr geometry and hidden symmetry — Schwarzschild limit
- `ex-gr-fx07-2` · example — Kerr geometry and hidden symmetry — negative stationary Killing density

## Your seams

Your pages depend on another group's:

- `gr-fx05-bondi-news-and-memory` requires `gr-fx01-hypersurface-and-null-geometry` (group n, batch 29)
- `gr-fx06-trapped-surfaces-and-incompleteness` requires `gr-fx01-hypersurface-and-null-geometry` (group n, batch 29)
- `gr-fx07-kerr-and-hidden-symmetry` requires `gr-fx01-hypersurface-and-null-geometry` (group n, batch 29)

Another group's pages depend on yours:

- `gr-fx08-wave-energy-and-black-hole-perturbations` (group q) requires your `gr-fx07-kerr-and-hidden-symmetry`
- `gr-fx09-bootstrap-and-stability-boundaries` (group q) requires your `gr-fx06-trapped-surfaces-and-incompleteness`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-non-fluid-129-2026-10-21-r2-judge.jsonl` yourself before reporting nothing to do —
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

# Step 5 batch adjudication, `physics-non-fluid-129-2026-10-21-r2`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
