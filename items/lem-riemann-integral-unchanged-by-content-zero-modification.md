---
id: lem-riemann-integral-unchanged-by-content-zero-modification
kind: lemma
title: "Changing a bounded integrand on a content-zero set does not change its Riemann integral"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-riemann-integral-over-a-jordan-set, def-null-and-content-zero-in-rn, lem-finite-cube-covers-admit-grid-control, thm-multidimensional-riemann-criterion, thm-multidimensional-integral-properties]
justified_by: []
aliases: []
landmark: true
short: "Content-zero modifications preserve integrals"
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "M. E. Taylor, Introduction to Analysis in Several Variables, §3.1"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
    - title: "W. F. Trench, Introduction to Real Analysis, §7.3"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/TRENCH_REAL_ANALYSIS.PDF"
pipeline_run: null
---

## Statement

Let $E\subseteq\mathbb R^m$ be bounded and Jordan measurable, let $f,g:E\to\mathbb R$ be bounded, and suppose $\{x\in E:f(x)\ne g(x)\}$ has content zero. Then $f$ is Riemann integrable over $E$ if and only if $g$ is, and when they are integrable their integrals are equal.

## Facts & Assumptions

**Given:** The set and functions of the Statement, a nondegenerate bounding rectangle $Q\supseteq E$, their zero extensions $\widetilde f,\widetilde g$ to $Q$, and $N:=\{x\in E:f(x)\ne g(x)\}$.

[L1] Riemann integrability over $E$ means integrability of the zero extension on $Q$ ([[def-riemann-integral-over-a-jordan-set]]).

[L2] A set has content zero when every positive volume allowance admits a finite closed-cube cover within that allowance ([[def-null-and-content-zero-in-rn]]).

[L3] If a subset of a rectangle is covered by finitely many rectangles of total volume $V$, then a grid exists whose cells meeting the set have total volume below $V+\eta$ ([[lem-finite-cube-covers-admit-grid-control]]).

[L4] A bounded function on a nondegenerate rectangle is Riemann integrable exactly when grids can make its upper-minus-lower sum arbitrarily small ([[thm-multidimensional-riemann-criterion]]).

[L5] Proper multidimensional Riemann integrals are linear ([[thm-multidimensional-integral-properties]]).

## Proof

**Proof technique:** cases.

1.1 Put $h:=\widetilde g-\widetilde f$. It is bounded, vanishes on $Q\setminus N$, and has some bound $|h|\le M$. [L1, algebra]

2.1 In the case $M=0$, the function $h$ is identically zero, hence integrable with integral zero. [assume-case zero, step 1.1, L4]

2.2 In the case $M>0$, given $\varepsilon>0$, [L2] covers $N$ by finitely many cubes of total volume below $\varepsilon/(4M)$, and [L3] gives a grid whose cells meeting $N$ have total volume below $\varepsilon/(2M)$. On all other cells $h=0$, while on a cell meeting $N$ its oscillation is at most $2M$, so the total Darboux gap is below $\varepsilon$. Thus [L4] makes $h$ integrable; the bounds $-M1_N\le h\le M1_N$ with the same grids force its integral to be zero. [assume-case pos, step 1.1, L2, L3, L4, choose]

3.1 The two cases exhaust $M\ge0$, so $h$ is integrable with integral zero. If $f$ is integrable, then $\widetilde g=\widetilde f+h$ is integrable and has the same integral by [L5]. [step 2.1, step 2.2, L5, cases-exhaustive]

4.1 Interchanging $f$ and $g$ applies step 3.1 to $-h$, proving the reverse integrability implication and the same equality of values. [step 1.1, step 3.1, L5] ∎
