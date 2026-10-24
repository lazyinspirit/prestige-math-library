---
id: ex-a-monoid-as-a-one-object-monoidal-category
kind: example
title: "A commutative monoid as a one-object strict monoidal category"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-monoids-and-groups-as-one-object-categories, thm-the-endomorphisms-of-the-unit-form-a-commutative-monoid]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $(M,\cdot,e)$ be a commutative monoid. Make a one-object category $\mathcal C_M$ whose unique object is $*$ and whose endomorphisms are the elements of $M$, with composition given by $\cdot$. Define tensor on objects by $*\otimes*=*$ and on morphisms again by $\cdot$.

## Facts & Assumptions

**Given:** A commutative monoid $(M,\cdot,e)$.

[L1] A monoid yields a one-object category whose endomorphism monoid is the original monoid ([[prop-monoids-and-groups-as-one-object-categories]]).

[L2] In a strict one-object monoidal category, the endomorphism monoid is commutative ([[thm-the-endomorphisms-of-the-unit-form-a-commutative-monoid]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $\mathcal C_M$ is a category with identity $e$ and composition given by $\cdot$. [L1]

2.1 Because $M$ is commutative, $((m'\otimes n')\circ(m\otimes n))=(m'\cdot n')\cdot(m\cdot n)=(m'\cdot m)\cdot(n'\cdot n)=((m'\circ m)\otimes(n'\circ n))$, so tensor is a bifunctor. Associativity and unit are literal equalities because there is only one object and the tensor on morphisms is exactly the monoid product. [step 1.1, algebra]

3.1 Thus $\mathcal C_M$ is a one-object strict monoidal category. The theorem in [L2] explains why commutativity is the right hypothesis for this strict example. [step 2.1, L2] ∎
