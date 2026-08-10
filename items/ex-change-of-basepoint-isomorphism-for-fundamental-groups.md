---
id: ex-change-of-basepoint-isomorphism-for-fundamental-groups
kind: example
title: "A path between basepoints induces an isomorphism of fundamental groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-based-loops-and-fundamental-group, thm-fundamental-group-laws, def-path-connected, ex-fundamental-groupoid, def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Chapter 1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Example

If a path $\gamma$ joins $x_0$ to $x_1$, conjugating loops by $\gamma$
gives an isomorphism $\pi_1(X,x_0)\cong\pi_1(X,x_1)$.

## Facts & Assumptions

**Given:** A space $X$ and a path $\gamma:x_0\to x_1$.

[L1] Loop classes multiply by concatenation in traversal order and satisfy the group laws ([[def-based-loops-and-fundamental-group]], [[thm-fundamental-group-laws]]); paths are those of [[def-path-connected]].

[L2] In the fundamental groupoid, concatenation is well defined and associative on endpoint-preserving path-homotopy classes, and reversal gives the inverse of an arbitrary path class ([[ex-fundamental-groupoid]]).

[L3] A bijective group homomorphism is a group isomorphism ([[def-group-isomorphism-and-automorphism]]).

## Verification

**Proof technique:** direct.

1.1 Define $\gamma_\#:\pi_1(X,x_0)\to\pi_1(X,x_1)$ by $\gamma_\#([\alpha])=[\bar\gamma*\alpha*\gamma]$. This begins and ends at $x_1$, and [L2] makes it independent of the representative $\alpha$. [L1, L2]

2.1 For loops $\alpha,\beta$ at $x_0$, the concatenation representing $\gamma_\#([\alpha])\gamma_\#([\beta])$ contains the middle segment $\gamma*\bar\gamma$. Cancelling its class and using associativity gives $[\bar\gamma*(\alpha*\beta)*\gamma]$, so $\gamma_\#$ is a homomorphism. [step 1.1, L1, L2]

2.2 The same construction with $\bar\gamma:x_1\to x_0$ gives $\bar\gamma_\#$. The composites insert $\gamma*\bar\gamma$ or $\bar\gamma*\gamma$, whose classes are constant, so both composites are identity maps. [step 1.1, L1, L2]

3.1 Thus $\gamma_\#$ is a bijective homomorphism with inverse $\bar\gamma_\#$, hence a group isomorphism by [L3]. [step 2.1, step 2.2, L3] ∎
