# Step 4 batch reviewer — batch **36**, run `physics-remaining-80-2026-10-17`

You are the only reviewer for batch **36**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["36"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 36 | `qsm-states-ensembles` | A | qm-math-fock-and-equilibrium, spectral-measures-and-borel-functional-calculus, td-math-ensembles-and-limits, unbounded-self-adjoint-operators-and-stones-theorem, pure-and-mixed-states-ensembles-and-schmidt-decomposition, registers-tensor-products-and-partial-trace, quantum-optimization-sdp-and-variational-algorithms, trace-distance-fidelity-and-information-limits, finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, compact-self-adjoint-hilbert-schmidt-and-trace-class-operators, gelfand-theory-and-commutative-c-star-algebras, group-c-star-algebras-and-the-fell-unitary-dual, minimax-lower-bounds-and-information-theoretic-methods, numerical-optimization-for-statistical-computation, qm-composites-entanglement-and-reduced-states, countability-and-uncountability, rn-as-a-normed-space, hilbert-space-geometry-and-riesz-representation, inner-product-spaces-and-orthogonality, construction-of-r-via-cauchy-sequences, the-topology-of-euclidean-space, the-spectral-theorem-and-singular-value-decomposition, finite-dimensional-normed-spaces-and-riesz-lemma, matrices-and-the-matrix-of-a-linear-map, relations-functions-and-quotients, qm-math-composites |
| 36 | `qsm-states-ensembles-examples` | B | qsm-states-ensembles |

## Your content, in full

### `qsm-states-ensembles` — Normal density states and spectral moments

- `def-qsm-density-trace-state` · definition — Trace-class normal density states
- `lem-qsm-matrix-state-calculus` · lemma — Finite matrix spectral and state calculus
- `lem-qsm-finite-matrix-cstar-and-state-duality` · lemma — Finite matrix C-star algebra and density-state duality
- `def-qsm-finite-gibbs-purification` · definition — Finite Gibbs density and its canonical purification
- `lem-qsm-matrix-exponential-response` · lemma — Duhamel derivative and finite Kubo–Mori response
- `lem-qsm-trace-state-calculus` · lemma — Trace-state cyclicity and spectral probability calculus
- `post-qsm-normal-measurement-state` · postulate — Normal-state quantum measurement interpretation
- `alg-qsm-finite-gibbs-state-preparation` · algorithm — Sparse-oracle finite Gibbs purification procedure
- `def-qsm-relative-entropy-domain` · definition — Quantum spectral entropy and relative-entropy domains
- `lem-qsm-finite-gibbs-kms` · lemma — Finite unitary dynamics and Gibbs KMS identity
- `thm-qsm-finite-gibbs-variational` · theorem — Finite Gibbs free-energy and entropy optimization
- `thm-qsm-finite-gibbs-circuit-marginal-error` · theorem — Finite Gibbs circuit marginal and trace-distance error
- `thm-qsm-trace-cross-log-inequality` · theorem — Trace-class cross-log entropy inequality
- `thm-qsm-finite-entropy-composition` · theorem — Finite mixing, product entropy, and bipartite subadditivity
- `thm-qsm-trace-gibbs-variational` · theorem — Self-adjoint trace-Gibbs normalization and form-energy optimization
- `post-qsm-band-and-grand-preparation` · postulate — Energy-band and grand quantum preparations
- `post-qsm-thermal-gibbs-preparation` · postulate — Canonical quantum thermal preparation
- `pthm-qsm-commuting-grand-response` · physics-theorem — Commuting quantum grand responses
- `pthm-qsm-equilibrium-unitary-entropy` · physics-theorem — Unitary entropy and Gibbs equilibrium identities
- `pthm-qsm-gibbs-energy-entropy` · physics-theorem — Gibbs energy, entropy and potential identities
- `pthm-qsm-static-quantum-response` · physics-theorem — Static finite quantum response and covariance

### `qsm-states-ensembles-examples` — Normal density states and spectral moments — Examples

- `ex-qsm-entanglement-mixture` · example — Pure entanglement and correlated mixtures
- `ex-qsm-oscillator-trace-gibbs` · example — Oscillator trace Gibbs and divergent normalization
- `ex-qsm-two-level-noncommuting` · example — Two-level Gibbs and noncommuting susceptibility

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `qsm-local-ensemble-bridge` requires `qsm-states-ensembles`
- `qsm-quasilocal-states` requires `qsm-states-ensembles`
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

# Step 4 Alpha batch reviewer — read-only digest, `physics-remaining-80-2026-10-17`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.
