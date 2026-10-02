---
id: lem-gap-three-sat-reduces-to-gap-independent-set
kind: lemma
title: "Clause-literal consistency graph preserves the Max-3SAT optimum"
status: draft
origin: pipeline
deps:
  - def-finite-simple-graph
  - def-clique-independent-set-and-vertex-cover-problems
  - def-gap-problem-and-gap-preserving-reduction
  - thm-three-sat-is-np-complete
  - thm-three-sat-reduces-to-clique
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.2.5 Lemma 18.16 and Remark 18.17, printed pp. 359–361"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

For every 3-CNF formula $F$ with $m$ clauses of exactly three literal
occurrences, construct in polynomial time a simple graph $G$ with $3m$
vertices, one per occurrence. Vertices in the same clause are adjacent, and
vertices from distinct clauses are adjacent exactly when their literals are
complementary. Then $\alpha(G)=\operatorname{OPT}_{\mathrm{Max3SAT}}(F)$. For
$m\ge1$ and $0<\delta\le1$, the promise $m$ versus at most
$(1-\delta)m$ transfers with unchanged $\delta$ and positive scale $m$.
For $m=0$ the graph is empty and both optima are $0$; this case is outside
the positive-scale gap domain. From any independent set of $k$ vertices one
can produce an assignment satisfying at least $k$ clauses in polynomial time.

## Facts & Assumptions

**Given:** A 3-CNF formula $F=C_1\land\cdots\land C_m$ whose clauses contain exactly three literal occurrences, with repeated occurrences allowed, and the number $\operatorname{OPT}_{\mathrm{Max3SAT}}(F)$ of clauses satisfied by a best assignment.

[F1] The language $3$-SAT consists of satisfiable CNF formulas with exactly three literals per clause ([[thm-three-sat-is-np-complete]]). Its published reduction to CLIQUE uses one vertex per literal occurrence and joins two vertices exactly when they come from different clauses and their literals are not complementary ([[thm-three-sat-reduces-to-clique]], proof, step 1.2).

[F2] A subset $I\subseteq V$ of the vertex set of a finite simple graph is an independent set when no two distinct vertices of $I$ are adjacent, and the associated maximum-independent-set problem asks for the largest such size $\alpha(G)$. ([[def-clique-independent-set-and-vertex-cover-problems]])

[F3] A finite simple graph is a pair $(V,E)$ with $V$ finite and $E\subseteq[V]^2$, so every edge is an unordered pair of distinct vertices and no pair occurs twice. ([[def-finite-simple-graph]])

[F4] A gap scale must be positive. For Max-3SAT formulas with $m\ge1$ clauses the scale is $m$ and the optimum is the maximum number of simultaneously satisfied clauses; for the corresponding maximum-independent-set instances the scale is the number $m$ of clause clusters. ([[def-gap-problem-and-gap-preserving-reduction]])

## Proof

**Proof technique:** direct.

1.1 List the occurrences of $F$ as pairs $(j,r)$ with $1\le j\le m$ and $r\in\{1,2,3\}$, where $(j,r)$ carries the $r$-th listed literal occurrence of clause $C_j$, and let $G$ have vertex set $V=\{(j,r)\}$. Declare two vertices adjacent exactly when either $j=j'$ and $r\ne r'$ (same clause) or $j\ne j'$ and the two carried literals are complementary, that is, one is the negation of the other (distinct clauses). Then $|V|=3m$, no loops or repeated edges occur because adjacency is a symmetric condition on distinct listed pairs, and $G$ is a finite simple graph. Building the vertex list and testing $3m(3m-1)/2$ pairs runs in polynomial time in the encoding of $F$. [F1, F3, given, construct]

2.1 Let an assignment satisfy a set of $t$ clauses. In each satisfied clause choose one of its three occurrences whose literal is true under the assignment. The chosen vertices number $t$, no two lie in the same clause, and no two are complementary, since a single assignment cannot make a variable and its negation both true; hence the chosen set is independent and $\alpha(G)\ge t$. Taking a best assignment gives $\alpha(G)\ge\operatorname{OPT}_{\mathrm{Max3SAT}}(F)$. [F2, step 1.1, choose]

2.2 Conversely let $I$ be an independent set of $G$ of size $k$. By step 1.1, $I$ contains at most one occurrence from each clause, and no two of its occurrences are complementary. Assign a variable $x$ the value true if some occurrence in $I$ carries the literal $x$, the value false if some occurrence in $I$ carries the literal $\lnot x$, and the value false otherwise; this is well defined because complementary occurrences cannot both belong to $I$, and it assigns a value to every variable in polynomial time. Every occurrence in $I$ is then true, so the $k$ distinct clauses containing members of $I$ are all satisfied, and $\operatorname{OPT}_{\mathrm{Max3SAT}}(F)\ge k$. Taking a largest independent set gives $\operatorname{OPT}_{\mathrm{Max3SAT}}(F)\ge\alpha(G)$. [F2, step 1.1, construct]

3.1 Steps 2.1 and 2.2 give $\alpha(G)\le\operatorname{OPT}_{\mathrm{Max3SAT}}(F)$ and $\alpha(G)\ge\operatorname{OPT}_{\mathrm{Max3SAT}}(F)$, hence the exact equality $\alpha(G)=\operatorname{OPT}_{\mathrm{Max3SAT}}(F)$ for every 3-CNF formula with three literal occurrences per clause, including repeated literals and tautological clauses. For $m=0$ the graph is empty and both optima are $0$, so the equality and decoder remain valid. For $m\ge1$ and $0<\delta\le1$, with positive scale $m$ by [F4], an instance with $\operatorname{OPT}_{\mathrm{Max3SAT}}(F)=m$ gives $\alpha(G)=m$, and an instance with $\operatorname{OPT}_{\mathrm{Max3SAT}}(F)\le(1-\delta)m$ gives $\alpha(G)\le(1-\delta)m$, so the gap promise transfers with the same $\delta$ and scale $m$. The empty formula is outside this positive-scale gap domain. [F4, step 2.1, step 2.2, algebra]

4.1 The graph of step 1.1 is the complement, on the same occurrence vertices, of the published occurrence graph in [F1]: it joins exactly the pairs that the CLIQUE construction does not. Steps 2.1–3.1 establish directly that this complement graph has independent-set number $\operatorname{OPT}_{\mathrm{Max3SAT}}(F)$ and give a polynomial-time decoder; the cited decision theorem alone states only a satisfiability equivalence. [F1, step 1.1, step 3.1, algebra] ∎
