---
id: def-cft-2d-schwinger-hierarchy
kind: definition
title: Euclidean Schwinger hierarchy in two dimensions
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-schwartz-space-and-its-seminorms
  - def-tempered-distribution
  - lem-cft-euclidean-pullbacks-preserve-schwartz-space
dependency_roles:
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-tempered-distribution: mathematical-premise
  lem-cft-euclidean-pullbacks-preserve-schwartz-space: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Stephen J. Summers, A Perspective on Constructive Quantum Field Theory, arXiv:1203.3991v2
      url: https://arxiv.org/pdf/1203.3991
      locator: Section 3, PDF pp. 9–10; tempered Schwinger distributions, symmetry, Euclidean invariance, and the limits of the reconstruction statement.
    - title: Arthur Jaffe, Constructive Quantum Field Theory
      url: https://arthurjaffe.net/Assets/pdf/CQFT.pdf
      locator: Section 4, PDF pp. 5–6; secondary overview of Euclidean Green functions and reflection positivity.
category: quantum-field-theory-mathematics
page: cft-euclidean-axioms-and-sewing
reference: items/def-cft-2d-schwinger-hierarchy.md
---

## Definition

Let $E(2)=O(2)\ltimes\mathbb R^2$ be the group of Euclidean isometries $g(x)=Rx+a$ of $\mathbb R^2$, with $R\in O(2)$ and $a\in\mathbb R^2$. For each integer $n\geq1$, let $\mathcal S((\mathbb R^2)^n)$ be the Schwartz space of smooth functions whose derivatives decrease faster than every polynomial, with the seminorms given by polynomially weighted derivatives. A **scalar Euclidean Schwinger hierarchy** is the data
$$S_0=1,\qquad S_n\in\mathcal S'((\mathbb R^2)^n)\quad(n\geq1),$$
where each $S_n$ is a continuous complex-linear functional on that Schwartz space.

For $g\in E(2)$ define the continuous pullback $T_{g,n}$ by
$$(T_{g,n}f)(x_1,\ldots,x_n)=f(g^{-1}x_1,\ldots,g^{-1}x_n).$$
For $\pi\in\mathfrak S_n$, define the block permutation pullback by
$$(T_{\pi,n}f)(x_1,\ldots,x_n)=f(x_{\pi^{-1}(1)},\ldots,x_{\pi^{-1}(n)}).$$
The pullbacks above are continuous Schwartz-space automorphisms. The hierarchy is **Euclidean-covariant and boson-symmetric** when
$$S_n(T_{g,n}f)=S_n(f),\qquad S_n(T_{\pi,n}f)=S_n(f)$$
for every $n\geq1$, $g\in E(2)$, $\pi\in\mathfrak S_n$, and $f\in\mathcal S((\mathbb R^2)^n)$. Here the pairing is bilinear in the test function, with the bilinear test-function convention.

This definition imposes no reflection positivity, cluster condition, growth bound, probability-measure representation, or reconstruction conclusion. In particular, it does not assert that $S_n$ is a moment $\mathbb E[\phi^n]$ of a random distribution.

## Definition references

[[def-schwartz-space-and-its-seminorms]]

[[def-tempered-distribution]]

[[lem-cft-euclidean-pullbacks-preserve-schwartz-space]]
