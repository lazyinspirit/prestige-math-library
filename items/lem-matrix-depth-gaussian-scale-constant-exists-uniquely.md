---
id: lem-matrix-depth-gaussian-scale-constant-exists-uniquely
kind: lemma
title: The Gaussian matrix-depth scale constant exists uniquely
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-standard-normal-and-normal-laws
  - thm-continuity-from-below-for-measures
  - thm-intermediate-value
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: AC is inherited from the standard-normal-law definition. The continuity, symmetry, strict monotonicity and intermediate-value argument uses no additional choice.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber's Contamination Model, Proposition 3.1"
      url: "https://arxiv.org/pdf/1506.00691"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., §1.6"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
dependency_level: 0
---

## Statement

Let $\Phi(t)=N(0,1)((-\infty,t])$. There is a unique $\beta>0$ such that
$\Phi(\sqrt\beta)=3/4$.

## Facts & Assumptions

**Given:** The standard normal probability law $N(0,1)$.

[F1] [[def-standard-normal-and-normal-laws]] defines $N(0,1)$ by the
positive even density $e^{-x^2/2}/\sqrt{2\pi}$, whose integral over
$\mathbb R$ is one.

[F2] [[thm-continuity-from-below-for-measures]]: measures of increasing
measurable sets converge to the measure of their union.

[F3] [[thm-intermediate-value]]: a continuous real function on a closed
interval takes every value between its endpoint values.

## Proof

1.1 Since the standard-normal density is bounded by $1/\sqrt{2\pi}$, $|\Phi(t+h)-\Phi(t)|\le |h|/\sqrt{2\pi}$; hence $\Phi$ is continuous. The density is positive, so its integral over every nonempty interval is positive and $\Phi$ is strictly increasing. Evenness and total mass one give $\Phi(0)=1/2$. Applying [F2] to $(-\infty,n]$ as $n\to\infty$ gives $\Phi(n)\to1$. [F1, F2, algebra]

2.1 Choose an integer $n$ with $\Phi(n)>3/4$. By [F3] on $[0,n]$, some $q\in(0,n)$ satisfies $\Phi(q)=3/4$; strict increase from step 1.1 makes $q$ unique. Then $\beta=q^2>0$ is the unique positive value with $\Phi(\sqrt\beta)=3/4$. [step 1.1, F3, construct] ∎