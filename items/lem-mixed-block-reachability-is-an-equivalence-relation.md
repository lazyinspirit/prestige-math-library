---
id: lem-mixed-block-reachability-is-an-equivalence-relation
kind: lemma
title: "Mixed-block reachability is an equivalence relation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-mixed-block-reachability-relation-on-a-blockade, lem-purity-symmetry-and-complementation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Section 6"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

For every blockade, the mixed-block reachability relation $\mathcal M$ is an
equivalence relation on its set of blocks.

## Facts & Assumptions

**Given:** A blockade $\mathcal L$ with mixed-block reachability relation $\mathcal M$.

[L1] Mixedness of disjoint vertex sets is symmetric ([[lem-purity-symmetry-and-complementation]]).

[L2] By definition, $A\,\mathcal M\,B$ means that $A=B$ or that there is a finite chain from $A$ to $B$ through consecutive mixed block pairs ([[def-mixed-block-reachability-relation-on-a-blockade]]).

## Proof

**Proof technique:** direct.

1.1 Reflexivity is immediate from [L2], because every block is related to itself. [L2]

1.2 If $A\,\mathcal M\,B$ by a mixed chain
$$A=A_1,A_2,\dots,A_m=B,$$
then [L1] makes the reversed chain
$$B=A_m,A_{m-1},\dots,A_1=A$$
again a mixed chain, so $B\,\mathcal M\,A$. Thus $\mathcal M$ is symmetric. [L1, L2, algebra]

1.3 If $A\,\mathcal M\,B$ and $B\,\mathcal M\,C$, then [L2] gives a mixed chain from $A$ to $B$ and another from $B$ to $C$. Concatenating them at $B$ yields a mixed chain from $A$ to $C$, so $A\,\mathcal M\,C$. Thus $\mathcal M$ is transitive. [L2, algebra]

2.1 Therefore $\mathcal M$ is reflexive, symmetric, and transitive, hence an equivalence relation. [step 1.1, step 1.2, step 1.3] ∎
