# Step 4 batch reviewer — batch **16**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **16**. Step-5 owning group: **q**.
Return `group: "q"` and `batches: ["16"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 16 | `cm-math-rotation-double-cover` | A | cm-math-dynamics, lie-subgroups-actions-and-homogeneous-spaces, cm-math-geometry, cm-math-balances |
| 16 | `cm-math-rotation-double-cover-examples` | B | cm-math-rotation-double-cover |

## Your content, in full

### `cm-math-rotation-double-cover` — Rotation Double Cover

- `def-cm-quaternion-rotation-map-and-cover` · definition — The quaternion rotation map $\rho$: conjugation on the imaginary quaternions, the unit sphere $S^3$, and quaternion lifts
- `lem-cm-quaternion-product-rule-and-conjugation-formula` · lemma — The product rule for quaternion and matrix curves, multiplicativity of the quaternion norm, and the conjugation formula $q\,\varphi(v)\,\bar q=\varphi\bigl((a^{2}-\|u\|^{2})v+2\langle u,v\rangle u+2a\,(u\times v)\bigr)$
- `lem-cm-body-angular-velocity-of-a-rotation-path` · lemma — The body angular velocity of a $C^1$ rotation path: $\Omega=R^{\mathsf T}R'$ is skew, $\Omega z=\omega\times z$ determines a unique continuous $\omega$, and $R'=R\Omega$
- `lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity` · lemma — The quaternion lift of a prescribed continuous angular velocity: $q'=\tfrac12 q\,\varphi(\omega(t))$ keeps $S^3$ invariant, its rotation path has body angular velocity $\omega$, and the initial value problem has a unique solution on the whole interval
- `prop-cm-quaternion-angular-velocity-reconstruction` · proposition — Angular-velocity reconstruction from a unit-quaternion path: for $C^1$ $q:I\to S^3$ the body angular velocity of $\rho\circ q$ is $\omega=2\varphi^{-1}(q^{-1}q')$
- `thm-cm-quaternion-lift-exists-and-is-unique` · theorem — Existence, uniqueness and sign ambiguity of the quaternion lift of a $C^1$ rotation path
- `rem-cm-quaternion-lift-scope-and-sign` · remark — Scope of the quaternion lift: the global sign ambiguity, closed loops, and the absence of a physical spin claim

### `cm-math-rotation-double-cover-examples` — Rotation Double Cover — Examples

- `ex-cm-constant-angular-velocity-quaternion-lift` · example — Constant angular velocity: the lift $q(t)=\cos(\omega_0t/2)+\varphi(\hat n)\sin(\omega_0t/2)$ is the rotation about $\hat n$ through $\omega_0t$, and a full turn lifts to the antipode
- `ex-cm-quaternion-lift-of-a-varying-rate-about-a-fixed-axis` · example — A time-varying rate about a fixed axis: $q(t)=q_0\bigl(\cos((\theta(t)-\theta(0))/2)+\varphi(\hat n)\sin((\theta(t)-\theta(0))/2)\bigr)$ solves the lift equation with $\omega(t)=\theta'(t)\hat n$
- `ex-cm-quaternion-angular-velocity-reconstruction-check` · example — A non-axis-constant check of the reconstruction formula: for $q=(\cos\tfrac t2+\varphi(e_1)\sin\tfrac t2)(\cos\tfrac t2+\varphi(e_2)\sin\tfrac t2)$ one gets $\omega(t)=(\cos t,1,\sin t)$
- `ex-cm-two-to-one-preimages-and-homomorphism-check` · example — Finite checks of the cover: the half-turn rotations $\rho(\pm i),\rho(\pm j),\rho(\pm k)$, the identity $\rho(i)\rho(j)=\rho(ij)$, and the exact preimages of $\rho(k)$
- `cex-cm-no-closed-lift-along-a-full-turn` · counterexample — A closed rotation loop with no closed lift: the full turn about an axis lifts from $1$ to $-1$

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm-math-rotation-double-cover` requires `cm-math-dynamics`
- `cm-math-rotation-double-cover` requires `cm-math-geometry`
- `cm-math-rotation-double-cover` requires `cm-math-balances`
- `cm10-rigid-body-configuration-and-inertia` requires `cm-math-rotation-double-cover`
- `cm11-rigid-body-dynamics-and-stability` requires `cm-math-rotation-double-cover`
- `cm11-rigid-body-dynamics-and-stability-examples` requires `cm-math-rotation-double-cover`
- `qm-angular-momentum-and-spin` requires `cm-math-rotation-double-cover`
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
