---
id: cex-emg-xs-constant-radius
kind: counterexample
title: Bertotti-Robinson has no non-null areal-radius coordinate
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-emg-xs-br-products
  - thm-emg-xs-br-verification
  - def-smooth-manifold
dependency_roles:
  def-emg-xs-br-products: mathematical-premise
  thm-emg-xs-br-verification: mathematical-premise
  def-smooth-manifold: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: David Tong, General Relativity, complete author-hosted lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: Section 6.2.5, Robinson-Bertotti product with constant sphere radius.
    - title: Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete 238-page lecture notes
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: Chapter 3, differential-geometric coordinate conventions; the area-radius obstruction is computed locally.
verification:
  precheck: pass
---

## Statement refuted

For every datum in [[def-emg-xs-br-products]], the function that assigns to each base point the square root of the area of its spherical factor divided by $4\pi$ is a local coordinate on the four-manifold.

## Facts & Assumptions

**Given:** The product metric and sphere factor of [[def-emg-xs-br-products]], and its verified field equations.

[F1] [[def-emg-xs-br-products]] gives the induced metric $L^2\gamma_{S^2}$ on each sphere factor, with $L>0$ constant.

[F2] [[thm-emg-xs-br-verification]] proves that this product data is a geometric electrovac datum.

[F3] [[def-smooth-manifold]] defines a smooth chart as a coordinate map in the smooth atlas, with smooth transition maps and smooth coordinate parametrizations.

[A1] Use any $L>0$ and either admissible positive function $f$ in [[def-emg-xs-br-products]].

## Counterexample

1.1 Parametrize the unit sphere away from its seam and poles by $\Phi(\theta,\phi)=(\sin\theta\cos\phi,\sin\theta\sin\phi,\cos\theta)$. The tangent vectors $\Phi_\theta$ and $\Phi_\phi$ are orthogonal, with squared lengths $1$ and $\sin^2\theta$, so the induced metric is $d\theta^2+\sin^2\theta\,d\phi^2$ and its outward area form is $\omega_{S^2}=\sin\theta\,d\theta\wedge d\phi$. The omitted seam and poles are chart-boundary sets of two-dimensional measure zero. Hence $\int_{S^2}\omega_{S^2}=\int_0^{2\pi}\int_0^\pi\sin\theta\,d\theta\,d\phi=4\pi$. The radius-$L$ sphere factor has area form $L^2\omega_{S^2}$ and area $4\pi L^2$. Thus its area-radius function is $R_A=\sqrt{(4\pi L^2)/(4\pi)}=L$ at every $(\tau,z)$. [given, F1, A1, algebra]

2.1 The function $R_A$ is constant, so $dR_A=0$ everywhere. If it were a coordinate function in a chart $\varphi:U\to V\subset\mathbb R^4$ at $p$, let $e_j$ be the coordinate vector for its component. Since $V$ is open, $\varphi(p)+te_j\in V$ for all sufficiently small $t$, and the chart's smooth coordinate parametrization gives a smooth curve $\gamma(t)=\varphi^{-1}(\varphi(p)+te_j)$. Then $R_A(\gamma(t))=\varphi^j(p)+t$, whose derivative at $t=0$ is $1$; thus $dR_A|_p(\gamma'(0))=1$, contradicting $dR_A|_p=0$. Therefore $R_A$ cannot be a local coordinate. [given, F3, step 1.1, algebra]

3.1 By [F2], the example is an actual source-free electrovac product datum, so the failure is not caused by a missing field-equation condition. It refutes the universal claim in the Statement. [given, F2, step 2.1] ∎
