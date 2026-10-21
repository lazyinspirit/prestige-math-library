# Step 4 batch reviewer — batch **51**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **51**. Step-5 owning group: **q**.
Return `group: "q"` and `batches: ["51"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 51 | `inverse-problem-benchmarking-and-shift` | A | learned-reconstruction-targets-and-risk, neural-operator-eit-inverse-map, unrolled-inverse-solvers-and-generalization, plug-and-play-mmse-regularization, score-diffusion-inverse-solvers, statistical-inverse-model-misspecification, manifold-and-physical-constraint-inversion, numerical-pde-inversion-and-adjoint-error-control, losses-risk-and-decision-rules |
| 51 | `inverse-problem-benchmarking-and-shift-examples` | B | inverse-problem-benchmarking-and-shift |

## Your content, in full

### `inverse-problem-benchmarking-and-shift` — Benchmarks, prior shift, and solver admissibility

- `def-ip-benchmark-risk-and-compute-budget` · definition — Benchmark risk, compute budgets, and uncertainty records
- `rem-ip-inversebench-scoped-findings` · remark — Scope of InverseBench findings

### `inverse-problem-benchmarking-and-shift-examples` — Benchmarks, prior shift, and solver admissibility — Examples and Counterexamples

- `ex-ip-inversebench-first-born-scattering` · example — First-Born optical scattering benchmark
- `ex-ip-inversebench-multicoil-mri` · example — Multi-coil MRI benchmark
- `ex-ip-inversebench-black-hole-imaging` · example — Black-hole VLBI benchmark
- `ex-ip-inversebench-full-waveform-inversion` · example — Full waveform inversion benchmark
- `ex-ip-inversebench-navier-stokes` · example — Two-dimensional Navier–Stokes benchmark
- `ex-ip-inversebench-prior-shift` · example — Prior-matched and out-of-distribution cases
- `ex-ip-inversebench-solver-invalid-iterate` · example — A solver-invalid FWI iterate

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `inverse-problem-benchmarking-and-shift` requires `learned-reconstruction-targets-and-risk`
- `inverse-problem-benchmarking-and-shift` requires `neural-operator-eit-inverse-map`
- `inverse-problem-benchmarking-and-shift` requires `unrolled-inverse-solvers-and-generalization`
- `inverse-problem-benchmarking-and-shift` requires `plug-and-play-mmse-regularization`
- `inverse-problem-benchmarking-and-shift` requires `score-diffusion-inverse-solvers`
- `inverse-problem-benchmarking-and-shift` requires `statistical-inverse-model-misspecification`
- `inverse-problem-benchmarking-and-shift` requires `manifold-and-physical-constraint-inversion`
- `inverse-problem-benchmarking-and-shift` requires `numerical-pde-inversion-and-adjoint-error-control`
- `open-frontiers-in-learned-inverse-problems` requires `inverse-problem-benchmarking-and-shift`
---

# Step 4 Alpha batch reviewer — read-only digest, `inverse-problems-knot-theory-all-109-2026-10-19`

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
