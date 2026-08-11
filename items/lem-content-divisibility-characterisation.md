---
id: lem-content-divisibility-characterisation
kind: lemma
title: 'Content is the positive common divisor of the coefficients divisible by every common divisor'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-content-and-primitive-integer-polynomial, cor-common-divisor-divides-gcd, thm-induction-principle, thm-fundamental-theorem-of-arithmetic]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Keith Conrad, Irreducibility Tests in Q[T], Appendix A.1'
      url: 'https://kconrad.math.uconn.edu/blurbs/ringtheory/irredtestsoverQ.pdf'
pipeline_run: null
---

## Statement

Let $0\ne f=a_0+\cdots+a_nx^n\in\mathbb Z[x]$. Its content is positive, divides every coefficient, and is divisible by every integer that divides every coefficient. Consequently, $f$ is primitive exactly when no prime divides all of its coefficients.

## Facts & Assumptions

**Given:** A nonzero integer polynomial with trimmed coefficient list $(a_0,\ldots,a_n)$ and iterated gcds $c_0=0$, $c_{k+1}=\gcd(c_k,a_k)$.

[L1] The final iterated gcd is the content, and primitiveness means content $1$ ([[def-content-and-primitive-integer-polynomial]]).

[L2] Every common divisor of two integers divides their gcd, and that gcd is the nonnegative common divisor with this universal property ([[cor-common-divisor-divides-gcd]]).

[L3] The induction principle proves a natural-number property from its base and successor cases ([[thm-induction-principle]]).

[L4] Every positive integer is a finite product of primes, with the empty product occurring only at $1$ ([[thm-fundamental-theorem-of-arithmetic]]).

## Proof

**Proof technique:** induction.

1.1 By induction on $k$, [L2] shows that $c_{k+1}$ divides $a_0,\ldots,a_k$ and that every common divisor of those coefficients divides $c_{k+1}$; the base $k=0$ uses $\gcd(0,a_0)=|a_0|$. [base, given, L2, L3]

2.1 The induction step replaces the universal common divisor of $a_0,\ldots,a_{k-1}$ by $c_k$ and applies [L2] to $(c_k,a_k)$, so [L3] and [L1] give the asserted characterization of $\operatorname{cont}(f)$; positivity follows because some coefficient is nonzero. [step 1.1, ih, L1, L2, L3, discharge-induction]

3.1 If the content exceeds $1$, [L4] supplies a prime divisor of it, which step 2.1 makes a divisor of every coefficient; conversely, any prime dividing every coefficient divides the content by step 2.1 and prevents it from being $1$. [step 2.1, L1, L4, discharge-induction] ∎
