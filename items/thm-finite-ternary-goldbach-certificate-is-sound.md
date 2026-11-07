---
id: thm-finite-ternary-goldbach-certificate-is-sound
kind: theorem
title: "Soundness of the Exhaustive Finite Ternary Goldbach Checker"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - alg-finite-ternary-goldbach-verification
  - def-prime
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "H. A. Helfgott and D. J. Platt, Numerical Verification of the Ternary Goldbach Conjecture up to 8.875e30, arXiv:1305.3062v2"
      url: "https://arxiv.org/pdf/1305.3062v2"
      locator: "§§2–4, printed pp. 2–4; the statement here concerns a separate local exhaustive checker."
---

## Statement

Let $N\ge7$ be an integer. If the exhaustive mode of the finite ternary Goldbach checker accepts a certificate for $N$, then every odd integer $n$ with $7\le n\le N$ is a sum of three primes.

## Statement references

[Helfgott–Platt, *Numerical Verification of the Ternary Goldbach Conjecture up to 8.875e30*](https://arxiv.org/pdf/1305.3062v2)

## Facts & Assumptions

**Given:** An integer $N\ge7$ and an accepted certificate for $N$ from the exhaustive checker.

[F1] [[alg-finite-ternary-goldbach-verification]]: an accepted certificate has exactly one row for each index $j=0,\ldots,\lfloor(N-7)/2\rfloor$, with $n_j=7+2j$, each $p_{j,i}\ge2$, the checked sum $p_{j,1}+p_{j,2}+p_{j,3}=n_j$, and trial division against every integer $d=2,\ldots,\lfloor\sqrt{p_{j,i}}\rfloor$.

[F2] [[def-prime]]: an integer $p$ is prime when $p>1$ and every positive divisor $d$ of $p$ is $1$ or $p$; if $p>1$ is not prime, it has a positive divisor different from $1$ and $p$.

## Proof

1.1 Fix a listed candidate $p=p_{j,i}$. By [F1], $p\ge2$ and no integer $d$ with $2\le d\le\lfloor\sqrt p\rfloor$ divides $p$. If $p$ were not prime, [F2] would give a positive divisor $d$ with $1<d<p$. Set $r=p/d$, a positive integer greater than $1$. Of $d,r$, let $a$ be the smaller. Then $a\ge2$, $a\mid p$, and $a^2\le dr=p$, so $a\le\lfloor\sqrt p\rfloor$, contradicting the trial-division check. Hence every listed candidate is prime. [given, F1, F2, choose, algebra]

2.1 Let $n$ be any odd integer with $7\le n\le N$. Then $j=(n-7)/2$ is an integer with $0\le j\le\lfloor(N-7)/2\rfloor$. By [F1] its row is present, its three entries are prime by step 1.1, and their sum is $n_j=7+2j=n$. [given, F1, step 1.1, choose, algebra] ∎
