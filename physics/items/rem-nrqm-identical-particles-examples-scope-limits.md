---
id: rem-nrqm-identical-particles-examples-scope-limits
aliases: [nrqm-identical-particles-examples-scope-limits]
kind: remark
domain: physics
title: "Scope of the identical-particles examples page"
status: published
origin: pipeline
dependency_level: 13
deps: [texp-nrqm-identical-particles-two-fermion-spatial-spin-symmetry, ex-nrqm-identical-particles-exchange-versus-coulomb-terms, def-nrqm-identical-particles-framework-species-sectors-and-preparations, post-nrqm-framework-identical-particles-and-spin, post-nrqm-framework-preparation-and-apparatus]
dependency_roles:
  texp-nrqm-identical-particles-two-fermion-spatial-spin-symmetry: physical-result
  ex-nrqm-identical-particles-exchange-versus-coulomb-terms: formulation-prerequisite
  def-nrqm-identical-particles-framework-species-sectors-and-preparations: formulation-prerequisite
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope remark for the examples page: it records what the two-fermion symmetry computation and the exchange-versus-Coulomb example establish in the declared models, which idealizations and model assignments they rest on, and what they do not claim about nature or about any measurement."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 10 printed pages 227-235 (PDF pages 235-243): the symmetry of pair states and the direct and exchange contributions in the helium discussion"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Skinner, Principles of Quantum Mechanics (Cambridge Part II, Michaelmas 2021), Chapter 7 'Identical Particles', pp. 4-10: symmetric and antisymmetric spatial and spin parts of two-particle states; Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/dbs26/PQM/chap7.pdf"
      url: "https://web.archive.org/web/20240801085112id_/https://www.damtp.cam.ac.uk/user/dbs26/PQM/chap7.pdf"
verification:
  precheck: n/a
---

## Scope of the examples page

**What the computations establish.** Both items are conditional statements of
declared models. [[texp-nrqm-identical-particles-two-fermion-spatial-spin-symmetry]]
decomposes the antisymmetric two-particle sector of a declared spin-half
species with a finite orbital factor into its spin-singlet and spin-triplet
parts, exhibits the opposite orbital exchange symmetry of the two parts, and
computes the components of an antisymmetrised product of two declared
one-particle states. [[ex-nrqm-identical-particles-exchange-versus-coulomb-terms]]
specialises a two-orbital model with a declared Coulomb-form interaction and
shows, for real normalized orthogonal $W^{1,2}$ orbitals with a nonzero
product, that the declared parallel-spin (triplet)
preparation has strictly smaller pair-interaction expectation than the singlet
preparation, the difference being twice the exchange integral.

**What they rest on.** Both rest on the adopted antisymmetric sector of P6
([[post-nrqm-framework-identical-particles-and-spin]]) in the reading of
[[def-nrqm-identical-particles-framework-species-sectors-and-preparations]]:
the assignment of the species to the antisymmetric sector and the choice of
orbital factor are model declarations, and in the second item the two orbitals
and the interaction form are declared idealizations. The spin-statistics
association is not derived, no interaction is derived from the sector and no
dynamics is introduced.

**What is not claimed.** The page records no measured energy, no count and no
apparatus response; the terms "singlet", "triplet" and "exchange" name
components and differences of the declared models. Whether a laboratory pair
of particles is described by one of the declared preparations is a tested
identification with uncertainty under the preparation and apparatus postulate
[[post-nrqm-framework-preparation-and-apparatus]], and agreement of these
conditional numbers with data would test the combined model and apparatus
assumptions rather than prove the model.
