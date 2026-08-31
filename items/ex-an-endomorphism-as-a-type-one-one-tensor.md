---
id: ex-an-endomorphism-as-a-type-one-one-tensor
kind: example
title: "An endomorphism as a type $(1,1)$ tensor"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-type-r-s-tensor-on-a-finite-dimensional-vector-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Example

Let $A:\mathbb R^2\to\mathbb R^2$ be the linear map

$$
A(x,y)=(x+2y,3x-y).
$$

Then

$$
T(\alpha,v):=\alpha(Av)
$$

defines a type $(1,1)$ tensor on $\mathbb R^2$.

## Facts & Assumptions

**Given:** The endomorphism $A$ and the function $T(\alpha,v)=\alpha(Av)$.

[F1] A type $(1,1)$ tensor is bilinear on $V^*\times V$ ([[def-type-r-s-tensor-on-a-finite-dimensional-vector-space]]).

## Verification
**Proof technique:** direct.

1.1 For fixed $v$, the map $\alpha\mapsto\alpha(Av)$ is linear because evaluation of a fixed vector is linear on $V^*$. For fixed $\alpha$, the map $v\mapsto\alpha(Av)$ is linear because $A$ and $\alpha$ are linear. Thus $T$ is bilinear on $(\mathbb R^2)^*\times\mathbb R^2$. [given, algebra]

2.1 By [F1], this means $T$ is a type $(1,1)$ tensor. [F1, step 1.1]

3.1 Therefore an endomorphism gives a concrete type $(1,1)$ tensor through evaluation. [step 2.1] ∎