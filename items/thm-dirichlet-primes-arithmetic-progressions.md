---
id: thm-dirichlet-primes-arithmetic-progressions
kind: theorem
title: "Dirichlet's theorem on primes in arithmetic progressions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-mertens-primes-arithmetic-progressions]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Theorem 4.2"
      url: "https://kskedlaya.org/ant/chap-primes-in-ap.html"
    - title: "Andrew V. Sutherland, Number Theory I, Theorem 18.1"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

If $q\ge1$ and $(a,q)=1$, then there are infinitely many primes
$p\equiv a\pmod q$.

## Facts & Assumptions

**Given:** A modulus $q\ge1$ and a reduced residue class $a$ modulo $q$.

[L1] The reciprocal-prime sum in this progression satisfies
$\sum_{p\le x,\ p\equiv a(q)}1/p=\varphi(q)^{-1}\log\log x+O_q(1)$
([[thm-mertens-primes-arithmetic-progressions]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the partial sums $\sum_{p\le x,\ p\equiv a(q)}1/p$ are unbounded, because $\log\log x\to\infty$. [L1, given, algebra]

2.1 A finite set of primes would contribute a bounded reciprocal sum. Therefore the set of primes congruent to $a$ modulo $q$ cannot be finite. [step 1.1, algebra] ∎
