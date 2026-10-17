---
page: qsm-dt-channels
title: Finite completely positive trace-preserving maps
status: draft
library: physics
items:
  - lem-qsm-dt-finite-trace-pairing-cyclicity
  - def-qsm-dt-channel-definition
  - def-qsm-dt-gksl-definition
  - thm-qsm-dt-choi-kraus
  - thm-qsm-dt-channel-duality
  - thm-qsm-dt-gksl-sufficient
  - thm-qsm-dt-reduced-unitary
  - thm-qsm-dt-trace-contraction
  - thm-qsm-dt-gksl-necessary
  - thm-qsm-dt-pinching-entropy
  - thm-qsm-dt-time-dependent-gksl
examples: []
---

This page develops finite-dimensional quantum channels as complex-linear, completely positive and trace-preserving maps on matrix algebras. A local matrix-unit lemma proves rectangular trace cyclicity and nondegeneracy wherever those identities are needed. The Choi matrix uses the unnormalized input-reference $\otimes$ output convention, and trace preservation is distinct from unitality. It proves the finite Choi–Kraus equivalence, trace duality, norm closure and trace-norm contraction for arbitrary matrix inputs.

The generator results use finite matrices, explicit SI units, and continuous coefficients on compact time intervals. They give the exact finite GKSL channel-semigroup class and time-dependent channel propagators; they do not assert unbounded-generator results or a microscopic bath limit. Reduced unitary channels require a product-prepared system and environment, and a fixed finite bath need not yield a semigroup. The entropy inequality is restricted to finite pinching operations; arbitrary channels can lower entropy. These are mathematical results about the stated finite models, not claims that a physical system follows a particular model.
