---
id: thm-nrqm-controlled-dynamics-liouville-turning-point-transformation
aliases: [nrqm-controlled-dynamics-liouville-turning-point-transformation]
kind: theorem
domain: mathematics
title: "Liouville turning-point transformation"
status: draft
origin: pipeline
dependency_level: 2
deps: [thm-nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation, thm-nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization, def-derivative, def-continuity-real, thm-chain-rule, def-bochner-integrable-function, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation: mathematical-premise
  thm-nrqm-controlled-dynamics-airy-contour-and-fresnel-normalization: mathematical-premise
  def-derivative: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-bochner-integrable-function: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. W. J. Olver, Asymptotics and Special Functions (1974), Chapter 11 (Liouville transformation and turning-point theory) — classical monograph treatment consulted through the DLMF survey of Airy-type asymptotics"
      url: "https://dlmf.nist.gov/9.7"
    - title: "NIST Digital Library of Mathematical Functions, Sections 9.2 and 9.7 (Airy's differential equation and Airy-type connection formulas)"
      url: "https://dlmf.nist.gov/9.2"
---

## Statement

Let $q\in C^5([-x_-,x_+])$ be real, with a single simple zero at $0$:
$q(0)=0$, $q'(0)>0$, $q(x)$ has the sign of $x$, and $q\ne0$ on
$[-x_-,0)\cup(0,x_+]$. Let $h>0$ and consider $u''=q(x)u/h^2$ on the interval.
Define
$$\zeta(x):=\operatorname{sign}(x)\Bigl[\frac32\Bigl|\int_0^x\sqrt{|q(s)|}\,ds\Bigr|\Bigr]^{2/3},\qquad a(x):=(\zeta'(x))^{-1/2},\qquad u(x)=a(x)w(\zeta(x)).$$
Then:

(a) $\zeta\in C^4$, $\zeta(\zeta')^2=q$, $\zeta'>0$ with
$\min\zeta'>0$, and $a>0$ is $C^3$;

(b) $w$ satisfies $w''(\zeta)=\bigl[\zeta/h^2+R(\zeta)\bigr]w(\zeta)$ with
$$R(\zeta)=-\frac{a''(\zeta)}{a(\zeta)\,(\zeta')^2},$$
a continuous bounded real function on $\zeta([-x_-,x_+])$;

(c) the constants implicit in (a)–(b) depend only on $q$ and the interval.

## Facts & Assumptions

**Given:** the function $q$ with a single simple zero at $0$, the solution domain, and the transformation data $\zeta,a$.

[F1] Since $q(x)=x\,b(x)$ with $b\in C^4$, $b>0$ near $0$, one has the alternative formula $\zeta(x)=x\bigl[\frac32\int_0^1\sqrt{t\,b(xt)}\,dt\bigr]^{2/3}$, from which differentiation under the integrable $t^{1/2}$ factor gives $\zeta\in C^4$ and $\zeta'(0)=b(0)^{1/3}>0$ ([[def-derivative]], [[thm-chain-rule]], [[def-continuity-real]]).

[F2] The identity $\zeta(\zeta')^2=q$ follows by differentiating $\zeta^3=\pm\frac94\bigl(\int_0^x\sqrt{|q(s)|}ds\bigr)^2$: one obtains $3\zeta^2\zeta'=\pm\frac92\bigl(\int_0^x\sqrt{|q|}\bigr)\sqrt{|q|}$, and squaring while eliminating $\zeta^3$ gives $\zeta(\zeta')^2=|q|$, i.e. $\zeta(\zeta')^2=q$ since $\zeta$ and $q$ have the same sign; positivity and continuity then give a positive minimum of $\zeta'$ on the compact interval ([[def-derivative]], algebra).

[F3] Change of variables in the differential equation: inserting $u=aw(\zeta)$ into $u''=qu/h^2$ and using $\zeta(\zeta')^2=q$ cancels the first-derivative term and leaves the stated equation with the displayed $R$ ([[thm-chain-rule]], [[def-bochner-integrable-function]], algebra).

## Proof

1.1 [Regularity of the transformation] [F1] gives $\zeta\in C^4$ and $\zeta'>0$ near $0$; on $[-x_-,0)\cup(0,x_+]$, $q$ is $C^5$ and nonzero, so $\zeta$ is $C^4$ there too, and the two descriptions glue with matching derivatives at $0$ because both are given by the integral formula. Hence $\zeta'\ge c>0$ on the interval and $a=(\zeta')^{-1/2}\in C^3$. [F1, F2, algebra]

1.2 [The transformed equation] By [F3], $w$ solves $w''=[\zeta/h^2+R]w$ with $R=-a''/[a(\zeta')^2]$. Since $a$ and $\zeta'$ are $C^3$ and bounded below on the compact interval, $R$ is continuous and bounded with a bound depending only on $q$ and the interval. [F2, F3, algebra]

2.1 [Conclusion] Claims (a), (b), (c) are steps 1.1 and 1.2 and the dependence of all constants on $q$ and the interval. [step 1.1, step 1.2, algebra] ∎
