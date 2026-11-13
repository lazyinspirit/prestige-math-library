---
title: Compressed inversion count is additive for Coxeter-reduced composites
status: published
research_item: lem-author-b19d43a8e520-bh-compressed-additivity
dependency_level: 14
sources:
  references:
    - title: Matthew Dyer and Harrison Gimenez, Root Systems, Tits Cones and Imaginary
        Cones of Brink-Howlett Groupoids
      url: https://arxiv.org/abs/2606.12937v1
      locator: §1.4, equations (1.4.3)–(1.4.4), PDF p. 4
      statement: For roots N(x)=Φ⁺∩xΦ⁻, the inversion cocycle and |N(x)|=ℓ(x) imply
        N(xy)=N(x) disjoint-union xN(y) when ℓ(xy)=ℓ(x)+ℓ(y).
      hypotheses: An arbitrary-rank Coxeter system with its standard based root
        system; a Brink–Howlett component or union of components. Finite rank is
        explicitly not assumed (§1.4).
      reading_limits: Read extracted full statements and relevant definitions in
        §§1.4, 1.8–1.9, 1.19–1.27, 3.1–3.4 and Propositions 3.11–3.14; visually
        inspected PDF pp. 9 and 43. These are independent external inputs, not
        locally reconstructed proofs. Did not read the entire paper or original
        Brink–Howlett (1999).
---

## Prerequisites

- [lem-author-b19d43a8e520-bh-parallel-root-classes](item-lem-author-b19d43a8e520-bh-parallel-root-classes)
- [` Matthew Dyer and Harrison Gimenez, Root Systems, Tits Cones and Imaginary Cones of Brink-Howlett Groupoids · §1.4, equations (1.4.3)–(1.4.4), PDF p. 4 `](https://arxiv.org/abs/2606.12937v1)


## Statement

If $x,y$ are composable ordinary root-action arrows and $\ell(xy)=\ell(x)+\ell(y)$, then $C(xy)=C(x)\sqcup xC(y)$ and $|C(xy)|=|C(x)|+|C(y)|$.

## Facts & Assumptions

[F1] The definitions and results used in this argument are supplied, under their stated hypotheses, by [lem-author-b19d43a8e520-bh-parallel-root-classes](item-lem-author-b19d43a8e520-bh-parallel-root-classes).

## Proof


**Given:** The stated Coxeter and groupoid data, the declared prerequisite items, and the explicitly cited independent external inputs.

**Goal:** Establish the assertion in the Statement.

1.1 The Coxeter inversion identity gives $N(xy)=N(x)\sqcup xN(y)$ when lengths add; the transported roots $xN(y)$ are positive in this case. [given]

2.1 By the preceding parallel-class lemma, both summands are unions of parallel classes at the codomain of $x$. Indeed $N(y)$ is such a union at its own codomain, and the bijection on all roots induced by $x$ takes an entire class to an entire class. Disjoint unions of saturated subsets induce disjoint unions of their quotient classes. This gives the asserted identity and, because the sets are finite, the cardinality equality. The inversion identity and the condition that no cancellation occurs are the usual Coxeter inversion cocycle, recorded independently in (1.4.3)–(1.4.4); they do not assume finite rank. [given, step 1.1] ∎
