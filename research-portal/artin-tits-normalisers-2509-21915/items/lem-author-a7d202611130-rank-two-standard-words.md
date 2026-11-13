---
id: lem-author-a7d202611130-rank-two-standard-words
kind: lemma
title: Exactly two standard words in the finite corank-two residue
status: draft
domain: mathematics
origin: pipeline
deps: &a1
  - lem-author-a7d202611130-finite-relative-longest
  - lem-author-a7d202611130-elementary-root-prefix
  - lem-author-a7d202611130-standard-minimum-word
  - cor-brink-howlett-generators-length-artin-tits-normalisers
  - def-standard-expressions-artin-tits-normalisers
  - lem-author-b19d43a8e520-bh-standard-factor-count
dependency_roles:
  lem-author-a7d202611130-finite-relative-longest: mathematical-premise
  lem-author-a7d202611130-elementary-root-prefix: mathematical-premise
  lem-author-a7d202611130-standard-minimum-word: mathematical-premise
  cor-brink-howlett-generators-length-artin-tits-normalisers: mathematical-premise
  def-standard-expressions-artin-tits-normalisers: mathematical-premise
  lem-author-b19d43a8e520-bh-standard-factor-count: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Matthew Dyer and Harrison Gimenez, Root Systems, Tits Cones and Imaginary
        Cones of Brink-Howlett Groupoids
      url: https://arxiv.org/abs/2606.12937v1
      locator: §1.27, PDF pp. 10–11, rank-two relations paragraph
      statement: For a morphism with label ν(T minus I,I), where |T minus I|=2 and ν
        is defined, there are exactly two expressions as a minimum-length
        product of Brink–Howlett generators.
      hypotheses: Arbitrary-rank Coxeter system with standard based root system; a
        Brink–Howlett component. For ν(M,I), M is disjoint from I and the
        relative root difference is finite. No spherical ambient-system
        hypothesis.
      reading_limits: For this adjudication, read the frozen extracted §1.4 and
        §§1.24–1.27, including Lemma 1.25 and Remark 1.26, on printed/PDF pp. 4
        and 10–11. Only the exactly-two minimum-generator-word assertion of
        §1.27 is imported here; its following initial-factor notation is not
        used. No reconstruction of the cited rank-two presentation proof,
        complete reading of this paper, or reading of Brink–Howlett (1999) is
        claimed.
formulation_deps:
  - lem-author-a7d202611130-finite-relative-longest
  - lem-author-a7d202611130-elementary-root-prefix
  - def-standard-expressions-artin-tits-normalisers
argument_deps: *a1
dependency_level: 17
---

## Statement

The article morphism $q=\nu(\{a,b\},I)^{-1}$ of [[lem-author-a7d202611130-finite-relative-longest]] has exactly two standard expressions: one starts with $v_{a,I}$ and one starts with $v_{b,I}$. They have equal factor count.

## Facts & Assumptions

[F1] The definitions and results used in this argument are supplied, under their stated hypotheses, by [[lem-author-a7d202611130-finite-relative-longest]]; [[lem-author-a7d202611130-elementary-root-prefix]]; [[lem-author-a7d202611130-standard-minimum-word]]; [[cor-brink-howlett-generators-length-artin-tits-normalisers]]; [[def-standard-expressions-artin-tits-normalisers]]; [[lem-author-b19d43a8e520-bh-standard-factor-count]].

## Proof


**Given:** The stated Coxeter and groupoid data and the explicit independent inputs cited below.

**Goal:** Establish the assertion in the Statement.

1.1 The independent exactly-two assertion of Dyer–Gimenez §1.27 applies to $r=\nu(T\setminus I,I)$, since $|T\setminus I|=2$ and the finite-relative-root hypothesis is exactly that of Lemma 1.25. It gives precisely two minimum generator words for $r$. By [[lem-author-a7d202611130-standard-minimum-word]], inversion and reversal give precisely two minimum generator words for $q$, and every standard expression of $q$ belongs to this set. This uses only the word-count assertion of §1.27, not its incorrectly indexed rightmost-factor clause. [given]

2.1 By [[lem-author-a7d202611130-elementary-root-prefix]], $q=v_{c,I}z_c$ with lengths additive, for each $c=a,b$. Write $v_{c,I}:I\to I_c$ and $q:I\to K$. The root-action condition in [[def-standard-expressions-artin-tits-normalisers]] gives $q\Pi_K=\Pi_I$ and $v_{c,I}\Pi_{I_c}=\Pi_I$. Hence $z_c\Pi_K=v_{c,I}^{-1}q\Pi_K=v_{c,I}^{-1}\Pi_I=\Pi_{I_c}$, so $z_c:I_c\to K$ is an article morphism, composable after $v_{c,I}$. By [[lem-author-b19d43a8e520-bh-standard-factor-count]], $z_c$ has a standard expression. Prepending $v_{c,I}$ gives a composable expression for $q$ whose Coxeter lengths add, so it is standard by [[def-standard-expressions-artin-tits-normalisers]]. The two words are distinct because $v_{a,I}\ne v_{b,I}$ by the elementary-prefix lemma. There can be no others by step 1.1. Their factor counts agree by [[cor-brink-howlett-generators-length-artin-tits-normalisers]]. [F1, step 1.1] ∎

## Source notes

Only the exactly-two minimum-word assertion is imported from §1.27. Its following rightmost-factor notation ν(α,K), ν(β,K) is not used: α,β∈K makes these symbols undefined under Remark 1.26. Both desired initial factors are established locally from inversion inclusions and length-additive suffix factorizations. The original 1999 proof is unread; the count remains an explicitly cited independent literature input.
