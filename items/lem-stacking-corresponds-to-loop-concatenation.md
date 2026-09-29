---
id: lem-stacking-corresponds-to-loop-concatenation
kind: lemma
title: "Raw slicing reverses geometric stacking products"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [prop-stacking-of-geometric-braids-is-well-defined,
       lem-a-geometric-braid-slices-to-a-configuration-loop,
       def-based-loops-and-fundamental-group,
       thm-fundamental-group-laws,
       def-unordered-configuration-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, §1.3, printed p. 5"
      url: https://arxiv.org/pdf/1010.0321
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

For geometric braids $\beta$ and $\gamma$, let $\gamma\star\beta$ mean that
$\beta$ is stacked below $\gamma$. With the library's first-loop-then-second
product in $\pi_1(C_n(\operatorname{int}D^2),[Q])$, raw slicing reverses the
stacking order:
$$[S(\gamma\star\beta)]=[S(\beta)][S(\gamma)].$$

## Facts & Assumptions

**Given:** $n\in\mathbb N$ and geometric braids $\beta=(z_1,\ldots,z_n)$ and $\gamma=(w_1,\ldots,w_n)$ based at $Q$.

[L1] The stacked braid has coordinate formula $$ (\gamma\star\beta)_j(t)=\begin{cases}z_j(2t),&t\le\tfrac12,\\ w_{\pi(\beta)(j)}(2t-1),&t\ge\tfrac12,\end{cases} $$ where $\pi(\beta)$ is the endpoint permutation of $\beta$ ([[prop-stacking-of-geometric-braids-is-well-defined]]).

[L2] For a braid $\delta=(u_1,\ldots,u_n)$, its slice is $S(\delta)(t)=[(u_1(t),\ldots,u_n(t))]$ and is a continuous based loop at $[Q]$ in $C_n(\operatorname{int}D^2)$ ([[lem-a-geometric-braid-slices-to-a-configuration-loop]]).

[L3] The product of loop classes is $[\alpha][\eta]=[\alpha*\eta]$, where $\alpha$ is traversed first on $[0,\tfrac12]$ and $\eta$ second on $[\tfrac12,1]$ ([[def-based-loops-and-fundamental-group]]).

[L4] The points of $C_n(X)$ are coordinate-permutation orbits, so a tuple and any reordering of its coordinates have the same image ([[def-unordered-configuration-space]]).

[L5] For every pointed space, this loop-class product is well-defined and makes $\pi_1$ a group ([[thm-fundamental-group-laws]]).

No Axiom of Choice is assumed or used: the stacking formula uses the specified endpoint permutation, and the unordered quotient forgets that finite reordering.

## Proof

**Proof technique:** direct.

1.1 *The lower half is the first slice loop.* For $0\le t\le\tfrac12$, [L1] gives $$S(\gamma\star\beta)(t)=[(z_1(2t),\ldots,z_n(2t))]=S(\beta)(2t),$$ which is the first half of the concatenation $S(\beta)*S(\gamma)$ by [L3]. [L1, L2, L3]

1.2 *The upper half is the second slice loop.* For $\tfrac12\le t\le1$, [L1] gives the ordered tuple $(w_{\pi(\beta)(1)}(2t-1),\ldots,w_{\pi(\beta)(n)}(2t-1))$. Since $\pi(\beta)$ is a permutation, this is a reordering of the coordinates of $\gamma$ at height $2t-1$; [L4] therefore gives $$S(\gamma\star\beta)(t)=S(\gamma)(2t-1),$$ the second half of $S(\beta)*S(\gamma)$. [L1, L2, L3, L4]

2.1 *The piecewise paths agree at the seam.* At $t=\tfrac12$, the first half has value $S(\beta)(1)=[Q]$ and the second has value $S(\gamma)(0)=[Q]$ by [L2]. The stacked slice is also this same orbit by [L1]. Thus the two formulas establish the pointwise identity of based loops $S(\gamma\star\beta)=S(\beta)*S(\gamma)$ on all of $I$, including the shared endpoint of the two closed halves. [step 1.1, step 1.2, L1, L2, L3]

3.1 Taking path-homotopy classes of this equality and using the product convention [L3] gives $[S(\gamma\star\beta)]=[S(\beta)][S(\gamma)]$ in the group $\pi_1(C_n(\operatorname{int}D^2),[Q])$ of [L5]. For $n=0$ all loops are the unique empty loop and the identity holds; for $n=1$, $\pi(\beta)$ is the identity and the same two-half calculation applies without collision conditions. [step 2.1, L3, L5] ∎
