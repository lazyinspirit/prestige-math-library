---
id: ex-hyperbolic-space-has-negative-constant-sectional-curvature
kind: example
title: Hyperbolic space has negative constant sectional curvature
status: published
origin: pipeline
deps: ["def-countable-choice","prop-coordinate-criterion-for-a-riemannian-metric","prop-christoffel-formula-for-the-levi-civita-connection","prop-coordinate-formula-for-the-curvature-tensor","thm-curvature-is-a-type-one-three-tensor","def-riemann-curvature-four-tensor","def-sectional-curvature"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Example 8.2.6, printed page 49
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Proposition 3.5(c), printed pages 38–42, and Sectional Curvatures of the Model Spaces, printed pages 148–149
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[def-sectional-curvature]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

Let $r>0$ and $n\ge1$, and put

$$U^n=\{(x^1,\ldots,x^n)\in\mathbb R^n:x^n>0\},\qquad g=\frac{r^2}{(x^n)^2}\sum_{a=1}^n dx^a\otimes dx^a.$$

For $n\ge2$, this metric has constant sectional curvature $-1/r^2$. For
$n=1$, its sectional-curvature domain is empty. Apart from the stated inherited $\mathrm{AC}_\omega$, the calculation makes no additional countable-family choice.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a real number $r>0$, an integer $n\ge1$, and the global coordinates
on $U^n$; when $n\ge2$, also a point and a tangent two-plane there.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[def-sectional-curvature]]; after those supplied interfaces are fixed, the remaining local or finite calculation makes no additional countable-family choice.

[F1] Smooth symmetric positive-definite coordinate matrices define Riemannian metrics. [[prop-coordinate-criterion-for-a-riemannian-metric]].

[F2] The Levi–Civita Christoffel symbols are obtained from the metric and its first derivatives by the standard coordinate formula. [[prop-christoffel-formula-for-the-levi-civita-connection]].

[F3] With the page's index order, $R^\ell{}_{kij}=\partial_i\Gamma^\ell{}_{jk}-\partial_j\Gamma^\ell{}_{ik}+\Gamma^m{}_{jk}\Gamma^\ell{}_{im}-\Gamma^m{}_{ik}\Gamma^\ell{}_{jm}$. [[prop-coordinate-formula-for-the-curvature-tensor]].

[F4] Curvature is a smooth type $(1,3)$ tensor, so an identity on coordinate basis vectors extends multilinearly to all tangent vectors. [[thm-curvature-is-a-type-one-three-tensor]].

[F5] The four-tensor is $\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$, and sectional curvature divides $\operatorname{Rm}(u,v,v,u)$ by the positive Gram determinant. [[def-riemann-curvature-four-tensor]], [[def-sectional-curvature]].

## Verification

**Proof technique:** direct coordinate calculation.

1.1 Write $h=x^n>0$. The metric and inverse matrices are $g_{ij}=r^2h^{-2}\delta_{ij}$ and $g^{ij}=r^{-2}h^2\delta^{ij}$. The first is smooth and symmetric, and $g_{ij}v^iv^j=r^2h^{-2}\sum_i(v^i)^2>0$ for $v\ne0$, so [F1] makes $g$ Riemannian. [F1, algebra]

2.1 Put $\epsilon_i=\delta_{in}$ and $\epsilon^k=\delta^k_n$. Since $\partial_p g_{ij}=-2r^2h^{-3}\epsilon_p\delta_{ij}$, substitution in [F2] gives $\Gamma^k{}_{ij}=-h^{-1}(\epsilon_i\delta^k_j+\epsilon_j\delta^k_i-\delta_{ij}\epsilon^k)$. [F2, step 1.1, algebra]

3.1 Define $A^\ell{}_{jk}=\epsilon_j\delta^\ell_k+\epsilon_k\delta^\ell_j-\delta_{jk}\epsilon^\ell$, so step 2.1 says $\Gamma^\ell{}_{jk}=-h^{-1}A^\ell{}_{jk}$ and $\partial_i\Gamma^\ell{}_{jk}=h^{-2}\epsilon_iA^\ell{}_{jk}$. The derivative difference in [F3] expands to $h^{-2}(\epsilon_i\epsilon_k\delta^\ell_j-\epsilon_i\delta_{jk}\epsilon^\ell-\epsilon_j\epsilon_k\delta^\ell_i+\epsilon_j\delta_{ik}\epsilon^\ell)$, while the two contracted quadratic terms expand to $h^{-2}(\delta^\ell_i\epsilon_j\epsilon_k-\delta^\ell_j\epsilon_i\epsilon_k-\delta_{ik}\epsilon_j\epsilon^\ell+\delta_{jk}\epsilon_i\epsilon^\ell-\delta_{jk}\delta^\ell_i+\delta_{ik}\delta^\ell_j)$. The first four terms cancel pairwise, leaving $R^\ell{}_{kij}=h^{-2}(\delta_{ik}\delta^\ell_j-\delta_{jk}\delta^\ell_i)$. [F3, step 2.1, algebra]

4.1 Since $g_{ik}=r^2h^{-2}\delta_{ik}$, step 3.1 is $R(\partial_i,\partial_j)\partial_k=-(1/r^2)(g_{jk}\partial_i-g_{ik}\partial_j)$. Tensoriality [F4] yields $R(X,Y)Z=-(1/r^2)(g(Y,Z)X-g(X,Z)Y)$ for arbitrary tangent vectors. Pairing with $X=u$ after setting $Y=Z=v$, [F5] gives $\operatorname{Rm}(u,v,v,u)=-(1/r^2)(g(u,u)g(v,v)-g(u,v)^2)$. For a basis $(u,v)$ of any tangent two-plane, the Gram determinant is positive, so [F5] yields $K=-1/r^2$ at every point and on every plane. [A1, F4, F5, step 3.1, algebra]

5.1 The half-space is nonempty, for example at $(0,\ldots,0,1)$, and is open and boundaryless. Dimension zero is inapplicable because the defining coordinate $x^n$ requires $n\ge1$; when $n=1$, step 3.1 gives zero curvature as it must, but there is no tangent two-plane, so the constant-sectional-curvature predicate is vacuous. For $n\ge2$, [F5] excludes degenerate Gram denominators. The conditions $h>0$ and $r>0$ exclude the singular height endpoint and the degenerate scale $r=0$; no limiting assertion is made. Every coordinate, tensor, point, and plane basis is explicit or supplied, so no further family choice is made beyond the stated inherited assumption. The result assigns one value to every plane and states no biconditional. [F1, F5, step 1.1, step 2.1, step 3.1, step 4.1] ∎
