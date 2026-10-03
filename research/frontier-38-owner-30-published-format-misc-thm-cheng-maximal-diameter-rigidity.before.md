---
id: thm-cheng-maximal-diameter-rigidity
kind: theorem
title: Cheng maximal diameter rigidity
status: published
origin: pipeline
deps:
  - thm-bonnet-myers
  - thm-bishop-gromov-volume-comparison
  - def-model-space-radial-area-and-ball-volume
  - def-comparison-sine-cosine-and-cotangent-functions
  - thm-quarter-turn-values-and-shift-formulas
  - cor-one-dimensional-change-of-variables-with-absolute-derivative
  - cor-polar-integration-may-discard-the-cut-locus
  - def-riemannian-volume-density
  - prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density
  - prop-rigidity-in-bishop-gromov-on-an-interval
  - def-cut-time-in-a-unit-tangent-direction
  - lem-minimizing-along-a-geodesic-is-an-initial-interval-property
  - thm-a-length-minimizing-piecewise-smooth-curve-is-a-constant-speed-geodesic-up-to-reparametrization
  - thm-hopf-rinow
  - def-riemannian-isometry-and-local-isometry
  - lem-local-isometries-send-geodesics-to-geodesics
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - thm-extreme-value-metric
  - def-metric-bounded-diameter
  - ex-great-circles-as-round-sphere-geodesics
  - prop-round-sphere-model-geometry
  - thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p
  - ex-the-round-sphere-has-positive-constant-sectional-curvature
  - thm-finite-dimensional-isometry-characterisations
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - cor-positive-density-measures-assign-positive-volume-to-nonempty-open-sets-and-metric-balls
  - def-countable-choice
  - thm-existence-of-normal-neighborhoods
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Theorem 28.2.1 with Shiohama's proof, printed pp.210–212 (PDF pp.218–220); Theorem 24.0.1 and its proof, printed pp.178–180 (PDF pp.186–188)"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§§12.6–12.7, printed pp.59–62: maximal diameter rigidity and the equality discussion"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a complete, connected, boundaryless Riemannian manifold of dimension
$n\ge2$, let $k>0$, and suppose
$$\operatorname{Ric}\ge(n-1)k\,g\qquad\text{and}\qquad \operatorname{diam}(M,g)=\frac{\pi}{\sqrt k}.$$
Then $M$ is isometric to the round $n$-sphere of sectional curvature $k$,
that is, to $S^n_{1/\sqrt k}=\{x\in\mathbb R^{n+1}:|x|=1/\sqrt k\}$ with the
metric induced from $\mathbb R^{n+1}$, which has constant sectional curvature
$k$ ([[ex-the-round-sphere-has-positive-constant-sectional-curvature]]). No
simple connectedness of $M$ is assumed and no choice beyond the inherited
$\mathrm{AC}_\omega$ is used.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1]; a complete, connected, boundaryless Riemannian manifold $(M,g)$ of dimension $n\ge2$ with $\operatorname{Ric}\ge(n-1)k\,g$ for a fixed real number $k>0$ and $\operatorname{diam}(M,g)=\pi/\sqrt k$; the radii $R:=\pi/\sqrt k$ and $r_0:=R/2=\pi/(2\sqrt k)$; the Riemannian volume measure $\operatorname{vol}_g$ and open balls $B(p,r)$; the cut time $c_p$; the radial geodesics $\gamma_v(t)=\exp_p(tv)$; the model functions $\operatorname{sn}_k,\operatorname{ct}_k$ and the model volumes $V_k,V^\star_k$ of [[def-model-space-radial-area-and-ball-volume]]; the round sphere $S^n_\rho$ of radius $\rho:=1/\sqrt k$ with its pole $N$ and antipode $S=-N$; and the tangent-space comparison maps built below.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the cut-time, geodesic, polar-integration and sphere-exponential interfaces below; no further selection is made.

[F1] Bonnet–Myers ([[thm-bonnet-myers]]): under the hypotheses on $(M,g)$ with $k>0$, one has $\operatorname{diam}(M,g)\le\pi/\sqrt k$, and $M$ is compact; consequently every closed bounded subset of $M$ is compact.

[F2] Bishop–Gromov comparison ([[thm-bishop-gromov-volume-comparison]], [[def-model-space-radial-area-and-ball-volume]]): the ratio $R_p(s)=\operatorname{vol}_g(B(p,s))/V^\star_k(s)$ is well defined and nonincreasing on $(0,\infty)$, satisfies $\lim_{s\downarrow0}R_p(s)=1$, is constant on $[R,\infty)$, and $\operatorname{vol}_g(B(p,s))\le V^\star_k(s)$ for every $s>0$. For $0<s\le R$ one has $V^\star_k(s)=V_k(s)= \omega_{n-1}\int_0^s\operatorname{sn}_k^{n-1}$ and for $s\ge R$ one has $V^\star_k(s)=V_k(R)$, the whole model sphere volume.

[F3] Polar integration and the volume measure ([[cor-polar-integration-may-discard-the-cut-locus]], [[def-riemannian-volume-density]], [[prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density]]): $\operatorname{vol}_g$ is the Radon measure of the Riemannian density and for every Borel $f:M\to[0,\infty]$, $$\int_Mf\,d\operatorname{vol}_g=\int_{S_pM}\int_0^{c_p(v)}f(\gamma_v(t))\det a_v(t)\,dt\,d\sigma_p(v),$$ with $\det a_v(t)>0$ for $0<t<c_p(v)$; hence the volume of a Borel subset may be computed in polar coordinates about any centre, and the cut locus may be discarded.

[F4] Comparison functions and model volumes ([[def-comparison-sine-cosine-and-cotangent-functions]], [[thm-quarter-turn-values-and-shift-formulas]], [[cor-one-dimensional-change-of-variables-with-absolute-derivative]]): $\operatorname{sn}_k(s)=\sin(\sqrt k\,s)/\sqrt k$ for $k>0$, so $\operatorname{sn}_k(R-t)=\operatorname{sn}_k(t)$ for all real $t$, because $\sin(\pi-x)=\sin x$; consequently the substitution $u=R-t$ gives $$V_k(t)+V_k(R-t)=V_k(R)\qquad\text{for }0\le t\le R,$$ and in particular $V_k(R)=2V_k(R/2)$.

[F5] Rigidity in Bishop–Gromov ([[prop-rigidity-in-bishop-gromov-on-an-interval]]): let $p\in M$ and let $0<R'<R$ with $R'<\pi/\sqrt k$. If $R_p(r)=R_p(R')$ for some $0<r<R'$, and if $c_p(v)\ge R'$ for every $v\in S_pM$, then $\exp_p$ is a diffeomorphism from $B_0(R')=\{x\in T_pM:|x|<R'\}$ onto $B(p,R')$, and $$(\exp_p^*g)_x(a,b)=\langle a,b\rangle+\Bigl(\frac{\operatorname{sn}_k(t)^2}{t^2}-1\Bigr)\langle a^\perp,b^\perp\rangle$$ for $x=tv$, $|v|=1$, $a,b\in T_pM$, $a^\perp=a-\langle a,v\rangle v$. Call $h_k$ the metric on the open tangent ball given by this formula.

[F6] Cut time and minimizing rays ([[def-cut-time-in-a-unit-tangent-direction]], [[lem-minimizing-along-a-geodesic-is-an-initial-interval-property]]): $c_p(v)=\sup\{t>0:d_g(p,\gamma_v(t))=t\}$ and $d_g(p,\gamma_v(t))=t$ for $0<t<c_p(v)$; if $c_p(v)$ is finite then the cut point $\gamma_v(c_p(v))$ is at distance $c_p(v)$ from $p$.

[F7] Length-minimizing curves ([[thm-a-length-minimizing-piecewise-smooth-curve-is-a-constant-speed-geodesic-up-to-reparametrization]]): a nonconstant piecewise smooth curve that minimizes length between its endpoints reparametrizes by arclength to a smooth unbroken unit-speed geodesic; a zero-length minimizer is constant.

[F8] Minimizing geodesics exist between any two points of a complete manifold, and geodesics are uniquely determined by their initial data ([[thm-hopf-rinow]], [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]]).

[F9] Local isometries and geodesics ([[def-riemannian-isometry-and-local-isometry]], [[lem-local-isometries-send-geodesics-to-geodesics]]): a local isometry is a smooth local diffeomorphism with $F^*h=g$; it intertwines the Levi-Civita connections, so it carries geodesics to geodesics and preserves the length of every curve. In particular, if $F$ is a local isometry and $\gamma(s)=\exp_x(sv)$ a radial geodesic with $s|v|$ small, then $F(\exp_x(sv))=\exp_{F(x)}\bigl(s\,dF_x(v)\bigr)$ wherever both sides are defined, by [F8].

[F10] Extreme values and diameter ([[thm-extreme-value-metric]], [[def-metric-bounded-diameter]]): a continuous real function on a nonempty compact metric space attains its maximum and minimum, and $\operatorname{diam}(A)=\sup\{d(a,b):a,b\in A\}$ for nonempty bounded $A$.

[F11] The model sphere ([[prop-round-sphere-model-geometry]], [[ex-great-circles-as-round-sphere-geodesics]], [[thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p]], [[ex-the-round-sphere-has-positive-constant-sectional-curvature]]): for the unit sphere $S^n_1$ and $p\in S^n_1$ one has $$\exp_p(v)=\cos|v|\,p+\frac{\sin|v|}{|v|}v\quad(v\ne0),\qquad \exp_p(0)=p,$$ the exponential map is defined on all of $T_pS^n_1$, is injective on $B_\pi(0_p)$, and $\exp_p(\pi u)=-p$ for every unit $u\in T_pS^n_1$; the cut locus of $p$ is the antipode $-p$ with $c_p(v)=\pi$ for every unit $v$. For $n\ge2$ the round sphere $S^n_\rho=\{x\in\mathbb R^{n+1}:|x|=\rho\}$ has constant sectional curvature $1/\rho^2=k$.

[F12] Linear algebra of isometries ([[thm-finite-dimensional-isometry-characterisations]], [[def-linear-isometry-and-orthogonal-or-unitary-operator]]): for two finite-dimensional real inner product spaces of the same dimension and orthonormal bases $(e_i)$, $(f_i)$, the linear map $e_i\mapsto f_i$ is a linear isometry; equivalently a linear map sending some orthonormal basis to an orthonormal basis is an isometry. Hence linear isometries $T_pM\to T_NS^n_\rho$ exist and are invertible, and orthogonal maps of $\mathbb R^{n+1}$ restrict to isometries of $S^n_\rho$.

[F13] Positive volume of balls ([[cor-positive-density-measures-assign-positive-volume-to-nonempty-open-sets-and-metric-balls]]): every nonempty open subset of $M$ has strictly positive $\operatorname{vol}_g$ measure; in particular $\operatorname{vol}_g(B(x,\varepsilon))>0$ for every $x$ and every $\varepsilon>0$.



## Proof

1.1 Endpoints and the diameter pair.
By [F1], $M$ is compact and $\operatorname{diam}(M,g)\le R$; the hypothesis gives $\operatorname{diam}(M,g)=R$. Define $\Phi(x):=\sup\{d_g(x,y):y\in M\}$ for $x\in M$. By [F10] applied to the continuous function $y\mapsto d_g(x,y)$ on the nonempty compact space $M$ the supremum is a maximum, so $\Phi(x)=\max_y d_g(x,y)$; the triangle inequality gives $|\Phi(x)-\Phi(x')|\le d_g(x,x')$, so $\Phi$ is continuous; and $\sup_x\Phi(x)=\operatorname{diam}(M,g)=R$. By [F10] again, $\Phi$ attains its maximum at some $p\in M$, and then choosing $q\in M$ with $d_g(p,q)=\Phi(p)$ gives $$d_g(p,q)=\sup_x\Phi(x)=R .$$
[A1, F1, F10, given]

1.2 The model sphere exponential is an isometry onto the punctured sphere.
Keep $R=\pi/\sqrt k$ and put $\rho=1/\sqrt k$, so $R=\pi\rho$.
For the pole $N\in S^n_\rho$ and $v=tu\in T_NS^n_\rho$, $|u|=1$, the
scaled sphere formula of [F11] is
$$\widetilde\exp_N(tu)=\cos(t/\rho)N+\rho\sin(t/\rho)u.$$
For $a=a^\perp+\langle a,u\rangle u$ its differential at $tu$, $0<t<R$, is
$$d(\widetilde\exp_N)_{tu}(a)=\langle a,u\rangle\bigl(-\sin(t/\rho)N/\rho+\cos(t/\rho)u\bigr)+\frac{\rho\sin(t/\rho)}t a^\perp.$$
The radial vector in parentheses has unit length and is perpendicular to
$a^\perp$. Since $\operatorname{sn}_k(t)=\rho\sin(t/\rho)$, polarization
gives $\widetilde\exp_N^*g_{S^n_\rho}=h_k$; at zero the same identity holds
by the identity differential. By the sphere model [F11], this exponential
is a diffeomorphism from $B_R(0_N)$ onto $S^n_\rho\setminus\{S\}$,
where $S=-N$, and $\widetilde\exp_N(Ru)=S$ for every unit $u$.
Thus it is a Riemannian isometry from $(B_R(0_N),h_k)$ onto the punctured sphere.
[F4, F11]

1.3 Agreement lemma for local isometries.
**Agreement lemma.** Let $U$ be a connected smooth manifold and let $F,G:U\to M'$ be local isometries into a Riemannian manifold $M'$ with $F(x_0)=G(x_0)$ and $dF_{x_0}=dG_{x_0}$ at some $x_0\in U$. Then $F=G$. *Proof.* Let $A=\{x\in U:F(x)=G(x)\ \text{and}\ dF_x=dG_x\}$. It is nonempty and closed, because smooth maps and their differentials are continuous. It is open: if $x\in A$, put $y=F(x)=G(x)$, use [[thm-existence-of-normal-neighborhoods]] to choose a normal neighbourhood $U_0$ of $x$ in the common source metric, small enough for both maps. Write its points as $\exp_x(w)$ for $w$ near zero. For $z=\exp_x(w)\in U_0$ with $w$ small, [F9] and the uniqueness in [F8] give $F(z)=\exp_y(dF_xw)$ and $G(z)=\exp_y(dG_xw)$, which are equal because $dF_x=dG_x$; and then $dF_z=dG_z$ by the chain rule applied to these expressions. Hence $U_0\subseteq A$, and $A$ is open. In the connected space $U$, the only nonempty open and closed subset is $U$, so $F=G$. This proves the lemma.
[F8, F9]

2.1 Cut times are at most $R$ and the radius-$R$ balls have full volume.
Let $v\in S_pM$ and $0<t<c_p(v)$. By [F6], $d_g(p,\gamma_v(t))=t$; since $t\le\operatorname{diam}(M,g)=R$ we get $c_p(v)\le R$ for every $v\in S_pM$. Now for a Borel-measurable $f$ and the centre $p$, the polar formula of [F3] reads $\int_Mf\,d\operatorname{vol}_g= \int_{S_pM}\int_0^{c_p(v)}f(\gamma_v(t))\det a_v(t)\,dt\,d\sigma_p(v)$. Taking $f=\mathbf 1_{B(p,R)}$: for $0<t<c_p(v)$ the identity $d_g(p,\gamma_v(t))=t$ shows $f(\gamma_v(t))=1$ exactly when $t<R$, so the inner integral is over $(0,\min\{c_p(v),R\})$, and $c_p(v)\le R$ makes this $(0,c_p(v))$. Hence $$\operatorname{vol}_g(B(p,R))=\operatorname{vol}_g(M),$$ and the same argument with $q$ in place of $p$ gives $\operatorname{vol}_g(B(q,R))=\operatorname{vol}_g(M)>0$.
[F3, F6, F13, step 1.1]

2.2 Extension of spherical isometries.
**Extension of spherical isometries.** Let $U\subseteq S^n_\rho$ be a connected nonempty open subset and let $F:U\to S^n_\rho$ be a local isometry. Then there is an orthogonal map $\hat U\in O(n+1)$ of $\mathbb R^{n+1}$ with $F=\hat U|_U$. Indeed, fix $x_0\in U$, let $(e_1,\dots,e_n)$ be an orthonormal basis of $T_{x_0}S^n_\rho$ and set $f_i:=dF_{x_0}(e_i)$; then $(x_0/\rho,e_1,\dots,e_n)$ and $(F(x_0)/\rho,f_1,\dots,f_n)$ are orthonormal bases of $\mathbb R^{n+1}$, and the linear map sending the first basis to the second is a linear isometry of $\mathbb R^{n+1}$ by [F12], hence restricts to an isometry $\hat U$ of $S^n_\rho$ with $\hat U(x_0)=F(x_0)$ and $d\hat U_{x_0}=dF_{x_0}$ (the tangent space of $S^n_\rho$ at a point is the orthogonal complement of that point, transported by the orthogonal map). By the agreement lemma of step 1.3, $F=\hat U|_U$. This proves the claim.
[F12, step 1.3]

3.1 The half-balls are disjoint and the volume ratio is constant on $[R/2,R]$.
The balls $B(p,R/2)$ and $B(q,R/2)$ are disjoint: a common point $z$ would give $d_g(p,q)\le d_g(p,z)+d_g(z,q)<R$, contradicting step 1.1. Write $\alpha:=\operatorname{vol}_g(M)/V_k(R)$; by [F2], $R_p(s)=\operatorname{vol}_g(B(p,s))/V^\star_k(s)$ is nonincreasing with $R_p(R)=\operatorname{vol}_g(B(p,R))/V_k(R)=\alpha$ by [F2] and step 2.1, so $$R_p(R/2)\ge\alpha,\qquad\text{equivalently}\qquad \operatorname{vol}_g(B(p,R/2))\ge\alpha\,V_k(R/2),$$ and the same inequality holds with $q$. The sequence of inequalities $$\operatorname{vol}_g(M)\ \ge\ \operatorname{vol}_g(B(p,R/2)) +\operatorname{vol}_g(B(q,R/2))\ \ge\ 2\alpha V_k(R/2) \ =\ \alpha V_k(R)\ =\ \operatorname{vol}_g(M)$$ uses disjointness, then the two displayed bounds, then $V_k(R)=2V_k(R/2)$ from [F4]. Every inequality is therefore an equality: the two balls have equal volume $\alpha V_k(R/2)=\operatorname{vol}_g(M)/2$ and $$R_p(R/2)=R_q(R/2)=\alpha .$$ By monotonicity of $R_p$ and $R_q$ and $R_p(R)=R_q(R)=\alpha$ [F2, step 2.1], this forces $$R_p(s)=R_q(s)=\alpha\qquad\text{for every }s\in[R/2,R].$$
[F2, F4, step 1.1, step 2.1]

4.1 The volume ratio is identically one.
Let $0<s<R/2$. Then $B(p,s)$ and $B(q,R-s)$ are disjoint, since a common point would give $d_g(p,q)\le d_g(p,z)+d_g(z,q)<s+(R-s)=R$; and $R-s\in(R/2,R)$, so step 3.1 applies at $R-s$ and gives $\operatorname{vol}_g(B(q,R-s))=\alpha V_k(R-s)$. Hence $$\operatorname{vol}_g(M)\ \ge\ \operatorname{vol}_g(B(p,s))+\alpha V_k(R-s) \ =\ \operatorname{vol}_g(B(p,s))+\alpha\bigl(V_k(R)-V_k(s)\bigr) \ =\ \operatorname{vol}_g(B(p,s))+\operatorname{vol}_g(M)-\alpha V_k(s),$$ using $V_k(s)+V_k(R-s)=V_k(R)$ from [F4]. Therefore $\operatorname{vol}_g(B(p,s))\le\alpha V_k(s)$, that is, $R_p(s)\le\alpha$; monotonicity [F2] and step 3.1 give $R_p(s)\ge R_p(R/2)=\alpha$, so $$R_p(s)=\alpha\qquad\text{for every }s\in(0,R),$$ and the same holds for $R_q$. Letting $s\downarrow0$ and using $\lim_{s\downarrow0}R_p(s)=1$ from [F2] gives $\alpha=1$. Consequently $$R_p(s)=R_q(s)=1,\qquad \operatorname{vol}_g(B(p,s))=V_k(s)= \operatorname{vol}_g(B(q,s))\qquad(0<s<R),$$ and $\operatorname{vol}_g(M)=V_k(R)$.
[F2, F4, step 1.1, step 3.1]

5.1 Complementarity of the ball volumes at every radius.
For $0\le s\le R$ the two balls $B(p,s)$ and $B(q,R-s)$ are disjoint (same triangle-inequality argument as in step 4.1, with $s=0$ or $s=R$ trivial), and step 4.1 gives $$\operatorname{vol}_g(B(p,s))+\operatorname{vol}_g(B(q,R-s)) =V_k(s)+V_k(R-s)=V_k(R)=\operatorname{vol}_g(M).$$
[F4, step 4.1]

6.1 Equal complementary half-balls.
We claim that $$d_g(p,x)+d_g(q,x)=R\qquad\text{for every }x\in M .$$ Suppose not. Then $d_g(p,x)+d_g(q,x)>R$, and since $d_g(p,x)=:t$ is finite we may choose $\varepsilon>0$ with $d_g(p,x)+d_g(q,x)>R+2\varepsilon$ and $\varepsilon<t$. Put $t':=t-\varepsilon\ge0$. The three balls $B(p,t')$, $B(q,R-t')$ and $B(x,\varepsilon)$ are pairwise disjoint: a point $z$ of the first two would give $d_g(p,q)\le d_g(p,z)+d_g(z,q)<t'+(R-t')=R$; while $$d_g(p,z)\ge d_g(p,x)-d_g(x,z)>t-\varepsilon=t',\qquad d_g(q,z)\ge d_g(q,x)-\varepsilon>R+2\varepsilon-t-\varepsilon=R-(t-\varepsilon)=R-t'$$ for $z\in B(x,\varepsilon)$, so such a $z$ lies in neither of the first two balls. Hence, using $R-t'\in[0,R]$ and step 5.1, $$\operatorname{vol}_g(M)\ \ge\ \operatorname{vol}_g(B(p,t')) +\operatorname{vol}_g(B(q,R-t'))+\operatorname{vol}_g(B(x,\varepsilon)) \ =\ \operatorname{vol}_g(M)+\operatorname{vol}_g(B(x,\varepsilon)),$$ so $\operatorname{vol}_g(B(x,\varepsilon))\le0$, contradicting [F13]. Therefore the claimed identity holds.
[A1, F13, step 1.1, step 5.1]

7.1 Cut time equals the diameter.
We claim that $c_p(v)=R$ for every $v\in S_pM$, and likewise with $q$ in place of $p$. Let $v\in S_pM$ and suppose $t:=c_p(v)<R$. Put $x:=\gamma_v(t)=\exp_p(tv)$. By [F6], $d_g(p,x)=t$; by step 6.1, $d_g(q,x)=R-t>0$. By [F8] choose a unit-speed minimizing geodesic $\tilde\gamma:[0,R-t]\to M$ from $x$ to $q$, and define $\sigma:[0,R]\to M$ by $\sigma(s)=\gamma_v(s)$ for $0\le s\le t$ and $\sigma(s)=\tilde\gamma(s-t)$ for $t\le s\le R$. Then $\sigma$ is piecewise smooth from $p$ to $q$ and has length $R=d_g(p,q)$; by [F7] its arclength reparametrization is a smooth unbroken geodesic whose trace contains the common trace of $\sigma$ on $[0,R]$. The two pieces have unit speed, so arclength reparametrization leaves the parameter $s$ unchanged; by geodesic uniqueness, the resulting geodesic agrees with $\gamma_v$ on $[0,R]$. Every subsegment of a minimizing curve minimizes, hence $d_g(p,\gamma_v(s))=s$ for $0\le s\le R$. Hence $c_p(v)\ge R$, contradicting $t=c_p(v)<R$. Therefore $c_p(v)\ge R$, and $c_p(v)\le R$ by step 2.1, so $c_p(v)=R$. The argument with $p$ and $q$ interchanged gives $c_q(w)=R$ for every $w\in S_qM$.
[F6, F7, F8, step 2.1, step 6.1]

8.1 The exponential maps are isometries onto the punctured manifolds.
Fix $0<R'<R$ and $0<r<R'$. By step 4.1, $R_p(r)=R_p(R')=1$; by step 7.1, $c_p(v)=R\ge R'$ for every $v\in S_pM$; and $R'<R=\pi/\sqrt k$. So the rigidity proposition [F5] applies and yields, for every such $R'$: $$\exp_p:B_0(R')\to B(p,R')\ \text{is an isometry onto with } (\exp_p^*g)=h_k .$$ Taking the union over all $R'<R$ and using $B(p,R)=\{x:d_g(p,x)<R\}=M\setminus\{q\}$, which follows from step 6.1 ($d_g(p,x)=R-d_g(q,x)<R$ exactly when $x\ne q$), the metric identity holds on all of $B_0(R)$, the map $\exp_p$ is an isometry from $(B_0(R),h_k)$ onto the open ball $B(p,R)$ of $M$, and $\exp_p(B_0(R))=M\setminus\{q\}$ because every point of $B(p,R)$ lies in some $B(p,R')$ with $R'<R$ and $\exp_p(B_0(R'))=B(p,R')$. In particular $$\Phi_0:=\exp_p:(B_0(R),h_k)\longrightarrow (M\setminus\{q\},g)$$ is an isometry onto, and by the same argument at the centre $q$ $$\Psi_0:=\exp_q:(B_0(R),h_k)\longrightarrow (M\setminus\{p\},g)$$ is an isometry onto (the tangent balls are identified with $T_pM$ and $T_qM$ respectively, each carrying $h_k$ defined by the formula of [F5] with the respective centre).
[F5, step 4.1, step 6.1, step 7.1]

9.1 Two chart isometries and the transition.
Choose linear isometries $L_1:T_pM\to T_NS^n_\rho$ and $L_2:T_qM\to T_NS^n_\rho$, which exist by [F12], and define $$\Psi_1:=\widetilde\exp_N\circ L_1\circ\exp_p^{-1}: M\setminus\{q\}\longrightarrow S^n_\rho\setminus\{S\},\qquad \Psi_2:=\widetilde\exp_N\circ L_2\circ\exp_q^{-1}: M\setminus\{p\}\longrightarrow S^n_\rho\setminus\{S\}.$$ By step 8.1 and step 1.2 each factor is an isometry onto its target, so $\Psi_1$ and $\Psi_2$ are isometries onto $S^n_\rho\setminus\{S\}$. In particular $$\Psi_1(p)=N,\qquad \Psi_2(q)=N,\qquad \Psi_1(M\setminus\{p,q\})=\Psi_2(M\setminus\{p,q\})= S^n_\rho\setminus\{S,N\}=:P .$$ The transition map $$T:=\Psi_2\circ\Psi_1^{-1}:P\longrightarrow P$$ is an isometry of $P$ onto itself. The set $P$ is path-connected, hence connected: via the diffeomorphism $\exp_N^{-1}$, it corresponds to $B_R(0_N)\setminus\{0_N\}$. Radial segments connect every point of this punctured ball to a fixed radius $r\in(0,R)$, and the sphere of radius $r$ is path-connected for $n\ge2$; thus the punctured ball, and hence $P$, is path-connected.
[F12, step 1.2, step 8.1]

10.1 The transition is a global orthogonal map swapping the poles.
By step 2.2 applied to the local isometry $T$ on the connected open set $P$, there is $\hat U\in O(n+1)$ with $T=\hat U|_P$. We claim $$\hat U(N)=S,\qquad \hat U(S)=N .$$ For $x\in P$ with $x\to N$: $(\widetilde\exp_N^{-1})(x)\to0$, so $\Psi_1^{-1}(x)= \exp_p\bigl(L_1^{-1}(\widetilde\exp_N^{-1}(x))\bigr)\to\exp_p(0)=p$; and for $z\in M\setminus\{p\}$ with $z\to p$ one has $d_g(q,z)\to d_g(q,p)=R$, so $L_2(\exp_q^{-1}(z))$ is a tangent vector of norm $d_g(q,z)\to R$ and $\widetilde\exp_N$ of such vectors tends to $S$ by the formula $\widetilde\exp_N(Ru)=S$ (step 1.2). Hence $T(x)=\Psi_2(\Psi_1^{-1}(x)) \to S$ as $x\to N$, and continuity of $\hat U$ gives $\hat U(N)=\lim_{x\to N}\hat U(x)=\lim_{x\to N}T(x)=S$. The identity $\hat U(S)=N$ follows by the same computation with $p$ and $q$ interchanged.
[step 1.2, step 2.2, step 8.1, step 9.1]

11.1 Gluing to the global isometry $\Theta$. [step 1.2, step 8.1, step 9.1, step 10.1]
Define $\Theta:M\to S^n_\rho$ by $$\Theta(x)=\Psi_1(x)\ \ (x\ne q),\qquad \Theta(x)=\hat U^{-1}\bigl(\Psi_2(x)\bigr)\ \ (x\ne p).$$ The two formulas agree on $M\setminus\{p,q\}$: there $\Psi_2=T\circ\Psi_1=\hat U\circ\Psi_1$ by step 10.1, so $\hat U^{-1}\Psi_2=\Psi_1$. Hence $\Theta$ is well defined, and it is smooth: near any point different from $p$ and $q$ both expressions agree and are compositions of smooth maps, near $p$ (where $p\ne q$) the first expression $\Psi_1$ is smooth, and near $q$ the second expression $\hat U^{-1}\circ\Psi_2$ is smooth. Being locally one of the two isometries onto an open set, $\Theta$ is a local isometry. It is bijective: on $M\setminus\{q\}$ it equals $\Psi_1$ and maps onto $S^n_\rho\setminus\{S\}$; moreover $$\Theta(q)=\hat U^{-1}\bigl(\Psi_2(q)\bigr)=\hat U^{-1}(N) =\hat U^{-1}\bigl(\hat U(S)\bigr)=S$$ by step 10.1 and $\Psi_2(q)=N$ from step 9.1, so $\Theta$ is onto. If $\Theta(x)=\Theta(y)=w$ with $w\ne S$, then $x\ne q$ and $y\ne q$, so $\Psi_1(x)=w=\Psi_1(y)$ and $x=y$ by injectivity of $\Psi_1$; and if $w=S$ then $x=q=y$ because $\Psi_1$ takes values in $S^n_\rho\setminus\{S\}$ on $M\setminus\{q\}$. Hence $\Theta$ is a bijective local isometry between boundaryless manifolds of the same dimension, so $\Theta$ is a diffeomorphism with $\Theta^*g_{S^n_\rho}=g$: a Riemannian isometry, and $M$ is isometric to the round sphere $S^n_\rho$ of curvature $1/\rho^2=k$. [step 8.1, step 1.2, step 9.1, step 10.1] ∎

## Source locator

Ved Datar, *Lectures on Riemannian Geometry* (2025): Theorem 28.2.1 with Shiohama's proof, printed pp.210-212 (PDF pp.218-220), supplies the equal volumes of the complementary balls, the identity $d(p,x)+d(q,x)=\pi$, the exclusion of cut points before $\pi$ by concatenation with a minimal segment to $q$, the index computation on the minimizing radial geodesic, and the local isometry obtained there "as in the proof of Theorem 24.0.1" (that theorem and its proof are printed pp.178-180, PDF pp.186-188), by two normal charts plus agreement of local isometries on a connected overlap. The present proof replaces Datar's implicit lemma on coincident local isometries by the agreement lemma 1.3, replaces his extension step by the explicit extension 2.2, and derives the model-side metric (step 1.2 above) from the published normal-coordinate formula of Datar, Example 17.1.3, printed p.128. Eschenburg, *Comparison Theorems in Riemannian Geometry*, sections 12.6-12.7, printed pp.59-62, treats the same maximal-diameter rigidity through the equality discussion of the comparison estimates.
