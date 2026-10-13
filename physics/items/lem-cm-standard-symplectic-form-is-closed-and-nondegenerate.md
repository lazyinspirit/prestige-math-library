---
id: lem-cm-standard-symplectic-form-is-closed-and-nondegenerate
kind: lemma
title: "The standard two-form of a phase domain is closed and nondegenerate, with contraction $\\iota_v\\omega=\\sum_i a_i\\,dp_i-\\sum_i b_i\\,dq^i$"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-phase-domain-and-standard-symplectic-two-form, def-symplectic-form-and-symplectic-manifold, def-symplectic-vector-space, def-smooth-differential-k-form, thm-local-coordinate-formula-for-the-exterior-derivative, thm-the-exterior-derivative-squares-to-zero, def-linear-map, def-invertible-euclidean-linear-map, def-matrix-product-and-identity-matrix, def-metric-topology, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  def-symplectic-form-and-symplectic-manifold: mathematical-premise
  def-symplectic-vector-space: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
  thm-the-exterior-derivative-squares-to-zero: mathematical-premise
  def-linear-map: mathematical-premise
  def-invertible-euclidean-linear-map: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-metric-topology: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Ana Cannas da Silva, Lectures on Symplectic Geometry, revised January 2006, Symplectic Manifolds (the symplectic form sum dq^i wedge dp_i on R^2n, closedness and nondegeneracy) and Lecture 18"
      url: "https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 4.1 (Hamilton's equations: contraction identities and the matrix epsilon used for the symplectic form), printed pages 80-88"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $U$ be a phase domain with canonical one-form $\lambda_U$, standard two-form
$\omega_U=\sum_i dq^i\wedge dp_i$ and matrix $J=\begin{pmatrix}0_n&I_n\\-I_n&0_n\end{pmatrix}$
([[def-cm-phase-domain-and-standard-symplectic-two-form]]). For a point $z\in U$ write
$\omega_z:=(\omega_U)_z$. Then:

1. $\omega_U$ is closed: $d\omega_U=0$;
2. for all $v,w\in\mathbb R^{2n}$, written in the coordinate frame as $v=(a,b)$ and $w=(c,d)$ with
   $a,b,c,d\in\mathbb R^n$, one has
   $$\omega_z(v,w)=v^{\mathsf T}J\,w=a\cdot d-b\cdot c ;$$
3. for every $v=(a,b)\in\mathbb R^n\times\mathbb R^n$ the contraction is the covector
   $$\iota_v\omega_z=\sum_{i=1}^n a_i\,dp_i-\sum_{i=1}^n b_i\,dq^i ;$$
4. $J^{\mathsf T}=-J$, $J^2=-I_{2n}$, and $J$ is invertible with $J^{-1}=J^{\mathsf T}=-J$;
5. consequently $v\mapsto\iota_v\omega_z$ is a linear isomorphism $\mathbb R^{2n}\to(\mathbb R^{2n})^*$,
   so $\omega_U$ is nondegenerate at every point and $(U,\omega_U)$ is a symplectic manifold.

## Facts & Assumptions

**Given:** The phase domain $U\subseteq\mathbb R^{2n}$, its standard two-form $\omega_U$, a point $z\in U$, and vectors $v=(a,b)$, $w=(c,d)$ in $\mathbb R^n\times\mathbb R^n$ ([[def-cm-phase-domain-and-standard-symplectic-two-form]]).

[F1] For the coordinate two-form $dq^i\wedge dp_i$ the defining multilinear evaluation gives $(dq^i\wedge dp_i)(v,w)=dq^i(v)dp_i(w)-dq^i(w)dp_i(v)=a^i d_i-c^i b_i$, where $v$ has $q$-block $a$ and $p$-block $b$ and $w$ has $q$-block $c$ and $p$-block $d$ ([[def-smooth-differential-k-form]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F2] Coordinate formula for the exterior derivative and $d^2=0$ ([[thm-local-coordinate-formula-for-the-exterior-derivative]], [[thm-the-exterior-derivative-squares-to-zero]]): for smooth coefficients, $d(\sum_j g_j\,d\eta^j) =\sum_j dg_j\wedge d\eta^j$, and the exterior derivative of an exact form vanishes.

[F3] Block matrix algebra: for the block matrix $J$ one has $J=\begin{pmatrix}0_n&I_n\\-I_n&0_n\end{pmatrix}$, so $J^{\mathsf T}=\begin{pmatrix}0_n&-I_n\\I_n&0_n\end{pmatrix}=-J$ and $J^2=\begin{pmatrix}-I_n&0_n\\0_n&-I_n\end{pmatrix}=-I_{2n}$; hence $(-J)J=I_{2n}=J(-J)$ and $J^{-1}=-J=J^{\mathsf T}$ ([[def-matrix-product-and-identity-matrix]], [[def-invertible-euclidean-linear-map]]).

[F4] A linear map $T:\mathbb R^{2n}\to(\mathbb R^{2n})^*$ is invertible if and only if its kernel is trivial, by finite dimension and rank-nullity ([[def-linear-map]], [[def-invertible-euclidean-linear-map]]). Nondegeneracy of a two-form is the pointwise statement of [[def-symplectic-vector-space]] and [[def-symplectic-form-and-symplectic-manifold]].

## Proof

**Proof technique:** direct; evaluate the constant-coefficient two-form on the coordinate frame, read off the contractions and the block identities, and conclude pointwise nondegeneracy.

1.1 Closedness: since $dq^i\wedge dp_i=d(q^i\,dp_i)$ by [F2], summing gives $\omega_U=d\gamma$ with $\gamma=\sum_i q^i\,dp_i$, whence $d\omega_U=d^2\gamma=0$. [F2, given]

1.2 Evaluation and contraction: by [F1], $\omega_z(v,w)=\sum_i(a^i d_i-c^i b_i)=a\cdot d-b\cdot c$; in block form this is $v^{\mathsf T}Jw$, since $Jw=(d,-c)$ and $(a,b)\cdot(d,-c)=a\cdot d-b\cdot c$. Reading the same evaluation as a covector in $w$ gives $\iota_v\omega_z=\sum_i a_i\,dp_i-\sum_i b_i\,dq^i$. [F1, given, algebra]

1.3 Block identities: [F3] gives $J^{\mathsf T}=-J$, $J^2=-I_{2n}$ and $J^{-1}=J^{\mathsf T}=-J$. [F3]

2.1 Nondegeneracy: if $\iota_v\omega_z=0$, then by step 1.2 the covector has all coefficients zero, so $a=0$ and $b=0$, that is $v=0$; hence the linear map $v\mapsto\iota_v\omega_z$ has trivial kernel and, by [F4], is an isomorphism $\mathbb R^{2n}\to(\mathbb R^{2n})^*$. Thus $\omega_z$ is nondegenerate and, with step 1.1, $(U,\omega_U)$ is a symplectic manifold. [step 1.1, step 1.2, F4] ∎

## Remarks

- The point of the block form is that all five clauses are pointwise linear-algebra statements with constant coefficients; no completeness, boundedness or topological hypothesis on $U$ is used.
- The published [[thm-the-canonical-cotangent-two-form-is-symplectic]] states the same closedness and nondegeneracy for the canonical form on a cotangent bundle (under countable choice); the present lemma is the choice-free local form on a phase domain, stated so that the flow, canonical-map and generating-function items below can compute with it directly.
