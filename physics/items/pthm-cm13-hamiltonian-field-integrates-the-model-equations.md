---
id: pthm-cm13-hamiltonian-field-integrates-the-model-equations
kind: physics-theorem
title: "Cartesian model motions on the potential branch and declared generalized-coordinate Lagrange equations integrate their Hamiltonian fields; the forced Cartesian field is Hamiltonian exactly when the residual force has a velocity-independent potential"
status: published
origin: session
domain: physics
dependency_level: 20
deps: [def-cm13-two-form, pthm-cm13-two-form-is-symplectic, def-cm13-hamiltonian-field, def-cm12-hamiltonian, def-cm12-cotangent-momentum, pthm-cm12-mechanical-hyperregularity, pthm-cm12-hamilton-equivalence, def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-cm02-newtonian-flow, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, def-first-order-ode-initial-value-problem-and-solution, def-ck-euclidean-maps-and-diffeomorphisms, thm-ck-euclidean-maps-closed-under-algebra-and-composition, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, thm-chain-rule-for-total-derivatives, def-matrix-product-and-identity-matrix, def-euclidean-inner-product, cor-zero-total-derivative-on-a-convex-open-set-is-constant, thm-algebra-of-derivatives]
dependency_roles:
  def-cm13-two-form: formulation-prerequisite
  pthm-cm13-two-form-is-symplectic: physical-result
  def-cm13-hamiltonian-field: formulation-prerequisite
  def-cm12-hamiltonian: formulation-prerequisite
  def-cm12-cotangent-momentum: formulation-prerequisite
  pthm-cm12-mechanical-hyperregularity: physical-result
  pthm-cm12-hamilton-equivalence: physical-result
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  cor-zero-total-derivative-on-a-convex-open-set-is-constant: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The identification of the model's Hamiltonian evolution with the integral curves of the presentation's Hamiltonian field: on the potential branch the model's motions, the solutions of Hamilton's equations for the branch Hamiltonian and the integral curves of $X_H$ coincide, and in a declared generalized-coordinate chart the declared Lagrange equations coincide with the corresponding Hamilton system; with residual forces the momentum equation carries the force as a source, and the forced field is Hamiltonian exactly when that source derives from a velocity-independent potential. The statement is a conditional deduction from the adopted force branch, the declared presentation and the cited mathematics; it makes no existence, uniqueness, completeness or empirical claim."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 4.1.2 and 4.1.3, printed pages 83-85 (PDF pages 89-91): the derivation of Hamilton's equations and the worked particle-in-a-potential case in which they are Newton's equation"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 8.2-8.3 and 15.1: the conversion of Lagrange's equations into Hamiltonian form and the phase-space form of the equations of motion"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 10.1, chapter pages 2-3 (PDF pages 238-239): $\\dot q_j=\\partial H/\\partial p_j$ and $\\dot p_j=-\\partial H/\\partial q_j$ with the recovery of the Lagrange equation"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]] with the
data, charts and Hamiltonian field of [[def-cm13-two-form]],
[[def-cm13-hamiltonian-field]]: masses $m_{1},\dots,m_{N}>0$ and open
configuration domain $Q\subseteq\mathbb R^{3N}$ with mass operator
$\mathsf M$ ([[def-cm01-configuration]]), time window $I_{0}$, $C^{2}$
potential $U$ and residual forces $d$ of the standing regularity
([[def-cm03-potential-and-mechanical-energy]],
[[post-cm02-force-superposition]], [[def-cm01-units]]), the Cartesian
Hamiltonian $H(t,x,p)=\tfrac12p\cdot\mathsf M^{-1}p+U(t,x)$ and, for a
generalized-coordinate map $X:\Omega\to Q$ with kinetic metric
$G=DX^{\mathsf T}\mathsf M\,DX$, the chart Hamiltonian
$\widetilde H(t,q,P)=\tfrac12P\cdot G(q)^{-1}P+\widetilde U(t,q)$
([[def-cm12-hamiltonian]], [[pthm-cm12-mechanical-hyperregularity]],
[[def-cm07-generalized-coordinates-and-forces]],
[[def-cm12-cotangent-momentum]]). Let $J\subseteq I_{0}$ be a nonempty open
interval. For clause 4, a time-dependent phase function is a map
$f:I_{0}\times W\to\mathbb R$ of class $C^{2}$; write $f_{t}(z):=f(t,z)$
and use [[def-cm13-hamiltonian-field]] to define the associated family of
Hamiltonian fields $t\mapsto X_{f_t}$. The forced field is called Hamiltonian
on this full chart when it equals $X_{f_t}$ for every $t\in I_{0}$. Then:

1. **(potential branch, Cartesian chart)** Assume $d\equiv0$ on the state
   domain. For a $C^{2}$ curve $x:J\to Q$ with $p(t):=\mathsf Mx'(t)$ the
   following are equivalent: (a) $x$ is a motion of the model
   ([[def-cm02-newtonian-flow]]); (b) $\dot x(t)=H_{p}(t,x(t),p(t))$ and
   $\dot p(t)=-H_{x}(t,x(t),p(t))$ for every $t\in J$; (c) the curve
   $t\mapsto(x(t),p(t))$ is an integral curve of the time-dependent field
   $t\mapsto X_{H_{t}}$, i.e. satisfies
   $\dot z(t)=X_{H_{t}}(z(t))$ with $z=(x,p)$
   ([[def-first-order-ode-initial-value-problem-and-solution]]).
2. **(generalized-coordinate chart)** Let $X:\Omega\to Q$ be a
   generalized-coordinate map and let $q:J\to\Omega$ be a $C^{2}$ curve with
   $x:=X\circ q$ and $P(t):=G(q(t))q'(t)$. Then the declared Lagrange
   equations with residual generalized force,
   $\Lambda(\widetilde L)(q)(t)=Q^{\mathrm{res}}(t,q(t),q'(t))$, are
   equivalent to
   $q'(t)=\widetilde H_{P}(t,q(t),P(t))$ and
   $P'(t)=-\widetilde H_{q}(t,q(t),P(t))+Q^{\mathrm{res}}(t,q(t),q'(t))$;
   in particular, when $d\equiv0$, they are equivalent to
   $(q,P)$ being an integral curve of $X_{\widetilde H_{t}}$.
3. **(residual forces, Cartesian chart)** For a $C^{2}$ curve $x:J\to Q$
   with $p=\mathsf Mx'$, the model's forced equation
   $\mathsf Mx''=-\nabla_{x}U(t,x)+d(t,x,x')$ holds on $J$ if and only if
   $\dot x=H_{p}$ and $\dot p=-H_{x}+d(t,x,\mathsf M^{-1}p)$ on $J$.
4. **(when is the forced field Hamiltonian?)** The forced field
   $(x,p)\mapsto\bigl(\mathsf M^{-1}p,-\nabla_{x}U(t,x)+d(t,x,\mathsf M^{-1}p)\bigr)$
   is Hamiltonian in the preceding time-dependent sense if and only if there
   is a $C^{2}$ function $V:I_{0}\times Q\to\mathbb R$ with
   $d(t,x,v)=-\nabla_{x}V(t,x)$ for every $(t,x,v)$ of the state domain; in
   that case the phase function is $H+V$ up to an independently chosen
   additive $C^2$ function of $t$ on each connected component of $Q$, and the model's forced motions are the motions of the potential
   presentation $(U+V,0)$.

The statement is conditional on the adopted force branch, the declared
presentation and the declared chart; it asserts no existence or uniqueness of
solutions, no completeness, no conservation law and no empirical content.

## Facts & Assumptions

**Given:** The model with its potential presentation and the two branch charts with their Hamiltonians and Hamiltonian fields of [[def-cm13-hamiltonian-field]].

[F1] Model and motions ([[def-cm07-action-and-mechanical-lagrangian]], [[def-cm03-potential-and-mechanical-energy]], [[post-cm02-force-superposition]], [[def-cm01-configuration]], [[def-cm01-units]], [[def-cm02-newtonian-flow]]): the force branch has the standing regularity, a motion is a curve with $m_{i}\ddot x_{i}=F_{i}(t,x,\dot x)$, and on the potential branch $F_{i}=-\nabla_{x_{i}}U+d_{i}$ with the residual forces of the standing regularity.

[F2] Branch Hamiltonians and equivalence ([[pthm-cm12-mechanical-hyperregularity]], [[def-cm12-hamiltonian]], [[pthm-cm12-hamilton-equivalence]], [[def-cm12-cotangent-momentum]], [[def-cm07-generalized-coordinates-and-forces]]): the presentation is hyperregular on both charts with $H(t,x,p)=\tfrac12p\cdot\mathsf M^{-1}p+U(t,x)$, $H_{p}=\mathsf M^{-1}p$, $H_{x}=\nabla_{x}U$, and $\widetilde H(t,q,P)=\tfrac12P\cdot G(q)^{-1}P+\widetilde U(t,q)$; when $d\equiv0$, the model's motions with $p=\mathsf Mx'$ are exactly the solutions of Hamilton's equations of $H$, the forced equation is exactly Hamilton's equations with the residual force added to the momentum source, and in a generalized-coordinate chart the declared Lagrange equations are equivalent to the Hamilton system of $\widetilde H$ with residual generalized force $Q^{\mathrm{res}}$.

[F3] Hamiltonian fields ([[def-cm13-hamiltonian-field]], [[pthm-cm13-two-form-is-symplectic]], [[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]], [[def-cm13-two-form]]): for each $t$, $H_t$ is a $C^2$ phase function and $X_{H_t}$ is the unique $C^1$ field with $\iota_{X_{H_t}}\omega=dH_t$; in the Cartesian and generalized-coordinate charts its components are $(H_p,-H_x)$ and $(\widetilde H_P,-\widetilde H_q)$. For a joint $C^2$ phase function $f:I_0\times W\to\mathbb R$, each frozen-time function $f_t$ is $C^2$ and has the field $X_{f_t}$ defined in [[def-cm13-hamiltonian-field]]; a solution of the time-dependent field is a curve satisfying $\dot z(t)=X_{H_t}(z(t))$.

[F4] Calculus ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[def-matrix-product-and-identity-matrix]], [[def-euclidean-inner-product]], [[cor-zero-total-derivative-on-a-convex-open-set-is-constant]], [[thm-algebra-of-derivatives]]): $C^{2}$ classes are closed under the displayed algebra and composition, gradients and partial derivatives are computed by the ordinary product and chain rules, $\nabla_{p}\bigl(\tfrac12p\cdot\mathsf M^{-1}p\bigr)=\mathsf M^{-1}p$ because $\mathsf M^{-1}$ is symmetric, and a totally differentiable function with vanishing total derivative on a convex open set is constant.

## Proof

**Proof technique:** direct. Read the displayed field of [F3] as the Hamilton system of [F2], transfer the equivalence theorem [F2] to the field language, and settle clause 4 by comparing the two components of the forced field with a Hamiltonian field.

1.1 By [F3] the field of the branch Hamiltonian is $X_{H_{t}}(z)=\bigl(H_{p}(t,z),-H_{x}(t,z)\bigr)$, and by [F2] these entries are $\mathsf M^{-1}p$ and $-\nabla_{x}U(t,x)$; hence for a $C^{1}$ curve $z=(x,p)$ the identity $\dot z(t)=X_{H_{t}}(z(t))$ is literally the system of clause 1(b), and clauses 1(b) and 1(c) are the same statement. [F2, F3, algebra]

1.2 By [F2] the equivalence theorem for the potential branch states that $x$ is a motion if and only if $(x,p)$ with $p=\mathsf Mx'$ satisfies Hamilton's equations of $H$; this is clauses 1(a) and 1(b). [F2, given]

1.3 Clause 2: by [F2] the declared Lagrange equations are equivalent to the Hamilton system of $\widetilde H$ with the residual generalized force added, and by [F3] applied in the coordinates $X$ the Hamiltonian entries are $\widetilde H_{P}$ and $-\widetilde H_{q}$, so that system is exactly the system displayed in clause 2; when $d\equiv0$ it is the integral-curve equation of $X_{\widetilde H_{t}}$. [F2, F3, algebra]

1.4 Clause 3: the forced equation $\mathsf Mx''=-\nabla_{x}U(t,x)+d(t,x,x')$ with $p=\mathsf Mx'$ is, by [F2], equivalent to $\dot x=H_{p}$ together with $\dot p=-H_{x}+d(t,x,\mathsf M^{-1}p)$, since $\dot p=\mathsf Mx''$ and $H_{p}=\mathsf M^{-1}p=x'$; this is the claim. [F2, algebra]

1.5 Clause 4, sufficiency: if $d(t,x,v)=-\nabla_{x}V(t,x)$ with $V$ of class $C^{2}$, then $f:=H+V$ belongs to $C^{2}(I_0\times W)$ by [F4] and its frozen-time Hamiltonian fields have components $f_{p}=\mathsf M^{-1}p$ and $-f_{x}=-\nabla_{x}U-\nabla_{x}V=-\nabla_{x}U+d$, which is the forced field; adding an independently chosen $C^2$ function of $t$ on each connected component of $Q$ changes neither spatial nor momentum gradient and gives the same field. [F2, F3, F4, algebra]

2.1 Clause 1: step 1.2 identifies clauses 1(a) and 1(b), and step 1.1 identifies clauses 1(b) and 1(c); hence all three are equivalent. [step 1.1, step 1.2]

2.2 Clause 4, necessity: suppose the forced field equals $X_{f_t}$ for some $f\in C^{2}(I_0\times W)$. Comparing first components gives $f_{p}(t,x,p)=\mathsf M^{-1}p$, so $\nabla_{p}\bigl(f-\tfrac12p\cdot\mathsf M^{-1}p\bigr)=0$; for each fixed $(t,x)$ the map $p\mapsto f(t,x,p)-\tfrac12p\cdot\mathsf M^{-1}p$ has vanishing total derivative on the convex open set $\mathbb R^{3N}$, so by [F4] it is constant, and evaluating at $p=0$ gives $f(t,x,p)=\tfrac12p\cdot\mathsf M^{-1}p+g(t,x)$ with $g(t,x):=f(t,x,0)$ of class $C^{2}$ by [F4]; comparing second components gives $-\nabla_xU+d=-\nabla_xg$, hence $d(t,x,v)=-\nabla_x(g-U)(t,x)$ for every state, so the asserted velocity-independent potential is $V:=g-U$. For any fixed admissible $V$, two phase functions producing this same field have difference with both spatial and momentum gradients zero; by the componentwise constancy argument of [[def-cm03-potential-and-mechanical-energy]] clause (c), that difference is a $C^2$ function of $t$ on each connected component of $Q\times\mathbb R^{3N}$, namely each $C\times\mathbb R^{3N}$; the model's forced equation is then $\mathsf Mx''=-\nabla_{x}(U+V)(t,x)$, the equation of the potential presentation with potential $U+V$ and vanishing residual forces. [step 1.5, F1, F2, F4, algebra]

3.1 Collecting: clause 1 is step 2.1, clause 2 is step 1.3, clause 3 is step 1.4, and clause 4 follows from steps 1.5 and 2.2 in the two directions; this proves the statement. [step 2.1, step 1.3, step 1.4, step 1.5, step 2.2] ∎

## Remarks

- **No solution theory is asserted.** The theorem compares three descriptions of the same first-order equations; existence, uniqueness and maximal domains of solutions are provided separately by the model's initial-value theory and by the ordinary ODE theory used on the later items of this page.

- **Why clause 4 matters.** It delimits the model's Hamiltonian branch: a residual force contributes a Hamiltonian field only when it derives from a potential independent of the velocity slot, which is why the flow and volume-preservation items below state the potential branch explicitly.
