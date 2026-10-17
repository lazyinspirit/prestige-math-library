# Step 4 batch reviewer — batch **27**, run `physics-remaining-80-2026-10-17`

You are the only reviewer for batch **27**. Step-5 owning group: **a**.
Return `group: "a"` and `batches: ["27"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 27 | `csm-gibbs-lattice` | A | csm-phase-ensembles, outer-measure-and-the-caratheodory-extension-theorem, sigma-algebras-and-borel-sets |
| 27 | `csm-gibbs-lattice-examples` | B | csm-gibbs-lattice |

## Your content, in full

### `csm-gibbs-lattice` — Finite-range lattice interaction and conditional energy

- `def-csm-finite-range-lattice-interaction` · definition — Finite-range lattice interaction and conditional energy
- `def-csm-stable-superstable-continuum-interaction` · definition — Stability, superstability and regular tails
- `def-csm-gibbs-physical-parameters` · definition — Classical Gibbs quantities and SI reference conventions
- `post-csm-interacting-equilibrium-gibbs` · postulate — Interacting classical Gibbs equilibrium adoption
- `lem-csm-finite-gibbs-variational-identity` · lemma — Finite Gibbs relative entropy and free-energy minimum
- `lem-csm-gibbs-response-covariance` · lemma — Finite Gibbs response and covariance identities
- `lem-csm-lattice-product-and-measure-compactness` · lemma — Finite-alphabet product and probability compactness
- `def-csm-lattice-gibbs-specification` · definition — Lattice Gibbs kernels and DLR states
- `lem-csm-lattice-specification-consistency` · lemma — Conditional Gibbs kernel consistency
- `thm-csm-lattice-dlr-existence` · theorem — Finite-range lattice DLR existence and closed convex state set
- `lem-csm-stationary-dlr-construction` · lemma — Translation-averaged stationary Gibbs state
- `lem-csm-maximal-coupling-and-heat-bath` · lemma — Finite maximal coupling and heat-bath stationary law
- `thm-csm-dobrushin-finite-range-uniqueness` · theorem — Finite-range Dobrushin uniqueness and boundary influence
- `lem-csm-ising-influence-bound` · lemma — Ising influence bounded by hyperbolic tangent
- `thm-csm-ising-high-temperature-state` · theorem — Unique interacting Ising state at sufficient high temperature
- `thm-csm-lattice-van-hove-pressure` · theorem — Bounded lattice pressure on van Hove sets
- `lem-csm-stationary-lattice-entropy-energy` · lemma — Stationary lattice entropy and energy densities
- `thm-csm-lattice-dlr-variational-pressure` · theorem — DLR states attain the bounded lattice pressure variational principle
- `lem-csm-ising-parity-contours` · lemma — Square-lattice even graphs and parity contour separation
- `lem-csm-peierls-energy-injection` · lemma — Peierls contour probability bound
- `thm-csm-ising-low-temperature-coexistence` · theorem — Two-dimensional Ising Gibbs coexistence at low temperature
- `thm-csm-ising-coexistence-pressure-cusp` · theorem — Coexistence implies an Ising pressure cusp
- `thm-csm-ising-chain-convergent-series` · theorem — Exact convergent Ising-chain high-temperature series
- `lem-csm-chain-markov-bridge` · lemma — Positive Ising transfer matrix Markov bridge
- `thm-csm-chain-dlr-uniqueness` · theorem — All-positive-temperature one-dimensional Ising DLR uniqueness
- `pthm-csm-ising-equilibrium-phases` · physics-theorem — Conditional Ising equilibrium phase predictions
- `pthm-csm-pressure-entropy-reference-units` · physics-theorem — Gibbs pressure and entropy with physical reference units

### `csm-gibbs-lattice-examples` — Finite-range lattice interaction and conditional energy — Examples

- `cex-csm-gibbs-marginals-not-free` · counterexample — Interacting marginals are not free Gibbs laws
- `ex-csm-chain-analytic-interacting-model` · example — Analytic interacting chain and its Gibbs state
- `ex-csm-high-low-temperature-regimes` · example — Sufficient Ising uniqueness and coexistence regimes

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `csm-gibbs-lattice` requires `csm-phase-ensembles`
- `csm-continuum-limits` requires `csm-gibbs-lattice`
- `csm-full-phase-local-equivalence` requires `csm-gibbs-lattice`
- `qsm-commuting-quantum-phases` requires `csm-gibbs-lattice`
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
