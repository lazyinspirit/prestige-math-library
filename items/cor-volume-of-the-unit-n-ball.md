---
id: cor-volume-of-the-unit-n-ball
kind: corollary
title: 'The closed form for the volume of the unit $n$-ball'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-volume-recursion-for-closed-euclidean-balls, thm-real-beta-gamma-identity, cor-real-gamma-one-half-is-root-pi, thm-real-gamma-functional-equation, thm-substitution-for-improper-integrals, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §2.4(d)"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, §5C"
      url: "https://measure.axler.net/MIRA.pdf"
pipeline_run: null
---

## Statement

For every $n\ge1$, $V_n(1)=\pi^{n/2}/\Gamma(n/2+1)$. Here $n$ is an integer.

## Facts & Assumptions

**Given:** Unit-ball volumes $V_n(1)$ in positive integer dimensions.

[F1] One has $V_1(r)=2r$ for $r\ge0$, and for $n\ge2$, $V_n(1)=V_{n-1}(1)\int_{-1}^{1}(1-t^2)^{(n-1)/2}\,dt$ ([[thm-volume-recursion-for-closed-euclidean-balls]]).

[F2] For $p,q>0$, $B(p,q)=\Gamma(p)\Gamma(q)/\Gamma(p+q)$ ([[thm-real-beta-gamma-identity]]).

[F3] $\Gamma(1/2)=\sqrt\pi$ ([[cor-real-gamma-one-half-is-root-pi]]).

[F4] For $s>0$, $\Gamma(s+1)=s\Gamma(s)$ ([[thm-real-gamma-functional-equation]]).

## Proof

**Proof technique:** induction.

1.1 In dimension $1$, [F1] gives $V_1(1)=2$, while [F3] and [F4] give $\pi^{1/2}/\Gamma(3/2)=\sqrt\pi/((1/2)\sqrt\pi)=2$. [F1, F3, F4, base, algebra]

1.2 Assume the formula in dimension $n-1$. In the integral of [F1], symmetry followed by $u=t^2$ gives $\int_{-1}^1(1-t^2)^{(n-1)/2}\,dt=B(1/2,(n+1)/2)$. By [F2] and [F3], this equals $\sqrt\pi\,\Gamma((n+1)/2)/\Gamma(n/2+1)$. [ih, F1, F2, F3, algebra]

2.1 Multiply the expression in step 1.2 by the induction value $\pi^{(n-1)/2}/\Gamma((n+1)/2)$; the common Gamma factor cancels, giving $V_n(1)=\pi^{n/2}/\Gamma(n/2+1)$. This discharges the induction. [step 1.2, discharge-induction, algebra] ∎
