---
id: cor-liouville-theorem-for-plane-harmonic-functions
kind: corollary
title: "A plane harmonic function bounded above or below is constant"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-homologically-simply-connected-complex-domain, prop-star-shaped-plane-domains-are-homologically-simply-connected, thm-harmonic-conjugate-on-homologically-simply-connected-domains, thm-liouville-bounded-entire-function, thm-complex-exponential-is-entire-with-derivative-itself, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-algebra-of-complex-derivatives, thm-zero-complex-derivative-on-a-domain-implies-constant]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
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

A harmonic function on $\mathbb C$ that is bounded above, or bounded below, is
constant.

## Facts & Assumptions

**Given:** A harmonic function $u:\mathbb C\to\mathbb R$.

[L1] The plane $\mathbb C$ is star-shaped and therefore homologically simply connected, so every harmonic function on it has a harmonic conjugate ([[prop-star-shaped-plane-domains-are-homologically-simply-connected]], [[thm-harmonic-conjugate-on-homologically-simply-connected-domains]], [[def-homologically-simply-connected-complex-domain]]).

[L2] Every bounded entire function is constant ([[thm-liouville-bounded-entire-function]]).

[L3] The complex exponential is entire, satisfies $|\exp(x+iy)|=e^x$, and obeys the usual product and chain rules; a holomorphic function with zero derivative on a domain is constant ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-algebra-of-complex-derivatives]], [[thm-zero-complex-derivative-on-a-domain-implies-constant]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $u$ is bounded above. By [L1], choose a harmonic conjugate $v$ and set $F:=u+iv$, a holomorphic function on $\mathbb C$. Then $\exp(F)$ is entire by [L3], and its modulus is $e^{u}$, which is bounded because $u$ is. So [L2] makes $\exp(F)$ constant. [L1, L2, L3]

2.1 Differentiating the identity $\exp(F)\equiv c$ gives $0=(\exp(F))'=\exp(F)F'$. Since an exponential value is never $0$, [L3] gives $F'=0$, and [L3] again makes $F$ constant. Therefore $u=\operatorname{Re}F$ is constant. [step 1.1, L3]

3.1 If instead $u$ is bounded below, then $-u$ is harmonic and bounded above, so step 2.1 applied to $-u$ makes $-u$, and therefore $u$, constant. [step 2.1, algebra] ∎
