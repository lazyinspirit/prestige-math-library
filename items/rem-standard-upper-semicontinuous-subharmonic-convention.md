---
id: rem-standard-upper-semicontinuous-subharmonic-convention
kind: remark
title: "This page uses the standard upper-semicontinuous subharmonic convention"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-plane-harmonic-function]
verification:
  audited: 2026-08-27
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Harold P. Boas, Class Notes Math 618: Complex Variables II, Spring 2016"
      url: "https://haroldpboas.gitlab.io/courses/618-2016a/notes2016.pdf"
---

The subharmonic functions on this page take values in $[-\infty,\infty)$, are
required to be upper semicontinuous, and are excluded from being identically
$-\infty$ on any connected component of the domain. This is the standard
potential-theoretic convention used by the sources behind the page, and it is
the one compatible with $\log|f|$ for a holomorphic function and with Perron's
method for the Dirichlet problem.

The older convention that a subharmonic function is merely a continuous
real-valued function satisfying the submean inequality is recovered as the
special case where the function never takes the value $-\infty$ and happens to
be continuous. The harmonic comparison theorems on the page are written so that
the harmonic notion from [[def-plane-harmonic-function]] remains the same while
the subharmonic class is large enough to include logarithmic singularities.
