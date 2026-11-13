---
title: Standard expressions are minimum generator words
status: published
research_item: lem-author-a7d202611130-standard-minimum-word
dependency_level: 16
sources:
  references:
    - title: Matthew Dyer and Harrison Gimenez, Root Systems, Tits Cones and Imaginary
        Cones of Brink-Howlett Groupoids
      url: https://arxiv.org/abs/2606.12937v1
      locator: §1.19, PDF p. 8; §§1.20–1.22, PDF pp. 8–9; Lemma 1.25(d) and §1.27, PDF
        p. 10
      statement: For a Brink–Howlett groupoid G, Theorem 1.22(b) makes its real
        compressed root-action signed groupoid-set principal, with the
        Brink–Howlett generators as simple morphisms. In §1.19, principal means
        that the minimum length in simple generators and their inverses equals
        the cardinality of the inversion set. Lemma 1.25(d) gives ν(K minus J,J)
        inverse = ν(K minus J prime,J prime), where J prime = ν(K minus J,J)J;
        §1.27 specializes this to the inverse relation for Brink–Howlett
        generators.
      hypotheses: An arbitrary-rank Coxeter system with its standard based root
        system; G is a component or union of components of the full
        Brink–Howlett groupoid. For ν(K minus J,J), J is contained in K and only
        finitely many components of K meet K minus J, all of finite type. For an
        elementary generator K minus J is a singleton; the component containing
        the added root is spherical. No spherical ambient-system hypothesis is
        imposed.
      reading_limits: For this repair, read the cached extracted Dyer–Gimenez text at
        §1.4, §§1.8–1.9, §§1.13–1.17, §§1.19–1.27, including the full statements
        of Theorem 1.22 and Lemma 1.25. Checked the principal-length definition,
        the real-compression construction, and the singleton inverse relation
        against their application here. No visual PDF inspection, reading of the
        complete paper, reconstruction of these imported theorems, or reading of
        Brink–Howlett (1999) is claimed.
---

## Prerequisites

- [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers)
- [lem-author-b19d43a8e520-bh-opposite-identification](item-lem-author-b19d43a8e520-bh-opposite-identification)
- [lem-author-b19d43a8e520-bh-standard-factor-count](item-lem-author-b19d43a8e520-bh-standard-factor-count)
- [lem-author-b19d43a8e520-bh-parallel-root-classes](item-lem-author-b19d43a8e520-bh-parallel-root-classes)
- [` Matthew Dyer and Harrison Gimenez, Root Systems, Tits Cones and Imaginary Cones of Brink-Howlett Groupoids · §1.19, PDF p. 8; §§1.20–1.22, PDF pp. 8–9; Lemma 1.25(d) and §1.27, PDF p. 10 `](https://arxiv.org/abs/2606.12937v1)


## Statement

Every standard expression of an article morphism $x$ is a minimum-length composable word in elementary Brink–Howlett generators, allowing inverse generators as well. The minimum number of factors is $|C(x)|$, the number of real parallel root classes in $N(x)$. Inversion and reversal give a bijection between minimum words for $x$ and $x^{-1}$ in the ordinary root-action groupoid.

## Facts & Assumptions

[F1] The definitions and results used in this argument are supplied, under their stated hypotheses, by [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers); [lem-author-b19d43a8e520-bh-opposite-identification](item-lem-author-b19d43a8e520-bh-opposite-identification); [lem-author-b19d43a8e520-bh-standard-factor-count](item-lem-author-b19d43a8e520-bh-standard-factor-count); [lem-author-b19d43a8e520-bh-parallel-root-classes](item-lem-author-b19d43a8e520-bh-parallel-root-classes).

## Proof

**Given:** The Coxeter system and standard expressions of the declared definition, the root-action correspondence, the factor-count and parallel-class lemmas, and the independent principal-length and inverse-generator results cited below.

**Goal:** Establish the assertion in the Statement.

1.1 For an article arrow $x:I\to K$, [lem-author-b19d43a8e520-bh-opposite-identification](item-lem-author-b19d43a8e520-bh-opposite-identification) identifies the root-action arrow with $(I,x,K):K\to I$ and identifies every article elementary label with a Brink–Howlett generator, in both directions. Reverse the path order of the factors of a standard expression to obtain a composable root-action word with the same label product and factor count. The same reversal applies to arbitrary generator words and their inverse arrows, and is involutive. Hence minimum word lengths in these two conventions agree. This uses the standard-expression convention of [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers). [F1]

2.1 By [lem-author-b19d43a8e520-bh-standard-factor-count](item-lem-author-b19d43a8e520-bh-standard-factor-count), a standard expression has $|C(x)|$ factors, where $C(x)$ is taken for the reversed root-action arrow with the same label. Dyer–Gimenez Theorem 1.22(b) makes the real compressed root-action signed groupoid-set principal with Brink–Howlett generators as simple morphisms; §1.19 defines principal by minimum generator length, allowing inverse generators, equal to inversion cardinality. By [lem-author-b19d43a8e520-bh-parallel-root-classes](item-lem-author-b19d43a8e520-bh-parallel-root-classes), that cardinality is $|C(x)|$. The correspondence in step 1.1 therefore makes every standard expression a minimum word, with the stated minimum number of factors. [given, F1, step 1.1]

3.1 Dyer–Gimenez Lemma 1.25(d), specialized to singleton additions as in §1.27, makes inverse elementary generators elementary in the root-action groupoid. Reverse a root-action expression and invert every factor. This operation is an involution, preserves factor count and composability, and takes words for $x$ to words for $x^{-1}$. A shorter word on either side would give a shorter word on the other. Thus it restricts to the claimed bijection of minimum words. [given, step 2.1] ∎
