---
id: thm-qa-36-circuit-to-adiabatic-simulation
kind: theorem
title: Circuit-to-adiabatic simulation
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - alg-qa-36-five-local-history-path
  - alg-qa-36-discretized-path-simulation
  - def-qa-36-adiabatic-resource-model
  - lem-qa-36-history-state-ground-and-output
  - lem-qa-36-history-path-full-gap
  - thm-qa-36-jrs-finite-adiabatic-bound
  - thm-qa-36-adiabatic-path-to-circuit-simulation
  - lem-qa-36-partial-trace-contracts-trace-distance
  - thm-qc-trace-norm-duality-and-norm-properties
  - lem-qc-pure-state-trace-distance
  - def-qc-trace-distance
  - def-qc-partial-trace
  - def-qc-uniform-circuit-family
  - def-qc-circuit-cost-model
justified_by: []
proof_strategy: direct
axiom_use: None; only the finite-dimensional gap, adiabatic, simulation, and trace-distance results cited below are used.
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
    - title: Dorit Aharonov, Wim van Dam, Julia Kempe, Zeph Landau, Seth Lloyd, and Oded Regev, Adiabatic Computation is Equivalent to Standard Quantum Computation
      url: https://arxiv.org/pdf/quant-ph/0405098
      locator: Theorem 3.1 and Lemma 3.10, §§3.1.1–3.1.4, PDF pp. 10–20; history path, padding and gap.
    - title: Sabine Jansen, Mary-Beth Ruskai, and Ruedi Seiler, Bounds for the adiabatic approximation with applications to quantum computation
      url: https://arxiv.org/pdf/quant-ph/0603175
      locator: Theorem 3 and Lemmas 1–8, PDF pp. 5–12; finite-rank adiabatic bound.
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapters 30 and 33, printed pp. 151–156 and 171–176; adiabatic theorem and circuit equivalence.
---

## Statement

Let a uniform circuit have $n\ge1$ data qubits and $L\ge1$ gates, each on at most two data qubits. For rational $0<\varepsilon\le1$, set $K=\lceil2L/\varepsilon\rceil$ and $N=L+K$. The construction in [[alg-qa-36-five-local-history-path]] is a five-local finite Hermitian path with a product initial ground state, a unique ground state along the path, gap greater than $3/[864(N+1)^3]$, derivative bound $\|H'\|\le3N$, and $H''=0$. If its term-time providers supply every call required by [[alg-qa-36-discretized-path-simulation]] with the requested certified error at polynomial cost, and coefficient evaluations and output operations also have polynomial cost, the initial ground state can be evolved and the clock discarded to produce a data state at trace distance at most $\varepsilon$ from the circuit output, using
$$T=O(N^{11}/\varepsilon)=O(L^{11}\varepsilon^{-12})$$
continuous evolution time and polynomially many charged term calls, gates, coefficient bits and generator steps. The initial preparation cost, local term access costs, precision costs and output costs are recorded separately by [[def-qa-36-adiabatic-resource-model]].

## Facts & Assumptions

**Given:** The uniformly described circuit, its explicitly supplied all-zero preparation, rational $\varepsilon$, and declared polynomial-cost term and coefficient providers for the path.

[F1] The five-local path is defined in [[alg-qa-36-five-local-history-path]], with explicit initial preparation and term access coordinates in [[def-qa-36-adiabatic-resource-model]].

[F2] Its final history state has data marginal within $L/(N+1)\le\varepsilon/2$ of the circuit output ([[lem-qa-36-history-state-ground-and-output]]).

[F3] The full path has a unique ground state and gap greater than $3\Delta_0/4$, with $\Delta_0=1/[216(N+1)^3]$ ([[lem-qa-36-history-path-full-gap]]).

[F4] The finite-rank JRS bound controls the projector error by $A_1(1)$ ([[thm-qa-36-jrs-finite-adiabatic-bound]]).

[F5] Partial trace contracts trace distance ([[lem-qa-36-partial-trace-contracts-trace-distance]]); for pure states trace distance equals the square root of one minus squared overlap ([[lem-qc-pure-state-trace-distance]]).

[F6] The proved path simulator supplies an access schedule with the requested operator error and charges the declared access and preparation costs; circuit-family providers compile to a circuit family under the stated polynomial-generation condition, while named-oracle calls retain their query charges ([[thm-qa-36-adiabatic-path-to-circuit-simulation]]).

[F7] Trace norm satisfies the triangle inequality, so trace distance satisfies it on density operators ([[thm-qc-trace-norm-duality-and-norm-properties]], [[def-qc-trace-distance]]).

## Proof

1.1 Write $H(s)=(1-s)H_{\rm init}+sH_{\rm final}$. The common $H_{\rm input}$ and $JH_{\rm clock}$ terms cancel in $H'$, leaving $H'=H_{\rm prop}-H_{\rm clock0}$, so $\|H'\|\le3N$ from the term bounds, and $H''=0$. By [F3], the full ground gap is at least $\gamma:=3\Delta_0/4=1/[288(N+1)^3]$ throughout the path. Each term of $H_{\rm init}=H_{\rm input}+H_{\rm clock0}+JH_{\rm clock}$ is positive semidefinite. A binary string has no adjacent $01$ pair exactly when all of its $1$ bits precede all of its $0$ bits, so $H_{\rm clock}$ vanishes exactly on the legal unary clocks. On those clocks $H_{\rm clock0}$ vanishes only at $c_0$; at $c_0$, the input penalty vanishes exactly on $|0^n\rangle$. Thus the unique initial ground vector is $|0^n\rangle|c_0\rangle$, whose supplied preparation is included in [F1]. [F1, F3, algebra]

2.1 In the rank-one JRS expression from [F4], each endpoint term is at most $3N/\gamma^2$, and the integral term is at most $7(3N)^2/\gamma^3$ because $H''=0$. Put $\displaystyle B_T=\frac{6N}{\gamma^2}+\frac{63N^2}{\gamma^3},\qquad T=\left\lceil\frac{4B_T}{\varepsilon}\right\rceil.$ Then $A_1(1)\le B_T/T\le\varepsilon/4$. Since $\gamma^{-1}=288(N+1)^3$, we have $B_T=O(N^{11})$ and $T=O(N^{11}/\varepsilon)$. Also $K=\Theta(L/\varepsilon)$ and $N=\Theta(L/\varepsilon)$ for $L\ge1$, $\varepsilon\le1$, giving the stated $O(L^{11}\varepsilon^{-12})$ bound. [F3, F4, step 1.1, algebra]

3.1 Let $\psi_T$ be the ideal evolved unit vector and $\eta$ the final ground vector. The JRS projector estimate gives $\||\psi_T\rangle\langle\psi_T|-|\eta\rangle\langle\eta|\|\le\varepsilon/4$. For rank-one projections the operator norm of their difference equals their trace distance: on the span of the two vectors the difference has eigenvalues $\pm\sqrt{1-|\langle\psi_T,\eta\rangle|^2}$, and it vanishes on the orthogonal complement. Thus their full-register trace distance is at most $\varepsilon/4$. [F4, F5, step 2.1, algebra]

4.1 Run the proved simulator [F6] with tolerance $\varepsilon/4$ and execute its schedule on the supplied initial vector. If $\widetilde\psi_T$ is the resulting unit vector, operator-norm error gives $\|\widetilde\psi_T-\psi_T\|\le\varepsilon/4$. Put $c=\langle\psi_T,\widetilde\psi_T\rangle$. By [F5], the pure-state trace distance squared is $(1-|c|)(1+|c|)\le2(1-|c|)\le2-2\operatorname{Re}c=\|\widetilde\psi_T-\psi_T\|^2$, so it is at most $\varepsilon/4$. By partial-trace contractivity, tracing out the clock does not increase either this error or the adiabatic error in step 3.1. [F5, F6, step 3.1, algebra]

5.1 The data marginal of $|\eta\rangle$ is within $\varepsilon/2$ of the target circuit output by [F2]. By [F7], the triangle inequality for trace distance, steps 3.1–4.1, and the padding estimate give total output distance at most $\varepsilon/4+\varepsilon/4+\varepsilon/2=\varepsilon$. [F2, F5, F7, step 3.1, step 4.1, algebra]

6.1 The term list has $M=n+N+N+(N-1)=n+3N-1\le n+3N$ terms: $n$ input projectors, $N$ clock-potential projectors, $N$ propagation terms, and $N-1$ clock-penalty projectors. Each has norm at most $1$ by the local block calculation in the proof of the full-gap lemma and the projection form of the other terms. Set the certified derivative bound to $M_1=3N$. The coefficient functions are the constants $1$, $J$, and the affine functions $s$ and $1-s$; at rational grid points they are exactly computable rationals, so take zero coefficient error. For every sample, each coefficient has magnitude at most $J$ and each term norm is at most $1$, whence $\sum_{p<q}\|[A_p,A_q]\|\le2\binom M2J^2\le M^2J^2$; use the finite rational certificate $B=M^2J^2$. The value of $J=2K_0+864K_0^2(N+1)^3+1$ is polynomial in $n,N$, so $M_1,B$ and all coefficient encodings have polynomial bit length. With $T=\lceil4B_T/\varepsilon\rceil=O(N^{11}/\varepsilon)$ and $M_1=3N$, the grid count $q=O(TN/\varepsilon)$ is polynomial. Since $\tau=T/q\le\varepsilon/(9N)$, the product-formula count $r_{\rm PF}\le1+3q\tau^2B/\varepsilon=1+3T\tau B/\varepsilon$ is polynomial as well. Thus [F6] executes finitely many, polynomially many term calls, and by hypothesis their requested-error providers, coefficient procedures and output operation have polynomial charged cost. Preparation cost, queries, gates, ancillas, coefficient precision, circuit-description bits and generator time are all separately recorded; no spectral projector is used to prepare the initial state. [F1, F6, step 2.1, algebra] ∎
