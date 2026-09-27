---
id: ex-removable-nodes-and-row-endpoints
kind: example
title: Removable nodes versus row endpoints
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-removable-and-addable-nodes-of-a-partition]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "David Craven, Groups, Geometries and Representation Theory - Definition 1.10, printed p. 7 (PDF p. 9)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups - Chapter 2, printed pp. 7-8 (PDF pp. 8-9)"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
verification:
  precheck: pass
---

## Example

For the shapes $\lambda=(3,3,1)$, $\mu=(3,2,1)$ and the empty shape
$\varnothing$ the removable and addable nodes are as follows.

- $\lambda=(3,3,1)$ has two removable nodes, the row endpoints $(2,3)$ and
  $(3,1)$, while the row endpoint $(1,3)$ is **not** removable because the node
  $(2,3)$ lies directly below it. Its addable nodes are $(1,4)$, $(3,2)$ and
  $(4,1)$.
- $\mu=(3,2,1)$ has all three of its row endpoints $(1,3)$, $(2,2)$, $(3,1)$
  removable, and its addable nodes are $(1,4)$, $(2,3)$, $(3,2)$ and
  $(4,1)$.
- $\varnothing$ has no removable node and exactly one addable node, $(1,1)$,
  whose insertion produces the partition $(1)$.

Thus ending a row is necessary but not sufficient for removability, and the
first shape above exhibits the difference.

## Facts & Assumptions

**Given:** The partitions $(3,3,1)$ of $7$ and $(3,2,1)$ of $6$ and the empty partition $\varnothing$.

[F1] A node of $[\lambda]$ is removable when deleting it leaves a Young diagram and a point outside $[\lambda]$ is addable when inserting it leaves a Young diagram; for $\lambda=(\lambda_1,\dots,\lambda_k)$ with $\lambda_{k+1}:=0$ the removable nodes are exactly the row endpoints $(i,\lambda_i)$ with $\lambda_i>\lambda_{i+1}$, and the addable nodes are exactly the points $(i,\lambda_i+1)$ with $i=1$ or $\lambda_{i-1}>\lambda_i$, together with $(k+1,1)$; deleting a removable node leaves the diagram of a partition of $n-1$, and $\operatorname{Rem}(\varnothing)=\emptyset$, $\operatorname{Add}(\varnothing)=\{(1,1)\}$ ([[def-removable-and-addable-nodes-of-a-partition]]).

## Verification

**Proof technique:** direct.

1.1 For $\lambda=(3,3,1)$ the row lengths are $3,3,1$, so the row endpoints are $(1,3),(2,3),(3,1)$; by [F1] the removable ones are those with $\lambda_i>\lambda_{i+1}$, and with $\lambda_4:=0$ these are $(2,3)$, because $3>1$, and $(3,1)$, because $1>0$, while $\lambda_1=\lambda_2$ excludes $(1,3)$: deleting $(1,3)$ would leave the row lengths $2,3,1$, which are not weakly decreasing, so this row endpoint is not removable. Deleting the two removable nodes instead gives the partitions $(3,2,1)$ and $(3,3)$ of size $6$. [given, F1]

1.2 For $\lambda=(3,3,1)$ the addable points of the form $(i,\lambda_i+1)$ are $(1,4)$, which is in the first row, and $(3,2)$, because $\lambda_2=3>\lambda_3=1$, while $(2,4)$ fails the test $\lambda_1>\lambda_2$ since $3=3$; the point $(4,1)$ opens a new row and is addable by [F1]. Inserting these three points gives the partitions $(4,3,1)$ from $(1,4)$, $(3,3,2)$ from $(3,2)$ and $(3,3,1,1)$ from $(4,1)$. [given, F1]

1.3 For $\mu=(3,2,1)$ the row lengths are strictly decreasing, $3>2>1>0$, so by [F1] all three row endpoints are removable: $(1,3)$ with deletion $(2,2,1)$, $(2,2)$ with deletion $(3,1,1)$, and $(3,1)$ with deletion $(3,2)$, each of size $5$. [given, F1]

1.4 For $\mu=(3,2,1)$ the addable points are $(1,4)$ in the first row, $(2,3)$ because $\mu_1=3>\mu_2=2$, $(3,2)$ because $\mu_2=2>\mu_3=1$, and $(4,1)$ opening a new row, and no other point of the form $(i,\mu_i+1)$ passes the test of [F1]; inserting $(2,3)$ and $(3,2)$ gives the partitions $(3,3,1)$ and $(3,2,2)$ of size $7$. [F1]

1.5 For $\varnothing$ the diagram has no nodes, so $\operatorname{Rem}(\varnothing)=\emptyset$; a point $(i,j)$ outside the empty diagram leaves a Young diagram after insertion only for $(i,j)=(1,1)$, since the diagrams $\{(i,j)\}$ with $j\ge2$ or $i\ge2$ are not left-justified, so $\operatorname{Add}(\varnothing)=\{(1,1)\}$ and the resulting partition is $(1)$, in agreement with [F1]. [F1]

2.1 The three shapes are thus completely described: $\operatorname{Rem}(3,3,1)=\{(2,3),(3,1)\}$ with the non-removable row endpoint $(1,3)$, $\operatorname{Rem}(3,2,1)=\{(1,3),(2,2),(3,1)\}$, $\operatorname{Rem}(\varnothing)=\emptyset$, together with the addable sets $\operatorname{Add}(3,3,1)=\{(1,4),(3,2),(4,1)\}$, $\operatorname{Add}(3,2,1)=\{(1,4),(2,3),(3,2),(4,1)\}$ and $\operatorname{Add}(\varnothing)=\{(1,1)\}$. ∎ [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5]
