---
id: alg-qa-36-discretized-path-simulation
kind: algorithm
title: Discretized adiabatic path simulation schedule
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-36-adiabatic-resource-model
  - def-qa-36-finite-adiabatic-path-model
  - def-qa-20-term-list-access-model
  - def-qa-20-first-order-product-formula
  - def-qa-19-finite-matrix-dynamics
  - def-qc-uniform-circuit-family
  - def-qc-circuit-cost-model
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapters 27–30, printed pp. 133–156; discretization and simulation of finite Hamiltonian paths.
    - title: Dorit Aharonov, Wim van Dam, Julia Kempe, Zeph Landau, Seth Lloyd, and Oded Regev, Adiabatic Quantum Computation is Equivalent to Standard Quantum Computation
      url: https://arxiv.org/pdf/quant-ph/0405098
      locator: §§2–3.1, PDF pp. 7–20; finite Hamiltonian descriptions and circuit simulation.
---

## Definition

**Input:** An adiabatic path access instance from [[def-qa-36-adiabatic-resource-model]], a nonnegative finite exact time code $T$ from [[def-qa-20-term-list-access-model]], a rational tolerance $0<\varepsilon\le1$, and finite rational certificates $M_1\ge\sup_{s\in[0,1]}\|H'(s)\|$ and $B\ge0$. The time code supports exact comparisons and arithmetic needed to compute $q$ and the derived supported call times. Write $M\ge1$ for the term count. The coefficient functions are real and have the uniform evaluation procedures and error certificates in the access instance. Each requested coefficient approximation is a finitely encoded real rational. The certificate $B$ bounds, for every sampled grid point and its supplied approximations, the commutator sum of the frozen self-adjoint summands. The access record provides supported term-time calls for every product-formula call below, with the requested certified operator errors. If any required coefficient, call, or certificate is unavailable, the algorithm returns no circuit.

**Output:** A finite access schedule that composes the supplied preparation, the segment calls and the declared output procedure, with the requested error budget and separately recorded supplied and generated resources. Each term call uses its declared provider: a supplied circuit-family call or a named-oracle call with its query charge. If all required operations are circuit families, the schedule expands into their composed circuit; otherwise it records each call using its declared provider, including every named-oracle query.

1. If $T=0$, apply the supplied initial preparation $A_0$ and perform the declared output procedure.

2. If $T>0$, set
$$q=\max\left\{1,\left\lceil\frac{3TM_1}{\varepsilon}\right\rceil\right\},\qquad \tau=T/q.$$
These are computable finite integers and a supported time code. For each $j=0,\ldots,q-1$, let $s_j=j/q$ and request rational coefficient approximations $\widetilde c_{jk}$ defining $\widetilde H_j=\sum_{k=1}^{M}\widetilde c_{jk}H_k$ with certificate $\|\widetilde H_j-H(s_j)\|\le\varepsilon/(3T)$.

3. Using the input certificate $B$, and supported time codes for all calls below, set
$$r_{\rm PF}=\max\left\{1,\left\lceil\frac{3q\tau^2B}{\varepsilon}\right\rceil\right\}.$$
For each $j=0,\ldots,q-1$ in increasing order, and each product-formula substep $a=1,\ldots,r_{\rm PF}$, execute term calls for $k=M,M-1,\ldots,1$ at time code $(\tau/r_{\rm PF})\widetilde c_{jk}$. This chronological order realizes the algebraic product $S_1(\tau/r_{\rm PF})=e^{-i(\tau/r_{\rm PF})\widetilde c_{j1}H_1}\cdots e^{-i(\tau/r_{\rm PF})\widetilde c_{jM}H_M}$ because circuit products act right to left; $S_1$ is the formula in [[def-qa-20-first-order-product-formula]]. Each of the $qMr_{\rm PF}$ calls is supplied with operator error at most $\varepsilon/(6qMr_{\rm PF})$.

4. Execute the $q$ segment call sequences in increasing $j$ after $A_0$, then perform the declared output procedure. Record initial preparation, term queries, gates, ancillary wires, coefficient bits, circuit-description bits, generator time and $T$ separately. If any required coefficient evaluation, time code or term-exponential access is unavailable, this algorithm has no output schedule under the declared model.
