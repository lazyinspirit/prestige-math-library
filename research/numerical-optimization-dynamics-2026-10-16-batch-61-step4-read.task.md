# Step 4 batch reviewer — batch **61**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **61**. Step-5 owning group: **s**.
Return `group: "s"` and `batches: ["61"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 61 | `verified-linear-systems-and-spectral-enclosures` | A | dual-spaces-bilinear-forms-and-inertia, the-spectral-theorem-and-singular-value-decomposition, finite-precision-direct-factorizations, sparse-direct-elimination-and-ordering, outward-rounded-interval-and-ball-arithmetic, computed-schur-decompositions-and-nonnormal-spectra, homology-axioms-degree-and-classical-applications |
| 61 | `verified-linear-systems-and-spectral-enclosures-examples` | B | verified-linear-systems-and-spectral-enclosures |

## Your content, in full

### `verified-linear-systems-and-spectral-enclosures` — Verified linear systems and spectral enclosures

- `def-complex-infinity-matrix-norm` · definition — The complex induced infinity matrix norm
- `def-hermitian-residual-orthogonality-certificate` · definition — Residual and near-orthogonality data for an approximate Hermitian eigenbasis
- `def-verified-linear-residual-certificate-data` · definition — Verified point and uniform linear residual certificate data
- `lem-brouwer-fixed-point-for-closed-boxes` · lemma — Brouwer fixed points exist on every nonempty closed box
- `lem-complex-hermitian-realification-identities` · lemma — Realification preserves Hermitian spectra, norms, and congruence
- `lem-hermitian-eigenvalue-frobenius-bound` · lemma — Hermitian eigenvalues lie within a certified Frobenius bound
- `lem-hermitian-rayleigh-residual-spectrum-distance` · lemma — A Hermitian approximate-eigenpair residual locates a spectral value
- `thm-inertia-guided-bisection-loop-soundness` · theorem — Certified inertia counts maintain ordered eigenvalue brackets
- `thm-interval-determinant-sign-certificate-soundness` · theorem — An interval determinant excluding zero certifies nonsingularity and sign
- `lem-complex-hermitian-eigenvalue-perturbation` · lemma — Hermitian eigenvalues move by at most the spectral norm perturbation
- `lem-complex-hermitian-inertia-congruence` · lemma — Complex Hermitian inertia is invariant under nonsingular congruence
- `lem-complex-infinity-matrix-norm-submultiplicative` · lemma — The complex infinity matrix norm is compatible and submultiplicative
- `lem-neumann-inverse-norm-bound` · lemma — A Neumann defect bounds the inverse norm
- `lem-hermitian-two-by-two-inertia-sign-test` · lemma — A Hermitian two-by-two pivot inertia is determined by determinant and trace signs
- `lem-complex-infinity-neumann-inverse-norm-bound` · lemma — A complex infinity-norm defect bounds the inverse norm
- `lem-hermitian-block-ldl-inertia-additivity` · lemma — Block LDL congruence adds the Hermitian pivot inertias
- `thm-krawczyk-set-inclusion-existence-and-uniqueness` · theorem — Krawczyk inclusion gives solutions and contraction gives uniqueness
- `thm-near-orthonormal-hermitian-eigenvalue-enclosure` · theorem — Near-orthonormal residual data enclose all ordered Hermitian eigenvalues
- `thm-uniform-linear-residual-solution-enclosure` · theorem — A uniform approximate inverse and residual enclose every linear solution
- `thm-complex-resolvent-cover-certificate-soundness` · theorem — Diskwise Neumann certificates bound a complex matrix resolvent
- `alg-complex-resolvent-cover-validator` · algorithm — Finite complex contour resolvent validator with cover and inconclusive statuses
- `alg-interval-determinant-sign-certifier` · algorithm — Outward Leibniz determinant sign and nonsingularity certifier
- `alg-interval-hermitian-ldl-inertia-certifier` · algorithm — Outward interval block LDL inertia certifier with pivot-inconclusive status
- `alg-interval-linear-krawczyk-certifier` · algorithm — Interval Krawczyk linear system certifier with explicit statuses
- `alg-near-orthonormal-hermitian-eigenvalue-certifier` · algorithm — Certified Hermitian eigenvalue intervals from residual and Gram bounds
- `alg-point-verified-linear-system-certifier` · algorithm — Finite precision point linear solve certificate with explicit status
- `alg-uniform-interval-linear-residual-certifier` · algorithm — Uniform interval linear residual certificate with inconclusive status
- `thm-complex-resolvent-cover-validator-soundness` · theorem — The finite disk cover validator returns a uniform resolvent bound on success
- `thm-interval-determinant-sign-certifier-soundness` · theorem — The interval determinant sign certifier is sound and failure means unknown
- `thm-interval-hermitian-ldl-inertia-certifier-soundness` · theorem — The interval block LDL certifier returns the exact inertia on success
- `thm-interval-linear-krawczyk-certifier-soundness` · theorem — The interval Krawczyk certifier has the stated per-system guarantee
- `thm-near-orthonormal-hermitian-eigenvalue-certifier-soundness` · theorem — The residual and orthogonality certifier encloses the full ordered spectrum
- `thm-point-verified-linear-system-certifier-soundness` · theorem — The point linear solve certifier returns a sound solution ball on success
- `thm-uniform-interval-linear-residual-certifier-soundness` · theorem — The uniform interval residual certifier is sound on success
- `alg-ordered-hermitian-eigenvalue-bisection` · algorithm — Budgeted ordered Hermitian eigenvalue bisection by verified inertia
- `thm-ordered-hermitian-eigenvalue-bisection-soundness` · theorem — The ordered Hermitian bisection certifier returns valid intervals or an inconclusive status

### `verified-linear-systems-and-spectral-enclosures-examples` — Verified linear systems and spectral enclosures — Examples

- `ex-certified-ill-conditioned-two-by-two-linear-solve` · example — A certified residual enclosure remains valid for an ill-conditioned 2 by 2 solve
- `ex-uncertain-linear-matrix-family-contains-singular-member` · example — An interval matrix family can contain a singular member
- `ex-hermitian-eigenvalue-bisection-by-verified-inertia` · example — Ordered eigenvalue bisection by exact inertia queries

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `verified-linear-systems-and-spectral-enclosures` requires `finite-precision-direct-factorizations`
- `verified-linear-systems-and-spectral-enclosures` requires `sparse-direct-elimination-and-ordering`
- `verified-linear-systems-and-spectral-enclosures` requires `outward-rounded-interval-and-ball-arithmetic`
- `verified-linear-systems-and-spectral-enclosures` requires `computed-schur-decompositions-and-nonnormal-spectra`
- `periodic-orbit-shooting-collocation-and-floquet-error` requires `verified-linear-systems-and-spectral-enclosures`
- `interval-newton-krawczyk-and-polynomial-root-isolation` requires `verified-linear-systems-and-spectral-enclosures`
- `matrix-functions-and-scaling-squaring` requires `verified-linear-systems-and-spectral-enclosures`
- `gaussian-quadrature` requires `verified-linear-systems-and-spectral-enclosures`
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
