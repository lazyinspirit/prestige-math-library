---
id: lem-matrix-inversion-preserves-ck-regularity
kind: lemma
title: "Matrix inversion preserves $C^k$ regularity where the determinant is nonzero"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ck-euclidean-maps-and-diffeomorphisms, thm-ck-euclidean-maps-closed-under-algebra-and-composition, cor-inverse-matrix-by-adjugate, def-matrix-minors-cofactors-and-adjugate, cor-determinant-is-a-polynomial-in-the-matrix-entries, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, §§8.5–8.6"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
pipeline_run: null
---

## Statement

Let $m,n\ge1$, let $U\subseteq\mathbb R^m$ be open, and let $r\in\mathbb N$. If the entries of $A:U\to M_n(\mathbb R)$ are $C^r$ and $\det A$ never vanishes, then the entries of $A^{-1}$ are $C^r$.

## Facts & Assumptions

**Given:** The matrix-valued map in the Statement. Cofactors have the meaning of [[def-matrix-minors-cofactors-and-adjugate]], and the reciprocal derivative rule is supplied by [[thm-algebra-of-derivatives]].

[L1] For an invertible square matrix, $$A^{-1}=\det(A)^{-1}\operatorname{adj}(A).$$ ([[cor-inverse-matrix-by-adjugate]])

[L2] The function $\det:M_n(\mathbb R)\to\mathbb R$ is evaluation of the polynomial $$\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)x_{1,\sigma(1)}\cdots x_{n,\sigma(n)}.$$ ([[cor-determinant-is-a-polynomial-in-the-matrix-entries]])

[L3] Finite componentwise sums and products of $C^k$ Euclidean maps are $C^k$, and a composite of composable $C^k$ Euclidean maps is $C^k$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

## Proof

**Proof technique:** direct.

1.1 Every cofactor and the determinant are polynomial expressions in the $C^r$ entries of $A$, so they are $C^r$ by [L2] and [L3]; [L1] identifies the only remaining factor needed for the inverse. [L1, L2, L3]

1.2 On $\mathbb R\setminus\{0\}$, repeated differentiation of $h(t)=t^{-1}$ gives $h^{(j)}(t)=(-1)^j j!t^{-j-1}$. This formula follows by induction from the reciprocal and product rules, and every derivative displayed is continuous on that domain. [given, algebra]

2.1 Since $\det A$ never vanishes, its image lies in the domain of step 1.2. Thus $(\det A)^{-1}$ is $C^r$ by composition, and [L1] together with step 1.1 and [L3] makes every entry of $A^{-1}$ $C^r$. [step 1.1, step 1.2, L1, L3] ∎
