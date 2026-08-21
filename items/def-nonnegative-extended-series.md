---
id: def-nonnegative-extended-series
kind: definition
title: "Series in the nonnegative extended real line"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-extended-reals, lem-extended-reals-complete, thm-recursion]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory, Notation and §1.4.3"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Definition

Let $a=(a_k)_{k\in\mathbb N}$ take values in $[0,+\infty]\subseteq\overline{\mathbb R}$ ([[def-extended-reals]]). Its **partial sums** are the unique sequence $(s_n)$ in $[0,+\infty]$ satisfying

$$s_0=0,\qquad s_{n+1}=s_n+a_n.$$

To apply [[thm-recursion]] with a fixed successor function, use the state space $\mathbb N\times[0,+\infty]$ and the self-map $T(n,s)=(n+1,s+a_n)$, starting from $(0,0)$. Recursion gives a unique state sequence; induction makes its first coordinate $n$, and its second coordinates are exactly the unique $(s_n)$ satisfying the displayed recurrence. Addition of two nonnegative extended reals is always defined, including when either is $+\infty$. The sequence $(s_n)$ is nondecreasing, and its **nonnegative extended sum** is

$$\sum_{k=0}^{\infty}a_k:=\sup_{n\in\mathbb N}s_n\in[0,+\infty],$$

whose existence follows from completeness of the extended real line ([[lem-extended-reals-complete]]). More generally, for $m\in\mathbb N$,

$$\sum_{k\ge m}a_k:=\sum_{j=0}^{\infty}a_{m+j}.$$

Finite sums use the same recursion: $\sum_{k<n}a_k=s_n$, so the empty sum at $n=0$ is $0$. A double sum such as $\sum_i\sum_j a_{ij}$ means that the inner nonnegative extended sum is formed first and the resulting nonnegative extended sequence is then summed.
