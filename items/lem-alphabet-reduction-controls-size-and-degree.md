---
id: lem-alphabet-reduction-controls-size-and-degree
kind: lemma
title: "Alphabet reduction controls explicit size and degree"
status: published
origin: pipeline
deps:
  - thm-alphabet-reduction-step
  - def-composition-with-an-assignment-tester
  - lem-bounded-arity-boolean-csp-to-binary-constraint-graph
  - def-robust-codeword-blocks-for-constraint-graphs
  - thm-two-piece-pcp-of-proximity
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP Theorem by Gap Amplification, §5, Lemma 1.8 and its proof, printed pp. 17–19"
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach, §18.5.2, Lemma 18.30 and its proof, printed pp. 378–379"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Fix a finite alphabet $\Sigma$ with $\lvert\Sigma\rvert\ge2$ and let $G$ be a
finite binary constraint graph over $\Sigma$ with $m$ edge records and
maximum degree at most $d$, where the degree of a vertex counts the incidence
slots of its incident edge records and a loop therefore contributes two.
Let $A_\Sigma$ be the alphabet reduction of
[[thm-alphabet-reduction-step]] and let $\widehat\Sigma$ be its fixed
output alphabet of $66$ symbols.

1. **Edges.** $\lvert E(A_\Sigma(G))\rvert\le 6M_\Sigma m$, where
   $M_\Sigma=\operatorname{lcm}(1,\dots,Q_\Sigma)$ with
   $Q_\Sigma=2^{7N_\Sigma^2+4}$ and
   $N_\Sigma=2^{\lceil\log_2W\rceil+1}+cW^3$ for the absolute constant $c$ of
   [[def-robust-codeword-blocks-for-constraint-graphs]]; both $M_\Sigma$ and
   $Q_\Sigma$ depend only on $\Sigma$.
2. **Vertices.** $\lvert V(A_\Sigma(G))\rvert\le(2\ell+q_{\max}+M_\Sigma)m$,
   where $\ell=2^{\lceil\log_2W\rceil}<2W$ and $q_{\max}\le Q_\Sigma$ is the
   largest local gadget size; hence the vertex count is $O_\Sigma(m)$.
3. **Degree.** Every vertex of $A_\Sigma(G)$ has degree at most
   $6M_\Sigma d$, a constant depending only on $\Sigma$ and $d$.
4. **Uniformity.** All relation tables of $A_\Sigma(G)$ use the fixed alphabet
   $\widehat\Sigma$, and $A_\Sigma$ is computable by a deterministic algorithm
   in time polynomial in the bit length of the explicit encoding of $G$.

## Facts & Assumptions

**Given:** The fixed alphabet $\Sigma$, the input graph $G$ with $m$ edge records and maximum degree $d$, and the map $A_\Sigma$ of [[thm-alphabet-reduction-step]], applied to $G$ through the composition $H=G\circ P$ and the arity-six conversion.

[F1] The map $A_\Sigma$ is deterministic, binary, runs in polynomial time in the explicit input encoding, uses the fixed alphabet $\widehat\Sigma=\{B(0),B(1)\}\sqcup\{0,1\}^6$ of size $66$, and satisfies $\lvert E(A_\Sigma(G))\rvert\le C_\Sigma m$ and $\lvert V(A_\Sigma(G))\rvert\le C_\Sigma m$ for a constant $C_\Sigma$ depending only on $\Sigma$. ([[thm-alphabet-reduction-step]])

[F2] If $E(G)\ne\varnothing$, every edge of $G$ contributes exactly $M$ constraints of the composition $H=G\circ P$, where $M=\operatorname{lcm}\{q_e\}$ over the positive local gadget sizes, so $H$ has $\lvert E(G)\rvert M$ constraints in total. If $G$ is edgeless then $H$ has no variables and no constraints. ([[def-composition-with-an-assignment-tester]])

[F3] Each active vertex $v$ of $G$ has one shared block $B_v=((v,1),\ldots,(v,\ell))$ of $\ell$ coordinates, shared by all incident edge gadgets, and every non-named gadget variable has a private copy $(e,z)$ used by exactly one edge $e$. ([[def-composition-with-an-assignment-tester]])

[F4] The code length satisfies $W\le\ell<2W$ and each edge circuit has at most $O(W^2\ell)=O(W^3)$ gates besides its $2\ell$ formal input bits. ([[def-robust-codeword-blocks-for-constraint-graphs]])

[F5] A two-piece tester applied to a circuit with $N$ wires has a finite constraint list of at most $2^{7N^2+4}$ constraints, each of arity at most six. ([[thm-two-piece-pcp-of-proximity]])

[F6] The conversion keeps one shared vertex per input variable of the Boolean system and adds one private tuple vertex per listed constraint, joining the tuple vertex to the constraint's variables by at most $q$ edge records in total for arities at most $q$. ([[lem-bounded-arity-boolean-csp-to-binary-constraint-graph]])

[F7] For each edge circuit, the local tester's total variable count is at most its constraint count $q_e$; this follows from the explicit table-variable and nine-family counts in step 1.3 of [[thm-alphabet-reduction-step]]. Hence the private auxiliary variables of one edge gadget are at most $q_e\le q_{\max}$.

## Proof

**Given:** Fix $\Sigma$, $W=\lvert\Sigma\rvert\ge2$, $\ell$, the input graph $G$, and the constants $N_\Sigma$, $Q_\Sigma$, $M_\Sigma$ of the statement.

1.1 Put $H=G\circ P$ and $A=A_\Sigma(G)$, the arity-six conversion of $H$. If $E(G)\ne\varnothing$, then $H$ has $Mm$ constraints by [F2], where each $q_e$ is the size of the local gadget of edge $e$. Every edge circuit has at most $2\ell+O(W^3)$ wires by [F4], so each $q_e\le Q_\Sigma$ by [F5], and therefore $M$ divides $M_\Sigma=\operatorname{lcm}(1,\dots,Q_\Sigma)$. In particular $M\le M_\Sigma$, a constant depending only on $\Sigma$. [F2, F4, F5, given, construct]

1.2 If $E(G)=\varnothing$, then $H$ has no variables and no constraints by [F2], and the conversion of an empty system is an edgeless graph, so all three bounds in clauses 1--3 hold with $m=0$ and every vertex degree zero. [F1, F2, F6, given, cases]

2.1 Assume $E(G)\ne\varnothing$. Each of the $Mm$ constraints of $H$ has arity at most six, so the conversion creates at most six edge records per constraint by [F6]. Hence $\lvert E(A)\rvert\le 6\lvert E(H)\rvert=6Mm\le 6M_\Sigma m$, as asserted in clause 1. [F2, F6, step 1.1, algebra]

2.2 The vertex set of $A$ consists of the vertices of $H$ together with one private tuple vertex per constraint of $H$ by [F6], so $\lvert V(A)\rvert=\lvert V(H)\rvert+Mm$. The block coordinates account for at most $2\ell m$ coordinates, since each of the at most $2m$ nonisolated vertices contributes $\ell$ coordinates by [F3]. By [F7], the edge-private auxiliary variables of one gadget number at most $q_{\max}$, giving $\lvert V(H)\rvert\le(2\ell+q_{\max})m$. Therefore $\lvert V(A)\rvert\le(2\ell+q_{\max}+M_\Sigma)m$ by step 1.1, proving clause 2. [F2, F3, F6, F7, step 1.1, algebra]

2.3 Consider a vertex of $A$ that comes from a coordinate $x$ of a shared block $B_v$ of $H$. By [F3] this coordinate appears in the gadgets of exactly the edge records incident to $v$, and $v$ is incident to at most $d$ edge records by hypothesis. In one copy of the gadget of such an edge, the coordinate occurs in at most $q_e$ constraints, each of arity at most six, so at most $6q_e$ times; after the uniform duplication of [F2] it occurs at most $6q_e\cdot M/q_e=6M\le6M_\Sigma$ times in that gadget. Summing over the at most $d$ incident records gives $\deg_A(x)\le6M_\Sigma d$. [F2, F3, F5, step 1.1, algebra]

3.1 A vertex of $A$ that comes from an edge-private auxiliary variable of $H$ belongs to the gadget of exactly one edge, so the same occurrence count gives degree at most $6M\le6M_\Sigma$; a private tuple vertex created by the conversion has one edge record per variable occurrence of its constraint, hence degree at most six by [F6]. Since $d\ge1$ whenever $E(G)\ne\varnothing$, all these degrees are at most $6M_\Sigma d$. This proves clause 3. [F3, F6, step 2.3, algebra]

3.2 The determinism, polynomial running time and fixed output alphabet are inherited from the reduction $A_\Sigma$ by [F1]; the edge and vertex counts of clauses 1 and 2 are polynomial in $m$ by steps 2.1 and 2.2, and all relation tables are the constant-size tables of the $66$-symbol conversion. [F1, F6, step 2.1, step 2.2, algebra]

4.1 Clauses 1, 2, 3 and 4 hold: the edgeless case is step 1.2, the edge and vertex bounds are steps 2.1 and 2.2, the degree bound is steps 2.3 and 3.1, and uniformity is step 3.2. Every constant produced is a function of $\Sigma$ and $d$ alone, namely $6M_\Sigma$, $2\ell+q_{\max}+M_\Sigma$ and $6M_\Sigma d$. [F1, F2, F4, F5, step 1.1, step 1.2, step 2.1, step 2.2, step 2.3, step 3.1, step 3.2, algebra, discharge-construct] ∎

## Remarks

The degree bound is what makes the iterated transformation self-contained: after one application the output has constant degree depending only on the fixed input alphabet and the input degree bound, so the next round can use the same reduction with the same constants. The count $M_\Sigma$ is a constant for fixed $\Sigma$ even though it is enormous, because each local tester has constant size once the alphabet is fixed. The proof is choice-free: the composition, the least common multiple and the conversion are deterministic finite constructions.
