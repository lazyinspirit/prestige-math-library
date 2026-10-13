---
id: pthm-cm12-hamilton-equivalence
kind: physics-theorem
title: "Hamilton's equations of the mechanical presentation are equivalent to the model's equation of motion, with residual forces as momentum sources and the coordinate form on every chart"
status: published
origin: session
domain: physics
dependency_level: 18
deps: [def-cm12-cotangent-momentum, def-cm12-hamiltonian, pthm-cm12-mechanical-hyperregularity, def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, post-cm06-ideal-reaction-law, def-cm01-configuration, def-cm01-units, def-cm02-newtonian-flow, def-cm06-holonomic-constraint-model, pthm-cm07-euler-lagrange-equations, pthm-cm07-newton-equivalence, pthm-cm07-lagrangian-reduction-of-ideal-constraints, prop-cm-hamiltonian-branch-identities, thm-cm-stationarity-iff-euler-lagrange, def-cm-time-dependent-lagrangian-and-action, def-ck-euclidean-maps-and-diffeomorphisms, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-vector-valued-derivative-and-integral, def-interval, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives]
dependency_roles:
  def-cm12-cotangent-momentum: formulation-prerequisite
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm12-mechanical-hyperregularity: physical-result
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  post-cm06-ideal-reaction-law: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm06-holonomic-constraint-model: formulation-prerequisite
  pthm-cm07-euler-lagrange-equations: physical-result
  pthm-cm07-newton-equivalence: physical-result
  pthm-cm07-lagrangian-reduction-of-ideal-constraints: physical-result
  prop-cm-hamiltonian-branch-identities: mathematical-premise
  thm-cm-stationarity-iff-euler-lagrange: mathematical-premise
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The equivalence between the Hamiltonian evolution of a declared potential presentation of the force branch and the model's equations of motion: on the potential branch the motions, the solutions of Hamilton's equations for the explicit branch Hamiltonian and the stationary curves of the action coincide; with residual forces the model's equation is equivalent to Hamilton's equations with the residual force as a momentum source; in a declared generalized-coordinate chart the declared Lagrange equations are equivalent to the Hamilton system, and for a scleronomic regular holonomic-constraint parametrization to the ideal constrained motion. The statement is a conditional deduction from the adopted force branch, the presentation and the cited mathematics; it makes no existence, uniqueness or empirical claim."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 4.1.2-4.1.3, printed pages 83-84 (PDF pages 89-90): Hamilton's equations and the worked particle-in-a-potential case in which they are the definition of momentum and Newton's equation"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 10.1, chapter pages 2-3 (PDF pages 238-239): qdot = p/m_ef and pdot = -dU_ef/dq, followed by the recovery of the Lagrange equation"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.2, printed pages 8-9 (PDF pages 11-12): qdot_i = dH/dp_i and pdot_i = -dH/dq_i, with the first equation an inversion of the momentum definition and the second providing the Newtonian dynamics"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 8.3: Hamilton's equations of motion use either a minimal set of generalized coordinates, the Lagrange multiplier terms for holonomic constraints, or generalized forces to account for other forces"
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
[[post-cm02-force-superposition]]). Let $H$ be the Cartesian Hamiltonian of
[[def-cm12-hamiltonian]], let $X:\Omega\to Q$ be a generalized-coordinate map
with substituted Lagrangian $\widetilde L$, kinetic metric
$G(q)=DX(q)^{\mathsf T}\mathsf M\,DX(q)$, substituted potential
$\widetilde U(t,q)=U(t,X(q))$ and residual generalized force
$Q^{\mathrm{res}}(t,q,v)=DX(q)^{\mathsf T}d(t,X(q),DX(q)v)$, and let
$\widetilde H$ be the Hamiltonian in the coordinates $X$
([[def-cm07-generalized-coordinates-and-forces]],
[[def-cm12-hamiltonian]]). Let $J\subseteq I_{0}$ be a nonempty open interval
and let $x:J\to Q$ be a $C^{2}$ curve, with $p(t):=\mathsf Mx'(t)$
([[def-cm12-cotangent-momentum]]). Then:

1. **(potential branch)** Assume $d\equiv0$ on the state domain. The following
   are equivalent:
   (a) $x$ is a motion of the model on $J$
   ([[def-cm02-newtonian-flow]]);
   (b) $(x,p)$ satisfies $x'(t)=H_{p}\bigl(t,x(t),p(t)\bigr)$ and
   $p'(t)=-H_{x}\bigl(t,x(t),p(t)\bigr)$ for every $t\in J$;
   (c) for all reals $a<b$ with $[a,b]\subseteq J$ the restriction
   $x|_{[a,b]}$ is stationary for the action $S$ of $L$ on $[a,b]$
   ([[def-cm-time-dependent-lagrangian-and-action]],
   [[pthm-cm07-euler-lagrange-equations]]).

2. **(residual forces)** For a $C^{2}$ curve $x:J\to Q$ with
   $p(t)=\mathsf Mx'(t)$ the following are equivalent:
   (a) $\mathsf Mx''(t)=-\nabla_{x}U\bigl(t,x(t)\bigr)+d\bigl(t,x(t),x'(t)\bigr)$
   for every $t\in J$;
   (b) $x'(t)=H_{p}\bigl(t,x(t),p(t)\bigr)$ and
   $p'(t)=-H_{x}\bigl(t,x(t),p(t)\bigr)+d\bigl(t,x(t),\mathsf M^{-1}p(t)\bigr)$
   for every $t\in J$.

3. **(coordinate form)** Let $q:J\to\Omega$ be a $C^{2}$ curve and put
   $p(t):=G(q(t))q'(t)$. Then the declared Lagrange equations of
   [[def-cm07-generalized-coordinates-and-forces]] clause (e) are equivalent
   to the Hamilton system of $\widetilde H$: for every $t\in J$,

$$\Lambda(\widetilde L)(q)(t)=Q^{\mathrm{res}}\bigl(t,q(t),q'(t)\bigr)\ \Longleftrightarrow\ q'(t)=\widetilde H_{p}\bigl(t,q(t),p(t)\bigr),\quad p'(t)=-\widetilde H_{q}\bigl(t,q(t),p(t)\bigr)+Q^{\mathrm{res}}\bigl(t,q(t),q'(t)\bigr);$$

   in particular, when $d\equiv0$ the vanishing of the Lagrange operator is
   equivalent to $q'=\widetilde H_{p}$ and $p'=-\widetilde H_{q}$.

4. **(constraint elimination)** Assume in addition that $d\equiv0$ and that
   $X$ is a parametrization of a scleronomic regular holonomic-constraint
   locus in the sense of [[def-cm07-generalized-coordinates-and-forces]]
   clause (d), with the ideal-reaction law of
   [[post-cm06-ideal-reaction-law]]. Then the equivalent conditions of
   clause 3 with $Q^{\mathrm{res}}\equiv0$ hold for $q$ if and only if
   $x=X\circ q$ is a constrained motion of the model with an ideal reaction
   ([[pthm-cm07-lagrangian-reduction-of-ideal-constraints]]).

The statement is conditional on the adopted force branch, the declared
presentation, the declared chart and, in clause 4, the constraint datum and
ideal-reaction law; it asserts no existence or uniqueness of solutions, no
conservation law and no empirical content.

## Facts & Assumptions

**Given:** The model and presentation data, the curves $x:J\to Q$ and $q:J\to\Omega$ with their momentum curves, the generalized-coordinate map $X$ with its substituted data and residual generalized force, and the Hamiltonians $H$, $\widetilde H$ on the inverse branches.

[F1] Model and Lagrangian data ([[def-cm07-action-and-mechanical-lagrangian]], [[def-cm03-potential-and-mechanical-energy]], [[post-cm02-force-superposition]], [[def-cm01-configuration]], [[def-cm01-units]]): the force map has the standing regularity, the presentation has $F_{i}=-\nabla_{x_{i}}U+d_{i}$ with $U$ of class $C^{2}$, and the mechanical Lagrangian is $L=K-U$ with $\mathsf M$ symmetric positive definite; a motion of the model is defined by $m_{i}\ddot x_{i}=F_{i}(t,x,\dot x)$ ([[def-cm02-newtonian-flow]]); dimensions are read by the cited units item.

[F2] Model equivalence theorem ([[pthm-cm07-euler-lagrange-equations]], [[thm-cm-stationarity-iff-euler-lagrange]]): for a $C^{2}$ curve on a closed interval the conditions of stationarity for the action of $L$, vanishing of the Euler-Lagrange expression $E_{L}(x)$, and the potential-part equation $\mathsf Mx''=-\nabla_{x}U$ are equivalent.

[F3] Newton equivalence ([[pthm-cm07-newton-equivalence]]): on the global potential branch the stationary curves of the action on a closed interval are exactly the restrictions of the model's motions; conversely stationary curves are restrictions of the maximal motion.

[F4] Hamiltonian branch identities ([[prop-cm-hamiltonian-branch-identities]]): on a hyperregular fibre-full chart with inverse branch $v$ and Hamiltonian $H=p\cdot v-\mathcal L$, one has $H_{p}=v$, $H_{q}=-\mathcal L_{q}$ and $H_{t}=-\mathcal L_{t}$; a $C^{1}$ curve $(q,p)$ satisfies Hamilton's equations if and only if $q$ is $C^{2}$ with $E_{\mathcal L}(q)=0$ and $p=\mathcal L_{v}(t,q,q')$; and $H$ is conserved along such curves whenever $\mathcal L_{t}$ vanishes along them.

[F5] Mechanical hyperregularity and Hamiltonian form ([[pthm-cm12-mechanical-hyperregularity]], [[def-cm12-hamiltonian]], [[def-cm12-cotangent-momentum]]): the presentation is hyperregular on the Cartesian chart and on every generalized-coordinate chart, with $p=\mathsf Mv$, $v=\mathsf M^{-1}p$, $H(t,x,p)=\tfrac12p\cdot\mathsf M^{-1}p+U(t,x)$ and $\widetilde H(t,q,p)=\tfrac12p\cdot G(q)^{-1}p+\widetilde U(t,q)$; the fibre derivative equals the momentum covector.

[F6] Generalized-coordinate dictionary ([[def-cm07-generalized-coordinates-and-forces]]): $\widetilde L(t,q,v)=\tfrac12v^{\mathsf T}G(q)v-\widetilde U(t,q)$ with $G$ symmetric positive definite, the Lagrange operator is $\Lambda(\widetilde L)(q)=\frac{d}{dt}\bigl(\widetilde L_{v}(t,q,q')\bigr)-\widetilde L_{q}(t,q,q')$, the generalized force of the residual part is $Q^{\mathrm{res}}(t,q,v)=DX(q)^{\mathsf T}d(t,X(q),DX(q)v)$, and the declared Lagrange equations are $\Lambda(\widetilde L)(q)=Q^{\mathrm{res}}(t,q,q')$.

[F7] Constraint elimination ([[pthm-cm07-lagrangian-reduction-of-ideal-constraints]], [[def-cm06-holonomic-constraint-model]], [[post-cm06-ideal-reaction-law]]): for a scleronomic regular holonomic-constraint datum and a parametrization of the constrained configurations, a curve $x=X\circ q$ is a constrained motion with ideal reaction if and only if $\Lambda(\widetilde L)(q)=Q^{\mathrm{res}}(t,q,q')$ along $q$.

[F8] Calculus of the computations ([[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[def-vector-valued-derivative-and-integral]], [[def-interval]], [[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]], [[def-euclidean-inner-product]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]): the displayed gradients, products and curve derivatives are computed by the ordinary rules for differentiable maps, sums, products and compositions, with the Euclidean pairing and matrix products of the cited items.



## Proof

**Proof technique:** direct; translate the stationarity/Euler-Lagrange equivalence through the hyperregular branch identities and add the residual force, then repeat the computation on the generalized-coordinate chart and read the constraint-elimination theorem.

1.1 By [F5] the presentation is hyperregular on the Cartesian chart with $H(t,x,p)=\tfrac12p\cdot\mathsf M^{-1}p+U(t,x)$, so $H_{p}(t,x,p)=\mathsf M^{-1}p$ and $H_{x}(t,x,p)=\nabla_{x}U(t,x)$; by [F5] the momentum curve $p=\mathsf Mx'$ is the fibre derivative $\mathcal L_{v}(t,x,x')$ along $x$, so the branch hypothesis of [F4] is met on every state of the curve. [F5, algebra]

1.2 Clause 3: by [F6] the substituted Lagrangian is the mechanical chart Lagrangian $\widetilde L=\tfrac12v^{\mathsf T}G(q)v-\widetilde U(t,q)$ with $G$ symmetric positive definite and $\widetilde L_{v}(t,q,v)=G(q)v$, and by [F5] its chart is hyperregular with $p=\widetilde L_{v}(t,q,q')=G(q)q'$, $\widetilde H(t,q,p)=\tfrac12p\cdot G(q)^{-1}p+\widetilde U(t,q)$ and $\widetilde H_{p}=G(q)^{-1}p$, $\widetilde H_{q}=-\widetilde L_{q}(t,q,G(q)^{-1}p)$ by [F4]; explicitly its $i$-th component is $\tfrac12p^{\mathsf T}(\partial_{q_i}G(q)^{-1})p+\partial_{q_i}\widetilde U(t,q)$, retaining the kinetic contribution when $G$ varies, with derivatives computed using [F8]; the Lagrange operator is $\Lambda(\widetilde L)(q)=\frac{d}{dt}\widetilde L_{v}(t,q,q')-\widetilde L_{q}(t,q,q')=-E_{\widetilde L}(q)$, so by [F4] applied to $\widetilde L$ the equation $\Lambda(\widetilde L)(q)=0$ is equivalent to $q'=\widetilde H_{p}$ and $p'=-\widetilde H_{q}$. [F4, F5, F6, F8, algebra]

2.1 Clause 1, (a)$\Leftrightarrow$(b): by [F3] the motions of the model on the global potential branch are exactly, through their restrictions to closed subintervals, the stationary curves of the action, and by [F2] the motion condition of clause 1(a) is $\mathsf Mx''=-\nabla_{x}U$ on $J$, equivalently $E_{L}(x)(t)=0$ for all $t\in J$; by [F4] the pair $(x,p)$ satisfies Hamilton's equations if and only if $x$ is $C^{2}$ with $E_{L}(x)=0$ and $p=\mathcal L_{v}(t,x,x')$, which by step 1.1 is exactly $p=\mathsf Mx'$; hence clause 1(a) is equivalent to clause 1(b). [F2, F3, F4, step 1.1, algebra]

2.2 Clause 2: with $p=\mathsf Mx'$ one has $p'=\mathsf Mx''$, $H_{p}=\mathsf M^{-1}p=x'$ and $H_{x}=\nabla_{x}U$ by step 1.1, all computed with [F8]; hence $\mathsf Mx''=-\nabla_{x}U+d(t,x,x')$ holds exactly when $x'=H_{p}$ and $p'=-H_{x}+d(t,x,\mathsf M^{-1}p)$, since the first identity is equivalent to $x'=\mathsf M^{-1}p$ and the second is the displayed equation with $x'$ replaced by $\mathsf M^{-1}p$. [F1, F8, step 1.1, algebra]

2.3 Clause 3 with residual force: adding $Q^{\mathrm{res}}$ to both sides of the Lagrange equation adds the same term to the momentum equation, because by [F4] the momentum is $p=\widetilde L_{v}(t,q,q')$ and $\widetilde H_{q}=-\widetilde L_{q}$ on the branch; hence $\Lambda(\widetilde L)(q)=Q^{\mathrm{res}}(t,q,q')$ is equivalent to $p'=-\widetilde H_{q}+Q^{\mathrm{res}}(t,q,q')$ together with $q'=\widetilde H_{p}$, in both directions. [F4, F6, F8, step 1.2, algebra]

3.1 Clause 1, (c)$\Leftrightarrow$(b): by [F2] the restriction $x|_{[a,b]}$ is stationary for the action of $L$ on $[a,b]$ if and only if $E_{L}(x)$ vanishes on $[a,b]$; $J$ is the union of its closed subintervals, so clause 1(c) holds exactly when $E_{L}(x)$ vanishes on $J$, which by step 2.1 is equivalent to clause 1(b). [F2, step 2.1, algebra]

3.2 Clause 4: under the stated hypotheses [F7] identifies the constrained-motion condition with the declared Lagrange equation $\Lambda(\widetilde L)(q)=Q^{\mathrm{res}}(t,q,q')$, and $Q^{\mathrm{res}}\equiv0$ because $d\equiv0$; by step 2.3 this is equivalent to the Hamilton system of clause 3. [F7, step 2.3]

4.1 Collecting: clause 1 follows from steps 2.1 and 3.1, clause 2 from step 2.2, clause 3 from steps 1.2 and 2.3, and clause 4 from step 3.2. [step 2.1, step 3.1, step 2.2, step 1.2, step 2.3, step 3.2] ∎

## Remarks

- **Residual forces are not eliminated.** Clause 2 exhibits the precise sense
  in which a prescribed residual force modifies Hamilton's equations: it
  enters the momentum equation as a source, exactly as it enters the
  Euler-Lagrange equation through the generalized force. When $d\equiv0$ the
  two descriptions are equivalent, and the residual-free hypothesis of
  clause 1 is essential: with $d\not\equiv0$ a curve of clause 1(a) need not
  satisfy the unforced Hamilton system of clause 1(b).

- **Stationarity is not minimisation.** Clause 1(c) concerns stationary curves
  of the action in the sense of [[def-cm-time-dependent-lagrangian-and-action]];
  the equivalence with the model's motions is the content of
  [[pthm-cm07-newton-equivalence]] and carries no minimisation claim. The
  Hamiltonian reformulation inherits this: the Hamilton system is another way
  of writing the model's equation, not a new variational or empirical
  statement.

- **Constraints by elimination.** Clause 4 covers the constraint branch of the
  framework by eliminating the constraint, not by adjoining multipliers to a
  phase-space system; the ideal-reaction law is an adopted assumption and the
  eliminated chart is the substituted Lagrangian of a parametrization. The
  constrained Hamiltonian systems of Dirac's theory are not developed or
  claimed on this page.
