---
id: ex-threshold-median-query-binary-search
kind: example
title: "Median queries identify a finite threshold by binary search"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-pool-based-realizable-active-learning
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Daniel Joseph Hsu, Algorithms for Active Learning, Chapter 1 §1.2"
      url: "https://www.cs.columbia.edu/~djhsu/papers/dissertation.pdf"
---

## Example

Fix $n\ge1$ and ordered distinct points $\mathcal X=\{x_1<\cdots<x_n\}$ with sigma-algebra $2^{\mathcal X}$. Let $D_X$ be any probability measure on $(\mathcal X,2^{\mathcal X})$, let $\mathcal H=\{h_k:0\le k\le n\}$ with $h_k(x_j)=1$ exactly when $j>k$, take the pool $U=(x_1,\ldots,x_n)$, target $h_{k^*}$ for some $k^*\in\{0,\ldots,n\}$, and exact oracle $\mathcal O(x_j)=h_{k^*}(x_j)$. Consider the adaptive median selector that maintains the candidate interval $[a,b]\subseteq\{0,\ldots,n\}$, initially $[0,n]$; while $a<b$, it sets $s=b-a+1$, queries $x_j$ with $j=a+\lfloor s/2\rfloor$, and retains the threshold indices matching the returned label. It stops when one candidate remains. This selector identifies $k^*$ in at most the least integer $q\ge0$ such that $2^q\ge n+1$ queries. It is a separate median-query rule; the A-page procedure scans the fixed pool in ascending order.

## Example references

[[def-pool-based-realizable-active-learning]]: supplies the finite-class, ordered-pool, target, and exact-oracle conventions used here.

[Daniel Joseph Hsu, *Algorithms for Active Learning*, Chapter 1 §1.2](https://www.cs.columbia.edu/~djhsu/papers/dissertation.pdf)

## Illustration

For $n=7$, each internal node is the queried pool point, each edge is its exact binary label, and each terminal label is the remaining threshold-index interval. Thus $x_4$ splits $[0,7]$ evenly; the next median queries $x_2$ or $x_6$. The figure records only these first two levels; the proof below establishes the general branch sizes and query bound without relying on the diagram.

```tikz
\begin{tikzpicture}[
  level distance=15mm,
  sibling distance=43mm,
  every node/.style={draw, rounded corners, align=center, font=\small},
  edge from parent/.style={draw, -latex}
]
\node {query $x_4$\\$[0,7]$}
  child { node {query $x_2$\\$[0,3]$}
    child { node {$[0,1]$} edge from parent node[left,draw=none] {$1$} }
    child { node {$[2,3]$} edge from parent node[right,draw=none] {$0$} }
    edge from parent node[left,draw=none] {$1$}
  }
  child { node {query $x_6$\\$[4,7]$}
    child { node {$[4,5]$} edge from parent node[left,draw=none] {$1$} }
    child { node {$[6,7]$} edge from parent node[right,draw=none] {$0$} }
    edge from parent node[right,draw=none] {$0$}
  };
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The finite threshold instance and adaptive median selector stated in the Example.

[F1] [[def-pool-based-realizable-active-learning]]: the pool is a finite ordered list, the target belongs to the finite classifier class, and each oracle response equals the target label at the queried point.

## Verification

1.1 Suppose the current candidate interval is $[a,b]$ with $s=b-a+1\ge2$. Then $j=a+\lfloor s/2\rfloor$ satisfies $a<j\le b$. Among candidate indices, the label at $x_j$ is $1$ exactly for $k<j$, namely $k\in[a,j-1]$, and is $0$ exactly for $k\ge j$, namely $k\in[j,b]$. These branches have sizes $\lfloor s/2\rfloor$ and $\lceil s/2\rceil$. By [F1], the exact oracle retains the branch containing $k^*$, so the target remains in the updated interval and the new size is at most $\lceil s/2\rceil$. [given, F1, algebra]

2.1 Starting from $s_0=n+1$, repeated ceiling-halving gives $s_r\le\lceil(n+1)/2^r\rceil$: if this holds at $r$, then $s_{r+1}\le\lceil s_r/2\rceil\le\lceil(n+1)/2^{r+1}\rceil$. For the least $q$ with $2^q\ge n+1$, this bound is at most $1$. Since the target remains in the interval by step 1.1, the selector stops with the singleton $\{k^*\}$ after at most $q$ queries. [given, step 1.1, algebra] ∎
