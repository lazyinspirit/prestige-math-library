---
id: thm-test-inversion-coverage
kind: theorem
title: Coverage from test inversion
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-confidence-set-and-coverage
  - def-test-size-and-power
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Anna Mikusheva, MIT 14.381, Lecture 11: Confidence Sets, §2, PDF p. 1"
      url: "https://ocw.mit.edu/courses/14-381-statistical-method-in-economics-fall-2018/6a7fdee0c759b8ac985bf28a553acb24_MIT14_381F18_lec11.pdf"
    - title: "Karl B. Gregory, USC STAT 713, Lecture 14: Confidence Intervals and Sets, slide 12, PDF p. 20"
      url: "https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_14_slides_annotated.pdf"
---

## Statement

Let $\mathsf E=((\mathcal Y,\mathcal G),(Q_\theta)_{\theta\in\Theta})$ be an
experiment with nonempty $\Theta$, and let $0\le\alpha\le1$. For each
$\eta\in\Theta$, let $A_\eta\in\mathcal G$ be the acceptance event of a
test of the point null $\theta=\eta$, on the full observation space,
including any auxiliary randomization. Suppose
$Q_\eta(A_\eta)\ge1-\alpha$ for every $\eta\in\Theta$.
Then $C(y):=\{\eta\in\Theta:y\in A_\eta\}$
is a confidence set with coverage at least $1-\alpha$.

The probability bound is the point-null level condition written in terms of
acceptance events. For a randomized test, a rejection-probability function on
the original data space is not itself an acceptance event; the auxiliary
randomization must be part of the observation before applying this statement.

## Facts & Assumptions

**Given:** An experiment on $(\mathcal Y,\mathcal G)$, a nonempty parameter
set $\Theta$, $0\le\alpha\le1$, and measurable events $A_\eta\in\mathcal G$
such that $Q_\eta(A_\eta)\ge1-\alpha$ for every $\eta$.

[F1] [[def-confidence-set-and-coverage]]: a confidence-set procedure has
measurable membership sections and coverage is the probability of the true
parameter's section.

[A1] For each $\eta$, $A_\eta$ is measurable and
$Q_\eta(A_\eta)\ge1-\alpha$.

## Proof

1.1 For each $\eta\in\Theta$, the membership section of $C$ is $\{y:\eta\in C(y)\}=A_\eta$, which belongs to $\mathcal G$ by [A1]. Therefore $C$ is a confidence-set procedure by [F1]. [given, A1, F1]

2.1 For any $\theta\in\Theta$, $Q_\theta\{\theta\in C(Y)\}=Q_\theta(A_\theta)\ge1-\alpha$. Taking the infimum over the nonempty $\Theta$ proves the asserted coverage level. [given, A1, F1, algebra] ∎

## Remarks

For a deterministic test of a simple null $\{\eta\}$ with a nonempty
alternative, the acceptance event $A_\eta$ is the complement of its
rejection event, so its test function is $\varphi_\eta=\mathbf1_{A_\eta^c}$.
By [[def-test-size-and-power]], its size is
$E_\eta\varphi_\eta=Q_\eta(A_\eta^c)$; level $\alpha$ therefore gives
$Q_\eta(A_\eta)=1-E_\eta\varphi_\eta\ge1-\alpha$. For a randomized test,
its rejection-probability function is not itself an event. Applying this
theorem then requires the realized auxiliary randomizer to be part of the
observation and the stated eventwise probability bound to hold on that full
observation space.
