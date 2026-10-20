---
id: def-bradley-terry-preference-model
kind: definition
title: Finite Bradley–Terry preference model
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-binary-logistic-and-multiclass-softmax-models
justified_by: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Rafael Rafailov et al., Direct Preference Optimization: Your Language Model is Secretly a Reward Model, arXiv:2305.18290v3 (2024)"
      url: "https://arxiv.org/pdf/2305.18290v3"
    - title: "Purdue course lecture notes, Preference Optimization (PrefOpt)"
      url: "https://www.cs.purdue.edu/homes/ribeirob/courses/Spring2026/lectures/18-pref-opt/PrefOpt.html"
---

## Definition

Let $X$ be a finite nonempty prompt set. For each $x\in X$, let $Y_x$ be a finite response set with at least two elements, and let $r_x:Y_x\to\mathbb R$ be a real-valued reward. The Bradley–Terry model assigns to each ordered pair of distinct responses $a,b\in Y_x$ the two-outcome comparison $a\succ b$ or $b\succ a$, with
$$\Pr(a\succ b\mid x)=\sigma\bigl(r_x(a)-r_x(b)\bigr),\qquad \sigma(t)=\frac{1}{1+e^{-t}}.$$
Here $a\succ b$ means that response $a$ is preferred to response $b$ at prompt $x$; the probability of the reverse outcome is $1-\Pr(a\succ b\mid x)=\sigma(r_x(b)-r_x(a))$. This is a statistical model for pairwise comparisons, not a universal law of human preference.

## Definition references

[[def-binary-logistic-and-multiclass-softmax-models|Binary logistic and multiclass softmax models]]: defines the same sigmoid $\sigma(t)=(1+e^{-t})^{-1}$ for finite real $t$.

[Rafailov et al., §3, Bradley–Terry preference model](https://arxiv.org/pdf/2305.18290v3)

[Purdue PrefOpt course notes, §2, Bradley–Terry model](https://www.cs.purdue.edu/homes/ribeirob/courses/Spring2026/lectures/18-pref-opt/PrefOpt.html)
