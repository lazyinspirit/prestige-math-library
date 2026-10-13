---
id: prop-cm-mechanical-chart-lagrangian-is-hyperregular
kind: proposition
title: "A mechanical chart Lagrangian with positive definite kinetic matrix is hyperregular, with the explicit kinetic-plus-potential Hamiltonian"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [thm-rank-nullity, def-cm-time-dependent-lagrangian-and-action, def-cm-legendre-map-in-a-time-dependent-chart, lem-matrix-inversion-preserves-ck-regularity, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-determinant-multiplicative, cor-square-matrix-invertible-iff-determinant-is-a-unit, def-matrix-product-and-identity-matrix, def-invertible-matrix-and-general-linear-group, def-linear-map, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-euclidean-inner-product]
dependency_roles:
  thm-rank-nullity: mathematical-premise
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  def-cm-legendre-map-in-a-time-dependent-chart: mathematical-premise
  lem-matrix-inversion-preserves-ck-regularity: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  cor-square-matrix-invertible-iff-determinant-is-a-unit: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  def-linear-map: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 6.2 (Newtonian plausibility argument for Lagrangian mechanics: the standard Lagrangian) and Section 8.2 (Legendre Transformation between Lagrangian and Hamiltonian mechanics)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 4.1.3 Example 1 (a particle in a potential: p = m r-dot and H = p^2/(2m) + V(r)), printed page 84"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $J\subseteq\mathbb R$ and $U\subseteq\mathbb R^n$ be open and nonempty, and let
$G:J\times U\to M_n(\mathbb R)$, $A:J\times U\to\mathbb R^n$ and $V:J\times U\to\mathbb R$ be of
class $C^2$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]). Assume that $G(t,q)$ is symmetric and
positive definite for every $(t,q)$:

$$G(t,q)^{\mathsf T}=G(t,q),\qquad w^{\mathsf T}G(t,q)w>0\quad\text{for every }0\ne w\in\mathbb R^n .$$

Define the **mechanical chart Lagrangian**

$$\mathcal L(t,q,v):=\tfrac12v^{\mathsf T}G(t,q)v+A(t,q)\cdot v-V(t,q),$$

with the Euclidean inner product of [[def-euclidean-inner-product]]. Then:

1. $\mathcal L$ is of class $C^2$ on $J\times U\times\mathbb R^n$, with
   $\mathcal L_v(t,q,v)=G(t,q)v+A(t,q)$ and $\mathcal L_{vv}(t,q,v)=G(t,q)$; in particular
   $\mathcal L$ is regular on the chart;
2. the Legendre map $\mathbb F_{\mathcal L}(t,q,v)=\bigl(t,q,G(t,q)v+A(t,q)\bigr)$ is a $C^2$
   bijection of $J\times U\times\mathbb R^n$ onto itself with $C^2$ inverse

$$v(t,q,p)=G(t,q)^{-1}\bigl(p-A(t,q)\bigr);$$

   hence $\mathcal L$ is hyperregular in the sense of
   [[def-cm-legendre-map-in-a-time-dependent-chart]];
3. the Hamiltonian of the inverse branch is

$$H(t,q,p)=\tfrac12\bigl(p-A(t,q)\bigr)^{\mathsf T}G(t,q)^{-1}\bigl(p-A(t,q)\bigr)+V(t,q),$$

   a $C^2$ function on $J\times U\times\mathbb R^n$.

## Facts & Assumptions

**Given:** The $C^2$ fields $G,A,V$ with $G(t,q)$ symmetric positive definite, the Lagrangian $\mathcal L$ displayed above, and the Legendre map $\mathbb F_{\mathcal L}(t,q,v)=(t,q,\mathcal L_v(t,q,v))$.

[F1] Partial derivatives of a quadratic form: if $G$ is symmetric, then the gradient of $v\mapsto\tfrac12v^{\mathsf T}Gv$ is $v\mapsto Gv$, and the second derivative in $v$ is the constant matrix $G$; this is the sum and product rule applied to $\tfrac12\sum_{i,j}G_{ij}v_iv_j$ together with $G_{ij}=G_{ji}$ ([[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-matrix-product-and-identity-matrix]]).

[F2] Finite sums and products of $C^r$ Euclidean maps are $C^r$, and composites of composable $C^r$ maps are $C^r$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[def-ck-euclidean-maps-and-diffeomorphisms]]). In particular $\mathcal L$ is $C^2$ because $G,A,V$ are.

[F3] A symmetric positive definite matrix is invertible: if $Gw=0$ then $w^{\mathsf T}Gw=0$, so $w=0$, and a linear map of $\mathbb R^n$ with trivial kernel is bijective by [[thm-rank-nullity]] (zero kernel gives image dimension $n$); its linear inverse is two-sided ([[def-invertible-matrix-and-general-linear-group]], [[def-linear-map]]).

[F4] Inversion preserves regularity: if the entries of $B:J\times U\to M_n(\mathbb R)$ are $C^r$ and $\det B$ never vanishes, then the entries of $B^{-1}$ are $C^r$ ([[lem-matrix-inversion-preserves-ck-regularity]]). For $B=G$, invertibility holds by [F3], and $\det G\ne0$ because $\det(G)\det(G^{-1})=\det(GG^{-1})=\det(I_n)=1$ for an invertible $G$ with inverse $G^{-1}$ ([[thm-determinant-multiplicative]], [[cor-square-matrix-invertible-iff-determinant-is-a-unit]]).

## Proof

**Proof technique:** direct; differentiate the quadratic Lagrangian, invert the velocity--momentum relation by positive definiteness, and complete the square.

1.1 By [F1] and [F2] the map $\mathcal L$ is $C^2$, its gradient in the velocity slot is $\mathcal L_v(t,q,v)=G(t,q)v+A(t,q)$ and the velocity Hessian is $\mathcal L_{vv}(t,q,v)=G(t,q)$. Since $G(t,q)$ is positive definite, it is invertible by [F3], so $\det\mathcal L_{vv}(t,q,v)=\det G(t,q)\ne0$; this proves clause 1. [F1, F2, F3, algebra]

1.2 Clause 2, bijectivity: fix $(t,q,p)\in J\times U\times\mathbb R^n$. By [F3] the matrix $G(t,q)$ is invertible, so the equation $G(t,q)v+A(t,q)=p$ has the unique solution $v=G(t,q)^{-1}(p-A(t,q))$; hence $\mathbb F_{\mathcal L}$ is bijective with the displayed inverse. [F3, algebra]

2.1 Clause 2, regularity of the inverse: the entries of $G$ are $C^2$ and $\det G$ never vanishes, so by [F4] the entries of $(t,q)\mapsto G(t,q)^{-1}$ are $C^2$; the formula for $v$ is then a finite combination of $C^2$ maps and is $C^2$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]). By [[def-cm-legendre-map-in-a-time-dependent-chart]] this makes $\mathcal L$ hyperregular. [F4, step 1.2, algebra]

3.1 Clause 3: with $v=v(t,q,p)=G^{-1}(p-A)$ one has $p-A=Gv$, hence $$p\cdot v-\mathcal L(t,q,v)=\bigl(Gv+A\bigr)\cdot v-\tfrac12v^{\mathsf T}Gv-A\cdot v+V =\tfrac12v^{\mathsf T}Gv+V =\tfrac12\bigl(p-A\bigr)^{\mathsf T}G^{-1}\bigl(p-A\bigr)+V,$$ where the last step uses $(Gv)\cdot v=v^{\mathsf T}Gv=(p-A)^{\mathsf T}G^{-1}(p-A)$ and the symmetry of $G^{-1}$ (the inverse of a symmetric matrix is symmetric). Thus clause 3 holds, and $H$ is $C^2$ by the same closure properties. [F1, F2, step 2.1, algebra] ∎

## Remarks

- The case of a constant diagonal matrix $G=\operatorname{diag}(m_1,\dots,m_n)$ with $m_i>0$ and $A=0$ gives $\mathcal L=\tfrac12\sum_im_i\dot q_i^2-V(q)$ and $H=\tfrac12\sum_ip_i^2/m_i+V(q)$, the classical kinetic-plus-potential form. The proposition is stated for a configuration- and time-dependent positive definite $G$, which is what the consuming classical-mechanics items need for moving constraints and rotating frames.

- The covector field $A$ is a mathematical datum of the chart: it is allowed to depend on $(t,q)$ and enters the momentum as $p=Gv+A$. It is *not* an electromagnetic potential and no physical interpretation of $A$ is asserted here; in particular $p$ is not $\text{mass}\times\text{velocity}$ unless $G$ is constant and $A=0$. The scope of these identifications is recorded in [[rem-cm-scope-of-the-legendre-map]].
