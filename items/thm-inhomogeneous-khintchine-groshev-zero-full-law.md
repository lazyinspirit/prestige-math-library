---
id: thm-inhomogeneous-khintchine-groshev-zero-full-law
kind: theorem
title: "Inhomogeneous Khintchine–Groshev zero-full law"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-countable-choice
  - lem-fixed-target-inhomogeneous-scalar-denominator-divergence
  - def-inhomogeneous-khintchine-groshev-approximation-set
  - cor-first-borel-cantelli-lemma-for-events
  - cor-second-borel-cantelli-lemma-under-pairwise-independence
  - lem-khintchine-groshev-torus-event-measure-and-independence
  - lem-parallel-integer-vectors-share-a-primitive-direction
  - lem-primitive-vector-supnorm-shell-count
  - lem-monotone-totient-weighted-series-diverges
  - def-gcd-of-finite-integer-tuple
  - thm-lebesgue-measure-of-a-box-of-every-kind
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Demi Allen and Victor Beresnevich, A mass transference principle for systems of linear forms and Duffin–Schaeffer-type theorems, §2.2"
      url: "https://arxiv.org/pdf/1703.10015v2"
    - title: "Glyn Harman, Metric Number Theory, Chapter 4"
      url: "https://djvu.online/file/DZdHsCBaK3OrN"
---

## Statement

Assume the Axiom of Countable Choice. Let $n,m\ge1$, fix a target $y\in[0,1)^m$, and let $\psi:\mathbb N\to[0,\infty)$. Define

$$W_{n,m}(\psi;y):=\left\{X\in[0,1)^{n\times m}:\ \|qX+p-y\|_\infty<\psi(\|q\|_\infty)\text{ for infinitely many }(q,p)\in(\mathbb Z^n\setminus\{0\})\times\mathbb Z^m\right\}.$$

If $\sum_{h\ge1}h^{n-1}\psi(h)^m<\infty$, then $|W_{n,m}(\psi;y)|=0$. If the sum diverges, then $|W_{n,m}(\psi;y)|=1$ when $n\ge3$ with no monotonicity assumption, and also when $n=1$ or $n=2$ provided $\psi$ is non-increasing.

## Statement references

[Allen and Beresnevich, *A Mass Transference Principle for Systems of Linear Forms and Its Applications*, §2.2](https://arxiv.org/pdf/1703.10015v2)

[Harman, *Metric Number Theory*, Chapter 4](https://djvu.online/file/DZdHsCBaK3OrN)

## Facts & Assumptions

**Given:** Countable Choice, a fixed target $y$, dimensions $n,m\ge1$, and the stated convergence or divergence hypothesis.

[A1] Countable Choice supplies countably additive Lebesgue measure on the matrix cube. ([[def-countable-choice]])

[F1] A row event whose target is any translate of an axis-parallel torus box of radius $\delta\le1/2$ has measure $(2\delta)^m$; closed and open boxes have the same measure because their boundary faces are null. Events from linearly independent rows are independent. ([[lem-khintchine-groshev-torus-event-measure-and-independence]], [[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F2] There are exactly $8\varphi(h)$ primitive rows on a two-dimensional sup-norm shell and at least $h^{n-1}/2$ primitive rows for $n\ge3$. ([[lem-primitive-vector-supnorm-shell-count]])

[F3] If $a_h\ge0$ is non-increasing and $\sum h a_h$ diverges, then $\sum\varphi(h)a_h$ diverges. ([[lem-monotone-totient-weighted-series-diverges]])

[F4] Pairwise independent events with divergent sum of measures occur infinitely often almost surely. ([[cor-second-borel-cantelli-lemma-under-pairwise-independence]])

[F5] If the sum of event measures is finite, their limsup has measure zero. ([[cor-first-borel-cantelli-lemma-for-events]])

[F6] Parallel integer rows share a primitive integer direction with Bézout coordinates. ([[lem-parallel-integer-vectors-share-a-primitive-direction]])

[F7] A common divisor of a tuple divides its tuple gcd; a tuple with gcd $1$ has no common divisor other than $1$ and $-1$. ([[def-gcd-of-finite-integer-tuple]])

[F8] For a fixed target in any output dimension, a non-increasing scalar-denominator gauge with divergent power sum gives infinitely many approximations almost everywhere, with positive denominators. ([[lem-fixed-target-inhomogeneous-scalar-denominator-divergence]])

## Proof

1.1 For each row $q\ne0$, let $E_q$ be the event that some $p\in\mathbb Z^m$ satisfies $\|qX+p-y\|_\infty<\psi(\|q\|_\infty)$. In the convergence case, $\psi(h)\to0$, so for all sufficiently large $h$ the radii are below $1/2$. The number of integer rows on the shell $\|q\|_\infty=h$ is at most $2n(3h)^{n-1}$. By [F1], the sum of the measures of all $E_q$ is finite. [given, A1, F1, algebra, algebra]

1.2 Suppose the weighted sum diverges and $n\ge3$. Set $\eta(h):=\min\{\psi(h),1/4\}$; its weighted sum still diverges. On each shell choose the unique row from each sign pair whose first nonzero coordinate is positive. There are at least $h^{n-1}/4$ such primitive rows by [F2]. Distinct chosen rows are linearly independent: if two were parallel, [F6] would write them as integer multiples of a common primitive row; each multiple divides all coordinates of its row and hence divides its tuple gcd $1$ by [F7], so the multiples are $\pm1$, contrary to the sign choice. The events $E_q$ for these rows are pairwise independent by [F1], and their measure sum is at least $2^m\sum_h h^{n-1}\eta(h)^m/4=\infty$. Hence [F4] gives infinitely many inhomogeneous approximations for almost every $X$. [given, F1, F2, F4, F6, F7, algebra, algebra]

2.1 For fixed $q$, only finitely many offsets $p$ can satisfy the bounded inequality at any $X$ in the cube. Thus infinitely many approximating pairs are equivalent to infinitely many rows, and [F5] applied to the row-event sequence gives $|W_{n,m}(\psi;y)|=0$. [given, step 1.1, F5, algebra]

2.2 Suppose $n=2$ and $\psi$ is non-increasing. Then $\eta(h)^m$ is non-increasing and $\sum_hh\eta(h)^m=\infty$. On the shell of radius $h$, choose the unique row from each sign pair whose first nonzero coordinate is positive; there are $4\varphi(h)$ such rows by [F2]. Their events are pairwise independent by the primitive-direction argument in step 1.2. By [F3], $\sum_h\varphi(h)\eta(h)^m=\infty$, so the event measures have divergent sum, and [F4] gives full measure. [given, step 1.2, F1, F2, F3, F4, F6, F7, algebra]

3.1 If $n=1$, monotonicity and the divergent sum $\sum_h\psi(h)^m$ are exactly the hypotheses of [F8], so its positive-denominator pairs are a subset of the pairs in the Statement and give full measure. Together with steps 2.1, 1.2 and 2.2 this proves all convergence and divergence alternatives, for every fixed target and with precisely the stated monotonicity conditions. [given, F8, step 2.1, step 1.2, step 2.2, algebra] ∎
