---
id: post-m2-m5-tension-normalizations
kind: postulate
title: M2 M5 tension normalizations
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps:
  - post-eleven-dimensional-cjs-supergravity-action
dependency_roles:
  post-eleven-dimensional-cjs-supergravity-action: formulation-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "Adopted absolute M2 and single-M5 tension units and the R4 CJS gravitational coupling in one stated C3/C6 charge convention; no quantum charge lattice is derived."
sources:
  references:
    - title: "Edward Witten, On Flux Quantization in M-Theory and the Effective Action, arXiv:hep-th/9609122v2"
      url: "https://arxiv.org/pdf/hep-th/9609122v2"
      locator: "§2.2, PDF pp. 5–7; membrane world-volume coupling and shifted-flux context, not the absolute M2/M5 tension formulas."
    - title: "Shanta de Alwis, A Note on Brane Tension and M-Theory, arXiv:hep-th/9607011v1"
      url: "https://arxiv.org/pdf/hep-th/9607011v1"
      locator: "Introductory Eqs. (0.6), (0.8)–(0.11); tension normalizations and the unresolved factor-of-two comparison."
    - title: "Joseph Polchinski, Dirichlet-Branes and Ramond-Ramond Charges, arXiv:hep-th/9510017v3"
      url: "https://arxiv.org/pdf/hep-th/9510017v3"
      locator: "Eqs. (12)–(15), PDF pp. 7–8; RR Dirac quantization and the stated factor-of-two discrepancy in the D2 comparison."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step4-independent-batch-reader; delegated by /root under owner authorization
---

## Postulate

Set $c=\hbar=1$ and let $\ell_p>0$ be the eleven-dimensional Planck length. In the R4 CJS normalization, adopt
$$T_{\mathrm{M2}}=(2\pi)^{-2}\ell_p^{-3},\qquad T_{\mathrm{M5}}=(2\pi)^{-5}\ell_p^{-6},\qquad 2\kappa_{11}^{\,2}=(2\pi)^8\ell_p^9.$$
Here $T_{\mathrm{M2}}$ and $T_{\mathrm{M5}}$ have dimensions length$^{-3}$ and length$^{-6}$, respectively, and $\kappa_{11}^{\,2}$ has dimensions length$^9$. These are adopted absolute normalization inputs in the declared electric $C_3$ / magnetic $C_6$ convention. Their arithmetic consequences are checked separately; interpreting the resulting $2\pi$ as a global Dirac unit requires independent charge-quantization input.

## Statement References

[Witten, §2.2 (membrane coupling and shifted-flux context)](https://arxiv.org/pdf/hep-th/9609122v2)

[de Alwis, Eqs. (0.6), (0.8)–(0.11)](https://arxiv.org/pdf/hep-th/9607011v1)

[Polchinski, Eqs. (12)–(15)](https://arxiv.org/pdf/hep-th/9510017v3)

## Facts & Assumptions

**Given:** The positive length $\ell_p$, the CJS convention, and the adopted physical normalization inputs.

[F1] The current CJS carrier fixes $2\kappa_{11}^{\,2}=(2\pi)^8\ell_p^9$ in its source-free two-derivative convention ([[post-eleven-dimensional-cjs-supergravity-action]]).

[A1] The absolute M2 and M5 tension units are adopted from the cited source convention; they are not derived from the classical CJS action.

## Remarks

The sources report a factor-of-two discrepancy between some M2/D2 normalization derivations. This postulate records the selected units and does not resolve that discrepancy or prove the global charge lattice.
