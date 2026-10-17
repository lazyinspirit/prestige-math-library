# Batch 82 Step 3a adjudication

Run `numerical-optimization-dynamics-2026-10-16`; group `batch-82`. Scope: three obligations, no touched carriers or pages. Engine owns hashes, gates and transitions.

## Level 0: read-only producer escalation

`reader:82:1` and `refuter:82:1` concern the same batch-67 producer `alg-thick-and-implicitly-restarted-arnoldi-with-locking`, consumed by `alg-golub-welsch-certified-node-and-weight-enclosures`. Both remain **escalated**. Independently read the current complete producer Definition, its proof contract and manifest, and `def-ritz-values-and-ritz-vectors-from-arnoldi`. Steps 1/5 invoke a projected eigensolve with no instructions or supplied solver contract, completeness/finite-return guarantee or failure status. A definition of an eigenpair supplies no procedure. Exact QR iteration is not an exact finite eigensolver for arbitrary complex matrices. Restart-data repairs and the producer risk-review assertion do not close this different missing prerequisite. No convergence theorem is assumed here.

Attempted local closure: checked whether a finite-output primitive was an explicit producer input, whether the Ritz definition supplied it, and whether a listed QR procedure discharged it; none does. Required owner action: supplier-first batch-67 repair with an explicit finite-return solver input/output/failure contract or a complete suitable eigensolver, then actual consumer review and refreshed evidence. The producer is read-only. Both original routing paths and immutable producer fingerprints are preserved in the decisions JSON. No closed defect row or repair confidence is claimed for this unresolved prerequisite.

## Level 0: moment datum

`reader:82:2`: **confirmed_nonfatal**. The current Definition is sound; the endpoint proof-contract annotation is false. For example, on [0,1], the measure δ_(1/3)+δ_(2/3) with m=1 satisfies all moment-data hypotheses and has no endpoint in its relative support. Replaced only “Relative support includes a,b” with the correct optional-endpoint qualification; retained the exact Definition anchor and excluded a=b. Repair confidence: 1. Definition and six dependency definitions reviewed; risk review complete in the owning contract. No item or consumer claim changed. Closed ledger row: `nod-b82-3a-endpoint-support-contract`.

Sources used so far: current items and exact Definition/contract/manifest loci above. No published defect identified.

Next: dependency-ordered review of all remaining HIGH/CRITICAL carriers and prerequisites, followed by local checks.

## lem-tensor-product-moment-functional-equals-product-measure-integral

Read all four steps and ten actual supplier statements. Finite positive factors are sigma-finite; left-associated binary products are finite by rectangle mass formula. Trace rectangle generators give the interval-product Borel identification. Absolute monomials are measurable; successive Tonelli gives finite product of absolute moments, then Fubini applies to signed monomials with no exceptional section issue because each section is a scalar multiple of an integrable monomial. Finite coefficient linearity gives the stated functional. d=1, zero coefficients, signed/zero moments and probability specialization are covered; d=0 is excluded. No new choice use or defect found.

Disposition: current mathematical content sound; risk review complete; no item edits.

## thm-gauss-polynomial-moment-pairing-is-an-inner-product

Read every step and all fifteen direct supplier statements/definitions. Product expansions use degrees <=2k<=r; bilinearity and symmetry follow from finite integral linearity and real multiplication. A nonzero coefficient polynomial has <=k roots, whereas support has >=m+1>=k+1 points; a nonzero support value has a relative Borel neighborhood of positive mass and a strictly positive square lower bound. This works at interval endpoints without requiring endpoints in support. k=0, c=0 and r=2m-1 limiting admissible k checked. No AC used, no mathematical defect found.

Disposition: current mathematical content sound; risk review complete; no item edits.

## thm-monic-gauss-orthogonal-polynomials-exist-uniquely

Read all four proof steps and eleven direct supplier statements. Gram-Schmidt uses the independent standard basis of degree <=m-1 coefficient space; successive spans ensure exact degree and nonzero leading coefficient. Positive Gram matrix has trivial kernel; finite-dimensional rank-nullity gives unique solve Gc=-b using moments at most 2m-1. Uniqueness below degree m follows by applying the same lower-degree squared-difference argument given at step 2.1; its omission from step 1.1 is immediate nonfatal exposition, not a false claim. p0=1, m=1, zero lower coefficients and optional order-2m squared norm checked. No choice assumption needed.

Disposition: current mathematical content sound; risk review complete; no item edits.

## lem-gauss-monic-three-term-recurrence

Read all five steps and eight direct suppliers. Degrees 2j and 2j+1 stay <=2m-1, all denominators h_j>0 for j<m, and beta_j is used only for j>=1. Monic elimination gives the finite triangular basis; orthogonality kills degrees <=j-2, and xp_(j-1)-p_j has lower degree, giving h_j/h_(j-1). Pairings involving xp_(m-1) mean the displayed integrals, whose integrability is established at step 1.1, without requiring a degree-m inner product on the weaker moment branch. m=1 yields only xp0=p1+alpha0 p0. No defects or AC use found.

Disposition: current mathematical content sound; risk review complete; no item edits.

## thm-gauss-orthogonal-polynomial-has-simple-interior-zeros

Read all five steps and twelve supplier statements. Finitely many polynomial roots divide the interval into root-free constant-sign intervals. Multiplying by the factors at exactly the interior sign changes produces one weak sign on the closed interval, including endpoint roots. If fewer than m sign changes, the product degree is <=2m-1 and orthogonality gives integral zero. At least m+1 support points ensure a point off all p_m roots, with a positive-mass relative neighborhood giving a strictly signed integral, contradiction. Monic coefficient cancellation plus root counting gives the full product and simplicity. Empty sign-change product, m=1, endpoint atoms and finite support of exactly m+1 points all work; no AC used.

Disposition: current mathematical content sound; risk review complete; no item edits.

## thm-hermite-interpolant-double-node-remainder

Read all seven steps and fifteen supplier statements. Direct differentiation verifies the explicit Hermite basis values and derivative conditions; degrees <=2m-1. For a query off the nodes, omega(x)^2>0 defines c. m consecutive Rolle intervals supply m nonnode zeros of g-prime; node derivatives supply m additional distinct zeros. Higher-order Rolle with n=2m-1 gives the interior 2m-th derivative zero. Terminal polynomial derivative and nonzero real factorial give the formula. At x=a or b the resulting derivative-zero span still lies inside (a,b); at a node both errors vanish without choosing xi. m=1, constant/zero affine factors and finite selections checked. No extra AC or defect found.

Disposition: current mathematical content sound; risk review complete; no item edits.

## thm-jacobi-matrix-spectrum-equals-gauss-nodes

Read all three steps and ten supplier statements. Positive h_j allow q_j and sqrt(beta_j), j<m only. Dividing the recurrence gives exactly the symmetric off-diagonal coefficients; the final row uses vanishing p_m at each node without an order-2m norm. q0=1/sqrt(M0) makes each eigenvector nonzero. The real self-adjoint spectral theorem applies to finite-dimensional standard inner product space; m distinct nodes exhaust dimension and make every eigenvalue simple. The separate m=1 branch avoids nonexistent beta1 and q_(m-2). No defect or additional choice assumption found.

Disposition: current mathematical content sound; risk review complete; no item edits.

## lem-gauss-quadrature-rule-data-well-defined

Reviewed all three proof steps, the rule Definition and nine supplier statements. Exactly m distinct interior roots have a unique increasing order; all cardinal node differences are nonzero, degree m-1 integrability follows by finite moment expansion, and finitely many real samples give a real output. Interpolation uses supplier n=m-1, including n=0 for m=1 and its empty product. No positivity or exactness is presumed before its later proof; no AC or defect found.

Disposition: current mathematical content sound; risk review complete; no item edits.

## thm-consecutive-gauss-orthogonal-polynomials-strictly-interlace

Reviewed all three steps and eight actual supplier statements. Reduced orders k<=m retain >=k+1 support points and moments <=2k-1, so uniqueness identifies their prefixes. At j=1, p2 at x1 is -beta1 and both endpoints are positive. At general x_i, p_(j-1) has j-i roots to its right; multiplication by -beta_j gives alternating signs (-1)^(j-i+1). Endpoint signs (-1)^(j+1) and + produce the two outside intervals; j+1 disjoint root intervals exhaust degree j+1. Jacobi prefixes have the identical recurrence coefficients, proving the equivalence. m=1 is explicitly vacuous; no weak-interlacing/equality or AC issue.

Disposition: current mathematical content sound; risk review complete; no item edits.

## def-tensor-product-gauss-rule

Reviewed entire Definition and four supplier definitions/results. All m_j>=1 come from the Gaussian rules; d>=1 is explicit. Nested finite sums and increasing-coordinate weight products define values for arbitrary real samples at distinct Cartesian tuples. At d=1 the one-dimensional rule is recovered; no integration/product-measure assumption is implicit. No additional AC or defect found.

Disposition: current mathematical content sound; risk review complete; no item edits.

## thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights

Reviewed all six steps and fourteen actual suppliers, including the full monic-division theorem/proof. Division by monic p_m gives remainder zero or degree<m; a nonzero quotient has degree<=m-1 from leading coefficients and deg f<=2m-1. The proof uses deg s<m as standard shorthand permitting the zero quotient, which occurs for lower-degree f; orthogonality and exactness for s=0 or t=0 are immediate by zero linearity. Cardinal interpolation integrates the remainder, and cardinal-square degree 2m-2 gives w_i=integral ell_i^2>0. Constant 1 yields total mass. m=1 and low-degree/zero inputs checked; zero quotients require no new theorem or edit. No mathematical defect or AC use found.

Disposition: current mathematical content sound; risk review complete; no item edits.

## thm-gauss-hermite-mean-value-remainder

Read all eight proof steps and nineteen supplier statements. Finite measure, continuity, boundedness and Borel measurability give finite integrals; r=2m supplies h_m>0. The pointwise Hermite formula yields bounds using extrema A,B without needing measurable xi_x selection. Integration defines gamma in [A,B]. Constant and strict-interior cases use IVT. If gamma equals an extremum attained only at endpoints, the error difference is strictly positive at every nonnode, including endpoint queries; >=m+1 support points give a positive-mass neighborhood outside the m nodes, contradicting equality. Thus xi really lies in (a,b), even for endpoint atoms. m=1, constant derivative and f=H checked. No choice use or defect found.

Disposition: current mathematical content sound; risk review complete; no item edits.

## thm-gauss-weights-equal-mu0-times-first-eigenvector-coordinate-squared

Read all five steps and ten supplier statements. q_j form an orthonormal triangular basis using j<m norms only. z_i are nonzero real Jacobi eigenvectors; distinct eigenvalues give orthogonality and one-dimensional eigenspaces. Cardinal expansion coefficients integral(ell_i q_j)=w_i q_j(x_i) use degree<=2m-2 exactness. Squared norms give w_i=w_i^2 sum q_j(x_i)^2, division is valid since w_i>0. q0^2=1/M0 yields the first-coordinate square for every unit real eigenvector, invariant under sign. m=1 gives w1=M0. No new choice use or defect found.

Disposition: current mathematical content sound; risk review complete; no item edits.

## thm-tensor-product-gauss-exactness-and-exponential-node-count

Reviewed all four proof steps and eight direct supplier statements. Distributivity of finite nested sums factors each coordinate monomial into exact coordinate moments, and finite linearity extends to the formal coefficient family. Distinct ordered nodes make index-tuples injective; appending coordinates gives product node count. Coordinate degrees are separately <=2m_j-1, not bounded by their sum. d=1, m_j=1, zero moments/coefficients and exponent zero work. Exponential count is asserted only for fixed m>=2. No measure construction or AC is assumed.

Disposition: current mathematical content sound; risk review complete; no item edits.

## ex-two-node-gauss-weights-from-cardinal-squares

Reviewed both proof steps, six direct suppliers and selected finite-smoke declaration. Two nodes are distinct; squares of affine cardinal polynomials have degree 2<=3. Exactness yields their squared integrals as weights, and expanding (x-x_other)^2 gives exactly mu2-2*x_other*mu1+x_other^2*mu0 over nonzero squared node gap. Positivity is the earlier theorem, with no symmetry or density assumption. Signed first moment, zero-valued node and nonunit mass checked. No defect or extra AC use.

Disposition: current mathematical content sound; risk review complete; no item edits.

## ex-four-dimensional-gauss-product-has-sixteen-nodes

Reviewed both steps and five suppliers. Four genuinely distinct pairs yield exactly 2^4 distinct coordinate tuples, even if coordinate node values coincide across different coordinates. The chosen exponents (3,2,1,0) are each <=3; every factor is its corresponding moment, and fourth-coordinate exponent zero denotes one even at zero. General coordinatewise degree-three exactness follows by finite linearity. No symmetry, probability normalization or extra AC hypothesis is required.

Disposition: current mathematical content sound; risk review complete; no item edits.

## ex-two-node-gauss-legendre-exact-through-degree-three

Reviewed all five steps and every distinct direct supplier statement/definition (including Countable Choice, trace Borel, metric neighborhoods, complete Lebesgue measure, all box faces, Riemann/Lebesgue equality and FTC). Countable Choice is explicitly assumed exactly for the Lebesgue construction and integral-identification suppliers. Relative neighborhoods at +/-1 contain positive-length one-sided intervals; all support points exist. Polynomial primitives give (2,0,2/3,0), which uniquely identify 1,X,X^2-1/3; absolute moments are finite since these are bounded continuous functions on a finite interval. Positive square roots give nodes +/-1/sqrt3 in (-1,1), beta1=1/3 and diagonal zero. Displayed unit eigenvectors give weights 1 and cubic exactness. No missing AC or mathematical defect found.

Disposition: current mathematical content sound; risk review complete; no item edits.

## Currency update: owner integration found during closeout

The initial level-0 reading was of the routed producer bytes (1be98f37990cf90e584352f9cba9f18a17a520fa7a7154f3457c2bcb9b5d1e93). A later raw-hash check found owner-integrated bytes 368fbf7e52ddc3c62ff5d8e9afbdb23f223b2cd6200ff33e0311556988d989b8. Read the new solver clauses, changed steps, determinant dependency, updated producer contract/manifest and `research/numerical-optimization-dynamics-2026-10-16-ROOT-Arnoldi67-integration/receipt.json`. This receipt explicitly records `batch82_applied: false`, `mathematical_acceptance: false`, and native independent review/same-reviewer consumer closure still owed. The staged consumer diff and consumer-dispositions in `research/numerical-optimization-dynamics-2026-10-16-owner-reader82-arnoldi-solver-proposal/` require owner verification of writer drain before release. No such release/resolution was found in this dispatch.

The added S contract has finite-return success/unavailable output, algebraic-multiplicity completeness via a characteristic-polynomial identity, shape/nonzero/residual/coefficient validation, and explicit failure statuses before replacing valid outputs. Those clauses address the originally missing primitive, with no universal exact solver assumed. The original finding remains historically true; the current corrected producer is not refuted by its old wording. A partially integrated owner repair is not complete supplier/consumer closure. Both findings therefore remain escalated, with no closed defect row, no repair-confidence assertion and no fabricated approval. Required owner decision: finish the preserved Alpha67 independent supplier/consumer review, authorize/release the staged batch82 S forwarding, then return the resolved exact carriers for consumer completion.

## alg-golub-welsch-certified-node-and-weight-enclosures

Reviewed entire six-step Definition, Soundness interface, sixteen direct supplier statements/algorithms, residual-gap proof, and the four bounded numerical fixture declarations. Uniform coefficient solves enclose true coefficients irrespective of proposal quality (the extra minus sign in midpoint -H^-1 b is harmless for soundness because the certifier solves Hc=b with b=-moments). Norm moments use at most 2m-1; positive h lower bounds and mirrored off-diagonals contain the real Jacobi family. m=1 uses only alpha0 and I0; m>=2 uses Arnoldi proposals followed by independent full-family Gram/residual/norm certification. Gap distances and positive norm lower bound s support the weight radius. BLOCKED: original reader/refuter missing-eigensolver finding is true. Owner integration now gives producer S and explicit unavailable/invalid statuses, raw hash 368fbf7e52ddc3c62ff5d8e9afbdb23f223b2cd6200ff33e0311556988d989b8, but its receipt explicitly leaves native independent supplier/same-reviewer consumer closure owed and batch82_applied=false. Current consumer does not yet accept/forward S; proposal packet forbids batch82 release before owner drain authorization. No owner resolution clearing the escalation is present. Preserve open review until supplier-first closure and released consumer repair; bounded one-node smoke pass does not close m>=2.

Disposition: risk review open for the stated owner-held prerequisite. No item edit.

## thm-golub-welsch-certified-enclosures-are-sound

Read all six steps and thirteen direct suppliers, including both full-family certifier interfaces and local residual-gap proof. Conditional soundness argument is valid: certified Hankel solutions give true coefficients; DAG arithmetic encloses J; m=1 gives alpha0/M0; for m>=2 full-family Hermitian bounds give ordered nodes, Gram d<1 bounds every column norm, distances to other intervals bound true gaps, and radius using sup(I0)>=M0 encloses each weight. Disjointness alone does not force g_i>0, but algorithm step6 explicitly checks it. No certainty is inferred from midpoint residuals and no convergence/tolerance-attainment claim is made. No separate proof defect found. Review remains OPEN only because its defining algorithm depends on unresolved owner/native Arnoldi supplier-and-consumer closure (reader:82:1/refuter:82:1); retain the escalation until that defining interface is resolved.

Disposition: risk review open for the stated owner-held prerequisite. No item edit.

## Sources and prerequisite evidence

All 24 owned item carriers and every distinct direct supplier statement/definition needed by their arguments were read. The algorithm and interval-certifier procedures were read as procedures; existence of Ritz eigenpairs was not treated as an eigensolver. The local residual-gap lemma was checked directly: normalize v, expand in a real orthonormal Jacobi eigenbasis, bound the off-i coefficients by rho/(s*g), choose the sign of u_i, and bound the first-coordinate-square error by twice the vector difference. m>=2 makes the other-eigenvalue minimum nonempty; s,g>0 are explicit, and rho=0 gives the exact bound.

External corroboration actually read: [Gubner](https://gubner.ece.wisc.edu/gaussquad.pdf), §§2–4, Lemma 5/Theorems 6–7, Theorem 10 and proof (PDF pp. 2–4), Theorem 12 (p. 5) and complete proof (pp. 6–7); [Rutgers Lecture 14](https://sites.math.rutgers.edu/~falk/math373/lecture14.pdf), §§10.3–10.4, Theorems 10–12, proof and two-node example (PDF pp. 2–4); [Gautschi](https://web.stanford.edu/class/cme335/Golub.pdf), §2.1, equations (2.1)–(2.9), PDF pp. 2–3. Gubner assumes all moments and nonconcentration on every finite set; Rutgers uses a positive density. These stronger source hypotheses are not substituted for the locally proved finite-support/finite-order statements. Rutgers has inconsistent indices/weight notation in its remainder exposition; the current local Hermite and endpoint-extremum argument was checked independently instead of relying on that passage. No new axiom was added; Countable Choice remains explicit only in the Legendre example's Lebesgue branch.

## Checks, carriers and final disposition

The immutable batch82 pre/post item, contract and page projections are identical; there are no reader-repair deltas to accept/amend/revert and no touched/page decisions owed. Every current owned item raw hash was compared with the post snapshot: all 24 match. The sole mathematical correction is the endpoint annotation in the owned proof contract; other contract changes are explicit risk-review evidence. Manifests, item/page mathematics, provenance and judge records were not edited. No material rewrite occurred, so no judge record was invalidated. No published defect was identified, hence no published-ledger edit/lock was necessary.

Local checks actually executed:

- `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-82.proof-contracts.json`: exit 0, 24 items, 20 HIGH/CRITICAL. Recorded 18 complete reviews and two open reviews for the owner-held algorithm/consumer closure.
- `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-82.proof-contracts.json --require-reviewed`: exit 1, exactly the algorithm and its soundness theorem remain open. These failures are intentional truthful blocker evidence, not closed reviews or mechanical defects.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-82.proof-contracts.json --strict`: exit 0, 24/24 checked, zero errors/warnings. This checks contract correspondence, not mathematical acceptance.
- `node tools/finite-smoke.mjs research/numerical-optimization-dynamics-2026-10-16-batch-82.proof-contracts.json`: exit 0, all four selected bounded fixtures passed: one-node discrete branch, cardinal squares, all 256 degree-box monomials on 16 tensor nodes, and two-node Legendre moment/Jacobi checks. This does not execute or certify a general Arnoldi provider and cannot clear the escalation.
- `node tools/defect-ledger.mjs append --file /tmp/nod-b82-defect.json`: one closed endpoint-annotation defect row appended and generated view refreshed.

No item was edited; no formatter, precheck or proof-layout was needed. No judge, stamping, native gate battery, dispatch, engine transition, commit or publication was initiated. Read-only live status confirmed this is the active Step3 run.

Final decisions: `reader:82:2` confirmed_nonfatal with repair_confidence 1 and exactly one closed row; `reader:82:1` and `refuter:82:1` escalated together for the still-incomplete owner supplier/consumer resolution. Their original producer batch, consumer, dependency paths, pre-reader fingerprint and routing-carrier bindings remain intact in the three-entry decisions JSON. The owned cross-batch edge is open and frontier-dependency ledger records the same blocker.

Next owner action: finish the preserved supplier review/consumer closure and authorize the staged batch82 provider forwarding after the required writer-drain check. Then the affected two risk reviews and current consumer artifacts need completion. The endpoint repair and other 18 risk reviews are complete; this report does not claim whole-batch readiness.
