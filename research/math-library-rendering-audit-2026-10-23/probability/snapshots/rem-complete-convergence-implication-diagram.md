---
id: rem-complete-convergence-implication-diagram
kind: remark
title: "Complete convergence implication diagram"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-almost-sure-convergence-implies-convergence-in-probability, thm-convergence-in-probability-implies-convergence-in-distribution, thm-lp-convergence-implies-convergence-in-probability, thm-lq-convergence-implies-lp-convergence-on-a-probability-space]
sources:
  references:
    - title: "S. Roch, Lecture 3: Modes of convergence, Theorem 3.12"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes3.pdf"
verification:
  audited: 2026-09-07
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

The proved arrows are
$$L^q\ (q>p)\Longrightarrow L^p\Longrightarrow\text{in probability}\Longrightarrow\text{in distribution},$$
and almost-sure convergence also implies convergence in probability. The only reverse implication here is distributional convergence to a constant.

None of the displayed implications reverses in general. On $(0,1)$, shrinking
spikes $(n+1)^{1/p}\mathbf1_{(0,1/(n+1))}$ converge almost surely and in probability
but not in $L^p$, while the dyadic typewriter sequence converges in every
finite $L^p$ but not almost surely. If $X$ is symmetric on $\{-1,1\}$, the
constant sequence $X_n=-X$ has the law of $X$ but does not converge to $X$ in
probability. Independent indicators with probabilities $1/(n+1)$ converge in
probability but, by Borel--Cantelli, not almost surely. Finally,
$(n+1)^{1/q}\mathbf1_{(0,1/(n+1))}$ converges in $L^p$ but not $L^q$ when $p<q$.
The shrinking spikes $(n+1)\mathbf1_{(0,1/(n+1))}$ also converge almost surely while
their expectations remain equal to one.
