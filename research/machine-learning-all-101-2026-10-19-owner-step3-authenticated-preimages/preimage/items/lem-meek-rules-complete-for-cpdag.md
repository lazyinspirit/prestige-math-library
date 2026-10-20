---
id: lem-meek-rules-complete-for-cpdag
kind: lemma
title: "The background-free Meek rules complete a CPDAG"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - alg-pc-causal-discovery
  - def-cpdag-markov-equivalence-class
  - thm-dag-markov-equivalence-skeleton-vstructures
  - lem-chordal-components-admit-both-orientations
proof_strategy: direct
axiom_use: "The proof is finite and choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Meek, Causal Inference and Causal Explanation with Background Knowledge, §§2.1–2.3 and Appendix"
      url: "https://arxiv.org/pdf/1302.4972"
    - title: "Lauritzen, Graphical Models lecture notes, §2.6"
      url: "https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf"
    - title: "Kalisch and Bühlmann, Estimating High-Dimensional Directed Acyclic Graphs with the PC-Algorithm, §2.3"
      url: "https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf"
---

## Statement

Let $G$ be a finite DAG. Start with its skeleton, orient exactly the edges in
its unshielded colliders, and leave all other edges undirected. Repeatedly apply
the background-free rules R1–R3 from the PC algorithm until no rule applies.
The resulting partially directed graph is the CPDAG for the Markov-equivalence
class of $G$.

## Statement references

[Meek, §§2.1–2.3 and Appendix](https://arxiv.org/pdf/1302.4972)

[Lauritzen, §2.6](https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf)

[Kalisch and Bühlmann, §2.3](https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf)

## Facts & Assumptions

**Given:** A finite DAG $G$ and the initialized pattern and R1–R3 rules stated above.

[F1] A PDAG, consistent DAG extension, Markov equivalence, and CPDAG have the definitions in the supplied interface. [[def-cpdag-markov-equivalence-class]]

[F2] R1, R2, and R3 are exactly the three background-free orientation rules stated in the PC algorithm. [[alg-pc-causal-discovery]]

[F3] Two finite DAGs are Markov equivalent exactly when they have the same skeleton and the same unshielded colliders. [[thm-dag-markov-equivalence-skeleton-vstructures]]

[F4] In every finite chordal undirected graph, each edge can be oriented either way as part of an acyclic orientation having no unshielded collider. [[lem-chordal-components-admit-both-orientations]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Every consistent extension of a current pattern must respect each R1–R3 conclusion. For R1, the opposite orientation would create the new unshielded collider $i\to j\leftarrow k$ with $i,k$ nonadjacent. For R2, the opposite orientation would close the directed path $i\to k\to j$ into a directed cycle. For R3, if $j\to i$, acyclicity forces $k\to i$ and $\ell\to i$ (the alternatives $i\to k$ or $i\to\ell$ each close a directed cycle through $j$); these arrows create the new unshielded collider $k\to i\leftarrow\ell$, since $k,\ell$ are nonadjacent. Each contradiction is forbidden for a consistent extension. Thus all rule orientations are compelled, and the original DAG $G$ remains a consistent extension at every stage. [given, F1, F2, cases, contradiction]

1.2 Every finite DAG has a topological order. In any nonempty induced subgraph, if every vertex had an incoming arrow, repeatedly following incoming arrows would revisit a vertex and create a directed cycle. Thus a source exists; remove one source and repeat on the remaining finite DAG. Listing the removed vertices in order gives a topological order, because an arrow's tail must be removed before its head. This argument uses only finite choices. [given, construct]

1.3 The R1–R3 closure reaches a final pattern after finitely many applications. Each scan checks finitely many rule instances on the finite vertex set; every nonterminal scan directs at least one previously undirected edge, and there are at most $\binom{|V|}{2}$ such edges. Therefore after finitely many scans a full scan applies no rule, so the final closed pattern $P$ used below exists. [F2, construct]

2.1 Write $P$ for the final closed pattern. We claim that whenever $a\to b$ and $b-c$ is undirected in $P$, the edge $a-c$ is directed $a\to c$. If $a,c$ were nonadjacent, R1 would orient $b-c$ as $b\to c$, contradicting closure. If $c\to a$, then $c\to a\to b$ and R2 would orient $c-b$ as $c\to b$, also contradicting closure. It remains to rule out $a-c$ undirected. [F2, step 1.1, step 1.3, cases, contradiction]

3.1 Suppose such an undirected $a-c$ exists, and choose a counterexample for which the arrow $a\to b$ was first oriented as early as possible in the finite sequence of rule applications. If $a\to b$ was initially oriented as part of a collider $a\to b\leftarrow d$, then $a,d$ are nonadjacent. Since $d\to b-c$ cannot satisfy R1, $d$ is adjacent to $c$. If $c\to d$, R2 on $c-b$ applies along $c\to d\to b$. If $d\to c$, R1 on $d\to c-a$ gives $c\to a$, and R2 on $c-b$ then applies along $c\to a\to b$. If $d-c$ is undirected, R3 on $c-b$ applies with its other two vertices $a,d$. Each case contradicts that $P$ is closed. [F2, step 2.1, cases, contradiction]

3.2 Iterating the claim in step 2.1 along an undirected path shows that a directed edge cannot have both endpoints in the same connected component of undirected edges: such a path from its head back to its tail would propagate $a\to b$ to a nonexistent loop $a\to a$. If an undirected component had an induced cycle of length at least four, take its latest vertex in a topological order of the consistent extension $G$ from step 1.2. Both cycle edges point into that vertex; their other endpoints are nonadjacent, since the cycle has no undirected chord and no directed edge can join vertices in the same component. This is an unshielded collider absent from $P$, contrary to consistency of $G$. Hence every undirected component is chordal. [F1, step 1.1, step 1.2, step 2.1, contradiction]

4.1 If $a\to b$ was added by R1 from $d\to a$ with $d,b$ nonadjacent, then either R1 on $d\to a-c$ directly gives $a\to c$, or $d$ is adjacent to $c$. If $c\to d$, R2 on $c-a$ along $c\to d\to a$ gives $c\to a$, and R2 on $c-b$ along $c\to a\to b$ then applies. If $d\to c$, R1 on $d\to c-b$ gives $c\to b$. If $d-c$ is undirected, the earlier arrow $d\to a$ together with $a-c$ is a counterexample of smaller orientation time, contrary to the choice in step 3.1. Thus this rule case is impossible. [F2, step 3.1, cases, contradiction]

4.2 If $a\to b$ was added by R2 from $a\to d\to b$, then $d$ must be adjacent to $c$, since otherwise R1 on $d\to b-c$ orients $b-c$. If $d\to c$, R2 on $a-c$ along $a\to d\to c$ gives $a\to c$. If $c\to d$, R2 on $c-b$ along $c\to d\to b$ gives $c\to b$. If $d-c$ is undirected, the earlier arrow $a\to d$ and $d-c$ form a counterexample of smaller orientation time. All alternatives contradict closure or minimality. [F2, step 3.1, cases, contradiction]

4.3 If $a\to b$ was added by R3, there are nonadjacent $d,e$ with $d\to b$, $e\to b$, and undirected $a-d$, $a-e$. Each of $d,e$ is adjacent to $c$, since otherwise R1 on $d\to b-c$ or $e\to b-c$ applies. If $c\to d$ or $c\to e$, R2 on $c-b$ applies along that arrow followed by $d\to b$ or $e\to b$. Otherwise each of $d-c,e-c$ is either undirected or points into $c$. If both point into $c$, R3 on $a-c$ gives $a\to c$. If exactly one points into $c$, say $d\to c$ while $e-c$ is undirected, R1 on $d\to c-e$ gives $c\to e$, and R2 on $c-b$ follows from $c\to e\to b$. If both are undirected, R3 on $c-b$ gives $c\to b$. Every case contradicts the alleged counterexample or closure, proving the claim. [F2, step 3.1, cases, contradiction]

4.4 Contract each undirected component to one vertex and retain the directed edges between components. There are no loops by step 3.2. For a supposed simple cycle of components $C_1\to C_2\to\cdots\to C_r\to C_1$, with $r\ge2$, choose an arrow $x_t\to y_{t+1}$ for each quotient edge, with cyclic indices. In component $C_t$, the vertices $y_t$ and $x_t$ are joined by an undirected path. The claim in step 2.1 propagates the incoming arrow $x_{t-1}\to y_t$ along that path to $x_{t-1}\to x_t$. These arrows give $x_1\to x_2\to\cdots\to x_r\to x_1$, contradicting that $G$ consistently extends $P$. Therefore the quotient is a finite DAG. [step 1.1, step 2.1, step 3.2, contradiction, construct]

5.1 Fix any undirected edge $u-v$ and choose in its component one of the two orientations supplied by [F4] with the desired direction; orient every other nontrivial undirected component by any such acyclic collider-free orientation. Keep all directed edges of $P$. The combined graph is acyclic: a directed cycle contained in one component is excluded by its chosen orientation, while a cycle passing between components would project to a directed cycle in the quotient of step 4.4. [F1, F4, step 3.2, step 4.4, construct]

6.1 The combined DAG creates no unshielded collider absent from $P$. Two internal parents of a vertex cannot form one by the collider-free component orientation. If $x\to v$ is an external directed parent and $w\to v$ is an internal parent, then $v-w$ was undirected in $P$; step 2.1 forces $x\to w$ in $P$, so $x,w$ are adjacent and the collider is shielded. Two external directed parents already give a collider present in $P$ whenever they are nonadjacent. Thus the construction is a consistent extension, and the chosen edge $u-v$ has the requested orientation. [F1, step 2.1, step 5.1, cases]

7.1 By step 1.1 every consistent extension preserves every arrow of $P$, and by steps 5.1–6.1 each undirected edge occurs in consistent extensions with either orientation. The initial pattern has exactly the unshielded colliders of $G$, and $G$ remains its consistent extension, so every directed unshielded collider in $P$ is also one in $G$; thus $P$ and $G$ have the same skeleton and unshielded colliders. By [F3], every consistent extension is Markov equivalent to $G$. Conversely, any DAG Markov equivalent to $G$ has the same skeleton and colliders by [F3], hence extends the initial pattern; applying the soundness argument in step 1.1 successively shows that it preserves every arrow added by R1–R3 and therefore extends $P$. Thus the consistent extensions of $P$ are exactly $[G]$, and $P$ is its CPDAG. [F1, F3, step 1.1, step 5.1, step 6.1, construct] ∎
