---
id: def-online-decision-protocol
kind: definition
title: "Online decision protocol"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-random-element-and-real-random-variable]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§1.1, PDF pp. 23–24; §1.2.1, PDF pp. 24–25."
    - title: "Tengyu Ma, Lecture Notes for Machine Learning Theory, Chapter 11"
      url: "https://pages.cs.wisc.edu/~kandasamy/courses/25fall-cs861/lectures/tengyu_ma_notes.pdf"
      locator: "§§11.1.1–11.2, PDF pp. 148–149; action/loss timing and the general online optimization protocol."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

Fix a positive integer horizon $T$, a nonempty action set $K$, and, when choices or the environment are randomized, a probability space $(\Omega,\mathcal F,\mathbb P)$. An online decision protocol has rounds $t=1,\ldots,T$. Before round $t$, the learner has the history $h_{t-1}$ consisting of its earlier choices and all feedback and loss information revealed in earlier rounds. It chooses $x_t\in K$ using only $h_{t-1}$ and any learner-private randomization available by that time. In a randomized protocol, $X_t$ is a measurable random element of $K$, meaning a measurable map from $(\Omega,\mathcal F)$ into $K$ equipped with its declared measurable structure. The environment supplies a real-valued loss function $f_t:K\to\mathbb R$; it may have fixed $f_t$ before the choice or choose it after the choice, as specified by the environment model, but the learner does not observe $f_t$ before choosing $x_t$. The learner incurs loss $f_t(x_t)$ and then receives feedback about round $t$ according to the feedback model. The history $h_t$ adds $x_t$, the feedback received, and any part of $f_t$ explicitly revealed in round $t$. No convexity, boundedness, or regret guarantee is part of this protocol definition.

## Definition references

[[def-random-element-and-real-random-variable]]: a random element is a measurable map from a probability space into a measurable space.

[Elad Hazan, *Introduction to Online Convex Optimization*, second edition](https://arxiv.org/pdf/1909.05207): §1.1, PDF pp. 23–24.

[Tengyu Ma, *Lecture Notes for Machine Learning Theory*](https://pages.cs.wisc.edu/~kandasamy/courses/25fall-cs861/lectures/tengyu_ma_notes.pdf): §§11.1.1–11.2, PDF pp. 148–149.
