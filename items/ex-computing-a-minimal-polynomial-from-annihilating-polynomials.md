---
id: ex-computing-a-minimal-polynomial-from-annihilating-polynomials
kind: example
title: "Computing the minimal polynomial of an explicit $3\\times3$ idempotent from its annihilating polynomials"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-minimal-polynomial-is-well-defined-and-controls-annihilators, cor-idempotent-endomorphisms-are-diagonalisable-projections, def-characteristic-polynomial-of-a-matrix]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Keith Conrad, The Minimal Polynomial and Some Applications, Examples 4.6, 4.9, and 4.16'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/minpolyandappns.pdf'
pipeline_run: null
---

## Example

For

$$A=\begin{pmatrix}0&-1&1\\1&2&-1\\1&1&0\end{pmatrix},$$

one has $A^2=A$, $\mu_A=x(x-1)$, and $\chi_A=x(x-1)^2$. Thus $A$ is projection onto its image along its kernel.

## Facts & Assumptions

**Given:** The displayed matrix $A$.

[L1] An annihilating polynomial is exactly a multiple of the minimal polynomial ([[thm-minimal-polynomial-is-well-defined-and-controls-annihilators]]).

[L2] Every idempotent endomorphism of a finite-dimensional space is diagonalisable and projects onto its image along its kernel ([[cor-idempotent-endomorphisms-are-diagonalisable-projections]]).

[L3] The characteristic polynomial is $\det(xI-A)$ ([[def-characteristic-polynomial-of-a-matrix]]).

## Verification

**Proof technique:** direct.

1.1 Direct multiplication gives $A^2=A$, while $A\ne0$ and $A\ne I$. Thus $x(x-1)$ annihilates but neither $x$ nor $x-1$ does; [L1] gives $\mu_A=x(x-1)$. [L1, algebra]

2.1 Expanding $\det(xI-A)$ gives $x(x-1)^2$ by [L3]. Finally [L2] identifies the image-kernel projection. [L2, L3, algebra] ∎
