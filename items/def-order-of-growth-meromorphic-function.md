---
id: def-order-of-growth-meromorphic-function
kind: definition
title: "Order and lower order from the Nevanlinna characteristic"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nevanlinna-counting-proximity-and-characteristic, thm-nevanlinna-first-main-theorem, thm-ahlfors-shimizu-characteristic-identity]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions, Ch. 2 §1, definition of order and lower order"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
---

## Statement

Let $f$ be nonconstant meromorphic on $\mathbb C$. Its characteristic is nondecreasing, and $T(r,f)>1$ for all sufficiently large $r$. Define its order and lower order by
$$\rho(f)=\limsup_{r\to\infty}\frac{\log T(r,f)}{\log r},\qquad \lambda(f)=\liminf_{r\to\infty}\frac{\log T(r,f)}{\log r},$$
using only sufficiently large $r>1$ with $T(r,f)>1$. Both values lie in $[0,\infty]$; $f$ has finite order when $\rho(f)<\infty$. For every constant finite map, set $\rho(f)=\lambda(f)=0$ by convention. For entire functions, the next proposition compares this order with the classical maximum-modulus order; meromorphic growth is measured by $T$, which remains finite in the presence of poles.

## Facts & Assumptions

**Given:** The characteristic, integrated counts, and normalized chordal proximity for a meromorphic function on $\mathbb C$.

[F1] The integrated count is $N(r,a;f)=n(0,a;f)\log r+\int_0^r(n(t,a;f)-n(0,a;f))\,dt/t$ ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F2] The characteristic is $T(r,f)=m(r,\infty;f)+N(r,\infty;f)$ ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F3] The normalized chordal sphere has diameter one, so $\log(1/\delta(f,a))\ge0$ and every proximity is nonnegative ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F4] The First Main Theorem gives $m(r,a;f)+N(r,a;f)=T(r,f)+C(f,a)$ with a fixed finite centre constant ([[thm-nevanlinna-first-main-theorem]]).

[F5] The Ahlfors–Shimizu identity is $T(r,f)=T_{\rm AS}(r,f)+C_\infty(f)$, and $T_{\rm AS}$ is finite and nondecreasing ([[thm-ahlfors-shimizu-characteristic-identity]]).

## Proof

**Proof technique:** use a central divisor to force logarithmic growth of $T$, then use the area identity to establish monotonicity of the characteristic.

1.1 For any target $a$, $n(t,a;f)\ge n(0,a;f)$, so [F1] gives $N(r,a;f)\ge n(0,a;f)\log r$ for $r>1$. [F1, algebra]

2.1 If $f(0)$ is finite, take $a=f(0)$; then $n(0,a;f)\ge1$ and [F4], [F3], and step 1.1 give $T(r,f)\ge\log r-C(f,a)$. If $0$ is a pole, then $n(0,\infty;f)\ge1$ and [F2], [F3], and step 1.1 give $T(r,f)\ge\log r$. Thus $T(r,f)\to\infty$ and is greater than $1$ for all sufficiently large $r$. [F2, F3, F4, step 1.1, algebra]

3.1 By [F5], $T$ is nondecreasing; by step 2.1 the logarithmic ratio in the statement is defined and nonnegative for all sufficiently large $r$. Its limsup and liminf therefore lie in $[0,\infty]$. [F5, step 2.1, algebra] ∎
