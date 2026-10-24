---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-qa-35-quantum-fingerprint-message-lower-bound.json
  precheck: pass
id: thm-qa-35-quantum-fingerprint-message-lower-bound
kind: theorem
title: "Entanglement-free, randomness-free quantum fingerprints require $\\Omega(\\log n)$ qubits"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps: ["def-qa-35-finite-communication-protocol", "def-qa-35-equality-promise", "def-qc-trace-distance", "thm-qc-measurement-variation-at-most-trace-distance", "def-qc-density-operator", "def-qc-povm-and-outcome-law", "lem-qa-35-trace-norm-tensor-density-identity", "thm-qc-trace-norm-spectral-formula", "thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison", "thm-cauchy-schwarz-in-an-inner-product-space", "def-qc-trace-norm", "thm-non-negative-square-root-exists-and-is-unique", "def-trace-of-an-endomorphism", "def-non-negative-and-positive-operator"]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions, sums, bases, and selection sets are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Harry Buhrman, Richard Cleve, John Watrous, Ronald de Wolf, Quantum Fingerprinting"
      url: https://arxiv.org/pdf/quant-ph/0102001
      locator: "Complete 8-page paper, especially §2, PDF pp.2–4, code fingerprints and swap-test analysis."
    - title: "John Watrous, The Theory of Quantum Information"
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
      locator: "§1.1.3 (operator decompositions and norms), §2.1.2 (density operators), §2.3.1 (measurements), and §3.1.1, Theorem 3.4 (binary state discrimination)."
---

## Statement

In an SMP Equality protocol on $n\ge2$ bits with worst-case error at most $1/3$, no shared randomness or entanglement, and fixed $q$-qubit messages, each sender must transmit $\Omega(\log n)$ qubits. For fixed Bob input $y$, the referee’s equality POVM separates $\rho_y$ from each $\rho_x$, $x\ne y$, by trace distance at least $1/3$; packing $d\times d$ density matrices in trace distance yields $2^n\le(26d^{3/2})^{d^2}$, $d=2^q$, and hence $q=\Omega(\log n)$.

## Facts & Assumptions

**Given:** A quantum SMP Equality protocol on $n\ge2$ bits with fixed $q_A$-qubit and $q_B$-qubit messages, no shared randomness or entanglement, and worst-case error at most $1/3$. Let $\rho_x$ and $\sigma_y$ be the parties' message density operators.

[F1] [[def-qa-35-finite-communication-protocol]]: For quantum SMP with no shared entanglement or randomness, the received state is a product of the two locally prepared density operators.

[F2] [[def-qa-35-equality-promise]]: The required output is $1$ on YES and $0$ on NO.

[F3] [[thm-qc-measurement-variation-at-most-trace-distance]]: For any finite POVM on two density operators, one half of the sum of absolute outcome-probability differences is at most their trace distance.

[F4] [[def-qc-trace-distance]]: Their trace distance is $D(\rho,\sigma):=\tfrac12\|\rho-\sigma\|_1$.

[F5] [[lem-qa-35-trace-norm-tensor-density-identity]]: For density operators $\rho,\sigma$ on $H$ and $\tau$ on $K$, $D(\rho\otimes\tau,\sigma\otimes\tau)=D(\rho,\sigma)$.

[F6] [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]: $\lVert A\rVert_F=\bigl(\sigma_1^{2}+\cdots+\sigma_r^{2}\bigr)^{1/2}$.

[F7] [[def-qc-trace-norm]]: For $A:H\to K$, $\|A\|_1:=\sum_{j<\dim H}s_j(A)$.

[F8] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle x,y\rangle|\le\|x\|\,\|y\|$.

[F9] [[thm-non-negative-square-root-exists-and-is-unique]]: Let $V$ be a finite-dimensional real or complex inner-product space and let $T:V\to V$ be non-negative. Then there exists a unique non-negative operator $R:V\to V$ such that $R^2=T$.

[F11] [[def-non-negative-and-positive-operator]]: The operator $T$ is non-negative when $T$ is self-adjoint and $\langle Tv,v\rangle\ge0$ for every vector $v$.

[F10] [[def-trace-of-an-endomorphism]]: The trace is the sum of the diagonal entries in any basis.

## Proof

**Proof technique:** finite-dimensional packing.

1.1 Fix Bob's input $y$. On inputs $(y,y)$ and $(x,y)$ with $x\ne y$, the referee receives $\rho_y\otimes\sigma_y$ and $\rho_x\otimes\sigma_y$ by [F1]. Group all referee outcomes assigned answer $1$ into one effect and the remaining outcomes into its complement, giving the protocol's two-outcome POVM. Its accepting probabilities differ by at least $1/3$ by [F2] and the worst-case error bound. The total variation of this binary law is that absolute difference, so [F3]–[F5] imply $D(\rho_x,\rho_y)\ge1/3$. As $x,y$ were arbitrary, the $2^n$ states $\rho_x$ are pairwise separated by at least $1/3$. [given, F1, F2, F3, F4, F5, algebra]

1.2 Fix an orthonormal basis of the $d=2^{q_A}$ dimensional message space. By [F11], $\rho$ is self-adjoint, and by [F1] and [F10] its diagonal entries are nonnegative and sum to one, so each lies in $[0,1]$. Let $R=\sqrt\rho$, which exists by [F9]. For basis vectors $e_i,e_j$, $\rho_{ij}=\langle\rho e_j,e_i\rangle=\langle R e_j,R e_i\rangle$; [F8] gives $|\rho_{ij}|^2\le\|R e_j\|^2\|R e_i\|^2=\rho_{jj}\rho_{ii}\le1$. Thus the $d^2$ real coordinates (diagonal, and real and imaginary parts above the diagonal) lie in $[-1,1]$. [F1, F8, F9, F10, F11, algebra]

2.1 Partition each coordinate interval into half-open cells of width at most $h=1/(12d^{3/2})$, assigning the endpoint $1$ to the last cell. There are at most $\lceil2/h\rceil+1\le26d^{3/2}$ choices per coordinate and thus at most $(26d^{3/2})^{d^2}$ matrix cells. If two states lie in one cell, their diagonal entries differ by at most $h$, and each off-diagonal real and imaginary part differs by at most $h$. Therefore their difference $Z$ satisfies $\|Z\|_F\le\sqrt2\,d h$. [step 1.2, F6, algebra]

3.1 By [F6]–[F8] and Cauchy–Schwarz on the at most $d$ singular values, $\|Z\|_1\le\sqrt d\,\|Z\|_F$. Their trace distance is consequently at most $\frac12\sqrt d(\sqrt2 d h)=\sqrt2/24<1/3$, contradicting step 1.1. Each cell contains at most one code state, so $2^n\le(26d^{3/2})^{d^2}.$ For $d=2^{q_A}$ this gives $n\ln2\le4^{q_A}(\ln26+\tfrac32q_A\ln2)$. If $q_A<\frac14\log_2n$, the right side is $O(\sqrt n\log n)<n\ln2$ for all sufficiently large $n$, a contradiction. Hence $q_A=\Omega(\log n)$. For any $x\ne y$, fixing Alice's input at $x$ and comparing $(x,x)$ with $(x,y)$ gives $D(\rho_x\otimes\sigma_x,\rho_x\otimes\sigma_y)\ge1/3$ by the same binary measurement argument as in step 1.1. Put $\Gamma=\sigma_x-\sigma_y$. Their difference is $\rho_x\otimes\Gamma$. By the eigenbasis calculation in [F5] with the fixed density factor first, choose orthonormal eigenbases of $\rho_x$ and $\Gamma$ with eigenvalues $t_i\ge0$ and $\lambda_j\in\mathbb R$. The product basis diagonalizes $\rho_x\otimes\Gamma$ with eigenvalues $t_i\lambda_j$, so the trace norm is $\|\rho_x\otimes\Gamma\|_1=\sum_{i,j}t_i|\lambda_j|=\sum_j|\lambda_j|=\|\Gamma\|_1$, since $\sum_i t_i=1$. Thus $D(\rho_x\otimes\sigma_x,\rho_x\otimes\sigma_y)=D(\sigma_x,\sigma_y)\ge1/3$. The same packing bound with $d=2^{q_B}$ yields $q_B=\Omega(\log n)$. [step 1.1, step 2.1, F5, F6, F7, F8, algebra] ∎
