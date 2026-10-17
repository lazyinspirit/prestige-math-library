---
id: def-emg-xs-harmonic-mp
kind: definition
title: Positive harmonic conformastatic electrovac data
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-emg-conformastatic-chart-data
  - lem-emg-conformastatic-chart-is-lorentzian
  - def-emg-xs-geometric-electrovac
  - def-emg-lorentzian-forms
dependency_roles:
  def-emg-conformastatic-chart-data: mathematical-premise
  lem-emg-conformastatic-chart-is-lorentzian: mathematical-premise
  def-emg-xs-geometric-electrovac: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete 238-page lecture notes
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: Chapter 3, equations (3.65)-(3.67), and Chapter 4, curved-spacetime Maxwell forms; local conventions are stated explicitly here.
    - title: David Tong, General Relativity, complete author-hosted lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: Sections 3.2-3.4 for curvature and Maxwell conventions; section 6, multi-black-hole solutions, for the harmonic conformastatic ansatz.
    - title: Reinhard Meinel and Moritz Hütten, On the black hole limit of electrically counterpoised dust configurations, arXiv:1105.3807v3
      url: https://arxiv.org/pdf/1105.3807
      locator: Section 2, equations (1)-(4), PDF pages 2-3; the displayed units and signs are compared with, not imported into, this definition.
verification:
  precheck: n/a
---

**Coordinate-units note.** Under [[def-emg-lorentzian-forms]], the coordinates in a length-coordinate chart, including $x^0$, are assigned metres; when $x^0=ct$ is used, $t$ is in seconds and $c>0$ has units $\mathrm{m\,s^{-1}}$.

## Definition

Let $D\subseteq\mathbb R^3$ be open and let $H\in C^\infty(D,(0,\infty))$ be independent of time. Write $x=(x^1,x^2,x^3)$ for length coordinates, set $x^0=ct$ when a time variable is used, and require $H$ to be dimensionless. The ordinary Euclidean Laplacian is $\Delta_\delta H:=\sum_{i=1}^3\partial_i^2H$; call $H$ harmonic when $\Delta_\delta H=0$. Take $\mathcal M=\mathbb R_{x^0}\times D$, with orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$ and future direction selected by $N_H=H\partial_{x^0}$.

For a sign $\sigma\in\{-1,+1\}$ define the metric and global potential one-form

$$g_H=-H^{-2}(dx^0)^2+H^2\sum_{i=1}^3(dx^i)^2,\qquad \mathcal A_\sigma=\sigma(H^{-1}-1)\,dx^0.$$

The associated two-form is

$$\mathcal F_\sigma:=d\mathcal A_\sigma=-\sigma\sum_{i=1}^3\frac{H_i}{H^2}\,dx^i\wedge dx^0,\qquad H_i:=\partial_iH.$$

The **positive harmonic conformastatic electrovac data** are the tuple $(\mathcal M,g_H,N_H,o,\mathcal F_\sigma)$ for these choices. The metric is the chart tensor of [[def-emg-conformastatic-chart-data]] and is Lorentzian with the stated future direction by [[lem-emg-conformastatic-chart-is-lorentzian]]. The term “electrovac data” names a candidate for the equations in [[def-emg-xs-geometric-electrovac]]; this definition by itself does not assert that the equations hold. The field components have inverse-length units in length coordinates, so the Ricci and quadratic-field components both have inverse-length-squared units.
