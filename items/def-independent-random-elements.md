---
id: def-independent-random-elements
kind: definition
title: "Independent random elements"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-random-element-and-real-random-variable, def-sigma-algebra-generated-by-a-function, def-independent-sigma-algebras-and-events]
sources:
  references:
    - title: "S. R. S. Varadhan, Probability Theory, Definitions 3.2 and 3.4"
      url: "https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 2.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let $X_i:(\Omega,\mathcal F,\mathbb P)\to(S_i,\Sigma_i)$ be random elements on a
common probability space. For each $i$, write

$$\sigma(X_i):=\{X_i^{-1}(B):B\in\Sigma_i\}\subseteq\mathcal F.$$

The family $(X_i)_{i\in I}$ is **independent** when the sigma-algebras
$(\sigma(X_i))_{i\in I}$ are independent in the sense of
[[def-independent-sigma-algebras-and-events]].

When $\Sigma_i$ is a Borel sigma-algebra, this agrees with the notation
$\sigma(X_i)$ from [[def-sigma-algebra-generated-by-a-function]].
