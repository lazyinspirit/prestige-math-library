---
id: pthm-cm12-energy-time
kind: physics-theorem
title: "The mechanical Hamiltonian is the model's energy in the inertial chart, its balance is the energy balance, and the substituted-chart Hamiltonian is the energy of time-independent coordinates"
status: draft
origin: session
domain: physics
dependency_level: 19
deps: [def-cm12-cotangent-momentum, def-cm12-hamiltonian, pthm-cm12-mechanical-hyperregularity, pthm-cm12-hamilton-equivalence, def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, def-cm03-potential-and-mechanical-energy, def-cm03-centre-of-mass-and-momenta, pthm-cm03-energy-balance, post-cm02-force-superposition, def-cm02-newtonian-flow, def-cm01-configuration, def-cm01-units, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-matrix-product-and-identity-matrix, def-vector-valued-derivative-and-integral, def-interval, prop-cm-hamiltonian-branch-identities]
dependency_roles:
  def-cm12-cotangent-momentum: formulation-prerequisite
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm12-mechanical-hyperregularity: physical-result
  pthm-cm12-hamilton-equivalence: physical-result
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  pthm-cm03-energy-balance: physical-result
  post-cm02-force-superposition: physical-assumption
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  prop-cm-hamiltonian-branch-identities: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The relation between the Hamiltonian of a declared potential presentation of the force branch and the model's mechanical energy: in the inertial Cartesian chart the branch Hamiltonian equals K + U along every curve, its time derivative along a motion is the explicit time dependence of the potential plus the power of the residual forces, and it is constant for a static potential with no residual forces; in a time-independent generalized-coordinate chart the substituted Hamiltonian is the same mechanical energy of the induced configuration curve. The statement is a conditional deduction from the adopted force branch, the presentation and the cited mathematics; it asserts no measured value and no conservation outside the stated hypotheses."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 4.1.2 and 4.1.4, printed pages 83 and 86-87 (PDF pages 89 and 92-93): dH/dt = dH/dt at fixed phase variables, energy conservation deductions, and the worked particle-in-a-potential case H = p^2/(2m) + V(r)"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 10.1, chapter pages 2-3 (PDF pages 238-239): H can change in time only via its explicit dependence on t, with H = p^2/(2m_ef) + U_ef as the elementary case"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.2, printed pages 13-15 (PDF pages 16-18): if H or L has no explicit time dependence then H is conserved; energy is conserved if E-dot = 0; H = E for velocity-quadratic kinetic energy and a velocity-independent potential, and the moving-cart example where H is not E but is conserved"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 8.2-8.3: for scleronomic systems with velocity-independent potentials the standard Lagrangian makes H = T + V an identity, and the generalized energy theorem is recovered from the Hamiltonian"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---
## Statement

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]] with the
data and conventions of [[def-cm12-cotangent-momentum]]: masses
$m_{1},\dots,m_{N}>0$, open configuration domain $Q\subseteq\mathbb R^{3N}$,
time window $I_{0}$, mass operator $\mathsf M$
([[def-cm01-configuration]]), $C^{2}$ potential
$U:I_{0}\times Q\to\mathbb R$ and residual forces $d$ of the standing
regularity ([[def-cm03-potential-and-mechanical-energy]],
[[post-cm02-force-superposition]]). Let $H$ be the Cartesian Hamiltonian and
let, for a generalized-coordinate map $X:\Omega\to Q$ with substituted
Lagrangian $\widetilde L$, kinetic metric
$G(q)=DX(q)^{\mathsf T}\mathsf M\,DX(q)$ and substituted potential
$\widetilde U(t,q)=U(t,X(q))$, the symbol $\widetilde H$ denote the
Hamiltonian in the coordinates $X$ ([[def-cm12-hamiltonian]],
[[def-cm07-generalized-coordinates-and-forces]]). Let $J\subseteq I_{0}$ be a
nonempty open interval and let $x:J\to Q$ be a $C^{2}$ curve with
$p(t):=\mathsf Mx'(t)$; write $K(t)=\tfrac12\,x'(t)\cdot\mathsf Mx'(t)$ for
the kinetic energy and $E(t):=K(t)+U\bigl(t,x(t)\bigr)$ for the mechanical
energy along $x$ ([[def-cm03-centre-of-mass-and-momenta]],
[[def-cm03-potential-and-mechanical-energy]]). Then:

1. **(the Hamiltonian is the energy)** For every $(t,x,p)\in I_{0}\times Q\times\mathbb R^{3N}$,
   $H(t,x,p)=\tfrac12\,p\cdot\mathsf M^{-1}p+U(t,x)$; consequently along every
   $C^{2}$ curve $x:J\to Q$ one has
   $H\bigl(t,x(t),p(t)\bigr)=\tfrac12\,x'(t)\cdot\mathsf Mx'(t)+U\bigl(t,x(t)\bigr)=E(t)$
   for every $t\in J$: on the Cartesian chart the Hamiltonian of the
   presentation is the model's mechanical energy.

2. **(balance and conservation)** If $x$ is a motion of the model
   ([[def-cm02-newtonian-flow]]) with evaluated residual forces
   $\mathfrak d_{i}(t):=d_{i}\bigl(t,x(t),x'(t)\bigr)$, then
   $t\mapsto H\bigl(t,x(t),p(t)\bigr)$ is differentiable on $J$ and

$$\frac{d}{dt}H\bigl(t,x(t),p(t)\bigr)=\partial_{t}U\bigl(t,x(t)\bigr)+\sum_{i=1}^{N}\bigl\langle\mathfrak d_{i}(t),\,x_{i}'(t)\bigr\rangle\qquad(t\in J);$$

   in particular, if $\partial_{t}U\equiv0$ on $I_{0}\times Q$ and
   $d\equiv0$, then $H\bigl(t,x(t),p(t)\bigr)$ is constant on $J$.

3. **(time-independent coordinates)** Let $X:\Omega\to Q$ be a
   generalized-coordinate map and let $q:J\to\Omega$ be a $C^{2}$ curve with
   $x:=X\circ q$ and $p(t):=G(q(t))q'(t)$. Then
   $\widetilde H(t,q,p)=\tfrac12\,p\cdot G(q)^{-1}p+\widetilde U(t,q)$ and

$$\widetilde H\bigl(t,q(t),p(t)\bigr)=\tfrac12\,q'(t)\cdot G\bigl(q(t)\bigr)q'(t)+\widetilde U\bigl(t,q(t)\bigr)=K(t)+U\bigl(t,x(t)\bigr)=E(t):$$

   the substituted-chart Hamiltonian of the induced configuration curve is
   the same mechanical energy of the model.

The statement is conditional on the adopted force branch and the declared
presentation; it asserts no measured value, no conservation outside the
stated hypotheses and no identity between $H$ and the mechanical energy for
charts other than those of clauses 1 and 3.

## Facts & Assumptions

**Given:** The model and presentation data, the Hamiltonian $H$ of the Cartesian branch and $\widetilde H$ of the chart of $X$, a $C^{2}$ curve $x:J\to Q$ with $p=\mathsf Mx'$, and, in clause 3, a curve $q:J\to\Omega$ with $x=X\circ q$.

[F1] Model, Lagrangian and energy data ([[def-cm07-action-and-mechanical-lagrangian]], [[def-cm03-potential-and-mechanical-energy]], [[def-cm03-centre-of-mass-and-momenta]], [[post-cm02-force-superposition]], [[def-cm01-configuration]]): $L=K-U$ with $\mathsf M$ symmetric positive definite, $U$ of class $C^{2}$ of energy dimension, the residual forces of the standing regularity, and $K(t)=\tfrac12\sum_{i}m_{i}\lvert x_{i}'(t)\rvert_{2}^{2}$ along a curve family; dimensions are read by [[def-cm01-units]].

[F2] Energy balance ([[pthm-cm03-energy-balance]]): along a motion of the model the mechanical energy $E$ is differentiable with $E'(t)=\partial_{t}U(t,x(t))+\sum_{i}\langle\mathfrak d_{i}(t),x_{i}'(t)\rangle$, and it is constant when $\partial_{t}U\equiv0$ and $d\equiv0$.

[F3] Generalized-coordinate dictionary ([[def-cm07-generalized-coordinates-and-forces]], [[thm-chain-rule-for-total-derivatives]]): $\widetilde L(t,q,v)=\tfrac12v^{\mathsf T}G(q)v-\widetilde U(t,q)$ with $G(q)=DX(q)^{\mathsf T}\mathsf M\,DX(q)$ symmetric positive definite and $\widetilde U(t,q)=U(t,X(q))$, and for a composable differentiable curve $q$ with $x=X\circ q$ the chain rule gives $x'=DX(q)q'$.

[F4] Hyperregular branch and Hamiltonian form ([[pthm-cm12-mechanical-hyperregularity]], [[def-cm12-hamiltonian]], [[def-cm12-cotangent-momentum]]): the presentation is hyperregular on the Cartesian chart and on every generalized-coordinate chart, with branch inverses $v=\mathsf M^{-1}p$ and $v=G(q)^{-1}p$, and the Hamiltonians of the branches are $H(t,x,p)=\tfrac12p\cdot\mathsf M^{-1}p+U(t,x)$ and $\widetilde H(t,q,p)=\tfrac12p\cdot G(q)^{-1}p+\widetilde U(t,q)$.

[F5] Algebra and calculus of the displayed identities ([[def-matrix-product-and-identity-matrix]], [[def-euclidean-inner-product]], [[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[def-vector-valued-derivative-and-integral]], [[def-interval]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]]): matrix products, transposes and the Euclidean pairing are those of the cited items, and the displayed cancellations $\mathsf M^{-1}\mathsf M=I$ and $(\mathsf Mx')\cdot\mathsf M^{-1}(\mathsf Mx')=x'\cdot\mathsf Mx'$ are ordinary finite algebra of matrix-vector products.



## Proof

**Proof technique:** direct; substitute the explicit inverse branch into the Legendre definition of the Hamiltonian, identify the quadratic term with the kinetic energy, and read the balance from the established energy theorem.

1.1 By [F4] the Cartesian Hamiltonian is $H(t,x,p)=\tfrac12p\cdot\mathsf M^{-1}p+U(t,x)$; along a curve with $p=\mathsf Mx'$ the quadratic term is $\tfrac12(\mathsf Mx')\cdot\mathsf M^{-1}(\mathsf Mx')=\tfrac12x'\cdot\mathsf Mx'=K(t)$ by [F1] and the matrix-vector algebra of [F5], and the potential term is $U(t,x(t))$; hence $H(t,x(t),p(t))=E(t)$, which is clause 1. [F1, F4, F5, algebra]

1.2 Clause 3: by [F4] the chart Hamiltonian is $\widetilde H(t,q,p)=\tfrac12p\cdot G(q)^{-1}p+\widetilde U(t,q)$; substituting $p=G(q)q'$ gives $\tfrac12(Gq')\cdot G^{-1}(Gq')=\tfrac12q'\cdot Gq'$ by [F5], and by [F3] the chain rule gives $x'=DX(q)q'$, whence $\tfrac12q'\cdot G(q)q'=\tfrac12(DXq')\cdot\mathsf M(DXq')=\tfrac12x'\cdot\mathsf Mx'=K(t)$, while $\widetilde U(t,q(t))=U(t,X(q(t)))=U(t,x(t))$; this proves the displayed identity and clause 3. [F3, F4, F5, algebra]

2.1 Clause 2: by [F2] the mechanical energy along a motion is differentiable with $E'(t)=\partial_{t}U(t,x(t))+\sum_{i}\langle\mathfrak d_{i}(t),x_{i}'(t)\rangle$, and is constant when $\partial_{t}U\equiv0$ and $d\equiv0$; by step 1.1 the function $t\mapsto H(t,x(t),p(t))$ equals $E$ on $J$, so it has the same derivative and the same constancy. [F2, step 1.1]

3.1 Collecting steps 1.1, 2.1 and 1.2 proves clauses 1-3 under the stated hypotheses; no identity between $H$ and the mechanical energy is asserted for any other chart. [step 1.1, step 2.1, step 1.2] ∎

## Remarks

- **Energy is chart-relative.** Clauses 1 and 3 identify the branch
  Hamiltonian with the mechanical energy for the inertial Cartesian chart and
  for time-independent generalized-coordinate charts of the model. For a
  time-dependent chart the substituted Lagrangian acquires a velocity-linear
  term, the branch Hamiltonian is $p\cdot v-L$ for the new chart data, and it
  need not equal $K+U$; the companion page computes a moving-chart example in
  which the chart Hamiltonian is conserved while the mechanical energy is not,
  so no general identity may be read off from the Legendre formula alone.

- **Balance is inherited, not reproved.** Clause 2 is the model's energy
  balance of [[pthm-cm03-energy-balance]] read through the identification of
  clause 1; the explicit time dependence of the potential and the power of the
  residual forces are the only sources, and a static potential with no
  residual forces conserves the Hamiltonian along motions. The
  representation-dependence recorded there is inherited: replacing $U$ by
  $U+c(t)$ shifts $H$ by $c(t)$ ([[def-cm12-hamiltonian]] clause (d)) and
  shifts the balance by $c'(t)$.

- **Relation to the equivalence theorem.** Clause 1 also shows that along
  solutions of the unforced Hamilton equations, $H$ is the mechanical energy
  in the inertial chart. Clause 3 of
  [[prop-cm-hamiltonian-branch-identities]] gives
  $\frac{d}{dt}H=-L_{t}=\partial_{t}U$ along those solutions; it gives
  conservation when $\partial_{t}U$ vanishes along the trajectory.
  Their identification with model motions when $d\equiv0$, and the
  corresponding forced equations when residual forces are present, are
  [[pthm-cm12-hamilton-equivalence]]. Neither statement asserts that any
  apparatus conserves energy, and neither reports a measured value.
