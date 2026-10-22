---
page: qsmx-integrable-transfer
title: Rational Yang–Baxter transfer matrices and Heisenberg charges
status: draft
library: physics
items:
  - def-qsmx-rational-monodromy
  - lem-qsmx-monodromy-rtt
  - lem-qsmx-transfer-regular-point
  - thm-qsmx-transfer-commutativity
  - thm-qsmx-transfer-heisenberg-charge
  - def-qsmx-regular-bethe-data
  - thm-qsmx-regular-bethe-eigenpair
examples: []
requires:
  - qsm-local-ensemble-bridge
  - hopf-hecke-and-quantum-symmetry-interfaces
---

This page treats the finite homogeneous spin-half XXX chain with the fixed
convention $R(u)=uI+iP$ and ordered monodromy
$T_a(u)=R_{aN}(u)\cdots R_{a1}(u)$. The local Yang–Baxter identity gives the
monodromy RTT relation and commuting transfer matrices, including at singular
spectral differences by polynomial continuation. At the regular point, the
transfer matrix is the oriented cyclic shift; its logarithmic derivative gives
the periodic exchange operator and its Pauli normalization. The page then
defines regular on-shell Bethe data and proves the eigenvalue formula
conditionally for the associated nonzero vectors. The spectral parameter is
dimensionless. Singular-root regularization, descendants, completeness,
thermodynamic Bethe ansatz, and empirical claims are outside this finite-chain
development.
