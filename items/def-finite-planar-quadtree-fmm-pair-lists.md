---
id: def-finite-planar-quadtree-fmm-pair-lists
kind: definition
title: Finite planar quadtree and separated interaction lists
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Leslie Greengard and Vladimir Rokhlin, A Fast Algorithm for Particle Simulations, Journal of Computational Physics 73 (1987), 325–348"
      url: "https://web.stanford.edu/class/cme324/classics/greengard-rokhlin.pdf"
    - title: "James Demmel, Fast Hierarchical Methods for the N-body Problem, Part 2, CS267 Lecture 25 (1996)"
      url: "https://people.eecs.berkeley.edu/~demmel/cs267/lecture27/lecture27.html"
---

## Definition

Let $N\ge0$, $I=\{1,\ldots,N\}$, source positions $z_j\in\mathbb C$ and charges $q_j\in\mathbb C$ for $j\in I$, and target positions equal to the same labelled positions. A root square is a closed square of side $s_0>0$ containing every source position. Its cells are the dyadic subsquares obtained by repeatedly bisecting each side. At each split use half-open child squares, with the outer top and right edges included in the last child, so every point belongs to exactly one child. A **finite quadtree** is a finite rooted tree of such cells in which each internal cell has its four geometric children and each leaf contains at most $s$ labels for a fixed integer $s\ge1$. Empty children are retained as geometric cells but are skipped in source and target lists. For a cell $C$, write $c_C$ for its center, $s_C$ for its side length, $I_C=\{j:z_j\in C\}$, and $a_C=s_C/\sqrt2$ for the radius of its circumscribed disk.

A cell pair $(C,D)$ is **source-separated from target-separated** when $R_{CD}:=|c_D-c_C|>a_C+a_D$; $C$ is the source cell and $D$ the target cell. For every such pair fix an analytic logarithm $L_{CD}$ on the open disk $\{w:|w-(c_D-c_C)|<R_{CD}\}$. This disk excludes zero and contains all differences $z_i-z_j$ with $i\in I_D$, $j\in I_C$. For each direct near particle pair $(j,i)$ fix one value $L_{ji}$ of the logarithm of $z_i-z_j$, when this difference is nonzero. Once the recursive rule below terminates, for a collision-free configuration define the exact target potential and its complex derivative using the resulting lists as follows:
Here $\mathcal F$ and $\mathcal N$ denote the far and direct near lists produced by that rule.
$$u_i:=\sum_{(j,i)\in\mathcal N}q_jL_{ji}+\sum_{\substack{(C,D)\in\mathcal F\\ i\in I_D}}\ \sum_{j\in I_C}q_jL_{CD}(z_i-z_j),\qquad g_i:=\sum_{j\ne i}\frac{q_j}{z_i-z_j}.$$
Thus each ordered source-target pair contributes its source charge times the fixed direct-near branch value or the fixed far-cell branch value prescribed by its list entry. The complex derivative is independent of the chosen logarithm values.

The **recursive interaction decomposition** of an ordered pair of nonempty cells $(C,D)$ is defined as follows. If $C=D$ is a leaf, record as direct near pairs all $(j,i)\in I_C\times I_D$ with $j\ne i$. If $C=D$ is internal, replace $(C,D)$ by all ordered pairs $(E,F)$ of its nonempty children. If $C\ne D$ and $R_{CD}>a_C+a_D$, record the far cell pair $(C,D)$. If both cells are leaves and the pair is not separated, record all direct near particle pairs $(j,i)\in I_C\times I_D$ with $j\ne i$. In every other case, if exactly one cell is nonleaf, split that cell; if both are nonleaf, split the one of larger side length, breaking a tie by splitting the source cell. Replace the pair by the child pairs having nonempty source and target sets. For $N\ge1$, start at the root pair; for $N=0$, make no recursive calls and set both lists to empty. The resulting lists are the **far interaction list** $\mathcal F$ and the **direct near-pair list** $\mathcal N$. Their termination and exact pair-partition property are mathematical assertions, proved separately.

For a far pair $(C,D)$ put $\rho_{CD}=(a_C+a_D)/R_{CD}<1$ and $Q_C=\sum_{j\in I_C}|q_j|$. Two leaves are adjacent when their closed squares meet. A tree is **2:1 level-restricted** when any adjacent leaves have depths differing by at most one. It is **linear-size level-restricted for this decomposition** when it is 2:1 level-restricted and there are fixed constants $C_T,C_V$ such that its number $T$ of nonempty cells and the number $V$ of recursive cell-pair inspections satisfy $T\le C_T\max(1,N)$ and $V\le C_V\max(1,N)$. A list is **bounded** when there are fixed constants $C_F,C_N$ with $|\mathcal F|\le C_F T$ and $|\mathcal N|\le C_N\max(1,N)$. The work theorem uses these explicit counts; 2:1 balance alone is not asserted to supply them.
