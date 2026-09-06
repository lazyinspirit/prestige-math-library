---
id: lem-a-proper-verma-submodule-misses-the-highest-weight-line
kind: lemma
title: "A proper Verma submodule misses the highest-weight line"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-verma-module]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I & II, §25.2"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
---

## Statement

If $N\subset M(\lambda)$ is proper, then $N\cap\mathbb Cv_\lambda=0$.

## Facts & Assumptions

**Given:** $M(\lambda)$ and its distinguished generator from [[def-verma-module]].

## Proof

**Proof technique:** direct.

1.1 If $0\ne cv_\lambda\in N$, scalar closure gives $v_\lambda\in N$. [given, algebra]

2.1 The vector $v_\lambda$ generates $M(\lambda)$ by its induced construction, so $N=M(\lambda)$, contradicting properness. [given, contradiction] ∎
