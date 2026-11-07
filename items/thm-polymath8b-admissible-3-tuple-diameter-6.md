---
dependency_level: 1
id: thm-polymath8b-admissible-3-tuple-diameter-6
kind: theorem
title: "Admissibility and diameter of the 3-tuple {0,2,6}"
status: draft
origin: pipeline
proof_strategy: direct
deps: [def-admissible-prime-tuple]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "D. H. J. Polymath, “Variants of the Selberg sieve, and bounded intervals containing many primes” (2014), arXiv v4"
      url: "https://arxiv.org/pdf/1407.4897v4"
    - title: "Goldston–Pintz–Yıldırım, “Primes in Tuples I” (2009)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v170-n2-p10-p.pdf"
---

## Statement

The explicit tuple $H_{3}=\{0,2,6\}$ is admissible and has diameter $6$.


## Statement references

[[def-admissible-prime-tuple|Admissible tuples]]


## Facts & Assumptions

**Given:** The displayed finite set $H_{3}$.

[F1] The tuple $H$ is **admissible** when $\nu_H(p)<p$ for every prime $p$, equivalently when at least one residue class modulo every prime is missed by all shifts ([[def-admissible-prime-tuple]]).

## Proof

**Proof technique:** direct.

1.1 The listed entries are distinct, the minimum is $0$, and the maximum is $6$, so the diameter is $6$. The missing-residue table for every prime $p\le 3$ is $p=2: 1; p=3: 1$. Thus none of these primes is covered by all shifts. [given, algebra]

2.1 If $p>3$, the tuple has only $3$ entries and therefore represents at most $3<p$ residue classes modulo $p$. Every prime is either at most $3$ or larger, so [F1] gives admissibility. [given, F1, step 1.1, algebra] ∎
