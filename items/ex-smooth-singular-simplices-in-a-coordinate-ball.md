---
id: "ex-smooth-singular-simplices-in-a-coordinate-ball"
kind: "example"
title: "Smooth singular simplices in a coordinate ball"
deps: ["def-smooth-singular-simplex"]
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
      url: "https://people.math.harvard.edu/~pspark/derham.pdf"
      locator: "DG-16 B inventory; explicit verification or unresolved witness in proof_plan"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

Let $\psi:W\to B$ be a smooth chart with $B$ a convex open ball in $\mathbb R^n$, and take finitely many $v_0,\ldots,v_k\in B$. Then $\sigma(\lambda)=\psi^{-1}(\sum_{i=0}^k\lambda_i v_i)$ is a smooth singular $k$-simplex. Repeated vertices are permitted.

## Facts & Assumptions

**Given:** The chart, the specified vertices, and the affine hyperplane $A^k=\{\lambda:\sum_i\lambda_i=1\}$ containing $\Delta^k$.

[F1] A smooth simplex requires a smooth target-valued extension on an open neighbourhood in $A^k$ ([[def-smooth-singular-simplex]]).

## Proof

1.1 The affine map $L:A^k\to\mathbb R^n$, $L(\lambda)=\sum_i\lambda_i v_i$, is smooth. Convexity implies $L(\Delta^k)\subset B$. Therefore $O=L^{-1}(B)$ is open in $A^k$ and contains the entire simplex. The smooth map $\psi^{-1}\circ L:O\to W\subset M$ is the extension required by [F1]. This constructs one common neighbourhood directly. [given, F1]

2.1 To make the uniform margin explicit, $K=L(\Delta^k)$ is compact. If $B=B(b,R)$, the continuous function $y\mapsto\|y-b\|$ attains a maximum $r<R$ on $K$. Put $\varepsilon=(R-r)/2>0$. Any point within distance $\varepsilon$ of $K$ lies in $B$ by the triangle inequality. Hence $L^{-1}(\{y:\operatorname{dist}(y,K)<\varepsilon\})$ is a single open neighbourhood of the closed simplex on which the same extension is defined. For example, with $B=(-2,2)$ and vertices $-1,1$, the path is $\sigma(t)=2t-1$, whose extension remains in $B$ for $-1/2<t<3/2$. [given, F1, step 1.1, algebra]

3.1 For $k=0$ this gives the constant extension on the one-point affine space. For repeated or coincident vertices the affine formula is still smooth and may be constant; no independence is needed. The construction includes all faces and endpoints because $O$ contains the closed simplex. Empty balls cannot carry the given vertex tuple; in dimension zero the ball is a point and the same formula is constant. Only a supplied finite tuple is used, so no AC is required. [F1, step 1.1, step 2.1] ∎
