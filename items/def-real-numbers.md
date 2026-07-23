---
id: def-real-numbers
kind: definition
title: "The real numbers"
status: draft
origin: session
deps: [thm-cauchy-ring, lem-null-ideal]
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §5.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

The **real numbers** are the quotient ring

$$\mathbb{R} := \mathcal{C} / \mathcal{N}$$

of the ring of Cauchy sequences ([[thm-cauchy-ring]]) by the ideal of null
sequences ([[lem-null-ideal]]). The class of $(a_n)$ is written
$[(a_n)]$. Each rational $q$ maps to the class $\hat q$ of the constant
sequence $(q, q, q, \dots)$.

## Remarks

- Two Cauchy sequences define the same real exactly when their difference is a
  null sequence.
- That $\mathbb{R}$ is a field is [[thm-reals-field]]; its order is
  [[def-real-order]].
