---
id: lem-standard-normal-cdf-is-continuous-and-strictly-increasing
kind: lemma
title: The standard normal CDF is continuous and strictly increasing
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-standard-normal-and-normal-laws
  - thm-derivative-of-exponential
  - thm-extreme-value-r
  - thm-continuity-from-below-for-measures
  - thm-continuity-from-above-for-measures
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Jason D. Lee, Dennis L. Sun, Yuekai Sun, and Jonathan E. Taylor, Exact Post-Selection Inference, with Application to the Lasso"
      url: "https://arxiv.org/pdf/1311.6238"
    - title: "Daniel García Rasines, LTCC Week 3: Selective Inference"
      url: "https://ltcc.ac.uk/media/london-taught-course-centre/LTCC_week3.pdf"
---

## Statement

Assume the Axiom of Choice. Let $\Phi(x)=P(Z\le x)$ for $Z\sim N(0,1)$. Then $\Phi$ is continuous and strictly increasing on $\mathbb R$, with $\lim_{x\to-\infty}\Phi(x)=0$ and $\lim_{x\to+\infty}\Phi(x)=1$.

## Facts & Assumptions

**Given:** The Axiom of Choice and the standard normal law.

[A1] The Axiom of Choice is assumed in the current definition of the standard normal law. [[def-axiom-of-choice]]

[F1] The standard normal law has density $\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$ and total mass one. [[def-standard-normal-and-normal-laws]]

[F2] The real exponential function is smooth, so the displayed normal density is continuous. [[thm-derivative-of-exponential]]

[F3] A continuous real-valued function on a nonempty compact subset of $\mathbb R$ attains finite maximum and minimum values. [[thm-extreme-value-r]]

[F4] Measures are continuous along increasing sequences of measurable sets. [[thm-continuity-from-below-for-measures]]

[F5] A measure finite on one set of a decreasing sequence is continuous along that sequence. [[thm-continuity-from-above-for-measures]]

## Proof

1.1 The density $\phi$ in [F1] is positive and continuous by [F2]. Fix $a<b$. By [F3], $\phi$ attains a minimum $c$ on $[a,b]$; since $\phi$ is positive at every point, $c>0$. The density formula and additivity over $(-\infty,a]\sqcup(a,b]$ give $\Phi(b)-\Phi(a)=\int_{(a,b]}\phi(x)\,dx\ge c(b-a)>0$, so $\Phi$ is strictly increasing. [A1, F1, F2, F3, algebra]

1.2 Fix $x\in\mathbb R$. By [F3], $\phi$ is bounded by some finite $M$ on the compact interval $[x-1,x+1]$. If $|y-x|<1$, then $|\Phi(y)-\Phi(x)|\le M|y-x|$ by integrating the density over the interval between $x$ and $y$. Letting $y\to x$ proves continuity at $x$, and $x$ was arbitrary. [A1, F1, F2, F3, algebra]

2.1 The sets $(-\infty,n]$ increase to $\mathbb R$, so [F4] and the total mass in [F1] give $\lim_{n\to\infty}\Phi(n)=1$. The sets $(-\infty,-n]$ decrease to the empty set and have finite measure, so [F5] gives $\lim_{n\to\infty}\Phi(-n)=0$. Monotonicity from step 1.1 then gives the two stated limits at infinity. [A1, F1, F4, F5, step 1.1] ∎