---
id: thm-qa-36-adiabatic-path-to-circuit-simulation
kind: theorem
title: Finite adiabatic path simulation from term access
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - alg-qa-36-discretized-path-simulation
  - def-qa-36-adiabatic-resource-model
  - def-qa-36-finite-adiabatic-path-model
  - def-qa-20-term-list-access-model
  - def-qa-20-first-order-product-formula
  - thm-qa-20-first-order-commutator-error
  - def-qa-19-finite-matrix-dynamics
  - def-qc-uniform-circuit-family
  - def-qc-circuit-cost-model
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - cor-triangle-inequality-for-inner-product-norm
justified_by: []
proof_strategy: direct
axiom_use: None; the proof uses finite-dimensional Duhamel estimates and the declared product-formula simulator only.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Dorit Aharonov, Wim van Dam, Julia Kempe, Zeph Landau, Seth Lloyd, and Oded Regev, Adiabatic Computation is Equivalent to Standard Quantum Computation
      url: https://arxiv.org/pdf/quant-ph/0405098
      locator: Theorem 1.1 discussion and simulation setup, PDF pp. 3–4.
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapters 27–29, printed pp. 133–148; simulation of finite Hamiltonian evolution.
---

## Statement

Let $H(s)$ be a finite-dimensional Hermitian path with an access instance from [[def-qa-36-adiabatic-resource-model]], a supplied exact preparation isometry $A_0$ of cost $C_{\rm init}$, and finite rational certificates $M_1\ge\sup_s\|H'(s)\|$ and $B$ as required by [[alg-qa-36-discretized-path-simulation]]. Suppose all coefficient evaluations, supported term-time calls, and their certified errors are available. For every nonnegative finite exact time code $T$ supported by the term-list access model and rational $0<\varepsilon\le1$, the algorithm in [[alg-qa-36-discretized-path-simulation]] yields a finite access schedule whose unitary evolution block $\widetilde U_T(1)$ satisfies $\|\widetilde U_T(1)-U_T(1)\|\le\varepsilon$. Before any declared output procedure, its composition with the preparation obeys $\|\widetilde U_T(1)A_0-U_T(1)A_0\|\le\varepsilon$. When all required term operations have full-list uniform circuit-family providers and the resulting circuit generator, including coefficient evaluation and wrapper construction, runs in polynomial time, the schedule expands to a full-list uniform circuit family. If named-oracle providers are used, the schedule records and charges each such query. Its cost record contains $C_{\rm init}$ plus all grid, term-query, gate, ancillary-wire, coefficient-bit, description-bit, and generator-time costs supplied by the access instance.

## Facts & Assumptions

**Given:** A uniformly described finite path access instance, its exact preparation circuit and costs, $T$, $\varepsilon$, and the certificates required by the discretized simulator.

[F1] The finite path evolution and preparation interface are specified by [[def-qa-36-finite-adiabatic-path-model]] and [[def-qa-36-adiabatic-resource-model]].

[F2] The discretized algorithm specifies the grid, rational coefficient approximations, product-formula calls, provider errors, finite loop bounds and resource coordinates ([[alg-qa-36-discretized-path-simulation]]).

[F3] For self-adjoint summands, the first-order formula with $r$ steps has error at most $t^2/(2r)$ times the sum of pairwise commutator norms ([[def-qa-20-first-order-product-formula]], [[thm-qa-20-first-order-commutator-error]]).

[F4] Finite Hermitian evolutions and term-exponential providers are unitary; the operator norm is submultiplicative and invariant under unitary multiplication ([[def-qa-19-finite-matrix-dynamics]], [[def-qa-20-term-list-access-model]], [[def-operator-norm-on-a-finite-dimensional-inner-product-space]], [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]).

[F5] The vector norm satisfies the triangle inequality, so the operator norm does also: for every unit $v$, $\|(A+B)v\|\le\|Av\|+\|Bv\|\le\|A\|+\|B\|$, and taking the maximum gives $\|A+B\|\le\|A\|+\|B\|$ ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]], [[cor-triangle-inequality-for-inner-product-norm]]). For a continuous finite-matrix-valued function, the same triangle inequality on finite Riemann sums and passage to the limit gives $\|\int F(u)\,du\|\le\int\|F(u)\|\,du$.

## Proof


1.1 If $T=0$, the exact evolution is $I$, so the supplied preparation and output procedure have zero evolution error. Suppose $T>0$. Let $M$ be the finite term count and use the finite rational certificates in [F2] to compute $q,\tau,r_{\rm PF}$. [F1, F2]

1.2 In physical time $u\in[0,T]$, the generator is $H(u/T)$. On the $j$th interval $[a,b]$ of length $\tau$, compare it with the frozen generator $H(s_j)$, $s_j=j/q$. For the exact propagator $U(b,u)$ and frozen propagator $V(u,a)$, differentiating $U(b,u)V(u,a)$ and integrating gives $V(b,a)-U(b,a)=i\int_a^bU(b,u)(H(u/T)-H(s_j))V(u,a)\,du$. Unitarity [F4] and the integral norm bound [F5] bound the segment operator error by $\int_a^b\|H(u/T)-H(s_j)\|du\le M_1\tau^2/(2T)$. The derivative certificate and coordinatewise fundamental theorem of calculus give $\|H(s)-H(s_j)\|\le M_1|s-s_j|$. Summing over $q$ intervals gives $TM_1/(2q)\le\varepsilon/6$ by the definition of $q$ (and it is zero when $M_1=0$). [F1, F2, F4, F5, construct, algebra]

2.1 Replacing each frozen $H(s_j)$ by its certified rational approximation $\widetilde H_j$ changes its time-$\tau$ propagator by at most $\tau\varepsilon/(3T)$ by the same Duhamel estimate. Telescoping the $q$ unitary segments using [F5] bounds the total coefficient-approximation error by $q\tau\varepsilon/(3T)=\varepsilon/3$. [F2, F4, F5, step 1.2, algebra]

3.1 The summands $\widetilde c_{jk}H_k$ are self-adjoint because the coefficients are real. By [F3], the ideal first-order product formula for each frozen segment has error at most $\tau^2B/(2r_{\rm PF})\le\varepsilon/(6q)$; if $B=0$, the error is zero. Telescoping over the $q$ unitary segments using [F5] gives product-formula error at most $\varepsilon/6$. [F2, F3, F4, F5, step 2.1, algebra]

4.1 There are exactly $qMr_{\rm PF}$ term-exponential calls. Replacing each by its declared unitary provider changes the composed schedule's evolution block by at most the sum of the call errors, using [F4]–[F5], so this contribution is at most $qMr_{\rm PF}\cdot\varepsilon/(6qMr_{\rm PF})=\varepsilon/6$. The total evolution error is at most $\varepsilon/6+\varepsilon/3+\varepsilon/6+\varepsilon/6=5\varepsilon/6\le\varepsilon$. Since $A_0$ is an isometry, $\|A_0\|=1$, and submultiplicativity gives $\|\widetilde U_T(1)A_0-U_T(1)A_0\|\le\varepsilon$. [F1, F2, F4, F5, step 1.2, step 2.1, step 3.1, algebra]

5.1 Each computed loop count is a finite integer fixed by the exact finite inputs, and every requested time code, coefficient approximation and provider has a finite supported description under the stated availability conditions. The algorithm therefore terminates with the access schedule specified in [F2]. When its circuit-family and polynomial-generation conditions hold, it expands to the uniform circuit family in the Statement; named-oracle calls remain charged query steps. Its preparation, queries, gates, ancillas, precision bits, circuit-description bits and generation costs are charged as stated in [F1]–[F2]. For $T=0$ termination and exactness were established in step 1.1. [F1, F2, step 1.1, algebra] ∎

