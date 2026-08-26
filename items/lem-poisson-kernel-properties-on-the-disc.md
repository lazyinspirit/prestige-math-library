---
id: lem-poisson-kernel-properties-on-the-disc
kind: lemma
title: "The Poisson kernel is positive, has total mass one, and concentrates at a boundary point"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-poisson-kernel-on-the-disc, cor-holomorphic-mean-value-property, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-complex-polynomials-and-rational-functions-are-holomorphic]
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
    - title: "Jeremy Orloff, MIT 18.04 Topic 5: Introduction to Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/2e739bb156efb0bc7103fc43d0897dda_MIT18_04S18_topic5.pdf"
    - title: "Sigurdur Helgason, MIT 18.112 Lecture 16: Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-112-functions-of-a-complex-variable-fall-2008/414780e0991d20cd338320d3784fae4d_lecture16.pdf"
pipeline_run: null
---

## Statement

For $0\le r<1$, the Poisson kernel

$$P_r(\theta)=\frac{1-r^2}{1-2r\cos\theta+r^2}$$

has the following properties:

1. $P_r(\theta)>0$ for every $\theta$;
2. $\frac{1}{2\pi}\int_0^{2\pi}P_r(\theta)\,d\theta=1$;
3. for every $\delta\in(0,\pi]$,
   $$\sup_{\delta\le |\theta|\le\pi}P_r(\theta)\longrightarrow0\qquad(r\to1^-).$$

## Facts & Assumptions

**Given:** A radius $0\le r<1$.

[L1] The Poisson kernel is the real part of the Möbius function $$\frac{1+re^{i\theta}}{1-re^{i\theta}},$$ because multiplying numerator and denominator by $1-re^{-i\theta}$ gives the displayed quotient with real part $(1-r^2)/(1-2r\cos\theta+r^2)$ ([[def-poisson-kernel-on-the-disc]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L2] The function $w\mapsto\frac{1+rw}{1-rw}$ is holomorphic on the unit disc ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]) and equals its average on every unit circle by the holomorphic mean-value property ([[cor-holomorphic-mean-value-property]]).

## Proof

**Proof technique:** direct.

1.1 Since $1-r^2>0$ and $$1-2r\cos\theta+r^2=(1-r)^2+2r(1-\cos\theta)>0,$$ the quotient $P_r(\theta)$ is positive for every $\theta$. [given, algebra]

1.2 By [L2], $$1=\frac{1}{2\pi}\int_0^{2\pi}\frac{1+re^{i\theta}}{1-re^{i\theta}}\,d\theta.$$ Taking real parts and using [L1] gives $\frac{1}{2\pi}\int_0^{2\pi}P_r(\theta)\,d\theta=1$. [L1, L2]

2.1 If $\delta\le|\theta|\le\pi$, then $\cos\theta\le\cos\delta$, so $$0<P_r(\theta)\le\frac{1-r^2}{1-2r\cos\delta+r^2}.$$ The denominator tends to $2(1-\cos\delta)>0$ as $r\to1^-$, while the numerator tends to $0$, so the right-hand side tends to $0$, proving the uniform concentration estimate on representatives in $[-\pi,\pi]$. Periodicity gives the equivalent formulation using circular distance from $0$. [step 1.1, algebra] ∎
