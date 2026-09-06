---
id: ex-affine-and-harmonic-polynomial-functions
kind: example
title: "Affine functions and mixed quadratic monomials are harmonic"
status: published
origin: pipeline
deps: [def-laplacian-of-a-c2-function]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "PDE source treatment"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
---
## Example

Let $n\ge1$, $a\in\mathbb R$, and $b\in\mathbb R^n$. Every affine function $x\mapsto a+b\cdot x$ is harmonic on $\mathbb R^n$. If $n\ge2$ and $i,j\in\{0,\ldots,n-1\}$ are distinct, then $x\mapsto x_ix_j$ is harmonic on $\mathbb R^n$.

## Verification

**Given:** the displayed dimension, coefficients, coordinate indices, and the classical Laplacian [[def-laplacian-of-a-c2-function]].

1.1 All second partial derivatives of $a+b\cdot x$ vanish [given].

2.1 For $i\ne j$, each diagonal second derivative of $x_ix_j$ vanishes [given]. ∎
