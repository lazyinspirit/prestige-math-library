# Step 4 batch reviewer — batch **15**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **15**. Step-5 owning group: **n**.
Return `group: "n"` and `batches: ["15"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 15 | `computed-fast-transforms-and-convolution` | A | finite-fourier-analysis-and-the-fast-fourier-transform, matrix-norms-condition-numbers-and-numerical-stability, finite-precision-direct-factorizations, outward-rounded-interval-and-ball-arithmetic |
| 15 | `computed-fast-transforms-and-convolution-examples` | B | computed-fast-transforms-and-convolution |

## Your content, in full

### `computed-fast-transforms-and-convolution` — Computed fast transforms and convolution

- `def-na-dct-ii-and-dst-i-even-odd-extension` · definition — DCT-II and DST-I with fixed even and odd extension conventions
- `lem-na-bluestein-chirp-convolution-factorization` · lemma — Bluestein’s chirp identity embeds an arbitrary DFT in a padded cyclic convolution
- `lem-na-mixed-radix-cooley-tukey-factorization` · lemma — Mixed-radix Cooley–Tukey factorization with fixed index maps
- `lem-na-zero-padding-removes-linear-convolution-aliasing` · lemma — Zero padding embeds linear convolution in cyclic convolution without aliasing
- `lem-na-complex-product-six-operation-roundoff-bound` · lemma — Six-operation complex multiplication has a normwise roundoff bound
- `thm-na-dct-ii-orthogonality-inverse-and-dft-extension` · theorem — DCT-II is orthogonal with the stated endpoint normalization and even extension
- `thm-na-dst-i-orthogonality-inverse-and-dft-extension` · theorem — DST-I is orthogonal with the stated endpoint normalization and odd extension
- `thm-na-dct-ii-chebyshev-coefficient-extraction` · theorem — DCT-II samples extract Chebyshev coefficients at first-kind roots
- `thm-na-interval-pi-matches-canonical-fourier-pi` · theorem — The interval evaluator's arctangent definition uses the canonical Fourier pi
- `alg-na-certified-unit-circle-phase` · algorithm — Certified dyadic enclosures for unit-circle phases
- `alg-na-computed-unitary-radix-two-fft` · algorithm — Computed unitary radix-two FFT with certified twiddle phases
- `thm-na-certified-unit-circle-phase-enclosure` · theorem — Certified phase output encloses the exact unit-circle value
- `alg-na-computed-fft-cyclic-and-linear-convolution` · algorithm — Computed FFT cyclic convolution and zero-padded linear convolution
- `lem-na-computed-unitary-butterfly-error-bound` · lemma — A computed unitary radix-two butterfly has error at most (10u + εtw) times its input norm
- `alg-na-computed-fast-transforms-and-convolution` · algorithm — Arbitrary-length mixed-radix and Bluestein DFT
- `thm-na-computed-unitary-radix-two-fft-error-bound` · theorem — Computed unitary radix-two FFT has the multiplicative stage error bound
- `thm-na-arbitrary-length-fft-correctness-and-cost` · theorem — Mixed-radix and Bluestein reductions compute every finite DFT in O(N log N) arithmetic
- `thm-na-computed-fft-convolution-error-bound` · theorem — Computed FFT convolution error separates transform, product, inverse, and final-scale terms
- `thm-na-bluestein-chirp-phase-error-separate-from-fft-error` · theorem — Bluestein chirp-phase error is bounded separately from FFT-convolution error

### `computed-fast-transforms-and-convolution-examples` — Computed fast transforms and convolution — Examples

- `ex-na-prime-length-five-bluestein-transform` · example — The length-five all-ones vector through Bluestein
- `ex-na-two-point-circular-aliasing` · example — Two-point circular convolution aliases the linear endpoint term
- `ex-na-three-sample-dct-chebyshev-coefficients` · example — Three Chebyshev-root samples recover a quadratic by DCT-II

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `computed-fast-transforms-and-convolution` requires `finite-precision-direct-factorizations`
- `computed-fast-transforms-and-convolution` requires `outward-rounded-interval-and-ball-arithmetic`
- `finite-bit-random-streams-and-variate-generation` requires `computed-fast-transforms-and-convolution`
- `clenshaw-curtis-and-extrapolation-quadrature` requires `computed-fast-transforms-and-convolution`
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
