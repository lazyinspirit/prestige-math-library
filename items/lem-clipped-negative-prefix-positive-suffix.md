---
id: lem-clipped-negative-prefix-positive-suffix
kind: lemma
title: Clipping a negative prefix followed by a positive suffix
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-max-min
  - def-ordered-field
  - lem-of-sign-rules
  - def-natural-numbers
  - thm-induction-principle
  - lem-of-inverse-positive
  - def-finite-sum
  - lem-finite-sum-laws
  - def-interval
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Sashank J. Reddi, Satyen Kale, and Sanjiv Kumar, On the Convergence of Adam and Beyond"
      url: "https://arxiv.org/pdf/1904.09237"
      locator: "Appendix B, one-dimensional projection argument for the general Adam counterexample."
---

## Statement

Let $n\in\mathbb N$ with $n\ge1$, let $x_0\in[-1,1]$, and let $k\in\{0,\ldots,n\}$. Let real increments $\delta_1,\ldots,\delta_n$ satisfy $\delta_j\le0$ for $j\le k$ and $\delta_j\ge0$ for $j>k$. Define $c(y)=\max\{-1,\min\{1,y\}\}$ and $x_j=c(x_{j-1}+\delta_j)$. Then

$$x_n\ge\min\left\{1,x_0+\sum_{j=1}^n\delta_j\right\}.$$

## Statement references

[[def-max-min]]: maximum and minimum of finite real sets define the clipping map $c$.

[[def-interval]]: $[-1,1]$ is the closed interval with endpoints $-1$ and $1$.

[Reddi, Kale, and Kumar, Appendix B](https://arxiv.org/pdf/1904.09237)

## Facts & Assumptions

**Given:** $n,x_0,k,\delta_1,\ldots,\delta_n$ as in the Statement.

[F1] [[def-max-min]]: $\min\{a,b\}$ is the lesser element and $\max\{a,b\}$ is the greater element of a two-element real set.

[F2] [[def-ordered-field]] and [[lem-of-sign-rules]]: the real order is total, and adding the same real to both sides preserves order.

[F3] [[def-natural-numbers]] and [[thm-induction-principle]]: the finite sequence indices are natural numbers, and induction proves assertions across all of them.

[F4] [[def-finite-sum]] and [[lem-finite-sum-laws]]: the displayed partial sums are finite sums and obey the termwise addition laws.

## Proof

**Given:** The data and sign conditions in the Statement.

1.1 Put $s_j=x_0+\sum_{i=1}^j\delta_i$ and $s_0=x_0$. For $0\le j\le k$, induction gives $x_j\ge s_j$ and $x_j\le1$: the base is $x_0=s_0\in[-1,1]$; at a next nonpositive increment, $x_{j-1}+\delta_j\le1$, so clipping replaces it only by its maximum with $-1$, which is no smaller than $x_{j-1}+\delta_j\ge s_j$. [given, F1, F2, F3, F4, induction]

2.1 For $k\le j\le n$, induction gives $x_j\ge\min\{1,s_j\}$. The base follows from step 1.1 and $x_k\le1$. If $s_{j-1}\le1$, then $x_{j-1}\ge s_{j-1}$ and $\delta_j\ge0$, so $y:=x_{j-1}+\delta_j\ge s_j$. If $s_j<-1$, then $c(y)\ge-1>s_j$. If $-1\le s_j\le1$, both $1$ and $y$ are at least $s_j$, so $\min\{1,y\}\ge s_j$ and then $c(y)=\max\{-1,\min\{1,y\}\}\ge s_j$. If $s_j>1$, then $y>1$ and $c(y)=1$. In all cases $c(y)\ge\min\{1,s_j\}$. If instead $s_{j-1}>1$, the induction bound and $x_{j-1}\le1$ imply $x_{j-1}=1$; a nonnegative increment keeps the clipped value at $1$. Taking $j=n$ proves the Statement. [given, F1, F2, F3, F4, step 1.1, induction, cases] ∎
