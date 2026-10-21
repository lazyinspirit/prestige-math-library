# Step 4 batch reviewer — batch **47**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **47**. Step-5 owning group: **p**.
Return `group: "p"` and `batches: ["47"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 47 | `neural-operator-eit-inverse-map` | A | eit-logarithmic-stability-and-conductivity-classes, learned-reconstruction-targets-and-risk, compact-self-adjoint-hilbert-schmidt-and-trace-class-operators |
| 47 | `neural-operator-eit-inverse-map-examples` | B | neural-operator-eit-inverse-map |

## Your content, in full

### `neural-operator-eit-inverse-map` — Noise-robust neural-operator approximation for EIT

- `lem-ip-boundary-chart-lifting-and-fourier-projection` · lemma — Boundary chart lifting and compact-uniform Fourier projections
- `lem-ip-finite-dimensional-neural-universal-approximation` · lemma — Finite-dimensional universal approximation by smooth nonpolynomial activations
- `lem-ip-concave-modulus-hilbert-ball-intersection` · lemma — Concave-modulus intersection of Hilbert balls
- `lem-ip-boundary-spectral-counting-and-sobolev-scale` · lemma — Boundary spectral counting and Sobolev scale
- `def-ip-generalized-fourier-neural-operator` · definition — Generalized Fourier neural operator on a compact manifold
- `lem-ip-fno-torus-compact-universality` · lemma — Fourier neural operators approximate continuous maps uniformly on compact torus sets
- `thm-ip-hilbert-schmidt-operator-admits-square-integrable-kernel` · theorem — Hilbert–Schmidt operators on a compact boundary have square-integrable kernels
- `thm-ip-generalized-fno-uniform-approximation-on-compact-sets` · theorem — Generalized FNO approximation on compact sets
- `lem-ip-mean-zero-neumann-problem-wellposedness` · lemma — Mean-zero weak Neumann problem for uniformly elliptic conductivities
- `def-ip-mean-zero-ntd-and-smoothed-kernel-observation` · definition — Mean-zero NtD map and smoothed kernel observation
- `lem-ip-meyers-higher-integrability-for-interior-conductivity-solutions` · lemma — Uniform interior higher integrability for conductivity solutions
- `lem-ip-ntd-boundary-smoothing-for-fixed-background-collar` · lemma — Uniform NtD estimates from a fixed harmonic boundary collar
- `lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound` · lemma — NtD smoothing and Hilbert–Schmidt kernel bounds
- `lem-ip-interior-neumann-modes-and-kernel-forward-continuity` · lemma — Interior decay of Neumann modes and kernel forward continuity
- `lem-ip-eit-forward-continuity-and-class-compactness` · lemma — EIT forward continuity and compactness of conductivity classes
- `thm-ip-hilbert-map-extension-with-concave-modulus` · theorem — Hilbert-valued extension with a concave modulus
- `lem-ip-stable-extension-of-the-eit-inverse-map` · lemma — Stable extension of the EIT inverse map
- `thm-ip-eit-fno-noise-robust-existence` · theorem — Noise-robust existence of generalized FNO approximants for EIT
- `op-ip-finite-sample-generalization-of-neural-inverse-maps` · open-problem — Finite-sample generalization of learned inverse maps

### `neural-operator-eit-inverse-map-examples` — Noise-robust neural-operator approximation for EIT — Examples and Counterexamples

- `ex-ip-finite-sample-outside-uniform-bv-bound` · example — Finite samples outside a uniform BV bound
- `ex-ip-eit-fno-continuum-vs-finite-element-experiment` · example — Continuum approximation theorem versus finite-element experiments

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `neural-operator-eit-inverse-map` requires `eit-logarithmic-stability-and-conductivity-classes`
- `neural-operator-eit-inverse-map` requires `learned-reconstruction-targets-and-risk`
- `inverse-problem-benchmarking-and-shift` requires `neural-operator-eit-inverse-map`
- `open-frontiers-in-learned-inverse-problems` requires `neural-operator-eit-inverse-map`
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
