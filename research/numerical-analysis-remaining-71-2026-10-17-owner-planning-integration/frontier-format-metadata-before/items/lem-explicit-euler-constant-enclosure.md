---
id: lem-explicit-euler-constant-enclosure
kind: lemma
title: Finite harmonic enclosure for Euler's constant
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-euler-mascheroni-constant-and-harmonic-asymptotic, thm-logarithm-derivative-and-integral]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §5.2, Gamma and psi functions
      url: https://dlmf.nist.gov/5.2
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 3
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
---

## Statement

For each integer $M\ge1$, put $H_M=\sum_{k=1}^M1/k$. Euler's constant
$\gamma$ satisfies
$$0\le H_M-\log M-\gamma\le\frac1M.$$
Thus $[H_M-\log M-1/M,\ H_M-\log M]$ is a finite enclosure for $\gamma$.

## Facts & Assumptions

**Given:** An integer $M\ge1$.

[F1] [[thm-euler-mascheroni-constant-and-harmonic-asymptotic]]:
$\gamma_n=H_n-\log n$ decreases to $\gamma$.

[F2] [[thm-logarithm-derivative-and-integral]]:
$\log(n+1)-\log n=\int_n^{n+1}dt/t$ for $n\ge1$.

## Proof
1.1 For each $n\ge M$, [F1] and [F2] give $$\gamma_n-\gamma_{n+1} =\int_n^{n+1}\frac{dt}{t}-\frac1{n+1} =\int_n^{n+1}\left(\frac1t-\frac1{n+1}\right)dt.$$ The integrand is nonnegative and at most $1/n-1/(n+1)$ on this interval. Therefore $$0\le\gamma_n-\gamma_{n+1}\le\frac1n-\frac1{n+1}.$$ [F1, F2, algebra]

2.1 Summing step 1.1 for $n=M,\ldots,K$ telescopes to $$0\le\gamma_M-\gamma_{K+1}\le\frac1M-\frac1{K+1}.$$ Let $K\to\infty$ and use $\gamma_{K+1}\to\gamma$ from [F1]. Since $\gamma_M=H_M-\log M$, the claimed two-sided bound follows. [F1, step 1.1, algebra] ∎