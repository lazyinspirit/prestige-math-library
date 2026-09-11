---
id: "fs-the-singular-boundary-of-a-simplex-is-the-unsigned-sum-of-its-faces"
kind: "false-statement"
title: "The singular boundary of a simplex is the unsigned sum of its faces"
deps: ["def-real-singular-chain-complex"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 false-statement inventory; exact refutation or unresolved wording recorded in proof_plan"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

The real singular boundary is the unsigned sum of all faces.

## Facts & Assumptions

**Given:** Work in $\mathbb R^2$ with distinct vertices $a=(0,0),b=(1,0),c=(0,1)$.

[F1] The real boundary has alternating signs ([[def-real-singular-chain-complex]]).

## Proof

1.1 Let $\sigma:\Delta^2\to\mathbb R^2$ be the affine simplex with ordered vertices $(a,b,c)$. Its ordered edge faces are $[b,c],[a,c],[a,b]$. The operator $u$ defined by unsigned faces has $u[a,b]=[b]+[a]$, so $u^2\sigma=2[a]+2[b]+2[c]\ne0$ in the free real vertex space. The coefficient at $a$ is two. [given, F1, algebra]

2.1 In contrast, $\partial\sigma=[b,c]-[a,c]+[a,b]$ and $\partial^2\sigma=([c]-[b])-([c]-[a])+([b]-[a])=0$. Already on $[a,b]$, the proposed value $[b]+[a]$ differs from $[b]-[a]$ by $2[a]\ne0$. Thus the refuted formula disagrees with the definition and fails the differential identity. [F1, step 1.1, algebra]

3.1 Vertices have zero boundary, not a putative negative-dimensional face. Degeneracy does not rescue the formula: on a point the unsigned boundary of the constant edge is twice its vertex, whereas the signed boundary is zero. The empty target has no simplices and is not the witness. These finite calculations require no choice and use real coefficients, where two is nonzero. [F1, step 1.1, step 2.1] ∎
