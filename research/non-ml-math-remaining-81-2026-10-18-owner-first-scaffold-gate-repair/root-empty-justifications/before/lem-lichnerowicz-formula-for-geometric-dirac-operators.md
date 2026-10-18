---
id: lem-lichnerowicz-formula-for-geometric-dirac-operators
kind: lemma
title: "Lichnerowicz formula for a geometric Dirac operator"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: spin-geometry-dirac-and-index-theory
dependency_level: 3
deps:
  - def-graded-hermitian-clifford-module-and-geometric-dirac
  - def-second-order-laplace-type-operators-on-vector-bundles
  - thm-fundamental-theorem-of-riemannian-geometry
  - def-complex-linear-and-compatible-bundle-connections
  - lem-geometric-dirac-operator-is-well-defined
  - def-riemann-curvature-four-tensor
  - thm-algebraic-symmetries-of-the-riemann-tensor
  - thm-first-bianchi-identity
  - thm-curvature-two-form-structure-equation
  - def-connection-on-a-smooth-vector-bundle
  - def-axiom-of-choice
  - def-clifford-algebra-of-a-quadratic-space
justified_by:
proof_strategy: direct
verification:
  precheck: pass
axiom_strength: "ZF + full AC; the algebraic curvature supplier uses countable choice"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Liviu I. Nicolaescu, Notes on the Atiyah–Singer Index Theorem, revision 15 November 2013"
      url: https://www3.nd.edu/~lnicolae/ind-thm.pdf
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry (2019)"
      url: https://arxiv.org/pdf/1911.09766
---

## Statement

Assume full AC. Let $M$ be a Riemannian manifold and $V$ a graded Hermitian Clifford module with compatible connection as in [[def-graded-hermitian-clifford-module-and-geometric-dirac]]. Use $R(X,Y)=[\nabla^{LC}_X,\nabla^{LC}_Y]-\nabla^{LC}_{[X,Y]}$ and $\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$. In a local oriented orthonormal frame define
$$F^S_{ij}=\frac14\sum_{a,b}\operatorname{Rm}(e_i,e_j,e_a,e_b)c(e^a)c(e^b),\qquad F^{V/S}_{ij}=F^V_{ij}-F^S_{ij}.$$
Then $F^{V/S}_{ij}$ commutes with Clifford multiplication and
$$D_V^2=(\nabla^V)^*\nabla^V+\frac{\operatorname{scal}_g}{4}I+\sum_{i<j}c(e^i)c(e^j)F^{V/S}_{ij}.$$
In particular $D_V^2$ is formally symmetric Laplace type with positive-frequency principal symbol $|\xi|^2I$.

## Facts & Assumptions

**Given:** Full AC, a Riemannian manifold, and the graded Hermitian Clifford module/connection from [[def-graded-hermitian-clifford-module-and-geometric-dirac]].

[F1] Clifford generators are skew-Hermitian and satisfy $c_i c_j+c_j c_i=-2\delta_{ij}$ ([[def-graded-hermitian-clifford-module-and-geometric-dirac]], [[def-clifford-algebra-of-a-quadratic-space]]).

[F2] The connection is unitary and Clifford-compatible; curvature is its bracket-corrected commutator ([[def-graded-hermitian-clifford-module-and-geometric-dirac]], [[def-connection-on-a-smooth-vector-bundle]]).

[F3] The Levi–Civita curvature has pair skewness, pair interchange, cyclic first Bianchi, and the Ricci contraction defining scalar curvature ([[def-riemann-curvature-four-tensor]], [[thm-algebraic-symmetries-of-the-riemann-tensor]]).

[F4] A second-order operator with scalar positive principal symbol and formal symmetry is Laplace type ([[def-second-order-laplace-type-operators-on-vector-bundles]]).

[A1] Full AC implies the countable-choice hypotheses in [F3] and is needed by later compact-bundle analytic suppliers ([[def-axiom-of-choice]]).

## Proof

**Given:** The stated Clifford module and connection, and an orthonormal frame normal at a point $p$.

1.1 At $p$, $\nabla^{LC}e_i=0$ and $[e_i,e_j]=0$. Compatibility [F2] gives $\nabla^V_i(c(e^j))=0$ there, so expanding $D_V^2=\sum_{i,j}c_i c_j\nabla_i\nabla_j$ yields diagonal terms $-\sum_i\nabla_i^2$ and off-diagonal terms $\sum_{i<j}c_i c_j[\nabla_i,\nabla_j]$. The first term is $(\nabla^V)^*\nabla^V$ at $p$; the commutators are $F^V_{ij}$. Since $p$ was arbitrary, $$D_V^2=(\nabla^V)^*\nabla^V+\sum_{i<j}c_i c_jF^V_{ij}$$ globally. [F1, F2, given, algebra]

2.1 Applying two covariant derivatives to $\nabla^V_X(c(\xi)v)=c(\nabla^{LC}_X\xi)v+c(\xi)\nabla^V_Xv$ and antisymmetrizing in $X,Y$ gives $[F^V_{ij},c(\xi)]=c(R^{T^*M}_{ij}\xi)$. Direct Clifford expansion gives $[c_a c_b,c_k]=2(\delta_{ak}c_b-\delta_{bk}c_a)$; substituting the displayed coefficient $F^S_{ij}$ shows $[F^S_{ij},c(\xi)]=c(R^{T^*M}_{ij}\xi)$ with the cotangent action induced by the fixed curvature convention. Subtracting proves $[F^{V/S}_{ij},c(\xi)]=0$ for every $\xi$. [F1, F2, step 1.1, algebra]

3.1 Substituting $F^S_{ij}$ gives $\sum_{i<j}c_ic_jF^S_{ij}=\frac18\sum_{i,j,a,b}\operatorname{Rm}_{ijab}c_ic_jc_ac_b$. The Clifford relation expands $c_ic_jc_ac_b$ into exterior degrees $4,2,0$ as $c_i\wedge c_j\wedge c_a\wedge c_b-\delta_{ij}c_a\wedge c_b+\delta_{ia}c_j\wedge c_b-\delta_{ib}c_j\wedge c_a-\delta_{ja}c_i\wedge c_b+\delta_{jb}c_i\wedge c_a+\delta_{ij}\delta_{ab}-\delta_{ia}\delta_{jb}+\delta_{ib}\delta_{ja}$. The degree-four coefficient is the total alternation of $\operatorname{Rm}_{ijab}$ and is zero by the cyclic first-Bianchi identity [F3]. For the degree-two part, the $\delta_{ij}$ term vanishes by skewness in the first curvature pair; the other four contractions give $4\sum_i\operatorname{Rm}_{ipiq}$ as the coefficient of $c_p\wedge c_q$, which is symmetric in $p,q$ by pair interchange and therefore contracts to zero. The scalar coefficient is $\sum_{i,j,a,b}\operatorname{Rm}_{ijab}(\delta_{ij}\delta_{ab}-\delta_{ia}\delta_{jb}+\delta_{ib}\delta_{ja})=2\sum_{i,j}\operatorname{Rm}_{ijji}=2\operatorname{scal}_g$: the first contraction vanishes and each of the last two equals the scalar contraction. Multiplication by $1/8$ gives $\operatorname{scal}_g/4$. [F1, F3, step 2.1, algebra]

4.1 Substituting $F^V_{ij}=F^S_{ij}+F^{V/S}_{ij}$ in step 1.1 and using step 3.1 gives the displayed formula. The principal symbol of $D_V$ at covector $\xi$ is $i c(\xi)$, so $\sigma_2(D_V^2)(\xi)=|\xi|^2I$ by [F1]. Formal symmetry of $D_V$ on a closed manifold is supplied by [[lem-geometric-dirac-operator-is-well-defined]]; for the pointwise differential expression formal symmetry is local. Hence [F4] applies to $D_V^2$. The empty and zero-rank fibers contribute the zero operator and the same formula with all endomorphisms zero; in dimension one the curvature term has no pairs. [A1, F1, F4, step 1.1, step 3.1, algebra] ∎
