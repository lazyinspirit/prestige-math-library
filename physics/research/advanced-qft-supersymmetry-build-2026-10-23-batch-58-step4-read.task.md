# Step 4 batch reviewer — batch **58**, run `advanced-qft-supersymmetry-build-2026-10-23`

You are the only reviewer for batch **58**. Step-5 owning group: **t**.
Return `group: "t"` and `batches: ["58"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 58 | `qftx-gauge-group-sphere-homotopy` | A | qftx-sobolev-gauge-orbit-geometry, fibrations-fiber-bundles-and-homotopy-exact-sequences, higher-homotopy-groups-and-cofiber-sequences, hurewicz-whitehead-freudenthal-and-cw-approximation, whitney-embedding-tubular-neighbourhoods-and-approximation, classification-of-covering-spaces, the-fundamental-group-of-the-circle, chern-and-pontryagin-classes-by-splitting-and-complexification, bocksteins-steenrod-squares-and-cohomology-operations, cup-cap-cross-products-and-cohomology-rings, relative-homology-excision-and-mayer-vietoris, cw-complexes-and-cellular-homology, singular-cohomology-and-coefficient-theorems, obstruction-theory-postnikov-towers-and-classifying-spaces, smooth-partitions-of-unity-and-exhaustions, euclidean-ordinary-differential-equations-with-smooth-dependence, smooth-manifolds-and-smooth-maps, smooth-vector-bundles-and-sections, relations-functions-and-quotients, subspaces-products-and-quotients, covering-spaces-and-lifting, the-topology-of-euclidean-space, local-coefficients-twisted-homology-and-duality, spectra-and-stable-homotopy-groups |
| 58 | `qftx-gauge-group-sphere-homotopy-examples` | B | qftx-gauge-group-sphere-homotopy, covering-spaces-and-lifting, qftx-sobolev-gauge-orbit-geometry, relations-functions-and-quotients, higher-homotopy-groups-and-cofiber-sequences |

## Your content, in full

### `qftx-gauge-group-sphere-homotopy` — Sphere Gauge Groups and Section Obstructions

- `lem-qftx-parametric-vector-bundle-section-smoothing` · lemma — Finite-parameter smoothing of vector-bundle sections
- `def-qftx-mapping-cone-hopf-invariant` · definition — Integral mapping-cone Hopf invariant for maps S3 to S2
- `def-qftx-suspension-pinch-map` · definition — Reduced suspension pinch map
- `lem-qftx-hopf-generator-and-cone` · lemma — Hopf generator and mapping-cone coefficient
- `lem-qftx-folded-product-attachment-suspends-to-zero` · lemma — Folded product attachment has Hopf invariant two and null suspension
- `lem-qftx-suspended-hopf-composite-adem-obstruction` · lemma — Nonvanishing of consecutive suspended Hopf composites by Adem relation
- `lem-qftx-special-unitary-column-fibration` · lemma — Special-unitary column fibration
- `lem-qftx-low-unitary-homotopy-inputs` · lemma — Low special-unitary homotopy inputs
- `lem-qftx-pi5-special-unitary-nonzero` · lemma — Nonvanishing of the fifth special-unitary homotopy group
- `lem-qftx-parametric-gauge-smoothing` · lemma — Parametric smoothing of gauge sections
- `lem-qftx-sphere-gauge-evaluation-fibration` · lemma — Evaluation and finite-center fibrations of sphere gauge groups
- `lem-qftx-based-gauge-sphere-homotopy` · lemma — Based gauge-group homotopy via hemisphere clutching
- `thm-qftx-reduced-gauge-group-sphere-nontriviality` · theorem — Nontrivial homotopy of reduced sphere gauge groups
- `lem-qftx-section-retract-obstruction` · lemma — A section forces the structure group to retract from a principal bundle

### `qftx-gauge-group-sphere-homotopy-examples` — Sphere Gauge Groups and Section Obstructions — Examples

- `ex-qftx-sphere-gauge-s3-components` · example — Integer components of the based S3 gauge group

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `qftx-gauge-group-sphere-homotopy` requires `qftx-sobolev-gauge-orbit-geometry`
- `qftx-gauge-group-sphere-homotopy-examples` requires `qftx-sobolev-gauge-orbit-geometry`
- `qftx-gauge-slice-mathematics` requires `qftx-gauge-group-sphere-homotopy`
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

# Step 4 Alpha batch reviewer — read-only digest, `advanced-qft-supersymmetry-build-2026-10-23`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.
