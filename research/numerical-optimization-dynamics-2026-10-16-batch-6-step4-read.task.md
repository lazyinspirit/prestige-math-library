# Step 4 batch reviewer — batch **6**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **6**. Step-5 owning group: **u**.
Return `group: "u"` and `batches: ["6"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 6 | `inequality-kkt-duality-and-optimality-certificates` | A | constant-rank-submersions-and-regular-level-sets, locally-convex-spaces-and-continuous-separation, jacobi-fields-conjugate-points-and-the-cut-locus |
| 6 | `inequality-kkt-duality-and-optimality-certificates-examples` | B | inequality-kkt-duality-and-optimality-certificates |

## Your content, in full

### `inequality-kkt-duality-and-optimality-certificates` — Inequality kkt duality and optimality certificates

- `def-inequality-constrained-program-and-kkt-geometry` · definition — Inequality constrained programs, tangent cones, constraint qualifications, and KKT
- `def-convex-program-duality-and-slater-condition` · definition — Finite-dimensional convex program, Lagrangian dual, and Slater condition
- `lem-finitely-generated-euclidean-cones-are-closed` · lemma — A finitely generated cone in Euclidean space is closed
- `lem-second-order-jet-on-a-regular-level-set` · lemma — A regular level set realizes every compatible second-order jet
- `def-kkt-residual-and-normal-cone` · definition — Scaled KKT residual and convex normal cone
- `thm-farkas-alternative-for-finite-linear-systems` · theorem — Farkas alternative for a finite linear system
- `thm-mfcq-linearized-cone-equals-bouligand-tangent-cone` · theorem — MFCQ identifies the linearized and Bouligand tangent cones
- `thm-critical-cone-equivalence-under-kkt` · theorem — Critical directions are tangent to every positively weighted active inequality
- `thm-lagrangian-weak-duality` · theorem — Every Lagrangian dual feasible pair is a lower-bound certificate
- `thm-convex-value-function-support-at-relative-interior-domain-points` · theorem — A finite-dimensional convex value function has a support at relative-interior points
- `thm-first-order-kkt-necessity-under-mfcq` · theorem — MFCQ gives KKT multipliers at a smooth local minimizer
- `thm-convex-kkt-sufficiency-and-normal-cone-certificate` · theorem — Convex KKT conditions certify a global minimum and an outward normal
- `thm-kkt-residual-vanishes-exactly-on-kkt-tuples` · theorem — The scaled KKT residual vanishes exactly at KKT tuples
- `thm-second-order-sufficient-condition-on-the-critical-cone` · theorem — Strict second-order positivity on the critical cone gives a strict local minimum
- `thm-slater-strong-duality-and-dual-attainment` · theorem — Slater gives zero duality gap and an attained dual certificate
- `prop-licq-implies-mfcq-and-unique-kkt-multipliers` · proposition — LICQ implies MFCQ and makes KKT multipliers unique
- `thm-second-order-necessary-condition-on-the-critical-cone` · theorem — Second-order necessity on the critical cone under LICQ

### `inequality-kkt-duality-and-optimality-certificates-examples` — Inequality kkt duality and optimality certificates — Examples

- `ex-failed-constraint-qualification-blocks-kkt` · example — A true minimizer with no KKT multipliers when MFCQ fails
- `ex-closed-convex-program-with-positive-duality-gap` · example — A closed convex program with a positive duality gap when Slater fails
- `ex-active-set-quadratic-kkt-certificate` · example — Active-set quadratic with an exact KKT certificate
- `ex-kkt-stationary-saddle-point` · example — An unconstrained KKT point that is a saddle

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `nonsmooth-contact-time-stepping-and-projections` requires `inequality-kkt-duality-and-optimality-certificates`
- `revised-simplex-linear-programming-and-certificates` requires `inequality-kkt-duality-and-optimality-certificates`
- `proximal-gradient-and-accelerated-composite-optimization` requires `inequality-kkt-duality-and-optimality-certificates`
- `subgradient-bundle-and-derivative-free-optimization` requires `inequality-kkt-duality-and-optimality-certificates`
- `barrier-and-primal-dual-interior-point-methods` requires `inequality-kkt-duality-and-optimality-certificates`
- `operator-splitting-admm-and-primal-dual-methods` requires `inequality-kkt-duality-and-optimality-certificates`
- `global-optimization-and-certified-branch-and-bound` requires `inequality-kkt-duality-and-optimality-certificates`
- `sqp-active-set-and-augmented-lagrangian-methods` requires `inequality-kkt-duality-and-optimality-certificates`
- `direct-transcription-and-numerical-ode-optimal-control` requires `inequality-kkt-duality-and-optimality-certificates`
- `finite-element-pde-constrained-optimization` requires `inequality-kkt-duality-and-optimality-certificates`
- `numerical-identifiability-and-optimal-experiment-design` requires `inequality-kkt-duality-and-optimality-certificates`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-optimization-dynamics-2026-10-16`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Published supplier findings:** Preserve each exact outside published-supplier finding in `alerts`. It has no in-run producer batch. The owner records a separate evidence-bound route after focused published repair; do not delete the alert, rewrite your digest, fabricate ownership, or claim the repair yourself.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
