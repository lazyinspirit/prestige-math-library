---
id: "thm-brouwer-fixed-point-theorem"
kind: "theorem"
title: "Brouwer fixed point theorem"
deps: ["thm-no-retraction-from-a-disk-onto-its-boundary", "lem-a-fixed-point-free-ball-map-produces-a-boundary-retraction"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Miller, Algebraic Topology I lecture notes, Theorem 10.7 and proof, p.24"
      url: "https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/b4baa933e22d1c947d32588333336164_MIT18_905F16_lec10.pdf"
      locator: "Theorem 10.7 and proof, p.24"
status: published
origin: "pipeline"
proof_strategy: "For n>=1 use the ray retraction contradiction. D^0 is a singleton and is handled separately."
---

## Statement

Every continuous map $f:D^n\to D^n$ of the closed unit ball has a fixed point, for every integer $n\ge0$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] For every integer $n\ge1$, there is no continuous retraction $D^n\to S^{n-1}$ of the closed unit ball onto its boundary. ([[thm-no-retraction-from-a-disk-onto-its-boundary]])

[F2] For $n\ge1$, a continuous fixed-point-free map $f:D^n\to D^n$ would produce a continuous retraction $r:D^n\to S^{n-1}$ by following the ray from $f(x)$ through $x$ to the boundary. ([[lem-a-fixed-point-free-ball-map-produces-a-boundary-retraction]])

## Proof

1.1 When $n=0$, $D^0$ is a singleton, and its unique point is fixed by every self-map. [given]

2.1 For $n\ge1$, a fixed-point-free map would give a continuous boundary retraction by F2. F1 excludes precisely such a retraction in every positive dimension. Therefore a fixed point exists. [F1, F2] ∎
