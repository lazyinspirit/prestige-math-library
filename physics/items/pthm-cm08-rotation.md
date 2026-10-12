---
id: pthm-cm08-rotation
kind: physics-theorem
title: "Rotation symmetry of the model's Lagrangian and conservation of angular momentum about the origin"
status: draft
origin: session
domain: physics
dependency_level: 17
deps: [def-cm08-symmetry-of-the-mechanical-lagrangian, pthm-cm08-point-noether, def-cm03-centre-of-mass-and-momenta, def-cm02-newtonian-flow, post-cm02-force-superposition, def-cm03-potential-and-mechanical-energy, def-cm07-action-and-mechanical-lagrangian, def-cm-time-dependent-lagrangian-and-action, def-cm01-configuration, def-cm01-units, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, cor-zero-derivative-implies-constant, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  def-cm08-symmetry-of-the-mechanical-lagrangian: formulation-prerequisite
  pthm-cm08-point-noether: physical-result
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
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
physical_scope: "Rotation symmetry of the force model with a declared potential presentation in one inertial frame: with a dimensionless generator vector and a rotation parameter measured in radians, the equivalence between the differential invariance condition of the potential along the rotation family with axis a and finite invariance on admissible rotation arcs, with the exact component compatibility criterion for all admissible endpoints, the resulting strict symmetry datum, conservation of the component a . J of the total angular momentum about the inertial origin along every motion of the global potential branch, its sharpness in that branch under a nonzero rotational derivative of U, and the vector form when the potential is invariant under all rotations about the origin. The theorem is conditional on the adopted force branch, the declared potential and the absence of residual forces in the conservation clauses; it asserts no rotation symmetry of any particular force law and carries no empirical content."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.4.1 'Example: Isotropy of Space', printed page 25 (PDF page 31): rotational invariance of a closed system and conservation of the component of total angular momentum in the direction of the rotation axis, with the sign convention of the cross product r_i x p_i"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.3, printed pages 13-14 (PDF pages 16-17): a system invariant under rotations about a symmetry axis has a conserved angular momentum, with p_phi = n . sum_i r_i x m_i v_i and the central-force note"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Section 1.8.5: for the central-potential Lagrangian the Noether integral of the rotation family is the angular momentum (with the source's inverse-family sign convention)"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: pass
---

## Statement

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], with
masses $m_{1},\dots,m_{N}>0$, open configuration domain $Q\subseteq\mathbb R^{3N}$,
time window $I_{0}$, mass operator $\mathsf M$ and $U$ of
[[def-cm03-potential-and-mechanical-energy]]. Take the rotation parameter $s$
to be measured in radians, treated as dimensionless in SI, and take $a$ to be
dimensionless; thus $\lvert a\rvert s$ is dimensionless and the charge
$a\cdot J$ has angular-momentum units (action). Fix a nonzero vector
$a\in\mathbb R^{3}$ and put, for $s\in\mathbb R$ and $z\in\mathbb R^{3}$,

$$R_{a}(s)z:=z+\frac{\sin\bigl(\lvert a\rvert s\bigr)}{\lvert a\rvert}\,a\times z+\frac{1-\cos\bigl(\lvert a\rvert s\bigr)}{\lvert a\rvert^{2}}\,a\times(a\times z),$$

where $\times$ is the cross product of $\mathbb R^{3}$
([[def-cross-product-in-r3]]). For a configuration $x=(x_{1},\dots,x_{N})$
write $R_{a}(s)x:=(R_{a}(s)x_{1},\dots,R_{a}(s)x_{N})$, and let
$\xi^{a}:Q\to\mathbb R^{3N}$ be the vector field with $\xi^{a}_{i}(x):=a\times x_{i}$.
Write $J(t):=\sum_{i}x_{i}(t)\times m_{i}x_{i}'(t)$ for the total angular
momentum about the inertial origin ([[def-cm03-centre-of-mass-and-momenta]]).
Then:

1. **(infinitesimal and finite invariance).** The following are equivalent:
   (i) $\sum_i\langle a\times x_i,\nabla_{x_i}U(t,x)\rangle=0$
   for every $(t,x)\in I_0\times Q$; (ii) $U(t,R_a(s)x)=U(t,x)$
   whenever $\{R_a(r)x:r\text{ between }0\text{ and }s\}$ lies in $Q$.
   More generally put $D_x:=\{s\in\mathbb R:R_a(s)x\in Q\}$, an open set
   containing $0$, with interval components its maximal open intervals.
   Under (i), $s\mapsto U(t,R_a(s)x)$ is constant on each interval
   component. Invariance for every $s\in D_x$, including components
   separated by an excluded arc, holds if and only if all these constants
   equal $U(t,x)$. This agreement is automatic if $D_x$ is connected,
   in particular if the whole rotation orbit is contained in $Q$.

2. **(the symmetry datum).** Under these equivalent hypotheses the strict
   datum $\tau\equiv0$, $\xi\equiv\xi^{a}$, $B\equiv0$ satisfies the model's
   Noether identity on $O$ in the sense of
   [[def-cm08-symmetry-of-the-mechanical-lagrangian]].

3. **(conservation of the angular-momentum component).** If in addition
   $d\equiv0$, then for every motion $x:J\to Q$ of the model on an interval
   $J$ with nonempty interior ([[def-cm02-newtonian-flow]]), the function
   $t\mapsto a\cdot J(t)=\sum_{i}\bigl\langle a,\,x_{i}(t)\times m_{i}x_{i}'(t)\bigr\rangle$
   is constant on $J$.

4. **(sharpness).** If $d\equiv0$ and there is a state
   $(t_{0},x_{0})\in I_{0}\times Q$ with
   $g:=\sum_{i}\bigl\langle a\times x_{0,i},\,\nabla_{x_{i}}U(t_{0},x_{0})\bigr\rangle\ne0$,
   then the maximal motion $x_{\max}:J_{\max}\to Q$ through the initial datum
   $(t_{0},x_{0},0)$ satisfies
   $\frac{d}{dt}\bigl(a\cdot J(t)\bigr)|_{t_{0}}=-g\ne0$; in particular
   $a\cdot J$ is not constant on $J_{\max}$.

5. **(vector form).** If $\sum_{i}x_{i}\times\nabla_{x_{i}}U(t,x)=0$ for every
   $(t,x)\in I_{0}\times Q$, then with $d\equiv0$ the total angular momentum
   vector $J$ is constant along every motion.

The hypothesis is a condition on the declared potential — equivalently, by
clause 1, invariance of $U$ along admissible arcs of the simultaneous rotations
$R_a(s)$ of all labels, with full endpoint invariance requiring the component
agreement specified there; the conservation clauses are conditional deductions of the global
potential branch, and no symmetry of any particular force law and no empirical
content is asserted.

## Facts & Assumptions

**Given:** The model, the presentation $(U,d)$, the vector $a$, the family $R_{a}$, the field $\xi^{a}$, and the motions and state occurring in the clauses.

[F1] Model data and chart ([[def-cm07-action-and-mechanical-lagrangian]], [[def-cm03-potential-and-mechanical-energy]], [[def-cm-time-dependent-lagrangian-and-action]], [[def-cm01-configuration]]): $O=I_{0}\times Q\times\mathbb R^{3N}$ is open and $(O,L)$ is a time-dependent Lagrangian chart over every $[a',b']\times Q$ with $[a',b']\subseteq I_{0}$; $L=K-U$ with $L_{x}(t,x,v)=-\nabla_{x}U(t,x)$, $L_{v}(t,x,v)=\mathsf M v$; the force map is $F_{i}=-\nabla_{x_{i}}U+d_{i}$.

[F2] The model's symmetry vocabulary ([[def-cm08-symmetry-of-the-mechanical-lagrangian]]): a strict datum $\tau\equiv0,\xi,B$ satisfies the model identity when $L_{x}\cdot\xi+L_{v}\cdot D_{t}\xi=D_{t}B$ on $O$, with charge $(\mathsf M v)\cdot\xi-B$; a strict datum with $\xi$ independent of $t$ is an infinitesimal point symmetry of the chart $(O,L)$.

[F3] The point Noether theorem of the model ([[pthm-cm08-point-noether]] clause 1): a strict datum with $\xi$ independent of $t$ satisfying the model identity and $d\equiv0$ has constant charge along every motion.

[F4] The cross product ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]]): the product is bilinear and alternating, $u\times u=0$, $\langle u\times v,w\rangle=\det[u\ v\ w]$, and $u\times v$ is orthogonal to $u$ and $v$; in particular $\langle u,u\times w\rangle=0$ and $\langle a,u\times w\rangle=\langle a\times u,w\rangle$ for all $a,u,w$.

[F5] Trigonometry and calculus of the family ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-vector-valued-derivative-and-integral]], [[def-interval]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-euclidean-inner-product]]): sine and cosine are differentiable with the displayed derivatives, $\sin0=0$, $\cos0=1$ and $\sin^{2}+\cos^{2}=1$; sums and scalar multiples of differentiable curves differentiate by the usual rules.

[F6] Calculus along the motion and rotation family ([[thm-chain-rule-for-total-derivatives]], [[def-euclidean-inner-product]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[cor-zero-derivative-implies-constant]], [[def-interval]]): $D_x$ is open and contains $0$; its interval components are maximal open intervals. On each such interval $s\mapsto U(t,R_a(s)x)$ is $C^1$ with derivative $\sum_i\langle\nabla_{x_i}U(t,R_a(s)x),\frac{d}{ds}R_a(s)x_i\rangle$. A $C^1$ function on an interval with zero derivative is constant; openness alone does not join separated admissible arcs.

[F7] Moment and motion identities ([[def-cm03-centre-of-mass-and-momenta]], [[def-cm02-newtonian-flow]], [[post-cm02-force-superposition]]): $J=\sum_{i}x_{i}\times m_{i}x_{i}'$ with $m_{i}x_{i}''=-\nabla_{x_{i}}U+d_{i}$ along a motion; through every initial datum there is exactly one maximal motion with open maximal interval containing the initial time.

## Proof

**Proof technique:** direct; compute the derivative of the rotation family and identify the rotational derivative of the potential, verify the strict Noether identity, transfer conservation from the model's point Noether theorem and compute the failure rate.

1.1 The family and its derivative: for all $s\in\mathbb R$ and $z\in\mathbb R^{3}$ one has $R_{a}(s)a=a$, $\lvert R_{a}(s)z\rvert=\lvert z\rvert$, and $$\frac{d}{ds}\bigl(R_{a}(s)z\bigr)=a\times\bigl(R_{a}(s)z\bigr).$$ Indeed, expanding the three components of $a\times(a\times z)$ with the coordinate formula of [F4] gives the identity $a\times(a\times z)=a\,(a\cdot z)-\lvert a\rvert^{2}z$, whence $a\times(a\times(a\times z))=-\lvert a\rvert^{2}(a\times z)$; differentiating the displayed definition by [F5] gives $\frac{d}{ds}(R_{a}(s)z)=\cos(\lvert a\rvert s)(a\times z)+\frac{\sin(\lvert a\rvert s)}{\lvert a\rvert}a\times(a\times z)$, and substituting the two identities into $a\times(R_{a}(s)z)$ gives the same expression; the first two claims follow from $a\times a=0$ and from $\frac{d}{ds}\lvert R_{a}(s)z\rvert^{2}=2\langle R_{a}(s)z,a\times R_{a}(s)z\rangle=0$ together with $\lvert R_{a}(0)z\rvert=\lvert z\rvert$. [F4, F5, algebra]

1.2 Clause 2, the identity: for $\xi=\xi^{a}$ one has $D\xi^{a}(x)v=(a\times v_{1},\dots,a\times v_{N})$ because $x_{i}\mapsto a\times x_{i}$ is linear, so the strict identity reads $$L_{x}\cdot\xi^{a}+L_{v}\cdot D\xi^{a}v=-\sum_{i}\bigl\langle a\times x_{i},\nabla_{x_{i}}U\bigr\rangle+\sum_{i}\bigl\langle m_{i}v_{i},a\times v_{i}\bigr\rangle;$$ the second sum vanishes because $\langle v_{i},a\times v_{i}\rangle=0$ by [F4], and the first vanishes under hypothesis (i); hence the left-hand side is $0=D_{t}B$. [F1, F2, F4, given, algebra]

1.3 Clause 4, the rate: along a motion with $d\equiv0$, the function $t\mapsto a\cdot J(t)$ is differentiable with $$\frac{d}{dt}\bigl(a\cdot J\bigr)=\sum_{i}\Bigl\langle a,\,x_{i}'\times m_{i}x_{i}'+x_{i}\times m_{i}x_{i}''\Bigr\rangle=\sum_{i}\bigl\langle a,\,x_{i}\times(-\nabla_{x_{i}}U)\bigr\rangle=-\sum_{i}\bigl\langle a\times x_{i},\nabla_{x_{i}}U\bigr\rangle,$$ where the second equality uses $x_{i}'\times x_{i}'=0$ and $m_{i}x_{i}''=-\nabla_{x_{i}}U$, and the last uses $\langle a,x_{i}\times\nabla_{x_{i}}U\rangle=\langle a\times x_{i},\nabla_{x_{i}}U\rangle$; at the state $(t_{0},x_{0})$ the maximal motion through $(t_{0},x_{0},0)$ therefore has derivative $-g$ there. [F4, F7, algebra]

2.1 Clause 1, (i) implies (ii): $D_x$ is open by continuity of the rotation family, but can have several interval components. On each component $f(s):=U(t,R_a(s)x)$ is $C^1$ and has derivative $\sum_i\langle\nabla_{x_i}U(t,R_a(s)x),a\times R_a(s)x_i\rangle=0$ by [F6], step 1.1 and (i). It is therefore constant there. When the whole arc between $0$ and $s$ lies in $Q$, both parameters lie in the same interval component and $f(s)=f(0)$, which is (ii). The calculation also gives constancy on every component; equality at every admissible endpoint is equivalent to agreement of all component constants with $f(0)$, automatic for connected $D_x$. [F6, step 1.1, given]

2.2 Clause 3, conservation: under hypothesis (i) and $d\equiv0$, step 1.2 exhibits a strict datum with $\xi^{a}$ independent of $t$ satisfying the model identity, so clause 1 of [F3] applies to every motion and gives that the charge $(\mathsf M x')\cdot\xi^{a}=\sum_{i}\langle m_{i}x_{i}',a\times x_{i}\rangle=\sum_{i}\langle a,x_{i}\times m_{i}x_{i}'\rangle=a\cdot J$ is constant on $J$. [F2, F3, step 1.2, algebra]

2.3 Clause 4, non-constancy: with $d\equiv0$ and $g\ne0$, step 1.3 gives that the derivative of $a\cdot J$ along the maximal motion at $t_{0}$ is $-g\ne0$; a function constant on the interval $J_{\max}$ would have vanishing derivative there by [F6]. [F6, step 1.3]

3.1 Clause 1, (ii) implies (i): if (ii) holds then for each $(t,x)$ the function $f$ of step 2.1 is constant on a neighbourhood of $0$, so its derivative at $0$ vanishes; by [F6] and step 1.1 that derivative is $\sum_{i}\langle\nabla_{x_{i}}U(t,x),a\times x_{i}\rangle$, which is (i). [F6, step 1.1, step 2.1]

3.2 Clause 5: assume $\sum_{i}x_{i}\times\nabla_{x_{i}}U=0$ and $d\equiv0$; by [F4], $\sum_{i}\langle a\times x_{i},\nabla_{x_{i}}U\rangle=\langle a,\sum_{i}x_{i}\times\nabla_{x_{i}}U\rangle=0$ for every $a\in\mathbb R^{3}$, so hypothesis (i) holds for each of the coordinate vectors $a=e_{1},e_{2},e_{3}$, and step 2.2 gives that each component $e_{k}\cdot J$ of the angular momentum is constant along every motion, which is the assertion that the vector $J$ is constant. [F4, step 2.2, algebra]

4.1 Clause 1 is steps 2.1 and 3.1, clause 2 is step 1.2, clause 3 is step 2.2, clause 4 is steps 1.3 and 2.3, and clause 5 is step 3.2; the conservation clauses are conditional on $d\equiv0$ and the rotational invariance of the declared potential, and no converse from conservation to a symmetry and no empirical claim is made. [step 1.1, step 1.2, step 2.2, step 2.3, step 3.2] ∎

## Remarks

- **Separated arcs.** On two disjoint balls centred at opposite points of
  a circle about the axis, the potential equal to $0$ on one ball and $1$
  on the other has zero rotational derivative everywhere, but a rotation
  between the two centres changes its value. Differential conservation
  holds on arbitrary open $Q$; comparing separated arcs requires the
  compatibility in clause 1.

- **Torque reading.** Under the potential presentation the total torque of the
  potential forces about the origin is $-\sum_{i}x_{i}\times\nabla_{x_{i}}U$,
  so hypothesis (i) for all $a$ is the vanishing of that torque; clause 5 is
  then the familiar statement that a model whose potential exerts no torque
  about the origin conserves its total angular momentum. The balance theorem
  [[pthm-cm03-angular-momentum-balance]] reaches the conservation statement
  from centrality of the pair forces and vanishing external torque, a different
  hypothesis; the two routes are complementary and neither is a consequence of
  the other.

- **Angular momentum about other origins.** The charge constructed here is the
  angular momentum about the inertial origin, which is where the rotation
  family $R_{a}$ acts. For rotations about another fixed point $o$ the same
  computation with $x_{i}-o$ in place of $x_{i}$ produces the component of the
  angular momentum about $o$; that variant is not needed on this page and is
  not asserted.

- **Empirical status.** The statement identifies a conserved quantity of the
  model under an explicit rotational invariance hypothesis of the declared
  potential; it is a conditional deduction inside the model, and no claim is
  made that any actual force law is rotation invariant, nor is any converse
  from an observed conservation to a symmetry of a model.
