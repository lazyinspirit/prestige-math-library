---
id: ex-affine-general-linear-group-is-two-transitive
kind: example
title: "Affine general linear groups are doubly transitive"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-k-transitive-and-k-homogeneous-actions, prop-doubly-transitive-actions-are-primitive]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Transitive Group Actions"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/transitive.pdf"
pipeline_run: null
---

## Example

Let $V$ be a finite-dimensional vector space over a finite field. The affine
general linear group
$$\operatorname{AGL}(V) := \{\, x \mapsto A x + b : A \in \operatorname{GL}(V),\ b \in V \,\}$$
acts doubly transitively on $V$. Hence this action is primitive.

## Facts & Assumptions

**Given:** A finite-dimensional vector space $V$ over a finite field.

[L1] A $2$-transitive action carries any ordered pair of distinct points to any other such pair ([[def-k-transitive-and-k-homogeneous-actions]]).

[L2] Every doubly transitive action is primitive ([[prop-doubly-transitive-actions-are-primitive]]).

## Verification

**Proof technique:** direct.

1.1 Let $(x_1,x_2)$ and $(y_1,y_2)$ be ordered pairs of distinct points of $V$. Then $x_2-x_1$ and $y_2-y_1$ are nonzero vectors, so there is some invertible linear map $A$ with $A(x_2-x_1)=y_2-y_1$. [given, choose]

2.1 Define $b := y_1 - A x_1$ and $g(x) := A x + b$. Then $g(x_1)=y_1$ and $g(x_2)=A x_2 + b = A(x_2-x_1) + y_1 = y_2$. So $\operatorname{AGL}(V)$ is doubly transitive by [L1]. [L1, step 1.1, construct]

3.1 By [L2], the action is primitive. [L2, step 2.1] ∎
