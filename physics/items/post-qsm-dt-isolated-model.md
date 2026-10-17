---
id: post-qsm-dt-isolated-model
kind: postulate
title: Adopted isolated prepared unitary model
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 3
physical_scope: A specified finite-dimensional, isolated, prepared nonrelativistic quantum subsystem with a fixed Hermitian Hamiltonian and bounded-observable Born expectations; no bath limit, relaxation claim, apparatus model, or empirical realization is asserted.
deps:
  - def-axiom-of-choice
  - thm-qsm-dt-finite-unitary
  - post-qsm-normal-measurement-state
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-qsm-dt-finite-unitary: formulation-prerequisite
  post-qsm-normal-measurement-state: formulation-prerequisite
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Ryogo Kubo, Statistical-Mechanical Theory of Irreversible Processes I, Journal of the Physical Society of Japan 12 (1957), §2, printed pp. 572–575
      url: https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf
    - title: Steven H. Simon, Lecture Notes for Quantum Matter, Chapter 8 §8.2, printed pp. 118–122
      url: https://www-thphys.physics.ox.ac.uk/people/SteveSimon/QCM2023/QuantumMatter.pdf
---

## Postulate

For a specified finite-dimensional complex Hilbert space $\mathcal H$, $H=H^*$ in J, and adopted $\hbar>0$ in J s, take a prepared finite density matrix $\rho_0$ (positive semidefinite with trace one). For time $t$ measured in s, adopt isolated evolution
$$U(t)=e^{-itH/\hbar},\qquad \rho_t=U(t)\rho_0U(t)^*,$$
and the Born expectation $\mathbb E_t[A]=\operatorname{Tr}(\rho_tA)$ for each bounded self-adjoint matrix observable $A$. This adopts the finite subsystem's preparation and unitary time evolution as a model assumption. It inherits the full Axiom of Choice convention, stated in [[def-axiom-of-choice]], of [[post-qsm-normal-measurement-state]] for the wider Hilbert-space spectral-measure framework, although this finite bounded-observable clause uses no unbounded spectral measurement. No actual apparatus, measured value, thermalization, or infinite-volume Hamiltonian is asserted.

The finite unitary and Gibbs conventions are stated in [[thm-qsm-dt-finite-unitary]] as formulation context; they do not prove that this postulate describes nature.
