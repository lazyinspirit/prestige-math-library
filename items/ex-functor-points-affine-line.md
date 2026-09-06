---
id: ex-functor-points-affine-line
kind: example
title: "The functor of points of the affine line"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-functor-of-points-affine-scheme, thm-universal-property-of-a-polynomial-ring, def-algebra-over-a-commutative-ring]
proof_strategy: direct
verification: {precheck: pass}
sources:
  references:
    - title: "James S. Milne, Algebraic Geometry, 10.81"
      url: "https://www.jmilne.org/math/CourseNotes/AG10.pdf"
---
## Example

For a commutative ring $k$ and a $k$-algebra $R$, the relative affine line
satisfies
$$ \mathbb A^1_k(R)=\operatorname{Hom}_{k\text{-}{\rm Alg}}(k[t],R)\cong R, $$
naturally in $R$.

## Facts & Assumptions

**Given:** A commutative ring $k$ and a $k$-algebra $R$.

[F1] A $k$-algebra homomorphism from $k[t]$ is uniquely determined by the image
of $t$ ([[thm-universal-property-of-a-polynomial-ring]]).

## Verification

**Proof technique:** direct.

1.1 Send a $k$-algebra map $\alpha:k[t]\to R$ to $\alpha(t)\in R$. [given]

1.2 Given $r\in R$, [F1] supplies the unique map with $t\mapsto r$. [F1]

2.1 The assignments are inverse and commute with postcomposition, so the bijection is natural. [step 1.1, step 1.2] ∎
 
