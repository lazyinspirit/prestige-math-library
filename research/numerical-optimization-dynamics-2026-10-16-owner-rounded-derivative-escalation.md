# Rounded linear algebra and AD escalation: mathematical diagnosis and exact repair proposal

Run: `numerical-optimization-dynamics-2026-10-16`. Focused review cycle 1. No carrier, manifest, runtime, acceptance stamp, or hash was edited. Actual supplier/consumer preimages and raw SHA-256 identities are bound in the companion JSON. They must be refreshed against drained authors before applying any patch.

## Controlling scope and distinctions

Read fully: CLAUDE.md, README.md, SCHEMA.md; actual batch-13 cross-batch record and notes; plan NA-02 and DIF2 scope; linear-audit NA-02 contract and optimization-audit DIF2 contract; all carriers preserved in the preimages directory; published exact Householder QR aggregator, floating-point model and dot-product proof.

NA-02 promises computed Cholesky residual, a completed Householder formation/update local bound, and computed full-rank least squares including rounded triangular substitution. DIF2 explicitly requires derivative discrepancy bounded using NA-02; the actual implicit example is a triangular linear solve. Neither approved NA-02 scope nor DIF2 promises the derivative of the Cholesky/QR factor-output algorithm. Distinguish (a) factorization residual, (b) derivative of a smooth exact factorization algorithm on a strict branch, (c) derivative of the mathematical solve map, and (d) the rounded execution, which generally has no useful ordinary derivative. Interface (c) below works with all three named triangular/Cholesky/QR solve backends; it does not silently identify (a) with (b).

## Confirmed false Householder constant

The algorithm leaves multiplication association unspecified. One permitted evaluation computes rounded `tau*v`, multiplies this vector by the rounded dot product, then subtracts. In binary precision p=8 with round-to-nearest ties-to-even, u=1/256, choose active row count r=m=2, x=(231/128,0), B=(147/8,0). Choose a finite normal exponent range containing all nonzero intermediates.

Scaling gives z=(1,0), t=1 and norm estimate 231/128 exactly. Then v=(231/64,0), w=13, tau=79/512. The dot product is 133/2; rounded tau*v is (143/256,0); the rank-one update is (149/4,0); hence Bhat=(-151/8,0). Each value follows directly by rounding to eight significant binary bits, including ties to even. The exact reflector of the stored v is diag(-1,1). Thus the update discrepancy is 1/2, whereas

`3 gamma_2 ||[x B]||_F = (3/127) sqrt((231/128)^2+(147/8)^2) < 1/2`.

The squared inequality is rational and strict. This is an admissible 2-by-2 active QR block, and disproves the current local statement's 3 gamma_m bound. There is no missing established proof of that particular false constant. The implementation also fails to specify the first-column overwrite needed to produce triangular R.

## Exact Householder repair, all successful branches

Specify the implementation completely: for active C=[x B], run the existing scaled formation; in the nonzero branch output Cplus=[alpha_hat e1, Bhat], overwriting entries below the diagonal with exact zero, with Bhat evaluated in the stated order `d=fl(v^T B)`, `p_i=fl(tau_hat v_i)`, `U_ij=fl(p_i d_j)`, `Bhat_ij=fl(B_ij-U_ij)`. In the zero branch x=0, copy B, H=I. All nonzero exact intermediates must remain normal; failure remains explicit. Define Q as the exact product of H(v) representatives of the stored v; an explicitly rounded dense Q needs a separate error, and is not asserted exactly orthogonal.

For nonzero x write N=||x||_2, sigma=sign convention, alpha0=-sigma N, v0=x-alpha0 e1, V0=||v0||>=N. For 0<u<1 and ru<1 set

`g_r=gamma_r`, `e_r=(1+u)^(r/2+3)-1`,

`d_r=e_r+u(2+e_r)`, `a_r=(1+u)/(1-u)^r-1`,

`c_r=2[(1+a_r)(1+u)^2(1+g_r)-1]`,

`kappa_r=max(e_r+8d_r, (1+u)c_r+3u)`.

These explicit quantities are nonnegative and increase with r. For successful formation the sum of nonnegative scaled squares lies between `(1-u)^(r+2) N^2/s^2` and `(1+u)^(r+2) N^2/s^2`: two factors arise from scaling, at most r more from squared-product and addition expansion. Correct square root and final rescaling give `|rhat/N-1|<=e_r`; the lower error is no larger than the upper because the exponent r/2+3 is at least one. Only the first stored-vector coordinate changes, and its rounding yields `||v-v0||<=d_r N`. Stored v is nonzero because its first coordinate is a sum of numbers with the same sign and rhat>0.

For any nonzero a,b, normalization gives `||a/||a||-b/||b||||<=2||a-b||/||b||`. Expanding the difference of rank-one orthogonal projectors and then H=I-2uu^T therefore gives `||H(v)-H(v0)||_2<=8||v-v0||/V0<=8d_r`. Since H(v0)x=alpha0 e1, first-column overwrite error is at most `(e_r+8d_r)N`.

The positive dot product w=fl(v^T v) has multiplicative bounds `(1-u)^r||v||^2 <= w <= (1+u)^r||v||^2`. Thus `|tau_hat ||v||^2/2-1|<=a_r`. For each trailing column, dot-product error is at most `g_r||v||||B_j||`. Two entrywise multiplications add the factor `(1+u)^2`. Triangle inequality and Cauchy-Schwarz give `||U-2v(v^T B)/||v||^2||_F<=c_r||B||_F`. Final subtraction contributes at most `u(||B||_F+||U||_F)<=u(3+c_r)||B||_F`, so `||Bhat-H(v)B||_F<=((1+u)c_r+3u)||B||_F`. Combining the disjoint column blocks yields

`||Cplus-H(v)C||_F <= kappa_r ||C||_F`.

Set `E=H(v)Cplus-C`. Orthogonality gives `H(v)(C+E)=Cplus` and the same bound. The zero branch has E=0. This completes every local branch without an unproved formation premise.

For m rows, exact orthogonal transport and the geometric sum in the existing aggregator's proof give the replacement global bound

`A+DeltaA=Qhat Rhat`, `||DeltaA||_F<=((1+kappa_m)^n-1)||A||_F`.

This proof must be written locally in the new global theorem: the published aggregator with its 3 gamma_m hypothesis is still a correct conditional theorem and cannot be invoked as if it had kappa_m. Its public statement need not be changed. Counts and asymptotic work remain the same.

A simpler optional consequence is `kappa_m<=16 gamma_(m+10)` when `gamma_(m+10)<=1/100`. Indeed e_m<=gamma_(m+6)<=g, u<=g/(m+10)<=g/11, d_m<=1.183g, so e_m+8d_m<11g. Also a_m<1.103g, c_m<4.62g and `(1+u)c_m+3u<5g`. This optional small-roundoff bound does not replace the general kappa_m result.

## Rounded triangular substitution: complete row proof

For nonsingular upper triangular R, specify descending substitution by an empty sum 0 or a sequential rounded product/sum `s_i`, `t_i=fl(y_i-s_i)`, `xhat_i=fl(t_i/R_ii)`, all successful. Put alpha_i,beta_i in [-u,u] for subtraction and division, and expand the dot product as `s_i=sum_(j>i) R_ij xhat_j (1+theta_ij)` with `|theta_ij|<=gamma_(n-i)`; exact zeros use factor zero. Then

`R_ii xhat_i/[(1+alpha_i)(1+beta_i)] + sum_(j>i) R_ij xhat_j(1+theta_ij)=y_i`.

Choose DeltaR upper triangular with `DeltaR_ii=R_ii([(1+alpha_i)(1+beta_i)]^-1-1)` and `DeltaR_ij=R_ij theta_ij` for j>i. For u<1/3,

`|[(1+alpha_i)(1+beta_i)]^-1-1| <= (1-u)^-2-1 <= gamma_3`.

(The last inequality follows by multiplying the positive denominators.) Consequently, if `(n+3)u<1`,

`(R+DeltaR)xhat=y`, `|DeltaR|<=gamma_(n+3)|R|`, `||DeltaR||_F<=gamma_(n+3)||R||_F`.

This is stronger than the existing factor 20 and preserves its stated claim. It covers xhat=0 automatically: the exact row identity then forces y=0, so DeltaR=0 can alternatively be chosen. No division by ||xhat|| is needed. Transposition yields the forward-substitution form. The existing LS proof then uses its already proved projection-error construction, this row lemma, exact QR and nonsingularity; replace beta_Q by the fully proved global Householder beta. Preserve its claimed factor20 if avoiding unnecessary statement drift.

## Certified mathematical solve Jacobian and pullback

Let square real A be supplied at an exact graph point, x=A^-1 b, and let xhat be any successful computed primal solution. Form a fixed matrix B by applying the selected rounded solve backend to each basis vector and storing the columns. This is a fixed linear derivative approximation; it is not the derivative of the rounded program and is not assumed equal to re-running a rounded solve on an arbitrary right-hand side. Let rigorous upper bounds satisfy

`d >= ||I-AB||_2`, `d<1`, `rho >= ||b-A xhat||_2`, `M >= ||B||_2`, `K=M/(1-d)`.

All certificates refer to exact real residuals; rounded residual evaluation must add its own proved error bound. Use the Frobenius norm upper bound if it is more convenient to verify. Neumann's finite-series identity plus norm convergence proves `(AB)^-1=sum_(j>=0)(I-AB)^j`, with norm at most 1/(1-d). Hence A and B are invertible, `||A^-1||<=K`, `||B-A^-1||<=Kd`, and `||xhat-x||<=K rho`.

For mathematical solve phi(A,b)=A^-1 b, the IFT or differentiation of Ax=b gives local edge derivatives `J_b h=A^-1 h`, `J_A H=-A^-1 Hx`. Set fixed approximations `Jtilde_b h=Bh`, `Jtilde_A H=-BH xhat`. Under Euclidean output and Frobenius matrix-input norms,

`eta_b=Kd`, `eta_A=Kd||xhat||+K^2 rho`.

Indeed `B H xhat-A^-1 Hx=(B-A^-1)H xhat+A^-1 H(xhat-x)`. Their adjoints are `B^T c` and `-(B^T c)xhat^T`, with the same discrepancy bounds multiplied by ||c||. This includes derivative-evaluation-point error explicitly through rho. An input perturbation of A,b requires certification against the exact point A,b, or additional displayed primal perturbation bounds, not a silent identification of the points.

For actual rounded evaluation of these fixed pullbacks with length-n sequential dot products, put `t=gamma_n||B||_F`. Then computed lambda has error relative to B^T c at most `t||c||`. Rounded outer products add at most `u(||B||_2+t)||xhat||||c||`. Thus the local cotangent action errors relative to exact mathematical pullbacks are at most

`[eta_b+t]||c||` and `[eta_A+(t+u(M+t))||xhat||]||c||`.

For each realized nonzero cotangent c, an error vector z can be represented by the fixed linear correction `z c^T/||c||^2` of norm ||z||/||c|| (vectorize the matrix cotangent on the A edge); c=0 produces exactly zero under successful arithmetic. This converts realized action bounds into admissible local linear-map discrepancies for the conditional pathwise theorem. It does not assert linearity of floating rounding as a function of all possible cotangents. Reverse accumulation additions remain excluded, exactly as in the existing theorem.

Certificates can use triangular, computed Cholesky, or full-rank square QR solve outputs. The rounded triangular lemma above supplies row-residual bounds for both primal and basis-column solves. Cholesky supplies its factor residual and its two triangular solves; QR supplies its factor residual plus projection and triangular residuals. In every case measuring/bounding I-AB and b-Axhat independently is already sufficient, so no unproved factorization-derivative stability inference is required. Conditioning is explicit through d<1 and K. Replay must preserve the same stored xhat and B; any changed tape requires recertification.

For explicit factor-output primitive AD, expand the finite successful strict-branch factorization loop into its scalar C1 operations and supply elementary derivative coefficient bounds at certified primal enclosures. The above solve theorem does not claim such a factor-output derivative. No actual carrier or approved named example currently needs a Cholesky/QR factor-output derivative; adding a universal guarantee for every unspecified opaque factor-output primitive would be new scope.

## Required consumer closure and repair order

1. Complete the Householder algorithm and local proof first; then its global theorem; then computed LS and every current dependency-graph descendant of these suppliers. Preserve the published conditional aggregator's correct A1 contract.
2. Add the rounded triangular row lemma on the existing NA-02 A page and use it in computed LS.
3. Add the certified solve-Jacobian/pullback lemma on the same A page or DIF2 A page according to canonical ownership. Replace the stale rounded-execution remark with concrete bounds and hypotheses above; retain the exact-real warning and exact-accumulation exclusion.
4. The exact-real implicit example remains valid; extend its Verification with a certified rounded evaluation using this lemma if a concrete rounded numerical instance is desired. Graph-gradient propagation theorem statement/proof need no mathematical change.
5. Same owner must review the entire actual reverse-dependency closure and named planned interface consumers after batch-1/batch-13 drain; do not assign separate read-only consumer reviewers. Root owns synchronized manifests, evidence hashes and recertification. Max two focused review/repair cycles.

No established result here is an open problem. The false local constant needs correction; the rest are explicit local authoring obligations with proofs above.

## Batch-17 actual complex/two-sided consumer obligations

Read actual `alg-householder-bidiagonalization`, `alg-implicit-shifted-bidiagonal-qr-with-deflation`, `lem-implicit-bidiagonal-qr-bulge-chase-unitary-equivalence`, `thm-bidiagonal-svd-backward-error-under-local-stability`, its absolute-error corollary, and the published exact Givens definition/theorem. Batch 17 accepts both real and complex matrices. Its existing local A1 is mathematically sound as a conditional aggregation premise, but does not fulfill the assigned implementation-stability obligation. Real NA-02 QR cannot silently discharge it. Proposed placement is local intermediate arithmetic lemmas on the existing LIN-SVD A page, reusing the NA-02 operationwise model and real local lemma, rather than a new page or duplicate global SVD method.

The exact current formula guard needing surgical correction is in the SVD theorem Statement: `where $L_j,R_j$ are unitary and $\\eta_j\\ge0; $\\|E_j\\|_F...`. Close the eta formula and reopen the norm formula. Its mathematical aggregation proof remains valid.

### Complex Householder formation and two-sided update

Specify the finite-precision implementation instead of saying only “declared arithmetic.” Use real component scaling `s=max_i(max(|Re x_i|,|Im x_i|))`; compute the 2r scaled real components, their sequential sum of rounded squares, square root and final rescaling. For x1 nonzero compute its modulus by its own two-real-component scaled norm and then divide its two components to obtain phase phi_hat; for x1=0 use phase 1. Compute alpha_hat=-fl(phi_hat rhat), v=fl(x-alpha_hat e1), w by sequential sum of the 2r real squares of v, tau_hat=fl(2/w). Apply d=fl(v* B), p=fl(tau_hat v), U=fl(p d), then fl(B-U), with six-real-operation complex products as in NA-02; overwrite the target column by alpha_hat e1 and record exact zero writes. Require every nonzero exact intermediate normal; invalid/nonpositive w or modulus estimates return range-failure. Zero x uses identity. For a right update use the conjugate-transposed instructions.

Here are fully explicit conservative constants, valid for 0<u<1 and (r-1)u<1. The complex norm calculation has relative error at most `e=(1+u)^(r+3)-1` (2r component-square terms). The separately scaled two-component modulus has relative factor between `(1-u)^4` and `(1+u)^4`, so

`a_phi=(1+u)/(1-u)^4-1`,

`a_alpha=(1+a_phi)(1+e)(1+u)-1`,

`d_v=a_alpha+u(2+a_alpha)`.

Thus `|alpha_hat-alpha0|<=a_alpha||x||`, `||v-v0||<=d_v||x||`, where alpha0=-phase(x1)||x|| and v0=x-alpha0 e1. The same unit-vector normalization argument above gives reflector difference at most 8d_v and target-column error at most `(a_alpha+8d_v)||x||`.

Since w is a sum of positive real squares, its exact coefficient bounds use 2r factors. Put

`a_tau=(1+u)/(1-u)^(2r)-1`,

`g_dot=(1+6u)/(1-(r-1)u)-1`,

`c_U=2[(1+a_tau)(1+u)(1+6u)(1+g_dot)-1]`,

`kappa_complex(r)=max(a_alpha+8d_v, (1+u)c_U+3u)`.

The six-operation complex multiplication error is at most 6u|z||w|; expanding the r-term complex dot product componentwise and applying the triangle inequality gives g_dot as above (r-1 rounded additions). The real coefficient/vector product costs factor 1+u and the final complex product factor 1+6u. Exactly the real argument then gives `||Cplus-H(v)C||_F<=kappa_complex(r)||C||_F`; choose E=H(v)Cplus-C. Every coefficient is explicit, finite, monotone in r, and O(r u) for fixed r as u tends to zero. This supplies the missing complex and right-side reflectors without claiming that a real-only lemma already did so.

### Scaled real/complex Givens formation and update

Use the canonical complex form T=[[c,s],[-conj(s),c]] with c real nonnegative. This keeps the published definition unchanged. For target pair (a,b), both zero uses identity; b=0 may also use identity. Otherwise scale the four real components by their largest magnitude lambda and compute z=fl(a/lambda), w=fl(b/lambda). Let h be the rounded norm of the four components of (z,w), formed by sum of squares and square root, without rescaling. If z is nonzero, compute its two-component norm n_z similarly, phi=fl(z/n_z), c=fl(n_z/h), s=fl(fl(phi conj(w))/h). If z=0 take c=0 and s=fl(conj(w)/h). The scalar divisions of complex values round real components separately. Reject zero/nonpositive norm intermediates and all range failures. This is a fully specified stable evaluation of the existing canonical Givens method, not a new factorization algorithm.

For exact stored z,w, define their canonical exact G0 annihilating (z,w), choosing first output phase z/|z| when z is nonzero. The four-component norm h differs from ||(z,w)|| by multiplicative factors between `(1-u)^3` and `(1+u)^3`; the two-component n_z similarly has exponent 2. Put

`a_2=(1+u)/(1-u)^2-1`,

`q=max(((1+u)/(1-u))^3-1, (1+a_2)(1+6u)(1+u)/(1-u)^3-1)`.

Then `|c-c0|<=q c0` and `|s-s0|<=q|s0|`. The c estimate follows from its norm numerator/denominator and division errors. For s, first bound `|phi-z/|z||<=a_2`, then the complex product error 6u, the h denominator and componentwise division; their displayed upper product minus one bounds the sum of those errors. In the z=0 branch the simpler coefficient bound `(1+u)/(1-u)^3-1<=q` applies. Therefore `||(c,s)-(c0,s0)||<=q`.

Set t=sqrt(c^2+|s|^2)>0 exactly and Q=T/t. Q has precisely the published canonical unitary form. Since `T* T=t^2 I`, `||T-Q||_2=|t-1|<=q`, `||T||_2=t<=1+q`, and `||Q-G0||_2<=2q` by normalized-vector comparison. Rounded multiplication of a complex matrix by T on two rows has error at most

`epsilon_app=sqrt(2)(7u+6u^2)(1+q)`

times the Frobenius norm of those rows: each entry uses two complex products (errors <=6u times their absolute products) and one componentwise rounded addition (factor u). The nonnegative absolute 2-by-2 coefficient matrix has norm at most sqrt(2)t. Consequently the raw updated block differs from QC by at most `v=q+epsilon_app` times ||C||_F.

If the pair being annihilated is an actual target column, scaling rounded it by relative component errors bounded by u, so its residual under G0 is at most u||(a,b)||. The residual under Q is at most `(u+2q)||(a,b)||`. Overwriting the computed target entry by zero therefore adds at most `(u+2q+v)||(a,b)||`. Thus the complete update including exact zeroing obeys

`||Cplus-QC||_F <= [2v+u+2q]||C||_F`.

The coefficient is explicit and O(u), covers real and complex values and all zero branches, and is unchanged for right updates by conjugate transposition. For the initial shift-vector rotation, the shift vector is not itself a column of B; do not zero an unrelated B entry. Use only v for that initial application. In later chase rotations, apply the zero-overwrite bound to the actual bulge target. Any additional sparsity cleanup must be explicitly recorded as discarded entries, rather than silently suppressed.

These local bounds instantiate eta_j in the existing SVD aggregator for every real/complex left/right Householder and Givens update. Deflation discards retain their separate delta_j term. Define theoretical accumulated factors as exact products of unitary representatives; rounded displayed U,V retain separate orthogonality/reconstruction reports and must not be called exactly unitary. The absolute singular-value corollary applies to the exactly transformed nearby matrix once the actual final off-diagonal residual is included as an additional E (if the stored matrix is exactly diagonal, this residual vanishes). Forming shifts with rounding does not alter the arithmetic backward bound of whatever unitary rotations are chosen, and is no convergence theorem.

Batch-17 supplier/consumer changes require another actual closure check after its active author drains. No active batch-17 file was edited.

## Batch-18 Tikhonov consumers: completed residual and computed-output interface

Read the actual four escalated carriers: `thm-tikhonov-error-chain-with-discretization-and-residual`, `cor-l2-inverse-error-budget-and-cross-term-condition`, `ex-tikhonov-bias-noise-tradeoff`, and `ex-quadrature-discretization-residual-before-inversion`, including their full statements/proofs and exact Step-1 reasons. Also read the shifted-normal-operator invertibility lemma. The analytic chain and all three immediate consumers' existing local arguments are sound. The main theorem's final remark explicitly records a missing certified arithmetic bridge, and needs replacement once the following local lemma is integrated.

For finite stored real/complex A in F^(m by n), stored datum y, stored returned x, and positive stored real lambda, define the exact intended residual `r=A*(Ax-y)+lambda x`. Let all following operations succeed in the operationwise NA-02 model, with sequential rounded dot products and componentwise real multiplication for lambda x:

`vhat=fl(Ax)`, `what=fl(vhat-y)`, `zhat=fl(A* what)`, `lhat=fl(lambda x)`, `rhat=fl(zhat+lhat)`.

Use exact norms, or certified upper bounds on those norms, throughout the certificate. Set F=||A||_F, X=||x||, Y=||y|| and

`g_k=(1+6u)/(1-(k-1)u)-1`, valid for (k-1)u<1,

`V=g_n F X`, `W=V+u(||vhat||+Y)`.

Then a certified residual-evaluation allowance is

`rho = F W + g_m F ||what|| + u lambda X + u(||zhat||+||lhat||)`.

Proof: rowwise complex dot expansion gives `||vhat-Ax||<=V`. Subtraction gives `||what-(Ax-y)||<=W`. The second matvec differs from A*what by at most g_m F||what||; transporting the first error through A* adds FW. The scalar product has error at most u lambda X, and final addition adds at most u(||zhat||+||lhat||). Triangle inequality gives `||rhat-r||<=rho`. Empty dimensions can be excluded or handled as exact empty sums; the named inverse problems have positive finite dimensions. Real inputs obey the same conservative bound. This is independent of how x was computed, so cannot confuse factorization residual with solution residual.

The normal matrix is positive definite with inverse norm <=1/lambda, so for the exact finite Tikhonov minimizer x_lambda,

`||x_lambda-x|| <= (||rhat||+rho)/lambda`.

Thus the existing chain can take rho_h=rho with y=y_delta, or rho_(h,h)=rho with y=y_(h,delta), and includes the actual returned output. For a direct algorithm whose exact arithmetic target is x_stop=x_lambda, this is the required returned-output roundoff allowance. For a different finite-iteration x_stop, retain the existing separate stopping residual and output difference; do not label the direct-solve residual bound as the iteration's roundoff alone. For the L2 corollary apply these measurable realization-wise bounds and retain its integrability hypotheses and cross terms.

### Concrete augmented QR path and square-root representation

Define alpha=fl(sqrt(lambda)) under the positive normal correctly-rounded square-root model, and solve the full-column-rank augmented least-squares problem with stored matrix C_alpha=[A; alpha I] and datum (y,0) using completed Householder QR and rounded triangular substitution. This is a composition of the canonical algorithms; it is not an additional numerical-SVD or factorization method. Every nonzero intermediate must remain normal, failed pivots/divisions or invalid operations return range-failure, and a computed rank/singularity certificate is retained rather than assuming success from exact rank.

C_alpha has sigma_min >=alpha>0. For a QR perturbation bound epsilon_Q=beta_Q||C_alpha||_F, the sufficient condition epsilon_Q<alpha proves that its exact triangular R is nonsingular with sigma_min(R)>=alpha-epsilon_Q. If also `||DeltaR||_2<alpha-epsilon_Q`, the nearby solved triangular matrix is nonsingular and the full computed-LS theorem applies. Its already stated explicit nonsingularity check can instead be used directly. Rounding alpha does not silently change lambda: `|alpha^2-lambda| <=(2u+u^2)lambda`. If residual evaluation uses alpha^2 instead of the intended lambda, add `|alpha^2-lambda| X` to rho, and include rounding in evaluating alpha^2 separately. Evaluating r with the stored intended lambda as above automatically includes all square-root and solve discrepancies in the measured residual.

For complex A and y, apply the completed real QR backend to the realification `A_R=[[Re A,-Im A],[Im A,Re A]]`, `y_R=(Re y,Im y)`, augmented by alpha I_(2n). Map the real solution vector back to complex x. This is exactly the same real/complex least-squares objective and preserves vector Euclidean norms; ||A_R||_2=||A||_2 and ||A_R||_F=sqrt(2)||A||_F. Thus the real rounded triangular solve lemma is sufficient for this concrete complex backend and no unmodeled complex division is imported. The residual certificate above is still evaluated for the original complex data and intended lambda.

The actual reverse-dependency closure is exactly the three named consumers. Their exact mathematical examples and L2 cross-term proof require no weakening. The theorem gets the concrete finite-matrix arithmetic application and its stale unresolved remark replaced; its Hilbert-space analytic hypotheses and full error chain remain unchanged.

## Planned revised-simplex backend observation

The actual active batch-26 cross-batch record additionally requests arbitrary nonsingular basis solves and recomputation/residual checks; Cholesky's positive-definite restriction cannot supply them. The completed real QR plus triangular solve already supplies nonsingular square basis solves, including transpose solves by reversing the factor order. Recompute QR on each basis change, as the approved OPT13 scope permits, rather than adding a duplicate LU/update method. The same certified linear residual pattern `rhat=fl(Basis*x-b)` with rho from matvec and subtraction gives verified primal/dual residuals. Finite-precision pivot tolerances, ratio safety and termination statuses remain OPT13 authoring obligations and must not be inferred from solve residuals. No active batch-26 carrier was edited.


## Applied focused repair cycle 2

Root authorized source repairs after batch1,13 drain; actual Tikhonov owner is batch25 (not batch18), verified drained before edits. Batch17 subsequently drained and its guarded real/complex arithmetic repairs were applied. Batch18 manifests/pages/contracts were never edited. Complete pre-repair files are archived in the `owner-rounded-derivative-escalation-before-repair` tree; the Tikhonov main carrier's earlier exact raw preimage is also preserved separately. No published conditional QR theorem or shared floating model was edited.

Changed IDs are recorded in `owner-rounded-derivative-changed-items.json`. Source-before-consumer sequence: real HH local and global QR; rounded triangular substitution and certified residuals; computed LS including actual stored-reflector right-hand-side application; AD derivative/pullback and concrete example; complex two-sided HH/Givens and concrete SVD aggregation/readout; finite-coordinate augmented Tikhonov application and Hilbert chain.

Same-owner unchanged consumer checks: the two NA02 B examples remain exact valid illustrations under the completed solver hypotheses; exact bidiagonal reduction and exact bulge-chase lemmas retain their original exact arithmetic targets; thresholded SVD least squares retains its exact-SVD and unverified finite-candidate distinction; the Tikhonov L2 cross-term corollary and two exact scalar examples remain valid with the richer certified arithmetic supplier. RRQR was reviewed by its assigned owner with no carrier changes; no RRQR carrier was touched here.

Guarded external consumer: `thm-computed-pseudospectrum-membership-enclosure` (not yet registered in a manifest) was read in full. Its interval inference remains valid, but A1 still says the SVD nonzero local proof is open. Root verified its expected batch33 author remains active; do not edit its carrier or metadata. After drain, replace only that stale sentence with the now-proved local arithmetic and rounded readout hypotheses; preserve the certified absolute-error premise and inside/outside inequalities. This pending context refresh is owned by root and is not hidden as resolved.

No source retrieval/read claim, readiness record, canonical plan, runtime transition, hash recertification, acceptance stamp, gate, or commit was created. Required final proof-layout output is recorded separately. Root owns remaining levels, metadata/final checks and readiness.
