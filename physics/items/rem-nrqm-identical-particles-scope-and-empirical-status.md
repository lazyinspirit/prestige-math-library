---
id: rem-nrqm-identical-particles-scope-and-empirical-status
aliases: [ nrqm-identical-particles-scope-and-empirical-status ]
kind: remark
domain: physics
title: "Scope and empirical status of the identical-particles page"
status: draft
origin: pipeline
dependency_level: 12
deps:
  [
    def-nrqm-identical-particles-framework-species-sectors-and-preparations,
    def-nrqm-identical-particles-framework-orbital-occupation-model,
    pthm-nrqm-identical-particles-permutation-invariance,
    pthm-nrqm-identical-particles-orbital-occupation-exclusion,
    thm-nrqm-identical-particles-occupation-number-basis,
    thm-nrqm-identical-particles-finite-mode-occupation-counts,
    thm-nrqm-identical-particles-two-factor-symmetry-decomposition,
    post-nrqm-framework-identical-particles-and-spin,
    post-nrqm-framework-preparation-and-apparatus
  ]
dependency_roles:
  def-nrqm-identical-particles-framework-species-sectors-and-preparations: formulation-prerequisite
  def-nrqm-identical-particles-framework-orbital-occupation-model: formulation-prerequisite
  pthm-nrqm-identical-particles-permutation-invariance: physical-result
  pthm-nrqm-identical-particles-orbital-occupation-exclusion: physical-result
  thm-nrqm-identical-particles-occupation-number-basis: mathematical-premise
  thm-nrqm-identical-particles-finite-mode-occupation-counts: mathematical-premise
  thm-nrqm-identical-particles-two-factor-symmetry-decomposition: mathematical-premise
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope and status remark for the identical-particles page: it
  separates the adopted sector assignments and finite-mode idealizations from
  the conditional deductions, records what the pair does not claim about nature,
  and states the empirical status of the model statements. It asserts no
  measurement, no derived statistics and no empirical result."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 10.1
        printed pages 226-230 (PDF pages 234-238): exchange symmetry and
        exclusion as physical input and deduction, and the empirical status of
        the boson/fermion assignment"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes,
        2017/18), Chapter 1 Sections 1.1-1.4 pp. 3-13: identical particles, the
        two sectors, and the scope of the occupation-number description"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenote\
        s2017AQT.pdf"
verification:
  precheck: n/a
---

## Scope of the page

**Adopted assumptions.** The page adopts the sector and species assignments of
P6 in the reading of
[[def-nrqm-identical-particles-framework-species-sectors-and-preparations]]:
which species is bosonic or fermionic, its mass, charge, spin label and
statistics are declared model parameters, and the symmetric or antisymmetric
sector of the $n$-particle space is part of that declaration. The finite-mode
occupation model of
[[def-nrqm-identical-particles-framework-orbital-occupation-model]] adds the
declared finite mode family as an idealization. These are assumptions of the
model, not consequences of the Hilbert-space formalism and not measurements.

**Conditional results.** The mathematical items of the page construct the two
permutation sectors and their occupation bases
([[thm-nrqm-identical-particles-occupation-number-basis]]), count the
occupation configurations ([[thm-nrqm-identical-particles-finite-mode-occupation-counts]])
and decompose a two-factor sector into opposite-symmetry summands
([[thm-nrqm-identical-particles-two-factor-symmetry-decomposition]]). The
physical results are conditional on the adopted sector:
[[pthm-nrqm-identical-particles-permutation-invariance]] proves that sector
preparations and relabelled readouts are statistically indistinguishable, and
[[pthm-nrqm-identical-particles-orbital-occupation-exclusion]] proves the
exclusion of double occupations in the antisymmetric sector together with the
bosonic contrast. All of these are deductions from the stated postulates,
idealizations and mathematical hypotheses.

**What is not claimed.** The page does not derive the spin-statistics
connection: the relativistic theorem is outside this framework and the link
between the spin label and the sector is a declared model assignment
(clause (iv) of P6). It does not claim that the declared modes are an exact
description of any apparatus or species, does not treat infinite mode families
or the continuum of modes, and introduces no dynamics of the sector, no
interaction and no instrument; the interaction example of the companion page
is a conditional computation in a declared model. Nothing on the page
attributes particle-like trajectories, spatial avoidance or a force to the
exclusion statement.

**Empirical status.** The page records no measurement and no data. Whether some
laboratory ensemble realizes a declared sector preparation, a declared mode
family or a declared apparatus is a tested identification with uncertainty
under the preparation and apparatus postulate
[[post-nrqm-framework-preparation-and-apparatus]]; comparisons of model
predictions with counts would test the combined model and apparatus
assumptions, and agreement would be evidence, not a deductive proof of the
model. The design's separate dedicated statistics treatment is a named
destination of the later many-body page and is not silently claimed here.
