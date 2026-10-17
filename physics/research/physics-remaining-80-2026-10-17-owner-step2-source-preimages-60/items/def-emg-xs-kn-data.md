---
id: def-emg-xs-kn-data
kind: definition
title: Kerr-Newman metric and potential on the exact Boyer-Lindquist domain
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-emg-xs-geometric-electrovac
  - def-emg-finite-real-supremum-domain
  - def-emg-real-metric-axiom-convention
  - lem-emg-metric-axioms-imply-nonnegativity
  - def-emg-explicit-power-regimes
  - lem-emg-sequence-limit-criterion-with-choice
  - def-emg-boundaryless-completeness-domain
  - def-emg-set-size-and-class-schema
dependency_roles:
  def-emg-xs-geometric-electrovac: mathematical-premise
  def-emg-finite-real-supremum-domain: mathematical-premise
  def-emg-real-metric-axiom-convention: mathematical-premise
  lem-emg-metric-axioms-imply-nonnegativity: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-emg-sequence-limit-criterion-with-choice: mathematical-premise
  def-emg-boundaryless-completeness-domain: mathematical-premise
  def-emg-set-size-and-class-schema: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 2.1, equations (2.15)-(2.21), printed pp. 6-8 (PDF pp. 7-9): complexification, null metric and charged rotating coefficients"
    - title: S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.114)-(7.116) and the following charge substitution, printed pp. 208-209 (PDF pp. 214-215): Kerr metric and charged rotating form"
physical_scope: null
---


## Definition

Let $M,a,q\in\mathbb R$ have units of metres. Write
$$\Sigma(r,\theta):=r^2+a^2\cos^2\theta,\quad \Delta(r):=r^2-2Mr+a^2+q^2,\quad R(r):=r^2+a^2,\quad B(\theta):=\sin^2\theta.$$
Let $U$ be an open subset of the Boyer-Lindquist coordinate region
$\{(x^0,r,\theta,\phi):\Sigma>0,\ \Delta\ne0,\ 0<\theta<\pi\}$.
Coordinates $x^0,r$ have units of metres and $\theta,\phi$ are dimensionless.
On $U$ define
$$g=-\frac{\Delta}{\Sigma}(dx^0-aB\,d\phi)^2 +\frac{\Sigma}{\Delta}\,dr^2+\Sigma\,d\theta^2 +\frac{B}{\Sigma}(R\,d\phi-a\,dx^0)^2,\qquad \mathcal A=-\frac{qr}{\Sigma}(dx^0-aB\,d\phi),\quad\mathcal F:=d\mathcal A.$$
The metric is the exact real symmetric tensor given by this display; no value
on $\Delta=0$, the axes $\theta=0,\pi$, or $\Sigma=0$ is part of this
definition. The scalar $q$ is a geometric electric flux-length parameter; no
SI conversion is fixed in this Definition.

**Well-definedness on the stated patch.** In the coordinates
$(x^0,r,y,\phi)$ with $y=\cos\theta$ and $b=1-y^2$, the coordinate change is
a smooth diffeomorphism because $dy/d\theta=-\sin\theta\ne0$. The metric
matrix has
$$g_{00}=-\frac{\Delta-a^2b}{\Sigma},\quad g_{03}=-\frac{ab(R-\Delta)}{\Sigma},\quad g_{33}=\frac{b(R^2-a^2\Delta b)}{\Sigma},\quad g_{11}=\frac{\Sigma}{\Delta},\quad g_{22}=\frac{\Sigma}{b}.$$
The inverse has nonzero entries
$$g^{00}=-\frac{R^2-a^2\Delta b}{\Sigma\Delta},\quad g^{03}=-\frac{a(R-\Delta)}{\Sigma\Delta},\quad g^{33}=\frac{\Delta-a^2b}{\Sigma\Delta b},\quad g^{11}=\frac{\Delta}{\Sigma},\quad g^{22}=\frac{b}{\Sigma}.$$
Multiplying the $0,3$ blocks and the reciprocal $1,1$ and $2,2$ entries
gives $gg^{-1}=I_4$.
The $t,\phi$ block determinant is $-\Delta b$, and the full determinant is
$-\Sigma^2$ in these coordinates. If $\Delta>0$, the $t,\phi$ block has one
positive and one negative eigenvalue while the $r,\theta$ entries are positive.
If $\Delta<0$, $g_{33}>0$ and the $t,\phi$ block has positive determinant,
hence is positive definite, while $g_{11}<0$ and $g_{22}>0$. Thus $g$ is
nondegenerate of signature $(-,+,+,+)$ on every component of $U$. Since this
is a coordinate patch, a smooth time orientation may be supplied locally;
the geometric electrovac equations below do not use its choice.

The potential is a smooth real one-form on $U$ because $\Sigma>0$, so $\mathcal F$
is a smooth real two-form. Exterior differentiation gives $d\mathcal F=d^2\mathcal A=0$
using commutation of smooth mixed coordinate derivatives. This definition is
only on the pole-free Boyer-Lindquist patch and asserts no global potential,
axis extension, horizon extension, or global topology.

