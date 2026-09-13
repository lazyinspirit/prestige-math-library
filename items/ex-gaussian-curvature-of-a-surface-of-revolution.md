---
id: ex-gaussian-curvature-of-a-surface-of-revolution
kind: example
title: Gaussian curvature of a surface of revolution
status: draft
origin: pipeline
deps: ["def-countable-choice","prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions","prop-christoffel-formula-for-the-levi-civita-connection","prop-coordinate-formula-for-the-curvature-tensor","def-riemann-curvature-four-tensor","def-sectional-curvature"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Exercise 3.3(b)–(c), printed pages 25–26; Problem 5-2(a), printed page 87; Problem 8-1(a), printed page 150
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[def-sectional-curvature]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

Let $I,J\subseteq\mathbb R$ be open intervals, let $r,z:I\to\mathbb R$ be
smooth functions satisfying

$$r(u)>0,\qquad r'(u)^2+z'(u)^2=1,$$

and consider the surface-of-revolution parametrization

$$X(u,v)=\bigl(r(u)\cos v,r(u)\sin v,z(u)\bigr).$$

On each associated surface chart with the metric induced from Euclidean
$\mathbb R^3$, the Gaussian curvature is

$$K(u,v)=-\frac{r''(u)}{r(u)}.$$

Here Gaussian curvature means the sectional curvature of the unique tangent
two-plane of this Riemannian surface. No value at an axis $r=0$ is asserted,
and no further family choice is made beyond the stated inherited assumption.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the supplied intervals, smooth unit-speed profile with $r>0$, the
displayed local surface parametrization, and the standard Euclidean metric.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[def-sectional-curvature]]; after those supplied interfaces are fixed, the remaining local or finite calculation makes no additional countable-family choice.

[F1] A pullback of a Riemannian metric is Riemannian exactly when the map is an immersion. [[prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions]].

[F2] The Levi–Civita symbols of a coordinate metric are $\Gamma^k{}_{ij}=\frac12g^{k\ell}(\partial_i g_{j\ell}+\partial_jg_{i\ell}-\partial_\ell g_{ij})$. [[prop-christoffel-formula-for-the-levi-civita-connection]].

[F3] With $R(\partial_i,\partial_j)\partial_k=R^\ell{}_{kij}\partial_\ell$, the coordinate curvature formula is $R^\ell{}_{kij}=\partial_i\Gamma^\ell{}_{jk}-\partial_j\Gamma^\ell{}_{ik}+\Gamma^m{}_{jk}\Gamma^\ell{}_{im}-\Gamma^m{}_{ik}\Gamma^\ell{}_{jm}$. [[prop-coordinate-formula-for-the-curvature-tensor]].

[F4] The four-tensor is $\operatorname{Rm}(A,B,C,D)=g(R(A,B)C,D)$, and the sectional curvature of the plane spanned by independent $A,B$ is $\operatorname{Rm}(A,B,B,A)/(g(A,A)g(B,B)-g(A,B)^2)$. [[def-riemann-curvature-four-tensor]], [[def-sectional-curvature]].

## Verification

**Proof technique:** direct coordinate calculation.

1.1 Differentiation gives $X_u=(r'\cos v,r'\sin v,z')$ and $X_v=(-r\sin v,r\cos v,0)$. Their Euclidean inner products are $\langle X_u,X_u\rangle=r'^2+z'^2=1$, $\langle X_u,X_v\rangle=0$, and $\langle X_v,X_v\rangle=r^2$. Thus $dX$ is injective because $r>0$, so [F1] gives the induced Riemannian metric $g=du^2+r(u)^2dv^2$, with matrix $\operatorname{diag}(1,r^2)$ and inverse $\operatorname{diag}(1,r^{-2})$. [F1, given, algebra]

2.1 Write $x^1=u,x^2=v$. The only nonconstant metric entry is $g_{22}=r^2$, with $\partial_1g_{22}=2rr'$ and $\partial_2g_{22}=0$. Substitution in [F2] gives $\Gamma^1{}_{22}=-rr'$ and $\Gamma^2{}_{12}=\Gamma^2{}_{21}=r'/r$; every other $\Gamma^k{}_{ij}$ is zero. [F2, step 1.1, algebra]

3.1 In [F3], the component needed for the coordinate two-plane is $R^1{}_{2 1 2}=\partial_1\Gamma^1{}_{22}-\partial_2\Gamma^1{}_{12}+\Gamma^m{}_{22}\Gamma^1{}_{1m}-\Gamma^m{}_{12}\Gamma^1{}_{2m}$. By step 2.1 the four terms are $-(r'^2+rr'')$, $0$, $0$, and $+r'^2$, respectively; hence $R^1{}_{2 1 2}=-rr''$. [F3, step 2.1, algebra]

4.1 By [F4] and $g_{11}=1,g_{12}=0$, $\operatorname{Rm}(\partial_u,\partial_v,\partial_v,\partial_u)=g(R(\partial_u,\partial_v)\partial_v,\partial_u)=R^1{}_{2 1 2}=-rr''$. The Gram determinant of $(\partial_u,\partial_v)$ is $g_{11}g_{22}-g_{12}^2=r^2>0$, so the unique tangent two-plane has $K=(-rr'')/r^2=-r''/r$. [A1, F4, step 1.1, step 3.1, algebra]

5.1 If either parameter interval is empty, there are no points and the claim is vacuous; otherwise the chart is intrinsically two-dimensional, so zero- and one-dimensional curvature cases are inapplicable. The hypothesis $r>0$ makes the metric and Gram determinant nondegenerate; at $r=0$ this parametrization loses its angular direction, so the formula asserts neither a value nor a limit there. The intervals are open, so no parameter endpoint or manifold-boundary value is claimed. All functions, coordinates, and tangent vectors are explicitly supplied, and the computation makes no family selection, so no further family choice is made beyond the stated inherited assumption. The claim is an equality, not a biconditional. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, step 4.1] ∎
