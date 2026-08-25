---
id: fs-a-finite-patch-presentation-can-always-be-oriented-compatibly
kind: false-statement
title: "FALSE: the patches of a finite presentation can always be reoriented to make their normals agree on overlaps"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-the-mobius-band-presented-by-two-regular-patches, def-finitely-patched-regular-surface-and-integrals, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-admissible-regular-parametrized-surface-patch, def-surface-reparametrization-and-orientation, def-cross-product-in-r3, def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237 notes, Section 5.3"
      url: "https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html"
    - title: "M. E. Taylor, Introduction to Analysis in Several Variables, Section 3.2"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
pipeline_run: null
---

## Statement

**False claim:** given any finite patch presentation of a surface, one can reorient the patches so that their induced normals agree on every overlap.

## Facts & Assumptions

**Given:** The two-patch Möbius-band presentation of [[ex-the-mobius-band-presented-by-two-regular-patches]].

[L1] On that presentation, the induced normals agree on one overlap component and are opposite on the other ([[ex-the-mobius-band-presented-by-two-regular-patches]]).

[F1] In a compatible finite patch presentation, induced normals must agree at every overlap point coming from interior parameter points of both patches ([[def-finitely-patched-regular-surface-and-integrals]]).

[F2] Choosing $N_\varphi$ rather than $-N_\varphi$ is an orientation ([[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

[F3] A regular patch has no interior parameter point sharing its image with a distinct point of the parameter region ([[def-admissible-regular-parametrized-surface-patch]]).

[F4] A regular surface reparametrization is orientation-preserving when its parameter Jacobian determinant is positive and orientation-reversing when it is negative ([[def-surface-reparametrization-and-orientation]]).

[F5] The cross product is that of [[def-cross-product-in-r3]].

[F6] $\langle x,y\rangle=\sum_{k<n}x_ky_k$ ([[def-euclidean-inner-product]]).

## Refutation

**Proof technique:** direct.

1.1 Reorienting a patch means replacing its induced normal by the opposite one. In coordinates, swapping the two parameters reverses the sign of the oriented area vector, so by [F2], [F4], and [F5] a reorientation changes nothing but the sign of the normal on that patch. [F2, F4, F5, F3, given]

2.1 For two patches there are exactly four orientation choices, and whether the two normals agree at an overlap point depends only on the product of the two chosen signs. [step 1.1, F2, F6]

3.1 By [L1] and [F1], the first overlap component of the Möbius presentation demands a positive sign product while the second demands a negative sign product. No one sign product can satisfy both. [step 2.1, L1, F1]

4.1 Enumerating the four choices confirms it: the two like-sign choices preserve agreement on the first overlap and fail on the second, while the two mixed-sign choices do the opposite. [step 3.1, F1]

5.1 Therefore no reorientation of this finite patch presentation makes the normals agree on every overlap, so the claim is false. The compatibility clause is a genuine restriction and not a normalization. [step 4.1, F1] ∎

## Remarks

- The refutation is presentation-level, exactly as intended on this page. It does not claim that every presentation of every nonorientable surface fails in the same two-component way.
