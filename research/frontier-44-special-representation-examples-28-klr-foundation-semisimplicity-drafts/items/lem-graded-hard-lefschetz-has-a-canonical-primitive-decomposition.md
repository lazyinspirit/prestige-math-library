---
id: lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition
kind: lemma
title: "Graded hard Lefschetz has a canonical primitive decomposition"
status: draft
origin: session
deps:
  - def-abelian-category
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "de Cataldo and Migliorini, The Hodge theory of algebraic maps, Theorem 4.4.4(b)"
      url: https://arxiv.org/pdf/math/0306030
---

## Statement

Let $H^j$ be objects of an abelian category, zero for all but finitely many integers $j$, and let $L:H^j\to H^{j+2}$ be maps whose iterates give isomorphisms $L^r:H^{-r}\to H^r$ for every $r\ge0$. Put $P^{-r}=\ker(L^{r+1}:H^{-r}\to H^{r+2})$. Then for every $r\ge0$ the powers of $L$ induce finite direct sum decompositions
$$H^{-r}=\bigoplus_{j\ge0}L^jP^{-r-2j},\qquad H^r=\bigoplus_{j\ge0}L^{r+j}P^{-r-2j}.$$
Each displayed power is a monomorphism on its primitive source. The decomposition is natural for morphisms commuting with $L$. This is a decomposition of graded objects; it does not identify primitive objects with classes annihilated by an untruncated map on an arbitrary derived splitting.

## Facts & Assumptions

**Given:** the finite graded objects, degree-two maps and hard Lefschetz isomorphisms of the Statement.

[F1] The abelian-category kernel, image and split exact sequence constructions are those of [[def-abelian-category]]. In particular a map with a right inverse decomposes its source into its kernel and the image of that right inverse.

## Proof

**Given:** the data of the Statement.

1.1 Fix $r\ge0$. The restriction of $L^{r+1}:H^{-r}\to H^{r+2}$ to the image of $L:H^{-r-2}\to H^{-r}$ is the hard Lefschetz isomorphism $L^{r+2}:H^{-r-2}\to H^{r+2}$. Thus $L$ is a monomorphism on $H^{-r-2}$, and the map $s=L\,(L^{r+2})^{-1}:H^{r+2}\to H^{-r}$ is a right inverse of $L^{r+1}$. The resulting split exact sequence gives $H^{-r}=P^{-r}\oplus L H^{-r-2}$. Its projection onto the second summand is the explicit idempotent $L\,(L^{r+2})^{-1}L^{r+1}$. [given, F1, algebra]

2.1 Apply step 1.1 successively to $H^{-r-2},H^{-r-4},\ldots$. Since the graded family is finite, the iteration terminates at a zero object and gives $H^{-r}=\bigoplus_{j\ge0}L^jP^{-r-2j}$. Each summand inclusion is a composite of monomorphisms proved in step 1.1, hence is a monomorphism. Applying the isomorphism $L^r$ gives the second decomposition $H^r=\bigoplus_{j\ge0}L^{r+j}P^{-r-2j}$. [F1, step 1.1, induction, base, ih]

3.1 A morphism commuting with $L$ also commutes with the isomorphisms $L^{r+2}$ and their inverses. It therefore preserves the explicit projections in step 1.1 and the primitive kernels. Applying this at every finite induction step proves naturality of both decompositions. Zero graded families and zero primitive summands are covered by the same split maps. [step 1.1, step 2.1, algebra, discharge-induction] ∎
