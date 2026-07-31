---
id: lem-graph-distance-is-a-metric-on-each-component
kind: lemma
title: "Shortest-path distance is a metric on every connected component"
status: published
origin: session
deps: [def-graph-distance-and-girth, lem-every-graph-walk-contains-a-path-between-its-endpoints]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, Chapter 1 preview"
      url: "https://diestel-graph-theory.com/basic.html"
pipeline_run: null
---

## Statement

Let $C$ be the vertex set of a connected component of a graph $G$. The function
$d_G:C\times C\to\mathbb N$ satisfies, for all $u,v,w\in C$,

1. $d_G(u,v)\ge0$, with $d_G(u,v)=0$ if and only if $u=v$;
2. $d_G(u,v)=d_G(v,u)$;
3. $d_G(u,w)\le d_G(u,v)+d_G(v,w)$.

These are the metric axioms, so shortest-path distance is a metric on $C$.

## Facts & Assumptions

**Given:** Vertices $u,v,w$ in one connected component $C$ of $G$.

[F1] $d_G(x,y)$ is the least length of an $x$ to $y$ path, and the length is a natural number ([[def-graph-distance-and-girth]]).

[L1] Every walk contains a path between the same endpoints whose length is no greater ([[lem-every-graph-walk-contains-a-path-between-its-endpoints]]).

[F2] Reversing a path preserves its length, and concatenating an $x$ to $y$ path of length $a$ with a $y$ to $z$ path of length $b$ gives an $x$ to $z$ walk of length $a+b$.

## Proof

**Proof technique:** direct.

1.1 Every path length is a natural number, hence $d_G(u,v)\ge0$. The length-$0$ path $(u)$ gives $d_G(u,u)=0$. Conversely a path of length $0$ has one vertex, so $d_G(u,v)=0$ forces $u=v$. [F1]

1.2 Reversing a shortest $u$ to $v$ path gives a $v$ to $u$ path of the same length, so $d_G(v,u)\le d_G(u,v)$; reversing the roles gives the opposite inequality, hence equality. [F1, F2]

1.3 Concatenate shortest paths from $u$ to $v$ and from $v$ to $w$. This is a $u$ to $w$ walk of length $d_G(u,v)+d_G(v,w)$, and [L1] supplies a $u$ to $w$ path of no greater length. Minimality in [F1] gives $d_G(u,w)\le d_G(u,v)+d_G(v,w)$. [F1, F2, L1]

2.1 Steps 1.1, 1.2 and 1.3 establish separation, symmetry and the triangle inequality directly on $C$, so $d_G$ is a metric there. [step 1.1, step 1.2, step 1.3] ∎
