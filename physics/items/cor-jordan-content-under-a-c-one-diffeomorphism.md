---
id: cor-jordan-content-under-a-c-one-diffeomorphism
kind: corollary
title: "The content of a compact Jordan image is the integral of the absolute Jacobian determinant"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-change-of-variables-for-compact-jordan-sets, thm-jordan-content-and-indicator-integrability]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, Theorem 5.5.7"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Statement

Under the hypotheses of [[thm-change-of-variables-for-compact-jordan-sets]],
$$\operatorname{cont}(g(K))=\int_K|\det Dg(x)|\,dx.$$

## Facts & Assumptions

**Given:** Open $U$, injective $C^1$ map $g$ with invertible derivative, and compact Jordan $K\subseteq U$.

[L1] Compact-Jordan change of variables applies to every bounded integrable function on $g(K)$ ([[thm-change-of-variables-for-compact-jordan-sets]]).

[L2] The integral of the constant-one function over a Jordan set is its Jordan content ([[thm-jordan-content-and-indicator-integrability]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $g(K)$ is Jordan and change of variables applies to the constant function $1$ on it. [L1, given]

2.1 Its pullback is $|\det Dg|$, while [L2] identifies the image integral with $\operatorname{cont}(g(K))$. This is the displayed formula. [L1, L2, step 1.1] ∎
