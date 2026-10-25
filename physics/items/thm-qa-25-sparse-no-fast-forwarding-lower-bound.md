---
id: thm-qa-25-sparse-no-fast-forwarding-lower-bound
kind: theorem
title: Sparse Hamiltonian no-fast-forwarding
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-20-sparse-hamiltonian-oracle-model
  - def-promise-problem
  - def-qc-circuit-cost-model
  - def-qc-uniform-circuit-family
  - def-qc-coherent-function-oracle
  - thm-qc-reversible-xor-oracle-unitary
  - def-qa-19-finite-matrix-dynamics
  - thm-qa-19-matrix-exponential-unitary-properties
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - lem-qa-25-parity-path-transfer
  - thm-qa-25-bounded-error-parity-query-lower-bound
proof_strategy: direct
axiom_use: "None; the reduction uses finite matrices and finite coherent oracles."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.1"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.4"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

For $n\ge1$, let $H_x$ be the $2(n+1)$-dimensional, at-most-two-sparse Hermitian path matrix of [[lem-qa-25-parity-path-transfer]] for $x\in\{0,1\}^n$, with weights $w_i=\sqrt{i(n+1-i)}/n$. Put $\eta=1/(6\pi n)$, choose $b=\lceil\log_2(3\pi n)\rceil$, and round each nonzero weight to the nearest dyadic $q_i=2^{-b}\operatorname{round}(2^bw_i)$, with ties rounded upward. Let $\widetilde H_x$ be the same path matrix with weights $q_i$, and encode its entries exactly in the row-location/value XOR-oracle model of [[def-qa-20-sparse-hamiltonian-oracle-model]], using $O(\log(n+1))$ value bits for the finite set $\{0,q_1,\ldots,q_n\}$. Then $\|H_x-\widetilde H_x\|_{\rm op}\le2\eta$ and the sparse normalization $\alpha_{\rm sp}=2\max_i q_i$ lies between positive absolute constants.

Suppose a uniform sparse-oracle query algorithm uses $q$ total row-location and value-oracle calls and returns a clean-input isometry $V_xJ_{\rm clean}$ satisfying
$$\|V_xJ_{\rm clean}-J_{\rm out}e^{-it\widetilde H_x}\|_{\rm op}\le\tfrac13, \qquad t=\pi n/2,$$
where $J_{\rm out}$ appends its work registers in zero. Then $q\ge n/4$. Thus this sparse row/value model requires $\Omega(n)=\Omega(t)=\Omega(\alpha_{\rm sp}t)$ queries for this family. The result does not assert a lower bound for arbitrary block-encoding access.

## Facts & Assumptions

**Given:** An integer $n\ge1$, an input string $x\in\{0,1\}^n$, the path family, and the coherent query model in the Statement.

[F1] [[def-qa-20-sparse-hamiltonian-oracle-model]]: row-location and entry-value calls are exact coherent XOR oracles for a finite Hermitian matrix's encoded entries; each named call is charged.

[F2] [[lem-qa-25-parity-path-transfer]]: $\|H_x\|_{\rm op}\le1$ and $e^{-iH_x\pi n/2}|0,0\rangle=(-i)^n|n,\operatorname{parity}(x)\rangle$.

[F3] [[thm-qa-19-matrix-exponential-unitary-properties]]: finite Hermitian matrix evolutions are unitary and differentiable with derivative $-iHe^{-itH}$.

[F4] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: operator norm is submultiplicative and satisfies the finite-dimensional adjoint norm identity.

[F5] [[def-qc-coherent-function-oracle]]: the parity-bit oracle maps $|j,y\rangle\mapsto|j,y\oplus x_j\rangle$.

[F6] [[thm-qc-reversible-xor-oracle-unitary]]: every total XOR-function oracle is a unitary involution.

[F7] [[thm-qa-25-bounded-error-parity-query-lower-bound]]: computing parity on all $n$-bit inputs with error at most $1/3$ needs at least $n/2$ coherent bit queries.

[F8] [[def-qc-uniform-circuit-family]] and [[def-promise-problem]]: the query algorithm is input-independent between oracle calls and must meet its error guarantee on every input in the full Boolean-cube promise.

[F9] [[def-qc-circuit-cost-model]]: named oracle calls are counted separately from ordinary gates and classical computation.

## Proof

**Given:** As in Facts & Assumptions.

1.1 The maximum weight satisfies $1/2\le \max_iw_i\le1$: $i(n+1-i)\le(n+1)^2/4\le n^2$ gives the upper bound, and a central integer $i$ has $i(n+1-i)\ge n^2/4$ for the lower bound. Every edge satisfies $i(n+1-i)-n=(i-1)(n-i)\ge0$, so $w_i\ge w_1=1/\sqrt n>\eta$. The grid spacing $2^{-b}\le1/(3\pi n)=2\eta$, hence nearest rounding gives $|q_i-w_i|\le\eta$ and $q_i>0$; the support is unchanged. It follows that each row and column of $E_x=\widetilde H_x-H_x$ has at most two nonzero entries, each of magnitude at most $\eta$, and $2/9<\max_iq_i<2$; in particular $2\max_iq_i$ is bounded above and below by positive constants independent of $n,x$. [F1, F2, given, algebra]

1.2 Order path vertices lexicographically by $(i,b_0)$. A location query's predecessor slot, when present, uses only $x_i$, and its successor slot, when present, uses only $x_{i+1}$; their order is fixed by the path index. For an arbitrary candidate pair of vertices, the value query tests the single relevant edge bit and returns the known dyadic $q_i$ or zero. Each oracle function can thus be computed reversibly using one parity-bit query into scratch, an XOR into the requested target, and a second parity-bit query to erase scratch. The same construction controls the target XOR by any query-control bit, so each controlled or uncontrolled sparse-oracle call costs at most two calls to the parity-bit oracle. The x-independent $q_i$ table is generated by integer arithmetic: binary search finds the nearest grid point by comparing squared integers with $2^{2b}i(n+1-i)/n^2$, using $O(\log(n+1))$-bit numbers and polynomially many steps in $n$. The location and value encodings are total, including sentinels, and this x-independent arithmetic is part of the fixed inter-query circuit. [F1, F5, F6, F8, F9, algebra]

2.1 For any vector $v$, Cauchy–Schwarz in each row gives $|(E_xv)_r|^2\le\Big(\sum_c|(E_x)_{rc}|\Big)\Big(\sum_c|(E_x)_{rc}||v_c|^2\Big).$ Summing over $r$, each row sum and each column sum of $|E_x|$ is at most $2\eta$. Hence $\|E_xv\|^2\le(2\eta)(2\eta)\|v\|^2$, proving $\|\widetilde H_x-H_x\|_{\rm op}\le2\eta$. [F1, step 1.1, algebra]

3.1 For $0\le s\le t$, differentiate $G(s)=e^{-i(t-s)\widetilde H_x}e^{-isH_x}$. By [F3], $G'(s)=i e^{-i(t-s)\widetilde H_x}(\widetilde H_x-H_x)e^{-isH_x}.$ The two outside factors are unitary, so [F4] gives $\|G'(s)\|_{\rm op}\le\|\widetilde H_x-H_x\|_{\rm op}$. Integrating from $0$ to $t$ and using step 2.1 yields $\|e^{-it\widetilde H_x}-e^{-itH_x}\|_{\rm op}\le t(2\eta)=\pi n\eta=\tfrac16.$ [F3, F4, step 2.1, algebra]

4.1 Apply the assumed simulator to the initial state $|0,0\rangle$ with clean work registers. The triangle inequality, step 3.1, and [F2] show that its output vector is within $1/3+1/6=1/2$ of $J_{\rm out}(-i)^n|n,\operatorname{parity}(x)\rangle$. The orthogonal projection onto outcomes whose second path bit is not $\operatorname{parity}(x)$ annihilates this target vector. Its norm on the simulator output is therefore at most $1/2$, so measuring the path bit computes parity with error at most $1/4$. This is a valid bounded-error parity algorithm on every $x$. [F2, F8, step 3.1, algebra]

5.1 Replacing each of the algorithm's $q$ sparse-oracle calls by this reversible simulation yields a parity algorithm using at most $2q$ bit queries and error at most $1/4\le1/3$. By [F7], $2q\ge n/2$, hence $q\ge n/4$. From step 1.1 the sparse normalization is $\Theta(1)$, and $t=\pi n/2$, so the lower bound is equivalently $\Omega(n)=\Omega(t)=\Omega(\alpha_{\rm sp}t)$ on this family. [F7, step 1.1, step 4.1, step 1.2, algebra] ∎
