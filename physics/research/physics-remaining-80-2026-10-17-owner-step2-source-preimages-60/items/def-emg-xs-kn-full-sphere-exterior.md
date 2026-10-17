---
id: def-emg-xs-kn-full-sphere-exterior
kind: definition
title: Full-sphere exterior extension of the Kerr-Newman datum
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - def-emg-xs-kn-data
  - def-emg-xs-geometric-electrovac
dependency_roles:
  def-emg-xs-kn-data: mathematical-premise
  def-emg-xs-geometric-electrovac: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 2.1, equations (2.15)-(2.21), printed pp. 6-8 (PDF pp. 7-9): the Boyer-Lindquist Kerr-Newman metric and potential"
    - title: S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.114)-(7.116) and charged substitution, printed pp. 208-209 (PDF pp. 214-215): rotating metric in its exterior coordinate form"
---

## Definition

Let $M,a,q\in\mathbb R$ have units of metres, choose $R_0>4|M|$, and
set
$$\mathcal X:=\mathbb R_{x^0}\times(R_0,\infty)_r\times S^2,\qquad R=r^2+a^2,\quad b=1-Z^2,\quad \Sigma=r^2+a^2Z^2,\quad \Delta=r^2-2Mr+a^2+q^2,$$
where $S^2=\{(X,Y,Z)\in\mathbb R^3:X^2+Y^2+Z^2=1\}$ has its induced
unit round metric $\gamma$ and outward area form $\omega$. Write
$$\lambda:=X\,dY-Y\,dX,\qquad \bar g:=-\frac{\Delta-a^2b}{\Sigma}(dx^0)^2 +\frac{\Sigma}{\Delta}\,dr^2+\Sigma\gamma +\frac{a^2(R+\Sigma-\Delta)}{\Sigma}\lambda^2 -\frac{2a(R-\Delta)}{\Sigma}\,dx^0\odot\lambda,$$
$$\bar{\mathcal A}:=-\frac{qr}{\Sigma}(dx^0-a\lambda),\qquad \bar{\mathcal F}:=d\bar{\mathcal A}.$$
Here $\lambda^2=\lambda\otimes\lambda$ and
$u\odot v=(u\otimes v+v\otimes u)/2$. This is the **full-sphere exterior
extension** of the pole-free datum in [[def-emg-xs-kn-data]]. The coordinates
$x^0,r$ and parameters $M,a,q$ have units of metres; sphere coordinates
are dimensionless. The field $\bar{\mathcal F}$ is the geometric
length-normalized two-form and no SI conversion is part of this definition.

## Well-definedness

The coordinate functions $X,Y,Z$, their differentials, the induced metric
$\gamma$, and $\lambda=X\,dY-Y\,dX$ are smooth on $S^2$; thus the displayed
metric and potential are smooth wherever $\Sigma>0$. Since $r>R_0>0$,
$\Sigma>0$. Also
$$\Delta/r^2=1-2M/r+(a^2+q^2)/r^2>1/2,$$
so $\Delta>0$. The scalar
$\Delta-a^2b=r^2-2Mr+q^2+a^2Z^2$ is positive, hence
$\bar g(\partial_{x^0},\partial_{x^0})<0$; take $N=\partial_{x^0}$ as time
orientation and $o=dx^0\wedge dr\wedge\omega$ as orientation.

On the polar chart away from the poles, put $Z=\cos\theta$ and
$b=1-Z^2=\sin^2\theta$. Then $\lambda=b\,d\phi$ and
$\gamma=d\theta^2+b\,d\phi^2$. The identity
$R^2-\Sigma^2=a^2b(R+\Sigma)$ gives
$$\frac{R^2-a^2\Delta b}{\Sigma}-\Sigma =\frac{a^2b(R+\Sigma-\Delta)}{\Sigma}.$$
Consequently the angular part
$\Sigma d\theta^2+b(R^2-a^2\Delta b)\Sigma^{-1}d\phi^2$ equals
$\Sigma\gamma+a^2(R+\Sigma-\Delta)\Sigma^{-1}\lambda^2$.
The time-time and time-angle coefficients are respectively
$-(\Delta-a^2b)/\Sigma$ and $-a(R-\Delta)b/\Sigma$, exactly those
obtained by expanding the Boyer-Lindquist formula. Thus $\bar g$ and
$\bar{\mathcal A}$ agree with [[def-emg-xs-kn-data]] on the overlap.

On the dense pole-free region, [[def-emg-xs-kn-data]] gives
$\det(g_{ij})=-\Sigma^2$ in coordinates
$(x^0,r,\cos\theta,\phi)$ and signature $(-+++)$ because $\Delta>0$.
At either pole $\lambda=0$ and $b=0$, so
$$\bar g=-\Delta\Sigma^{-1}(dx^0)^2+\Sigma\Delta^{-1}dr^2+\Sigma\gamma$$
at that point; these four directions have one negative and three positive
squares. Hence $(\mathcal X,\bar g,N,o,\bar{\mathcal F})$ is a smooth
time-oriented Lorentzian datum on the full sphere exterior. The smooth global
potential also gives $d\bar{\mathcal F}=0$. No extension across a horizon,
through $r=0$, or to a maximal spacetime is asserted.
