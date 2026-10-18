---
id: lem-finite-field-quiver-semistable-stack-points-are-hall-groupoids
kind: lemma
title: "Finite-field points of the semistable quiver stack give the Hall groupoid"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-finite-acyclic-quiver-stability-data
  - lem-quiver-semistable-loci-are-open
  - lem-quiver-hardernarasimhan-filtrations-exist-are-unique-and-descend
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tom Bridgeland, Hall algebras and Donaldson–Thomas invariants, §§2.1 and 4.4"
      url: "https://arxiv.org/pdf/1611.03696"
    - title: "Tom Bridgeland, An Introduction to Motivic Hall Algebras, §§3.1–3.2"
      url: "https://arxiv.org/pdf/1002.4372v1"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice inherited from the semistable-openness prerequisite.
Let $Q$ be finite and acyclic over $k=\mathbb F_q$, and let
$\mathbf d\in\mathbb N^{Q_0}$. In this statement, include the zero
representation as $Z$-semistable, without assigning it a phase.
The rational-point groupoid of
$\mathfrak M^{ss}_{\mathbf d}(Q,Z)$ is finite and is equivalent to the
groupoid whose objects are $Z$-semistable $\mathbb F_q$-representations of
dimension $\mathbf d$ and whose arrows are their representation isomorphisms.
Its groupoid cardinality is therefore
$$\sum_{[M]:\,\mathbf d(M)=\mathbf d,\ M\;Z\text{-semistable}} \frac{1}{|\operatorname{Aut}_{\mathcal A_Q}(M)|}.$$

## Facts & Assumptions

**Given:** A finite acyclic quiver, a finite field $k$, a dimension vector $\mathbf d$, and vertex charges in $\mathbb H$.

[F1] The quotient stack $[X/G]$ has objects given by $G$-torsors with equivariant maps to $X$; its semistable representation locus is open ([[def-finite-acyclic-quiver-stability-data]], [[lem-quiver-semistable-loci-are-open]]).

[F2] Geometric HN filtrations of representations over $\mathbb F_q$ are Frobenius invariant and descend to $\mathbb F_q$; hence geometric and finite-field semistability agree ([[lem-quiver-hardernarasimhan-filtrations-exist-are-unique-and-descend]]).

[A1] AC is inherited only for the algebraic-open-substack premise from [[lem-quiver-semistable-loci-are-open]] ([[def-axiom-of-choice]]).

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Under the inherited assumption [A1], the semistable locus is the open subscheme from [F1]. An object of its quotient groupoid over $\mathbb F_q$ is a tuple of $\operatorname{GL}_{d_i}$-torsors together with an equivariant semistable representation. A $\operatorname{GL}_{n}$-torsor is the frame torsor of its associated $n$-dimensional vector space. Every finite-dimensional vector space over $\mathbb F_q$ has a basis, so that associated space is isomorphic to $\mathbb F_q^n$ and its frame torsor is trivial. Applying this at the finitely many vertices trivializes the product $G_{\mathbf d}$-torsor. Thus every quotient-stack object is isomorphic to a representation on the standard spaces $k^{d_i}$. [A1, F1, construct, choose]

2.1 Under a chosen trivialization, an equivariant map to $\operatorname{Rep}^{ss}_{\mathbf d}$ is an arrow-matrix tuple. Two trivialized objects are isomorphic exactly when their tuples differ by change of bases in $G_{\mathbf d}(\mathbb F_q)$. If $\mathbf d\ne0$, [F2] identifies the rational tuples in the geometric semistable locus with the finite-field semistable representations. If $\mathbf d=0$, the geometric condition is vacuous, the representation space is a point, and $G_{\mathbf 0}$ is trivial. Its quotient groupoid therefore has one object with trivial automorphism group, matching the zero representation included by the statement's convention. This proves the claimed equivalence in every dimension. [given, F1, F2, step 1.1, algebra]

3.1 There are finitely many arrow-matrix tuples on the fixed finite vector spaces, and each automorphism group is a subgroup of the finite group $G_{\mathbf d}(\mathbb F_q)$. Hence the groupoid is finite. Under the equivalence of step 2.1, the stabilizer of a tuple is exactly $\operatorname{Aut}_{\mathcal A_Q}(M)$. Substituting these stabilizers into the groupoid-cardinality definition in [[def-finite-acyclic-quiver-stability-data]] gives the displayed sum. [F1, step 2.1, algebra] ∎
