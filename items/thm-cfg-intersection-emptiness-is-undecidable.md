---
id: thm-cfg-intersection-emptiness-is-undecidable
kind: theorem
title: "Emptiness of the intersection of two CFGs is undecidable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-post-correspondence-problem, thm-post-correspondence-is-undecidable, def-computable-many-one-reduction, def-language-generated-by-a-cfg, thm-many-one-reductions-transfer-decidability-and-recognizability]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.pdf"
---

## Statement

The problem of deciding, from two context-free grammars $G$ and $H$, whether
$L(G)\cap L(H)=\varnothing$ is undecidable.

## Facts & Assumptions

**Given:** A PCP instance $$ (u_1,v_1),\dots,(u_n,v_n). $$

[L1] A PCP match is a nonempty index sequence with equal top and bottom concatenations, by [[def-post-correspondence-problem]].

[L2] PCP is undecidable, by [[thm-post-correspondence-is-undecidable]].

[L3] If $A\le_m B$ and $B$ is decidable, then $A$ is decidable, by [[thm-many-one-reductions-transfer-decidability-and-recognizability]].

## Proof

**Proof technique:** direct.

1.1 From the PCP instance build two context-free grammars over the alphabet consisting of the original symbols together with index symbols $1,\dots,n$: $$ S_T\to u_iS_T i\mid u_i i,\qquad S_B\to v_iS_B i\mid v_i i\qquad(1\le i\le n). $$ Thus $G_T$ generates exactly the words $u_{i_1}\cdots u_{i_k}i_k\cdots i_1$, and $G_B$ generates exactly the words $v_{i_1}\cdots v_{i_k}i_k\cdots i_1$, for nonempty index sequences $i_1,\dots,i_k$. [L1, given, construct]

2.1 If $i_1,\dots,i_k$ is a PCP match, then $$ u_{i_1}\cdots u_{i_k}i_k\cdots i_1=v_{i_1}\cdots v_{i_k}i_k\cdots i_1, $$ so that common word lies in $L(G_T)\cap L(G_B)$. Conversely, if a word lies in $L(G_T)\cap L(G_B)$, its reversed index suffix uniquely determines the same index sequence on both sides, and removing that suffix leaves $$ u_{i_1}\cdots u_{i_k}=v_{i_1}\cdots v_{i_k}. $$ Hence the original PCP instance has a match if and only if $L(G_T)\cap L(G_B)\neq\varnothing$. [L1, step 1.1]

3.1 The map from the PCP instance to the pair $(G_T,G_B)$ is total and computable by step 1.1. If intersection-emptiness for pairs of CFGs were decidable, step 2.1 and [L3] would make PCP decidable, contradicting [L2]. [L2, L3, step 2.1, contradiction]

4.1 Therefore emptiness of the intersection of two CFGs is undecidable. [step 3.1, discharge-contradiction: a decider for CFG intersection-emptiness would decide PCP] ∎
