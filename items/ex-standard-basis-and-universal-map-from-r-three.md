---
id: ex-standard-basis-and-universal-map-from-r-three
kind: example
title: "The standard basis and a universal map from $R^3$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-free-module-on-a-set-and-standard-basis, thm-universal-property-of-free-modules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Example

For a unital ring $R$, the module $R^3$ has standard basis
$$e_1=(1,0,0),\qquad e_2=(0,1,0),\qquad e_3=(0,0,1).$$
Given $m_1,m_2,m_3$ in a left $R$-module $M$, the unique homomorphism sending $e_i$ to $m_i$ is
$$T(r_1,r_2,r_3)=r_1m_1+r_2m_2+r_3m_3.$$

## Facts & Assumptions

**Given:** A unital ring $R$, a left $R$-module $M$, and elements $m_1,m_2,m_3\in M$.

[F1] $R^3$ is free on its three standard basis vectors, and every vector has a unique coordinate expression ([[def-free-module-on-a-set-and-standard-basis]]).

[L1] A map on a basis extends uniquely to a module homomorphism ([[thm-universal-property-of-free-modules]]).

## Verification

**Proof technique:** direct.

1.1 The displayed formula is additive and $R$-linear by the module axioms, and it sends $e_i$ to $m_i$. [given, F1, algebra]

2.1 If $S:R^3\to M$ is another homomorphism with $S(e_i)=m_i$, then [F1] gives $(r_1,r_2,r_3)=r_1e_1+r_2e_2+r_3e_3$, so linearity gives $S(r_1,r_2,r_3)=r_1m_1+r_2m_2+r_3m_3=T(r_1,r_2,r_3)$. [step 1.1, F1]

3.1 Therefore $T$ is the unique universal extension asserted by [L1]. [step 1.1, step 2.1, L1] ∎
