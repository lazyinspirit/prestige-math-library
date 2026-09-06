---
id: lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision
kind: lemma
title: "Finite chains eventually become cover-small"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cover-small-singular-chain-subcomplex, thm-barycentric-subdivision-is-a-chain-map, lem-mesh-of-iterated-barycentric-subdivision-tends-to-zero, thm-lebesgue-number-lemma]
proof_strategy: direct
verification: {precheck: pass}
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 2.21"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement

If the interiors of $\mathcal U$ cover $X$, then for every finite singular
chain $c$ there is $r\ge0$ with $S^r c\in C_\bullet^{\mathcal U}(X;G)$.

## Facts & Assumptions

**Given:** A finite chain $c$ and a cover whose interiors cover $X$.

## Proof

**Proof technique:** direct.

1.1 The image of each simplex of $c$ is compact, so its pulled-back cover has a Lebesgue number; mesh decay supplies a subdivision depth making every subsimplex image lie in one cover member. [given, construct]

2.1 There are finitely many original simplices, so the maximum of their finitely many depths works for all of them. Thus $S^rc$ is cover-small; no depth is claimed for all singular simplices at once. [step 1.1, algebra] ∎
