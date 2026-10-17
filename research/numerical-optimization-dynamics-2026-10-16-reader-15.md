# Step 3a reader report — batch 15

Run: `numerical-optimization-dynamics-2026-10-16`  
Reader: `reader-15`  
Scope: pages `computed-fast-transforms-and-convolution` and `computed-fast-transforms-and-convolution-examples`.

## Opened inventory

Opened both assigned pages:

- `library/numerical-linear-algebra-and-approximation/computed-fast-transforms-and-convolution.md`
- `library/numerical-linear-algebra-and-approximation/computed-fast-transforms-and-convolution-examples.md`

Opened every assigned item in dependency order. On the A page: `def-na-dct-ii-and-dst-i-even-odd-extension`, `lem-na-bluestein-chirp-convolution-factorization`, `lem-na-mixed-radix-cooley-tukey-factorization`, `lem-na-zero-padding-removes-linear-convolution-aliasing`, `lem-na-complex-product-six-operation-roundoff-bound`, `thm-na-dct-ii-orthogonality-inverse-and-dft-extension`, `thm-na-dst-i-orthogonality-inverse-and-dft-extension`, `thm-na-dct-ii-chebyshev-coefficient-extraction`, `thm-na-interval-pi-matches-canonical-fourier-pi`, `alg-na-certified-unit-circle-phase`, `alg-na-computed-unitary-radix-two-fft`, `thm-na-certified-unit-circle-phase-enclosure`, `alg-na-computed-fft-cyclic-and-linear-convolution`, `lem-na-computed-unitary-butterfly-error-bound`, `alg-na-computed-fast-transforms-and-convolution`, `thm-na-computed-unitary-radix-two-fft-error-bound`, `thm-na-arbitrary-length-fft-correctness-and-cost`, `thm-na-computed-fft-convolution-error-bound`, and `thm-na-bluestein-chirp-phase-error-separate-from-fft-error`.

On the B page: `ex-na-prime-length-five-bluestein-transform`, `ex-na-two-point-circular-aliasing`, and `ex-na-three-sample-dct-chebyshev-coefficients`.

Opened the dependency sources needed to check these claims, including the Fourier transform, inversion, convolution, modular-representative and finite-sum items; the complex exponential, rational-power, trigonometric, and Chebyshev items; the floating-point and interval-arithmetic definitions and enclosure results; the arctangent/Abel argument for identifying the two pi definitions; and the radix-two FFT, Parseval, inner-product, and roundoff suppliers. This included current-run dependencies `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma` (batch 1) and the interval-arithmetic suppliers in batch 14. I also opened `lem-absolutely-convergent-series-cauchy-product`, the exact supplier cited in the outstanding range-proof step; it establishes two-series Cauchy-product coefficients but not the finite multinomial coefficient identity used there.

No rendered evidence bundle was available in the local run files or callable tools. I reviewed the current page and item Markdown directly. I did not use external URLs to reject a citation or claim.

## Edits

1. In `alg-na-certified-unit-circle-phase`, the input to the trigonometric range evaluator was previously written as `pi*q` without supplying an interval for that irrational input. The procedure now forms exact rational alternating-series intervals at `1/5` and `1/239`, combines them by Machin's identity, forms the exact interval product with `q`, and rounds that interval outward before evaluation. The evaluator's range theorem then encloses the exact target because its input interval contains the canonical `pi*q`.

2. In `alg-na-computed-unitary-radix-two-fft`, `alg-na-computed-fft-cyclic-and-linear-convolution`, and `alg-na-computed-fast-transforms-and-convolution`, the definitions now bind execution to one operationwise floating-point model instance, require input coordinates to be representable in that model, and check that certified phase coordinates are representable before using them as rounded-operation operands. A failed check returns a range-failure status before the affected operation. This makes the operation domains in the computed procedures explicit and preserves the conditional scope of the separate error theorems.

3. Updated the affected batch-15 contract boundary evidence and source quotations for the changed definitions. The changed algorithms had no `verification.judge` records to remove.

Validation after the edits: reflow reported all four changed items unchanged; precheck reported `0 checked, 0 failing` for each; the single batched proof-layout command reported `4 items, 0 steps, 0 defects`; the scoped proof-contract check reported `0 errors, 0 warnings, 6/6 items checked`.

## Defect not edited

`thm-real-elementary-range-enclosures` is a batch-14 in-run dependency of the assigned consumer `alg-na-certified-unit-circle-phase`. In Proof step 1.1 it uses
\[
\sum_{n_1+\cdots+n_d=k}\frac1{n_1!\cdots n_d!}=\frac{d^k}{k!}
\]
by “the multinomial theorem” to establish the exponential scaling identity. Its cited Cauchy-product result supplies the finite convolution coefficients but not this coefficient identity, and the step gives no proof or exact citation for the multinomial formula. Add a proof (for example, induction on the number of factors) or cite a result that states it. This is a nonfatal, short algebraic proof obligation. The source changed during this review; I reopened the current revision and confirmed the same step 1.1 gap remains. The structured finding binds the current bytes, not the earlier hash.

## Page verdicts

- `computed-fast-transforms-and-convolution` — the authored transform, convolution, DCT/DST, and local error arguments check out after the phase-input repair. The page summary accurately states the arithmetic and success qualifications. The phase enclosure remains dependent on the batch-14 proof obligation above.
- `computed-fast-transforms-and-convolution-examples` — the three exact examples and the page summary check out; the summary correctly makes no finite-precision success claim. No edit was needed.

## Blocker

Batch 15 reading and authorized repairs are complete. The remaining owner follow-up is the batch-14 multinomial-coefficient proof step supporting the assigned phase routine.
