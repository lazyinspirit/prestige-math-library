---
id: def-qa-36-finite-adiabatic-path-model
kind: definition
title: Finite adiabatic path model
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-self-adjoint-and-normal-endomorphism
  - def-linear-map
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-adjoint-exists-and-is-unique-in-finite-dimension
  - prop-adjoint-algebra
  - def-non-negative-and-positive-operator
  - def-trace-of-an-endomorphism
  - thm-trace-of-ab-equals-trace-of-ba
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-qc-pure-state-and-ray
  - def-qc-density-operator
  - def-qc-trace-distance
  - def-qc-projective-measurement
  - def-qc-povm-and-outcome-law
  - thm-qc-projective-measurement-outcome-law
  - thm-qc-povm-probabilities-normalize
  - def-qc-circuit-cost-model
  - def-qc-uniform-circuit-family
  - lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval
justified_by: []
axiom_use: None; finite-dimensional spectral theory and the finite matrix ODE result use no choice principle.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Sabine Jansen, Mary-Beth Ruskai, and Ruedi Seiler, Bounds for the adiabatic approximation with applications to quantum computation
      url: https://arxiv.org/pdf/quant-ph/0603175
      locator: Theorems 1 and 3, PDF pp. 3–11; finite-dimensional uniformly gapped spectral bands.
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapter 30, printed pp. 151–156; PDF pp. 159–164.
verification:
  precheck: n/a
---

## Definition

Let $V$ be a nonzero finite-dimensional complex inner-product space with inner product linear in its first argument. A **finite adiabatic path** is a family $H(s):V\to V$ of linear endomorphisms ([[def-linear-map]]) indexed by $s\in[0,1]$, whose matrix entries are twice continuously differentiable in $s$ and such that $H(s)=H(s)^*$ for every $s\in[0,1]$. A **coherently followed spectral band** is a norm-continuous family of orthogonal projections $P(s):V\to V$ indexed by $s\in[0,1]$, of one fixed rank $m\ge1$, commuting with $H(s)$, whose range is a sum of full eigenspaces and which locally continues the same isolated cluster. For a finite union of positively oriented circles $\Gamma$, define $\oint_\Gamma F(z)\,dz$ as the sum of the parameterized integrals $\int_0^{2\pi}F(c+re^{it})ire^{it}\,dt$ over its circle components. Local continuation means that on each neighborhood there is such a contour enclosing exactly the selected cluster and
$$P(s)=-\frac1{2\pi i}\oint_\Gamma(H(s)-zI)^{-1}\,dz.$$
With $Q(s)=I-P(s)$, define the **full gap**
$$g(s)=\min\{|\lambda-\mu|:\lambda\in\sigma(H(s)|_{\operatorname{ran}P(s)}),\ \mu\in\sigma(H(s)|_{\operatorname{ran}Q(s)})\}.$$
If $Q(s)=0$, the full gap is $+\infty$. Admissible gapped paths have a uniform full gap $\inf_{s\in[0,1]}g(s)>0$. Distinct eigenvalues inside the band may cross; its total rank remains $m$.

For a real parameter $T\in\mathbb R$, the slow-time propagator $U_T$ is the unique solution of
$$i\frac{d}{ds}U_T(s)=T H(s)U_T(s),\qquad U_T(0)=I.$$
Identifying complex coordinates with real and imaginary parts reduces this to a real finite matrix ODE ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]); differentiating $U_T(s)^*U_T(s)$ shows it stays unitary.

An instance also supplies an explicit preparation isometry $A_0:\mathbb C^m\to V$ with image $\operatorname{ran}P(0)$ and its declared preparation cost. For a rank-one band this means a specified unit vector $\psi_0\in\operatorname{ran}P(0)$ and a circuit preparing it; for a rank-$m$ band it is an orthonormal frame, not just the matrix $H(0)$ or the projector $P(0)$. Given an input density operator $\rho_{\rm in}$ on $\mathbb C^m$, the evolved output is $\rho_T=U_T(1)A_0\rho_{\rm in}A_0^*U_T(1)^*$. This is a density operator: for $W=U_T(1)A_0$, $W^*W=A_0^*U_T(1)^*U_T(1)A_0=I$ by isometry and unitarity; hence $W\rho_{\rm in}W^*$ is nonnegative by its quadratic form, and $\operatorname{tr}(W\rho_{\rm in}W^*)=\operatorname{tr}(\rho_{\rm in}W^*W)=1$ by trace cyclicity ([[def-non-negative-and-positive-operator]], [[def-trace-of-an-endomorphism]], [[thm-trace-of-ab-equals-trace-of-ba]]). A rank-one input is the pure-state projector ([[def-qc-pure-state-and-ray]], [[def-qc-density-operator]]). A supplied target density operator $\sigma$ on $V$ is compared with $\rho_T$ by trace distance $D(\rho_T,\sigma)$ ([[def-qc-trace-distance]]). A finite output POVM on $V$ and an accepting outcome set may be supplied; its success probability is the sum of the corresponding POVM probabilities ([[def-qc-povm-and-outcome-law]], [[thm-qc-povm-probabilities-normalize]]). A finite projective measurement on $V$ may also be supplied, with success probability given by its projective outcome law ([[def-qc-projective-measurement]], [[thm-qc-projective-measurement-outcome-law]]); this is a special case of the POVM interface. The model is mathematical and includes no physical postulate.
