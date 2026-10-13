---
id: ex-cm12-pendulum-legendre
title: "The planar pendulum in Hamiltonian form: kinetic metric $ml^{2}$, substituted Hamiltonian $p^{2}/(2ml^{2}) - mgl\\cos\\theta$ and the reduced equation"
kind: example
status: published
origin: session
domain: physics
dependency_level: 20
deps: [def-cm12-cotangent-momentum, def-cm12-hyperregularity, def-cm12-hamiltonian, pthm-cm12-mechanical-hyperregularity, pthm-cm12-hamilton-equivalence, pthm-cm12-energy-time, def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, pthm-cm07-lagrangian-reduction-of-ideal-constraints, def-cm06-holonomic-constraint-model, post-cm06-ideal-reaction-law, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-ck-euclidean-maps-and-diffeomorphisms, def-euclidean-submersions-and-immersions, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-linear-map, def-euclidean-inner-product, thm-sine-and-cosine-derivatives, def-sine-and-cosine-by-power-series, cor-trigonometric-parity-and-pythagorean-identity, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-vector-valued-derivative-and-integral, def-derivative, def-interval, thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle, thm-euclidean-inverse-function-theorem, thm-intermediate-value]
dependency_roles:
  def-cm12-cotangent-momentum: formulation-prerequisite
  def-cm12-hyperregularity: formulation-prerequisite
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm12-mechanical-hyperregularity: physical-result
  pthm-cm12-hamilton-equivalence: physical-result
  pthm-cm12-energy-time: physical-result
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  pthm-cm07-lagrangian-reduction-of-ideal-constraints: physical-result
  def-cm06-holonomic-constraint-model: formulation-prerequisite
  post-cm06-ideal-reaction-law: physical-assumption
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-submersions-and-immersions: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-linear-map: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
  thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  thm-intermediate-value: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked check of the Hamiltonian reformulation on the planar pendulum of the framework: one label of mass m constrained without friction to a vertical circle of radius l under a uniform downward field, described by a two-chart angular atlas covering the entire circle, including rotations; the kinetic metric is ml^2, the substituted Hamiltonian is p^2/(2ml^2) - mgl cos(theta), Hamilton's equations reduce to theta-double-dot = -(g/l) sin(theta), and the system is equivalent to the ideal constrained motion with its reaction recovered by the elimination theorem. All quantities are model values of the declared idealization; no measurement is reported."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 2.3.1 and 4.1, printed pages 17-19 and 80-81 (PDF pages 23-25 and 86-87): the pendulum constraint and its Lagrange equation, and the pendulum phase cylinder before the Legendre transform"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Sections 2.1-2.2, chapter pages 1-4: the pendulum as a one-degree-of-freedom constrained system and its reduced equation"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.2, printed pages 10-11 (PDF pages 13-14): a pendulum example worked in both Lagrangian and Hamiltonian form, with the canonical and kinetic momenta distinguished"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 6.5-6.6 and 8.4: the plane pendulum with its constraint reaction in the Lagrange-multiplier treatment and Hamiltonian mechanics in curvilinear coordinates"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---
## Example

Declare one particle label of mass $m>0$ in the force branch of [[post-cm02-force-superposition]], with time window $\mathbb R$, ambient configuration domain $Q=\mathbb R^3$, potential $U(x,y,z)=mgy$, constant $g>0$, and no residual force. Thus the force is $(0,-mg,0)$. Fix $l>0$ and impose the scleronomic regular constraint
$$\mathcal G(x,y,z)=(x^2+y^2-l^2,z)=0,$$
with the ideal-reaction law of [[post-cm06-ideal-reaction-law]]. Its locus is the full circle $N=\{x^2+y^2=l^2,z=0\}$. Here $m$ is a mass in kilograms, $l$ a length in metres, and $g$ an acceleration magnitude in metres per second squared; their dimensions are $\mu$, $\ell$, and $\ell\tau^{-2}$. The two components of $\mathcal G$ have dimensions $\ell^2$ and $\ell$, respectively. Write $G_{\mathrm{kin}}$ for the kinetic metric, to distinguish it from $\mathcal G$.

The full angular variable is an equivalence class $[\theta]\in\mathbb R/(2\pi\mathbb Z)$, with $\theta\sim\theta+2\pi k$, $k\in\mathbb Z$. The smooth periodic map
$$X(\theta)=(l\sin\theta,-l\cos\theta,0)$$
descends to the circle of constrained configurations; this identification is the rescaled and rotated circle parametrization of [[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]. It is not a one-to-one map from $\mathbb R$ and is not used as one global generalized-coordinate parametrization.

Instead use the two angular charts $\Omega_0=(-\pi,\pi)$ and $\Omega_\pi=(0,2\pi)$, with restrictions $X_0,X_\pi$ of $X$. The ambient open sets
$$Q_0=\mathbb R^3\setminus\{(0,y,z):y\ge0\},\qquad Q_\pi=\mathbb R^3\setminus\{(0,y,z):y\le0\}$$
satisfy $X_a(\Omega_a)=N\cap Q_a$ for $a=0,\pi$. Restrict the ambient force model and constraint datum to $Q_a$ when applying [[def-cm07-generalized-coordinates-and-forces]] clause (d). Each restricted map is a one-to-one $C^3$ parametrization with injective derivative, covering its constrained arc exactly once. The two arcs cover $N$. On each connected component of an overlap the angular coordinates differ by $2\pi k$, with derivative $1$; no chart uses the same constrained configuration twice.

In either angular chart, the following hold, with dimensionless radian angle $\theta$:

On each phase-coordinate chart $\Omega_a\times\mathbb R$ with coordinates $(\theta,p)$, define an alternating bilinear form on coordinate increments $u=(u_\theta,u_p)$ and $v=(v_\theta,v_p)$ in $\mathbb R^2$ by
$$\omega_a(u,v):=u_\theta v_p-v_\theta u_p.$$
The notation $d\theta\wedge dp$ below denotes this explicitly defined form field.

1. $G_{\mathrm{kin}}=ml^2$, $\widetilde U=-mgl\cos\theta$, and
   $$\widetilde L(\theta,\dot\theta)=\tfrac12ml^2\dot\theta^2+mgl\cos\theta.$$
2. The generalized momentum is $p=ml^2\dot\theta$, of dimension action $\mu\ell^2\tau^{-1}$. The fibre map is hyperregular with inverse $\dot\theta=p/(ml^2)$, and
   $$\widetilde H(\theta,p)=\frac{p^2}{2ml^2}-mgl\cos\theta$$
   is the mechanical energy of the constrained motion.
3. Hamilton's equations are $\dot\theta=p/(ml^2)$, $\dot p=-mgl\sin\theta$, equivalently $\theta''=-(g/l)\sin\theta$. Locally these are equivalent to the ideal constrained motion, with its reaction recovered by [[pthm-cm07-lagrangian-reduction-of-ideal-constraints]].
4. On overlaps $\theta_b=\theta_a+2\pi k$ and $p_b=p_a$. The Lagrangian, Hamiltonian, equations, and canonical form $d\theta\wedge dp$ therefore agree, so the local Hamilton systems give one global system on the phase cylinder
   $$\bigl(\mathbb R\times\mathbb R\bigr)/\bigl((\theta,p)\sim(\theta+2\pi k,p)\bigr).$$
   This retains the entire pendulum, including rotations crossing either chart cut. Equivalence with the ideal constrained equations is local at every time and hence holds along any constrained motion, without pretending that one real angular chart is globally injective.

All quantities are declared model data; no measurement is reported.

## Facts & Assumptions

**Given:** The positive data $m,l,g$, the uniform downward potential, the constraint $\mathcal G$, its ideal-reaction law, and the two chart domains and parametrizations above.

[F1] Generalized coordinates and ideal constraint reduction ([[def-cm07-generalized-coordinates-and-forces]], [[def-cm06-holonomic-constraint-model]], [[post-cm06-ideal-reaction-law]], [[pthm-cm07-lagrangian-reduction-of-ideal-constraints]]): a one-to-one $C^3$ parametrization onto the constrained locus in its declared ambient open set, with injective derivative, gives the kinetic metric $DX^{\mathsf T}\mathsf M DX$ and substituted Lagrangian; its Lagrange equations are equivalent to the ideal constrained motion, with reaction recovered in the form $D\mathcal G^{\mathsf T}\lambda$.

[F2] Mechanical momentum and Hamiltonian ([[def-cm12-cotangent-momentum]], [[def-cm12-hyperregularity]], [[def-cm12-hamiltonian]], [[pthm-cm12-mechanical-hyperregularity]], [[pthm-cm12-hamilton-equivalence]], [[pthm-cm12-energy-time]]): a positive kinetic metric gives momentum $p=G_{\mathrm{kin}}v$, global inverse in each momentum fibre, Hamiltonian $\tfrac12p\cdot G_{\mathrm{kin}}^{-1}p+\widetilde U$, and local equivalence of the Lagrange and Hamilton equations; in a static chart its value is the mechanical energy.

[F3] Circle parametrization and calculus ([[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]], [[thm-sine-and-cosine-derivatives]], [[def-sine-and-cosine-by-power-series]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-vector-valued-derivative-and-integral]], [[def-derivative]], [[def-interval]]): the rescaled periodic angular parametrization is one-to-one modulo $2\pi$ and onto the circle, and sine/cosine have the stated derivatives and identity $\sin^2+\cos^2=1$.

[F4] Model, units and matrix conventions ([[post-cm02-force-superposition]], [[def-cm03-potential-and-mechanical-energy]], [[def-cm07-action-and-mechanical-lagrangian]], [[def-cm01-configuration]], [[def-cm01-units]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]], [[def-linear-map]], [[def-euclidean-inner-product]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-euclidean-submersions-and-immersions]]): $\mathsf M=mI_3$, the force is $(0,-mg,0)$, and all derivatives, products and units use the declared chart conventions.

[F5] The alternating bilinear form on each phase-coordinate chart is the field $\omega_a$ defined in the Example prose above, denoted there by $d\theta\wedge dp$.

## Verification

**Proof technique:** direct; establish an actual angular atlas, apply the mechanical formulas and constraint reduction in each chart, and verify agreement on the overlaps.

1.1 The constraint differential has rows $(2x,2y,0)$ and $(0,0,1)$, independent on $N$ because $x^2+y^2=l^2>0$, so the datum is regular and scleronomic. By [F3], two values of $X$ agree exactly when their angles differ by $2\pi k$; no two distinct points in either open interval $\Omega_a$ do so. Its derivative is $(l\cos\theta,l\sin\theta,0)$ with norm $l>0$. On $\Omega_0$ the only missing circle point is $(0,l,0)$, and on $\Omega_\pi$ it is $(0,-l,0)$, exactly the respective intersections with the removed ambient half-planes. Thus $X_a$ maps bijectively onto $N\cap Q_a$ with injective derivative. Its inverse is smooth locally because at each point either the $x$ or $y$ derivative is nonzero, giving a smooth scalar inverse by [[thm-euclidean-inverse-function-theorem]]; these local inverses agree by injectivity and give the smooth inverse on the arc. Consequently both are legitimate parametrizations for [F1], and their arcs cover the full circle. [F1, F3, F4, algebra]

2.1 In either chart $G_{\mathrm{kin}}=DX_a^{\mathsf T}(mI_3)DX_a=ml^2$ and $\widetilde U=U(X_a)=-mgl\cos\theta$. Therefore $\widetilde L=\tfrac12ml^2\dot\theta^2+mgl\cos\theta$ and its velocity gradient is $p=ml^2\dot\theta$. Since $ml^2>0$, this fibre map is globally invertible with inverse $p/(ml^2)$, and [F2] gives $\widetilde H=p^2/(2ml^2)-mgl\cos\theta$, equal to the mechanical energy. [F1, F2, F3, F4, step 1.1, algebra]

3.1 Differentiating the Hamiltonian gives $\widetilde H_p=p/(ml^2)$ and $\widetilde H_\theta=mgl\sin\theta$. Thus Hamilton's equations reduce to $\dot\theta=p/(ml^2)$ and $\dot p=-mgl\sin\theta$, whence $ml^2\theta''=-mgl\sin\theta$. By [F1] and [F2], within each chart these equations are equivalent to the ideal constrained equations, and the reaction is recovered as $D\mathcal G^{\mathsf T}\lambda$ with its unique two-component multiplier. [F1, F2, F3, step 2.1, algebra]

4.1 On an overlap the two angle representatives differ by a continuous integer multiple of $2\pi$, hence by one constant multiple on each connected component, by [[thm-intermediate-value]] along each overlap interval. Their time derivatives agree, so $p_b=ml^2\dot\theta_b=ml^2\dot\theta_a=p_a$; the transition map has identity derivative in $(\theta,p)$, and the definition [F5] therefore gives $\omega_b=\omega_a$, that is, $d\theta_b\wedge dp_b=d\theta_a\wedge dp_a$. Periodicity of sine and cosine makes the formulas for $\widetilde L$, $\widetilde H$ and the equations identical on overlaps. This defines the stated phase cylinder by gluing the charts (equivalently taking the displayed equivalence classes), and the local solutions and reactions agree wherever both charts apply. Every event of a constrained curve lies in one of the two arcs; continuity puts the curve in that arc for a neighbourhood of its parameter value, where step 3.1 applies. Thus the equivalence holds at every time and the full pendulum claim, including crossing the cuts, is retained. [F1, F2, F3, F5, step 1.1, step 3.1, algebra] ∎

## Remarks

The angular generalized momentum $ml^2\dot\theta$ has action units; the tangential kinetic momentum $ml\dot\theta$ has linear-momentum units. The atlas replaces the invalid globally injective real-angle parametrization without restricting the pendulum to one arc or excluding rotations. Its static charts preserve the energy interpretation; a moving chart with a velocity-linear term has the separate interpretation given by the companion example.
