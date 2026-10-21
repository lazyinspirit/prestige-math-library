# Step 3a reader report — batch 36

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Verdict: the assigned mathematics is sound after the repairs below; one nonfatal defect remains in a published dependency.

## Opened inventory

Pages:

- `library/inverse-problems/radon-transform-and-fourier-slice-reconstruction.md` (A)
- `library/inverse-problems/radon-transform-and-fourier-slice-reconstruction-examples.md` (B)

Assigned items, in dependency order:

- `def-ip-2d-radon-transform`
- `thm-ip-fourier-slice-identity`
- `thm-ip-radon-normal-operator`
- `alg-ip-filtered-backprojection-complete-data`
- `ex-ip-smooth-radial-phantom`
- `ex-ip-point-source-distributional-limit`
- `ex-ip-discretized-complete-data-backprojection`

Inspected the relevant entries in the batch manifest, coverage and source-evidence records, and proof contracts. The 23 distinct direct supplier items checked for the clauses used were `def-fourier-transform-on-an-lca-group`, `thm-ftc-second-part`, `thm-chain-rule-for-total-derivatives`, `cor-change-of-variables-for-compactly-supported-functions`, `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, `thm-riemann-fubini-on-product-rectangles`, `def-countable-choice`, `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`, `thm-fourier-inversion-on-schwartz-space`, `lem-riemann-lebesgue-comparison-for-distribution-test-integrands`, `def-polar-surface-measure-on-the-unit-sphere`, `thm-polar-coordinates-formula-for-lebesgue-measure`, `thm-linear-change-of-variables-for-lebesgue-measure`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-multidimensional-integral-properties`, `def-unitary-discrete-fourier-transform-on-z-mod-n`, `def-unnormalised-engineering-dft-and-conversion`, `def-recursive-radix-two-fast-fourier-transform`, `thm-radix-two-fft-correctness`, `thm-finite-fourier-inversion`, `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`, and `thm-integrals-are-invariant-under-measure-preserving-maps`. Also opened `def-measure-preserving-transformation-and-system` for the meaning of the last result's hypothesis.

## Source review

- Mikko Salo, [author-hosted RICAM lecture notes copy](https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf), §2.1, pp. 4–5: Theorem 2.1 gives the Fourier-slice identity with its line-coordinate proof; Theorem 2.3 gives the normal-operator constant and filtered-backprojection formula. The notes use the negative-sign angular-frequency convention; the local proof uses the library 2π-normalized convention directly.
- Frank Natterer, [“X-ray Tomography” full-text chapter record](https://www.researchgate.net/publication/226521751_X-ray_Tomography), §2.1, pp. 18–20, Theorems 2.1–2.2 and formula (7), and §3.1, pp. 26–28: the indexed full-text chapter confirms the cited projection-slice/inversion discussion and the sampled filtering/backprojection context. The finite DFT computation in the example was checked directly and does not rely on a convergence claim from this source.

## Repairs and evidence

- `ex-ip-smooth-radial-phantom`, Example and Verification 3.1: changed the displayed line integrand to `\eta(1-s^2-t^2)`. The previous exponential expression was undefined at the included integration endpoints; the definition of \(\eta\) assigns the correct endpoint value zero. Synchronized the derivation in the batch proof contract.
- `ex-ip-point-source-distributional-limit`, Verification 2.1, 3.1 and 4.1: added the compact-support change-of-variables calculation \(\int\phi_\varepsilon=\varepsilon^{-2}\varepsilon^2\int\phi=1\), which establishes the statement's unit-mass claim for every \(\varepsilon>0\); showed \(\rho\) is continuous so the rescaled data paired with a test function are compactly supported Riemann integrands; and made the real/imaginary split explicit for complex test functions. Updated the relevant F2/F5 step-uses and derivations in the batch proof contract.
- `thm-ip-radon-normal-operator`: added `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets` and Fact F14 to check the Lebesgue factor in each application of the sigma-finite Fubini theorem. Added `thm-integrals-are-invariant-under-measure-preserving-maps` and Fact F15, stated why both reflections preserve their measures before changing \(\sigma\) and \(\theta\), and clarified Fact F5's full \(n\ge1\) range because the proof uses reflections on both \(\mathbb R\) and \(\mathbb R^2\). Updated the corresponding contract citations and derivations. Corrected the contract's duplicated “step 2.1” in its empty-boundary note to “steps 2.1 and 4.1.”
- No stale `verification.judge` record was present on the three repaired items. No pages or other batches were edited.

## Defect not editable

Published dependency `thm-linear-change-of-variables-for-lebesgue-measure` has an ill-formed explanatory sentence in `## Statement`, in the singular-case caveat beginning “When \(\det A=0\) and \(\lambda_n(E)=+\infty\)”. It splices “which” into “The extended real line … leaves undefined.” The caveat should be rewritten; the two-case measure-scaling statement used by this batch remains mathematically correct. This is a nonfatal published-dependency finding for consumer `thm-ip-radon-normal-operator`; it is recorded in the findings JSON.

## Page verdicts and checks

- A page `radon-transform-and-fourier-slice-reconstruction`: pass. Its body is empty, `page_layout: compact-v1` is preserved, and its item inventory matches the four assigned A items.
- B page `radon-transform-and-fourier-slice-reconstruction-examples`: pass. Its body is empty, `page_layout: compact-v1` is preserved, and its example inventory matches the three assigned B items.
- All assigned statements/examples are uninterrupted by hyperlinks; references follow their complete claim sections. No TikZ/tikzcd diagrams are present or needed for these arguments.
- `reflow` and `precheck` passed for all three repaired items. Final `node tools/proof-layout.mjs` on those three paths reported 3 items, 13 steps, 0 defects.
- Blocker: none.

## Coverage note

No batch-36 Step 3 reader-specific rendered bundle was present in the current `.autopilot` files, so I reviewed the current item files and relevant contract/source-evidence clauses directly. The direct supplier statements and the proof facts needed for this batch were inspected; I did not re-audit unrelated transitive proof branches of published suppliers. The Natterer direct PDF endpoint is access-restricted, but the indexed full-text chapter page was available and confirmed the cited sections. No mathematical conclusion in this report relies on an inaccessible source passage.
