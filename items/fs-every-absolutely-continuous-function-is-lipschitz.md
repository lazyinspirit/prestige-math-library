---
id: fs-every-absolutely-continuous-function-is-lipschitz
kind: false-statement
title: "Every absolutely continuous function is Lipschitz"
status: draft
origin: pipeline
deps: []
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

Every absolutely continuous function on a compact interval is Lipschitz.

## Facts & Assumptions

**Given:** $F(x)=\sqrt{x}$ on $[0,1]$.

## Refutation

**Proof technique:** direct.

1.1 Since $F'(x)=1/(2\sqrt{x})$ belongs to $L^1[0,1]$, $F(x)=\int_0^xF'$ is absolutely continuous. [given]

2.1 If $F$ were $L$-Lipschitz, then $\sqrt{x}\le Lx$ for $x>0$, hence $1/\sqrt{x}\le L$, which fails as $x\downarrow0$. [step 1.1, algebra]

3.1 Therefore $F$ is AC but not Lipschitz. [step 2.1] ∎
