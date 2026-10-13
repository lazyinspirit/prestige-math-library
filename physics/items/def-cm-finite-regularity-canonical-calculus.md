---
id: def-cm-finite-regularity-canonical-calculus
kind: definition
title: "Finite-regularity differential forms, Hamiltonian fields and canonical
  maps in phase charts"
status: published
origin: pipeline
domain: mathematics
deps:
  [
    def-cm-phase-domain-and-standard-symplectic-two-form,
    def-ck-euclidean-maps-and-diffeomorphisms,
    def-total-derivative-in-euclidean-space,
    def-jacobian-matrix-and-gradient,
    def-canonical-transformation,
    def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding
  ]
justified_by: [ prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart ]
dependency_roles:
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-canonical-transformation: mathematical-premise
  def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. Tong, Classical Dynamics, Sections 4.1 and 4.4: coordinate
        Hamiltonian fields and the symplectic Jacobian condition"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
dependency_level: 1
---

## Definition

Let $U,V\subseteq\mathbb R^{2n}$ be phase domains with standard forms and matrix $J$ of [[def-cm-phase-domain-and-standard-symplectic-two-form]]. All finite differentiability classes and diffeomorphisms use [[def-ck-euclidean-maps-and-diffeomorphisms]].

On any open set $O\subseteq\mathbb R^m$, a **$C^k$ coordinate differential form**, $k\ge0$, is a sum $\sum_{i_1<\cdots<i_j}a_{i_1\cdots i_j}(z)\,dz^{i_1}\wedge\cdots\wedge dz^{i_j}$ with $C^k$ coefficient functions. Its value at a point is the indicated alternating multilinear form on $\mathbb R^m$. For $k\ge1$ define its exterior derivative by the coordinate formula $d(a\,dz^{i_1}\wedge\cdots)=\sum_l(\partial_l a)\,dz^l\wedge dz^{i_1}\wedge\cdots$, extended linearly. For a $C^1$ map $C:U\to V$, the **pointwise pullback** is
$$ (C^*\eta)_z(v_1,\ldots,v_j):=\eta_{C(z)}(DC(z)v_1,\ldots,DC(z)v_j). $$
It is a continuous form when $\eta$ is continuous; no assertion that this pullback is smooth is part of the definition. Wedges and contractions are the pointwise alternating multilinear operations. Thus the finite-regularity identities below can be read without applying a definition restricted to smooth forms or maps.

A **$C^r$ canonical map**, $1\le r\le\infty$, is a $C^r$ map $C:U\to V$ satisfying $C^*\omega_V=\omega_U$ pointwise. A **$C^r$ canonical transformation** is such a map that is a $C^r$ diffeomorphism onto $V$; a **local $C^r$ canonical transformation** is a $C^r$ local diffeomorphism satisfying the same equality. The $C^\infty$ case agrees with [[def-canonical-transformation]] and [[def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding]]; the finite-$r$ terminology on this page is the definition just given, and does not assert that a $C^1$ map is smooth.

For $h\in C^2(U)$ the **coordinate Hamiltonian field** is the $C^1$ vector-valued map $X_h:=J\nabla h$, viewed as a field by the canonical identification $T_zU=\mathbb R^{2n}$. Its characterization by $\iota_{X_h}\omega_U=dh$ is proved in [[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]]. For $f,g\in C^1(U)$ define the **coordinate Poisson bracket** by $\{f,g\}:=\nabla f^{\mathsf T}J\nabla g$; for $C^2$ inputs it is $C^1$ and equals $\omega_U(X_f,X_g)$ by that proposition. Smooth inputs recover the smooth symplectic conventions. No closure of the $C^2$ class under this bracket is assumed.
