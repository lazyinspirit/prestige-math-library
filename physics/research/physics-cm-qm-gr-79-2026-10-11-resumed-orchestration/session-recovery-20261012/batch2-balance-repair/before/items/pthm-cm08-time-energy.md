---
id: pthm-cm08-time-energy
kind: physics-theorem
title: "Time translation and the mechanical energy of the model: conservation in the autonomous global potential branch and the sharp failure for a time-dependent potential"
status: draft
origin: session
domain: physics
dependency_level: 17
deps: [def-cm08-symmetry-of-the-mechanical-lagrangian, pthm-cm08-general-noether, pthm-cm03-energy-balance, def-cm02-newtonian-flow, post-cm02-force-superposition, def-cm03-potential-and-mechanical-energy, def-cm07-action-and-mechanical-lagrangian, def-cm-time-dependent-lagrangian-and-action, def-cm01-configuration, def-cm01-units, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, cor-zero-derivative-implies-constant, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  def-cm08-symmetry-of-the-mechanical-lagrangian: formulation-prerequisite
  pthm-cm08-general-noether: physical-result
  pthm-cm03-energy-balance: physical-result
  def-cm02-newtonian-flow: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Time translation as a symmetry datum of the force model with a declared potential presentation: the datum (tau,xi,B)=(1,0,0) satisfies the model's Noether identity exactly when the potential has no explicit time dependence; in the global potential branch with an autonomous potential the mechanical energy K+U is constant along every motion; and if the potential depends explicitly on time at a state, then the maximal motion through that state has nonvanishing energy derivative there, so the energy is not conserved. The statement is conditional on the adopted force branch and the declared presentation; the sharpness clause uses the maximal-motion existence theorem, and no empirical content is asserted."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.4.1 'Homogeneity of Time', printed page 26 (PDF page 32): for a Lagrangian with no explicit time dependence the function H = sum qdot_j p_j - L is constant, identified with the total energy for the systems considered"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 2.3, chapter pages 7-8 (PDF pages 26-27): dH/dt = -dL/dt explicitly, so H is an integral of motion when the Lagrangian has no explicit time dependence, while the mechanical energy need not coincide with H"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.3, printed page 15 (PDF page 18): if H has no explicit time dependence then H is conserved, and energy is conserved when the energy is time independent"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], with
masses $m_{1},\dots,m_{N}>0$, open configuration domain $Q\subseteq\mathbb R^{3N}$,
time window $I_{0}$, mass operator $\mathsf M$ and $U$ of
[[def-cm03-potential-and-mechanical-energy]], and let

$$E(t,x,v):=K(v)+U(t,x)=\frac12\,v\cdot\mathsf M v+U(t,x)$$

be the model's mechanical energy function. Consider the datum
$\tau\equiv1$, $\xi\equiv0$, $B\equiv0$ of
[[def-cm08-symmetry-of-the-mechanical-lagrangian]]. Then:

1. **(the identity).** The datum satisfies the model's Noether identity on
   $O$ if and only if $\partial_{t}U\equiv0$ on $I_{0}\times Q$; its charge is
   the function $-E$.
2. **(conservation).** If $d\equiv0$ and $\partial_{t}U\equiv0$, then for
   every motion $x:J\to Q$ of the model on an interval $J$ with nonempty
   interior ([[def-cm02-newtonian-flow]]), the function
   $t\mapsto E\bigl(t,x(t),x'(t)\bigr)=K(x'(t))+U(t,x(t))$ is constant on $J$.
3. **(sharpness).** If $d\equiv0$ and there is a state $(t_{0},x_{0})\in I_{0}\times Q$
   with $\partial_{t}U(t_{0},x_{0})\ne0$, then the maximal motion
   $x_{\max}:J_{\max}\to Q$ of the model through the initial datum
   $(t_{0},x_{0},0)$ satisfies
   $\frac{d}{dt}\bigl(K(x_{\max}')+U(\cdot,x_{\max})\bigr)|_{t_{0}}=\partial_{t}U(t_{0},x_{0})\ne0$,
   and the mechanical energy is not constant on $J_{\max}$.

The conservation clause is the energy case of the model's Noether identity and
is conditional on the adopted force branch, the declared representative $U$ and
the absence of residual forces; the sharpness clause shows that explicit time
dependence of the declared representative destroys conservation along an actual
motion. No empirical content is asserted.

## Facts & Assumptions

**Given:** The model, the presentation $(U,d)$, the mechanical energy function $E$, and the motions and state of the clauses.

[F1] Model data, chart and charge dictionary ([[def-cm07-action-and-mechanical-lagrangian]], [[def-cm03-potential-and-mechanical-energy]], [[def-cm08-symmetry-of-the-mechanical-lagrangian]], [[def-cm-time-dependent-lagrangian-and-action]], [[def-cm01-configuration]]): $O=I_{0}\times Q\times\mathbb R^{3N}$ is open and $(O,L)$ is a time-dependent Lagrangian chart over every $[a,b]\times Q$ with $[a,b]\subseteq I_{0}$; $L=K-U$ with $K(v)=\frac12v\cdot\mathsf M v$ independent of $t$ and $x$, so $L_{t}=-U_{t}$ and the mechanical energy function is $E=L_{v}\cdot v-L=K+U$; the charge of a datum $(\tau,\xi,B)$ is $(\mathsf M v)\cdot\xi-E\tau-B$.

[F2] The general Noether theorem of the model ([[pthm-cm08-general-noether]]): if a symmetry datum satisfies the model identity on $O$ and $d\equiv0$, then its charge is constant along every motion; at $\xi\equiv0$, $\tau\equiv1$, $B\equiv0$ the model identity holds on $O$ if and only if $\partial_{t}U\equiv0$ on $I_{0}\times Q$, and the charge is $-E$.

[F3] Energy balance of the model ([[pthm-cm03-energy-balance]] clause 1, [[post-cm02-force-superposition]]): along a motion of the presentation $(U,d)$ the mechanical energy is differentiable with $E'(t)=\partial_{t}U(t,x(t))+\sum_{i}\langle d_{i}(t,x(t),x'(t)),x_{i}'(t)\rangle$; with $d\equiv0$ this reduces to $E'(t)=\partial_{t}U(t,x(t))$.

[F4] Motions and maximal motions ([[def-cm02-newtonian-flow]]): a motion $x:J\to Q$ is $C^{2}$ with $J\subseteq I_{0}$ and $\mathsf M x''=-\nabla_{x}U+d$ on $J$; through every initial datum $(t_{0},x_{0},v_{0})$ there is exactly one maximal motion, its maximal interval is an open interval containing $t_{0}$ and contained in $I_{0}$, and every motion with the same datum is its restriction.

[F5] Calculus and dimensions ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-vector-valued-derivative-and-integral]], [[def-interval]], [[cor-zero-derivative-implies-constant]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-euclidean-inner-product]], [[def-cm01-units]]): $E$ is of the stated regularity along motions; a $C^{1}$ function on the interval $J_{\max}$ whose derivative vanishes everywhere is constant, and a function that is constant on $J_{\max}$ has zero derivative at every point of $J_{\max}$; all quantities carry their declared dimensions.

## Proof

**Proof technique:** direct; evaluate the model identity at the time-translation datum, transfer the conservation clause through the model's general Noether theorem and the sharpness clause through the energy balance along the maximal motion.

1.1 Clause 1, evaluation of the identity: at the datum $\tau\equiv1$, $\xi\equiv0$, $B\equiv0$ the left-hand side of the model identity of [[def-cm08-symmetry-of-the-mechanical-lagrangian]] clause (a) is $L_{t}\cdot1+0+0+L\cdot0=L_{t}$ and the right-hand side is $D_{t}B=0$, so the identity holds on $O$ if and only if $L_{t}\equiv0$; by [F1], $L_{t}=-U_{t}$, so this is equivalent to $\partial_{t}U\equiv0$ on $I_{0}\times Q$, and the charge is $(\mathsf M v)\cdot0-E\cdot1-0=-E$. This is exactly the specialisation recorded in clause 2 of [F2]. [F1, F2, algebra]

1.2 Clause 3, the derivative of the energy: let $(t_{0},x_{0})\in I_{0}\times Q$ and let $x_{\max}:J_{\max}\to Q$ be the maximal motion through $(t_{0},x_{0},0)$, which exists and has open $J_{\max}\ni t_{0}$ by [F4]; since $d\equiv0$, [F3] gives that the function $t\mapsto E(t,x_{\max}(t),x_{\max}'(t))$ is differentiable on $J_{\max}$ with derivative $\partial_{t}U(t,x_{\max}(t))$ at every $t\in J_{\max}$, in particular at $t_{0}$ its derivative is $\partial_{t}U(t_{0},x_{0})$. [F3, F4, given]

2.1 Clause 2, conservation: assume $d\equiv0$ and $\partial_{t}U\equiv0$; by step 1.1 the datum satisfies the model identity on $O$, so clause 1 of [F2] applies to every motion and gives that the charge $-E$ is constant along it; hence $E$ is constant on $J$. [F2, step 1.1, given]

2.2 Clause 3, non-constancy: with $d\equiv0$ and $\partial_{t}U(t_{0},x_{0})\ne0$, step 1.2 gives that the derivative of the mechanical energy along $x_{\max}$ at $t_{0}$ equals $\partial_{t}U(t_{0},x_{0})\ne0$; were the energy constant on $J_{\max}$, its derivative would vanish at every point of $J_{\max}$ by [F5], a contradiction. [F5, step 1.2]

3.1 Clause 1 is step 1.1, clause 2 is step 2.1 and clause 3 is steps 1.2 and 2.2; the conservation clause is the energy case of the model's Noether identity, the sharpness clause exhibits the failure of conservation along an actual motion, and no existence of additional symmetry data is asserted. [step 1.1, step 2.1, step 2.2] ∎

## Remarks

- **Why the two clauses are sharp together.** Clause 1 is an equivalence at the
  level of the identity: the datum satisfies the model identity exactly for
  autonomous representatives of the potential. Clause 3 shows that a
  time-dependent representative does not merely fail to supply the Noether
  hypothesis: along a motion through a state where the explicit time dependence
  is nonzero, the energy derivative is nonzero there, so the failure is
  observable inside the model. This is a statement about the declared
  representative; the representative is part of the presentation
  ([[def-cm03-potential-and-mechanical-energy]] clause (c)) and is named in
  every energy statement.

- **Residual forces.** For a presentation with $d\not\equiv0$ the rate formula
  of [[pthm-cm03-energy-balance]] clause 1 applies verbatim; the energy is then
  not conserved in general even for an autonomous potential, and the general
  Noether theorem of this page records how a residual force enters the charge
  rates of symmetry data. No separate energy identity is claimed here beyond
  the cited balance.

- **Empirical status.** The word "energy" here denotes the mechanical energy
  function $K+U$ of the declared presentation, a model object. Its conservation
  is a deduction inside the model under the stated hypotheses; it is not a
  report of a measurement and does not by itself assert that any physical
  system has an autonomous potential presentation.
