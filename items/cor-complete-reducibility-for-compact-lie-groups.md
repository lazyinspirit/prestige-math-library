---
id: cor-complete-reducibility-for-compact-lie-groups
kind: corollary
title: Complete reducibility for compact Lie groups
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-every-finite-dimensional-continuous-representation-of-a-compact-lie-group-is-unitarizable, def-axiom-of-choice, def-continuous-and-unitary-representation-of-a-compact-lie-group, thm-finite-dimensional-orthogonal-decomposition, cor-double-orthogonal-complement-and-dimension]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §1, complete reducibility following the invariant-inner-product proposition"
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§4.2, Theorem 4.5"
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Every finite-dimensional continuous complex
representation of a compact Lie group is a direct sum of irreducible
representations.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact Lie group $G$ and a finite-dimensional complex representation $\pi:G\to\operatorname{GL}(V)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through [L1].

[L1] Every finite-dimensional continuous complex representation of $G$ preserves some positive-definite Hermitian inner product, so it may be regarded as unitary for that inner product ([[thm-every-finite-dimensional-continuous-representation-of-a-compact-lie-group-is-unitarizable]], [[def-continuous-and-unitary-representation-of-a-compact-lie-group]]).

[L2] A subrepresentation of $\pi$ is a linear subspace stable under every $\pi(g)$; $\pi$ is irreducible when $V\ne0$ and there is no nonzero proper subrepresentation, and a direct sum of subrepresentations $V=V_1\oplus\dots\oplus V_m$ is a decomposition into representations by restriction ([[def-continuous-and-unitary-representation-of-a-compact-lie-group]]).

[L3] For every subspace $W$ of a finite-dimensional inner-product space $V$, one has $V=W\oplus W^\perp$ and $\dim W+\dim W^\perp=\dim V$ ([[thm-finite-dimensional-orthogonal-decomposition]], [[cor-double-orthogonal-complement-and-dimension]]). A proper subspace of a finite-dimensional space has smaller dimension, and the zero representation is the direct sum of the empty family. [finite-dimensional linear algebra, empty-sum convention]

## Proof

**Proof technique:** direct.

1.1 We argue by induction on $n=\dim V$, assuming the assertion for all representation spaces of dimension $<n$. If $n=0$ then $V$ is the empty direct sum of irreducibles by [L3]; otherwise $V$ has a nonzero subrepresentation, and choosing among the nonzero subrepresentations one of least positive dimension gives an irreducible subrepresentation $W$, since any nonzero proper subrepresentation of $W$ would be a nonzero subrepresentation of $V$ of strictly smaller positive dimension by [L3]. [L2, L3]

1.2 By [L1] fix a $G$-invariant positive-definite Hermitian inner product on $V$ and let $W^\perp$ be the orthogonal complement of $W$; then $W^\perp$ is a subrepresentation, because for $w'\in W^\perp$, $w\in W$ and $g\in G$ unitarity and invariance of $W$ give $\langle\pi(g)w',w\rangle=\langle w',\pi(g)^{-1}w\rangle$ with $\pi(g)^{-1}w=\pi(g^{-1})w\in W$, so $\langle\pi(g)w',w\rangle=0$. [L1, L2]

2.1 Since $W\ne0$, [L3] gives $\dim W^\perp=\dim V-\dim W<\dim V$, so the inductive hypothesis applies to the subrepresentation $W^\perp$ and exhibits it as a direct sum of irreducible subrepresentations; adjoining the irreducible summand $W$ gives $V=W\oplus W^\perp$ as a direct sum of irreducibles by [L2]. The Axiom of Choice entered only through [L1]. [A1, L2, L3, step 1.1, step 1.2] ∎
