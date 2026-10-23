---
id: rem-fd-stokes-pressure-prerequisite
kind: remark
title: "Full wall Stokes pressure requires a divergence inverse"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - def-fd-projected-no-slip-stokes-space
  - thm-fd-projected-stationary-stokes
  - thm-fd-rectangular-no-slip-stokes-velocity-pressure
  - def-axiom-of-choice
dependency_roles:
  def-fd-projected-no-slip-stokes-space: mathematical-premise
  thm-fd-projected-stationary-stokes: mathematical-premise
  thm-fd-rectangular-no-slip-stokes-velocity-pressure: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Martin Vohralík, A posteriori error estimates for efficiency and error control in numerical simulations, Course NM497 lecture notes (2010–2011)"
      url: "https://www.ljll.fr/MathModel/enseignement/polycopies/vohralik.pdf"
      locator: "Chapter 6 §6.1, PDF pp. 55–56: standard Stokes weak formulation uses an inf–sup condition for mean-zero L² pressure; local rectangle theorem proves a separate H⁻¹ result."
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21%2112_02_01_AM.pdf"
      locator: "§2.3.6, Example 2.66, pp. 87–88; §5.3.1, pp. 233–237."
---

## Remark

Assume full AC. The projected stationary Stokes theorem on a bounded open set establishes a unique variational velocity in the divergence-free $H_0^1$ space; its conclusion contains no pressure. The separate rectangular theorem uses a continuous right inverse of divergence on compactly supported mean-zero tests to construct a distribution pressure in $H^{-1}$, unique modulo constants, for finite rectangles. These results do not claim an $L^2$ pressure estimate or pressure recovery on arbitrary bounded open sets; such a claim requires an additional domain-appropriate divergence or inf-sup argument.

## Remark references

[Martin Vohralík, A posteriori error estimates for efficiency and error control in numerical simulations, Course NM497 lecture notes (2010–2011)](https://www.ljll.fr/MathModel/enseignement/polycopies/vohralik.pdf).

[Theo Bühler and Dietmar Salamon, Functional Analysis](https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21%2112_02_01_AM.pdf).

## Facts & Assumptions

**Given:** The hypotheses stated in the formulation, including the explicitly adopted choice principle where indicated.

[F1] [[def-axiom-of-choice]]: full AC is the explicitly retained choice hypothesis of the Stokes branch.

[F2] [[thm-fd-projected-stationary-stokes]]: its conclusion is existence and uniqueness of the variational velocity with a gradient bound, and expressly makes no pressure assertion.

[F3] [[thm-fd-rectangular-no-slip-stokes-velocity-pressure]]: on finite rectangles the proof constructs an $H^{-1}$ pressure using the test divergence inverse and proves uniqueness modulo constants.

## Proof

**Given:** Full AC and the exact conclusions of the two local Stokes theorems.

1.1 The conclusion of [F2] names only $u\in V$, the variational identity, and the gradient estimate; it contains no pressure variable or distributional momentum equation. Thus the projected theorem alone supplies no pressure conclusion. [given, F1, F2, algebra]

1.2 On a finite rectangle, [F3] additionally establishes the distribution equation and an $H^{-1}$ pressure class modulo constants by constructing the pressure from the divergence inverse on mean-zero tests. Its hypotheses include the rectangle and its conclusion is limited to $H^{-1}$. [given, F1, F3, algebra]

2.1 The two conclusions therefore justify the distinction stated in the Remark. No step extends the rectangle argument to arbitrary bounded open sets or strengthens $H^{-1}$ to $L^2$; either extension would need an additional proved right-inverse or inf-sup estimate. [given, F2, F3, step 1.1, step 1.2] ∎

