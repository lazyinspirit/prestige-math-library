---
id: def-emg-xs-null-wave
kind: definition
title: Smooth null electrovac wave candidate data
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-emg-xs-geometric-electrovac
dependency_roles:
  def-emg-xs-geometric-electrovac: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete 238-page lecture notes
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: Chapter 3, curvature conventions, and Chapter 4, Maxwell fields on curved spacetime; the exact wave profile is defined locally.
    - title: David Tong, General Relativity, complete author-hosted lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: Sections 3-4, differential-form and Einstein-Maxwell conventions; the exact wave profile is defined and verified locally.
verification:
  precheck: n/a
---

## Definition

Use length coordinates $(u,v,x,y)$ on $\mathbb R^4$. Let $a,b:\mathbb R\to\mathbb R$ be smooth profiles with inverse-length units, and let $h:\mathbb R^3\to\mathbb R$ be a smooth dimensionless function satisfying $h_{xx}+h_{yy}=0$ at every $(u,x,y)$. Define the dimensionless function

$$P(u,x,y)=-(a(u)^2+b(u)^2)(x^2+y^2)+h(u,x,y).$$

With orientation $du\wedge dv\wedge dx\wedge dy$, define

$$g=-2\,du\,dv+dx^2+dy^2+P\,du^2,\qquad \mathcal A=-(a(u)x+b(u)y)\,du,\qquad \mathcal F=d\mathcal A=a(u)\,du\wedge dx+b(u)\,du\wedge dy.$$

The vector field $N=\partial_u+\frac{P+1}{2}\partial_v$ has $g(N,N)=-1$ and selects the future direction. The $u,v$ block of $g$ has determinant $-1$, so together with the two positive transverse directions this is a smooth Lorentzian metric of signature $(-,+,+,+)$ and $\sqrt{|\det g|}=1$. The tuple $(\mathbb R^4,g,N,o,\mathcal F)$ is the **null-wave candidate data** for the equations of [[def-emg-xs-geometric-electrovac]]; no field-equation claim is part of this definition. The metric coefficients are dimensionless, and $\mathcal F_{ui}$ has inverse-length units.
