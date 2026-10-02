---
id: cor-paths-in-the-young-graph-index-standard-tableaux
kind: corollary
title: Young-graph paths correspond to standard tableaux
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-young-graph, lem-largest-entry-of-a-standard-tableau-is-removable, def-young-tableau-standard-tableau-and-shape, def-partition-young-diagram-and-conjugate-partition, def-removable-and-addable-nodes-of-a-partition, thm-standard-polytabloid-basis]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups, Theorem 4.16, printed pp. 18-19, and Theorem 6.8, printed p. 26"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "David A. Craven, Groups, Geometries and Representation Theory, Sections 2.2 and 2.4, printed pp. 22-23 and 28-31"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  precheck: pass
---

## Statement

For every $\lambda\vdash n$ with $n\ge0$, the paths in the Young graph from
the empty partition $\varnothing$ to $\lambda$
([[def-young-graph]]) are in bijection with the standard $\lambda$-tableaux
([[def-young-tableau-standard-tableau-and-shape]]). In particular the number
of such paths is $f^\lambda$, the number of standard $\lambda$-tableaux.

## Facts & Assumptions

**Given:** a partition $\lambda\vdash n$ with $n\ge0$.

[F1] An edge $\alpha\to\beta$ of the Young graph adds a unique node, so $[\beta]=[\alpha]\cup\{y\}$ for an addable node $y$ of $\alpha$, and $|\beta|=|\alpha|+1$; paths are finite sequences of edges, and the unique path of length $0$ from $\lambda$ to $\lambda$ is the single vertex ([[def-young-graph]]).

[F2] A $\lambda$-tableau is a bijection $t:[\lambda]\to\{1,\dots,n\}$; it is standard when its entries strictly increase along rows and down columns, and $f^\lambda$ denotes the number of standard $\lambda$-tableaux; the empty tableau is the unique standard tableau of shape $\varnothing$ ([[def-young-tableau-standard-tableau-and-shape]]).

[F3] $[\lambda]=\{(i,j):1\le i\le k,\ 1\le j\le\lambda_i\}$ where $k$ is the number of parts, so $[\lambda]$ is closed to the left and upwards: $(i,j)\in[\lambda]$ with $j\ge2$ implies $(i,j-1)\in[\lambda]$, and $(i,j)\in[\lambda]$ with $i\ge2$ implies $(i-1,j)\in[\lambda]$ ([[def-partition-young-diagram-and-conjugate-partition]]).

[F4] A node $(i,\lambda_i)$ is removable exactly when $\lambda_i>\lambda_{i+1}$; deleting it leaves the Young diagram of a partition of $n-1$ ([[def-removable-and-addable-nodes-of-a-partition]]).

[F5] For $n\ge1$ the box occupied by $n$ in a standard $\lambda$-tableau is removable, and deleting it leaves a standard tableau of size $n-1$ ([[lem-largest-entry-of-a-standard-tableau-is-removable]]).

## Proof

**Proof technique:** constructive.

1.1 [construct] Let $\varnothing=\lambda^{(0)}\to\lambda^{(1)}\to\cdots\to\lambda^{(n)}=\lambda$ be a path from $\varnothing$ to $\lambda$; by [F1] each step $k$ adds one node $y_k$ to $[\lambda^{(k-1)}]$ to produce $[\lambda^{(k)}]$, and $|\lambda^{(k)}|=k$. Define $t:[\lambda]\to\{1,\dots,n\}$ by $t(x):=k$ where $x$ is the node added at step $k$. The nodes $y_1,\dots,y_n$ are pairwise distinct and their union is $[\lambda]$, because each $y_k$ is the unique element of $[\lambda^{(k)}]\setminus[\lambda^{(k-1)}]$ and $[\lambda]=\bigcup_k[\lambda^{(k)}]$; hence $t$ is a well-defined bijection, that is, a $\lambda$-tableau. [F1, F2, construct, algebra]

1.2 [construct] Conversely, let $t$ be a standard $\lambda$-tableau. If $n=0$ take the path of length $0$ at $\varnothing$; otherwise set $\lambda^{(n)}:=\lambda$ and $t_n:=t$, and for $k=n,n-1,\dots,1$ let $t_{k-1}$ be the standard tableau of size $k-1$ obtained from $t_k$ by deleting the box containing $k$, which by [F5] is removable and leaves a standard tableau; let $\lambda^{(k-1)}$ be its shape, a partition of $k-1$ by [F4]. Then $[\lambda^{(k-1)}]\subseteq[\lambda^{(k)}]$ with exactly one node removed, that node being removable in $\lambda^{(k)}$ and addable in $\lambda^{(k-1)}$, so $\lambda^{(k-1)}\to\lambda^{(k)}$ is an edge of the Young graph and we obtain a path from $\varnothing$ to $\lambda$. [F1, F4, F5, construct, algebra]

2.1 The tableau $t$ of step 1.1 is standard. Let $(i,j),(i,j+1)\in[\lambda]$. Both lie in $[\lambda^{(m)}]$ for $m:=t(i,j+1)$, because $t(i,j+1)=m$ means $(i,j+1)\in[\lambda^{(m)}]$, and then $(i,j)\in[\lambda^{(m)}]$ by left-closure of the Young diagram $[\lambda^{(m)}]$, [F3]. Since $[\lambda^{(m)}]=\bigcup_{l\le m}[\lambda^{(l)}]$ and the $y_l$ are distinct, $(i,j)$ was added at a step $t(i,j)\le m=t(i,j+1)$; the two boxes are distinct, so $t(i,j)\ne t(i,j+1)$ and therefore $t(i,j)<t(i,j+1)$. The same argument with up-closure in place of left-closure gives $t(i,j)<t(i+1,j)$ whenever both boxes lie in $[\lambda]$. Hence $t$ is standard. [F2, F3, step 1.1, algebra]

2.2 The path of step 1.2 has the property that $\lambda^{(k)}$ is the diagram of the boxes of $t$ carrying labels $\le k$. Indeed $\lambda^{(n)}=[\lambda]$ is all boxes, and at each step the box deleted from $\lambda^{(k)}$ is the box of the largest label $k$, which is present in $\lambda^{(k)}$ because deleting the boxes of the largest labels $n,n-1,\dots,k+1$ leaves all boxes with labels $\le k$; hence by downward induction on $k$ the diagram $[\lambda^{(k)}]$ is exactly the set of boxes with labels in $\{1,\dots,k\}$ and has size $k$. [F2, step 1.2, algebra]

3.1 The two constructions are mutually inverse. Starting from a path and forming $t$ by step 1.1, step 2.2 shows that the path recovered from $t$ by the deletion procedure of step 1.2 has $\lambda^{(k)}$ equal to the set of boxes with labels $\le k$, which is exactly the diagram of the $k$-th vertex of the original path by definition of $t$; so the recovered path is the original one. Starting from a standard $t$ and forming the path by step 1.2, the tableau produced from that path by step 1.1 assigns to each box the index $k$ at which it was deleted in the construction of step 1.2, which is its label; so the recovered tableau is $t$. Hence the two assignments are inverse bijections between the set of paths from $\varnothing$ to $\lambda$ and the set of standard $\lambda$-tableaux. [step 1.1, step 1.2, step 2.2, algebra]

4.1 Applying the bijection of step 3.1, the number of paths from $\varnothing$ to $\lambda$ equals the number of standard $\lambda$-tableaux, which is $f^\lambda$ by [F2]. For $\lambda=\varnothing$ both sets consist of one element: the unique path of length $0$ by [F1] and the empty tableau by [F2]. This proves the corollary. [F1, F2, step 3.1, discharge-construct] ∎

## Remarks

- **Consequence for branching counts.** The corollary turns the multiplicity bookkeeping of restriction and induction over $\mathbb C$ into a count of standard tableaux: the number of chains of removable nodes from $\lambda$ down to the empty partition is $f^\lambda$, matching the dimension of the complex Specht module $S^\lambda$ ([[thm-standard-polytabloid-basis]]).

- **The first few sizes.** The paths from $\varnothing$ through size $0,1,2,3,4$ give $f^{(1)}=1$, $f^{(2)}=f^{(1,1)}=1$, and $f^{(3)}=1$, $f^{(2,1)}=2$, $f^{(1,1,1)}=1$; also $f^{(4)}=1$, $f^{(3,1)}=3$, $f^{(2,2)}=2$, $f^{(2,1,1)}=3$, $f^{(1^4)}=1$. The example on the companion page enumerates these paths.

- **No choice.** Both constructions are given by explicit finite recursions on the finitely many boxes of $[\lambda]$; no selection principle is used.
