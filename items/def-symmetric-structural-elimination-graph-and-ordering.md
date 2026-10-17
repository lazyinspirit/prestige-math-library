---
id: def-symmetric-structural-elimination-graph-and-ordering
kind: definition
title: "Structural graphs and ordered symmetric elimination"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-matrix-space]
justified_by: []
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., Chapter 3 §§3.2.1, 3.3.2 and 3.6, printed pp. 77–83 and 96–98"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
    - title: "Prabhakar Poupart and Jingjing Wan, CS475/CS675 Lecture 4: Sparse Gaussian Elimination, Graph Representation, slides 6–10, University of Waterloo, May 12, 2016"
      url: "https://cs.uwaterloo.ca/~ppoupart/teaching/cs475-spring16/slides/cs475-lecture4.pdf"
dependency_level: 0
---

## Definition

Let $F$ be a field, let $n\in\mathbb N$ (including $0$), and let $A\in M_{n\times n}(F)$ satisfy
$A_{ij}=A_{ji}$ for every $i,j<n$ (that is, $A$ is symmetric). Its
**structural graph** is
the simple undirected graph $G_0=(V,E_0)$ with vertex set
$V=\{0,\ldots,n-1\}$ and edge set

$$E_0:=\bigl\{\{i,j\}:0\le i<j<n,\ A_{ij}\ne0\bigr\}.$$

An **elimination ordering** is a listing $v_0,\ldots,v_{n-1}$ in which every
vertex of $V$ occurs exactly once. Define the current vertex set by
$V_k=\{v_\ell:k\le\ell<n\}$, starting with the structural graph $G_0$. At
step $k$, the **later neighbors** of $v_k$ are

$$N_k(v_k):=\{u\in V_k\setminus\{v_k\}:\{u,v_k\}\in E_k\}.$$

The filled graph $G_{k+1}=(V_{k+1},E_{k+1})$ is obtained by deleting $v_k$ and
its incident edges, retaining all edges between remaining vertices, and adding
every edge between two distinct vertices of $N_k(v_k)$. An edge added at step
$k$ that was not already in $E_k$ is a **fill edge**. Repeating this rule
defines the symbolic elimination pattern for the ordering; it is defined from
the initial graph and ordering alone, without numerical pivot values.

If $N_k(v_k)$ is nonempty, the **parent** of $v_k$ is the later neighbor
$v_\ell$ with least position $\ell>k$ in the ordering. If $N_k(v_k)$ is
empty, $v_k$ is a root. Each non-root has a unique parent, and positions
strictly increase along parent edges, so there is no directed cycle. If the
underlying undirected graph had a cycle with $q$ vertices, orient its $q$ edges
from child to parent. Each vertex has at most one outgoing parent edge, so these
$q$ edges force every cycle vertex to have one outgoing edge along the cycle;
following them gives a directed cycle, contradicting strict increase. Thus the
parent relation is an elimination forest.
