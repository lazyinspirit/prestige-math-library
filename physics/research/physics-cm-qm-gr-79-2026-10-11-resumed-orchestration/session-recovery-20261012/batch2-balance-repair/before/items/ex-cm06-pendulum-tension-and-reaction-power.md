---
id: ex-cm06-pendulum-tension-and-reaction-power
kind: example
title: "The planar pendulum as an ideal holonomic model: the multiplier, the tension and the vanishing reaction power of a scleronomic constraint"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [def-cm06-holonomic-constraint-model, post-cm06-ideal-reaction-law, pthm-cm06-multiplier-balance, pthm-cm06-rheonomic-power, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-cm-holonomic-constraint-and-ideal-reactions, def-cm03-centre-of-mass-and-momenta, def-cm03-potential-and-mechanical-energy, def-jacobian-matrix-and-gradient, thm-sine-and-cosine-derivatives, def-sine-and-cosine-by-power-series, cor-trigonometric-parity-and-pythagorean-identity, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-interval, cor-zero-derivative-implies-constant]
dependency_roles:
  def-cm06-holonomic-constraint-model: formulation-prerequisite
  post-cm06-ideal-reaction-law: physical-assumption
  pthm-cm06-multiplier-balance: physical-result
  pthm-cm06-rheonomic-power: physical-result
  post-cm02-force-superposition: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm-holonomic-constraint-and-ideal-reactions: mathematical-premise
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  def-jacobian-matrix-and-gradient: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked model check of the holonomic ideal-constraint branch: a mass point constrained without friction to a circle of radius l in a vertical plane about a fixed pivot under a declared uniform downward field, realized as a bead on a smooth circular wire, with the explicit two-component multiplier (the component tied to the constraining plane vanishing along the motion), the reaction read as the tension along the link, the standard pendulum equation obtained by projecting the constrained equation, the identically vanishing reaction power of the scleronomic constraint, and the conservation of the mechanical energy on explicit model data. The example is a model computation with the declared idealizations (smooth massless wire, equivalently a rigid link or a taut string while it stays taut; frictionless pivot; uniform field); every number is a model value, not a measurement, and the empirical status of a string that can go slack (or of a link that can buckle) is recorded as a limitation of the model."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.3.1, Eqs. (2.27)-(2.28), printed pages 17-18 (PDF pages 23-24): the simple pendulum with the constraint x^2+y^2=l^2, the equation theta-ddot=-(g/l) sin theta and the tension T=ml theta-dot^2+mg cos theta"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 6.5 (constrained systems: the plane pendulum) and Section 5.9: the multiplier solution of the pendulum and the constraint force"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Sections 2.1-2.2, chapter pages 1-4: Lagrange equations with a constraint force for a particle on a ring, and the pendulum as a one-degree-of-freedom constrained system"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Sections 1.4-1.5, printed pages 19-25 (PDF pages 22-28): ideal constraint reactions as covectors annihilating the fixed-time admissible virtual displacements"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Example

Declare a one-label model of the force branch of
[[post-cm02-force-superposition]] with $N=1$, mass $m>0$, time window
$I_{0}=\mathbb R$, configuration domain $Q=\mathbb R^{3}$ (coordinates
$(x,y,z)$, dimensions of [[def-cm01-units]]) and force map
$$F(t,x,y,z):=(0,\,-mg,\,0)$$
with a constant $g>0$ of dimension $\ell\tau^{-2}$. Constrain the label,
without friction, to the circle of radius $l>0$ about the origin in the plane
$z=0$ --- the ideal pendulum realized as a bead threaded on a smooth circular
wire in a vertical plane --- by the regular holonomic-constraint datum
$$O:=\{(t,x,y,z)\in\mathbb R^{4}:(x,y)\ne(0,0)\},\qquad k:=2,\qquad G(t,x,y,z):=\bigl(x^{2}+y^{2}-l^{2},\ z\bigr)$$
of [[def-cm06-holonomic-constraint-model]], and adopt the ideal-reaction law
of [[post-cm06-ideal-reaction-law]]. The locus is
$\Sigma=\{(t,l\sin\theta,-l\cos\theta,0):t,\theta\in\mathbb R\}$; write
$$X(\theta):=\bigl(l\sin\theta,\,-l\cos\theta,\,0\bigr),\qquad u(\theta):=\bigl(\sin\theta,\,-\cos\theta,\,0\bigr),\qquad X(\theta)=l\,u(\theta).$$

Then:

1. the datum is regular and scleronomic, the velocity $\dot X(\theta)$ is
   permitted for every $\theta$, and the virtual displacements at $X(\theta)$
   are the line $\mathbb R\,\dot X(\theta)$;
2. along any constrained motion the multiplier is
   $$\lambda(\theta,\theta')=\Bigl(-\frac{m}{2l}\bigl(g\cos\theta+l\,\theta'^{2}\bigr),\,0\Bigr)\in\mathbb R^{2}$$
   evaluated at the motion's data, the second component --- tied to the plane
   constraint $z=0$ --- vanishing along the motion, and the reaction is
   $$R=-T\,u(\theta),\qquad T=m\bigl(g\cos\theta+l\,\theta'^{2}\bigr),$$
   a force of magnitude $|T|$ along the line of the link, toward the pivot
   when $T>0$ (the **tension** of the model); the projection of the constrained
   equation on the tangent gives $ml^{2}\theta''+mgl\sin\theta=0$, and the
   projections on $u$ and on the normal $\mathbf e_{3}$ of the constraining
   plane give the displayed tension and the vanishing of the second multiplier
   component;
3. conversely, for every $C^{2}$ function $\theta:J\to\mathbb R$ with
   $ml^{2}\theta''+mgl\sin\theta=0$ on an interval $J$ with nonempty interior,
   the curve $x(t):=X(\theta(t))$ is a constrained motion of the model with
   multiplier and reaction as in clause 2;
4. the reaction power vanishes identically, $R\cdot x'\equiv0$, in agreement
   with the scleronomic case of the rheonomic-power theorem, and the
   mechanical energy $E=\tfrac12ml^{2}\theta'^{2}-mgl\cos\theta$ is constant
   along the motion; expressed through the energy,
   $T=3mg\cos\theta+2E/l$, and through the initial data $(\theta_{0},\theta_{0}')$,
   $T=mg(3\cos\theta-2\cos\theta_{0})+ml\,\theta_{0}'^{2}$;
5. on the explicit model data $m=1\,\mathrm{kg}$, $l=1\,\mathrm m$,
   $g=10\,\mathrm m\,\mathrm s^{-2}$, $\theta_{0}=\pi/3$, $\theta_{0}'=0$, the
   initial energy is $E=-5\ \mathrm J$ and the tension is
   $T=30\cos\theta-10\ \mathrm N$, with $T=20\ \mathrm N$ at $\theta=0$ and
   $T=5\ \mathrm N$ at $\theta=\pi/3$, positive on the reachable arc
   $|\theta|\le\pi/3$.

All values are model values under the declared idealizations; the model is the
ideal pendulum realized by a smooth rigid wire (equivalently a massless link,
or a taut string while it stays taut), and the empirical qualifications are
recorded in the remarks.

## Facts & Assumptions

**Given:** The constants $m,l,g>0$, the model data of the Example, the datum $(O,2,G)$, and a $C^{2}$ function $\theta:J\to\mathbb R$ on an interval $J$ with nonempty interior.

[F1] The force branch and mass operator: $F$ is constant, hence of the standing regularity and of class $C^{1}$, with potential $U(t,x,y,z)=mgy$ and residual forces zero, $F=-\nabla U$ ([[post-cm02-force-superposition]], [[def-cm01-configuration]], [[def-cm03-potential-and-mechanical-energy]] clause (a), [[def-jacobian-matrix-and-gradient]]).

[F2] The holonomic-constraint branch ([[def-cm06-holonomic-constraint-model]]): $G$ is smooth with $D_{x}G=\begin{pmatrix}2x&2y&0\\0&0&1\end{pmatrix}$ of rank $2$ on $O$; virtual displacements are $\ker D_{x}G$; the datum is scleronomic exactly when there is $N\subseteq\mathbb R^{3}$ with $\Sigma=\{(t,x)\in O:x\in N\}$ (equivalently when $(t,x)\in\Sigma$ and $(t',x)\in O$ imply $(t',x)\in\Sigma$), and then $G_{t}=0$ on $\Sigma$; a constrained motion satisfies $\mathsf Mx''=F+R$ with a continuous ideal reaction.

[F3] The ideal-reaction law and the balance theorem ([[post-cm06-ideal-reaction-law]], [[pthm-cm06-multiplier-balance]], [[def-cm-holonomic-constraint-and-ideal-reactions]]): $R=D_{x}G^{\mathsf T}\lambda$ with the unique continuous multiplier $\lambda=\Lambda(t,x,x')\in\mathbb R^{2}$; hypotheses (h1)-(h2) of the balance theorem hold here because $G$ is smooth with $D_{x}G$ of rank $2$ on all of $O$ by [F2] and $F$ is constant; with consistent data the constrained motions are the solutions of the first-order system and have a unique maximal one through each datum; the power identity $R\cdot x'=-\lambda\cdot G_{t}$ holds.

[F4] The rheonomic-power theorem ([[pthm-cm06-rheonomic-power]]): for a scleronomic constraint the reaction power vanishes identically, and if also $\partial_{t}U\equiv0$ and the residual forces vanish then $E=K+U$ is constant along the motion.

[F5] Trigonometric calculus: derivatives of sine and cosine, the identity $\sin^{2}+\cos^{2}=1$, the chain rule, the algebra of derivatives, and componentwise differentiation ([[def-sine-and-cosine-by-power-series]], [[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-vector-valued-derivative-and-integral]]).

[F6] Energy of a one-label curve family ([[def-cm03-centre-of-mass-and-momenta]] clauses (b),(d)): $K=\tfrac12m(x'^{2}+y'^{2}+z'^{2})$ and $E=K+U(t,x(t),y(t),z(t))$; the Euclidean pairing ([[def-euclidean-inner-product]]); a differentiable function with zero derivative on an interval is constant ([[cor-zero-derivative-implies-constant]], [[def-interval]]).

## Verification

**Proof technique:** direct; compute the multiplier matrix and the datum quantities, verify the equation of motion on the parametrized curves, and read off the tension, the reaction power and the conserved energy.

1.1 The datum is regular and scleronomic and its virtual displacements are the tangent line: $D_{x}G(t,x,y,z)=\begin{pmatrix}2x&2y&0\\0&0&1\end{pmatrix}$ has rank $2$ at every point of $O$, the first row being nonzero because $(x,y)\ne(0,0)$ there and the two rows being orthogonal; the locus is $\Sigma=\mathbb R\times N$ with $N=\{(x,y,z):x^{2}+y^{2}=l^{2},\ z=0\}$, so it is time-independent and the datum is scleronomic by [F2] (and then $G_{t}=0$ on $\Sigma$); and $\delta\in\ker D_{x}G$ means $2x\delta_{x}+2y\delta_{y}=0$ and $\delta_{z}=0$, which at $X(\theta)=l(\sin\theta,-\cos\theta,0)$ is the line orthogonal to $u(\theta)$, that is, $\mathbb R\,\dot X(\theta)$ with $\dot X(\theta)=l(\cos\theta,\sin\theta,0)$. Moreover $G(X(\theta))=(l^{2}\sin^{2}\theta+l^{2}\cos^{2}\theta-l^{2},\,0)=(0,0)$ and $D_{x}G(X(\theta))\dot X(\theta)=(2l^{2}(\sin\theta\cos\theta-\cos\theta\sin\theta),\,0)=(0,0)$, so $\dot X(\theta)$ is permitted for every $\theta$. [F2, F5, algebra]

1.2 The multiplier of the balance theorem on this datum: with $\mathsf M=mI_{3}$ one has $C=D_{x}G\,\mathsf M^{-1}D_{x}G^{\mathsf T}=\frac1m\operatorname{diag}\bigl((2x,2y,0)\cdot(2x,2y,0),\,1\bigr)=\frac1m\operatorname{diag}(4(x^{2}+y^{2}),1)=\frac1m\operatorname{diag}(4l^{2},1)$ on the locus, $D_{x}G\,\mathsf M^{-1}F=\frac1m\bigl(-2mgy,\,0\bigr)=(-2gy,\,0)$, $G_{tt}=0$, $G_{tq}=0$ and $G_{qq}[v,v]=\bigl(2(v_{x}^{2}+v_{y}^{2}),\,0\bigr)$; along $x(t)=X(\theta(t))$ the velocity is $\dot x=l\theta'(\cos\theta,\sin\theta,0)$, so $v_{x}^{2}+v_{y}^{2}=l^{2}\theta'^{2}$, and hence $$\Lambda=-C^{-1}\bigl[(-2gy,\,0)+(2l^{2}\theta'^{2},\,0)\bigr]=\Bigl(\frac{m}{4l^{2}}\bigl(2gy-2l^{2}\theta'^{2}\bigr),\,0\Bigr)=\Bigl(-\frac{m}{2l}\bigl(g\cos\theta+l\theta'^{2}\bigr),\,0\Bigr)$$ at $y=-l\cos\theta$; this is the displayed multiplier. [F2, F3, F5, algebra]

2.1 Conversely, a solution of the pendulum equation gives an ideal constrained motion: let $\theta:J\to\mathbb R$ be $C^{2}$ with $ml^{2}\theta''+mgl\sin\theta=0$ and put $x:=X(\theta)$, with the model data and potential of [F1]; then $x$ is $C^{2}$ and constraint-preserving by step 1.1, and $\dot x=l\theta'(\cos\theta,\sin\theta,0)$, $\ddot x=l\theta''(\cos\theta,\sin\theta,0)+l\theta'^{2}(-\sin\theta,\cos\theta,0)$. Set $\lambda:=\bigl(-\frac{m}{2l}(g\cos\theta+l\theta'^{2}),\,0\bigr)$ and $R:=D_{x}G(x)^{\mathsf T}\lambda=(2x\lambda_{1},\,2y\lambda_{1},\,\lambda_{2})=-m(g\cos\theta+l\theta'^{2})u(\theta)$; the triple $(\cos\theta,\sin\theta,0)$, $u(\theta)$, $\mathbf e_{3}$ is an orthonormal basis of $\mathbb R^{3}$, and comparing components of $m\ddot x$ and $F+R$ in it: the tangent components are $ml\theta''$ and $-mg\sin\theta$, equal by the equation; the $u$-components are $-ml\theta'^{2}$ and $mg\cos\theta-T=-ml\theta'^{2}$ with $T=m(g\cos\theta+l\theta'^{2})$; and the $\mathbf e_{3}$-components are $0$ and $\lambda_{2}=0$. Hence $\mathsf M\ddot x=F+R$ with $R=D_{x}G^{\mathsf T}\lambda$ annihilating the kernel, so $x$ is a constrained motion with ideal reaction and multiplier $\lambda$. [F1, F2, F3, F5, step 1.1, step 1.2, algebra]

2.2 The tension and the reduced equation along a motion presented as $x=X(\theta)$: projecting $\mathsf Mx''=F+R$ with $R=D_{x}G^{\mathsf T}\lambda$ of step 1.2 onto the tangent direction $(\cos\theta,\sin\theta,0)$ gives $ml\theta''=-mg\sin\theta$, that is $ml^{2}\theta''+mgl\sin\theta=0$; projecting onto $u(\theta)$ gives $-ml\theta'^{2}=mg\cos\theta-T$ with $T:=-R\cdot u$, that is $T=m(g\cos\theta+l\theta'^{2})$, the displayed tension; and projecting onto $\mathbf e_{3}$ gives $0=\lambda_{2}$, so the plane constraint $z=0$ exerts no normal force on any constrained motion, whose motion and applied force already lie in the plane. The reaction is therefore $R=-Tu(\theta)$, a force along the line of the link, toward the pivot when $T>0$, and the wire or link exerts the opposite force on the pivot. [F3, F5, step 1.1, step 1.2, algebra]

3.1 Reaction power and energy: by step 2.2, $R=-Tu$ with $T\in\mathbb R$, and $x'=l\theta'(\cos\theta,\sin\theta,0)$ is orthogonal to $u$, so $R\cdot x'=0$ identically, in agreement with the scleronomic case of the power identity $R\cdot x'=-\lambda G_{t}$ of [F3] because $G_{t}=0$; with $U=mgy=-mgl\cos\theta$ static and no residual forces, [F4] gives $E=\tfrac12ml^{2}\theta'^{2}-mgl\cos\theta$ constant along the motion; independently, $\frac{d}{dt}E=ml^{2}\theta'\theta''+mgl\sin\theta\,\theta'=l\theta'(ml\theta''+mg\sin\theta)=0$ by the equation of step 2.2. [F4, F5, F6, step 2.2, algebra]

4.1 Energy expression of the tension and finite model data: substituting $l\theta'^{2}=2E/(ml)+2g\cos\theta$ (equivalent to the definition of $E$) into $T=m(g\cos\theta+l\theta'^{2})$ gives $T=3mg\cos\theta+2E/l$; with $E=\tfrac12ml^{2}\theta_{0}'^{2}-mgl\cos\theta_{0}$ this is $T=mg(3\cos\theta-2\cos\theta_{0})+ml\theta_{0}'^{2}$. For $m=1$, $l=1$, $g=10$, $\theta_{0}=\pi/3$ and $\theta_{0}'=0$: $E=-mgl\cos\theta_{0}=-5\ \mathrm J$ and $T=10(3\cos\theta-1)\ \mathrm N=30\cos\theta-10\ \mathrm N$, so $T(\theta_{0})=5\ \mathrm N$, $T(0)=20\ \mathrm N$, and on the reachable arc $|\theta|\le\pi/3$ one has $\cos\theta\ge\tfrac12$ and $T\ge5\ \mathrm N>0$; the reaction power is zero at every point of the motion. [F5, F6, step 3.1, algebra]

5.1 Clauses 1-5 of the Example are proved: the datum is a regular scleronomic holonomic constraint realizing the circle $x^{2}+y^{2}=l^{2}$ in the plane $z=0$, the multiplier has the displayed two components with the second vanishing along every constrained motion, the reaction is the displayed tension, the pendulum equation is the tangential projection of the constrained equation, the ideal reaction performs no work, the mechanical energy is conserved, and the finite data give a positive tension on the reachable arc. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 4.1] ∎

## Remarks

- **Rod versus string.** The ideal model supplies the reaction $R=-Tu$ with no sign restriction; a smooth wire — the realization declared in the example — and a light rigid link can transmit both tension ($T>0$) and compression ($T<0$), while a taut string can pull only. Where the model's formula gives $T<0$ — for instance for motion near the inverted position — the string assumption fails, the constraint is released, and a slackening model (a different, unilateral model) is required; that regime is outside this example.

- **Model limits.** The pivot is fixed and frictionless, the wire or link is smooth and massless, the field is uniform, and the bob is a point mass; drag, pivot friction, wire or link elasticity, the finite size of the bob and the nonuniformity of a real field are separate model corrections. The example is a conditional computation inside the declared idealizations and reports no measured tension.
