---
id: cex-the-classical-composition-of-absolutely-continuous-functions-is-not-absolutely-continuous
kind: counterexample
title: "A classical composition of absolutely continuous functions is not absolutely continuous"
status: published
origin: pipeline
deps: [cex-the-composition-of-two-absolutely-continuous-functions-need-not-be-absolutely-continuous]
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

## Statement refuted

The composition of two absolutely continuous functions must be absolutely continuous.

## Facts & Assumptions

**Given:** $g(0)=0$, $g(x)=x^2\sin^2(1/x)$ for $x>0$, and $h(y)=\sqrt y$ on $[0,1]$.

## Counterexample

**Proof technique:** direct.

1.1 $g'$ is bounded on $(0,1]$ and $g'(0)=0$, so $g$ is Lipschitz and AC; $h'=1/(2\sqrt y)$ lies in $L^1[0,1]$, so $h$ is AC. [given, algebra]

2.1 $(h\circ g)(x)=|x\sin(1/x)|$ for $x>0$. On alternating half-waves its total variation has a positive contribution comparable to $1/n$; the harmonic sum diverges. [step 1.1, algebra]

3.1 Thus the composite is not BV and hence not AC, proving the general failure announced in [[cex-the-composition-of-two-absolutely-continuous-functions-need-not-be-absolutely-continuous]]. [step 2.1] ∎
