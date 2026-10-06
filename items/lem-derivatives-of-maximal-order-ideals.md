---
id: "lem-derivatives-of-maximal-order-ideals"
kind: "lemma"
title: "Derivative ideals of a maximal-order marked ideal have maximal order"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 6
deps:
  - def-field
  - def-ideal-of-derivatives
  - def-maximal-order-and-tangent-directions
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
---

## Statement

Assume $\mu\ge1$ and either $\operatorname{char}K=0$ or $K$ perfect with $\operatorname{char}K=p>\mu$ ([[def-field]]). If $(\mathcal I,E,\mu)$ is a marked ideal of maximal order, then for every $0\le i\le\mu$, the derivative marked ideal $\mathcal D^i(\mathcal I,\mu)=(\mathcal D^i(\mathcal I),\mu-i)$ is of maximal order ([[def-ideal-of-derivatives]]).

## Facts & Assumptions

**Given:** A field $K$, a maximal-order marked ideal $(\mathcal I,E,\mu)$ with $\mu\ge1$, and either $\operatorname{char}K=0$ or $K$ perfect with $\operatorname{char}K=p>\mu$.

[F1] [[def-maximal-order-and-tangent-directions]]: In characteristic zero or perfect characteristic $p>\nu$, for a marking $\nu\ge1$, maximal order is equivalent to $\mathcal D^\nu(\mathcal A)=\mathcal O_X$.

[F2] [[def-ideal-of-derivatives]]: $\mathcal D^i(\mathcal I,\mu)=(\mathcal D^i(\mathcal I),\mu-i)$ and the recursive definition gives $\mathcal D^a(\mathcal D^b(\mathcal I))=\mathcal D^{a+b}(\mathcal I)$ in every characteristic.

## Proof

1.1 By maximality and the safe-characteristic hypothesis, $\mathcal D^\mu(\mathcal I)=\mathcal O_X$ by [F1]. For $0\le i\le\mu$, the recursive identity in [F2] gives $\mathcal D^{\mu-i}(\mathcal D^i(\mathcal I))=\mathcal D^\mu(\mathcal I)=\mathcal O_X$. [F1, F2, given]

2.1 If $\mu-i\ge1$, the field remains in characteristic zero or has $p>\mu\ge\mu-i$, so [F1] implies that $\mathcal D^i(\mathcal I,\mu)$ is of maximal order. If $i=\mu$, its residual marking is zero and its ideal is $\mathcal O_X$, which is maximal order directly. This proves the assertion for every $i$. [F1, F2, step 1.1] ∎