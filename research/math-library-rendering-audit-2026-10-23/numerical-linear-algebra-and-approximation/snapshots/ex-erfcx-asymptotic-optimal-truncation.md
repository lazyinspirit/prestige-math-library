---
id: ex-erfcx-asymptotic-optimal-truncation
kind: example
title: Least-term truncation of the erfcx asymptotic expansion
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-erfcx-asymptotic-remainder, thm-certified-erfcx-enclosures]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: DLMF, §7.12(i), equation 7.12.1
      url: https://dlmf.nist.gov/7.12
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§3 and 5
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 6
---

## Statement

For $x\ge1$, let $N\ge1$ be an integer nearest to $x^2$, so
$N-\tfrac12\le x^2\le N+\tfrac12$. In the expansion from
[[lem-erfcx-asymptotic-remainder]], the magnitudes of the terms are
$$a_k(x)=\frac{(1/2)_k}{x^{2k+1}\sqrt\pi}.$$
The term $a_N(x)$ is minimal (ties are possible), and the signed remainder
after $N$ terms is bounded by exactly $a_N(x)$. For example, at $x=3$ the
least-term truncation is $N=9$. This describes optimal truncation by term
size; it does not assert convergence of the asymptotic series.

## Facts & Assumptions

**Given:** Real $x\ge1$ and integer $N\ge1$ with
$N-\tfrac12\le x^2\le N+\tfrac12$.

[F1] [[lem-erfcx-asymptotic-remainder]]: after $N$ terms,
$\operatorname{erfcx}(x)-S_N(x)=(-1)^N R_N(x)$ with
$0\le R_N(x)\le (1/2)_N/(x^{2N+1}\sqrt\pi)$.

## Proof
1.1 The positive term ratio is $$\frac{a_{k+1}(x)}{a_k(x)}=\frac{k+1/2}{x^2}.$$ For $0\le k<N$, this ratio is at most $(N-1/2)/x^2\le1$, so the terms do not increase up to $a_N$. For $k\ge N$, the ratio is at least $(N+1/2)/x^2\ge1$, so terms do not decrease after $a_N$. Hence $a_N$ is a least term. [given, algebra]

2.1 The upper bound in [F1] equals $(1/2)_N/(x^{2N+1}\sqrt\pi)=a_N(x)$, and its sign is fixed by $(-1)^N$. Thus the first omitted least-sized term also bounds the signed asymptotic remainder. At $x=3$, $N=9$ satisfies $8.5\le9\le9.5$; the same finite certificate applies. [F1, step 1.1, algebra] ∎