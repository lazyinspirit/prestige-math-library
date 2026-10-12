---
id: pthm-cm08-boost-boundary
kind: physics-theorem
title: "The Galilean boost charge of the model: exact condition, uniform centre-of-mass motion, the induced motions and the boundary of the conservation law"
status: draft
origin: session
domain: physics
dependency_level: 18
deps: [def-cm08-symmetry-of-the-mechanical-lagrangian, pthm-cm08-general-noether, pthm-cm08-translation, def-cm03-centre-of-mass-and-momenta, def-cm02-newtonian-flow, post-cm02-force-superposition, def-cm03-potential-and-mechanical-energy, def-cm07-action-and-mechanical-lagrangian, def-cm-time-dependent-lagrangian-and-action, def-cm01-configuration, def-cm01-units, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, cor-zero-derivative-implies-constant, def-continuity-real, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  def-cm08-symmetry-of-the-mechanical-lagrangian: formulation-prerequisite
  pthm-cm08-general-noether: physical-result
  pthm-cm08-translation: physical-result
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
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
  def-continuity-real: mathematical-premise
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
physical_scope: "The Galilean boost charge of the force model with a declared potential presentation in one inertial frame: the time-dependent symmetry datum (tau, xi, B) = (0, t a, a . M x) satisfies the model's Noether identity exactly when the potential is invariant under the simultaneous translation of all labels by the vector a; in the global potential branch the boost charge a . (t P - M X) is then constant, the component a of the centre of mass moves uniformly, and the boosted curves t -> x(t) + s t a of motions are again motions; for an arbitrary presentation the exact rate of the charge is the time times the component a of the total force, and a nonzero translation derivative of the potential at a nonzero time produces a motion along which the charge is not constant. The theorem is conditional on the adopted force branch, the declared potential and the absence of residual forces in the conservation clauses; it asserts no boost invariance of any particular force law and carries no empirical content."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 1.2 and 2.4.1, printed pages 2-5 and 24-26 (PDF pages 8-11 and 30-32): the Galilean group of an inertial frame, the boost x -> x + vt, and the space-translation example of Noether's theorem"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.3, printed pages 12-13 (PDF pages 15-16): conservation of the centre-of-mass momentum and the uniform motion of the centre of mass for systems whose potential is independent of the centre-of-mass coordinate"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 2.4, chapter page 9 (PDF page 28): conservation of a generalized momentum conjugate to a cyclic coordinate, with the centre-of-mass reading in Section 3.1"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], with
masses $m_{1},\dots,m_{N}>0$, open configuration domain $Q\subseteq\mathbb R^{3N}$,
time window $I_{0}$, mass operator $\mathsf M$ and $U$ of
[[def-cm03-potential-and-mechanical-energy]]. Fix a nonzero vector
$a\in\mathbb R^{3}$ and consider the maps

$$\xi^{a}(t,x):=t\,\bigl(a,\dots,a\bigr)\in\mathbb R^{3N},\qquad B^{a}(t,x):=\bigl\langle a,\mathsf M x\bigr\rangle=\sum_{i}m_{i}\,a\cdot x_{i},$$

so that $(\tau,\xi,B)\equiv(0,\xi^{a},B^{a})$ is a datum of
[[def-cm08-symmetry-of-the-mechanical-lagrangian]]. Write
$P(t):=\sum_{i}m_{i}x_{i}'(t)$ for the total momentum and $X$ for the centre
of mass of [[def-cm03-centre-of-mass-and-momenta]], with
$\mathsf M X=\sum_{i}m_{i}x_{i}$, and define the **boost charge**

$$K_{a}(t):=a\cdot\bigl(t\,P(t)-\mathsf M X(t)\bigr)=t\,\bigl(a\cdot P(t)\bigr)-\sum_{i}m_{i}\,a\cdot x_{i}(t).$$

Then:

1. **(the identity).** The datum $(0,\xi^{a},B^{a})$ satisfies the model's
   Noether identity on $O$ if and only if the translation-invariance condition
   $\sum_{i}a\cdot\nabla_{x_{i}}U(t,x)=0$ for all $(t,x)\in I_{0}\times Q$
   of clause 1 of [[pthm-cm08-translation]] holds.
2. **(conservation).** If in addition $d\equiv0$, then for every motion
   $x:J\to Q$ of the model on an interval $J$ with nonempty interior
   ([[def-cm02-newtonian-flow]]), the function $t\mapsto K_{a}(t)$ is constant
   on $J$.
3. **(uniform centre-of-mass motion).** Under the hypotheses of clause 2, the
   function $t\mapsto a\cdot\mathsf M X(t)$ is affine on $J$ with slope
   $a\cdot P$.
4. **(boosted motions).** Under the hypotheses of clause 2, let $x:J\to Q$
   be a motion and $s\in\mathbb R$ satisfy $x(t)+st\xi^a_1\in Q$ for every
   $t\in J$, where $\xi^a_1=(a,\dots,a)$. Then
   $\widetilde x(t):=x(t)+st\xi^a_1$ is a motion if and only if
   $\nabla_xU(t,\widetilde x(t))=\nabla_xU(t,x(t))$ for every $t\in J$.
   This equality, and hence the boosted-motion conclusion, follows if
   each segment between $x(t)$ and $\widetilde x(t)$ is contained in $Q$,
   or if the all-admissible-endpoint finite invariance criterion of
   [[pthm-cm08-translation]] clause 1 holds.

5. **(the general rate and the boundary).** For an arbitrary presentation
   $(U,d)$ and every motion $x:J\to Q$,

$$K_{a}'(t)=t\,a\cdot F_{\mathrm{tot}}(t),\qquad F_{\mathrm{tot}}(t):=\sum_{i}F_{i}\bigl(t,x(t),x'(t)\bigr);$$

   consequently, when $d\equiv0$, the charge $K_{a}$ is constant on $J$ if and
   only if $t\mapsto t\sum_{i}a\cdot\nabla_{x_{i}}U(t,x(t))$ vanishes
   identically on $J$, and if the translation-invariance condition fails at
   some state, then there are a time $t_{0}\ne0$ and a state $x_{0}$ with
   $g:=\sum_{i}a\cdot\nabla_{x_{i}}U(t_{0},x_{0})\ne0$ such that the maximal
   motion through $(t_{0},x_{0},0)$ satisfies $K_{a}'(t_{0})=-t_{0}\,g\ne0$
   and $K_{a}$ is not constant on its interval.

The charge exists as a conserved quantity exactly under the same potential
invariance that conserves the momentum component $a\cdot P$; the conservation
clauses are conditional deductions of the global potential branch, and no
empirical content is asserted.

## Facts & Assumptions

**Given:** The model, the presentation $(U,d)$, the vector $a$, the datum $(0,\xi^{a},B^{a})$, and the motions and states occurring in the clauses.

[F1] Model data and chart ([[def-cm07-action-and-mechanical-lagrangian]], [[def-cm03-potential-and-mechanical-energy]], [[def-cm-time-dependent-lagrangian-and-action]], [[def-cm01-configuration]]): $O=I_{0}\times Q\times\mathbb R^{3N}$ is open and $(O,L)$ is a time-dependent Lagrangian chart over every $[a',b']\times Q$ with $[a',b']\subseteq I_{0}$; $L=K-U$ with $L_{x}=-\nabla_{x}U$, $L_{v}=\mathsf M v$; $F_{i}=-\nabla_{x_{i}}U+d_{i}$; and $U$ is $C^{2}$ so that the map $(t,x)\mapsto\sum_{i}a\cdot\nabla_{x_{i}}U(t,x)$ is continuous ([[def-continuity-real]], [[def-jacobian-matrix-and-gradient]]).

[F2] The model's symmetry vocabulary ([[def-cm08-symmetry-of-the-mechanical-lagrangian]]): a datum $(\tau,\xi,B)$ satisfies the model identity when $L_{t}\tau+L_{x}\cdot\xi+L_{v}\cdot(D_{t}\xi-vD_{t}\tau)+L\,D_{t}\tau=D_{t}B$ on $O$, with charge $(\mathsf M v)\cdot\xi-E\tau-B$ and $E=K+U$; for $\tau\equiv0$ the identity is $L_{x}\cdot\xi+L_{v}\cdot D_{t}\xi=D_{t}B$ and the charge is $(\mathsf M v)\cdot\xi-B$.

[F3] The general Noether theorem of the model ([[pthm-cm08-general-noether]] clause 1): a symmetry datum satisfying the model identity with $d\equiv0$ has constant charge along every motion.

[F4] The translation statement ([[pthm-cm08-translation]] clauses 1 and 3): the differential condition is equivalent to potential invariance along admissible segments; invariance across excluded segments also requires agreement of the interval-component constants. Under the differential condition with $d\equiv0$, $a\cdot P$ is constant along every motion.

[F5] Momentum, centre of mass and motions ([[def-cm03-centre-of-mass-and-momenta]], [[def-cm02-newtonian-flow]], [[post-cm02-force-superposition]]): $P=\sum_{i}m_{i}x_{i}'=\mathsf M x'$, $\mathsf M X=\sum_{i}m_{i}x_{i}$ with total mass $M=\sum_{i}m_{i}$, so $(\mathsf M X)'=\mathsf M x'$; along a motion $\mathsf M x''=F$, and through every initial datum there is exactly one maximal motion with open maximal interval containing the initial time.

[F6] Calculus ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-vector-valued-derivative-and-integral]], [[def-euclidean-inner-product]], [[def-interval]], [[cor-zero-derivative-implies-constant]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-directional-and-partial-derivatives]]): sums, scalar multiples and pairings differentiate by the usual rules; a $C^1$ function on an interval is constant exactly when its derivative vanishes. For $C^2$ $U$, differentiating the vanishing directional derivative gives $\nabla_x(\xi^a_1\cdot\nabla_xU)=0$, so the spatial gradient is constant along every translation segment contained in $Q$. Global finite invariance likewise gives equality of the endpoint gradients by differentiating its identity on an open neighbourhood of the two admissible endpoints.

## Proof

**Proof technique:** direct; evaluate the model identity at the boost datum and reduce its validity to the translation condition by continuity in time, transfer conservation through the model's general Noether theorem, verify the boosted curves, and compute the charge rate from the equation of motion.

1.1 Clause 1, evaluation of the identity: for the datum $(0,\xi^{a},B^{a})$ one has $D_{t}\xi^{a}=(a,\dots,a)$, $L_{x}\cdot\xi^{a}=-t\sum_{i}a\cdot\nabla_{x_{i}}U(t,x)$ and $L_{v}\cdot D_{t}\xi^{a}=\sum_{i}m_{i}a\cdot v_{i}=D_{t}B^{a}$, since $D_{t}B^{a}=0+\sum_{i}m_{i}a\cdot v_{i}$; hence the two sides of the strict identity are $t\,g(t,x)$ apart, with $g(t,x):=\sum_{i}a\cdot\nabla_{x_{i}}U(t,x)$, and the identity holds on $O$ if and only if $t\,g(t,x)=0$ for all $(t,x)\in I_{0}\times Q$. Since $g$ is continuous and $I_{0}$ contains points $t\ne0$, this holds if and only if $g(t,x)=0$ for every $t\ne0$ in $I_{0}$ and every $x\in Q$; and if $0\in I_{0}$ then continuity of $g$ at $(0,x)$ forces $g(0,x)=0$ for every $x\in Q$. Hence the identity is equivalent to $g\equiv0$ on $I_{0}\times Q$, which is the translation-invariance condition of [F4]. [F1, F2, F4, F6, algebra]

1.2 Clause 5, the rate: along a motion, $t\mapsto K_{a}(t)=t(a\cdot P(t))-a\cdot\mathsf M X(t)$ is $C^{1}$ by [F5] and [F6], and differentiating gives $$K_{a}'=a\cdot P+t\,\bigl(a\cdot P\bigr)'-a\cdot\bigl(\mathsf M X\bigr)'=a\cdot P+t\,a\cdot\mathsf M x''-a\cdot\mathsf M x'=t\,a\cdot F_{\mathrm{tot}},$$ because $P=\mathsf M x'$, $(\mathsf M X)'=\mathsf M x'$ and $\mathsf M x''=F$ along the motion with $F_{\mathrm{tot}}=\sum_{i}F_{i}(t,x,x')$. In the case $d\equiv0$ one has $F_{i}(t,x,x')=-\nabla_{x_{i}}U(t,x)$, so $K_{a}'=-t\,g(t,x(t))$ and, $K_{a}$ being $C^{1}$ on the interval $J$, it is constant exactly when $t\,g(t,x(t))$ vanishes identically on $J$; if $g$ is not identically zero on $I_{0}\times Q$, continuity of $g$ supplies a point $(t_{0},x_{0})$ with $t_{0}\ne0$ and $g(t_{0},x_{0})\ne0$ (a point with $g\ne0$ at time $0$ has a neighbourhood on which $g\ne0$, and $I_{0}$ contains times $\ne0$), and the maximal motion through $(t_{0},x_{0},0)$ has $K_{a}'(t_{0})=-t_{0}g(t_{0},x_{0})\ne0$, so $K_{a}$ is not constant on its interval. [F1, F5, F6, algebra]

1.3 Clause 4, boosted motions: with $d\equiv0$, the curve $\widetilde x=x+st\xi^a_1$ is $C^2$, takes values in $Q$ by hypothesis and satisfies $\widetilde x''=x''$. Its motion equation $\mathsf M\widetilde x''=-\nabla_xU(t,\widetilde x)$ is therefore equivalent to $\nabla_xU(t,\widetilde x)=\nabla_xU(t,x)$, since $x$ is a motion. If every joining segment lies in $Q$, the derivative along that segment of $\nabla_xU$ is $\nabla_x(\xi^a_1\cdot\nabla_xU)=0$ by the differential hypothesis and [F6], giving the equality. Alternatively, under global finite invariance, for fixed $t$ and shift $st\xi^a_1$ both endpoints have an open neighbourhood on which $U(t,y+st\xi^a_1)=U(t,y)$; differentiation with respect to $y$ gives the same gradient equality. Thus both stated sufficient routes produce a boosted motion, and the exact criterion holds without either extra route. [F1, F4, F5, F6, algebra]

2.1 Clause 2, conservation: by step 1.1 and the hypothesis, the datum $(0,\xi^{a},B^{a})$ satisfies the model identity on $O$, so with $d\equiv0$ clause 1 of [F3] gives that its charge is constant along every motion; by [F2] that charge is $(\mathsf M x'(t))\cdot t\xi^{a}_1-\bigl(K(x'(t))+U(t,x(t))\bigr)\cdot0-B^{a}(t,x(t))=t\,(a\cdot P(t))-\sum_{i}m_{i}a\cdot x_{i}(t)=K_{a}(t)$. [F2, F3, step 1.1]

2.2 Clause 5, the non-constancy statement: by step 1.2, in the case $d\equiv0$ a point $(t_{0},x_{0})$ with $t_{0}\ne0$ and $g(t_{0},x_{0})\ne0$ yields a maximal motion with $K_{a}'(t_{0})=-t_{0}g(t_{0},x_{0})\ne0$, and by [F6] a function constant on the interval $J_{\max}$ would have vanishing derivative at $t_{0}$. [F6, step 1.2]

3.1 Clause 3: by step 2.1 the function $t\mapsto K_{a}(t)=t(a\cdot P(t))-a\cdot\mathsf M X(t)$ is constant on $J$, and by [F4] the slope $a\cdot P$ is constant on $J$; hence $a\cdot\mathsf M X(t)=t(a\cdot P)-K_{a}$ is affine in $t$ with slope $a\cdot P$ on $J$. [F4, step 2.1, algebra]

4.1 Clause 1 is step 1.1, clause 2 is step 2.1, clause 3 is step 3.1, clause 4 is step 1.3, and the two statements of clause 5 are step 1.2 and step 2.2; the charge is conserved exactly under the potential invariance that conserves the momentum component, and no boost invariance of any particular force law and no empirical claim is asserted. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **Kinematics versus model symmetry.** Every model of the framework is
  described in every inertial frame, and the Galilean transformation of the
  description is available whatever the force law
  ([[post-cm02-force-superposition]] clause (vi)); the boost charge, by
  contrast, is a conserved quantity only when the declared potential is
  invariant under the simultaneous translation of all labels. For a confining
  potential such as $U=\tfrac{k}{2}\sum_{i}\lvert x_{i}\rvert^{2}$ the condition
  fails at every nonzero configuration, the datum of clause 1 does not satisfy
  the model identity, and the centre of mass oscillates rather than moving
  uniformly. This is the precise boundary of the boost statement: it is a
  property of the model's Lagrangian, not of Galilean kinematics.

- **Relation to the momentum clause.** Clauses 1 and 2 show that for the
  global potential branch the boost charge adds no independent conservation
  hypothesis beyond the translation invariance already required by
  [[pthm-cm08-translation]]: the two charges $a\cdot P$ and $K_{a}$ stand or
  fall together, and clause 3 says that the content of the boost charge is the
  uniform motion of the component $a$ of the centre of mass. With residual
  forces the rate formula of clause 5 replaces conservation, and the charge
  fails to be conserved along every motion on which the component $a$ of the
  total force does not vanish identically.

- **Empirical status.** All statements are deductions inside the model under
  the declared hypotheses; the phrase "boost" names the transformation
  $x_{i}\mapsto x_{i}+ta$ of the description, not any measurement, and no
  claim is made that a physical force law is boost invariant.
