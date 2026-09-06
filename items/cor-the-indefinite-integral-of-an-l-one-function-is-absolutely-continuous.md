---
id: cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous
kind: corollary
title: "The indefinite integral of an $L^1$ function is absolutely continuous"
status: draft
origin: pipeline
deps: [def-indefinite-lebesgue-integral-on-a-compact-interval, thm-absolute-continuity-of-the-integral]
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
    - title: "Christopher Heil, Absolute Continuity and the Banach--Zaretsky Theorem, Lemmas 14 and 22"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
---

## Statement

For $f\in L^1[a,b]$, the function $I_f(x)=\int_a^x f$ is absolutely continuous.

## Facts & Assumptions

**Given:** $f\in L^1[a,b]$ and its indefinite integral $I_f$.

## Proof

**Proof technique:** direct.

1.1 Given $\varepsilon>0$, apply [[thm-absolute-continuity-of-the-integral]] to $|f|$ and obtain $\delta>0$. [given, choose]

2.1 For disjoint intervals $[u_j,v_j]$ of total length below $\delta$, their union $E$ has measure below $\delta$, and $\sum_j|I_f(v_j)-I_f(u_j)|\le\int_E|f|<\varepsilon$. [step 1.1, algebra]

3.1 This is the defining finite-family condition for absolute continuity; the empty family and $a=b$ give zero sums. [step 2.1] ∎
