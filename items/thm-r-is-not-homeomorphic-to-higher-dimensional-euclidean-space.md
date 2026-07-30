---
id: thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space
kind: theorem
title: "$\\mathbb{R}$ is not homeomorphic to $\\mathbb{R}^n$ for any $n\\ge2$"
status: published
origin: session
deps: [lem-punctured-rn-is-polygonally-connected, thm-path-connected-implies-connected, cor-connected-subsets-of-the-line, thm-continuous-image-of-a-connected-space, def-homeomorphism-and-open-maps]
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Invariance of domain"
      url: "https://en.wikipedia.org/wiki/Invariance_of_domain"
pipeline_run: null
---

## Statement

For every $n\ge2$, there is no homeomorphism $\mathbb R\to\mathbb R^n$.

## Facts & Assumptions

**Given:** $n\ge2$.

[L1] The punctured space $\mathbb R^n\setminus\{0\}$ is polygonally connected, hence connected ([[lem-punctured-rn-is-polygonally-connected]], [[thm-path-connected-implies-connected]]).

[L2] A continuous image of a connected space is connected ([[thm-continuous-image-of-a-connected-space]]).

[L3] A connected subset of $\mathbb R$ is order-convex ([[cor-connected-subsets-of-the-line]]).

[L4] A homeomorphism is a continuous bijection with continuous inverse ([[def-homeomorphism-and-open-maps]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $h:\mathbb R\to\mathbb R^n$ is a homeomorphism, and put $a:=h^{-1}(0)$. [assume-contra, L4, choose]

1.2 Restricting $h^{-1}$ to $\mathbb R^n\setminus\{0\}$ gives a continuous surjection onto $\mathbb R\setminus\{a\}$. The source is connected by [L1], so the target is connected by [L2]. [L1, L2, L4]

1.3 Choose $a-1<a<a+1$. Both endpoints lie in $\mathbb R\setminus\{a\}$, but $a$ does not, so this subset is not order-convex and therefore not connected by [L3]. [L3]

2.1 Steps 1.2 and 1.3 contradict one another. Thus no such homeomorphism exists. [step 1.2, step 1.3, discharge-contradiction] ∎
