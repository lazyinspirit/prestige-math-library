---
id: fs-the-distance-from-p-is-smooth-on-m-minus-p
kind: false-statement
title: The distance from p is smooth on m minus p
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-cut-point-and-cut-locus-of-a-point
  - def-cut-time-in-a-unit-tangent-direction
  - def-domain-and-exponential-map-of-a-connection
  - def-quotient-topology
  - def-riemannian-distance-on-a-connected-manifold
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-speed-and-length
  - def-smooth-manifold
  - def-topological-manifold-without-boundary
  - lem-finite-sum-laws
  - lem-integer-part
  - lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision
  - prop-christoffel-formula-for-the-levi-civita-connection
  - prop-coordinate-geodesic-equation
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-continuous-implies-integrable
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - thm-ftc-second-part
  - thm-hopf-rinow
  - thm-monotonicity-of-the-integral
  - thm-path-connected-implies-connected
  - thm-path-lifting-for-covering-maps
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, cut-point and cut-locus definitions, printed p.190 (PDF label P206), lines 7564-7568"
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Proposition 23.3.1, printed p.171 (PDF label P178), lines 9690-9715; its appendix proof is not used"
---

## Statement

Assume the inherited $\mathrm{AC}_\omega$. **False claim:** for every complete,
connected, boundaryless Riemannian manifold $(M,g)$ and every $p\in M$, the
distance function $r_p(q)=d_g(p,q)$ is smooth on $M\setminus\{p\}$. In fact,
it can fail to be differentiable at a cut point distinct from $p$.

## Facts & Assumptions

**Given:** The inherited assumption is $\mathrm{AC}_\omega$. For $m\in\{1,2\}$
and positive periods $L_1,\ldots,L_m$, let
$$
\Lambda=\{(k_1L_1,\ldots,k_mL_m):k_i\in\mathbb Z\},\qquad Q=\mathbb R^m/\Lambda,
$$
with quotient projection $q:\mathbb R^m\to Q$.

[A1] $\mathrm{AC}_\omega$ is the assumed axiom of countable choice
([[def-countable-choice]]).

[F1] The quotient topology makes $V\subseteq Q$ open exactly when
$q^{-1}[V]$ is open in $\mathbb R^m$; equivalence classes define the quotient
set and $q$ is its canonical surjection ([[def-quotient-topology]]).

[F2] A topological $m$-manifold without boundary is Hausdorff, second-countable,
and locally homeomorphic to open subsets of $\mathbb R^m$
([[def-topological-manifold-without-boundary]]); a smooth manifold is such a
space with a maximal smooth atlas ([[def-smooth-manifold]]).

[F3] A Riemannian metric is a smooth positive-definite symmetric two-tensor on
a Hausdorff second-countable smooth manifold ([[def-riemannian-metric-and-riemannian-manifold]]).

[F4] A covering map has an open neighbourhood basis whose preimages are
disjoint unions of sheets, each homeomorphic to that neighbourhood
([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F5] If $X$ is path-connected, then it is connected
([[thm-path-connected-implies-connected]]).

[F6] For every real $u$, there is an integer $k=\lfloor u\rfloor$ with
$k\le u<k+1$ ([[lem-integer-part]]).

[F7] In coordinates, the Levi-Civita symbols are
$$
\Gamma^k{}_{ij}=\tfrac12\sum_\ell g^{k\ell}(\partial_i g_{j\ell}+\partial_j g_{i\ell}-\partial_\ell g_{ij});
$$
constant metric coefficients therefore give zero symbols
([[prop-christoffel-formula-for-the-levi-civita-connection]]).

[F8] In coordinates, a smooth curve is geodesic exactly when
$$
\ddot x^k+\Gamma^k{}_{ij}(x)\dot x^i\dot x^j=0
$$
throughout each chart segment ([[prop-coordinate-geodesic-equation]]).

[F9] Under $\mathrm{AC}_\omega$, every supplied initial tangent vector has a
unique maximal geodesic ([[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]]).

[F10] The exponential domain is
$\mathcal E_p=\{v\in T_pM:1\in I_{p,v}\}$ and
$\exp_p(v)=\gamma_{p,v}(1)$ ([[def-domain-and-exponential-map-of-a-connection]]).

[F11] Assuming $\mathrm{AC}_\omega$, for a nonempty connected boundaryless
Riemannian manifold, metric completeness is equivalent to geodesic completeness
and to $\mathcal E_{p_0}=T_{p_0}M$ for one point $p_0$
([[thm-hopf-rinow]]).

[F12] On a connected Riemannian manifold,
$d_g(p,q)=\inf\{L_g(\alpha):\alpha\text{ is piecewise }C^1\text{ from }p\text{ to }q\}$
([[def-riemannian-distance-on-a-connected-manifold]]).

[F13] The speed is $|\dot\alpha|_g$ and length is the sum of its integrals over
the finitely many smooth pieces ([[def-riemannian-speed-and-length]]).

[F14] Riemannian length is unchanged by admissible finite subdivision
([[lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision]]).

[F15] A path through a covering has a unique lift once its starting point is
specified ([[thm-path-lifting-for-covering-maps]]).

[F16] A continuous real function on a closed interval is Riemann integrable
([[thm-continuous-implies-integrable]]).

[F17] For vectors in an inner-product space,
$|\langle x,y\rangle|\le\|x\|\,\|y\|$
([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F18] If $H'=f$ and $f$ is integrable on $[a,b]$, then
$\int_a^b f=H(b)-H(a)$ ([[thm-ftc-second-part]]).

[F19] Pointwise order of integrable functions implies the same order for their
integrals; in particular $m\le f\le M$ implies
$m(b-a)\le\int_a^b f\le M(b-a)$
([[thm-monotonicity-of-the-integral]]).

[F20] Finite sums preserve termwise inequalities and telescope
([[lem-finite-sum-laws]]).

[F21] The cut time in a unit direction is
$c_p(v)=\sup\{t>0:d_g(p,\exp_p(tv))=t\}$
([[def-cut-time-in-a-unit-tangent-direction]]).

[F22] A finite cut-time endpoint $\exp_p(c_p(v)v)$ is a cut point
([[def-cut-point-and-cut-locus-of-a-point]]).

## Refutation

1.1 For every open $U\subseteq\mathbb R^m$, $q^{-1}(q(U))=\bigcup_{\lambda\in\Lambda}(U+\lambda)$, so [F1] makes $q$ open. For distinct classes $q(x)\ne q(y)$, [F6] attains each $\delta_i=\min_{k\in\mathbb Z}|y_i-x_i+kL_i|$ and $\delta=(\sum_i\delta_i^2)^{1/2}>0$; therefore $q(B(x,r))$ and $q(B(y,r))$ are disjoint open neighborhoods when $0<r<\delta/3$. Since $q$ is open, the images of a countable rational-ball basis of $\mathbb R^m$ give a countable basis of $Q$. Choose $2\varepsilon<\min_iL_i$; $U_x=\prod_i(x_i-\varepsilon,x_i+\varepsilon)$ has pairwise disjoint lattice translates and $q|_{U_x}$ is a homeomorphism onto the open set $q(U_x)$. These charts have translation overlap maps, so $Q$ is a smooth boundaryless manifold with the descended Euclidean metric. Finally, $q^{-1}(q(U_x))=\bigcup_{\lambda\in\Lambda}(U_x+\lambda)$ is a disjoint union of sheets, each mapped homeomorphically onto $q(U_x)$, and the metric is preserved on each sheet; thus $q$ is a covering and a local isometry. [F1, F2, F3, F4, F6, construct]

2.1 The paths $s\mapsto q((1-s)x+sy)$ make $Q$ path-connected and [F5] makes it connected. At $p_0=q(0)$ identify $T_{p_0}Q$ with $\mathbb R^m$. For each $w$, $\gamma_w(t)=q(tw)$ exists for all real $t$; on every periodic chart its coordinates are affine and metric coefficients constant, so [F7] gives $\Gamma=0$ and [F8] makes it a geodesic. Uniqueness [F9] and the exponential definition [F10] give $\exp_{p_0}(w)=q(w)$ for every $w$, so $\mathcal E_{p_0}=T_{p_0}Q$. This nonempty connected boundaryless model is metrically complete by [A1, F11]. [A1, F5, F7, F8, F9, F10, F11, step 1.1]

3.1 Let $\alpha:[0,1]\to Q$ be any piecewise-$C^1$ path from $q(x)$ to $q(y)$ and lift it from $x$ by [F15]; its lift is piecewise $C^1$ after a finite subdivision into covering charts and ends at $y+\lambda$ for some $\lambda\in\Lambda$. The local isometry in step 1.1 preserves speed on each subinterval, so [F14] gives $L_g(\alpha)=L_{\mathbb R^m}(\widetilde\alpha)$. Put $z=\widetilde\alpha(1)-x$. If $z\ne0$, set $u=z/|z|$ and $H(t)=\langle u,\widetilde\alpha(t)\rangle$; on every smooth piece [F17] gives $H'=\langle u,\widetilde\alpha'\rangle\le|\widetilde\alpha'|$. Both integrands are continuous and integrable by [F16], so [F18], [F19] and [F20] give $|z|=H(1)-H(0)=\sum_j\int_{I_j}H'\le\sum_j\int_{I_j}|\widetilde\alpha'|=L_g(\alpha)$. For $z=0$ the same lower bound follows from nonnegative speed. Hence each path has length at least $|y-x+\lambda|$ for its endpoint lift. [F12, F13, F14, F15, F16, F17, F18, F19, F20, step 1.1, step 2.1]

4.1 For every $\lambda\in\Lambda$, the projection of the straight segment from $x$ to $y+\lambda$ has constant speed and length $|y-x+\lambda|$ by [F13] and [F19]; step 3.1 gives the lower bound for every competing path. The floor calculation in step 1.1 attains the nearest representative in each coordinate. Taking the infimum over paths in [F12] yields $d_g(q(x),q(y))=\min_{\lambda\in\Lambda}|y-x+\lambda|=\sqrt{\sum_{i=1}^m(\min_{k\in\mathbb Z}|y_i-x_i+kL_i|)^2}$. [F12, F13, F19, step 1.1, step 3.1]

5.1 For $m=1$, $L_1=L>0$, and $p=q(0)$, step 4.1 gives $d_g(p,q(x))=\min(x,L-x)$ for $0\le x\le L$. The unit geodesic ray $\gamma(t)=q(t)$ minimizes for $0\le t\le L/2$, and for every $t>L/2$ the nearest representative has absolute value at most $L/2<t$. Thus [F21] gives $c_p(\dot\gamma(0))=L/2$, [F22] makes $q(L/2)$ a cut point, the lifts $L/2$ and $-L/2$ give distinct minimizing paths to it, and $q(L/2)\ne p$. [F21, F22, step 2.1, step 4.1]

6.1 In the smooth coordinate $s\mapsto q(L/2+s)$ around the antipode, $r_p(q(L/2+s))=L/2+s$ for $s<0$ and $r_p(q(L/2+s))=L/2-s$ for $s>0$. The left derivative is $1$ and the right derivative is $-1$, so $r_p$ is not differentiable at the cut point $q(L/2)\ne p$. [step 5.1]

7.1 For $m=2$ with periods $a,b>0$ and $p=q(0)$, the distance formula gives the closed Dirichlet cell $D=[-a/2,a/2]\times[-b/2,b/2]$: its interior has one nearest lift, the relative interior of each face has two tied lifts, and each corner has four. For any unit vector $u$, its radial geodesic stays minimizing through the first exit time $t_0=\min\{a/(2|u_1|),b/(2|u_2|):u_i\ne0\}$; every $t>t_0$ lies outside $D$ in some coordinate, and shifting that coordinate by its period strictly shortens the lift. Hence $c_p(u)=t_0$, the set $\{ru:|u|=1,\ 0\le r<c_p(u)\}$ is $\operatorname{int}D$, and the cut locus is $q(\partial D)$: every ray's first exit lies in $\partial D$, and every point of $\partial D$ is the first exit on its radial ray. The empty manifold has no base point and a zero-dimensional manifold has no unit direction; neither affects this existential counterexample. The one-dimensional circle witness has $L>0$, includes its finite cut endpoint, and loses minimization strictly at every later time. Exactly $\mathrm{AC}_\omega$ is used through the geodesic/exponential and Hopf--Rinow cut-time interfaces [A1, F9, F10, F11, F21, F22]; the quotient, path-lifting, floor and derivative calculations make no further selection and use no full AC. The item states no biconditional. [A1, F9, F10, F11, F21, F22, step 4.1, step 5.1, step 6.1] QED
