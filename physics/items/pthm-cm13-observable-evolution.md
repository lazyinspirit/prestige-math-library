---
id: pthm-cm13-observable-evolution
kind: physics-theorem
title: "Evolution of phase functions along the model's Hamiltonian solutions: $df/dt=\\partial_t f+\\{f,H\\}$, the first-integral criterion, and the closed bracket algebra of autonomous first integrals"
status: published
origin: session
domain: physics
dependency_level: 22
deps: [def-cm13-poisson, def-cm13-hamiltonian-field, def-cm13-two-form, pthm-cm13-bracket-identities, pthm-cm13-hamiltonian-field-integrates-the-model-equations, def-cm12-hamiltonian, pthm-cm12-energy-time, def-cm07-action-and-mechanical-lagrangian, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-cm02-newtonian-flow, def-first-order-ode-initial-value-problem-and-solution, def-interval, thm-chain-rule-for-total-derivatives, cor-zero-derivative-implies-constant, thm-ck-euclidean-maps-closed-under-algebra-and-composition, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-matrix-product-and-identity-matrix, def-euclidean-inner-product]
dependency_roles:
  def-cm13-poisson: formulation-prerequisite
  def-cm13-hamiltonian-field: formulation-prerequisite
  def-cm13-two-form: formulation-prerequisite
  pthm-cm13-bracket-identities: physical-result
  pthm-cm13-hamiltonian-field-integrates-the-model-equations: physical-result
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm12-energy-time: physical-result
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-interval: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The evolution identity of the declared potential presentation: along the model's Hamiltonian solutions the total time derivative of a phase function is its explicit time derivative plus the bracket with the branch Hamiltonian; autonomous functions with vanishing bracket are constant on trajectories, and, for an autonomous Hamiltonian, the bracket of two autonomous $C^{3}$ first integrals is again a first integral and the Hamiltonian itself is a first integral. Identification of Hamiltonian solutions with force-model motions requires $d\\equiv0$ on the state domain. The statement is a conditional deduction from the adopted force branch, the declared presentation and the cited mathematics; it asserts no empirical content."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.3, printed pages 94-95 (PDF pages 100-101): the claim $df/dt=\\{f,H\\}+\\partial f/\\partial t$ with its proof, the criterion $\\{I,H\\}=0$ for a constant of motion, and the closure of constants of motion under the bracket"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 10.1, chapter page 3 (PDF page 239): the conservation reading of the total time derivative of the Hamiltonian at fixed phase arguments"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 15.2: the Poisson bracket as the tool for the time evolution of dynamical variables and for conserved quantities"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---
## Statement

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], with the
momentum charts and two-form datum of [[def-cm13-two-form]], the Hamiltonian
fields of [[def-cm13-hamiltonian-field]], the bracket of
[[def-cm13-poisson]] and the branch Hamiltonian $H$, assumed of class $C^{2}$
in $(t,z)$ on $I_{0}\times W$ ([[def-cm12-hamiltonian]],
[[def-cm03-potential-and-mechanical-energy]],
[[post-cm02-force-superposition]], [[def-cm01-configuration]],
[[def-cm01-units]]). Let $J\subseteq I_{0}$ be a nonempty open interval and
let $z:J\to W$ be a $C^{1}$ solution of the Hamiltonian system
$\dot z(t)=X_{H_{t}}(z(t))$, equivalently, when $d\equiv0$ on the state domain and with
$z=(x,p)$ and $p=\mathsf Mx'$, the momentum-phase curve of a motion of the
model ([[pthm-cm13-hamiltonian-field-integrates-the-model-equations]],
[[def-cm02-newtonian-flow]],
[[def-first-order-ode-initial-value-problem-and-solution]]). Then:

1. **(evolution identity)** Let $\mathcal U\subseteq J\times W$ be an open
   neighborhood of the solution graph $\{(t,z(t)):t\in J\}$, and let
   $f:\mathcal U\to\mathbb R$ be $C^{1}$. For
   $\mathcal U_t:=\{w\in W:(t,w)\in\mathcal U\}$ and
   $f_t:=f(t,\cdot)$, the function $t\mapsto f(t,z(t))$ is differentiable on
   $J$ and

$$\frac{d}{dt}f\bigl(t,z(t)\bigr)=\partial_{t}f\bigl(t,z(t)\bigr)+\{f_{t},H_{t}\}\bigl(z(t)\bigr),$$

   where $f_t:=f(t,\cdot)$, $H_t:=H(t,\cdot)$ and the bracket is that of
   [[def-cm13-poisson]], evaluated on the open slice $\mathcal U_t$.
2. **(first integrals)** If $f$ is autonomous and
   $\{f,H_{t}\}(z(t))=0$ for every $t\in J$, then $f\circ z$ is constant on
   $J$; in particular, if in addition $H$ is autonomous
   ($\partial_{t}U\equiv0$ and $d\equiv0$), then $H$ itself is constant
   along $z$, the Hamiltonian form of the energy conservation of
   [[pthm-cm12-energy-time]].
3. **(closed algebra)** Let $H$ be autonomous and let $f,g$ be autonomous
   $C^{3}$ phase functions with $\{f,H\}=0$ and $\{g,H\}=0$ everywhere on
   their common domain. Then $\{f,g\}$ is again a first integral of $H$:
   $\{\{f,g\},H\}=0$ everywhere, and $\{f,g\}$ is constant along every
   solution of the Hamiltonian system on which it is defined.

The statement is conditional on the adopted force branch, the declared
presentation and the cited mathematics; it asserts no empirical content and
no existence, uniqueness or completeness of solutions.

## Facts & Assumptions

**Given:** The potential presentation with its branch Hamiltonian, its
Hamiltonian field, its bracket and a $C^{1}$ solution curve $z$ of the
Hamiltonian system on the interval $J$.

[F1] Bracket and field ([[def-cm13-poisson]], [[def-cm13-hamiltonian-field]], [[pthm-cm13-bracket-identities]], [[def-cm13-two-form]]): the pointwise coordinate bracket is defined for $C^1$ inputs by [[def-cm13-poisson]], and for $C^{2}$ functions $u,v,w$ the Jacobi identity holds by [[pthm-cm13-bracket-identities]], with each nested bracket read in that $C^1$ coordinate extension. In clause 3, $f,g\in C^3$ and $H\in C^2$, so all three entries satisfy this $C^2$ Jacobi hypothesis; moreover $\{f,g\}\in C^2$ and is admissible in clause 2. For $C^{2}$ functions $u,v$, $\{u,v\}=\omega(X_u,X_v)=\nabla u^{\mathsf T}J\nabla v$ in canonical coordinates, $\{u,v\}=-\{v,u\}$, and the coordinate formula $\{u,v\}=\sum_{a}(u_{z^{a}}v_{z^{m+a}}-u_{z^{m+a}}v_{z^{a}})$ holds; the field of the branch Hamiltonian satisfies $\dot z=X_{H_t}(z)=J\nabla_zH(t,z)$ along any solution.

[F2] Model and Hamiltonian equivalence ([[pthm-cm13-hamiltonian-field-integrates-the-model-equations]], [[def-cm12-hamiltonian]], [[def-cm02-newtonian-flow]], [[pthm-cm12-energy-time]], [[def-cm03-potential-and-mechanical-energy]], [[post-cm02-force-superposition]]): when $d\equiv0$ on the state domain, the momentum-phase curves of the model's motions are exactly the solutions of the Hamiltonian system, and with $\partial_{t}U\equiv0$ and $d\equiv0$ the branch Hamiltonian is constant along every motion.

[F3] Calculus ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-chain-rule-for-total-derivatives]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[def-matrix-product-and-identity-matrix]], [[def-euclidean-inner-product]], [[cor-zero-derivative-implies-constant]], [[def-interval]]): the chain rule gives $\frac{d}{dt}f(t,z(t))=\partial_{t}f(t,z(t))+\nabla_{z}f(t,z(t))\cdot\dot z(t)$; the Euclidean product identifies the gradient pairing with the matrix product $\nabla f^{\mathsf T}\dot z$; and a differentiable function on an interval whose derivative vanishes identically is constant.

## Proof

**Proof technique:** direct. Differentiate the phase function along the solution by the chain rule, substitute the Hamiltonian field, identify the resulting pairing with the bracket, and read off the constancy criteria.

1.1 For every $t$, $(t,z(t))\in\mathcal U$ and the slice $\mathcal U_t$ is open in $W$, so $f_t$ is a $C^1$ phase function near $z(t)$. By [F3] the curve $t\mapsto f(t,z(t))$ is differentiable with $\frac{d}{dt}f(t,z(t))=\partial_tf(t,z(t))+\nabla_zf(t,z(t))\cdot\dot z(t)$; by [F1] the solution satisfies $\dot z(t)=J\nabla_zH(t,z(t))$, so $\nabla_zf(t,z(t))\cdot\dot z(t)=\nabla f_t(z(t))^{\mathsf T}J\nabla H_t(z(t))=\{f_t,H_t\}(z(t))$, using the pointwise coordinate bracket, which is defined for these $C^1$ and $C^2$ slots. [F1, F3, algebra]

2.1 Clause 1 is step 1.1. [step 1.1]

2.2 Clause 2: if $f$ is autonomous with $\{f,H_{t}\}(z(t))=0$ for all $t\in J$, then by step 1.1 the derivative of $t\mapsto f(z(t))$ vanishes identically on the interval $J$, so by [F3] that function is constant; for $f:=H$ autonomous the bracket $\{H,H\}=0$ by skew-symmetry of [F1], so $H$ is constant along $z$, which is exactly the Hamiltonian restatement of the conservation clause of [F2]. [step 1.1, F1, F2, F3]

3.1 Clause 3: let $H$ be autonomous and let $f,g$ be autonomous $C^{3}$ functions with $\{f,H\}=\{g,H\}=0$ identically. The functions $f,g,H$ are all $C^2$, so the Jacobi identity of [F1] applies even though $H$ is not assumed $C^3$: $\{f,\{g,H\}\}+\{g,\{H,f\}\}+\{H,\{f,g\}\}=0$, with inner brackets interpreted by the pointwise $C^1$ extension. The first two terms vanish identically because $\{g,H\}=0$ and $\{H,f\}=-\{f,H\}=0$ by skew-symmetry; hence $\{H,\{f,g\}\}=0$, i.e. $\{\{f,g\},H\}=0$. Since $f,g$ are $C^3$, the coordinate formula gives $\{f,g\}\in C^2$, so clause 2 applies to it and shows it is constant along every solution on which it is defined. [step 2.2, F1, algebra]

4.1 Collection: clause 1 is step 1.1, clause 2 is step 2.2 and clause 3 is step 3.1; this proves the statement. [step 1.1, step 2.2, step 3.1] ∎

## Remarks

- **Time-dependent Hamiltonians.** Clause 1 holds for time-dependent $H$ and
  time-dependent phase functions; clauses 2-3 are stated for autonomous data,
  where the bracket $\{f,H\}$ is the total derivative and the closed-algebra
  argument applies verbatim. For a time-dependent $H$, $\{f,H_{t}\}=0$ at
  each $t$ along a single trajectory is not by itself an invariant statement
  on the phase domain, which is why clause 3 assumes an autonomous $H$.

- **Regularity.** Clause 3 retains $C^3$ functions so that $\{f,g\}$ is $C^2$, the class used for the first-integral bracket in its proof. The Jacobi identity of [[pthm-cm13-bracket-identities]] already holds for $C^2$ inputs with nested brackets interpreted through the pointwise $C^1$ extension;
  clauses 1-2 use only $C^{2}$ (bracket) and $C^{1}$ (function) regularity.
