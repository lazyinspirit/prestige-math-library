---
id: thm-surface-area-and-scalar-integrals-are-reparametrization-invariant
kind: theorem
title: 'Surface area and scalar surface integrals are invariant under regular reparametrization'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-surface-area-and-scalar-surface-integral-of-a-patch, lem-oriented-area-vector-under-surface-reparametrization, thm-change-of-variables-for-compact-jordan-sets]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'M. E. Taylor, Introduction to Analysis in Several Variables, Section 3.2'
      url: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf'
    - title: 'University of Toronto MAT237 notes, Section 5.3, An Invariance Property'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html'
pipeline_run: null
---

## Statement

Surface area and scalar surface integrals are unchanged by every regular reparametrization, regardless of orientation sign.

## Facts & Assumptions

**Given:** A regular reparametrization $\psi=\varphi\circ h$ from parameter region $E$ onto parameter region $D$, and a continuous scalar field $q$ on the common patch image.

[L1] Scalar surface integrals are parameter integrals of $(q\circ\varphi)J_\varphi$, and $J_\psi=(J_\varphi\circ h)|\det Dh|$ ([[def-surface-area-and-scalar-surface-integral-of-a-patch]], [[lem-oriented-area-vector-under-surface-reparametrization]]).

[L2] Compact-Jordan change of variables gives $\int_E(k\circ h)|\det Dh|=\int_Dk$ for a neighbourhood diffeomorphism carrying $E$ onto $D$ ([[thm-change-of-variables-for-compact-jordan-sets]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the integral computed with $\psi$ is $\int_E(q\circ\varphi\circ h)(J_\varphi\circ h)|\det Dh|$. [given, L1]

2.1 Apply [L2] to $k=(q\circ\varphi)J_\varphi$. The result is $\int_D(q\circ\varphi)J_\varphi$, the integral computed with $\varphi$. [step 1.1, L2]

3.1 The absolute determinant makes the calculation independent of orientation sign. Setting $q=1$ gives invariance of area. [step 2.1, L1] ∎
