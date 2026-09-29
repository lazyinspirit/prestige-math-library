---
id: ex-projective-plane-total-curvature-from-a-hemisphere-identification
kind: example
title: Projective-plane curvature via a hemisphere
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-gauss-bonnet-for-closed-nonorientable-riemannian-surfaces
  - thm-gaussian-curvature-structure-equation
  - def-connection-one-form-of-an-oriented-orthonormal-frame
  - prop-christoffel-formula-for-the-levi-civita-connection
  - def-riemannian-volume-density
  - prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density
  - thm-density-measure-integration-agrees-with-smooth-density-integration
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - def-polar-surface-measure-on-the-unit-sphere
  - thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content
  - cor-disc-jordan-content-is-pi-r-squared
  - ex-the-round-metric-on-the-sphere-as-an-induced-metric
  - ex-real-projective-space-cover-as-a-discrete-fiber-fibration
  - ex-real-projective-space-from-affine-charts
  - ex-real-projective-space-is-orientable-exactly-in-odd-dimension
  - prop-coordinate-criterion-for-a-riemannian-metric
  - prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form
  - def-riemannian-volume-form-on-an-oriented-manifold
  - def-riemannian-isometry-and-local-isometry
  - cor-integral-over-a-null-set-vanishes
  - thm-the-lebesgue-integral-respects-almost-everywhere-equality
  - def-countable-choice
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, printed pp. 156-172 (PDF pp. 173-189): Theorem 9.7 is the global Gauss-Bonnet formula applied here to the antipodal quotient of the round sphere; the constant curvature R^{-2} of the round sphere is the boundary case of Theorem 9.3."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Remark 2.2.6, printed p. 14 (PDF p. 21): the orientation-free curvature density integrates to 2 pi times the Euler characteristic on a nonorientable closed surface."
---

## Example

Assume the axiom of choice.
Let $R>0$ and let $S^2_R=\{x\in\mathbb R^3:|x|=R\}$ carry the round metric
$g_R$ induced from $\mathbb R^3$. The antipodal map $A(x)=-x$ is an isometry of
$(S^2_R,g_R)$, and the real projective plane
$\mathbb{RP}^2:=S^2_R/A$, with the quotient topology and the metric $g$ pushed
forward along the quotient map $\pi:S^2_R\to\mathbb{RP}^2$, satisfies
$$K\equiv\frac1{R^2},\qquad \operatorname{area}_g(\mathbb{RP}^2)=2\pi R^2,\qquad \chi(\mathbb{RP}^2)=1,\qquad \int_{\mathbb{RP}^2}K\,\mu_g=2\pi .$$
The value $\chi(\mathbb{RP}^2)=1$ is a consequence of the curvature computation
through [[thm-gauss-bonnet-for-closed-nonorientable-riemannian-surfaces]]: the
orientation-free Gauss-Bonnet theorem is applied, not assumed, and no
classification of compact surfaces is used.

## Facts & Assumptions

**Given:** A radius $R>0$, the round sphere $S^2_R$ with its round metric $g_R$, the antipodal isometry $A(x)=-x$, the quotient $\mathbb{RP}^2=S^2_R/A$ with the quotient topology, and the quotient map $\pi$.

[A1] full AC is assumed; it is inherited from the nonorientable Gauss-Bonnet theorem and from the polar-coordinate formula for Lebesgue measure, and it is used nowhere else ([[def-axiom-of-choice]]).

[F1] The round metric is the metric induced by the ambient Euclidean inner product, so the inner product of two tangent vectors of $S^2_R$ is their Euclidean inner product; in the spherical parametrization $X(\theta,\varphi)=R(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$ it reads $R^2(d\theta^2+\sin^2\theta\,d\varphi^2)$ ([[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]).

[F2] $\mathbb{RP}^2=S^2_R/(x\sim-x)$ is a smooth surface whose standard charts are the affine coordinate maps of $\mathbb{RP}^n$, and the quotient map $\pi$ is open and restricts near every point to a homeomorphism onto its open image ([[ex-real-projective-space-from-affine-charts]], [[ex-real-projective-space-cover-as-a-discrete-fiber-fibration]]).

[F3] A smooth local diffeomorphism $F$ with $F^*h=g$ is a local isometry between Riemannian manifolds ([[def-riemannian-isometry-and-local-isometry]]).

[F4] A symmetric positive definite smooth coefficient matrix defines a Riemannian metric in coordinates, and $\mu_g=\sqrt{\det G}\,|da\,db|$ is its Riemannian volume density ([[prop-coordinate-criterion-for-a-riemannian-metric]], [[def-riemannian-volume-density]]).

[F5] Riemannian volume is the Radon measure of the density $\mu_g$: it is finite on compact sets, and for every nonnegative Borel $f$ and every chart partition $(W_k,\phi_k)$ of $M$ one has $\int_Mf\,d\mu_g=\sum_k\int_{\phi_k(W_k)}(\phi_k f r)_{\phi_k}\,d\lambda_2$; on smooth compactly supported functions this agrees with the smooth density integral ([[prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density]], [[thm-density-measure-integration-agrees-with-smooth-density-integration]]).

[F6] Polar coordinates in the plane: under full AC, for every nonnegative Borel $f$ on $\mathbb R^2$, $\int_{\mathbb R^2}f\,d\lambda_2=\int_0^\infty\int_{S^1}f(r\omega)r\,d\sigma(\omega)\,dr$, where the polar surface measure is $\sigma(E)=2\lambda_2\{r\omega:\omega\in E,\ 0<r\le1\}$; the unit disk has Jordan content $\pi$ and Lebesgue measure $\pi$, so $\sigma(S^1)=2\pi$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[def-polar-surface-measure-on-the-unit-sphere]], [[cor-disc-jordan-content-is-pi-r-squared]], [[thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content]]).

[F7] For a smooth positive orthonormal frame $(e_1,e_2)$ with connection form $\omega$ and area form $dA=e^1\wedge e^2$, one has $d\omega=-K\,dA$, the frame equations $\nabla_Xe_1=\omega(X)e_2$, $\nabla_Xe_2=-\omega(X)e_1$, and the Levi-Civita symbols are given by the Christoffel formula in coordinates ([[thm-gaussian-curvature-structure-equation]], [[def-connection-one-form-of-an-oriented-orthonormal-frame]], [[prop-christoffel-formula-for-the-levi-civita-connection]], [[prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form]], [[def-riemannian-volume-form-on-an-oriented-manifold]]).

[F8] A nonnegative integral over a null set vanishes, and integrable functions that agree almost everywhere have equal integrals ([[cor-integral-over-a-null-set-vanishes]], [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

[F9] $\mathbb{RP}^2$ is nonorientable: positive-dimensional real projective space is orientable exactly in odd dimensions ([[ex-real-projective-space-is-orientable-exactly-in-odd-dimension]]).

[F10] For a closed compact nonorientable Riemannian surface $(M,g)$, $\int_MK\,\mu_g=2\pi\chi(M)$, with the orientation-free area density $\mu_g$ ([[thm-gauss-bonnet-for-closed-nonorientable-riemannian-surfaces]]).

## Verification

**Proof technique:** build the quotient charts, push the round metric forward to a metric making $\pi$ a local isometry, compute $K$ and the area in one chart while proving that the omitted equatorial circle is null, and conclude with the nonorientable Gauss-Bonnet theorem.

1.1 For $i\in\{0,1,2\}$ put $H_i:=\{x\in S^2_R:x_i>0\}$ and $U_i:=\pi(H_i)$. Every antipodal pair meets $\bigcup_iH_i$, because some coordinate of $x$ is nonzero and exactly one of $x,-x$ has its $i$-th coordinate positive whenever $x_i\ne0$; hence the $U_i$ cover $\mathbb{RP}^2$. The restriction $\pi|_{H_i}$ is injective: if $x,y\in H_i$ and $\pi(x)=\pi(y)$, then $y=\pm x$, and $x_i>0$, $y_i>0$ force $y=x$. Since $\pi$ is open by [F2], each $\pi|_{H_i}$ is a homeomorphism onto $U_i$. [F2, given]

2.1 Define $p_i:\mathbb R^2\to H_i$ by $p_i(a,b):=R(1+a^2+b^2)^{-1/2}\tilde x_i(a,b)$, where $\tilde x_i(a,b)\in\mathbb R^3$ has entries $a,b$ in the two slots other than $i$ and the entry $1$ in slot $i$. Then $p_i$ is a smooth bijection with smooth inverse $x\mapsto(x_j/x_i)_{j\ne i}$ on $H_i$, hence a diffeomorphism onto $H_i$. Therefore $\Psi_i:=p_i^{-1}\circ(\pi|_{H_i})^{-1}:U_i\to\mathbb R^2$ is a chart with $\Psi_i^{-1}=\pi\circ p_i$. On $U_i\cap U_j$, put $x=p_i(u)$ and $\varepsilon(u)=\operatorname{sign}(x_j)$; then $x_j\ne0$, the unique representative of $\pi(x)$ in $H_j$ is $\varepsilon(u)x$, and the transition is $\Psi_j\circ\Psi_i^{-1}(u)=p_j^{-1}(\varepsilon(u)p_i(u))=(x_k/x_j)_{k\ne j}$. The ratios are smooth wherever $x_j\ne0$; equivalently, $\varepsilon$ is constant on each overlap component. Thus the family $\{(U_i,\Psi_i)\}$ is a smooth atlas. Moreover $\Psi_i\circ\pi\circ p_i=\mathrm{id}_{\mathbb R^2}$, so $\pi$ is smooth and has invertible differential on every $H_i$. For an $x$ outside their union, $-x$ belongs to some $H_i$ and $\pi\circ A=\pi$ with $A$ a diffeomorphism, so the same conclusion holds at $x$: the quotient map is a local diffeomorphism everywhere. [F2, step 1.1, given]

3.1 Define a bilinear form $g$ on $\mathbb{RP}^2$ by $g_q(v,w):=g_R\big((d\pi_x)^{-1}v,(d\pi_x)^{-1}w\big)$, where $x\in S^2_R$ is any point with $\pi(x)=q$ and $d\pi_x$ is the isomorphism of step 2.1. This is well defined: the other preimage of $q$ is $y=A(x)=-x$, and $d\pi_y\circ dA_x=d\pi_x$ with $dA_x=-I$, so replacing $x$ by $y$ changes both arguments by the linear map $-I$, which preserves the ambient inner product and hence $g_R$ by [F1]. Symmetry and positive definiteness are inherited from $g_R$. In the chart $\Psi_i$ the coefficient functions are $g_{ab}(u)=g_R\big(d(p_i)_u\partial_a,d(p_i)_u\partial_b\big)=(p_i^*g_R)_{ab}(u)$, because $d\Psi_i^{-1}=d(\pi\circ p_i)=d\pi\circ dp_i$; these are smooth in $u$. So $g$ is a Riemannian metric by [F4], and $\pi^*g=g_R$, i.e. $\pi$ is a local isometry by [F3]. [F1, F3, F4, step 2.1, algebra]

3.2 In the chart $\Psi_i$, use polar coordinates $(a,b)=\tan\phi\,(\cos\alpha,\sin\alpha)$ locally on overlapping angular patches, with $0<\phi<\pi/2$ and each $\alpha$ in an open interval shorter than $2\pi$. These patches cover $U_i\setminus\{P_i\}$; no single angular interval is a coordinate chart for the whole punctured plane. On each patch $p_i(\phi,\alpha)$ is the spherical parametrization of the open hemisphere, so by [F1] the pulled-back round metric is $p_i^*g_R=R^2\big(d\phi^2+\sin^2\phi\,d\alpha^2\big)$. The centre $\phi=0$ is the single point $P_i:=\pi(Re_i)$, and the limiting equator $\phi=\pi/2$ corresponds to $L_i:=\{[x]:x_i=0\}$, so $U_i=\mathbb{RP}^2\setminus L_i$. [F1, step 2.1, algebra]

3.3 Let $L:=\{[x]\in\mathbb{RP}^2:x_2=0\}$. Then $L\subset U_0\cup U_1$, and the coordinate images are explicit, namely $\Psi_0(L\cap U_0)=\{(a,0):a\in\mathbb R\}$ and $\Psi_1(L\cap U_1)=\{(a,0):a\in\mathbb R\}$, because $\Psi_0([x])=(x_1/x_0,x_2/x_0)$ and $\Psi_1([x])=(x_0/x_1,x_2/x_1)$ vanish in their second entry precisely on $L$. Each of these is a line in $\mathbb R^2$, a Lebesgue-null Borel set. [F2, step 2.1, algebra]

4.1 In the chart $\Psi_i$ the metric is $p_i^*g_R$ by step 3.1. Differentiating $p_i$ with $s=1+a^2+b^2$ gives $g_{aa}=R^2(1+b^2)/s^2$, $g_{ab}=-R^2ab/s^2$ and $g_{bb}=R^2(1+a^2)/s^2$, so $\det G=R^4s^{-3}$ and the density coefficient is $\rho_i:=\sqrt{\det G}=R^2(1+a^2+b^2)^{-3/2}\le R^2$ on the whole chart. The charts $\Psi_i$ differ only by permuting the three ambient coordinates, and a coordinate permutation preserves the Euclidean inner product and commutes with $A$, so $p_i^*g_R$ is the same function of $(a,b)$ for every $i$. [F1, F4, step 2.1, algebra]

4.2 On $U_i\setminus\{P_i\}$ the fields $e_1:=R^{-1}\partial_\phi$ and $e_2:=(R\sin\phi)^{-1}\partial_\alpha$ are a positive orthonormal frame for $R^2(d\phi^2+\sin^2\phi\,d\alpha^2)$ with dual coframe $e^1=R\,d\phi$, $e^2=R\sin\phi\,d\alpha$, and the positively oriented area form is $dA=e^1\wedge e^2=R^2\sin\phi\,d\phi\wedge d\alpha$. Since only $g_{\alpha\alpha}=R^2\sin^2\phi$ depends on the coordinates, the Christoffel formula gives $\Gamma^\phi{}_{\alpha\alpha}=-\sin\phi\cos\phi$, $\Gamma^\alpha{}_{\phi\alpha}=\Gamma^\alpha{}_{\alpha\phi}=\cot\phi$ and all other symbols zero, hence $\nabla_{e_1}e_1=0$ and $\nabla_{e_2}e_1=(\cos\phi/R)e_2$. Therefore $\omega(e_1)=0$, $\omega(e_2)=\cos\phi/R$ and $\omega=\cos\phi\,d\alpha$. [F7, step 3.2, algebra]

5.1 Exterior differentiation in step 4.2 gives $d\omega=-\sin\phi\,d\phi\wedge d\alpha$, while $dA=R^2\sin\phi\,d\phi\wedge d\alpha$; comparing with $d\omega=-K\,dA$ from [F7] yields $K=1/R^2$ on $U_i\setminus\{P_i\}$, and this holds for each $i$ because the metric expression of step 3.2 is the same in every chart. The polar frame of step 4.2 is undefined at $P_i$. To cover that point, apply smooth Gram–Schmidt to the coordinate basis $(\partial_a,\partial_b)$ of the smooth metric from step 3.1 on all of $U_i$. Its positive orthonormal frame has a smooth connection form and a nowhere-zero smooth area form, so [F7] makes $K=-(d\omega_{\mathrm{cart}})/dA_{\mathrm{cart}}$ smooth throughout $U_i$. By continuity, the equality $K=1/R^2$ on the punctured chart extends to $P_i$, and the charts cover $\mathbb{RP}^2$. [F4, F7, step 3.1, step 4.2, algebra]

5.2 Let $A\subseteq U_i$ be Borel. A chart partition of $\mathbb{RP}^2$ may be refined so that $U_i$ is a union of its parts; applying [F5] to these parts, and using that the density coefficient is the same smooth function $\rho_i$ in the coordinates $\Psi_i$, gives $\mu_g(A)=\int_{\Psi_i(A)}\rho_i\,d\lambda_2$, and by the bound $\rho_i\le R^2$ of step 4.1 together with monotonicity of the integral, $\mu_g(A)\le R^2\lambda_2(\Psi_i(A))$. Consequently $\mu_g(L\cap U_0)=\mu_g(L\cap U_1)=0$ by step 3.3 and [F8], and since $L=(L\cap U_0)\cup(L\cap U_1)$ with $\mu_g$ a measure, $\mu_g(L)\le\mu_g(L\cap U_0)+\mu_g(L\cap U_1)=0$, so $\mu_g(L)=0$. The same bound with $A=\{q\}$ shows that every point $q$ of $\mathbb{RP}^2$ is $\mu_g$-null, since some chart $U_i$ contains $q$ and the image of a point under $\Psi_i$ is a Lebesgue-null singleton. [F5, F8, step 4.1, step 3.3]

6.1 The two sets $U_2=\pi(H_2)$ and $L=\mathbb{RP}^2\setminus U_2$ are disjoint and exhaust $\mathbb{RP}^2$, so additivity of the measure and step 5.2 give $\mu_g(\mathbb{RP}^2)=\mu_g(U_2)+\mu_g(L)=\mu_g(U_2)$. [F5, step 5.2]

7.1 By steps 5.2 and 4.1, $\mu_g(U_2)=\int_{\Psi_2(U_2)}\rho_2\,d\lambda_2=\int_{\mathbb R^2}R^2(1+a^2+b^2)^{-3/2}\,da\,db$. The integrand is radial, so the polar-coordinate formula [F6] evaluates it as $\mu_g(U_2)=R^2\sigma(S^1)\int_0^\infty r(1+r^2)^{-3/2}\,dr=R^2\cdot2\pi\cdot[-(1+r^2)^{-1/2}]_0^\infty=2\pi R^2$, the antiderivative being checked by differentiation and its limit at infinity being $0$. With step 6.1 this gives $\operatorname{area}_g(\mathbb{RP}^2)=\mu_g(\mathbb{RP}^2)=2\pi R^2$. [F6, step 5.2, step 6.1, algebra]

8.1 Since $\{P_0,P_1,P_2\}$ is $\mu_g$-null by step 5.2 and $K=1/R^2$ off that set by step 5.1, the integrands $K$ and the constant $1/R^2$ agree $\mu_g$-almost everywhere; by [F8] their integrals against $\mu_g$ coincide, and the constant is integrable because $\mu_g$ is finite on the compact surface $\mathbb{RP}^2$ with total mass $2\pi R^2$ from step 7.1. Hence $\int_{\mathbb{RP}^2}K\,\mu_g=R^{-2}\mu_g(\mathbb{RP}^2)=2\pi$. [F5, F8, step 5.1, step 5.2, step 7.1]

9.1 The surface $\mathbb{RP}^2$ is closed and compact, and $\pi$ is a two-to-one local isometry from the connected sphere, so $\mathbb{RP}^2$ is nonorientable by [F9]; [F10] therefore applies to $(M,g)=(\mathbb{RP}^2,g)$ and gives $\int_{\mathbb{RP}^2}K\,\mu_g=2\pi\chi(\mathbb{RP}^2)$. Comparing with step 8.1 yields $\chi(\mathbb{RP}^2)=1$, and the total curvature is $2\pi$. The full-choice assumption entered only through [F10] and the polar formula of [F6]. [A1, F9, F10, step 8.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, printed pp. 156-172, gives the local formula (Theorem 9.3) whose constant-curvature boundary case is the round sphere of curvature $R^{-2}$ and the global face-and-vertex formula (Theorem 9.7) applied here to the antipodal quotient; Datar, *Lectures on Riemannian Geometry*, Lecture 2, printed pp. 13-15, states the global formula and its orientation-free curvature density for nonorientable closed surfaces (Remark 2.2.6). The quotient charts, the pushed-forward metric, the density computation in polar coordinates and the nullity of the equatorial circle are proved above; the Euler characteristic is computed from the curvature identity, not imported from surface classification.
