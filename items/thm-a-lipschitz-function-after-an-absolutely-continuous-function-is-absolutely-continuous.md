---
id: thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous
kind: theorem
title: "A Lipschitz function after an absolutely continuous function is absolutely continuous"
status: draft
origin: pipeline
deps: [def-absolutely-continuous-function]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
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

If $F\in AC[a,b]$ and $h$ is Lipschitz on $F([a,b])$, then $h\circ F\in AC[a,b]$.

## Facts & Assumptions

**Given:** $F\in AC[a,b]$ and a Lipschitz constant $L$ for $h$ on its image.

## Proof

**Proof technique:** direct.

1.1 For $\varepsilon>0$, use the AC modulus of $F$ from [[def-absolutely-continuous-function]] with tolerance $\varepsilon/L$ when $L>0$. [given, choose]

2.1 Sum $|h(F(v_j))-h(F(u_j))|\le L|F(v_j)-F(u_j)|$ over a short disjoint family. [step 1.1, algebra]

3.1 If $L=0$ the composite is constant; otherwise step 2.1 is the AC condition. [step 2.1] ∎
