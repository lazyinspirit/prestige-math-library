---
id: "ex-aqft-split-two-group-interval-gluing"
kind: "example"
title: "Split two-group interval gluing with a nontrivial action"
status: "draft"
origin: "pipeline"
domain: "mathematics"
library: "mathematics"
dependency_level: 6
deps: ["thm-aqft-finite-two-group-gauging-gluing"]
dependency_roles: {"thm-aqft-finite-two-group-gauging-gluing": "mathematical-premise"}
proof_strategy: "direct"
provenance: {"statement": "ai-generated", "proof": "ai-generated"}
sources: {"references": []}
generation: {"role": "example"}
---

## Example

Let $G=\mathbb Z_2$, $A=\mathbb Z_3$, $\rho_1(t)=-t$, and $\beta=0$. Let $K$ be the ordered interval with vertices $0<1<2$ and edges $01,12$, decomposed into those two edges with intersection the vertex $1$. Give every field unit weight. Each edge and the full interval have higher gauging sum $3/2$. Each relative edge amplitude at the unique boundary field is $1$. The gluing contraction has boundary mass $3/2$ and gives $3/2$ again; discarding that second gauge stabilizer would change the contraction.

## Example references

[[thm-aqft-finite-two-group-gauging-gluing]]

## Facts & Assumptions

**Given:** the split finite data, interval decomposition and unit weights.

[F1] [[thm-aqft-finite-two-group-gauging-gluing]] gives $c(K)=|A|^{V-E}/|G|^V$, relative factor $c(K)/c(L)$, and higher gluing.

## Verification

1.1 A single edge has $V=2,E=1$, hence $c=3/4$ and two edge-label backgrounds, giving $Z=3/2$. The full two-edge interval has $V=3,E=2$, hence $c=3/8$ and four independently chosen edge-label backgrounds, again giving $Z=3/2$. There are no faces or tetrahedra imposing further conditions. [given, F1, algebra]

2.1 The shared point has $c=3/2$ and one background. Each relative edge has two extensions, with relative normalizer $(3/4)/(3/2)=1/2$, so its amplitude is $1$. The boundary contraction is $(3/2)\cdot1\cdot1=3/2$, equal to the full sum. The sign action remains in the gauge transformations; the count uses the complete higher formula, which applies to this nontrivial action. [given, F1, algebra] ∎
