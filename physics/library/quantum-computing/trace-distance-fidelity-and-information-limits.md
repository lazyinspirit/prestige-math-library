---
page: trace-distance-fidelity-and-information-limits
title: "Trace Distance, Fidelity, and Information Limits"
status: published
requires:
  - channels-kraus-choi-and-stinespring-representations
  - compactness-in-metric-spaces
  - diagonalisation-and-the-minimal-polynomial
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - haar-measure-existence-and-uniqueness
  - hilbert-space-geometry-and-riesz-representation
  - linear-independence-bases-and-dimension
  - matrices-and-the-matrix-of-a-linear-map
  - matrix-norms-condition-numbers-and-numerical-stability
  - measurements-povms-and-instruments
  - pure-and-mixed-states-ensembles-and-schmidt-decomposition
  - registers-tensor-products-and-partial-trace
  - relations-functions-and-quotients
  - the-spectral-theorem-and-singular-value-decomposition
  - uniform-spaces
items:
  - thm-qc-unitary-group-compact
  - def-qc-diamond-norm
  - def-qc-fidelity
  - def-qc-trace-distance
  - lem-qc-faithful-state-dominates-positive-operator
  - def-qc-symmetric-subspace-projector
  - lem-qc-fidelity-root-formula-equivalence
  - lem-qc-trace-norm-tensor-product
  - lem-qc-positive-marginals-imply-joint-support
  - lem-qc-pure-state-trace-distance
  - lem-qc-symmetric-subspace-average-is-projector
  - thm-qc-diamond-norm-ancilla-dimension-bound
  - thm-qc-helstrom-binary-discrimination
  - thm-qc-trace-distance-range-and-equality
  - lem-qc-symmetric-power-irreducible
  - thm-qc-measurement-variation-at-most-trace-distance
  - def-qc-broadcasting-family
  - thm-qc-fidelity-purification-characterization
  - thm-qc-symmetric-subspace-dimension-and-haar-moment
  - thm-qc-trace-distance-channel-contractivity
  - lem-qc-fidelity-classical-measurement-minimum
  - lem-qc-optimal-cloner-attains-bound
  - lem-qc-optimal-cloning-worst-case-upper-bound
  - thm-qc-channel-diamond-norm-one
  - thm-qc-fidelity-range-equality-and-products
  - thm-qc-channel-composition-hybrid-bound
  - thm-qc-fidelity-data-processing-and-equality
  - thm-qc-fuchs-van-de-graaf
  - thm-qc-optimal-universal-pure-state-cloning-bound
  - thm-qc-pure-state-no-cloning
  - thm-qc-channel-tensor-error-bound
  - thm-qc-exact-mixed-state-cloning-fidelity-criterion
  - thm-qc-full-rank-pair-no-broadcasting
  - thm-qc-singular-pair-no-broadcasting
  - thm-qc-state-family-no-broadcasting-iff-commuting
examples: []
---

For finite-dimensional density operators, this page fixes the root-fidelity convention $F(\rho,\sigma)=\|\sqrt\rho\sqrt\sigma\|_1$ and the state trace distance $D(\rho,\sigma)=\frac12\|\rho-\sigma\|_1$. It proves their measurement, purification, and information-theoretic bounds; contractivity and composition estimates; and the scoped pure-state no-cloning, mixed-state cloning, and no-broadcasting results. The diamond norm on maps is unhalved. Universal pure-state cloning formulas use a normalized Haar branch conditional on the stated choice axiom. The prerequisite channels/Kraus/Choi/Stinespring page and its draft supplier items are present; their CP/TP and representation interfaces support the channel uses on this page. Draft authoring and interface checks do not constitute mathematical acceptance.
