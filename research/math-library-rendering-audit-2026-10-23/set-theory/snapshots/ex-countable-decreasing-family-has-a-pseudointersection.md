---
id: ex-countable-decreasing-family-has-a-pseudointersection
kind: example
title: A diagonal pseudointersection of a countable descending family
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-almost-inclusion-pseudointersection-and-tower, lem-basic-pseudointersection-and-tower-bounds, thm-well-ordering-principle, thm-recursion, def-natural-numbers, def-finite-cardinality, thm-sum-rule, def-countable]
justified_by: []
aliases: []
proof_strategy: construct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "J. D. Monk, Continuum cardinals, the diagonal argument preceding Proposition 34, printed p.19"
      url: "https://euclid.colorado.edu/~monkd/cont_card.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $\langle A_n:n\in\mathbb N\rangle$ be a sequence of infinite subsets of
$\omega$ that is descending modulo finite sets: $A_{n+1}\subseteq^{*}A_n$ for
every $n$ ([[def-almost-inclusion-pseudointersection-and-tower]]). Then the
following diagonal construction is legitimate: choosing

$$x_n:=\min\Bigl(\bigcap_{i\le n}A_i\setminus\{x_0,\dots,x_{n-1}\}\Bigr)\qquad (n\in\mathbb N)$$

recursively produces a strictly increasing sequence of natural numbers, and
$X:=\{x_n:n\in\mathbb N\}$ is an infinite subset of $\omega$ with
$X\subseteq^{*}A_k$ for every $k$, that is, $X$ is a pseudointersection of the
family $\{A_k:k\in\mathbb N\}$.

## Facts & Assumptions

**Given:** A sequence $\langle A_n:n\in\mathbb N\rangle$ of infinite subsets of $\omega$ with $A_{n+1}\subseteq^{*}A_n$ for every $n$.

[F1] $X\subseteq^{*}A$ means that $X\setminus A$ is finite; $\subseteq^{*}$ is reflexive and transitive on subsets of $\omega$; a pseudointersection of a family is an infinite $X\subseteq\omega$ with $X\subseteq^{*}A$ for every member $A$; $[\omega]^{\omega}$ is the family of infinite subsets of $\omega$. ([[def-almost-inclusion-pseudointersection-and-tower]])

[F2] Every countable descending family of infinite subsets of $\omega$ has a pseudointersection, by the same diagonal construction; this is one of the two countable clauses of the basic bounds for $p$ and $t$. ([[lem-basic-pseudointersection-and-tower-bounds]])

[F3] Every nonempty subset of $\mathbb N$ has a least element, and recursion on $\mathbb N$ defines the unique sequence with prescribed value at $0$ and prescribed successor step. ([[thm-well-ordering-principle]], [[thm-recursion]], [[def-natural-numbers]])

[F4] A finite union of finite sets is finite, and a set is infinite exactly when it is not finite; $\omega=\mathbb N$. ([[def-finite-cardinality]], [[thm-sum-rule]], [[def-countable]])

## Proof

**Proof technique:** construction.

1.1 For all $n$ and all $i\le n$ the difference $A_n\setminus A_i$ is finite: iterating the hypothesis and [F1] gives $A_n\subseteq^{*}A_i$ whenever $i\le n$. [given, F1]

2.1 For every $n$ the finite intersection $B_n:=\bigcap_{i\le n}A_i$ is infinite: $A_n\setminus B_n\subseteq\bigcup_{i\le n}(A_n\setminus A_i)$ is a finite union of finite sets by step 1.1, hence finite by [F4], and $A_n=B_n\cup(A_n\setminus B_n)$ is infinite, so $B_n$ cannot be finite. [step 1.1, F4]

3.1 The recursion of the display is legitimate: assume $x_0,\dots,x_{n-1}$ have been chosen; the set $B_n\setminus\{x_0,\dots,x_{n-1}\}$ is infinite minus a finite set, hence nonempty, so it has a least element $x_n$ by [F3], and $x_n\notin\{x_0,\dots,x_{n-1}\}$; recursion gives the whole sequence. [step 2.1, F3, F4]

4.1 The sequence is strictly increasing: $B_{n+1}\subseteq B_n$, and $x_n$ is the least member of $B_n$ outside $\{x_0,\ldots,x_{n-1}\}$. Since $x_{n+1}$ belongs to this latter set but differs from $x_n$, minimality gives $x_n<x_{n+1}$. By step 3.1 the $x_n$ are pairwise distinct, so $X$ is infinite; also $x_n\in B_n\subseteq A_i$ for every $i\le n$. Thus $X\in[\omega]^{\omega}$ by [F4]. [step 3.1, F1, F4]

5.1 For fixed $k$, every $x_n$ with $n\ge k$ lies in $B_n\subseteq A_k$ by step 4.1, so $X\setminus A_k\subseteq\{x_0,\dots,x_{k-1}\}$ is finite; hence $X\subseteq^{*}A_k$ for every $k$, and $X$ is a pseudointersection of $\{A_k:k\in\mathbb N\}$, the countable case recorded in [F2]. ∎ [step 4.1, F1, F2]
