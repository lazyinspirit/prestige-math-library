---
id: rem-real-and-complex-normed-space-convention
kind: remark
title: "Real and complex scalar conventions for normed spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-norm-and-normed-space, thm-complex-numbers-form-a-field,
       def-complex-conjugate-real-imaginary-part-and-modulus]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis"
      url: "https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
pipeline_run: frontier-27
---

## Remark

The published definition [[def-norm-and-normed-space]] is written for vector
spaces over $\mathbb{R}$. On this page the same language is used over
$\mathbb{C}$ as well: a complex normed space is a complex vector space with a
function $\|\cdot\|:V\to\mathbb{R}$ satisfying the same separation and triangle
inequality clauses, while absolute homogeneity is read with the complex modulus
$|\lambda|$ of
[[def-complex-conjugate-real-imaginary-part-and-modulus]] instead of the real
absolute value.

Nothing else changes. The induced metric is still $d(x,y)=\|x-y\|$, Banach
means complete for that metric, and every estimate on this page that uses only
the triangle inequality and $|\lambda|$ is valid verbatim over either scalar
field. When scalar continuity in the complex case is mentioned, the scalar field
is the field of complex numbers already constructed in
[[thm-complex-numbers-form-a-field]].

## Remarks

- The page statements are therefore written so that the real case is literal and
  the complex case is obtained by this one substitution.
- Later pages that need genuinely complex-specific structure, such as sesquilinear
  inner products or adjoints, will say so explicitly rather than hiding it
  inside the word "normed".
