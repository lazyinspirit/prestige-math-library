---
id: def-goldston-yildirim-truncated-divisor-sum
kind: definition
title: "Goldston–Yıldırım truncated divisor sum"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-number-theoretic-mobius-function
  - def-natural-logarithm
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
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
## Definition

For a real number $R>1$ and a positive integer $n$, the **Goldston–Yıldırım truncated divisor sum** is
$$\Lambda_R(n):=\sum_{\substack{d\mid n\\1\le d\le R}}\mu(d)\log(R/d),$$
where divisors are positive integers and $\mu$ is the number-theoretic Möbius function. The sum is finite; equivalently, each summand is $\mu(d)\max(\log(R/d),0)$ over all positive divisors $d\mid n$.

## Definition references

[[def-number-theoretic-mobius-function|Number-theoretic Möbius function]]

[[def-natural-logarithm|Natural logarithm]]

[Green and Tao, Annals 2008, §§3, 9–10](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Goldston and Yıldırım, Theorem 1.1 and §6](https://arxiv.org/pdf/math/0209102)
