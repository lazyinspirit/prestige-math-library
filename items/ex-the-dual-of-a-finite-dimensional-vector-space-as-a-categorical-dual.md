---
id: ex-the-dual-of-a-finite-dimensional-vector-space-as-a-categorical-dual
kind: example
title: "The dual of a finite-dimensional vector space as a categorical dual"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-finite-dimensional-vector-spaces-are-rigid]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Example 2.10.12"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Example

Let $V$ be a finite-dimensional vector space over a field $k$. Its algebraic
dual $V^*$, together with evaluation $f\otimes v\mapsto f(v)$ and
coevaluation $1\mapsto\sum_i v_i\otimes v_i^*$ for a basis $(v_i)$ and dual
basis $(v_i^*)$, is a categorical dual of $V$.

## Facts & Assumptions

**Given:** A finite-dimensional vector space $V$.

[L1] Finite-dimensional vector spaces are rigid with dual object $V^*$
([[thm-finite-dimensional-vector-spaces-are-rigid]]).

## Verification

**Proof technique:** direct.

1.1 Theorem [[thm-finite-dimensional-vector-spaces-are-rigid]] proves that these maps make $V^*$ both a left dual and a right dual of $V$ in $\mathbf{Vect}_k$. [given, L1]

2.1 So the familiar linear-algebra dual object is exactly a categorical dual in the monoidal sense. [step 1.1] ∎
