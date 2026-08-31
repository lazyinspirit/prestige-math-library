---
id: prop-transversality-to-a-point-is-the-regular-value-condition
kind: proposition
title: "Transversality to a point is the regular-value condition"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-a-smooth-map-transverse-to-an-embedded-submanifold,
       def-regular-and-critical-points-and-values]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

For a smooth map $F:M\to N$ and a point $q\in N$, the condition $F\pitchfork\{q\}$
is equivalent to saying that $q$ is a regular value of $F$.

## Facts & Assumptions

**Given:** A smooth map $F:M\to N$ and a point $q\in N$.

[F1] Transversality to $\{q\}$ means $dF_p(T_pM)+T_q\{q\}=T_qN$ for every $p\in F^{-1}(q)$ ([[def-a-smooth-map-transverse-to-an-embedded-submanifold]]).

[F2] A regular value is one whose fibre points are all regular points, and regular points are exactly the submersion points ([[def-regular-and-critical-points-and-values]]).

## Proof
**Proof technique:** direct.

1.1 Because $T_q\{q\}=0$, [F1] says that $F\pitchfork\{q\}$ exactly when $dF_p(T_pM)=T_qN$ for every $p\in F^{-1}(q)$. [F1, given]

2.1 The condition in step 1.1 is precisely that every fibre point is a submersion point, which [F2] identifies with $q$ being a regular value. [F2, step 1.1]

3.1 Therefore transversality to a point is the regular-value condition. [step 2.1] ∎