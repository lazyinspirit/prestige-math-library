---
id: lem-balls-in-a-connected-locally-finite-graph-are-finite
kind: lemma
title: "In a connected locally finite graph every ball of the path metric is finite"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-simple-graph-without-a-finiteness-hypothesis, def-walks-paths-and-connectedness-in-a-simple-graph, def-graph-path-metric, def-locally-finite-graph, def-finite-cardinality, def-metric-ball, thm-of-archimedean, thm-subset-of-a-finite-set]
aliases: []
landmark: false
proof_strategy: induction
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Statement

In a connected locally finite graph every ball of the path metric is finite.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] A graph is locally finite when every vertex has finitely many neighbours ([[def-locally-finite-graph]]).

[L1] The path metric of a connected simple graph assigns to two vertices the least length of a path joining them ([[def-graph-path-metric]]).

[L2] $B(x,r)$ is the **open ball**, $\bar B(x,r)$ the **closed ball** and $S(x,r)$ the **sphere** of **centre** $x$ and **radius** $r$. The radius is always a strictly positive real; a ball of radius $0$ or of negative radius is never written in this library. ([[def-metric-ball]]).

[L3] A walk of length $\ell$ in a simple graph is a finite vertex list $(v_0,\dots,v_\ell)$ with consecutive vertices adjacent; a path is a walk with distinct vertices; the graph is connected when it is nonempty and every two vertices are joined by a path ([[def-walks-paths-and-connectedness-in-a-simple-graph]]).

[L4] A set $A$ is **finite** when $A \approx n$ for some $n \in \mathbb{N}$. ([[def-finite-cardinality]]).

[L5] Every complete ordered field is Archimedean: for every real $x$ there is a natural number $n \ge 1$ with $x < n$ ([[thm-of-archimedean]]).

[L6] A subset of a finite set is finite ([[thm-subset-of-a-finite-set]]).


## Proof

**Proof technique:** induction.

1.1 Fix a vertex $x$. For each natural number $n$ let $C_n:=\{\,y:d_G(x,y)\le n\,\}$. Then $C_0=\{x\}$, so $C_0$ is finite. [L1, base]

1.2 Assume $C_n$ is finite. If $y\in C_{n+1}$, choose a path $(v_0,\dots,v_m)$ from $x$ to $y$ of minimal length $m=d_G(x,y)\le n+1$. If $m=0$ then $y=x\in C_n$. If $m\ge1$, then $v_{m-1}\in C_n$ and $y$ lies in $N_G(v_{m-1})\cup\{v_{m-1}\}$. Hence $C_{n+1}\subseteq\bigcup_{v\in C_n}\bigl(N_G(v)\cup\{v\}\bigr)$. Each set $N_G(v)\cup\{v\}$ is finite by local finiteness, so the right-hand side is a finite union of finite sets and is therefore finite; thus $C_{n+1}$ is finite. [F1, L1, L3, L4, ih]

2.1 By step 1.2, if $C_n$ is finite then so is $C_{n+1}$. [step 1.2]

3.1 Therefore every $C_n$ is finite. Now let $r>0$. By the Archimedean property choose a natural number $N\ge1$ with $r<N$. Because $d_G(x,y)$ is the length of a path, it is a natural number; so $d_G(x,y)<r<N$ implies $d_G(x,y)\le N-1$. Hence $B(x,r)\subseteq C_{N-1}$, and [L6] makes $B(x,r)$ finite. [L1, L2, L5, L6, step 1.1, step 2.1, discharge-induction] ∎
