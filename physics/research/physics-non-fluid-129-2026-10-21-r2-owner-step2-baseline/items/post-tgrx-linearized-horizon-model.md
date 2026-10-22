---
id: post-tgrx-linearized-horizon-model
kind: postulate
title: Linearized future horizon focusing model
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 6
deps:
  - post-tgrx-semiclassical-equation
  - def-tgr-horizon-screen-family
dependency_roles:
  post-tgrx-semiclassical-equation: formulation-prerequisite
  def-tgr-horizon-screen-family: mathematical-premise
relations:
  motivated_by:
    - pthm-tgr-restricted-classical-area
physical_scope: >
  An adopted first-order Einstein-Hilbert semiclassical model on a fixed smooth
  globally hyperbolic Lorentzian four-manifold with a stationary smooth null
  hypersurface, compact transverse cuts, an affinely normalized complete future
  generator flow, a supplied Hadamard state family and one fixed stress
  prescription. It
  asserts no null energy condition, entropy inequality, solution existence,
  physical accuracy, or general higher-curvature focusing result.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Aron C. Wall, A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices, Physical Review D 85, 104049 (2012), arXiv:1105.3445v6"
      url: "https://arxiv.org/pdf/1105.3445"
      locator: "Complete 44-page article; §2.2, equations (14)–(23), for the stationary-background first-order Raychaudhuri equation, affine future boundary condition, expansion/area relation and twice-integrated null-stress moment. The later modular/GSL bridge is not imported."
    - title: "Harvey Reall, Part III Black Holes, University of Cambridge lecture notes (2024)"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
      locator: "Complete 149-page lecture notes; §§4.6 and 4.8, especially equations (4.26)–(4.40), for affine null generators, screen expansion/shear and the exact null Raychaudhuri equation. The local model adopts only its stated first-order specialization."
verification:
  precheck: n/a
---

## Postulate

Use natural units $c=\hbar=k_B=1$, metric signature $(-,+,+,+)$, and the
curvature convention
$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$ with
$\operatorname{Ric}_{bd}=g^{ac}R_{abcd}$. Let $(M,g_0)$ be a smooth,
time-oriented, globally hyperbolic Lorentzian four-manifold, and let
$H_0\subset M$ be a smooth embedded null hypersurface. Its smooth,
nowhere-zero, future null generator $k_0$ is affine, $\nabla_{k_0}k_0=0$,
with screen and expansion conventions as in the smooth null-screen definition.
Fix a nonempty compact smooth two-manifold $C$ and $\lambda_0\in\mathbb R$.
For each dimensionless $\epsilon$ in an open interval about $0$, supply a
smooth time-oriented globally hyperbolic Lorentzian metric $g_\epsilon$, a
smooth null hypersurface $H_\epsilon$, and a smooth map
$$\Phi_\epsilon:[\lambda_0,\infty)\times C\to H_\epsilon$$
such that $\partial_\lambda\Phi_\epsilon=k_\epsilon\circ\Phi_\epsilon$,
$k_\epsilon$ is future-directed and affine, and every
$\Phi_{\epsilon,\lambda}:C\to H_\epsilon$ is an embedding with spacelike
image. The family supplies a fixed identification of generator labels and a
fixed affine normalization across $\epsilon$. With $[\lambda]=L$, this
parameterization gives $[k_\epsilon]=1$ in length coordinates.

Write $q_{\epsilon,\lambda}:=\Phi_{\epsilon,\lambda}^*g_\epsilon$ for the
positive-definite induced metric on $C$, and let $\mu_{\epsilon,\lambda}$ be
its Riemannian area density. Call the reference geometry stationary in this
model when its screen deformation form $B_0$ vanishes along every generator;
then its expansion $\theta_0$ and shear $\sigma_0$ vanish by definition. Define
$\theta_\epsilon(\lambda,y)$ as the screen expansion along
$\Phi_\epsilon(\lambda,y)$ and
$\delta\theta:=\left.\partial_\epsilon\theta_\epsilon\right|_{0}$. Use
the stress tensor $T^{\mathrm{ren},\epsilon}_{ab}[g_\epsilon,\omega_\epsilon]$
supplied by the chosen Hadamard state family and one fixed local
renormalization prescription in the semiclassical model. No independent
graviton-fluctuation source is included in this perturbative family.
Select its Einstein-Hilbert submodel by setting the curvature-squared
couplings to zero, and define
$\delta T_{kk}(\lambda,y):=\left.\partial_\epsilon
(T^{\mathrm{ren},\epsilon}_{ab}k_\epsilon^ak_\epsilon^b)\right|_0$.
Here $G_N>0$ is Newton's constant with natural-unit dimension $L^2$;
$[\lambda]=L$, $[\delta T_{kk}]=L^{-4}$, $[\delta\theta]=L^{-1}$, and
$[\delta A]=L^2$.

Assume $\delta T_{kk}$ is continuous, its tail is absolutely integrable on
each generator, and
$$\int_C dA_0\int_{\lambda_0}^{\infty}(v-\lambda_0)|\delta T_{kk}(v,y)|\,dv<\infty,$$
where $dA_0:=\mu_{0,\lambda_0}$ is the reference background area density.
Adopt, only to first order in $\epsilon$, the linearized focusing equation and
future boundary condition
$$\partial_\lambda\delta\theta(\lambda,y)=-8\pi G_N\delta T_{kk}(\lambda,y),\qquad \lim_{\lambda\to\infty}\delta\theta(\lambda,y)=0.$$
Terms quadratic in expansion or shear are omitted only at this first
perturbative order: both vanish in the stationary reference geometry and are
of order $\epsilon$ in the supplied family, so their squares are of order
$\epsilon^2$.
This postulate is an adopted model equation; it neither asserts that the model
describes nature nor identifies its null-stress moment with modular energy or
entropy.

## Postulate references

[[post-tgrx-semiclassical-equation]]

[[def-tgr-horizon-screen-family]]

[[pthm-tgr-restricted-classical-area]]

[Aron C. Wall, A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices](https://arxiv.org/pdf/1105.3445)

[Harvey Reall, Part III Black Holes](https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf)

## Remarks

The Einstein-Hilbert specialization and the first-order truncation are part of
the model. In particular, this is not a conclusion about nonzero
curvature-squared couplings. The published restricted classical area theorem
uses a separate null-energy premise; no such premise is adopted here.
