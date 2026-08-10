---
id: ex-absolute-value-lipschitz-not-c1
kind: example
title: "$|x|$ is Lipschitz and absolutely continuous but not $C^1$ on $[-1,1]$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-c1-lipschitz-ac-bv-hierarchy, cor-of-reverse-triangle,
       def-derivative, def-abs-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach-Zaretsky Theorem, Section 2"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
pipeline_run: null
---

## Example

The absolute-value function separates two implications in the hierarchy: it is Lipschitz, hence absolutely continuous, but is not even differentiable at the origin.

## Facts & Assumptions

**Given:** The function $f(x)=|x|$ on $[-1,1]$.

[L1] The reverse triangle inequality gives $||x|-|y||\le|x-y|$ ([[cor-of-reverse-triangle]]).

[L2] Every Lipschitz function on a compact interval is absolutely continuous ([[thm-c1-lipschitz-ac-bv-hierarchy]]).

[L3] Differentiability requires a two-sided difference-quotient limit ([[def-derivative]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $f$ is $1$-Lipschitz, and [L2] makes it absolutely continuous. [L1, L2]

2.1 At zero, $(|h|-|0|)/h$ equals $1$ for $h>0$ and $-1$ for $h<0$. The two one-sided limits differ, so [L3] shows that $f'(0)$ does not exist. Therefore $f$ is not $C^1$ on $[-1,1]$. [L3] ∎
