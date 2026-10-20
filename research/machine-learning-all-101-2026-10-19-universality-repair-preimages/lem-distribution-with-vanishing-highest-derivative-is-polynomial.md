---
id: lem-distribution-with-vanishing-highest-derivative-is-polynomial
kind: lemma
title: "A distribution with a vanishing derivative is a polynomial"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - def-distributional-derivative
  - def-formal-derivative-of-a-polynomial
  - thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant
  - thm-distributional-differentiation-is-continuous-and-commutes
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "L. Hörmander, The Analysis of Linear Partial Differential Operators I, Chapter 2"
      url: "https://link.springer.com/book/10.1007/978-3-642-61497-2"
    - title: "Semyon Dyatlov, Lecture Notes for 18.155, distributions and derivatives"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
---

## Statement

Assume Countable Choice. Let $n\in\mathbb N_0$ and let $T$ be a real distribution on the connected open set $\mathbb R$. If its $(n+1)$st distributional derivative is zero, then there is a real algebraic polynomial $p$ of degree at most $n$ whose regular distribution equals $T$.

## Statement references

[Dyatlov, Lecture Notes for 18.155, distributions with vanishing derivative](https://math.mit.edu/~dyatlov/18.155/155-notes.pdf)

[Hörmander, The Analysis of Linear Partial Differential Operators I, Chapter 2](https://link.springer.com/book/10.1007/978-3-642-61497-2)

## Facts & Assumptions

**Given:** Countable Choice, $n\in\mathbb N_0$, and a real distribution $T\in\mathcal D'(\mathbb R)$ with $D^{n+1}T=0$.

[F1] A distribution on a connected open set whose first derivative vanishes is a constant regular distribution, under Countable Choice ([[thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant]]).

[F2] The distributional derivative acts by signed differentiation of test functions ([[def-distributional-derivative]]).

[F3] A smooth regular distribution differentiates to the regular distribution of its classical derivative, under Countable Choice ([[thm-distributional-differentiation-is-continuous-and-commutes]]).

[F4] The formal derivative of $x^n/n!$ is $x^{n-1}/(n-1)!$ for $n\ge1$, and its $n$th derivative is $1$ ([[def-formal-derivative-of-a-polynomial]]).

[A1] Countable Choice means every sequence of nonempty sets has a function choosing one element from each ([[def-countable-choice]]); it is assumed by the supplied regular-distribution derivative theorem.

## Proof

1.1 Base case $n=0$: the hypothesis is $DT=0$, so [F1] gives a constant regular distribution, represented by a polynomial of degree at most zero. [given, F1, A1, base]

1.2 Inductive step: let $n\ge1$ and assume the result for $n-1$. The distribution $S=D^nT$ satisfies $DS=D^{n+1}T=0$. By [F1], $S$ is the constant distribution with some real value $c$. [given, F1, F2, A1, IH]

2.1 The smooth polynomial $q(x)=c x^n/n!$ has $D^nq=c$ as a regular distribution by [F3] and [F4]. Thus $U=T-q$ satisfies $D^nU=0$. The induction hypothesis applied with index $n-1$ gives a polynomial $r$ of degree at most $n-1$ whose regular distribution is $U$. [step 1.2, F3, F4, A1, IH]

3.1 The polynomial $p=q+r$ has degree at most $n$ and its regular distribution is $T$, since regular distributions and distributional derivatives are linear. This completes the induction. [step 2.1, algebra, discharge-induction] ∎

