---
id: ex-cm07-pendulum-constraint-elimination-check
kind: example
title: "The planar pendulum by constraint elimination: kinetic metric, Lagrange equation and the ideal reaction recovered"
status: draft
origin: session
domain: physics
dependency_level: 15
deps: [pthm-cm07-lagrangian-reduction-of-ideal-constraints, def-cm07-generalized-coordinates-and-forces, def-cm06-holonomic-constraint-model, post-cm06-ideal-reaction-law, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-ck-euclidean-maps-and-diffeomorphisms, def-euclidean-submersions-and-immersions, cor-matrix-rank-nullity, thm-sine-and-cosine-derivatives, def-sine-and-cosine-by-power-series, cor-trigonometric-parity-and-pythagorean-identity, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-euclidean-inner-product, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-vector-valued-derivative-and-integral, def-jacobian-matrix-and-gradient, def-interval]
dependency_roles:
  pthm-cm07-lagrangian-reduction-of-ideal-constraints: physical-result
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm06-holonomic-constraint-model: formulation-prerequisite
  post-cm06-ideal-reaction-law: physical-assumption
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-submersions-and-immersions: mathematical-premise
  cor-matrix-rank-nullity: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked check of the constraint-elimination theorem on the planar pendulum model: one particle of mass m constrained without friction to a circle of radius l in the plane z=0 under a uniform downward field; the periodic angle map from R is a surjective immersion onto the circle, and multiple angle representatives are allowed. It gives kinetic metric m l^2, substituted potential -m g l cos(theta), the pendulum equation theta-double-dot = -(g/l) sin(theta), and the reaction as the transpose constraint-Jacobian multiple with its two component multipliers. The constraint components have dimensions length squared and length, so their multipliers have different dimensions. All quantities are model values of the declared idealization."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.3.1, printed pages 17-19 (PDF pages 23-25): the pendulum constraint, its Lagrange equation and the constraint force proportional to the multiplier"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Sections 2.1-2.2, chapter pages 1-4: the pendulum as a one-degree-of-freedom constrained system and its reduced equation"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 6.5 and 6.8: the plane pendulum with its constraint force in the Lagrange-multiplier treatment"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---
## Example

Declare a one-label model of the force branch of
[[post-cm02-force-superposition]] with $N=1$, mass $m>0$, time window
$I_{0}=\mathbb R$, configuration domain $Q=\mathbb R^{3}$ and force map
$$F(t,(x,y,z),v):=(0,-mg,0)$$
with constant $g>0$: the global potential model of potential
$U(x,y,z)=mgy$ and no residual forces
([[def-cm03-potential-and-mechanical-energy]]). Under [[def-cm01-units]],
$[m]=\mu$, $[x]=[y]=[z]=[l]=\ell$, $[t]=\tau$, $[g]=\ell\tau^{-2}$,
and $[U]=\mu\ell^{2}\tau^{-2}$; the angle
$\theta$ is dimensionless. Fix $l>0$ and constrain the
label to the circle of radius $l$ in the plane $z=0$ by the regular
holonomic-constraint datum of [[def-cm06-holonomic-constraint-model]]
$$O:=\mathbb R\times\mathbb R^{3},\qquad k:=2,\qquad g_{c}(x,y,z):=\bigl(x^{2}+y^{2}-l^{2},\ z\bigr),$$
and adopt the ideal-reaction law of [[post-cm06-ideal-reaction-law]]. The
locus is the time-independent set
$\mathcal C=\{(x,y,z):x^{2}+y^{2}=l^{2},\ z=0\}$, so the datum is scleronomic, and the
map
$$X:\mathbb R\longrightarrow Q,\qquad X(\theta):=\bigl(l\sin\theta,\ -l\cos\theta,\ 0\bigr)$$
is a surjective immersion of the constrained configurations in the sense of
[[def-cm07-generalized-coordinates-and-forces]]. It is periodic and not
one-to-one; the definition and reduction theorem allow these multiple angle
representatives.

Then, with $r=3N-k=1$, kinetic metric $\mathsf G(\theta)=ml^{2}$, substituted
potential $\widetilde U(\theta)=-mgl\cos\theta$ and substituted Lagrangian
$$\widetilde L(\theta,\dot\theta)=\tfrac12ml^{2}\dot\theta^{2}+mgl\cos\theta,$$
the following hold:

1. for every $C^{2}$ curve $\theta:J\to\mathbb R$ with
   $x:=X\circ\theta$, the curve $\theta$ solves the Lagrange equation
   $\Lambda(\widetilde L)(\theta)=0$, i.e.
   $$ml^{2}\theta''+mgl\sin\theta=0,$$
   if and only if $x$ is a constrained motion with ideal reaction;
2. when this holds, the reaction is
   $$R(t)=D_{x}g_{c}(x(t))^{\mathsf T}\begin{pmatrix}\lambda_{1}(t)\\\lambda_{2}(t)\end{pmatrix}=-m\bigl(l\theta'(t)^{2}+g\cos\theta(t)\bigr)\bigl(\sin\theta(t),-\cos\theta(t),0\bigr),$$
   where $\lambda_{1}(t)=-\dfrac{m}{2l}\bigl(l\theta'(t)^{2}+g\cos\theta(t)\bigr)$ and $\lambda_{2}(t)=0$;
   the multipliers have dimensions $[\lambda_{1}]=\mu\tau^{-2}$ and
   $[\lambda_{2}]=\mu\ell\tau^{-2}$, so the reaction has force dimension,
   annihilates the virtual displacements, and has a unique multiplier;
3. in particular the reduced pendulum equation
   $\theta''=-(g/l)\sin\theta$ is exactly the Lagrange equation of
   $\widetilde L$, and every solution of it, with $x=X\circ\theta$, is an
   ideal constrained motion of the model.

## Facts & Assumptions

**Given:** The model data of the Example, the datum $(O,2,g_{c})$, the surjective immersion $X$, a $C^{2}$ curve $\theta:J\to\mathbb R$ with $x=X\circ\theta$, and the constants $m,l,g>0$ with the declared dimensions.

[F1] The reduction theorem ([[pthm-cm07-lagrangian-reduction-of-ideal-constraints]]): for a scleronomic regular holonomic datum with a global-coverage parametrization $X(\Omega)=\mathcal C\cap Q$ and a potential presentation $(U,d)$, a $C^{2}$ coordinate curve solves the Lagrange equations of $\widetilde L$ with residual generalized force if and only if $x=X\circ\theta$ is a constrained motion with ideal reaction; injectivity of $X$ is unnecessary, the virtual displacements at $x$ equal $DX(\theta)(\mathbb R)$, and the reaction is unique with a unique multiplier vector.

[F2] The datum and its locus ([[def-cm06-holonomic-constraint-model]], [[post-cm06-ideal-reaction-law]], [[cor-matrix-rank-nullity]], [[def-euclidean-submersions-and-immersions]], [[def-jacobian-matrix-and-gradient]]): $g_{c}$ is smooth with $D_{x}g_{c}(x,y,z)=\begin{pmatrix}2x&2y&0\\ 0&0&1\end{pmatrix}$ of rank $2$ on $\mathcal C$ (the last row is independent; on $x^{2}+y^{2}=l^{2}$ not both $2x,2y$ vanish), its component dimensions are $\ell^{2}$ and $\ell$, the locus is nonempty and time-independent, and the virtual displacements at $X(\theta)$ are $\ker D_{x}g_{c}=\mathbb R(\cos\theta,\sin\theta,0)$.

[F3] The parametrization and its derivatives ([[def-cm07-generalized-coordinates-and-forces]], [[thm-sine-and-cosine-derivatives]], [[def-sine-and-cosine-by-power-series]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]], [[def-euclidean-inner-product]], [[def-vector-valued-derivative-and-integral]]): $X$ is $C^{\infty}$ with $DX(\theta)=\bigl(l\cos\theta,\ l\sin\theta,\ 0\bigr),\qquad \mathsf G(\theta)=DX(\theta)^{\mathsf T}(mI_{3})DX(\theta)=ml^{2},$ $\widetilde U(\theta)=U(X(\theta))=-mgl\cos\theta$, and $X(\mathbb R)=\mathcal C\cap Q$; the tangent vector $e_{\theta}=(\cos\theta,\sin\theta,0)$ is orthonormal to the radial direction $e_{r}=(\sin\theta,-\cos\theta,0)=\frac1l X(\theta)$.

## Verification

**Proof technique:** direct; verify the hypotheses of the reduction theorem on the pendulum datum, compute the substituted Lagrangian and its Lagrange equation, and evaluate the reaction and multiplier.

1.1 Hypotheses of the reduction theorem: $g_{c}$ is smooth and $D_{x}g_{c}$ has rank $2$ on $\mathcal C$ by [F2], so $(O,2,g_{c})$ is a regular holonomic-constraint datum with nonempty locus, and it is scleronomic with $\mathcal C=\{(x,y,z):x^{2}+y^{2}=l^{2},z=0\}$. The map $X$ is smooth with $DX(\theta)=(l\cos\theta,l\sin\theta,0)$ injective for all $\theta$ (its norm is $l>0$), and $X(\mathbb R)=\{(l\sin\theta,-l\cos\theta,0):\theta\in\mathbb R\}=\mathcal C\cap Q$; moreover $(t,X(\theta))\in O$ for all $t,\theta$. Thus $X$ is a global-coverage parametrization, with repeated angle representatives allowed, and $r=3N-k=1$; the presentation $(U,d)=(mgy,0)$ has no residual forces. [F2, F3, given, algebra]

1.2 Substituted Lagrangian and Lagrange equation: by [F3], $\mathsf G(\theta)=ml^{2}$ and $\widetilde U(\theta)=-mgl\cos\theta$, so $\widetilde L=\frac12ml^{2}\dot\theta^{2}+mgl\cos\theta$ and $\Lambda(\widetilde L)(\theta)=\frac{d}{dt}\bigl(ml^{2}\theta'\bigr)-\frac{\partial\widetilde L}{\partial\theta}=ml^{2}\theta''+mgl\sin\theta .$ The Lagrange equation $\Lambda(\widetilde L)(\theta)=0$ is therefore $ml^{2}\theta''+mgl\sin\theta=0$, equivalent to $\theta''=-(g/l)\sin\theta$ because $ml^{2}>0$. [F3, algebra]

2.1 Equivalence and reaction: since $d\equiv0$, the residual generalized force vanishes, and by [F1] the equation of step 1.2 holds along $\theta$ if and only if $x=X\circ\theta$ is a constrained motion with ideal reaction. In that case $R=m x''-F$ and, differentiating $x$ twice, $x''=l\bigl(-\theta'^{2}\sin\theta+\theta''\cos\theta,\ \theta'^{2}\cos\theta+\theta''\sin\theta,\ 0\bigr);$ substituting $\theta''=-(g/l)\sin\theta$ and $F=(0,-mg,0)$ gives $R=-m\bigl(l\theta'^{2}+g\cos\theta\bigr)\bigl(\sin\theta,-\cos\theta,0\bigr)$. Since $D_{x}g_{c}(x)^{\mathsf T}(\lambda_{1},\lambda_{2})=2\lambda_{1}(x,y,0)+(0,0,\lambda_{2})$ and $(x,y,z)=X(\theta)$, this equals $D_{x}g_{c}(x)^{\mathsf T}(\lambda_{1},0)$ with $\lambda_{1}=-\frac{m}{2l}(l\theta'^{2}+g\cos\theta)$, as stated. The reaction is normal to $\ker D_{x}g_{c}$ from [F2], so it annihilates the virtual displacements; [F1] supplies uniqueness of the multiplier vector. [F1, F2, step 1.2, algebra]

3.1 Clauses 1-3 are verified: the datum and parametrization satisfy the hypotheses of the reduction theorem; the Lagrange equation of $\widetilde L$ is the reduced pendulum equation; and the reaction is the normal multiple with the displayed multiplier. All quantities are model values under the declared idealizations (frictionless circular track, rigid radius, uniform downward field), not measurements. [step 1.1, step 1.2, step 2.1] ∎

## Remarks

- The multiplier and reaction computed here agree with the multiplier-balance
  account of the preceding page on the same idealized apparatus; the present
  verification shows that the same motion is obtained by eliminating the
  constraint in the Lagrangian rather than by solving for the multiplier.
  Neither route adds an empirical claim.
