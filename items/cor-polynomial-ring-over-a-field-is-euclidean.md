---
id: cor-polynomial-ring-over-a-field-is-euclidean
kind: corollary
title: 'For every field F, F[x] is a Euclidean domain with degree as Euclidean function'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-polynomial-ring-over-a-domain-is-a-domain, thm-polynomial-division-algorithm-over-a-field, def-euclidean-domain, def-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Neil Donaldson, Math 120B Notes, Section 23'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement

For every field $F$, the ring $F[x]$ is a Euclidean domain with Euclidean function $\delta(f)=\deg f$ on nonzero polynomials.

## Facts & Assumptions

**Given:** A field $F$.

[L1] A polynomial ring over an integral domain is an integral domain ([[cor-polynomial-ring-over-a-domain-is-a-domain]]).

[L2] For $f\in F[x]$ and $0\ne g\in F[x]$, there are $q,r$ with $f=qg+r$ and $r=0$ or $\deg r<\deg g$ ([[thm-polynomial-division-algorithm-over-a-field]]).

[L3] A Euclidean domain is an integral domain with a natural-valued function on nonzero elements satisfying exactly that division condition ([[def-euclidean-domain]]).

[L4] A field is an integral domain because nonzero elements are invertible and $0\ne1$ ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 By [L4] and [L1], $F[x]$ is an integral domain. [given, L1, L4]

2.1 Degree is natural-valued on nonzero polynomials, and [L2] supplies the division condition of [L3], so $F[x]$ is Euclidean with $\delta=\deg$. [step 1.1, L2, L3] ∎
