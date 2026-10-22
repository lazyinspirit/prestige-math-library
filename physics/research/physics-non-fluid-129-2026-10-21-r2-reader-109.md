# Step 3a reader report — batch 109

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: independent reader  
Date: 2026-10-22

## Page verdicts

- `qsmx-open-entropy-production` (A): pass. Its three listed items, draft status, and page prerequisites match the batch manifest. The finite stationarity and entropy claims are conditional mathematical results; neither page nor items assert a microscopic bath limit or empirical observation.
- `qsmx-open-entropy-production-examples` (B): pass. It is the declared companion, lists the single assigned counterexample, and requires the A page. The two-level example correctly separates a faithful stationary Gibbs state from uniqueness and convergence.

Both page files contain frontmatter only. I checked their item lists, titles, status, requirements, and companion relation; there was no page prose to adjudicate.

## Opened inventory

Assigned pages: `qsmx-open-entropy-production`, `qsmx-open-entropy-production-examples`. Required page prerequisites: `qsm-dt-channels`, `qsm-dt-relaxation`, `qsmx-entropy-entanglement`.

Assigned items, read in dependency order: `def-qsmx-secular-thermal-generator`, `thm-qsmx-secular-gibbs-stationarity`, `thm-qsmx-spohn-finite-inequality`, `cex-qsmx-stationarity-without-relaxation`.

The inspected mathematical supplier chain included `lem-qsm-matrix-state-calculus` and its nine declared direct suppliers (`cor-bolzano-weierstrass-in-rn`, `def-real-and-complex-inner-product-space`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `lem-rat-embeds-dense`, `thm-rationals-countable`, `lem-finite-powers-of-countable-sets-are-countable`, `lem-countable-iff-surjection-from-n`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `cor-cauchy-reals-lub-complete`); the finite channel/GKSL chain (`def-qsm-dt-channel-definition`, `def-qsm-dt-gksl-definition`, `thm-qsm-dt-gksl-sufficient`, `cor-finite-dimensional-normed-spaces-are-banach`, `lem-qsm-dt-finite-trace-pairing-cyclicity`, `lem-exponential-series-of-a-bounded-operator`, `thm-qsm-dt-choi-kraus`, `thm-qsm-dt-channel-duality`); and the finite entropy chain (`def-qsmx-information-conventions`, `def-qc-density-operator`, `def-it-von-neumann-entropy`, `def-it-finite-dimensional-quantum-relative-entropy`, `def-qc-partial-trace`, `thm-qc-partial-trace-characterization-and-basis-independence`, `thm-qc-partial-trace-positive-and-trace-preserving`, `lem-it-partial-traces-of-a-state-are-states`, `lem-it-quantum-entropy-support-and-finiteness`, `thm-it-quantum-entropy-identities`, `thm-it-finite-strong-subadditivity`, `thm-it-quantum-relative-entropy-joint-convexity`, `lem-it-quantum-relative-entropy-isometric-invariance`, `lem-it-relative-modular-representation`, `lem-it-operator-jensen-negative-log`, `lem-it-quantum-relative-entropy-support-regularization`, `thm-it-quantum-relative-entropy-partial-trace-data-processing`, `thm-complex-spectral-theorem-for-normal-endomorphisms`). I also opened the exact adjoint, trace-cyclicity, and positive-square-root suppliers used by that chain.

The Spohn item uses the current batch-101 draft `thm-qsmx-cmi-and-channel-dpi`. I read its complete statement and proof, including the Stinespring construction and its finite partial-trace data-processing application. Its draft status and pending independent review remain explicit; the authoring record was not treated as proof approval.

## Source review and limitations

- Rivas and Huelga, *Open Quantum Systems: An Introduction*, arXiv:1104.5242v2 ([full text](https://arxiv.org/pdf/1104.5242)), §§6.2.3 and 6.2.8, pp. 61 and 72–73, were opened. Theorem 6.1 in §6.2.3 gives a weak-coupling limit under an integrable-correlation condition and bounded interaction. Section 6.2.8 gives the KMS rate relation (Eq. 109), Gibbs frequency relations (Eqs. 110–111), and the stationarity calculation; it also states that stationarity alone does not imply convergence. The local definition explicitly claims no such microscopic limit, and the local proof independently checks the finite matrix version.
- Lin, *Notes on Lindblad Equations and Davies Generator* ([full text](https://ruizhezhang.com/teaching_2025/Lindblad_Notes.pdf)), §3, Eqs. 37–41, gives the KMS balance condition, frequency-operator relations, and Gibbs stationarity. Section 5 defines relaxation in terms of convergence from every initial state. These references support the model convention and stationarity/nonconvergence distinction; the local proofs handle their finite matrix and rate-index conventions explicitly.
- Wilde, *From Classical to Quantum Shannon Theory*, arXiv:1106.1445v8, Theorems 11.7.1 and 11.8.1 statement ([full text](https://arxiv.org/pdf/1106.1445v8)) were checked. The text defers the latter proof to Chapter 12; the current local batch-101 proof supplies a finite-dimensional argument. Watrous, *The Theory of Quantum Information*, Chapter 5, Theorem 5.35 ([chapter PDF](https://cs.uwaterloo.ca/~watrous/TQI/TQI.5.pdf)) is cited by the local items; this pass reviewed the local data-processing proofs rather than relying on an uninspected source proof.

I reviewed the direct supplier arguments used in the assigned proofs and the local entropy chain above. I did not independently audit every lower-level prerequisite beneath those published mathematical suppliers. No experiment, measurement, statistical estimate, or empirical precision is claimed in this batch.

## Repairs

1. `thm-qsmx-spohn-finite-inequality`: added `cor-finite-dimensional-normed-spaces-are-banach` and `lem-exponential-series-of-a-bounded-operator` as mathematical prerequisites. The proof now fixes a max-entry norm, proves boundedness of the finite-dimensional generator by a coordinate estimate, and cites the exact exponential result for convergence, the semigroup law, and differentiability. Its resolvent-integral calculation now states the required $C^1$ positive-definite path hypotheses and gives a local integrable bound, including the one-sided endpoint at $t=0$. Evidence: the cited supplier statements and the local finite-dimensional estimates in steps 1.1–1.2.
2. `cex-qsmx-stationarity-without-relaxation`: added the same Banach-space and exponential suppliers, then replaced the unsupported differential-equation integration with the explicit action of $\mathcal L$ on the four standard matrix units and the exponential series. The standard basis and matrix units are defined in the item. The title is now “A two-level generator fixes many states.” The diagram remark now identifies the vertices as $Z$-eigenvectors in the same degenerate $H=0$ eigenspace, rather than separate energy sectors. Evidence: direct matrix multiplication and the exact solution

   $$T_t\rho(0)=\begin{pmatrix}p&e^{-2\gamma t}z\\e^{-2\gamma t}\overline z&1-p\end{pmatrix}.$$

The batch-109 proof contract was updated for both items, including matching source quotes and step derivations. Neither edited item had a `verification.judge` record to remove.

## Checks and remaining defects

- Reflow: unchanged for both edited items.
- Precheck: pass for both edited items.
- Proof layout: `2 items, 7 steps, 0 defects`.
- Uneditable confirmed defects: none found. No blocker remains.
