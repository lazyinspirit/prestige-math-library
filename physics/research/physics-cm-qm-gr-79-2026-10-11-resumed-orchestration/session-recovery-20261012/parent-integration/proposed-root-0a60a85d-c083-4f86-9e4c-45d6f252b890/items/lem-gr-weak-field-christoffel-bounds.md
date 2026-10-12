---
id: lem-gr-weak-field-christoffel-bounds
kind: lemma
title: "Uniform Christoffel-symbol bounds for stationary weak-field data"
status: draft
origin: session
domain: mathematics
dependency_level: 10
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-stationary-weak-field-data, lem-gr-weak-field-admissibility-and-inverse-bounds, def-christoffel-symbols-of-an-affine-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-metric-selected-connection, thm-algebra-of-derivatives, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-gr-stationary-weak-field-data: mathematical-premise
  lem-gr-weak-field-admissibility-and-inverse-bounds: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: the Christoffel symbol calculation for the weak-field metric leading to Gamma^i_{00} = partial_i Phi, printed pp. 105-106 (PDF pp. 112-113)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 5.1-5.1.1: the Christoffel symbols of the stationary weak-field metric and the Newtonian limit, printed pp. 205-208 (PDF pp. 212-215)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 2.1 and the Newtonian module: the Christoffel formula and the weak-field connection coefficients"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $(\Omega,K,L,C,\varepsilon_0,\varphi,r)$ be stationary weak-field data
with potential $\Phi=\varepsilon c^2\varphi$
([[def-gr-stationary-weak-field-data]]), let $c>0$, and let
$\varepsilon_*$ and $C_1$ be the threshold and constant of
[[lem-gr-weak-field-admissibility-and-inverse-bounds]]. Then there is
$C_2<\infty$, depending only on $C$, $L$ and the dimension, such that for
every $0<\varepsilon\le\varepsilon_*$ the Christoffel symbols
$\Gamma^a{}_{bc}$ of the metric-selected connection of $g(\varepsilon)$ in
the inertial chart satisfy the following bounds on $K$:

$$\Bigl|\Gamma^i{}_{00}-\frac{\partial_i\Phi}{c^2}\Bigr|\le\frac{C_2\varepsilon^2}{L},\qquad |\Gamma^i{}_{0j}|\le\frac{C_2\varepsilon^{3/2}}{L},\qquad |\Gamma^i{}_{jk}|\le\frac{C_2\varepsilon}{L},$$

$$|\Gamma^0{}_{00}|\le\frac{C_2\varepsilon^{5/2}}{L},\qquad |\Gamma^0{}_{0j}|\le\frac{C_2\varepsilon}{L},\qquad |\Gamma^0{}_{jk}|\le\frac{C_2\varepsilon^{3/2}}{L},$$

for all $i,j,k\in\{1,2,3\}$, with the maximum over the free spatial indices.

## Facts & Assumptions

**Given:** Stationary weak-field data and $0<\varepsilon\le\varepsilon_*$, with $\Phi=\varepsilon c^2\varphi$.

[L1] $\Gamma^a{}_{bc}=\tfrac12\sum_dg^{ad}(\partial_bg_{cd}+\partial_cg_{bd}-\partial_dg_{bc})$ in the chart, and the components of the inverse metric satisfy $|\partial^\alpha g^{ab}(\varepsilon)|\le C_1/L^{|\alpha|}$ on $K$ for $|\alpha|\le2$, together with the sharp expansion $g^{ab}(\varepsilon)=\eta^{ab}-\eta^{ac}E_{cd}(\varepsilon)\eta^{db}+R^{ab}(\varepsilon)$ with $E=g(\varepsilon)-\eta$ and $|R^{ab}(\varepsilon)|\le C_1\varepsilon^2$, which in particular gives $|g^{ab}(\varepsilon)-\eta^{ab}|\le C_1\varepsilon$, $g^{00}=-1+O(\varepsilon)$ and $|g^{0i}(\varepsilon)|\le C_1\varepsilon^{3/2}$ ([[def-christoffel-symbols-of-an-affine-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-gr-metric-selected-connection]], [[lem-gr-weak-field-admissibility-and-inverse-bounds]]).

[L2] $g_{00}=-(1+2\varepsilon\varphi)+r_{00}$, $g_{ij}=(1-2\varepsilon\varphi)\delta_{ij}+r_{ij}$, $g_{0i}=r_{0i}$, with $|\partial_ar_{00}|+|\partial_ar_{ij}|\le C\varepsilon^2/L$, $|\partial_ar_{0i}|\le C\varepsilon^{3/2}/L$, $|\partial_a\varphi|\le C/L$ on $K$, and all data stationary: $\partial_0\varphi=\partial_0r_{ab}=0$ ([[def-gr-stationary-weak-field-data]] clause (a)).

[L3] Derivatives of sums and products obey the usual rules and component fields are smooth ([[thm-algebra-of-derivatives]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

## Proof

**Proof technique:** direct; insert the explicit components and their uniform derivative bounds into the Christoffel formula, using stationarity to cancel all time derivatives.

1.1 (Derivative bounds of the metric components.) By [L2], on $K$ and with $\partial_a\Phi=\varepsilon c^2\partial_a\varphi$, $|\partial_a\varphi|\le C/L$, so $|\partial_ag_{00}|\le2\varepsilon C/L+C\varepsilon^2/L\le C'\varepsilon/L$, $|\partial_ag_{ij}|\le C'\varepsilon/L$ and $|\partial_ag_{0i}|\le C\varepsilon^{3/2}/L$. Since $\partial_0g_{ab}=0$ by stationarity, all these bounds also hold for the time derivatives, with the stronger value $0$. [L2, algebra]

2.1 (The component with two lower zeros.) By [L1] and stationarity [L2], $\Gamma^i{}_{00}=\tfrac12g^{ia}(2\partial_0g_{a0}-\partial_ag_{00})=-\tfrac12g^{ia}\partial_ag_{00}=\tfrac12g^{ia}(2\partial_a\Phi/c^2-\partial_ar_{00})$, since $\partial_ag_{00}=-2\varepsilon\partial_a\varphi+\partial_ar_{00}=-2\partial_a\Phi/c^2+\partial_ar_{00}$. Write $g^{ia}=\eta^{ia}+(g^{ia}-\eta^{ia})$ and use $\eta^{ia}\partial_a\Phi=\partial_i\Phi$, because $i\ne0$ and the only nonzero entries of $\eta^{ia}$ with $i\ne0$ are the spatial $\delta^{ia}$: the first term gives $\partial_i\Phi/c^2$, while $|(g^{ia}-\eta^{ia})\partial_a\Phi/c^2|\le C_1\varepsilon\cdot C\varepsilon/L$ by [L1] and [L2] and $|\tfrac12g^{ia}\partial_ar_{00}|\le\tfrac12C'C\varepsilon^2/L$; hence $|\Gamma^i{}_{00}-\partial_i\Phi/c^2|\le C_2\varepsilon^2/L$. [step 1.1, L1, L2, L3, algebra]

2.2 (The remaining components.) Again by [L1] and stationarity, $\Gamma^i{}_{0j}=\tfrac12g^{ia}(\partial_jg_{a0}-\partial_ag_{0j})=\tfrac12g^{ia}(\partial_jr_{a0}-\partial_ar_{0j})$, so $|\Gamma^i{}_{0j}|\le C_2\varepsilon^{3/2}/L$ by [L1] and [L2]. Next, $\Gamma^i{}_{jk}=\tfrac12g^{ia}(\partial_jg_{ak}+\partial_kg_{aj}-\partial_ag_{jk})$; splitting off the explicit $\varphi$-terms leaves $\tfrac12g^{ia}(-2\varepsilon)(\delta_{ak}\partial_j\varphi+\delta_{aj}\partial_k\varphi-\delta_{jk}\partial_a\varphi)$, whose absolute value is at most $C'\varepsilon/L$ by [L1] and [L2], while the $r$-terms contribute at most $C'\varepsilon^2/L$; hence $|\Gamma^i{}_{jk}|\le C_2\varepsilon/L$. For the components with upper index $0$, use the sharp inverse expansion of [L1], $g^{0a}=\eta^{0a}-\eta^{0c}E_{cd}\eta^{da}+R^{0a}$, with $|R^{0a}|\le C_1\varepsilon^2$: the entries are $g^{00}=-1-E_{00}+R^{00}=-1+O(\varepsilon)$ and $g^{0i}=-E_{0i}+R^{0i}=r_{0i}+O(\varepsilon^2)=O(\varepsilon^{3/2})$. For $\Gamma^0{}_{00}=\tfrac12g^{0a}(2\partial_0g_{a0}-\partial_ag_{00})=-\tfrac12g^{0a}\partial_ag_{00}$ the $a=0$ term vanishes by stationarity and the $a=i$ term contributes at most $\tfrac12C'\varepsilon^{3/2}\cdot C'\varepsilon/L\le C_2\varepsilon^{5/2}/L$. For $\Gamma^0{}_{0j}=\tfrac12g^{0a}(\partial_jg_{a0}-\partial_ag_{0j})$ the $a=0$ term is $\tfrac12g^{00}\partial_jg_{00}$ with $|g^{00}|\le2$ and $|\partial_jg_{00}|\le C'\varepsilon/L$, and the $a=i$ term is $\tfrac12g^{0i}(\partial_jr_{i0}-\partial_ir_{0j})$ of size at most $C'\varepsilon^{3/2}\cdot C'\varepsilon^{3/2}/L\le C'\varepsilon^3/L$; hence $|\Gamma^0{}_{0j}|\le C_2\varepsilon/L$. Finally $\Gamma^0{}_{jk}=\tfrac12g^{0a}(\partial_jg_{ak}+\partial_kg_{aj}-\partial_ag_{jk})$: the $a=0$ term is $\tfrac12g^{00}(\partial_jr_{0k}+\partial_kr_{0j})$ of size at most $\tfrac12\cdot2\cdot 2C\varepsilon^{3/2}/L\le C'\varepsilon^{3/2}/L$, and the $a=i$ term is at most $C'\varepsilon^{3/2}\cdot C'\varepsilon/L\le C'\varepsilon^{5/2}/L$; hence $|\Gamma^0{}_{jk}|\le C_2\varepsilon^{3/2}/L$. [step 1.1, L1, L2, L3, algebra]

3.1 (Conclusion.) Steps 2.1 and 2.2 give every displayed bound with a constant depending only on $C$, $L$ and the dimension; the constants of the weaker displayed inequalities were enlarged. [step 2.1, step 2.2, given] ∎

## Remarks

- **The displayed orders occur.** The leading contributions are explicit: $\Gamma^0{}_{00}$ is dominated by $-\tfrac12g^{0i}\partial_ig_{00}=O(\varepsilon^{5/2}/L)$ and $\Gamma^0{}_{jk}$ by $\tfrac12g^{00}(\partial_jr_{0k}+\partial_kr_{0j})=O(\varepsilon^{3/2}/L)$, while $\Gamma^0{}_{0j}$ is dominated by $\tfrac12g^{00}\partial_jg_{00}=\varepsilon\partial_j\varphi+O(\varepsilon^2/L)$; all displayed bounds are attained at these orders and are the form in which the weak-field applications consume the estimates.
- **Stationarity is used.** The cancellation of the time-derivative terms in steps 2.1 and 2.2 is exactly where $\partial_0g=0$ enters; without it the leading term of $\Gamma^i{}_{00}$ would contain contributions from $\partial_0g_{0i}$.
