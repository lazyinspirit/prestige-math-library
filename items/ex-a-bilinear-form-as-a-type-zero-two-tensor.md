---
id: ex-a-bilinear-form-as-a-type-zero-two-tensor
kind: example
title: "A bilinear form as a type $(0,2)$ tensor"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-type-r-s-tensor-on-a-finite-dimensional-vector-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Example

On $\mathbb R^2$, the dot product

$$
g((a,b),(c,d)):=ac+bd
$$

is a type $(0,2)$ tensor.

## Facts & Assumptions

**Given:** The bilinear form $g$ on $\mathbb R^2$ defined above.

[F1] A type $(0,2)$ tensor is a bilinear map $V\times V\to\mathbb R$ ([[def-type-r-s-tensor-on-a-finite-dimensional-vector-space]]).

## Verification
**Proof technique:** direct.

1.1 The displayed formula is linear in $(a,b)$ and in $(c,d)$ separately, so $g$ is bilinear. [given, algebra]

2.1 By [F1], bilinearity is exactly the requirement for a type $(0,2)$ tensor. Hence $g$ is such a tensor. [F1, step 1.1]

3.1 Therefore the Euclidean dot product is a concrete type $(0,2)$ tensor. [step 2.1] ∎