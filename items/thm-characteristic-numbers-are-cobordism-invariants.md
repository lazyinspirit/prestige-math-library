---
id: thm-characteristic-numbers-are-cobordism-invariants
kind: theorem
title: "Characteristic numbers are cobordism invariants"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-stiefel-whitney-number-of-a-closed-manifold, def-pontryagin-number-of-a-closed-oriented-manifold, prop-boundaries-have-zero-stiefel-whitney-numbers, prop-oriented-boundaries-have-zero-pontryagin-numbers, def-unoriented-smooth-cobordism-of-closed-manifolds, def-oriented-smooth-cobordism, def-null-cobordant-closed-manifold, thm-disjoint-union-makes-bordism-classes-abelian-groups, thm-cartesian-product-makes-bordism-a-graded-ring, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Lecture 1, printed pp. 12-13: characteristic numbers are bordism invariants (via the boundary lemma)"
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination; chapters 16-18 of the re-typeset scan)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Theorem 4.9, printed p. 52, and Lemma 17.3 with Corollary 17.4, printed p. 202: boundary vanishing and characteristic-number homomorphisms."
dependency_level: 0
---

## Statement

Assume AC ([[def-axiom-of-choice]]), inherited from the characteristic-number
definitions and the boundary-vanishing propositions, and used only there. Let
$M_0$ and $M_1$ be closed smooth $n$-manifolds. If $M_0$ and $M_1$ are
unoriented-cobordant, then $w^{I}[M_0]=w^{I}[M_1]$ for every monomial $w^{I}$
of total degree $n$. If $M_0$ and $M_1$ are closed oriented $4k$-manifolds that
are oriented-cobordant, then $p_{J}[M_0]=p_{J}[M_1]$ for every partition $J$ of
$k$; the same equality holds for their Stiefel-Whitney numbers. Hence the
characteristic numbers define functions on the unoriented and oriented bordism
groups $\Omega_n^{O}$ and $\Omega_{4k}^{SO}$.

## Facts & Assumptions

**Given:** Closed smooth manifolds $M_0,M_1$ of dimension $n$, either unoriented or oriented with orientations $o_0,o_1$, and a bordism $(W,\theta_0,\theta_1)$ from $M_0$ to $M_1$ as in the respective cobordism definitions.

[F1] [[def-unoriented-smooth-cobordism-of-closed-manifolds]] and [[def-oriented-smooth-cobordism]] define a bordism as a compact smooth $(n+1)$-manifold $W$ with a decomposition $\partial W=(\partial W)_0\sqcup(\partial W)_1$ into open and closed boundary parts and collars $\theta_0,\theta_1$ onto open neighbourhoods of the two parts, whose zero-slice restrictions identify $M_i$ diffeomorphically with $(\partial W)_i$; in the oriented case $W$ carries an orientation whose induced boundary orientation on $(\partial W)_0$ is $-o_0$ and on $(\partial W)_1$ is $o_1$. [[def-null-cobordant-closed-manifold]] records the special case of a bordism to the empty manifold.

[F2] [[prop-boundaries-have-zero-stiefel-whitney-numbers]]: for a closed smooth $n$-manifold $M=\partial W$ that is the boundary of a compact smooth $(n+1)$-manifold, every Stiefel-Whitney number vanishes, $w^{I}[M]=0$. [[prop-oriented-boundaries-have-zero-pontryagin-numbers]]: for a closed oriented $4k$-manifold that is an oriented boundary, every Pontryagin number vanishes, $p_J[M]=0$.

[F3] [[def-stiefel-whitney-number-of-a-closed-manifold]] defines $w^{I}[M]$ for a closed smooth $n$-manifold as the componentwise sum over the finitely many connected components, with the canonical mod-two orientation; [[def-pontryagin-number-of-a-closed-oriented-manifold]] defines $p_J[M]$ as the componentwise sum over the components and records that replacing the orientation $o$ by $-o$ negates every Pontryagin number.

[F4] [[thm-disjoint-union-makes-bordism-classes-abelian-groups]] and [[thm-cartesian-product-makes-bordism-a-graded-ring]] define the bordism groups $\Omega_n^{O}$ and $\Omega_n^{SO}$ as the sets of cobordism classes with the operations of disjoint union and product, and prove these operations well defined.

## Proof

1.1 Unoriented case. Let $(W,\theta_0,\theta_1)$ be a bordism from $M_0$ to $M_1$ [F1]. The collars identify $[0,1)\times M_0$ and $(-1,0]\times M_1$ with collar neighbourhoods, and their zero-slice restrictions identify the boundary parts with $M_0$ and $M_1$, so $\partial W$ with its canonical mod-two fundamental class is, up to the diffeomorphisms $\theta_i|_{\{0\}\times M_i}$, the disjoint union $M_0\sqcup M_1$; in particular $\partial W$ is a closed smooth $n$-manifold of the boundary type covered by [F2]. Applying the boundary-vanishing proposition [F2] to the boundary $\partial W$ of $W$ gives $w^{I}[\partial W]=0$ for every monomial of total degree $n$, while the componentwise definition of the Stiefel-Whitney number [F3] gives $w^{I}[\partial W]=w^{I}[M_0]+w^{I}[M_1]$ in $\mathbb F_2$, the identification of the two boundary parts with $M_0$ and $M_1$ being a diffeomorphism and the mod-two numbers carrying no orientation sign. Hence $w^{I}[M_0]=w^{I}[M_1]$ for every monomial of total degree $n$. [given, F1, F2, F3]

2.1 Oriented case. Let $(W,\theta_0,\theta_1)$ now be an oriented bordism from $(M_0,o_0)$ to $(M_1,o_1)$ [F1]. The induced boundary orientation of $\partial W$ restricts to $-o_0$ on $(\partial W)_0$ and to $o_1$ on $(\partial W)_1$, so by [F2] applied to the oriented boundary $\partial W$ of $W$ we have $p_J[\partial W]=0$ for every partition $J$ of $k$. The componentwise additivity [F3] and the collar identifications give $p_J[\partial W]=p_J[(\partial W)_0]+p_J[(\partial W)_1]=-p_J[M_0]+p_J[M_1]$, where the sign uses the orientation-reversal rule of [F3] and the fact that $\theta_0$ identifies $(\partial W)_0$ with $M_0$ carrying the negative orientation. Hence $p_J[M_0]=p_J[M_1]$. For the Stiefel-Whitney numbers of the oriented pair, the same bordism is in particular an unoriented bordism, so step 1.1 applies and gives $w^{I}[M_0]=w^{I}[M_1]$ for every monomial of total degree $4k$. [given, F1, F2, F3, step 1.1]

3.1 The numbers therefore descend to the cobordism-class groups of [F4]. This includes dimension zero: the empty monomial is point parity in the unoriented theory and signed count in the oriented theory, and the same boundary-vanishing argument proves invariance without assuming a classification of compact one-manifolds. Empty manifolds have zero numbers. AC is inherited from [F2, F3]; the comparison itself uses only the supplied bordism and finite component sums. [F2, F3, F4, step 1.1, step 2.1] ∎
