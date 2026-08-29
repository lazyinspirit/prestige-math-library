---
id: thm-one-loop-graph-of-groups-is-an-hnn-extension
kind: theorem
title: "A one-loop graph of groups gives an HNN extension"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-hnn-extension-and-stable-letter, thm-bass-serre-structure-theorem, def-fundamental-group-of-a-graph-of-groups-relative-to-a-maximal-tree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
pipeline_run: null
---

## Statement

If a graph of groups has one vertex and one loop edge outside the chosen
maximal subtree, then its fundamental group is the HNN extension of the vertex
group with associated subgroups the two edge-group images.

## Facts & Assumptions

**Given:** A one-loop graph of groups with vertex group $A$, edge group $C$, and boundary maps $\alpha,\beta:C\hookrightarrow A$.

[L1] An HNN extension adjoins one stable letter $t$ satisfying $t\alpha(c)t^{-1}=\beta(c)$ for every $c\in C$. ([[def-hnn-extension-and-stable-letter]])

[L2] The relative fundamental group is obtained from the path group by killing the chosen tree edges; here the loop edge is not killed. ([[def-fundamental-group-of-a-graph-of-groups-relative-to-a-maximal-tree]])

## Proof

**Proof technique:** direct.

1.1 Since the quotient graph has one vertex and the loop edge is outside the maximal subtree, [L2] leaves one edge symbol $t$ together with the vertex group $A$. The defining relation of the path group is exactly $t\alpha(c)t^{-1}=\beta(c)$. [L2, given]

2.1 Therefore the resulting fundamental group is precisely the HNN extension described in [L1]. [L1, step 1.1] ∎
