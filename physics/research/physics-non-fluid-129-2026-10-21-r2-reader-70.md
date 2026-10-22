# Step 3a reader report — batch 70

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `70`

## Reviewed inventory

Assigned pages:

- `qftx-constructive-wick-two-dimensions` — [page file](../library/quantum-field-theory-mathematics/qftx-constructive-wick-two-dimensions.md)
- `qftx-constructive-wick-two-dimensions-examples` — [page file](../library/quantum-field-theory-mathematics/qftx-constructive-wick-two-dimensions-examples.md)

Both page files contain frontmatter only. The A page lists five assigned mathematical items and the B page lists the assigned counterexample; their inventories agree with the batch manifest.

Assigned items were reviewed in supplier-before-consumer order:

1. `lem-qftx-finite-cross-wick-covariance`
2. `def-qftx-two-dimensional-wick-cutoff`
3. `lem-qftx-two-dimensional-covariance-log-integrability`
4. `thm-qftx-two-dimensional-wick-l2`
5. `def-qftx-p-phi-two-construction-contract`
6. `cex-qftx-l2-not-exponential-control`

Page prerequisites opened:

- `qftx-reflection-positive-limits`
- `qft-ir02`
- `qftx-analytic-prerequisites`
- `the-fundamental-theorems-of-calculus`
- `the-riemann-integral-in-rn-and-jordan-content`

The batch notes, coverage record, cross-batch dependency record, and the four proof contracts for proof-bearing batch items were consulted as evidence only. The source-coverage record reports complete relevant retrievals; it was not treated as proof acceptance.

## Mathematical dependency review

The finite Wick identity was checked against `def-axiom-of-choice`, `def-qft-finite-wick-normal-powers`, and `lem-qft-finite-gaussian-wick-moments`. Its coefficient count is correct, including singular covariance and zero-order cases. The proof uses formal power-series coefficients only and does not assume moment-generating-function convergence.

The cutoff definition was checked against `def-countable-choice`, the finite Wick definition, and the current-run supplier `thm-qftx-tempered-massive-gaussian-field`. The field supplier and the basis/coefficient-decay, Kolmogorov-extension, Schwartz-space, Parseval, Fourier, and Gaussian-transform results used in its construction were inspected at their exact relevant statements. The smoothing tests are real Schwartz functions, the cutoff Wick powers are finite Gaussian polynomials, and no unsmeared pointwise field product is claimed.

The covariance-kernel lemma's direct prerequisites were opened: `cor-c-one-change-of-variables-for-l-one-functions`, `cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space`, `cor-exponential-reciprocal-and-positivity`, `def-fourier-transform-on-l-one-of-rn`, `def-real-exponential-function-and-e`, `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization`, `thm-derivative-of-exponential`, `thm-dominated-convergence`, `thm-exponential-beats-every-polynomial`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-gaussian-integral`, `thm-newton-leibniz-with-interior-derivative`, `thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line`, `thm-substitution-for-improper-integrals`, and `thm-continuous-on-a-rectangle-is-riemann-integrable`. The heat-kernel normalization matches the stated Fourier convention. The logarithmic estimate, exponential tail, local integrability of every finite kernel power, approximate-identity limit, and uniform mollifier envelope follow from the displayed bounds and substitutions.

The $L^2$ theorem was checked against its two assigned kernel/Wick suppliers and `thm-cauchy-schwarz-in-an-inner-product-space`, `thm-complex-lp-completeness-and-almost-everywhere-subsequences`, `thm-dominated-convergence`, and `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`. Its joint measurability argument by grid approximation is sufficient for the smearing and Fubini steps. The diagonal is null in the product integration, and the local logarithmic power is integrable, giving the required common majorant. The mixed covariance limit then yields the $L^2$-Cauchy property and the stated limit covariance.

The construction contract was checked against `cor-exponential-reciprocal-and-positivity`, `def-real-exponential-function-and-e`, `def-measure-with-density`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, and the batch-69 suppliers `def-qftx-euclidean-limit-data` and `prop-qftx-reflection-positivity-limit`. The latter definition's exact dependencies on positive tempered moments, Schwartz topology, and tempered distributions were also opened. The counterexample was rechecked against `thm-exponential-beats-every-polynomial` and its direct contract use.

For $A_n=[0,e^{-n/2}]$ and $U_n=-n\mathbf1_{A_n}$, $\|U_n\|_2^2=n^2e^{-n/2}\to0$, while $\mathbb E[e^{-U_n}]=e^{n/2}+1-e^{-n/2}\to\infty$. Its claim and proof are correct. Changing the contract's definition leaves this conclusion and its stated use intact.

## Edit

Repaired `def-qftx-p-phi-two-construction-contract` in scope. The prior definition left the order of the infinite-volume exhaustion implicit, used “cutoff normalizations” without defining $Z_{\Lambda,\epsilon}$, and did not state the insertion family or the exact hierarchy limits and properties that complete the contract. The revised definition:

- orders an exhaustion by set inclusion and states its directedness and compact-containment condition;
- defines $Z_{\Lambda,\epsilon}=\mathbb E_{\mu_C}[X_{\Lambda,\epsilon}]$;
- declares the measurable insertion family and requires integrable products and finite expectation limits with adequate bounds;
- states fixed-test distributional convergence of the regulated Schwinger hierarchy and identifies the relevant reflection-positivity, symmetry, clustering, per-order, and uniform-order conditions by the exact earlier definition.

The mathematical scope and all original interaction obligations remain. The direct assigned consumer `cex-qftx-l2-not-exponential-control` was rechecked: its witness does not rely on the exhaustion convention and its contract citation still correctly records that positive finite normalization is a separate obligation. Its prose was unchanged. The consumer's stored proof-contract quotation was updated to the current supplier Definition. The edited definition has no `verification.judge` record to remove.

Required checks on the changed item:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/def-qftx-p-phi-two-construction-contract.md` — unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/def-qftx-p-phi-two-construction-contract.md` — 0 checked, 0 failing.
- `node tools/physics-support/proof-layout.mjs items/def-qftx-p-phi-two-construction-contract.md` — 1 item, 0 steps, 0 defects.
- The B consumer's proof-contract quotation was checked against the repaired Definition and matches.

No other items or pages were edited. No TikZ or tikzcd diagrams occur in the assigned items or pages; none is needed for these arguments.

## Item and page verdicts

- `lem-qftx-finite-cross-wick-covariance` — pass.
- `def-qftx-two-dimensional-wick-cutoff` — pass.
- `lem-qftx-two-dimensional-covariance-log-integrability` — pass.
- `thm-qftx-two-dimensional-wick-l2` — pass.
- `def-qftx-p-phi-two-construction-contract` — repaired; pass after clarification.
- `cex-qftx-l2-not-exponential-control` — pass.
- `qftx-constructive-wick-two-dimensions` — pass; frontmatter-only A page, inventory and prerequisites are coherent.
- `qftx-constructive-wick-two-dimensions-examples` — pass; frontmatter-only B page correctly hosts the counterexample.

## Uneditable findings and blockers

None. The current-run suppliers in batches 59 and 69 were inspected and no defect requiring an out-of-scope finding was identified.

## Evidence limits

The Simon publisher-PDF text extraction exposes the Wick-power definitions, Theorem 1.3 location, and the expansion proof, but omits some displayed mathematical symbols in its text rendering. The assigned finite covariance identity is established locally by its complete coefficient argument, so no source equation was inferred from the incomplete OCR. Relevant source locations checked: Simon, *The $P(\phi)_2$ Euclidean (Quantum) Field Theory*, Chapter I §1.1, PDF pp. 29–31 / printed pp. 9–11; Summers, *A Perspective on Constructive Quantum Field Theory*, §3 opening and §3.1, PDF pp. 9–12. The sources provide context and reported results, not substitutes for the local proofs.
