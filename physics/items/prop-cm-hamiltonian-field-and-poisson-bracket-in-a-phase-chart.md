---
id: prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart
kind: proposition
title: "The Hamiltonian field of a $C^2$ function on a phase domain is $J\\nabla H$, and the Poisson bracket is $\\sum_i(\\partial_{q^i}f\\,\\partial_{p_i}g-\\partial_{p_i}f\\,\\partial_{q^i}g)$"
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-phase-domain-and-standard-symplectic-two-form, lem-cm-standard-symplectic-form-is-closed-and-nondegenerate, def-hamiltonian-vector-field-and-hamiltonian-function, def-poisson-bracket-on-a-symplectic-manifold, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-linear-map, def-invertible-euclidean-linear-map, def-matrix-product-and-identity-matrix, thm-chain-rule-for-total-derivatives, def-total-derivative-in-euclidean-space, def-smooth-vector-field-as-a-tangent-bundle-section, def-cm-finite-regularity-canonical-calculus]
dependency_roles:
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  lem-cm-standard-symplectic-form-is-closed-and-nondegenerate: mathematical-premise
  def-hamiltonian-vector-field-and-hamiltonian-function: mathematical-premise
  def-poisson-bracket-on-a-symplectic-manifold: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-linear-map: mathematical-premise
  def-invertible-euclidean-linear-map: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-cm-finite-regularity-canonical-calculus: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Sections 4.1 (Hamilton's equations from iota_X omega = dH) and 4.3 (Poisson brackets and the coordinate formula), printed pages 80-99"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 15.3 (canonical transformations and the Hamiltonian field in phase-space coordinates)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $U$ be a phase domain with standard two-form
$\omega_U=\sum_i dq^i\wedge dp_i$ ([[def-cm-phase-domain-and-standard-symplectic-two-form]]), and let
$H:U\to\mathbb R$ be of class $C^2$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]). Write
$\nabla H=(H_{q^1},\dots,H_{q^n},H_{p_1},\dots,H_{p_n})$ for the Euclidean gradient
([[def-jacobian-matrix-and-gradient]]) and $J$ for the standard symplectic matrix. Then:

1. there is exactly one $C^1$ vector field $X_H$ on $U$ with $\iota_{X_H}\omega_U=dH$, and it is
   $$X_H=J\nabla H=\bigl(H_{p_1},\dots,H_{p_n},-H_{q^1},\dots,-H_{q^n}\bigr);$$
2. an integral curve $t\mapsto(q(t),p(t))$ of $X_H$ satisfies Hamilton's equations
   $$\dot q^i=H_{p_i}(q,p),\qquad \dot p_i=-H_{q^i}(q,p)\qquad(i=1,\dots,n);$$
3. for $f,g\in C^2(U)$ the Poisson bracket
   $\{f,g\}:=\omega_U(X_f,X_g)$ (in the finite-regularity convention of [[def-cm-finite-regularity-canonical-calculus]]) is
   $$\{f,g\}=\nabla f^{\mathsf T}J\,\nabla g=\sum_{i=1}^n\bigl(f_{q^i}g_{p_i}-f_{p_i}g_{q^i}\bigr),$$
   hence $\{f,g\}=-\{g,f\}$, and $\{f,g\}$ is $C^1$ on $U$.

## Facts & Assumptions

**Given:** The phase domain $U$, the $C^2$ function $H$, and the $C^2$ functions $f,g$ on $U$ ([[def-cm-phase-domain-and-standard-symplectic-two-form]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F1] Contraction formula and block identities: for $v=(a,b)$ one has $\iota_v\omega_z=\sum_i a_i\,dp_i-\sum_i b_i\,dq^i$, and $J^{\mathsf T}=-J$, $J^2=-I_{2n}$ ([[lem-cm-standard-symplectic-form-is-closed-and-nondegenerate]]).

[F2] The differential of a $C^1$ function is $dh=\sum_i h_{q^i}\,dq^i+\sum_i h_{p_i}\,dp_i$, and the gradient is the vector of partial derivatives ([[def-directional-and-partial-derivatives]], [[def-jacobian-matrix-and-gradient]], [[def-total-derivative-in-euclidean-space]]).

[F3] A Hamiltonian vector field is a vector field $X$ with $\iota_X\omega=dH$ for a smooth function $H$, and the Poisson bracket is $\{F,G\}=\omega(X_F,X_G)$ ([[def-hamiltonian-vector-field-and-hamiltonian-function]], [[def-poisson-bracket-on-a-symplectic-manifold]]). For the present $C^2$ functions the field and bracket mean the explicitly defined finite-regularity coordinate objects of [[def-cm-finite-regularity-canonical-calculus]], with the same sign convention; the imported smooth definitions are used only in the smooth subcase.

[F4] Chain rule and linear-algebra bookkeeping: matrix-vector multiplication distributes over sums, and the Euclidean pairing $u\cdot w=u^{\mathsf T}w$ satisfies $u^{\mathsf T}(Jv)=(J^{\mathsf T}u)^{\mathsf T}v$ ([[def-matrix-product-and-identity-matrix]], [[def-linear-map]], [[thm-chain-rule-for-total-derivatives]], [[def-smooth-vector-field-as-a-tangent-bundle-section]]).

## Proof

**Proof technique:** direct; compare coefficients in the coordinate bases and use the block identities for the bracket formula.

1.1 Existence: define $X_H:=J\nabla H$, whose components are $C^1$ because $H$ is $C^2$; by [F1] and [F2], $\iota_{X_H}\omega_U=\sum_i (J\nabla H)_i\,dp_i-\sum_i(J\nabla H)_{n+i}\,dq^i$ with $(J\nabla H)_i=H_{p_i}$ and $(J\nabla H)_{n+i}=-H_{q^i}$, i.e. $\iota_{X_H}\omega_U=dH$; in particular $X_H=J\nabla H$ has the displayed components. [F1, F2, F4, algebra]

1.2 Uniqueness: if $X,Y$ are $C^1$ fields with $\iota_X\omega_U=dH=\iota_Y\omega_U$, then $\iota_{X-Y}\omega_U=0$; by [F1] the map $v\mapsto\iota_v\omega_z$ is injective at every $z$, so $X-Y=0$ pointwise. [F1]

2.1 Hamilton's equations and the bracket: an integral curve of $X_H$ solves $\dot z=X_H(z)$, which in coordinates is $\dot q^i=H_{p_i}$ and $\dot p_i=-H_{q^i}$, proving clause 2. For $f,g\in C^2(U)$, step 1.1 applied to each function and [F1] give $\omega_U(X_f,X_g)=(J\nabla f)^{\mathsf T}J(J\nabla g)=\nabla f^{\mathsf T}J^{\mathsf T}J^2\nabla g=\nabla f^{\mathsf T}J\nabla g$. The last expression is the coordinate bracket defined in [F3], and block multiplication expands it to $\sum_i(f_{q^i}g_{p_i}-f_{p_i}g_{q^i})$. Thus its equality with $\omega_U(X_f,X_g)$ is established directly, without assuming that equality for nonsmooth inputs. [F1, F3, step 1.1, algebra]

3.1 Skew symmetry and regularity: swapping $f$ and $g$ in the coordinate formula negates every summand because $J^{\mathsf T}=-J$, so $\{f,g\}=-\{g,f\}$; the coordinate expression is a sum of products of $C^1$ partial derivatives, hence is $C^1$. [step 2.1, F1, algebra] ∎

## Remarks

- The published [[thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions]] and [[thm-hamilton-equations-in-canonical-cotangent-coordinates]] give existence, uniqueness and the Hamilton equations for smooth functions on a cotangent bundle (the latter under countable choice). The point of this item is the choice-free local statement for $C^2$ data on a phase domain, together with the explicit block form of the field that the flow and canonical-map items below differentiate.
- Part 3 is the coordinate formula on which the published [[prop-coordinate-formula-for-the-poisson-bracket]] and the bracket identities of the root library (bilinearity, skew symmetry, the derivation rule and the Jacobi identity in [[prop-poisson-bracket-is-bilinear-skew-and-a-derivation-in-each-entry]] and [[thm-poisson-bracket-satisfies-the-jacobi-identity]]) can be invoked by consumers in the smooth subcase; no second proof of the Jacobi identity is developed on this page.
