---
id: ex-composition-preserves-perfect-completeness
kind: example
title: "A single equality edge through robust composition"
status: draft
origin: pipeline
deps:
  - lem-composition-preserves-perfect-completeness
  - def-composition-with-an-assignment-tester
  - def-robust-codeword-blocks-for-constraint-graphs
  - lem-bounded-arity-boolean-csp-to-binary-constraint-graph
  - def-walsh-hadamard-encoding-and-relative-distance
  - def-constraint-graph-and-labeling-value
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP Theorem by Gap Amplification, §5.1, Definition 5.1 and Lemma 1.8 (completeness direction), printed pp. 17–18"
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach, §18.5.2, proof of Lemma 18.30 (completeness direction), printed pp. 378–379"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: pass
generation:
  role: example
---

## Example

Let $G$ be the graph with two vertices $v,w$, alphabet $\{0,1\}$ and the
single edge $e=(v,w)$ carrying the equality relation
$R_e=\{(0,0),(1,1)\}$. For the satisfying labeling $(1,1)$ both endpoint
blocks are set to
$$\operatorname{WH}_1(1)=(0,1),$$
the edge circuit accepts, every constraint of the composed tester gadget can
be satisfied, and the binary-star conversion of that gadget has zero violated
edges. The graph $G$ itself also has value one and unsatisfaction zero.

## Facts & Assumptions

**Given:** The two-vertex, one-edge equality graph $G$, its value-one labeling $\sigma(v)=\sigma(w)=1$, the code of [[def-robust-codeword-blocks-for-constraint-graphs]], and the composition $H=G\circ P$ of [[def-composition-with-an-assignment-tester]].

[F1] For $u\in\mathbb F_2^n$, the Walsh–Hadamard table is indexed lexicographically by masks $r\in\mathbb F_2^n$ and evaluates $r\mapsto u\cdot r$; in dimension one the masks are $0,1$. ([[def-walsh-hadamard-encoding-and-relative-distance]])

[F2] For the alphabet $\{0,1\}$ of size $W=2$, the code uses $k=\lceil\log_2W\rceil=1$ and $\ell=2^k=2$: the first two codewords are $C(0)=\operatorname{WH}_1(0)=(0,0)$ and $C(1)=\operatorname{WH}_1(1)=(0,1)$. The edge circuit accepts exactly the pairs of valid blocks whose decoded labels lie in the edge relation, with loops tested diagonally. ([[def-robust-codeword-blocks-for-constraint-graphs]])

[F3] Graph value is the maximum satisfied edge fraction; for a graph with at least one edge a labeling has value one exactly when it satisfies every edge relation. ([[def-constraint-graph-and-labeling-value]])

[F4] For the composition $H=G\circ P$, if $\operatorname{val}(G)=1$ then $\operatorname{val}(H)=1$, with value one on an empty constraint list. ([[lem-composition-preserves-perfect-completeness]])

[F5] If $E(G)\ne\varnothing$, every edge of $G$ contributes exactly $M$ constraints of $H$, where $M=\operatorname{lcm}\{q_e\}$ over the positive local gadget sizes; with a single edge $M=q_e$ and each local constraint is copied once. ([[def-composition-with-an-assignment-tester]])

[F6] The conversion of a Boolean constraint system into a binary graph has perfect completeness: a labeling satisfying every input constraint extends to a graph labeling satisfying every output edge. It creates at most $q$ edges per listed constraint. ([[lem-bounded-arity-boolean-csp-to-binary-constraint-graph]])

## Verification

**Proof technique:** direct calculation.

1.1 By [F1] the dimension-one table is evaluated at masks $0$ and $1$, so $\operatorname{WH}_1(1)=(1\cdot0,\,1\cdot1)=(0,1)$ with length $\ell=2^{1}=2$, in agreement with the code selection of [F2]. [F1, F2, given, algebra]

1.2 The labeling $\sigma(v)=\sigma(w)=1$ is a graph labeling, and its ordered endpoint pair $(1,1)$ lies in $R_e=\{(0,0),(1,1)\}$; since the equality edge is the only edge, $\operatorname{val}_\sigma(G)=1$ and $\operatorname{val}(G)=1$, so $\operatorname{UNSAT}(G)=0$ by [F3]. [F3, given, algebra]

2.1 The block assigned to both endpoints is $B_v=B_w=C(1)=(0,1)$ by [F2]. Both blocks are valid codewords and decode uniquely to the labels $1,1$, whose ordered pair lies in $R_e$; hence the robust edge circuit accepts the displayed input by [F2]. [F1, F2, step 1.1, step 1.2, algebra]

2.2 Since $\operatorname{val}(G)=1$, [F4] gives $\operatorname{val}(H)=1$: some assignment to the variables of $H$ satisfies every constraint of $H$. By [F5], the single edge contributes $M=q_e$ constraints, namely the constraints of the local two-piece tester copied once each; therefore one assignment satisfies every tester gadget constraint simultaneously. [F4, F5, step 1.2, algebra]

3.1 Apply the conversion of [F6] to $H$. The satisfying assignment of step 2.2 extends to a labeling of the output graph that satisfies every output edge, so the output has value one and unsatisfaction zero: the number of violated edges is $0$. The conversion creates at most $6M$ edge records and uses the fixed 66-symbol alphabet $\{B(0),B(1)\}\sqcup\{0,1\}^6$, so this is a concrete instance of the composition and conversion maps with no random or infinite selection anywhere. [F6, step 2.2, algebra, discharge-construct] ∎

## Remarks

This is the smallest nontrivial instance of the completeness direction of [[lem-composition-preserves-perfect-completeness]]: a satisfiable one-edge graph over the two-symbol alphabet, whose block code has length two. It illustrates that the composition and the binary-star conversion reproduce a satisfying labeling rather than merely preserving a value bound. The numeric verification uses only the displayed dot products and the two listed relation pairs; no claim is made about rejection probabilities, which require the separate soundness direction.
