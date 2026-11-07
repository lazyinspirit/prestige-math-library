---
dependency_level: 1
id: thm-maynard-admissible-105-tuple-diameter-600
kind: theorem
title: "Admissibility and diameter of Maynard’s 105-tuple"
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
---

## Statement

The explicit tuple $H_{105}=\{0,10,12,24,28,30,34,42,48,52,54,64,70,72,78,82,90,94,100,112,114,118,120,124,132,138,148,154,168,174,178,180,184,190,192,202,204,208,220,222,232,234,250,252,258,262,264,268,280,288,294,300,310,322,324,328,330,334,342,352,358,360,364,372,378,384,390,394,400,402,408,412,418,420,430,432,442,444,450,454,462,468,472,478,484,490,492,498,504,510,528,532,534,538,544,558,562,570,574,580,582,588,594,598,600\}$ is admissible and has diameter $600$.


## Statement references

[[def-admissible-prime-tuple|Admissible tuples]]


## Facts & Assumptions

**Given:** The displayed finite set $H_{105}$.

[F1] The tuple $H$ is **admissible** when $\nu_H(p)<p$ for every prime $p$, equivalently when at least one residue class modulo every prime is missed by all shifts ([[def-admissible-prime-tuple]]).

## Proof

**Proof technique:** direct.

1.1 The listed entries are distinct, the minimum is $0$, and the maximum is $600$, so the diameter is $600$. The missing-residue table for every prime $p\le 105$ is $p=2: 1; p=3: 2; p=5: 1; p=7: 4; p=11: 7; p=13: 6; p=17: 6; p=19: 8; p=23: 14; p=29: 21; p=31: 26; p=37: 22; p=41: 19; p=43: 1; p=47: 3; p=53: 36; p=59: 9; p=61: 38; p=67: 13; p=71: 8; p=73: 11; p=79: 1; p=83: 4; p=89: 3; p=97: 1; p=101: 1; p=103: 3$. Thus none of these primes is covered by all shifts. [given, algebra]

2.1 If $p>105$, the tuple has only $105$ entries and therefore represents at most $105<p$ residue classes modulo $p$. Every prime is either at most $105$ or larger, so [F1] gives admissibility. [given, F1, step 1.1, algebra] ∎
