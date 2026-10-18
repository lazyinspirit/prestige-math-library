---
id: def-it-quantum-channel-operational-capacities
kind: definition
title: Operational quantum, private, and entanglement-assisted capacities
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-qc-quantum-channel
  - def-qc-density-operator
  - def-qc-povm-and-outcome-law
  - def-qc-partial-trace
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-qc-purification-existence-and-unitary-equivalence
  - def-qc-tensor-register-and-permutation
  - def-it-quantum-channel-complement-and-coherent-information
  - thm-qc-channels-compose-and-tensor
  - def-it-classical-quantum-state-and-holevo-information
  - def-it-von-neumann-entropy
  - lem-it-private-information-is-coherent-information-difference
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Chapter 8"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
---
## Definition

Let $\mathcal N:A\to B$ be a finite-dimensional quantum channel and use its memoryless extension $\mathcal N^{\otimes n}:A^{\otimes n}\to B^{\otimes n}$. Rates use natural logarithms, so they are in nats per channel use. For code sizes $K_n\ge1$, a rate $R\ge0$ is achievable when $\liminf_{n\to\infty}n^{-1}\ln K_n\ge R$ and the relevant error terms below tend to zero; each capacity is the supremum of its achievable rates.

For **quantum transmission**, a block code consists of an isometric encoder $W_n:M_n\to A^{\otimes n}$ and a quantum-channel decoder $\mathcal D_n:B^{\otimes n}\to M_n$, where $\dim M_n=K_n$. Let $R_n\cong M_n$ and let $|\Phi_{K_n}\rangle\in R_n\otimes M_n$ be a normalized maximally entangled vector. Its entanglement fidelity is

$$F_n:=\langle\Phi_{K_n}|(\operatorname{id}_{R_n}\otimes\mathcal D_n\mathcal N^{\otimes n}\mathcal W_n)(|\Phi_{K_n}\rangle\langle\Phi_{K_n}|)|\Phi_{K_n}\rangle,$$

where $\mathcal W_n(X)=W_nXW_n^*$. A rate is quantum-achievable if $F_n\to1$; the resulting capacity is $Q(\mathcal N)$. This is the subspace entanglement-transmission convention.

For **private classical transmission**, a block code uses equiprobable messages $m\in[K_n]$, input states $\rho_{m,n}$ on $A^{\otimes n}$, and a decoding POVM $\{\Lambda_{m,n}\}_{m=1}^{K_n}$ on $B^{\otimes n}$. Its average error is

$$e_n:=1-\frac1{K_n}\sum_{m=1}^{K_n}\operatorname{tr}(\Lambda_{m,n}\mathcal N^{\otimes n}(\rho_{m,n})).$$

Fix a complementary channel $\mathcal N^c$ as in [[def-it-quantum-channel-complement-and-coherent-information]]. Eve's average state is $\bar\tau_n=K_n^{-1}\sum_m(\mathcal N^c)^{\otimes n}(\rho_{m,n})$. Define leakage by its Holevo information

$$\ell_n:=S(\bar\tau_n)-\frac1{K_n}\sum_{m=1}^{K_n}S((\mathcal N^c)^{\otimes n}(\rho_{m,n})).$$

A rate is privately achievable when $e_n\to0$ and $\ell_n\to0$; this is strong secrecy in mutual-information form. The corresponding capacity is $P(\mathcal N)$. The value is independent of the chosen complementary dilation, as follows from [[lem-it-private-information-is-coherent-information-difference]].

For **classical transmission with prior shared entanglement**, for each block length $n$ the sender and receiver begin with a finite-dimensional shared state $\sigma_{S_AS_B}$ independent of the equiprobable message. For each $m\in[K_n]$, the sender applies a quantum channel $\mathcal E_{m,n}:\mathcal L(S_A)\to\mathcal L(A^{\otimes n})$. The receiver measures $B^{\otimes n}\otimes S_B$ with a POVM $\{\Gamma_{m,n}\}_{m=1}^{K_n}$. Its average error is

$$e_n^{EA}:=1-\frac1{K_n}\sum_{m=1}^{K_n}\operatorname{tr}\!\left[\Gamma_{m,n}\bigl((\mathcal N^{\otimes n}\circ\mathcal E_{m,n})\otimes\operatorname{id}_{S_B}\bigr)(\sigma_{S_AS_B})\right].$$ A rate is achievable when this error tends to zero; there is no constraint on the dimension or consumption of the shared entanglement. The resulting capacity is $C_E(\mathcal N)$.

The input, output, and reference registers are finite-dimensional in each block. No single-letter formula is included in these operational definitions.
