---
id: ex-poisson-jensen-with-a-repeated-zero
kind: example
title: "A repeated zero contributes its Green kernel twice"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-poisson-jensen-formula-meromorphic-function]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §1"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
---

## Example

Fix $b,R\in\mathbb C\times(0,\infty)$ with $0<|b|<R$, and let
$f(z)=(z-b)^2$ on a neighborhood of $|z|\le R$. The Poisson–Jensen formula
contains the zero term $-2G_R(z,b)$. At the centre its Jensen correction is
$2\log(R/|b|)$.

## Verification

**Given:** $0<|b|<R$ and $f(z)=(z-b)^2$.

[F1] In the meromorphic Poisson–Jensen formula each zero contributes its multiplicity times $-G_R(z,b)$ ([[thm-poisson-jensen-formula-meromorphic-function]]).

1.1 The only zero in the radius-$R$ disc is $b$, with multiplicity two; there are no poles or boundary divisor points, and $f(0)=b^2\ne0$. [given, algebra]

2.1 By [F1], Poisson–Jensen therefore reads $2\log|z-b|=\frac1{2\pi}\int_0^{2\pi}\frac{R^2-|z|^2}{|Re^{it}-z|^2}\,2\log|Re^{it}-b|\,dt-2G_R(z,b)$ for $|z|<R$ with $z\ne b$. The coefficient is exactly two because the local factor is squared. [F1, step 1.1, algebra]

3.1 At $z=0$, $G_R(0,b)=\log(R/|b|)$. Also $Re^{it}-b=Re^{it}(1-(b/R)e^{-it})$, and the convergent logarithm series has zero angular mean, so the boundary mean of $\log|f|$ is $2\log R$. The formula becomes $2\log|b|=2\log R-2\log(R/|b|)$, displaying the stated centre correction. [F1, step 2.1, algebra] ∎
