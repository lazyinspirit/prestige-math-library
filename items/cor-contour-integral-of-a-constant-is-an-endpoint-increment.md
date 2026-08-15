---
id: cor-contour-integral-of-a-constant-is-an-endpoint-increment
kind: corollary
title: "The contour integral of a constant c is c times the endpoint displacement"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-fundamental-theorem-for-complex-line-integrals, thm-algebra-of-complex-derivatives]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Weber, Lecture Notes in Complex Analysis, §1.7"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

For $c\in\mathbb C$ and a rectifiable contour $\gamma:[a,b]\to\mathbb C$,
$$\int_\gamma c\,dz=c\bigl(\gamma(b)-\gamma(a)\bigr).$$

## Facts & Assumptions

**Given:** A complex constant $c$ and a rectifiable contour $\gamma$.

[L1] Constant and identity functions obey the complex derivative algebra; in particular $(cz)'=c$ ([[thm-algebra-of-complex-derivatives]]).

[L2] A continuous primitive evaluates a rectifiable contour integral by its endpoint increment ([[thm-fundamental-theorem-for-complex-line-integrals]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $F(z)=cz$ is a primitive of the constant function $c$. [L1]

2.1 Apply [L2] and simplify $F(\gamma(b))-F(\gamma(a))$. The cases $c=0$ and a constant path are included. [step 1.1, L2, algebra] ∎
