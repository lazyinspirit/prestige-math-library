---
id: ex-gr-weak-field-poisson-quadratic-potential
kind: example
title: "Explicit stationary weak-field data with the quadratic potential phi = |x|^2/2: constant Newtonian density, exact Poisson equation and the first-order Einstein coefficient"
status: draft
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-stationary-weak-field-data, thm-gr-weak-field-einstein-stress-hierarchy, thm-gr-flat-linearized-curvature-and-gauge, def-gr-flat-linearized-perturbation, def-gr-minkowski-model-and-inertial-chart, def-gr-curvature-tensor-and-derived-tensors, def-gr-smooth-lorentzian-objects, def-laplacian-of-a-c2-function]
dependency_roles:
  def-gr-stationary-weak-field-data: mathematical-premise
  thm-gr-weak-field-einstein-stress-hierarchy: mathematical-premise
  thm-gr-flat-linearized-curvature-and-gauge: mathematical-premise
  def-gr-flat-linearized-perturbation: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: the weak-field, static, slow-motion conditions g_{00}=-(1+2Phi), spatial metric (1-2Phi) delta_{ij} and the Newtonian limit, printed pp. 105-112 (PDF pp. 112-119)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 5.1-5.1.2: the stationary weak-field ansatz g = eta + h with h_{00}=-2Phi, h_{ij}=-2Phi delta_{ij} and the derivation of the Poisson equation, printed pp. 205-210 (PDF pp. 212-217)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 4.2 and the Newtonian-gravity module: weak fields, slow motion and the Poisson equation, printed p. 42 (PDF p. 43)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Example

Work on the flat model of [[def-gr-minkowski-model-and-inertial-chart]] with
inertial chart $x$, let $c>0$, $G_N>0$ and $\kappa:=8\pi G_N/c^4$, take
$\Omega$ the open unit ball, $K\subseteq\Omega$ the closed ball of radius
$1/2$ and

$$\varphi(x):=\tfrac12\bigl((x^1)^2+(x^2)^2+(x^3)^2\bigr),\qquad r\equiv0,\qquad L:=1,\quad C:=1,\quad\varepsilon_0:=\tfrac12 .$$

Then:

1. $(\Omega,K,L,C,\varepsilon_0,\varphi,r)$ is **stationary weak-field data**
   in the sense of [[def-gr-stationary-weak-field-data]] clause (a), with
   component family $g_{ab}(\varepsilon)=\eta_{ab}+\varepsilon h_{ab}$,
   $h_{00}=-2\varphi$, $h_{ij}=-2\varphi\delta_{ij}$, $h_{0i}=0$; the family
   $(\varepsilon_1,h,q)$ with $\varepsilon_1:=1/2$, $q\equiv0$ is a flat
   linearized family and $g(\varepsilon)-\eta=\varepsilon h$.
2. Defining $T(\varepsilon):=G(g(\varepsilon))/\kappa$ and
   $\rho_\varepsilon:=T_{00}(\varepsilon)/c^2$
   ([[def-gr-curvature-tensor-and-derived-tensors]]), the data form an
   **Einstein family with coupling $\kappa$**
   ([[def-gr-stationary-weak-field-data]] clause (c)) and satisfy the matter
   hierarchy of [[thm-gr-weak-field-einstein-stress-hierarchy]] clause (c)
   identically, so that theorem applies to them with its constants
   $\varepsilon_*'$ and $C_2$ depending only on $C=1$, $L=1$ and the
   dimension.
3. With the potential $\Phi=\varepsilon c^2\varphi$ one has
   $\Delta\Phi=3\varepsilon c^2$ exactly; consequently the **constant**
   density

   $$\bar\rho:=\frac{3\varepsilon c^2}{4\pi G_N}$$

   satisfies the Poisson equation $\Delta\Phi=4\pi G_N\bar\rho$ exactly on
   $\Omega$, and the density read from the family satisfies
   $|\rho_\varepsilon-\bar\rho|\le C_2\varepsilon^2c^2/(8\pi G_N)$ on $K$ for
   every $0<\varepsilon\le\varepsilon_*'$.
4. The first-order Einstein coefficient of the perturbation
   $A(\varepsilon):=\varepsilon h$ is

   $$G^{(1)}_{00}\bigl(A(\varepsilon)\bigr)=6\varepsilon=\frac{2\Delta\Phi}{c^2},\qquad G^{(1)}_{0i}\bigl(A(\varepsilon)\bigr)=G^{(1)}_{ij}\bigl(A(\varepsilon)\bigr)=0 ,$$

   so the leading term $2\Delta\Phi/c^2$ of the hierarchy is exactly the
   first-order coefficient of the family and $\Delta\Phi=3\varepsilon c^2$.

## Facts & Assumptions

**Given:** The flat model with inertial chart $x$, $\Omega$ the open unit ball, $K$ the closed ball of radius $1/2$, the functions $\varphi$ and $r\equiv0$ above, the constants $L=C=1$, $\varepsilon_0=1/2$, $\varepsilon_1=1/2$, $c>0$, $G_N>0$ and $\kappa=8\pi G_N/c^4$.

[L1] Stationary weak-field data are the tuples of [[def-gr-stationary-weak-field-data]] clause (a): smooth stationary component fields of the form $g_{ab}(\varepsilon,p)=\eta_{ab}+\varepsilon(-2\varphi)(\delta_{a0}\delta_{b0}+\delta_{ab})+r_{ab}(\varepsilon,p)$, Lorentzian of signature $(-,+,+,+)$ for $0<\varepsilon\le\varepsilon_0$, with the derivative bounds on $K$; an Einstein family is one admitting smooth symmetric $T_{ab}(\varepsilon)$ with $G_{ab}(g(\varepsilon))=\kappa T_{ab}(\varepsilon)$ on $\Omega$, and then $\rho_\varepsilon=T_{00}(\varepsilon)/c^2$ (clauses (a)-(c), [[def-gr-smooth-lorentzian-objects]], [[def-gr-curvature-tensor-and-derived-tensors]]).

[L2] For stationary weak-field data forming an Einstein family, there are $\varepsilon_*'>0$ and $C_2<\infty$ depending only on $C$, $L$ and the dimension such that for $0<\varepsilon\le\varepsilon_*'$ the three component inequalities of clause (c) hold on $K$: $|\kappa T_{00}-2\Delta\Phi/c^2|\le C_2\varepsilon^2/L^2$, $|\kappa T_{ij}|\le C_2\varepsilon^2/L^2$, $|\kappa T_{0i}|\le C_2\varepsilon^{3/2}/L^2$; and if the matter hierarchy $|T_{00}-\rho_\varepsilon c^2|\le C\varepsilon^2c^4/(G_NL^2)$ holds on $K$, then $|\Delta\Phi-4\pi G_N\rho_\varepsilon|\le C_2\varepsilon^2c^2/L^2$ ([[thm-gr-weak-field-einstein-stress-hierarchy]] clauses (c)-(d)).

[L3] For $\varphi=\frac12((x^1)^2+(x^2)^2+(x^3)^2)$ on $\Omega$: $\varphi\ge0$, $\partial_i\varphi=x_i$, $\partial_i\partial_j\varphi=\delta_{ij}$ and $\Delta\varphi=3$; all components are stationary ([[def-laplacian-of-a-c2-function]]).

[L4] First-order coefficient formulas ([[thm-gr-flat-linearized-curvature-and-gauge]] clause (c), [[def-gr-flat-linearized-perturbation]] clauses (a) and (c)): for a static diagonal perturbation with $h_{00}=-2\varphi$, $h_{ij}=-2\varphi\delta_{ij}$, $h_{0i}=0$, the trace-reversed perturbation is $\bar h_{00}=-4\varphi$, $\bar h_{0i}=\bar h_{ij}=0$, and $G^{(1)}_{ab}=-\frac12\Box\bar h_{ab}+\partial^c\partial_{(a}\bar h_{b)c}-\frac12\eta_{ab}\partial^c\partial^d\bar h_{cd}$, an expression linear in $\bar h$ (equivalently in $h$); for stationary fields $\Box=\Delta$ on components, and $\eta_{00}=-1$.

[L5] A diagonal component field $\operatorname{diag}(-1-2\varepsilon\varphi,(1-2\varepsilon\varphi)\delta_{ij})$ has signature $(-,+,+,+)$ whenever $|2\varepsilon\varphi|<1$, because the diagonal entries have signs $-,+,+,+$; on $\Omega$ one has $0\le\varphi<1/2$ ([[def-gr-smooth-lorentzian-objects]]); $\kappa c^2=8\pi G_N/c^2$, so $1/(\kappa c^2)=c^2/(8\pi G_N)$.

## Verification

**Proof technique:** direct; check the defining clauses of stationary weak-field data with explicit constants, identify the matter field as $G/\kappa$, evaluate the Poisson and first-order formulas on $\varphi=|x|^2/2$, and bound the density difference with the hierarchy theorem.

1.1 (The data clauses.) The component fields $g_{ab}(\varepsilon,p)=\eta_{ab}+\varepsilon h_{ab}(p)$ are polynomial in $(\varepsilon,p)$, hence smooth; they are stationary; and for $0<|\varepsilon|\le1/2$ and $p\in\Omega$ one has $|2\varepsilon\varphi(p)|<2\cdot\frac12\cdot\frac12=\frac12<1$ because $\varphi<1/2$ on $\Omega$, so by [L5] they define a smooth Lorentzian metric of signature $(-,+,+,+)$ on $\Omega$. The bounds on $K$ hold with $C=L=1$: $|\varphi|=\frac12|\mathbf x|^2\le\frac12\cdot\frac14=\frac18\le1$; $|\partial_i\varphi|=|x^i|\le\frac12\le1$; $|\partial_i\partial_j\varphi|=\delta_{ij}\le1$; and $r\equiv0$ satisfies the $r$-bounds trivially. With $\varepsilon_1:=\varepsilon_0=1/2$ the family $(\varepsilon_1,h,q\equiv0)$ satisfies [[def-gr-flat-linearized-perturbation]] clause (a) and $g(\varepsilon)-\eta=\varepsilon h$. This proves clause 1. [L1, L3, L5, algebra]

1.2 (First-order coefficient.) By [L3], $\Delta\varphi=3$ and $h$ is stationary, so $\Box\bar h_{00}=\Delta(-4\varphi)=-12$ and $\Box\bar h_{0i}=\Box\bar h_{ij}=0$. By [L4] the closed formula gives $G^{(1)}_{00}=-\frac12(-12)=6$ for $h$; the divergence terms vanish because $\bar h_{ab}=-4\varphi\,\delta_{a0}\delta_{b0}$ has no space-time or spatial components and is stationary, and $\partial^c\partial^d\bar h_{cd}=\eta^{00}\eta^{00}\partial_0\partial_0\bar h_{00}=0$. By the same formula every component $G^{(1)}_{0i}$ and $G^{(1)}_{ij}$ is a combination of components $\bar h_{0\cdot}$ or of time derivatives, hence $0$. Since $A(\varepsilon)=\varepsilon h$ and the formula of [L4] is linear in $h$, $G^{(1)}_{ab}(A(\varepsilon))=\varepsilon G^{(1)}_{ab}(h)$; thus $G^{(1)}_{00}(A(\varepsilon))=6\varepsilon$ and $G^{(1)}_{0i}(A(\varepsilon))=G^{(1)}_{ij}(A(\varepsilon))=0$. [L3, L4, algebra]

2.1 (Einstein family and the matter hierarchy.) Define $T_{ab}(\varepsilon):=G_{ab}(g(\varepsilon))/\kappa$ on $\Omega$; the metric-selected connection and its curvature are smooth in the metric components, so $T(\varepsilon)$ is a smooth symmetric component field and $G_{ab}(g(\varepsilon))=\kappa T_{ab}(\varepsilon)$ holds identically; hence the data are an Einstein family and clause (c) of [L1] defines $\rho_\varepsilon=T_{00}/c^2$. With this $\rho_\varepsilon$ the matter hierarchy of [L2] holds with left-hand side $0$, so the theorem applies and provides $\varepsilon_*'$ and $C_2$ depending only on $C=L=1$ and the dimension. [step 1.1, L1, L2, algebra]

3.1 (Poisson equation and density.) Let $\Phi:=\varepsilon c^2\varphi$; by [L3], $\Delta\Phi=\varepsilon c^2\Delta\varphi=3\varepsilon c^2$ on $\Omega$. With $\bar\rho:=3\varepsilon c^2/(4\pi G_N)$ this gives $\Delta\Phi=4\pi G_N\bar\rho$ exactly. Moreover clause (c) of [L2] gives $|\kappa T_{00}-2\Delta\Phi/c^2|\le C_2\varepsilon^2$ on $K$ for $0<\varepsilon\le\varepsilon_*'$, that is $|\kappa c^2\rho_\varepsilon-6\varepsilon c^2|\le C_2\varepsilon^2$, which after division by $\kappa c^2>0$ reads $|\rho_\varepsilon-3\varepsilon c^2/(4\pi G_N)|\le C_2\varepsilon^2/(\kappa c^2)=C_2\varepsilon^2c^2/(8\pi G_N)$ by $1/(\kappa c^2)=c^2/(8\pi G_N)$. [step 1.2, step 2.1, L1, L2, L3, L5, algebra]

4.1 (The leading term.) By steps 1.2 and 3.1, $2\Delta\Phi/c^2=2\cdot3\varepsilon c^2/c^2=6\varepsilon=G^{(1)}_{00}(A(\varepsilon))$, so the leading term in the hierarchy inequality $|G_{00}-2\Delta\Phi/c^2|\le C_2\varepsilon^2$ of [L2] is exactly the first-order coefficient of the family, and the residual is the quadratic remainder of [[thm-gr-flat-linearized-curvature-and-gauge]] clause (f); also $G^{(1)}_{0i}=G^{(1)}_{ij}=0$ by step 1.2. This completes the verification of clauses 3 and 4. [step 1.2, step 3.1, L2, L4, algebra] ∎

## Remarks

- **Non-vacuity and scope.** The example exhibits a data tuple that satisfies every hypothesis of the hierarchy theorem with the explicit constants $C=L=1$, and computes the dictionary quantities $\Phi$, $\bar\rho$ and $G^{(1)}$ for it. It is a conditional statement about the model family: it asserts that the quadratic potential solves the Poisson equation with constant density, not that any physical body realizes the density, and it involves no observation.
