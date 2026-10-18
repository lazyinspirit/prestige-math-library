---
id: ex-hh-rational-spectral-r-matrix-singular-parameters
kind: example
title: "The rational spectral R-matrix has singular parameter values"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-hh-rational-spectral-r-matrix, lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter, def-yang-baxter-operator-on-an-object, thm-a-yang-baxter-operator-gives-braid-group-representations]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "L. D. Faddeev, How Algebraic Bethe Ansatz Works for Integrable Model"
      url: "https://arxiv.org/pdf/hep-th/9605187"
      locator: "Section 3, equations (33)–(39): R(u)=uI+iP on the two-dimensional spin space"
    - title: "Pavel Etingof and Mykola Semenyakin, A Brief Introduction to Quantum Groups"
      url: "https://arxiv.org/pdf/2106.05252"
      locator: "Section 5.4.2, Example 5.19, PDF pp. 33–34: poles and the meromorphic rather than ordinary braiding interface"
---

## Example

Use $V=\mathbb C^2$ and the operators of [[def-hh-rational-spectral-r-matrix]]. In the ordered basis $(e_1\otimes e_1,e_1\otimes e_2,e_2\otimes e_1,e_2\otimes e_2)$, the matrix of $R(u)=uI+iP$ is

$$\begin{pmatrix}u+i&0&0&0\\0&u&i&0\\0&i&u&0\\0&0&0&u+i\end{pmatrix}.$$

The symmetric subspace has eigenvalue $u+i$ and dimension three, and the antisymmetric subspace has eigenvalue $u-i$ and dimension one. For $\check R(u)=PR(u)$, the corresponding eigenvalues are $u+i$ and $i-u$. Hence both operators are invertible exactly when $u\notin\{i,-i\}$. The parameterized Yang-Baxter identities hold for all parameter triples, including triples containing these singular parameter values, but a singular operator cannot be assigned to a braid-group generator.

## Facts & Assumptions

**Given:** The matrices $R(u)$ and $\check R(u)$ of [[def-hh-rational-spectral-r-matrix]], the identities of [[lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter]], and the braid-group representation interface.

[F1] [[def-hh-rational-spectral-r-matrix]]: $R(u)=uI+iP$ and $\check R(u)=PR(u)$.

[F2] [[lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter]]: for all $x,y,z\in\mathbb C$, both the un-checked and checked spectral equations hold with parameters $x-y$, $x-z$, and $y-z$.

[F3] [[def-yang-baxter-operator-on-an-object]]: a Yang-Baxter operator is an invertible endomorphism satisfying the braid-form equation; invertibility is part of the definition.

[F4] [[thm-a-yang-baxter-operator-gives-braid-group-representations]]: an invertible Yang-Baxter operator gives a homomorphism from each Artin braid group B_n into the automorphism group of the corresponding tensor power.

## Verification

1.1 The flip $P$ has eigenvalue $1$ on the three-dimensional symmetric subspace, with basis $e_1\otimes e_1$, $e_1\otimes e_2+e_2\otimes e_1$, $e_2\otimes e_2$, and eigenvalue $-1$ on the one-dimensional antisymmetric subspace spanned by $e_1\otimes e_2-e_2\otimes e_1$. Therefore $R(u)=uI+iP$ has eigenvalues $u+i$ and $u-i$ on these two subspaces, while $\check R(u)=uP+iI$ has eigenvalues $u+i$ and $i-u$. [given, F1, algebra]

2.1 At $u=i$, $R(u)$ vanishes on the antisymmetric line and has rank three; at $u=-i$, it vanishes on the symmetric subspace and has rank one. Thus both $R(u)$ and $\check R(u)$ are invertible exactly away from $u=i$ and $u=-i$. At $u=0$, $R(0)=iP$ and $\check R(0)=iI$ are invertible. [given, F1, step 1.1, algebra]

3.1 Set $x=i$, $y=0$, $z=0$. Then the checked identity in [F2] has the factors $\check R_1(i)$, $\check R_2(i)$, and $\check R_1(0)$, and both $\check R_1(i)$ and $\check R_2(i)$ are singular by step 2.1. Thus these maps cannot be images of braid-group generators in an automorphism group: the required invertibility in [F3] fails. [given, F2, F3, step 2.1, algebra]

4.1 At $u=0$ the checked operator is $iI$. Its local operators on every tensor power are scalar $iI$ and satisfy the Artin braid and distant-commutativity relations; they are invertible because $i$ is nonzero. Thus the assignment $\sigma_j\mapsto iI$ does define a braid-group representation, consistent with [F4]. [given, F1, F3, F4, step 2.1, algebra] ∎
