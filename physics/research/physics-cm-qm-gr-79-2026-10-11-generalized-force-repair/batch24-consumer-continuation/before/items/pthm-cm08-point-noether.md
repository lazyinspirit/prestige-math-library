---
id: pthm-cm08-point-noether
kind: physics-theorem
title: "The point Noether theorem of the model: conservation of the charge of a strict symmetry, and the residual-force rate"
status: draft
origin: session
domain: physics
dependency_level: 16
deps: [def-cm08-symmetry-of-the-mechanical-lagrangian, def-cm-infinitesimal-point-symmetry, thm-cm-point-symmetry-charge-is-conserved, pthm-cm07-euler-lagrange-equations, pthm-cm07-newton-equivalence, thm-cm-stationarity-iff-euler-lagrange, def-cm-time-dependent-lagrangian-and-action, def-cm07-action-and-mechanical-lagrangian, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm02-newtonian-flow, def-cm01-configuration, def-cm01-units, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, cor-zero-derivative-implies-constant, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  def-cm08-symmetry-of-the-mechanical-lagrangian: formulation-prerequisite
  def-cm-infinitesimal-point-symmetry: mathematical-premise
  thm-cm-point-symmetry-charge-is-conserved: mathematical-premise
  pthm-cm07-euler-lagrange-equations: physical-result
  pthm-cm07-newton-equivalence: physical-result
  thm-cm-stationarity-iff-euler-lagrange: mathematical-premise
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: physical-assumption
  post-cm02-force-superposition: physical-assumption
  def-cm02-newtonian-flow: formulation-prerequisite
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
physical_scope: "The point Noether theorem of the force model with a declared potential presentation in one inertial frame: for a strict symmetry datum of the mechanical Lagrangian that is independent of time, the charge M x' . xi - B is constant along every motion of the global potential branch; for an arbitrary presentation the charge of a strict datum has derivative equal to the residual force paired with the generator, so conservation holds exactly when that pairing vanishes along the motion. The theorem is conditional on the adopted force branch, the declared presentation, the symmetry identity and, in the conservation clause, on the absence of residual forces; it asserts no symmetry of any particular force law and carries no empirical content."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.4.1 'Noether's Theorem', printed pages 24-25 (PDF pages 30-31): for a continuous symmetry of the Lagrangian the quantity p_i dQ_i/ds is constant, with the translation and rotation examples"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Section 1.8.5: the Noether integral as the momentum paired with the generator of a parametric coordinate transformation, with the central-force rotation example"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.3, printed pages 12-15 (PDF pages 15-18): cyclic coordinates and the conserved canonical momentum, with the centre-of-mass momentum and rotational angular-momentum examples"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], with
masses $m_{1},\dots,m_{N}>0$, open configuration domain $Q\subseteq\mathbb R^{3N}$,
time window $I_{0}$, mass operator $\mathsf M$ and $U$ of
[[def-cm03-potential-and-mechanical-energy]], and let $(\tau,\xi,B)$ be a
symmetry datum of the model's mechanical Lagrangian with $\tau\equiv0$
([[def-cm08-symmetry-of-the-mechanical-lagrangian]] clause (a)); write

$$C(t,x,v):=\bigl(\mathsf M v\bigr)\cdot\xi(t,x)-B(t,x)\qquad\bigl((t,x,v)\in O\bigr)$$

for its charge. Then:

1. **(conservation in the global potential model).** If $d\equiv0$ and $\xi$
   is independent of $t$, then for every motion $x:J\to Q$ of the model on an
   interval $J$ with nonempty interior ([[def-cm02-newtonian-flow]]), the
   function $t\mapsto C\bigl(t,x(t),x'(t)\bigr)$ is constant on $J$.

2. **(residual-force rate).** For an arbitrary presentation $(U,d)$, along
   every motion $x:J\to Q$ the function $t\mapsto C(t,x(t),x'(t))$ is of class
   $C^{1}$ on $J$ and

$$C'(t)=\bigl\langle d\bigl(t,x(t),x'(t)\bigr),\,\xi\bigl(t,x(t)\bigr)\bigr\rangle\qquad(t\in J),$$

   where the pairing is the Euclidean inner product of $\mathbb R^{3N}$;
   consequently $C$ is constant on $J$ if and only if this pairing vanishes
   for every $t\in J$.

Clause 1 is the conditional conservation law of the model's global potential
branch under a symmetry identity of its Lagrangian; clause 2 quantifies the
exact rate at which a residual force destroys it. Neither clause asserts that
any model possesses a strict symmetry datum, and neither carries empirical
content.

## Facts & Assumptions

**Given:** The model, the presentation $(U,d)$, the strict symmetry datum $(0,\xi,B)$ and the motion $x:J\to Q$ of the statement.

[F1] Model data and chart ([[def-cm07-action-and-mechanical-lagrangian]], [[def-cm-time-dependent-lagrangian-and-action]], [[def-cm03-potential-and-mechanical-energy]], [[def-cm01-configuration]]): $O=I_{0}\times Q\times\mathbb R^{3N}$ is open and $(O,L)$ is a time-dependent Lagrangian chart over every $[a,b]\times Q$ with $[a,b]\subseteq I_{0}$; $L(t,x,v)=K(v)-U(t,x)$ with $K(v)=\frac12v\cdot\mathsf M v$, $L_{v}(t,x,v)=\mathsf M v$, $L_{x}(t,x,v)=-\nabla_{x}U(t,x)$ and $L_{t}(t,x,v)=-U_{t}(t,x)$; the force map is $F_{i}=-\nabla_{x_{i}}U+d_{i}$.

[F2] The symmetry datum and its charge ([[def-cm08-symmetry-of-the-mechanical-lagrangian]], [[def-cm-infinitesimal-point-symmetry]]): $\xi:I_{0}\times Q\to\mathbb R^{3N}$ and $B:I_{0}\times Q\to\mathbb R$ are of class $C^{2}$ and satisfy the strict identity $L_{x}(t,x,v)\cdot\xi(t,x)+L_{v}(t,x,v)\cdot D_{t}\xi(t,x,v)=D_{t}B(t,x,v)$ on $O$; the charge is the displayed function $C$; when $\xi$ is independent of $t$ the pair $(\xi,B)$ is an infinitesimal point symmetry of the chart $(O,L)$ in the sense of the cited definition.

[F3] The mathematical conservation theorem ([[thm-cm-point-symmetry-charge-is-conserved]], [[thm-cm-stationarity-iff-euler-lagrange]]): for an infinitesimal point symmetry $(\xi,B)$ of a time-dependent Lagrangian chart and a $C^{2}$ curve $q:I\to U$ on an open interval $I$ with graph in the chart domain that solves the Euler-Lagrange equation $E_{\mathcal L}(q)=0$, the function $t\mapsto\mathcal L_{v}\cdot\xi-B$ is constant on $I$.

[F4] The Euler-Lagrange equivalence in model terms ([[pthm-cm07-euler-lagrange-equations]], [[pthm-cm07-newton-equivalence]]): for every $C^{2}$ admissible curve $z$ of the chart instance and reals $a<b$ with $[a,b]\subseteq I_{0}$, stationarity for the action, $E_{L}(z)=0$ on $[a,b]$ and $\mathsf M z''(t)=-\nabla_{x}U(t,z(t))$ on $[a,b]$ are equivalent; and every motion of the model with $d\equiv0$ restricts on such an interval to a curve satisfying these conditions.

[F5] Motions ([[def-cm02-newtonian-flow]], [[post-cm02-force-superposition]]): a motion $x:J\to Q$ on an interval with nonempty interior is a $C^{2}$ curve with $J\subseteq I_{0}$ and $m_{i}x_{i}''(t)=F_{i}(t,x(t),x'(t))$ for all $t\in J$, i.e. $\mathsf M x''=-\nabla_{x}U+d$ along the motion.

[F6] Calculus along the motion ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-vector-valued-derivative-and-integral]], [[def-euclidean-inner-product]], [[def-interval]], [[cor-zero-derivative-implies-constant]]): the curves $t\mapsto\xi(t,x(t))$ and $t\mapsto B(t,x(t))$ are $C^{1}$ with derivatives $D_{t}\xi(t,x(t),x'(t))$ and $D_{t}B(t,x(t),x'(t))$; sums and pairings of differentiable curves differentiate by the product rule; a $C^{1}$ real function on an interval is constant if and only if its derivative vanishes at every point.

[F7] Regularity of the data ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-cm01-units]]): $\xi$ and $B$ are $C^{2}$, $U$ is $C^{2}$ and a motion is $C^{2}$, so all composites below are at least $C^{1}$.

## Proof

**Proof technique:** direct; convert a motion into an Euler-Lagrange solution for the conservation clause and instantiate the mathematical Noether theorem, then differentiate the charge along the motion for the residual-force rate.

1.1 Clause 1, motion as an Euler-Lagrange solution: let $x:J\to Q$ be a motion with $d\equiv0$ and fix $t_{0}\in J$; since $J\subseteq I_{0}$ is open there are reals $a<b$ with $t_{0}\in[a,b]\subseteq J$, and the restriction $x|_{[a,b]}$ is a $C^{2}$ admissible curve of the chart instance with $\mathsf M x''=-\nabla_{x}U$ on $[a,b]$ by [F5]; by [F4] it satisfies $E_{L}(x)=0$ on $[a,b]$, and since $t_{0}$ was arbitrary, $E_{L}(x)=0$ on all of $J$. [F1, F4, F5, given]

1.2 Clause 2, differentiation: along any motion, $t\mapsto C(t,x(t),x'(t))$ is of class $C^{1}$ by [F6] and [F7], and differentiating $C=(\mathsf M x')\cdot\xi(t,x)-B(t,x)$ gives $$C'=\bigl(\mathsf M x''\bigr)\cdot\xi+\bigl(\mathsf M x'\bigr)\cdot D_{t}\xi-D_{t}B$$ at each $t\in J$. Substituting the strict identity of [F2] with $(t,x,v)=(t,x(t),x'(t))$, i.e. $D_{t}B=-\nabla_{x}U\cdot\xi+(\mathsf M x')\cdot D_{t}\xi$, and then $\mathsf M x''=-\nabla_{x}U+d$ from [F5], gives $$C'=\bigl(\mathsf M x''\bigr)\cdot\xi+\nabla_{x}U\cdot\xi=\bigl(\mathsf M x''+\nabla_{x}U\bigr)\cdot\xi=\bigl\langle d(t,x(t),x'(t)),\xi(t,x(t))\bigr\rangle.$$ [F2, F5, F6, F7, algebra]

2.1 Clause 1, conservation: by [F2] the pair $(\xi,B)$, with $\xi$ independent of $t$, is an infinitesimal point symmetry of the chart $(O,L)$; step 1.1 exhibits the motion as a $C^{2}$ curve on the open interval $J$ with graph in $O$ solving $E_{L}=0$, so the mathematical conservation theorem [F3] applies with $I:=J$ and gives that $t\mapsto L_{v}(t,x,x')\cdot\xi(x)-B(t,x)=(\mathsf M x'(t))\cdot\xi(x(t))-B(t,x(t))$ is constant on $J$, which is the assertion of clause 1. [F2, F3, step 1.1]

2.2 Clause 2, conservation criterion: by step 1.2 the derivative of $t\mapsto C(t,x(t),x'(t))$ is the pairing displayed there; by [F6] a $C^{1}$ function on the interval $J$ is constant on $J$ if and only if its derivative vanishes everywhere on $J$, so $C$ is constant on $J$ exactly when the pairing vanishes for every $t\in J$. [F6, step 1.2]

3.1 Clause 1 is steps 1.1 and 2.1, and clause 2 is steps 1.2 and 2.2; both clauses are conditional deductions from the indicated hypotheses, and no claim of existence of a symmetry datum or of empirical content is made. [step 2.1, step 2.2] ∎

## Remarks

- **Where the identity is used.** Clause 1 uses the strict identity on the whole
  chart through the mathematical point-symmetry theorem; clause 2 uses the same
  identity only at the graph points of the motion and evaluates the motion
  equation. For a presentation with $d\equiv0$ the two routes agree, and clause
  2 then gives $C'=0$ directly; the field-theoretic reading is that the
  potential part of the force does no work against the generator, while the
  residual part does, at rate $\langle d,\xi\rangle$. The specialisation of
  this statement with $\xi=\xi(x)$ to the mathematical case
  [[thm-cm-point-symmetry-charge-is-conserved]] is the reason the framework
  reuses the chart-level notion of symmetry as its model notion.

- **Conditional conservation.** The pairing criterion makes the conditions
  explicit: with residual forces the charge of a strict symmetry is conserved
  exactly if the residual force is orthogonal to the generator along the
  motion. A model whose residual force carries a component along $\xi$ — for
  instance a friction force along a translation generator — conserves no
  corresponding momentum charge, whatever symmetries the potential part has.

- **What is not claimed.** No converse is asserted: from the constancy of
  $(\mathsf M x')\cdot\xi-B$ along the motions one cannot conclude that the
  identity holds, and the existence of a symmetry datum for a given model is a
  separate verification against its declared $U$ and masses. The statement is
  also not an empirical law: it concerns the model's motions under the adopted
  force branch and the declared presentation.
