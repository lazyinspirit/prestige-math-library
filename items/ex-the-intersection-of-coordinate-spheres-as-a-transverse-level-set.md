---
id: ex-the-intersection-of-coordinate-spheres-as-a-transverse-level-set
kind: example
title: "The intersection of coordinate spheres as a transverse level set"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-transverse-preimage-theorem,
       cor-transverse-intersection-theorem]
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

In $\mathbb R^4$, let

$$
F(x_1,x_2,x_3,x_4)=(x_1^2+x_2^2,\ x_3^2+x_4^2).
$$

Then

$$
F^{-1}(1,1)=S^1\times S^1
$$

is a transverse codimension-$2$ level set.

## Facts & Assumptions

**Given:** The smooth map $F:\mathbb R^4\to\mathbb R^2$ above and the point $(1,1)\in\mathbb R^2$.

[L1] The transverse preimage theorem identifies transverse fibres as embedded submanifolds ([[thm-transverse-preimage-theorem]]).

## Verification
**Proof technique:** direct.

1.1 If $F(x)= (1,1)$, then $(x_1,x_2)\neq(0,0)$ and $(x_3,x_4)\neq(0,0)$. The Jacobian matrix $$ \begin{bmatrix} 2x_1&2x_2&0&0\\ 0&0&2x_3&2x_4 \end{bmatrix} $$ therefore has rank $2$, so $(1,1)$ is a regular value. [given, algebra]

2.1 The fibre equation is exactly $$ x_1^2+x_2^2=1,\qquad x_3^2+x_4^2=1, $$ which is $S^1\times S^1$. By [L1], this fibre is an embedded codimension-$2$ submanifold of $\mathbb R^4$. [L1, step 1.1]

3.1 Thus the product of the two coordinate circles appears as a transverse level set. [step 2.1] ∎