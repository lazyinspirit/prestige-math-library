---
id: ex-hasse-minkowski-for-a-quaternary-form
kind: example
title: "A quaternary Hasse-Minkowski calculation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-global-square-class-approximation, thm-hasse-minkowski-over-the-rationals]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 11, Theorem 11.17"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes11.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
---

## Example

The quaternary form

$$
q(X,Y,Z,W)=X^2+2Y^2-3Z^2-6W^2
$$

is isotropic over $\mathbb Q$.

## Facts & Assumptions

**Given:** The global square-class approximation lemma and the Hasse-Minkowski
theorem ([[lem-global-square-class-approximation]],
[[thm-hasse-minkowski-over-the-rationals]]).

## Verification

**Proof technique:** direct.

1.1 The two binary subforms $X^2+2Y^2$ and $3Z^2+6W^2$ both represent the common value $3$: indeed $1^2+2\cdot1^2=3$ and $3\cdot1^2+6\cdot0^2=3$. No approximation lemma is needed in this concrete instance because the common rational value is already explicit. [given, algebra]

2.1 Substituting these representations gives $q(1,1,1,0)=3-3=0$, so $(1,1,1,0)$ is a rational isotropic vector. This concrete calculation is exactly what [[thm-hasse-minkowski-over-the-rationals]] guarantees once the local square classes have been matched. [step 1.1, given, algebra] ∎
