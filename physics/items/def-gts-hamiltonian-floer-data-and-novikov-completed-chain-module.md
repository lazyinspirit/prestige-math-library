---
id: def-gts-hamiltonian-floer-data-and-novikov-completed-chain-module
kind: definition
title: Classical aspherical Hamiltonian Floer data
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-gts-symplectic-and-almost-complex-curve-data
  - def-gts-hamiltonian-orbit-cappings-and-recap-group
  - lem-gts-hamiltonian-action-and-conley-zehnder-recap-shifts
dependency_roles:
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
  def-gts-hamiltonian-orbit-cappings-and-recap-group: mathematical-premise
  lem-gts-hamiltonian-action-and-conley-zehnder-recap-shifts: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Dietmar Salamon, Lectures on Floer Homology
      url: https://www.math.utoronto.ca/mgualt/Morse%20Theory/Salamon%20floer.pdf
      locator: §1.1, printed p. 3, periodic orbits and nondegeneracy; §1.4, printed p. 10, action
    - title: Yuhan Sun, Symplectic Cohomology with Support and Aspherical Perturbations, arXiv:2607.24626v1
      url: https://arxiv.org/pdf/2607.24626v1
      locator: §2.1, Hamiltonian Floer action and complex setup; used only as restricted context
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $(M,\omega)$ be a closed symplectic manifold, where closed means compact and without boundary. Fix a smooth one-periodic Hamiltonian $H:\mathbb R/\mathbb Z\times M\to\mathbb R$ with $\iota_{X_{H_t}}\omega=-dH_t$, and a smooth one-periodic family of $\omega$-compatible almost-complex structures $J_t$. A contractible one-periodic orbit is a smooth loop $x:\mathbb R/\mathbb Z\to M$ admitting a cap and satisfying $\dot x(t)=X_{H_t}(x(t))$. It is nondegenerate if $1$ is not an eigenvalue of the derivative of the time-one return map at $x(0)$.

Assume the spherical period maps vanish: $\omega(A)=0$ and $c_1(TM,J_0)(A)=0$ for every $A\in\pi_2(M)$. The local recapping result then makes the action $\mathcal A_H(x)$ and Conley–Zehnder grading $\mu_{\mathrm{CZ}}(x)$ independent of the cap. Let $\mathcal P^{\mathrm{ctr}}_1(H)$ be the set of contractible nondegenerate one-periodic orbits. The classical aspherical chain module is the algebraic direct sum
$$CF_*(H;\mathbb F_2)=\bigoplus_{x\in\mathcal P^{\mathrm{ctr}}_1(H)}\mathbb F_2\langle x\rangle,$$
so each vector has finite support. The coefficient field $\mathbb F_2$ removes orientation signs. This is only the orbit, action, grading, and module data; no Floer differential, compactness, transversality, or continuation theorem is asserted.

## Definition references

[[def-gts-symplectic-and-almost-complex-curve-data]]

[[def-gts-hamiltonian-orbit-cappings-and-recap-group]]

[[lem-gts-hamiltonian-action-and-conley-zehnder-recap-shifts]]
