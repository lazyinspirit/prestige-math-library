---
id: ex-cm12-pendulum-legendre
title: "The planar pendulum in Hamiltonian form: kinetic metric $ml^{2}$, substituted Hamiltonian $p^{2}/(2ml^{2}) - mgl\\cos\\theta$ and the reduced equation"
kind: example
status: draft
origin: session
domain: physics
dependency_level: 20
deps: [def-cm12-cotangent-momentum, def-cm12-hyperregularity, def-cm12-hamiltonian, pthm-cm12-mechanical-hyperregularity, pthm-cm12-hamilton-equivalence, pthm-cm12-energy-time, def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, pthm-cm07-lagrangian-reduction-of-ideal-constraints, def-cm06-holonomic-constraint-model, post-cm06-ideal-reaction-law, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-ck-euclidean-maps-and-diffeomorphisms, def-euclidean-submersions-and-immersions, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-linear-map, def-euclidean-inner-product, thm-sine-and-cosine-derivatives, def-sine-and-cosine-by-power-series, cor-trigonometric-parity-and-pythagorean-identity, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-vector-valued-derivative-and-integral, def-derivative, def-interval]
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
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked check of the Hamiltonian reformulation on the planar pendulum of the framework: one label of mass m constrained without friction to a vertical circle of radius l under a uniform downward field, parametrized by the angle; the kinetic metric is ml^2, the substituted Hamiltonian is p^2/(2ml^2) - mgl cos(theta), Hamilton's equations reduce to theta-double-dot = -(g/l) sin(theta), and the system is equivalent to the ideal constrained motion with its reaction recovered by the elimination theorem. All quantities are model values of the declared idealization; no measurement is reported."
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

Declare the one-label model of the force branch of
[[post-cm02-force-superposition]] with $N=1$, mass $m>0$, time window
$I_{0}=\mathbb R$, configuration domain $Q=\mathbb R^{3}$ and potential
$U(x,y,z)=mgy$ with constant $g>0$ and no residual forces, so that the force
map is the uniform field $F=(0,-mg,0)$
([[def-cm03-potential-and-mechanical-energy]],
[[def-cm07-action-and-mechanical-lagrangian]]). Fix $l>0$ and constrain the
label to the circle of radius $l$ in the plane $z=0$ by the regular
holonomic-constraint datum of [[def-cm06-holonomic-constraint-model]]

$$O:=\mathbb R\times\mathbb R^{3},\qquad k:=2,\qquad G(x,y,z):=\bigl(x^{2}+y^{2}-l^{2},\ z\bigr),$$

with the ideal-reaction law of [[post-cm06-ideal-reaction-law]]; the locus is
$N=\{(x,y,z):x^{2}+y^{2}=l^{2},\ z=0\}$, the datum is scleronomic, and

$$X:\mathbb R\longrightarrow Q,\qquad X(\theta):=\bigl(l\sin\theta,\ -l\cos\theta,\ 0\bigr)$$

is a parametrization of the constrained configurations in the sense of
[[def-cm07-generalized-coordinates-and-forces]] clause (d). Then, with the
substituted data of that definition:

1. the kinetic metric is $G(\theta)=ml^{2}$, the substituted potential is
   $\widetilde U(\theta)=-mgl\cos\theta$ and the substituted Lagrangian is
   $$\widetilde L(\theta,\dot\theta)=\tfrac12ml^{2}\dot\theta^{2}+mgl\cos\theta;$$
2. the generalized momentum is $p=ml^{2}\dot\theta$
   ([[def-cm12-cotangent-momentum]]), the presentation in the coordinate
   $\theta$ is hyperregular with inverse branch $\dot\theta=p/(ml^{2})$, and
   the substituted Hamiltonian is
   $$\widetilde H(\theta,p)=\frac{p^{2}}{2ml^{2}}-mgl\cos\theta,$$
   which equals the model's mechanical energy
   $\tfrac12ml^{2}\dot\theta^{2}-mgl\cos\theta$ of the constrained curve;
3. Hamilton's equations $\dot\theta=\widetilde H_{p}$, $\dot p=-\widetilde H_{\theta}$
   read $\dot\theta=p/(ml^{2})$, $\dot p=-mgl\sin\theta$, and hence the
   reduced pendulum equation $\theta''=-(g/l)\sin\theta$; the system is
   equivalent to $x=X\circ\theta$ being an ideal constrained motion of the
   model, with the reaction recovered by the reduction theorem
   ([[pthm-cm07-lagrangian-reduction-of-ideal-constraints]]).

All quantities are model values of the declared idealization; no measurement
is reported.

## Facts & Assumptions

**Given:** The one-label model with the uniform downward potential, the scleronomic constraint datum and ideal-reaction law, the parametrization $X$, and the substituted data of $\widetilde L$, $G$, $\widetilde U$, $p$ and $\widetilde H$.

[F1] Model, constraint and parametrization data ([[def-cm07-action-and-mechanical-lagrangian]], [[def-cm03-potential-and-mechanical-energy]], [[post-cm02-force-superposition]], [[def-cm06-holonomic-constraint-model]], [[post-cm06-ideal-reaction-law]], [[def-cm07-generalized-coordinates-and-forces]]): the model has masses $m_{i}>0$ and $L=K-U$ with $K(v)=\tfrac12v\cdot\mathsf Mv$; the constraint datum is regular and scleronomic; the parametrization $X$ is of class $C^{3}$ with injective derivative and $X(\Omega)=N\cap Q$, and the substituted Lagrangian is $\widetilde L(t,q,v)=L(t,X(q),DX(q)v)$ with kinetic metric $G(q)=DX(q)^{\mathsf T}\mathsf M\,DX(q)$.

[F2] Momentum, hyperregularity, Hamiltonian and energy ([[def-cm12-cotangent-momentum]], [[def-cm12-hyperregularity]], [[def-cm12-hamiltonian]], [[pthm-cm12-mechanical-hyperregularity]], [[pthm-cm12-energy-time]]): the fibre derivative is $p=\widetilde L_{v}=G(q)v$, the chart is hyperregular with inverse branch $v=G(q)^{-1}p$, the Hamiltonian is $\widetilde H(t,q,p)=\tfrac12p\cdot G(q)^{-1}p+\widetilde U(t,q)$, and along a coordinate curve it equals the mechanical energy of the induced configuration curve.

[F3] Equivalence and constraint elimination ([[pthm-cm12-hamilton-equivalence]], [[pthm-cm07-lagrangian-reduction-of-ideal-constraints]]): in the chart of $X$ the declared Lagrange equations are equivalent to Hamilton's equations of $\widetilde H$, and for a scleronomic parametrization with the ideal-reaction law they are equivalent to $x=X\circ q$ being a constrained motion with an ideal reaction.

[F4] Differentiation of the substituted data ([[thm-sine-and-cosine-derivatives]], [[def-sine-and-cosine-by-power-series]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-vector-valued-derivative-and-integral]], [[def-derivative]], [[def-interval]]): sine and cosine have their standard derivatives, $\sin^{2}+\cos^{2}=1$, and finite sums, products and composites of differentiable curves obey the usual rules.

[F5] Matrix and inner-product algebra of the kinetic metric ([[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]], [[def-linear-map]], [[def-euclidean-inner-product]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-euclidean-submersions-and-immersions]], [[def-cm01-units]], [[def-cm01-configuration]]): the derivative $DX$ and the matrix product $DX^{\mathsf T}\mathsf M\,DX$ are computed componentwise, and inner products of vectors in $\mathbb R^{3}$ are the standard dot products.



## Verification

**Proof technique:** direct; compute the substituted kinetic metric, potential and momentum, read off the Hamiltonian and its equations, and invoke the equivalence and constraint-elimination theorems for the model interpretation.

1.1 The map $X$ is of class $C^{3}$ with $DX(\theta)=(l\cos\theta,l\sin\theta,0)$, which has Euclidean norm $l>0$ at every $\theta$, so $DX$ is injective and $X(\mathbb R)=N$; the datum is scleronomic because $G$ does not depend on time; hence the hypotheses of [F1] hold for the parametrization. [F1, F5, algebra]

1.2 With $\mathsf M=mI_{3}$ one has $G(\theta)=DX(\theta)^{\mathsf T}\mathsf M\,DX(\theta)=m\lvert DX(\theta)\rvert_{2}^{2}=ml^{2}$ and $\widetilde U(\theta)=U(X(\theta))=mg(-l\cos\theta)=-mgl\cos\theta$, so $\widetilde L(\theta,\dot\theta)=\tfrac12ml^{2}\dot\theta^{2}+mgl\cos\theta$, and [F2] gives $p=\widetilde L_{\dot\theta}=ml^{2}\dot\theta$. [F1, F2, F5, algebra]

2.1 By [F2] the chart is hyperregular with $\dot\theta=p/(ml^{2})$ and $\widetilde H(\theta,p)=p^{2}/(2ml^{2})-mgl\cos\theta$, and along a coordinate curve $\widetilde H$ equals $\tfrac12ml^{2}\dot\theta^{2}-mgl\cos\theta$, the mechanical energy of $x=X\circ\theta$; this is clauses 1 and 2. [F2, step 1.2, algebra]

3.1 By [F4] one has $\widetilde H_{p}=p/(ml^{2})$ and $\widetilde H_{\theta}=mgl\sin\theta$, so Hamilton's equations are $\dot\theta=p/(ml^{2})$ and $\dot p=-mgl\sin\theta$; differentiating the first equation and substituting the second gives $ml^{2}\theta''=\dot p=-mgl\sin\theta$, i.e. $\theta''=-(g/l)\sin\theta$. [F4, step 2.1, algebra]

4.1 By [F3] the Hamilton system of step 3.1 is equivalent to the declared Lagrange equation of $\widetilde L$, and because the datum is a scleronomic parametrization with the ideal-reaction law this is equivalent to $x=X\circ\theta$ being an ideal constrained motion of the model; the reaction is then recovered by the reduction theorem as the normal multiple of $\nabla G(X(\theta))$ with its unique multiplier. [F3, step 3.1]

5.1 Conclusion: clauses 1-3 have been verified on the explicit data, with the kinetic metric $ml^{2}$, the substituted Hamiltonian $p^{2}/(2ml^{2})-mgl\cos\theta$ and the reduced pendulum equation as its Hamilton system. [step 1.2, step 2.1, step 3.1, step 4.1] ∎

## Remarks

- **The momentum is not $m l \dot\theta$.** The generalized momentum of the
  angle is $p=ml^{2}\dot\theta$, of dimension action (mass times length
  squared over time), while the kinetic tangential momentum is $ml\dot\theta$;
  the two differ by the length $l$, and the inverse branch
  $\dot\theta=p/(ml^{2})$ is the instance of $v=G(q)^{-1}p$ for the kinetic
  metric $G=ml^{2}$. This is the pendulum case of the warning recorded in
  [[def-cm12-cotangent-momentum]].

- **Energy and reaction.** The quantity $\widetilde H$ of clause 2 is the
  mechanical energy $\tfrac12ml^{2}\dot\theta^{2}-mgl\cos\theta$ of the
  constrained curve, and the ideal reaction does no virtual work; the moving
  mechanisms for which the substituted Hamiltonian is not the mechanical
  energy are treated by the companion moving-coordinate example, where the
  constraint depends explicitly on time.
