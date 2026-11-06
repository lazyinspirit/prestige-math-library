---
id: pthm-st-polyakov-eom-virasoro-constraints
kind: physics-theorem
title: Polyakov Equations and Virasoro Constraints
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: physics
library: physics
deps:
  - def-st-flat-bosonic-string-model
  - post-st-bosonic-polyakov-model
  - def-st-conformal-gauge-and-residual-symmetry
dependency_roles:
  def-st-flat-bosonic-string-model: formulation-prerequisite
  post-st-bosonic-polyakov-model: physical-assumption
  def-st-conformal-gauge-and-residual-symmetry: formulation-prerequisite
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Classical local field and metric equations of the free tensile flat-target Polyakov model in a Lorentzian conformal-gauge patch; no quantum Weyl-invariance claim."
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, University of Cambridge Part III lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§§1.3.2–1.4.1, printed pp. 22–27: free wave equation, stress tensor, constraints, and their Fourier modes."
    - title: "Barton Zwiebach, A First Course in String Theory, second edition, Cambridge University Press, 2009"
      url: "https://pierre.ag.gerard.web.ulb.be/textbooks/books/A_First_Course_In_String_Theory.pdf"
      locator: "§24.6, printed pp. 585–587, equations (24.75)–(24.98): X and metric variation and conformal-gauge constraints."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For the postulated free flat Polyakov model on a local conformal-gauge patch with $h_{ab}=e^{2\phi}\operatorname{diag}(-1,+1)$, write $\dot X=\partial_\tau X$, $X'=\partial_\sigma X$, $\sigma^\pm=\tau\pm\sigma$, and $\partial_\pm=\frac12(\partial_\tau\pm\partial_\sigma)$. Define $T_{ab}=\gamma_{ab}-\frac12h_{ab}h^{cd}\gamma_{cd}$, where $\gamma_{ab}=\partial_aX\cdot\partial_bX$. Variation of $X$ gives $\ddot X-X''=0$. The metric equation $T_{ab}=0$ gives $T_{++}=T_{--}=0$, equivalently $\dot X\cdot X'=0$ and $\dot X^2+X'^2=0$; these constraints remain imposed after choosing conformal gauge and setting $\phi=0$.

## Statement references

[[def-st-flat-bosonic-string-model]]

[[post-st-bosonic-polyakov-model]]

[[def-st-conformal-gauge-and-residual-symmetry]]

## Facts & Assumptions

**Given:** A $C^2$ flat-target configuration $X$, the adopted Polyakov action, and a local Lorentzian conformal-gauge patch with $h_{ab}=e^{2\phi}\eta_{ab}$ and $\eta_{ab}=\operatorname{diag}(-1,+1)$.

[F1] [[def-st-flat-bosonic-string-model]]: $X$ maps a two-dimensional Lorentzian worldsheet into $\mathbb R^{1,D-1}$ with target metric $\eta=\operatorname{diag}(-1,+1,\ldots,+1)$.

[A1] [[post-st-bosonic-polyakov-model]]: $S_P=-\frac{T}{2}\int\sqrt{-h}\,h^{ab}\partial_aX\cdot\partial_bX\,d^2\sigma$, and $h$ is varied as an auxiliary metric.

[F2] [[def-st-conformal-gauge-and-residual-symmetry]]: in the selected patch $h_{ab}=e^{2\phi}\eta_{ab}$, $\sigma^\pm=\tau\pm\sigma$, and $\partial_\pm=\frac12(\partial_\tau\pm\partial_\sigma)$; in two dimensions $\sqrt{-h}\,h^{ab}=\eta^{ab}$, so the conformal factor drops out of the classical $X$-equation.

## Proof

1.1 Varying $X$ in [A1] and integrating by parts against compactly supported variations gives $\partial_a(\sqrt{-h}\,h^{ab}\partial_bX^\mu)=0$. By [F2], this is $\eta^{ab}\partial_a\partial_bX^\mu=-\ddot X^\mu+X^{\mu\prime\prime}=0$, equivalent to the stated wave equation. [given, F1, A1, F2, algebra]

1.2 Varying the inverse metric $h^{ab}$ in [A1] gives the coefficient $\gamma_{ab}-\frac12h_{ab}h^{cd}\gamma_{cd}$, where $\gamma_{ab}=\partial_aX\cdot\partial_bX$; this is $T_{ab}$ as defined in the Statement. Thus the metric equation is $T_{ab}=0$; gauge fixing changes its coordinate representation but does not remove this Euler–Lagrange equation. [given, F1, A1, algebra]

2.1 In the flat conformal representative $\eta_{ab}=\operatorname{diag}(-1,+1)$, direct substitution into [F1]'s induced-metric expression gives $T_{00}=\frac12(\dot X^2+X'^2)$, $T_{11}=\frac12(\dot X^2+X'^2)$, and $T_{01}=\dot X\cdot X'$. Hence $T_{ab}=0$ is equivalent to $\dot X^2+X'^2=0$ and $\dot X\cdot X'=0$. [given, F1, step 1.2, algebra]

3.1 With the light-cone convention in [F2], $T_{++}=\partial_+X\cdot\partial_+X=\frac14(\dot X^2+X'^2+2\dot X\cdot X')$, and $T_{--}=\partial_-X\cdot\partial_-X=\frac14(\dot X^2+X'^2-2\dot X\cdot X')$. Their vanishing is equivalent to the two equations in step 2.1 by adding and subtracting. [F2, step 2.1, algebra] ∎
