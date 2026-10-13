---
id: ex-nrqm-framework-dimension-bookkeeping
kind: example
title: "Dimension bookkeeping for the quantities and laws of the framework"
status: draft
origin: session
domain: physics
dependency_level: 8
deps:
  [
    def-nrqm-framework-quantities-and-units,
    def-nrqm-framework-newtonian-spacetime,
    def-nrqm-framework-inertial-frames,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    post-nrqm-framework-identical-particles-and-spin,
    lem-nrqm-framework-ccr-on-the-schwartz-core,
    thm-nrqm-magnetic-and-detection-smooth-local-continuity-calculation
  ]
dependency_roles:
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-framework-newtonian-spacetime: formulation-prerequisite
  def-nrqm-framework-inertial-frames: formulation-prerequisite
  post-nrqm-framework-autonomous-dynamics: formulation-prerequisite
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: formulation-prerequisite
  post-nrqm-framework-identical-particles-and-spin: formulation-prerequisite
  lem-nrqm-framework-ccr-on-the-schwartz-core: mathematical-premise
  thm-nrqm-magnetic-and-detection-smooth-local-continuity-calculation: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked application of the dimension and unit conventions of
  the framework to the quantities and displayed laws of this page: coordinates,
  wave function, position and momentum operators, the canonical commutator, the
  kinetic and potential terms of the Hamiltonian, the Schroedinger equation, the
  probability current and the candidate dimensionless exponent that could be
  used as a boost phase in a separately specified model. The item checks
  conventions only, asserts no frame-transformation law, and makes no empirical
  claim."
sources:
  references:
    - title: "BIPM, The International System of Units (SI), 9th edition 2019, Chapter
        2 pp. 15-25 and Table 2: the SI base and derived units"
      url: "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections 1.2 and
        1.2.1, printed pages 9-14 (PDF pages 12-17): the Hamiltonian, the
        probability density and the probability current of the wave function"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: pass
---

## Example

Apply the dimension conventions of [[def-nrqm-framework-quantities-and-units]] to the quantities of the framework: the time and space coordinates of an inertial frame of [[def-nrqm-framework-inertial-frames]], a position wave function of the one-particle model, the position and momentum operators and their canonical commutator of [[lem-nrqm-framework-ccr-on-the-schwartz-core]], the kinetic and potential terms of the Hamiltonian and the Schroedinger equation of [[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]] and [[post-nrqm-framework-autonomous-dynamics]], the probability density and current of the continuity calculation, and the candidate phase exponent $mv\cdot x/\hbar$ if used in a separately specified boost model.

## Facts & Assumptions

**Given:** The dimension symbols $\ell,\tau,\mu,\vartheta$ with the product, quotient and derivative rules of [[def-nrqm-framework-quantities-and-units]]; the readings $[t]=\tau$, $[x_{i}]=\ell$, $[\psi]=\ell^{-3/2}$ for a position wave function in three spatial dimensions, $[\hbar]=\mu\ell^{2}\tau^{-1}$, $[m]=\mu$, $[E]=\mu\ell^{2}\tau^{-2}$, $[v_{i}]=\ell\tau^{-1}$ and $[R_{ij}]=1$.

[L1] Position and momentum acts: $Q_{j}f=x_{j}f$ and $P_{k}f=-i\hbar\,D_{k}f$ for one component, with the Schwartz core and the canonical commutator $(Q_{j}P_{k}-P_{k}Q_{j})f=i\hbar\delta_{jk}f$ ([[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]], [[lem-nrqm-framework-ccr-on-the-schwartz-core]]).

[L2] Hamiltonian and evolution: for $m,\hbar>0$ and a real bounded measurable potential $V$ in three spatial dimensions, $H_{\mathrm{op}}=-\frac{\hbar^{2}}{2m}\Delta+V(Q)$ on $D(H_{\mathrm{op}})=W^{2,2}(\mathbb R^3;\mathbb C)$ componentwise. Its unitary evolution is $\psi(t)=e^{-itH_{\mathrm{op}}/\hbar}\psi(0)$ for every initial vector; the norm derivative and the equation $i\hbar\,\partial_{t}\psi=H_{\mathrm{op}}\psi$ are asserted exactly when $\psi(0)\in D(H_{\mathrm{op}})$, in which case this domain is invariant under the evolution ([[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]], [[post-nrqm-framework-autonomous-dynamics]]).

[L3] Probability current of a smooth solution: $j=\frac{\hbar}{m}\operatorname{Im}(\overline{\psi}\,\nabla\psi)$ ([[thm-nrqm-magnetic-and-detection-smooth-local-continuity-calculation]]).

[L4] Frame parameters: $[b]=\tau$, $[a_{i}]=\ell$ and $[v_{i}]=\ell\tau^{-1}$; conditionally, if a separately specified model uses $mv\cdot x/\hbar$ as a phase exponent, these units make that exponent dimensionless ([[def-nrqm-framework-inertial-frames]], [[def-nrqm-framework-quantities-and-units]]).

## Verification

**Proof technique:** direct; evaluate the dimension rules on each displayed quantity and combine.

1.1 The coordinates have $[t]=\tau$ and $[x_{i}]=\ell$, so a three-dimensional position wave function has $[\psi]=\ell^{-3/2}$, its squared modulus has $[|\psi|^{2}]=\ell^{-3}$, and the product $|\psi|^{2}\mathrm d^{3}x$ is dimensionless, as required of a probability density. [given, algebra]

1.2 For the operators of [L1], $[Q_{j}\psi]=[x_{j}][\psi]=\ell\cdot\ell^{-3/2}=\ell^{-1/2}=[\psi]\cdot\ell$ gives $[Q_{j}]=\ell$, and $[P_{k}\psi]=[\hbar]\cdot[\partial_{k}\psi]=\mu\ell^{2}\tau^{-1}\cdot\ell^{-5/2}=\mu\ell^{-1/2}\tau^{-1}=[\psi]\cdot\mu\ell\tau^{-1}$ gives $[P_{k}]=\mu\ell\tau^{-1}$; the commutator identity is consistent, since $[Q_{j}P_{k}]=\ell\cdot\mu\ell\tau^{-1}=\mu\ell^{2}\tau^{-1}=[\hbar]=[i\hbar\delta_{jk}]$. [given, L1, algebra]

1.3 For the Hamiltonian of [L2], the kinetic term acts as $[(-\hbar^{2}/2m)\Delta\psi]=\mu^{2}\ell^{4}\tau^{-2}\mu^{-1}\ell^{-2}\ell^{-3/2}=\mu\ell^{2}\tau^{-2}\ell^{-3/2}=[E][\psi]$, and the potential term satisfies $[V\psi]=[V][\psi]$ with $[V]=\mu\ell^{2}\tau^{-2}=[E]$; both terms therefore carry the dimension of energy times wave function, as required for their sum to define an operator. [given, L2, algebra]

1.4 The Schroedinger equation is dimensionally consistent: $[i\hbar\partial_{t}\psi]=\mu\ell^{2}\tau^{-1}\cdot\tau^{-1}\cdot\ell^{-3/2}=\mu\ell^{2}\tau^{-2}\ell^{-3/2}=[H_{\mathrm{op}}\psi]$, and the phase $H_{\mathrm{op}}t/\hbar$ of the evolution operator is dimensionless because $[E][t][\hbar]^{-1}=1$. [given, L2, algebra]

1.5 The current of [L3] has $[j]=[\hbar][m]^{-1}[|\psi|^{2}][\nabla\psi][\psi]^{-1}=\ell^{2}\tau^{-1}\cdot\ell^{-3}\cdot\ell^{-1}=\ell^{-2}\tau^{-1}$, which is $\ell^{1-d}\tau^{-1}$ for $d=3$: a probability flux per unit area and time, not a charge current. [given, L3, algebra]

2.1 The expression $mv\cdot x/\hbar$ in [L4] is dimensionless, $[mv\cdot x]/[\hbar]=\mu\ell\tau^{-1}\cdot\ell\cdot(\mu\ell^{2}\tau^{-1})^{-1}=1$. Thus it can serve as a dimensionless argument if a separately specified model assigns it as a phase; this dimensional calculation alone proves no frame-transformation or covariance law. Combining with steps 1.1-1.5, every quantity and displayed law checked here is dimensionally consistent under the stated conventions. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, L4, algebra] ∎

## Remarks

- The check is bookkeeping inside the conventions of [[def-nrqm-framework-quantities-and-units]]: it verifies dimensional consistency and nothing else. It contains no measured value, tests no physical equation against data and makes no claim about the applicability of the model.
- The internal index of the spin factor is dimensionless and does not enter these computations; the spin label and the factor $\mathbb C^{2s+1}$ of [[post-nrqm-framework-identical-particles-and-spin]] carry no length, duration or mass dimension, and the spin operators have the dimension $\mu\ell^{2}\tau^{-1}$ of action, as fixed in the conventions.
