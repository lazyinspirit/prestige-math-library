---
id: def-emg-xs-rn-data
kind: definition
title: Dyonic Reissner-Nordström metric and field domains
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-euclidean-spheres-and-closed-balls
  - def-gr-schwarzschild-exterior-model
  - ex-the-round-metric-on-the-sphere-as-an-induced-metric
dependency_roles:
  def-euclidean-spheres-and-closed-balls: mathematical-premise
  def-gr-schwarzschild-exterior-model: mathematical-premise
  ex-the-round-metric-on-the-sphere-as-an-induced-metric: mathematical-premise
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
use $S^2=\{(X,Y,Z)\in\mathbb R^3:X^2+Y^2+Z^2=1\}$ with its subspace
topology ([[def-euclidean-spheres-and-closed-balls]]). Specify the smooth
structure by the sphere atlas of [[def-gr-schwarzschild-exterior-model]],
Definition (b): for $\varepsilon=\pm1$, delete $p_\varepsilon=(0,0,\varepsilon)$
and use $\sigma_\varepsilon(X,Y,Z)=(X,Y)/(1-\varepsilon Z)$.
For $u=(u_1,u_2)$ and $h=u_1^2+u_2^2$, its inverse is
$\sigma_\varepsilon^{-1}(u)=(2u_1,2u_2,\varepsilon(h-1))/(1+h)$;
the transition is $u\mapsto u/h$ on $h>0$. These rational maps are smooth
on their domains. The product atlas consists of
$(x^0,r,p)\mapsto(x^0,r,\sigma_\varepsilon(p))$ on
$\mathbb R\times J\times(S^2\setminus\{p_\varepsilon\})$;
its transitions leave $x^0,r$ fixed and apply the displayed sphere transition.
The product is Hausdorff and second countable by the subspace topology from
$\mathbb R^2\times\mathbb R^3$, whose rational balls give a countable basis.
These charts specify its maximal smooth atlas, including when $J$ is empty.
The inclusion of $S^2$ into $\mathbb R^3$ is smooth with injective differential
in these parametrizations; its induced unit round metric is $\gamma_{S^2}$
([[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]).
Orient $S^2$ by its outward unit normal: for $p\in S^2$ and
$u,v\in T_pS^2$, define
$$ (\omega_{S^2})_p(u,v):=\det(p,u,v). $$
Thus $\omega_{S^2}$ is the positive area form of $\gamma_{S^2}$, and in the
polar chart $X=\sin\theta\cos\phi$, $Y=\sin\theta\sin\phi$,
$Z=\cos\theta$ it is $\sin\theta\,d\theta\wedge d\phi$. The **dyonic RN
datum** is
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
bundle or charge quantization. To verify pole smoothness, use local coordinates
$u=X,v=Y$ near each pole. There
$d\phi=(u\,dv-v\,du)/(u^2+v^2)$. Near $N$,
$1-\cos\theta=(u^2+v^2)/(1+Z)$, so
$(1-\cos\theta)d\phi=(u\,dv-v\,du)/(1+Z)$ is smooth. Near $S$,
$1+\cos\theta=(u^2+v^2)/(1-Z)$, so
$(1+\cos\theta)d\phi=(u\,dv-v\,du)/(1-Z)$ is smooth. The denominators are
nonzero on the respective named patches.

