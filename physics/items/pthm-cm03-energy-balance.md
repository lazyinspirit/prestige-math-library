---
id: pthm-cm03-energy-balance
kind: physics-theorem
title: "Mechanical energy balance for a potential presentation: $E'=\\partial_tU$ plus the residual power, conservation for a static potential with no residual forces, and the integrated work form"
status: published
origin: session
domain: physics
dependency_level: 12
deps: [def-cm03-potential-and-mechanical-energy, def-cm03-centre-of-mass-and-momenta, pthm-cm03-work-energy, post-cm02-force-superposition, post-cm02-interactions, def-cm02-newtonian-flow, thm-cm-work-energy-balance, cor-zero-derivative-implies-constant, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-interval, lem-finite-sum-laws, thm-newton-leibniz-with-interior-derivative]
dependency_roles:
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  pthm-cm03-work-energy: physical-result
  post-cm02-force-superposition: physical-assumption
  post-cm02-interactions: physical-assumption
  def-cm02-newtonian-flow: formulation-prerequisite
  thm-cm-work-energy-balance: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The mechanical energy balance of a model presented through a potential with declared residual forces: the derivative of the mechanical energy equals the partial time derivative of the potential plus the power of the residual forces; a time-independent potential with no residual forces conserves the mechanical energy along every motion; and the integrated form expresses the work of the total force through the change of the potential and the residual work. The result is a conditional deduction from the adopted potential presentation, with the normalization of the potential carried along; it asserts no measured value and no conservation outside the stated hypotheses."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.3.2, Eqs. (1.24)-(1.25), printed page 8 (PDF page 14): the total potential V = sum_i V_i + sum_{i<j} V_ij for conservative external and internal forces, and H = T + V conserved"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.3, Eqs. (1.24)-(1.27), chapter pages 7-8 (PDF pages 11-12): the work of potential forces as U(A) - U(B), E = T + U, and conservation for conservative forces only, with non-conservative forces changing E"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the force model, one inertial frame, and the potential presentation of
[[def-cm03-potential-and-mechanical-energy]] clause (a): a $C^{2}$ potential
$$U:I_{0}\times Q\longrightarrow\mathbb R$$
of dimension $\mu\ell^{2}\tau^{-2}$ and residual forces $d_{i}$ of the standing
regularity, with
$$F_{i}(t,x,v)=-\nabla_{x_{i}}U(t,x)+d_{i}(t,x,v)\qquad(i=1,\dots,N)$$
on the state domain. Let $x:J\to Q$ be a **motion** of the model on an
interval $J$ with nonempty interior, write $\mathfrak d_{i}(t):=d_{i}(t,x(t),w(t))$
for the evaluated residual forces and
$$E(t):=K(t)+U\bigl(t,x(t)\bigr)$$
for the mechanical energy of the definition (clause (b)). Then:

1. $E$ is differentiable on $J$ and
   $$E'(t)=\partial_{t}U\bigl(t,x(t)\bigr)+\sum_{i}\bigl\langle\mathfrak d_{i}(t),\,w_{i}(t)\bigr\rangle\qquad(t\in J):$$
   the mechanical energy changes at the rate of the explicit time dependence
   of the potential plus the power of the residual forces;
2. if $\partial_{t}U\equiv0$ on $I_{0}\times Q$ and each evaluated residual
   force $\mathfrak d_{i}$ vanishes identically along this motion, then $E$ is
   constant on $J$. If, more strongly, every residual-force map $d_i$ vanishes
   on its entire state domain, the model is a global potential model with the
   declared representative $U$;
3. for all $t_{0}<t_{1}$ in $J$,
   $$K(t_{1})-K(t_{0})=U\bigl(t_{0},x(t_{0})\bigr)-U\bigl(t_{1},x(t_{1})\bigr)+\int_{t_{0}}^{t_{1}}\Bigl[\partial_{t}U\bigl(t,x(t)\bigr)+\sum_{i}\bigl\langle\mathfrak d_{i}(t),w_{i}(t)\bigr\rangle\Bigr]dt,$$
   equivalently $W([t_{0},t_{1}])=U(t_{0},x(t_{0}))-U(t_{1},x(t_{1}))+\int_{t_{0}}^{t_{1}}\bigl[\partial_{t}U+\sum_{i}\langle\mathfrak d_{i},w_{i}\rangle\bigr]dt$:
   the work of the total force is the decrease of the potential energy plus
   the work of the explicit time dependence and of the residual forces.

The representative $U$ is the one declared by the model; replacing $U$ by
$U+c(t)$ changes $E$ by $c(t)$ and $E'$ by $c'(t)$, as recorded in
[[def-cm03-potential-and-mechanical-energy]] clause (c). The statement is read
in the fixed frame; no empirical content is claimed.

## Facts & Assumptions

**Given:** The potential presentation of the model, one inertial frame, a motion $x:J\to Q$ with velocities $w_{i}=x_{i}'$, evaluated residual forces $\mathfrak d_{i}$, and the mechanical energy $E=K+U(t,x(t))$.

[L1] Notation ([[def-cm03-potential-and-mechanical-energy]] clauses (a)-(b), [[def-cm03-centre-of-mass-and-momenta]]): $K$, $W$ and $\mathcal P$ are the kinetic energy, work and power of the definition; $Q$ is nonempty and open; $U$ is $C^{2}$ hence $C^{1}$; $t\mapsto U(t,x(t))$ is defined on $J$; the equation of motion is $m_{i}\ddot x_{i}=F_{i}(t,x,w)$ with $F_{i}=-\nabla_{x_{i}}U+d_{i}$, so that $m_{i}\ddot x_{i}(t)=-\nabla_{x_{i}}U(t,x(t))+\mathfrak d_{i}(t)$ with $\mathfrak d_{i}(t)=d_{i}(t,x(t),w(t))$.

[L2] Mathematical supplier ([[thm-cm-work-energy-balance]]): under the displayed hypotheses with $U$ of class $C^{1}$ on the open $I_{0}\times Q$ and maps $d_{i}$ along the curve, if $m_{i}x_{i}''(t)=-\nabla_{x_{i}}U(t,x(t))+d_{i}(t)$ on $I$, then $K'=\sum_{i}\langle m_{i}x_{i}'',x_{i}'\rangle$; $\frac{d}{dt}U(t,x(t))=\partial_{t}U(t,x(t))+\sum_{i}\langle\nabla_{x_{i}}U(t,x(t)),x_{i}'(t)\rangle$; $\frac{d}{dt}(K+U(t,x(t)))=\partial_{t}U(t,x(t))+\sum_{i}\langle d_{i}(t),x_{i}'(t)\rangle$; and if $d_{i}\equiv0$ for all $i$ and $\partial_{t}U\equiv0$ then $t\mapsto K+U(t,x(t))$ is constant on $I$.

[L3] Work-energy theorem ([[pthm-cm03-work-energy]]): $K(t_{1})-K(t_{0})=W([t_{0},t_{1}])=\int_{t_{0}}^{t_{1}}\mathcal P$ for $t_{0}<t_{1}$ in $J$, and $\mathcal P=\sum_{i}\langle F_{i}(t,x,w),w_{i}\rangle$. The Euclidean inner product is bilinear ([[def-euclidean-inner-product]]) and finite sums are linear ([[lem-finite-sum-laws]]).

[L4] Newton–Leibniz ([[thm-newton-leibniz-with-interior-derivative]]): if $G$ is continuous on $[a,b]$ and differentiable on $(a,b)$ with integrable derivative $G'$, then $\int_{a}^{b}G'=G(b)-G(a)$; a real function on an interval with zero derivative at every interior point is constant ([[cor-zero-derivative-implies-constant]]); the interval $J$ has nonempty interior ([[def-interval]], [[def-vector-valued-derivative-and-integral]]).

## Proof

**Proof technique:** direct; instantiate the mathematical work-energy balance for the potential presentation and integrate the identity to obtain the work form.

1.1 The hypotheses of [L2] hold: $I:=J$ is an interval with nonempty interior, $Q$ is nonempty and open, $U$ is $C^{1}$ on $I_{0}\times Q$ (indeed $C^{2}$), $x$ is twice differentiable, and the equation of motion together with the presentation gives $m_{i}\ddot x_{i}(t)=-\nabla_{x_{i}}U(t,x(t))+\mathfrak d_{i}(t)$ with the evaluated residual forces of the statement. Applying [L2] gives that $E=K+U(t,x(t))$ is differentiable on $J$ with $$E'(t)=\partial_{t}U\bigl(t,x(t)\bigr)+\sum_{i}\bigl\langle\mathfrak d_{i}(t),w_{i}(t)\bigr\rangle,$$ which is clause 1. [given, L1, L2, algebra]

2.1 Clause 2: if $\partial_{t}U\equiv0$ and $\mathfrak d_{i}\equiv0$, then the right side of step 1.1 vanishes at every $t\in J$; the final clause of [L2] gives directly that $E$ is constant on $J$. [step 1.1, L2]

2.2 Clause 3: fix $t_{0}<t_{1}$ in $J$. By [L3], $K(t_{1})-K(t_{0})=\int_{t_{0}}^{t_{1}}\mathcal P$, and on $J$ $$\mathcal P=\sum_{i}\bigl\langle-\nabla_{x_{i}}U(t,x(t))+\mathfrak d_{i}(t),w_{i}(t)\bigr\rangle=-\sum_{i}\bigl\langle\nabla_{x_{i}}U(t,x(t)),w_{i}(t)\bigr\rangle+\sum_{i}\bigl\langle\mathfrak d_{i}(t),w_{i}(t)\bigr\rangle.$$ By the chain-rule clause of [L2], $\sum_{i}\langle\nabla_{x_{i}}U(t,x(t)),w_{i}(t)\rangle=\frac{d}{dt}U(t,x(t))-\partial_{t}U(t,x(t))$, so $$\mathcal P=\partial_{t}U\bigl(t,x(t)\bigr)+\sum_{i}\bigl\langle\mathfrak d_{i}(t),w_{i}(t)\bigr\rangle-\frac{d}{dt}U\bigl(t,x(t)\bigr).$$ [step 1.1, L1, L2, L3, algebra]

3.1 The function $t\mapsto U(t,x(t))$ is $C^{1}$ on $J$ (composition of the $C^{1}$ map $U$ with the $C^{1}$ curve $t\mapsto(t,x(t))$), so [L4] gives $\int_{t_{0}}^{t_{1}}\frac{d}{dt}U(t,x(t))\,dt=U(t_{1},x(t_{1}))-U(t_{0},x(t_{0}))$. Integrating the identity of step 2.2 over $[t_{0},t_{1}]$ and substituting this value, $$K(t_{1})-K(t_{0})=\int_{t_{0}}^{t_{1}}\mathcal P=U\bigl(t_{0},x(t_{0})\bigr)-U\bigl(t_{1},x(t_{1})\bigr)+\int_{t_{0}}^{t_{1}}\Bigl[\partial_{t}U\bigl(t,x(t)\bigr)+\sum_{i}\bigl\langle\mathfrak d_{i}(t),w_{i}(t)\bigr\rangle\Bigr]dt,$$ which is the first form of clause 3; the second form is the definition of $W([t_{0},t_{1}])$ by [L1] and [L3]. [step 2.2, L1, L3, L4, algebra] ∎

## Remarks

- **Three distinct contributions.** The balance separates the explicit time dependence of the potential ($\partial_{t}U$), the power of the residual forces, and the potential difference; a model with a time-dependent potential or with residual forces is driven, and its mechanical energy is not conserved in general. The companion worked example computes all three terms on explicit data.

- **Conservation is conditional and representation-dependent.** Clause 2 requires the representative $U$ to be time-independent and the residual forces to vanish; a potential $U+c(t)$ with time-dependent $c$ turns a conserved model into a presentation with $E'=c'(t)$, as clause (c) of [[def-cm03-potential-and-mechanical-energy]] records. Energy statements therefore name the representative.

- **Frame dependence of conservation.** Under the scalar transfer of [[pthm-cm03-frame-transformations]] clause 5, with its boost velocity $v$, $\tilde E=E+\langle v,R P\rangle+\frac12M\lVert v\rVert_2^2$. Thus if both $E$ and $P$ are constant, then $\tilde E$ is constant. If $P$ varies, constancy of $E$ alone does not imply constancy of $\tilde E$; the transferred potential can also have explicit time dependence.
