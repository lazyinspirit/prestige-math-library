---
id: def-confidence-set-and-coverage
kind: definition
title: Confidence sets and coverage
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [def-statistical-experiment, def-real-numbers,
       cor-cauchy-reals-lub-complete]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Anna Mikusheva, MIT 14.381, Lecture 11: Confidence Sets, §1, PDF p. 1"
      url: "https://ocw.mit.edu/courses/14-381-statistical-method-in-economics-fall-2018/6a7fdee0c759b8ac985bf28a553acb24_MIT14_381F18_lec11.pdf"
    - title: "Karl B. Gregory, USC STAT 713, Lecture 14: Confidence Intervals and Sets, slides 2–3, PDF pp. 2–4"
      url: "https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_14_slides_annotated.pdf"
---

## Definition

Let $\mathsf E=((\mathcal X,\mathcal A),(P_\theta)_{\theta\in\Theta})$ be a
statistical experiment as in [[def-statistical-experiment]], and assume
$\Theta\ne\varnothing$. A **confidence-set procedure** is a map
$C:\mathcal X\to\mathcal P(\Theta)$, where
$\mathcal P(\Theta):=\{A:A\subseteq\Theta\}$, such that, for every
$\eta\in\Theta$, its
membership section
$$C_\eta:=\{x\in\mathcal X:\eta\in C(x)\}$$
belongs to $\mathcal A$. Its **coverage at $\theta$** is
$c_C(\theta):=P_\theta(C_\theta)$, and its **confidence level** is
$\inf_{\theta\in\Theta}c_C(\theta)$, the greatest lower bound of those
coverage values. For $0\le\alpha\le1$, it has coverage
at least $1-\alpha$ if $P_\theta(C_\theta)\ge1-\alpha$ for every
$\theta\in\Theta$.

Only membership sections need to be measurable; no sigma-algebra on the
parameter set is assumed. The parameter is fixed in the repeated-sampling
coverage probability.
