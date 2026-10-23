---
id: rem-fd-weak-regularity-status
kind: remark
title: Weak existence and smooth regularity scope
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
deps: [thm-fd-periodic-global-weak-existence, lem-fd-finite-mode-compactness, thm-fd-weak-smooth-uniqueness]
dependency_roles:
  thm-fd-periodic-global-weak-existence: mathematical-premise
  lem-fd-finite-mode-compactness: mathematical-premise
  thm-fd-weak-smooth-uniqueness: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Leonid Ryzhik, Math 256B Lecture Notes, version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§5.6, printed pp. 52–53; §6.1, printed pp. 53–54."
    - title: "L. C. Berselli and S. Spirito, On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "§§3–5, printed pp. 5–16; the local remark is limited to its stated theorem scopes."
---

## Remark

The periodic existence theorem gives a global weak solution for every stated
initial datum and positive viscosity, conditional on the finite-dimensional ODE
input stated in its theorem; it does not prove global smoothness or
uniqueness among all three-dimensional weak solutions. The weak–smooth theorem
only yields uniqueness on an interval where a smooth solution with the same
data is already given. The compactness argument uses a positive-viscosity
gradient bound; its proof does not apply at $\nu=0$. These are limits of the
claims proved on this page and are not assertions about empirical fluid
behavior.

## Remark references

[Leonid Ryzhik, *Math 256B Lecture Notes*, §§5.6 and 6.1, pp. 52–54](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf).

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions*, §§3–5, pp. 5–16](https://www.mdpi.com/2311-5521/6/1/42/pdf).

## Facts & Assumptions

**Given:** Only the theorem statements and proof hypotheses on this page are being summarized.

[F1] [[thm-fd-periodic-global-weak-existence]]: the conclusion is global unforced weak existence for $d\ge2$, $\nu>0$, $u_0\in H$, and contains no uniqueness or smoothness assertion.

[F2] [[lem-fd-finite-mode-compactness]]: the compactness estimate uses an integrated gradient bound, which in the Galerkin energy estimate is supplied by the positive factor $\nu$.

[F3] [[thm-fd-weak-smooth-uniqueness]]: uniqueness is conditional on a smooth comparison solution on the interval.

## Proof

1.1 The first two sentences restate the exact scope and quantifiers of [F1] and [F3]; neither theorem's conclusion contains global regularity or unrestricted three-dimensional uniqueness. [given, F1, F3]

1.2 The compactness lemma requires the bound $B=\sup_n\int_0^T\|\nabla z_n\|_2^2dt$; in the viscous Galerkin energy identity this is obtained after dividing by $2\nu>0$. At $\nu=0$ that step supplies no gradient control, so the stated compactness proof gives no inviscid conclusion. This is a proof-scope observation only. [given, F2, algebra] ∎
