---
id: def-e-overlap-chain-relation-in-a-comb-block
title: "E overlap chains inside one comb block"
kind: definition
status: published
origin: pipeline
deps: ["def-e-graph-and-co-e-graph", "def-comb-in-a-graph"]
provenance:
  statement: ai-altered
  proof: not-applicable
justified_by: [lem-e-overlap-classes-form-an-anticonnected-partition]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Huang–Ju–Zhou, Erdős–Hajnal beyond the five-vertex path, §6.2, Lemma 6.5, overlap relation"
      url: https://arxiv.org/html/2606.06258v2
---

## Definition

Fix a block $B_i$ of a finite graph comb ([[def-comb-in-a-graph]]). Let $\mathcal E_i$ consist of all six-vertex subsets of $B_i$ inducing the graph in [[def-e-graph-and-co-e-graph]]. Put $X_i=\bigcup_{S\in\mathcal E_i}S$ and $Y_i=B_i\setminus X_i$. For $d,e\in X_i$, define $d\mathrel{R_i}e$ if there exist $m\geq0$ and vertices $d=d_0,d_1,\ldots,d_m=e$ in $X_i$ such that each consecutive pair is contained in some $S\in\mathcal E_i$. A zero-length chain is allowed. If $\mathcal E_i$ is empty then $X_i$ and the relation are empty. We call this the $E$ overlap chain relation.

Throughout this definition, “the graph in [[def-e-graph-and-co-e-graph]]” means the $E$-graph defined there, not the co-$E$ graph.
