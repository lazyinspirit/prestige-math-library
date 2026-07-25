---
id: rem-fatou-lemma
kind: remark
title: "Fatou's lemma"
status: draft
origin: session
proved_here: false
deps: [rem-lebesgue-measure-and-integral]
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "The integral of a liminf is at most the liminf of the integrals"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Fatou's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fatou%27s_lemma"
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{A}, \mu)$ be a measure space and let
$f_n : X \to [0, +\infty]$ be measurable. Then

$$\int_X \liminf_{n \to \infty} f_n \, d\mu \le \liminf_{n \to \infty} \int_X f_n \, d\mu.$$

The inequality can be strict. On $\mathbb{R}$ with Lebesgue measure,
$f_n = \mathbf{1}_{[n, n+1]}$ has $\liminf_n f_n = 0$ pointwise while
$\int f_n \, d\lambda = 1$ for every $n$, so the left side is $0$ and the right
side is $1$: mass escapes to infinity. With $f_n = n\,\mathbf{1}_{(0, 1/n)}$ the
same values arise with the mass escaping upward instead.

## Remarks

**Not proved in this library.** It is recorded with citations and used in no
proof here.

**What would prove it.** One line from the monotone convergence theorem
([[rem-monotone-convergence-theorem]]): apply it to the increasing sequence
$g_n := \inf_{k \ge n} f_k$, whose pointwise limit is $\liminf_n f_n$, and use
$g_n \le f_n$ to get $\int g_n \le \int f_n$. Fatou's lemma is thus not
independent machinery; it is the convenient one-sided form of monotone
convergence, and it is what the dominated convergence theorem is proved from.

**Which page it serves.** It is the tool that makes the limit theorems on the
sequences and series pages usable for integrals, and it is the standard route to
dominated convergence ([[rem-dominated-convergence-theorem]]). Its two escaping
mass examples are the sharpest available answer to the question "why is a
dominating function needed", which the Riemann integral page can pose but not
answer.
