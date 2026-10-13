---
id: pthm-cm14-hamilton-jacobi-characteristics
kind: physics-theorem
title: "A complete integral of the model's Hamilton-Jacobi equation produces chart Hamiltonian characteristics, Jacobi constants and local canonical $(\\beta,\\alpha)$ labels"
status: draft
origin: pipeline
domain: physics
dependency_level: 21
deps: [def-cm14-hamilton-jacobi-equation, def-cm14-complete-integral, thm-cm-hamilton-jacobi-characteristics-from-a-complete-integral, def-cm12-hamiltonian, pthm-cm12-mechanical-hyperregularity, pthm-cm12-hamilton-equivalence, pthm-cm13-hamiltonian-field-integrates-the-model-equations, def-cm12-cotangent-momentum, def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-cm02-newtonian-flow, def-cm13-two-form, pthm-cm13-two-form-is-symplectic, def-cm13-canonical-form, def-first-order-ode-initial-value-problem-and-solution, thm-picard-lindelof-local-existence-and-uniqueness, thm-euclidean-inverse-function-theorem, thm-local-coordinate-formula-for-the-exterior-derivative, thm-the-exterior-derivative-squares-to-zero, def-smooth-differential-k-form, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-total-derivative-in-euclidean-space, def-determinant-of-a-square-matrix, def-matrix-product-and-identity-matrix, def-invertible-euclidean-linear-map, cor-hessian-is-symmetric, def-interval, def-metric-topology]
dependency_roles:
  def-cm14-hamilton-jacobi-equation: formulation-prerequisite
  def-cm14-complete-integral: formulation-prerequisite
  thm-cm-hamilton-jacobi-characteristics-from-a-complete-integral: mathematical-premise
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm12-mechanical-hyperregularity: physical-result
  pthm-cm12-hamilton-equivalence: physical-result
  pthm-cm13-hamiltonian-field-integrates-the-model-equations: physical-result
  def-cm12-cotangent-momentum: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm13-two-form: formulation-prerequisite
  pthm-cm13-two-form-is-symplectic: physical-result
  def-cm13-canonical-form: formulation-prerequisite
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
  thm-the-exterior-derivative-squares-to-zero: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-invertible-euclidean-linear-map: mathematical-premise
  cor-hessian-is-symmetric: mathematical-premise
  def-interval: mathematical-premise
  def-metric-topology: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The characteristics theorem of the Hamilton-Jacobi method for a declared hyperregular potential presentation of the framework's force branch: from a complete integral of the presentation's Hamilton-Jacobi equation in a fixed momentum chart, the characteristic curves of the equation solve the chart's Hamilton equations; when $d\equiv0$, Cartesian characteristics are motions of the model and generalized-coordinate characteristics solve the substituted Lagrange equations; the derivatives of the complete integral in the parameters are constant along them; a local converse solves the constants equation for the configuration; and the Jacobi data are local canonical coordinates of the presentation's two-form. The statement is a conditional deduction from the adopted force branch, the declared presentation and the cited mathematics; it is local in the time, configuration and parameter variables, assumes the nondegeneracy of the mixed derivative at the base point only, and asserts no global solution, no completeness and no empirical content."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 4.7, printed pages 121-126 (PDF pages 127-132): from a solution $W$ of the Hamilton-Jacobi equation the flow with $q$-dot $=H_p$ and $p=W_q$ satisfies the second Hamilton equation, and the constants carried by the family"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 15.4: Jacobi's complete integral, its constants and their use in reconstructing the motion"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Chapter 6, Sections 6.1-6.1.4: the complete-integral strategy and the action as the generating function of time evolution; the treatment is local in character and states no caustic condition"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 4, Sections 4.1-4.6, printed pages 60-91 (PDF pages 63-94): generating functions, Hamilton-Jacobi separation and local action conventions"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]] with the
data and conventions of [[def-cm12-cotangent-momentum]]: masses
$m_{1},\dots,m_{N}>0$, open configuration domain $Q\subseteq\mathbb R^{3N}$,
time window $I_{0}$, mass operator $\mathsf M$
([[def-cm01-configuration]]), $C^{2}$ potential $U$ and residual forces $d$
of the standing regularity ([[def-cm03-potential-and-mechanical-energy]],
[[post-cm02-force-superposition]]), the presentation being hyperregular on
its charts ([[pthm-cm12-mechanical-hyperregularity]],
[[def-cm12-hamiltonian]]). Fix one momentum chart of the presentation
(Cartesian coordinates $(t,x,p)$, or the chart $(t,q,p)$ of a
generalized-coordinate map $X:\Omega\to Q$
([[def-cm07-generalized-coordinates-and-forces]])), with $m$ pairs of
coordinates and Hamiltonian $H$ of class $C^{2}$ on
$J_{0}\times V\times\mathbb R^{m}$; let $S:J\times U\times A\to\mathbb R$
be a $C^{3}$ complete integral of the model's Hamilton-Jacobi equation at
$(t_{0},q_{0},\alpha_{0})\in J\times U\times A$ in the sense of
[[def-cm14-hamilton-jacobi-equation]] and [[def-cm14-complete-integral]]
($J\subseteq J_{0}$, $U\subseteq V$, $A\subseteq\mathbb R^{m}$ open), and
put

$$\beta_{0}:=S_{\alpha}(t_{0},q_{0},\alpha_{0}).$$

Then:

1. **(characteristic curves)** For every $\alpha$ sufficiently close to
   $\alpha_{0}$ there is an open interval $I_{\alpha}\ni t_{0}$ and a
   $C^{1}$ curve $q:I_{\alpha}\to U$ with $q(t_{0})=q_{0}$ solving
   $q'(t)=H_{p}\bigl(t,q(t),S_{q}(t,q(t),\alpha)\bigr)$, and with
   $p(t):=S_{q}(t,q(t),\alpha)$ the pair $(q,p)$ satisfies Hamilton's
   equations $q'=H_{p}$, $p'=-H_{q}$ on $I_{\alpha}$. If the chart is the
   Cartesian chart and $d\equiv0$ on the state domain, then $x:=q$ is a
   motion of the model on $I_{\alpha}$ and $p(t)=\mathsf Mx'(t)$
   ([[def-cm02-newtonian-flow]], [[def-cm12-cotangent-momentum]]); if the
   chart is the chart of a generalized-coordinate map and $d\equiv0$, then
   $q$ solves the declared Lagrange equations of the substituted
   Lagrangian and $p(t)=G(q(t))q'(t)$
   ([[def-cm07-generalized-coordinates-and-forces]],
   [[pthm-cm12-hamilton-equivalence]]).
2. **(Jacobi constants)** With $(q,p)$ as in clause 1,
   $\beta(t):=S_{\alpha}(t,q(t),\alpha)$ is constant on $I_{\alpha}$ and
   equal to $S_{\alpha}(t_{0},q_{0},\alpha)$.
3. **(local converse)** For $(\alpha,\beta)$ sufficiently close to
   $(\alpha_{0},\beta_{0})$ the equation $\beta=S_{\alpha}(t,q,\alpha)$
   can be solved locally for $q=Q(t,\alpha,\beta)$, and with
   $p:=S_{q}\bigl(t,Q(t,\alpha,\beta),\alpha\bigr)$ the curve
   $t\mapsto(Q,p)$ solves Hamilton's equations; in the Cartesian chart on
   the potential branch it is the momentum-phase curve of a motion of the
   model.
4. **(canonical labels)** On the domain of the local diffeomorphism
   $(q,p)\mapsto(\beta,\alpha)$ obtained by composing
   $(q,p)\mapsto(q,\alpha)$ (solving $p=S_{q}$) with
   $(q,\alpha)\mapsto(\beta,\alpha)$, one has
   $\omega=d\beta\wedge d\alpha$ at every fixed $t$, where $\omega$ is the
   two-form of the presentation in this chart
   ([[def-cm13-two-form]]); equivalently, $(\beta,\alpha)$ are canonical
   coordinates of the presentation in the sense of clause (a) of
   [[def-cm13-canonical-form]].

## Facts & Assumptions

**Given:** The potential presentation with the fixed momentum chart, its
$C^{2}$ Hamiltonian $H$, the open sets $J,U,A$, the $C^{3}$ complete
integral $S$ at $(t_{0},q_{0},\alpha_{0})$, and $\beta_{0}=S_{\alpha}(t_{0},q_{0},\alpha_{0})$.

[F1] Complete-integral data ([[def-cm14-hamilton-jacobi-equation]],
[[def-cm14-complete-integral]]): $S_{t}+H(t,q,S_{q})=0$ on $J\times U\times A$;
$S$ is $C^{3}$, so all its second derivatives used below are continuous;
$\det S_{q\alpha}(t_{0},q_{0},\alpha_{0})\ne0$; and $H$ is $C^{2}$ on its
open domain.

[F2] Mathematical characteristics theorem
([[thm-cm-hamilton-jacobi-characteristics-from-a-complete-integral]]):
applied to the $C^{2}$ function $H$ and the $C^{3}$ complete integral $S$ of
[F1], it yields for the chart's Hamilton system $q'=H_{p}$, $p'=-H_{q}$
the four clauses: existence of the characteristic curve $q$ with
$p=S_{q}$ solving Hamilton's equations; constancy of
$\beta=S_{\alpha}$ along it; local solvability of $\beta=S_{\alpha}$ for
$q$, with the resulting curve solving Hamilton's equations; and the
identity $dq\wedge dp=d\beta\wedge d\alpha$ at fixed $t$ on the domain of
the local diffeomorphism $(q,p)\mapsto(\beta,\alpha)$.

[F3] Model identification ([[pthm-cm12-hamilton-equivalence]] clauses 1
and 3, [[pthm-cm13-hamiltonian-field-integrates-the-model-equations]]
clause 1, [[def-cm02-newtonian-flow]], [[def-cm12-cotangent-momentum]]):
on the potential branch $d\equiv0$ and in the Cartesian chart, a $C^{2}$
curve $x$ is a motion of the model exactly when $(x,p)$ with
$p(t)=\mathsf Mx'(t)$ satisfies $x'=H_{p}$, $p'=-H_{x}$; in a
generalized-coordinate chart with $d\equiv0$, a $C^{2}$ curve $q$ solves
the declared Lagrange equations of the substituted Lagrangian exactly when
$(q,P)$ with $P(t)=G(q(t))q'(t)$ satisfies $q'=\widetilde H_{P}$,
$P'=-\widetilde H_{q}$.

[F4] Canonical form of the presentation's two-form
([[pthm-cm13-two-form-is-symplectic]] clauses 1 and 2,
[[def-cm13-canonical-form]] clauses (a) and (b),
[[def-cm13-two-form]]): in each of the presentation's own momentum charts
the two-form reads $\omega=\sum_{a=1}^{m}dq^{a}\wedge dp_{a}$, so the
chart coordinates are canonical coordinates, and a change of coordinates
$(\beta,\alpha)$ in which $\omega=d\beta\wedge d\alpha$ is a canonical
chart in the sense of [[def-cm13-canonical-form]] clause (a).

## Proof

**Proof technique:** direct; instantiate the mathematical characteristics
theorem for the chart Hamiltonian and read its conclusions through the
model identification and the canonical form of the presentation's
two-form.

1.1 Clause 1 for the Hamilton system: by [F1] the hypotheses of [F2] are satisfied, so for every $\alpha$ close to $\alpha_{0}$ there is an open interval $I_{\alpha}\ni t_{0}$ and a $C^{1}$ curve $q:I_{\alpha}\to U$ with $q(t_{0})=q_{0}$, $q'=H_{p}(t,q,S_{q}(t,q,\alpha))$, and with $p:=S_{q}(t,q,\alpha)$ the pair $(q,p)$ solves $q'=H_{p}$, $p'=-H_{q}$ on $I_{\alpha}$. [F1, F2]

2.1 Model reading of clause 1: on the potential branch $d\equiv0$ in the Cartesian chart, the curve $x:=q$ is $C^{1}$ with $x'=H_{p}$ and $p=S_{q}$; the first Hamilton equation reads $\mathsf M^{-1}p=x'$, so $p(t)=\mathsf Mx'(t)$, and clause 1 of [F3] upgrades $x$ to a $C^{2}$ motion of the model on $I_{\alpha}$. In a generalized-coordinate chart with $d\equiv0$, put $P:=p$; then $q'=\widetilde H_{P}$ and $P'=-\widetilde H_{q}$, and clause 3 of [F3] shows that $q$ solves the declared Lagrange equations and $P(t)=G(q(t))q'(t)$. [step 1.1, F3]

2.2 Clause 2: by [F2], $\beta(t)=S_{\alpha}(t,q(t),\alpha)$ is constant on $I_{\alpha}$ and equal to $S_{\alpha}(t_{0},q_{0},\alpha)$; the value $\beta_{0}=S_{\alpha}(t_{0},q_{0},\alpha_{0})$ is the labelled constant for the characteristic through the base point. [F1, F2, step 1.1]

3.1 Clause 3: by [F2], the equation $\beta=S_{\alpha}(t,q,\alpha)$ is locally solvable for $q=Q(t,\alpha,\beta)$ near $(t_{0},\alpha_{0},\beta_{0})$, and the curve with $p=S_{q}(t,Q,\alpha)$ solves Hamilton's equations; the model reading is clause 1 of [F3] exactly as in step 2.1, now for the curve $Q$. [F1, F2, step 2.1]

4.1 Clause 4: by [F2] the map $(q,p)\mapsto(\beta,\alpha)$ is a local diffeomorphism near the base point and $dq\wedge dp=d\beta\wedge d\alpha$ holds at fixed $t$ on its domain; by [F4] the chart coordinates $(q,p)$ are canonical for the presentation's two-form, so $\omega=\sum_{a}dq^{a}\wedge dp_{a}=dq\wedge dp$ there; substituting gives $\omega=d\beta\wedge d\alpha$, and [F4] identifies $(\beta,\alpha)$ as canonical coordinates of the presentation in the sense of [[def-cm13-canonical-form]]; the local diffeomorphism used here is the one established in step 3.1. [F2, F4, step 3.1, algebra]

5.1 Collection: clauses 1-4 of the statement are steps 1.1, 2.1, 2.2, 3.1 and 4.1 respectively; this proves the statement. [step 1.1, step 2.1, step 2.2, step 3.1, step 4.1] ∎

## Remarks

- **Locality is exactly the content of the nondegeneracy hypothesis.** The
  characteristic curve in clause 1 exists for parameters $\alpha$ near
  $\alpha_{0}$ and on an interval $I_{\alpha}\ni t_{0}$ supplied by the
  local theory; clause 3 is local near
  $(t_{0},\alpha_{0},\beta_{0})$. No solution is extended across a
  conjugate time or a caustic, and no global statement about the family of
  characteristics is made.

- **The constants carry momentum dimensions.** With the reading of clause
  (b) of [[def-cm14-complete-integral]], the Jacobi constants
  $\beta=S_{\alpha}$ have the momentum-type dimensions of the chart's
  canonical momenta, and clause 4 says that $(\beta,\alpha)$ is a
  canonical chart for the presentation's two-form; this is the precise
  content of the textbook statement that the integration constants of a
  complete integral provide $2m$ constants of the motion in canonical
  pairs.
