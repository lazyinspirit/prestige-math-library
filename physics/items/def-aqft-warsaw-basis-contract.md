---
id: def-aqft-warsaw-basis-contract
kind: definition
title: Finite dimension-six Warsaw coefficient contract
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 5
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
deps:
  - post-aqft-smeft-model
  - def-aqft-operator-basis-physical-data
  - def-aqft-operator-basis-quotient
dependency_roles:
  post-aqft-smeft-model: physical-assumption
  def-aqft-operator-basis-physical-data: formulation-prerequisite
  def-aqft-operator-basis-quotient: formulation-prerequisite
axiom_base: "ZF + AC_omega, inherited from the selected field-data suppliers; this finite coefficient list and quotient use no full Axiom of Choice."
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "A finite, source-defined dimension-six coefficient convention for the stated three-family, B- and L-conserving SMEFT field content. It does not locally prove the complete Warsaw classification or identify the formal algebraic quotient with every physical compact-group invariant."
sources:
  references:
    - title: "B. Grzadkowski, M. Iskrzynski, M. Misiak and J. Rosiek, Dimension-Six Terms in the Standard Model Lagrangian"
      url: "https://arxiv.org/pdf/1008.4884"
      locator: "§2 and Table 1, printed pp. 2–3, for field, hypercharge, index and sign conventions; §§3 and 5–7, printed pp. 4–14, for the B-conserving operator representatives and their stated EOM, integration-by-parts and Fierz reductions."
    - title: "Adam Falkowski, Lectures on SMEFT"
      url: "https://scoap3-prod-backend.s3.cern.ch/media/files/79196/10.1140/epjc/s10052-023-11821-3_a.pdf"
      locator: "Table 1 and §§3.4–4, printed pp. 8–20, for the three-family dimension-six Warsaw coefficient convention, basis nonuniqueness and field-redefinition/EOM caveat."
verification:
  precheck: n/a
---
## Definition

Use the fields, direct-product gauge group, hypercharge normalization, three-family content, exact $U(1)_B\times U(1)_L$ symmetries, natural units and coefficient scale of the preceding linearly realized model. A local operator is a finite polynomial in these fields and their covariant derivatives at one spacetime point, with all Lorentz, gauge and family indices contracted to a Lorentz and gauge scalar. Its canonical dimension assigns one to $H$ and each derivative, $3/2$ to a fermion, and two to a field strength.

The **Warsaw coefficient contract** is the finite dimension-six source list of gauge-invariant representatives $Q_i^{(6)}$ in Tables 2 and 3 of Grzadkowski, Iskrzynski, Misiak and Rosiek (2010), under their stated field, hypercharge, Lorentz, color and $SU(2)_L$ conventions, with exact baryon- and lepton-number conservation. The list consists of the source's 15 bosonic, 19 single-fermion-current and 25 four-fermion structures before family multiplicities and Hermitian conjugates; it is not a count of independent three-family complex coefficients. Include all family-index components for three generations, with the source's stated permutation, Hermiticity and conjugation rules; impose no family-universality or diagonal-flavor restriction. No right-handed neutrino field or dimension-five Weinberg operator is included.

In particular, this contract includes the source representative $Q_{H\Box}=(H^\dagger H)\Box(H^\dagger H)$, with $\Box=\eta^{\mu\nu}\partial_\mu\partial_\nu$ and the mostly-plus metric of the adopted model. It has canonical dimension six because each Higgs field has dimension one and $\Box$ has dimension two.

For $Q_i^{(6)}$ use the dimensionless Wilson coefficient convention
$$\mathcal L_{\mathrm{dim}\,6}=\frac{1}{\Lambda_{\mathrm{op}}^2}\sum_i C_i Q_i^{(6)},\qquad \Lambda_{\mathrm{op}}>0,$$
with the coefficient tensors chosen so the density is real after the required Hermitian conjugates are added. The retained operator contract has derivative-jet order at most two, maximum field degree six, canonical dimension at most six, and loop order zero. Compactly supported field variations make total divergences vanish in action-level uses.

The source's complete-basis assertion is adopted as a literature-defined coefficient list, not proved by this item. The separate finite invariant-operator quotient supplies only its declared complex-algebraic selection. In this contract that quotient is explicitly formal: no equality between its algebraic invariant space and the full physical compact-gauge invariant space, and no local proof of the EOM/IBP/Fierz classification, is claimed. The finite-cutoff quotient does not add a full Axiom of Choice assumption to the field-data suppliers' stated $\mathrm{AC}_\omega$ base.

## Definition references

[[post-aqft-smeft-model|Linearly realized fields, gauge group, units and global symmetries]]

[[def-aqft-operator-basis-physical-data|Finite-jet physical operator and coefficient contract]]

[[def-aqft-operator-basis-quotient|Finite-order invariant polynomial quotient]]

[Grzadkowski et al., full dimension-six classification](https://arxiv.org/pdf/1008.4884)

[Falkowski, full Lectures on SMEFT](https://scoap3-prod-backend.s3.cern.ch/media/files/79196/10.1140/epjc/s10052-023-11821-3_a.pdf)
