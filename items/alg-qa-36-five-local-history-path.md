---
id: alg-qa-36-five-local-history-path
kind: algorithm
title: Five-local history-state adiabatic path
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-36-finite-adiabatic-path-model
  - def-qa-36-adiabatic-resource-model
  - def-qc-uniform-circuit-family
  - def-qc-circuit-cost-model
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - lem-qc-tensor-product-basis-and-dimension
  - def-qc-dirac-notation-conversion
  - def-qc-partial-trace
  - alg-qa-36-discretized-path-simulation
  - thm-qa-36-jrs-finite-adiabatic-bound
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Dorit Aharonov, Wim van Dam, Julia Kempe, Zeph Landau, Seth Lloyd, and Oded Regev, Adiabatic Quantum Computation is Equivalent to Standard Quantum Computation
      url: https://arxiv.org/pdf/quant-ph/0405098
      locator: §§3.1.1–3.1.3, PDF pp. 10–15; five-local unary-clock construction and history-state padding.
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapter 33, printed pp. 171–176; history-state construction, unary clock, and adiabatic path.
verification:
  precheck: n/a
---

## Definition

**Input:** A full-list uniform circuit on $n\ge1$ qubits with $L\ge1$ listed gates $U_1,\ldots,U_L$, each acting on at most two data qubits, and a rational tolerance $0<\varepsilon\le1$. Circuit products act right to left ([[def-qc-uniform-circuit-family]]). The computation is applied to the explicitly supplied all-zero input preparation $A_0$; its wire and preparation cost $C_{\rm init}$ is recorded by [[def-qc-circuit-cost-model]] and [[def-qa-36-adiabatic-resource-model]]. The path-access input also supplies uniform term-time providers for the constructed term list, exact coefficient evaluation, supported time codes and certified call errors required by [[alg-qa-36-discretized-path-simulation]].

**Output:** The explicit finite term list and linearly interpolated Hamiltonian path $H(s)$, together with the supplied initial preparation and resource coordinates, plus the evolution access schedule and data-register output produced by steps 5–7 when the required access providers are available. The schedule uses the declared circuit-family or named-oracle provider for each term call and records its corresponding resource charge.

1. Set $K=\lceil2L/\varepsilon\rceil$ and $N=L+K$. Append $K$ identity gates, writing $U_\ell=I$ for $L<\ell\le N$. Use data space $(\mathbb C^2)^{\otimes n}$ and an ordered $N$-qubit clock register ([[def-qc-register-and-computational-basis]], [[def-qc-tensor-register-and-permutation]]). Its legal unary clock basis is
$$|c_\ell\rangle=|1^\ell0^{N-\ell}\rangle,\qquad0\le\ell\le N.$$

2. Let $H_{\rm clock}=\sum_{j=1}^{N-1}|01\rangle\langle01|_{{\rm clock}_j,{\rm clock}_{j+1}}$ and
$$H_{\rm input}=\sum_{i=1}^n |1\rangle\langle1|_{{\rm data}_i}\otimes|0\rangle\langle0|_{{\rm clock}_1},\qquad H_{\rm clock0}=\sum_{j=1}^N|1\rangle\langle1|_{{\rm clock}_j}.$$
The first tensor factor is the data register. The zero-summand convention applies when an index range is empty.

3. For each transition $\ell-1\to\ell$, specify two local clock patterns $a_\ell,b_\ell$: if $1<\ell<N$, use $a_\ell=100,b_\ell=110$ on clock bits $(\ell-1,\ell,\ell+1)$; for $\ell=1$, use $a_1=00,b_1=10$ on bits $(1,2)$; for $\ell=N$, use $a_N=10,b_N=11$ on bits $(N-1,N)$. For a clock pattern $a$, let $|a\rangle\langle a|$ act on those listed clock bits and as identity on all other clock bits. Define the five-local propagation term
$$h_\ell=\frac12\left[I_{\rm data}\otimes(|a_\ell\rangle\langle a_\ell|+|b_\ell\rangle\langle b_\ell|)-U_\ell\otimes|b_\ell\rangle\langle a_\ell|-U_\ell^*\otimes|a_\ell\rangle\langle b_\ell|\right],\qquad H_{\rm prop}=\sum_{\ell=1}^Nh_\ell.$$

4. Put $K_0=n+3N$ and $\Delta_0=1/(216(N+1)^3)$, and choose the positive integer
$$J=2K_0+4K_0^2/\Delta_0+1.$$
Output the linearly interpolated Hamiltonian
$$H(s)=(1-s)H_{\rm init}+sH_{\rm final},\quad H_{\rm init}=H_{\rm input}+H_{\rm clock0}+JH_{\rm clock},\quad H_{\rm final}=H_{\rm input}+H_{\rm prop}+JH_{\rm clock}.$$
The term list, integer coefficient $J$, initial preparation, term-access queries, coefficient bits, gate costs, and generator time are explicit coordinates of the path access model ([[def-qa-36-adiabatic-resource-model]]); no spectral projector supplies $A_0$. With $M=n+3N-1$ terms, record the rational certificates $M_1=3N$ for the derivative and $B=M^2J^2$ for every sampled commutator sum; the coefficient functions are the exact constants $1,J$ and affine functions $s,1-s$.

5. Set $\Delta_0=1/[216(N+1)^3]$, $\gamma=3\Delta_0/4$, $B_T=6N/\gamma^2+63N^2/\gamma^3$, and $T=\lceil4B_T/\varepsilon\rceil$. Set the finite-precision simulation tolerance to $\varepsilon_{\rm sim}=\varepsilon/4$. These are finite rational computations.

6. Invoke [[alg-qa-36-discretized-path-simulation]] on the constructed path-access instance with evolution time $T$ and tolerance $\varepsilon_{\rm sim}$. Its output schedule applies the supplied $A_0$ before the path evolution, using each term's declared circuit-family or named-oracle provider. If any required term provider, coefficient evaluation or supported call is unavailable, return no schedule.

7. Declare the data register as the output and the clock register as discarded by the output procedure passed to step 6 (the resulting state is the partial trace over the clock, [[def-qc-partial-trace]]). Record $T$, preparation, simulation calls, coefficient precision, circuit-description and generator costs separately.

