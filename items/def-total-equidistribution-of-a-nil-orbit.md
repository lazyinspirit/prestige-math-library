---
dependency_level: 3
id: def-total-equidistribution-of-a-nil-orbit
kind: definition
title: Total Lipschitz equidistribution of a nil-orbit
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-polynomial-sequence-on-a-filtered-group
  - def-malcev-basis-and-rationality
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Definitions 1.2 and 2.2, printed pp. 467 and 478–479
    - title: Bob Hough, Math 639 Lecture 16, Equidistribution on nilmanifolds
      url: https://www.math.stonybrook.edu/~rdhough/mat639-spring17/lectures/lecture16.pdf
      locator: Lipschitz and quantitative equidistribution definitions, pp. 10–12
---

## Definition

Let $G/\Gamma$ be a compact nilmanifold with Mal’cev metric $d_X$ and
normalized Haar probability measure $\mu$. For $F:G/\Gamma\to\mathbb C$, set

$$\|F\|_{\mathrm{Lip}}=\|F\|_\infty+\sup_{x\ne y}\frac{|F(x)-F(y)|}{d_X(x,y)}.$$

For $N\geq1$, put $[N]=\{1,\ldots,N\}$. A sequence
$(g(n)\Gamma)_{n\in[N]}$ is **$\delta$-equidistributed** if

$$\left|\frac1N\sum_{n=1}^NF(g(n)\Gamma)-\int_{G/\Gamma}F\,d\mu\right| \leq\delta\|F\|_{\mathrm{Lip}}$$

for every Lipschitz $F$. It is **totally $\delta$-equidistributed** if the
same inequality with the average over $P$ holds for every arithmetic
progression $P\subseteq[N]$ of length at least $\delta N$, where an arithmetic
progression is a nonempty set $P=\{a+qj:0\leq j<\ell\}$ with integers
$q\geq1$ and $a$ chosen so that $P\subseteq[N]$.

## Definition references

[Green and Tao, Definitions 1.2 and 2.2](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

[Hough, Math 639 Lecture 16](https://www.math.stonybrook.edu/~rdhough/mat639-spring17/lectures/lecture16.pdf)
