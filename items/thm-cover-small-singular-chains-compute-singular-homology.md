---
id: thm-cover-small-singular-chains-compute-singular-homology
kind: theorem
title: "Cover-small chains compute singular homology"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cover-small-singular-chain-subcomplex, lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision, thm-barycentric-subdivision-is-chain-homotopic-to-the-identity]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 2.21"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement

The inclusion $C_\bullet^{\mathcal U}(X;G)\hookrightarrow C_\bullet(X;G)$
induces an isomorphism on homology.

## Facts & Assumptions

**Given:** A family $\mathcal U$ whose interiors cover $X$.

## Proof

**Proof technique:** direct.

1.1 For an ordinary cycle $z$, choose a depth with $S^rz$ small. Repeatedly applying $1-S=\partial T+T\partial$ shows $z$ and $S^rz$ are homologous, proving surjectivity. [given, construct]

2.1 If a small cycle bounds an ordinary chain $b$, choose a depth making $S^rb$ small. The same prism identity says the original cycle and its small subdivision differ by a boundary already in the small complex; together with $\partial S^rb=S^r\partial b$ this proves injectivity. [step 1.1, algebra] ∎
