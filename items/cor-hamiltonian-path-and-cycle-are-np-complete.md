---
id: cor-hamiltonian-path-and-cycle-are-np-complete
kind: corollary
title: "Directed and undirected Hamiltonian path and cycle are NP-complete"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-three-sat-reduces-to-directed-hamiltonian-cycle, thm-directed-reduces-to-undirected-hamiltonian-cycle, def-directed-hamiltonian-path-and-cycle-problems, def-np-hard-and-np-complete, thm-three-sat-is-np-complete]
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

The directed Hamiltonian path, directed Hamiltonian cycle, undirected
Hamiltonian path, and undirected Hamiltonian cycle problems are all
NP-complete.

## Facts & Assumptions

**Given:** An arbitrary instance of one of the four Hamiltonian problems.

[L1] The previous theorem builds, from every $3$-CNF formula $\varphi$, a digraph $D_\varphi$ with a directed Hamiltonian path exactly when $\varphi$ is satisfiable and then a digraph $D'_\varphi$ with a directed Hamiltonian cycle exactly when $\varphi$ is satisfiable, by [[thm-three-sat-reduces-to-directed-hamiltonian-cycle]].

[L2] Directed Hamiltonian cycle reduces in polynomial time to undirected Hamiltonian cycle, by [[thm-directed-reduces-to-undirected-hamiltonian-cycle]].

[L3] The language $3$-SAT is NP-complete, by [[thm-three-sat-is-np-complete]].

[L4] A language is NP-complete exactly when it is NP-hard and belongs to $NP$, by [[def-np-hard-and-np-complete]].

[F1] Each Hamiltonian problem asks whether a proposed ordering of all vertices forms a path or cycle of the appropriate kind, by [[def-directed-hamiltonian-path-and-cycle-problems]].

## Proof

**Proof technique:** direct.

1.1 Each of the four problems lies in $NP$: a certificate is an ordering of all vertices, and one checks in polynomial time that consecutive vertices are connected by the required edges or arcs, with one additional last-to-first check in the cycle cases. [F1, given, construct]

1.2 By [L1], every $3$-CNF formula $\varphi$ gives a digraph $D_\varphi$ with distinguished vertices $s_\varphi,t_\varphi$ such that $\varphi$ is satisfiable exactly when $D_\varphi$ has a directed Hamiltonian path from $s_\varphi$ to $t_\varphi$, and also a digraph $D'_\varphi$ with a directed Hamiltonian cycle exactly when $\varphi$ is satisfiable. Since [L3] makes $3$-SAT NP-complete, directed Hamiltonian cycle is NP-hard, and the endpoint-labelled problem $$ \mathrm{DHAMPATH}_*:=\{(D,s,t): D\text{ has a directed Hamiltonian path from }s\text{ to }t\} $$ is NP-hard as well. [L1, L3, L4]

2.1 Reduce $\mathrm{DHAMPATH}_*$ to the ordinary directed Hamiltonian path problem. Given $(D,s,t)$, add fresh vertices $s_-$ and $t_+$ together with the two arcs $s_-\to s$ and $t\to t_+$. Any Hamiltonian path in the new digraph must start at $s_-$ and end at $t_+$, because $s_-$ has indegree $0$ and $t_+$ has outdegree $0$. Deleting those two new vertices therefore recovers a directed Hamiltonian path from $s$ to $t$ in $D$, and conversely any such path extends by adjoining $s_-$ at the front and $t_+$ at the end. Thus ordinary directed Hamiltonian path is NP-hard. [F1, step 1.2, construct]

2.2 Next define the endpoint-labelled undirected problem $$ \mathrm{UHAMPATH}_*:=\{(G,s,t): G\text{ has an undirected Hamiltonian path from }s\text{ to }t\}. $$ First handle the allowed boundary case $s=t$. If $D$ has one vertex, map it to the one-vertex yes-instance with its sole vertex named as both endpoints. If $D$ has more than one vertex, no Hamiltonian ordering can both start and end at the same vertex, so map it to the fixed two-isolated-vertex no-instance. Now assume $s\ne t$. Build an undirected graph $G'$ by replacing every vertex $v\notin\{s,t\}$ by a path $v_1-v_2-v_3$, replacing $s$ by a single vertex $s_3$, replacing $t$ by a single vertex $t_1$, and adding an undirected edge $u_3-v_1$ for every arc $u\to v$ of $D$ that is not incoming to $s$ and not outgoing from $t$, with the conventions $u_3=s_3$ if $u=s$ and $v_1=t_1$ if $v=t$. A directed Hamiltonian path $$ s=v^{(1)}\to v^{(2)}\to\cdots\to v^{(r)}=t $$ in $D$ then becomes the undirected Hamiltonian path $$ s_3,v^{(2)}_1,v^{(2)}_2,v^{(2)}_3,\ldots,v^{(r-1)}_1,v^{(r-1)}_2,v^{(r-1)}_3,t_1 $$ in $G'$. Conversely, an undirected Hamiltonian path from $s_3$ to $t_1$ must traverse every triple $v_1-v_2-v_3$ consecutively because the middle vertex $v_2$ has degree $2$, and all external edges join a $3$-vertex to a $1$-vertex. Contracting each triple therefore recovers a directed Hamiltonian path from $s$ to $t$ in $D$. Hence $\mathrm{DHAMPATH}_*\le_p \mathrm{UHAMPATH}_*$. [F1, step 1.2, cases, construct]

2.3 For undirected Hamiltonian cycle, NP-hardness is exactly [L2] composed with the NP-hardness of directed Hamiltonian cycle from step 1.2. [L2, step 1.2, algebra]

3.1 Reduce $\mathrm{UHAMPATH}_*$ to the ordinary undirected Hamiltonian path problem. Given $(G,s,t)$, attach two fresh leaves $s_-$ and $t_+$ by the edges $s_-s$ and $tt_+$. Any Hamiltonian path in the enlarged graph must have the two leaves as its endpoints, so deleting them recovers a Hamiltonian path from $s$ to $t$ in $G$; conversely any $s$-to-$t$ Hamiltonian path in $G$ extends by the two leaves. Therefore ordinary undirected Hamiltonian path is NP-hard. [F1, step 2.2, construct]

4.1 Step 1.1 gives membership in $NP$, while steps 1.2, 2.1, 2.2, 2.3, and 3.1 give NP-hardness for directed Hamiltonian path, directed Hamiltonian cycle, undirected Hamiltonian path, and undirected Hamiltonian cycle. Hence all four problems are NP-complete by [L4]. [L4, step 1.1, step 1.2, step 2.1, step 2.2, step 2.3, step 3.1] ∎
