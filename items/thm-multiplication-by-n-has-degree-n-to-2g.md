---
id: thm-multiplication-by-n-has-degree-n-to-2g
kind: theorem
title: "Multiplication by n on a dimension-g abelian variety has degree n^(2g)"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-abelian-scheme
  - def-abelian-variety-over-a-field
  - def-axiom-of-choice
  - def-dependent-choice
  - def-finite-flat-group-scheme-and-cartier-dual
  - def-n-torsion-of-an-abelian-variety-as-a-finite-flat-group-scheme
  - lem-multiplication-by-n-on-abelian-scheme
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, Chapter I, Theorem 8.2 and Chapter XX, Proposition 20.7"
      url: "https://www.jmilne.org/math/xnotes/AVs.pdf"
      locator: "Theorem 8.2 and its complete proof; Proposition 20.7 and its proof."
    - title: "The Stacks Project, Groupoid Schemes, Section 39.9, Lemma 39.9.8"
      url: "https://stacks.math.columbia.edu/tag/0BFG"
      locator: "Lemma 39.9.8 and its full proof."
---

## Statement

Assume the Axiom of Choice and Dependent Choice. Let $K$ be a field, let $A/K$ be an abelian variety of dimension $g$, and let $n\ge2$ be an integer. Then multiplication $[n]:A\to A$ is finite, faithfully flat, and of degree $n^{2g}$, where degree means the rank of the finite locally free morphism. Its scheme-theoretic kernel $A[n]$ is a finite flat commutative group scheme of rank $n^{2g}$. If $n$ is invertible in $K$, then $[n]$ is étale and $A[n]$ is finite étale of rank $n^{2g}$.

## Statement references

[Milne, Abelian Varieties, Theorem 8.2 and Proposition 20.7](https://www.jmilne.org/math/xnotes/AVs.pdf)

[The Stacks Project, Groupoid Schemes, Lemma 39.9.8 and Proposition 39.9.11](https://stacks.math.columbia.edu/tag/0BFG)

## Facts & Assumptions


**Given:** The Axiom of Choice, Dependent Choice, a field $K$, an abelian variety $A/K$ of dimension $g$, and an integer $n\ge2$.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[A2] Dependent Choice states that every serial relation on a nonempty set admits an infinite chain ([[def-dependent-choice]]).

[F1] [[def-abelian-scheme]]: an abelian scheme is a smooth proper group scheme with connected geometric fibres of constant dimension; over $\operatorname{Spec}K$, an abelian variety of dimension $g$ is an abelian scheme of relative dimension $g$.

[F2] [[lem-multiplication-by-n-on-abelian-scheme]]: assuming AC and DC, for a locally Noetherian base and an abelian scheme of relative dimension $g$, multiplication by $n\ge1$ is finite, flat, and surjective of degree $n^{2g}$; its kernel is a finite flat group scheme of rank $n^{2g}$; if $n$ is invertible on the base, the map and kernel are finite étale.

[F3] [[def-n-torsion-of-an-abelian-variety-as-a-finite-flat-group-scheme]]: $A[n]$ denotes the scheme-theoretic kernel $A\times_{A,[n],e}\operatorname{Spec}K$.

[F4] [[def-finite-flat-group-scheme-and-cartier-dual]]: its Definition section takes a commutative $S$-group scheme with finite locally free structure morphism as the finite-flat group-scheme type; this is the only part of its interface used here, not Cartier-dual representability or biduality.

## Proof


1.1 The scheme $\operatorname{Spec}K$ is locally Noetherian. By [F1], the structure morphism $A\to\operatorname{Spec}K$ is an abelian scheme of relative dimension $g$. [given, F1, algebra]

2.1 Apply [F2] to this abelian scheme and the integer $n$. The map $[n]$ is finite, flat, and surjective, with degree $n^{2g}$; flatness and surjectivity give faithful flatness. Its kernel is finite flat of rank $n^{2g}$, and by [F3] this kernel is exactly $A[n]$. If $n\in K^\times$, the final clause of [F2] gives étaleness of the map and kernel; [F4] supplies the finite-flat group-scheme terminology. [A1, A2, F2, F3, F4, step 1.1] ∎
