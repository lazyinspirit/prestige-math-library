---
id: ex-an-h-five-overlap-class-and-its-terminal-quotient
kind: example
title: "An $H_5$-overlap class and its terminal quotient"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-h-zero-through-h-five, def-h-five-overlap-chain-relation-in-a-comb-block, def-h-five-overlap-blockade-and-iterated-mixed-quotients, lem-h-five-overlap-quotient-iteration-terminates-at-a-pure-blockade]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Huang, Ju, and Zhou, Erdős-Hajnal beyond the five-vertex path, proof of Lemma 6.4"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Example

Fix a comb block $B_i$ whose induced graph consists of two labeled copies of $H_5$ sharing precisely their rim vertex $v_1$, with no other cross edges.

## Facts & Assumptions

**Given:** The comb block in the Example.

[F1] Two vertices in $X_i$ are related when a finite vertex sequence joins them with each consecutive pair contained in one induced $H_5$ inside $B_i$ ([[def-h-five-overlap-chain-relation-in-a-comb-block]]).

## Proof

**Proof technique:** direct.

1.1 Every vertex of $B_i$ belongs to one of the two induced copies, so $X_i=B_i$. For any $d,d'\in B_i$, the vertex sequence $d,v_1,d'$ has each consecutive pair in one of those copies; omit repeated consecutive vertices if necessary. Thus [F1] gives $d\sim_{H_5}d'$, and $B_i$ is the unique overlap class. [F1]

2.1 The initial overlap blockade is therefore $(B_i)$. There is no pair of distinct blocks, so it is pure vacuously. Its mixed-block reachability relation has just the singleton class $\{B_i\}$; replacing that class by its union returns $(B_i)$. Every iterate is consequently $(B_i)$, already terminal at the first stage. [step 1.1]

3.1 This gives the claimed overlap class and terminal quotient. [step 2.1] ∎
