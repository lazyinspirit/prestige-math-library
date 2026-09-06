---
id: rem-sharp-and-classical-fundamental-theorems-of-calculus-agreement
kind: remark
title: "Sharp and classical fundamental theorems of calculus agree"
status: draft
origin: pipeline
deps: [thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-ftc-first-part, thm-ftc-second-part]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach--Zaretsky Theorem, §§3.1 and 3.6"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
---

[[thm-ftc-first-part]] concerns a continuous integrand and its classical
primitive; [[thm-ftc-second-part]] assumes the differentiability hypotheses it
states.  The sharp theorem
[[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]
instead characterises exactly the absolutely continuous functions by an
almost-everywhere derivative in $L^1$ and an every-$x$ reconstruction formula.
Thus the classical statements are special cases, not replacements for its
hypotheses.
