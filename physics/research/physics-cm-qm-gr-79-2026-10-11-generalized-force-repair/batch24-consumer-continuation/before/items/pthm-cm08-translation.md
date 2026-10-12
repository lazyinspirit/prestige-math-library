---
id: pthm-cm08-translation
kind: physics-theorem
title: "Translation symmetry of the model's Lagrangian and conservation of total momentum: exact hypothesis, conservation and its sharpness"
status: draft
origin: session
domain: physics
dependency_level: 17
deps: [def-cm08-symmetry-of-the-mechanical-lagrangian, pthm-cm08-point-noether, def-cm03-centre-of-mass-and-momenta, def-cm02-newtonian-flow, post-cm02-force-superposition, def-cm03-potential-and-mechanical-energy, def-cm07-action-and-mechanical-lagrangian, def-cm-time-dependent-lagrangian-and-action, def-cm01-configuration, def-cm01-units, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, cor-zero-derivative-implies-constant, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  def-cm08-symmetry-of-the-mechanical-lagrangian: formulation-prerequisite
  pthm-cm08-point-noether: physical-result
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm03-potential-and-mechanical-energy: physical-assumption
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
physical_scope: "Translation symmetry of the force model with a declared potential presentation in one inertial frame: the exact equivalence between the differential invariance condition sum_i a . grad_i U = 0 and the invariance of U under the simultaneous translation of all labels, the resulting strict symmetry datum and conservation of the component a . P of the total momentum along every motion of the global potential branch, the sharpness statement that a nonzero directional derivative at a state produces a motion whose momentum component is not constant, and the vector form for a fully translation-invariant potential. The theorem is conditional on the adopted force branch, the declared potential and the absence of residual forces in the conservation clauses; it asserts no translation symmetry of any particular force law and carries no empirical content."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.4.1 'Example: Homogeneity of Space', printed pages 24-25 (PDF pages 30-31): translation invariance of a closed system of particles and the conserved total linear momentum"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.3, printed pages 12-13 (PDF pages 15-16): the centre-of-mass momentum is conserved because the potential is independent of the centre-of-mass coordinate"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Section 1.8.5: the Noether integral of a parametric symmetry as the momentum paired with the generator"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: pass
---

## Statement

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], with
masses $m_{1},\dots,m_{N}>0$, open configuration domain $Q\subseteq\mathbb R^{3N}$,
time window $I_{0}$, mass operator $\mathsf M$ and $U$ of
[[def-cm03-potential-and-mechanical-energy]]. Fix a nonzero vector
$a\in\mathbb R^{3}$ and let $\xi^{a}\in\mathbb R^{3N}$ be the configuration
vector whose $i$-th three-dimensional block is $\xi^{a}_{i}:=a$, so that
$(\mathsf M v)\cdot\xi^{a}=\sum_{i}m_{i}\,a\cdot v_{i}$ for a
velocity $v$. Write $P(t):=\sum_{i}m_{i}x_{i}'(t)$ for the total momentum of
[[def-cm03-centre-of-mass-and-momenta]]. Then:

1. **(two forms of the hypothesis).** The following are equivalent:
   (i) $\sum_{i=1}^{N}a\cdot\nabla_{x_{i}}U(t,x)=0$ for every
   $(t,x)\in I_{0}\times Q$; (ii) $U(t,x+s\xi^{a})=U(t,x)$ for every
   $(t,x)\in I_{0}\times Q$ and every $s\in\mathbb R$ with $x+s\xi^{a}\in Q$.

2. **(the symmetry datum).** Under these equivalent hypotheses the strict
   datum $\tau\equiv0$, $\xi\equiv\xi^{a}$, $B\equiv0$ satisfies the model's
   Noether identity on $O$ in the sense of
   [[def-cm08-symmetry-of-the-mechanical-lagrangian]].

3. **(conservation of the momentum component).** If in addition $d\equiv0$,
   then for every motion $x:J\to Q$ of the model on an interval $J$ with
   nonempty interior ([[def-cm02-newtonian-flow]]), the function
   $t\mapsto a\cdot P(t)=\sum_{i}\bigl\langle a,\,m_{i}x_{i}'(t)\bigr\rangle$
   is constant on $J$.

4. **(sharpness).** If $d\equiv0$ and there is a state
   $(t_{0},x_{0})\in I_{0}\times Q$ with
   $g:=\sum_{i}a\cdot\nabla_{x_{i}}U(t_{0},x_{0})\ne0$, then the maximal motion
   $x_{\max}:J_{\max}\to Q$ through the initial datum $(t_{0},x_{0},0)$
   satisfies $\frac{d}{dt}\bigl(a\cdot P(t)\bigr)|_{t_{0}}=-g\ne0$; in
   particular $a\cdot P$ is not constant on $J_{\max}$.

5. **(vector form).** If $\sum_{i}\nabla_{x_{i}}U(t,x)=0$ for every
   $(t,x)\in I_{0}\times Q$, then with $d\equiv0$ the total momentum vector
   $P$ is constant along every motion.

The hypotheses are conditions on the declared potential; the conservation
clauses are conditional deductions of the global potential branch, the
sharpness clause locates the failure at an actual motion, and no symmetry of
any particular force law and no empirical content is asserted.

## Facts & Assumptions

**Given:** The model, the presentation $(U,d)$, the vector $a$, the datum $\xi^{a}$, and the motions and state occurring in the clauses.

[F1] Model data and chart ([[def-cm07-action-and-mechanical-lagrangian]], [[def-cm03-potential-and-mechanical-energy]], [[def-cm-time-dependent-lagrangian-and-action]], [[def-cm01-configuration]]): $O=I_{0}\times Q\times\mathbb R^{3N}$ is open and $(O,L)$ is a time-dependent Lagrangian chart over every $[a',b']\times Q$ with $[a',b']\subseteq I_{0}$; $L=K-U$ with $L_{x}(t,x,v)=-\nabla_{x}U(t,x)$, $L_{v}(t,x,v)=\mathsf M v$; the force map is $F_{i}=-\nabla_{x_{i}}U+d_{i}$.

[F2] The model's symmetry vocabulary ([[def-cm08-symmetry-of-the-mechanical-lagrangian]]): a strict datum $\tau\equiv0,\xi,B$ satisfies the model identity when $L_{x}\cdot\xi+L_{v}\cdot D_{t}\xi=D_{t}B$ on $O$, and its charge is $(\mathsf M v)\cdot\xi-B$; a strict datum with $\xi$ independent of $t$ is an infinitesimal point symmetry of the chart $(O,L)$.

[F3] The point Noether theorem of the model ([[pthm-cm08-point-noether]] clause 1): if the strict datum has $\xi$ independent of $t$, satisfies the model identity and $d\equiv0$, then its charge is constant along every motion.

[F4] Motions and maximal motions ([[def-cm02-newtonian-flow]], [[post-cm02-force-superposition]]): a motion $x:J\to Q$ satisfies $\mathsf M x''=-\nabla_{x}U+d$ on $J$; through every initial datum there is exactly one maximal motion with open maximal interval containing the initial time.

[F5] Momentum quantities ([[def-cm03-centre-of-mass-and-momenta]]): $P=\sum_{i}m_{i}x_{i}'$ is the total momentum, a curve in $(\mathbb R^{3})^{N}$ when the $x_{i}$ are $C^{1}$.

[F6] Calculus along the motion and along the translation family ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-vector-valued-derivative-and-integral]], [[def-euclidean-inner-product]], [[def-interval]], [[cor-zero-derivative-implies-constant]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]]): for fixed $(t,x)$ the set of $s$ with $x+s\xi^{a}\in Q$ is an open interval containing $0$, on which $s\mapsto U(t,x+s\xi^{a})$ has derivative $\sum_{i}a\cdot\nabla_{x_{i}}U(t,x+s\xi^{a})$; a $C^{1}$ function on an open interval with vanishing derivative is constant; sums and scalar multiples of differentiable curves differentiate by the usual rules.

## Proof

**Proof technique:** direct; prove the equivalence of the two forms of the hypothesis by differentiating and integrating along the translation segment, verify the strict identity, transfer conservation from the model's point Noether theorem, and compute the failure rate along the maximal motion.

1.1 Clause 1, (i) implies (ii): fix $(t,x)\in I_{0}\times Q$ and let $J_{x}:=\{s\in\mathbb R:x+s\xi^{a}\in Q\}$, an open interval containing $0$ because $Q$ is open and $s\mapsto x+s\xi^{a}$ is continuous; the function $f(s):=U(t,x+s\xi^{a})$ is $C^{1}$ on $J_{x}$ with $f'(s)=\sum_{i}a\cdot\nabla_{x_{i}}U(t,x+s\xi^{a})$ by the chain rule, which vanishes on $J_{x}$ under hypothesis (i), so $f$ is constant on $J_{x}$ by [F6]; hence $U(t,x+s\xi^{a})=U(t,x)$ for every $s\in J_{x}$, which is (ii). [F6, given, algebra]

1.2 Clause 2, the identity: for the datum $\tau\equiv0$, $\xi\equiv\xi^{a}$, $B\equiv0$ one has $D_{t}\xi^{a}=0$ because $\xi^{a}$ is constant, and $L_{x}\cdot\xi^{a}=-\sum_{i}a\cdot\nabla_{x_{i}}U$; under hypothesis (i) the left-hand side of the strict identity is therefore $-\sum_{i}a\cdot\nabla_{x_{i}}U+(\mathsf M v)\cdot0=0$, while the right-hand side is $D_{t}B=0$; so the model identity holds on $O$. [F1, F2, given, algebra]

1.3 Clause 4, the rate: along a motion with $d\equiv0$, the function $t\mapsto a\cdot P(t)=\sum_{i}\langle a,m_{i}x_{i}'(t)\rangle$ is differentiable by [F4] and [F5] with $$\frac{d}{dt}\bigl(a\cdot P\bigr)=\sum_{i}\bigl\langle a,\,m_{i}x_{i}''(t)\bigr\rangle=-\sum_{i}a\cdot\nabla_{x_{i}}U(t,x(t));$$ hence at the state $(t_{0},x_{0})$ the maximal motion through $(t_{0},x_{0},0)$ has derivative $-g$ there. [F1, F4, F5, algebra]

2.1 Clause 1, (ii) implies (i): if (ii) holds then for each $(t,x)$ the function $f$ of step 1.1 is constant on a neighbourhood of $0$ in $J_{x}$, so its derivative at $0$, namely $\sum_{i}a\cdot\nabla_{x_{i}}U(t,x)$, vanishes; this is (i). [F6, step 1.1, algebra]

2.2 Clause 3, conservation: under hypothesis (i) and $d\equiv0$, step 1.2 exhibits a strict datum with $\xi^{a}$ independent of $t$ satisfying the model identity, so clause 1 of [F3] applies to every motion and gives that its charge $(\mathsf M x')\cdot\xi^{a}-0=\sum_{i}\langle a,m_{i}x_{i}'\rangle=a\cdot P$ is constant on $J$. [F2, F3, step 1.2]

2.3 Clause 4, non-constancy: with $d\equiv0$ and $g\ne0$, step 1.3 gives that the derivative of $a\cdot P$ along the maximal motion at $t_{0}$ is $-g\ne0$; a function constant on the interval $J_{\max}$ would have vanishing derivative there by [F6]. [F6, step 1.3]

3.1 Clause 5: assume $\sum_{i}\nabla_{x_{i}}U=0$ and $d\equiv0$; then hypothesis (i) holds for each of the three coordinate vectors $a=e_{1},e_{2},e_{3}$, so step 2.2 gives that each component $e_{k}\cdot P$ of the total momentum is constant along every motion, which is the assertion that the vector $P$ is constant. [F5, step 2.2, algebra]

4.1 Clause 1 is steps 1.1 and 2.1, clause 2 is step 1.2, clause 3 is step 2.2, clause 4 is steps 1.3 and 2.3, and clause 5 is step 3.1; the conservation clauses are conditional on $d\equiv0$ and the stated invariance of the declared potential, and no converse from conservation to a symmetry and no empirical claim is made. [step 1.1, step 1.2, step 2.2, step 2.3, step 3.1] ∎

## Remarks

- **The shape of the hypothesis.** Hypothesis (i) is the invariance of the
  potential under the simultaneous translation of all labels by a common
  vector, and it is strictly stronger than the statement that each
  $\nabla_{x_{i}}U$ is annihilated by $a$ at one point; hypothesis (ii) makes
  the invariance reading explicit, the equivalence being valid on the possibly
  nonconvex open set $Q$ because the translation line meets $Q$ in an open
  interval on which the derivative argument is applied. For a pair-presented
  model with two-body potentials the condition holds identically, which is the
  familiar conservation of total momentum; the Noether route here uses the
  potential presentation and $d\equiv0$, while the balance theorem
  [[pthm-cm03-momentum-balance]] obtains its conservation statement from the
  antisymmetric pair presentation, and neither route implies the other's
  hypotheses.

- **Frame dependence of the charge.** The conserved quantity is the component
  of the total momentum in the fixed inertial frame, with the generator frozen
  at the vector $a$; under a change of inertial frame the description of the
  model changes and the charge transforms with the transformation of $P$ and of
  the transformed generator, so the conservation statement is frame-relative
  in the sense that it is proved in one inertial frame. No relativistic
  interpretation of the charge is intended.

- **Empirical status.** The statement identifies a conserved quantity of the
  model under an explicit symmetry hypothesis of the declared potential; it is
  a conditional deduction within the model and carries no measurement, no
  claim that any actual force law is translation invariant, and no converse.
