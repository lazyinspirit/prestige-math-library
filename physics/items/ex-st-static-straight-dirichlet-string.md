---
id: ex-st-static-straight-dirichlet-string
kind: example
title: Static Straight Dirichlet String
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: physics
library: physics
deps:
  - def-st-flat-bosonic-string-model
  - def-st-string-tension-alpha-prime
  - post-st-bosonic-polyakov-model
  - pthm-st-polyakov-eom-virasoro-constraints
  - pthm-st-open-string-boundary-variation
  - pthm-st-nambu-goto-polyakov-equivalence
dependency_roles:
  def-st-flat-bosonic-string-model: formulation-prerequisite
  def-st-string-tension-alpha-prime: formulation-prerequisite
  post-st-bosonic-polyakov-model: physical-assumption
  pthm-st-polyakov-eom-virasoro-constraints: physical-result
  pthm-st-open-string-boundary-variation: physical-result
  pthm-st-nambu-goto-polyakov-equivalence: physical-result
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
physical_scope: "One explicit classical solution of the flat tensile bosonic Polyakov model on an open strip with fixed spatial endpoint data; not an empirical observation and not a dynamical D-brane model."
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, University of Cambridge Part III lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§§1.2–1.4 and Chapter 3, printed pp. 14–27 and 50–52: the action, classical constraints, and open-string endpoint variation."
    - title: "Barton Zwiebach, A First Course in String Theory, second edition, Cambridge University Press, 2009"
      url: "https://pierre.ag.gerard.web.ulb.be/textbooks/books/A_First_Course_In_String_Theory.pdf"
      locator: "§§6.5 and 24.6, printed pp. 113–115 and 583–587: fixed/free endpoint data, the induced metric, and classical action equivalence."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

On the strip $\Sigma=\mathbb R\times[0,\pi]$, fix a length $\ell>0$, choose conformal metric $h=\operatorname{diag}(-1,+1)$, and set $X^0=\ell\tau$, $X^1=\ell\sigma$, and $X^\mu=0$ for $\mu\ge2$. Fix $X^1$ and all $X^\mu$ with $\mu\ge2$ at both endpoints by Dirichlet data; $X^0$ satisfies Neumann data. Then $\ddot X-X''=0$, $\dot X^2+X'^2=0$, $\dot X\cdot X'=0$, and $\gamma=\operatorname{diag}(-\ell^2,\ell^2)$, so this is a nondegenerate Lorentzian classical Polyakov/Nambu–Goto solution on the positive branch. The fixed endpoints are prescribed boundary data, not dynamical D-branes.

## Example references

[[def-st-flat-bosonic-string-model]]

[[def-st-string-tension-alpha-prime]]

[[post-st-bosonic-polyakov-model]]

[[pthm-st-polyakov-eom-virasoro-constraints]]

[[pthm-st-open-string-boundary-variation]]

[[pthm-st-nambu-goto-polyakov-equivalence]]

## Facts & Assumptions

**Given:** $\ell>0$; the flat target metric is $\eta=\operatorname{diag}(-1,+1,\ldots,+1)$; $\tau,\sigma$ are dimensionless; $h=\operatorname{diag}(-1,+1)$; the stated endpoint variations; and the adopted free Polyakov model.

[F1] [[def-st-flat-bosonic-string-model]] defines $C^2$ Polyakov maps on the open strip $0\le\sigma\le\pi$ and the additional nondegenerate Lorentzian immersion branch. Membership in that branch is checked for this example in step 2.2.

[F2] [[def-st-string-tension-alpha-prime]]: $T=(2\pi\alpha')^{-1}>0$, and target coordinates have length dimension.

[A1] [[post-st-bosonic-polyakov-model]]: the free tensile flat-target Polyakov action is adopted without endpoint interactions.

[F3] [[pthm-st-polyakov-eom-virasoro-constraints]]: a conformal-gauge solution must satisfy $\ddot X-X''=0$, $\dot X^2+X'^2=0$, and $\dot X\cdot X'=0$.

[F4] [[pthm-st-open-string-boundary-variation]]: the strip variation is stationary when each endpoint coordinate is fixed (Dirichlet) or has vanishing normal flux (Neumann).

[F5] [[pthm-st-nambu-goto-polyakov-equivalence]]: on the positive branch, matched classical Polyakov and Nambu–Goto stationary configurations correspond.

## Verification

**Given:** The fields and data in [A1]–[F5].

1.1 Differentiating the stated map gives $\dot X=(\ell,0,\ldots,0)$ and $X'=(0,\ell,0,\ldots,0)$. Both second derivatives vanish, so $\ddot X-X''=0$. [given, F1, A1, algebra]

2.1 With the mostly-plus target metric, $\dot X^2=-\ell^2$, $X'^2=\ell^2$, and $\dot X\cdot X'=0$. Thus both metric constraints in [F3] hold. [F3, step 1.1, algebra]

2.2 The induced metric has components $\gamma_{00}=-\ell^2$, $\gamma_{01}=0$, and $\gamma_{11}=\ell^2$, so $\det\gamma=-\ell^4<0$; the map has rank two and lies on $\gamma=\ell^2h$, hence $\lambda=\ell^2>0$. [given, F1, step 1.1, algebra]

2.3 At $\sigma=0,\pi$, $X^1$ and every $X^\mu$ with $\mu\ge2$ are fixed, so their variations vanish; $X'^0=0$, so the time component has zero Neumann flux. By [F4], the boundary term vanishes with these coordinatewise conditions. [given, F4, step 1.1]

3.1 Steps 1.1, 2.1, 2.2, and 2.3 verify the Polyakov field equation, both metric constraints, nondegeneracy, and boundary stationarity. Since $\lambda>0$, $T>0$ by [F2], and the same boundary data apply, [F5] gives the classical Nambu–Goto solution as well; no endpoint object is introduced. [A1, F2, F5, step 1.1, step 2.1, step 2.2, step 2.3] ∎
