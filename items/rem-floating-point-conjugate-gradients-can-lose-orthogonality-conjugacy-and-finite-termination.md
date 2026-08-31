---
id: rem-floating-point-conjugate-gradients-can-lose-orthogonality-conjugacy-and-finite-termination
kind: remark
title: "In floating-point arithmetic, CG can lose exact residual orthogonality, $A$-conjugacy, and the finite-termination guarantee"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-conjugate-gradient-residuals-are-orthogonal-and-search-directions-are-a-conjugate,
       thm-conjugate-gradient-terminates-by-the-relative-grade-in-exact-arithmetic]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Magnus R. Hestenes and Eduard Stiefel, Methods of Conjugate Gradients for Solving Linear Systems"
      url: "https://math.nist.gov/mcsd/Reports/2002/hestenes-steifel-52.pdf"
    - title: "Jonathan Richard Shewchuk, An Introduction to the Conjugate Gradient Method Without the Agonizing Pain"
      url: "https://www.cs.cmu.edu/~quake-papers/painless-conjugate-gradient.pdf"
---

## Remark

The orthogonality and finite-termination theorems on this page are exact
arithmetic statements. In floating-point arithmetic, rounding errors perturb the
three-term recurrence, so later residuals need not remain exactly orthogonal
and later search directions need not remain exactly $A$-conjugate. Once those
identities drift, the argument that forces termination by the relative grade no
longer applies verbatim. Practical CG often still converges well, but the exact
algebraic structure is only approximate.

