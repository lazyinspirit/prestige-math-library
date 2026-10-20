# Local deterministic height proof and barrier assembly

Research proposal only, 2026-10-20. Same distinct domination issue, cycle 1. No active supplier or review credit is asserted by this document. This is an independently derived local proof of the height/decay part; the separately authored normalized Bellman construction must supply the interface below before this becomes an unconditional theorem.

## Input interface, to be supplied by the normalized Bellman construction

Fix dimension d>=1 and f>=0 smooth with compact support on R x R^d. There is a bounded nonnegative Lipschitz function v, with bounded weak derivatives v_t,Dv,D²_xv, satisfying almost everywhere

 sup_{A>=0, tr A<=1} {r v_t + A:D²v - v + (r det A)^(1/(d+1)) f}=0,  r=1-tr A.

The construction also supplies comparison: v is at most each bounded nonnegative smooth function U satisfying every linear expression inside this supremum <=0. Only this precise comparison interface is used below. The finite-dimensional determinant algebra already proved in completed-reductions-and-exact-gap.md gives

 S=v-v_t>=0, H=vI-D²v>=0, S det H=(f/(d+1))^(d+1).

Conversely the equality plus positivity gives the displayed Bellman equation, including degenerate matrices, by approximation in the arithmetic-geometric mean inequality. Rank-one controls give H>=0; A=0 gives S>=0. All these weak derivatives are represented by bounded measurable functions.

## 1. Explicit comparison functions give the necessary decay and future cutoff

Let rho(x)=sqrt(1+|x|²), eta=1/4 and U(x)=C exp(-eta rho(x)). Direct differentiation gives

 D²U=U(eta² D rho tensor D rho - eta D²rho)<=eta² U I.

Thus U I-D²U >=(1-eta²) U I. For any normalized A,r, the linear expression for U is at most

 -[r+(1-eta²)tr A]U+(r det A)^(1/(d+1))f
 <=-(1-eta²)U+f/(d+1).

Here AM-GM on r and the d eigenvalues of A gives (r det A)^(1/(d+1))<=1/(d+1). Because f has fixed compact spatial support, choose finite C so that (1-eta²)U>=sup_t f(t,x)/(d+1) on that support. The expression is <=0 everywhere, including outside the support. Comparison proves v(t,x)<=C exp(-eta rho(x)), uniformly in t. This replaces the book's radial sech calculation and requires no external comparison theorem beyond the explicit construction interface.

For the time cutoff let F(t)=sup_x f(t,x), supported in [a,b], and M=sup F. Choose a nonnegative smooth g with compact support in time, g>=F, and with

 U(t)=integral_t^infinity exp(t-s)g(s)ds >= M

for every t in [a,b]. Such a g is explicit: first dominate F by a compact smooth majorant, then add a sufficiently large smooth bump supported in (b+1,b+2). The bump's convolution is bounded below by a positive multiple of its amplitude on [a,b]. Thus U>=F everywhere (outside [a,b], F=0). Since U_t=U-g, each normalized expression is

 -r g-(1-r)U+(r det A)^(1/(d+1))f
 <=-min(g,U)+f/(d+1)<=0.

Comparison gives v<=U; consequently v=0 after the right endpoint of supp g. This does not impose any initial-law or coefficient condition.

## 2. Elementary determinant identities and their matrix signs

For a symmetric matrix B define c_m(B)=(-1)^m e_m(B), where e_m is the sum of principal minors of order m, c_0=1. Let C_m(B) be the matrix differential of c_m, defined by dc_m(B)[E]=C_m(B):E for symmetric E. Then

 det(zI-B)=sum_{m=0}^d z^(d-m)c_m(B),
 C_m(B):B=m c_m(B).

If B<=0, then C_m(B)<=0 for m>=1: each c_m is a principal minor of -B and its derivative in B is minus the corresponding embedded cofactor matrix of -B. These cofactor matrices are positive semidefinite, including singular cases by continuity.

For smooth w the rows and columns of C_m(D²w) have zero divergence. A direct proof expands each minor as a signed sum over permutations. Differentiating one Hessian entry and summing over its row index pairs every resulting third-derivative term with the term obtained by transposing that row with the row of the differentiated entry. Their permutation signs are opposite, and their third derivatives coincide by equality of mixed derivatives. Diagonal one-entry minors have constant derivatives, so their divergence is zero directly. Summing principal minors proves the identity for every m. This is a polynomial identity; no invertibility is used.

Translation of the determinant polynomial and differentiation in B give, when h>=0,

 C_m(B)=sum_{k=1}^m (-1)^(m-k) binom(d-k,m-k) h^(m-k) C_k(B-hI).

To verify the coefficient, expand det(zI-B)=det((z-h)I-(B-hI)) and compare coefficients of z^(d-m), then differentiate at fixed h. Thus for weights w_m,

 sum_{m=1}^d w_m h^(d-m)C_m(B)
 =sum_{k=1}^d beta_k h^(d-k)C_k(B-hI),
 beta_k=sum_{j=0}^{d-k}(-1)^j binom(d-k,j)w_{k+j}.

If hI-B>=0 and all beta_k>=0, the matrix sum is negative semidefinite. We need only two sequences, with p=d+2:

 a_m=(p-m-1)/(m+1)=p/(m+1)-1,
 b_m=1/[m(m+1)].

For n=d-k>=1, the alternating difference of a is p integral_0^1 t^k(1-t)^n dt>=0; for n=0 it is a_d=(p-d-1)/(d+1)>0. For b the corresponding difference is integral_0^1 t^(k-1)(1-t)^(n+1)dt>=0. These integral formulas prove all required matrix signs without any moment representation theorem. The coefficient in a is p-m-1, not the inconsistent p-m+1 appearing in one OCR display of the source.

## 3. Smooth height estimate, with full integration by parts

Let u>=0 be smooth, uI-D²u>=0, u-u_t>=0, u=0 for t>=T, and let u, u_t and all derivatives used below decay exponentially in x; bounded spatial and mixed derivatives suffice in conjunction with that decay after compactly supported convolution. Fix finite a<=t. Put w(s,x)=exp(-s)u(s,x), so w_t<=0 and wI-D²w>=0. Set p=d+2 and

 A_m=-integral_t^T integral_Rd w^(p-m-1)c_m(D²w) w_s dx ds,
 A=sum_m A_m=integral_t^T integral_Rd w^(p-d-1)(-w_s)det(wI-D²w) dx ds.

Temporal integration by parts, followed by two spatial integrations by parts, gives

 (m+1)A_m = (p-m)^(-1) integral_Rd w(t)^(p-m)c_m(D²w(t))dx
  +(p-m-1) integral_t^T integral_Rd w^(p-m-2) w_s [C_m(D²w)Dw] dot Dw dx ds.

Indeed the derivative of c_m is C_m:D²w_s; the divergence-free identity removes derivatives of C_m in the two spatial integrations, and Euler's identity yields the term -m A_m. No powers are singular since p=d+2. First perform the computation with spatial cutoffs. Every error vanishes as cutoff radii tend to infinity, since all polynomial derivative factors are bounded, the necessary positive power of w or a decaying derivative remains, and cutoff derivatives are bounded and supported in annuli. On finite time intervals these bounds are integrable. The same bounds justify Fubini.

Summing in m, the last integral is nonnegative: its matrix coefficient is w^(p-d-2) sum_m a_m w^(d-m) C_m, which is negative semidefinite by Section 2, while w_s<=0. Therefore

 A>=sum_m [(p-m)(m+1)]^(-1) integral_Rd w(t)^(p-m)c_m(D²w(t))dx.

For m>=1 use c_m=m^(-1)C_m:D²w and integrate once in space. Their total is

 -integral_Rd w^(p-d-1) [sum_{m=1}^d b_m w^(d-m)C_m(D²w)Dw] dot Dw dx >=0.

The m=0 term is p^(-1) integral w(t)^p. It follows that

 p exp(pt) integral_t^T exp(-ps) integral_Rd u^(p-d-1)(u-u_s)det(uI-D²u)dx ds >= integral_Rd u(t,x)^p dx.

The one-dimensional comparison along lines for D²u<=uI and u>=0 gives u(t,x)>=u(t,y)exp(-|x-y|). For completeness, compare the restriction to a line with solutions of z''=z on [-R,R], use its nonnegative endpoint values, and let R grow to infinity to obtain this inequality. Integrating its pth power in x yields

 integral_Rd u(t,x)^p dx >= kappa_d d! p^(-d)u(t,y)^p.

This completes the smooth estimate using only elementary determinant algebra, integration by parts and a one-dimensional ODE comparison.

## 4. Pass the estimate to the weak Bellman solution

Convolve v with a nonnegative compactly supported smooth unit-integral spacetime kernel of radius epsilon. Write v_epsilon. Positivity and all linear inequalities are preserved, so S_epsilon=v_epsilon-(v_epsilon)_t>=0 and H_epsilon=v_epsilon I-D²v_epsilon>=0. Each derivative is smooth and spatially exponentially decaying for fixed epsilon; v_epsilon vanishes at all sufficiently large future times. All hypotheses of Section 3 hold. At almost every spacetime point, the weak derivative Lebesgue differentiation theorem gives

 S_epsilon det H_epsilon -> S det H=(f/(d+1))^(d+1).

For any fixed finite a, the integration region [a,T+1] has bounded time length. The weak derivatives and v are globally bounded, uniformly also after convolution; v_epsilon has exponential spatial decay uniformly for epsilon<=1. Because p-d-1=1, the integrand v_epsilon^(p-d-1) S_epsilon det H_epsilon is dominated by a constant times an integrable exponential in x. This is the exact domination needed here. DCT applies on that finite time interval. Moreover v_epsilon(t,y)->v(t,y) for every (t,y), since v is Lipschitz. Thus, writing c_d=kappa_d d! p^(-d),

 c_d v(t,y)^p <= p(d+1)^(-d-1) integral_t^infinity exp(-p(s-t)) integral_Rd v(s,x)^(p-d-1) f(s,x)^(d+1) dx ds.

Let V_a=sup_{s>=a,x}v(s,x)<infinity. For every t>=a the right side is at most p(d+1)^(-d-1)V_a^(p-d-1)||f||_(d+1)^(d+1). Taking the supremum gives

 c_d V_a^p <= p(d+1)^(-d-1)V_a^(p-d-1)||f||_(d+1)^(d+1).

If V_a=0 the desired estimate is immediate; otherwise division yields

 V_a <= [p/(c_d(d+1)^(d+1))]^(1/(d+1)) ||f||_(d+1).

The constant is independent of a, hence this bounds v everywhere. This argument avoids the source's Volterra iteration, global spacetime Minkowski inequality, and endpoint exponent limiting argument. It does not change the barrier or reversal claims.

## 5. Result supplied to the occupation proof

The interface plus Sections 1–4 yields the fully quantitative reduced barrier: for every f>=0 smooth compactly supported, a bounded nonnegative v with bounded weak v_t,Dv,D²v and

 v_t+A:D²v-(1+tr A)v+(det A)^(1/(d+1))f<=0 for every A>=0,
 |Dv|<=v,  sup v<=C_d||f||_(d+1).

The first inequality follows by positive rescaling of the normalized controls with r=1/(1+tr A). The gradient inequality follows from the same one-dimensional comparison, after convolution and passage to weak derivatives. The complete stopped-Ito/mollification/measure argument is separately proved in analytic-supplier-authoring/completed-reductions-and-exact-gap.md and the earlier reduced-barrier-to-occupation.md. This document supplies the previous height/decay gap conditional only on the explicitly isolated Bellman construction, not on an unproved Monge-Ampere existence theorem.

## Actual primary source reading and provenance

Genuinely read the complete publicly offered OCR of N. V. Krylov, Sobolev and Viscosity Solutions for Fully Nonlinear Elliptic and Parabolic Equations, AMS Mathematical Surveys and Monographs 233 (2018), DOI 10.1090/surv/233, Section 2.1 printed pp15–20 and Theorem 2.2.4/proof printed pp26–29 on 2026-10-20. Access was ordinary public HTML at the Scribd document URL recorded in access-record.json, with no authentication or restriction bypass. The author/title/volume and theorem formulas agree with the authoritative 2020 paper's quoted supplier. This is author text on a third-party host; no claim of publisher-host authentication or mathematical reading of the whole book is made. The proof above is independently written, specialized to lambda=1, p=d+2, and replaces the source's decay and final height steps. No extensive source text is reproduced.
