---
dependency_level: 1
id: thm-polymath8b-admissible-50-tuple-diameter-246
kind: theorem
title: "Admissibility and diameter of Polymath8b’s 50-tuple"
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
---

## Statement

The explicit tuple $H_{50}=\{0,4,6,16,30,34,36,46,48,58,60,64,70,78,84,88,90,94,100,106,108,114,118,126,130,136,144,148,150,156,160,168,174,178,184,190,196,198,204,210,214,216,220,226,228,234,238,240,244,246\}$ is admissible and has diameter $246$.


## Statement references

[[def-admissible-prime-tuple|Admissible tuples]]


## Facts & Assumptions

**Given:** The displayed finite set $H_{50}$.

[F1] The tuple $H$ is **admissible** when $\nu_H(p)<p$ for every prime $p$, equivalently when at least one residue class modulo every prime is missed by all shifts ([[def-admissible-prime-tuple]]).

## Proof

**Proof technique:** direct.

1.1 The listed entries are distinct, the minimum is $0$, and the maximum is $246$, so the diameter is $246$. The missing-residue table for every prime $p\le 50$ is $p=2: 1; p=3: 2; p=5: 2; p=7: 5; p=11: 10; p=13: 11; p=17: 1; p=19: 9; p=23: 5; p=29: 9; p=31: 14; p=37: 1; p=41: 1; p=43: 9; p=47: 18$. Thus none of these primes is covered by all shifts. [given, algebra]

2.1 If $p>50$, the tuple has only $50$ entries and therefore represents at most $50<p$ residue classes modulo $p$. Every prime is either at most $50$ or larger, so [F1] gives admissibility. [given, F1, step 1.1, algebra] ∎
