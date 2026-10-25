---
id: cor-all-relevant-characteristic-numbers-vanish-on-null-cobordant-manifolds
kind: corollary
title: "All characteristic numbers vanish on null-cobordant manifolds"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [thm-characteristic-numbers-are-cobordism-invariants, def-null-cobordant-closed-manifold, def-unoriented-and-oriented-bordism-groups, prop-zero-dimensional-bordism-groups, prop-boundaries-have-zero-stiefel-whitney-numbers, prop-oriented-boundaries-have-zero-pontryagin-numbers, def-stiefel-whitney-number-of-a-closed-manifold, def-pontryagin-number-of-a-closed-oriented-manifold, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination; chapters 16-18 of the re-typeset scan)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Theorem 4.9, printed p. 52, Corollary 4.11, printed p. 53, and Lemma 17.3 with Corollary 17.4, printed p. 202: boundary vanishing and the bordism invariance used here."
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Lecture 1, printed p. 13: a closed manifold bounds iff all Stiefel-Whitney numbers vanish (converse cited to Thom)"
dependency_level: 1
---

## Statement

Assume AC ([[def-axiom-of-choice]]), inherited from the characteristic-number
definitions and the boundary-vanishing propositions, and used only there. Let
$M$ be a closed smooth $n$-manifold. If $M$ is null-cobordant, then every
Stiefel-Whitney number $w^{I}[M]$ (total degree $n$) vanishes. If $M$ is a
closed oriented $4k$-manifold that is null-cobordant in the oriented theory,
then every Pontryagin number $p_{J}[M]$ vanishes. Equivalently, a nonzero
characteristic number is an obstruction to null-cobordism.

## Facts & Assumptions

**Given:** A closed smooth $n$-manifold $M$, either unoriented or oriented with an orientation $o$, together with its characteristic-number data.

[F1] [[def-null-cobordant-closed-manifold]]: $M$ is null-cobordant if it is cobordant to the empty $n$-manifold, that is, if a bordism from $M$ to $\varnothing$ exists. In the oriented theory the same definition is applied to the oriented bordism relation of [[def-unoriented-and-oriented-bordism-groups]]; the class of the empty manifold is the zero element of $\Omega_n^{O}$ and $\Omega_n^{SO}$.

[F2] [[thm-characteristic-numbers-are-cobordism-invariants]]: unoriented-cobordant closed $n$-manifolds have equal Stiefel-Whitney numbers in every total degree $n$, and oriented-cobordant closed oriented $4k$-manifolds have equal Pontryagin numbers (and equal Stiefel-Whitney numbers).

[F3] [[def-stiefel-whitney-number-of-a-closed-manifold]] and [[def-pontryagin-number-of-a-closed-oriented-manifold]] define both families as componentwise sums over the finitely many connected components of the manifold; the empty manifold has no components, so its value is the empty sum $0$ in the respective coefficient group.

[F4] [[prop-boundaries-have-zero-stiefel-whitney-numbers]] and [[prop-oriented-boundaries-have-zero-pontryagin-numbers]] are the published boundary-vanishing statements: a closed manifold presented as the boundary of a compact manifold has all Stiefel-Whitney, resp. Pontryagin, numbers zero. [[prop-zero-dimensional-bordism-groups]] identifies the degree-zero invariants: the parity of the cardinality in the unoriented theory and the signed count in the oriented theory.

## Proof

1.1 Unoriented case. Suppose $M$ is null-cobordant, so by [F1] there is a bordism from $M$ to the empty $n$-manifold. The empty manifold is a closed smooth $n$-manifold, and by [F3] each of its Stiefel-Whitney numbers is the empty componentwise sum $0$. Applying the invariance theorem [F2] to the pair $(M,\varnothing)$ gives $w^{I}[M]=w^{I}[\varnothing]=0\in\mathbb F_2$ for every monomial $w^{I}$ of total degree $n$. [given, F1, F2, F3]

1.2 Oriented case. Suppose now that $(M,o)$ is a closed oriented $4k$-manifold that is null-cobordant in the oriented theory. By [F1] there is an oriented bordism from $(M,o)$ to the empty oriented $4k$-manifold, whose Pontryagin numbers are the empty sums $0$ by [F3]. Applying the oriented half of [F2] gives $p_{J}[M]=p_{J}[\varnothing]=0\in\mathbb Z$ for every partition $J$ of $k$; the same comparison gives the vanishing of the Stiefel-Whitney numbers of $M$ as well. [given, F1, F2, F3]

2.1 Equivalence and conventions. Taking contrapositives, a nonzero $w^{I}[M]$ obstructs unoriented null-cobordism of $M$, and a nonzero $p_{J}[M]$ obstructs oriented null-cobordism; this is the stated equivalence, since a manifold is null-cobordant precisely when its class is zero in the corresponding bordism group [F1]. If $M$ is presented as the boundary of a compact $W$, the collar data of the null-cobordism definition give a bordism from $M$ to $\varnothing$, so steps 1.1 and 1.2 re-derive the published boundary-vanishing propositions [F4]. In degree zero, a closed $0$-manifold is a finite set of signed points and its only Stiefel-Whitney number is the cardinality mod $2$; null-cobordism forces an even cardinality by [F4], matching step 1.1, and in the oriented theory the signed count is zero, matching step 1.2. For $n=0$ the oriented case $k=0$ and the empty manifold are both covered by the empty-sum convention; no choice beyond the cited suppliers is used, since only bordism data and the componentwise sums are compared. [F1, F3, F4, step 1.1, step 1.2] ∎
