---
id: prop-a-cw-complex-is-the-colimit-of-its-skeleta-in-the-weak-topology
kind: proposition
title: A CW complex is the colimit of its skeleta in the weak topology
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-skeleta-cw-subcomplex-and-relative-cw-complex, def-cw-complex-with-closure-finiteness-and-weak-topology]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: J. Peter May, A Concise Course in Algebraic Topology, Chapter 10
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
---

## Statement

A map $f:X\to Y$ from a CW complex is continuous if and only if every restriction $f|_{X^n}:X^n\to Y$ is continuous.

## Facts & Assumptions

**Given:** A function $f:X\to Y$ whose skeletal restrictions are continuous.

## Proof

**Proof technique:** direct.

1.1 Necessity follows by restriction. Conversely, $f|_{\overline e}$ is continuous because $\overline e$ lies in the skeleton of its dimension. [given]

2.1 For closed $C\subseteq Y$, each $f^{-1}(C)\cap\overline e$ is closed in $\overline e$ by step 1.1; the weak-topology clause in [[def-cw-complex-with-closure-finiteness-and-weak-topology]] makes $f^{-1}(C)$ closed. [step 1.1] ∎
