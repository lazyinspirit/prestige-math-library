---
id: lem-ars222-coefficient-identities
kind: lemma
title: "The ARS(2,2,2) coefficients satisfy the coupled second-order identities"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-ars222-additive-tableau-and-stages
  - thm-of-square-roots
  - lem-of-square-monotone
  - lem-of-inverse-positive
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Uri M. Ascher, Steven J. Ruuth, and Raymond J. Spiteri, Implicit-explicit Runge-Kutta methods for time-dependent partial differential equations"
      url: "https://chaosbook.org/library/AscherANM97.pdf"
      locator: "§2, the second-order additive tableau coefficients, PDF pp. 3–5."
    - title: "Lorenzo Pareschi and Giovanni Russo, Implicit-explicit Runge-Kutta schemes and applications to hyperbolic systems with relaxation"
      url: "https://arxiv.org/pdf/1009.2757"
      locator: "§2.1, four coupled second-order conditions, PDF pp. 2–3."
---

## Statement

For $\gamma=1-1/\sqrt2$ and $\delta=-1/\sqrt2$ in [[def-ars222-additive-tableau-and-stages]], one has $\gamma>0$ and
$$\delta=1-\frac1{2\gamma},\qquad \gamma(1-\delta)=\frac12,\qquad \gamma(2-\gamma)=\frac12,\qquad \gamma(1-\gamma-\delta)=\frac12-\gamma^2.$$

## Facts & Assumptions

**Given:** The coefficient definitions in the statement.

[F1] [[def-ars222-additive-tableau-and-stages]]: $\gamma=1-1/\sqrt2$ and $\delta=-1/\sqrt2$.

[F2] [[thm-of-square-roots]]: $r:=\sqrt2$ is nonnegative and $r^2=2$.

[F3] [[lem-of-square-monotone]]: squaring is strictly increasing on nonnegative reals.

[F4] [[lem-of-inverse-positive]]: if $0<a<b$, then $0<b^{-1}<a^{-1}$.

## Proof

1.1 Let $r=\sqrt2$. If $r\le1$, then $0\le r\le1$ and [F3] gives $r^2\le1$, contradicting $r^2=2$ from [F2]; hence $r>1$. Applying [F4] to $0<1<r$ gives $0<1/r<1$, so $\gamma=1-1/r>0$. [F2, F3, F4, algebra]

2.1 By [F1] and $\gamma=(r-1)/r$ from step 1.1, $1-1/(2\gamma)=1-r/(2(r-1))=(r-2)/(2(r-1))$. Since $r^2=2$, $r(r-2)=2-2r=-2(r-1)$; dividing by the nonzero $2r(r-1)$ gives $(r-2)/(2(r-1))=-1/r=\delta$. [F1, F2, step 1.1, algebra]

2.2 Using $\delta=-1/r$ and $\gamma=(r-1)/r$, $\gamma(1-\delta)=((r-1)/r)(1+1/r)=(r^2-1)/r^2=1/2$, and $\gamma(2-\gamma)=1-(1-\gamma)^2=1-1/r^2=1/2$. [F1, F2, step 1.1, algebra]

3.1 The identity in step 2.1 gives $\gamma(1-\gamma-\delta)=\gamma(1/(2\gamma)-\gamma)=1/2-\gamma^2$. This proves all coefficient identities. [step 2.1, step 2.2, algebra] ∎

