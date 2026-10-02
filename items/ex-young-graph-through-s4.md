---
id: ex-young-graph-through-s4
kind: example
title: "The Young graph through size four"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-young-graph, cor-complex-specht-restriction-branching-rule, thm-complex-specht-induction-branching-rule, def-removable-and-addable-nodes-of-a-partition, def-partition-young-diagram-and-conjugate-partition, def-young-tableau-standard-tableau-and-shape, thm-standard-polytabloid-basis, thm-complex-irreducibles-of-symmetric-groups-are-specht-modules, cor-sum-of-squares-formula-for-irreducible-degrees, cor-symmetric-group-has-factorial-cardinality-again, def-column-antisymmetrizer-polytabloid-and-specht-module]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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

Consider the Young graph of [[def-young-graph]], in which the vertices are all
partitions, the rank of the vertex $\lambda$ is $|\lambda|$, and the edges
$\lambda\to\nu$ are the pairs with $\nu=\lambda+y$ for an addable node $y$ of
$[\lambda]$. Then:

1. **(Vertices at ranks $0$ to $4$.)** The vertices of rank $n$ for
   $0\le n\le4$ are exactly
   $$\varnothing;\quad (1);\quad (2),(1,1);\quad (3),(2,1),(1,1,1);\quad (4),(3,1),(2,2),(2,1,1),(1,1,1,1),$$
   so there are $1,1,2,3,5$ of them at ranks $0,1,2,3,4$.
2. **(Edges.)** The edges whose source has rank at most $3$ are exactly
   $$\varnothing\to(1);\qquad (1)\to(2),\ (1)\to(1,1);\qquad (2)\to(3),\ (2)\to(2,1),\ (1,1)\to(2,1),\ (1,1)\to(1,1,1);$$
   $$(3)\to(4),\ (3)\to(3,1),\ (2,1)\to(3,1),\ (2,1)\to(2,2),\ (2,1)\to(2,1,1),\ (1,1,1)\to(2,1,1),\ (1,1,1)\to(1,1,1,1),$$
   that is $1,2,4,7$ edges between consecutive ranks $0$-$1$, $1$-$2$, $2$-$3$
   and $3$-$4$. The vertex $(2,1)$ has the two incoming edges from $(2)$ and
   $(1,1)$ and the three outgoing edges to $(3,1)$, $(2,2)$ and $(2,1,1)$.
3. **(Branching along the edges, each edge once.)** For every $\lambda\vdash n$
   with $1\le n\le4$, restriction gives an isomorphism of $\mathbb C S_{n-1}$-modules
   $\operatorname{Res}^{S_n}_{S_{n-1}}S^\lambda_{\mathbb C}\cong\bigoplus_{x\in\operatorname{Rem}(\lambda)}S^{\lambda-x}_{\mathbb C}$,
   one summand per incoming edge of $\lambda$; for every $\lambda\vdash n$ with
   $0\le n\le3$, induction gives an isomorphism of $\mathbb C S_{n+1}$-modules
   $\operatorname{Ind}^{S_{n+1}}_{S_n}S^\lambda_{\mathbb C}\cong\bigoplus_{y\in\operatorname{Add}(\lambda)}S^{\lambda+y}_{\mathbb C}$,
   one summand per outgoing edge of $\lambda$. For instance
   $\operatorname{Res}S^{(2,2)}_{\mathbb C}\cong S^{(2,1)}_{\mathbb C}$ and
   $\operatorname{Ind}S^{(2,1)}_{\mathbb C}\cong S^{(3,1)}_{\mathbb C}\oplus S^{(2,2)}_{\mathbb C}\oplus S^{(2,1,1)}_{\mathbb C}$.
4. **(Standard tableaux and dimensions.)** The numbers $f^\lambda$ of standard
   $\lambda$-tableaux of ranks up to $4$ are
   $$f^\varnothing=f^{(1)}=f^{(2)}=f^{(1,1)}=1,\qquad f^{(3)}=1,\ f^{(2,1)}=2,\ f^{(1,1,1)}=1,$$
   $$f^{(4)}=1,\ f^{(3,1)}=3,\ f^{(2,2)}=2,\ f^{(2,1,1)}=3,\ f^{(1,1,1,1)}=1,$$
   with $\dim_{\mathbb C}S^\lambda_{\mathbb C}=f^\lambda$, and they satisfy
   $\sum_{\lambda\vdash n}(f^\lambda)^2=n!$ for $n=0,1,2,3,4$, that is
   $1,1,2,6,24$.

## Facts & Assumptions

**Given:** the Young graph of partitions with its rank function and addable-node
edges, the complex Specht modules $S^\lambda_{\mathbb C}$ for $|\lambda|\le4$,
and the partitions of $0,1,2,3,4$.

[F1] The Young graph has all partitions as vertices; its edges $\alpha\to\beta$
are exactly the pairs with $[\beta]=[\alpha]\cup\{y\}$ for an addable node $y$
of $\alpha$, distinct addable nodes giving distinct edges; every edge raises
the rank by one, and paths of length $k$ from $\varnothing$ end at partitions
of size $k$ ([[def-young-graph]]).

[F2] A node $(i,\lambda_i)$ is removable exactly when $\lambda_i>\lambda_{i+1}$
(with $\lambda_{k+1}:=0$); a node $(i,\lambda_i+1)$ is addable exactly when
$i=1$ or $\lambda_{i-1}>\lambda_i$, and the node $(k+1,1)$ opening a new row is
always addable; also $\operatorname{Rem}(\varnothing)=\emptyset$ and
$\operatorname{Add}(\varnothing)=\{(1,1)\}$
([[def-removable-and-addable-nodes-of-a-partition]]).

[F3] A partition of $n$ is a weakly decreasing finite sequence of positive
integers summing to $n$, with $[\lambda]$ its Young diagram
([[def-partition-young-diagram-and-conjugate-partition]]); a standard
$\lambda$-tableau is a filling of $[\lambda]$ by $1,\dots,n$, each once,
increasing along rows and down columns, and $f^\lambda$ denotes their number
([[def-young-tableau-standard-tableau-and-shape]]).

[F4] For every $\lambda\vdash n$ the standard polytabloids form a $\mathbb C$-basis
of the complex Specht module $S^\lambda_{\mathbb C}$, so
$\dim_{\mathbb C}S^\lambda_{\mathbb C}=f^\lambda$
([[thm-standard-polytabloid-basis]],
[[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F5] For $m\ge1$ and $\nu\vdash m$ one has
$\operatorname{Res}^{S_m}_{S_{m-1}}S^\nu_{\mathbb C}\cong\bigoplus_{x\in\operatorname{Rem}(\nu)}S^{\nu-x}_{\mathbb C}$,
each removable node contributing one summand
([[cor-complex-specht-restriction-branching-rule]]).

[F6] For $n\ge0$ and $\lambda\vdash n$ one has
$\operatorname{Ind}^{S_{n+1}}_{S_n}S^\lambda_{\mathbb C}\cong\bigoplus_{y\in\operatorname{Add}(\lambda)}S^{\lambda+y}_{\mathbb C}$,
each addable node contributing one summand
([[thm-complex-specht-induction-branching-rule]]).

[F7] The modules $\{S^\lambda_{\mathbb C}:\lambda\vdash n\}$ form a complete
irredundant list of the irreducible complex $S_n$-representations
([[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]]), and
for a finite group $G$ over an algebraically closed field $k$ with
$\operatorname{char}k\nmid|G|$ a complete list $V_1,\dots,V_r$ of the
irreducibles satisfies $\sum_i(\dim_kV_i)^2=|G|$
([[cor-sum-of-squares-formula-for-irreducible-degrees]]); moreover
$|S_n|=n!$ ([[cor-symmetric-group-has-factorial-cardinality-again]]).

All computations below range over the finitely many partitions of $n\le4$ and
the finite groups $S_0,\dots,S_4$, so no choice principle is used.

## Proof

**Proof technique:** direct.

1.1 The partitions of $0,1,2,3,4$ are listed by size directly from the definition [F3]: $\varnothing$; $(1)$; $(2),(1,1)$; $(3),(2,1),(1,1,1)$; $(4),(3,1),(2,2),(2,1,1),(1,1,1,1)$, giving $1,1,2,3,5$ vertices of ranks $0,1,2,3,4$, which is claim 1. [F1, F3, given]

2.1 Addable nodes by the criterion of [F2]: for $\varnothing$ the node $(1,1)$ gives $(1)$; for $(1)$ the nodes $(1,2)$ and $(2,1)$ give $(2)$ and $(1,1)$; for $(2)$ the nodes $(1,3)$ and $(2,1)$ give $(3)$ and $(2,1)$; for $(1,1)$ the nodes $(1,2)$ and $(3,1)$ give $(2,1)$ and $(1,1,1)$; for $(3)$ the nodes $(1,4)$ and $(2,1)$ give $(4)$ and $(3,1)$; for $(2,1)$ the nodes $(1,3)$ (here $i=1$), $(2,2)$ (here $\lambda_1=2>\lambda_2=1$) and $(3,1)$ (a new row) give $(3,1)$, $(2,2)$ and $(2,1,1)$; and for $(1,1,1)$ the nodes $(1,2)$ (here $i=1$) and $(4,1)$ (a new row) give $(2,1,1)$ and $(1,1,1,1)$. By [F1] each addable node gives exactly one edge, so the edges out of ranks $0,1,2,3$ are exactly the $1,2,4,7$ edges displayed in claim 2; in particular $(2,1)$ has the three outgoing edges to $(3,1),(2,2),(2,1,1)$. [F1, F2, step 1.1, algebra]

2.2 Standard tableaux by explicit enumeration in the sense of [F3]: rank $0$ has the empty tableau; rank $1$ has $1$; rank $2$ has $12$ and $1/2$; rank $3$ has $123$, the two tableaux $\begin{smallmatrix}1&2\\3&\end{smallmatrix}$, $\begin{smallmatrix}1&3\\2&\end{smallmatrix}$ and $1/2/3$; rank $4$ has $1234$, the three tableaux $\begin{smallmatrix}1&2&3\\4&\end{smallmatrix}$, $\begin{smallmatrix}1&2&4\\3&\end{smallmatrix}$, $\begin{smallmatrix}1&3&4\\2&\end{smallmatrix}$, the two tableaux $\begin{smallmatrix}1&2\\3&4\end{smallmatrix}$, $\begin{smallmatrix}1&3\\2&4\end{smallmatrix}$, the three tableaux $\begin{smallmatrix}1&2\\3&\\4&\end{smallmatrix}$, $\begin{smallmatrix}1&3\\2&\\4&\end{smallmatrix}$, $\begin{smallmatrix}1&4\\2&\\3&\end{smallmatrix}$ and $1/2/3/4$. Counting these gives the values $f^\lambda$ displayed in claim 4. [F3, step 1.1]

3.1 Removable nodes by the criterion of [F2], read in the reverse direction: $(1)$ has the removable node $(1,1)$ with $(1)-(1,1)=\varnothing$; $(2)$ has $(1,2)$ giving $(1)$; $(1,1)$ has $(2,1)$ giving $(1)$; $(3)$ has $(1,3)$ giving $(2)$; $(2,1)$ has $(1,2)$ giving $(1,1)$ and $(2,1)$ giving $(2)$; $(1,1,1)$ has $(3,1)$ giving $(1,1)$; $(4)$ has $(1,4)$ giving $(3)$; $(3,1)$ has $(1,3)$ giving $(2,1)$ and $(2,1)$ giving $(3)$; $(2,2)$ has $(2,2)$ giving $(2,1)$ only; $(2,1,1)$ has $(1,2)$ giving $(1,1,1)$ and $(3,1)$ giving $(2,1)$; and $(1,1,1,1)$ has $(4,1)$ giving $(1,1,1)$. In every case the resulting partition has one box fewer, and the incoming edges so obtained are exactly the edges of step 2.1 read backwards: for example the two incoming edges of $(2,1)$ come from $(2)$ and $(1,1)$, and the only incoming edge of $(2,2)$ comes from $(2,1)$. [F1, F2, step 2.1, algebra]

3.2 By [F4] each $\dim_{\mathbb C}S^\lambda_{\mathbb C}$ equals the corresponding value $f^\lambda$ of step 2.2. Substituting these dimensions into [F7] with $G=S_n$ over $k=\mathbb C$ gives $\sum_{\lambda\vdash n}(f^\lambda)^2=|S_n|=n!$ by [F7]; explicitly $1^2=1$, $1^2=1$, $1^2+1^2=2$, $1^2+2^2+1^2=6$ and $1^2+3^2+2^2+3^2+1^2=24$ for $n=0,1,2,3,4$. [F4, F7, step 2.2, algebra]

4.1 Claim 3 follows from the two branching rules: by [F5], for each $\lambda\vdash n$ with $1\le n\le4$ the restriction of $S^\lambda_{\mathbb C}$ is the direct sum of one copy of $S^{\lambda-x}_{\mathbb C}$ for each removable node $x$, that is one summand per incoming edge of step 3.1; by [F6], for each $\lambda\vdash n$ with $0\le n\le3$ the induction of $S^\lambda_{\mathbb C}$ is the direct sum of one copy of $S^{\lambda+y}_{\mathbb C}$ for each addable node $y$, that is one summand per outgoing edge of step 2.1. The two displayed instances are the cases $\lambda=(2,2)$ with the single removable node and $\lambda=(2,1)$ with its three addable nodes. [F5, F6, step 2.1, step 3.1]

5.1 Boundary and consistency audit. Rank $0$ carries the single vertex $\varnothing$, whose unique standard tableau is the empty one, and the empty product $n!=0!=1$ matches $f^\varnothing=1$; every partition of $n\ge1$ has at least one removable node and at least one addable node by [F2] (for the addable case take the node opening a new row), so both branching sums are nonempty and each of the $1,2,4,7$ edges between consecutive ranks is counted exactly once in each direction; and the edge counts agree with the two enumerations of the same edge set, since summing the number of incoming edges over the partitions of $n$ for $n=1,2,3,4$ gives $1,2,4,7$, the same numbers as in step 2.1. All sets involved are finite and explicitly listed, so no choice principle enters. This proves claims 1 to 4 and hence the Statement. [F1, F2, F7, step 2.1, step 4.1, step 3.2] ∎

## Remarks

- **The graph is the branching rule.** Reading claim 3 along claim 2 says that
  the Young graph is exactly the bookkeeping device for the two branching
  rules: the neighbours one rank below a vertex $\lambda$ index the summands
  of the restriction of $S^\lambda_{\mathbb C}$, and the neighbours one rank
  above index the summands of its induction, always with multiplicity one on
  this finite piece of the graph.

- **Two convenient checks.** The numbers of edges between consecutive ranks
  $0$-$1$, $1$-$2$, $2$-$3$ and $3$-$4$ computed in step 2.1 are $1,2,4,7$,
  while the vertex counts at ranks $1,2,3,4$ are the partition numbers
  $1,2,3,5$: the edge count exceeds the vertex count exactly because a vertex
  such as $(2,1)$ or $(2,1,1)$ has two removable corners and hence two
  incoming edges. And the sum-of-squares identity of step 3.2,
  $\sum_{\lambda\vdash n}(f^\lambda)^2=n!$, is the numerical shadow of the
  decomposition of the regular representation of $S_n$ into Specht modules.
