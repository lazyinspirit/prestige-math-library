---
id: cex-positive-pair-densities-alone-do-not-force-a-triangle
kind: counterexample
title: "Three pair densities equal to $1/2$ need not produce a single transversal triangle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-edge-density-between-vertex-sets, thm-triangle-counting-lemma-for-regular-triples]
aliases: []
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Theorem 2.2.1 and Remark 2.2.2"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
pipeline_run: null
---

## Statement

There are three pairwise disjoint vertex sets $X,Y,Z$ for which every cross-density equals $1/2$ but no transversal triple spans a triangle.

## Facts & Assumptions

**Given:** Three nonempty even-sized sets, each split equally into parts labelled $0$ and $1$.

[L1] Cross-density is the proportion of possible cross-pairs that are edges ([[def-edge-density-between-vertex-sets]]).

[L2] The triangle counting lemma requires regularity in addition to positive pair densities ([[thm-triangle-counting-lemma-for-regular-triples]]).

## Counterexample

**Proof technique:** contradiction.

1.1 Join $X$ to $Y$ and $Y$ to $Z$ exactly when the endpoint labels agree, and join $X$ to $Z$ exactly when their labels differ. [given, choose]

2.1 For each cross-pair and each vertex, exactly half the vertices on the other side are neighbours. Thus all three densities are $1/2$ by [L1]. [step 1.1, L1, algebra]

2.2 Suppose, for contradiction, that $(x,y,z)$ is a transversal triangle. Its $XY$ and $YZ$ edges force the three labels to satisfy $x=y=z$, while its $XZ$ edge forces $x\ne z$. [assume-contra, step 1.1]

3.1 This contradiction shows that no transversal triangle exists. Therefore density alone does not imply the conclusion of [L2]; its regularity hypothesis carries real content. [step 2.2, L2, discharge-contradiction] ∎
