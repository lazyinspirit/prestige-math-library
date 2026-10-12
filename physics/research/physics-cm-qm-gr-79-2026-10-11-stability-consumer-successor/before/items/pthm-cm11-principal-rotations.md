---
id: pthm-cm11-principal-rotations
kind: physics-theorem
title: "Principal-axis uniform rotations of the torque-free rigid-material model: existence, the fixed spatial axis, the invariants, and the converse classification"
status: draft
origin: session
domain: physics
dependency_level: 15
deps: [post-cm11-torque-balance, post-cm10-rigid-material, pthm-cm11-euler-equations, pthm-cm11-torque-free-invariants, def-cm10-rigid-body-configuration, def-cm10-angular-velocity, def-cm10-inertia-tensor, pthm-cm10-kinetic-splitting, pthm-cm10-principal-axes, lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity, def-cm-quaternion-rotation-map-and-cover, def-countable-choice, lem-cm-skew-matrix-cross-product-correspondence, lem-cm-matrix-curve-derivative-rules, lem-cross-product-is-bilinear-alternating-and-orthogonal, cor-zero-derivative-implies-constant, def-cm-special-orthogonal-group, def-cross-product-in-r3, def-euclidean-inner-product, def-cm01-units, def-interval, def-metric-ball]
dependency_roles:
  post-cm11-torque-balance: physical-assumption
  post-cm10-rigid-material: physical-assumption
  pthm-cm11-euler-equations: physical-result
  pthm-cm11-torque-free-invariants: physical-result
  def-cm10-rigid-body-configuration: formulation-prerequisite
  def-cm10-angular-velocity: formulation-prerequisite
  def-cm10-inertia-tensor: formulation-prerequisite
  pthm-cm10-kinetic-splitting: physical-result
  pthm-cm10-principal-axes: physical-result
  lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity: mathematical-premise
  def-cm-quaternion-rotation-map-and-cover: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-cm-skew-matrix-cross-product-correspondence: mathematical-premise
  lem-cm-matrix-curve-derivative-rules: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
  def-metric-ball: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Conditional statements about the torque-free branch of a nondegenerate rigid-material model of [[post-cm10-rigid-material]]: for every principal axis $e_j$ and every real rate $\\Omega$ there is a motion whose orientation path is a uniform rotation with constant body angular velocity $\\Omega e_j$; for $\\Omega\\neq0$ the material axis $R(t)e_j$ is fixed in the inertial frame and the motion is a rotation about a fixed spatial direction; the invariants take the values $C=\\Omega^{2}I_j^{2}$, $E=\\tfrac12\\Omega^{2}I_j$; and conversely, a torque-free motion with constant body angular velocity must spin about a principal axis. The statements carry the countable-choice assumption used only to select the initial unit quaternion, assert no measurement, no empirical law and no claim that any apparatus has been observed."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 3.4.1, printed pages 55-57 (PDF pages 61-63): the free symmetric top rotating about its symmetry axis and the motion of the body axis under a constant angular velocity"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 4 Section 4.4, Eqs. (4.63)-(4.71), chapter pages 9-12 (PDF pages 63-66): free symmetric-top precession about the fixed angular-momentum direction and the uniform-rotation special case"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. W. Stewart, Advanced Classical Mechanics (MIT 8.09 Advanced Classical Mechanics, Fall 2014 course text), Chapter 2 Sections 2.4-2.5, printed pages 41-51 (PDF pages 44-54): Euler equations, principal-axis spins and the linear treatment of their stability"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), Sections 2.8.2-2.9: uniform spins about principal axes and the evolution of the free rigid body"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]), used only to select the initial unit quaternion
of [[def-cm-quaternion-rotation-map-and-cover]] through the surjectivity of
the double cover (its second remark). Adopt a **nondegenerate** model of the
rigid-material branch [[post-cm10-rigid-material]]: a reference mass
distribution $\nu$ with total mass $m$, centred reference coordinates and no
line through the origin carrying the whole mass
([[def-cm10-inertia-tensor]] clause (a)). Fix an orthonormal principal basis
$(e_{1},e_{2},e_{3})$ with $Ie_{j}=I_{j}e_{j}$ and $I_{j}>0$
([[pthm-cm10-principal-axes]] clauses (a) and (d)), use the model in the
**torque-free** branch of [[post-cm11-torque-balance]] clause (iv), and fix
an index $j\in\{1,2,3\}$, a rate $\Omega\in\mathbb R$, a nondegenerate open
interval $I$ ([[def-interval]]), a time $t_{0}\in I$ and an orientation
$R_{0}\in SO(3)$. Then:

1. **Existence of the uniform rotation.** There is a path
   $R:I\to SO(3)$ of class $C^{1}$ with $R(t_{0})=R_{0}$ and
   $$R(t)^{\mathsf T}R'(t)=[\Omega e_{j}]_\times\qquad(t\in I),$$
   that is, with constant body angular velocity $\omega\equiv\Omega e_{j}$
   ([[def-cm10-angular-velocity]] clause (a)).
2. **It is a torque-free motion.** For every such path $R$ and every curve
   $c:I\to\mathbb R^{3}$ of class $C^{2}$, the map
   $x(t,\rho):=c(t)+R(t)\rho$ is a motion of the torque-free model of the
   branch: its angular momentum about the centre of mass is
   $$L_c(t)=\Omega I_{j}\,R(t)e_{j},$$
   it is constant on $I$, and the adopted balance $L_c'=0$ holds. (Here $R$
   is automatically of class $C^{2}$, because $R'=R[\Omega e_{j}]_\times$ is
   the product of the $C^{1}$ curve $R$ with a constant matrix, so the
   configuration path $(c,R)$ has the regularity required of a motion.)
3. **Geometry and invariants.** In the motions of clause 2 one has
   $l=I\omega=\Omega I_{j}e_{j}$ constant,
   $$C=\lVert L_c\rVert_2^{2}=\Omega^{2}I_{j}^{2},\qquad E=\tfrac12\omega^{\mathsf T}I\omega=\tfrac12\Omega^{2}I_{j};$$
   if $\Omega\neq0$, the material axis $R(t)e_{j}$ is **fixed in the inertial
   frame**, $R(t)e_{j}=L_c/(\Omega I_{j})$ for every $t$, so the motion is a
   uniform rotation about the fixed spatial direction $L_c/|L_c|$; if
   $\Omega=0$, then $R$ is constant on $I$.
4. **Converse classification.** Conversely, let a motion of a nondegenerate
   torque-free model have **constant** body angular velocity
   $\omega\equiv\omega_{0}$ on its time window. Then
   $I\omega_{0}=\lambda\omega_{0}$ for some $\lambda\in\mathbb R$: either
   $\omega_{0}=0$ and the orientation path is constant, or $\omega_{0}\neq0$
   and $\omega_{0}$ lies along a principal axis; in the latter case
   $\omega_{0}=\Omega e_{j}$ for some $j$ and $\Omega\neq0$, and the
   conclusions of clauses 2 and 3 hold for it.

The statement is conditional on the adopted model and zero-torque balance; it
asserts no force, no measurement and no empirical law, and the existence
clause is a statement about the model's kinematic class, not about nature.

## Facts & Assumptions

**Given:** A nondegenerate model of [[post-cm10-rigid-material]] with principal basis $(e_{j})$ and positive principal moments $I_{j}$, the zero-torque datum $\tau\equiv0$, the balance $L_c'=0$, and the data $j$, $\Omega$, $I$, $t_{0}$, $R_{0}$ of the statement.

[L1] Model data: $L_c(t)=R(t)I\omega(t)$ for every motion, $C=\lVert L_c\rVert_2^{2}=\langle l,l\rangle$ and $E=\tfrac12\langle l,I^{-1}l\rangle$ are the torque-free invariants, and $l'=l\times(I^{-1}l)$ under the zero-torque balance ([[pthm-cm10-kinetic-splitting]] clause 4, [[pthm-cm11-torque-free-invariants]] clauses 1-2).

[L2] Quaternion lifts: for a continuous $\omega:I\to\mathbb R^{3}$ and $q_{0}\in S^{3}$ there is exactly one $C^{1}$ curve $q:I\to S^{3}$ with $q(t_{0})=q_{0}$ and $q'=\tfrac12q\,\varphi(\omega(t))$; the curve $R:=\rho\circ q$ is $C^{1}$ with values in $SO(3)$ and $R'(t)=R(t)\Omega_{\omega(t)}$, so $\omega$ is its body angular velocity ([[lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity]] clauses 1-2, [[def-cm-quaternion-rotation-map-and-cover]]). The covering map $\rho:S^{3}\to SO(3)$ is surjective, every $R\in SO(3)$ having exactly two preimages $q$ and $-q$, under $\mathrm{AC}_\omega$ ([[def-cm-quaternion-rotation-map-and-cover]] second remark).

[L3] Skew/cross correspondence: $\Omega_{\omega}z=[\omega]_\times z=\omega\times z$, and for an $SO(3)$-valued curve the body angular velocity is the unique $\omega$ with $R^{\mathsf T}R'=[\omega]_\times$ ([[lem-cm-skew-matrix-cross-product-correspondence]], [[def-cm10-angular-velocity]] clause (a), [[def-cm-special-orthogonal-group]]).

[L4] Matrix products: $(Rl)'=R'l+Rl'$ for the $C^{1}$ curves $R:I\to SO(3)$ and $l:I\to\mathbb R^{3}$; $R'=R[\omega]_\times$; and a continuous curve on an interval with vanishing derivative is constant ([[lem-cm-matrix-curve-derivative-rules]], [[cor-zero-derivative-implies-constant]]).

[L5] Algebra: $u\times v$ is bilinear and alternating with $u\times u=0$, and $\langle u,u\rangle=\lVert u\rVert_2^{2}$ ([[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[def-cross-product-in-r3]], [[def-euclidean-inner-product]]).

[L6] Torque-free Euler equations: for the zero-torque branch the body angular velocity satisfies $I\omega'+\omega\times I\omega=0$; in particular, if $\omega$ is constant, then $\omega_{0}\times I\omega_{0}=0$ ([[pthm-cm11-euler-equations]] clause 1 and clause 4).

## Proof

**Proof technique:** direct; construct the rotation path by the quaternion lift of the constant body angular velocity, verify the zero-torque balance, read off the geometry, and prove the converse from the Euler equations.

1.1 By [L2] the covering map $\rho$ is surjective; choose $q_{0}\in S^{3}$ with $\rho(q_{0})=R_{0}$, and let $\omega:I\to\mathbb R^{3}$ be the constant curve $\omega(t):=\Omega e_{j}$, which is continuous. Clause 2 of [L2] supplies a $C^{1}$ curve $q:I\to S^{3}$ with $q(t_{0})=q_{0}$ and $q'=\tfrac12q\varphi(\omega)$, and clause 1 of [L2] shows that $R:=\rho\circ q:I\to SO(3)$ is $C^{1}$ with $R(t_{0})=R_{0}$ and $R'(t)=R(t)\Omega_{\omega(t)}$; by [L3] this is $R^{\mathsf T}R'=[\Omega e_{j}]_\times$, so the body angular velocity of $R$ is the constant map $\Omega e_{j}$ by the uniqueness in [L3]. This is clause 1. [given, L2, L3]

2.1 Let $R$ be a path as in clause 1 and let $c:I\to\mathbb R^{3}$ be of class $C^{2}$. Its body angular velocity is the constant $\omega\equiv\Omega e_{j}$ by step 1.1, so $l=I\omega=\Omega I_{j}e_{j}$ is constant, and by [L1] $L_c=Rl$; with [L4], $(Rl)'=R'l+Rl'=R[\omega]_\times l+0=R(\omega\times l)=R(\Omega^{2}I_{j}\,e_{j}\times e_{j})=0$ by [L5]. Moreover $R'=R[\omega]_\times$ is of class $C^{1}$ because $R$ is and $[\omega]_\times$ is constant, so $R$ is of class $C^{2}$ by definition of second differentiability and $(c,R)$ is a configuration path of class $C^{2}$; hence $x(t,\rho)=c(t)+R(t)\rho$ is a motion of the model. Since $L_c$ is constant, the zero-torque balance $L_c'=0$ holds and the motion belongs to the torque-free branch; this is clause 2. [step 1.1, given, L1, L4, L5, algebra]

3.1 In the motions of step 2.1, $l=\Omega I_{j}e_{j}$ and by [L1] and [L5] $C=\langle l,l\rangle=\Omega^{2}I_{j}^{2}$ and $E=\tfrac12\langle l,I^{-1}l\rangle=\tfrac12\Omega^{2}I_{j}$. If $\Omega\neq0$, then $\Omega I_{j}\neq0$ and the identity $L_c=\Omega I_{j}R(t)e_{j}$ of step 2.1 gives $R(t)e_{j}=L_c/(\Omega I_{j})$ with $L_c$ constant, so the material axis $R(t)e_{j}$ is fixed in the inertial frame and the motion is the uniform rotation about that direction; if $\Omega=0$, then $R'=R[\omega]_\times=R[0]=0$, so $R$ is constant by [L4]. This is clause 3. [step 2.1, given, L1, L4, L5, algebra]

4.1 For the converse, let a torque-free motion have constant body angular velocity $\omega\equiv\omega_{0}$. By [L6] its body angular velocity satisfies $I\omega'+\omega\times I\omega=0$; with $\omega'=0$ this reads $\omega_{0}\times I\omega_{0}=0$, so $I\omega_{0}$ is a real multiple of $\omega_{0}$ by alternation [L5]: if $\omega_{0}\neq0$ there is $\lambda\in\mathbb R$ with $I\omega_{0}=\lambda\omega_{0}$, so $\omega_{0}$ is an eigenvector of $I$ and lies along a principal axis of the basis of [pthm-cm10-principal-axes] clause (a), say $\omega_{0}=\Omega e_{j}$ with $\Omega\neq0$; if $\omega_{0}=0$, then $R'=R[0]=0$ and $R$ is constant by [L4]. In the nonzero case the path satisfies the identity of clause 1 with rate $\Omega$, so clauses 2 and 3 apply to it. This is clause 4. [step 2.1, given, L5, L6, algebra] ∎

## Remarks

- **Existence is a kinematic statement.** Clause 1 constructs the orientation
  path; clause 2 then verifies the adopted zero-torque balance for it. Neither
  clause produces a force or a datum, and the curve $c$ is arbitrary of class
  $C^{2}$: the torque balance constrains the orientation path alone, in
  accordance with the absence of a momentum balance in
  [[post-cm11-torque-balance]] clause (vi).

- **The converse needs constancy of $\omega$, not merely of $l$.** The
  converse of clause 4 uses $\omega'=0$ and fails for motions whose body
  angular velocity merely has constant magnitude; the companion page exhibits
  such a torque-free motion of a symmetric model. The classification of
  clauses 1-4 therefore does not claim that every torque-free motion is a
  uniform rotation.
