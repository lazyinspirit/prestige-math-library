---
id: lem-cartan-dieudonne-real-nondegenerate-reflection-factorization
kind: lemma
title: Cartan–Dieudonné factorization over a real quadratic space
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: pin-spin-and-clifford-module-representations
dependency_level: 1
deps: [lem-real-orthogonal-space-preliminaries]
justified_by: []
verification:
  precheck: pass
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Eckhard Meinrenken, Lie groups and Clifford algebras, Theorem 4.5 and its complete three-case proof"
      url: https://www.math.toronto.edu/mein/teaching/LieClifford/cl12.pdf
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §§1.3–1.5"
      url: https://arxiv.org/pdf/0805.0311
---

## Statement

For a finite-dimensional real vector space $V$ with a nondegenerate symmetric bilinear form $B$, every $A\in O(V,B)$ is a product of at most $\dim V$ reflections $r_u$ in anisotropic vectors $u$. The parity of the number of factors is even exactly when $A\in SO(V,B)$.

## Facts & Assumptions

**Given:** The quadratic space and reflection notation of [[lem-real-orthogonal-space-preliminaries]]. Write $K=\ker(A-I)$ and $W=\operatorname{im}(A-I)$.

[F1] Orthogonal anisotropic bases, $W=K^\perp$, the dimension bound for totally isotropic spaces, and the formula and determinant of $r_u$ are established in [[lem-real-orthogonal-space-preliminaries]].

## Proof


**Proof technique:** induction.

1.1 If $n=0$, $O(V,B)=\{I\}$ and the empty product proves the claim. If $n=1$, choose an anisotropic basis vector $u$ by [F1]. Every $A\in O(V,B)$ sends $u$ to $\pm u$, so $A=I$ or $A=r_u$; these have reflection lengths zero and one, respectively, and the parity agrees with the determinant. We now prove the induction step for $n\ge2$. [given, F1, base, algebra]

1.2 Suppose $n\ge2$ and inductively assume the theorem in smaller dimensions. If $K$ contains an anisotropic $u$, then $A$ fixes $u$ and preserves the nondegenerate space $u^\perp$. The induction hypothesis factors $A|_{u^\perp}$ into at most $n-1$ reflections with normals in $u^\perp$; extending these reflections by the identity on $\mathbb Ru$ gives the same reflections in $V$ and their product equals $A$. [given, F1, ih, construct]

1.3 Suppose instead $W$ is not totally isotropic. Then $w\mapsto Q(w)$ and $w\mapsto Q((A-I)w)$ are nonzero real polynomials: the first by nondegeneracy and the second because some vector in $W$ is anisotropic. Their product is a nonzero polynomial because the real polynomial ring is an integral domain. A nonzero polynomial on $\mathbb R^n$ does not vanish everywhere: for $n=1$ it has finitely many roots; for $n>1$, write $P(x,t)=\sum_j p_j(x)t^j$ with a nonzero coefficient $p_j$, use induction to choose $x$ with $p_j(x)\ne0$, and then choose $t$ outside the finite root set of the nonzero one-variable polynomial $P(x,t)$. Choose $w$ where the product is nonzero and put $u=(A-I)w$. Then both $w$ and $u$ are anisotropic. [given, F1, choose, algebra]

1.4 It remains that both $K$ and $W$ are totally isotropic. By [F1], $W=K^\perp$. Since $K$ and $W$ are both totally isotropic, [F1] gives $\dim K\le n/2$ and $\dim W\le n/2$. But $\dim W=n-\dim K$, so both dimensions equal $n/2$; the inclusion $K\subseteq K^\perp=W$ then gives $K=W=K^\perp$ and $n=2\dim K$. The map $A$ is the identity on $K$, and because $(A-I)V=W=K$ it is also the identity on $V/K$. In a basis extending a basis of $K$, its matrix is block triangular with identity diagonal blocks, so $\det A=1$. [F1, algebra]

2.1 Symmetry and orthogonality give $B((A+I)w,u)=B(Aw,Aw)-B(Aw,w)+B(w,Aw)-B(w,w)=0$. Thus $(A+I)w$ is fixed by $r_u$ and $u=(A-I)w$ is negated, so $r_uAw=w$. The orthogonal map $r_uA$ has the anisotropic fixed vector $w$, and the argument of step 1.2 factors it with at most $n-1$ reflections. Prepending $r_u$ factors $A$ with at most $n$. [F1, step 1.2, step 1.3, ih, algebra]

3.1 Since $n$ is even in step 1.4, choose anisotropic $u$ and put $A_1=r_uA$. Then $\det A_1=-1$, so $A_1$ cannot be in the isotropic case of step 1.4. Steps 1.2 and 2.1 give a factorization of $A_1$ of length at most $n$. Each reflection has determinant $-1$, so this length is odd; because $n$ is even it is at most $n-1$. The identity $A=r_uA_1$ now gives at most $n$ reflections. [F1, step 1.2, step 2.1, step 1.4, choose, algebra]

4.1 Every reflection has determinant $-1$, hence any reflection factorization of $A$ has parity determined by $\det A$. The constructed length is at most $n$ in all cases, and its parity is even precisely for determinant $1$. This proves the assertion, including the isotropic kernel and moved-space case. [F1, step 1.1, step 1.2, step 2.1, step 1.4, step 3.1, discharge-induction] ∎

## Remarks

Meinrenken's three-case proof is the source route. Its printed selection in Case 2 is replaced here by the real-polynomial argument in step 1.3; a nondegenerate two-dimensional split plane shows why the printed assertion about finding an anisotropic vector in the perpendicular of an isotropic vector cannot be used without repair. The theorem is asserted over $\mathbb R$, not over arbitrary fields.
