---
id: cex-tgr-ingoing-null-cone-area
kind: counterexample
title: Flat focusing cone without future smooth completeness
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-gr-smooth-lorentzian-objects
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-tgr-horizon-screen-family
  - def-gr-curvature-tensor-and-derived-tensors
  - thm-gr-curvature-tensoriality-and-coordinate-formula
  - thm-tgr-smooth-null-area
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-tgr-horizon-screen-family: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  thm-tgr-smooth-null-area: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), complete 238-page lecture notes"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.148)–(7.156), printed pp. 215–216 (PDF pp. 221–222), for the Kerr area-law and classical-mechanics context; the cone calculation is local."
    - title: "Robert M. Wald, The Thermodynamics of Black Holes, Living Reviews in Relativity 4 (2001), 6"
      url: https://arxiv.org/pdf/gr-qc/9912119
      locator: "Section 2, PDF pp. 3–5, for focusing under null convergence and the need for future extension/global horizon hypotheses."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 3.3, equations (3.18)–(3.21), for explicit null horizon-generator context; no KN calculation is used in this flat counterexample."
verification:
  precheck: pending
---

## Statement refuted

The claim that $\operatorname{Ric}(k,k)\ge0$ alone forces the area of every smooth compact cross-section of every future null congruence to be nondecreasing, even when its smooth affine description ends at a finite future parameter, is false.

## Facts & Assumptions

**Given:** Four-dimensional Minkowski space with metric $-dt^2+\sum_{i=1}^3dx_i^2$, and the definitions of null screen, expansion and area in [[def-tgr-horizon-screen-family]].

[F1] [[def-gr-smooth-lorentzian-objects]] fixes the signature $(-,+,+,+)$ and causal conventions.

[F2] [[def-gr-curvature-tensor-and-derived-tensors]] defines curvature and Ricci by contraction of the curvature operator; [[thm-gr-curvature-tensoriality-and-coordinate-formula]] supplies its coordinate expression.

[F3] [[def-tgr-horizon-screen-family]] defines affine null generators, $B$, $\theta$, and the screen metric.

[F4] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] supplies the metric-compatible connection and its Christoffel formula; constant Cartesian metric components therefore give zero Christoffel symbols.

[F5] [[thm-tgr-smooth-null-area]] requires every future flow cut to persist as a smooth embedded spacelike surface on the full future half-line; finite affine endpoints/caustics are excluded by that hypothesis.

[F6] [[def-gr-smooth-lorentzian-objects]], Facts [F2]: the positive square root is smooth by repeated differentiation on $(0,\infty)$, so $r=\sqrt{x_1^2+x_2^2+x_3^2}$ is smooth where $r>0$.

## Counterexample

1.1 On $\mathbb R^{1,3}\setminus\{x=0\}$ put $r=\sqrt{x_1^2+x_2^2+x_3^2}$, $n_i=x_i/r$, $H=\{t+r=0,\ r>0\}$, and $k=\partial_t-\sum_i n_i\partial_{x_i}$. By [F6], $r$ is smooth for $r>0$, so $H$ is a smooth embedded hypersurface. Its normal covector is $d(t+r)=dt+dr$, whose Minkowski dual is $-\partial_t+\partial_r=-k$ and whose squared norm is zero; hence $H$ is null and $k$ is a future null normal tangent to $H$. [F1, F3, F6, given, algebra]

1.2 The components of the Minkowski metric are constant in the global Cartesian chart, so [F4]'s Christoffel formula gives zero Christoffel symbols. The coordinate curvature formula in [F2] then gives $R^a{}_{bcd}=0$ and hence $\operatorname{Ric}(k,k)=0$. Also $k(r)=-1$ and $k(n_i)=k(x_i/r)=(-n_i r+x_i)/r^2=0$, so the Cartesian components of $k$ are constant along each integral curve and $\nabla_k k=0$. Thus the generator parameter $\lambda=t$ is affine and $r(\lambda)=r_0-(\lambda-\lambda_0)$ until the vertex. [F1, F2, F3, F4, algebra]

2.1 Each cut $S_\lambda:=\{t=\lambda,\ r=r(\lambda)\}$ is a round two-sphere of radius $r(\lambda)>0$ with induced metric $r(\lambda)^2(d\vartheta^2+\sin^2\vartheta\,d\varphi^2)$ and area $A(\lambda)=\int_0^{2\pi}\int_0^\pi r(\lambda)^2\sin\vartheta\,d\vartheta\,d\varphi=4\pi r(\lambda)^2$. In a screen-orthonormal basis, for any screen vector $X$ one has $\nabla_X k=-X(n_i)\partial_{x_i}=-X/r$, because $X(r)=0$ and $X(x_i)=X_i$; hence $B=-\bar g/r$, $\theta=-2/r$, and directly $A'(\lambda)=-8\pi r(\lambda)<0$. [F3, step 1.2, algebra]

3.1 At the finite future parameter $\lambda_*=\lambda_0+r_0$, every generator from the initial sphere reaches the common vertex $r=0$. The cone ceases to be a smooth embedded null hypersurface there and the flow map collapses the two-sphere to one point, so the future-persistent embedded-cut hypothesis [F5] fails. The strict area decrease on each smooth pre-vertex interval therefore refutes the stated weaker claim without contradicting [[thm-tgr-smooth-null-area]]. [F5, step 1.1, step 1.2, step 2.1, given, algebra] ∎

## Remarks

The example has zero Ricci contraction and negative expansion on a finite smooth segment. Its future affine incompleteness at the cone vertex is the exact missing hypothesis; it makes no claim about an event horizon.

