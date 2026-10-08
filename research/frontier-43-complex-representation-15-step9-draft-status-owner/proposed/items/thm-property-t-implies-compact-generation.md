---
status: draft
id: thm-property-t-implies-compact-generation
kind: theorem
title: Property (T) implies compact generation
deps:
  - def-axiom-of-choice
  - def-kazhdans-property-t
  - def-almost-invariant-vectors-for-a-unitary-representation
  - def-strongly-continuous-unitary-representation
  - def-hilbert-space
  - def-topological-group
  - def-locally-compact-space
  - def-hausdorff-space
  - def-compact-space
  - lem-compactness-of-a-subspace-is-ambient
  - thm-closed-subspace-of-a-compact-space-is-compact
  - def-neighbourhood-top
  - def-subgroup
  - def-coset
  - def-generated-subgroup
  - thm-locally-compact-hausdorff-basics
  - def-compactly-generated-locally-compact-group
  - def-hilbert-direct-sum-of-unitary-representations
  - lem-quasi-regular-representation-on-a-discrete-coset-space
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC for the set-indexed Hilbert direct sum of quasi-regular representations. The subgroup family is a subset of P(G); compactness gives finite subcovers, and the remaining subgroup and coset choices are finite, so no additional choice is used."
verification:
  precheck: pass
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Chapter 1, Theorem 1.3.1 and its complete proof, printed pp. 41–42: the direct sum of quasi-regular representations over open compactly generated subgroups; the single-coordinate almost-invariance witness; and finite index forced by a nonzero invariant coordinate."
    - title: "Emmanuel Breuillard, PCMI Lecture Notes on Property (T), Expander Graphs and Approximate Groups"
      url: "https://www.math.utah.edu/pcmi12/lecture_notes/breuillard.pdf"
      locator: "Lecture 2, Proposition 0.6 and its proof, printed p. 4/PDF p. 11: the discrete countable case via quasi-regular representations on coset spaces; the general locally compact proof is checked and supplied here."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $G$ be a locally
compact Hausdorff topological group ([[def-topological-group]],
[[def-locally-compact-space]], [[def-hausdorff-space]]) with Kazhdan's property
(T) ([[def-kazhdans-property-t]]). Then $G$ is compactly generated
([[def-compactly-generated-locally-compact-group]]). In particular, a discrete
group with property (T) is finitely generated.

## Facts & Assumptions

**Given:** AC; a locally compact Hausdorff topological group $G$ with property (T).

[F1] Property (T) says that every strongly continuous unitary representation with almost invariant vectors has a nonzero invariant vector ([[def-kazhdans-property-t]], [[def-almost-invariant-vectors-for-a-unitary-representation]], [[def-strongly-continuous-unitary-representation]], [[def-hilbert-space]]).

[F2] Every point of $G$ has a compact neighborhood, and such a neighborhood contains an open set containing that point ([[def-locally-compact-space]], [[def-neighbourhood-top]], [[def-compact-space]]).

[F3] A subgroup is compactly generated when it is generated as an abstract group by a compact subset ([[def-compactly-generated-locally-compact-group]], [[def-generated-subgroup]], [[def-subgroup]]).

[F4] Every open subgroup of a topological group is closed because its complement is a union of open left cosets; a closed subgroup of the locally compact Hausdorff group $G$ is locally compact Hausdorff ([[def-topological-group]], [[def-coset]], [[thm-locally-compact-hausdorff-basics]]).

[F5] Every cover of a compact subset by ambient open sets has a finite subcover ([[lem-compactness-of-a-subspace-is-ambient]]). A finite union of compact subsets is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]), and every finite subset is compact ([[def-compact-space]]).

[F6] For each open subgroup $H\le G$, the quasi-regular representation on $\ell^2(G/H)$ is strongly continuous and unitary, has $H$-fixed unit vector $\delta_H$, and its $G$-invariant subspace is nonzero exactly when $G/H$ is finite ([[lem-quasi-regular-representation-on-a-discrete-coset-space]]).

[F7] Under AC, a set-indexed family of strongly continuous unitary representations has a strongly continuous Hilbert direct sum, with componentwise action and isometric coordinate embeddings ([[def-hilbert-direct-sum-of-unitary-representations]], [[def-axiom-of-choice]]).

## Proof

Bekka–de la Harpe–Valette prove this in Theorem 1.3.1, printed pp. 41–42. The proof below retains their single-coordinate vector in the direct sum and proves the compact-subgroup covering and quasi-regular interfaces locally.

**Proof technique:** if $G$ is not compactly generated, use quasi-regular representations over all open compactly generated subgroups to build an almost-invariant representation with no invariant vector.

1.1 Let $\mathcal C$ be the set of open compactly generated subgroups of $G$; it is a set because it is a subcollection of $\mathcal P(G)$. It covers $G$: for $g\in G$, choose a compact neighborhood $K$ of $g$ and an open $U$ with $g\in U\subseteq K$ by [F2]. The subgroup $H=\langle K\rangle$ contains the nonempty open set $U$; if $u\in U$, then $u^{-1}U$ is an open identity neighborhood contained in $H$, and $H=\bigcup_{h\in H}h(u^{-1}U)$ is open. It is locally compact Hausdorff by [F4], and $K$ is a compact generator, so $H\in\mathcal C$ and $g\in H$. [F2, F3, F4, algebra]

2.1 For any compact $Q\subseteq G$, the compact set $Q\cup\{e\}$ is covered by the open subgroups in $\mathcal C$ by step 1.1. Take a finite subcover $H_1,\ldots,H_n$ with $n\ge1$ by [F5], and for each $i$ take a compact generating set $K_i$ for $H_i$ by [F3]. The finite union $K=\bigcup_{i=1}^nK_i$ is compact, and $H_0=\langle K\rangle$ contains every $H_i$; because it contains the open subgroup $H_1$, it is open and locally compact Hausdorff by [F4]. Thus $H_0\in\mathcal C$ and $Q\subseteq H_0$. [F3, F4, F5, step 1.1, algebra]

2.2 Suppose for contradiction that $G$ is not compactly generated. Then every $H\in\mathcal C$ has infinite index: if $G/H$ were finite, adjoining finitely many left coset representatives to a compact generating set of $H$ would give a compact set by [F5] generating $G$ by [F3]. By [F6], each quasi-regular representation $\lambda_{G/H}$ has no nonzero $G$-invariant vector. Form the Hilbert direct sum $\pi=\widehat{\bigoplus}_{H\in\mathcal C}\lambda_{G/H}$; this is a strongly continuous unitary representation by [F7]. Its invariant vectors are coordinatewise invariant, so $\pi$ has no nonzero invariant vector. [F3, F5, F6, F7, step 1.1, algebra]

3.1 For every compact $Q\subseteq G$, choose $H_0\in\mathcal C$ containing $Q$ by step 2.1. The vector $\delta_{H_0}$ in its coordinate of $\pi$ is a unit vector fixed by every $q\in Q$ by [F6]. Therefore $\pi$ has almost invariant vectors. [F1, F6, F7, step 2.1]

4.1 By property (T) and [F1], $\pi$ has a nonzero invariant vector. At least one coordinate of this vector is nonzero, and that coordinate is $G$-invariant in some $\lambda_{G/H}$; [F6] then says that $G/H$ is finite. The finite-index argument in step 2.2 makes $G$ compactly generated, contradicting the assumption there. Hence $G$ is compactly generated. [F1, F6, step 2.2, step 3.1]

5.1 If $G$ is discrete, every compact subset is finite: the cover of a compact subset by its open singletons has a finite subcover by [F5]. A compact generating subset supplied by step 4.1 is therefore finite, so $G$ is finitely generated. [F3, F5, step 4.1] ∎
