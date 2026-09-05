---
id: ex-hilbert-one-place-principle
kind: example
title: "The one-place principle in action"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-ternary-hilbert-one-place-principle]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 11, Corollary 11.13"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes11.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Example

For the ternary form

$$
q(X,Y,Z)=X^2+Y^2-2Z^2,
$$

the unknown $2$-adic local value is forced by the values at the other places.

## Facts & Assumptions

**Given:** The one-place principle for ternary forms
([[cor-ternary-hilbert-one-place-principle]]).

## Verification

**Proof technique:** direct.

1.1 The criterion for $q$ is the symbol $(2,2)_v$. At the real place this is $1$ because both arguments are positive. At every odd prime $p$, both arguments are units, so the odd-prime formula gives $(2,2)_p=1$. [given, algebra]

2.1 Since every place except possibly $2$ gives value $1$, [[cor-ternary-hilbert-one-place-principle]] forces the remaining $2$-adic value also to be $1$. Hence $q$ is isotropic over $\mathbb Q_2$ without a separate direct computation there; globally, $(1,1,1)$ is the corresponding visible isotropic vector. [step 1.1, given, algebra] ∎
