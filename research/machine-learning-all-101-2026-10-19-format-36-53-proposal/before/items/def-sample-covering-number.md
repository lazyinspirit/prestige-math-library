---
id: def-sample-covering-number
kind: definition
title: "Proper Frobenius covering numbers"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-frobenius-matrix-norm]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter L. Bartlett, Dylan J. Foster, and Matus Telgarsky, Spectrally-normalized margin bounds for neural networks, §3.2"
      url: "https://arxiv.org/pdf/1706.08498"
---

## Definition

Let $n,m\ge1$, let $U$ be a nonempty subset of the real matrix space $\mathbb R^{n\times m}$, and let $\epsilon>0$. A **proper $\epsilon$-cover** of $U$ in Frobenius norm is a finite subset $V\subseteq U$ such that every $X\in U$ has some $Y\in V$ with $\lVert X-Y\rVert_F\le\epsilon$. The **proper Frobenius covering number** $N_F(U,\epsilon)$ is the least cardinality of such a cover when one exists, and is $+\infty$ otherwise. The cover is proper because its centers belong to $U$.

## Definition references

[[def-frobenius-matrix-norm]]: defines $\lVert X-Y\rVert_F$ as the Euclidean norm of the full matrix-entry list.

[Bartlett, Foster, and Telgarsky, §3.2](https://arxiv.org/pdf/1706.08498): defines the covering number using finite centers in the covered set.
