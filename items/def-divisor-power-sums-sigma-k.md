---
id: def-divisor-power-sums-sigma-k
kind: definition
title: "The divisor power sums $\\sigma_k$"
status: draft
origin: pipeline
deps:
  - def-divides-in-z
  - def-integers
  - def-finite-sum
  - lem-divisor-bound
  - def-integer-power
  - thm-int-ordered-ring
  - thm-induction-principle
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Proposition 5 and its proof, printed pp. 15-17: sigma_{k-1}(n) in the Fourier expansion of G_k."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "The Fourier coefficients of G_k and Proposition 4.20, printed pp. 56–57 (Milne uses exponent 2k)."
---

## Definition

For an integer $k\ge0$ and a positive integer $n$ let

$$\sigma_k(n):=\sum_{d\mid n,\ 1\le d\le n}d^k,$$

the sum of the $k$-th powers of the positive divisors of $n$
([[def-divides-in-z]], [[def-integer-power]],
[[def-finite-sum]], [[def-integers]]). Thus $\sigma_0(n)$ is the number of
positive divisors and $\sigma_1(n)$ is their sum. The sum is over the set of
positive divisors of $n$, a finite set: it is nonempty because $1\mid n$, and it
is bounded above by $n$ when $n\ge1$ ([[lem-divisor-bound]]), so the displayed
sum is a finite sum of integers. Each $\sigma_k(n)$ is therefore a positive
integer: by induction on $k$, $d^0=1>0$ and
$d^{k+1}=d^k d>0$ for every positive integer $d$, since positive integers
are closed under multiplication ([[def-integer-power]],
[[thm-induction-principle]], [[thm-int-ordered-ring]]). The divisor $d=1$
contributes $1^k=1$, and adding the other positive integer summands preserves
positivity by compatibility of the integer order with addition
([[thm-int-ordered-ring]]). These functions are used only to express
the Fourier coefficients of the Eisenstein series on this page.
