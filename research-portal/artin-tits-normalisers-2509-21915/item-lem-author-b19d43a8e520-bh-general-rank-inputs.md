---
title: Independent arbitrary-rank factorization and simple-class inputs
status: published
research_item: lem-author-b19d43a8e520-bh-general-rank-inputs
dependency_level: 14
sources:
  references:
    - title: Matthew Dyer and Harrison Gimenez, Root Systems, Tits Cones and Imaginary
        Cones of Brink-Howlett Groupoids
      url: https://arxiv.org/abs/2606.12937v1
      locator: Proposition 3.13, PDF p. 43; Theorem 1.22(b), PDF p. 9; definition of
        simple in §1.19, PDF p. 8; §1.4, PDF p. 4
      statement: Every Brink–Howlett morphism has a Coxeter-length-additive
        factorization into Brink–Howlett generators (Proposition 3.13); the real
        compressed standard signed groupoid-set has these generators as its
        simple morphisms (Theorem 1.22(b)), with simple meaning inversion
        cardinal one (§1.19).
      hypotheses: An arbitrary-rank Coxeter system with its standard based root
        system; a Brink–Howlett component or union of components. Finite rank is
        explicitly not assumed (§1.4).
      reading_limits: Read extracted full statements and relevant definitions in
        §§1.4, 1.8–1.9, 1.19–1.27, 3.1–3.4 and Propositions 3.11–3.14; visually
        inspected PDF pp. 9 and 43. These are independent external inputs, not
        locally reconstructed proofs. Did not read the entire paper or original
        Brink–Howlett (1999).
external_input: true
---

## Prerequisites

- [lem-author-b19d43a8e520-bh-opposite-identification](item-lem-author-b19d43a8e520-bh-opposite-identification)
- [lem-author-b19d43a8e520-bh-parallel-root-classes](item-lem-author-b19d43a8e520-bh-parallel-root-classes)
- [` Matthew Dyer and Harrison Gimenez, Root Systems, Tits Cones and Imaginary Cones of Brink-Howlett Groupoids · Proposition 3.13, PDF p. 43; Theorem 1.22(b), PDF p. 9; definition of simple in §1.19, PDF p. 8; §1.4, PDF p. 4 `](https://arxiv.org/abs/2606.12937v1)


## Statement

Every arrow $(B,x,A)$ in $\mathcal B$ admits a factorization into Brink–Howlett generators $g_n\cdots g_1$ satisfying $\ell(x)=\sum_i\ell(g_i)$. Every Brink–Howlett generator $g$ satisfies $|C(g)|=1$. Both assertions hold for arbitrary rank.

## External input

Import the first assertion from Dyer–Gimenez, Proposition 3.13, with the notation and component condition of Lemma 1.25 and §1.27. Import the second assertion from Theorem 1.22(b): in the real compression of the standard root-action groupoid-set, the Brink–Howlett generators are exactly the simple morphisms. Section 1.19 defines simple by the inversion set having cardinal one. By the preceding lemma, this inversion set is precisely $C(g)$. Section 1.4 explicitly excludes a standing finite-rank assumption. These two statements are external inputs. Their proofs are not claimed to have been reconstructed locally.
