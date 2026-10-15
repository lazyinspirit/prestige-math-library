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
  - lem-active-routes-in-a-finite-dag-have-active-paths
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

[F3] Every active finite route between distinct endpoints outside $C$ has an active path. [[lem-active-routes-in-a-finite-dag-have-active-paths]]

## Proof

**Proof technique:** expand moral paths into routes, remove inactive collider occurrences by directed splices, then shorten active routes.

**Given:** The hypotheses in the statement.

1.1 Suppose an active path joins $X$ to $Y$. From any noncollider follow an outgoing path edge forward until reaching an endpoint or a collider. The reached endpoint is in $X\cup Y$, while a reached collider is an ancestor of $C$ by activity. Thus every path vertex is in $H=\operatorname{An}_G(X\cup Y\cup C)$. Replace each collider segment $u\to w\leftarrow v$ by its moral edge $u-v$; colliders cannot be consecutive along a path. The resulting walk avoids $C$, since all retained internal vertices were noncolliders and the endpoints are outside $C$. Loop deletion in this undirected graph yields a moral path avoiding $C$. [F1, F2, construct]

2.1 Conversely suppose a moral path avoiding $C$ joins $X$ to $Y$. Keep its skeleton edges, and expand each remaining moral edge $u-v$ using a common child $w\in H$ as $u\to w\leftarrow v$. This is a finite route; its inserted occurrences are colliders and all its other occurrences are outside $C$. Every collider is in $H$. Call a collider occurrence bad if its vertex is not an ancestor of $C$. Among routes joining $X$ to $Y$ with every vertex in $H$ and every noncollider outside $C$, minimize the number of bad collider occurrences; the expanded route makes the class nonempty. If $w$ is a bad occurrence, it is an ancestor of some $s\in X\cup Y$. A directed path from $w$ to $s$ avoids $C$, since otherwise $w$ would be an ancestor of $C$. If $s\in X$, replace the whole prefix up to this occurrence of $w$ by that directed path traversed backward; if $s\in Y$, replace the suffix by the path traversed forward. If $w=s$, simply terminate at that occurrence. Otherwise the retained incident arrow points into $w$ and the new incident arrow points out of $w$, making it an allowed noncollider. All new internal chain occurrences are noncolliders outside $C$, and other retained occurrences have their original incidences. Intersections of the chain with the retained segment cause repetitions only; no loops are deleted in this step, and activity is defined occurrence by occurrence. At least the selected bad occurrence disappears and no new bad occurrence is introduced, contradicting minimality. Thus the minimum route is active. Its endpoints are distinct because $X,Y$ are disjoint, and [F3] gives an active path with those endpoints. [F1, F2, F3, construct, choose]

3.1 An active path therefore exists if and only if there is a moral path avoiding $C$. Negating this equivalence proves the claim. If either endpoint set is empty, neither type of path exists and both separation statements hold. [step 1.1, step 2.1, algebra] ∎
