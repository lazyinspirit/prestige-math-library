---
id: prop-cm-canonical-map-tests-and-hamiltonian-transport
kind: proposition
title: "A $C^1$ map between phase domains preserves the standard two-form iff $DC^{\\mathsf T}J\\,DC=J$, and a canonical diffeomorphism carries $X_{H\\circ C}$ to $X_H$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-phase-domain-and-standard-symplectic-two-form, lem-cm-standard-symplectic-form-is-closed-and-nondegenerate, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding, def-canonical-transformation, def-pullback-of-a-differential-form, def-wedge-product-of-differential-forms, def-total-derivative-in-euclidean-space, def-jacobian-matrix-and-gradient, thm-chain-rule-for-total-derivatives, def-linear-map, def-invertible-euclidean-linear-map, def-matrix-product-and-identity-matrix, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, thm-determinant-multiplicative, thm-determinant-of-transpose, cor-square-matrix-invertible-iff-determinant-is-a-unit, def-determinant-of-a-square-matrix, def-cm-finite-regularity-canonical-calculus]
dependency_roles:
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  lem-cm-standard-symplectic-form-is-closed-and-nondegenerate: mathematical-premise
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding: mathematical-premise
  def-canonical-transformation: mathematical-premise
  def-pullback-of-a-differential-form: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-linear-map: mathematical-premise
  def-invertible-euclidean-linear-map: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  thm-determinant-of-transpose: mathematical-premise
  cor-square-matrix-invertible-iff-determinant-is-a-unit: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  def-cm-finite-regularity-canonical-calculus: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Sections 4.4-4.4.2 (canonical transformations, the condition M^T J M = J and infinitesimal canonical transformations), printed pages 100-104"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 15.3 (canonical transformations in Hamiltonian mechanics)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $U,V\subseteq\mathbb R^{2n}$ be phase domains with standard two-forms $\omega_U$,
$\omega_V$ and the same matrix $J$ ([[def-cm-phase-domain-and-standard-symplectic-two-form]]), and
let $C:U\to V$ be of class $C^1$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]). Then:

1. $C^*\omega_V=\omega_U$ if and only if $DC(z)^{\mathsf T}J\,DC(z)=J$ for every $z\in U$;
2. if $C$ is a $C^1$ diffeomorphism onto $V$ and $C^*\omega_V=\omega_U$, then $C$ is a 
   $C^1$ canonical transformation in the finite-regularity sense of
   [[def-cm-finite-regularity-canonical-calculus]] and $|\det DC(z)|=1$ for every $z\in U$;
3. if in addition $H\in C^2(V)$ and $C:U\to V$ is a $C^2$ diffeomorphism with $C^*\omega_V=\omega_U$,
   then $H\circ C\in C^2(U)$ and
   $$DC(z)\,X_{H\circ C}(z)=X_H\bigl(C(z)\bigr)\qquad(z\in U).$$

## Facts & Assumptions

**Given:** Phase domains $U,V$, a $C^1$ map $C:U\to V$, and in clauses 2 and 3 the corresponding additional regularity and bijectivity hypotheses.

[F1] Pullback and evaluation: for a two-form $\tau$ and $z\in U$, $(C^*\tau)_z(v,w)=\tau_{C(z)}(DC(z)v,DC(z)w)$ ([[def-cm-finite-regularity-canonical-calculus]], [[def-total-derivative-in-euclidean-space]]).

[F2] Evaluation and block identities of the standard form: for $\omega_V$ at a point $y\in V$ and vectors $\xi,\eta\in\mathbb R^{2n}$ one has $(\omega_V)_y(\xi,\eta)=\xi^{\mathsf T}J\eta$, and $J^{\mathsf T}=-J$, $J^2=-I_{2n}$, $J^{-1}=J^{\mathsf T}=-J$ ([[lem-cm-standard-symplectic-form-is-closed-and-nondegenerate]]).

[F3] Calculus and linear algebra: $X_h=J\nabla h$ for $C^2$ functions $h$ ([[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]]); the chain rule gives $\nabla(H\circ C)(z)=DC(z)^{\mathsf T}\nabla H(C(z))$ ([[thm-chain-rule-for-total-derivatives]], [[def-jacobian-matrix-and-gradient]]). For invertible $M:=DC$, the identity $M^{\mathsf T}JM=J$ is equivalent to $MJM^{\mathsf T}=J$ (each direction follows by the same inversion argument) and implies $(\det M)^2=1$: inverting gives $M^{-1}J^{-1}(M^{-1})^{\mathsf T}=J^{-1}$, and $J^{-1}=J^{\mathsf T}=-J$ from [F2] turns this into $M^{-1}J(M^{-1})^{\mathsf T}=J$, which after multiplying on the left by $M$ and on the right by $M^{\mathsf T}$ is $MJM^{\mathsf T}=J$; taking determinants and using $\det(AB)=\det(A)\det(B)$, $\det(A^{\mathsf T})=\det(A)$ and $\det J\ne0$ gives $(\det M)^2\det J=\det J$ ([[lem-cm-standard-symplectic-form-is-closed-and-nondegenerate]], [[def-invertible-euclidean-linear-map]], [[def-matrix-product-and-identity-matrix]], [[thm-determinant-multiplicative]], [[thm-determinant-of-transpose]], [[cor-square-matrix-invertible-iff-determinant-is-a-unit]], [[def-determinant-of-a-square-matrix]], [[def-linear-map]]).

## Proof

**Proof technique:** direct; evaluate the pullback on a pair of vectors to obtain the matrix criterion, then differentiate $H\circ C$ and use the transposed matrix identity.

1.1 Clause 1: by [F1], for all $z$, $v$ and $w$, $(C^*\omega_V)_z(v,w)=(DC(z)v)^{\mathsf T}J(DC(z)w)=v^{\mathsf T}\bigl(DC(z)^{\mathsf T}J\,DC(z)\bigr)w$ by [F1] and [F2]; since $\omega_U$ is evaluated as $v^{\mathsf T}Jw$ by [F2], and since two bilinear forms are equal iff their matrices in the coordinate basis agree, $C^*\omega_V=\omega_U$ is equivalent to $DC(z)^{\mathsf T}J\,DC(z)=J$ for every $z\in U$. [F1, F2, algebra]

2.1 Clause 2: a $C^1$ diffeomorphism with $C^*\omega_V=\omega_U$ is by [[def-cm-finite-regularity-canonical-calculus]] a $C^1$ canonical transformation; taking determinants in the matrix identity of clause 1 and using the determinant identities of [F3] gives $(\det DC)^2=1$, hence $|\det DC|=1$. [step 1.1, F3, algebra]

3.1 Clause 3: assume $H\in C^2(V)$ and $C$ a $C^2$ diffeomorphism with $C^*\omega_V=\omega_U$. Then $H\circ C\in C^2(U)$ and, by [F3], $X_{H\circ C}(z)=J\nabla(H\circ C)(z)=J\,DC(z)^{\mathsf T}\nabla H(C(z))$; the identity $DC^{\mathsf T}J\,DC=J$ of clause 1, with $DC$ invertible, gives $DC\,J\,DC^{\mathsf T}=J$ by the equivalence proved in [F3]; hence $DC(z)X_{H\circ C}(z)=DC(z)J\,DC(z)^{\mathsf T}\nabla H(C(z))=J\nabla H(C(z))=X_H(C(z))$, which is the asserted transport identity. [F3, step 1.1, algebra] ∎

## Remarks

- Clause 1 is the pointwise coordinate test of [[def-cm-finite-regularity-canonical-calculus]]; in the smooth subcase the published [[def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding]] and [[def-canonical-transformation]] define the same notion intrinsically, and clause 1 supplies the determinant-like matrix test used by the generating-function items below.
- Clause 3 says that the Hamiltonian-field assignment is natural under canonical maps; it is the precise sense in which "canonical transformations preserve Hamilton's equations" and is used in the time-dependent generating-function item.
