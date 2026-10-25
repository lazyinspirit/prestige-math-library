---
id: cex-luzin-property-n-does-not-imply-absolute-continuity
kind: counterexample
title: "Luzin's property $(N)$ does not imply absolute continuity"
status: published
origin: pipeline
deps: [def-countable-choice, def-luzin-property-n-on-a-compact-interval, thm-banach-zarecki-characterisation-of-absolute-continuity]
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
    - title: "Christopher Heil, Absolute Continuity and the Banach--Zaretsky Theorem, §3.4"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
---

## Statement refuted

Luzin's property $(N)$ implies absolute continuity.

## Facts & Assumptions

**Given:** Countable choice, $F(0)=0$, and $F(x)=x\sin(1/x)$ for $0<x\le1$.

## Counterexample

**Proof technique:** direct.

1.1 On each $[1/(n+1),1/n]$, $F$ is $C^1$, hence maps null sets to null sets. Together with the singleton $\{0\}$ this countable cover proves that $F$ has $(N)$ in the sense of [[def-luzin-property-n-on-a-compact-interval]]. [given]

2.1 $F'(x)=\sin(1/x)-\cos(1/x)/x$ for $x>0$; alternating subintervals again give infinite variation. Thus $F$ is not BV. [step 1.1, algebra]

3.1 The reverse implication in [[thm-banach-zarecki-characterisation-of-absolute-continuity]] requires BV, so this $(N)$ function is not AC. [step 2.1] ∎
