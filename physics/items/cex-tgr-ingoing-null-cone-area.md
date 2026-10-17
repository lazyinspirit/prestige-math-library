---
id: cex-tgr-ingoing-null-cone-area
kind: counterexample
title: Flat focusing cone without future smooth completeness
status: published
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement refuted

Let $(\mathcal M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, let $H\subset\mathcal M$ be a smooth null hypersurface, and let $k$ be a smooth nowhere-zero future-directed section of the radical of $g|_{TH}$ with $\nabla_k k=0$, as in [[def-tgr-horizon-screen-family]]. Use the Ricci tensor defined by contraction of the curvature operator in [[def-gr-curvature-tensor-and-derived-tensors]]. Let $S_0\subset H$ be a compact smooth embedded two-dimensional submanifold with positive-definite induced metric and $T_xH=T_xS_0\oplus\mathbb Rk_x$. For finite $\lambda_* > \lambda_0$, suppose $\Phi:[\lambda_0,\lambda_*)\times S_0\to H$ is smooth, $\Phi(\lambda_0,x)=x$, $\partial_\lambda\Phi=k\circ\Phi$, and every $\Phi_\lambda$ is an embedding with compact image and positive-definite induced metric. Assume $\mathrm{AC}_\omega$ for intrinsic density integration, as in [[thm-tgr-smooth-null-area]], and use that theorem's definitions $q_\lambda:=\Phi_\lambda^*g$, $\mu_{q_\lambda}$, and $A(\lambda):=\int_{S_0}\mu_{q_\lambda}$. The claim that $\operatorname{Ric}_{\Phi(\lambda,x)}(k,k)\ge0$ throughout this finite future flow implies that $A$ is nondecreasing is false. Thus null convergence alone does not guarantee area monotonicity when the affine flow is given only up to a finite future parameter.

## Facts & Assumptions

**Given:** Four-dimensional Minkowski space $\mathbb R^{1,3}$ with metric $-dt^2+\sum_{i=1}^3dx_i^2$, equipped with the time orientation selected by $N=\partial_t$, and the definitions of null screen, expansion and area in [[def-tgr-horizon-screen-family]].

[F1] [[def-gr-smooth-lorentzian-objects]] fixes the signature $(-,+,+,+)$ and defines a nonzero causal vector $v$ as future-directed when $g(v,N)<0$ for the specified smooth timelike time-orientation field $N$.

[F2] [[def-gr-curvature-tensor-and-derived-tensors]] defines curvature and Ricci by contraction of the curvature operator; [[thm-gr-curvature-tensoriality-and-coordinate-formula]] supplies its coordinate expression.

[F3] [[def-tgr-horizon-screen-family]] defines affine null generators, $B$, $\theta$, and the screen metric.

[F4] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] supplies the metric-compatible connection and its Christoffel formula; constant Cartesian metric components therefore give zero Christoffel symbols.

[F5] [[thm-tgr-smooth-null-area]] requires the initial cut to have positive-definite induced metric and satisfy $T_xH=T_xS_0\oplus\mathbb Rk_x$, and every future cut to persist as a smooth embedded surface with positive-definite induced metric on the full future half-line; finite affine endpoints/caustics are excluded by the persistence hypothesis.

[F6] [[def-gr-smooth-lorentzian-objects]], Facts [F2]: the positive square root is smooth by repeated differentiation on $(0,\infty)$, so $r=\sqrt{x_1^2+x_2^2+x_3^2}$ is smooth where $r>0$.

## Counterexample

1.1 On $\mathbb R^{1,3}\setminus\{x=0\}$ put $r=\sqrt{x_1^2+x_2^2+x_3^2}$, $n_i=x_i/r$, $H=\{t+r=0,\ r>0\}$, and $k=\partial_t-\sum_i n_i\partial_{x_i}$. By [F6], $r$ is smooth for $r>0$, so $H$ is a smooth embedded hypersurface. Its normal covector is $d(t+r)=dt+dr$, whose Minkowski dual is $-\partial_t+\partial_r=-k$ and whose squared norm is zero; hence $H$ is null and $k$ is a null normal tangent to $H$. Moreover $g(k,N)=-1<0$, so $k$ is future-directed by [F1]. [F1, F3, F6, given, algebra]

1.2 The components of the Minkowski metric are constant in the global Cartesian chart, so [F4]'s Christoffel formula gives zero Christoffel symbols. The coordinate curvature formula in [F2] then gives $R^a{}_{bcd}=0$ and hence $\operatorname{Ric}(k,k)=0$. Also $k(r)=-1$ and $k(n_i)=k(x_i/r)=(-n_i r+x_i)/r^2=0$, so the Cartesian components of $k$ are constant along each integral curve and $\nabla_k k=0$. Choose $r_0>0$ and set $\lambda_0:=-r_0$; then the initial round cut $S_{\lambda_0}:=\{t=\lambda_0,\ r=r_0\}$ lies on $H$. Along each generator from this cut, $\lambda=t$ is affine and $r(\lambda)=r_0-(\lambda-\lambda_0)>0$ for $\lambda_0\le\lambda<\lambda_*:=\lambda_0+r_0=0$. [F1, F2, F3, F4, algebra]

2.1 For $\lambda_0\le\lambda<\lambda_*=0$, the cut $S_\lambda:=\{t=\lambda,\ r=r(\lambda)\}$ lies in $H$ because $\lambda+r(\lambda)=\lambda_0+r_0=0$. It is a round two-sphere of radius $r(\lambda)>0$ with induced metric $r(\lambda)^2(d\vartheta^2+\sin^2\vartheta\,d\varphi^2)$ and area $A(\lambda)=\int_0^{2\pi}\int_0^\pi r(\lambda)^2\sin\vartheta\,d\vartheta\,d\varphi=4\pi r(\lambda)^2$. The metric is positive definite on each cut. Since $H$ is spanned by the radial generator $k=\partial_t-\partial_r$ and the two angular tangent directions, $T_pH=T_pS_\lambda\oplus\mathbb Rk_p$ at every prevertex point; in particular the initial cut satisfies the positive-definite and transversality conditions of [F5]. In a screen-orthonormal basis, for any screen vector $X$ one has $\nabla_X k=-X(n_i)\partial_{x_i}=-X/r$, because $X(r)=0$ and $X(x_i)=X_i$; hence $B=-\bar g/r$, $\theta=-2/r$, and directly $A'(\lambda)=-8\pi r(\lambda)<0$. [F3, F5, step 1.2, algebra]

3.1 At the finite future parameter $\lambda_*=\lambda_0+r_0=0$, every generator from the initial sphere reaches the common vertex $r=0$. The cone ceases to be a smooth embedded null hypersurface there and the flow map collapses the two-sphere to one point, so the future-persistent embedded-cut hypothesis [F5] fails. The strict area decrease on each smooth pre-vertex interval therefore refutes the stated weaker claim without contradicting [[thm-tgr-smooth-null-area]]. [F5, step 1.1, step 1.2, step 2.1, given, algebra] ∎

## Remarks

The example has zero Ricci contraction and negative expansion on a finite smooth segment. Its future affine incompleteness at the cone vertex is the exact missing hypothesis; it makes no claim about an event horizon.

