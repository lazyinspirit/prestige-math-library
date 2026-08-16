<!-- Recovered by Alpha-a from research/frontier-14-dispatch/refuter-refuter-b1-contour-examples.log (stdout summary; no numbered block emitted). -->

Blocked by the enforced read-only sandbox: the sole authorized `apply_patch` was rejected, and `research/frontier-14-refuters/b1-contour-examples.report.md` remains absent. No files were modified and no permission prompt was attempted.

Recoverable report findings:

- **B1-CONTOUR-EXAMPLES-1 — fatal:** `ex-exponential-over-z-unit-circle-integral-by-series`, lines 37–39 and 49–51. `[L2]` and `[L3]` omit their cited theorems’ continuity hypotheses, and the proof never establishes continuity of the finite-sum integrands or limit. The cited uniform-limit theorem explicitly requires “continuous functions \(f_n\)…converge uniformly to a continuous \(f\).”

- **B1-CONTOUR-EXAMPLES-2 — fatal:** `research/frontier-14-batch-1.proof-contracts.json:5677`. The contract still falsely says the two conjugation segment integrals equal \(-2i\) each. The repaired item correctly gives \(3/2-2i\) and \(-3/2-2i\).

- **B1-CONTOUR-EXAMPLES-3 — fatal:** `research/frontier-14-batch-1.proof-contracts.json:6443`. The purported exact quote contains literal `,qquad`, while the cited Statement at `items/thm-invariance-of-complex-line-integrals-under-increasing-reparametrization.md:26-28` contains `,\qquad`. The strict proof-contract gate reports `citation-quote-mismatch`.

- **B1-CONTOUR-EXAMPLES-4 — nonfatal:** `ex-keyhole-contour-assembly-without-cauchys-theorem:46`. `[L3]` assumes a rectifiable contour and merely identifies \(\int 1\,|dz|\) with length; it cannot establish rectifiability or compute the four lengths. The displayed \(C^1\) parametrizations make this a short missing bridge.

- **B1-CONTOUR-EXAMPLES-5 — nonfatal:** `ex-riemann-stieltjes-integral-on-a-polygonal-contour:44`. `[L1]` only defines the four component Stieltjes integrals; it does not reduce them to ordinary integrals against coordinate derivatives. The already-declared `[L2]` would license that formula.

- **B1-CONTOUR-EXAMPLES-6 — nonfatal:** `fs-contour-length-is-the-length-of-its-trace:44`. Nonbijectivity does not exclude `[L2]`, whose actual hypothesis allows nonbijective continuous surjective monotone maps with pauses. The correct short argument is that differing lengths, by contraposition of `[L2]`, exclude any such monotone reparametrization.

All 12 assigned items, their 20 distinct directly cited dependencies, and all eight boundary rows per contract were opened. Clean in both item text and contract: the exponential-segment example, polynomial example, ML example, circle \(1/(z-a)\) example, orientation-reversal counterexample, and absolute-value false statement. No mathematical disk check was left incomplete.
