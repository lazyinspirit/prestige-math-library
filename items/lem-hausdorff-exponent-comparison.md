---
id: "lem-hausdorff-exponent-comparison"
kind: "lemma"
title: "Increasing the exponent past finite measure gives zero"
deps: ["def-hausdorff-measure", "thm-real-power-laws"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Bishop–Peres Lemma 1.2.5; Fremlin 264Xe
      url: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

For $0\le s<t<\infty$ and finite $\delta>0$,

$$\mathcal H^t_\delta(A)\le\delta^{t-s}\mathcal H^s_\delta(A).$$

Consequently $\mathcal H^s(A)<\infty$ implies $\mathcal H^t(A)=0$.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Hausdorff values are small-scale suprema of diameter-power covering costs. [[def-hausdorff-measure]]

[F2] For positive bases the usual real-power multiplication laws hold. [[thm-real-power-laws]]

## Proof

1.1 For $0<r\le\delta$, $r^t=r^sr^{t-s}\le r^s\delta^{t-s}$. At $r=0$ the left side is zero; the right is zero for $s>0$ and $\delta^t$ for $s=0$. Thus the inequality holds for every admissible covering member. Summation and infimisation prove the fixed-scale bound; if no cover exists its right side is infinity. [F1, F2]

2.1 If $M=\mathcal H^s(A)<\infty$, then $\mathcal H^t_\delta(A)\le\delta^{t-s}M$. Given any fixed $\eta>0$, use all $0<\delta\le\eta$ and monotonicity to bound $\mathcal H^t_\eta(A)$ by a quantity tending to zero. Every scale value is therefore zero and so is the supremum. This includes $M=0$ and the empty set. [F1, step 1.1] ∎
