---
id: lem-two-open-cover-small-chains-are-the-sum-of-the-two-singular-subcomplexes
kind: lemma
title: "Cover-small chains for a two-open cover"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cover-small-singular-chain-subcomplex]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §2.2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement

For open $U,V\subseteq X$ with $X=U\cup V$,
$C_\bullet^{\{U,V\}}(X;G)=C_\bullet(U;G)+C_\bullet(V;G)$ and the intersection
of the two summands is $C_\bullet(U\cap V;G)$.

## Facts & Assumptions

**Given:** An open cover $X=U\cup V$.

## Proof

**Proof technique:** direct.

1.1 A cover-small generator has image in $U$ or in $V$, hence belongs to the displayed sum; conversely each generator from either summand is cover-small. [given, algebra]

2.1 The singular simplices simultaneously belonging to both free-chain subgroups are exactly those with image in $U\cap V$, so their intersection is the stated chain group. [step 1.1, algebra] ∎
