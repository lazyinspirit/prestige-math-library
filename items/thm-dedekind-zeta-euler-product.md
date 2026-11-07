---
id: thm-dedekind-zeta-euler-product
kind: theorem
title: "Absolute convergence and Euler product for the Dedekind zeta function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-dedekind-zeta-function
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-ideal-norm-is-multiplicative
  - def-prime-above-and-residue-degree
  - def-ramification-index
  - cor-norm-of-a-prime-ideal
  - thm-fundamental-identity-for-primes-in-number-fields
  - thm-p-series-real-exponents
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - thm-derivative-of-exponential
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §5, Proposition 5.2"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Printed p.457; the text sketches the Euler product and refers to multiplicativity."
    - title: "J. S. Milne, Class Field Theory, Chapter VI §2, Proposition 2.7"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Printed p.189, absolute convergence and the Euler product for a finite-order ideal-character series; specialize to the trivial character."
---

## Statement

For every number field $K$ and every complex number $s$ with $\operatorname{Re}(s)>1$, the defining series for $\zeta_K(s)$ converges absolutely and
$$\zeta_K(s)=\prod_{\mathfrak p\subseteq\mathcal O_K\text{ nonzero prime}}\left(1-(N\mathfrak p)^{-s}\right)^{-1}.$$

## Statement references

[[def-dedekind-zeta-function]]

## Facts & Assumptions

**Given:** A number field $K$ of degree $n=[K:\mathbb Q]$ and a complex number $s$ with $\sigma:=\operatorname{Re}(s)>1$.

[F1] The Dedekind zeta series is $\zeta_K(s)=\sum_{0\ne\mathfrak a\subseteq\mathcal O_K}(N\mathfrak a)^{-s}$ over nonzero integral ideals, where $N\mathfrak a=|\mathcal O_K/\mathfrak a|$ ([[def-dedekind-zeta-function]]).

[F2] Every nonzero integral ideal has a unique finite prime-ideal factorization; the unit ideal corresponds to the empty product ([[thm-number-field-integral-ideal-factorisation-in-zf]]).

[F3] Absolute ideal norms are multiplicative on nonzero integral ideals ([[thm-ideal-norm-is-multiplicative]]).

[F4] For each rational prime $p$, if $\mathfrak p_i$ are the primes of $\mathcal O_K$ above $p$ with residue degrees $f_i$ and ramification indices $e_i$, then $\sum_i e_if_i=n$; in particular there are at most $n$ such primes ([[thm-fundamental-identity-for-primes-in-number-fields]], [[def-prime-above-and-residue-degree]], [[def-ramification-index]]). For each such prime, $N\mathfrak p_i=p^{f_i}\ge p$ ([[cor-norm-of-a-prime-ideal]]).

[F5] The real series $\sum_{m\ge1}m^{-\sigma}$ converges when $\sigma>1$ ([[thm-p-series-real-exponents]]).

[F6] For $x>0$, $\log x=\int_1^x dt/t$ and $\log$ obeys the product law; the exponential is differentiable, hence continuous, and is inverse to the natural logarithm ([[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]], [[thm-natural-logarithm-laws]], [[thm-derivative-of-exponential]]).

## Proof

1.1 Group prime ideals by their contracted rational prime. By [F4], for each rational prime $p$ there are at most $n$ prime ideals above it, and each has norm at least $p$. Hence $\sum_{\mathfrak p}(N\mathfrak p)^{-\sigma}\le n\sum_{p\text{ rational prime}}p^{-\sigma}\le n\sum_{m\ge2}m^{-\sigma}<\infty$, so the sum of the prime-ideal weights converges. [F4, F5, given, algebra]

2.1 For $0\le x\le2^{-\sigma}<1$, [F6] gives $-\log(1-x)=\int_0^x(1-u)^{-1}du$. The finite geometric identity $\sum_{j=0}^{N-1}u^j=(1-u^N)/(1-u)$ has a remainder bounded by $x^N/(1-x)$ uniformly on $[0,x]$, so integrating and letting $N\to\infty$ gives $-\log(1-x)=\sum_{k\ge1}x^k/k\le x/(1-x)\le x/(1-2^{-\sigma})$. Apply this to $x=(N\mathfrak p)^{-\sigma}$ and use step 1.1: the sum of these logarithms converges. Finite Euler products are exponentials of the corresponding finite sums by [F6]; continuity of the exponential therefore gives convergence to a finite positive value. [F6, step 1.1, algebra]

3.1 For a finite set $S$ of prime ideals, expanding each geometric series gives $\prod_{\mathfrak p\in S}(1-(N\mathfrak p)^{-\sigma})^{-1}=\sum_{(e_{\mathfrak p})\in\{0,1,2,\ldots\}^S}N\!\left(\prod_{\mathfrak p\in S}\mathfrak p^{e_{\mathfrak p}}\right)^{-\sigma}$, because [F2] identifies each exponent tuple with exactly one ideal and [F3] multiplies its prime norms. Every nonzero integral ideal has finite prime support, so taking the supremum over finite $S$ shows that $\sum_{\mathfrak a}(N\mathfrak a)^{-\sigma}$ converges and equals the positive Euler product of step 2.1. [F2, F3, step 2.1]

4.1 For complex $s$ with real part $\sigma$, each summand has absolute value $(N\mathfrak a)^{-\sigma}$; step 3.1 therefore proves absolute convergence. The finite Euler expansions converge to the full Dirichlet series, since their omitted absolute tails tend to zero by that convergence, and their products converge absolutely by step 2.1. This gives the asserted Euler product for $\zeta_K(s)$. [F1, step 2.1, step 3.1] ∎
