# Batch 43 Step-3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-43`.

Reviewed the dispatch, scope, reader report and refuter artifact; current item SHA-256 values all match the post-reader snapshot before Alpha edits. Four touched carriers have unchanged item bytes and contract-only enrichment; they will receive audit_enrichment dispositions. No pages are routed.

## Review checkpoint

- `alg-na-romberg-trapezoid-table`: Definition loops use only previously filled columns. Natural panel counts are positive by the displayed recursion; 4^j-1>0 for j>=1. L=0 returns T_1 with no extrapolation. No accuracy or floating-point claim is attached.

- `def-na-bernoulli-polynomials`: Coefficient recursion has finite predecessors and positive canonical-real denominators. B_0=1 and B_1=X-1/2; integration normalizes each higher polynomial to mean zero. Explicit iota resolves the reader typing repair.

- `def-na-clenshaw-curtis-dct-i`: Unnormalised endpoint terms have coefficient one and interior terms two. n>=1 makes all denominators valid; n=1 has an empty interior sum and n=0 is excluded. Real data and canonical index images are explicit.

- `def-na-peano-kernel`: Polynomial exactness includes zero evaluation functions. For r>=2 the truncated power is continuous at x=t. For r=1 it is the indicator of (t,b], integrable using the explicit short panel, including t=a,b; node-value changes are finite. Factorial denominators are nonzero. Repeated quadrature nodes do not affect the construction.

- `lem-na-chebyshev-degree-bound-from-recurrence`: Support induction advances adjacent degrees using coefficient convolution. Evaluation at 1 respects those operations and the second induction yields T_n(1)=1, so degree is defined even at n=0. The added nonzero argument supplies the essential missing premise.

- `lem-na-bernoulli-polynomial-identities`: Termwise differentiation and integration of the normalized recursion give derivative and zero mean. Endpoint equality requires m>=2. Reflection induction has zero derivative and zero mean, using FTC on each interval; m=0 is its base. Odd endpoint vanishing excludes m=1. Compactness supplies boundedness without AC.

- `lem-na-chebyshev-integral-moments`: Cosine substitution is decreasing onto [-1,1] with continuous derivative and nonnegative sine on [0,pi]. Product-to-sum gives the two frequencies. k=0 and the zero-frequency k=1 branch are explicitly separate; even k>=2 gives 2/(1-k^2), odd k gives zero.

- `lem-na-clenshaw-curtis-dct-i-orthogonality`: Telescoping is divided only by sin(m*pi/(2n))>0 for 1<=m<2n. C_m is zero at positive even frequencies and one at odd frequencies; endpoint half weights make D_m zero. Frequencies 0,2n yield n; product-to-sum covers all diagonal/off-diagonal cases, including n=1.

- `thm-na-peano-kernel-remainder-and-bound`: Taylor remainder follows by the displayed integration-by-parts induction with C^r hypotheses. Exactness kills the zero or degree<=r-1 Taylor polynomial. For r>=2 rectangle interchange uses a continuous kernel. For r=1 a separate piecewise-affine integrability and FTC calculation avoids discontinuous-kernel Fubini. Products and absolute values are integrable and derivative extrema finite.

- `thm-na-euler-maclaurin-composite-trapezoid-remainder`: Panel B_1 integration has the sign T-I=J_1. The recurrence J_k=boundary-J_(k+1) telescopes at matching Bernoulli endpoints; odd boundary values vanish. At p=1 it gives b_2-J_2 directly. C^(2p) supplies all integration-by-parts derivatives and compact bounds; summing panel lengths gives the stated remainder.

- `cor-na-composite-trapezoid-even-power-expansion`: Apply Euler-Maclaurin at p=j+1 and absorb exactly the final correction into the remainder. N>=1 and j>=1 are explicit. C_j contains no N and all extrema exist; hence the same constant works at all dyadic levels.

- `lem-na-closed-newton-cotes-eight-panel-weights-and-exactness`: Nine distinct increasing nodes satisfy the cardinal suppliers. The affine substitution has factor 1/4. Coefficient multiplication and exact monomial integration determine the weights; reflection supplies the remaining four. Cardinal uniqueness proves degree<=8 including zero, and symmetry annihilates X^9. No claim about positivity of weights is used.

- `thm-na-romberg-even-power-cancellation`: Column induction uses identical coefficients at adjacent levels and h_(ell-1)=2h_ell. The factor (4^j-4^r)/(4^j-1) kills r=j only. The remainder multiplier is finite and level independent. At column m the sum is empty. Smoothness C^(2m+2) is retained; observed error ratios are not a hypothesis.

These prerequisite reviews are complete; no substantial prerequisite blocker was identified.

## Higher-level review checkpoint

- `cor-na-closed-newton-cotes-eight-panel-peano-bound`: Degree-nine exactness includes zero and therefore meets the order-10 Peano premise. Integrating (x-t)_+^9/9! over [-1,1] gives (1-t)^10/10! for each t in [-1,1], including both endpoints. C^10 is exactly the required smoothness; the result is an absolute L1 bound, without a kernel-sign assertion.

- `thm-na-clenshaw-curtis-interpolation-coefficients`: DCT endpoint coefficients are X/(2n), interior coefficients X/n. Substituting the forward sum and weighted orthogonality reconstructs every node, including n=1 with no interior coefficient. Chebyshev degree support bounds the polynomial, with the zero case interpreted in P_n. Reversing the strictly decreasing cosine array supplies the increasing-node uniqueness premise.

- `ex-na-square-root-endpoint-breaks-romberg-order`: Independently recomputed first-panel error h^(3/2)/6 and the C^2 later-panel bound h^(3/2)/(48*i^(3/2)). Concavity makes all excesses nonnegative; the finite reciprocal-power sum is <=3, including N=1,2. Thus e_N is between h^(3/2)/6 and 11*h^(3/2)/48. Substitution into (4e_(2N)-e_N)/3 gives (8sqrt(2)-11)/144>0; dividing by h^2 diverges. Smoothness is not asserted at zero. Confirmed and removed scalar application S_N(f); all proof mathematics is unchanged.

- `def-na-clenshaw-curtis-quadrature`: Positive n uses only the reviewed DCT interpolant and moments. The affine map has d>0 and its samples stay in [a,b]. n=0 separately samples the midpoint and never divides by n. The natural domain clarification preserves both branches and exact-real convention.

- `ex-na-eight-panel-newton-cotes-negative-weight-amplification`: Sample-vector functional now has a well-typed domain R^9. Positive numerator sum 34746 and negative magnitude sum 6396 give signed sum 2 and absolute sum 13714/4725>2. The sign-aligned explicit perturbation attains the bound, also when epsilon=0. Smooth C^10 integration error remains a separate Peano application.

- `thm-na-clenshaw-curtis-exactness-and-near-best-error`: Integration of the DCT interpolant and affine substitution give Q=integral(P). Reproduction includes the zero polynomial and n=0 midpoint constants. The integral residual is bounded by (b-a) times its supremum norm, followed by the existing near-best theorem. Both inverse affine maps preserve P_n and supremum errors, so the infima agree. No best approximant attainment or AC is required.

- `ex-na-clenshaw-curtis-integrates-quadratics`: At n=2 the DCT gives X_0=y_0+2y_1+y_2, X_1=y_0-y_2, X_2=y_0-2y_1+y_2. Endpoint normalization and moments 2,0,-2/3 yield weights 1/3,4/3,1/3. Substitution of sample vectors for 1,x,x^2 yields exact integrals 2,0,2/3.

- `alg-na-computed-clenshaw-curtis-via-fast-dft`: For n>=1 the even extension has exactly 2n entries, including n=1, and representable real samples plus zero imaginary parts meet the called unnormalised DFT input condition in the same model. All phase and finite arithmetic controls match its Definition. Status is returned before postprocessing on failure. n=0 returns the midpoint with no DFT call or representability condition. Postprocessing is explicitly exact on approximate outputs; no error or stability theorem is claimed.

The refuter observation is bound to the canonical post-reader carrier hash (item, contract and manifest); its raw item digest matched the pre-edit current source. Scalar notation is repaired; no mathematical inequality, proof step, or dependency changes. Consumer-use checks, exact arithmetic checks, decision/ledger records and final validation are complete below.

## Decisions and repairs

20 owed decisions: 14 reader repairs accepted, four contract-only changes reviewed_no_defect/audit_enrichment, the square-root touched carrier amended, and refuter:43:1 confirmed_nonfatal. Fifteen distinct closed nonfatal defect rows record the accepted corrections and the scalar defect; the two square-root decisions share its one row. Every completed repair has repair_confidence: 1. No judge record existed on the one Alpha-edited item; its proof is unchanged. No historical-byte escalation or unbound observation applies.

## Consumer and source evidence

All direct cited prerequisite statements were opened. The cardinal-basis, interpolation-uniqueness, interpolation-norm and near-best supplier proofs were independently checked. The decreasing Lobatto nodes are explicitly reordered for the increasing-node supplier. The DFT Definition and floating-point-model Definition were opened to check representability, controls and status propagation. This is consumer-interface review, not acceptance of an outside batch.

A current items scan found one outside reference/dependency consumer of the reader-changed Statement/Definition carriers: `ex-smolyak-four-dimensional-product-integrand`. Its full current Verification uses n=1,2, affine nodes on [0,1], and exactness on the nonzero polynomials 1,x,x^2. Those uses remain valid; no outside repair or further propagation is necessary. The Alpha scalar repair has no logical consumer and leaves the Example mathematics unchanged. All 16 cross-batch records, including four page context requirements, remain present; stale proof-step locators and the DFT input summary were refreshed. No withdrawal was proposed.

Sources read: [DLMF 24.2(i), equations 24.2.1–24.2.5](https://dlmf.nist.gov/24.2), [DLMF 3.5(iii), equations 3.5.9–3.5.12](https://dlmf.nist.gov/3.5), [Scott, Numerical Analysis draft, printed pp.218–219, 224–225, 228 and 237](https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf), and [Trefethen, section 2, PDF pages 3–4, equation 2.3 and FFT code](https://courses.grainger.illinois.edu/cs591mh/fa2012/trefethen/Clenshaw-Curtis.pdf). Scott uses the opposite residual sign and an unnormalised truncated-power kernel; the local definition includes 1/(r-1)! and the local proof establishes its own r=1 case. The exact local coefficient and endpoint calculations, rather than source authority alone, support acceptance. Scott section 13.4.1 is on printed p.237 in the linked draft (some inherited locator summaries say p.236); the section title identifies the relevant passage.

No defective published mathematical supplier was confirmed, so the published-consumer ledger needs no addition. No substantial missing prerequisite, affected outside consumer, or owner decision remains open.

## Local checks

- Exact rational recomputation: all nine cardinal integrals match the displayed Newton–Cotes weights; moments 0 through 9, signed sum 2 and absolute sum 13714/4725 passed.
- Reflow: the single Alpha-edited item was already normalized. Its precheck passed.
- Focused proof-contract --strict: 23/23 checked, zero errors or warnings.
- Final risk-report run without --require-reviewed and then with --require-reviewed: both zero errors, 23 routed items; all 19 HIGH/CRITICAL risk reviews are complete.
- Final precheck: one edited item checked, zero failures. Final batched proof-layout: one item, three steps, zero defects.
- The observed b40fcc… digest is a canonical carrier-object hash, not the raw item hash; checked it against the post snapshot and separately bound raw pre-edit bytes to e54edbab….
- The engine owns hash stamping and the gate battery; neither was run or claimed here.
