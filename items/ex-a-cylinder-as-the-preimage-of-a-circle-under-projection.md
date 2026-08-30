---
id: ex-a-cylinder-as-the-preimage-of-a-circle-under-projection
kind: example
title: "A cylinder is the preimage of a circle under a projection"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-preimage-theorem-for-submanifolds-under-submersions, thm-a-regular-level-set-is-an-embedded-submanifold, lem-derivative-of-a-power, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Level Sets"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Example

Let $\pi:\mathbb R^3\to\mathbb R^2$ be the projection $\pi(x,y,z)=(x,y)$, and
let $S^1=\{(u,v):u^2+v^2=1\}$. Then

$$\pi^{-1}(S^1)=\{(x,y,z):x^2+y^2=1\}=S^1\times\mathbb R,$$

the standard circular cylinder, is an embedded submanifold of $\mathbb R^3$.

## Facts & Assumptions

**Given:** The projection $\pi$ and the function $g(u,v)=u^2+v^2$.

[L1] The preimage of an embedded submanifold under a submersion is an embedded
submanifold ([[thm-preimage-theorem-for-submanifolds-under-submersions]]).

[L2] A nonempty regular level set is an embedded submanifold
([[thm-a-regular-level-set-is-an-embedded-submanifold]]).

[L3] The derivative of a square is $2u$, and derivative algebra handles sums
([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]]).

## Verification
**Proof technique:** direct.

1.1 The map $\pi$ is a submersion because its Jacobian is $\begin{bmatrix}1&0&0\\0&1&0\end{bmatrix}$. For $g(u,v)=u^2+v^2$, [L3] gives $Dg_{(u,v)}(a,b)=2ua+2vb$, which is surjective whenever $u^2+v^2=1$. The fibre is nonempty because $(1,0)\in g^{-1}(1)$. Hence $S^1=g^{-1}(1)$ is an embedded submanifold by [L2]. [L2, L3, given]

2.1 Applying [L1] to the submersion $\pi$ and the embedded circle $S^1$ gives that $\pi^{-1}(S^1)$ is an embedded submanifold of $\mathbb R^3$. [L1, step 1.1]

3.1 The displayed equation identifies this preimage with the usual cylinder. [step 2.1] ∎
