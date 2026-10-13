---
id: pthm-cm11-nonlinear-spin-stability
kind: physics-theorem
title: "Nonlinear stability of the torque-free spin of the rigid-material model about an extreme principal axis, and instability about the intermediate axis, with an explicit escape time and the orientation caveat"
status: published
origin: session
domain: physics
dependency_level: 16
deps: [post-cm10-rigid-material, post-cm11-torque-balance, pthm-cm11-euler-equations, pthm-cm11-torque-free-invariants, pthm-cm11-principal-rotations, def-cm10-rigid-body-configuration, def-cm10-angular-velocity, def-cm10-inertia-tensor, pthm-cm10-principal-axes, thm-cm-stability-of-extreme-principal-axes, thm-cm-instability-of-the-intermediate-axis, def-cm-equilibrium-and-lyapunov-stability, lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity, def-cm-quaternion-rotation-map-and-cover, def-countable-choice, lem-cm-matrix-curve-derivative-rules, lem-cm-skew-matrix-cross-product-correspondence, lem-cross-product-is-bilinear-alternating-and-orthogonal, def-cross-product-in-r3, def-euclidean-inner-product, def-cm-special-orthogonal-group, def-interval]
dependency_roles:
  post-cm10-rigid-material: physical-assumption
  post-cm11-torque-balance: physical-assumption
  pthm-cm11-euler-equations: physical-result
  pthm-cm11-torque-free-invariants: physical-result
  pthm-cm11-principal-rotations: physical-result
  def-cm10-rigid-body-configuration: formulation-prerequisite
  def-cm10-angular-velocity: formulation-prerequisite
  def-cm10-inertia-tensor: formulation-prerequisite
  pthm-cm10-principal-axes: physical-result
  thm-cm-stability-of-extreme-principal-axes: mathematical-premise
  thm-cm-instability-of-the-intermediate-axis: mathematical-premise
  def-cm-equilibrium-and-lyapunov-stability: mathematical-premise
  lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity: mathematical-premise
  def-cm-quaternion-rotation-map-and-cover: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-cm-matrix-curve-derivative-rules: mathematical-premise
  lem-cm-skew-matrix-cross-product-correspondence: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Lyapunov stability and instability of the torque-free spin of a nondegenerate rigid-material model of [[post-cm10-rigid-material]] with pairwise distinct principal moments, stated for the model's motions with time window containing $[0,\\infty)$: spins about the largest and smallest principal axes are Lyapunov stable in the body angular momentum, with an explicit conserved deviation bound, and spins about the intermediate axis are unstable with an explicit escape time; the escaping perturbation is realised by an actual torque-free motion. The stability is a statement about the body-frame angular momentum and angular velocity only: two motions with the same constant body angular velocity can have orientations differing by a fixed nontrivial rotation at every time, so no orientation stability is asserted. No measurement, damping, dissipation or empirical value is asserted; the countable-choice assumption is inherited for finite mass moments and inertial integrals, and for the double-cover supplier used in the quaternion constructions. The stability and escape calculations for a given positive diagonal inertia matrix introduce no additional choice principle."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 3.4, Eqs. (3.34)-(3.45), printed pages 55-58 (PDF pages 61-64): the free top,Poinsot construction, and the intermediate-axis instability demonstrated by an explicit perturbation of the invariants"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 4 Section 4.4, Eqs. (4.63)-(4.71), chapter pages 15-16 (PDF pages 69-70): free-rotation stability about the extreme principal axes and the instability of the intermediate axis"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), Sections 2.8.2-2.9: the invariant level curves of the free rigid body and the behaviour of the intermediate-axis spin"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "I. W. Stewart, Advanced Classical Mechanics (MIT 8.09 Advanced Classical Mechanics, Fall 2014 course text), Chapter 2 Section 2.4, printed pages 41-48 (PDF pages 44-51): Euler equations and the linear and qualitative treatment of rotations about the principal axes"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]), carried through [[post-cm10-rigid-material]]
clause (i) and [[def-cm10-inertia-tensor]] for finite mass moments, through
[[post-cm11-torque-balance]] clause (i) and the inertial-integral suppliers
of [[pthm-cm11-euler-equations]] and [[pthm-cm11-torque-free-invariants]],
and through the double-cover supplier of
[[def-cm-quaternion-rotation-map-and-cover]] for the surjectivity used to
choose initial unit quaternions. The stability and escape calculations
for a given positive diagonal $I$ introduce no additional choice principle.
Adopt a **nondegenerate** model of the rigid-material branch
[[post-cm10-rigid-material]] with pairwise distinct principal moments, and
label a positively oriented principal basis $(e_{1},e_{2},e_{3})$, $Ie_{j}=I_{j}e_{j}$, so that
$$I_{1}<I_{2}<I_{3}.$$
Use the model in the **torque-free** branch of [[post-cm11-torque-balance]]
clause (iv). Along any motion write $l:=I\omega$; the torque-free $l$-path
solves $l'=l\times(I^{-1}l)$ and is the restriction of a solution defined on
all of $\mathbb R$ ([[pthm-cm11-torque-free-invariants]] clauses 2 and 4).
Write $I_0$ for the model's time window. All physical realizations below
use paths restricted to $I_0$; clause 3's forward-time realization assumes
$[0,\infty)\subseteq I_0$. Let $L\neq0$. Then:

1. **Stability of the extreme-axis spins.** For $j=1$ and $j=3$ the constant
   path $t\mapsto Le_{j}$ is Lyapunov stable for the $l$-system
   ([[def-cm-equilibrium-and-lyapunov-stability]]): for every $\varepsilon>0$
   there is $\delta\in(0,\varepsilon]$ such that every maximal solution $l$ with
   $\lVert l(0)-Le_{j}\rVert_2<\delta$ is defined for all $t\ge0$ and
   satisfies $\lVert l(t)-Le_{j}\rVert_2<\varepsilon$ for all $t\ge0$.
   Consequently every torque-free motion of a model of the branch whose time
   window contains $[0,\infty)$ and whose datum satisfies
   $\lVert l(0)-Le_{j}\rVert_2<\delta$ has, with $\Omega:=L/I_{j}$,
   $$\lVert l(t)-Le_{j}\rVert_2<\varepsilon,\qquad \lVert\omega(t)-\Omega e_{j}\rVert_2<\frac{\varepsilon}{I_{\min}}\qquad(t\ge0),$$
   where $I_{\min}=I_{1}$.
2. **Explicit deviation bound.** For $j=1$ define on $\mathbb R^{3}$
   $$c_{1}:=\tfrac12\Bigl(\frac1{I_{1}}-\frac1{I_{2}}\Bigr)>0,\qquad D_{1}(l):=\tfrac12\Bigl(\frac{\langle l,l\rangle}{I_{1}}-\langle l,I^{-1}l\rangle\Bigr)\ \ge0,$$
   and for $j=3$
   $$c_{3}:=\tfrac12\Bigl(\frac1{I_{2}}-\frac1{I_{3}}\Bigr)>0,\qquad D_{3}(l):=\tfrac12\Bigl(\langle l,I^{-1}l\rangle-\frac{\langle l,l\rangle}{I_{3}}\Bigr)\ \ge0.$$
   Along every solution of $l'=l\times(I^{-1}l)$ one has, for all $t$ in its
   interval, with $l(0)$ evaluated on its unique global extension if
   the original interval does not contain $0$,
   $$l_{2}(t)^{2}+l_{3}(t)^{2}\le\frac{D_{1}(l(0))}{c_{1}},\qquad l_{1}(t)^{2}+l_{2}(t)^{2}\le\frac{D_{3}(l(0))}{c_{3}}.$$
3. **Instability of the intermediate-axis spin.** The spin $l_{0}:=Le_{2}$ is
   not Lyapunov stable. More precisely, with
   $$a:=\sqrt{\frac{1/I_{1}-1/I_{2}}{1/I_{2}-1/I_{3}}}>0,\qquad c_{0}:=a\Bigl(\frac1{I_{2}}-\frac1{I_{3}}\Bigr)\frac{\sqrt3}{2}\,\lvert L\rvert>0,\qquad \delta_{0}:=\frac{\lvert L\rvert}{2\sqrt{1+a^{2}}},\qquad \varepsilon_{0}:=\frac{\lvert L\rvert}{2},$$
   if $[0,\infty)\subseteq I_0$, then for every $\delta>0$ there are a
   torque-free **motion** of this model on $I_0$, with body angular velocity $\omega$,
   and a time $t\ge0$ such that
   $$\lVert l(0)-Le_{2}\rVert_2<\delta,\qquad \lVert l(t)-Le_{2}\rVert_2\ge\varepsilon_{0},$$
   and the escape can be arranged with $t\le c_{0}^{-1}\log(\delta_{0}/\eta)$
   for any prescribed $\eta\in(0,\min\{\delta_{0},\delta\})$ whose initial
   datum $l^{\eta}:=\bigl(\eta,\ \sigma\sqrt{L^{2}-(1+a^{2})\eta^{2}},\ -\sigma a\eta\bigr)$,
   $\sigma:=L/\lvert L\rvert$, satisfies $\lVert l^{\eta}-Le_{2}\rVert_2<\delta$. Such $\eta$ exist arbitrarily close to zero, and the datum belongs to the $l$-system.
4. **Orientation caveat.** For $j=1$ or $j=3$ and every $\Omega\neq0$ there
   are two torque-free motions of the model, with $c\equiv0$, whose body
   angular velocities are both constantly equal to $\Omega e_{j}$ and whose
   orientation paths $R_{1},R_{2}$ satisfy $R_{2}(t)=R_{1}(t)S$ for every $t$
   and a fixed rotation $S\neq I_{3}$. Consequently clause 1 asserts nothing
   about the closeness of the orientations of two motions.

The statement is conditional on the adopted model and zero-torque balance; it
asserts no force, no damping, no measurement and no empirical law.

## Facts & Assumptions

**Given:** A nondegenerate model of [[post-cm10-rigid-material]] with positively oriented principal basis $(e_{j})$ and moments $I_{1}<I_{2}<I_{3}$, positive; the zero-torque branch; the data $L\neq0$ and the auxiliary constants $a,c_{0},\delta_{0},\varepsilon_{0},c_{1},c_{3},D_{1},D_{3}$ of the statement.

[L1] The torque-free system and its invariants: with $l=I\omega$ one has $l'=l\times(I^{-1}l)$; $\langle l,l\rangle$ and $\tfrac12\langle l,I^{-1}l\rangle$ are constant along solutions; every solution has a unique maximal extension to all of $\mathbb R$; and $l=I\omega$ with $I$ diagonal positive in the principal basis, so $\lVert\omega\rVert_2\le\lVert l\rVert_2/I_{\min}$ and $\lVert l\rVert_2\le I_{\max}\lVert\omega\rVert_2$ ([[pthm-cm11-torque-free-invariants]] clauses 2-4, [[pthm-cm11-euler-equations]] clause 4, [[pthm-cm10-principal-axes]] clauses (a) and (d), [[def-cm10-inertia-tensor]]).

[L2] Stability supplier ([[thm-cm-stability-of-extreme-principal-axes]]): for positive reals $I_{1}<I_{2}<I_{3}$, the diagonal map $I$ and the field $F(l)=l\times(I^{-1}l)$ on $\mathbb R^{3}$, the equilibria $Le_{1}$ and $Le_{3}$, $L\neq0$, are Lyapunov stable in the sense of [[def-cm-equilibrium-and-lyapunov-stability]]: for $j=1,3$ and every $\varepsilon>0$ there is $\delta\in(0,\varepsilon]$ such that every maximal solution with $\lVert l(0)-Le_{j}\rVert_2<\delta$ is defined for all $t\ge0$ and satisfies $\lVert l(t)-Le_{j}\rVert_2<\varepsilon$ for all $t\ge0$.

[L3] Instability supplier ([[thm-cm-instability-of-the-intermediate-axis]]): its Statement gives the existential instability and time bound. Its Proof, second through sixth numbered steps, gives the stronger prescribed-datum conclusion used here: in the same setting, $Le_{2}$ is an equilibrium which is not Lyapunov stable, and with the constants $a,c_{0},\delta_{0}$ of the statement and $\varepsilon_{0}=\lvert L\rvert/2$, for every $\delta>0$ there is a solution $l$ of the $l$-system with $\lVert l(0)-Le_{2}\rVert_2<\delta$ and some $t\ge0$ with $\lVert l(t)-Le_{2}\rVert_2\ge\varepsilon_{0}$; the escape can be arranged at a time $t\le c_{0}^{-1}\log(\delta_{0}/\eta)$ from the datum $l^{\eta}$ of the statement for every $0<\eta<\min\{\delta_{0},\delta\}$ additionally satisfying $\lVert l^{\eta}-Le_{2}\rVert_2<\delta$; such data exist arbitrarily close to the spin as $\eta\downarrow0$.

[L4] Realisability: for every continuous $\omega:\mathbb R\to\mathbb R^{3}$ there is a $C^{1}$ rotation path $R:\mathbb R\to SO(3)$ whose body angular velocity is $\omega$; if $\omega$ is $C^{1}$ then $R$ is of class $C^{2}$; and for $q_{0}\in S^{3}$ with $\rho(q_{0})=R_{0}$ the path can be chosen with $R(t_{0})=R_{0}$, the covering map $\rho$ being surjective with $\rho(q_{1}q_{2})=\rho(q_{1})\rho(q_{2})$ on $S^{3}$ ([[lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity]] clauses 1-2, [[def-cm-quaternion-rotation-map-and-cover]] and its second remark).

[L5] The balance check ingredients: for a $C^{1}$ curve $R:I\to SO(3)$ and a $C^{1}$ curve $l:I\to\mathbb R^{3}$ one has $(Rl)'=R'l+Rl'$, $R'=R[\omega]_\times$, and $[\omega]_\times z=\omega\times z$; the cross product is bilinear and alternating with $\omega\times l=-(l\times\omega)$ ([[lem-cm-matrix-curve-derivative-rules]], [[lem-cm-skew-matrix-cross-product-correspondence]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[def-cross-product-in-r3]]); and a $C^{2}$ curve $c$ together with a $C^{2}$ rotation path forms a motion $x=c+R\rho$ of the model ([[def-cm10-rigid-body-configuration]], [[post-cm10-rigid-material]] clause (ii)).

[L6] The spin motions of [[pthm-cm11-principal-rotations]] clauses 1-3 realise every constant body angular velocity $\Omega e_{j}$, $j=1,2,3$, $\Omega\neq0$, as the body angular velocity of a torque-free motion with $l=\Omega I_{j}e_{j}$ constant, and $L_{c}=\Omega I_{j}R(t)e_{j}$ is constant along it.

[L7] The orientation construction uses the imaginary quaternion $\varphi(e_{j})$ with $N(\varphi(e_{j}))=1$ and $\varphi(e_{j})^{2}=-1$, so that $r:=\varphi(e_{j})\in S^{3}$ and $r\varphi(\omega)=\varphi(\omega)r$ for $\omega=\Omega e_{j}$ ([[def-cm-quaternion-rotation-map-and-cover]], [[def-euclidean-inner-product]]).

## Proof

**Proof technique:** direct; quote the two supplier theorems for the $l$-system, translate to the model's motions through $l=I\omega$, realise the escaping $l$-path as a motion by the quaternion lift and the balance check, and separate the orientation statement from the angular-momentum statement.

1.1 The positively oriented principal basis has a basis matrix $Q\in SO(3)$; the skew/cross correspondence of [L5] gives $Q(u\times v)=(Qu)\times(Qv)$, so $l\mapsto l\times(I^{-1}l)$ is the supplier's positive diagonal field in those coordinates. Clause 1 of [L2] gives for $j=1$ and $j=3$ and every $\varepsilon>0$ a $\delta\in(0,\varepsilon]$ such that every maximal solution with $\lVert l(0)-Le_{j}\rVert_2<\delta$ is defined for all $t\ge0$ and satisfies $\lVert l(t)-Le_{j}\rVert_2<\varepsilon$; by [L1] a maximal solution is a solution defined on $\mathbb R$, so this is exactly the Lyapunov stability of $Le_{j}$ for the $l$-system, and the equilibrium property $F(Le_{j})=0$ holds by the alternation of the cross product in [L5]. [given, L1, L2, L5]

1.2 The functions $D_{1}$ and $D_{3}$ of clause 2 are nonnegative, since in the principal basis with $l=\sum_{k}l_{k}e_{k}$ one has $D_{1}(l)=\tfrac12\sum_{k}(1/I_{1}-1/I_{k})l_{k}^{2}$ and $D_{3}(l)=\tfrac12\sum_{k}(1/I_{k}-1/I_{3})l_{k}^{2}$ with all coefficients nonnegative by $I_{1}<I_{2}<I_{3}$; and $2D_{1}(l)\ge(1/I_{1}-1/I_{2})(l_{2}^{2}+l_{3}^{2})$ and $2D_{3}(l)\ge(1/I_{2}-1/I_{3})(l_{1}^{2}+l_{2}^{2})$ because the remaining coefficients are at least these. By [L1] the two combinations $\langle l,l\rangle$ and $\langle l,I^{-1}l\rangle$ are constant along every solution, so $D_{1}$ and $D_{3}$ are constant along solutions and the two displayed inequalities of clause 2 follow. [given, L1, algebra]

2.1 Fix an admissible prescribed $\eta$ from clause 3. Apply the invariant-branch argument of [L3] with the auxiliary number $\eta_0:=(\eta+\delta_0)/2$, so $0<\eta<\eta_0<\delta_0$, as required in that supplier's second proof step. That argument starts with exactly $l(0)=l^\eta$, with $C=L^2$ and $E=L^2/(2I_2)$; until $l_1$ first reaches $\delta_0$, it obtains $l_3=-\sigma a l_1$, $\sigma l_2\ge\sqrt3|L|/2$ and $l_1'\ge c_0l_1$. Its fifth and sixth steps therefore give a first hitting time $t\le c_0^{-1}\log(\delta_0/\eta)$ and $\|l(t)-Le_2\|_2^2\ge(1+a^2)\delta_0^2=L^2/4$. The construction applies to every such $\eta$, not only to an existentially chosen perturbation. The additional initial-norm condition gives $\|l(0)-Le_2\|_2<\delta$, and $l^\eta\to Le_2$ as $\eta\downarrow0$ ensures admissible data for every $\delta>0$. This proves the prescribed-datum escape and, since $\varepsilon_0=|L|/2>0$ is fixed, instability. [step 1.1, given, L1, L3, algebra]

2.2 Let a torque-free motion have time window containing $[0,\infty)$ and datum with $\lVert l(0)-Le_{j}\rVert_2<\delta$, $j\in\{1,3\}$, for the $\delta$ of step 1.1. Its $l$-path is a solution of the $l$-system by [L1], so $\lVert l(t)-Le_{j}\rVert_2<\varepsilon$ for all $t\ge0$; and since $l=I\omega$ with $I$ diagonal with entries $I_{1},I_{2},I_{3}$, the difference $l(t)-Le_{j}=I(\omega(t)-\Omega e_{j})$ with $\Omega=L/I_{j}$ gives $\lVert\omega(t)-\Omega e_{j}\rVert_2\le\lVert l(t)-Le_{j}\rVert_2/I_{\min}<\varepsilon/I_{\min}$ by [L1]. This completes clause 1. [step 1.1, given, L1]

3.1 Realise the escaping $l$-path of step 2.1 as a motion. Let $l:\mathbb R\to\mathbb R^{3}$ be the global solution of the $l$-system with datum $l(0)=l^{\eta}$ (global by [L1]), and put $\omega:=I^{-1}l$, which is continuous and of class $C^{1}$ because $l$ solves a locally Lipschitz equation; by [L4] there is a $C^{2}$ rotation path $R:\mathbb R\to SO(3)$ with body angular velocity $\omega$, with any prescribed initial orientation $R(0)=R_0\in SO(3)$ by choosing a preimage $q_0$ of $R_0$. Assume $[0,\infty)\subseteq I_0$ as in clause 3, restrict $R$ and $l$ to $I_0$, and define $x:I_0\times\mathbb R^3\to\mathbb R^3$ by $x(t,\rho):=R(t)\rho$ with $c\equiv0$. This is a motion of the same model by [L5], and its domain includes the escape time. Its body angular velocity is $\omega$, so its $l$-data are $l$, and its zero-torque balance holds: with [L5], $(Rl)'=R'l+Rl'=R[\omega]_\times l+Rl'=R(\omega\times l+l')=0$ because $l'=l\times(I^{-1}l)=l\times\omega=-\omega\times l$. Hence the motion is a torque-free motion of the branch with $l(0)=l^{\eta}$, $\lVert l(0)-Le_{2}\rVert_2<\delta$, and $\lVert l(t)-Le_{2}\rVert_2\ge\varepsilon_{0}$ at the escape time $t\le c_{0}^{-1}\log(\delta_{0}/\eta)$ of step 2.1. This is clause 3. [step 2.1, given, L1, L4, L5]

4.1 For clause 4, put $\omega\equiv\Omega e_{j}$ and let $r:=\varphi(e_{j})\in S^{3}$, so that $r\,\varphi(\omega)=\varphi(\omega)\,r$ by [L7] and $N(r)=1$. By [L4] choose $q_{0}\in S^{3}$ with $\rho(q_{0})=R_{0}$ for a fixed $R_{0}\in SO(3)$, let $q:\mathbb R\to S^{3}$ be the lift of $\omega$ with $q(0)=q_{0}$, and put $q_{2}(t):=q(t)r$; then $q_{2}$ is $C^{1}$, takes values in $S^{3}$ because $N$ is multiplicative, and solves $q_{2}'=q'r=\tfrac12q\varphi(\omega)r=\tfrac12q_{2}\varphi(\omega)$ by the commutation in [L7], with $q_{2}(0)=q_{0}r$. Let $R_{1}:=\rho\circ q$ and $R_{2}:=\rho\circ q_{2}$; by the homomorphism property in [L4], $R_{2}(t)=\rho(q(t))\rho(r)=R_{1}(t)S$ with $S:=\rho(r)\in SO(3)$, and $S\neq I_{3}$ because $\rho(r)$ acts as the half-turn about the axis $e_{j}$: $Se_{j}=e_{j}$ and $Se_{a}=-e_{a}$ for $a\neq j$ by the conjugation formula and $\varphi(e_{j})^{2}=-1$ in [L7]. Both $R_{1}$ and $R_{2}$ have body angular velocity $\Omega e_{j}$ by [L4] and so, after restriction to $I_0$ and with $c\equiv0$, are torque-free motions by clause 2 of [[pthm-cm11-principal-rotations]]; their orientations differ by the fixed rotation $S\neq I_{3}$ at every time, which is clause 4. [step 2.2, given, L4, L6, L7, algebra] ∎

## Remarks

- **What is stable.** Clauses 1 and 3 are statements about the body-frame angular momentum $l=I\omega$ (equivalently, through the fixed invertible $I$, about the body angular velocity $\omega$). The orientation of the body in the inertial frame is not controlled, as clause 4 makes explicit; the spin phase about the axis is free.

- **Why the intermediate axis is different.** The two conserved quantities $C=\langle l,l\rangle$ and $E=\tfrac12\langle l,I^{-1}l\rangle$ confine the $l$-path to a compact set, but near $Le_{2}$ that set is a pair of curves through the equilibrium along which $l_{1}$ grows exponentially until the transverse components exchange roles; the explicit datum $l^{\eta}$ and the escape time of clause 3 make the instability effective, and clause 3's realisation shows that it is a statement about motions, not merely about solutions of a differential equation.

- **No dissipation.** The torque-free branch has no damping; with a nonzero datum $\tau$, the statements of this item do not apply, and a dissipative torque model would require its own analysis. The result also asserts no empirical value and no claim that any concrete body has been observed to spin stably or unstably.
