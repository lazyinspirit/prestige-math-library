---
page: qft-mx02
title: Clifford traces and normalized spin completeness
status: published
library: mathematics
items:
  - def-qft-example-two-body-phase-space-data
  - lem-qft-example-spin-trace-completeness
  - lem-qft-example-two-body-phase-space
  - thm-qft-example-massive-tree-annihilation
  - cor-qft-example-scalar-tree-coefficients
  - lem-qft-example-dirac-pauli-square
requires:
  - euclidean-surface-measure-divergence-and-green-identities
  - qft-mg03
  - qft-mx01
examples: []
---

This page fixes the finite matrix conventions and energy units used in the QFT examples, then proves normalized Dirac-spin completeness and trace identities. It constructs the two-body shell measure and coefficient flux map, computes the full-mass unpolarized formal tree coefficient for electron–positron annihilation into a muon pair, derives scalar symmetry and decay coefficients, and proves the minimal Dirac magnetic square on a compactly supported smooth core.

Use the geometric metric $\eta=(-,+,+,+)$ and the separately declared algebraic contraction $h=-\eta$, with energy-vector components in joules and $s$ in joules squared. Convert natural inverse-length variables by $\hbar c$ explicitly. The QED tree coefficient is a finite formal calculation: this page does not construct a continuum interacting $S$-matrix, prove LSZ, sum loop corrections, or give an empirical cross section. The $4\delta$ comparison bounds only omission of the incoming electron mass in the tree coefficient. The minimal $g_s=2$ statement is a formal first-order coefficient from an exact differential-operator identity on the stated core; it is not a spectral or radiative-correction claim.
