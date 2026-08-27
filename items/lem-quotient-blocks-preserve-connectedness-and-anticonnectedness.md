---
id: lem-quotient-blocks-preserve-connectedness-and-anticonnectedness
kind: lemma
title: "A quotient block of connected or anticonnected blocks is again connected or anticonnected"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-quotient-blockade-by-mixed-block-reachability, def-mixed-block-reachability-relation-on-a-blockade, def-connected-graph-and-connected-component, def-anticonnected-graph-and-anticonnected-component, def-edges-between-sets-and-pure-mixed-pairs, lem-complement-commutes-with-induced-subgraphs, def-graph-isomorphism-and-complement]
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
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 6.1(1)"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $\mathcal L$ be a blockade and let $D$ be a block of the quotient blockade
$\mathcal L/\mathcal M$.

1. If every block of $\mathcal L$ contained in $D$ induces a connected
   subgraph, then $G[D]$ is connected.
2. If every block of $\mathcal L$ contained in $D$ induces an anticonnected
   subgraph, then $G[D]$ is anticonnected.

## Facts & Assumptions

**Given:** A blockade $\mathcal L$ in a graph $G$, its quotient blockade $\mathcal L/\mathcal M$, and a quotient block $D$.

[L1] The block $D$ is the union of one $\mathcal M$-equivalence class. Therefore, after fixing any member block $A_0\subseteq D$, every other member block $B\subseteq D$ can be joined to $A_0$ by a finite mixed chain $$A_0=B_0,B_1,\dots,B_m=B$$ of original blocks contained in $D$ ([[def-quotient-blockade-by-mixed-block-reachability]], [[def-mixed-block-reachability-relation-on-a-blockade]]).

[L2] A mixed pair has at least one cross-edge and at least one cross-nonedge ([[def-edges-between-sets-and-pure-mixed-pairs]]).

[L3] Connectedness is connectivity in $G$, while anticonnectedness is connectivity in $\overline G$ ([[def-connected-graph-and-connected-component]], [[def-anticonnected-graph-and-anticonnected-component]]).

[L4] For every vertex set $W$, one has $\overline{G[W]}=\overline G[W]$ ([[lem-complement-commutes-with-induced-subgraphs]]).

## Proof

**Proof technique:** direct.

1.1 Assume first that every original block contained in $D$ is connected. Fix one such block $A_0\subseteq D$. Let $B\subseteq D$ be any other member block. By [L1], choose a mixed chain $$A_0=B_0,B_1,\dots,B_m=B$$ inside $D$. We prove by induction on $m$ that $G[B_0\cup\cdots\cup B_m]$ is connected. The case $m=0$ is immediate because $B_0=A_0$ is connected. If $m>0$, then the induction hypothesis gives connectedness of $G[B_0\cup\cdots\cup B_{m-1}]$, the block $B_m$ is connected by assumption, and [L2] gives a cross-edge between $B_{m-1}$ and $B_m$ because that pair is mixed. Hence the union up to $B_m$ is connected. Since $B$ was arbitrary, every member block of $D$ lies in the same connected component of $G[D]$, and therefore $G[D]$ is connected. [given, L1, L2, algebra]

2.1 Now assume every original block contained in $D$ is anticonnected. By [L3] and [L4], each member block induces a connected subgraph of $\overline G$. If two member blocks are consecutive on a mixed chain in $D$, then [L2] gives a cross-nonedge between them in $G$, hence a cross-edge in $\overline G$. Repeating the argument of step 1.1 inside $\overline G$ shows that $\overline G[D]$ is connected. By [L3], this means that $G[D]$ is anticonnected. [step 1.1, L2, L3, L4, algebra]

3.1 Steps 1.1 and 2.1 prove the connected and anticonnected conclusions. [step 1.1, step 2.1] ∎
