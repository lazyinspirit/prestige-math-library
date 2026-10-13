---
id: ex-gr-weak-field-poisson-quadratic-potential
kind: example
title: "Explicit stationary weak-field data with a dimensionless quadratic
  potential: exact Poisson source and the first-order Einstein coefficient"
status: draft
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  [
    def-gr-stationary-weak-field-data,
    thm-gr-weak-field-einstein-stress-hierarchy,
    thm-gr-flat-linearized-curvature-and-gauge,
    def-gr-flat-linearized-perturbation,
    def-gr-minkowski-model-and-inertial-chart,
    def-gr-curvature-tensor-and-derived-tensors,
    def-gr-smooth-lorentzian-objects,
    def-laplacian-of-a-c2-function
  ]
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
    - title: "S. M. Carroll, Lecture Notes on General Relativity,
        arXiv:gr-qc/9712019v1 (1997), Ch. 4: the weak-field, static, slow-motion
        conditions g_{00}=-(1+2Phi), spatial metric (1-2Phi) delta_{ij} and the
        Newtonian limit, printed pp. 105-112 (PDF pp. 112-119)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos,
        Michaelmas 2019), sections 5.1-5.1.2: the stationary weak-field ansatz g
        = eta + h with h_{00}=-2Phi, h_{ij}=-2Phi delta_{ij} and the derivation
        of the Poisson equation, printed pp. 205-210 (PDF pp. 212-217)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong\
        /gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022
        revision), section 4.2 and the Newtonian-gravity module: weak fields,
        slow motion and the Poisson equation, printed p. 42 (PDF p. 43)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk\
        /user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Example

Work on the flat model of [[def-gr-minkowski-model-and-inertial-chart]] with
inertial chart $x$, let $L>0$ be a length, take spacetime region
$\Omega=\mathbb R\times B_L(0)\subseteq\mathbb R^4$ with spatial base
$U=B_L(0)\subseteq\mathbb R^3$, and let $K=\overline B_{L/2}(0)\subset U$.
Set $c>0$, $G_N>0$, $\kappa:=8\pi G_N/c^4$, $C:=1$,
$\varepsilon_0:=1/2$, choose the stationary-data remainder interval parameter
$\varepsilon_1^{\mathrm{data}}:=1$, set $r\equiv0$ on that interval, and

$$\varphi(\mathbf x):=\frac{(x^1)^2+(x^2)^2+(x^3)^2}{2L^2}.$$

Then:

1. $(\Omega,K,L,C,\varepsilon_0,\varphi,r)$ is stationary weak-field data
   in the sense of [[def-gr-stationary-weak-field-data]] clause (a), with
   $g_{ab}(\varepsilon)=\eta_{ab}+\varepsilon h_{ab}$,
   $h_{00}=-2\varphi$, $h_{ij}=-2\varphi\delta_{ij}$, $h_{0i}=0$; the
   family $(\delta_1,h,q)$ with $\delta_1:=1/2$ and $q\equiv0$ is
   a flat linearized family and $g(\varepsilon)-\eta=\varepsilon h$.
2. Defining $T_{ab}(\varepsilon):=G_{ab}(g(\varepsilon))/\kappa$ and
   $\rho_\varepsilon:=T_{00}(\varepsilon)/c^2$
   ([[def-gr-curvature-tensor-and-derived-tensors]]) makes the data an
   **Einstein family with coupling $\kappa$**
   ([[def-gr-stationary-weak-field-data]] clause (c)). This smooth symmetric
   source is defined by the metric; no dust model or independent rest-mass
   density is asserted.
3. For $\Phi=\varepsilon c^2\varphi$,
   $\Delta\Phi=3\varepsilon c^2/L^2$ exactly. The constant Newtonian source

   $$\bar\rho:=\frac{3\varepsilon c^2}{4\pi G_NL^2}$$

   satisfies $\Delta\Phi=4\pi G_N\bar\rho$ exactly on $U$. The distinct
   coordinate density read from the Einstein-family tensor satisfies
   $|\rho_\varepsilon-\bar\rho|\le C_2\varepsilon^2c^2/(8\pi G_NL^2)$ on
   $K$ for $0<\varepsilon\le\varepsilon_*'$, by the general $00$-component
   hierarchy; this does not use the hierarchy theorem's independent-dust
   conclusion.
4. The first-order Einstein coefficient of $A(\varepsilon):=\varepsilon h$
   is

   $$G^{(1)}_{00}(A(\varepsilon))=\frac{6\varepsilon}{L^2}=\frac{2\Delta\Phi}{c^2},\qquad G^{(1)}_{0i}(A(\varepsilon))=G^{(1)}_{ij}(A(\varepsilon))=0,$$

   so the leading term of the hierarchy is exactly the first-order
   coefficient of the family.

## Facts & Assumptions

**Given:** The flat model with inertial chart $x$, spacetime region $\Omega=\mathbb R\times B_L(0)$, spatial base $U=B_L(0)$, compact spatial set $K=\overline B_{L/2}(0)$, the function $\varphi$ and $r\equiv0$ above, $C=1$, $\varepsilon_0=1/2$, $\varepsilon_1^{\mathrm{data}}=1$, $\delta_1=1/2$, $c>0$, $G_N>0$ and $\kappa=8\pi G_N/c^4$.

[L1] Stationary weak-field data have metric components $g_{00}=-(1+2\varepsilon\varphi)+r_{00}$, $g_{0i}=r_{0i}$ and $g_{ij}=(1-2\varepsilon\varphi)\delta_{ij}+r_{ij}$ pulled back from $U$; the metric must be Lorentzian on $\Omega$ and the spatial derivatives through order two obey the stated bounds on $K$. An Einstein family has a smooth symmetric field $T$ with $G=\kappa T$ and $\rho_\varepsilon=T_{00}/c^2$ ([[def-gr-stationary-weak-field-data]] clauses (a)-(c), [[def-gr-smooth-lorentzian-objects]], [[def-gr-curvature-tensor-and-derived-tensors]]).

[L2] For every stationary weak-field Einstein family, the general component hierarchy gives $|\kappa T_{00}-2\Delta\Phi/c^2|\le C_2\varepsilon^2/L^2$ on $K$ for $0<\varepsilon\le\varepsilon_*'$ ([[thm-gr-weak-field-einstein-stress-hierarchy]] clauses (b)-(c)).

[L3] For $\varphi(\mathbf x)=|\mathbf x|^2/(2L^2)$, $\partial_i\varphi=x_i/L^2$, $\partial_i\partial_j\varphi=\delta_{ij}/L^2$ and $\Delta\varphi=3/L^2$; the field is stationary ([[def-laplacian-of-a-c2-function]]).

[L4] The first-order formulas are linear in $h$ and give $\bar h_{00}=-4\varphi$, $\bar h_{0i}=\bar h_{ij}=0$ and $G^{(1)}_{ab}=-\frac12\Box\bar h_{ab}+\partial^c\partial_{(a}\bar h_{b)c}-\frac12\eta_{ab}\partial^c\partial^d\bar h_{cd}$; for stationary fields $\Box=\Delta$ ([[thm-gr-flat-linearized-curvature-and-gauge]] clause (c), [[def-gr-flat-linearized-perturbation]] clauses (a) and (c)).

[L5] On $U=B_L(0)$, $0\le\varphi<1/2$; for $0<\varepsilon\le1/2$ the diagonal metric entries $-(1+2\varepsilon\varphi)$ and $1-2\varepsilon\varphi$ have signs $-,+,+,+$. Also $\kappa c^2=8\pi G_N/c^2$.

## Verification

**Proof technique:** check the spatially factored data, compute the exact Newtonian Poisson source and the first-order Einstein tensor, then use the general coordinate-density estimate without imposing dust assumptions.

1.1 (Admissible data.) The fields are smooth and factor through the spatial projection. For $0<\varepsilon\le1/2$ and $\mathbf x\in U$, $0\le2\varepsilon\varphi<1/2$, so [L5] gives a diagonal Lorentzian metric of signature $(-,+,+,+)$ on all of $\Omega$. On $K$, $|\varphi|\le1/8$, $|\partial_i\varphi|\le1/(2L)$ and $|\partial_i\partial_j\varphi|\le1/L^2$, so the bounds hold with $C=1$; $r=0$ satisfies its bounds on $(-\varepsilon_1^{\mathrm{data}},\varepsilon_1^{\mathrm{data}})$, with $\varepsilon_1^{\mathrm{data}}=1>\varepsilon_0=1/2$. Taking $\delta_1=1/2$ and $q=0$ gives the stated flat linearized family. [L1, L3, L5, algebra]

1.2 (First-order coefficient.) By [L3], $\Delta\varphi=3/L^2$. The trace reversal has $\bar h_{00}=-4\varphi$ and all other components zero. Formula [L4], stationarity and $\Box=\Delta$ give $G^{(1)}_{00}(h)=2\Delta\varphi=6/L^2$ and $G^{(1)}_{0i}(h)=G^{(1)}_{ij}(h)=0$. Linearity gives $G^{(1)}_{00}(A(\varepsilon))=6\varepsilon/L^2$ and the remaining displayed components vanish. [L3, L4, algebra]

2.1 (Einstein family.) Define $T_{ab}(\varepsilon)=G_{ab}(g(\varepsilon))/\kappa$ on $\Omega$. The metric-selected connection and curvature depend smoothly on the metric and its derivatives; hence $T$ is a smooth symmetric component field and $G=\kappa T$ identically. Thus the data are an Einstein family by [L1], with coordinate density $\rho_\varepsilon=T_{00}/c^2$. This construction is a mathematical source prescription, not a dust realization. [step 1.1, L1, L5, algebra]

3.1 (Exact Poisson source and coordinate-density estimate.) By [L3], $\Delta\Phi=\varepsilon c^2\Delta\varphi=3\varepsilon c^2/L^2$. Defining $\bar\rho=3\varepsilon c^2/(4\pi G_NL^2)$ gives $\Delta\Phi=4\pi G_N\bar\rho$ exactly. By [L2],
$$|\kappa c^2\rho_\varepsilon-6\varepsilon/L^2|\le C_2\varepsilon^2/L^2.$$
Since $\kappa c^2\bar\rho=6\varepsilon/L^2$ and $\kappa c^2=8\pi G_N/c^2$, division by $\kappa c^2>0$ gives
$$|\rho_\varepsilon-\bar\rho|\le\frac{C_2\varepsilon^2c^2}{8\pi G_NL^2}.$$
This compares the exact Newtonian source with the relativistic coordinate density to the order established by the component hierarchy; it does not assert equality or an independent dust source. [step 2.1, L2, L3, L5, algebra]

4.1 (Leading term.) By steps 1.2 and 3.1, $G^{(1)}_{00}(A(\varepsilon))=6\varepsilon/L^2=2\Delta\Phi/c^2$, and the other first-order Einstein components vanish as stated. This completes the verification. [step 1.2, step 3.1, L4, algebra] ∎

## Remarks

- **Non-vacuity and scope.** The example exhibits a data tuple satisfying the general Einstein-component hypotheses of the hierarchy theorem with $C=1$ and arbitrary $L>0$; it asserts no independent dust realization, and computes the dictionary quantities $\Phi$, $\bar\rho$ and $G^{(1)}$ for it. It is a conditional statement about the model family: it asserts that the quadratic potential solves the Poisson equation with constant density, not that any physical body realizes the density, and it involves no observation.
