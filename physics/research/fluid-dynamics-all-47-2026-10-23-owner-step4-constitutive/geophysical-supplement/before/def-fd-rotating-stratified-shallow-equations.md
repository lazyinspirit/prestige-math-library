---
id: def-fd-rotating-stratified-shallow-equations
kind: definition
title: Rotating stratified and shallow-water equation families
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-x00
  - def-countable-choice
  - def-lebesgue-outer-measure
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - def-integrable-real-and-complex-functions-and-their-integrals
dependency_roles:
  def-fd-x00: mathematical-premise
  def-countable-choice: mathematical-premise
  def-lebesgue-outer-measure: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  thm-lebesgue-measure-is-a-complete-measure: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Geoffrey K. Vallis, Fluid Dynamics of the Atmosphere and Ocean, University of Exeter lecture notes, Autumn 2018, §§1.6.2–1.6.3 and §2.4.2"
      url: "https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf"
    - title: "Darryl D. Holm, Ideal shallow water dynamics in a rotating frame, Imperial College London MPE CDT PDE lecture notes, Autumn 2016, §§1.1 and 1.4"
      url: "https://www.ma.ic.ac.uk/~dholm/classnotes/MPE2015-RSWlectures-6Dec.pdf"
    - title: "Paola Rizzoli, Wave Motion in the Ocean and the Atmosphere, MIT OpenCourseWare 12.802, Lecture 12: Shallow water equations with rotation — Poincaré waves, Spring 2008"
      url: "https://ocw.mit.edu/courses/12-802-wave-motion-in-the-ocean-and-the-atmosphere-spring-2008/b480aaaa3a6dff999df6d5007b5b73f6_MIT12_802S08_lec12.pdf"
verification:
  precheck: pending
---

## Definition

Let $I\subseteq\mathbb R$ be a nonempty open time interval. For $d=2,3$, set $Q_d=[0,2\pi]^d$ and define the flat periodic domain $\mathbb T^d:=\mathbb R^d/(2\pi\mathbb Z)^d$. Let $\lambda_d^*$ be the Lebesgue outer set function induced by elementary volume on the algebra $\mathcal E_d$ of elementary subsets of $\mathbb R^d$; that is, for $S\subseteq\mathbb R^d$, $\lambda_d^*(S)=\inf\{\sum_{k=0}^\infty\mu_0(A_k):A_k\in\mathcal E_d\text{ for all }k,\ S\subseteq\bigcup_{k=0}^\infty A_k\}$, where $\mu_0$ is elementary volume. Let $\mathcal L(\mathbb R^d)$ be the family of sets $A\subseteq\mathbb R^d$ satisfying $\lambda_d^*(B)=\lambda_d^*(B\cap A)+\lambda_d^*(B\setminus A)$ for every $B\subseteq\mathbb R^d$, and let $\lambda_d$ be the restriction of $\lambda_d^*$ to $\mathcal L(\mathbb R^d)$. This is the Carathéodory definition of Lebesgue measure. Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ for the measure and integration conventions in this item; under this hypothesis $\mathcal L(\mathbb R^d)$ is a sigma-algebra, $\lambda_d$ is a complete measure, and the box $Q_d$ is measurable with $\lambda_d(Q_d)=(2\pi)^d$. For a real $\lambda_d$-integrable function $F$ on $Q_d$, integrability means measurability and $\int_{Q_d}|F|\,d\lambda_d<\infty$; with $F^+=\max(F,0)$ and $F^-=\max(-F,0)$, define $\int_{Q_d}F\,d\lambda_d:=\int_{Q_d}F^+\,d\lambda_d-\int_{Q_d}F^-\,d\lambda_d$. In formulas, $dx$ means $d\lambda_d(x)$ and $dt$ means $d\lambda_1(t)$, where $\lambda_1$ is Lebesgue measure on $\mathbb R$. The expression $\int_{\mathbb T^d}F\,dx$ means integration of the periodic lift over $Q_d$; $\int_{t_0}^{t_1}\int_{Q_d}F(t,x)\,dx\,dt$ means the iterated Lebesgue integral with the spatial integral first whenever it exists. A field on $\mathbb T^d$ is represented by its $2\pi$-periodic lift to the nonempty open spatial domain $\mathbb R^d$. All fields below are classical: their displayed time and spatial derivatives are continuous, and the velocity and buoyancy fields have continuous second spatial derivatives. Each displayed equation is a pointwise equality.

For a scalar field $q$, set $\nabla q=(\partial_{x_1}q,\ldots,\partial_{x_d}q)$ and $\Delta q=\sum_{j=1}^d\partial_{x_j}^2q$. For a vector field $w=(w_1,\ldots,w_d)$, set $\nabla\cdot w=\sum_{j=1}^d\partial_{x_j}w_j$, $\Delta w=(\Delta w_1,\ldots,\Delta w_d)$, $|w|^2=\sum_{j=1}^dw_j^2$, and $|\nabla w|^2=\sum_{i,j=1}^d(\partial_{x_j}w_i)^2$. For a matrix field $A$, its divergence is rowwise: $(\nabla\cdot A)_i=\sum_{j=1}^d\partial_{x_j}A_{ij}$. In three dimensions $e_3\times u=(-u_2,u_1,0)$, and in two dimensions $Jv=(-v_2,v_1)$.

On $\mathbb T^3$, let $u:I\times\mathbb T^3\to\mathbb R^3$ be velocity, $b:I\times\mathbb T^3\to\mathbb R$ be a buoyancy perturbation, and $\pi:I\times\mathbb T^3\to\mathbb R$ be specific pressure. Let $e_3=(0,0,1)$, and prescribe constant parameters $f\in\mathbb R$, $N>0$, and $\nu,\kappa\ge0$. The rotating, linear, constant-stratification Boussinesq equation family is

$$u_t+f e_3\times u+\nabla\pi=b e_3+\nu\Delta u,\qquad \nabla\cdot u=0,\qquad b_t+N^2u_3=\kappa\Delta b.$$

Here $\Delta$ acts componentwise, $u_3$ is the vertical velocity component, $f$ is the Coriolis coefficient, $N$ is the constant buoyancy-frequency parameter, and $\nu$ and $\kappa$ are the prescribed momentum and buoyancy diffusion coefficients. The inviscid branch is the choice $\nu=\kappa=0$. In this mathematical family, $b$ is only the scalar acceleration variable appearing in the vertical forcing term $b e_3$ and in its evolution equation; no density field or identification such as $b=-g\,\delta\rho/\rho_0$ is part of this definition. The positive parameter $N$ has units $\mathrm{s}^{-1}$ and its square is the prescribed coefficient coupling $u_3$ to $b$; no background buoyancy profile $b_0(z)$ or identification $N^2=\partial_z b_0$ is included. Such density-anomaly and background-profile relations would be additional physical modeling assumptions. In the formal Boussinesq interpretation, a constant reference density is used in inertia and the divergence constraint while density-anomaly effects are retained only through the vertical buoyancy acceleration; small fractional density variation is an applicability assumption, not a theorem giving a compressible limit.

For its rotating-frame interpretation, let $\mathbf E$ be an oriented Euclidean three-space with a fixed origin and fixed upward unit vector $\hat{\mathbf z}$. A rotating basis on $I$ is a triple of $C^1$ maps $\mathbf e_a:I\to\mathbf E$ ($a=1,2,3$) such that $\langle\mathbf e_a(t),\mathbf e_b(t)\rangle=\delta_{ab}$, the ordered basis is positively oriented, $\mathbf e_3(t)=\hat{\mathbf z}$, and $\dot{\mathbf e}_a(t)=\boldsymbol\Omega\times\mathbf e_a(t)$ for $a=1,2$, with constant $\boldsymbol\Omega=\Omega\hat{\mathbf z}$. This differential equation fixes the sign convention for the signed angular-velocity scalar $\Omega$; for this interpretation, spatial coordinates $x$ and vector components are relative to this time-indexed basis, and $u_t$ differentiates the components at fixed rotating coordinates. The component triple $u$ represents the vector $\sum_{a=1}^3u_a\mathbf e_a(t)$ in $\mathbf E$. Under this convention the Coriolis acceleration is $-2\boldsymbol\Omega\times u$ on the force side, hence $+f e_3\times u$ on the left with $f=2\Omega$. Let $\Phi:I\times\mathbb R^3\to\mathbb R$ be a gravitational potential per unit mass in the rotating coordinates, with continuous first spatial derivatives; $x\in\mathbb R^3$ denotes the coordinate vector relative to the fixed origin in the basis $\mathbf e_a(t)$. Define the effective potential $\Phi_{\rm eff}:I\times\mathbb R^3\to\mathbb R$ by $\Phi_{\rm eff}(t,x):=\Phi(t,x)-\tfrac12|\boldsymbol\Omega\times x|^2$, which incorporates the centrifugal contribution. These rotating-frame and effective-potential choices are assumptions; the inertial-frame balance is distinct. The periodic domain is a mathematical idealization, not a claim that the physical fluid occupies a compact torus.

Independently, on $\mathbb T^2$, let $h:I\times\mathbb T^2\to(0,\infty)$ be total layer depth and $v:I\times\mathbb T^2\to\mathbb R^2$ be horizontal velocity. Let $g>0$ and $f\in\mathbb R$ be prescribed constants, define $Jv:=(-v_2,v_1)$, and take a fixed flat bottom. The inviscid one-layer shallow-water equation family is

$$h_t+\nabla\cdot(hv)=0,\qquad (hv)_t+\nabla\cdot(hv\otimes v)+\nabla\!\left(\frac{g h^2}{2}\right)+f h Jv=0.$$

The tensor divergence is rowwise, $(\nabla\cdot(hv\otimes v))_i=\sum_{j=1}^2\partial_{x_j}(h v_i v_j)$. This family has one layer, positive depth, a flat bottom, and no bottom friction, wetting/drying, or interlayer coupling. These are mathematical equation systems, not assertions that a measured fluid realizes them. With SI interpretation, $t$ is in seconds, spatial coordinates in metres, $u$ and $v$ in metres per second, $b$ in metres per second squared, $\pi$, $\Phi$, and $\Phi_{\rm eff}$ in square metres per square second, $f$, $N$, and $\Omega$ in inverse seconds, $\nu$ and $\kappa$ in square metres per second, $h$ in metres, and $g$ in metres per square second. The displayed coefficients are prescribed within these formulations; no empirical calibration is asserted. The energy integrals below omit a constant reference density; multiplying them by a specified density in kilograms per cubic metre gives joules.

## Definition references

Countable Choice $\mathrm{AC}_\omega$, assumed for the measure and integration conventions: [[def-countable-choice]].

Lebesgue outer measure as the infimum of elementary-volume costs over countable elementary covers: [[def-lebesgue-outer-measure]].

Lebesgue measure on $\mathbb R^d$, including the real-line measure $\lambda_1$: [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]].

Countable additivity and completeness of Lebesgue measure under $\mathrm{AC}_\omega$: [[thm-lebesgue-measure-is-a-complete-measure]].

Measurability and measure of a closed box under $\mathrm{AC}_\omega$: [[thm-lebesgue-measure-of-a-box-of-every-kind]].

Integrability and the signed Lebesgue integral of real functions: [[def-integrable-real-and-complex-functions-and-their-integrals]].

Formal-PDE supplier [[def-fd-x00]]: it defines $I$ as a nonempty open time interval and $\Omega$ as a nonempty open subset of $\mathbb R^3$, requires pointwise classical equations with velocity $C^1$ in time and $C^2$ in space and pressure $C^1$ in space, and requires any further regularity used by a proof. Its Cartesian gradient, divergence, Laplacian, componentwise vector-Laplacian, row-component Jacobian, and Euclidean conventions match the conventions stated locally above. The periodic lifts use $\Omega=\mathbb R^3$, so the stratified branch meets its spatial-domain hypothesis. It does not define the two-dimensional shallow-water equations, which this item specifies locally.

Geoffrey K. Vallis, *Fluid Dynamics of the Atmosphere and Ocean*, University of Exeter full lecture notes, §§1.6.2–1.6.3 (buoyancy frequency and Boussinesq energetics) and §2.4.2 (shallow-water energy): [full lecture notes, PDF](https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf).

Darryl D. Holm, *Ideal shallow water dynamics in a rotating frame*, Imperial College London MPE CDT PDE full lecture notes, §§1.1 and 1.4 (rotating equations and their energy law): [full lecture notes, PDF](https://www.ma.ic.ac.uk/~dholm/classnotes/MPE2015-RSWlectures-6Dec.pdf).

Paola Rizzoli, MIT OpenCourseWare 12.802, Lecture 12, *Shallow water equations with rotation — Poincaré waves*, pp. 1–4 (derivation of the rotating one-layer system): [full lecture notes, PDF](https://ocw.mit.edu/courses/12-802-wave-motion-in-the-ocean-and-the-atmosphere-spring-2008/b480aaaa3a6dff999df6d5007b5b73f6_MIT12_802S08_lec12.pdf).
