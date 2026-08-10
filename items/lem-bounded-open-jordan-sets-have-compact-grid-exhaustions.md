---
id: lem-bounded-open-jordan-sets-have-compact-grid-exhaustions
kind: lemma
title: "A bounded open Jordan set has an increasing exhaustion by compact finite unions of grid rectangles with vanishing content remainder"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-multidimensional-grid-partition, def-jordan-inner-and-outer-content, thm-jordan-boundary-criterion, lem-finite-cube-covers-admit-grid-control, cor-jordan-content-finite-additivity]
justified_by: []
aliases: []
landmark: false
proof_strategy: exhaustion
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, §6.1"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Statement

Let $V\subseteq\mathbb R^n$ be bounded, open, and Jordan measurable. There are compact Jordan sets
$$K_1\subseteq K_2\subseteq\cdots\subseteq V,$$
each a finite union of closed grid rectangles, such that every compact $C\subseteq V$ lies in some $K_j$ and
$$\operatorname{cont}(V\setminus K_j)\longrightarrow0.$$

## Facts & Assumptions

**Given:** Bounded open Jordan set $V$.

[L1] A bounded set is Jordan measurable exactly when its boundary has content zero ([[thm-jordan-boundary-criterion]]).

[L2] A finite cube cover can be replaced by sufficiently fine grid cells with controlled total volume ([[lem-finite-cube-covers-admit-grid-control]]).

[L3] Jordan content is finitely additive on interior-disjoint Jordan pieces ([[cor-jordan-content-finite-additivity]]).

## Proof

**Proof technique:** exhaustion.

1.1 Enclose $V$ in a rectangle and choose nested dyadic grids whose meshes tend to zero. Let $K_j$ be the union of every closed cell of the $j$th grid that is contained in $V$. Only finitely many cells occur. Every child of a retained cell is retained, so $K_j\subseteq K_{j+1}$; each $K_j$ is compact, Jordan, and contained in $V$. [given]

2.1 If compact $C\subseteq V$, the distance from $C$ to the closed complement of $V$ is positive. Once the mesh diameter is smaller than that distance, every grid cell meeting $C$ is contained in $V$, so $C\subseteq K_j$. [given, step 1.1]

3.1 Every unretained cell meeting $V$ also meets a mesh-sized neighborhood of $\partial V$. By [L1], that boundary has content zero; [L2] therefore makes the total volume of all such cells arbitrarily small for fine enough grids. Finite additivity [L3] bounds $\operatorname{cont}(V\setminus K_j)$ by that volume, proving the limit. [L1, L2, L3] ∎
