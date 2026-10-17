---
id: def-emg-xs-br-products
kind: definition
title: Constant-radius Bertotti-Robinson product data
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-emg-xs-geometric-electrovac
  - def-euclidean-spheres-and-closed-balls
  - ex-the-round-metric-on-the-sphere-as-an-induced-metric
dependency_roles:
  def-emg-xs-geometric-electrovac: mathematical-premise
  def-euclidean-spheres-and-closed-balls: mathematical-premise
  ex-the-round-metric-on-the-sphere-as-an-induced-metric: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: David Tong, General Relativity, complete author-hosted lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: Section 6.2.5, extremal Reissner-Nordström near-horizon geometry and the Robinson-Bertotti product.
    - title: Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete 238-page lecture notes
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: Chapters 3-4, curvature and Einstein-Maxwell conventions used for the local product calculation.
verification:
  precheck: n/a
---

## Sphere conventions

Write $S^2=\{p\in\mathbb R^3:p\cdot p=1\}$ with its usual smooth structure and induced round metric as in [[def-euclidean-spheres-and-closed-balls]] and [[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]. Explicitly, $T_pS^2=\{u\in\mathbb R^3:p\cdot u=0\}$ and $\gamma_{S^2,p}(u,v):=u\cdot v$. Use the outward orientation, whose area form is $\omega_{S^2,p}(u,v):=\det(p,u,v)$, with determinant in the standard orientation of $\mathbb R^3$.

## Definition

Let $S^2=\{n\in\mathbb R^3:|n|=1\}$ carry its induced unit round metric $\gamma_{S^2}$ and outward area form $\omega_{S^2}$. Let $L>0$ have length units. Choose either (i) $f(z)=z^2$ on an open $J\subset(0,\infty)$, or (ii) $f(z)=1+z^2$ on an open $J\subset\mathbb R$. The coordinate $z$ and $\tau$ are dimensionless. On $\mathcal M_{L,f}=\mathbb R_\tau\times J_z\times S^2$, orient by $d\tau\wedge dz\wedge\omega_{S^2}$ and define

$$g_{L,f}=L^2\bigl(-f(z)d\tau^2+f(z)^{-1}dz^2+\gamma_{S^2}\bigr),\qquad \mathcal F_L=-L\,d\tau\wedge dz.$$

The smooth field $N=(L\sqrt{f})^{-1}\partial_\tau$ is unit timelike; it selects the future direction. This explicit metric-field tuple is the **Bertotti-Robinson product data** for this library. “Electrovac” refers to the equations in [[def-emg-xs-geometric-electrovac]] and is not asserted by this definition. The product has sphere radius $L$ at every base point.
