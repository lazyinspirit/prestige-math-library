---
id: lem-a-triangulation-has-a-unique-triangle-on-the-closing-side
kind: lemma
title: "For $m\\ge3$ and a triangulation $T$ of the $m$-gon there is a unique $k$ with $1<k<m$ such that $\\{1,k\\}$ and $\\{k,m\\}$ are both chords of $T$ or sides, and $T$ splits along $k$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-convex-polygon-chords-crossings-and-triangulations, thm-sum-rule, thm-product-rule]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, Exercise 3.5.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Statement

Let $m\ge3$ and let $T\in\mathcal{P}_m$ be a triangulation of the labelled
$m$-gon.

Then there is a unique index $k$ with $1<k<m$ such that both $\{1,k\}$ and
$\{k,m\}$ are sides or diagonals of the triangulation. Equivalently, the closing
side $\{1,m\}$ lies in a unique triangle with third vertex $k$.

For that index $k$:

1. every diagonal of $T$ has both endpoints in $\{1,\dots,k\}$ or both endpoints
   in $\{k,\dots,m\}$;
2. the restriction of $T$ to $\{1,\dots,k\}$ is a triangulation of the $k$-gon;
3. the restriction of $T$ to $\{k,\dots,m\}$ is a triangulation of the
   $(m-k+1)$-gon.

## Facts & Assumptions

**Given:** a natural number $m\ge3$ and a triangulation $T\in\mathcal{P}_m$.

[F1] A triangulation is a maximal set of pairwise non-crossing diagonals of the labelled polygon ([[def-convex-polygon-chords-crossings-and-triangulations]]).

## Proof

**Proof technique:** direct.

1.1 Let $k$ be the least element of $\{2,\dots,m-1\}$ such that $\{k,m\}$ is a diagonal of $T$ or the side $\{m-1,m\}$. This set is nonempty because $m-1$ belongs to it. [F1, choose]

2.1 The chord $\{1,k\}$ is a side or lies in $T$. If it were a diagonal outside $T$, maximality would give a diagonal $\{p,q\}\in T$ crossing it, so $1<p<k<q$; if $q<m$ then $\{p,q\}$ would cross $\{k,m\}$, impossible, and if $q=m$ then $p<k$ would contradict the minimality of $k$. [F1, step 1.1]

3.1 Every diagonal of $T$ has both endpoints in $\{1,\dots,k\}$ or both endpoints in $\{k,\dots,m\}$. Indeed, if $\{p,q\}\in T$ had $p<k<q<m$, then it would cross $\{k,m\}$; and if $p=1<k<q<m$, then $q$ would satisfy the defining property of step 1.1 with $q<k$, again impossible. [F1, step 1.1, step 2.1]

4.1 The diagonals of $T$ with endpoints in $\{1,\dots,k\}$ form a triangulation of the $k$-gon, and those with endpoints in $\{k,\dots,m\}$ form a triangulation of the $(m-k+1)$-gon: they are pairwise non-crossing because they are diagonals of $T$, and they are maximal because any extra diagonal in one sub-polygon would also be a diagonal of the whole polygon and would not cross any member of $T$ by step 3.1. The index $k$ is unique, for if another index $\ell$ with $1<\ell<m$ had the same property, then the chords $\{1,k\}$ and $\{\ell,m\}$ would cross when $k<\ell$, or the symmetric crossing would occur when $\ell<k$. [F1, step 2.1, step 3.1] ∎

## Remarks

- This is the polygon version of first return. The closing side $\{1,m\}$ plays the role of the root edge, and the third vertex $k$ is the split point.
