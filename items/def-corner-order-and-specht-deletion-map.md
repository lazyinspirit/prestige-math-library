---
id: def-corner-order-and-specht-deletion-map
kind: definition
title: Ordered removable corners and tabloid deletion maps
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-polytabloid-specht-module-over-an-arbitrary-field, def-removable-and-addable-nodes-of-a-partition, def-young-tableau-standard-tableau-and-shape, def-young-subgroup-tabloid-and-permutation-module, def-partition-young-diagram-and-conjugate-partition]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups, Theorem 4.16, printed pp. 18-19, and Theorem 6.8, printed p. 26"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "David A. Craven, Groups, Geometries and Representation Theory, Sections 2.2 and 2.4, printed pp. 22-23 and 28-31"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  audited: 2026-10-02
  precheck: n/a
---

## Definition

Let $R$ be a commutative ring, let $n\ge1$, and let $\lambda\vdash n$ with
Young diagram $[\lambda]$
([[def-partition-young-diagram-and-conjugate-partition]]). Tabloids, the
tabloid module $M^\lambda_R$ with its tabloid basis, and the left $S_n$-action
$\sigma\cdot\{t\}=\{\sigma\cdot t\}$ are as in
[[def-polytabloid-specht-module-over-an-arbitrary-field]].

**The ordered removable corners.** A removable node of $\lambda$ is a node
whose deletion leaves a Young diagram
([[def-removable-and-addable-nodes-of-a-partition]]); by the row criterion
there, the removable nodes are exactly the nodes $(i,\lambda_i)$ with
$\lambda_i>\lambda_{i+1}$, where $\lambda_{k+1}:=0$ for a partition
$\lambda=(\lambda_1,\dots,\lambda_k)$. For $n\ge1$ there is at least one: the
node $(k,\lambda_k)$ of the last row satisfies $\lambda_k>\lambda_{k+1}=0$.
List the removable rows from top to bottom,
$$r_1<r_2<\cdots<r_m,\qquad m\ge1,$$
so that the removable nodes are the corners $x_i:=(r_i,\lambda_{r_i})$, and for
each $i$ let
$$[\lambda^{(i)}]:=[\lambda]\setminus\{x_i\}.$$
This is the diagram of a partition of $n-1$ by the definition of a removable
node. In the parts list, shorten row $r_i$ by one; if its length becomes zero,
omit that last row. Indeed, $\lambda_{r_i}-1\ge\lambda_{r_i+1}$ by the
removability criterion, and if $\lambda_{r_i}=1$, that criterion forces
$r_i$ to be the last row. Thus the remaining row lengths are weakly decreasing
and $[\lambda^{(i)}]=[\lambda]\setminus\{x_i\}$
([[def-removable-and-addable-nodes-of-a-partition]]).

**The deletion maps.** For $1\le i\le m$ define a map on tabloids by
$$\theta_i\bigl(\{t\}\bigr):=\begin{cases}\{\,\text{the tabloid obtained from }\{t\}\text{ by deleting }n\,\},&n\text{ lies in row }r_i\text{ of }\{t\},\\[2pt] 0,&n\text{ does not lie in row }r_i\text{ of }\{t\},\end{cases}$$
and extend $R$-linearly; this is the unique $R$-linear map
$\theta_i:M^\lambda_R\to M^{\lambda^{(i)}}_R$ with the displayed values on the
tabloid basis. It is well defined: whether $n$ lies in row $r_i$ is a property
of the tabloid, and if it does, deleting $n$ from that row set leaves a set
partition of $\{1,\dots,n-1\}$ whose block sizes are the $\lambda^{(i)}_j$, so
the result is a tabloid of shape $\lambda^{(i)}$, which is a basis element of
$M^{\lambda^{(i)}}_R$. In tabloid notation,
$$\theta_i\bigl(\{t\}\bigr)=\{t\text{ with }n\text{ removed}\}$$
when $n$ is in row $r_i$ of the row sets of $t$, and $\theta_i(\{t\})=0$
otherwise.

**Elementary properties of $\theta_i$.** For every $\sigma\in S_{n-1}$ and
every $\lambda$-tabloid $\{t\}$, the permutation $\sigma$ fixes $n$ and
preserves the row of $n$, and deleting $n$ commutes with relabelling the other
entries, so
$$\theta_i\bigl(\sigma\cdot\{t\}\bigr)=\sigma\cdot\theta_i\bigl(\{t\}\bigr);$$
hence $\theta_i$ is $S_{n-1}$-linear: the source $M^\lambda_R$ is restricted
along $S_{n-1}\subseteq S_n$, while the target $M^{\lambda^{(i)}}_R$ has its
natural $S_{n-1}$-action on the labels $1,\dots,n-1$
([[def-polytabloid-specht-module-over-an-arbitrary-field]]). Moreover $\theta_i$
is surjective: given any $\lambda^{(i)}$-tabloid, insert the label $n$ into its
row $r_i$; this produces a $\lambda$-tabloid that $\theta_i$ sends back to it.
So the image of $\theta_i$ is all of $M^{\lambda^{(i)}}_R$, and its kernel
consists exactly of the elements of $M^\lambda_R$ whose expansion in the
tabloid basis involves only tabloids with $n$ outside row $r_i$.

## Remarks

- **Why $n\ge1$.** For $n=0$ there are no removable nodes and no map to
  define; the restriction problem considered below is only nontrivial for
  $n\ge1$. For $n=1$ one has $\lambda=(1)$, $m=1$, $r_1=1$,
  $\lambda^{(1)}=\varnothing$, and $\theta_1$ is the augmentation-like map
  sending the unique tabloid to the unique empty tabloid.

- **Order is part of the definition.** The list $r_1<\cdots<r_m$ gives the
  corners from the top row to the bottom row; this fixed order is what the
  filtration $0=V_0\subseteq V_1\subseteq\cdots\subseteq V_m=S^\lambda_F$ and
  the quotients $V_i/V_{i-1}\cong S^{\lambda^{(i)}}_F$ below refer to. Nothing
  here permits replacing this top-to-bottom order by an arbitrary order.

- **Relation to the tabloid order.** The maps $\theta_i$ are not the same as
  the tabloid ordering used in
  [[def-tabloid-and-column-orders-for-specht-straightening]]; they are
  $S_{n-1}$-equivariant deletions and are used only to compare submodules of
  $S^\lambda_F$ with Specht modules of the shapes $\lambda^{(i)}$.

- **No choice.** The list of corners is a finite ordered list determined by
  $\lambda$, and the maps are defined by an explicit rule on a finite basis;
  no selection principle is used.
