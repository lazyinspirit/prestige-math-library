---
id: rem-nrqm-scattering-long-range-and-threshold-limits
aliases: [nrqm-scattering-long-range-and-threshold-limits]
kind: remark
domain: physics
title: "Long-range, threshold and model-scope limits of the scattering page"
status: draft
origin: session
dependency_level: 15
deps: [def-nrqm-scattering-framework-short-range-model, def-nrqm-scattering-coulomb-dollard-model, pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness, pthm-nrqm-scattering-compact-support-asymptotic-completeness, thm-nrqm-controlled-dynamics-compact-scattering-defects, thm-nrqm-controlled-dynamics-resolvent-tail-short-range-completeness]
dependency_roles:
  def-nrqm-scattering-framework-short-range-model: formulation-prerequisite
  def-nrqm-scattering-coulomb-dollard-model: formulation-prerequisite
  pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness: physical-result
  pthm-nrqm-scattering-compact-support-asymptotic-completeness: physical-result
  thm-nrqm-controlled-dynamics-compact-scattering-defects: mathematical-premise
  thm-nrqm-controlled-dynamics-resolvent-tail-short-range-completeness: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The explicit limits of the scattering page: the exclusion of the Coulomb tail from the short-range classes and its separate modified-comparison treatment, the threshold obstruction for uniform compact-defect statements at zero energy and the fact that completeness itself is unaffected, the absence of any zero-energy stationary statement, and the conditional status of the resonance model. This records scope; it asserts no new mathematical consequence."
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 12.3 printed pages 253-256 (PDF pages 265-268): the short-range condition, with zero-energy obstructions kept separate"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 12.4 printed pages 271-275 (PDF pages 279-283): the shielded Coulomb potential and the caution that a pure 1/r tail requires separate treatment"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: n/a
---

## Remarks

- **Long-range tails.** The short-range classes of
  [[def-nrqm-scattering-framework-short-range-model]] clause (b) exclude the
  pure Coulomb tail: the decaying-tail criterion of
  [[pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness]] clause (c)
  requires a positive power $\delta>0$, and the Coulomb quotient
  $(1+|x|)^{1+\delta}|V(x)|$ is unbounded for every $\delta>0$. The Coulomb
  case is treated by the modified Dollard comparison
  ([[def-nrqm-scattering-coulomb-dollard-model]]), for which the ordinary
  short-range comparison is not claimed.
- **Threshold.** The completeness statements of this page are made for the
  declared classes and do not require a zero-energy nonresonance hypothesis
  ([[thm-nrqm-controlled-dynamics-resolvent-tail-short-range-completeness]]).
  A different uniformity statement fails at zero energy: for compactly
  supported potentials the scattering defects are not compact uniformly when
  the energy cutoff does not vanish at $0$
  ([[thm-nrqm-controlled-dynamics-compact-scattering-defects]]). The page
  therefore asserts nothing about the stationary problem at $k=0$, and every
  stationary statement of the pair is made for $k>0$.
- **Positive eigenvalues.** The absence of positive eigenvalues is part of
  [[pthm-nrqm-scattering-wave-operator-existence-and-free-continuity]] clause
  (d) for the compact-support class; no statement is made about negative or
  zero eigenvalues of the interacting operator, and no bound-state inventory
  belongs to this page.
- **Resonances.** The resonance model
  ([[def-nrqm-scattering-single-channel-resonance-model]]) is a declared
  conditional model; the page proves no existence of a resonance for any
  declared potential and makes no analytic-continuation claim for the
  resolvent or the scattering operator.
