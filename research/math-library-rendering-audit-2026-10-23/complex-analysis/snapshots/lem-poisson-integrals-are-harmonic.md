---
id: lem-poisson-integrals-are-harmonic
kind: lemma
title: "Poisson integrals are harmonic on the unit disc"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-poisson-kernel-on-the-disc, def-poisson-integral-on-the-disc, thm-holomorphic-parameter-riemann-integral, cor-holomorphic-functions-are-real-analytic-and-smooth, thm-c2-holomorphic-components-are-harmonic]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sigurdur Helgason, MIT 18.112 Lecture 16: Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-112-functions-of-a-complex-variable-fall-2008/414780e0991d20cd338320d3784fae4d_lecture16.pdf"
pipeline_run: null
---

## Statement

For every continuous boundary datum $\varphi:\partial\mathbb D\to\mathbb R$, the
Poisson integral $P[\varphi]$ is harmonic on $\mathbb D$.

## Facts & Assumptions

**Given:** A continuous function $\varphi:\partial\mathbb D\to\mathbb R$.

[L1] For fixed $t$, the function $$H_t(z):=\frac{e^{it}+z}{e^{it}-z}\,\varphi(e^{it})$$ is holomorphic on $\mathbb D$, and the family is jointly continuous in $(t,z)$ on $[0,2\pi]\times\mathbb D$; therefore $$F(z):=\frac{1}{2\pi}\int_0^{2\pi}H_t(z)\,dt$$ is holomorphic on $\mathbb D$ ([[thm-holomorphic-parameter-riemann-integral]]).

[L2] The real part of $H_t(z)$ is $P(z,e^{it})\varphi(e^{it})$, by the defining algebra of the Poisson kernel ([[def-poisson-kernel-on-the-disc]]).

[L3] Holomorphic functions are smooth in their real coordinates, and the $C^2$ real part of a holomorphic function is harmonic ([[cor-holomorphic-functions-are-real-analytic-and-smooth]], [[thm-c2-holomorphic-components-are-harmonic]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the parameter integral $$F(z)=\frac{1}{2\pi}\int_0^{2\pi}\frac{e^{it}+z}{e^{it}-z}\,\varphi(e^{it})\,dt$$ is holomorphic on $\mathbb D$. [L1]

2.1 Taking real parts under the integral and using [L2] gives $$\operatorname{Re}F(z)=\frac{1}{2\pi}\int_0^{2\pi}P(z,e^{it})\,\varphi(e^{it})\,dt=P[\varphi](z).$$ [step 1.1, L2]

3.1 By [L3], the real part of the holomorphic function $F$ is harmonic. Since step 2.1 identifies that real part with $P[\varphi]$, the Poisson integral is harmonic on $\mathbb D$. [step 1.1, step 2.1, L3] ∎
