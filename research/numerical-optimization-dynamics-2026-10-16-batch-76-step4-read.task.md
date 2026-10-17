# Step 4 batch reviewer — batch **76**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **76**. Step-5 owning group: **i**.
Return `group: "i"` and `batches: ["76"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 76 | `stable-sde-schemes-for-superlinear-drift` | A | euler-maruyama-convergence, milstein-stochastic-taylor-and-iterated-integrals, implicit-stiff-time-stepping-and-algebraic-error |
| 76 | `stable-sde-schemes-for-superlinear-drift-examples` | B | stable-sde-schemes-for-superlinear-drift |

## Your content, in full

### `stable-sde-schemes-for-superlinear-drift` — Stable sde schemes for superlinear drift

- `def-locally-lipschitz-ito-sde-and-maximal-solution` · definition — Locally Lipschitz Itô SDE on an open state domain
- `lem-brownian-ito-integral-bdg-moment-bound` · lemma — Lp maximal moment bound for Brownian Itô integrals
- `alg-cir-lamperti-positive-implicit-scheme` · algorithm — Positive Lamperti drift-implicit scheme for the CIR process
- `alg-tamed-euler-superlinear-drift` · algorithm — Tamed Euler scheme for a superlinear drift
- `thm-local-sde-existence-and-uniqueness-until-exit` · theorem — Local strong existence and uniqueness up to exit for locally Lipschitz SDEs
- `lem-cir-lamperti-transform-and-positive-root` · lemma — CIR Lamperti equation and unique positive implicit root
- `lem-tamed-euler-uniform-moment-bounds` · lemma — Uniform finite-horizon moments for tamed Euler approximations
- `thm-superlinear-sde-global-existence-and-moments` · theorem — Global existence and finite-horizon moments for one-sided Lipschitz SDEs
- `alg-drift-implicit-euler-sde` · algorithm — Drift-implicit Euler–Maruyama with explicit solve-failure status
- `thm-cir-positive-solution-and-nonattainment` · theorem — CIR paths stay positive and do not explode under the Feller condition
- `thm-tamed-euler-strong-order-half` · theorem — Strong order one-half for tamed Euler under polynomial drift growth
- `thm-cir-lamperti-scheme-converges-in-probability` · theorem — Lamperti drift-implicit CIR scheme converges on finite horizons in probability
- `thm-drift-implicit-euler-sde-strong-order-half` · theorem — Strong order one-half for drift-implicit Euler–Maruyama

### `stable-sde-schemes-for-superlinear-drift-examples` — Stable sde schemes for superlinear drift — Examples

- `cex-euler-moments-diverge-for-cubic-dissipative-sde` · counterexample — Explicit Euler moments diverge for a cubic dissipative SDE
- `ex-cir-lamperti-scheme-positive-root-at-boundary` · example — The CIR Lamperti step remains positive from the boundary value
- `ex-noise-induced-instability-in-explicit-em` · example — Noise destabilizes explicit Euler while drift-implicit Euler contracts

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `stable-sde-schemes-for-superlinear-drift` requires `milstein-stochastic-taylor-and-iterated-integrals`
- `stable-sde-schemes-for-superlinear-drift` requires `implicit-stiff-time-stepping-and-algebraic-error`
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
