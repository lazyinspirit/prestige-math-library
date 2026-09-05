---
id: cex-rational-isotropy-is-not-integral-representation
kind: counterexample
title: "Rational isotropy does not solve an integral representation problem"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-hasse-minkowski-over-the-rationals]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Sam Raskin, Introduction to the Arithmetic Theory of Quadratic Forms, section 4.7"
      url: "https://www.samraskin.net/forms.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement refuted

Rational isotropy of a quadratic form does not by itself solve an integral
representation problem for a related binary form.

## Facts & Assumptions

**Given:** The rational Hasse-Minkowski theorem ([[thm-hasse-minkowski-over-the-rationals]]).

## Counterexample

**Proof technique:** direct.

1.1 The ternary form $X^2-Y^2-2Z^2$ is rationally isotropic, for instance at the integer vector $(3,1,2)$. This is consistent with [[thm-hasse-minkowski-over-the-rationals]], which is only a rational statement. [given, algebra]

2.1 The related integral representation problem $x^2-y^2=2$ has no integer solution, because $(x-y)(x+y)=2$ and the two factors must have the same parity, while every factorization of $2$ uses one odd factor and one even factor. So rational isotropy does not automatically produce an integral representation. [step 1.1, given, algebra] ∎
