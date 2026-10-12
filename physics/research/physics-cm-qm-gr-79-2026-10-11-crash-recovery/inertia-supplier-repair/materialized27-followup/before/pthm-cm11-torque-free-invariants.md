---
id: pthm-cm11-torque-free-invariants
kind: physics-theorem
title: "Torque-free motion of the rigid-material model: conservation of the angular momentum about the centre of mass, the energy-momentum invariants, the principal-axis equations and global existence of the spin dynamics"
status: draft
origin: session
domain: physics
dependency_level: 14
deps: [post-cm11-torque-balance, post-cm10-rigid-material, pthm-cm11-euler-equations, def-cm10-rigid-body-configuration, def-cm10-angular-velocity, def-cm10-inertia-tensor, pthm-cm10-kinetic-splitting, pthm-cm10-principal-axes, thm-cm-euler-equations-and-torque-free-invariants, def-countable-choice, lem-cm-mass-moments-are-finite, def-cm-mass-distribution-and-inertia-matrix, cor-zero-derivative-implies-constant, lem-cross-product-is-bilinear-alternating-and-orthogonal, thm-cross-product-norm-is-the-two-vector-gram-determinant, def-cross-product-in-r3, def-euclidean-inner-product, def-locally-lipschitz-in-the-state-variable, def-first-order-ode-initial-value-problem-and-solution, thm-picard-lindelof-local-existence-and-uniqueness, def-maximal-ode-solution, thm-existence-and-uniqueness-of-a-maximal-ode-solution, cor-cm-finite-time-breakdown-requires-escape, def-metric-ball, def-cm01-units, def-interval]
dependency_roles:
  post-cm11-torque-balance: physical-assumption
  post-cm10-rigid-material: physical-assumption
  pthm-cm11-euler-equations: physical-result
  def-cm10-rigid-body-configuration: formulation-prerequisite
  def-cm10-angular-velocity: formulation-prerequisite
  def-cm10-inertia-tensor: formulation-prerequisite
  pthm-cm10-kinetic-splitting: physical-result
  pthm-cm10-principal-axes: physical-result
  thm-cm-euler-equations-and-torque-free-invariants: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-cm-mass-moments-are-finite: mathematical-premise
  def-cm-mass-distribution-and-inertia-matrix: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  cor-cm-finite-time-breakdown-requires-escape: mathematical-premise
  def-metric-ball: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Conditional statements about a torque-free motion of a nondegenerate rigid-material model of [[post-cm10-rigid-material]]: the angular momentum about the centre of mass is constant in the inertial frame; the scalars $C=\\lVert l\\rVert_2^{2}=\\lVert L_c\\rVert_2^{2}$ and $E=\\tfrac12\\omega^{\\mathsf T}I\\omega=\\tfrac12 l\\cdot I^{-1}l$ are constants of the motion and $E$ is the rotational kinetic energy; in a principal basis the spin components obey the displayed torque-free equations; and the torque-free spin field is globally solvable in time, so the body angular momentum and the body angular velocity of a torque-free motion are bounded by initial data. The statements are conditional on the adopted zero-torque balance and nondegeneracy, carry the countable-choice assumption used only for the finiteness of the defining integrals, and assert no measurement, no orientation statement and no claim about nature."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 3.4, Eqs. (3.34)-(3.45), printed pages 55-58 (PDF pages 61-64): conservation of angular momentum and energy of the free top, the angular-momentum sphere and energy ellipsoid, and the principal-axis equations"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 4 Section 4.4, Eqs. (4.63)-(4.71), chapter pages 9-12 (PDF pages 63-66): free-rotation invariants and the Poinsot description"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), Sections 2.8.2-2.9: energy and angular-momentum level sets of the free rigid body and Euler's equations"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "I. W. Stewart, Advanced Classical Mechanics (MIT 8.09 Advanced Classical Mechanics, Fall 2014 course text), Chapter 2 Sections 2.4-2.5, printed pages 41-51 (PDF pages 44-54): Euler equations, linear rotational stability at a principal-axis spin, and the symmetric-top reduction"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]), used only through the integrals of
[[pthm-cm10-kinetic-splitting]]. Adopt a model of the rigid-material branch
[[post-cm10-rigid-material]] that is **nondegenerate** in the sense of
[[def-cm10-inertia-tensor]] clause (a) (no line through the origin carries
the whole mass), and use it in the **torque-free** external-torque branch of
[[post-cm11-torque-balance]] clause (iv): the datum vanishes, so along every
motion of the resulting model the adopted balance reads $L_c'=0$ on the time
window $I_0$. Let $\omega$ be the body angular velocity, $I$ the body inertia
matrix and $l:=I\omega$ ([[def-cm10-angular-velocity]],
[[def-cm10-inertia-tensor]]). Then:

1. **Conservation of angular momentum.** The angular momentum about the
   centre of mass $L_c(t)=R(t)l(t)$ of [[pthm-cm10-kinetic-splitting]] clause
   4 is constant on $I_0$; in particular $\lVert L_c\rVert_2$ is constant.
2. **Energy-momentum invariants and principal components.** The scalars
   $$C:=\langle l,l\rangle=\lVert L_c\rVert_2^{2},\qquad E:=\tfrac12\,\omega^{\mathsf T}I\omega=\tfrac12\,\langle l,I^{-1}l\rangle$$
   are constant on $I_0$, and $l$ satisfies the torque-free equation
   $$l'=l\times(I^{-1}l).$$
   If $(e_{1},e_{2},e_{3})$ is an orthonormal eigenbasis of $I$ with
   $Ie_{j}=I_{j}e_{j}$ and $l=\sum_{j}l_{j}e_{j}$
   ([[pthm-cm10-principal-axes]] clauses (a)-(b)), then
   $$C=\sum_{j}l_{j}^{2},\qquad E=\sum_{j}\frac{l_{j}^{2}}{2I_{j}},$$
   and the component equations are
   $$l_{1}'=\Bigl(\frac1{I_{3}}-\frac1{I_{2}}\Bigr)l_{2}l_{3},\qquad l_{2}'=\Bigl(\frac1{I_{1}}-\frac1{I_{3}}\Bigr)l_{1}l_{3},\qquad l_{3}'=\Bigl(\frac1{I_{2}}-\frac1{I_{1}}\Bigr)l_{1}l_{2}.$$
3. **The energy invariant is the rotational kinetic energy.** $E$ equals the
   rotational term $\tfrac12\omega^{\mathsf T}I\omega$ of the model's kinetic
   energy in clause 3 of [[pthm-cm10-kinetic-splitting]]; and with
   $I_{\min}:=\min_{j}I_{j}>0$ one has
   $$\lVert\omega(t)\rVert_2^{2}\le\frac{2E}{I_{\min}}\qquad(t\in I_0).$$
   In particular both $l$ and $\omega$ are bounded on $I_0$.
4. **The spin field is globally solvable.** The autonomous field
   $F(l)=l\times(I^{-1}l)$ on $\mathbb R^{3}$ is locally Lipschitz in the
   state variable ([[def-locally-lipschitz-in-the-state-variable]]), and
   every solution of $l'=F(l)$, with any datum in $\mathbb R^{3}$, is defined
   on all of $\mathbb R$ and satisfies $\lVert l(t)\rVert_2=\lVert l(0)\rVert_2$
   for every $t$. Consequently the $l$-path of a torque-free motion is the
   restriction to $I_0$ of a solution defined on all of $\mathbb R$, and its
   path is contained in the compact level set
   $$\Lambda(C,E):=\bigl\{z\in\mathbb R^{3}:\langle z,z\rangle=C,\ \tfrac12\langle z,I^{-1}z\rangle=E\bigr\},$$
   which is nonempty because it contains $l(0)$.

The statement is conditional on the adopted model, its nondegeneracy and the
zero-torque balance; it asserts no orientation of the body in space, no
measured value and no empirical law.

## Facts & Assumptions

**Given:** A nondegenerate model of [[post-cm10-rigid-material]], its time window $I_0$, one inertial frame, a $C^{2}$ motion $x(t,\rho)=c(t)+R(t)\rho$, its body angular velocity $\omega$ and body inertia matrix $I$, the zero-torque datum $\tau\equiv0$, and the balance $L_c'=\tau$ of [[post-cm11-torque-balance]] clause (iii).

[L1] Model data and integrability: $\nu$ is a centred mass distribution with total mass $m>0$ and finite second moment, and $L_c(t)=R(t)I\omega(t)$ is a well-defined finite vector for every $t$ ([[post-cm10-rigid-material]] clauses (i)-(ii), [[def-cm-mass-distribution-and-inertia-matrix]], [[lem-cm-mass-moments-are-finite]], [[pthm-cm10-kinetic-splitting]] clauses 1 and 4, [[def-cm10-inertia-tensor]] clause (a)).

[L2] The mathematical supplier ([[thm-cm-euler-equations-and-torque-free-invariants]]): for a centred mass distribution not supported on any line through the origin, with inertia matrix $I$, an interval with at least two points, differentiable $c$, twice differentiable $R$ and the rigid placement $x=c+R\rho$ with body angular velocity $\omega$, the balance hypothesis $(Rl)'=\tau$ with $\tau\equiv0$ implies that $l=I\omega$ satisfies $l'=l\times(I^{-1}l)$, that $t\mapsto\langle l,l\rangle$ and $t\mapsto\tfrac12\langle l,I^{-1}l\rangle=\tfrac12\omega^{\mathsf T}I\omega$ are constant, and that in an orthonormal eigenbasis of $I$ with $l=\sum_{j}l_{j}e_{j}$ those constants equal $\sum_{j}l_{j}^{2}$ and $\sum_{j}l_{j}^{2}/(2I_{j})$ and the component equations of clause 2 hold.

[L3] The balance is $L_c'=0$ on $I_0$, $L_c$ is differentiable, and a continuous real function on an interval with vanishing derivative at every interior point is constant ([[post-cm11-torque-balance]] clauses (iii)-(iv), [[cor-zero-derivative-implies-constant]]).

[L4] Principal data: the orthonormal eigenbasis and principal moments, the identity $I\omega=\sum_{j}I_{j}\omega_{j}e_{j}$ for $\omega=\sum_{j}\omega_{j}e_{j}$, and $I_{j}>0$ with $I_{\min}>0$ in the nondegenerate case ([[pthm-cm10-principal-axes]] clauses (a)-(b), (d)-(e), [[def-cm10-inertia-tensor]] clause (a), [[def-euclidean-inner-product]]).

[L5] Kinetic splitting: $K(t)=\tfrac12m\lVert c'(t)\rVert_2^{2}+\tfrac12\omega(t)^{\mathsf T}I\omega(t)$ is the model's kinetic energy, so its rotational term is $\tfrac12\omega^{\mathsf T}I\omega$ ([[pthm-cm10-kinetic-splitting]] clause 3).

[L6] Cross-product and norm algebra: $u\times v$ is bilinear and alternating with $\lVert u\times v\rVert_2\le\lVert u\rVert_2\lVert v\rVert_2$, and $u\times u=0$ ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[thm-cross-product-norm-is-the-two-vector-gram-determinant]], [[def-euclidean-inner-product]]).

[L7] ODE background: $l'=F(l)$ is read as a first-order initial value problem on the open set $U=\mathbb R^{3}$ ([[def-first-order-ode-initial-value-problem-and-solution]]); a continuous field that is locally Lipschitz in the state variable has local existence and uniqueness and a unique maximal solution through every datum ([[def-locally-lipschitz-in-the-state-variable]], [[thm-picard-lindelof-local-existence-and-uniqueness]], [[def-maximal-ode-solution]], [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]); and an autonomous solution whose values near a finite endpoint stay in a compact subset of $U$ extends past that endpoint ([[cor-cm-finite-time-breakdown-requires-escape]] clause 2, [[def-metric-ball]]).

## Proof

**Proof technique:** direct; instantiate the cited mathematical supplier on the model's measure and balance, identify the invariant with the kinetic term, and prove the local Lipschitz bound and the global existence by trapping in a sphere.

1.1 The hypotheses of [L2] are met: $\nu$ is a centred mass distribution with finite second moment by [L1] and is not supported on any line through the origin by the nondegeneracy hypothesis; $I_0$ has at least two points; $c$ is differentiable and $R$ twice differentiable because the configuration path is of class $C^{2}$; and the balance hypothesis $(Rl)'=\tau$ holds with $\tau\equiv0$ because $Rl=L_c$ by [L1] and $L_c'=0$ by [L3]. Hence clause 2 of [L2] gives $l'=l\times(I^{-1}l)$ and the constancy of $C$ and $E$, and clause 3 of [L2] gives their principal-basis expressions and the component equations. [given, L1, L2, L3]

1.2 By [L3] the continuous function $L_c$ has zero derivative on $I_0$, so it is constant on $I_0$; hence $\lVert L_c\rVert_2$ is constant, and $\lVert L_c(t)\rVert_2^{2}=\langle l(t),l(t)\rangle=C$ by [L1]. This is clause 1. [given, L1, L2, L3]

1.3 The field $F(l)=l\times(I^{-1}l)$ is locally Lipschitz in the state variable: by bilinearity and additivity of the cross product [L6], for all $x,y\in\mathbb R^{3}$ one has $F(x)-F(y)=(x-y)\times(I^{-1}x)+y\times(I^{-1}(x-y))$, so with the bound $\lVert I^{-1}z\rVert_2\le\lVert z\rVert_2/I_{\min}$ valid in the principal basis [L4] and the norm bound of [L6], $\lVert F(x)-F(y)\rVert_2\le\lVert x-y\rVert_2\lVert I^{-1}x\rVert_2+\lVert y\rVert_2\lVert I^{-1}(x-y)\rVert_2\le\bigl(\lVert x\rVert_2+\lVert y\rVert_2\bigr)\lVert x-y\rVert_2/I_{\min}$; on the ball $\lVert z\rVert_2\le r$ this is at most $2r\lVert x-y\rVert_2/I_{\min}$, a finite state-Lipschitz constant on every compact cylinder. [given, L4, L6, algebra]

2.1 Writing $\omega=\sum_{j}\omega_{j}e_{j}$ in the principal basis of [L4], one has $\omega^{\mathsf T}I\omega=\sum_{j}I_{j}\omega_{j}^{2}\ge I_{\min}\sum_{j}\omega_{j}^{2}=I_{\min}\lVert\omega\rVert_2^{2}$, so $\lVert\omega(t)\rVert_2^{2}\le2E/I_{\min}$ with $E=\tfrac12\omega^{\mathsf T}I\omega$ constant by step 1.1 and $I_{\min}>0$ by [L4]; together with $l=I\omega$ this bounds $\lVert l\rVert_2^{2}=C$ on $I_0$. The identification of $E$ with the rotational term of the kinetic energy is clause 3 of [L5]. This is clause 3. [step 1.1, given, L4, L5, algebra]

2.2 Every solution of $l'=F(l)$ is defined on all of $\mathbb R$: by [L7] and step 1.3 a unique maximal solution exists through every datum, with open domain $(a,b)$; along it $\frac{d}{dt}\lVert l(t)\rVert_2^{2}=2\langle l'(t),l(t)\rangle=2\langle l(t)\times(I^{-1}l(t)),l(t)\rangle=0$ because the cross product is orthogonal to each factor [L6], so $\lVert l(t)\rVert_2^{2}\equiv\lVert l(0)\rVert_2^{2}$ and its graph over $(a,b)$ lies in the compact sphere $\{z:\lVert z\rVert_2=\lVert l(0)\rVert_2\}\subseteq\mathbb R^{3}$. If $b<+\infty$, then near $b$ the solution stays in that compact subset of the state domain, and clause 2 of [L7] extends it past $b$, contradicting maximality; hence $b=+\infty$, and the time-reversed solution $s\mapsto l(-s)$, which solves the same autonomous equation, gives $a=-\infty$. [step 1.3, given, L6, L7]

3.1 The $l$-path of a torque-free motion is a solution of $l'=F(l)$ on $I_0$ by step 1.1, hence by step 2.2 it is the restriction of a solution defined on all of $\mathbb R$ (uniqueness), it satisfies $\lVert l(t)\rVert_2=\lVert l(0)\rVert_2$ for every $t$, and it takes values in $\Lambda(C,E)$, which is compact as the intersection of the closed sphere and the closed level set $\{z:\langle z,I^{-1}z\rangle=2E\}$ and nonempty because it contains $l(0)$. This is clause 4. [step 1.1, step 2.2, given, L4, algebra] ∎

## Remarks

- **The invariants are two, not three.** $\lVert l\rVert_2^{2}=C$ and
  $\tfrac12\langle l,I^{-1}l\rangle=E$ are the two independent constants of the
  torque-free motion in the $l$-variable; together with the components
  $l_{j}=I_{j}\omega_{j}$ they describe the trajectories as the intersection
  curves of a sphere and an ellipsoid. The statement above proves precisely
  those invariants and boundedness; it does not compute the elliptic
  functions along the level curves and does not claim periodicity.

- **What is not claimed.** No orientation statement is made: the
  conservation of $L_c$ bounds the body-frame data $l$ and $\omega$, but the
  orientation $R(t)$ itself is not confined by these invariants, and the
  pages that follow record this distinction explicitly.

- **The countable-choice hypothesis.** $\mathrm{AC}_\omega$ enters only
  through [L1] and [L2], which make the defining integrals of the model's
  inertial quantities finite; the algebraic identities themselves are
  choice-free once those integrals exist.
