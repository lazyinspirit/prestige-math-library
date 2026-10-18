# Batch 21 Step 3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-21`.

Scope: six touched obligations; no reader, refuter, page or flagged obligations. Reader and refuter artifacts contain no open findings. Review proceeds in the generated dependency order.

## Completed item reviews

- `lem-it-finite-classical-kl-nonnegative-equality`: Steps 1.1–2.1: MVT on each side of 1 gives the strict scalar logarithm inequality; summing on positive p-support preserves the missing q-mass term. Infinite support mismatch and both equality directions checked. Log laws and derivative/MVT supplier hypotheses hold on positive closed intervals. Finite nonempty probabilities; no choice assumption.

- `lem-it-finite-cq-block-sum-is-a-state`: Steps 1.1–2.1: product-basis block diagonal form proves self-adjoint positivity and trace sum p_x=1. Zero probabilities contribute zero blocks without requiring faithful states. Label register and B are nonzero. Linear-first projection convention and cited positivity, tensor and trace definitions checked.

- `lem-it-finite-povm-measurement-channel`: Steps 1.1–3.1: Kraus maps are linear with the displayed linear-first adjoints. Sum K* K equals sum E_y=I, and diagonal output coefficients equal tr(XE_y) for every operator X. Kraus equivalence and normalization apply in finite dimension; indexed-register unitary conjugation preserves both. Zero effects and singleton outcomes cause no exception.

- `lem-it-inverse-compression-resolvent`: Steps 1.1–2.1: completing the quadratic square gives the maximum at C^{-1}y. Restriction to z=Vw yields the correct greater-than order; compression remains positive for s=0. Inverses and adjoints exist in finite dimension, difference is self-adjoint, and H=0 is explicitly handled. No spectral or choice prerequisite is missing.

- `lem-it-partial-traces-of-a-state-are-states`: Steps 1.1–2.1: second-factor theorem gives rho_A; first-factor coordinate contraction separately proves self-adjointness and nonnegative quadratic form for rho_B. Summed diagonals give trace one. Tensor order, nonzero state spaces and root linear-first conventions checked against both partial-trace definitions.

- `lem-it-operator-jensen-negative-log`: Steps 1.1–2.1: FTC on [0,R] applies to the differentiable log difference with continuous derivative; quotient tends to 1 and finite spectra give operator norm convergence. Inverse compression direction gives negative-log Jensen after subtracting the scalar identity. Compression is strictly positive on nonzero H; empty spectra on H=0 are handled. Relevant log, FTC and integrability statements checked.

- `ex-it-qubit-von-neumann-entropy`: Steps 1.1–2.1: eigenvalues p,1-p are probabilities; endpoints omit zero terms, p=1/2 yields ln 2. Explicit log_2=ln/ln2 matches entropy units. Reader reciprocal-log citation supplies the exact evaluation. No substantive claim changed.

- `lem-it-quantum-entropy-support-and-finiteness`: Steps 1.1–2.1: zero marginal quadratic form is a sum of nonnegative joint forms, forcing annihilation of both kernel tensor subspaces. Orthogonal decomposition identifies the remaining support; product eigenvalues establish the tensor support equality. Both marginals are states; finite QRE branch applies even for singular marginals.

- `lem-it-quantum-relative-entropy-isometric-invariance`: Steps 1.1–2.1: isometry transports positive eigenspaces exactly, with zero extension on range complement. Support inclusion is equivalent on both sides; spectral logarithm traces agree by rectangular trace cyclicity. Zero A and H=0 give zero traces; failed inclusion gives infinity on both sides.

- `lem-it-quantum-relative-entropy-support-regularization`: Steps 1.1–2.1: eigenbasis of B gives exact diagonal cross trace without assuming A and B commute. In finite branch all zero-B coefficients vanish; epsilon log epsilon tends to zero by the square-root substitution and log bound. Outside support, positive kernel trace coefficient forces divergence. A=0, B=0 and empty spectra checked. Reader correctly derives log divergence from monotonicity and surjectivity.

- `lem-it-relative-modular-representation`: Steps 1.1–2.1: mixed eigenbasis matrix units are orthonormal for tr(XY*), eigenvalues b_j/a_i are positive, and quotient logarithm yields left-minus-right multiplication with the stated signs. Trace pairing at A^{1/2} equals D(A||B). Strict positivity hypotheses exclude inverse and log singularities; no commutation between A and B is assumed.

- `cex-it-non-full-support-quantum-kl-is-infinite`: Steps 1.1–2.1: two orthogonal rank-one projections each have trace one and nonnegative spectrum. Their distinct one-dimensional supports violate inclusion, so QRE is infinity, refuting universal finiteness even for normalized states.

- `ex-it-bell-pair-negative-conditional-entropy`: Steps 1.1–3.1: normalized Bell vector gives spectrum 1,0,0,0; both partial traces eliminate cross terms and give I/2. The reciprocal-log law gives marginal entropy ln2, hence conditional entropy -ln2<0. Factor order and natural units agree with information-measure definitions.

- `thm-it-quantum-entropy-identities`: Steps 1.1–4.1: prior support lemma legitimizes finite trace and zero extensions. Product eigenvalue log law splits the marginal product logarithm; partial-trace duality and first-factor coordinates give the two entropy traces. CQ block spectra p_x lambda_xj give the Holevo cancellation, omitting zero p and zero eigenvalues. Both identities hold for singular states.

- `thm-it-quantum-relative-entropy-joint-convexity`: Steps 1.1–3.1: right-multiplication Hilbert-Schmidt adjoint gives U*U=I and U* (direct-sum Delta_i) U=Delta_{B,A}; vector A^{1/2} maps to sqrt(lambda_i) A_i^{1/2}. Jensen therefore gives correct inequality. Zero weights omitted before infinity cases; H=0 trivial; kernel positivity gives finite mixture support and common epsilon regularization passes finite sums to limits.

- `ex-it-classical-ensemble-holevo-equality`: Steps 1.1–3.1: diagonal mixture has spectrum p, each projection is pure; orthogonal measurement gives joint law p_x delta_xy and marginal p_y. Only positive diagonal terms enter mutual information, where log(1/p_x)=-log p_x. Singleton support and zero probabilities checked; reader reciprocal-log citation is exact.

- `thm-it-quantum-relative-entropy-partial-trace-data-processing`: Steps 1.1–3.1: de Moivre, Euler and exponential kernel suppliers give a primitive d-th root, including d=1. Phase average removes off-diagonal matrix units and shift average gives I/d, establishing the exact twirl on all operators. Product spectral support and log(lambda/d) show unchanged QRE after tensoring I/d, including infinite branch. Convexity plus unitary invariance gives DPI; partial traces remain nonnegative.

- `thm-it-quantum-relative-entropy-channel-data-processing`: Steps 1.1–3.1: Kraus equivalence supplies finite family; trace normalization and nonzero input force nonempty environment. Vx=sum K_jx tensor f_j is an isometry and expansion yields Tr_E(VXV*)=Phi(X) on the full operator space. Isometric invariance followed by partial-trace DPI proves general nonnegative-operator channel DPI, including infinite input divergence.

- `thm-it-holevo-measurement-bound`: Steps 1.1–3.1: for each positive p_x, positivity forces ker(bar rho) subset ker(rho_x), so all input divergences are finite. Output q_y is positive wherever a retained w(y|x) is positive. Diagonal channel DPI followed by weighted trace linearity yields exactly chi and the defined mutual information. Zero p branches omitted, avoiding 0 times infinity.

- `thm-it-quantum-relative-entropy-nonnegative-equality`: Steps 1.1–3.1: singleton POVM gives nonnegativity from scalar state 1. Equality and DPI force identical probabilities in every orthonormal-basis measurement by classical KL equality; extend any unit vector to a basis and homogenize. The displayed linear-first complex polarization signs are correct and force rho=sigma. Converse trace cancellation holds on the common support even for singular states; infinity cannot be equality.

## Routed decisions and historical evidence

All six exact pre-reader sources were found under `research/non-ml-math-remaining-81-2026-10-18-owner-step2-battery-boundaries-qre/before/items/` and independently SHA-256 matched to the immutable pre snapshot. All six current item files exactly match reader-post raw SHA-256 values. The full diffs contain only the reader changes described below. No historical uncertainty, prior escalation or owner-resolution exception is needed.

| Item | Verdict | Evidence and repair |
| --- | --- | --- |
| `ex-it-bell-pair-negative-conditional-entropy` | `amended_repair` | Fact F6 and Verification 3.1 now cite the reciprocal-log evaluation ln(1/2)=-ln2. The exact Bell marginal calculation is sound; the missing supplier is added to the manifest. |
| `ex-it-classical-ensemble-holevo-equality` | `amended_repair` | Fact F4 and Verification 2.1 now cite ln(1/p_x)=-ln p_x for positive p_x. The exact diagonal-law calculation equals H(p); the missing supplier is added to the manifest. |
| `ex-it-qubit-von-neumann-entropy` | `amended_repair` | Example explicitly defines log_2 and Fact F4 supplies ln(1/2)=-ln2 to Verification 2.1. Endpoints and nats/bits conversion are sound; the missing supplier is added to the manifest. |
| `lem-it-quantum-relative-entropy-support-regularization` | `accepted_repair` | Fact F4 now derives ln t tending to minus infinity from the actual supplier statement: strict monotonicity and surjectivity. The finite and infinite regularization branches are correct; no further amendment is needed. |
| `lem-it-relative-modular-representation` | `amended_repair` | Fact F8 and Proof 1.1 explicitly cite the quotient-log law for eigenvalues b_j/a_i. The Hilbert-Schmidt matrix-unit proof and trace identity are sound; the missing supplier is added to the manifest. |
| `thm-it-quantum-relative-entropy-nonnegative-equality` | `amended_repair` | Facts F10–F11 separate the QRE definition from ln1=0 and Proof 1.1 cites both. Singleton measurement gives nonnegativity; all basis measurements plus polarization give equality iff equal states. The missing supplier is added to the manifest. |

Five manifest dependency arrays omitted the added `thm-natural-logarithm-laws`; this adjudication reconciles those arrays and therefore records amended repairs. The regularization manifest already agrees and its repair is accepted. Every completed repair has confidence 1 and one closed nonfatal citation defect row. Item content, provenance and proof strategy are retained; no new item editing or judge invalidation was necessary.

## Sources, prerequisites and consumer scope

The report above records item-specific hypotheses and boundary checks in dependency order. Read all 20 ordered carriers (19 risk reviews plus the orthogonal ensemble example), their actual cited local supplier Statements/Definitions, and the four local entropy/information definitions. The strict contract check corroborates exact source quotations; it is not mathematical certification. No arbitrary choice is used: basis selection and all index sets are finite.

Consulted the [author-hosted Watrous text](https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf), §5.2.3, Corollary 5.33 and proof (printed p. 279), Proposition 5.34 and Theorem 5.35 with their complete proofs (pp. 280–281). They apply to positive semidefinite operators on finite complex Euclidean spaces and channels; conversion from base-two to natural logs multiplies by a positive constant. These support the convexity and monotonicity interfaces; the local modular/Jensen and Kraus/twirl arguments were independently checked. Wilde was not independently reread and is not relied upon.

Read the current batch manifest and cross-batch dependency record. No Statement or Definition changed in these reader repairs; the qubit Example only makes its existing base-two convention explicit. No supplier interface changes or consumer repairs are required. The owned cross-batch record imports a page interface only; these proofs do not rely on an unproved cross-batch theorem. No withdrawal is proposed. Published suppliers remain read-only; no defective published supplier was identified. This review does not claim to audit their entire recursive closure.

Owner advisory outside the routed obligations: in the final Definition paragraph of `def-it-classical-quantum-state-and-holevo-information`, the correct first-factor identity `bar rho_B=Tr_X rho_XB` is attributed to a “second-factor partial-trace formula” in `def-qc-partial-trace`. The block identity itself follows immediately by the first-factor formula in `def-qc-first-factor-partial-trace` (already checked here) or by swapping factors first. This is nonblocking citation wording to disposition in that untouched definition; no definition or extra decision was added outside the routed scope.

## Local validation and handoff

Initial risk report: 21 items routed, 19 HIGH/CRITICAL. Final risk report with `--require-reviewed`: zero errors, all 19 required reviews complete. Strict proof-contract check: 21/21 checked, zero errors and warnings. Focused precheck: six reader-repaired items checked, zero failing. Final batched proof-layout: six items, 16 steps, zero defects. Scoped defect-ledger validation: 51 run rows checked, zero errors. Exact obligation inventory: six unique decisions, comprising five amended repairs and one accepted repair; no extra obligations. All six current item raw hashes remain equal to reader-post and their manifest dependency arrays agree. No substantial mathematical blocker remains. The engine owns decision stamping and the gate battery; no judge, stamp, dispatch or transition was run.
