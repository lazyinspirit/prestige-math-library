---
id: thm-alphabet-reduction-step
kind: theorem
title: "Fixed-alphabet reduction with constant gap retention"
status: draft
origin: pipeline
deps:
  - lem-composition-preserves-perfect-completeness
  - lem-composition-transfers-rejection-ratio
  - lem-bounded-arity-boolean-csp-to-binary-constraint-graph
  - def-composition-with-an-assignment-tester
  - def-robust-codeword-blocks-for-constraint-graphs
  - def-constraint-graph-and-labeling-value
  - def-assignment-tester-and-rejection-ratio
  - thm-two-piece-pcp-of-proximity
  - lem-walsh-hadamard-code-has-distance-one-half
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP Theorem by Gap Amplification, §5, Lemma 1.8 and its proof, printed pp. 17–19"
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach, §18.5, Lemma 18.30 and §18.5.2, printed pp. 377–379"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: pass
---

## Statement

For every finite alphabet $\Sigma$ with $\lvert\Sigma\rvert\ge2$ there is a
deterministic map $A_\Sigma$ sending finite binary constraint graphs over
$\Sigma$ to finite binary constraint graphs over the one fixed alphabet
$$\widehat\Sigma=\{B(0),B(1)\}\sqcup\{T(a):a\in\{0,1\}^6\}$$
of size $2+2^6=66$, with the following properties for every input $G$ with
$m=\lvert E(G)\rvert$ edges.

1. **Value one.** $\operatorname{val}(G)=1$ if and only if
   $\operatorname{val}(A_\Sigma(G))=1$.
2. **Size.** $\lvert E(A_\Sigma(G))\rvert\le C_\Sigma m$ and
   $\lvert V(A_\Sigma(G))\rvert\le C_\Sigma m$ for a constant $C_\Sigma$
   depending only on $\Sigma$, never on $G$.
3. **Gap retention.** With $\rho_0=1/1000$ and $\delta=1/2$,
   $$\operatorname{UNSAT}(A_\Sigma(G))\ge\kappa\operatorname{UNSAT}(G),\qquad \kappa=\frac{\rho_0\delta}{4\cdot6}=\frac1{48000}.$$
4. **Uniformity.** $A_\Sigma$ is computable by a deterministic algorithm in
   time polynomial in the bit length of the explicit encoding of $G$.

The output alphabet depends only on the arity bound six of the local tester,
not on $\Sigma$ or on the input size, and the constant $\kappa$ is absolute.

## Facts & Assumptions

**Given:** Fix a finite alphabet $\Sigma$ with $W:=\lvert\Sigma\rvert\ge2$, its code length $\ell=2^{\lceil\log_2W\rceil}$, and an input graph $G$ with $m$ edge records. Let $P$ be the two-piece Boolean assignment tester of [[thm-two-piece-pcp-of-proximity]] and put $H=G\circ P$.

[F1] If $E(G)\ne\varnothing$, then $H$ is a Boolean constraint system of arity at most six whose variables are the active vertex blocks and edge-private auxiliary copies, and whose constraint list has exactly $|E(G)|M$ constraints, where $M=\operatorname{lcm}\{q_e:e\in E(G)\}$ is the least common multiple of the positive local gadget sizes. If $E(G)=\varnothing$, then $H$ has no variables and no constraints. ([[def-composition-with-an-assignment-tester]])

[F2] The map $C$ from $\Sigma$ to the selected Walsh–Hadamard codewords is injective, and every two distinct selected codewords have relative distance $\delta=1/2$; the selected block length is $\ell$ with $W\le\ell<2W$. ([[def-robust-codeword-blocks-for-constraint-graphs]], [[lem-walsh-hadamard-code-has-distance-one-half]])

[F3] For an edge relation $R_e$, the robust edge circuit has the $2\ell$ formal input bits and at most $O(W^3)$ gates, so its size is bounded by a constant depending only on $\Sigma$. ([[def-robust-codeword-blocks-for-constraint-graphs]])

[F4] The local tester is a Boolean assignment tester of arity at most six and rejection ratio $\rho_0=1/1000$; for a circuit of $N$ wires its finite constraint list has at most $2^{7N^2+4}$ constraints. ([[thm-two-piece-pcp-of-proximity]])

[F5] If $\operatorname{val}(G)=1$ then $\operatorname{val}(H)=1$, including the edgeless case. ([[lem-composition-preserves-perfect-completeness]])

[F6] If $E(G)\ne\varnothing$ then $\operatorname{UNSAT}(H)\ge\frac{\rho_0\delta}{4}\operatorname{UNSAT}(G) =\frac1{8000}\operatorname{UNSAT}(G)$; if $E(G)=\varnothing$ then both unsatisfaction values are zero. ([[lem-composition-transfers-rejection-ratio]])

[F7] For $q\ge2$, every finite explicit Boolean constraint system whose listed constraints have arities between $1$ and $q$ has a deterministically constructible binary constraint graph over $\{B(0),B(1)\}\sqcup\{T(a):a\in\{0,1\}^q\}$ with at most $q$ edge records per listed constraint, perfect completeness, and $\operatorname{UNSAT}(G')\ge\operatorname{UNSAT}(C)/q$. Its construction keeps one shared vertex per input variable and adds one private tuple vertex per listed constraint. ([[lem-bounded-arity-boolean-csp-to-binary-constraint-graph]])

[F8] Graph value is the maximum satisfied edge fraction and system value is the maximum satisfied constraint fraction; both are $1$ on an empty list, and $\operatorname{UNSAT}=1-\operatorname{val}$ on each side. ([[def-constraint-graph-and-labeling-value]], [[def-assignment-tester-and-rejection-ratio]])

[F9] An explicit constraint graph with $|V|$ vertices and $|E|$ edges uses $O(|V|+|E|\lvert\Sigma\rvert^2)$ table entries and endpoint names of $O(\log(|V|+2))$ bits, and a graph with $m$ edge records has at most $2m$ nonisolated vertices. ([[def-constraint-graph-and-labeling-value]])

[F10] For an edge circuit on two formal pieces of length $\ell$, the two-piece tester has $N_e\ge2\ell\ge4$ QUADEQ wires, uses $2\ell+2^{\ell+1}+2^{N_e}+2^{N_e^2}$ local variables, and pads its nine test families to $q_e=9D_e2^{K_e}$ constraints, where $D_e\ge1$ and $K_e\ge2N_e^2$ because the BLR test on the tensor table uses $2N_e^2$ random bits. Therefore the local variable count is at most $4\cdot2^{N_e^2}\le q_e$. ([[thm-two-piece-pcp-of-proximity]], proof steps 1.2, 2.3, 3.2])

## Proof

**Given:** Use the fixed alphabet, code length and input graph from the statement, and define $A_\Sigma(G)$ below by the two cited constructions.

1.1 Define $A_\Sigma(G)$ to be the binary graph produced by applying [[lem-bounded-arity-boolean-csp-to-binary-constraint-graph]] with $q=6$ to the Boolean system $H=G\circ P$ when $E(G)\ne\varnothing$, and to the empty system when $E(G)=\varnothing$. Its output alphabet is the $\widehat\Sigma$ displayed in the statement, independent of $\Sigma$: the two bit labels $B(0),B(1)$ and the $64$ tuple labels $T(a)$, $a\in\{0,1\}^6$. [F7, given, construct]

1.2 Suppose first that $E(G)=\varnothing$. Then $H$ has no variables and no constraints by [F1], so $\operatorname{val}(H)=1$ and $\operatorname{UNSAT}(H)=0$ by [F8]; the conversion of the empty system is an edgeless graph, so $\operatorname{val}(A_\Sigma(G))=1$ and $\operatorname{UNSAT}(A_\Sigma(G))=0$ by [F8] and [F7]. The input also has $\operatorname{val}(G)=1$ and $\operatorname{UNSAT}(G)=0$, and $0\le C_\Sigma\cdot0$ holds for every constant. This disposes of the edgeless case for all four clauses. [F1, F7, F8, given, cases]

1.3 Suppose now that $E(G)\ne\varnothing$. By [F3] and [F4], for a fixed $\Sigma$ every edge circuit has at most $N_\Sigma:=2\ell+O(W^3)$ wires, with the implicit constant of [F3] depending only on $\Sigma$; hence every local gadget size satisfies $q_e\le Q_\Sigma:=2^{7N_\Sigma^2+4}$. The least common multiple $M$ of the finitely many numbers $q_e$ therefore divides $\operatorname{lcm}(1,\dots,Q_\Sigma)=:M_\Sigma$, a finite integer depending only on $\Sigma$. Thus $H$ has $Mm\le M_\Sigma m$ constraints by [F1], each of arity at most six, and its variable set is the union of the $2\ell$ coordinates of each active block and the $m$ edge-private auxiliary lists. For the explicit vertex count, [F10] shows that each local gadget has at most $q_e$ variables, so the number of edge-private variables contributed by one edge is at most $q_e\le q_{\max}:=\max_e q_e\le Q_\Sigma$. [F1, F3, F4, F10, given, algebra]

1.4 Assume $\operatorname{val}(G)=1$. Then [F5] gives $\operatorname{val}(H)=1$, so $H$ has a labeling satisfying every one of its constraints. Applying the perfect-completeness clause of [F7] to that labeling produces a labeling of $A_\Sigma(G)$ satisfying every output edge, so $\operatorname{val}(A_\Sigma(G))=1$. [F7, F8, F5, given, construct]

1.5 Assume $E(G)\ne\varnothing$ and apply the gap clause of [F7] to $H$ with $q=6$. Combined with [F6] and the code distance $\delta=1/2$ of [F2], the transfer factor $\rho_0\delta/4=1/8000$ gives $$\operatorname{UNSAT}(A_\Sigma(G))\ge\frac{\operatorname{UNSAT}(H)}6 \ge\frac1{6\cdot8000}\operatorname{UNSAT}(G) =\frac1{48000}\operatorname{UNSAT}(G)=\kappa\operatorname{UNSAT}(G).$$ [F2, F6, F7, F8, given, algebra]

2.1 Conversely assume $\operatorname{val}(A_\Sigma(G))=1$. Then $\operatorname{UNSAT}(A_\Sigma(G))=0$ by [F8]. If $E(G)=\varnothing$ then $\operatorname{val}(G)=1$ by [F8]. If $E(G)\ne\varnothing$, then step 1.5 gives $\kappa\operatorname{UNSAT}(G)\le0$, so $\operatorname{UNSAT}(G)=0$ and $\operatorname{val}(G)=1$. This proves the reverse direction of clause 1, and step 1.4 proves the forward direction. [F8, step 1.2, step 1.4, step 1.5, algebra, cases]

2.2 For the size clause assume $E(G)\ne\varnothing$. The conversion adds at most six edge records per constraint of $H$ by [F7], so $$\lvert E(A_\Sigma(G))\rvert\le6\lvert E(H)\rvert=6Mm\le6M_\Sigma m,$$ using step 1.3. Its vertex set consists of the vertices of $H$, one per variable, together with one private tuple vertex per constraint of $H$; by [F1] the number of vertices of $H$ is at most $(2\ell+q_{\max})m$, where $2\ell$ accounts for a block per nonisolated vertex (at most two per edge), and [F10] together with step 1.3 bounds the private variables of each edge gadget by $q_{\max}$. Hence $\lvert V(A_\Sigma(G))\rvert\le(2\ell+q_{\max}+M_\Sigma)m$ by [F1] and [F9]. Both bounds hold with $C_\Sigma:=6M_\Sigma+2\ell+Q_\Sigma+M_\Sigma$, a constant depending only on $\Sigma$; for $E(G)=\varnothing$ the output is edgeless and both quantities are zero. [F1, F7, F9, F10, step 1.2, step 1.3, algebra, cases]

3.1 The map $A_\Sigma$ is deterministic: the robust edge circuits and the two-piece tester are deterministic constructions, the least common multiple and the conversion are computed from finite explicit lists, and no sampling or selection from an infinite family occurs. For fixed $\Sigma$ each edge contributes a search over a constant-size tester transcript enumeration and a constant number of copied constraints, so all relation tables and endpoint names are written in time polynomial in the input encoding length plus the output bit length $O_\Sigma(m\log(m+2))$, which is itself polynomial in the input length by clause 2. [F1, F3, F4, F7, step 1.3, step 2.2, algebra, discharge-construct]

4.1 Clauses 1, 2, 3 and 4 are now proved: clause 1 by steps 1.4 and 2.1, clause 2 by step 2.2, clause 3 by step 1.5 together with the trivial edgeless identity of step 1.2, and clause 4 by step 3.1. The defining constant is $\kappa=\rho_0\delta/(4\cdot6)=(1/1000)(1/2)/24=1/48000$, and the output alphabet is $\widehat\Sigma$ of size $2+2^6=66$ for every $\Sigma$. [F7, step 1.1, step 1.2, step 1.4, step 1.5, step 2.1, step 2.2, step 3.1, algebra, discharge-construct] ∎

## Remarks

The construction is the alphabet-reduction step of Dinur's proof: each edge's robust Walsh–Hadamard gadget is replaced by the constant-arity Boolean tester of [[thm-two-piece-pcp-of-proximity]], and the resulting arity-six system is converted into a binary graph over the tagged alphabet $\{B(0),B(1)\}\sqcup\{0,1\}^6$. Lemma 1.8 of the source and its proof supply the composition pattern, the decoding of shared blocks, and the linear size accounting; the quantitative distance constant $\delta/4$, the ratio $\rho_0$, the arity-six conversion and the constant $\kappa=1/48000$ are proved in the local items cited above, not read off from the source's asymptotic statements.

The bound $M_\Sigma$ is enormous but depends only on $\Sigma$: the tester's constraint count is exponential in the square of the edge-circuit size, which is a constant once the input alphabet is fixed. That is exactly what the later fixed-alphabet iteration needs, since the iteration applies $A$ with the one alphabet $\Sigma_t$ selected before the input size is known. No axiom of choice is used: every construction here is deterministic, and the finite least common multiple is canonical.
