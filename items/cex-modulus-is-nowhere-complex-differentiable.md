---
id: cex-modulus-is-nowhere-complex-differentiable
kind: counterexample
title: "$z\\mapsto|z|$ is nowhere complex differentiable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann, lem-complex-conjugation-and-modulus-laws]
aliases: []
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: frontier-12
---

## Statement refuted

The modulus map $z\mapsto|z|$ is complex differentiable somewhere in $\mathbb C$.

## Facts & Assumptions
**Given:** $f(z)=|z|$.

[L1] Complex differentiability implies real total differentiability and the Cauchy–Riemann equations ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[L2] $|z|^2=z\bar z$, the modulus is nonnegative, and $|z|=0$ exactly when $z=0$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Counterexample

**Proof technique:** cases.

1.1 At $0$, for nonzero real $t$ the difference quotient is $|t|/t$, which equals $1$ for $t>0$ and $-1$ for $t<0$. Thus no complex derivative exists at $0$. [assume-case zero, L2]

1.2 Let $z=x+iy\ne0$ and put $r=|z|>0$. Rationalizing the real-coordinate increments gives $$u_x=\lim_{t\to0}\frac{\sqrt{(x+t)^2+y^2}-r}{t}=\lim_{t\to0}\frac{2x+t}{\sqrt{(x+t)^2+y^2}+r}=\frac{x}{r},$$ and similarly $u_y=y/r$, while the imaginary component $v$ is identically zero. [assume-case nonzero, L2, algebra]

2.1 If $f$ were complex differentiable at this nonzero point, [L1] would force $u_x=v_y=0$ and $u_y=-v_x=0$. Step 1.2 would then give $x=y=0$, contradicting $z\ne0$. [step 1.2, L1]

3.1 Step 1.1 covers the origin and step 2.1 covers every nonzero point. Hence the modulus map is nowhere complex differentiable. [step 1.1, step 2.1, cases-exhaustive] ∎
