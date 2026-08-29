---
id: rem-fubini-should-be-applied-after-tonelli-on-absolute-values
kind: remark
title: "To use Fubini safely, first use Tonelli on |f|"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., remark after Theorem 2.37"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "John K. Hunter, Measure Theory, Theorem 5.18"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

The safe workflow is:

1. apply [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] to $|f|$;
2. check that the resulting iterated integral is finite; then
3. invoke [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]].

This is the point of the absolute-integrability hypothesis in Fubini's theorem.
Without it, the iterated integrals may exist separately and still disagree.
