---
dependency_level: 1
id: def-maynard-variational-quantity-mk
kind: definition
title: "Maynard’s simplex variational functionals I_k, J_{k,i}, and M_k"
status: draft
origin: pipeline
deps: [def-admissible-prime-tuple, def-support-and-compactly-supported-riemann-integral-in-rn, def-multidimensional-darboux-integral]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "James Maynard, “Small gaps between primes” (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory II: Primes and Sieves, Chapter 22"
      url: "https://personal.science.psu.edu/rcv4/Vol2/Vol2.pdf"
---

## Definition

For an integer $k\ge2$, set
$$R_k:=\{(t_1,\ldots,t_k)\in[0,1]^k:t_1+\cdots+t_k\le1\}.$$
For a real-valued Riemann-integrable function $F$ on $[0,1]^k$ supported in $R_k$, when each coordinate section is Riemann integrable, define its $i$th marginal by
$$G_{F,i}(t_{-i}):=\int_0^1F(t_1,\ldots,t_k)\,dt_i.$$
Let $\mathcal R_k$ consist of these functions for which each $G_{F,i}^2$ is Riemann integrable on $[0,1]^{k-1}$. Define
$$I_k(F):=\int_{R_k}F(t)^2\,dt,\qquad J_{k,i}(F):=\int_{[0,1]^{k-1}}G_{F,i}(t_{-i})^2\prod_{j\ne i}dt_j.$$
Let $\mathcal F_k:=\{F\in\mathcal R_k:I_k(F)>0\text{ and }J_{k,i}(F)>0\text{ for every }1\le i\le k\}$. This class is nonempty: $F_0(t):=\prod_{i=1}^k\max(1-2kt_i,0)$ is supported in $[0,1/(2k)]^k\subset R_k$ and is positive on $[0,1/(4k)]^k$, so $I_k(F_0)>0$ and every $J_{k,i}(F_0)>0$. The **Maynard variational quantity** is
$$M_k:=\sup_{F\in\mathcal F_k}\frac{\sum_{i=1}^kJ_{k,i}(F)}{I_k(F)},$$
with the supremum taken in $[0,+\infty]$.
When applied to primes, $k$ is the size of an admissible tuple.

## Definition references

[[def-admissible-prime-tuple|Admissible tuple context]]

[[def-support-and-compactly-supported-riemann-integral-in-rn|Compactly supported Riemann integrals]]

[[def-multidimensional-darboux-integral|Riemann integral convention]]
