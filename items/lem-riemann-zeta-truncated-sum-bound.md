---
id: lem-riemann-zeta-truncated-sum-bound
kind: lemma
title: "Truncated Dirichlet sum bound for the Riemann zeta function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-riemann-zeta-continuation-to-the-right-half-plane
  - def-natural-logarithm
  - def-complex-exponential
  - lem-integer-part
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§§3, 9–10 and Appendix A; exact passages inspected in the complete local full-text snapshot"
    - title: "Daniel A. Goldston and Cem Y. Yıldırım, Higher correlations of divisor sums related to primes III: k-correlations"
      url: "https://arxiv.org/pdf/math/0209102"
      locator: "Theorem 1.1 and §6; independent untricked correlation calculation inspected in full relevant sections"
---
## Statement

Let $s=\sigma+it$ with $1/2\le\sigma<1$, $s\ne1$, and let $X\ge2$ be an integer; in the formula below define $n^{-s}:=\exp(-s\log n)$. Then
$$\zeta(s)=\sum_{n\le X}n^{-s}+\frac{X^{1-s}}{s-1}+O\!\left(\frac{|s|X^{-\sigma}}{\sigma}\right),$$
with an absolute implied constant. In particular, if $X=\lfloor |t|\rfloor+2$, then
$$|\zeta(s)|\ll X^{1-\sigma}\left(1+\frac1{1-\sigma}+\frac1{|s-1|}\right).$$

## Statement references

[Green and Tao, Annals 2008, §§3, 9–10](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Goldston and Yıldırım, Theorem 1.1 and §6](https://arxiv.org/pdf/math/0209102)

## Facts & Assumptions

**Given:** $s$ and $X$ as in the statement, and the fractional-part continuation formula for $\zeta$.

[F1] [[thm-riemann-zeta-continuation-to-the-right-half-plane]]: For $\operatorname{Re}s>0$ and $s\ne1$, $\zeta(s)=\frac{s}{s-1}-s\int_1^\infty\{u\}u^{-s-1}\,du$.
## Proof

1.1 For $\sigma>1$, partial summation of the tail gives $\sum_{n>X}n^{-s}=-X^{1-s}+s\int_X^\infty\lfloor u\rfloor u^{-s-1}du$. Substitute $\lfloor u\rfloor=u-\{u\}$ and evaluate $s\int_X^\infty u^{-s}du=sX^{1-s}/(s-1)$; adding $\sum_{n\le X}n^{-s}$ yields $\zeta(s)=\sum_{n\le X}n^{-s}+X^{1-s}/(s-1)-s\int_X^\infty\{u\}u^{-s-1}du$. Both sides continue holomorphically to $\operatorname{Re}s>0$, $s\ne1$, by [F1] and absolute convergence of the tail integral, so the identity holds in the stated strip. [F1, given, algebra]

2.1 Since $0\le\{u\}<1$, the tail integral has absolute value at most $|s|\int_X^\infty u^{-\sigma-1}du=|s|X^{-\sigma}/\sigma$, proving the first formula. Also $\sum_{n\le X}n^{-\sigma}\le1+\int_1^X u^{-\sigma}du\ll X^{1-\sigma}(1+(1-\sigma)^{-1})$, and the pole term is at most $X^{1-\sigma}/|s-1|$. For $X=\lfloor|t|\rfloor+2$, $|s|X^{-\sigma}\ll X^{1-\sigma}$, giving the stated consequence. [step 1.1, given, algebra] ∎
