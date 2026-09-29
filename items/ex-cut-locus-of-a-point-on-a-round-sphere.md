---
id: ex-cut-locus-of-a-point-on-a-round-sphere
kind: example
title: Cut locus of a point on a round sphere
status: draft
origin: pipeline
deps:
  - cor-euclidean-spheres-are-path-connected
  - cor-trigonometric-parity-and-pythagorean-identity
  - cor-vector-valued-ftc-and-lipschitz-bound
  - def-countable-choice
  - def-cut-point-and-cut-locus-of-a-point
  - def-cut-time-in-a-unit-tangent-direction
  - def-euclidean-inner-product
  - def-geodesic-of-an-affine-connection
  - def-geodesically-complete-riemannian-manifold
  - def-induced-connection-and-second-fundamental-form
  - def-principal-inverse-sine-and-cosine
  - def-riemannian-distance-on-a-connected-manifold
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-speed-and-length
  - ex-the-euclidean-levi-civita-connection
  - prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions
  - prop-tangent-space-of-a-regular-level-set-is-the-kernel
  - thm-a-regular-level-set-is-an-embedded-submanifold
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-chain-rule
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - thm-hopf-rinow
  - thm-monotonicity-of-the-integral
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-principal-inverse-sine-and-cosine-derivatives
  - thm-sine-and-cosine-derivatives
  - thm-the-induced-connection-is-levi-civita
  - thm-quarter-turn-values-and-shift-formulas
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "Section 5, Example 5.1, printed p.16: states the unit-sphere cut time but supplies no proof; the radius-R distance and cut-time calculation are proved locally here."
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, printed p.190 (PDF P206), lines 7559-7571: finite cut-point/cut-locus convention; the sphere calculation is proved locally here."
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Example

Assume exactly $\mathrm{AC}_\omega$ through the declared dependencies. Let
$$S_R^n=\{x\in\mathbb R^{n+1}:\langle x,x\rangle=R^2\},\qquad R>0,\quad n\ge2,$$
with the Riemannian metric induced by the Euclidean inner product. For every
$p\in S_R^n$ and unit $v\in T_pS_R^n$, the cut time is
$$c_p(v)=\pi R,$$
and the cut locus is the singleton
$$\operatorname{Cut}(p)=\{-p\}.$$

## Facts & Assumptions

**Given:** $R>0$, an integer $n\ge2$, and a point $p$ on the radius-$R$ round sphere, with the metric induced from $\mathbb R^{n+1}$.

[A1] $\mathrm{AC}_\omega$ is the countable-choice assumption of [[def-countable-choice]]. It is used through the induced Levi-Civita connection, maximal-geodesic uniqueness, Hopf--Rinow, and the cut-time/cut-locus interfaces below. No full axiom of choice is used.

[F1] The level set $S_R^n=F^{-1}(R^2)$ for $F(x)=\langle x,x\rangle$ is nonempty and regular: $Re_{n+1}\in S_R^n$, and at every $x\in S_R^n$, $dF_x(x)=2R^2\ne0$. Thus [[thm-a-regular-level-set-is-an-embedded-submanifold]] gives a smooth boundaryless $n$-manifold, while [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]] gives $T_xS_R^n=x^\perp$. The inclusion is an immersion, so [[prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions]] and [[def-riemannian-metric-and-riemannian-manifold]] make the restricted Euclidean inner product a Riemannian metric ([[def-euclidean-inner-product]]).

[F2] The radial scaling $x\mapsto x/R$ is a homeomorphism from $S_R^n$ to the unit sphere $S^n$. Since $n\ge2$, [[cor-euclidean-spheres-are-path-connected]] makes $S^n$, and hence $S_R^n$, connected. Nonemptiness and the boundaryless manifold property were checked in [F1].

[F3] In Euclidean coordinates the ambient Levi-Civita derivative is ordinary differentiation ([[ex-the-euclidean-levi-civita-connection]]). For an embedded submanifold, the induced connection is the tangential projection of the ambient derivative ([[def-induced-connection-and-second-fundamental-form]]); under [A1], [[thm-the-induced-connection-is-levi-civita]] identifies it with the Levi-Civita connection of the induced metric.

[F4] An affine geodesic satisfies $D_t\dot\gamma=0$ ([[def-geodesic-of-an-affine-connection]]). Under [A1], every initial tangent vector has a unique maximal geodesic ([[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]]), and [[def-geodesically-complete-riemannian-manifold]] means each such maximal domain is $\mathbb R$.

[F5] Under [A1], Hopf--Rinow says that a nonempty, connected, boundaryless Riemannian manifold is metrically complete exactly when it is geodesically complete ([[thm-hopf-rinow]]).

[F6] On this connected manifold, distance is the infimum of lengths of piecewise-$C^1$ joining paths, and length is the sum of the integrals of Riemannian speed over their smooth pieces ([[def-riemannian-distance-on-a-connected-manifold]], [[def-riemannian-speed-and-length]]).

[F7] Euclidean Cauchy--Schwarz holds ([[thm-cauchy-schwarz-in-an-inner-product-space]]); the chain rule applies ([[thm-chain-rule]]); sine and cosine have their usual derivatives and satisfy $\sin^2s+\cos^2s=1$ ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]]). Also $\cos\pi=-1$ and $\sin\pi=0$ ([[thm-quarter-turn-values-and-shift-formulas]]). The principal inverse cosine is the continuous inverse of cosine restricted to $[0,\pi]$ and has range $[0,\pi]$ ([[def-principal-inverse-sine-and-cosine]]); on $(-1,1)$ its derivative is $-1/\sqrt{1-y^2}$ ([[thm-principal-inverse-sine-and-cosine-derivatives]]).

[F8] For a differentiable real-valued function with integrable derivative, the vector-valued fundamental theorem and norm inequality give $|f(b)-f(a)|\le\int_a^b|f'|$ ([[cor-vector-valued-ftc-and-lipschitz-bound]], [[thm-norm-inequality-for-the-vector-valued-integral]]). Pointwise comparison of integrable functions passes to their integrals ([[thm-monotonicity-of-the-integral]]).

[F9] Under the completeness, connectedness, boundaryless, and $\mathrm{AC}_\omega$ hypotheses, the cut time is the supremum of the positive radial minimizing times and the cut locus consists of finite cut-time endpoints ([[def-cut-time-in-a-unit-tangent-direction]], [[def-cut-point-and-cut-locus-of-a-point]]).

## Verification

**Proof technique:** explicit great-circle geodesics and an angular length bound.

1.1 The defining function $F(x)=\langle x,x\rangle$ has derivative $dF_x(w)=2\langle x,w\rangle$. Since $x\ne0$ on $S_R^n$, this derivative is surjective onto $\mathbb R$ at every level-set point. By [F1], $S_R^n$ is a nonempty, connected, boundaryless Riemannian $n$-manifold and $T_xS_R^n=x^\perp$. [A1, F1, F2, given]

1.2 Fix $q\in S_R^n$ and any piecewise-$C^1$ path $\alpha:[0,1]\to S_R^n$ from $p$ to $q$. On each smooth piece put $u(s)=\langle p,\alpha(s)\rangle/R^2$. Cauchy--Schwarz in [F7] gives $|u|\le1$. Differentiating $|\alpha|^2=R^2$ gives $\langle\alpha,\dot\alpha\rangle=0$, and hence $$u'=\frac{\langle p-u\alpha,\dot\alpha\rangle}{R^2},\qquad |p-u\alpha|=R\sqrt{1-u^2},\qquad |u'|\le\frac{\sqrt{1-u^2}}{R}|\dot\alpha|.$$ For $0<\varepsilon<1$, define $\theta_\varepsilon=\arccos((1-\varepsilon)u)$. Its argument lies strictly between $-1$ and $1$, so [F7] and the chain rule give $$|\theta_\varepsilon'|=\frac{(1-\varepsilon)|u'|}{\sqrt{1-(1-\varepsilon)^2u^2}}\le\frac{(1-\varepsilon)\sqrt{1-u^2}}{R\sqrt{1-(1-\varepsilon)^2u^2}}|\dot\alpha|\le\frac{|\dot\alpha|}{R}.$$ The last inequality follows because $1-(1-\varepsilon)^2u^2-(1-\varepsilon)^2(1-u^2)=1-(1-\varepsilon)^2\ge0$. [F7, algebra]

2.1 Fix $x\in S_R^n$ and $w\in T_xS_R^n$. If $w=0$, the constant curve is a geodesic on all of $\mathbb R$. Otherwise set $a=|w|$ and define $$\gamma_{x,w}(t)=\cos(at/R)x+\frac{R}{a}\sin(at/R)w,\qquad t\in\mathbb R.$$ Since $\langle x,w\rangle=0$ and $|x|=R$, $|w|=a$, the trigonometric identity in [F7] gives $|\gamma_{x,w}(t)|=R$; differentiating gives $\gamma_{x,w}(0)=x$, $\dot\gamma_{x,w}(0)=w$, $|\dot\gamma_{x,w}(t)|=a$, and $\ddot\gamma_{x,w}(t)=-(a^2/R^2)\gamma_{x,w}(t)$. The acceleration is normal to the sphere, so its tangential projection vanishes. By [F3] this curve is an affinely parametrized geodesic. It is defined for every real $t$; uniqueness in [F4] identifies it with the maximal geodesic for $(x,w)$. Therefore the sphere is geodesically complete. [A1, F3, F4, F7, step 1.1]

2.2 On each smooth piece, [F8] yields $|\theta_\varepsilon(b)-\theta_\varepsilon(a)|\le \int_a^b|\theta_\varepsilon'|\le R^{-1}\int_a^b|\dot\alpha|$. Summing over the pieces and using the triangle inequality gives $|\theta_\varepsilon(1)-\theta_\varepsilon(0)|\le L_g(\alpha)/R$. As $\varepsilon\downarrow0$, continuity of the principal inverse cosine in [F7] gives $$R\arccos\!\left(\frac{\langle p,q\rangle}{R^2}\right)\le L_g(\alpha).$$ This lower bound holds for every competitor in [F6]. [F6, F7, F8, step 1.2, algebra]

3.1 The nonempty, connected, boundaryless hypotheses follow from step 1.1. Hopf--Rinow [F5] and geodesic completeness from step 2.1 therefore make $(S_R^n,d_g)$ metrically complete, as required by [F9]. [A1, F5, F9, step 1.1, step 2.1]

3.2 Put $\theta=\arccos(\langle p,q\rangle/R^2)\in[0,\pi]$. Since $|p|=|q|=R$ and $\langle p,q\rangle=R^2\cos\theta$, $|q-\cos\theta\,p|^2=R^2\sin^2\theta$, so $\theta=0$ implies $q=p$ and $\theta=\pi$ implies $q=-p$. If $0<\theta<\pi$, define $v=(q-\cos\theta\,p)/(R\sin\theta)$. Direct inner-product calculation gives $v\in p^\perp$ and $|v|=1$. The geodesic in step 2.1 with initial data $(p,v)$ reaches $q$ at time $R\theta$ and has unit speed. If $\theta=0$ then $q=p$ and the constant path has length zero. If $\theta=\pi$ then $q=-p$; because $n\ge2$, $p^\perp$ contains a unit vector $v$, and the same formula reaches $-p$ at time $\pi R$ with unit speed. Thus a path of length $R\theta$ exists in every case. Combining this upper bound with step 2.2 proves $$d_g(p,q)=R\arccos\!\left(\frac{\langle p,q\rangle}{R^2}\right).$$ [F1, F6, F7, step 2.1, step 2.2]

4.1 Let $v\in T_pS_R^n$ be any unit vector. Step 2.1 gives its radial geodesic $\gamma_v(t)=\cos(t/R)p+R\sin(t/R)v$. Hence $\langle p,\gamma_v(t)\rangle/R^2=\cos(t/R)$, and step 3.2 gives $$d_g(p,\gamma_v(t))=R\arccos(\cos(t/R)).$$ For $0<t\le\pi R$, the inverse-cosine definition in [F7] makes this equal to $t$. For $t>\pi R$, its range $[0,\pi]$ gives $d_g(p,\gamma_v(t))\le\pi R<t$. Thus the positive minimizing-time set is exactly $(0,\pi R]$, including the endpoint, and [F9] yields $c_p(v)=\pi R$. [A1, F7, F9, step 2.1, step 3.2]

5.1 At the finite endpoint, every unit direction has $\gamma_v(\pi R)=-p$. Since $n\ge2$, the tangent space has unit vectors, so the cut-point set in [F9] is nonempty and equals $\{-p\}$. The empty case cannot occur because $p$ is supplied and $S_R^n$ contains $Re_{n+1}$; the zero- and one-dimensional spheres are outside the stated $n\ge2$ claim. The zero initial vector in the completeness check was treated in step 2.1, and the degenerate angular case $q=p$ in step 3.2. The radius is strictly positive; the cut-time definition excludes $t=0$, includes $t=\pi R$, and every later time fails strictly by step 4.1. Choosing a unit vector for the single antipodal path in step 3.2 uses only the nonzero finite-dimensional tangent space for that supplied $p$, not a choice function on a family. Exactly the declared $\mathrm{AC}_\omega$ is propagated through [F3]--[F5] and [F9]; no full AC is used. This example makes no iff claim. [A1, F1, F3, F4, F5, F9, step 2.1, step 3.2, step 4.1] ∎

## Source locator

Eschenburg, *Comparison Theorems in Riemannian Geometry*, Section 5, Example 5.1 (printed p.16), states without proof that every unit-sphere direction has cut time $\pi$ and remains shortest up to the antipode. Lee, *Riemannian Manifolds*, Chapter 10, printed p.190 / PDF P206, lines 7559--7571, supplies the finite cut-point and cut-locus convention. The induced-sphere geodesic formula, angular distance lower bound, radius-$R$ scaling, and exact cut-time calculation are proved locally above.
