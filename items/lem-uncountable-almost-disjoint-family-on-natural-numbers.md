---
id: lem-uncountable-almost-disjoint-family-on-natural-numbers
kind: lemma
title: An uncountable almost-disjoint family of subsets of the naturals
status: published
origin: pipeline
deps: [cor-irrationals-uncountable, lem-q-and-irrationals-dense-r, thm-rationals-countable, thm-well-ordering-principle, def-countable]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Piotr Hajlasz, Functional Analysis, Lemma 10.20
      url: https://sites.pitt.edu/~hajlasz/Notatki/Functional%20Analysis2.pdf
---

## Statement

There is an uncountable family $\mathcal A$ of infinite subsets of $\mathbb N$
such that $A\cap B$ is finite whenever $A,B\in\mathcal A$ are distinct.

## Facts & Assumptions

**Given:** A fixed enumeration $(q_n)_{n\in\mathbb N}$ of $\mathbb Q$ and the set $I$ of irrational real numbers.

[F1] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

[F2] Every nonempty interval in $\mathbb R$ contains a rational, and $I$ is uncountable ([[lem-q-and-irrationals-dense-r]], [[cor-irrationals-uncountable]]).

## Proof

**Proof technique:** direct.

1.1 For $x\in I$, recursively let $n_k(x)$ be the least unused index $n$ with $q_n\in(x-1/k,x+1/k)$, and put $A_x=\{n_k(x):k\ge1\}$. Such an index exists by [F2] because every interval contains infinitely many rationals; [F1] makes the choice deterministic. [F1, F2, given, construct]

2.1 Each $A_x$ is infinite since its indices are chosen unused. If $x\ne y$, then for sufficiently large $k,\ell$ the intervals $(x-1/k,x+1/k)$ and $(y-1/\ell,y+1/\ell)$ are disjoint; any common selected index must therefore arise among finitely many early choices. Thus $A_x\cap A_y$ is finite. [step 1.1, given]

3.1 The map $x\mapsto A_x$ is injective by the finite-intersection conclusion, so $\{A_x:x\in I\}$ is uncountable by [F2] and has the required property. [step 2.1, F2] ∎
