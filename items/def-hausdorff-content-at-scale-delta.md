---
id: "def-hausdorff-content-at-scale-delta"
kind: "definition"
title: "Hausdorff content at a prescribed scale"
deps: ["def-extended-diameter-for-hausdorff-covers", "def-nonnegative-extended-series", "def-real-power", "lem-extended-reals-complete"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Bishop–Peres, Fractals in Probability and Analysis, §1.2 pp.4–6
      url: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf
    - title: Fremlin, Measure Theory, 264A,D(b),K
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

Let $(X,d)$ be a metric space, $A\subseteq X$, $s\in[0,\infty)$ a finite real, and $0<\delta\le\infty$. A cover is a finite or countably infinite family $(U_j)$ of nonempty arbitrary subsets of $X$, with $A\subseteq\bigcup_jU_j$ and $\operatorname{diam}U_j\le\delta$. The empty family is permitted, and covers precisely the empty set. Define

$$\mathcal H^s_\delta(A)=\inf\left\{\sum_j(\operatorname{diam}U_j)^s:(U_j)\text{ is such a cover}\right\}.$$

Use [[def-extended-diameter-for-hausdorff-covers]] and the nonnegative extended sums of [[def-nonnegative-extended-series]]. For this covering cost only, define $r^0=1$ for every $r\in[0,\infty]$, including $0$ and $\infty$; for $s>0$, use [[def-real-power]] at finite bases and set $\infty^s=\infty$. Thus a nonempty singleton costs one when $s=0$, and zero when $s>0$. Finite covers are not padded with empty sets.

The infimum is in $[0,\infty]$, with $\inf\varnothing=\infty$ when there is no admissible cover; existence follows from [[lem-extended-reals-complete]]. The empty sum is zero. The value $\mathcal H^s_\infty$ is called **Hausdorff content**; $\mathcal H^s_\delta$ for finite $\delta$ is the scale approximation.
