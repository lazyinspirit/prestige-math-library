---
id: thm-an-absolutely-continuous-function-after-a-monotone-lipschitz-function-is-absolutely-continuous
kind: theorem
title: "An absolutely continuous function after a monotone Lipschitz function is absolutely continuous"
status: published
origin: pipeline
deps: [def-absolutely-continuous-function]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach--Zaretsky Theorem, §3.2"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
---

## Statement

If $h\in AC[c,d]$ and $g:[a,b]\to[c,d]$ is monotone and $L$-Lipschitz, then
$h\circ g\in AC[a,b]$.

## Facts & Assumptions

**Given:** $h\in AC[c,d]$ and monotone $L$-Lipschitz $g$.

## Proof

**Proof technique:** direct.

1.1 Choose the AC modulus $\eta$ of $h$ from [[def-absolutely-continuous-function]] and set $\delta=\eta/L$ for $L>0$. [given, choose]

2.1 Images under monotone $g$ of a disjoint ordered interval family have disjoint interiors, and their total length is at most $L$ times the original total length. [step 1.1, algebra]

3.1 Apply the AC condition for $h$ to these image intervals. If $L=0$, $g$ and the composite are constant. [step 2.1] ∎
