---
id: thm-the-bird-graph-has-the-erdos-hajnal-property
kind: theorem
title: "The Bird graph has the Erdős-Hajnal property"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [cor-the-bird-graph-is-generalized-nice, lem-the-e-graph-and-the-bird-are-leaf-reducible, lem-the-e-graph-and-the-bird-graph-are-wonderful, thm-leaf-reducible-wonderful-generalized-nice-finite-families-have-the-erdos-hajnal-property, def-erdos-hajnal-property-and-constant, def-homogeneous-set-and-homogeneous-number, def-bird-graph-and-co-bird-graph, def-h-free-and-family-free-graph, lem-forbidden-induced-subgraph-classes-are-hereditary]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Theorem 1.11 and Section 6"
      url: "https://arxiv.org/pdf/2606.06258v2"
    - title: "Nguyen, Notes on Recent Work on the Erdős-Hajnal Conjecture, Section 5, restricted-set/blockade exponent mechanism"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
---

## Statement

There exists $\epsilon_B>0$ such that every nonempty finite simple graph $G$
with no induced copy of Bird has a clique or stable set of size at least
$|V(G)|^{\epsilon_B}$. Equivalently the singleton family $\{\mathrm{Bird}\}$
has the Erdős-Hajnal property.

## Facts & Assumptions

**Given:** The singleton family $\{\mathrm{Bird}\}$ and its class of Bird-free finite graphs.

[L1] The singleton family $\{\mathrm{Bird}\}$ is generalized nice ([[cor-the-bird-graph-is-generalized-nice]]).

[L2] The singleton family $\{\mathrm{Bird}\}$ is leaf-reducible; deleting the added leaf $w$ gives the bull, and the reduced singleton family has the Erdős-Hajnal property ([[lem-the-e-graph-and-the-bird-are-leaf-reducible]]).

[L3] The singleton family $\{\mathrm{Bird}\}$ is wonderful ([[lem-the-e-graph-and-the-bird-graph-are-wonderful]]).

[L4] Every generalized nice, leaf-reducible, wonderful finite family has the Erdős-Hajnal property ([[thm-leaf-reducible-wonderful-generalized-nice-finite-families-have-the-erdos-hajnal-property]]).

[L5] A positive real $\epsilon$ is an Erdős-Hajnal constant for a hereditary class $\mathcal C$ when every nonempty $G\in\mathcal C$ satisfies $\operatorname{hom}(G)\ge|V(G)|^{\epsilon}$; a graph $H$ has the Erdős-Hajnal property when its class of $H$-free graphs has such a constant, and $\operatorname{hom}(G)=\max\{\omega(G),\alpha(G)\}$ is the size of the largest clique or stable set of $G$ ([[def-erdos-hajnal-property-and-constant]], [[def-homogeneous-set-and-homogeneous-number]]).

[L6] Graph $G$ is $H$-free when it has no induced copy of $H$ ([[def-h-free-and-family-free-graph]]), and the class of $H$-free graphs is hereditary for every finite graph $H$ ([[lem-forbidden-induced-subgraph-classes-are-hereditary]]).

[L7] The Bird graph has vertex set $\{x_1,x_2,x_3,y,z,w\}$ and edge set $\{x_1x_2,x_2x_3,x_1x_3,x_1y,x_2z,yw\}$ ([[def-bird-graph-and-co-bird-graph]]).

## Proof

**Proof technique:** direct application of the published reduction to the singleton family $\{\mathrm{Bird}\}$, then unwinding the definition of the Erdős-Hajnal constant.

1.1 The family $\{\mathrm{Bird}\}$ satisfies the three hypotheses of [L4]: it is generalized nice by [L1], leaf-reducible by [L2], and wonderful by [L3]. [L1, L2, L3, given]

2.1 By [L4], the family $\{\mathrm{Bird}\}$ has the Erdős-Hajnal property: the hereditary class of Bird-free graphs has an Erdős-Hajnal constant $\epsilon_B>0$. [step 1.1, L4]

3.1 Unwinding [L5] and using that the class of Bird-free graphs is hereditary by [L6], the constant $\epsilon_B$ satisfies $\operatorname{hom}(G)\ge|V(G)|^{\epsilon_B}$ for every nonempty Bird-free graph $G$; since $\operatorname{hom}(G)=\max\{\omega(G),\alpha(G)\}$, this says exactly that $G$ has a clique or stable set of size at least $|V(G)|^{\epsilon_B}$. [step 2.1, L5, L6]

4.1 The first assertion of the statement is step 3.1; the equivalence with the singleton family $\{\mathrm{Bird}\}$ having the Erdős-Hajnal property is the definitional reading [L5] of the class of Bird-free graphs, which by [L6] and [L7] is the class in which absence of an induced copy of Bird is required. [step 3.1, L5, L6, L7] ∎

## Remarks

- This is Theorem 1.11 of the source. The E theorem of the companion A-page item is used only through the preceding property-$(*)$ corollary for Bird, never as forward input; the dependency order is $E$ before Bird.
- As for the $E$-graph, no numerical value of $\epsilon_B$ is claimed: the generic reduction yields an unspecified positive exponent.
- **No Choice.** The proof composes published finite reductions and makes no selection from a family of nonempty sets.
