---
id: def-na-high-resolution-reconstruction
kind: definition
title: Finite-volume MUSCL, nodal ENO2 and WENO5 reconstruction conventions
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
aliases: []
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Chi-Wang Shu, Essentially Non-Oscillatory and Weighted Essentially Non-Oscillatory Schemes for Hyperbolic Conservation Laws, complete lecture notes"
      url: "https://www3.nd.edu/~zxu2/acms60790S13/Shu-WENO-notes.pdf"
      locator: "§§2.1.1 and 2.2.1–2.2.2, PDF pp. 3–21: reconstruction from cell averages, ENO stencil selection, WENO convex weights and Jiang–Shu indicators."
    - title: "Guang-Shan Jiang and Chi-Wang Shu, Efficient Implementation of Weighted ENO Schemes"
      url: "https://lsec.cc.ac.cn/lcfd/DEWENO/paper/WENO_1996.pdf"
      locator: "§§2–4, PDF pp. 3–18: WENO candidate stencils, smoothness indicators, nonlinear weights and optimal linear combination."
    - title: "Marcos Castro, Bruno Costa and Wai Sun Don, High order weighted essentially non-oscillatory WENO-Z schemes for hyperbolic conservation laws"
      url: "https://doi.org/10.1016/j.jcp.2010.11.028"
      locator: "§2 and §4: WENO-Z weights use a power parameter p; for fifth order (r=3), p=2 is the critical-point accurate choice. This item states the cell-average face formula locally."
    - title: "Jérôme Droniou, A Beginner’s Course in Finite Volume Approximation of Scalar Conservation Laws, complete lecture notes"
      url: "https://math.univ-cotedazur.fr/u/massonr/MAM5/droniou-scalar-hyp.pdf"
      locator: "§§3.1–3.3, PDF pp. 31–35: piecewise-linear MUSCL cell reconstruction, minmod slopes and the fully discrete CFL distinction."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $h>0$, let $I_i=[ih,(i+1)h)$, let $x_i=(i+\tfrac12)h$ be its center, and write $x_{i+1/2}=(i+1)h$ and $x_{i-1/2}=ih$ for its right and left faces. A **cell average** of a locally integrable scalar function $u$ is $U_i=h^{-1}\int_{I_i}u(x)\,dx$. The cells are half-open only to form a partition; the choice of endpoint representatives does not change an integral.

Here **MUSCL/minmod** means the piecewise-linear reconstruction with the limiter defined next; **nodal ENO2** means the two-stencil quadratic selector defined below; and **cell-average WENO5-JS/WENO-Z** means the three-candidate reconstructions with the normalized nonlinear weights displayed below. These names specify the constructions and do not, by themselves, assert an accuracy or stability property.

For real $a,b$, define
$$\operatorname{minmod}(a,b)=\begin{cases}\operatorname{sgn}(a)\min(|a|,|b|),&ab>0,\\0,&ab\le0.\end{cases}$$
The **MUSCL/minmod reconstruction** assigns the cell slope $s_i=h^{-1}\operatorname{minmod}(U_i-U_{i-1},U_{i+1}-U_i)$ and the two face states $U_{i-1/2}^{+,M}=U_i-hs_i/2$ and $U_{i+1/2}^{-,M}=U_i+hs_i/2$. Here $+$ denotes a trace from the right cell and $-$ a trace from the left cell.

For separate **nodal** data $V_j=u(y_j)$ at $y_j=jh$, define the second divided difference by $[y_a,y_b,y_c]V=(((V_c-V_b)/(y_c-y_b))-((V_b-V_a)/(y_b-y_a)))/(y_c-y_a)$. At the face $y_{i+1/2}=(i+\tfrac12)h$, set $d_L=|[y_{i-1},y_i,y_{i+1}]V|$ and $d_R=|[y_i,y_{i+1},y_{i+2}]V|$. Choose the left triple when $d_L\le d_R$ and otherwise choose the right triple. For the selected triple $(y_a,y_b,y_c)$ define its Newton quadratic by
$$P_{a,b,c}(y)=V_a+\frac{V_b-V_a}{y_b-y_a}(y-y_a)+[y_a,y_b,y_c]V\,(y-y_a)(y-y_b).$$
The **nodal ENO2 face value** is $P_{a,b,c}(y_{i+1/2})$. This nodal interpolation branch is distinct from the cell-average WENO branch below.

For cell averages $U_{i-2},\ldots,U_{i+2}$, define the left-biased WENO5 candidate face functionals
$$p_0=(2U_{i-2}-7U_{i-1}+11U_i)/6,\qquad p_1=(-U_{i-1}+5U_i+2U_{i+1})/6,\qquad p_2=(2U_i+5U_{i+1}-U_{i+2})/6.$$
Define the Jiang–Shu indicators
$$\beta_0=\tfrac{13}{12}(U_{i-2}-2U_{i-1}+U_i)^2+\tfrac14(U_{i-2}-4U_{i-1}+3U_i)^2,$$
$$\beta_1=\tfrac{13}{12}(U_{i-1}-2U_i+U_{i+1})^2+\tfrac14(U_{i-1}-U_{i+1})^2,\qquad \beta_2=\tfrac{13}{12}(U_i-2U_{i+1}+U_{i+2})^2+\tfrac14(3U_i-4U_{i+1}+U_{i+2})^2.$$
Fix a positive parameter $\epsilon_0$ with the same units as each $\beta_k$, independently of $h$, and ideal weights $(d_0,d_1,d_2)=(1/10,6/10,3/10)$. If $u$ is nondimensionalized, $\epsilon_0$ is a fixed positive number. The **WENO-JS weights** and left face value are $\alpha_k^J=d_k/(\epsilon_0+\beta_k)^2$, $\omega_k^J=\alpha_k^J/\sum_{l=0}^2\alpha_l^J$, and $U_{i+1/2}^{-,J}=\sum_{k=0}^2\omega_k^Jp_k$. For the **WENO-Z comparison**, use the fifth-order $p=2$ weights: with $\tau_5=|\beta_0-\beta_2|$, set $\alpha_k^Z=d_k[1+(\tau_5/(\epsilon_0+\beta_k))^2]$, $\omega_k^Z=\alpha_k^Z/\sum_{l=0}^2\alpha_l^Z$, and $U_{i+1/2}^{-,Z}=\sum_{k=0}^2\omega_k^Zp_k$. All denominators are positive because $\epsilon_0>0$ and every $\beta_k$ is a sum of squares. The right face state is obtained by reflection about that face: replace each stencil value $U_k$ in the displayed left formula by $U_{2i+1-k}$.

For scalar linear advection $u_t+a u_x=0$, a **direct reconstructed-upwind forward-Euler update** uses $\nu=a\Delta t/h$, the flux $F_{i+1/2}=aU_{i+1/2}^{-,M}$ when $a\ge0$ and $F_{i+1/2}=aU_{i+1/2}^{+,M}$ when $a<0$, and $U_i^{n+1}=U_i^n-(\Delta t/h)(F_{i+1/2}-F_{i-1/2})$. The total variation of a sequence is $\operatorname{TV}(U)=\sum_{i\in\mathbb Z}|U_{i+1}-U_i|$ when the sum is finite; **TVD** means that this quantity does not increase in one update.

For a vector system whose flux Jacobian at an interface is diagonalizable as $A=R\Lambda R^{-1}$ with real diagonal $\Lambda$, a **characteristic-wise reconstruction** applies a chosen scalar reconstruction to the components of $R^{-1}U$ and maps the reconstructed vector back by $R$. This definition alone gives no TVD or stability result for systems.
