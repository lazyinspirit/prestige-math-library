---
dependency_level: 1
id: thm-maynard-admissible-5-tuple-diameter-12
kind: theorem
title: "Admissibility and diameter of Maynard’s 5-tuple"
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
    - title: "James Maynard, “Small gaps between primes” (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
    - title: "Goldston–Pintz–Yıldırım, “Primes in Tuples I” (2009)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v170-n2-p10-p.pdf"
---

## Statement

The explicit tuple $H_{5}=\{0,2,6,8,12\}$ is admissible and has diameter $12$.


## Statement references

[[def-admissible-prime-tuple|Admissible tuples]]


## Facts & Assumptions

**Given:** The displayed finite set $H_{5}$.

[F1] The tuple $H$ is **admissible** when $\nu_H(p)<p$ for every prime $p$, equivalently when at least one residue class modulo every prime is missed by all shifts ([[def-admissible-prime-tuple]]).

## Proof

**Proof technique:** direct.

1.1 The listed entries are distinct, the minimum is $0$, and the maximum is $12$, so the diameter is $12$. The missing-residue table for every prime $p\le 5$ is $p=2: 1; p=3: 1; p=5: 4$. Thus none of these primes is covered by all shifts. [given, algebra]

2.1 If $p>5$, the tuple has only $5$ entries and therefore represents at most $5<p$ residue classes modulo $p$. Every prime is either at most $5$ or larger, so [F1] gives admissibility. [given, F1, step 1.1, algebra] ∎
