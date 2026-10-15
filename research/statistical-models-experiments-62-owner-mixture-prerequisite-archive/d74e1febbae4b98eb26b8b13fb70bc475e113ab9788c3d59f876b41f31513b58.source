---
id: def-confidence-sequence
kind: definition
title: Confidence sequences
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-filtration-and-filtered-probability-space
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
    - title: "Steven R. Howard, Aaditya Ramdas, Jon McAuliffe and Jasjeet Sekhon, Time-Uniform, Nonparametric, Nonasymptotic Confidence Sequences, Introduction"
      url: https://arxiv.org/pdf/1810.08240
    - title: "Aaditya Ramdas, Peter Grunwald, Vladimir Vovk and Glenn Shafer, Game-Theoretic Statistics and Safe Anytime-Valid Inference, §2.8"
      url: https://arxiv.org/pdf/2210.01948
---

## Definition

Let $\Theta$ be a parameter set and $(P_\theta)_{\theta\in\Theta}$ a family of
probability laws on a common discrete filtered measurable space
$(\Omega,\mathcal F,(\mathcal F_t)_{t\ge0})$
[[def-filtration-and-filtered-probability-space]]. For
$\alpha\in(0,1)$, a **$(1-\alpha)$ confidence sequence** is a sequence of
set-valued rules $C_t(\omega)\subseteq\Theta$ such that, for each fixed
$\theta\in\Theta$, the membership event $\{\theta\in C_t\}$ belongs to
$\mathcal F_t$ for every $t$ and
$$P_\theta(\theta\in C_t\text{ for every }t\ge0)\ge1-\alpha.$$

The coverage is simultaneous over all discrete times. The definition makes no
claim of conditional-on-covariates coverage or validity under a changed
sampling law.
