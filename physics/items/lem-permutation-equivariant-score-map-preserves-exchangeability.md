---
id: lem-permutation-equivariant-score-map-preserves-exchangeability
kind: lemma
title: "Permutation-equivariant scores preserve exchangeability"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-exchangeable-random-elements
  - def-conformal-nonconformity-score-and-rank-pvalue
  - lem-coordinate-maps-and-permutations-are-measurable-on-finite-products
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Jing Lei et al., Distribution-Free Predictive Inference for Regression, JASA 113(523) (2018), §2.1 and Remark 2.4"
      url: "https://arxiv.org/pdf/1604.04173"
    - title: "Ryan Tibshirani, Conformal Prediction, Advanced Topics in Statistical Learning, Spring 2024, §3"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/conformal.pdf"
---

## Statement

Let $Z=(Z_1,\ldots,Z_n)$ be an exchangeable random element of $\mathcal Z^n$,
and let $A:\mathcal Z^n\to\mathbb R^n$ be measurable and
permutation-equivariant in the sense of
[[def-conformal-nonconformity-score-and-rank-pvalue]]. Then $A(Z)$ is an
exchangeable real random vector.

## Facts & Assumptions

**Given:** The exchangeable data tuple and measurable permutation-equivariant score assignment in the statement.

[F1] Exchangeability means the law is invariant under every coordinate permutation. [[def-exchangeable-random-elements]]

[F2] The score assignment satisfies $A(\tau_\pi z)=\tau_\pi A(z)$ for every permutation. [[def-conformal-nonconformity-score-and-rank-pvalue]]

[F3] Coordinate permutations on finite product measurable spaces are measurable. [[lem-coordinate-maps-and-permutations-are-measurable-on-finite-products]]

## Proof

1.1 The measurable map $A$ sends $Z$ to a random vector by the composition rule for measurable maps; [F3] makes every coordinate permutation of that vector measurable, so its law is defined. [given, F2, F3]

2.1 For each permutation $\pi$, [F2] gives $\tau_\pi A(Z)=A(\tau_\pi Z)$. By exchangeability [F1], $\tau_\pi Z$ and $Z$ have the same law; applying the measurable map $A$ shows that $A(\tau_\pi Z)$ and $A(Z)$ have the same law. Hence $A(Z)$ is exchangeable. [F1, F2, step 1.1] ∎
