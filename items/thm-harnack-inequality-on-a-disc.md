---
id: thm-harnack-inequality-on-a-disc
kind: theorem
title: "Positive harmonic functions on a disc satisfy Harnack's inequality"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-poisson-kernel-properties-on-the-disc, thm-poisson-representation-for-disc-harmonic-functions, thm-mean-value-property-for-plane-harmonic-functions]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Sigurdur Helgason, MIT 18.112 Lecture 16: Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-112-functions-of-a-complex-variable-fall-2008/414780e0991d20cd338320d3784fae4d_lecture16.pdf"
pipeline_run: null
---

## Statement

Let $u$ be positive and harmonic on a neighbourhood of $\overline{D(a,R)}$, and
let $z$ satisfy $|z-a|=\rho<R$. Then

$$\frac{R-\rho}{R+\rho}\,u(a)\le u(z)\le \frac{R+\rho}{R-\rho}\,u(a).$$

In particular, for every $r<R$, the values of $u$ on $\overline{D(a,r)}$ are
bounded above and below by fixed multiples of $u(a)$.

## Facts & Assumptions

**Given:** A positive harmonic function $u$ on a neighbourhood of $\overline{D(a,R)}$ and a point $z=a+\rho e^{i\phi}$ with $0\le\rho<R$.

[L1] The Poisson representation on the radius-$R$ circle is $$u(z)=\frac{1}{2\pi}\int_0^{2\pi}\frac{R^2-\rho^2}{R^2-2R\rho\cos(\phi-t)+\rho^2}\,u(a+Re^{it})\,dt$$ ([[thm-poisson-representation-for-disc-harmonic-functions]]).

[L2] The center value is the average on the radius-$R$ circle: $$u(a)=\frac{1}{2\pi}\int_0^{2\pi}u(a+Re^{it})\,dt$$ ([[thm-mean-value-property-for-plane-harmonic-functions]]).

## Proof

**Proof technique:** direct.

1.1 For every $t$, the denominator in [L1] lies between $(R-\rho)^2$ and $(R+\rho)^2$, so the Poisson kernel there satisfies $$\frac{R-\rho}{R+\rho}\le\frac{R^2-\rho^2}{R^2-2R\rho\cos(\phi-t)+\rho^2}\le\frac{R+\rho}{R-\rho}.$$ [given, algebra]

2.1 Multiplying the bounds of step 1.1 by the positive boundary values $u(a+Re^{it})$ and integrating, [L1] and [L2] give $$\frac{R-\rho}{R+\rho}\,u(a)\le u(z)\le \frac{R+\rho}{R-\rho}\,u(a).$$ [step 1.1, L1, L2]

3.1 The constants in step 2.1 depend only on $\rho/R$, so the same bound holds for every $|z-a|\le r<R$ after replacing $\rho$ by $r$. [step 2.1, algebra] ∎
