---
id: ex-local-obstruction-to-a-rational-conic
kind: example
title: "A local obstruction to a rational conic"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-ternary-isotropy-via-hilbert-symbol]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 11"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes11.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Example

The conic

$$
x^2+y^2=3z^2
$$

has no $\mathbb Q_3$-point, and therefore no rational point.

## Facts & Assumptions

**Given:** The ternary Hilbert-symbol criterion
([[cor-ternary-isotropy-via-hilbert-symbol]]).

## Verification

**Proof technique:** direct.

1.1 The equation is the isotropy problem for $X^2+Y^2-3Z^2$, so [[cor-ternary-isotropy-via-hilbert-symbol]] says it is locally soluble over $\mathbb Q_3$ exactly when $(3,3)_3=1$. [given, algebra]

2.1 Write $3=3^1\cdot1$ twice in the odd-prime formula. Then $(3,3)_3=(-1)^{(3-1)/2}=-1$, so the form is not isotropic over $\mathbb Q_3$. Therefore the conic has no $\mathbb Q_3$-point and hence no rational point. [step 1.1, given, algebra] ∎
