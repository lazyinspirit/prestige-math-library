---
id: lem-real-orthogonal-space-preliminaries
kind: lemma
title: Orthogonal-space preliminaries and anisotropic reflections
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: pin-spin-and-clifford-module-representations
dependency_level: 0
deps: []
justified_by: []
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Eckhard Meinrenken, Lie groups and Clifford algebras, Chapter 1 §4"
      url: https://www.math.toronto.edu/mein/teaching/LieClifford/cl12.pdf
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §1.3"
      url: https://arxiv.org/pdf/0805.0311
---

## Statement

Let $V$ be a finite-dimensional real vector space of dimension $n$, let $B$ be a nondegenerate symmetric bilinear form, and put $Q(v)=B(v,v)$. A vector $u$ is **anisotropic** when $Q(u)\ne0$; a subspace $U$ is **totally isotropic** when $B|_{U\times U}=0$. Define $O(V,B)=\{A\in\operatorname{GL}(V):B(Av,Aw)=B(v,w)\}$ and $SO(V,B)=\{A\in O(V,B):\det A=1\}$. For $U\le V$, put $U^\perp=\{v:B(v,U)=0\}$. Then:

1. $\dim U^\perp=n-\dim U$, and every totally isotropic $U$ has $\dim U\le n/2$.
2. Every such $(V,B)$ has a basis of pairwise orthogonal anisotropic vectors.
3. For $A\in O(V,B)$, $\operatorname{im}(A-I)=\ker(A-I)^\perp$.
4. For anisotropic $u$, the map $r_u(v)=v-2B(v,u)u/Q(u)$ is an orthogonal reflection: it fixes $u^\perp$, sends $u$ to $-u$, and has determinant $-1$.

## Facts & Assumptions

**Given:** The finite-dimensional real quadratic space $(V,B)$ and the definitions in the Statement.

## Proof


**Proof technique:** direct.

1.1 If $n>0$, $Q$ is not the zero function: otherwise polarization gives $2B(v,w)=Q(v+w)-Q(v)-Q(w)=0$ for all $v,w$, contradicting nondegeneracy. Choose anisotropic $u$. Since $Q(u)\ne0$, $V=\mathbb Ru\oplus u^\perp$; the restriction of $B$ to $u^\perp$ is nondegenerate because a vector orthogonal to $u^\perp$ and to $u$ is orthogonal to all of $V$. Induction on dimension gives an orthogonal anisotropic basis, with the empty basis when $n=0$. [given, choose, algebra]

1.2 The map $V\to V^*$ induced by $B$ is an isomorphism. Restriction $V^*\to U^*$ is onto because a linear functional on a subspace of a finite-dimensional vector space extends after extending a basis. Therefore $v\mapsto B(v,-)|_U$ is onto with kernel $U^\perp$, so rank-nullity gives $\dim U^\perp=n-\dim U$. If $U$ is totally isotropic then $U\subseteq U^\perp$, hence $\dim U\le n-\dim U$. [given, algebra]

2.1 If $z\in\ker(A-I)$ and $y=(A-I)x$, then $B(y,z)=B(Ax,z)-B(x,z)=B(x,A^{-1}z)-B(x,z)=0$. Thus $\operatorname{im}(A-I)\subseteq\ker(A-I)^\perp$. Both subspaces have dimension $n-\dim\ker(A-I)$ by rank-nullity and step 1.2, so they are equal. [given, step 1.2, algebra]

3.1 The formula for $r_u$ is linear, fixes every vector in $u^\perp$, and gives $r_u(u)=-u$. The orthogonal direct sum $V=\mathbb Ru\oplus u^\perp$ therefore shows that $r_u$ preserves $B$ and has determinant $-1$. It is the reflection in the hyperplane $u^\perp$. [given, algebra] ∎

## Remarks

No choice axiom is used; the orthogonal basis is obtained by finite-dimensional induction. The moving-space identity in part 3 is valid for every signature.
