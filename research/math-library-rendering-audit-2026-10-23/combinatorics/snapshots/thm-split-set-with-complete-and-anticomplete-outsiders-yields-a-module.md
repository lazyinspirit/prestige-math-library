---
id: thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module
kind: theorem
title: "A split set with both a complete and an anticomplete outside vertex yields a nontrivial module"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-module-of-a-graph, def-split-set-in-a-bull-free-graph, prop-bull-free-graphs-are-complement-invariant, def-bull-free-graph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Theorem 3.1"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Statement

Let $G$ be a bull-free graph and let $S\subseteq V(G)$ be a split set. Suppose
there are vertices $c,a\in V(G)\setminus S$ such that $c$ is complete to $S$
and $a$ is anticomplete to $S$. Then $G$ has a nontrivial module.

## Facts & Assumptions

**Given:** A bull-free graph $G$, a split set $S\subseteq V(G)$, and vertices $c,a\in V(G)\setminus S$ with $c$ complete to $S$ and $a$ anticomplete to $S$.

[F1] A set is split exactly when every outside vertex mixed on it has one of the two witnesses from the definition: either an induced three-vertex path, or a three-vertex configuration with exactly one edge among the three vertices ([[def-split-set-in-a-bull-free-graph]]).

[F2] A module is a vertex set to which every outside vertex is complete or anticomplete ([[def-module-of-a-graph]]).

[L1] Bull-freeness is preserved by complementation ([[prop-bull-free-graphs-are-complement-invariant]]).

## Proof

**Proof technique:** direct.

1.1 First claim: if $x\in V(G)\setminus S$ is neither complete nor anticomplete to $S$, then either $c$ is adjacent to $a$ and $x$ is adjacent to $c$, or $c$ is nonadjacent to $a$ and $x$ is nonadjacent to $a$. Indeed, let $S_1$ be the neighbors of $x$ in $S$ and $S_2=S\setminus S_1$; both are nonempty. By [F1], either there are $u,v\in S_1$ and $w\in S_2$ with $u$-$v$-$w$ an induced path, or there are $u\in S_1$ and $v,w\in S_2$ with $uw\in E(G)$ while $uv,vw\notin E(G)$. In the first case bull-freeness rules out both $x$-$a$ and $\overline{x c}$ simultaneously, because otherwise $\{a,x,u,v,w\}$ and then $\{x,v,w,c,a\}$ would be bulls. In the second case bull-freeness similarly rules out both $\overline{x c}$ and $x$-$a$, because otherwise $\{x,u,w,c,v\}$ and then $\{a,x,u,c,v\}$ would be bulls. [F1, given, algebra]

2.1 Let $C$ be the set of vertices complete to $S$, let $A$ be the set of vertices anticomplete to $S$, and let $X=V(G)\setminus(S\cup C\cup A)$. Either every vertex of $C$ has a neighbor in $A$, or every vertex of $A$ has a nonneighbor in $C$: otherwise a vertex of $C$ anticomplete to $A$ and a vertex of $A$ complete to $C$ would contradict each other. Replacing $G$ by $\overline G$ if necessary preserves bull-freeness, splitness, and modules by [L1], [F1], and [F2], so assume that every vertex of $C$ has a neighbor in $A$. Step 1.1 then makes $C$ complete to $X$. Let $A'$ be the set of vertices of $A$ lying on an induced path $x$-$a_1$-$\cdots$-$a_k$ with $x\in X$ and all $a_i\in A$. We prove by induction on $k$ that $a_k$ is complete to $C$. For $k=1$, if $c'a_1$ were a nonedge for some $c'\in C$, step 1.1 applied to $x,c',a_1$ would force $xa_1$ to be a nonedge, a contradiction. For $k>1$, put $a_0=x$ and assume the result through $a_{k-1}$. Choose $s\in S$ nonadjacent to $a_{k-2}$ when $k=2$, which is possible because $x$ is mixed on $S$; for $k>2$ any $s\in S$ works because $a_{k-2}\in A$. If some $c'\in C$ were nonadjacent to $a_k$, then $\{s,c',a_{k-2},a_{k-1},a_k\}$ would be a bull: $c',a_{k-2},a_{k-1}$ form its triangle, while $s$ and $a_k$ are pendant at $c'$ and $a_{k-1}$. Hence $A'$ is complete to $C$. [step 1.1, L1, F1, F2, choose, induction]

3.1 Put $Z=S\cup X\cup A'$. Every vertex of $A\setminus A'$ is anticomplete to $Z$: it is anticomplete to $S$ by definition, and any path from it to $X\cup A'$ through $A$ has a shortest, hence induced, subpath that would put it in $A'$. Every vertex of $C$ is complete to $Z$ by step 2.1 and the definition of $C$. Thus every outside vertex is complete or anticomplete to $Z$, so $Z$ is a module by [F2]. The set $Z$ is nontrivial because $S\subseteq Z$ and $|S|>1$, while $c\in C\setminus Z$, so $Z\ne V(G)$. [step 2.1, F2] ∎
