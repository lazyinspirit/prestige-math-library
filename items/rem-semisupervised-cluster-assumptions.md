---
id: rem-semisupervised-cluster-assumptions
kind: remark
title: "Structural assumptions behind semi-supervised gains"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-finite-round-confidence-pseudolabeling
  - alg-graph-harmonic-label-propagation
  - thm-unlabeled-law-alone-does-not-identify-labels
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Xiaojin Zhu, Zoubin Ghahramani, and John Lafferty, Semi-Supervised Learning Using Gaussian Fields and Harmonic Functions, ICML 2003"
      url: "https://mlg.eng.cam.ac.uk/pub/pdf/ZhuGhaLaf03a.pdf"
    - title: "Olivier Chapelle, Bernhard Schölkopf, and Alexander Zien (editors), Semi-Supervised Learning, MIT Press, 2006"
      url: "https://mcube.lab.nycu.edu.tw/~cfung/docs/books/chapelle2006semi_supervised_learning.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Remarks

Here semi-supervised input means labeled examples together with unlabeled examples or their feature marginal $P_X$. The finite harmonic extension uses the supplied graph weights to prefer scores that vary little across large-weight edges; it does not identify the ground-truth conditional label law $P(Y\mid X)$. A cluster assumption posits that points in the same cluster are likely to share a class; low-density separation posits that a classifier boundary lies in a region of small $P_X$-mass; graph smoothness favors scores that vary little across edges with large supplied weights. These are additional modeling assumptions relating $P_X$ and $P(Y\mid X)$, not consequences of observing $P_X$. The pseudo-label procedure is also a training heuristic. This batch states no general population-risk improvement, consistency, minimax, calibration, or graph-limit theorem. The exact harmonic maximum principle concerns the supplied boundary labels, not unknown true labels.

## Remarks references

[[alg-finite-round-confidence-pseudolabeling]]: the finite pseudo-label procedure returns a fixed training assignment and makes no risk guarantee.

[[alg-graph-harmonic-label-propagation]]: the finite graph solver returns score candidates and residual statuses; only zero-residual exact solutions are the harmonic extension, and neither certifies true labels.

[[thm-unlabeled-law-alone-does-not-identify-labels]]: identical feature marginals and observed labels can leave positive-mass labels unidentified.

[Zhu, Ghahramani, and Lafferty, Semi-Supervised Learning Using Gaussian Fields and Harmonic Functions, §2](https://mlg.eng.cam.ac.uk/pub/pdf/ZhuGhaLaf03a.pdf)

[Chapelle, Schölkopf, and Zien, Semi-Supervised Learning, Chapter 1 §1.2.2 and §§1.3.2–1.3.3, and Chapter 11 §11.6](https://mcube.lab.nycu.edu.tw/~cfung/docs/books/chapelle2006semi_supervised_learning.pdf)
