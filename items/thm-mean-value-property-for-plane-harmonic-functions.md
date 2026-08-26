---
id: thm-mean-value-property-for-plane-harmonic-functions
kind: theorem
title: "Plane harmonic functions satisfy the mean-value property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-mean-value-property-for-plane-functions,
       thm-harmonic-conjugate-on-homologically-simply-connected-domains,
       prop-star-shaped-plane-domains-are-homologically-simply-connected,
       cor-holomorphic-mean-value-property]
aliases: []
landmark: false
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
    - title: "Jeremy Orloff, MIT 18.04 Topic 5: Introduction to Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/2e739bb156efb0bc7103fc43d0897dda_MIT18_04S18_topic5.pdf"
    - title: "Sigurdur Helgason, MIT 18.112 Lecture 16: Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-112-functions-of-a-complex-variable-fall-2008/414780e0991d20cd338320d3784fae4d_lecture16.pdf"
pipeline_run: null
---

## Statement

Every plane harmonic function satisfies both the circle and disc mean-value
properties of [[def-mean-value-property-for-plane-functions]].

## Facts & Assumptions

**Given:** A harmonic function $u$ on an open set $\Omega$, a point $a\in\Omega$, and a radius $r>0$ with $\overline{D(a,r)}\subseteq\Omega$.

[L1] Every open disc is star-shaped and therefore homologically simply connected, and every harmonic function on such a domain is the real part of a holomorphic function ([[prop-star-shaped-plane-domains-are-homologically-simply-connected]], [[thm-harmonic-conjugate-on-homologically-simply-connected-domains]]).

[L2] A holomorphic function equals its average on every smaller concentric circle ([[cor-holomorphic-mean-value-property]]).

## Proof

**Proof technique:** direct.

1.1 Because the closed disc $\overline{D(a,r)}$ lies in the open set $\Omega$, choose $R>r$ with $D(a,R)\subseteq\Omega$. The restriction of $u$ to this disc is harmonic, so [L1] gives a holomorphic function $F$ on $D(a,R)$ with $\operatorname{Re}F=u$ there. [L1, choose]

2.1 For every $0<t\le r$, applying [L2] to $F$ on the circle of radius $t$ and taking real parts gives $$u(a)=\frac{1}{2\pi}\int_0^{2\pi}u(a+t e^{i\theta})\,d\theta.$$ [step 1.1, L2]

3.1 The circle formula of the definition is step 2.1 at $t=r$. [step 2.1]

4.1 Multiplying the identity of step 2.1 by $2t/r^2$ and integrating from $0$ to $r$ gives the disc formula of the definition, because $\frac{2}{r^2}\int_0^r t\,dt=1$. [step 2.1, algebra] ∎
