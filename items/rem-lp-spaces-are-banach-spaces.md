---
id: rem-lp-spaces-are-banach-spaces
kind: remark
title: "The classical $L^p$ spaces are Banach spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-banach-space,
       thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space,
       thm-riesz-fischer-completeness-of-l-p,
       rem-lp-completeness-and-the-banach-property]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
pipeline_run: frontier-27
---

## Remark

The measure-theory page already proves the classical completeness theorem:
[[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]
builds the normed spaces $L^p(\mu)$, and
[[thm-riesz-fischer-completeness-of-l-p]] proves they are complete. Therefore
each $L^p(\mu)$ with $1\le p\le \infty$ is a Banach space in the sense of
[[def-banach-space]].

The published [[rem-lp-completeness-and-the-banach-property]] records this as
the agreement seam between the measure-theory track and the functional-analysis
track. Nothing on the present page repeats the quotient construction or the
Riesz-Fischer proof.

## Remarks

- The sequence spaces $\ell^p$ are the counting-measure instances of that same
  theorem.
- Later pages may cite this remark for the Banach property without reopening the
  measure-theoretic development each time.
