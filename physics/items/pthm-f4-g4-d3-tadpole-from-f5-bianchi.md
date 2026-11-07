---
id: pthm-f4-g4-d3-tadpole-from-f5-bianchi
kind: physics-theorem
title: F-theory D3/M2 tadpole condition
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 10
domain: physics
library: physics
category: string-theory
deps:
  - post-f4-mtheory-g4-shifted-quantization
  - post-f4-mtheory-to-f-theory-limit
  - post-mtheory-curvature-corrected-m2-gauss-law
  - post-m2-m5-tension-normalizations
dependency_roles:
  post-f4-mtheory-g4-shifted-quantization: physical-assumption
  post-f4-mtheory-to-f-theory-limit: physical-assumption
  post-mtheory-curvature-corrected-m2-gauss-law: physical-assumption
  post-m2-m5-tension-normalizations: physical-assumption
physical_scope: "Conditional integrated charge relation for a smooth compact boundaryless resolved Calabi–Yau fourfold in the leading-order M/F-theory regime. The equality is source-reported in R3 units and is only conditionally deduced from the current Witten/M2-normalized integrated premise. The local corrected field equation, global field-identification, curvature-term sign/coefficient, and localized M2-to-D3 current crosswalk remain unresolved. Singular, noncompact, and incompletely sourced cases are excluded."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "S. Sethi, C. Vafa, and E. Witten, Constraints on Low-Dimensional String Compactifications, arXiv:hep-th/9606122v1"
      url: "https://arxiv.org/pdf/hep-th/9606122v1"
      locator: "§2.1, printed pp. 2–4, the CY4 Euler-characteristic charge/index calculation; §2.2, pp. 4–7, the smooth elliptic-fourfold setting. This is fluxless/source-specific, not the general corrected Gauss law."
    - title: "Edward Witten, On Flux Quantization in M-Theory and the Effective Action, arXiv:hep-th/9609122v2"
      url: "https://arxiv.org/pdf/hep-th/9609122v2"
      locator: "§3, printed pp. 7–9, the zero-flux CY4 M2 charge and χ/24 discussion."
    - title: "Sven Krause, Christoph Mayrhofer, and Timo Weigand, G4 flux, chiral matter and singularity resolution in F-theory compactifications, arXiv:1109.3454v2"
      url: "https://arxiv.org/pdf/1109.3454v2"
      locator: "§4.2, printed pp. 24–26, source-reported flux-corrected D3/M2 tadpole formula in the specified resolved SU(5) model."
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§§9.1–9.3, printed pp. 84–91, flux and tadpole conventions and qualifications."
verification:
  precheck: pass
---

## Statement

For a smooth compact boundaryless resolved Calabi–Yau fourfold $\widehat Y_4$ in the leading-order M-theory/F-theory regime, the source-reported target relation in the R3 normalization is
$$N_{M2}+\frac12\int_{\widehat Y_4}g_4\wedge g_4=\frac{\chi(\widehat Y_4)}{24},\qquad g_4=[G_{4,CJS}]/((2\pi)^3\ell_p^3).$$
Here $N_{M2}$ is the signed localized M2 charge and the curvature charge from the one-loop $C_3\wedge I_8$ term is included. In the stated F-theory limit the space-filling M2 charge is identified with D3 charge. This equation is conditional on the physical field and source crosswalk detailed below; the current inputs do not yet prove that crosswalk.

## Facts & Assumptions

**Given:** A smooth compact boundaryless spin CY4, the R3 flux normalization, complete oriented localized source accounting, and the exact conditional physical input below.

[F1] [[post-mtheory-curvature-corrected-m2-gauss-law]] currently adopts for a smooth compact oriented boundaryless spin eight-manifold the premise $N_{M2}+\frac12\int_X(G_{4,M}/(2\pi))^2=-\langle I_8^W,[X]\rangle$, with $I_8^W=(\lambda^2-p_2)/48$ and the smooth-CY4 specialization $-\langle I_8^W,[X]\rangle=\chi(X)/24$. Its own current Step 1 record is missing. The statement gives the patchwise $C_{3,M}=T_{M2}C_{3,CJS}$ convention; its Facts and Remarks still say the M2-action and CJS superspace-input readiness records are missing, although both upstream records are now ready. Its physical normalization crosswalk remains explicitly unresolved.

[F2] [[post-m2-m5-tension-normalizations]] currently adopts $T_{M2}=(2\pi)^{-2}\ell_p^{-3}$ in the R4 CJS electric/magnetic convention; its current Step 1 readiness record is missing. Together with the current patchwise field relation in [F1], this gives the unit conversion only if the physical CJS field is the R3 flux field.

[F3] [[post-f4-mtheory-g4-shifted-quantization]] gives the local conditional CY4 shift in the R3 class convention; its current Step 1 record is escalated because the generic-shift and tension suppliers lack current readiness records.

[F4] [[post-f4-mtheory-to-f-theory-limit]] adopts the vanishing-fiber M/F limit and the M2-to-D3 charge interpretation; its current Step 1 readiness remains open because the type-IIB elliptic-fibration dependency is escalated on stale Weierstrass readiness; the M2-action and IIA-circle suppliers now have current ready records.

## Proof

**Proof technique:** Conditional substitution into the planned integrated Gauss-law premise; this is not a derivation of the corrected field equation from source-free CJS supergravity.

1.1 Assume the current Witten/M2-normalized integrated premise [F1], with flux subject to the local free-period shift convention [F3]. Its membrane-normalized curvature satisfies $N_{M2}+\frac12\int_{\widehat Y_4}(G_{4,M}/(2\pi))^2=-\langle I_8^W,[\widehat Y_4]\rangle$. The premise includes all localized M2 sources and the one-loop curvature term; the source-free classical CJS action alone would not supply either correction. [F1, F3, given]

1.2 On local potential patches, use the current patchwise relation in [F1], $C_{3,M}=T_{M2}C_{3,CJS}$, with $T_{M2}=(2\pi)^{-2}\ell_p^{-3}$ from [F2]. Differentiation gives $G_{4,M}=T_{M2}G_{4,CJS}$ on overlaps as well, provided the potential transition data are scaled consistently. Therefore $[G_{4,M}/(2\pi)]=[G_{4,CJS}]/((2\pi)^3\ell_p^3)=g_4$. This is algebra under the field-identification assumption; it does not verify the physical field identification or the global differential-cohomology gluing. [F1, F2, given, algebra]

2.1 By [F1], $-\langle I_8^W,[\widehat Y_4]\rangle=\chi(\widehat Y_4)/24$ for a smooth CY4. Substituting the equality in step 1.2 into step 1.1 gives the displayed relation. By [F4], only in the stated M/F limit is the space-filling M2 charge read as D3 charge. The unresolved corrected-equation coefficient/sign and source map remain prerequisites to upgrading this source-qualified conditional identity to a ready theorem. [F1, F4, step 1.1, step 1.2, algebra] ∎

## Unresolved prerequisite

The current Gauss-law carrier is present, but its Step 1 readiness record is missing. Its Facts and Remarks still say the M2-action and CJS superspace-input readiness records are missing even though both records are now ready. When its readiness is refreshed, match its Witten-normalized field to local $G_{4,CJS}$, including the curvature-term sign and coefficient, potential patching, and localized M2-to-D3 source coefficient. The conditional arithmetic above does not resolve those physical claims.

## Statement references

[[post-f4-mtheory-g4-shifted-quantization]]

[[post-f4-mtheory-to-f-theory-limit]]

[[post-mtheory-curvature-corrected-m2-gauss-law]]

[[post-m2-m5-tension-normalizations]]
