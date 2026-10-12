---
id: cor-volume-of-a-radius-r-n-ball
kind: corollary
title: 'The volume of a radius-$r$ closed $n$-ball is $\pi^{n/2}r^n/\Gamma(n/2+1)$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-volume-recursion-for-closed-euclidean-balls, cor-volume-of-the-unit-n-ball, thm-substitution, thm-real-power-laws, def-jordan-inner-and-outer-content]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §2.4(a,e)"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
pipeline_run: null
---

## Statement

For $n\ge1$ and $r\ge0$, $V_n(r)=\pi^{n/2}r^n/\Gamma(n/2+1)$, where $n$ is an integer.

## Facts & Assumptions

**Given:** Positive integer $n$ and radius $r\ge0$.

[F1] One has $V_1(r)=2r$ for $r\ge0$, and for $n\ge2$ and $r\ge0$, $V_n(r)=V_{n-1}(1)\int_{-r}^{r}(r^2-t^2)^{(n-1)/2}\,dt$ ([[thm-volume-recursion-for-closed-euclidean-balls]]).

[F2] For every $n\ge1$, $V_n(1)=\pi^{n/2}/\Gamma(n/2+1)$ ([[cor-volume-of-the-unit-n-ball]]).

## Proof

**Proof technique:** direct.

1.1 If $r=0$, the ball is a singleton of content zero, and the right side is zero because $n\ge1$. [given, cases]

1.2 Suppose $r>0$. For $n=1$, $V_1(r)=2r=rV_1(1)$. For $n\ge2$, substitute $t=ru$ in [F1]; the power and differential contribute $r^{n-1}$ and $r$, so comparison with [F1] at radius $1$ gives $V_n(r)=r^nV_n(1)$. [F1, algebra]

2.1 Insert [F2] into step 1.2 and combine it with the zero-radius case of step 1.1. This gives the displayed formula for every allowed $n,r$. [step 1.1, step 1.2, F2, cases-exhaustive] ∎
