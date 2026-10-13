---
id: thm-cm-euler-equations-and-torque-free-invariants
kind: theorem
title: "Euler's equations $I\\omega'+\\omega\\times I\\omega=R^{\\mathsf
  T}\\tau$ under an adopted torque balance, and the torque-free invariants and
  principal-axis equations"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps:
  - def-countable-choice
  - def-cm-rigid-placement-and-body-angular-velocity
  - def-cm-mass-distribution-and-inertia-matrix
  - lem-cm-inertia-matrix-properties
  - thm-cm-rigid-kinetic-energy-and-angular-momentum
  - cor-cm-principal-axes-of-the-inertia-matrix
  - lem-cm-skew-matrix-cross-product-correspondence
  - lem-cm-matrix-curve-derivative-rules
  - lem-cross-product-is-bilinear-alternating-and-orthogonal
  - def-cross-product-in-r3
  - def-cm-special-orthogonal-group
  - def-derivative
  - def-interval
  - def-matrix-product-and-identity-matrix
  - def-euclidean-inner-product
  - def-inner-product-space
  - thm-algebra-of-derivatives
  - cor-zero-derivative-implies-constant
dependency_roles:
  def-countable-choice: mathematical-premise
  def-cm-rigid-placement-and-body-angular-velocity: mathematical-premise
  def-cm-mass-distribution-and-inertia-matrix: mathematical-premise
  lem-cm-inertia-matrix-properties: mathematical-premise
  thm-cm-rigid-kinetic-energy-and-angular-momentum: mathematical-premise
  cor-cm-principal-axes-of-the-inertia-matrix: mathematical-premise
  lem-cm-skew-matrix-cross-product-correspondence: mathematical-premise
  lem-cm-matrix-curve-derivative-rules: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-inner-product-space: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), §3.3, Eqs.
        (3.31)-(3.33), printed pp. 53-55: angular-momentum rate, Euler's
        equations in the principal body frame and the torque extension"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Ch. 4
        §4.4, Eq. (4.66): Euler equations
        $I_j\\dot\\omega_j+(I_{j''}-I_{j'})\\omega_{j'}\\omega_{j''}=\\tau_j$"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical
        Mechanics, 2nd ed. (MIT Press, 2014), §2.9 (Euler's Equations), Eqs.
        (2.80)-(2.83): angular-momentum evolution and Euler equations in
        principal components"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9\
        579/sicm_edition_2.zip"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), used through the inertia suppliers to ensure finiteness of the integrals. Let $J\subseteq\mathbb R$ be an interval with at least two points ([[def-interval]]), let $\nu$ be a centred mass distribution on $\mathbb R^3$ that is not supported on any line through the origin, with inertia matrix $I$ ([[def-cm-mass-distribution-and-inertia-matrix]]), let $c:J\to\mathbb R^3$ be differentiable and let $R:J\to SO(3)$ be twice differentiable, and let $x(t,\rho)=c(t)+R(t)\rho$ be the rigid placement with body angular velocity $\omega$ ([[def-cm-rigid-placement-and-body-angular-velocity]]). Write $l:=I\omega:J\to\mathbb R^3$; by [[cor-cm-principal-axes-of-the-inertia-matrix]] the inertia form is positive definite and $I$ is invertible.

Adopt the **balance hypothesis** (B): there is a map $\tau:J\to\mathbb R^3$ such that the curve $t\mapsto R(t)l(t)$ is differentiable and
$$(Rl)'(t)=\tau(t)\qquad(t\in J).$$
Then:

1. $l$ is differentiable and **Euler's equations with torque** hold: $$I\omega'+\omega\times I\omega=R^{\mathsf T}\tau\qquad\text{on }J;$$
2. if $\tau=0$ on $J$, then $l$ satisfies the **torque-free Euler equations** $l'=l\times(I^{-1}l)$, and the functions $t\mapsto\langle l(t),l(t)\rangle$ and $t\mapsto\tfrac12\langle l(t),I^{-1}l(t)\rangle=\tfrac12\omega(t)^{\mathsf T}I\omega(t)$ are constant on $J$;
3. if $\tau=0$ on $J$ and $(e_1,e_2,e_3)$ is a positively oriented orthonormal eigenbasis of $I$ with $Ie_j=I_je_j$ and $l=\sum_jl_je_j$, then $\langle l,l\rangle=\sum_jl_j^2$ and $\tfrac12\langle l,I^{-1}l\rangle=\sum_jl_j^2/(2I_j)$ are constant on $J$, and the torque-free equations read $$l_1'=\Bigl(\frac1{I_3}-\frac1{I_2}\Bigr)l_2l_3,\qquad l_2'=\Bigl(\frac1{I_1}-\frac1{I_3}\Bigr)l_1l_3,\qquad l_3'=\Bigl(\frac1{I_2}-\frac1{I_1}\Bigr)l_1l_2.$$

## Facts & Assumptions

**Given:** The data of the statement, the body angular velocity $\omega$ with $R^{\mathsf T}R'=[\omega]_\times$, the angular momentum $l=I\omega$, and a map $\tau$ satisfying the balance hypothesis (B).

[L1] The body angular velocity satisfies $R^{\mathsf T}R'=[\omega]_\times$, so $R'=R[\omega]_\times$ and $R'(t)R(t)^{\mathsf T}=[R\omega]_\times$; it is differentiable because it is a finite sum of products of entries of $R$ and $R'$ [[def-cm-rigid-placement-and-body-angular-velocity]], [[lem-cm-skew-matrix-cross-product-correspondence]].

[L2] $R\in SO(3)$ satisfies $R^{-1}=R^{\mathsf T}$ and $R^{\mathsf T}R=RR^{\mathsf T}=I_3$ [[def-cm-special-orthogonal-group]], [[lem-cm-skew-matrix-cross-product-correspondence]].

[L3] The product rule for matrix-valued curves gives $(Rl)'=R'l+Rl'$ [[lem-cm-matrix-curve-derivative-rules]], and $[\omega]_\times z=\omega\times z$ [[lem-cm-skew-matrix-cross-product-correspondence]].

[L4] $I$ is symmetric and positive definite, hence invertible; and for the eigenbasis $Ie_j=I_je_j$ with $I_j>0$ one has $I^{-1}e_j=I_j^{-1}e_j$ [[lem-cm-inertia-matrix-properties]], [[cor-cm-principal-axes-of-the-inertia-matrix]].

[L5] The cross product is bilinear and alternating, and $\langle u\times v,w\rangle=\det[u\ v\ w]$, so $u\times v$ is orthogonal to $u$ and to $v$ [[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[def-cross-product-in-r3]].

[L6] The Euclidean inner product is bilinear and symmetric and $\langle u,u\rangle=\lVert u\rVert_2^2$ [[def-euclidean-inner-product]], [[def-inner-product-space]].

[L7] The scalar product rule differentiates finite sums of products of differentiable real functions. In an orthonormal eigenbasis of the symmetric positive-definite $I$, $I^{-1}$ has diagonal entries $1/I_j$ and is therefore symmetric ([[thm-algebra-of-derivatives]], [[cor-cm-principal-axes-of-the-inertia-matrix]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the angular velocity $\omega$ is differentiable, hence so is $l=I\omega$; the product $Rl$ satisfies $(Rl)'=R'l+Rl'$ by [L3], and $R'l=R[\omega]_\times l=R(\omega\times l)$ by [L1] and [L3]. [given, L1, L3]

2.1 By the balance hypothesis (B) and step 1.1, $\tau=R(\omega\times l+l')$. Multiplying by $R^{\mathsf T}$ and using [L2] and linearity of matrix-vector multiplication gives $R^{\mathsf T}\tau=\omega\times l+l'$. Since $l=I\omega$ with $I$ a constant matrix, $l'=I\omega'$ by the finite-sum and scalar rules of [L7], and $\omega\times l=\omega\times I\omega$; therefore $I\omega'+\omega\times I\omega=R^{\mathsf T}\tau$, which is clause 1. [step 1.1, given, L2, L3, L7, algebra]

3.1 Assume $\tau=0$. Then step 2.1 gives $I\omega'=-\omega\times I\omega$; multiplying by $I^{-1}$ from [L4] gives $\omega'=-I^{-1}(\omega\times I\omega)$, hence $l'=I\omega'=-(\omega\times I\omega)=(I\omega)\times\omega=l\times(I^{-1}l)$, using antisymmetry of the cross product [L5] and $I^{-1}l=\omega$ [L4]. This is the first part of clause 2. [step 2.1, given, L4, L5, algebra]

4.1 The two functions of clause 2 are constant: the product rule and symmetry of $I^{-1}$ in [L7] give $\frac{d}{dt}\langle l,l\rangle=2\langle l',l\rangle=2\langle l\times(I^{-1}l),l\rangle$ and $\frac{d}{dt}\tfrac12\langle l,I^{-1}l\rangle=\langle l',I^{-1}l\rangle=\langle l\times(I^{-1}l),I^{-1}l\rangle$. Both inner products vanish because a cross product is orthogonal to each of its factors [L5]. Also $\frac{d}{dt}\tfrac12\langle l,I^{-1}l\rangle=\frac{d}{dt}\tfrac12\omega^{\mathsf T}I\omega$ because $I^{-1}l=\omega$ and $I$ is symmetric [L4], [L6]. These functions are continuous on the solution interval $J$ and differentiable at every interior point, so their zero derivatives make them constant by [[cor-zero-derivative-implies-constant]]. [step 3.1, given, L4, L5, L6, L7, algebra]

5.1 For the eigenbasis, $l=\sum_jl_je_j$ gives $I^{-1}l=\sum_j(l_j/I_j)e_j$ by [L4]; by orthonormality $\langle l,l\rangle=\sum_jl_j^2$ and $\tfrac12\langle l,I^{-1}l\rangle=\sum_jl_j^2/(2I_j)$, and these are constant by step 4.1. [step 4.1, given, L4, L6, algebra]

6.1 Let $Q$ have columns $(e_1,e_2,e_3)$ in the standard basis. The positive orientation and orthonormality give $Q\in SO(3)$; [L2] gives $Q(u\times v)=(Qu)\times(Qv)$ from the skew/cross correspondence. Thus the standard cross-product coordinate formula applies in this principal basis. Coordinate-wise, $l'=l\times(I^{-1}l)$ reads $l_1'=l_2(l_3/I_3)-l_3(l_2/I_2)=(1/I_3-1/I_2)l_2l_3$, $l_2'=l_3(l_1/I_1)-l_1(l_3/I_3)=(1/I_1-1/I_3)l_1l_3$ and $l_3'=l_1(l_2/I_2)-l_2(l_1/I_1)=(1/I_2-1/I_1)l_1l_2$, using the coordinate formula for the cross product [L5] and step 5.1. An arbitrary orthonormal eigenbasis can be made positively oriented by negating one eigenvector; neither its eigenvalues nor the coordinate-free motion/invariant claims change. This is clause 3. [step 5.1, given, L2, L5, algebra] ∎
