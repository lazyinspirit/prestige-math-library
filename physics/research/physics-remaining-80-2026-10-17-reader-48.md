# Step 3a reader report — batch 48

Run: `physics-remaining-80-2026-10-17`  
Role: reader  
Scope: batch `48`

## Inventory opened

Assigned pages:

- `qsm-dt-channels` — `library/quantum-statistical-mechanics/qsm-dt-channels.md`
- `qsm-dt-channels-examples` — `library/quantum-statistical-mechanics/qsm-dt-channels-examples.md`
- Page prerequisite `qsm-dt-response` — `library/quantum-statistical-mechanics/qsm-dt-response.md`

Assigned items, reviewed in the A-page/B-page order and checked against their exact claims and proof contracts:

- `lem-qsm-dt-finite-trace-pairing-cyclicity`
- `def-qsm-dt-channel-definition`
- `def-qsm-dt-gksl-definition`
- `thm-qsm-dt-choi-kraus`
- `thm-qsm-dt-channel-duality`
- `thm-qsm-dt-gksl-sufficient`
- `thm-qsm-dt-reduced-unitary`
- `thm-qsm-dt-trace-contraction`
- `thm-qsm-dt-gksl-necessary`
- `thm-qsm-dt-pinching-entropy`
- `thm-qsm-dt-time-dependent-gksl`
- `cex-qsm-dt-damping-entropy`
- `cex-qsm-dt-transpose-not-cp`
- `cex-qsm-dt-correlated-marginal`
- `cex-qsm-dt-finite-bath-memory`

Dependency suppliers opened for the assigned arguments included the current draft suppliers `lem-qsm-matrix-state-calculus`, `def-qsm-relative-entropy-domain`, `thm-qsm-finite-entropy-composition`, `thm-qsm-trace-cross-log-inequality`, and `thm-qsm-dt-finite-unitary`; published mathematical suppliers `def-qc-partial-trace`, `thm-qc-partial-trace-characterization-and-basis-independence`, `cor-finite-dimensional-normed-spaces-are-banach`, `lem-cm-integral-and-ftc-for-continuous-normed-space-curves`, `thm-nrqm-composites-finite-partial-trace-and-schmidt`, `def-axiom-of-choice`, `def-kullback-leibler-divergence`, `def-real-exponential-function-and-e`, `thm-kullback-leibler-is-nonnegative`, `cor-exponential-reciprocal-and-positivity`, and `thm-exponential-is-strictly-increasing`; and the read-only mathematics suppliers `def-complex-exponential`, `thm-complex-exponential-addition-and-real-extension`, `thm-kernel-and-fibres-of-complex-exponential`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-sine-and-cosine-parametrize-the-unit-circle`, and `lem-exponential-series-of-a-bounded-operator`. The import registry `research/math-imports.json` was checked for these math imports.

## Repairs

- `thm-qsm-dt-pinching-entropy`: added the complex-exponential definition, addition law, and kernel theorem as mathematical prerequisites. The phase average now establishes that the chosen root of unity has exact order (r), then evaluates the finite geometric sum explicitly.
- `cex-qsm-dt-finite-bath-memory`: added the complex-exponential definition and addition law, Euler's formula, and the unit-circle parametrization result. Replaced the unsupported numerical phase substitution with a dimensionless θ chosen by the supplier theorem; the two phase factors are then computed from the cited exponential identities.
- `thm-qsm-dt-reduced-unitary`: defined the finite operator exponential by its operator-norm series and added the finite-dimensional Banach-space and bounded-operator exponential suppliers. The existing batch-47 finite-unitary dependency remains in the proof and is reported below.
- `thm-qsm-dt-gksl-sufficient`: defined the operator exponential series in the statement, added its exact bounded-operator supplier and finite-dimensional completeness, and cited the series convergence, adjoint, derivative, exponential-law, and remainder facts used in the proof.
- `thm-qsm-dt-gksl-necessary`: defined the operator exponential series in the statement and added the exact bounded-operator supplier. Expanded the Neumann-series step to show convergence of the geometric series in the finite-dimensional complete map space and verify both inverse identities.
- `thm-qsm-dt-time-dependent-gksl`: clarified the exponential notation in its use of `thm-qsm-dt-gksl-sufficient`.
- Updated the affected proof-contract excerpts, citation uses, and derivation rows for those repairs. Refreshed the consumer contract excerpts for `cex-qsm-dt-correlated-marginal`, `thm-qsm-dt-gksl-necessary`, and `thm-qsm-dt-time-dependent-gksl` to match their suppliers' clarified statements. No changed item had a `verification.judge` record to remove.

The mathematical repairs use only exact mathematical suppliers with their source status preserved. No published or other-batch item was edited.

## Uneditable findings

- `thm-qsm-dt-finite-unitary`, Proof step 1.1, is a batch-47 draft supplier of `thm-qsm-dt-reduced-unitary`. The proof obtains unitarity from the eigenvalues (e^{-itE_j/\hbar}) while citing only the finite real spectral-calculus statement; it does not define or cite the complex exponential phase property — in particular, that the phases have modulus one. A complex-exponential/Euler supplier or a local power-series argument closes this short step. The current raw item SHA-256 observed at split is `100244fa68279aac19ce5feab347f4e98047b2cefc0f6a27d69b5bfb5483fa98`.
- `thm-qsm-finite-entropy-composition`, Proof step 1.3, is a batch-36 draft supplier of `thm-qsm-dt-pinching-entropy`. It infers (R^{1/2}(v\otimes f_j)=0) from positivity and a zero quadratic form but cites only the partial-trace result and algebra. The transitive closure includes finite spectral calculus, but the step should identify that supplier or give the immediate eigenbasis argument. This is a nonfatal proof-step justification omission. The current raw item SHA-256 observed at split is `02ebac1e1ea451bf63f769b26a003f2a50ba6967594a564b4c1b313f38b42565`.

## Page verdicts

- `qsm-dt-channels`: pass for the assigned content after the listed repairs. The finite channel, duality, norm-contraction, reduced-unitary, GKSL, and pinching claims match their stated finite-dimensional hypotheses and conventions. The pinching result remains conditional on its draft entropy supplier, with the nonfatal step citation issue routed above.
- `qsm-dt-channels-examples`: pass after the finite-bath phase repair. The damping, transpose, correlated-marginal, and finite-bath witnesses distinguish their exact claims and supply the required finite computations. The reduced-unitary supplier's nonfatal phase-justification issue is recorded above.

## Checks and limitations

- Reflow: all six changed assigned items returned `unchanged`.
- Precheck: all six changed assigned items passed.
- Final proof-layout: `6 items, 23 steps, 0 defects`.
- No blocker remains for this reader handoff. I reviewed the exact suppliers and transitive entropy/partial-trace arguments needed for these claims, but did not recursively audit unrelated lower-level dependencies of the imported mathematics. The KMS clause of the batch-47 finite-unitary supplier was outside the assigned consumer use; the unitary proof step itself was reviewed and routed.
