---
id: thm-three-sat-reduces-to-directed-hamiltonian-cycle
kind: theorem
title: "3SAT polynomial-time many-one reduces to directed Hamiltonian cycle"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-reduction-gadget-and-interface-invariant, def-directed-hamiltonian-path-and-cycle-problems, def-polynomial-time-many-one-reduction, def-multigraph-loop-and-digraph, thm-three-sat-is-np-complete]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "MIT 6.045J / 18.400J, Lecture 16: More NP-completeness"
      url: "https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/567d75f927ca3c11a819baee9ab260ac_MIT6_045JS11_lec16.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: pass
---

## Statement

There is a polynomial-time many-one reduction from $3$-SAT to directed
Hamiltonian cycle.

More explicitly, for every $3$-CNF formula $\varphi$ one can construct in
polynomial time a directed graph $D_\varphi$ with distinguished vertices
$s_\varphi,t_\varphi$ such that

1. $\varphi$ is satisfiable if and only if $D_\varphi$ has a directed
   Hamiltonian path from $s_\varphi$ to $t_\varphi$; and
2. after adjoining one fresh vertex $z_\varphi$ and the two arcs
   $z_\varphi\to s_\varphi$ and $t_\varphi\to z_\varphi$, the resulting digraph
   $D'_\varphi$ has a directed Hamiltonian cycle if and only if $\varphi$ is
   satisfiable.

## Facts & Assumptions

**Given:** A $3$-CNF formula $$ \varphi=C_1\land\cdots\land C_m. $$

[L1] A polynomial-time many-one reduction is a total polynomial-time function preserving membership in both directions, by [[def-polynomial-time-many-one-reduction]].

[L2] A gadget reduction must prove the construction bound and both directions of the witness translation, by [[def-reduction-gadget-and-interface-invariant]].

[F1] Directed Hamiltonian paths and cycles are the decision problems from [[def-directed-hamiltonian-path-and-cycle-problems]].

## Proof

**Proof technique:** direct.

1.1 If $m=0$, then $\varphi$ is the empty conjunction and is satisfiable. Let $D_\varphi$ be the one-vertex digraph and name its unique vertex both $s_\varphi$ and $t_\varphi$; it has the required one-vertex Hamiltonian path. Adjoining $z_\varphi$ and the two opposite arcs between $z_\varphi$ and $s_\varphi=t_\varphi$ gives a directed Hamiltonian cycle. This is the required constant-size output in the empty case. Assume henceforth that $m\ge1$, so at least one variable occurs. Enumerate the variables of $\varphi$ as $x_1,\ldots,x_n$ and the clauses as $C_1,\ldots,C_m$. For each variable $x_i$, create vertices $$ p_i,\ q_i,\ s_{i,0},\ldots,s_{i,m},\ \ell_{i,1},r_{i,1},\ldots,\ell_{i,m},r_{i,m}. $$ The **crossbar** of the gadget $X_i$ is the bidirected path $$ s_{i,0}\leftrightarrow \ell_{i,1}\leftrightarrow r_{i,1}\leftrightarrow s_{i,1} \leftrightarrow\cdots\leftrightarrow s_{i,m-1}\leftrightarrow \ell_{i,m} \leftrightarrow r_{i,m}\leftrightarrow s_{i,m}, $$ and we also add the four boundary arcs $$ p_i\to s_{i,0},\quad p_i\to s_{i,m},\quad s_{i,0}\to q_i,\quad s_{i,m}\to q_i. $$ Thus every Hamiltonian path from $p_i$ to $q_i$ inside $X_i$ must enter the crossbar at one end, traverse every crossbar vertex exactly once, and exit from the opposite end; equivalently it is either the left-to-right route through all clause pairs or the right-to-left route through all clause pairs. Identify $q_i$ with $p_{i+1}$ for $1\le i<n$, and write $s_\varphi:=p_1$, $t_\varphi:=q_n$. For each clause $C_j$, add one clause vertex $c_j$. If the literal $x_i$ occurs in $C_j$, add the two arcs $$ \ell_{i,j}\to c_j,\qquad c_j\to r_{i,j}; $$ if the literal $\neg x_i$ occurs in $C_j$, add $$ r_{i,j}\to c_j,\qquad c_j\to \ell_{i,j}. $$ If both literals occur, add both pairs of arcs. This completely specifies the digraph $D_\varphi$, which has $O(nm)$ vertices and arcs and is computable in polynomial time. [L2, F1, given, cases, construct]

2.1 Suppose that $\varphi$ is satisfiable. In each gadget $X_i$, choose the left-to-right crossbar route if $x_i=true$ and the right-to-left route if $x_i=false$. Concatenating these routes through the identified vertices $q_i=p_{i+1}$ already yields a directed path from $s_\varphi$ to $t_\varphi$ visiting every gadget vertex exactly once. Now fix a clause $C_j$, and choose one literal of $C_j$ that is true under the satisfying assignment. If it is a positive occurrence of $x_i$, replace the local edge $\ell_{i,j}\to r_{i,j}$ on the left-to-right route by the detour $\ell_{i,j}\to c_j\to r_{i,j}$. If it is a negative occurrence of $x_i$, replace the local edge $r_{i,j}\to \ell_{i,j}$ on the right-to-left route by $r_{i,j}\to c_j\to \ell_{i,j}$. Doing this once for each clause visits every clause vertex exactly once and does not revisit any gadget vertex, because each detour leaves and re-enters the same clause pair. Hence $D_\varphi$ has a directed Hamiltonian path from $s_\varphi$ to $t_\varphi$. [L2, step 1.1, construct]

2.2 Suppose conversely that $D_\varphi$ has a directed Hamiltonian path from $s_\varphi$ to $t_\varphi$. We first verify the interface invariant omitted by a merely pictorial gadget argument. If the path enters a clause vertex $c_j$ from an occurrence pair in $X_i$ and leaves toward a different occurrence pair, then the unused vertex of the first pair can subsequently be entered only from its other crossbar neighbour; after that entry, every possible exit goes to that already visited neighbour, the visited mate, or the already visited clause vertex. The path is therefore stuck before reaching $t_\varphi$. The same four-case check applies with the crossbar direction reversed and with positive and negative occurrence arcs exchanged. Hence every visit to $c_j$ leaves through the mate in the same occurrence pair: a clause visit only replaces one crossbar edge by its two-edge detour. It follows that the path cannot jump between variable gadgets through a clause vertex. The remaining connections force it through $X_1,\ldots,X_n$ in order, and within each $X_i$ it traverses the entire crossbar monotonically from one end to the other. Set $x_i=true$ exactly for a left-to-right traversal. Every clause vertex is visited by a same-pair detour whose orientation exists only for a literal made true by this assignment. Thus every clause has a true literal and $\varphi$ is satisfiable. [L2, F1, step 1.1, cases]

3.1 Now add one fresh vertex $z_\varphi$ and the two arcs $z_\varphi\to s_\varphi$ and $t_\varphi\to z_\varphi$. If $D_\varphi$ has a Hamiltonian path from $s_\varphi$ to $t_\varphi$, then adjoining $z_\varphi$ closes that path to a directed Hamiltonian cycle in $D'_\varphi$. Conversely, any directed Hamiltonian cycle in $D'_\varphi$ must pass through the fresh vertex $z_\varphi$, whose only outgoing arc is to $s_\varphi$ and whose only incoming arc is from $t_\varphi$. Deleting $z_\varphi$ from the cycle therefore yields a directed Hamiltonian path from $s_\varphi$ to $t_\varphi$ in $D_\varphi$. [F1, step 2.1, step 2.2, construct]

4.1 Step 1.1 handles the empty formula and gives a polynomial-time construction for every well-formed $3$-CNF formula. For $m\ge1$, steps 2.1 and 2.2 prove the iff for directed Hamiltonian path, and step 3.1 converts that iff to directed Hamiltonian cycle. Extend the map to every input string by checking $3$-CNF syntax in polynomial time and sending any malformed string to the fixed one-vertex loopless digraph, which has no directed Hamiltonian cycle. By [L1] and [L2], the resulting total function is a polynomial-time many-one reduction from $3$-SAT to directed Hamiltonian cycle. [L1, L2, step 1.1, step 2.1, step 2.2, step 3.1, cases-exhaustive] ∎
