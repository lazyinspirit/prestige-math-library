---
id: thm-fermat-for-euclidean-local-extrema
kind: theorem
title: "Fermat's theorem: an interior differentiable local extremum has zero gradient"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-euclidean-local-extrema-and-critical-points, thm-fermat-interior-extremum, def-jacobian-matrix-and-gradient]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Analysis, Convexity, and Optimization"
      url: "https://www.math.columbia.edu/department/pinkham/Optimizationbook.pdf"
pipeline_run: null
---

## Statement

If $f:U\subseteq\mathbb R^m\to\mathbb R$ is differentiable at an interior local maximum or minimum $a$, then $\nabla f(a)=0$.

## Facts & Assumptions

**Given:** A differentiable scalar field with a local extremum at $a$.

[L1] The one-variable Fermat theorem gives derivative zero at an interior differentiable local extremum ([[thm-fermat-interior-extremum]]).

[L2] The gradient consists of the coordinate partial derivatives ([[def-jacobian-matrix-and-gradient]]).

## Proof

**Proof technique:** direct.

1.1 Restrict $f$ to each coordinate line through $a$. The restriction has a local extremum at $0$, so [L1] makes its derivative zero. [L1, given]

2.1 These derivatives are the entries of $\nabla f(a)$ by [L2], so every entry vanishes. [step 1.1, L2] ∎
