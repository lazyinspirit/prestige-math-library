---
id: post-nrqmx-finite-open-model
kind: postulate
title: Finite system-environment and Markov model assignments
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 0
deps:
  - def-qc-partial-trace
  - def-qsm-dt-channel-definition
  - def-qsm-dt-gksl-definition
  - thm-qsm-dt-choi-kraus
dependency_roles:
  def-qc-partial-trace: formulation-prerequisite
  def-qsm-dt-channel-definition: formulation-prerequisite
  def-qsm-dt-gksl-definition: formulation-prerequisite
  thm-qsm-dt-choi-kraus: formulation-prerequisite
physical_scope: "A finite-dimensional non-relativistic quantum system and finite environment with a fixed product initial assignment and a declared joint unitary family. A time-homogeneous finite GKSL model is an optional, separately adopted approximation. No initial system-environment correlations, continuum reservoir limit, microscopic Markov derivation, apparatus realization, or experimental observation is asserted."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Chapter 2, §§2.1.3 and 2.2.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf"
      locator: "Printed pp. 67–69, partial trace and reduced states; Theorem 2.22, printed pp. 82–84, finite Choi, Kraus, and Stinespring characterizations."
    - title: "Lin Lin and Nathan Wiebe, Quantum Algorithms for Scientific Computation, Chapter 21, §21.1"
      url: "https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf"
      locator: "Printed pp. 307–311, equations (21.1)–(21.5) and Theorem 21.2: finite GKSL model, channel semigroup, and its finite-dimensional channel property."
---

## Postulate

Work with finite-dimensional system and environment spaces $H_S=\mathbb C^d$ and $H_E=\mathbb C^m$, where $d,m\geq1$, using the ordered tensor product $H_S\otimes H_E$ with the system factor first. A system or environment state is a positive semidefinite Hermitian matrix of trace one; these state matrices are dimensionless. At the initial time, for every allowed system state $\rho$, adopt the joint preparation $\rho\otimes\eta$, where the fixed environment state $\eta$ does not depend on $\rho$. For each $t\geq0$, choose a declared unitary $U_t$ on $H_S\otimes H_E$, meaning $U_t^*U_t=U_tU_t^*=I$, with $U_0=I$. The reduced system dynamics is the map $\Phi_t(\rho)=\operatorname{Tr}_E\!\left(U_t(\rho\otimes\eta)U_t^*\right)$, where for the fixed product basis the finite partial trace has entries $(\operatorname{Tr}_E R)_{\alpha\beta}=\sum_{j=1}^mR_{(\alpha,j),(\beta,j)}$. This assignment excludes initially correlated joint states. It imposes no one-parameter group, continuity, or semigroup law on $U_t$.

A time-homogeneous finite GKSL model may instead be selected as a separate approximation: choose a fixed finite-dimensional Hamiltonian matrix $H=H^*$ in joules, a constant $\hbar>0$ in joule-seconds, and finitely many jump matrices $L_a$ in $\mathrm{s}^{-1/2}$, and use $T_t=e^{t\mathcal L}$ for $t\geq0$ with $\mathcal L(X)=-\frac{i}{\hbar}[H,X]+\sum_a\left(L_aXL_a^*-\frac12\{L_a^*L_a,X\}\right)$. Each application must state its rates and physical regime. Selecting this approximation is not a consequence of the finite unitary reduction, and this postulate claims no weak-coupling or reservoir limit.

In both alternatives, the parameter $t$ indexing $U_t$ or $T_t$ denotes elapsed physical time measured in SI seconds. Thus $t\mathcal L$ in the GKSL exponential is dimensionless, since the adopted finite GKSL generator has units $\mathrm{s}^{-1}$.

## Postulate references

[[def-qc-partial-trace]]

[[def-qsm-dt-channel-definition]]

[[def-qsm-dt-gksl-definition]]

[[thm-qsm-dt-choi-kraus]]

## Remarks

The diagram records only the defined finite-map composition. It supplies no proof of complete positivity or trace preservation.

```tikzcd
\rho \arrow[r, "{X\mapsto X\otimes\eta}"] \arrow[drr, "\Phi_t"'] &
\rho\otimes\eta \arrow[r, "{R\mapsto U_t R U_t^*}"] &
U_t(\rho\otimes\eta)U_t^* \arrow[d, "\operatorname{Tr}_E"] \\
& & \Phi_t(\rho)
```
