---
id: thm-gr-weak-field-einstein-stress-hierarchy
kind: theorem
title: "The weak-field Einstein hierarchy: linearized Einstein tensor, stress components and the Poisson equation"
status: draft
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-stationary-weak-field-data, lem-gr-weak-field-admissibility-and-inverse-bounds, thm-gr-flat-linearized-curvature-and-gauge, def-gr-flat-linearized-perturbation, def-gr-minkowski-model-and-inertial-chart, def-gr-curvature-tensor-and-derived-tensors, def-laplacian-of-a-c2-function, thm-clairaut-schwarz-mixed-partials, thm-algebra-of-derivatives, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-gr-stationary-weak-field-data: mathematical-premise
  lem-gr-weak-field-admissibility-and-inverse-bounds: mathematical-premise
  thm-gr-flat-linearized-curvature-and-gauge: mathematical-premise
  def-gr-flat-linearized-perturbation: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: R^{(1)}_{00} = -(1/2)Delta h_{00} and the reduction of the field equations to the Poisson equation, printed pp. 111-112 (PDF pp. 118-119); Ch. 4: the trace-reversed linearized Einstein tensor, printed pp. 108-110 (PDF pp. 115-117)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 5.1.1: the linearized Einstein tensor for the stationary weak-field ansatz and the Poisson equation Delta Phi = 4 pi G rho, printed pp. 205-208 (PDF pp. 212-215)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 4.2: the weak-field Einstein tensor and the Poisson equation from G_{00}, printed p. 42 (PDF p. 43), with the Newtonian module for the component hierarchy"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $(\Omega,K,L,C,\varepsilon_0,\varphi,r)$ be stationary weak-field data
that form an Einstein family with coupling $\kappa>0$
([[def-gr-stationary-weak-field-data]] clauses (a)-(c)), with potential
$\Phi=\varepsilon c^2\varphi$ and densities $\rho_\varepsilon$, and let
$G^{(1)}$ be the first-order Einstein coefficient of
[[def-gr-flat-linearized-perturbation]]. Let $c>0$ and $G_N:=\kappa c^4/(8\pi)$.
Then there are
$\varepsilon_*'>0$ and $C_2<\infty$, depending only on $C$, $L$ and the
dimension, such that for every $0<\varepsilon\le\varepsilon_*'$ the following
undirected component inequalities hold on $K$, with the maximum over
$a,b\in\{0,1,2,3\}$ and the Laplacian $\Delta$ of the spatial coordinates
([[def-laplacian-of-a-c2-function]]):

**(a) Linearized approximation.** With $A_{ab}(\varepsilon):=g_{ab}(\varepsilon)-\eta_{ab}$,

$$\bigl|G_{ab}(g(\varepsilon))-G^{(1)}_{ab}(A(\varepsilon))\bigr|\le\frac{C_2\varepsilon^2}{L^2} .$$

**(b) Component hierarchy of the Einstein tensor.**

$$\Bigl|G_{00}(g(\varepsilon))-\frac{2\Delta\Phi}{c^2}\Bigr|\le\frac{C_2\varepsilon^2}{L^2},\qquad |G_{ij}(g(\varepsilon))|\le\frac{C_2\varepsilon^2}{L^2},\qquad |G_{0i}(g(\varepsilon))|\le\frac{C_2\varepsilon^{3/2}}{L^2}.$$

**(c) Stress-energy hierarchy and the Poisson equation.** Since
$G_{ab}(g(\varepsilon))=\kappa T_{ab}(\varepsilon)$,

$$\Bigl|\kappa T_{00}(\varepsilon)-\frac{2\Delta\Phi}{c^2}\Bigr|\le\frac{C_2\varepsilon^2}{L^2},\qquad |\kappa T_{ij}(\varepsilon)|\le\frac{C_2\varepsilon^2}{L^2},\qquad |\kappa T_{0i}(\varepsilon)|\le\frac{C_2\varepsilon^{3/2}}{L^2}.$$

If in addition the matter hierarchy
$|T_{00}(\varepsilon)-\rho_\varepsilon c^2|\le C\varepsilon^2c^4/(G_NL^2)$
holds on $K$, then

$$|\Delta\Phi-4\pi G_N\rho_\varepsilon|\le\frac{C_2\varepsilon^2c^2}{L^2}\qquad\text{on }K .$$

**(d) Scaled form.** Let $X:=x/L$ denote the scaled spatial coordinates and
define on the scaled region the functions $\psi(X):=\varphi(LX)$ and
$R(X):=G_NL^2\rho_\varepsilon(LX)/(\varepsilon c^2)$, with $\Delta_X$ the
Laplacian in the $X$-variables. Then

$$|\Delta_X\psi-4\pi R|\le C_2\varepsilon\qquad\text{on the scaled image of }K .$$

## Facts & Assumptions

**Given:** Stationary weak-field data that form an Einstein family with coupling $\kappa$, the potential $\Phi=\varepsilon c^2\varphi$, the densities $\rho_\varepsilon$, the parameters $c>0$, $G_N=\kappa c^4/(8\pi)$, and a compact $K\subseteq\Omega$.

[L1] For every compact set there are $\delta_0>0$ and a constant such that for every smooth symmetric component field $A$ with $\sup_K|A|+L^{-1}\sup_K|\partial A|+L^{-2}\sup_K|\partial^2A|\le\delta_0$, $|G_{ab}(\eta+A)-G^{(1)}_{ab}(A)|\le C(\sup_K|A|+L^{-1}\sup_K|\partial A|+L^{-2}\sup_K|\partial^2A|)^2/L^2$; the coefficient $G^{(1)}$ is $\mathbb R$-linear in $A$ and equals $-\tfrac12\Box\bar A_{ab}+\partial^c\partial_{(a}\bar A_{b)c}-\tfrac12\eta_{ab}\partial^c\partial^d\bar A_{cd}$ ([[thm-gr-flat-linearized-curvature-and-gauge]] clauses (c) and (f), [[def-gr-flat-linearized-perturbation]] clauses (b)-(c)).

[L2] On $K$ and for $0<\varepsilon\le\varepsilon_*$ (a threshold depending only on $C,L$): $|\partial^\alpha(g_{cd}(\varepsilon)-\eta_{cd})|\le C_1\varepsilon/L^{|\alpha|}$ for $|\alpha|\le2$ after removing the explicit $\varepsilon$-factors, more precisely $g_{00}=-\bigl(1+2\varepsilon\varphi\bigr)+r_{00}$, $g_{ij}=(1-2\varepsilon\varphi)\delta_{ij}+r_{ij}$, $g_{0i}=r_{0i}$ with $|\partial^\alpha r_{00}|+|\partial^\alpha r_{ij}|\le C\varepsilon^2/L^{|\alpha|}$, $|\partial^\alpha r_{0i}|\le C\varepsilon^{3/2}/L^{|\alpha|}$ and $|\partial^\alpha\varphi|\le C/L^{|\alpha|}$; and the inverse metric satisfies the bounds of [[lem-gr-weak-field-admissibility-and-inverse-bounds]] ([[def-gr-stationary-weak-field-data]] clause (a)).

[L3] All data are stationary: $\partial_0\varphi=\partial_0r_{ab}=0$, and $\Delta$, $\partial_a$ and $\Box$ commute as constant-coefficient operators; mixed partials commute ([[def-gr-stationary-weak-field-data]] clause (a), [[thm-clairaut-schwarz-mixed-partials]], [[thm-algebra-of-derivatives]]).

[L4] The Einstein family satisfies $G_{ab}(g(\varepsilon))=\kappa T_{ab}(\varepsilon)$ on $\Omega$, with all component functions smooth on $K$ ([[def-gr-stationary-weak-field-data]] clauses (a) and (c), [[def-gr-curvature-tensor-and-derived-tensors]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

## Proof

**Proof technique:** direct; expand the Einstein tensor of the family around the flat metric, insert the explicit diagonal ansatz, use stationarity to cancel the off-diagonal contributions and read off the component hierarchy.

1.1 (Quadratic remainder around the flat metric.) Let $A_{ab}(\varepsilon):=g_{ab}(\varepsilon)-\eta_{ab}$. By [L2], $\sup_K|A|\le C'\varepsilon$, $L^{-1}\sup_K|\partial A|\le C'\varepsilon$ and $L^{-2}\sup_K|\partial^2A|\le C'\varepsilon$ for $0<\varepsilon\le\varepsilon_*$; shrinking the threshold if necessary so that the quantity in [L1] is at most $\delta_0$, [L1] gives at once $$|G_{ab}(g(\varepsilon))-G^{(1)}_{ab}(A(\varepsilon))|\le C_2\varepsilon^2/L^2$$ for a constant $C_2$ depending only on $C,L$. This is (a). [L1, L2, given, algebra]

1.2 (The diagonal perturbation.) Put $h_{ab}$ for the component field with $h_{00}=-2\varphi$, $h_{ij}=-2\varphi\delta_{ij}$ and $h_{0i}=0$, so that $A(\varepsilon)=\varepsilon h+s(\varepsilon)$ with $s(\varepsilon)_{00}=r_{00}$, $s(\varepsilon)_{ij}=r_{ij}$, $s(\varepsilon)_{0i}=r_{0i}$. For $h$: the trace is $h=\eta^{ab}h_{ab}=2\varphi-6\varphi=-4\varphi$, and $\bar h_{ab}=h_{ab}-\tfrac12h\eta_{ab}$ gives $\bar h_{00}=-2\varphi-\tfrac12(-4\varphi)(-1)=-4\varphi$ and $\bar h_{ij}=-2\varphi\delta_{ij}+2\varphi\delta_{ij}=0$, while $\bar h_{0i}=0$. Substituting in the formula of [L1]: $G^{(1)}_{00}(h)=-\tfrac12\Box\bar h_{00}-\tfrac12\eta_{00}\partial^c\partial^d\bar h_{cd}=2\Box\varphi+\tfrac12\partial^c\partial^d\bar h_{cd}$; the last term is $\eta^{00}\eta^{00}\partial_0\partial_0\bar h_{00}=0$ by stationarity [L3], and $\Box\varphi=(-c^{-2}\partial_t^2+\Delta)\varphi=\Delta\varphi$ because $\partial_0\varphi=0$ with $\partial_t=c\partial_0$. Hence $G^{(1)}_{00}(h)=2\Delta\varphi$. For the spatial components all terms vanish: $\bar h_{ij}=0$, the divergence terms $\partial^c\partial_{(i}\bar h_{j)c}$ involve only $\bar h_{00}$ differentiated in $x^0$ and hence vanish by stationarity, and $\bar h_{0i}=0$ gives $G^{(1)}_{0i}(h)=0$. [L1, L2, L3, algebra]

2.1 (Split of the perturbation.) By linearity of $G^{(1)}$ in [L1], $G^{(1)}(A(\varepsilon))=\varepsilon G^{(1)}(h)+G^{(1)}(s(\varepsilon))$; combined with step 1.1 this gives $$G_{ab}(g(\varepsilon))=\varepsilon G^{(1)}_{ab}(h)+G^{(1)}_{ab}(s(\varepsilon))+O(\varepsilon^2/L^2)$$ with the bound of step 1.1. [step 1.1, step 1.2, L1, algebra]

3.1 (Bounds for the remainder term.) From [L2], $|s_{00}|+|s_{ij}|\le C\varepsilon^2$, $L|\partial s_{00}|+L|\partial s_{ij}|\le C\varepsilon^2$ and $|s_{0i}|,L|\partial s_{0i}|,L^2|\partial^2s_{0i}|\le C\varepsilon^{3/2}$, and only second derivatives of $s$ occur in the formula of [L1]. Hence $|G^{(1)}_{ij}(s)|\le C\varepsilon^2/L^2$ and $|G^{(1)}_{0i}(s)|\le C\varepsilon^{3/2}/L^2$. Moreover the $s_{0i}$-terms do not contribute to the $00$-component: in the formula of [L1] the $\bar s_{0i}$ enter the $00$-component only through $\partial^c\partial_{(0}\bar s_{0)c}=\partial^c\partial_0\bar s_{0c}$, which vanishes because $\partial_0s=0$ by [L3], and through $\partial^c\partial^d\bar s_{cd}$, in which the mixed coefficients $\eta^{0i}$ vanish; the remaining $s_{00},s_{ij}$ terms are $O(\varepsilon^2/L^2)$. Consequently $|G^{(1)}_{00}(s)|\le C\varepsilon^2/L^2$. [step 2.1, L1, L2, L3, algebra]

4.1 (Component hierarchy of the Einstein tensor.) Combining steps 1.2, 2.1 and 3.1: $G_{00}(g(\varepsilon))=2\varepsilon\Delta\varphi+O(\varepsilon^2/L^2)$, and $2\varepsilon\Delta\varphi=2\Delta(\varepsilon c^2\varphi)/c^2=2\Delta\Phi/c^2$; further $|G_{ij}|\le C\varepsilon^2/L^2$ and $|G_{0i}|\le C\varepsilon^{3/2}/L^2$. This is (b). [step 1.2, step 2.1, step 3.1, algebra]

5.1 (Stress-energy hierarchy and the Poisson equation.) Since $G=\kappa T$ by [L4], dividing by $\kappa$ gives the three bounds of (c). For the Poisson equation, the first bound reads $\kappa T_{00}=2\Delta\Phi/c^2+O(\varepsilon^2/L^2)$; writing $T_{00}=\rho_\varepsilon c^2+\eta_\varepsilon$ with $|\eta_\varepsilon|\le C\varepsilon^2c^4/(G_NL^2)$, the left-hand side is $\kappa\rho_\varepsilon c^2+\kappa\eta_\varepsilon=(8\pi G_N/c^2)\rho_\varepsilon+O(\varepsilon^2/L^2)$ because $\kappa c^4/(G_NL^2)=8\pi/L^2$; multiplying the resulting inequality by $c^2/2$ gives $|\Delta\Phi-4\pi G_N\rho_\varepsilon|\le C_2\varepsilon^2c^2/L^2$. [step 4.1, L4, algebra]

6.1 (Scaled form and conclusion.) On the scaled region, $\Delta_X\psi(X)=L^2\Delta\varphi(LX)$ and $4\pi R(X)=4\pi G_NL^2\rho_\varepsilon(LX)/(\varepsilon c^2)$; multiplying the Poisson inequality of step 5.1 evaluated at $LX$ by $L^2/(\varepsilon c^2)$ gives $|\Delta_X\psi-4\pi R|\le C_2\varepsilon$, which is (d). Steps 1.1, 4.1 and 5.1 give (a), (b) and (c); all thresholds and constants depend only on $C$, $L$ and the dimension. [step 1.1, step 4.1, step 5.1, given, algebra] ∎

## Remarks

- **The hierarchy is necessary, not automatic.** Only bounds are asserted: an Einstein family under the ansatz must have stress components of the sizes displayed, and the Poisson equation is the leading order of the $00$-component. The single Poisson equation does not by itself guarantee the full Einstein equation.
- **Input-family hypothesis.** The theorem takes the existence of the Einstein family as a hypothesis; it does not construct such families from Newtonian initial data and makes no claim about their global existence.
- **Gauge independence.** No harmonic-gauge condition is used here: the component estimates are computed directly in the chart of the ansatz, and the linearized coefficient is evaluated on the actual perturbation. The flat gauge material of [[thm-gr-flat-linearized-curvature-and-gauge]] supplies the formula and remainder estimate.
