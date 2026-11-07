---
id: alg-goldston-yildirim-pseudorandom-majorant
kind: algorithm
title: "Goldston–Yıldırım pseudorandom majorant construction"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-w-trick-prime-modulus
  - def-w-tricked-von-mangoldt-function
  - def-goldston-yildirim-truncated-divisor-sum
  - def-unit-group-modulo-n-and-euler-totient
  - def-prime
  - def-natural-logarithm
  - def-real-power
  - def-factorial-and-falling-factorial
  - lem-integer-part
  - def-integers-modulo-n
  - thm-natural-logarithm-laws
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
    - title: "David Conlon, Jacob Fox, and Yufei Zhao, The Green–Tao theorem: an exposition"
      url: "https://arxiv.org/pdf/1403.2957"
      locator: "§§8–9; complete smooth-cutoff exposition inspected; alternate cutoff/normalization, comparison only"
---
## Definition

Fix an integer $k\ge3$ and a sufficiently large prime $N$. Put
$$w(N)=\max\!\left(2,\left\lfloor\sqrt{\log\log\log N}\right\rfloor\right),\quad W=W(w(N)),\quad R=N^{1/(k2^{k+4})},\quad \epsilon_k=\frac1{2^k(k+4)!},$$
where the displayed formula for $w(N)$ is used when $N\ge e^{e^e}$ and $w(N)=2$ below that threshold. Let $I_N=[\epsilon_kN,2\epsilon_kN]\cap\mathbb Z$, viewed inside the standard representatives $0,\ldots,N-1$ of $\mathbb Z/N\mathbb Z$. Define
$$g_N(n)=\frac{\varphi(W)}{W\log R}\Lambda_R(Wn+1)^2\,\mathbf1_{I_N}(n),\qquad \nu_N(n)=1-\mathbf1_{I_N}(n)+g_N(n).$$
Here $\mathbf1_{I_N}(n)=1$ for $n\in I_N$ and $0$ otherwise. The algorithm returns the pair $(g_N,\nu_N)$ on $\mathbb Z/N\mathbb Z$.

## Definition references

[[def-w-trick-prime-modulus|W-trick modulus and progression]]

[[def-w-tricked-von-mangoldt-function|Prime-supported W-tricked von Mangoldt function]]

[[def-goldston-yildirim-truncated-divisor-sum|Goldston–Yıldırım truncated divisor sum]]

[[def-prime|Prime integers and prime cutoff]]

[[def-unit-group-modulo-n-and-euler-totient|Euler totient $\varphi(W)$]]

[[def-natural-logarithm|Natural logarithm]]

[[def-real-power|Real powers]]

[[def-factorial-and-falling-factorial|Factorial notation]]

[[lem-integer-part|Integer part $\lfloor x\rfloor$]]

[[def-integers-modulo-n|Residue classes modulo $N$ and standard representatives]]

[Green and Tao, Annals 2008, §§3, 9–10](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Conlon, §§8–9](https://arxiv.org/pdf/1403.2957)
