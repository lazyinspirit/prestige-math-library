---
id: def-t-k-homogeneous-property
kind: definition
title: "The $(t,k)$-homogeneous property"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-homogeneous-set-and-homogeneous-number]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "M. Bucić, J. Fox, and H. T. Pham, Equivalence between Erdős-Hajnal and polynomial Rödl and Nikiforov conjectures, Lemma 13"
      url: "https://arxiv.org/html/2403.08303v1"
pipeline_run: null
---

## Definition

Let $t$ and $k$ be natural numbers. A finite graph $G$ has the
**$(t,k)$-homogeneous property** if every $t$-element subset $X\subseteq V(G)$
contains a homogeneous subset $Y\subseteq X$ with $|Y|=k$
([[def-homogeneous-set-and-homogeneous-number]]).

A class $\mathcal C$ of finite graphs has the **$(t,k)$-homogeneous property**
if every graph in $\mathcal C$ has it.

## Remarks

- When $|V(G)|<t$, the condition on $t$-element subsets is vacuous.
- The property is designed to be used on exact $t$-vertex induced subgraphs:
  later proofs first build such a subgraph and then extract the homogeneous
  $k$-set from it.
