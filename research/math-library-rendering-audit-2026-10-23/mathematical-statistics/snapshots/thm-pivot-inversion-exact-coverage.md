---
id: thm-pivot-inversion-exact-coverage
kind: theorem
title: Coverage from pivot inversion and exact calibration
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-confidence-set-and-coverage
  - def-pivot
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Anna Mikusheva, MIT 14.381, Lecture 11: Confidence Sets, §2, PDF pp. 2–3"
      url: "https://ocw.mit.edu/courses/14-381-statistical-method-in-economics-fall-2018/6a7fdee0c759b8ac985bf28a553acb24_MIT14_381F18_lec11.pdf"
    - title: "Karl B. Gregory, USC STAT 713, Lecture 14: Confidence Intervals and Sets, slides 6 and 9, PDF pp. 6 and 14"
      url: "https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_14_slides_annotated.pdf"
---

## Statement

Let $\mathsf E=((\mathcal X,\mathcal A),(P_\theta)_{\theta\in\Theta})$ be an
experiment with nonempty $\Theta$. Let $q_\theta:\mathcal X\to S$ be a
pivot with common law $\nu$, and let $B\in\mathcal S$. Define
$$C(x):=\{\theta\in\Theta:q_\theta(x)\in B\}$$
If $\nu(B)\ge1-\alpha$, then $C$ is a confidence set with coverage at
least $1-\alpha$. If $\nu(B)=1-\alpha$, its coverage is exactly
$1-\alpha$ for every parameter value. For an interval $B=[a,b]$ in
$\mathbb R$, exactness requires calibration of the actual probability
$\nu([a,b])$; quantile labels alone do not remove endpoint atoms.

## Facts & Assumptions

**Given:** A nonempty parameter set $\Theta$, a statistical experiment,
$0\le\alpha\le1$, a pivot $q_\theta$ with common law $\nu$, and a
measurable acceptance set $B$ with $\nu(B)\ge1-\alpha$.

[F1] [[def-pivot]]: each section $q_\theta$ is measurable and has pushforward
law $\nu$, independent of $\theta$.

[F2] [[def-confidence-set-and-coverage]]: a set-valued procedure is measurable
when every parameter-membership section is measurable, and coverage is the
probability of that section under the corresponding $P_\theta$.

## Proof

1.1 For each $\eta\in\Theta$, the membership section of $C$ is $\{x:\eta\in C(x)\}=q_\eta^{-1}(B)$. It is in $\mathcal A$ because $q_\eta$ is measurable and $B\in\mathcal S$. Thus $C$ is a confidence-set procedure by [F2]. [given, F1, F2]

2.1 For every $\theta\in\Theta$, $P_\theta\{\theta\in C(X)\}=P_\theta(q_\theta^{-1}(B))=\nu(B)\ge1-\alpha$. Equality holds for every $\theta$ when $\nu(B)=1-\alpha$; measurability was established in step 1.1. [given, F1, F2, step 1.1, algebra] ∎
