---
id: def-cmp-heterotic-tree-level-gauge-coupling
kind: definition
title: Heterotic tree-level four-dimensional gauge-coupling reduction data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 9
deps:
  - def-cmp-heterotic-cy3-bundle-compactification
  - def-supergravity-conventions-and-normalizations
  - post-heterotic-type-i-ten-dimensional-n1-supergravity-action
dependency_roles:
  def-cmp-heterotic-cy3-bundle-compactification: formulation-prerequisite
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-heterotic-type-i-ten-dimensional-n1-supergravity-action: physical-assumption
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Philip S. Candelas, Gary T. Horowitz, Andrew Strominger, and Edward Witten, Vacuum Configurations for Superstrings"
      url: "https://ooguri.caltech.edu/documents/31340/Candelas_Horowitz_Strominger_Witten.pdf"
      locator: "§4, journal pp. 62–65 (PDF pp. 17–20): the standard-embedding heterotic gauge sector; the reduction integral is supplied locally."
    - title: "Angel M. Uranga, String Theory: A Graduate Course, Lecture 9: Calabi–Yau compactification and Heterotic String phenomenology"
      url: "https://members.ift.uam-csic.es/auranga/lect13.pdf"
      locator: "PDF pp. 16–23: heterotic gauge fields, string-frame compactification, and tree-level reduction context."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Conditional unwarped tree-level volume/dilaton dependence for a normalized gauge zero mode only. It omits threshold, loop, flux, warping, localized-source, and exact trace/embedding-index corrections."
---

## Definition

Use natural units $\hbar=c=1$. On an unwarped product $M_4\times X$ with ten-dimensional string-frame metric $G^{(s)}=g^{(4,s)}\oplus g^{(X,s)}$, finite internal string-frame volume $\operatorname{Vol}_s(X)$, and constant dimensionless heterotic dilaton $\Phi_0$, choose one declared gauge trace and a ten-dimensional kinetic normalization $g_{10,0}$ by writing the selected gauge term as
$$S_{10,\mathrm{gauge}}=-\frac1{4g_{10,0}^2}\int_{M_4\times X}d^{10}x\,\sqrt{-G^{(s)}}\,e^{-2\Phi_0}\operatorname{Tr}(F_{MN}F^{MN}).$$
For an external gauge field independent of $X$ and with no internal components, define the scalar four-dimensional Yang–Mills coupling $g_{\mathrm{YM},4}>0$ by the coefficient of $-\tfrac14\int_{M_4}d^4x\,\sqrt{-g^{(4,s)}}\operatorname{Tr}(F_{\mu\nu}F^{\mu\nu})$, with external indices raised by $g^{(4,s)}$. Require $0<g_{10,0}^2<\infty$. Then the tree-level reduction datum is
$$\frac1{g_{\mathrm{YM},4}^2}=e^{-2\Phi_0}\frac{\operatorname{Vol}_s(X)}{g_{10,0}^2}.$$
Here $[g_{10,0}^2]=\mathrm{length}^6$, so the right side is dimensionless. The exact value of $g_{10,0}$, factors of $2\pi$ and $\alpha'$, and representation embedding index are fixed only after the action coefficient and trace are specified. The formula excludes threshold corrections, loops, flux corrections, warping, and localized sources.

## Definition references

[[def-cmp-heterotic-cy3-bundle-compactification]]

[[def-supergravity-conventions-and-normalizations]]

[[post-heterotic-type-i-ten-dimensional-n1-supergravity-action]]

## Facts & Assumptions

**Given:** An unwarped product with external string-frame metric $g^{(4,s)}$ and internal string-frame metric $g^{(X,s)}$, fixed finite internal string-frame volume, constant dimensionless $\Phi_0$, the chosen action coefficient/trace, and the external zero-mode gauge field.

[F1] [[def-cmp-heterotic-cy3-bundle-compactification]] selects the heterotic representation bundle and records the connection, source and approximation data.

[F2] [[def-supergravity-conventions-and-normalizations]] fixes the string frame and natural units $\hbar=c=1$.

[F3] [[post-heterotic-type-i-ten-dimensional-n1-supergravity-action]] adopts the heterotic tree-level gauge weight $e^{-2\Phi_H}$ and explicitly leaves full coefficients and trace normalizations to the selected action convention.

[A1] The coefficient $g_{10,0}$ is the parameter defined by the displayed ten-dimensional kinetic term; it is not inferred from [F3].

[A2] The zero mode is independent of internal coordinates, has no internal field-strength components, and uses the same trace on both sides of the reduction.

## Proof

**Given:** The product metric, constant dilaton, finite volume, action term and zero-mode ansatz in the Definition, with [F1]–[F3] and [A1]–[A2].

1.1 By [F1] the selected bundle background has the specified internal gauge sector; the product ansatz [A2] takes its external zero mode independent of the internal point. For the product metric, $\sqrt{-G^{(s)}}=\sqrt{-g^{(4,s)}}\sqrt{g^{(X,s)}}$, and $F_{MN}F^{MN}=F_{\mu\nu}F^{\mu\nu}$ with the external indices raised by $g^{(4,s)}$. Since $\Phi_0$ is constant, the internal factor in the action integral is exactly $e^{-2\Phi_0}\int_Xd^6y\sqrt{g^{(X,s)}}=e^{-2\Phi_0}\operatorname{Vol}_s(X)$. [given, F1, F2, A1, A2, algebra]

2.1 Substituting the integral from step 1.1 into the ten-dimensional term leaves the four-dimensional coefficient $-\tfrac14 e^{-2\Phi_0}\operatorname{Vol}_s(X)/g_{10,0}^2$ multiplying the declared gauge kinetic invariant. Comparing with the defining coefficient $-1/(4g_{\mathrm{YM},4}^2)$ gives the displayed formula. Six internal length dimensions cancel $[g_{10,0}^2]=\mathrm{length}^6$, and the convention caveats follow from [F3] and [A1]. [given, F3, A1, step 1.1, algebra] ∎
