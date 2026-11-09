---
title: Iterating a conditional free-summand criterion
status: published
research_item: lem-author-3af31ead36fb-iteration
dependency_level: 2
---

PDF p. 1: Serre splitting theorem

## Prerequisites

- [lem-author-3af31ead36fb-split-complement](item-lem-author-3af31ead36fb-split-complement)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume the Axiom of Choice. Let $A$ be a nonzero commutative ring and let $d$ be a nonnegative integer. Suppose every finite projective $A$-module of constant rank greater than $d$ has a free rank-one direct summand. Then every finite projective $A$-module $P$ of constant rank $r>d$ is isomorphic to $A^{r-d}\oplus Q$ for a finite projective module $Q$ of constant rank $d$. The criterion is an explicit hypothesis of this lemma.

## Facts & Assumptions

**Given:** $A$, $d$, $P$, $r$, Choice, and the conditional free-summand criterion in the statement.

**Goal:** Obtain the displayed decomposition and rank.

[A1] Choice is assumed to invoke the supplied split-complement result, including its associated-bundle clause; the finite iteration introduces no further choice use. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] The complement of a free rank-one summand of a finite projective constant-rank module is finite projective and has rank one less. [lem-author-3af31ead36fb-split-complement](item-lem-author-3af31ead36fb-split-complement)

## Proof

1.1 Apply the assumed criterion to $P$ to split off $A$. By [F1], its complement is finite projective of rank $r-1$. If this rank is still greater than $d$, the same criterion applies again. [F1, given]

2.1 Repeat the preceding finite operation exactly $r-d$ times. At the $j$th application, the current rank is $r-j+1>d$; [F1] supplies a finite projective complement of rank $r-j$. Associativity of finite direct sums gives $P\cong A^{r-d}\oplus Q$ with $Q$ of rank $d$. [F1, given, step 1.1, construct] ∎
