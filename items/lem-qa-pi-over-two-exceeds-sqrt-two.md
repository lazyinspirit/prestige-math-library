---
id: lem-qa-pi-over-two-exceeds-sqrt-two
kind: lemma
title: "The half-turn constant exceeds $\\sqrt2$"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps: [def-pi-via-first-positive-cosine-zero, thm-cosine-has-a-smallest-positive-zero, lem-sine-positive-and-cosine-decreasing-on-zero-two, def-sine-and-cosine-by-power-series, thm-alternating-series-test, thm-reals-cauchy-complete, thm-of-square-roots]
axiom_use: "No choice axiom is used; the alternating-series estimate and nonnegative square root are uniquely determined."
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "C. Schmeiser, Introduction to Analysis"
      url: "https://homepage.univie.ac.at/christian.schmeiser/einfanalysis.pdf"
      locator: "§6.8, PDF pp.84–86: defines pi as twice the unique cosine zero, establishes cosine strict decrease on [0,2], and states the zero; §6.7, PDF pp.83–84, gives the cosine power series and alternating remainder bound. The complete sqrt(2) tail comparison is proved locally."
---

## Statement

With $\pi$ defined by the first positive zero of cosine, one has
$$\sqrt2<\frac\pi2.$$

## Facts & Assumptions

**Given:** The cosine power series, its strict decrease on $[0,2]$, the first positive zero $\gamma=\pi/2$, and the nonnegative square root $\sqrt2$.

[F1] The first positive cosine zero is the unique $\gamma\in(0,2)$ with $\cos\gamma=0$, and $\pi/2=\gamma$ ([[thm-cosine-has-a-smallest-positive-zero]], [[def-pi-via-first-positive-cosine-zero]]).

[F2] Cosine is given by its alternating power series and is strictly decreasing on $[0,2]$ ([[def-sine-and-cosine-by-power-series]], [[lem-sine-positive-and-cosine-decreasing-on-zero-two]]).

[F3] For a nonincreasing alternating series with terms tending to zero, its sum lies between consecutive partial sums ([[thm-alternating-series-test]]).

[F4] The real numbers form a complete totally ordered field, so each nonnegative real has a unique nonnegative square root ([[thm-reals-cauchy-complete]], [[thm-of-square-roots]]).

## Proof

**Proof technique:** direct.

**Given:** The facts above.

1.1 Let $x=\sqrt2$, so $x>0$ and $x^2=2$ by [F4]. For $k\ge2$ put $a_k=x^{2k}/(2k)!$; then $a_{k+1}/a_k=2/((2k+1)(2k+2))\le1/15<1$, so $(a_k)_{k\ge2}$ decreases to zero. In the cosine series [F2], the terms for $k=0,1$ cancel because $1-x^2/2=0$. Reindexing the remaining tail as an alternating series gives first two partial sums $a_2$ and $a_2-a_3$; [F3] bounds its sum below by $a_2-a_3>0$. Thus $\cos x>0$. [given, F2, F3, F4, algebra]

2.1 One has $x<2$: otherwise $x\ge2$ and $x+2>0$ would imply $x^2-4=(x-2)(x+2)\ge0$, contradicting $x^2=2<4$ from step 1.1. Hence $x\in(0,2)$. [given, F4, step 1.1, algebra]

3.1 By [F1], $\gamma=\pi/2\in(0,2)$ and $\cos\gamma=0$. If $x\ge\gamma$, strict decrease of cosine on $[0,2]$ from [F2] would give $\cos x\le\cos\gamma=0$, contradicting step 1.1. Therefore $\sqrt2=x<\gamma=\pi/2$. [given, F1, F2, step 1.1, step 2.1] ∎
