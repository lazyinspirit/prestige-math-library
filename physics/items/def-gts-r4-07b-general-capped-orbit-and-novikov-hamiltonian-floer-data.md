---
id: def-gts-r4-07b-general-capped-orbit-and-novikov-hamiltonian-floer-data
kind: definition
title: General capped-orbit and Novikov Hamiltonian Floer data
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-gts-symplectic-and-almost-complex-curve-data
  - def-gts-hamiltonian-orbit-cappings-and-recap-group
  - lem-gts-hamiltonian-action-and-conley-zehnder-recap-shifts
  - lem-gts-novikov-completion-is-filtered-ring
dependency_roles:
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
  def-gts-hamiltonian-orbit-cappings-and-recap-group: mathematical-premise
  lem-gts-hamiltonian-action-and-conley-zehnder-recap-shifts: mathematical-premise
  lem-gts-novikov-completion-is-filtered-ring: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Dietmar Salamon, Lectures on Floer Homology
      url: https://www.math.utoronto.ca/mgualt/Morse%20Theory/Salamon%20floer.pdf
      locator: §§1.4 and 2.4, printed pp. 10 and 20–21, capped action and Conley–Zehnder convention
    - title: Yuhan Sun, Symplectic Cohomology with Support and Aspherical Perturbations, arXiv:2607.24626v1
      url: https://arxiv.org/pdf/2607.24626v1
      locator: §2.1 is a restricted symplectic-cohomology setup and does not supply this general chain interface
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

Let $(M,\omega)$ be a closed symplectic manifold and fix a compatible $J_0$, a smooth one-periodic Hamiltonian $H$, and a smooth one-periodic compatible family $J_t$. Write $\Phi_{t,0}$ for the local Hamiltonian evolution. Let $\mathcal P^{\mathrm{ctr}}_1(H)$ be the set of smooth contractible loops $x:\mathbb R/\mathbb Z\to M$ satisfying $\dot x(t)=X_{H_t}(x(t))$ and the nondegeneracy condition that $D\Phi_{1,0}(x(0))-I_{T_{x(0)}M}$ is invertible; contractible means that $x$ extends to a smooth cap $w:D^2\to M$. These are the orbit and nondegeneracy conventions of the preceding capping definition, made explicit here for the generator set. For each connected component $M_\alpha$, define
$$\Gamma_\alpha=\pi_2(M_\alpha)/(\ker\omega_\alpha\cap\ker c_1(TM_\alpha,J_0)),$$
where $\omega_\alpha$ is the restriction of $\omega$. The induced maps are $\nu_\alpha([A])=\omega_\alpha(A)$ and $d_\alpha([A])=-2c_1(A)$. The general capped generators are the capped orbits modulo precisely those recappings with both shifts zero.

For each underlying orbit $x$, choose one reference cap $w_x$. With coefficient field $\mathbb F_2$, set
$$\widehat{CF}(H)=\bigoplus_\alpha\ \bigoplus_{x\in\mathcal P^{\mathrm{ctr}}_1(H)\cap M_\alpha}\Lambda_{\nu_\alpha,\mathbb F_2}\langle x\rangle,$$
where each coefficient is a Novikov series from the preceding definition and the direct sum means that only finitely many orbit labels occur in one chain. Identify the monomial generator $q^{[A]}x$ with $[x,w_x\#A]$. Its action and grading are
$$\mathcal A_H(q^{[A]}x)=\mathcal A_H([x,w_x])-\omega(A),\qquad |q^{[A]}x|=\mu_{\mathrm{CZ}}(x,w_x)-2c_1(A).$$
Within each orbit label the coefficient support is finite below every energy cutoff. If the reference cap changes from $w_x$ to $w_x\#B_x$, the same capped generator is relabeled by $q^{[A-B_x]}x$; multiplication by the fixed monomial $q^{-[B_x]}$ preserves the Novikov condition, so this gives the canonical deck relabeling on the direct sum. This definition does not supply a Floer differential, prove convergence of any differential, or assert a bubbling-corrected or virtual construction.

## Definition references

[[def-gts-symplectic-and-almost-complex-curve-data]]

[[def-gts-hamiltonian-orbit-cappings-and-recap-group]]

[[lem-gts-hamiltonian-action-and-conley-zehnder-recap-shifts]]

[[lem-gts-novikov-completion-is-filtered-ring]]
