# Step 4 batch reviewer — batch **2**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **2**. Step-5 owning group: **a**.
Return `group: "a"` and `batches: ["2"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 2 | `radial-basis-and-kernel-interpolation` | A | finite-precision-direct-factorizations, polynomial-interpolation-and-remainder, fredholm-elliptic-problems-and-the-elliptic-spectrum, sparse-high-dimensional-estimation-and-covariance |
| 2 | `radial-basis-and-kernel-interpolation-examples` | B | radial-basis-and-kernel-interpolation |

## Your content, in full

### `radial-basis-and-kernel-interpolation` — Radial basis and kernel interpolation

- `def-rbf-kernels-sites-and-augmented-interpolation` · definition — Radial kernels, polynomial augmentation, and site geometry
- `lem-rbf-augmented-system-is-invertible` · lemma — Strict positive and conditionally positive augmented interpolation systems are invertible
- `def-normalized-matern-spectral-kernel` · definition — The normalized Matérn kernel in the 2π Fourier convention
- `def-bessel-potential-space-and-restriction-quotient` · definition — Fourier Bessel-potential and restriction-quotient Sobolev spaces
- `lem-cone-sites-admit-stable-polynomial-norming-stencils` · lemma — Uniform cone domains admit stable polynomial norming stencils
- `lem-matern-spectral-integral-and-normalization` · lemma — The Matérn spectral integral, normalization, and radial formula
- `alg-augmented-rbf-finite-difference-weights` · algorithm — Exact augmented RBF-FD weights for a local differential functional
- `lem-matern-weighted-fourier-space-is-hilbert-and-injective` · lemma — The weighted Fourier model is an injective Hilbert representation
- `lem-separated-sites-matern-gram-bound` · lemma — Separated Matérn sites have an explicit positive Gram lower bound
- `thm-rbf-fd-polynomial-reproduction-and-local-truncation` · theorem — Augmented RBF-FD weights reproduce polynomials and obey a local Taylor bound
- `lem-schwartz-dense-in-fourier-bessel-potential-space` · lemma — Schwartz functions are dense in the Fourier Bessel-potential norm
- `lem-sobolev-zeros-bound-on-a-cone-domain` · lemma — A Sobolev function vanishing on scattered sites has an h^ν bound
- `cor-matern-mesh-ratio-conditioning-bound` · corollary — Bounded mesh ratio gives an h^{-2s} exact condition-number bound
- `lem-matern-native-space-fourier-identity-and-positive-definiteness` · lemma — The Matérn native space has its weighted Fourier norm and strict Gram positivity
- `lem-restricted-matern-native-space-is-sobolev` · lemma — The restricted Matérn native space is the Sobolev quotient space
- `thm-native-interpolation-projection-and-power-function` · theorem — Native Matérn interpolation is an orthogonal projection with power function
- `thm-matern-interpolation-fill-distance-error` · theorem — Matérn interpolation and its power function converge at rate h^ν

### `radial-basis-and-kernel-interpolation-examples` — Radial basis and kernel interpolation — Examples

- `ex-duplicate-rbf-sites-singular-gram-matrix` · example — Duplicate sites make the kernel Gram matrix singular
- `ex-small-fill-distance-can-have-poor-rbf-conditioning` · example — A small fill distance can coexist with poor separation and conditioning
- `ex-smooth-scattered-surface-matern-rate` · example — A smooth scattered surface inherits the Matérn fill-distance rate

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
No dependency edge crosses this batch boundary.
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-analysis-remaining-71-2026-10-17`

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
