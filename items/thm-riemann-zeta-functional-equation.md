---
id: thm-riemann-zeta-functional-equation
kind: theorem
title: "The Riemann zeta function satisfies the classical sine-gamma functional equation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-completed-riemann-zeta-functional-equation, thm-euler-reflection-formula, thm-legendre-duplication-formula]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 6 §2.1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 12 §7"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Statement

For all $s\in\mathbb C$,

$$\zeta(s)=2^s\pi^{s-1}\sin(\pi s/2)\Gamma(1-s)\zeta(1-s),$$

as an identity of meromorphic functions.

## Facts & Assumptions

**Given:** The completed functional equation.

[L1] The completed zeta function satisfies
$$\pi^{-s/2}\Gamma(s/2)\zeta(s)=\pi^{-(1-s)/2}\Gamma((1-s)/2)\zeta(1-s)$$
([[thm-completed-riemann-zeta-functional-equation]]).

[L2] Euler's reflection formula is
$$\Gamma(z)\Gamma(1-z)=\frac{\pi}{\sin(\pi z)}$$
([[thm-euler-reflection-formula]]).

[L3] Legendre's duplication formula is
$$\Gamma(z)\Gamma(z+1/2)=2^{1-2z}\sqrt{\pi}\,\Gamma(2z)$$
([[thm-legendre-duplication-formula]]).

## Proof

**Proof technique:** direct.

1.1 Rearranging [L1] gives $$\zeta(s)=\pi^{s-1/2}\frac{\Gamma((1-s)/2)}{\Gamma(s/2)}\zeta(1-s).$$ [L1, given, algebra]

1.2 Apply [L3] with $z=(1-s)/2$ to obtain $$\Gamma((1-s)/2)\Gamma(1-s/2)=2^s\sqrt{\pi}\,\Gamma(1-s).$$ Apply [L2] with $z=s/2$ to obtain $$\Gamma(s/2)\Gamma(1-s/2)=\frac{\pi}{\sin(\pi s/2)}.$$ Dividing the first identity by the second yields $$\pi^{s-1/2}\frac{\Gamma((1-s)/2)}{\Gamma(s/2)}=2^s\pi^{s-1}\sin(\pi s/2)\Gamma(1-s).$$ [L2, L3, algebra]

2.1 Substitute the factor identity from step 1.2 into step 1.1. This gives $$\zeta(s)=2^s\pi^{s-1}\sin(\pi s/2)\Gamma(1-s)\zeta(1-s),$$ which is the classical functional equation. [step 1.1, step 1.2, algebra] ∎
