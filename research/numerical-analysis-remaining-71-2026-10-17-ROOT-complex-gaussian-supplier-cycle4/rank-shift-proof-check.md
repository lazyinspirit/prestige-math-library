# Complete complex expected-error alternative: independent aggregate check

This research proof closes the mathematical supplier obligation without asserting the previously missing sharp complex Chevet inequality. It independently checks the Gaussian assembly owner's finite-moment/rank-shift construction. Native authoring and actual item integration remain root-owned.

Write ell=k+p, s=sigma_(k+1), F²=sum_(i>k)sigma_i². All matrices are finite; complex Gaussians are normalized with E|g|²=1. The original parameters k,p>=2 and ell<=min(m,n) are retained. The completed current Gaussian law/invariance, full-row-rank and inverse-diagonal Gamma lemmas supply every random-matrix input below. Countable Choice is inherited exactly as in those actual canonical items.

## 1. Exact unweighted finite moments

Let Omega_1 be k-by-ell Gaussian, Omega_2 independently j-by-ell Gaussian, j>=1, and Z=Omega_2 Omega_1^dagger. Put M=(Omega_1 Omega_1*)^-1. For fixed Omega_1, each row of Z is complex Gaussian with covariance M. Equivalently it has the law g M^(1/2), with g a normalized complex k-row, independent of M. This follows by a deterministic orthonormal change of coordinates for the fixed linear map Omega_1^dagger, using its identity (Omega_1^dagger)*Omega_1^dagger=M; no random basis selection or matrix-t density is needed.

For each fixed nonzero g, unitary invariance of M gives

E_M(g M g*)^q=||g||^(2q) E M_11^q.

The established inverse-diagonal Gamma law and Gaussian squared-norm Gamma law give, for every integer1<=q<=p,

E M_11^q=Gamma(p+1-q)/Gamma(p+1)=1/p_down_q,

E||g||^(2q)=(k)_q,

where (a)_q=product_(i=0)^(q-1)(a+i) and p_down_q=product_(i=0)^(q-1)(p-i). Thus for every fixed unit v in C^j,

E(v*ZZ*v)^q=(k)_q/p_down_q.

For each fixed positive B=ZZ*, choose a unit top eigenvector u pointwise. Then (v*Bv)^q>=||B||op^q |v*u|^(2q). Complex-sphere averaging gives E_v|v*u|^(2q)=q!/(j)_q, by the already-established sphere coordinate moments. Tonelli and row-unitary invariance therefore imply

E||Z||op^(2q) <= (j)_q(k)_q/[q! p_down_q].

Finite-q Jensen, in the correct direction, yields

E||Z||op² <= [(j)_q(k)_q/(q! p_down_q)]^(1/q).                 (1)

No passage q to infinity is used. All used moments have q<=p<p+1 and are integrable.

## 2. Two affine bounds, including arbitrary tail weights

AM--GM gives (a)_q^(1/q)<=a+(q-1)/2, and q!>=(q/e)^q follows by integrating log x. For q=p, (1) gives

E||Z||op² <= e² ell/p² [j+p/2].                             (2)

For q=ceil(p/2), pair the factors in p_down_q. Every paired product is at least p(p-q+1), so

p_down_q^(1/q)>=sqrt[p(p-q+1)]>=p/sqrt2.

Also q>=p/2 and (q-1)/2<=p/4. Thus (1), with C=2sqrt2 e, gives

E||Z||op² <= C ell/p² [j+p/4].                              (3)

Both bounds hold also at j=0 with left side0. Their convenient constants are deliberately not sharp.

To pass from unweighted row subsets to arbitrary singular weights, let Z have n-k rows and define

f(w)=E lambda_max[Z* diag(w) Z],  0<=w_i<=1.

This is finite (by the exact inverse Frobenius second moment), convex in w, and symmetric under coordinate permutations by row exchangeability. If sum w_i=r=j+t with integer j and0<=t<1, the polytope of such w has extreme points equal to permutations of (1,...,1,t,0,...,0). A finite pairwise mass-transfer decomposition proves this directly: whenever two coordinates are fractional, move them in opposite directions to the two endpoints and express the initial point as a convex combination; each branch reduces the number of fractional coordinates. Convexity and symmetry bound f(w) by the value at that extreme pattern. A final convex interpolation in t gives

f(w)<=(1-t)f(1_j)+t f(1_(j+1)) when t>0. If t=0, use simply f(w)<=f(1_j); in particular when j is the full row count no out-of-range j+1 expression is formed.

Consequently any bound A(j+B) valid for integer j>=0 yields f(w)<=A(r+B). Apply (2),(3) with w_i=sigma_(k+i)²/s². If s=0, the tail vanishes and exact recovery already proves the desired result. Otherwise r=F²/s², and we obtain

E||Sigma_2 Omega_2 Omega_1^dagger||op²
 <= e² ell/p² [F²+(p/2)s²],                                (4)

E||Sigma_2 Omega_2 Omega_1^dagger||op²
 <= C ell/p² [F²+(p/4)s²].                                 (5)

No ceil-rank loss and no assumption on the number of small singular values occurs.

## 3. The same sketch admits every deterministic analysis rank

The completed deterministic partition proof actually gives its squared form

R²:=||(I-P)A||op² <= s²+||Sigma_2 Omega_2 Omega_1^dagger||op². (6)

Indeed the lower residual block is [-Sigma_2 Omega_2 Omega_1^dagger, Sigma_2]; the square of its operator norm is at most the sum of the two squared block norms. This is the same argument as the current partition item, not a new assumption on A. The construction uses no inverse of the leading singular-value block.

The sketch has ell columns throughout. For any integer0<=h<=p-2, it may instead be analyzed at k'=k+h,p'=p-h; (4)--(6) apply with those parameters. The sampled range and projector P do not change. Full row rank for the alternate top block holds almost surely under the same Gaussian law, and only finitely many analysis ranks are used. Write s'=sigma_(k+h+1), F'²=sum_(i>k+h)sigma_i². Then

s'²<=F²/(h+1),  F'²<=F².                                   (7)

## 4. Uniform constants and the three cases

Suppose s>0. Set

b=s sqrt(ell/p),  x=F²/(p s²),  C=2sqrt2 e.

The approved right side is at least b(1+e sqrt x). In fact e sqrt(ell)F/p=b e sqrt x, and

1+sqrt[k/(p-1)] >=sqrt[ell/p]

because sqrt(1+k/p)<=1+sqrt(k/p)<=1+sqrt[k/(p-1)].

**Case x>=1.** From (4),(6) and Jensen,

(E R)²/b² <= p/ell+e²x+e²/2 <=1+e²x+e²/2
 <=(1+e sqrt x)²,

since e<4 and sqrt x>=1 imply e²/2<=2e sqrt x.

**Case1/7<=x<=1.** Equations (5),(6) give

(E R)²/b² <=1+C x+C/4.

Putting y=sqrt x, this is at most (1+e y)² precisely when

f(y)=2y-(2sqrt2-e)y²-1/sqrt2 >=0.

On [1/sqrt7,1], f is concave because e<11/4<2sqrt2. Elementary rational bounds

27/10<e<11/4,  7/5<sqrt2<17/12,  sqrt7<8/3

give 0<2sqrt2-e<2/15 and 1/sqrt2<5/7. Hence

f(1/sqrt7)>3/4-2/105-5/7=1/60>0,

f(1)>2-2/15-5/7>0.

Concavity bounds f below by its endpoint chord, proving the entire interval.

**Case0<x<=1/7.** Choose h=floor(p/4), p'=p-h. Then p'>=2, p'>=3p/4, h+1>p/4, and p'/(h+1)<=3 (write p=4h+r,0<=r<=3). Analyze the *same* sketch at k',p', and use (5)--(7). Since ell>=p,

(E R)² <= F²/(h+1) + C ell F²/p'² [1+p'/(4(h+1))]
 <= (ell F²/p²)[4+(28/9)C]
 = b² x K²,

where K²=4+(28/9)C<28. For the final strict bound, sqrt2<99/70 and e<68/25 give C<77/10, hence K²<28. The rational estimates follow by squaring for sqrt2 and the exponential series for e.

Finally sqrt7>21/8 and e>27/10 give sqrt7+e>213/40, whose square exceeds28. Thus K<sqrt7+e. Since sqrt x<=1/sqrt7,

K sqrt x <=1+e sqrt x.

This proves the small-x case. If F=0 then s=0 as well and exact recovery applies, so no omitted x=0 division is needed.

Combining the cases yields, for all the original k,p,A,

E||(I-P)A||op <= (1+sqrt[k/(p-1)])sigma_(k+1)
 + e sqrt(k+p)/p [sum_(i>k)sigma_i²]^(1/2).

This is exactly the held normalized-complex base expectation. The already-completed pointwise power transfer and Jensen applied to B=(AA*)^q A then give the original complex power theorem, with no Gaussian Chevet or inverse-Wishart density prerequisite.

## Integration boundary

The proof preserves all original Statements. The only needed new substantial mathematical inputs are the finite complex matrix-product moment/affine-weight lemmas above; they can be packaged on existing NA08 A before the base expectation. The scalar rank-shift proof can be the complex branch of the existing base theorem or a local intermediate lemma, as root's native authoring chooses. No auxiliary pair or covariance/Wishart-density item is required by this chosen proof. The independent covariance/inverse-recursion construction remains a fully recorded backup, not an additional mandatory frontier expansion.
