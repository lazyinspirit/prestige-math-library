# Step 4 batch reviewer — batch **105**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **105**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["105"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 105 | `event-location-and-hybrid-trajectory-error` | A | adaptive-ode-solvers-and-error-estimation, interval-newton-krawczyk-and-polynomial-root-isolation, discrete-continuous-and-pde-adjoint-sensitivities |
| 105 | `event-location-and-hybrid-trajectory-error-examples` | B | event-location-and-hybrid-trajectory-error |

## Your content, in full

### `event-location-and-hybrid-trajectory-error` — Event location and hybrid trajectory error

- `def-hybrid-mode-guard-reset-system` · definition — Smooth hybrid ODE modes, guards, resets, and deterministic event priority
- `lem-hybrid-guard-derivative-along-mode` · lemma — The derivative of a guard along an ODE mode is its Lie derivative
- `lem-ode-flow-lipschitz-on-a-tube` · lemma — A Lipschitz ODE mode flow is stable to its initial state on a tube
- `lem-reset-error-after-a-mistimed-hybrid-event` · lemma — Reset and smooth-mode flow propagate a transverse event-time error
- `thm-saltation-matrix-for-a-transverse-hybrid-reset` · theorem — The saltation matrix gives the first-order variation across a transverse hybrid reset
- `def-certified-hybrid-event-enclosure` · definition — Certified dense-output and reference-guard enclosure data for hybrid events
- `lem-transverse-hybrid-event-time-error` · lemma — A transverse hybrid event time is stable under dense-output and root error
- `alg-safeguarded-hybrid-event-location-and-restart` · algorithm — Safeguarded certified event location and mode restart
- `thm-finite-hybrid-trajectory-error-under-separated-events` · theorem — Finite separated transverse events give an event-aligned hybrid trajectory error bound
- `thm-safeguarded-hybrid-event-locator-is-sound-and-budgeted` · theorem — The hybrid event locator certifies events or returns inconclusive within its budget

### `event-location-and-hybrid-trajectory-error-examples` — Event location and hybrid trajectory error — Examples

- `cex-inelastic-bouncing-ball-has-zeno-accumulation` · counterexample — Inelastic bouncing-ball impacts can accumulate in finite time
- `ex-simultaneous-guards-require-deterministic-priority` · example — Simultaneous guards need a deterministic priority rule
- `cex-grazing-event-time-error-is-not-linearly-bounded` · counterexample — A grazing guard contact has square-root rather than linear root-location sensitivity
- `ex-bouncing-ball-transverse-event-error-and-reset` · example — A bouncing-ball impact has a transverse event-time and reset-error bound
- `ex-two-events-between-endpoints-defeat-sign-screening` · example — Two guard crossings between endpoints defeat sign-only screening

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `event-location-and-hybrid-trajectory-error` requires `adaptive-ode-solvers-and-error-estimation`
- `event-location-and-hybrid-trajectory-error` requires `interval-newton-krawczyk-and-polynomial-root-isolation`
- `event-location-and-hybrid-trajectory-error` requires `discrete-continuous-and-pde-adjoint-sensitivities`
- `nonsmooth-contact-time-stepping-and-projections` requires `event-location-and-hybrid-trajectory-error`
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
