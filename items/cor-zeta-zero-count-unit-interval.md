---
id: cor-zeta-zero-count-unit-interval
kind: corollary
title: "A unit-interval bound for zeta zeros"
status: draft
origin: pipeline
deps: [thm-riemann-von-mangoldt-zero-counting]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Kiran S. Kedlaya, Analytic Number Theory, Lemma 10.3"
      url: "https://kskedlaya.org/ant/chapter-10.html"
---

## Statement

The number of nontrivial zeta zeros, with multiplicity, whose ordinates lie in
$[T,T+1]$ is $O(\log(T+2))$ for $T\ge0$.

## Proof

**Given:** the Riemann--von Mangoldt estimate.

1.1 For $T\ge3$, the zeros with ordinates in $[T,T+1]$ are included in $N(T+2)-N(T-1)$. Subtract the Riemann--von Mangoldt formula at $T+2$ and $T-1$; its main term changes by $O(\log T)$ and its two errors have that size. [given, algebra]

2.1 On the compact range $0\le T<3$, discreteness of the zeros gives a fixed finite bound, which is absorbed by enlarging the constant. The buffered count in step 1.1 already includes both endpoints, so the stated closed interval is covered. [step 1.1, cases] ∎
