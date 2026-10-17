# Reader report — batch 74

Run: `physics-remaining-80-2026-10-17`  
Role: Step 3a reader, read-only  
Scope: batch `74`

## Opened inventory

Assigned pages:

- `library/thermodynamics-and-general-relativity-mathematics/tgr-mhs02.md` (A page)
- `library/thermodynamics-and-general-relativity-mathematics/tgr-mhs02-examples.md` (B/examples page)

Assigned items, reviewed in dependency order:

1. `items/lem-tgr-positive-damping-boundary.md`
2. `items/lem-tgr-exponential-current.md`
3. `items/lem-tgr-thermal-contour-spectrum.md`
4. `items/ex-tgr-chiral-generator-rescaling.md`

Also opened the batch manifest and `research/physics-remaining-80-2026-10-17-batch-74.proof-contracts.json`; the manifest assigns exactly these four items to the two pages. I checked the contract citations, derivation rows, boundaries, finite checks, and risk notes against the current item text. Author decisions and contract records were used as evidence, not as verdicts.

Direct mathematical supplier claims inspected (published status and exact claim statements were checked):

- For `lem-tgr-positive-damping-boundary`: `def-countable-choice`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`, `thm-integration-by-parts`, `thm-ftc-second-part`, `thm-complex-exponential-is-entire-with-derivative-itself`, `thm-chain-rule-for-total-derivatives`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `cor-exponential-reciprocal-and-positivity`, `thm-exponential-beats-every-polynomial`, `thm-dominated-convergence`, and `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`.
- Additional suppliers for `lem-tgr-exponential-current`: `def-qft-fock-and-test-spaces`, `lem-qft-fock-ccr-car`, `lem-qft-segal-weyl-domain`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn`, `cor-c-one-change-of-variables-for-l-one-functions`, `def-real-exponential-function-and-e`, `thm-derivative-of-exponential`, `cor-exponential-is-a-bijection-onto-positive-reals`, `def-natural-logarithm`, `thm-logarithm-derivative-and-integral`, and `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`. The preceding damping lemma was checked before this consumer.
- Additional suppliers for `lem-tgr-thermal-contour-spectrum`: `thm-fourier-inversion-on-schwartz-space`, `def-schwartz-space-and-its-seminorms`, `def-schwartz-topology-and-convergence`, `def-tempered-distribution`, `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`, `cor-c-one-change-of-variables-for-l-one-functions`, `def-complex-exponential`, `thm-complex-exponential-addition-and-real-extension`, `thm-kernel-and-fibres-of-complex-exponential`, `thm-sine-cosine-zero-sets-and-fundamental-period`, `def-complex-differentiability-holomorphic-and-entire`, `thm-termwise-differentiation-of-complex-power-series`, `cor-cauchy-theorem-for-null-homotopic-loops`, `def-complex-line-integral-over-a-rectifiable-path`, `thm-existence-of-complex-line-integrals-on-rectifiable-paths`, and `thm-fundamental-theorem-for-complex-line-integrals`. Repeated suppliers above were checked once for their stated conventions.
- For the complex-space use of the rational-step supplier, I additionally checked `def-complex-lp-and-euclidean-test-function-conventions`, `def-l-p-space-as-a-quotient-by-null-functions`, and `thm-box-step-functions-are-dense-in-l-p-of-rn`.
- The B-page example uses the already reviewed current, spectrum, and Countable Choice suppliers.

## Review and findings

### `lem-tgr-positive-damping-boundary`

The local test-space and distribution definitions are explicit. The Fourier sign in the Laplace representation is consistent with the stated `e^{-iks}` convention. The uniform Taylor factorization, pole lower bounds, local L¹ error estimate, and `m = 0` case support the claimed tested convergence. No defect found.

### `lem-tgr-exponential-current`

The Fock and covariance conventions are explicit and agree with the supplier statements. The current, positive-type pairing, lower-boundary sign, compact support after the exponential coordinate change, and pullback covariance calculation are consistent. Two nonfatal gaps remain:

- In Proof 1.1 (item line 197), the rational box-step density assertion is applied directly to arbitrary potentially complex-valued `h̃ ∈ L²(ℝ; ℂ)`. The cited rational-box theorem's statement does not specify complex coefficients; its proof refers to rational coefficients, and its underlying `Lᵖ` setting is not identified as complex. The consumer therefore has not yet established that its chosen `D` is dense in the complex space `H`. A short local closure is to approximate the real and imaginary parts separately and use the countable set `D + iD`, or to state and cite a complex-valued rational-step density result. Without this, the invocation of the separability-dependent Segal lemma is not justified by the recorded fact as written.
- In Proof 4.1 (item line 217), the condition `0 < ε < β/2` uses β without defining it in this item. It is not supplied by a prerequisite: the later spectrum lemma defines β and cannot serve as a premise here. Define `β = π/b = 2π/κ`, or use `0 < ε < π/(2b)`, and state the resulting `tan(bε) > 0` needed for the damping hypothesis.

The proof contract's source locators for the distribution framework were checked. Gerd Grubb, §§3.1–3.2, PDF pp. 1–5, supports the test-functional definition and distribution calculus ([PDF](https://web.math.ku.dk/~grubb/dist3.pdf)). Jan Kristensen, Lecture 3 §3.2, PDF p. 10, defines distributions as continuous linear functionals on compactly supported smooth tests; Lecture 14 Corollary 14.2, PDF pp. 51–52, gives the stated distributional Cauchy–Riemann implication ([PDF](https://www.maths.ox.ac.uk/system/files/attachments/Lecture%20Notes.pdf)). These sources are cited for context; the damping estimate is proved locally.

### `lem-tgr-thermal-contour-spectrum`

The angular Fourier convention is explicitly related to the cited `2π`-normalized Schwartz transform. The poles, double-pole coefficient, clockwise contour sign, vanishing vertical sides, zero-frequency continuation, tempered boundary construction, and detailed-balance algebra agree with the stated hypotheses. The `κ`-specialization matches the tested covariance defined in the preceding item, subject to the two small fixes noted above. No separate defect found.

The cited physics sources are used as context, not proof suppliers. Their cited subject areas and locators were checked against available PDF excerpts: Wald §3, PDF pp. 11–16 ([PDF](https://arxiv.org/pdf/gr-qc/9912119)); Crispino, Higuchi, and Matsas §III.A.1–2, PDF pp. 19–22, including Eq. 3.4 and its detector context ([PDF](https://arxiv.org/pdf/0710.5373)); and Jacobson §§6.2.1–6.2.3, PDF pp. 32–39, including the near-horizon mode discussion and thermal state ([PDF](https://arxiv.org/pdf/gr-qc/0308048)). The items appropriately disclaim a detector-response, collapse derivation, or full KMS conclusion.

### `ex-tgr-chiral-generator-rescaling`

The test-pairing Jacobian, covariance scaling, positive `i0` orientation, spectrum factor, and unchanged detailed-balance exponent are consistent. Verification 2.1 asserts that phase matching holds *exactly when* `E' = bE`, but the displayed equality proves only the forward direction. The reverse follows immediately by equating coefficients in the equality of phases for every `u`; state that step and define the primed relation `ω' = E'/σ` where the primed energy is introduced. This is nonfatal.

The contract also has a stale row at `research/physics-remaining-80-2026-10-17-batch-74.proof-contracts.json:1072`: `finite_checks[0].verifies` points to Steps 1.1 and 1.2, but the current item has Verification steps 1.1 and 2.1 only. The check should point to the existing steps.

## Page verdicts

- `tgr-mhs02` (A): page summary accurately describes the three assigned mathematical items and their scope. The page has two nonfatal proof gaps through `lem-tgr-exponential-current` and needs those clarified before it is cleanly reviewed.
- `tgr-mhs02-examples` (B): summary accurately describes the example's reference rescaling and disclaims a physical clock or temperature conclusion. The example has one nonfatal proof omission for the reverse phase implication; its contract contains one stale step reference.

## Edits and blockers

No source items, pages, contracts, or dependencies were edited because this dispatch is a read-only reader assignment. No formatter or validation commands were run. No blocker prevented review of the assigned item claims. I did not separately audit the prose of every page-level `requires` target or the full proofs of every transitive published mathematical supplier; I checked the exact direct supplier claims needed by these arguments and the cited external-source locators described above.
