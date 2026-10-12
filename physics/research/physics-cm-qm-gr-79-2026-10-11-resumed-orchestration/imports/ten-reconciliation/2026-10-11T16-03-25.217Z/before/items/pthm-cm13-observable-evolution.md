---
id: pthm-cm13-observable-evolution
kind: physics-theorem
title: "Evolution of phase functions along the model's Hamiltonian solutions: $df/dt=\\partial_t f+\\{f,H\\}$, the first-integral criterion, and the closed bracket algebra of autonomous first integrals"
status: draft
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
physical_scope: "The evolution identity of the declared potential presentation: along the model's Hamiltonian solutions the total time derivative of a phase function is its explicit time derivative plus the bracket with the branch Hamiltonian; autonomous functions with vanishing bracket are constant on trajectories, and, for an autonomous Hamiltonian, the bracket of two autonomous $C^{3}$ first integrals is again a first integral and the Hamiltonian itself is a first integral. The statement is a conditional deduction from the adopted force branch, the declared presentation and the cited mathematics; it asserts no empirical content."
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
$\dot z(t)=X_{H_{t}}(z(t))$, equivalently, on the potential branch with
$z=(x,p)$ and $p=\mathsf Mx'$, the momentum-phase curve of a motion of the
model ([[pthm-cm13-hamiltonian-field-integrates-the-model-equations]],
[[def-cm02-newtonian-flow]],
[[def-first-order-ode-initial-value-problem-and-solution]]). Then:

1. **(evolution identity)** For every $C^{1}$ phase function
   $f:U\to\mathbb R$ on an open set $U$ containing the graph of $z$,
   $t\mapsto f(t,z(t))$ is differentiable on $J$ and

$$\frac{d}{dt}f\bigl(t,z(t)\bigr)=\partial_{t}f\bigl(t,z(t)\bigr)+\{f_{t},H_{t}\}\bigl(z(t)\bigr),$$

   where $f_{t}:=f(t,\cdot)$, $H_{t}:=H(t,\cdot)$ and the bracket is that of
   [[def-cm13-poisson]].
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

[F1] Bracket and field ([[def-cm13-poisson]], [[def-cm13-hamiltonian-field]], [[pthm-cm13-bracket-identities]], [[def-cm13-two-form]]): for $C^{2}$ functions $f,g$, $\{f,g\}=\omega(X_{f},X_{g})=\nabla f^{\mathsf T}J\nabla g$ in canonical coordinates, $\{f,g\}=-\{g,f\}$, and the coordinate formula $\{f,g\}=\sum_{a}(f_{z^{a}}g_{z^{m+a}}-f_{z^{m+a}}g_{z^{a}})$ holds; the field of the branch Hamiltonian satisfies $\dot z=X_{H_{t}}(z)=J\nabla_{z}H(t,z)$ along any solution.

[F2] Model and Hamiltonian equivalence ([[pthm-cm13-hamiltonian-field-integrates-the-model-equations]], [[def-cm12-hamiltonian]], [[def-cm02-newtonian-flow]], [[pthm-cm12-energy-time]], [[def-cm03-potential-and-mechanical-energy]], [[post-cm02-force-superposition]]): on the potential branch the momentum-phase curves of the model's motions are exactly the solutions of the Hamiltonian system, and with $\partial_{t}U\equiv0$ and $d\equiv0$ the branch Hamiltonian is constant along every motion.

[F3] Calculus ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-chain-rule-for-total-derivatives]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[def-matrix-product-and-identity-matrix]], [[def-euclidean-inner-product]], [[cor-zero-derivative-implies-constant]], [[def-interval]]): the chain rule gives $\frac{d}{dt}f(t,z(t))=\partial_{t}f(t,z(t))+\nabla_{z}f(t,z(t))\cdot\dot z(t)$; the Euclidean product identifies the gradient pairing with the matrix product $\nabla f^{\mathsf T}\dot z$; and a differentiable function on an interval whose derivative vanishes identically is constant.

## Proof

**Proof technique:** direct. Differentiate the phase function along the solution by the chain rule, substitute the Hamiltonian field, identify the resulting pairing with the bracket, and read off the constancy criteria.

1.1 By [F3] the curve $t\mapsto f(t,z(t))$ is differentiable on $J$ with $\frac{d}{dt}f(t,z(t))=\partial_{t}f(t,z(t))+\nabla_{z}f(t,z(t))\cdot\dot z(t)$; by [F1] the solution satisfies $\dot z(t)=J\nabla_{z}H(t,z(t))$, so $\nabla_{z}f(t,z(t))\cdot\dot z(t)=\nabla f_{t}(z(t))^{\mathsf T}J\,\nabla H_{t}(z(t))=\{f_{t},H_{t}\}(z(t))$, the last equality being the coordinate formula of [F1]. [F1, F3, algebra]

2.1 Clause 1 is step 1.1. [step 1.1]

2.2 Clause 2: if $f$ is autonomous with $\{f,H_{t}\}(z(t))=0$ for all $t\in J$, then by step 1.1 the derivative of $t\mapsto f(z(t))$ vanishes identically on the interval $J$, so by [F3] that function is constant; for $f:=H$ autonomous the bracket $\{H,H\}=0$ by skew-symmetry of [F1], so $H$ is constant along $z$, which is exactly the Hamiltonian restatement of the conservation clause of [F2]. [step 1.1, F1, F2, F3]

3.1 Clause 3: let $H$ be autonomous and let $f,g$ be autonomous $C^{3}$ functions with $\{f,H\}=\{g,H\}=0$ identically; by the Jacobi identity of [F1] applied to $f,g,H$, $\{f,\{g,H\}\}+\{g,\{H,f\}\}+\{H,\{f,g\}\}=0$, and the first two terms vanish identically because $\{g,H\}=0$ and $\{H,f\}=-\{f,H\}=0$ by skew-symmetry; hence $\{H,\{f,g\}\}=0$, i.e. $\{\{f,g\},H\}=0$ by skew-symmetry, and clause 2 applied to the autonomous $C^{2}$ function $\{f,g\}$ shows that it is constant along every solution of the Hamiltonian system on which it is defined. [step 2.2, F1, algebra]

4.1 Collection: clause 1 is step 1.1, clause 2 is step 2.2 and clause 3 is step 3.1; this proves the statement. [step 1.1, step 2.2, step 3.1] ∎

## Remarks

- **Time-dependent Hamiltonians.** Clause 1 holds for time-dependent $H$ and
  time-dependent phase functions; clauses 2-3 are stated for autonomous data,
  where the bracket $\{f,H\}$ is the total derivative and the closed-algebra
  argument applies verbatim. For a time-dependent $H$, $\{f,H_{t}\}=0$ at
  each $t$ along a single trajectory is not by itself an invariant statement
  on the phase domain, which is why clause 3 assumes an autonomous $H$.

- **Regularity.** Clause 3 requires $C^{3}$ functions because the Jacobi
  identity of [[pthm-cm13-bracket-identities]] is stated for $C^{3}$ data;
  clauses 1-2 use only $C^{2}$ (bracket) and $C^{1}$ (function) regularity.
