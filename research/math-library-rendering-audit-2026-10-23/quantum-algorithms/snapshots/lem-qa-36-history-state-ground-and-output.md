---
id: lem-qa-36-history-state-ground-and-output
kind: lemma
title: History state and padded output
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - alg-qa-36-five-local-history-path
  - def-qc-partial-trace
  - def-qc-density-operator
  - def-qc-trace-distance
  - thm-qc-trace-distance-range-and-equality
  - def-qc-dirac-notation-conversion
justified_by: []
proof_strategy: direct
axiom_use: None; the proof uses finite sums, finite-dimensional kernels, and the supplied trace-distance bound.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Dorit Aharonov, Wim van Dam, Julia Kempe, Zeph Landau, Seth Lloyd, and Oded Regev, Adiabatic Quantum Computation is Equivalent to Standard Quantum Computation
      url: https://arxiv.org/pdf/quant-ph/0405098
      locator: §3.1.1 and Lemma 3.10, PDF pp. 10–15; propagation kernel, input penalty, and padding.
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapter 33, printed pp. 171–176; history-state path and clock trace.
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

Let the five-local path in [[alg-qa-36-five-local-history-path]] have $N=L+K$ gates, including its $K$ identity gates, and let $V_0=I$ and $V_\ell=U_\ell\cdots U_1$. On the legal unary-clock space, the propagation Hamiltonian has kernel
$$\left\{\frac1{\sqrt{N+1}}\sum_{\ell=0}^{N}V_\ell\xi\otimes|c_\ell\rangle:\xi\in(\mathbb C^2)^{\otimes n}\right\}.$$
After adding $H_{\rm input}$, this kernel is one-dimensional and its unit vector is
$$|\eta\rangle=\frac1{\sqrt{N+1}}\sum_{\ell=0}^{N}V_\ell|0^n\rangle\otimes|c_\ell\rangle.$$
The full $H_{\rm final}$ also has this unique ground state. Its data-register marginal is at trace distance at most $L/(N+1)\le\varepsilon/2$ from the specified circuit output state.

## Facts & Assumptions

**Given:** The gate list, local propagation terms, legal unary clock, input penalty, and padding parameters from [[alg-qa-36-five-local-history-path]].

[F1] The partial trace over the clock sums diagonal clock blocks in an orthonormal product basis ([[def-qc-partial-trace]]).

[F2] A unit vector $\psi$ represents the density operator $|\psi\rangle\langle\psi|$ ([[def-qc-density-operator]], [[def-qc-dirac-notation-conversion]]).

[F3] Any two density operators have trace distance at most $1$ ([[thm-qc-trace-distance-range-and-equality]]).

## Proof

1.1 Fix an assignment to all clock bits outside the local support of $h_\ell$. The subspace with that fixed spectator assignment and local clock state in $\{a_\ell,b_\ell\}$ is invariant; in the order $(a_\ell,b_\ell)$ the block is $\displaystyle \frac12\begin{pmatrix}I&-U_\ell^*\\-U_\ell&I\end{pmatrix}.$ The term is zero on every local pattern outside this pair. These mutually orthogonal blocks, together with the subspaces for those other local patterns, decompose the full register, so it suffices to inspect each displayed block and the zero action on the rest. For any data vectors $x,y$, its quadratic form is $\frac12\|y-U_\ell x\|^2\ge0$, and its kernel consists exactly of paired amplitudes $(x,U_\ell x)$. Hence $h_\ell$ is positive semidefinite on the full clock register. [given, algebra]

2.1 On legal unary clocks, $a_\ell$ occurs only at $c_{\ell-1}$ and $b_\ell$ only at $c_\ell$. Define the unitary $W=\sum_{j=0}^NV_j\otimes|c_j\rangle\langle c_j|$ on that space. Since $V_\ell=U_\ell V_{\ell-1}$, conjugating the block from step 1.1 by $W$ makes every adjacent block $\frac12\begin{pmatrix}I&-I\\-I&I\end{pmatrix}$. Summing over edges gives $W^*H_{\rm prop}W=I_{\rm data}\otimes L_N/2$. [given, step 1.1, construct, algebra]

3.1 The quadratic form of $L_N$ is $\langle z,L_Nz\rangle=\sum_{j=0}^{N-1}|z_j-z_{j+1}|^2$, so its kernel is the constant clock vectors. Step 2.1 therefore gives exactly the displayed propagation kernel, with arbitrary data vector $\xi$. [step 2.1, algebra]

4.1 On a legal clock, $H_{\rm input}$ vanishes except at $c_0$, where it is the data Hamming-weight operator $N_1=\sum_i|1\rangle\langle1|_i$. Since $V_0=I$, conjugation by $W$ leaves this block unchanged. For a kernel vector with data vector $\xi$, its input energy is $\langle\xi,N_1\xi\rangle/(N+1)$, which is zero exactly when $\xi$ lies in the one-dimensional span of $|0^n\rangle$. Thus $H_{\rm prop}+H_{\rm input}$ has the unique normalized kernel vector $|\eta\rangle$. [given, step 3.1, algebra]

5.1 The clock penalty $H_{\rm clock}$ is positive semidefinite and has kernel exactly the legal unary strings: a binary string has no adjacent pattern $01$ exactly when all its $1$ bits precede all its $0$ bits. Each term of $H_{\rm final}$ is positive semidefinite by step 1.1 and the definitions of $H_{\rm input},H_{\rm clock}$. A zero-energy vector must therefore lie in the clock-penalty kernel and in the kernel identified in step 4.1. This proves uniqueness for the full final Hamiltonian. [given, step 1.1, step 4.1, algebra]

5.2 Tracing the clock out of $|\eta\rangle\langle\eta|$ and using [F1] removes all cross terms between distinct $c_\ell$, giving $\displaystyle \rho_{\rm data}=\frac1{N+1}\sum_{\ell=0}^{N}|V_\ell0^n\rangle\langle V_\ell0^n|.$ For each $\ell\ge L$, the appended gates are identities, so $V_\ell|0^n\rangle=|\psi_{\rm out}\rangle:=U_L\cdots U_1|0^n\rangle$. There are $K+1$ such indices, and the other $L$ terms form a density operator $\sigma$ after normalization. Hence $\rho_{\rm data}=\frac{L}{N+1}\sigma+\frac{K+1}{N+1}|\psi_{\rm out}\rangle\langle\psi_{\rm out}|$. [F1, F2, step 4.1, algebra]

6.1 By homogeneity of the trace norm in the definition of trace distance, the distance from $|\psi_{\rm out}\rangle\langle\psi_{\rm out}|$ is $\frac{L}{N+1}D(\sigma,|\psi_{\rm out}\rangle\langle\psi_{\rm out}|)\le L/(N+1)$ by [F3]. Since $K=\lceil2L/\varepsilon\rceil$ and $N=L+K$, we have $L/(N+1)\le L/K\le\varepsilon/2$. [F2, F3, step 5.2, algebra] ∎
