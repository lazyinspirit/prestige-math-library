---
id: ex-aqft-finite-z2-cocycle-circle
kind: example
title: A nontrivial cocycle weight on the finite two-element gauge groupoid
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-aqft-background-gauging-data
dependency_roles:
  def-aqft-background-gauging-data: mathematical-premise
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

Let $G=C_2=\{1,s\}$ and let the finite background groupoid be the conjugation action groupoid $G//G$: its objects are $g\in G$, and an arrow labeled $h\in G$ sends $g$ to $hgh^{-1}$. Define the normalized group 1-cocycle $\chi:G\to U(1)$ by $\chi(1)=1$ and $\chi(s)=-1$, and set $W(g)=\chi(g)$. The action weight is invariant under every arrow, and the normalized gauging sum is zero.

## Example references

[[def-aqft-background-gauging-data]]

## Facts & Assumptions

**Given:** The conjugation action groupoid $G//G$ for $G=C_2$ and the function $\chi$ specified in the Example.

[F1] [[def-aqft-background-gauging-data]]: a cocycle/action weight is a $U(1)$-valued function constant on every gauge arrow, and the normalized sum divides each isomorphism-class weight by its automorphism-group order.

## Proof

1.1 Since $C_2$ is abelian, conjugation fixes each of its two elements. Thus the groupoid has two isomorphism classes, represented by $1$ and $s$, and each automorphism group is all of $C_2$. [given, F1, algebra]

1.2 The map $\chi$ is a group homomorphism: its values satisfy $\chi(1)=1$ and $\chi(s)^2=1=\chi(s^2)$. Hence it is a normalized group 1-cocycle. Since conjugation is trivial, $W(g)=\chi(g)$ is constant on each arrow and is an admissible action weight. [given, F1, algebra]

2.1 The normalized sum is $Z(G//G,W)=\chi(1)/2+\chi(s)/2=1/2-1/2=0$. [given, F1, step 1.1, step 1.2, algebra] ∎
