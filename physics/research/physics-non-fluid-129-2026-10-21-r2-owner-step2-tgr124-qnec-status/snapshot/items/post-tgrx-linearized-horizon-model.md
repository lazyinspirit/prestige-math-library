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
  four-manifold with a family of smooth time-oriented globally hyperbolic
  Lorentzian metrics. Its background, state, and other inputs are restricted to
  the model-instance admissible domain below the supplied effective cutoff
  E_cut. It has a stationary smooth null hypersurface, compact transverse cuts, an
  affinely normalized complete future generator flow, a supplied Hadamard state
  family, and one fixed stress prescription. Here “horizon” denotes only the
  supplied null hypersurface, not a causal or event horizon. It asserts no null
  energy condition, entropy inequality, solution existence, physical accuracy,
  or general higher-curvature focusing result.
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
$\operatorname{Ric}_{bd}=g^{ac}R_{abcd}$. Let $M$ be a fixed Hausdorff,
second-countable, oriented smooth four-manifold. For each dimensionless
$\epsilon$ in an open interval about $0$, supply a smooth Lorentzian metric
$g_\epsilon$ on $M$ with the stated signature and a time orientation (a chosen
future timelike cone). Each $(M,g_\epsilon)$ is globally hyperbolic: it is
strongly causal, meaning every point has arbitrarily small neighborhoods that
each causal curve meets in a connected parameter interval, and each causal
diamond $J^+(p)\cap J^-(q)$ is compact. Here causal curves are piecewise
$C^1$ with consistently future- or past-directed causal tangent, and
$J^\pm(p)$ denote points reachable from or reaching $p$ by such curves.

For each $\epsilon$, let $H_\epsilon\subset M$ be a smooth embedded
three-dimensional submanifold whose induced metric has a one-dimensional
radical at every point. Its smooth nowhere-zero future null generator field
$k_\epsilon$ spans that radical and is affine,
$\nabla^{g_\epsilon}_{k_\epsilon}k_\epsilon=0$. At $p\in H_\epsilon$ define
the screen space $\mathcal S_{\epsilon,p}:=k_\epsilon^\perp/\mathbb R
k_\epsilon$, where $k_\epsilon^\perp$ is taken in $T_pM$. Its positive screen
metric is $\bar g_\epsilon([X],[Y]):=g_\epsilon(X,Y)$, its screen deformation
form is
$$B_\epsilon([X],[Y]):=g_\epsilon(\nabla^{g_\epsilon}_Xk_\epsilon,Y),$$
and its expansion and shear are $\theta_\epsilon:=\operatorname{tr}_{\bar
g_\epsilon}B_\epsilon$ and $\sigma_\epsilon:=B_\epsilon-\frac12\theta_\epsilon
\bar g_\epsilon$, respectively. These are the supplied smooth null-screen
conventions. The word “horizon” below denotes only $H_\epsilon$; no causal- or
event-horizon property is assumed.

Fix a nonempty compact smooth two-manifold $C$ and $\lambda_0\in\mathbb R$.
For each $\epsilon$, supply a smooth map
$$\Phi_\epsilon:[\lambda_0,\infty)\times C\to H_\epsilon$$
such that $\partial_\lambda\Phi_\epsilon=k_\epsilon\circ\Phi_\epsilon$, and
every $\Phi_{\epsilon,\lambda}:C\to H_\epsilon$ is an embedding with spacelike
image. The family supplies a fixed identification of generator labels and
affine normalization across $\epsilon$. With $[\lambda]=L$, this
parameterization gives $[k_\epsilon]=1$ in length coordinates.

Write $q_{\epsilon,\lambda}:=\Phi_{\epsilon,\lambda}^*g_\epsilon$ for the
positive-definite induced metric on $C$, and let $\mu_{\epsilon,\lambda}$ be
its Riemannian area density. On each finite parameter slab, the pulled-back
metric, area density, screen deformation form, expansion, and shear are jointly
$C^1$ in $(\epsilon,\lambda)$ and smooth in $y$; the underlying metric and
embedding family has the corresponding $\epsilon$-regularity and spatial
derivatives needed to define them. Call the reference geometry stationary in
this model when $B_0=0$ along every generator; then $\theta_0=\sigma_0=0$.
Define $\delta\theta:=\left.\partial_\epsilon\theta_\epsilon\right|_0$.

For each $\epsilon$, supply a positive normalized state $\omega_\epsilon$ on
the selected free scalar-field algebra. Its two-point distribution $W_\epsilon$
is a bisolution of the selected Klein–Gordon operator and has the supplied
Hadamard wavefront relation $\mathcal C^+_{g_\epsilon}$: pairs of future-null
covectors related by parallel propagation along a future-directed null
geodesic with common positive scale and opposite sign in the second slot,
including the coincident-point case. Supply a state-independent Hadamard
singular bidistribution
$H_{\mu,\epsilon}$ such that $W_\epsilon-H_{\mu,\epsilon}$ is smooth, and one
fixed local stress prescription across the family,
$$T^{\mathrm{ren},\epsilon}_{ab}(x)=\lim_{x'\to x}D^{\epsilon}_{ab}(x,x')\bigl(W_\epsilon-H_{\mu,\epsilon}\bigr)(x,x')+C_{ab}[g_\epsilon;\mu,\mathbf c](x),$$
where $D^{\epsilon}_{ab}$ is the supplied finite-order bidifferential
operator and $C_{ab}$ the supplied state-independent local curvature
correction with fixed scale $\mu$ and finite renormalization conditions
$\mathbf c$. Thus the coincidence limit acts on a smooth difference, not on
the singular distributions separately. The family
$$F_\epsilon(\lambda,y):=(T^{\mathrm{ren},\epsilon}_{ab}k_\epsilon^ak_\epsilon^b)\bigl(\Phi_\epsilon(\lambda,y)\bigr)$$
is jointly $C^1$ in $\epsilon$ and continuous in $(\lambda,y)$ on each finite
parameter slab. No independent graviton-fluctuation source is included.

Restrict every model input to the admissible domain supplied with its chosen
effective-model instance and to the regime below its supplied cutoff
$E_{\mathrm{cut}}>0$; neither the cutoff value nor its admissible input domain
is chosen here. Keep any prescribed retarded data as supplied inputs, without
imposing a collapse geometry or scattering history. Select the
Einstein-Hilbert submodel by setting the supplier's curvature-squared couplings
to zero. Write $G_N$ for the supplier's Newton's constant $G$ in the natural-unit
convention $c=\hbar=k_B=1$, so $G_N>0$ has dimension $L^2$. Define
$$\delta T_{kk}(\lambda,y):=\left.\partial_\epsilon F_\epsilon(\lambda,y)\right|_0.$$
Then $[\lambda]=L$, $[k_\epsilon]=1$, $[\delta T_{kk}]=L^{-4}$, and
$[\delta\theta]=L^{-1}$.
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
