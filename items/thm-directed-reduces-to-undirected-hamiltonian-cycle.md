---
id: thm-directed-reduces-to-undirected-hamiltonian-cycle
kind: theorem
title: "Directed Hamiltonian cycle polynomial-time many-one reduces to undirected Hamiltonian cycle"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-directed-hamiltonian-path-and-cycle-problems, def-polynomial-time-many-one-reduction, def-finite-simple-graph, def-graph-walk-trail-path-and-cycle, def-multigraph-loop-and-digraph]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "MIT 6.045J / 18.400J, Lecture 16: More NP-completeness"
      url: "https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/567d75f927ca3c11a819baee9ab260ac_MIT6_045JS11_lec16.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Directed Hamiltonian cycle polynomial-time many-one reduces to undirected
Hamiltonian cycle.

## Facts & Assumptions

**Given:** A finite directed graph $D=(V,A)$.

[L1] A polynomial-time many-one reduction is a total polynomial-time function preserving membership in both directions, by [[def-polynomial-time-many-one-reduction]].

[F1] Directed Hamiltonian cycles and undirected Hamiltonian cycles are the problems defined in [[def-directed-hamiltonian-path-and-cycle-problems]].

[F2] A directed graph has a finite vertex set and an arc set $A\subseteq V\times V$, by [[def-multigraph-loop-and-digraph]].

## Proof

**Proof technique:** direct.

1.1 If $|V|\le 1$, decide directly whether $D$ has a directed Hamiltonian cycle and map it to a fixed yes-instance or no-instance of undirected Hamiltonian cycle accordingly. Thus it is enough to treat the case $|V|\ge 2$. Delete every loop, since a Hamiltonian cycle through at least two distinct vertices cannot use a loop. For each vertex $v\in V$, create three undirected vertices $v_1,v_2,v_3$ and the two edges $v_1v_2$ and $v_2v_3$. For each arc $(u,v)\in A$ with $u\ne v$, add the undirected edge $u_3v_1$. Call the resulting graph $G_D$. [F1, F2, given, construct]

2.1 In any Hamiltonian cycle of $G_D$, the middle vertex $v_2$ has degree two, so the cycle must traverse the gadget for $v$ as the consecutive path $v_1,v_2,v_3$ or as the consecutive path $v_3,v_2,v_1$. Moreover, every external gadget edge joins a $3$-vertex to a $1$-vertex. Hence, after orienting the cycle, once one gadget is traversed in one of those two directions, every subsequent gadget is forced to be traversed in the same direction around the cycle. [step 1.1, F1]

2.2 If $D$ has a directed Hamiltonian cycle $v^{(1)}\to v^{(2)}\to\cdots\to v^{(n)}\to v^{(1)}$, then $v^{(1)}_1,v^{(1)}_2,v^{(1)}_3,v^{(2)}_1,v^{(2)}_2,v^{(2)}_3,\ldots,v^{(n)}_1,v^{(n)}_2,v^{(n)}_3,v^{(1)}_1$ is a Hamiltonian cycle in $G_D$, because each directed arc $v^{(i)}\to v^{(i+1)}$ supplies the edge $v^{(i)}_3v^{(i+1)}_1$. [step 1.1, construct]

3.1 Conversely, let $C$ be a Hamiltonian cycle in $G_D$. By step 2.1 and, if necessary, reversing the orientation of $C$, we may assume that every gadget is traversed as $v_1,v_2,v_3$. Whenever $C$ moves from the gadget of $u$ to the gadget of $v$, it uses an edge $u_3v_1$, and such an edge exists only when $(u,v)\in A$. Replacing each gadget path $v_1,v_2,v_3$ by the single vertex $v$ therefore projects $C$ to a directed Hamiltonian cycle of $D$. [F1, step 1.1, step 2.1]

4.1 The map $D\mapsto G_D$ uses $3|V|$ vertices and at most $|A|+2|V|$ edges, so it is polynomial-time. Steps 2.2 and 3.1 prove $D$ has a directed Hamiltonian cycle if and only if $G_D$ has an undirected Hamiltonian cycle. By [L1], this is a polynomial-time many-one reduction. [L1, step 1.1, step 2.2, step 3.1] ∎
