---
id: lem-compact-kernel-derivative-moment-identities
kind: lemma
title: "Derivative moments of a compact radial kernel"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-scaled-symmetric-compact-kernel-family, lem-symmetric-kernel-moment-cancellation, thm-riemann-fubini-on-product-rectangles, thm-integration-by-parts-with-interior-derivatives, thm-continuous-functions-on-compact-jordan-sets-are-integrable]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: "No choice principle is used."
verification:
  precheck: pending
sources:
  references:
    - title: "Volker Springel, Smoothed Particle Hydrodynamics in Astrophysics, Annual Review of Astronomy and Astrophysics 48 (2010), author full text"
      url: "https://arxiv.org/html/1109.2219"
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Numerical Methods for Partial Differential Equations, Lecture 25: Particle Methods (Spring 2009)"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/ff7d4237c8f958e646cca0702e4dd17b_MIT18_336S09_lec25.pdf"
---

## Statement

For W from [[def-scaled-symmetric-compact-kernel-family]] and coordinate indices j,k,l,

$$\int \partial_kW(z)\,dz=0,\qquad \int z_j\partial_kW(z)\,dz=-\delta_{jk},\qquad \int z_jz_l\partial_kW(z)\,dz=0.$$

Also m₃=∫|z|³|∇W(z)|dz is finite.

## Facts & Assumptions

**Given:** A radial C² compactly supported kernel W with integral one.

[F1] [[def-scaled-symmetric-compact-kernel-family]]: W and its first derivatives are continuous and compactly supported, and ∫W=1.

[F2] [[lem-symmetric-kernel-moment-cancellation]]: ∫z_jW(z)dz=0 in every coordinate.

[F3] [[thm-riemann-fubini-on-product-rectangles]]: for a continuous function on a product rectangle, the compact multiple Riemann integral equals either iterated integral.

[F4] [[thm-integration-by-parts-with-interior-derivatives]]: if F,G are continuous on a compact interval and their interior derivatives have integrable extensions, then ∫Fg=[FG]−∫F'G.

[F5] [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]: a continuous function on a compact Jordan set is Riemann integrable.

## Proof

1.1 Choose a box with the support of W in its interior. Every integrand below is continuous on this box by [F1] and integrable by [F5]. Fix all coordinates except z_k. Applying [F4] with F=W and G=1 gives ∫∂_kW dz_k=0 because W vanishes near the two endpoints. Applying it with G=z_j gives ∫z_j∂_kW dz_k=−δ_{jk}∫W dz_k. Integrating the section identities over the remaining coordinates by [F3] gives the first identity and ∫z_j∂_kW dz=−δ_{jk}∫W dz=−δ_{jk}. [F1, F3, F4, F5]

2.1 With G=z_jz_l, [F4] gives ∫z_jz_l∂_kW dz=−δ_{jk}∫z_lW dz−δ_{lk}∫z_jW dz after [F3] integrates the other coordinates. Both moments vanish by [F2]. Finally |z|³|∇W| is continuous and compactly supported, so [F5] makes its integral finite; this is m₃. [F1, F2, F3, F4, F5, step 1.1] ∎
