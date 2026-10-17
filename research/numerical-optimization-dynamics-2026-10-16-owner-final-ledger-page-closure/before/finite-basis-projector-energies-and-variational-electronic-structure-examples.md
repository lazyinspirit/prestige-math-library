---
page: finite-basis-projector-energies-and-variational-electronic-structure-examples
title: Finite basis projector energies and variational electronic structure — Examples
status: draft
items: []
examples: [ex-incomplete-ci-trial-energy-exceeds-finite-ground-energy,
           ex-nested-trial-spaces-may-have-equal-energies,
           ex-zero-ritz-residual-does-not-identify-ground-state,
           ex-overlap-whitening-can-amplify-coefficient-errors,
           ex-nonsmooth-exchange-correlation-functional-breaks-c2,
           ex-two-level-nonlinear-projector-stationary-maximum,
           ex-finite-basis-projector-optimization-on-grassmann]
---

The examples separate model properties that are easy to conflate. A stationary
projector can be a strict maximum; an incomplete finite trial space can lie
strictly above the exact finite Hamiltonian ground state; exact overlap
whitening can preserve Ritz values while amplifying coefficient perturbations;
and a residual does not label the ground-state branch. Nested subspaces give
nonincreasing but not necessarily strictly decreasing minima. A cusp in a chosen
exchange-correlation term falls outside the $C^2$ hypothesis.


The complex finite-basis PC-VAR example represents the projector energy on the
Grassmann quotient and verifies its complex-polar trust-region optimization
guarantee under the stated finite-dimensional model hypotheses.
