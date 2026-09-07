---
id: cor-nth-prime-asymptotic
title: "Nth prime asymptotic"
kind: corollary
status: draft
origin: pipeline
deps: [cor-prime-number-theorem]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: direct-corollary
sources:
  references:
    - title: "\u00a76.2, Theorem 6.9 and equation (6.15), monotone inversion consequence"
      url: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf
proof_strategy: direct argument
---

## Statement

If $p_n$ is the n-th prime, then $p_n\sim n\log n$ as $n\to\infty$.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[cor-prime-number-theorem]]: As $x\to\infty$, $\pi(x)\sim x/\log x,\qquad\theta(x)\sim x,\qquad\psi(x)\sim x.$ These three asymptotic assertions are equivalent.

## Proof

1.1 The counting asymptotic implies infinitely many primes, so $p_n\to\infty$. At these points $n=\pi(p_n)=p_n(1+o(1))/\log p_n$. Taking logarithms gives $\log n=\log p_n-\log\log p_n+o(1)$, hence $\log n/\log p_n\to1$. [F1]

2.1 Rearrange the same positive quantities to obtain $p_n/(n\log n)=(p_n/(n\log p_n))(\log p_n/\log n)\to1$. Each factor is positive for all sufficiently large n, so these limits also yield the usual two-sided epsilon bounds. [step 1.1, algebra] ∎
