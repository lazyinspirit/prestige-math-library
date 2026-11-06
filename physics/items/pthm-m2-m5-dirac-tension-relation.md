---
id: pthm-m2-m5-dirac-tension-relation
kind: physics-theorem
title: M2 M5 tension product identity
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: physics
library: physics
deps:
  - post-m2-m5-tension-normalizations
  - post-mtheory-shifted-g4-quantization
dependency_roles:
  post-m2-m5-tension-normalizations: physical-assumption
  post-mtheory-shifted-g4-quantization: physical-assumption
aliases: []
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Conditional arithmetic identity for the selected M2/M5 normalization; a global electric/magnetic Dirac interpretation requires a separate charge-lattice convention and is not derived."
sources:
  references:
    - title: "Edward Witten, On Flux Quantization in M-Theory and the Effective Action, arXiv:hep-th/9609122v2"
      url: "https://arxiv.org/pdf/hep-th/9609122v2"
      locator: "§2.2, PDF pp. 5–7; M2 world-volume coupling and shifted-flux quantization, context only and not an M2/M5 charge-lattice result."
    - title: "Joseph Polchinski, Dirichlet-Branes and Ramond-Ramond Charges, arXiv:hep-th/9510017v3"
      url: "https://arxiv.org/pdf/hep-th/9510017v3"
      locator: "Eqs. (12)–(15), PDF pp. 7–8; RR electric/magnetic Dirac pairing and the unresolved D2 charge-normalization comparison."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
---

## Statement

Under the adopted positive Planck length $\ell_p$ and normalizations
$$2\kappa_{11}^{\,2}=(2\pi)^8\ell_p^9,\qquad T_{\mathrm{M2}}=(2\pi)^{-2}\ell_p^{-3},\qquad T_{\mathrm{M5}}=(2\pi)^{-5}\ell_p^{-6},$$
one has the exact arithmetic identity
$$2\kappa_{11}^{\,2}T_{\mathrm{M2}}T_{\mathrm{M5}}=2\pi.$$
The same inputs also give the R4 CJS M2 source coefficient
$$2\kappa_{11}^{\,2}T_{\mathrm{M2}}=(2\pi)^6\ell_p^6.$$
This identity is a normalization check. Interpreting $2\pi$ as a global electric/magnetic Dirac unit also assumes the selected $C_3/C_6$ charge convention and an independently specified charge lattice; neither follows from this multiplication or from the shifted $G_4$ condition alone.

## Statement References

[Witten, §2.2 (membrane coupling and shifted-flux context)](https://arxiv.org/pdf/hep-th/9609122v2)

[Polchinski, Eqs. (12)–(15)](https://arxiv.org/pdf/hep-th/9510017v3)

## Facts & Assumptions

**Given:** $\ell_p>0$ and the exact normalization inputs in the statement.

[F1] The tension-normalization postulate adopts all three displayed formulas and warns that absolute quantum units are physical inputs ([[post-m2-m5-tension-normalizations]]).

[F2] The shifted-flux postulate constrains the real periods of $G_4$ but does not itself identify a complete electric/magnetic charge lattice ([[post-mtheory-shifted-g4-quantization]]).

## Proof

**Given:** [F1], with $\ell_p>0$.

1.1 Multiply the two brane tensions:
$$T_{\mathrm{M2}}T_{\mathrm{M5}} =(2\pi)^{-2-5}\ell_p^{-3-6} =(2\pi)^{-7}\ell_p^{-9}.$$
[given, F1, algebra]

1.2 Multiplying $2\kappa_{11}^{\,2}=(2\pi)^8\ell_p^9$ by $T_{\mathrm{M2}}=(2\pi)^{-2}\ell_p^{-3}$ gives
$$2\kappa_{11}^{\,2}T_{\mathrm{M2}} =(2\pi)^{8-2}\ell_p^{9-3} =(2\pi)^6\ell_p^6.$$
[F1, algebra]

2.1 Multiplying by the gravitational normalization gives
$$2\kappa_{11}^{\,2}T_{\mathrm{M2}}T_{\mathrm{M5}} =(2\pi)^8\ell_p^9(2\pi)^{-7}\ell_p^{-9} =(2\pi)^1\ell_p^0 =2\pi.$$
The $\ell_p$ factors cancel because $\ell_p>0$, and the powers of $2\pi$ add to one. [F1, step 1.1, algebra]

3.1 The shifted-flux input [F2] supplies a real-period condition, not a charge-lattice theorem. The equalities proved in steps 1.1, 1.2, and 2.1 are normalization identities only. [F2, step 1.1, step 1.2, step 2.1] ∎
