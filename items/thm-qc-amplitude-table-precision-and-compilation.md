---
id: thm-qc-amplitude-table-precision-and-compilation
kind: theorem
title: Amplitude Table Precision and Compilation
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - alg-qc-state-preparation
  - def-qc-circuit-denotational-semantics
  - thm-qc-state-preparation-rotation-level-upper-bound
  - thm-qc-fixed-arity-unitary-error-budget
  - thm-qc-exact-arbitrary-unitary-qsd-upper-bound
  - def-qc-state-preparation-cost-model
  - def-qc-projective-chord-distance
  - lem-qc-projective-chord-distance-formula
  - cor-triangle-inequality-for-inner-product-norm
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - lem-rat-embeds-dense
  - def-qc-tensor-register-and-permutation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm
      url: https://arxiv.org/pdf/quant-ph/0505030
    - title: Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits
      url: https://arxiv.org/pdf/quant-ph/0406176
---

## Statement

Let integer $n\ge0$, $D=2^n$, unit vector $a\in\mathbb C^D$, and integer $b\ge1$ be given. Let $v\in\mathbb Q(i)^D$ have each real and imaginary coordinate within $2^{-b}$ of the corresponding coordinate of $a$. Put $\eta=\sqrt{2D}\,2^{-b}$ and assume $\eta<1/2$. Then $v\ne0$ and $\|v/\|v\|_2-a\|_2\le2\eta$. For $n=0$, the unique data ray is prepared by the empty circuit with zero error. For $n\ge1$, prepare the normalized table $v/\|v\|_2$ by [[alg-qc-state-preparation]], and suppose its exact continuous circuit has an integer $G\ge1$ of unitary blocks on the data and clean work register, each acting on at most a fixed integer $k\ge1$ wires independent of $n,D,G$, with an integer $s\ge0$ clean work qubits and $G=O((n+1)D)$. For any $0<\varepsilon_c<1/2$, choose a rational internal budget $\varepsilon'_c$ with $\varepsilon_c/2<\varepsilon'_c<\varepsilon_c$ and compile each complete, unconditional block with projective operator-norm error at most $\varepsilon'_c/G$. Then the compiled joint output ray is within projective chord distance $2\eta+\varepsilon_c$ of $[a\otimes|0^s\rangle]$.

For fixed block arity, the declared compiler interface yields $O(G\log^c(G/\varepsilon_c))$ finite-alphabet gates, with $c=\log_{3/2}5$. If the rational table $v$ is supplied in a dense fixed-width encoding with $b$ bits per real/imaginary coordinate, it has $2Db=\Theta(Db)$ input bits; the preprocessing reads this encoding and computes the exact normalization internally. Table input and preprocessing are separate from coherent gate cost. The statement asserts no uniform bit-time for angle computation or SK compilation; the separate proposed supplier [[thm-qc-solovay-kitaev-bit-complexity]] and certified angle evaluation remain held obligations.

## Facts & Assumptions

**Given:** A unit vector $a$, a rational table $v$, the error and block-compiler hypotheses in the Statement, an unconditional preparation circuit on $n$ data qubits and its clean work register, and a fixed maximum block arity $k\ge1$ independent of $n,D,G$.

[F1] The preparation algorithm acts on an explicit table and produces the target ray by prefix rotations and leaf phases ([[alg-qc-state-preparation]]).

[F2] Its exact circuit has $G=O((n+1)D)$ bounded-arity gates ([[thm-qc-state-preparation-rotation-level-upper-bound]]).

[F3] Projective chord distance is the infimum Euclidean distance over unit phases by definition, and this infimum is attained ([[def-qc-projective-chord-distance]], [[lem-qc-projective-chord-distance-formula]]).

[F4] A rational table with a fixed-width encoding of $b$ bits per real/imaginary coordinate occupies $2Db$ bits, and the model separates input scanning from quantum gate cost ([[def-qc-state-preparation-cost-model]]).

[F5] The Euclidean norm induced by the root inner product satisfies the triangle inequality ([[cor-triangle-inequality-for-inner-product-norm]]).

[F6] The operator norm is the maximum of $\|T\psi\|$ over unit input vectors, and a unitary therefore has operator norm $1$ ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F7] The operator norm is submultiplicative ([[cor-operator-norm-submultiplicative-and-t-star-t-identity]]).

[F8] Between any two distinct real numbers lies a rational number ([[lem-rat-embeds-dense]]).

[F9] The ordered tensor factors give an orthonormal product basis, and wire permutations permute that basis ([[def-qc-tensor-register-and-permutation]]).

[A1] Every block on $r$ wires, $1\le r\le k$, has an exact finite no-ancilla circuit over one-qubit $U(2)$ gates and CNOTs; the stated QSD bound is at most $4^r$ CNOTs for $r\ge2$, and none is needed for $r=1$ ([[thm-qc-exact-arbitrary-unitary-qsd-upper-bound]]). Put $C_k=4^k$ and $M_k=k+2C_k$. Step 1.2 derives a uniform one-qubit factor bound from this CNOT bound by combining gates on each wire.

[A2] The fixed-arity supplier [[thm-qc-fixed-arity-unitary-error-budget]] proves whole-block projective error and gate-count bounds for a supplied exact one-qubit/CNOT factorization. It accepts a real target error and uses a rational dyadic tolerance internally. No improved QSD CNOT count or compiler bit-time is inferred here.

## Proof

**Given:** As in Facts & Assumptions.

1.1 Each of the $2D$ real coordinates differs by at most $2^{-b}$, so $\|v-a\|_2^2\le2D\,2^{-2b}$ and $\|v-a\|_2\le\eta$. The reverse triangle inequality gives $|\|v\|_2-1|\le\eta$, hence $\|v\|_2\ge1-\eta>0$. [given, algebra]

1.2 Use [F8] to choose a rational $\varepsilon'_c$ with $\varepsilon_c/2<\varepsilon'_c<\varepsilon_c$. Let the exact normalized-table circuit be $U_G\cdots U_1$. Each block has positive arity $r_j\le k$ and, by [A1], an exact circuit with at most $C_k$ CNOTs. Scan that circuit chronologically, maintaining one pending one-qubit product on each wire. At a one-qubit gate, compose it into its wire's pending product. Before each CNOT, emit the two pending products on its control and target and reset them to identity; pending products on other wires commute with that CNOT and may remain pending. At the end emit all $r_j$ pending products. This preserves the exact circuit product and uses at most $2C_k+r_j\le M_k$ one-qubit factors, counting identities if necessary, so the one-qubit count is positive. Apply [A2] to this factorization with real target error $\varepsilon'_c/G$; it gives a compiled block $\widetilde U_j$ and a unit scalar $\lambda_j$ with $\|U_j-\lambda_j\widetilde U_j\|_{\mathrm{op}}\le\varepsilon'_c/G<\varepsilon_c/G$. Each block includes all of its controls and targets before compilation; thus $\lambda_j$ is a scalar on its entire support and becomes one global scalar when tensored with identities on the other wires. [A1, A2, F1, F2, F8, given]

2.1 Split the normalization error through $v$: by [F5], $\|v/\|v\|_2-a\|_2\le\|v/\|v\|_2-v\|_2+\|v-a\|_2=|1-\|v\|_2|+\|v-a\|_2\le2\eta$. [given, F5, step 1.1, algebra]

2.2 Insert the $G$ intermediate products between $U_G\cdots U_1$ and $(\prod_j\lambda_j)\widetilde U_G\cdots\widetilde U_1$ to obtain the telescoping sum with one block difference in each term. Each support-level block difference, when extended by identity to the full ordered register, has operator norm at most its support norm: after permuting the product basis to group support and unused wires, write a vector as $\sum_t x_t\otimes e_t$ in an orthonormal basis $(e_t)$ of the unused wires, and use $\sum_t\|A x_t\|^2\le\|A\|_{\mathrm{op}}^2\sum_t\|x_t\|^2$. The wire permutation preserves norm by [F9]. For any unit input vector, [F5] bounds the norm of the telescoping sum by the sum of term norms; [F6] gives norm $1$ for every surrounding unitary factor, so [F7] bounds each term by $\varepsilon'_c/G$. Taking the maximum over unit inputs with [F6] gives whole-circuit operator error at most $\sum_{j=1}^G\varepsilon'_c/G=\varepsilon'_c<\varepsilon_c$. Applying this to the fixed initial vector gives projective chord error at most $\varepsilon'_c$ from the exact normalized-$v$ output. [F5, F6, F7, F9, step 1.2, algebra]

3.1 By [F3], choose a phase aligning the compiled output to the exact normalized-$v$ joint output within $\varepsilon'_c$, and a phase aligning that exact output to $a\otimes|0^s\rangle$ within $2\eta$ by step 2.1. Multiplying the second phase by the first and applying [F5] gives $d_{\mathrm{ch}}([\mathrm{out}],[a\otimes|0^s\rangle])\le2\eta+\varepsilon'_c<2\eta+\varepsilon_c$. [F3, F5, step 2.1, step 2.2, algebra]

4.1 For fixed maximum arity $k$, [A2] uses $O(M_k\log^c(M_kG/\varepsilon'_c)+C_k)$ finite-alphabet gates per block at accuracy $\varepsilon'_c/G$. Since $M_k,C_k$ are constants, $\varepsilon'_c>\varepsilon_c/2$, and $G/\varepsilon_c>2$, this is $O(\log^c(G/\varepsilon_c))$ per block; hence $G$ blocks use $O(G\log^c(G/\varepsilon_c))$ gates. If the rational input table $v$ has an encoding as in [F4], it contains $2Db$ bits, and [F1] reads every real/imaginary coordinate in its preprocessing pass before exact normalization; this input scan is separate from quantum gate count. No angle-computation or compiler bit-time follows from these bounds. [A1, A2, F1, F4, step 1.2] ∎

## Remarks

The compilation error is projective for each complete unconditional block. The exact QSD construction supplies the factorization needed by the fixed-arity compiler for every block in the stated arity bound. Rephasing a one-qubit gate before adding its control is not justified: that scalar becomes a relative phase between control branches. The separate bit-complexity supplier is not used as a premise here because no uniform bit-time claim is made.
