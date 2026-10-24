---
id: thm-the-e-graph-has-the-erdos-hajnal-property
kind: theorem
title: "The $E$-graph has the Erdős-Hajnal property"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [cor-the-e-graph-is-generalized-nice, lem-the-e-graph-and-the-bird-are-leaf-reducible, lem-the-e-graph-and-the-bird-graph-are-wonderful, thm-leaf-reducible-wonderful-generalized-nice-finite-families-have-the-erdos-hajnal-property, def-erdos-hajnal-property-and-constant, def-homogeneous-set-and-homogeneous-number, def-e-graph-and-co-e-graph, def-h-free-and-family-free-graph, lem-forbidden-induced-subgraph-classes-are-hereditary]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Theorem 1.10 and Section 6"
      url: "https://arxiv.org/pdf/2606.06258v2"
    - title: "Nguyen, Notes on Recent Work on the Erdős-Hajnal Conjecture, Section 5, restricted-set/blockade exponent mechanism"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
---

## Statement

There exists $\epsilon_E>0$ such that every nonempty finite simple graph $G$
with no induced copy of the $E$-graph has a clique or stable set of size at
least $|V(G)|^{\epsilon_E}$. Equivalently the singleton family $\{E\}$ has the
Erdős-Hajnal property.

## Facts & Assumptions

**Given:** The singleton family $\{E\}$ and its class of $E$-free finite graphs.

[L1] The singleton family $\{E\}$ is generalized nice ([[cor-the-e-graph-is-generalized-nice]]).

[L2] The singleton family $\{E\}$ is leaf-reducible; deleting the leaf $q$ from $E$ gives $P_5$, and the reduced singleton family has the Erdős-Hajnal property ([[lem-the-e-graph-and-the-bird-are-leaf-reducible]]).

[L3] The singleton family $\{E\}$ is wonderful ([[lem-the-e-graph-and-the-bird-graph-are-wonderful]]).

[L4] Every generalized nice, leaf-reducible, wonderful finite family has the Erdős-Hajnal property ([[thm-leaf-reducible-wonderful-generalized-nice-finite-families-have-the-erdos-hajnal-property]]).

[L5] A positive real $\epsilon$ is an Erdős-Hajnal constant for a hereditary class $\mathcal C$ when every nonempty $G\in\mathcal C$ satisfies $\operatorname{hom}(G)\ge|V(G)|^{\epsilon}$; a graph $H$ has the Erdős-Hajnal property when its class of $H$-free graphs has such a constant, and $\operatorname{hom}(G)=\max\{\omega(G),\alpha(G)\}$ is the size of the largest clique or stable set of $G$ ([[def-erdos-hajnal-property-and-constant]], [[def-homogeneous-set-and-homogeneous-number]]).

[L6] Graph $G$ is $H$-free when it has no induced copy of $H$ ([[def-h-free-and-family-free-graph]]), and the class of $H$-free graphs is hereditary for every finite graph $H$ ([[lem-forbidden-induced-subgraph-classes-are-hereditary]]).

[L7] The $E$-graph is the six-vertex graph with edge set $\{p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q\}$ ([[def-e-graph-and-co-e-graph]]).

## Proof

**Proof technique:** direct application of the published reduction to the singleton family $\{E\}$, then unwinding the definition of the Erdős-Hajnal constant.

1.1 The family $\{E\}$ satisfies the three hypotheses of [L4]: it is generalized nice by [L1], leaf-reducible by [L2], and wonderful by [L3]. [L1, L2, L3, given]

2.1 By [L4], the family $\{E\}$ has the Erdős-Hajnal property: the hereditary class of $E$-free graphs has an Erdős-Hajnal constant $\epsilon_E>0$. [step 1.1, L4]

3.1 Unwinding [L5] and using that the class of $E$-free graphs is hereditary by [L6], the constant $\epsilon_E$ satisfies $\operatorname{hom}(G)\ge|V(G)|^{\epsilon_E}$ for every nonempty $E$-free graph $G$; since $\operatorname{hom}(G)=\max\{\omega(G),\alpha(G)\}$, this says exactly that $G$ has a clique or stable set of size at least $|V(G)|^{\epsilon_E}$. [step 2.1, L5, L6]

4.1 The first assertion of the statement is step 3.1; the equivalence with the singleton family $\{E\}$ having the Erdős-Hajnal property is the definitional reading [L5] of the class of $E$-free graphs, which by [L6] and [L7] is the class in which absence of an induced copy of the $E$-graph is required. [step 3.1, L5, L6, L7] ∎

## Remarks

- This is Theorem 1.10 of the source, deduced there from its Lemma 6.3, Lemma 6.4 and the local criterion of Lemma 5.1, exactly as generalized niceness for $\{E\}$ is recorded on the preceding corollary. No numerical value of $\epsilon_E$ is claimed; the source does not give one and the generic reduction produces only an unspecified positive exponent.
- **No Choice.** The proof composes published finite reductions and makes no selection from a family of nonempty sets.
