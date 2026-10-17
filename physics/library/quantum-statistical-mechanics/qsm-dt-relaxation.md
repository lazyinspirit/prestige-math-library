---
page: qsm-dt-relaxation
title: Specified finite GNS detailed balance
status: draft
library: physics
items:
  - def-qsm-dt-gns-detailed-balance
  - thm-qsm-dt-detailed-balance-gap
  - thm-qsm-dt-gibbs-jump
  - def-qsm-dt-monitored-chain
  - thm-qsm-dt-commuting-kl
  - thm-qsm-dt-open-correlation-integral
  - thm-qsm-dt-open-kubo
  - post-qsm-dt-effective-bath
  - thm-qsm-dt-monitored-transport
  - pthm-qsm-dt-bath-relaxation
  - pthm-qsm-dt-record-transport
examples: []
---

This page fixes one finite GNS detailed-balance convention: the Hamiltonian part commutes with the faithful Gibbs state, while the dissipator is self-adjoint in the specified weighted matrix inner product. A scalar dissipative kernel gives an explicit gap, centered correlation integrability, and trace-norm relaxation. Connected Gibbs jump rates supply a concrete finite model; the commuting relative entropy production and monitored-record variance are proved for that model.

The bath state law and energy-resolved instrument are adopted effective assumptions with physical applicability only on the finite resolved interval $[0,t_{\rm res}]$ specified by the postulate. All-time relaxation estimates and long-time coefficients are mathematical consequences of continuing the same finite generator and selected chain; they carry no physical-applicability claim beyond $t_{\rm res}$. The instrument specifies one record law; the one-time GKSL semigroup alone does not determine a unique monitoring record. All results are finite-dimensional conditional model statements. No microscopic bath limit, measured rate, or experimental observation is asserted.
