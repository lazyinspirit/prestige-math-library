---
id: rem-td-ensemble-limit-hypotheses
kind: remark
domain: physics
title: Scope limits for finite ensembles, shells, pressure and dephasing
status: draft
origin: pipeline
library: physics
dependency_level: 7
deps: [def-axiom-of-choice, def-countable-choice, def-td-finite-microstate-model, def-td-regular-hamiltonian-shell-preparation, pthm-td-countable-canonical-identities, pthm-td-differentiable-pressure-concentration, pthm-td-finite-bath-canonical-error, pthm-td-finite-canonical-identities, pthm-td-finite-entropy-maximum, pthm-td-finite-mode-occupation-and-trace-formulas, pthm-td-finite-quantum-free-energy-minimum, pthm-td-general-quantum-canonical-identities, pthm-td-independent-factorization, pthm-td-invariant-regular-microcanonical-shell, pthm-td-lattice-bulk-pressure, pthm-td-measurable-canonical-identities, pthm-td-qualified-discrete-quantum-dephasing, post-td-canonical-sampling, post-td-microcanonical-sampling]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-td-finite-microstate-model: formulation-prerequisite
  def-td-regular-hamiltonian-shell-preparation: formulation-prerequisite
  pthm-td-countable-canonical-identities: physical-result
  pthm-td-differentiable-pressure-concentration: physical-result
  pthm-td-finite-bath-canonical-error: physical-result
  pthm-td-finite-canonical-identities: physical-result
  pthm-td-finite-entropy-maximum: physical-result
  pthm-td-finite-mode-occupation-and-trace-formulas: physical-result
  pthm-td-finite-quantum-free-energy-minimum: physical-result
  pthm-td-general-quantum-canonical-identities: physical-result
  pthm-td-independent-factorization: physical-result
  pthm-td-invariant-regular-microcanonical-shell: physical-result
  pthm-td-lattice-bulk-pressure: physical-result
  pthm-td-measurable-canonical-identities: physical-result
  pthm-td-qualified-discrete-quantum-dephasing: physical-result
  post-td-canonical-sampling: physical-assumption
  post-td-microcanonical-sampling: physical-assumption
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: A scope and hypothesis ledger for the preceding finite, countable, measurable, lattice, regular-shell and discrete-quantum branches; it supplies no additional ensemble-equivalence, ergodicity, thermalization, or empirical claim.
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §§1.2–1.3 (printed pp. 2–27)
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.2–4.6 (printed pp. 192–217)
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
verification:
  precheck: n/a
---

## Remarks

The finite canonical, maximum-entropy, independent-factorization and finite-bath claims concern the exact finite state spaces and shell-weight assumptions stated in their items. Countable and measurable derivative identities require their local summable or integrable moment envelopes; a lower energy bound alone does not normalize the partition function. The lattice bulk-pressure and concentration claims apply only to the bounded finite-range lattice model and, for concentration, a differentiability point of the limiting log-partition density. The page-level continuum-pressure prerequisite is a distinct interaction model; no stable-tempered continuum limit is inferred from the lattice theorem.

Regular-shell preparation requires a nonempty compact regular level, the normalized coarea measure, and AC; it does not require a globally defined flow. The separate invariant-shell theorem adds a smooth invertible Hamiltonian flow on the full band, with time in seconds, and proves measure invariance only. Neither result implies ergodicity or equality of long-time averages with the shell law. The quantum Gibbs and finite-mode trace identities explicitly assume AC and Countable Choice, a semibounded self-adjoint generator, a positive finite Gibbs trace and the stated moment envelope. In the general quantum branch, the mean, variance and von Neumann entropy are defined by the supplied Gibbs eigenfamily sums, so no unbounded operator-trace product is being asserted. Discrete dephasing is a trace-norm Cesaro limit with degenerate eigenspaces retained, not pointwise relaxation or a Gibbs limit.

Boltzmann microstate entropy, finite Gibbs entropy, von Neumann entropy and the macroscopic entropy function are distinct objects until a model supplies an explicit identification. The statistical value $-k_{\mathrm B}T\log Z$ is not silently identified with a macroscopic Helmholtz or grand potential. Canonical and microcanonical sampling are adopted preparation assumptions. None of the finite probability identities, continuum or lattice pressure limits, shell-invariance results or quantum trace calculations reports an experiment or establishes that nature follows the model.
