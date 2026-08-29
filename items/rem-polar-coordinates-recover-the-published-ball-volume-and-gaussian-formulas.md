---
id: rem-polar-coordinates-recover-the-published-ball-volume-and-gaussian-formulas
kind: remark
title: "Polar coordinates recover the published ball-volume and Gaussian formulas"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-polar-coordinates-formula-for-lebesgue-measure, cor-volume-of-the-unit-n-ball, cor-volume-of-a-radius-r-n-ball, lem-plane-gaussian-integral-in-polar-coordinates]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Proposition 2.53 and Corollary 2.55"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

Assuming the Axiom of Countable Choice required by
[[thm-polar-coordinates-formula-for-lebesgue-measure]], applying the polar
formula to radial indicators recovers the published volume formulas
[[cor-volume-of-the-unit-n-ball]] and
[[cor-volume-of-a-radius-r-n-ball]]. The cited
[[lem-plane-gaussian-integral-in-polar-coordinates]] is instead an earlier
instance of the same polar method; the present theorem subsumes that
two-dimensional calculation rather than providing an independent
Gamma-function route to it.

This page records the bridge, not a duplicate proof of those already-published
closed forms.
