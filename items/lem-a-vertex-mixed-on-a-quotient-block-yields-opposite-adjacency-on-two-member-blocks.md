---
id: lem-a-vertex-mixed-on-a-quotient-block-yields-opposite-adjacency-on-two-member-blocks
kind: lemma
title: "A vertex mixed on a quotient block but pure on each member block yields two mixed member blocks with opposite adjacency"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-quotient-blockade-by-mixed-block-reachability, def-mixed-block-reachability-relation-on-a-blockade, def-edges-between-sets-and-pure-mixed-pairs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 6.1(3)"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $D$ be a block of the quotient blockade $\mathcal L/\mathcal M$, and let
$u\notin D$ be a vertex. Suppose that $u$ is mixed on $D$ but is pure to every
original block of $\mathcal L$ contained in $D$. Then there are two original
blocks $A_1,A_2$ of $\mathcal L$, both contained in $D$, such that

1. $A_1$ and $A_2$ are mixed; and
2. $u$ is complete to $A_1$ and anticomplete to $A_2$.

## Facts & Assumptions

**Given:** A blockade $\mathcal L$, a quotient block $D$ of $\mathcal L/\mathcal M$, and a vertex $u\notin D$ that is mixed on $D$ but pure to every original block of $\mathcal L$ contained in $D$.

[L1] Because $u$ is mixed on $D$ but pure to each member block, there are original blocks $B_1,B_2\subseteq D$ such that $u$ is complete to $B_1$ and anticomplete to $B_2$ ([[def-edges-between-sets-and-pure-mixed-pairs]]).

[L2] Since $D$ is one quotient block, any two original blocks it contains are related by the mixed-block reachability relation, so there is a chain
$$B_1=A_{r_1},A_{r_2},\dots,A_{r_m}=B_2$$
with each consecutive pair mixed ([[def-quotient-blockade-by-mixed-block-reachability]], [[def-mixed-block-reachability-relation-on-a-blockade]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose original blocks $B_1,B_2\subseteq D$ such that $u$ is complete to $B_1$ and anticomplete to $B_2$. [L1, choose]

2.1 By [L2], choose a mixed block chain $B_1=A_{r_1},A_{r_2},\dots,A_{r_m}=B_2$ inside $D$. Since $u$ is complete to the first block and anticomplete to the last, there is a first index $j<m$ at which the relation changes. Then $u$ is complete to $A_{r_j}$ and anticomplete to $A_{r_{j+1}}$, and the two blocks are mixed because they are consecutive on the chain. [step 1.1, L2, choose]

3.1 Taking $A_1:=A_{r_j}$ and $A_2:=A_{r_{j+1}}$ gives the required pair of mixed original blocks in $D$. [step 2.1] ∎
