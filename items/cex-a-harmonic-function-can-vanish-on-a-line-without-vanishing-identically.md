---
id: cex-a-harmonic-function-can-vanish-on-a-line-without-vanishing-identically
kind: counterexample
title: "A harmonic function can vanish on a line without being zero everywhere"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-plane-harmonic-function]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if a harmonic function vanishes on a line segment, then it
vanishes identically on its domain.

The witness is

$$u(x,y)=x.$$

It is harmonic on $\mathbb C$, vanishes on the whole $y$-axis, and is not the
zero function.

## Facts & Assumptions

**Given:** The function $u(x,y)=x$.

## Counterexample

**Proof technique:** direct.

1.1 One has $u_{xx}=0$ and $u_{yy}=0$, so $u_{xx}+u_{yy}=0$ and $u$ is harmonic on $\mathbb C$ by [[def-plane-harmonic-function]]. [algebra]

2.1 On the line $x=0$, the function $u$ vanishes identically, but $u(1,0)=1\ne0$. So vanishing on a line does not force vanishing everywhere. [step 1.1, algebra] ∎
