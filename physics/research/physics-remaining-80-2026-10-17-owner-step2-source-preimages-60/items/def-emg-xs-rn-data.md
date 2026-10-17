---
id: def-emg-xs-rn-data
kind: definition
title: Dyonic Reissner-Nordström metric and field domains
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
    - title: S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.106)-(7.113), printed pp. 201-203 (PDF pp. 207-209): dyonic RN metric, field and parameter range"
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 2.1, equations (2.1)-(2.9), printed pp. 4-5 (PDF pp. 5-6): RN metric, charge parameters, two-form and flux convention"
physical_scope: null
---


## Definition

Let $M,q_e,q_m\in\mathbb R$ be length parameters and put
$Q^2:=q_e^2+q_m^2$. Let $J\subset(0,\infty)$ be open and require
$$f(r):=1-\frac{2M}{r}+\frac{Q^2}{r^2}\ne0\qquad(r\in J).$$
On the smooth product $\mathcal M_J:=\mathbb R_{x^0}\times J_r\times S^2$,
let $\gamma_{S^2}$ be the unit round metric and $\omega_{S^2}$ its positively
oriented area form. The **dyonic RN datum** is
$$g=-f(r)\,dx^0\otimes dx^0+f(r)^{-1}\,dr\otimes dr+r^2\gamma_{S^2}, \qquad \mathcal F=-\frac{q_e}{r^2}\,dx^0\wedge dr+q_m\omega_{S^2}.$$
Here $x^0$ and $r$ have units of metres, angles on $S^2$ are dimensionless,
and $M,q_e,q_m$ have units of metres. The metric components are dimensionless
in length coordinates; the nonzero coordinate components of $\mathcal F$ have
units inherited from their coordinate Jacobians. Use the orientation
$dx^0\wedge dr\wedge\omega_{S^2}$.

The set $J$ may have several connected components. On $\{f>0\}$ choose the
time orientation $\partial_{x^0}$; on $\{f<0\}$ choose $\partial_r$. These
are smooth timelike fields on their respective open subsets because
$g(\partial_{x^0},\partial_{x^0})=-f<0$ when $f>0$ and
$g(\partial_r,\partial_r)=f^{-1}<0$ when $f<0$. Since $f$ has no zero on
$\mathcal M_J$, this defines a smooth time orientation on the whole product.
The sphere area form and the displayed two-form are global on $S^2$.

Let $N,S$ denote the north and south poles. On
$U_N:=S^2\setminus\{S\}$ and $U_S:=S^2\setminus\{N\}$, respectively,
local potential one-forms are
$$\mathcal A_N=-\frac{q_e}{r}\,dx^0+q_m(1-\cos\theta)\,d\phi,\qquad \mathcal A_S=-\frac{q_e}{r}\,dx^0-q_m(1+\cos\theta)\,d\phi.$$
Each displayed potential extends smoothly over its named included pole:
$(1-\cos\theta)d\phi$ is smooth at $N$ and
$(1+\cos\theta)d\phi$ is smooth at $S$. Direct differentiation gives
$d\mathcal A_N=d\mathcal A_S=\mathcal F$ on the respective patches. Their
overlap difference is $2q_m\,d\phi$; it is local potential data, not a global
real gauge function on the entire sphere. The definition assumes no $U(1)$
bundle or charge quantization.

