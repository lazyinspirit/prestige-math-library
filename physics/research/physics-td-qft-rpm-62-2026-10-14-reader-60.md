# Step 3a reader report — batch 60

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Scope: batch `60`

## Review basis and opened inventory

The run status command reported the run as active at `3a-read`, with no worker running. I read the assigned manifest, reader brief, and proof contracts for the repaired theorem and its direct counterexample consumer. I opened both assigned pages:

- `library/quantum-field-theory-mathematics/qft-ir02.md` (A page)
- `library/quantum-field-theory-mathematics/qft-ir02-examples.md` (B page)

I opened all eight manifest items in supplier order:

- A page: `def-qft-finite-euclidean-interacting-measure`, `lem-qft-finite-gaussian-wick-moments`, `thm-qft-finite-euclidean-polynomial-measure`, `def-qft-finite-wick-normal-powers`, and `thm-qft-finite-asymptotic-wick-expansion`.
- B page: `cex-qft-zero-dimensional-perturbation-radius-zero`, `ex-qft-wick-quartic-coercivity`, and `ex-qft-finite-wick-quadratic-pair`.

For the assigned arguments I also opened the directly used suppliers: `def-multivariate-normal-law`, `def-standard-normal-and-normal-laws`, `def-real-exponential-function-and-e`, `def-axiom-of-choice`, `def-countable-choice`, `def-measure-with-density`, `cor-exponential-reciprocal-and-positivity`, `thm-exponential-is-strictly-increasing`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `lem-characteristic-function-of-a-multivariate-normal-law`, `lem-moments-give-derivatives-of-the-characteristic-function`, `thm-generalized-holder-inequality-for-products`, `thm-of-square-roots`, `thm-gaussian-integral`, `thm-substitution-for-improper-integrals`, `thm-dominated-convergence`, `thm-derivative-of-exponential`, `thm-chain-rule-for-total-derivatives`, `cor-mean-value-theorem`, `lem-gaussian-integral-is-finite-and-positive`, `cor-taylor-lagrange-and-cauchy-remainders`, `lem-normal-density-has-total-mass-one`, `def-integral-over-a-measurable-set`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-integral-of-a-nonnegative-simple-function`, `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`, and `thm-monotone-convergence-for-the-integral`.

For the conditional example, I opened the current batch-59 draft `lem-qft-coercive-polynomial-form-domain`, its current supplier `def-qft-regulated-polynomial-hamiltonian`, and the exact direct dependencies used in that proof: `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `thm-c-c-infinity-rn-is-dense-in-l-p-of-rn`, and `thm-cauchy-schwarz-in-an-inner-product-space`. The coercivity interface and its use are conditional on that draft; I did not treat its manifest design note as a verdict.

## Mathematical review and page verdicts

### `qft-ir02` — pass

The A-page summary accurately describes the finite-dimensional centered Gaussian reference law, the nonnegative quartic tilt, finite polynomial moments, the right endpoint behavior at zero coupling, the Wick pairing formula, and the finite-order remainder estimates. Its explicit limits on continuum measures, reflection positivity, reconstruction, and cutoff removal match the item statements.

The finite normal-law construction permits singular covariance. The positivity argument for the partition function uses the strictly positive density on a probability space. The differentiation argument has an integrable polynomial majorant, including at the right endpoint. The Wick proof's multilinearity, diagonal moments, pairing count, and polarization identity preserve the stated finite-dimensional hypotheses.

I repaired the asymptotic theorem's quantifier: its sums and factorials require an integer truncation order. The finite-order remainder proof remains valid for every nonnegative integer order, including zero, and makes no convergence claim about the infinite series.

### `qft-ir02-examples` — pass

The B-page summary is consistent with its three items. The zero-dimensional example has a finite measure for every nonnegative coupling and a zero-radius coefficient series. The Wick quadratic expectation is $2C^2$, including the degenerate case. The coercivity example now states $C\ge0$, $\lambda>0$, $\alpha>0$, and a positive kinetic coefficient; completing the square gives the displayed lower bound. Its form-domain conclusion stays explicitly conditional on the batch-59 draft supplier.

The direct batch-59 form supplier states the coercive polynomial hypothesis needed by the example. Its current proof and the exact direct inputs used there support the interface as stated; no defect was found in this use. The supplier remains a draft owned outside batch 60 and was not edited.

The counterexample's coefficient ratio is $\frac{(4n+1)(4n+3)}{24(n+1)}$, which tends to infinity. Its choice \(N=1\), \(C=1\), and \(U(q)=q^4/4!\) satisfies the finite-measure hypotheses. The measure-existence statement and the zero-radius conclusion are kept distinct.

## Edit and evidence

- In `items/thm-qft-finite-asymptotic-wick-expansion.md`, changed “For every \(M\ge0\)” to “For every integer \(M\ge0\).” The statement uses \(\sum_{j=0}^M\), \((M+1)!\), and a Taylor remainder of order \(M+1\); the Taylor supplier is stated for integer order. The correction preserves the intended claim and hypotheses.
- Updated `research/physics-td-qft-rpm-62-2026-10-14-batch-60.proof-contracts.json`: clarified the theorem's zero-order boundary evidence and corrected the exact supplier quotation recorded in the counterexample consumer's F3 contract. The theorem item had no `verification.judge` record to remove.
- Required item checks: reflow reported the item unchanged; precheck passed (`1 checked, 0 failing`).
- Required final proof-layout command was run once on the changed item. The renderer failed before analyzing proof rows because it could not resolve the application's `@/components` alias from `ItemBody.tsx` (`ERR_MODULE_NOT_FOUND`). The item was not edited in the external application checkout. No proof-layout pass is claimed.

## Source check and limitations

I read Moshayedi, *Quantum Field Theory and Functional Integrals*, §12.1, pp. 60–61 (the Hermite/Wick generating-function discussion), from the cited arXiv PDF. I also checked Skinner, *Advanced Quantum Field Theory*, the zero-dimensional quartic perturbation discussion in Chapter 2, against the accessible rendered text: it gives the one-variable quartic expansion and identifies it as an asymptotic, generally divergent series rather than a convergent Taylor expansion. The direct Cambridge PDF fetch failed because its 18.5 MB content exceeded the web fetch limit; the original source listing and rendered copy were available. The local coefficient calculation and remainder proof were reviewed independently.

No uneditable mathematical defects or page defects remain. There is no mathematical blocker. The proof-layout renderer failure is the validation limitation recorded above.
