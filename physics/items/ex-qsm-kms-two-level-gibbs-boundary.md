---
id: ex-qsm-kms-two-level-gibbs-boundary
kind: example
title: Two-level Gibbs state has the physical-time KMS boundary factor
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps: [def-qsm-kms-state, lem-qsm-finite-gibbs-kms, thm-qsm-finite-kms-gibbs-characterization]
dependency_roles:
  def-qsm-kms-state: mathematical-premise
  lem-qsm-finite-gibbs-kms: mathematical-premise
  thm-qsm-finite-kms-gibbs-characterization: mathematical-premise
dependency_level: 10
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.4, finite Gibbs/KMS discussion, pp. 76–77
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §7 and Chapter 2 §6, pp. 13–14 and 24–25
      url: https://arxiv.org/pdf/math-ph/0107009
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

Let $\mathcal H=\mathbb C^2$ with orthonormal basis $|0\rangle,|1\rangle$, and let $H=\varepsilon|1\rangle\langle1|$ for an energy $\varepsilon>0$ in joules. For $\beta>0$ in J$^{-1}$, the finite Gibbs state has

$$Z=1+e^{-\beta\varepsilon},\qquad p_0=Z^{-1},\qquad p_1=e^{-\beta\varepsilon}Z^{-1}.$$

Define $S_+=|1\rangle\langle0|$ and $S_-=|0\rangle\langle1|$. With $\alpha_t(X)=e^{itH/\hbar}Xe^{-itH/\hbar}$, the correlation for $A=S_-$ and $B=S_+$ is

$$F_{S_-,S_+}(z)=p_0e^{i\varepsilon z/\hbar}.$$

At the upper strip edge $z=t+i\beta\hbar$, the exponential contributes $e^{-\beta\varepsilon}$, so the boundary value is $p_1e^{i\varepsilon t/\hbar}$, exactly the reversed-order Gibbs expectation. The full two-level Gibbs state is KMS for every matrix pair by [[thm-qsm-finite-kms-gibbs-characterization]]; this example checks the physical-time sign and strip-width convention on a nontrivial pair. No measurement or material parameter is being reported.

## Facts & Assumptions

**Given:** $\varepsilon>0$ in joules, $\beta>0$ in J$^{-1}$, $\hbar>0$ in J s, the two-level Hilbert space and basis above, and the finite Gibbs state.

[F1] [[def-qsm-kms-state]]: the physical-time KMS strip has width $\beta\hbar$ and its upper boundary reverses the order of the two observables.

[F2] [[lem-qsm-finite-gibbs-kms]]: for finite self-adjoint $H$, the Gibbs density is $e^{-\beta H}/Z$ and the finite-time evolution is $\alpha_t(X)=e^{itH/\hbar}Xe^{-itH/\hbar}$.

[F3] [[thm-qsm-finite-kms-gibbs-characterization]]: under its finite spectral-calculus and finite unital C$^*$-algebra clauses [A1]–[A2], the normalized finite Gibbs trace is a KMS state for every matrix pair.

## Verification

**Proof technique:** direct matrix-unit and exponential calculation.

**Given:** [F1]–[F3], $H=\varepsilon|1\rangle\langle1|$, and the definitions of $S_+,S_-$.

1.1 Since $H|0\rangle=0$ and $H|1\rangle=\varepsilon|1\rangle$, direct conjugation gives $\alpha_z(S_+)=e^{i\varepsilon z/\hbar}S_+$ and $\alpha_z(S_-)=e^{-i\varepsilon z/\hbar}S_-$. The Gibbs density is $p_0|0\rangle\langle0|+p_1|1\rangle\langle1|$ because its two diagonal exponential entries are $1$ and $e^{-\beta\varepsilon}$. [given, F2, algebra]

2.1 Using $S_-S_+=|0\rangle\langle0|$ and $S_+S_-=|1\rangle\langle1|$, the lower correlation is $\operatorname{Tr}(\rho S_-\alpha_t(S_+))=p_0e^{i\varepsilon t/\hbar}$. At the upper edge, $p_0e^{i\varepsilon(t+i\beta\hbar)/\hbar}=p_0e^{i\varepsilon t/\hbar}e^{-\beta\varepsilon}=p_1e^{i\varepsilon t/\hbar}=\operatorname{Tr}(\rho\alpha_t(S_+)S_-)$. The exponents are dimensionless because $\varepsilon t/\hbar$ and $\beta\varepsilon$ are dimensionless. [F1, F2, step 1.1, algebra]

3.1 By [F3], the same finite Gibbs state satisfies the KMS strip identity for every pair in $\mathcal B(\mathbb C^2)$, not only for $S_-,S_+$. The calculation in step 2.1 verifies that the chosen convention places $e^{-\beta\varepsilon}$ at the upper boundary for this transition. [F1, F3, step 2.1] ∎
## Remarks

For the reversed pair $A=S_+$, $B=S_-$, the lower value is $p_1e^{-i\varepsilon t/\hbar}$ and the upper value is $p_0e^{-i\varepsilon t/\hbar}$; the same Boltzmann factor relation holds with the energy difference reversed. All quantities here are model parameters or exact finite-matrix expressions, not empirical measurements.
