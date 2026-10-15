---
id: lem-d-separation-ancestral-moral-separation
kind: lemma
title: "D-separation is separation in the ancestral moral graph"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-d-separation-in-a-dag
  - def-ancestral-moral-graph-of-a-dag
proof_strategy: direct
axiom_use: "The graph is finite, so the finite path and shortening arguments use no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Judea Pearl, Causal Diagrams for Empirical Research, §2-1, p. 672"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/R218-B.pdf"
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, Fine Point 6.1, pp. 78–79"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_2jan25.pdf"
verification:
  precheck: pass
---

## Statement

For disjoint $X,Y,C\subseteq V$, $C$ d-separates $X$ and $Y$ in $G$ if and
only if deleting $C$ from $\operatorname{mor}_G(X\cup Y\cup C)$ leaves no
undirected path from $X$ to $Y$.

## Facts & Assumptions

**Given:** The finite DAG, disjoint vertex sets, and graph conventions above.

[F1] A path is active exactly when it has no conditioned noncollider and
every collider has a conditioned descendant, including itself.
[[def-d-separation-in-a-dag]]

[F2] The ancestral moral graph retains ancestors of $X\cup Y\cup C$, forgets
arrow directions, and joins distinct parents of a common child.
[[def-ancestral-moral-graph-of-a-dag]]

## Proof
**Proof technique:** convert active paths to moral paths and reverse the construction by shortening unactivated colliders.

**Given:** The hypotheses in the statement.

1.1 Suppose an active path joins $X$ to $Y$. Every internal noncollider on the path has at least one adjacent path-arrow pointing away from it. Follow that arrow along the path; either the directed segment reaches an endpoint or first reaches a collider. In the latter case that collider has a directed descendant in $C$ by [F1]. An internal collider already lies in $\operatorname{An}_G(C)$ by activity, and the path endpoints lie in $X\cup Y$. Hence every vertex on the path lies in $\operatorname{An}_G(X\cup Y\cup C)$. Whenever the path enters and leaves a collider $w$ as $u\to w\leftarrow v$, replace the two edges by the moral edge $u-v$. Every noncollider on the resulting walk lies outside $C$ by [F1], and each collider itself has been removed. The walk therefore gives an undirected connection from $X$ to $Y$ in the ancestral moral graph with $C$ deleted. [F1, F2, construct]

2.1 Conversely, take a shortest undirected path from $X$ to $Y$ in the ancestral moral graph with $C$ deleted. Replace each edge that joins two parents of a common child $w$ and is not a skeleton edge by the two-edge route $u\to w\leftarrow v$. The resulting finite route in $G$ has all noncolliders outside $C$ because the original path avoids $C$; every collider introduced by a replacement is an ancestor of $X\cup Y\cup C$ by [F2]. Colliders that are ancestors of $C$ are active. If an introduced collider $w$ is not an ancestor of $C$, then it is an ancestor of $X$ or $Y$. Follow a directed path from $w$ to that endpoint and splice it into the route, replacing the segment on that endpoint's side of $w$. The new segment has only noncolliders, none in $C$ (otherwise $w$ would be an ancestor of $C$), and makes $w$ a noncollider. Delete any closed subroute at its first repeated vertex; this retains the endpoints and removes, but does not create, a collider on the directed replacement segment. Choosing a route with the fewest nonactivated collider occurrences, and then the fewest edges, shows that the splicing process terminates with an active path. More explicitly, the splice deletes the portion from the selected endpoint to $w$ and replaces it by a directed chain from $w$ to a vertex of $X$ or $Y$, traversed in reverse. The retained incidence at $w$ has one arrow entering and one leaving, so $w$ is no longer a collider. Every interior vertex of the replacement chain is a noncollider and is outside $C$. If the chain meets the retained route, erase the closed segment between its first repeated vertex; the directed segment contributes no collider, and the retained incidences are those of the route at that vertex. Thus the complexity pair (number of nonactivated colliders, then length) strictly decreases. It terminates with an active route; removing any remaining repeated-vertex loop by the same first-repeat argument gives an active path. Hence an undirected connection implies an active path. [F1, F2, step 1.1, construct]

3.1 The two implications show that an active path exists exactly when the ancestral moral graph with $C$ removed connects $X$ to $Y$. Negating both sides gives the claimed equivalence. If $X$ or $Y$ is empty both path conditions are false, so the equivalence still holds. [step 1.1, step 2.1, algebra] ∎
