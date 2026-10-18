# Proposed local spline supplier: construction and complete proofs

Research proposal only, for numerical-analysis-remaining-71-2026-10-17. No canonical carrier, manifest, native control, acceptance evidence or shared plan is changed. This is the first review/repair cycle for the actual batch-3 construction escalation.

## Proposed item 1: algorithm

Proposed ID: `alg-natural-cubic-tridiagonal-cholesky-with-residual-certificate`.
Home: the existing `spline-evaluation-and-interpolation-algorithms` A page.
This is a band specialization/composition of the published rounded Cholesky and triangular-substitution procedures, not another definition of natural cubic interpolation or of a general factorization method.

Inputs are finite stored real knots x_1<...<x_r, r>=2, and stored real values y_1,...,y_r. Their exact real values specify the reference interpolation problem. Use the published operationwise binary nearest-even, normal-or-zero model, with known rational unit-roundoff bound 0<u<=1/4. Constants 2 and 6 must be representable when used; otherwise return input-format-failure. The scalar index loops and comparisons are exact. The certificate layer below uses exact rational arithmetic on finite stored binary numbers and u; it does not silently round certificate expressions.

For r=2 return the empty second-derivative vector, endpoint second derivatives zero and certificate B=0, referring to the exact straight-line piece. For r>=3 put n=r-2; require (n-1)u<1, otherwise return certificate-parameter-failure. The returned spline always means exact evaluation of the canonical cubic pieces with the returned nodal second derivatives and original stored knots and values. An implementation evaluating these pieces in floating point owes its additional evaluation-error allowance.

Assembly in increasing i:

1. Compute hhat_i=fl(x_(i+1)-x_i), a_i=fl(y_(i+1)-y_i), q_i=fl(a_i/hhat_i), for i=1,...,r-1, in that order within each i. Return assembly-range-failure with i and the operation at the first model failure. Strict knot ordering and successful subtraction imply hhat_i>0.
2. For k=1,...,n, corresponding to original node i=k+1, compute s_k=fl(hhat_k+hhat_(k+1)), d_k=fl(2*s_k), t_k=fl(q_(k+1)-q_k), f_k=fl(6*t_k), in that order. Set c_k=hhat_(k+1) for k<n by exact copy. Return the first indexed assembly-range-failure. Let T be the symmetric tridiagonal matrix with diagonal d and sub/superdiagonal c. Its strict positive definiteness on successful assembly is proved below; no numerical SPD test is presumed.

Factorization uses only the diagonal ell_k and subdiagonal e_k of L, all other entries implicitly zero. For k=1,...,n:

* If k=1 set p_k=d_k by exact copy. If k>1 compute z_k=fl(e_(k-1)*e_(k-1)), then p_k=fl(d_k-z_k).
* At the first failed operation return factor-range-failure(k,operation). If p_k is not positive and normal return invalid-pivot(k,p_k), using the published Cholesky positivity/normality convention. Otherwise set ell_k=fl(sqrt(p_k)); failure or nonpositive/nonnormal output returns the indexed factor failure.
* If k<n compute e_k=fl(c_k/ell_k), with the same first-range-failure convention.

Forward solve in increasing k: z_1=fl(f_1/ell_1); for k>1 compute a=fl(e_(k-1)*z_(k-1)), b=fl(f_k-a), z_k=fl(b/ell_k). Back solve in decreasing k: mhat_n=fl(z_n/ell_n); for k<n compute a=fl(e_k*mhat_(k+1)), b=fl(z_k-a), mhat_k=fl(b/ell_k). Return first solve-range-failure(direction,k,operation). All arithmetic is separate multiply/subtract/divide, with no FMA substitution. The omitted first-row subtract-zero operation is exact. Set Mhat_1=Mhat_r=0 by exact assignment and copy the interior vector.

Compute vhat=T*mhat rowwise: for each row k, form the products at its existing columns j in strictly increasing j, each with one rounded real multiplication, and sum them sequentially from left to right with rounded additions. Store vhat_k; then what_k=fl(vhat_k-f_k). Return first residual-range-failure(k,j,operation), including the final subtraction. Structural zeros are omitted; this is the zero-work deletion of the published dense sequential dot product. No conclusion is inferred from a factor/solve success if residual computation fails.

For a successful residual evaluation compute, using exact rational operations,

    F1 = sum_(i,j) |T_ij| = sum_k |d_k| + 2 sum_k |c_k|,
    X1 = sum_k |mhat_k|, Y1 = sum_k |f_k|,
    V1 = sum_k |vhat_k|, W1 = sum_k |what_k|,
    g_n = (1+6u)/(1-(n-1)u)-1,
    C = W1 + g_n F1 X1 + u(V1+Y1).

Thus the certificate is an actual finite algorithm, using the published linear residual allowance with explicitly computed upper bounds for its norms. More accurate certified norms may reduce C, but arbitrary rounded norms may not replace these quantities.

Finally compute the exact rational canonical h_i=x_(i+1)-x_i and the canonical A,b from the published natural-cubic system. This is exact certificate arithmetic, not a replacement floating-point solve. Its entries require finitely many rational operations because h_i>0. Compute

    alpha = max_k sum_j |A_kj-T_kj|,
    beta = max_k |b_k-f_k|,
    Q = max_k |mhat_k|,
    delta = min_(i=2,...,r-1)(h_(i-1)+h_i), H=max_i h_i,
    B = H^2 (C+alpha Q+beta)/(8 delta).

Only the at-most-three nonzeros of each row enter alpha. Return success(Mhat,L,z,vhat,what,C,alpha,beta,B). Rational arithmetic has no format range failure; it is an explicit arbitrary-precision certificate layer. If a bounded implementation cannot finish that layer, its distinct certificate-resource-failure carries no certified B. There is no polynomial bit-complexity claim.

## Proposed item 2: successful specialization and certificates

Proposed ID: `thm-natural-tridiagonal-cholesky-solve-residual-certificate`.

Statement. Successful assembly gives a real SPD tridiagonal T. The specialized factor and solves above are exactly the stored outputs of the published rounded Cholesky algorithm on T and the published sequential triangular substitutions on L and L^T, after deletion of exact-zero work. Their failure tests use the same positive-normal pivot and no-underflow range conventions. Every complete success has

    ||T mhat-f||_infinity <= ||T mhat-f||_2 <= C.

Consequently there is an exact right-hand-side perturbation e=T mhat-f with ||e||_infinity<=C and T mhat=f+e. This is absolute backward error, valid also for mhat=0 or f=0. No division by a zero norm is authorized.

If additionally (n+3)u<1, there are lower/upper bidiagonal D1,D2 with

    (L+D1)z=f, (L^T+D2)mhat=z,
    |D1| <= tau |L|, |D2| <= tau |L|^T,
    tau=gamma_(n+3).

If also (20n+20)u<1/5, write g=gamma_(20n+20). There is a symmetric factor residual E=LL^T-T with |E|<=100g |L||L|^T, and

    (T+J)mhat=f,
    J=E+D1 L^T+L D2+D1 D2,
    |J| <= (100g+2tau+tau^2)|L||L|^T.

J need not be symmetric. The relative factor norm refinement with 100 sqrt(n) g<=1/2 is inherited exactly from the existing published factor theorem. Exact SPD does not imply rounded factorization success. No forward claim is inferred from these factor/solve bounds without conditioning.

Proof.

1. Successful assembly makes every hhat_i positive. Let S_k=hhat_k+hhat_(k+1), the exact sum of stored widths. The two rounded operations give d_k>=2(1-u)^2 S_k>=9S_k/8>S_k. The actual sum of the stored off-diagonal row magnitudes is at most S_k, with fewer neighbors in the first and last rows (none when n=1). Thus T is real symmetric with positive diagonal and strict row dominance. For real nonzero v, apply 2c_k v_k v_(k+1)>=-|c_k|(v_k^2+v_(k+1)^2) to get v^T T v >= sum_k (d_k-sum_(j!=k)|T_kj|)v_k^2>0. This proves SPD without a citation-only test. If the multiplication by two is exact, the bound improves but is not needed.

2. In column k of dense published rounded Cholesky on T, induction gives L_jk=0 for j>k+1. In its diagonal dot product every term except the possible e_(k-1)^2 is structurally zero. Each extra square-zero, imaginary-zero product, addition/subtraction of zero, and sum of stored value with zero is exact and succeeds under the operationwise model. The surviving square and pivot subtraction are exactly the specialized instructions. In row k+1 the previous-column dot product is zero: for j<k, L_(k+1,j)=0. Its surviving division is c_k/ell_k. Rows below k+1 have zero input and zero previous-column products, hence their output remains zero. The first column is the same argument with an empty dot. The positivity and square-root tests coincide with the published algorithm. Induction proves identity of all stored nonzero slots and of all potentially failing operations. Skipped zero work cannot hide a range error; it never produces a nonzero tiny/large result or divides by a zero diagonal. Locations map to the corresponding published column and row; the wrapper retains its more specific stage status.

3. In forward and backward substitution the only possibly nonzero off-diagonal product in each row is the displayed neighboring product. All the other terms are structural zeros. Their deletion and deletion of first-row subtract-zero leave the same result, for the same reason as in step 2. The published triangular backward lemma therefore applies under (n+3)u<1 and gives D1,D2. Its entrywise bound forces zeros wherever L is zero, so these matrices are bidiagonal. The published Cholesky backward theorem applies to the identical factor output under its distinct (20n+20)u<1/5 hypothesis. Multiplying the two perturbed triangular equations gives the displayed J identity; taking entrywise absolute values, multiplying nonnegative matrices and using the two tau bounds yields its bound. This derives a complete solve claim rather than treating a factorization error as a solve error.

4. The residual row dot products equal the dense sequential real products on T after deletion of exact zeros, so the published `lem-rounded-linear-and-normal-residual-certificates` applies with A=T, x=mhat, y=f and dimension n. Its g_n is precisely the one defined above, and the algorithm checked (n-1)u<1. Its linear allowance is g_n ||T||_F ||mhat||_2 + u(||vhat||_2+||f||_2). The elementary inequalities ||T||_F<=F1 and ||v||_2<=sum|v_i| follow by expanding the square of the sum of nonnegative magnitudes. Triangle inequality and ||v||_infinity<=||v||_2 then give the C bound. C was computed exactly, so no unchecked rounding is added to it. Taking e equal to the exact residual proves the backward certificate. This part does not require the stronger small-u factor-error hypotheses.

5. The assembly, factor, solve, residual and rational-certificate loops all have finite index bounds and initialized operands. Every floating-point instruction returns either the defined value or its first model failure; every rational division has nonzero denominator, using h_i>0, delta>0 and 1-(n-1)u>0. Thus the mathematical algorithm terminates in the specified status. Its floating work and stored scalars are O(r), and its exact-certificate layer uses O(r) rational operations and O(r) stored rationals. This says nothing about uniform rational operand lengths or bit cost. The published finite-schedule lemma may supply the formal floating-schedule termination interface. QED.

## Proposed item 3: full computational natural-spline guarantee

Proposed ID: `thm-computed-natural-cubic-spline-forward-error-certificate`.

Statement. On success of the proposed algorithm, let s be the exact natural interpolant of its stored knot/data inputs, and let shat be the canonical cubic-piece reconstruction with its returned Mhat and the same exact data. On the knot hull,

    ||shat-s||_infinity <= B
      = H^2 [C+alpha ||mhat||_infinity+beta]/(8 delta).

For exactly represented canonical A,b supplied to the tridiagonal stage, alpha=beta=0, recovering H^2 C/(8 delta). For r=2 the reconstructed straight line is exact, B=0. Approximation error to a smooth target f is separately bounded by ||shat-f||<=B+||s-f||, with the actual natural-boundary compatibility hypotheses on any claimed fourth-order approximation term. No arbitrary-function natural fourth-order rate, automatic range success, rounded piece-evaluation bound, or robustness to perturbed knots/data is asserted.

Proof.

1. For r>=3, the published natural system has exact A,b and its unique second-derivative vector m. By the preceding theorem, the returned mhat has ||T mhat-f||_infinity<=C. The exact intended residual decomposes as

       A mhat-b = (T mhat-f)+(A-T)mhat+(f-b).

For each row, the ordinary absolute-value inequality gives |[(A-T)mhat]_k|<=sum_j |A_kj-T_kj| ||mhat||_infinity. Taking maxima and using the computed alpha,beta proves ||A mhat-b||_infinity<=C+alpha ||mhat||_infinity+beta. These are exact discrepancies, so assembly rounding has not been dropped.

2. Invoke the locally proved `thm-natural-cubic-spline-tridiagonal-residual-transfer` with that exact residual, the original exact widths and zero endpoint second derivatives. Its hypotheses allow arbitrary replacement interior derivatives and do not require shat to be C1 at knots. It yields exactly B. The published r=2 case is the straight line, proving the exceptional branch. Triangle inequality proves the optional target-function decomposition and supplies no approximation rate on its own. QED.

## Required focused correction in the existing residual-transfer proof

Its statement is sound. In its first proof step replace the claim that every row's off-diagonal sum equals h_(i-1)+h_i by the correct inequality <=h_(i-1)+h_i. End rows omit boundary columns; n=1 has no off-diagonal entry. Then d_i-row_sum>=h_(i-1)+h_i>=delta proves the same result. Also repair the currently observed literal carriage return in the rho display. These are local proof/source repairs, with no Statement change. Do not edit while the native author is live.
