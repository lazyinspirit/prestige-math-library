---
id: ex-aqft-finite-c2-gluing-identity
kind: example
title: The homotopy-pullback gluing factor for the two-element group
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 6
deps:
  - def-aqft-background-gauging-data
  - def-qftx-finite-homotopy-pullback
  - thm-aqft-finite-group-gauging
dependency_roles:
  def-aqft-background-gauging-data: mathematical-premise
  def-qftx-finite-homotopy-pullback: mathematical-premise
  thm-aqft-finite-group-gauging: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references: []
generation:
  role: example
---

## Example

Let $G=C_2=\{1,s\}$ and let both restriction functors be the identity functor on the one-object groupoid $BG$. Give both pieces and the glued groupoid the constant weight $1$, and define the glued groupoid to be the homotopy pullback $BG\times^h_{BG}BG$. Its normalized gauging sum is $1/2$. Each homotopy fiber of an identity restriction over the unique boundary object has normalized integral $1$, so the gluing formula gives the same value.

## Example references

[[def-aqft-background-gauging-data]]

[[thm-aqft-finite-group-gauging]]

## Facts & Assumptions

**Given:** The group $C_2$, the one-object groupoid $BG$, two identity restriction functors, and the constant action weights.

[F1] [[def-aqft-background-gauging-data]]: a finite groupoid's normalized sum weights each isomorphism class by the reciprocal automorphism-group order.

[F2] [[thm-aqft-finite-group-gauging]]: for composable finite groupoid data with a homotopy-pullback comparison equivalence and a factorizing invariant weight, the glued sum is the boundary sum divided by the boundary automorphism orders.

[F3] [[def-qftx-finite-homotopy-pullback]]: a homotopy-pullback object is a pair of source objects together with an isomorphism between their images; a morphism is a compatible pair of arrows.

## Proof

1.1 The objects of $BG\times^h_{BG}BG$ are the two elements $\alpha\in C_2$. A morphism $(u,v)$ from $\alpha$ to $\alpha'$ satisfies $v\alpha=\alpha'u$. For each of the two choices of $u$, there is exactly one $v$ satisfying this equation, so the groupoid is connected and each object's automorphism group has order two. [given, F3, algebra]

2.1 Its groupoid cardinality is therefore $1/2$. For the homotopy fiber of an identity functor $BG\to BG$ over its unique object, the objects are the two isomorphisms $\eta\in C_2$; between any ordered pair $\eta,\eta'$ there is exactly one compatible arrow, so this fiber is equivalent to the terminal groupoid and has cardinality one. [given, F1, F3, step 1.1, algebra]

3.1 The comparison functor is the identity onto the declared glued homotopy pullback, and the constant weight factors. By [F2], $Z=(1\cdot1)/|\operatorname{Aut}_{BG}(*)|=1/2$, in agreement with step 2.1. [given, F1, F2, step 2.1, algebra] ∎
