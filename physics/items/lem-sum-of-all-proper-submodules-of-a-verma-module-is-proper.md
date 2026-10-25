---
id: lem-sum-of-all-proper-submodules-of-a-verma-module-is-proper
kind: lemma
title: "The sum of all proper Verma submodules is proper"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-a-proper-verma-submodule-misses-the-highest-weight-line, prop-weights-of-a-verma-module-lie-below-lambda]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I & II, Proposition 25.12"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
---

## Statement

The sum $J(\lambda)$ of all proper submodules of $M(\lambda)$ is proper.

## Facts & Assumptions

**Given:** The top-weight statement [[prop-weights-of-a-verma-module-lie-below-lambda]] and the highest-line lemma [[lem-a-proper-verma-submodule-misses-the-highest-weight-line]].

## Proof

**Proof technique:** direct.

1.1 A submodule is stable under $\mathfrak h$; projecting any finite weight decomposition by polynomials in elements of $\mathfrak h$ shows it is the direct sum of its weight intersections. [given, algebra]

2.1 Every proper submodule has zero $\lambda$-weight intersection by the highest-line lemma.  Hence their sum has zero $\lambda$-weight intersection, whereas $v_\lambda$ has that weight; therefore $J(\lambda)\ne M(\lambda)$. [given, algebra] ∎
