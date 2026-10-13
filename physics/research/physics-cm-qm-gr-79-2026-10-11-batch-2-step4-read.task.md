# Step 4 batch reviewer — batch **2**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **2**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["2"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 2 | `cm-math-balances` | A | picard-lindelof-and-first-order-odes, regular-surfaces-and-surface-integrals, the-total-derivative, compactness-in-metric-spaces, completeness-and-uniform-continuity, countability-and-uncountability, distributions-test-functions-and-differentiation, fourier-transform-convolution-and-approximate-identities, properties-of-the-integral-and-the-working-ftc, rn-as-a-normed-space, the-derivative-and-mean-value-theorems, the-inverse-function-theorem-completed, the-lebesgue-integral-and-the-convergence-theorems, the-maximal-function-and-lebesgue-differentiation, foundations-of-the-real-numbers, measurable-functions-and-simple-approximation, metric-spaces, monotone-sequences-and-cauchy-completeness, normed-and-banach-spaces, rings-subrings-and-integral-domains, roots-and-rational-powers, the-riemann-integral, topology-of-r |
| 2 | `cm-math-balances-examples` | B | cm-math-balances, the-logarithm-and-general-powers |

## Your content, in full

### `cm-math-balances` — Cm Math Balances

- `lem-cm-derivative-of-pairings-of-curves` · lemma — Differentiation of sums, scalar multiples, inner products, cross products and squared norms of differentiable curves in $\mathbb R^3$
- `thm-cm-center-of-mass-and-kinetic-splitting` · theorem — Centre of mass, the identity $\sum_i m_i\rho_i=0$, and the splitting of the kinetic sum $\sum_i m_i\lVert x_i'\rVert_2^2$ into centre-of-mass and relative parts (with the two-body reduced-mass case)
- `thm-cm-momentum-and-angular-momentum-balance` · theorem — Total momentum and total angular momentum balances for a finite system with antisymmetric pair forces; pairwise central forces make the internal torque vanish
- `thm-cm-work-energy-balance` · theorem — Work-energy balance $\frac{d}{dt}\bigl(K+U(t,x(t))\bigr)=\partial_tU(t,x(t))+\sum_i\langle d_i(t),x_i'(t)\rangle$ for forces $m_ix_i''=-\nabla_{x_i}U+d_i$
- `thm-cm-variable-mass-momentum-balance` · theorem — Variable-mass momentum balance: from $m'=r_{\rm in}-r_{\rm out}$ and $(mv)'=F+r_{\rm in}w_{\rm in}-r_{\rm out}w_{\rm out}$ to $mv'=F+r_{\rm in}(w_{\rm in}-v)-r_{\rm out}(w_{\rm out}-v)$
- `thm-cm-compact-continuation-for-locally-lipschitz-odes` · theorem — Compact continuation for locally Lipschitz ODEs: a solution whose graph stays in a compact subset of the domain near a finite endpoint extends past it
- `cor-cm-finite-time-breakdown-requires-escape` · corollary — A non-extendable solution leaves every compact subset of the domain near its finite endpoint; an autonomous solution trapped in a compact subset of its state domain cannot break down there
- `lem-cm-piecewise-c1-jump-derivative` · lemma — The distributional derivative of a piecewise $C^1$ function with a jump: $(u_p)'=u_{p'_{\mathrm{reg}}}+[p]\,\delta_{t_*}$
- `thm-cm-impulse-restitution-and-energy-loss` · theorem — Isolated reciprocal impulse with full-vector restitution: momentum jumps $\pm J$, conservation of total momentum, the restitution solution and the kinetic-energy change $-\frac{1-e^2}{2}\mu\lVert v_2^--v_1^-\rVert_2^2$

### `cm-math-balances-examples` — Cm Math Balances — Examples

- `ex-cm-balances-impulse-and-rocket-checks` · example — Worked impulse and restitution computations and a variable-mass rocket check
- `ex-cm-balances-continuation-boundary-checks` · example — Breakdown versus trapping: the blow-up of $x'=x^2$ and the global trapped solution of $x'=-x^2$

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm02-forces-initial-data-and-newtonian-flow` requires `cm-math-balances`
- `cm03-momentum-work-and-energy-balances` requires `cm-math-balances`
- `cm05-two-body-central-forces-and-gravitation` requires `cm-math-balances`
- `cm05-two-body-central-forces-and-gravitation-examples` requires `cm-math-balances`
- `cm06-regular-constraints-and-moving-frames` requires `cm-math-balances`
- `cm10-rigid-body-configuration-and-inertia` requires `cm-math-balances`
- `cm11-rigid-body-dynamics-and-stability` requires `cm-math-balances`
- `cm15-scattering-and-impulse-model-boundaries` requires `cm-math-balances`
- `cm15-scattering-and-impulse-model-boundaries-examples` requires `cm-math-balances`
- `cm16-stability-perturbations-and-chaos-examples` requires `cm-math-balances`
- `cm-math-dynamics` requires `cm-math-balances`
- `cm-math-central` requires `cm-math-balances`
- `cm-math-approximation` requires `cm-math-balances`
- `cm-math-approximation-examples` requires `cm-math-balances`
- `cm-math-rigid` requires `cm-math-balances`
- `cm-math-chaos` requires `cm-math-balances`
- `cm-math-rotation-double-cover` requires `cm-math-balances`
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
