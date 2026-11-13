---
id: thm-classical-matsumoto-artin-tits-normalisers
kind: theorem
title: Classical Matsumoto assertion recalled in the article
status: published
domain: mathematics
origin: pipeline
deps:
  - def-coxeter-data-artin-tits-normalisers
  - math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword
  - math:thm-hh-matsumoto-reduced-word-theorem
dependency_roles:
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
  math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword: mathematical-premise
  math:thm-hh-matsumoto-reduced-word-theorem: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: reduction
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF pp. 2 and 19; §1.2.1 and §4.2, final paragraph
      statement: For a Coxeter group, any two reduced expressions of an element are
        related by a sequence of braid relations.
      hypotheses: The article's Coxeter-group conventions; no spherical-type
        hypothesis is imposed on this assertion.
      reading_limits: The frozen article text was inspected at the recalled
        assertions. This reference attributes the claim and is not used as a
        proof premise.
dependency_level: 2
---

## Statement

Let $(W,S)$ be a Coxeter system as in [[def-coxeter-data-artin-tits-normalisers]], with $S$ possibly infinite. A reduced expression for $w\in W$ is a finite word in $S$ representing $w$ whose number of letters is the least possible, denoted $\ell(w)$. For distinct $s,t\in S$ with $m(s,t)<\infty$, a braid move replaces a consecutive alternating word of length $m(s,t)$ beginning with $s$ by the alternating word of the same length beginning with $t$, or conversely. Any two reduced expressions of $w$ are connected by a finite sequence of braid moves.

## Statement references

[[def-coxeter-data-artin-tits-normalisers]]

## Facts & Assumptions

[F1] For a finite subset $J\subseteq S$, the Coxeter group $W_J^*$ presented by the restricted matrix maps injectively to $W$ by sending each generator to its namesake, and its intrinsic length equals ambient length on its image. [[math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword]]

[F2] In a Coxeter system with finite generating set, any two reduced expressions of the same element are connected by finitely many braid moves. [[math:thm-hh-matsumoto-reduced-word-theorem]]

[F3] The Coxeter matrix, its presented group, and word length have the conventions stated in [[def-coxeter-data-artin-tits-normalisers]].

## Proof
**Given:** A Coxeter system $(W,S)$ and two reduced expressions for the same element $w\in W$, with the conventions in the Statement.


**Given:** The two reduced expressions in the Facts & Assumptions.

**Proof technique:** reduction to finite rank.

**Goal:** Connect the two expressions by finitely many braid moves in $S$.

1.1 Let $J$ be the union of the letters occurring in the two expressions. It is finite because each expression is a finite word. Both words represent elements of the restricted Coxeter group $W_J^*$ whose images in $W$ equal $w$. By injectivity in [F1], they represent the same element of $W_J^*$. Their common word length is $\ell(w)$; the length equality in [F1] therefore makes both expressions reduced in $W_J^*$. This also covers the empty-word case. [F1, F3, given, construct]

2.1 Apply [F2] to the finite generating set $J$ and these two reduced expressions. Every move uses a pair in $J$ and the restricted matrix entry, which is the same as the corresponding entry of $m$ on $S$. Thus the resulting finite sequence consists of braid moves in the original system and connects the given expressions. [F2, F3, step 1.1] ∎

## Source notes

The article recalls the classical assertion. The proof above uses the separately supplied finite-rank theorem and finite-parabolic embedding, not the article's assertion as a premise.
