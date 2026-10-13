# Step 4 batch reviewer — batch **11**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **11**. Step-5 owning group: **o**.
Return `group: "o"` and `batches: ["11"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 11 | `cm-math-evidence` | A | measures-and-their-basic-properties, the-lebesgue-integral-and-the-convergence-theorems, hilbert-space-geometry-and-riesz-representation, mixed-partials-taylor-and-extrema, probability-spaces-random-variables-and-expectation, rn-as-a-normed-space, sigma-algebras-and-borel-sets, the-inverse-function-theorem-completed, the-spectral-theorem-and-singular-value-decomposition, the-total-derivative, vector-spaces-and-subspaces, foundations-of-the-real-numbers, matrices-and-the-matrix-of-a-linear-map, measurable-functions-and-simple-approximation, suprema-and-infima, weak-laws-and-series-of-independent-random-variables, independence-borel-cantelli-and-zero-one-laws, construction-of-r-via-cauchy-sequences |
| 11 | `cm-math-evidence-examples` | B | cm-math-evidence, the-derivative-and-mean-value-theorems, finite-probability-spaces-and-random-variables |

## Your content, in full

### `cm-math-evidence` — Cm Math Evidence

- `def-cm-measurement-model` · definition — Measurement models and additive-error observation models
- `def-cm-calibration-rule` · definition — Calibration data and calibration rules
- `def-cm-iid-sampling-model` · definition — Repeated-observation sampling models with IID and finite-variance hypotheses
- `lem-cm-finite-iid-sample-mean-bound` · lemma — Finite IID sample-mean variance and Chebyshev bound
- `def-cm-covariance-matrix-of-a-random-vector` · definition — Mean vector and covariance matrix of a square-integrable random vector
- `lem-cm-linearized-propagation-of-covariance` · lemma — The covariance of the linearization is $A\Sigma A^{\mathsf T}$
- `lem-cm-uniform-second-order-remainder-bound` · lemma — A uniform Hessian bound controls the second-order Taylor remainder
- `cor-cm-linearization-error-bounds` · corollary — Mean, mean-square and covariance bounds for second-order linearization error
- `def-cm-statistical-test-and-size` · definition — Statistical tests, rejection regions, power functions and size
- `def-cm-confidence-set-and-coverage` · definition — Confidence sets and their coverage level
- `def-cm-likelihood-function` · definition — Likelihood functions for a dominated parametric family
- `rem-cm-inference-and-uncertainty-scope` · remark — Scope of the sampling, propagation and inference interfaces

### `cm-math-evidence-examples` — Cm Math Evidence — Examples

- `ex-cm-math-evidence-pendulum-propagation` · example — Symbolic two-input propagation of a period–length model
- `ex-cm-math-evidence-exact-versus-linear-variance` · example — Exact variance against propagated variance for a nonlinear observation map
- `ex-cm-math-evidence-chebyshev-sample-mean-check` · example — Finite check of the IID sample-mean variance and Chebyshev bound
- `ex-cm-math-evidence-remainder-bound-check` · example — Equality and strictness in the uniform second-order remainder bound
- `cex-cm-math-evidence-confidence-coverage-is-not-posterior` · counterexample — Coverage level is not the posterior probability of the realized confidence set
- `cex-cm-math-evidence-propagation-is-not-exact-for-nonlinear-maps` · counterexample — The propagated covariance is not the exact covariance of a nonlinear observation map

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm18-measurement-uncertainty-and-later-bridges` requires `cm-math-evidence`
- `cm18-measurement-uncertainty-and-later-bridges-examples` requires `cm-math-evidence`
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

# Step 4 Alpha batch reviewer — read-only digest, `physics-cm-qm-gr-79-2026-10-11`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.
