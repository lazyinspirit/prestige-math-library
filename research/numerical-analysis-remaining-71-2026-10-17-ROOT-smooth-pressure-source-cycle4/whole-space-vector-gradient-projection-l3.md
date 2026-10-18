# Whole-space vector Helmholtz gradient projection has L3 norm at most 2

Research result for the exact bounded source task. This is a vector-valued operator estimate, not a sum of separately estimated scalar second-order Riesz transforms. It does **not** assert a bounded-domain Neumann projection, a discrete Ritz estimate, or any transfer to the MINI mass-Schur operator.

## Claim and scope

On R^d, d>=1, let P_grad be the Fourier multiplier on vector fields

    Fourier(P_grad F)(xi)=[xi tensor xi/|xi|²] Fourier(F)(xi), xi!=0.

This is the actual whole-space L2-orthogonal gradient projection, equivalently grad Delta^-1 div with the usual Laplacian sign convention. With the pointwise Euclidean vector norm,

    ||P_grad F||L3(R^d;R^d) <= 2||F||L3(R^d;R^d).          (1)

The constant is independent of dimension. The same proof gives the general p*−1 bound using the Hilbert-valued martingale theorem below; the direct local derivation in this note proves the p=3 case needed by the owner. No assertion of optimality of 2 for this particular operator is made.

## Authoritative full source and actual reading

Rodrigo Bañuelos, *The foundational inequalities of D. L. Burkholder and some of their ramifications*, arXiv:1012.4850v2. Full source https://arxiv.org/pdf/1012.4850v2, saved `banuelos2010.pdf` and `.txt`, 99 pp.

Actually inspected §2.1 including Theorem 2.1.1 and its precise Hilbert/ell2-valued continuous-martingale assumptions; the full relevant Burkholder-function proof outline §2.3; and the complete space-time heat-martingale construction/duality/multiplier calculation §3.9. This is not a claim to have read all 99 pages. Theorem 2.1.1 states the p*−1 differential-subordination estimate for Hilbert-valued martingales, not merely scalar ones. Section 3.9 presents the heat projection representation. Its scalar display is not silently rebranded as the desired vector theorem: the vector transposition representation is explicitly checked below.

The source's proof outline specializes notation to two-dimensional martingales; the radial Hessian calculation used here is valid for all finite-dimensional Hilbert spaces and is given explicitly for p=3, so the required vector extension is independently transparent.

## 1. Direct Hilbert-valued martingale inequality at p=3

Let X_t,Y_t take values in R^m and be continuous Brownian martingales on a finite interval with

    dX_t=H_t dB_t,  dY_t=K_t dB_t,
    Y_0=0,
    ||K_t||Frobenius² <= ||H_t||Frobenius².

The nonzero initial value X_0 is permitted. Define a=|x|, b=|y| and

    U(x,y)=(4/3)(b−2a)(a+b)²,
    V(x,y)=b³−8a³.

Then

    U−V=(1/3)(b−2a)²(b+4a)>=0,
    U(x,0)=−(8/3)|x|³<=0.

For a,b>0, take directions h,k in R^m and put t=(x/a) dot h and r=(y/b) dot k. Direct differentiation yields the exact identity

    D²U[(h,k),(h,k)]
      =−8(a+b)(|h|²−|k|²)
       −4(a+b)²/b (|k|²−r²)
       −8a(t+r)².                                       (2)

The last two terms are nonpositive. Sum (2) over the Brownian-noise columns h_j of H and k_j of K. The first terms sum to a nonpositive number by the **Frobenius** contraction hypothesis. No columnwise domination |k_j|<=|h_j| is required.

At y=0 the term −4|x|²|y| in U has a downward cusp; its distributional second derivative contributes a nonpositive measure. At x=0 the remaining radial terms have the requisite limiting second derivatives. Hence the summed Hessian inequality extends distributionally, and convolution with a nonnegative smooth approximate identity preserves it for each fixed pair of column matrices satisfying the Frobenius inequality. Apply Ito to the smoothed U, first stopping the martingales in a bounded ball, and pass the smoothing parameter to zero. The initial term tends to U(X_0,0)<=0; the drift is nonpositive. Removing the stopping by standard localization gives

    E U(X_T,Y_T)<=0,
    E|Y_T|³ <= 8E|X_T|³.                                (3)

For the application below, the martingale integrands are bounded on each finite time interval and X is bounded; Y has finite moments of every fixed order. Thus the smoothing/localization limits are justified by dominated convergence after stopping and uniform moment estimates when removing the stop. Equation (3) gives exactly the constant 2, for arbitrary finite vector dimension.

## 2. The actual vector heat transform uses matrix transposition

Use the heat semigroup H_t=exp(t Delta/2). For F in C_c^infinity(R^d;R^d), let U_F(x,t)=H_t F(x). Write its Jacobian as

    (J U_F)_(ij)=partial_j (U_F)_i.

Fix T>0. For Brownian motion B_t starting at x, define

    X_t=U_F(B_t,T−t),
    Y_t=integral_0^t [J U_F(B_s,T−s)]^T dB_s.

Ito gives dX_t=J U_F(B_t,T−t)dB_t and X_T=F(B_T). Matrix transposition is an isometry in the Frobenius norm:

    ||(J U_F)^T||Frobenius=||J U_F||Frobenius.

Consequently (3) applies with equality of quadratic-variation densities. In particular

    E_x |Y_T|³ <= 8E_x|F(B_T)|³.

Integrate over the starting point x. Lebesgue measure is invariant under Brownian convolution, so

    integral_Rd E_x|Y_T|³ dx <= 8||F||3³.                 (4)

This step treats the complete vector F and its Euclidean norm. There is no dimension-dependent sum of scalar operator norms.

## 3. Check the projected operator and every normalization factor

For G in C_c^infinity(R^d;R^d), define Q_T F weakly by

    (Q_TF,G)=integral_Rd E_x[Y_T dot G(B_T)] dx.

Holder on the joint measure dx times Brownian probability, (4), and invariance of the B_T marginal give

    |(Q_TF,G)| <= 2||F||3 ||G||_(3/2).                   (5)

Thus Q_T is an L3 vector operator with norm at most 2. It can equivalently be defined by conditioning Y_T on the terminal point; the dual definition avoids any hidden issue from using Lebesgue measure as the initial distribution.

The heat martingale for G and Ito covariance give

    (Q_TF,G)
      =integral_0^T integral_Rd (J H_tF)^T : J H_tG dx dt
      =sum_(i,j) integral_0^T integral_Rd
                    partial_i(H_t F_j) partial_j(H_t G_i) dx dt.

Indeed Y has mean zero for each fixed starting point, so the initial value of the G martingale contributes zero. Brownian invariance transfers its intermediate-position integral to ordinary Lebesgue measure.

With the Fourier convention whose derivative multiplier is i xi_j, H_t has multiplier exp(−t|xi|²/2). The two heat factors therefore contribute exp(−t|xi|²), and

    integral_0^T xi_i xi_j exp(−t|xi|²)dt
      =(1−exp(−T|xi|²)) xi_i xi_j/|xi|².

Hence the **whole matrix multiplier**, with no additional factor 2, is

    Q_T=(I−exp(T Delta)) P_grad.                         (6)

This is the exact vector gradient projection in the T→infinity limit.

## 4. Pass to the whole-space projection

For compact smooth F, formula (6) gives Q_TF→P_grad F in L2 by Plancherel and dominated convergence. Along a subsequence it converges almost everywhere. Fatou and the uniform bound (5) yield (1). Density of compact smooth vector fields in L3 extends P_grad to all L3 with the same norm and agrees with its original Fourier definition on L2 intersect L3.

The general p*−1 version follows by replacing section 1 with the source's Theorem 2.1.1; the Frobenius-transpose and Fourier calculations are unchanged. At p=3, p*=3 and p*−1=2, so (1) is the exact verified bound requested.

## 5. Numerical consequence is whole-space only

For the owner's separately proved two-dimensional B bounds, interpolation gives

    ||B||_(L3->L3) <= (3/10)^(2/3)(24/35)^(1/3),
    2||B||_(L3->L3) <= 2[(3/10)²(24/35)]^(1/3) <1.

The last quantity is about 0.790. Thus the particular **whole-space** product P_grad B is a strict L3 contraction whenever B is an operator on that same vector L3 space with those bounds. This note does not construct such a whole-space extension of the bounded-domain MINI operator.

There is no boundary in the proof. Bounded-domain Neumann projections and conforming discrete Ritz/pressure Schur inverses are different operators; boundary correction and discrete approximation estimates remain separate obligations. No bounded-D or discrete transfer, physical Hs stability, or original pressure-error conclusion is asserted. All files remain research-only.
