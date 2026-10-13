---
id: ex-cm10-euler-angle-pole-and-orientation
kind: example
title: "The Euler-angle pole: a degenerate parametrization of $SO(3)$ while the physical orientation remains regular"
status: published
origin: session
domain: physics
dependency_level: 9
deps: [def-cm10-rigid-body-configuration, def-cm10-angular-velocity, def-cm-euler-angle-parametrization-and-heavy-top-system, lem-cm-coordinate-rotation-matrices, lem-cm-skew-matrix-cross-product-correspondence, def-cm-special-orthogonal-group, lem-cm-so3-is-a-matrix-group, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-total-derivative-in-euclidean-space, thm-chain-rule-for-total-derivatives, def-derivative, def-interval, def-matrix-space, def-matrix-product-and-identity-matrix, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, def-cm01-units]
dependency_roles:
  def-cm01-units: formulation-prerequisite
  def-cm10-rigid-body-configuration: formulation-prerequisite
  def-cm10-angular-velocity: formulation-prerequisite
  def-cm-euler-angle-parametrization-and-heavy-top-system: mathematical-premise
  lem-cm-coordinate-rotation-matrices: mathematical-premise
  lem-cm-skew-matrix-cross-product-correspondence: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-so3-is-a-matrix-group: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked example about the Euler-angle description of the orientation of the rigid-material model branch of [[post-cm10-rigid-material]]: at the pole $\\beta=0$ the parametrization is non-injective and its derivative has rank at most two, so it is not a chart there, and the map from Euler-angle rates to the body angular velocity loses injectivity; meanwhile the orientation path $R(t)=R_y(\\kappa t)$ passes through the pole orientation with constant angular velocity $\\kappa e_2$ for a positive rate $\\kappa$ in radians per second, and is perfectly regular. The item asserts no dynamics, no measurement and no claim that the orientation of a concrete body has been recorded."
sources:
  references:
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), Section 2.7 and Section 2.8.1: the Euler-angle parametrization, the chart's exclusion of the poles $\\sin\\theta=0$, and the $ABC\\sin^{2}\\theta$ Hessian determinant of the coordinate transformation"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 4 Sections 4.5-4.6, chapter pages 15-22 (PDF pages 69-76): Euler angles as local coordinates and the warning that the angular-velocity components are not globally coordinate derivatives"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 3.5, printed pages 62-65 (PDF pages 68-71): the three ordered rotations defining the Euler angles and the caution about the convention and the local character of the angles"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Example

Let $R_z,R_y$ be the coordinate rotation matrices of
[[lem-cm-coordinate-rotation-matrices]] and consider the formula of the
Euler-angle parametrization of
[[def-cm-euler-angle-parametrization-and-heavy-top-system]],
$$\Phi:\mathbb R^3\longrightarrow M_3(\mathbb R),\qquad \Phi(\alpha,\beta,\gamma):=R_z(\alpha)R_y(\beta)R_z(\gamma),$$
here read on the whole parameter space $\mathbb R^3$ (the definition restricts
its parameter domain to $\beta\in(0,\pi)$ and asserts no chart property). Angles are dimensionless radians;
time $t$ is read in seconds. Fix a positive rate $\kappa>0$ of dimension
$\tau^{-1}$, read in radians per second ([[def-cm01-units]]). Angle-curve
rates have the same dimension. Then:

1. $\Phi(\alpha,0,\gamma)=R_z(\alpha+\gamma)$: at the **pole** $\beta=0$ the
   value depends only on the sum $\alpha+\gamma$, and for every real $s$
   $$\Phi(\alpha+s,0,\gamma-s)=\Phi(\alpha,0,\gamma);$$
   hence $\Phi$ is not injective on any neighbourhood of a pole point.
2. the partial derivatives at a pole point satisfy
   $$\partial_\alpha\Phi(\alpha,0,\gamma)=\partial_\gamma\Phi(\alpha,0,\gamma)=[e_3]_\times R_z(\alpha+\gamma),$$
   so the Jacobian matrix has two identical columns, its rank is at most $2$,
   and $D\Phi:\mathbb R^3\to M_3(\mathbb R)$ is not injective; consequently $\Phi$ has no differentiable local
   inverse at any pole point;
3. along a smooth curve $t\mapsto(\alpha(t),\beta(t),\gamma(t))$ through a
   pole point ($\beta(0)=0$) the body angular velocity of the resulting
   rotation path is
   $$\omega(0)=(\alpha'(0)+\gamma'(0))\,e_3+\beta'(0)\,R_z(-\gamma(0))e_2,$$
   so the individual rates $\alpha'$ and $\gamma'$ enter only through their
   sum: the triples of rates $(\alpha',\beta',\gamma')$ and
   $(\alpha'+h,\beta',\gamma'-h)$ produce the same angular velocity, and the
   rate map of the parametrization is not injective at the pole, where $h$
   is any rate of dimension $\tau^{-1}$;
4. nevertheless the orientation path
   $$R:\mathbb R\longrightarrow SO(3),\qquad R(t):=R_y(\kappa t),$$
   with $c(t)=0$ and time window $I_0=\mathbb R$, of a rigid-material model passes through the pole orientation
   $R(0)=I_3=\Phi(0,0,0)$, is of class $C^\infty$, and has the constant body
   angular velocity $\kappa e_2$; the singularity of clause 2 is a property of the
   parametrization, not of the orientation or of the angular velocity.

## Facts & Assumptions
**Given:** The map $\Phi$, the coordinate rotation matrices of [[lem-cm-coordinate-rotation-matrices]], a pole point $(\alpha,0,\gamma)\in\mathbb R^3$, a real $s$, the positive rate $\kappa$ with units specified above, and a $C^2$ curve $(\alpha,\beta,\gamma)$ on an open time interval with $0$ an interior point and $\beta(0)=0$ ([[def-interval]], [[def-derivative]]).

[L1] Coordinate rotations ([[lem-cm-coordinate-rotation-matrices]]): $R_z(a),R_y(a)\in SO(3)$ for every real $a$, $R_z(0)=R_y(0)=I_3$, $R_z(a)R_z(b)=R_z(a+b)$, and for a differentiable $a$ the curves $R_z\circ a$, $R_y\circ a$ are differentiable with $(R_z\circ a)'=a'R_z(a)[e_3]_\times=a'[e_3]_\times R_z(a)$ and $(R_y\circ a)'=a'R_y(a)[e_2]_\times=a'[e_2]_\times R_y(a)$.

[L2] Skew-matrix correspondence and conjugation ([[lem-cm-skew-matrix-cross-product-correspondence]] clauses 1-3, [[def-cm-special-orthogonal-group]]): $[\omega]_\times z=\omega\times z$; the map $\omega\mapsto[\omega]_\times$ is injective; for $R\in SO(3)$ one has $R[\omega]_\times R^{\mathsf T}=[R\omega]_\times$; $SO(3)$ is a group ([[lem-cm-so3-is-a-matrix-group]]).

[L3] Matrix calculus ([[def-directional-and-partial-derivatives]], [[def-jacobian-matrix-and-gradient]], [[def-total-derivative-in-euclidean-space]], [[thm-chain-rule-for-total-derivatives]], [[def-matrix-space]], [[def-matrix-product-and-identity-matrix]]): matrix-valued maps are differentiated entrywise; the partial derivatives of $\Phi$ are computed with the product rule and [L1]; a map with a differentiable local inverse $\Psi$ satisfies $D\Psi(\Phi(p))\circ D\Phi(p)=\mathrm{Id}$ at the point $p$, the total derivative of the identity being the identity.

[L4] The model's kinematic notions ([[def-cm10-rigid-body-configuration]], [[def-cm10-angular-velocity]]): a configuration path $(c,R)$ with $R$ of class $C^{2}$ assigns to each time a placement; the body angular velocity is the unique $\omega$ with $R^{\mathsf T}R'=[\omega]_\times$.

## Verification

**Proof technique:** direct; use the composition law of the coordinate rotations, differentiate the parametrization with the product rule, and read the angular velocity through the skew-matrix correspondence.

1.1 Pole values: by the composition law and $R_y(0)=I_3$ of [L1], $\Phi(\alpha,0,\gamma)=R_z(\alpha)R_z(\gamma)=R_z(\alpha+\gamma)$, so the value depends only on $\alpha+\gamma$. For every real $s$, $\Phi(\alpha+s,0,\gamma-s)=R_z(\alpha+s+\gamma-s)=R_z(\alpha+\gamma)=\Phi(\alpha,0,\gamma)$, and the points $(\alpha+s,0,\gamma-s)$ approach $(\alpha,0,\gamma)$ as $s\to0$ while remaining distinct for $s\neq0$. Hence $\Phi$ is not injective on any neighbourhood of the pole point; this is clause 1. [given, L1, algebra]

1.2 Partial derivatives at the pole: differentiating with respect to $\alpha$ with $\beta,\gamma$ fixed and using the product rule and [L1], $\partial_\alpha\Phi(\alpha,\beta,\gamma)=[e_3]_\times R_z(\alpha)R_y(\beta)R_z(\gamma)$, and at $\beta=0$ this is $[e_3]_\times R_z(\alpha+\gamma)$ by clause 1. Differentiating with respect to $\gamma$ gives $\partial_\gamma\Phi(\alpha,\beta,\gamma)=R_z(\alpha)R_y(\beta)R_z(\gamma)[e_3]_\times$; at $\beta=0$ the middle factor is $I_3$ and the factors $R_z(\gamma)$ and $[e_3]_\times$ commute by the identity $R_z(a)[e_3]_\times=[e_3]_\times R_z(a)$ of [L1], so $\partial_\gamma\Phi(\alpha,0,\gamma)=R_z(\alpha)[e_3]_\times R_z(\gamma)=[e_3]_\times R_z(\alpha)R_z(\gamma)=[e_3]_\times R_z(\alpha+\gamma)$, the same value as $\partial_\alpha\Phi$. [given, L1, L3, algebra]

2.1 Rank and absence of a local inverse: the Jacobian matrix $J\Phi(\alpha,0,\gamma)$ has columns $\partial_\alpha\Phi,\ \partial_\beta\Phi,\ \partial_\gamma\Phi$ [L3], and the first and third columns coincide by step 1.2. Thus the linear map $D\Phi:\mathbb R^3\to M_3(\mathbb R)\cong\mathbb R^9$ annihilates the nonzero vector $(1,0,-1)$ and has rank at most $2$, so it is not injective. Moreover, step 1.1 gives distinct points with equal images in every neighbourhood of the pole point, ruling out any local inverse, including a differentiable inverse onto a neighbourhood in $SO(3)$. This proves clause 2. [step 1.1, step 1.2, L3, algebra]

2.2 Angular velocity along a curve through the pole: let $\Phi_t:=\Phi(\alpha(t),\beta(t),\gamma(t))$; by the product rule and [L1] at $t=0$, where $\beta(0)=0$ and $R_y(0)=I_3$, $$\Phi_0'=\bigl(\alpha'(0)+\gamma'(0)\bigr)[e_3]_\times R_z(\alpha(0)+\gamma(0))+\beta'(0)\,R_z(\alpha(0))[e_2]_\times R_z(\gamma(0)),$$ using the two computations of step 1.2 for the $\alpha$- and $\gamma$-directions and the middle derivative $\partial_\beta\Phi=R_z(\alpha)[e_2]_\times R_z(\gamma)$ at the pole. Multiplying on the left by $\Phi_0^{\mathsf T}=R_z(-\gamma(0))R_z(-\alpha(0))=\Phi_0^{-1}$ (the matrix is orthogonal [L1]) and using the conjugation law $R[\omega]_\times R^{\mathsf T}=[R\omega]_\times$ of [L2] together with $R_z(-\gamma(0))e_2$ for the second term gives $$\Phi_0^{\mathsf T}\Phi_0'=\Bigl[(\alpha'(0)+\gamma'(0))\,e_3+\beta'(0)\,R_z(-\gamma(0))e_2\Bigr]_\times,$$ so by the injectivity clause of [L2] and the characterisation of the body angular velocity [L4], $\omega(0)=(\alpha'(0)+\gamma'(0))e_3+\beta'(0)R_z(-\gamma(0))e_2$. The rates $\alpha'$ and $\gamma'$ enter only through the sum, so $(\alpha'+h,\beta',\gamma'-h)$ and $(\alpha',\beta',\gamma')$ give the same angular velocity: the rate map is not injective at the pole. This is clause 3. [step 1.2, L1, L2, L4, algebra]

3.1 The regular physical path: $R(t)=R_y(\kappa t)$ has $R(0)=I_3$ and is the composition of the smooth coordinate-rotation curve with the smooth map $t\mapsto\kappa t$, hence of class $C^\infty$ [L1]; by the derivative clause of [L1], $R'(t)=\kappa R_y(\kappa t)[e_2]_\times$, so $R(t)^{\mathsf T}R'(t)=[\kappa e_2]_\times$ for every $t$ and the body angular velocity is the constant vector $\kappa e_2$ by [L2] and [L4]; in particular the orientation path passes through the pole orientation $R(0)=I_3=\Phi(0,0,0)$ with a well-defined, constant angular velocity. The failure of clause 2 is thus a failure of the parameter triple to be a chart at the pole, not a singularity of the orientation path or of its angular velocity. This proves clause 4. [step 2.1, L1, L2, L4, algebra]

4.1 Summary: the parametrization $\Phi$ is smooth as a map, but at every pole point it is non-injective (clause 1), its derivative has rank at most $2$ and it admits no differentiable local inverse (clause 2), and the angular velocity does not uniquely determine the Euler-angle rates at a fixed pole triple (clause 3), while a physical orientation path through the same pole orientation is regular with a perfectly well-defined angular velocity (clause 4). [step 1.1, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **What the pole is, and what it is not.** The pole is the parameter value
  $\beta=0$, an excluded boundary value of the parameter interval
  $(0,\pi)$ in [[def-cm-euler-angle-parametrization-and-heavy-top-system]]. It is not a special orientation: the
  identity $I_3$ and every rotation about $e_3$ are regular elements of
  $SO(3)$ and are reached by smooth motions with finite angular velocity
  (clause 4). The degeneration is the failure of the three angles to
  coordinatize orientations near those points.

- **Consequence for consumers.** A computation using Euler angles must state
  its convention and avoid solving for individual angles or rates at a pole.
  The restriction $\beta\in(0,\pi)$ alone does not establish a coordinate
  chart: using the angles as coordinates also requires a neighbourhood on
  which the parametrization has a smooth inverse. The intrinsic quantities
  $R(t)$ and $\omega(t)$ ([[def-cm10-angular-velocity]]) remain defined there,
  and the quaternion lift of [[thm-cm-quaternion-lift-exists-and-is-unique]]
  provides a description that does not degenerate at this point, at the cost
  of the sign ambiguity recorded in [[rem-cm10-orientation-charts]].

- **No dynamics.** Nothing in this example constrains the motion by a torque
  or equation of motion; the path $R_y$ is an admissible orientation path of
  the model, and its angular velocity is read off kinematically.
