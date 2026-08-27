---
id: cex-mass-escapes-to-infinity-under-pointwise-convergence
kind: counterexample
title: "Mass can escape to infinity under pointwise convergence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-fatou-lemma]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory Notes, Example 4.20"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
---

## Statement refuted

Pointwise convergence of nonnegative integrable functions forces convergence of
their integrals.

## Facts & Assumptions

**Given:** The travelling-mass sequence $f_n:=\chi_{[n,n+1]}$ on $\mathbb R$.

[L1] Fatou's lemma only compares $\int\liminf f_n$ with $\liminf\int f_n$ ([[thm-fatou-lemma]]).

## Counterexample

**Proof technique:** direct.

1.1 For each fixed $x\in\mathbb R$, the value $f_n(x)$ is eventually $0$, so $f_n(x)\to0$. [given]

2.1 Yet $\int f_n\,d\lambda=1$ for every $n$. Thus the mass has escaped to infinity instead of disappearing, and the Statement is false. This is the strict case already permitted by [L1]. [step 1.1, L1, algebra] ∎
