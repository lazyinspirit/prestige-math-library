---
id: ex-riesz-representative-of-a-functional-on-c-three
kind: example
title: "The Riesz representative of an explicit functional on $\\mathbb C^3$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-riesz-representation-in-finite-dimensions, prop-standard-coordinate-inner-products]
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For the linear functional

$$f(z_0,z_1,z_2)=(1+i)z_0-2iz_1+3z_2$$

on standard $\mathbb C^3$, the Riesz representative under the linear-first convention is

$$w=(1-i,2i,3),$$

so $f(z)=\langle z,w\rangle$.

## Facts & Assumptions

**Given:** The displayed linear functional $f$.

[L1] Every functional on a finite-dimensional inner product space has a unique vector $w$ such that $f(z)=\langle z,w\rangle$ ([[thm-riesz-representation-in-finite-dimensions]]).

[L2] The standard complex inner product is $\langle z,w\rangle=\sum_kz_k\overline{w_k}$ ([[prop-standard-coordinate-inner-products]]).

## Verification

**Proof technique:** computation.

1.1 By [L2], $\langle z,(1-i,2i,3)\rangle=(1+i)z_0-2iz_1+3z_2=f(z)$. Uniqueness in [L1] identifies the displayed vector as the representative. [L1, L2, algebra]

2.1 If the functional is multiplied by $i$, its representative is $-iw$, since $\langle z,-iw\rangle=i\langle z,w\rangle$. This explicitly exhibits the conjugate-linear dependence asserted by [L1]. [step 1.1, L1, L2] ∎
