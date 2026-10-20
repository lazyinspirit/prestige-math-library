---
id: alg-coordinate-threshold-preprocessing
kind: algorithm
title: Coordinatewise threshold preprocessing
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: adversarial-robustness-and-robust-risk
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Ludwig Schmidt, Shibani Santurkar, Dimitris Tsipras, Kunal Talwar, and Aleksander Madry, Adversarially Robust Generalization Requires More Data, arXiv:1804.11285v2, Theorem 10"
      url: "https://arxiv.org/pdf/1804.11285v2"
    - title: "Zico Kolter and Aleksander Madry, Adversarial Robustness: Theory and Practice, NeurIPS 2018 tutorial notes, Chapter 2"
      url: "https://adversarial-ml-tutorial.org/linear_models/"
---

## Definition

Input: an integer $d\ge1$ and a vector $x\in\mathbb R^d$. Output $T(x)\in\{-1,+1\}^d$ with
$$T(x)_i= \begin{cases} +1,&x_i\ge0,\\ -1,&x_i<0 \end{cases} \qquad (1\le i\le d).$$

## Definition references

[Schmidt et al., thresholding operation and Theorem 10](https://arxiv.org/pdf/1804.11285v2).

[Kolter–Madry, Chapter 2, binary linear classifiers](https://adversarial-ml-tutorial.org/linear_models/).
