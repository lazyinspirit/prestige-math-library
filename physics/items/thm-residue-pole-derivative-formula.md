---
id: thm-residue-pole-derivative-formula
kind: theorem
title: "Residue formula for a pole of order m"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-residue-isolated-singularity, thm-pole-characterizations, cor-residue-contour-integral-formula, cor-global-cauchy-formula-higher-derivatives]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Jean-Baptiste Campesato, MAT334 course page and notes index"
      url: "https://www.math.toronto.edu/campesat/mat334.html"
    - title: "Jeremy Orloff, MIT 18.04 Topic 7: Taylor and Laurent Series"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/dff6a0c70eefb1e23bb87f8524361801_MIT18_04S18_topic7.pdf"
pipeline_run: null
---

## Statement

If $a$ is a pole of order $m\ge1$ of $f$, then

$$\operatorname{Res}(f,a)=\frac{1}{(m-1)!}\lim_{z\to a}\frac{d^{\,m-1}}{dz^{m-1}}\bigl((z-a)^mf(z)\bigr).$$

Equivalently, if $g$ denotes the holomorphic extension of $(z-a)^mf(z)$ across
$a$, then

$$\operatorname{Res}(f,a)=\frac{g^{(m-1)}(a)}{(m-1)!}.$$

## Facts & Assumptions

**Given:** A pole of order $m\ge1$ of $f$ at $a$.

[L1] If $a$ is a pole of order $m$, then $g(z):=(z-a)^mf(z)$ extends holomorphically across $a$ with $g(a)\ne0$ ([[thm-pole-characterizations]]).

[L2] The residue is the normalized contour integral on every sufficiently small circle around the pole ([[cor-residue-contour-integral-formula]]).

[L3] For a holomorphic function $g$, the integral formula $$g^{(m-1)}(a)=\frac{(m-1)!}{2\pi i}\int_{|\zeta-a|=\rho}\frac{g(\zeta)}{(\zeta-a)^m}\,d\zeta$$ holds on every sufficiently small circle around $a$ ([[cor-global-cauchy-formula-higher-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Let $g$ be the holomorphic extension from [L1]. On a sufficiently small punctured circle one has $f(\zeta)=g(\zeta)(\zeta-a)^{-m}$, so [L2] gives $$\operatorname{Res}(f,a)=\frac{1}{2\pi i}\int_{|\zeta-a|=\rho}\frac{g(\zeta)}{(\zeta-a)^m}\,d\zeta.$$ [L1, L2, algebra]

2.1 Applying [L3] to the same circle gives $$\frac{1}{2\pi i}\int_{|\zeta-a|=\rho}\frac{g(\zeta)}{(\zeta-a)^m}\,d\zeta=\frac{g^{(m-1)}(a)}{(m-1)!},$$ so the displayed residue formula follows. [step 1.1, L3]

3.1 Since $g$ is holomorphic at $a$, the limit of its $(m-1)$st derivative at $a$ is just the value $g^{(m-1)}(a)$, so the derivative-limit form is the same statement. [step 2.1] ∎
