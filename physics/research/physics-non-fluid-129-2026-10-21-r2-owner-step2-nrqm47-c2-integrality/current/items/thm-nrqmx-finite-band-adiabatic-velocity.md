---
id: thm-nrqmx-finite-band-adiabatic-velocity
kind: theorem
domain: mathematics
library: mathematics
title: Conditional band velocity and anomalous term
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 7
deps:
  - def-nrqmx-bloch-fiber-model
  - lem-nrqmx-bloch-fiber-model-properties
  - thm-nrqmx-two-band-degree-formula
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  def-nrqmx-bloch-fiber-model: mathematical-premise
  lem-nrqmx-bloch-fiber-model-properties: mathematical-premise
  thm-nrqmx-two-band-degree-formula: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Di Xiao, Ming-Che Chang, and Qian Niu, Berry Phase Effects on Electronic Properties
      url: https://arxiv.org/pdf/0907.2021
      locator: Sections III.A and V.A, Eqs. (3.6)–(3.7) and (5.7)–(5.8).
    - title: David Tong, Applications of Quantum Mechanics, University of Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf
      locator: Chapter 6, §§6.3.4–6.3.5.
---

## Statement

Assume Axiom of Choice and Countable Choice. Let $\mathbf a_1,\mathbf a_2,\mathbf a_3\in\mathbb R^3$ be a basis of direct-lattice vectors, each measured in metres, and set $\Lambda=\sum_{j=1}^3\mathbb Z\mathbf a_j$ and $\Lambda^*:=\{\mathbf G\in\mathbb R^3:\mathbf G\cdot\mathbf R\in2\pi\mathbb Z\text{ for all }\mathbf R\in\Lambda\}$, whose vectors have units of inverse metres. The reciprocal-space torus is $\mathbb R^3/\Lambda^*$; let $U\subset\mathbb R^3$ be an open set on which the quotient map is injective, giving local wave-vector coordinates. For $\delta\in\mathbb Z^3$ put $\mathbf R_\delta=\sum_j\delta_j\mathbf a_j$ and $\theta_j(\mathbf k)=\mathbf k\cdot\mathbf a_j\pmod{2\pi}$. Fix finite $S\subset\mathbb Z^3$ with $S=-S$ and hopping matrices $T_\delta\in M_r(\mathbb C)$ satisfying $T_{-\delta}=T_\delta^*$; assign the entries of $T_\delta$ units of joules. The finite-range physical fiber is

$$h(\mathbf k)=\sum_{\delta\in S}T_\delta e^{-i\mathbf k\cdot\mathbf R_\delta}=\sum_{\delta\in S}T_\delta e^{-i\theta(\mathbf k)\cdot\delta},$$

which is the fiber in [[def-nrqmx-bloch-fiber-model]] written in physical reciprocal coordinates. Its entries and its eigenvalues have energy units (joules). Let $\varepsilon:U\to\mathbb R$ be a $C^2$ simple eigenvalue of $h(\mathbf k)$ and, after shrinking $U$ if needed, assume its distance from the other eigenvalues is at least some $\gamma>0$ throughout $U$. Choose a $C^2$ local normalized eigenvector $u:U\to\mathbb C^r$ with $h(\mathbf k)u(\mathbf k)=\varepsilon(\mathbf k)u(\mathbf k)$ and $u(\mathbf k)^*u(\mathbf k)=1$.

Let $\mathbf x\in\mathbb R^3$ denote a position coordinate measured in metres, $\mathbf k\in U$ the physical crystal wave vector measured in inverse metres (radians are dimensionless), $q$ a constant signed charge in coulombs, $\mathbf E_{\rm ext}\in\mathbb R^3$ a constant electric field in volts per metre, and $\hbar>0$ the reduced Planck constant in joule seconds. Under the adopted single-band effective description, take

$$L=\hbar\mathbf k\cdot\dot{\mathbf x}+i\hbar\,u(\mathbf k)^*\nabla_{\mathbf k}u(\mathbf k)\cdot\dot{\mathbf k}-\varepsilon(\mathbf k)+q\mathbf E_{\rm ext}\cdot\mathbf x.$$

Here each term of $L$ has units of joules. Define the real Berry connection $\mathcal A_j(\mathbf k):=i u(\mathbf k)^*\partial_{k_j}u(\mathbf k)$, whose components have units of metres, and the Berry-curvature vector $\boldsymbol\Omega(\mathbf k):=\nabla_{\mathbf k}\times\mathcal A(\mathbf k)$, whose components have units of square metres. For time $t$ measured in seconds, a compact interval $I=[t_0,t_1]$ with $t_0<t_1$, and curves $\mathbf x,\mathbf k\in C^2(I;\mathbb R^3)$ with $\mathbf k(t)\in U$, define the action $\mathscr S[\mathbf x,\mathbf k]=\int_{t_0}^{t_1}L(\mathbf x(t),\mathbf k(t),\dot{\mathbf x}(t),\dot{\mathbf k}(t))\,dt$. A curve is **stationary** if $\left.\frac{d}{ds}\right|_{s=0}\mathscr S[\mathbf x_s,\mathbf k_s]=0$ for every jointly $C^2$ variation $(s,t)\mapsto(\mathbf x_s(t),\mathbf k_s(t))$, $|s|<\eta$, with $(\mathbf x_0,\mathbf k_0)=(\mathbf x,\mathbf k)$, fixed endpoints $\mathbf x_s(t_i)=\mathbf x(t_i)$ and $\mathbf k_s(t_i)=\mathbf k(t_i)$ for $i=0,1$, and $\mathbf k_s(t)\in U$. Every such $C^2$ stationary curve of this adopted effective action satisfies

$$\hbar\dot{\mathbf k}=q\mathbf E_{\rm ext},\qquad \dot{\mathbf x}=\frac{1}{\hbar}\nabla_{\mathbf k}\varepsilon-\dot{\mathbf k}\times\boldsymbol\Omega.$$

The action has units of joule seconds. The equations are invariant under a local phase change of $u$. The words “wave packet” and “slow-force” name only the physical motivation and regime label of this adopted effective model; no wave-packet object is used in the deduction, and no approximation-validity or error-bound claim about underlying quantum dynamics is made. For the two-band specialization, take $r=2$. Let $\mathbf b_1,\mathbf b_2,\mathbf b_3$ be the reciprocal basis, defined by $\mathbf b_j\cdot\mathbf a_\ell=2\pi\delta_{j\ell}$, so $\Lambda^*=\sum_j\mathbb Z\mathbf b_j$. Fix $\tau\in\mathbb R/(2\pi\mathbb Z)$ and the closed reciprocal two-torus

$$\Sigma_\tau=\{[\mathbf k]\in\mathbb R^3/\Lambda^*: \theta_3(\mathbf k)=\tau\},\qquad \kappa_\tau(\theta_1,\theta_2)=\left[\frac{\theta_1\mathbf b_1+\theta_2\mathbf b_2+\tau\mathbf b_3}{2\pi}\right].$$

Here $\kappa_\tau:\mathbb T^2_{2\pi}\to\Sigma_\tau$ is a diffeomorphism and fixes the orientation by $d\theta_1\wedge d\theta_2$. Suppose the restriction has the two-band form $h\circ\kappa_\tau=d_0I+d\cdot\sigma$ of [[thm-nrqmx-two-band-degree-formula]], with $d$ nowhere zero on this entire torus. Put $n=d/|d|$ and $P_s=(I+s n\cdot\sigma)/2$, $s\in\{+1,-1\}$; the chosen local eigenvector belongs to that band wherever its chart meets the slice. Interpret $P_s$ also as the corresponding globally defined projector on $\Sigma_\tau$. Define the global real two-form

$$\mathcal B_s:=i\,\operatorname{tr}\bigl(P_s(dP_s\wedge dP_s)P_s\bigr).$$

On every local normalized eigenvector chart this is $d\mathcal A$ for $\mathcal A=i u^*du$; it does not require a global eigenvector. In physical reciprocal coordinates, the coordinate conversion on every such chart is

$$\kappa_\tau^*\mathcal B_s=\frac{\boldsymbol\Omega(\kappa_\tau(\theta))\cdot(\mathbf b_1\times\mathbf b_2)}{(2\pi)^2}\,d\theta_1\wedge d\theta_2.$$

The coefficient is dimensionless, since $\boldsymbol\Omega$ has units of square metres and each reciprocal basis vector has inverse-metre units. With this orientation and the same band sign,

$$\frac{1}{2\pi}\int_{\Sigma_\tau}\mathcal B_s=\frac{i}{2\pi}\int_{\mathbb T^2_{2\pi}}\operatorname{tr}\bigl(P_s(dP_s\wedge dP_s)P_s\bigr)=C(P_s)=-s\deg(n).$$

The integrals are over the whole closed torus, and the exterior derivatives in the second integral are in the dimensionless $\theta$ coordinates. This is the Chern convention of [[thm-nrqmx-two-band-degree-formula]].

## Statement references

[[def-nrqmx-bloch-fiber-model]]

[[lem-nrqmx-bloch-fiber-model-properties]]

[[thm-nrqmx-two-band-degree-formula]]

## Facts & Assumptions

**Given:** The direct lattice and reciprocal coordinates, a finite-range Hermitian Bloch fiber, a $C^2$ locally isolated simple eigenvalue with its local normalized eigenvector, the explicitly adopted Lagrangian, and the endpoint-fixed variation class in the Statement. The electric field is constant in space and time; $q$ is signed.

[A1] Axiom of Choice and Countable Choice are the principles in [[def-axiom-of-choice]] and [[def-countable-choice]].

[A2] The Lagrangian in the statement is an adopted single-band effective model motivated by the slow-force, single-band wave-packet discussion of Xiao, Chang, and Niu, §§III.A and V.A. This item assumes no validity conditions or error bound for an approximation to underlying quantum evolution.

[F1] [[def-nrqmx-bloch-fiber-model]] fixes the finite-range Bloch fiber setting in the dimensionless phase $\theta_j=\mathbf k\cdot\mathbf a_j$; [[lem-nrqmx-bloch-fiber-model-properties]] gives a smooth projector for a globally uniformly isolated band cluster. The local $C^2$ eigenvalue and eigenvector regularity needed below are explicit hypotheses of the Statement.

[F2] [[thm-nrqmx-two-band-degree-formula]] gives, on the full two-torus oriented by $d\theta_1\wedge d\theta_2$, $C(P_s)=(i/2\pi)\int_{\mathbb T^2_{2\pi}}\operatorname{tr}(P_s(dP_s\wedge dP_s)P_s)=-s\deg(n)$. Its sign agrees with the local real connection $\mathcal A=i u^*du$.

## Proof

**Given:** [A1], [A2], [F1], [F2], a local normalized eigenvector, and the action and variations defined in the Statement.

1.1 Differentiating $u^*u=1$ gives $(\partial_{k_j}u)^*u+u^*\partial_{k_j}u=0$, so $u^*\partial_{k_j}u$ is purely imaginary and $\mathcal A_j=i u^*\partial_{k_j}u$ is real. If a $C^2$ rank-one projector $P(\mathbf k)$ is supplied instead, fix a unit vector $v\in\operatorname{im}P(\mathbf k_0)$; by continuity $P(\mathbf k)v\ne0$ near $\mathbf k_0$, and $u(\mathbf k)=P(\mathbf k)v/\|P(\mathbf k)v\|$ supplies a local $C^2$ normalized section. Under a local $C^2$ phase change $u'=e^{i\chi}u$, direct differentiation gives $\mathcal A'=\mathcal A-\nabla_{\mathbf k}\chi$, so $\boldsymbol\Omega'=\boldsymbol\Omega$ and the Lagrangian changes by $-\hbar\,d\chi/dt$, a total derivative. Thus the action's stationary curves are independent of the chosen local phase. [A1, A2, F1, given, algebra]

1.2 Write $z=(\mathbf x,\mathbf k)\in\mathbb R^3\times U$ for the six configuration coordinates. The integrand is $C^1$ in $(z,\dot z)$, and $\partial L/\partial\dot z$ is $C^1$ along a $C^2$ curve. For every compactly supported $C^2$ variation field $\xi:(t_0,t_1)\to\mathbb R^6$, the linear variation $z_s=z+s\xi$ is admissible for sufficiently small $|s|$, since $\mathbf k(I)$ is compact in $U$. The first variation is $\int_{t_0}^{t_1}(L_z\cdot\xi+L_{\dot z}\cdot\dot\xi)\,dt$. Integration by parts and stationarity give $\int_{t_0}^{t_1}(L_z-\frac{d}{dt}L_{\dot z})\cdot\xi\,dt=0$ for every such $\xi$. The coefficient is continuous; if one component were nonzero at some time, continuity and a nonnegative smooth bump supported in a neighborhood where it has fixed strict sign would make this integral nonzero. Hence $\frac{d}{dt}L_{\dot z}=L_z$ componentwise along the curve. This proves the Euler–Lagrange equations from the stated variation definition rather than assuming them. [given, construct, algebra]

2.1 For each coordinate $x_j$, $\partial L/\partial\dot x_j=\hbar k_j$ and $\partial L/\partial x_j=q(E_{\rm ext})_j$. The Euler–Lagrange equation derived in step 1.2 therefore gives $\hbar\dot k_j=q(E_{\rm ext})_j$, the first vector equation. [A1, step 1.2, given, algebra]

2.2 For each $k_j$, $\partial L/\partial\dot k_j=\hbar\mathcal A_j$ and $\partial L/\partial k_j=\hbar\dot x_j+\hbar\sum_i(\partial_{k_j}\mathcal A_i)\dot k_i-\partial_{k_j}\varepsilon$. Applying the Euler–Lagrange equation from step 1.2 and the chain rule gives $\hbar\dot x_j=\partial_{k_j}\varepsilon+\hbar\sum_i(\partial_{k_i}\mathcal A_j-\partial_{k_j}\mathcal A_i)\dot k_i=\partial_{k_j}\varepsilon-\hbar(\dot{\mathbf k}\times\boldsymbol\Omega)_j$, where the last equality is the component identity $\partial_{k_i}\mathcal A_j-\partial_{k_j}\mathcal A_i=-\epsilon_{j i\ell}(\nabla_{\mathbf k}\times\mathcal A)_\ell$. Dividing by $\hbar>0$ gives the second vector equation. [A1, step 1.2, given, algebra]

2.3 The reciprocal-basis identity gives $\theta_j(\kappa_\tau(\theta))=\theta_j$ for $j=1,2$ and $\theta_3=\tau$ modulo $2\pi$, so $\kappa_\tau$ identifies the full closed slice with the oriented two-torus in [F2]. Restricting the finite Fourier sum to $\theta_3=\tau$ gives a finite Fourier sum in $(\theta_1,\theta_2)$, with Hermitian conjugate coefficients paired at opposite modes. The nowhere-zero $d$ makes both $P_s$ globally smooth by [F1] and [F2]. Local unit sections exist by step 1.1, without a global unit section. On each such chart, differentiating $P_s=u u^*$ and $u^*u=1$ gives $d\mathcal A=i\,du^*\wedge du=i\,\operatorname{tr}(P_s(dP_s\wedge dP_s)P_s)$. These local two-forms therefore agree on overlaps with the displayed global projector form, including overlaps not admitting a single phase function. Write the physical Cartesian components as $k_j$. Since $d\mathcal A=\Omega_1\,dk_2\wedge dk_3+\Omega_2\,dk_3\wedge dk_1+\Omega_3\,dk_1\wedge dk_2$ and $\partial_{\theta_j}\kappa_\tau=\mathbf b_j/(2\pi)$ for $j=1,2$, evaluation on these two tangent vectors proves the stated pullback formula and its orientation. Integration over this entire torus is exactly the Chern integral in [F2], giving $C(P_s)=-s\deg(n)$. No local chart is treated as the whole integration domain. The variational derivation itself does not depend on a two-band restriction. [F1, F2, step 1.1, given, algebra]

3.1 The result is the exact variational consequence of the adopted effective Lagrangian, with the lattice length and reciprocal-coordinate conversion specified in the Statement. It does not establish that a physical system is described by this model or quantify any error from neglected interband transitions or field variation. [A2, step 2.1, step 2.2, step 2.3] ∎
