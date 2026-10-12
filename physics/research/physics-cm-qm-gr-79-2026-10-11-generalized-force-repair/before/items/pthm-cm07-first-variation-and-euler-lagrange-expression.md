---
id: pthm-cm07-first-variation-and-euler-lagrange-expression
kind: physics-theorem
title: "The first variation of the mechanical action and the Euler-Lagrange expression in model terms"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [def-cm07-action-and-mechanical-lagrangian, def-cm-time-dependent-lagrangian-and-action, lem-cm-first-variation-formula, def-cm03-potential-and-mechanical-energy, def-cm01-configuration, def-cm01-velocity-acceleration, def-cm01-units, def-euclidean-inner-product, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-linear-map, def-vector-valued-derivative-and-integral, def-derivative, def-interval]
dependency_roles:
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  lem-cm-first-variation-formula: mathematical-premise
  def-cm03-potential-and-mechanical-energy: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-linear-map: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The first variation of the action of a force model with a declared potential presentation, computed in the inertial chart: for every C^2 admissible curve and fixed-endpoint variation the variation exists and equals the integral of minus the potential gradient paired with the variation plus the mass-operator pairing of velocity with the variation's derivative, and the Euler-Lagrange expression of the mechanical Lagrangian is minus the sum of the mass-operator acceleration and the potential gradient. The result is a conditional deduction from the adopted force branch, the declared potential presentation and the cited mathematical first-variation formula; it asserts no equation of motion, which is the subject of the following items."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.1, printed pages 10-13 (PDF pages 16-19): the first variation of the action by integration by parts and the resulting Euler-Lagrange coefficient"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 5.2 (Euler's differential equation) and Section 5.8 (generalized coordinates in variational calculus)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.2 and Chapter 2: the equation of motion in Cartesian data and the Lagrangian formulation with the kinetic-minus-potential density"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the force model with potential presentation $(U,d)$ and the mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], with masses
$m_{1},\dots,m_{N}>0$, configuration domain $Q\subseteq\mathbb R^{3N}$, time
window $I_{0}$, mass operator $\mathsf M$ and a potential
$U:I_{0}\times Q\to\mathbb R$ of class $C^{2}$
([[def-cm03-potential-and-mechanical-energy]], [[def-cm01-configuration]]).
Let $a<b$ with $[a,b]\subseteq I_{0}$, let $x:[a,b]\to Q$ be a $C^{2}$
admissible curve and let $\eta$ be a variation of $x$
([[def-cm-time-dependent-lagrangian-and-action]]). Then:

1. $x+\varepsilon\eta$ is an admissible curve for every sufficiently small
   $|\varepsilon|$, the function $\varepsilon\mapsto S(x+\varepsilon\eta)$ is
   differentiable at $\varepsilon=0$, and

$$\delta S(x)[\eta]=\int_{a}^{b}\Bigl[-\nabla_{x}U\bigl(t,x(t)\bigr)\cdot\eta(t)+\mathsf M x'(t)\cdot\eta'(t)\Bigr]dt,$$

   where $\nabla_{x}U=(\nabla_{x_{1}}U,\dots,\nabla_{x_{N}}U)$ is the Euclidean
   gradient in the configuration slot and the dot is the Euclidean inner
   product of $\mathbb R^{3N}$ ([[def-euclidean-inner-product]]);

2. the Euler-Lagrange expression of $L$ along $x$ is

$$E_{L}(x)(t)=-\Bigl(\mathsf M x''(t)+\nabla_{x}U\bigl(t,x(t)\bigr)\Bigr)\qquad(t\in[a,b]).$$

The statement is conditional on the adopted force branch and on the declared
potential presentation; it selects no equation of motion and asserts no
empirical value.

## Facts & Assumptions

**Given:** The model data and presentation of the statement, reals $a<b$ with $[a,b]\subseteq I_{0}$, a $C^{2}$ curve $x:[a,b]\to Q$, and a variation $\eta$ with $\eta(a)=\eta(b)=0$.

[F1] The chart instance ([[def-cm07-action-and-mechanical-lagrangian]]): $(O,L)$ with $O=I_{0}\times Q\times\mathbb R^{3N}$ is a time-dependent Lagrangian chart over $[a,b]\times Q$, and admissible curves, variations, action, first variation and Euler-Lagrange expression are those of [[def-cm-time-dependent-lagrangian-and-action]] instantiated at it; thus the Euler-Lagrange expression is $E_{L}(x)(t)=L_{x}(t,x(t),x'(t))-\frac{d}{dt}\bigl(L_{v}(t,x(t),x'(t))\bigr)$ with $L_{x}$, $L_{v}$ the Euclidean gradients in the second and third slots ([[def-jacobian-matrix-and-gradient]]).

[F2] The first-variation formula ([[lem-cm-first-variation-formula]]): for the chart $(O,L)$ there is $\varepsilon_{0}>0$ such that $x+\varepsilon\eta$ is an admissible curve for $|\varepsilon|<\varepsilon_{0}$, the map $\varepsilon\mapsto S(x+\varepsilon\eta)$ is differentiable there with $\delta S(x)[\eta]=\int_{a}^{b}\bigl[L_{x}\cdot\eta+L_{v}\cdot\eta'\bigr]dt ,$ the integrand evaluated at $(t,x(t),x'(t))$, and $E_{L}(x)$ is continuous on $[a,b]$.

[F3] Slots of the mechanical Lagrangian ([[def-cm07-action-and-mechanical-lagrangian]], [[def-cm03-potential-and-mechanical-energy]], [[def-cm01-configuration]]): $L(t,x,v)=K(v)-U(t,x)$ with $K(v)=\frac12 v\cdot\mathsf M v$; the mass operator $\mathsf M$ is linear and symmetric positive definite; $U$ does not depend on $v$; $K$ does not depend on $x$.

[F4] Calculus in the slots: the gradient of $v\mapsto\frac12v\cdot\mathsf M v$ at $v$ is $\mathsf M v$, and the derivative of $t\mapsto\mathsf M x'(t)$ is $\mathsf M x''(t)$, by the chain rule and the componentwise derivative rules ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-linear-map]], [[def-vector-valued-derivative-and-integral]], [[def-derivative]], [[def-directional-and-partial-derivatives]], [[def-interval]]).

## Proof

**Proof technique:** direct; instantiate the mathematical chart and first-variation suppliers at the mechanical Lagrangian and evaluate its two gradients.

1.1 Clause 1: the curve $q:=x$ and the variation $\eta$ satisfy the hypotheses of [[lem-cm-first-variation-formula]] for the chart $(O,L)$ of [F1]; hence $x+\varepsilon\eta$ is admissible for sufficiently small $|\varepsilon|$ and the first variation exists with the formula of [F2]. [F1, F2, given]

1.2 Gradient in the velocity slot: because $U$ does not depend on $v$ by [F3], $L_{v}(t,x,v)=\nabla_{v}K(v)=\mathsf M v$ for every $(t,x,v)$; hence along $x$ one has $L_{v}(t,x(t),x'(t))=\mathsf M x'(t)$. [F3, F4, algebra]

1.3 Gradient in the configuration slot: because $K$ does not depend on $x$ by [F3], $L_{x}(t,x,v)=-\nabla_{x}U(t,x)$ for every $(t,x,v)$; hence along $x$ the configuration gradient is $-\nabla_{x}U(t,x(t))$. [F3, algebra]

1.4 Derivative of the velocity gradient: by [F4] the map $t\mapsto\mathsf M x'(t)$ is differentiable on $[a,b]$ with derivative $\mathsf M x''(t)$. [F4]

2.1 Clause 1: substituting the computed gradients of steps 1.2 and 1.3 into the first-variation formula of step 1.1 gives exactly the displayed integral. [step 1.1, step 1.2, step 1.3, algebra]

3.1 Clause 2: by the definition of $E_{L}$ in [F1], steps 1.3 and 1.4 give $E_{L}(x)(t)=-\nabla_{x}U(t,x(t))-\mathsf M x''(t)$, which is the displayed identity. [F1, step 1.3, step 1.4, algebra] ∎

## Remarks

- The identity of clause 2 is the bridge between the variational and the
  Newtonian descriptions: it says that the Euler-Lagrange expression of the
  mechanical Lagrangian is the negative of the model's acceleration residual
  $\mathsf M x''+\nabla_{x}U$, whose vanishing is the equation of motion of the
  potential branch of the model.

- The formula is a model statement only through the identification of the
  kinetic energy with the mass operator and of the potential part of the force
  with $-\nabla_{x}U$; the underlying analytic content is the cited
  mathematical first-variation formula.
