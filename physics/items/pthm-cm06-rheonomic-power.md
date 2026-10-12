---
id: pthm-cm06-rheonomic-power
title: "Reaction work and mechanical-energy balance for ideal holonomic constraints: vanishing power for scleronomic constraints and the rheonomic work term"
kind: physics-theorem
status: draft
origin: session
domain: physics
dependency_level: 12
deps: [def-cm06-holonomic-constraint-model, post-cm06-ideal-reaction-law, pthm-cm06-multiplier-balance, post-cm02-force-superposition, def-cm03-centre-of-mass-and-momenta, def-cm03-potential-and-mechanical-energy, def-cm01-units, lem-cm-constraint-multipliers-and-accelerations, thm-cm-work-energy-balance, thm-chain-rule-for-total-derivatives, thm-newton-leibniz-with-interior-derivative, cor-zero-derivative-implies-constant, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-interval, lem-finite-sum-laws, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-cm06-holonomic-constraint-model: formulation-prerequisite
  post-cm06-ideal-reaction-law: physical-assumption
  pthm-cm06-multiplier-balance: physical-result
  post-cm02-force-superposition: physical-assumption
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  lem-cm-constraint-multipliers-and-accelerations: mathematical-premise
  thm-cm-work-energy-balance: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The work and energy statements of an ideal holonomic-constraint model with an ambient force map presented through a potential with residual forces: the reaction power equals minus the multiplier paired with the time derivative of the constraint, so scleronomic ideal constraints perform no work, while rheonomic ideal constraints can change the mechanical energy through a term that is not a residual force of the model; the mechanical-energy balance carries that term, conservation holds only for a scleronomic constraint with a static potential and no residual forces, and the integrated work form is stated. The result is a conditional deduction from the adopted model and idealization, with the empirical qualifications of the ideal-reaction postulate carried; no measured value is asserted."
sources:
  references:
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Sections 1.4-1.5, printed pages 19-25 (PDF pages 22-28): ideal constraint reactions annihilate admissible virtual displacements, and time-dependent constraints can do actual work despite zero virtual work"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.5.1 'Bead on a Rotating Hoop', Eqs. (2.61)-(2.66), printed pages 26-28 (PDF pages 32-34): a time-dependent holonomic constraint with the bead threaded on the rotating hoop and the comparison of the inertial mechanical energy with the reduced autonomous integral"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Sections 2.1-2.2 and 4.6, chapter pages 1-4 and 21-24: Lagrange equations with constraint forces for a bead on a rotating ring, and the distinction between the mechanical energy in the lab frame and a reduced autonomous quantity for a rotating constraint"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Statement

Adopt a holonomic-constraint model of [[def-cm06-holonomic-constraint-model]]
with datum $(O,k,G)$ and the ideal-reaction law of
[[post-cm06-ideal-reaction-law]]. Suppose, in addition to the model
hypotheses, that $G$ is of class $C^{3}$ on $O$ and $D_{x}G(t,x)$ has rank
$k$ for every $(t,x)\in O$, and that the force map is of class $C^{1}$ on
$I_{0}\times Q\times(\mathbb R^{3})^{N}$; these are hypotheses (h1)-(h2) of
[[pthm-cm06-multiplier-balance]]. Let
$x:J\to Q$ be a constrained motion with ideal reaction $R$ on an interval
$J\subseteq I_{0}$ with nonempty interior, with velocity $w=x'$ and multiplier
$\lambda:J\to\mathbb R^{k}$ as in [[pthm-cm06-multiplier-balance]] clause 1.
Suppose further that the model's force map is presented through a potential
with residual forces in the sense of clause (a) of
[[def-cm03-potential-and-mechanical-energy]]: a $C^{2}$ function
$U:I_{0}\times Q\to\mathbb R$ of dimension $\mu\ell^{2}\tau^{-2}$ and maps
$d_{i}:I_{0}\times Q\times(\mathbb R^{3})^{N}\to\mathbb R^{3}$ with the
standing regularity of clause (iii) of [[post-cm02-force-superposition]], such
that
$$F_{i}(t,x,v)=-\nabla_{x_{i}}U(t,x)+d_{i}(t,x,v)\qquad(i=1,\dots,N)$$
on the state domain ([[def-cm01-units]] for the dimensions). Write
$K$ and $E(t):=K(t)+U(t,x(t))$ for the kinetic and mechanical energy of
[[def-cm03-centre-of-mass-and-momenta]] clauses (b),(d) and of clause (b) of
[[def-cm03-potential-and-mechanical-energy]], and
$\mathfrak d_{i}(t):=d_{i}(t,x(t),w(t))$ for the evaluated residual forces.
Then:

1. **reaction power and reaction work.** For every $t\in J$,
   $$R(t)\cdot w(t)=-\lambda(t)\cdot G_{t}\bigl(t,x(t)\bigr),$$
   and for all $t_{0}<t_{1}$ in $J$, $\int_{t_{0}}^{t_{1}}R(t)\cdot w(t)\,dt
   =-\int_{t_{0}}^{t_{1}}\lambda(t)\cdot G_{t}(t,x(t))\,dt$. If the datum is
   scleronomic, then $R\cdot w\equiv0$ on $J$ and the reaction performs no
   work over any subinterval.

2. **mechanical-energy balance.** $E$ is differentiable on $J$ and
   $$E'(t)=\partial_{t}U\bigl(t,x(t)\bigr)+\sum_{i}\bigl\langle\mathfrak d_{i}(t),w_{i}(t)\bigr\rangle-\lambda(t)\cdot G_{t}\bigl(t,x(t)\bigr)\qquad(t\in J):$$
   the mechanical energy changes at the rate of the explicit time dependence
   of the potential, the power of the residual forces, and the constraint
   term $-\lambda\cdot G_{t}$, which vanishes identically for a scleronomic
   constraint.

3. **conservation in the static scleronomic case.** If the datum is
   scleronomic, $\partial_{t}U\equiv0$ on $I_{0}\times Q$, and
   $\mathfrak d_{i}\equiv0$ for every $i$ along the motion, then $E$ is
   constant on $J$.

4. **integrated work form.** For all $t_{0}<t_{1}$ in $J$,
   $$K(t_{1})-K(t_{0})=U\bigl(t_{0},x(t_{0})\bigr)-U\bigl(t_{1},x(t_{1})\bigr)+\int_{t_{0}}^{t_{1}}\Bigl[\partial_{t}U\bigl(t,x(t)\bigr)+\sum_{i}\bigl\langle\mathfrak d_{i}(t),w_{i}(t)\bigr\rangle-\lambda(t)\cdot G_{t}\bigl(t,x(t)\bigr)\Bigr]dt .$$

The constraint term of clause 2 is not a force of the model's force map: it is
the mechanical work performed by the ideal mechanism that maintains a
time-dependent constraint, and clause 1 records that this work is exactly the
virtual-work-free reaction's actual power. The statement is conditional on the
adopted model, idealization and potential presentation; it asserts no measured
value.

## Facts & Assumptions

**Given:** The holonomic-constraint model, ideal-reaction law, constrained motion $x:J\to Q$ with reaction $R$, velocity $w=x'$ and multiplier $\lambda$, the potential presentation $(U,d)$, and the additional regularity hypotheses in the Statement.

[L1] The model and the ideal law ([[def-cm06-holonomic-constraint-model]], [[post-cm06-ideal-reaction-law]], [[pthm-cm06-multiplier-balance]] clause 1): $\mathsf Mx''=F(t,x,w)+R$; $R(t)=D_{x}G(t,x(t))^{\mathsf T}\lambda(t)$; and $G(t,x(t))=0$, whence $G_{t}(t,x(t))+D_{x}G(t,x(t))w(t)=0$ by the chain rule ([[thm-chain-rule-for-total-derivatives]]). The stated $C^{3}$, all-$O$ rank and $C^{1}$ force-map hypotheses are precisely (h1)-(h2) of the multiplier-balance theorem.

[L2] The multiplier and its properties: $\lambda$ is the unique multiplier of the motion, continuous on $J$ ([[lem-cm-constraint-multipliers-and-accelerations]], [[pthm-cm06-multiplier-balance]]).

[L3] The potential presentation: $F_{i}(t,x(t),w(t))=-\nabla_{x_{i}}U(t,x(t))+\mathfrak d_{i}(t)$ with $\mathfrak d_{i}(t)=d_{i}(t,x(t),w(t))$ ([[def-cm03-potential-and-mechanical-energy]] clause (a)); $K$ and $E=K+U(t,x(t))$ are the quantities of clause (b) of that item and of [[def-cm03-centre-of-mass-and-momenta]] clauses (b),(d); $U$ is $C^{2}$, hence $C^{1}$.

[L4] The mathematical work-energy balance ([[thm-cm-work-energy-balance]]): if $U$ is $C^{1}$ on the open set $I\times Q$, $m_{i}x_{i}''(t)=-\nabla_{x_{i}}U(t,x(t))+\delta_{i}(t)$ with maps $\delta_{i}:I\to\mathbb R^{3}$, then $K'(t)=\sum_{i}\langle m_{i}x_{i}''(t),x_{i}'(t)\rangle$, $\frac{d}{dt}U(t,x(t))=\partial_{t}U(t,x(t))+\sum_{i}\langle\nabla_{x_{i}}U(t,x(t)),x_{i}'(t)\rangle$, $\frac{d}{dt}(K+U(t,x(t)))=\partial_{t}U(t,x(t))+\sum_{i}\langle\delta_{i}(t),x_{i}'(t)\rangle$, and $K+U(t,x(t))$ is constant when $\delta_{i}\equiv0$ and $\partial_{t}U\equiv0$.

[L5] Bilinearity of the Euclidean product and linearity of finite sums ([[def-euclidean-inner-product]], [[lem-finite-sum-laws]]); a continuous function on a compact interval is Riemann integrable and the Newton-Leibniz formula integrates a continuous derivative ([[thm-newton-leibniz-with-interior-derivative]], [[def-interval]], [[def-vector-valued-derivative-and-integral]]); a differentiable function on an interval with zero derivative is constant ([[cor-zero-derivative-implies-constant]]).

[L6] The scleronomic case: the datum is scleronomic when its constraint locus is time-independent, and then $G_{t}(t,x)=0$ for every $(t,x)\in\Sigma$ for the declared presentation ([[def-cm06-holonomic-constraint-model]] clause (d)); a constrained motion has $(t,x(t))\in\Sigma$ for every $t\in J$.

## Proof

**Proof technique:** direct; compute the reaction power from the multiplier representation and the differentiated constraint, then apply the mathematical work-energy balance with the total non-potential force $\mathfrak d+R$.

1.1 Clause 1, power identity: by [L1] and [L5], $R(t)\cdot w(t)=(D_{x}G(t,x(t))^{\mathsf T}\lambda(t))\cdot w(t)=\lambda(t)\cdot D_{x}G(t,x(t))w(t)=-\lambda(t)\cdot G_{t}(t,x(t))$, using the differentiated constraint $G_{t}+D_{x}Gw=0$ of [L1]. [L1, L5, algebra]

2.1 Clause 1, scleronomic case and integral: if the datum is scleronomic, then by [L6] the point $(t,x(t))$ lies in $\Sigma$ and $G_{t}(t,x(t))=0$ for every $t\in J$, so step 1.1 gives $R(t)\cdot w(t)=0$; both integrals of clause 1 vanish. In general, $t\mapsto R(t)\cdot w(t)$ is continuous (it is a finite sum of products of continuous functions, [L5]) and the displayed integrals are its integrals and those of $-\lambda\cdot G_{t}$, which are equal by step 1.1. [step 1.1, L5, L6]

2.2 Clause 2: substituting the presentation of [L3] into the equation of motion of [L1], with the unique multiplier $\lambda$ of [L2], gives $m_{i}x_{i}''(t)=-\nabla_{x_{i}}U(t,x(t))+\mathfrak d_{i}(t)+R_{i}(t)$ for every $i$; [L4] applies with $\delta_{i}:=\mathfrak d_{i}+R_{i}$ and gives $E'(t)=\partial_{t}U(t,x(t))+\sum_{i}\langle\mathfrak d_{i}(t)+R_{i}(t),w_{i}(t)\rangle=\partial_{t}U(t,x(t))+\sum_{i}\langle\mathfrak d_{i}(t),w_{i}(t)\rangle+R(t)\cdot w(t)=\partial_{t}U(t,x(t))+\sum_{i}\langle\mathfrak d_{i}(t),w_{i}(t)\rangle-\lambda(t)\cdot G_{t}(t,x(t))$ by step 1.1. [L2, L3, L4, step 1.1, L5, algebra]

3.1 Clause 3: if the datum is scleronomic then $-\lambda\cdot G_{t}=0$ on $J$ by step 2.1; with $\mathfrak d_{i}\equiv0$ and $\partial_{t}U\equiv0$ the right-hand side of step 2.2 vanishes identically, so $E$ is constant on $J$ by [L5]. [step 2.1, step 2.2, L5]

4.1 Clause 4: by [L4] applied with $\delta_{i}=\mathfrak d_{i}+R_{i}$ as in step 2.2, $K(t_{1})-K(t_{0})=U(t_{0},x(t_{0}))-U(t_{1},x(t_{1}))+\int_{t_{0}}^{t_{1}}\bigl[\partial_{t}U+\sum_{i}\langle\mathfrak d_{i}+R_{i},w_{i}\rangle\bigr]dt$; substituting $\int_{t_{0}}^{t_{1}}R\cdot w\,dt=-\int_{t_{0}}^{t_{1}}\lambda\cdot G_{t}\,dt$ from step 2.1 gives the displayed formula. [L4, step 2.1, L5, algebra] ∎

## Remarks

- **Ideal does not mean workless.** The vanishing of virtual work and the vanishing of actual work are different conditions, and for a moving (rheonomic) constraint the second fails in general: the mechanism's reaction can have a component along the actual velocity of the constrained body even though it annihilates every frozen virtual displacement. The companion bead-on-a-rotating-wire example computes a nonzero reaction power $2m\Omega^{2}rr'$, while the companion pendulum check computes a vanishing one.

- **Where the mechanical energy goes.** For a rheonomic ideal constraint the term $-\lambda\cdot G_{t}$ is the power injected or removed by the constraint mechanism; it is not attributable to the model's residual forces and it is not a potential term. A reduced description in a moving chart or a reduced coordinate can have a conserved reduced energy that differs from the inertial mechanical energy, and that difference is the content of this term in those descriptions; the comparison is carried out by the companions and is not claimed here in general.

- **Conservation is conditional and representation-dependent.** Clause 3 needs all three hypotheses: scleronomic constraint, static potential, no residual forces. With a static potential but a rheonomic constraint the mechanical energy generally changes; the normalization of $U$ by a time-dependent additive function changes $E$ and adds $c'(t)$ to the right-hand side of clause 2, exactly as in [[def-cm03-potential-and-mechanical-energy]] clause (c).
