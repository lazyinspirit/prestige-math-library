---
page: measurements-povms-and-instruments
title: "Measurements, POVMs, and Instruments"
status: draft
requires:
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - finite-probability-spaces-and-random-variables
  - matrices-and-the-matrix-of-a-linear-map
  - pure-and-mixed-states-ensembles-and-schmidt-decomposition
  - registers-tensor-products-and-partial-trace
  - the-spectral-theorem-and-singular-value-decomposition
items:
  - def-qc-projective-measurement
  - def-qc-povm-and-outcome-law
  - thm-qc-projective-measurement-outcome-law
  - def-qc-finite-outcome-probability-kernel
  - lem-qc-finite-ancilla-amplification-is-block-map
  - thm-qc-finite-naimark-isometric-compression
  - thm-qc-povm-probabilities-normalize
  - thm-qc-projective-conditional-state
  - def-qc-completely-positive-map
  - thm-qc-finite-outcome-law-is-a-probability-kernel
  - def-qc-instrument-and-conditional-state
  - thm-qc-instrument-outcome-law-normalizes
  - thm-qc-luders-instrument-of-a-povm-is-valid
  - thm-qc-zero-probability-branch-has-no-conditioned-state
  - thm-qc-instrument-conditional-state-is-density
  - thm-qc-nonselective-instrument-output-is-density
examples: []
---

This page defines finite projective measurements and POVMs as algebraic families of operators, then proves positivity and normalization of their outcome laws. It defines finite POVM probability kernels with an explicit matrix-coordinate Borel structure and proves measurability and affinity. It defines complete positivity through all finite ancilla block amplifications, supplies the finite block-map construction, and proves a finite Naimark isometric compression. Finally, it defines instruments and conditional states and proves outcome normalization, the Lüders construction, positive-probability state validity, zero-probability branch behavior, and the density and mixture formulas for nonselective outputs. No physical postulate is used as a mathematical premise.
