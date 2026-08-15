---
id: thm-first-isomorphism-theorem-for-vector-spaces
kind: theorem
title: 'First isomorphism theorem for vector spaces: $V/\ker T$ is isomorphic to $\operatorname{im}T$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-quotient-vector-space-universal-property, thm-linear-kernel-image-and-injectivity]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cornell Math 4330, Quotient Spaces, Exercise QuoSpace 5"
      url: "https://pi.math.cornell.edu/~kassabov/math4330.fall19/cornell-only/QuoSpaces.pdf"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Results 3.106-3.107"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

For every linear map $T:V\to U$, the formula
$$\widetilde T(v+\ker T):=T(v)$$
defines a linear isomorphism $\widetilde T:V/\ker T\to\operatorname{im}T$.

## Facts & Assumptions

**Given:** A linear map $T:V\to U$.

[L1] A linear map whose kernel contains a subspace $W$ factors uniquely through $V/W$ by $v+W\mapsto T(v)$ ([[thm-quotient-vector-space-universal-property]]).

[L2] The image of a linear map is a linear subspace, and a linear map is injective exactly when its kernel is the zero subspace ([[thm-linear-kernel-image-and-injectivity]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] with $W=\ker T$ and codomain restricted to $\operatorname{im}T$ to obtain the linear map $\widetilde T(v+\ker T)=T(v)$; it is surjective by the definition of $\operatorname{im}T$. [L1, L2]

2.1 Its kernel consists of cosets $v+\ker T$ with $T(v)=0$, hence only the zero coset $\ker T$; [L2] makes $\widetilde T$ injective, so it is an isomorphism, including the zero map and the zero-space case. [step 1.1, L2] ∎

## Remarks

For finite-dimensional $V$, taking dimensions in this isomorphism gives $\dim V=\dim\ker T+\dim\operatorname{im}T$, the equality recorded independently as [[thm-rank-nullity]]. This is an agreement record, not a premise in the proof above.
