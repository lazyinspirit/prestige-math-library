---
id: def-it-quantum-channel-complement-and-coherent-information
kind: definition
title: Complementary channels and coherent information
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-qc-quantum-channel
  - thm-qc-finite-stinespring-dilation
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-it-von-neumann-entropy
  - def-qc-ensemble-and-purification
  - thm-qc-purification-existence-and-unitary-equivalence
  - def-qc-partial-trace
  - def-qc-first-factor-partial-trace
  - def-qc-tensor-register-and-permutation
  - thm-qc-wire-permutation-is-unitary
  - thm-qc-isometry-partial-trace-is-channel
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-qc-channels-compose-and-tensor
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, §13.5"
      url: "https://arxiv.org/pdf/1106.1445v8"
    - title: "John Watrous, The Theory of Quantum Information, §8.2.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
---

## Definition

Let $A$ and $B$ be nonzero finite-dimensional complex inner-product spaces and let $\mathcal N:\mathcal L(A)\to\mathcal L(B)$ be a quantum channel as in [[def-qc-quantum-channel]]. Choose a finite-dimensional environment $E$ and a linear isometry $V:A\to B\otimes E$ such that

$$\mathcal N(X)=\operatorname{Tr}_E(VXV^*)$$

for every $X\in\mathcal L(A)$; such a dilation exists by [[thm-qc-finite-stinespring-dilation]]. The channel

$$\mathcal N^c(X):=\operatorname{Tr}_B(VXV^*)\in\mathcal L(E)$$

is the **complementary channel associated with this chosen dilation**. The partial trace $\operatorname{Tr}_B$ contracts the first factor of the ordered product $B\otimes E$ ([[def-qc-first-factor-partial-trace]]).

It is a quantum channel: reorder $B\otimes E$ to $E\otimes B$ by the finite wire-permutation unitary ([[def-qc-tensor-register-and-permutation]], [[thm-qc-wire-permutation-is-unitary]]); the reordered $V$ is still an isometry, so tracing its second factor $B$ gives a channel by [[thm-qc-isometry-partial-trace-is-channel]].

For a density operator $\rho$ on $A$, choose a finite purification $|\psi\rangle\in A\otimes R$ with $\operatorname{Tr}_R|\psi\rangle\langle\psi|=\rho$ ([[def-qc-ensemble-and-purification]]), and define $\omega_{BR}:=(\mathcal N\otimes\operatorname{id}_R)(|\psi\rangle\langle\psi|)$. Its **coherent information** from $A$ to $B$ is

$$I_c(\rho,\mathcal N):=S(\mathcal N(\rho))-S(\omega_{BR}),$$

where $S$ is finite-dimensional von Neumann entropy in nats ([[def-it-von-neumann-entropy]]). The value does not depend on the chosen purification: after padding reference spaces, any two purifications differ by a unitary on $R$ ([[thm-qc-purification-existence-and-unitary-equivalence]]); applying $\mathcal N\otimes\operatorname{id}_R$ preserves that unitary relation. A unitary maps an orthonormal eigenbasis to an orthonormal eigenbasis with the same eigenvalues, so entropy is unchanged ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]). Padding adds only zero eigenvalues, which do not contribute.

## Remarks

The chosen complement may vary with the dilation, but its output entropy on $\rho$ equals $S(\omega_{BR})$: applying $V$ to the first tensor factor of the purifying vector gives a pure state on $B\otimes E\otimes R$. After reordering the factors, its complementary $BR$ and $E$ marginals have the same positive eigenvalues. The corresponding entropy identity is proved in [[lem-it-quantum-coherent-information-complement-identity]].
