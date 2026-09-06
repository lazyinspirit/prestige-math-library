---
id: def-morphism-affine-schemes-from-ring-map
kind: definition
title: "The map of affine spectra induced by a ring homomorphism"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-affine-scheme, thm-prime-spectrum-map-by-contraction, thm-universal-property-of-localisation, def-morphism-locally-ringed-spaces]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Section 26.6"
      url: "https://stacks.math.columbia.edu/tag/01HX"
---
## Definition

A homomorphism $\varphi:A\to B$ gives the continuous contraction map
$\operatorname{Spec}B\to\operatorname{Spec}A$, $\mathfrak q\mapsto
\varphi^{-1}\mathfrak q$. On $D(f)$ its sheaf map is the localization map
$A_f\to B_{\varphi(f)}$; these commute with restrictions and define a morphism
of ringed spaces. Its localness is verified next.
