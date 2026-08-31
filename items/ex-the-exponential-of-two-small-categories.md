---
id: ex-the-exponential-of-two-small-categories
kind: example
title: "The exponential of two small categories computed on a walking-arrow source"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [thm-the-category-of-small-categories-is-cartesian-closed]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tom Leinster, Basic Category Theory, Example 6.3.17"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
generation:
  role: example
---

## Example

Let $\mathbf I$ be the walking-arrow category with objects $0,1$ and one nonidentity arrow $u:0\to1$. For any small category $\mathcal E$, a functor $\mathbf I\to\mathcal E$ is exactly an arrow of $\mathcal E$.

## Facts & Assumptions

**Given:** The walking-arrow category $\mathbf I$ and a small category $\mathcal E$.

[L1] In $\mathbf{Cat}$, the exponential by $\mathbf I$ is the functor category $[\mathbf I,\mathcal E]$ ([[thm-the-category-of-small-categories-is-cartesian-closed]]).

## Verification

**Proof technique:** direct.

1.1 To give a functor $F:\mathbf I\to\mathcal E$ is to choose the two objects $F(0),F(1)$ and the image $F(u):F(0)\to F(1)$. Thus the objects of the exponential $\mathcal E^{\mathbf I}$ are precisely the arrows of $\mathcal E$. [given, algebra]

2.1 A morphism between two such functors is a natural transformation, so it is exactly a commutative square in $\mathcal E$. Therefore $\mathcal E^{\mathbf I}$ is the arrow category of $\mathcal E$. [step 1.1, algebra]

3.1 This is the concrete exponential object described by [[thm-the-category-of-small-categories-is-cartesian-closed]]: functors $\mathcal C\times\mathbf I\to\mathcal E$ curry to functors $\mathcal C\to\mathcal E^{\mathbf I}$. [step 2.1, L1] ∎
