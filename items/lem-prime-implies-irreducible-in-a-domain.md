---
id: lem-prime-implies-irreducible-in-a-domain
kind: lemma
title: "Every prime element of an integral domain is irreducible"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-irreducible-and-prime-elements-in-a-domain, lem-domain-cancellation, def-invertible-element]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Sharifi, Abstract Algebra, Advanced Ring Theory"
      url: "https://math.ucla.edu/~sharifi/algebra.pdf"
pipeline_run: null
---

## Statement

Every prime element of an integral domain is irreducible.

## Facts & Assumptions

**Given:** An integral domain $R$ and a prime element $p\in R$.

[L1] A prime element is nonzero and not a unit, and divides one factor of every product it divides; an irreducible element is nonzero and not a unit and has a unit factor in each of its factorizations ([[def-irreducible-and-prime-elements-in-a-domain]]).

[L2] Multiplicative cancellation by a nonzero element holds in an integral domain ([[lem-domain-cancellation]]).

[L3] An element is a unit when it has a two-sided multiplicative inverse ([[def-invertible-element]]).

## Proof

**Proof technique:** direct.

1.1 Let $p=ab$. Since $p\mid p=ab$, primality gives $p\mid a$ or $p\mid b$. [L1, given]

2.1 If $p\mid a$, write $a=pc$. Then $p=ab=pcb$, and cancellation by nonzero $p$ gives $1=cb=bc$; thus $b$ is a unit. [step 1.1, L2, L3, given]

2.2 If $p\mid b$, the symmetric argument gives that $a$ is a unit. [step 1.1, L2, L3, given]

3.1 Thus every factorization $p=ab$ has a unit factor, so $p$ is irreducible. [step 2.1, step 2.2, L1] ∎
