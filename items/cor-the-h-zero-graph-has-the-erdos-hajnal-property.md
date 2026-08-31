---
id: cor-the-h-zero-graph-has-the-erdos-hajnal-property
kind: corollary
title: "The graph $H_0$ has the Erdős-Hajnal property"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-h-zero-through-h-five, cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property, cor-the-five-cycle-has-the-erdos-hajnal-property, def-substitution-of-a-graph-for-a-vertex, thm-substitution-preserves-the-erdos-hajnal-property]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Figure 7 and Lemma 6.3 preface"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Statement

The graph $H_0$ has the Erdős-Hajnal property.

## Facts & Assumptions

**Given:** The graph $H_0$.

[L1] Every graph on at most three vertices has the Erdős-Hajnal property
([[cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property]]).

[L2] The graph $C_5$ has the Erdős-Hajnal property
([[cor-the-five-cycle-has-the-erdos-hajnal-property]]).

[L3] Substitution of graphs is defined by replacing one vertex of a graph by a
second graph and inheriting the original adjacency pattern
([[def-substitution-of-a-graph-for-a-vertex]]).

[L4] Substitution preserves the Erdős-Hajnal property
([[thm-substitution-preserves-the-erdos-hajnal-property]]).

[F1] If $K_2$ has vertices $u,v$ and one substitutes $C_5$ for $v$, then the
new graph consists of the $C_5$ rim together with the remaining vertex $u$
adjacent to every rim vertex. This is exactly the five-wheel $H_0$.

## Proof

**Proof technique:** direct.

1.1 By [L1], the two-vertex graph $K_2$ has the Erdős-Hajnal property, and by [L2] so does $C_5$. [L1, L2]

2.1 By [F1] and [L3], the graph $H_0$ is obtained by substituting $C_5$ for one vertex of $K_2$. Therefore [L4] applies to the two graphs of step 1.1 and gives the Erdős-Hajnal property for $H_0$. [step 1.1, L3, L4, F1] ∎
