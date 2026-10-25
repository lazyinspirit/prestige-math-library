---
id: "ex-aqft-two-group-point-higher-normalization"
kind: "example"
title: "A point retains the second gauge stabilizer"
status: "draft"
origin: "pipeline"
domain: "mathematics"
library: "mathematics"
dependency_level: 6
deps: ["thm-aqft-finite-two-group-gauging-gluing"]
dependency_roles: {"thm-aqft-finite-two-group-gauging-gluing": "mathematical-premise"}
proof_strategy: "direct"
provenance:
  statement: ai-generated
  proof: ai-generated
sources: {"references": []}
generation: {"role": "example"}
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Let $K$ consist of one vertex. Take $G=\mathbb Z_2$, $A=\mathbb Z_3$, trivial action and $\beta=0$, with unit phase weight. There is one background object, two distinct raw $1$-automorphisms and three $2$-automorphisms of each. The higher gauging sum is $3/2$. Identifying arrows by their effects on the singleton object set would give $1$; retaining $G$ but discarding $2$-arrows would give $1/2$.

## Example references

[[thm-aqft-finite-two-group-gauging-gluing]]

## Facts & Assumptions

**Given:** the one-vertex complex and finite data of the Example.

[F1] [[thm-aqft-finite-two-group-gauging-gluing]] gives point mass $|A|/|G|$ and the full gauge normalization.

## Verification

1.1 There are no edges or faces, so the only background is empty. A raw $1$-arrow has one freely chosen $G$-label and no edge labels, giving two arrows. A $2$-arrow preserves that label and is any of the three vertex $A$-labels, since its coboundary has no edges. Thus $\pi_1=\mathbb Z_2$ and $\pi_2=\mathbb Z_3$. [given, F1, algebra]

2.1 The higher mass is $3/2$ by [F1]. The quotient by induced object functions has only the identity, of mass $1$; the ordinary groupoid with only the two raw $G$-arrows has automorphism order $2$, of mass $1/2$. These distinct values demonstrate the retained higher stabilizer. [given, F1, algebra] ∎
