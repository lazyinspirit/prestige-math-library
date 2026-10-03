---
id: def-content-vector-of-a-standard-tableau
kind: definition
title: "The content of a node and the content vector of a standard tableau"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-young-tableau-standard-tableau-and-shape, def-partition-young-diagram-and-conjugate-partition]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Okounkov-Vershik, A New Approach to the Representation Theory of the Symmetric Groups, Selecta Math. (N.S.) 2 (1996) 581-605; complete arXiv repost math/0503040, section 5, printed pp. 17-22"
      url: "https://arxiv.org/pdf/math/0503040"
    - title: "Garsia, Young Seminormal Representation, Murphy Elements and Content Evaluations, UCSD lecture notes (2003), section 3, printed pp. 18-25"
      url: "https://www.math.ucsd.edu/~garsia/somepapers/Youngseminormal.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Definition

Let $\lambda\vdash n$ with Young diagram $[\lambda]$
([[def-partition-young-diagram-and-conjugate-partition]]), so that the nodes
of $[\lambda]$ are the pairs $(r,c)$ with $r,c\ge1$ and $c\le\lambda_r$
(rows numbered downward, columns rightward).

The **content** of a node $(r,c)\in[\lambda]$ is
$$c(r,c):=c-r,$$
the column index minus the row index. The node $(r,c)$ therefore has content
$t$ exactly when it lies on the diagonal $c-r=t$; the content of $(1,1)$ is
$0$, contents increase by $1$ along a row and decrease by $1$ down a column.

Now let $T$ be a standard tableau of shape $\lambda$
([[def-young-tableau-standard-tableau-and-shape]]). For $1\le k\le n$ let
$(r_k,c_k)$ be the node of $[\lambda]$ carrying the entry $k$, so that
$T(r_k,c_k)=k$. The **content vector** of $T$ is
$$\operatorname{Cont}(T):=\bigl(c_T(1),\dots,c_T(n)\bigr)\in\mathbb Z^n,\qquad c_T(k):=c(r_k,c_k)=c_k-r_k,$$
the list of contents of the nodes read in the order of the entries
$1,2,\dots,n$. For the empty tableau of shape $\varnothing$ the content vector
is the empty vector, the unique element of $\mathbb Z^0$.

## Remarks

- **Well-definedness.** A tableau $T$ of shape $\lambda$ is a bijection
  $[\lambda]\to\{1,\dots,n\}$, so each $k\in\{1,\dots,n\}$ occupies exactly
  one node $(r_k,c_k)$ and the integers $c_T(k)=c_k-r_k$ are determined by
  $T$. The map $T\mapsto\operatorname{Cont}(T)$ uses the fixed row and column
  coordinates and the labels of $T$: it depends only on which entry stands
  in which node.

- **The entries of the content vector are the contents of the shape.** Since
  $T$ is a bijection onto the $n$ nodes of $[\lambda]$, the multiset of
  entries of $\operatorname{Cont}(T)$ equals the multiset of node contents
  $\{c(x):x\in[\lambda]\}$, independent of $T$. In particular two standard
  tableaux of the same shape have content vectors that differ by a
  permutation of their entries, and the multiset of contents of a tableau is
  an invariant of its shape.

- **Two extreme examples.** The row tableau of shape $(n)$ carries $k$ in
  $(1,k)$, so its content vector is $(0,1,2,\dots,n-1)$; the column tableau
  of shape $(1^n)$ carries $k$ in $(k,1)$, so its content vector is
  $(0,-1,-2,\dots,-(n-1))$.

- **First entries.** The entry $1$ always occupies the node $(1,1)$, because
  every other node has a node weakly to its left and weakly above it, whose
  entry would be smaller. Hence $c_T(1)=0$ for every nonempty standard
  tableau $T$. Similarly, $c_T(k)$ need not be monotone in $k$: for the
  tableau $\begin{smallmatrix}1&2\\3\end{smallmatrix}$ of shape $(2,1)$ one
  has $\operatorname{Cont}=(0,1,-1)$.
