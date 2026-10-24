---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/lem-d-separation-ancestral-moral-separation.json
  precheck: pass
id: lem-d-separation-ancestral-moral-separation
kind: lemma
title: "D-separation is separation in the ancestral moral graph"
status: published
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

1.2 Conversely suppose a moral path avoiding $C$ joins $X$ to $Y$. Keep its skeleton edges, and expand each remaining moral edge $u-v$ using a common child $w\in H$ as $u\to w\leftarrow v$. This is a finite route; its inserted occurrences are colliders and all its other occurrences are outside $C$. Every collider is in $H$. Call a collider occurrence bad if its vertex is not an ancestor of $C$. Among routes joining $X$ to $Y$ with every vertex in $H$ and every noncollider outside $C$, minimize the number of bad collider occurrences; the expanded route makes the class nonempty. If $w$ is a bad occurrence, it is an ancestor of some $s\in X\cup Y$. A directed path from $w$ to $s$ avoids $C$, since otherwise $w$ would be an ancestor of $C$. If $s\in X$, replace the whole prefix up to this occurrence of $w$ by that directed path traversed backward; if $s\in Y$, replace the suffix by the path traversed forward. If $w=s$, simply terminate at that occurrence. Otherwise the retained incident arrow points into $w$ and the new incident arrow points out of $w$, making it an allowed noncollider. All new internal chain occurrences are noncolliders outside $C$, and other retained occurrences have their original incidences. Intersections of the chain with the retained segment cause repetitions only; no loops are deleted in this step, and activity is defined occurrence by occurrence. At least the selected bad occurrence disappears and no new bad occurrence is introduced, contradicting minimality. Thus the minimum route is active. Its endpoints are distinct because $X,Y$ are disjoint, and [F3] gives an active path with those endpoints. [F1, F2, F3, construct, choose]

2.1 An active path therefore exists if and only if there is a moral path avoiding $C$. Negating this equivalence proves the claim. If either endpoint set is empty, neither type of path exists and both separation statements hold. [step 1.1, step 1.2, algebra] ∎

## Remarks

The following example illustrates the collider replacement in step 1.1.
Let $G$ have exactly the arrows $x\to w$, $y\to w$, $w\to c$, and
$w\to t$, with $X=\{x\}$, $Y=\{y\}$, and $C=\{c\}$.
Then $H=\operatorname{An}_G(X\cup Y\cup C)=\{x,y,w,c\}$, so $t$ is
removed before moralization. The path $x\to w\leftarrow y$ is active
given $C$ because its collider $w$ has descendant $c\in C$.
Moralization adds the edge $x-y$ (dashed below); after deleting $c$, this
edge still joins $X$ to $Y$. Thus both graphs display failure of the
respective separation condition. Dashed edges are ordinary undirected
moral edges, and the arrows between panels indicate graph operations.
The proof above is independent of this illustration.

```tikz
\begin{tikzpicture}[scale=1.6,transform shape,line width=0.6pt,
  every node/.style={font=\normalsize}]
\node at (0,2.5) {$G$};
\node (x) at (-0.7,1.5) {$x$};
\node (y) at (0.7,1.5) {$y$};
\node (w) at (0,0.5) {$w$};
\node (c) at (-0.7,-0.6) {$c$};
\node (t) at (0.7,-0.6) {$t$};
\draw[->] (x) -- (w);
\draw[->] (y) -- (w);
\draw[->] (w) -- (c);
\draw[->] (w) -- (t);
\draw[->] (1.1,0.6) -- (2,0.6);
\node at (3,2.5) {$G[H]$};
\node (hx) at (2.3,1.5) {$x$};
\node (hy) at (3.7,1.5) {$y$};
\node (hw) at (3,0.5) {$w$};
\node (hc) at (3,-0.6) {$c$};
\draw[->] (hx) -- (hw);
\draw[->] (hy) -- (hw);
\draw[->] (hw) -- (hc);
\draw[->] (4.1,0.6) -- (5,0.6);
\node at (6,2.5) {$\mathrm{mor}_G(X\cup Y\cup C)$};
\node (mx) at (5.3,1.5) {$x$};
\node (my) at (6.7,1.5) {$y$};
\node (mw) at (6,0.5) {$w$};
\node (mc) at (6,-0.6) {$c$};
\draw (mx) -- (mw);
\draw (my) -- (mw);
\draw (mw) -- (mc);
\draw[dashed] (mx) -- (my);
\draw[->] (7.1,0.6) -- (8,0.6);
\node at (9,2.5) {Delete $C$};
\node (dx) at (8.3,1.5) {$x$};
\node (dy) at (9.7,1.5) {$y$};
\node (dw) at (9,0.5) {$w$};
\draw (dx) -- (dw);
\draw (dy) -- (dw);
\draw[dashed] (dx) -- (dy);
\end{tikzpicture}
```
