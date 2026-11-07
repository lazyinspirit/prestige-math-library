---
dependency_level: 0
id: lem-helf-elementary-prime-power-error-bound
kind: lemma
title: "An elementary prime-power remainder bound above10^27"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-prime
  - def-von-mangoldt-function
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - thm-real-power-laws
  - def-real-elementary-functions-and-domains
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H. A. Helfgott, Goldbach analytic proof; bounded local reconstruction"
      url: "https://arxiv.org/pdf/1312.7748v2"
      locator: "\u00a77.4 equation7.50: elementary replacement for its Rosser\u2013Schoenfeld numerical inputs, sufficient at the same10^27 threshold"
---

## Statement

Let $N\ge10^{27}$ be an integer. Let $w_1,w_2,w_3:\mathbb N\to\mathbb C$ satisfy $|w_i(n)|\le2$. Let $\mathcal B_N$ consist of triples of positive integers with $n_1+n_2+n_3=N$ such that at least one entry is not an odd prime. Then
$$\sum_{(n_1,n_2,n_3)\in\mathcal B_N}\Lambda(n_1)\Lambda(n_2)\Lambda(n_3)|w_1(n_1)w_2(n_2)w_3(n_3)|<\frac8{100000}N^2.$$
This bound is elementary and requires no prime-counting estimate or external numerical input.

## Facts & Assumptions

**Given:** The integer and three uniformly bounded weights.

[F1] $\Lambda(n)=\log p$ on a positive power of a prime $p$, and zero otherwise; primality has its positive-divisor meaning. [[def-von-mangoldt-function]] [[def-prime]]

[F2] Logarithm and positive-power laws, and $(\log t)'=1/t$, hold. [[thm-natural-logarithm-laws]] [[thm-real-power-laws]] [[thm-logarithm-derivative-and-integral]]

[F3] The exponential is its convergent power series, and logarithm is its increasing inverse. [[def-real-elementary-functions-and-domains]]

## Proof

1.1 For $n\le N$, $0\le\Lambda(n)\le\log N$, so $\sum_{n\le N}\Lambda(n)\le N\log N$. A term with nonzero $\Lambda(n)$ that is not an odd prime is either $n=2$ or $n=p^j$, $j\ge2$. There are at most $\log N/\log2$ possible exponents, and for each exponent at least two there are at most $\sqrt N$ possible positive integer bases. Overcounting repetitions and composites is harmless. Consequently their total von Mangoldt weight is at most $V=\sqrt N(\log N)^2/\log2+\log2$. [given, F1, F2, algebra]

1.2 By [F3], $e^{1/2}<\sum_{j\ge0}2^{-j}=2$ (strict inequality in the factorial terms), and $e>1+1+1/2>2$, so $1/2<\log2<1$. Also $\sum_{j=0}^6(7/3)^j/j!>10$ by exact rational arithmetic, so $\log10<7/3$. Therefore $\log(10^{27})<63$ and $\log(10^{27})>27\log2>8$. Differentiating with [F2] shows that $(\log t)^4/\sqrt t$ decreases when $\log t>8$, and $(\log t)^2/t$ decreases when $\log t>2$. [F2, F3, algebra]

2.1 Fix the position of a bad entry and its value $n_1$. The remaining constrained sum of $\Lambda(n_2)\Lambda(n_3)$ is at most $(\log N)\sum_{n_2\le N}\Lambda(n_2)\le N(\log N)^2$. The three-position union bound and $|w_1w_2w_3|\le8$ bound the asserted sum by $24VN(\log N)^2$. Thus it is at most $[24/\log2]N^{3/2}(\log N)^4+24\log2\,N(\log N)^2$. Terms with zero von Mangoldt weight contribute nothing, including the integer $1$. [F1, step 1.1, algebra]

3.1 Divide step 2.1 by $N^2$ and maximize both decreasing expressions at $10^{27}$. Since $\sqrt{10^{27}}>10^{13}$, steps 1.2 and 2.1 give the strict bound $48\cdot63^4/10^{13}+24\cdot63^2/10^{27}<8/100000$. The last inequality is an exact integer cross-multiplication; $63^4=15752961$. This proves the stated estimate for every allowed $N$ and for arbitrary complex weights with the given bounds. [step 2.1, step 1.2, algebra] ∎
