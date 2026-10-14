---
id: def-exchangeable-random-elements
kind: definition
title: "Exchangeable random elements"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - lem-coordinate-maps-and-permutations-are-measurable-on-finite-products
  - def-random-element-and-real-random-variable
  - def-law-or-distribution-of-a-random-element
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Glenn Shafer and Vladimir Vovk, A Tutorial on Conformal Prediction, JMLR 9 (2008), §3.1"
      url: "https://www.jmlr.org/papers/volume9/shafer08a/shafer08a.pdf"
    - title: "Ryan Tibshirani, Conformal Prediction, Advanced Topics in Statistical Learning, Spring 2024, §1"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/conformal.pdf"
---

## Definition

Let $Z_1,\ldots,Z_n$ be random elements, $n\ge1$, of one measurable space
$(\mathcal Z,\mathscr Z)$. Their tuple $Z=(Z_1,\ldots,Z_n)$ is a random element
of $(\mathcal Z^n,\mathscr Z^{\otimes n})$ by
[[lem-coordinate-maps-and-permutations-are-measurable-on-finite-products]],
and its law is the pushforward probability measure from
[[def-law-or-distribution-of-a-random-element]]. For a permutation $\pi$ of
$\{1,\ldots,n\}$, let $\tau_\pi(z)_i=z_{\pi(i)}$. The tuple is
**exchangeable** if
$$\mathbb P_Z\circ\tau_\pi^{-1}=\mathbb P_Z\qquad\text{for every permutation }\pi.$$

This is invariance of the joint law, not an assertion of independence or identical marginal construction by independent sampling. The coordinate maps $\tau_\pi$ are measurable by the cited finite-product lemma.
