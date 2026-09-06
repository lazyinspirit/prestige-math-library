---
id: fs-absolute-continuity-is-preserved-under-composition
kind: false-statement
title: "Absolute continuity is preserved under composition"
status: draft
origin: pipeline
deps: [thm-c1-lipschitz-ac-bv-hierarchy]
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

If $F$ and $G$ are absolutely continuous, then $F\circ G$ is absolutely continuous.

## Facts & Assumptions

**Given:** On $[0,1]$, let $g(0)=0$ and $g(x)=x^2\sin^2(1/x)$ for $x>0$, and let $h(y)=\sqrt y$.

## Refutation

**Proof technique:** direct.

1.1 The derivative of $g$ is bounded on $(0,1]$ and $g'(0)=0$, so $g$ is Lipschitz and AC. Also $h'(y)=1/(2\sqrt y)\in L^1[0,1]$, so $h$ is AC. [given, algebra]

2.1 For $x>0$, $(h\circ g)(x)=|x\sin(1/x)|$. Its successive alternating half-waves contribute a quantity comparable to $1/n$ to total variation, so the variation diverges. [step 1.1, algebra]

3.1 Every AC function on a compact interval has bounded variation by [[thm-c1-lipschitz-ac-bv-hierarchy]]. Hence $h\circ g$ is not AC, and the statement is false. [step 2.1] ∎
