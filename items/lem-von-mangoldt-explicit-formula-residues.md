---
id: lem-von-mangoldt-explicit-formula-residues
kind: lemma
title: "Residues in the von Mangoldt contour shift"
status: published
origin: pipeline
deps: [thm-riemann-zeta-meromorphic-continuation, thm-von-mangoldt-logarithmic-derivative-zeta, thm-trivial-zeros-and-critical-strip, thm-riemann-zeta-functional-equation, thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane, thm-gamma-meromorphic-continuation, cor-gamma-function-has-no-zeros]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Kiran S. Kedlaya, Analytic Number Theory, §10.1"
      url: "https://kskedlaya.org/ant/chapter-10.html"
---

## Statement

For $x>1$, shifting $-\zeta'(s)x^s/(\zeta(s)s)$ left crosses residues
$$x\quad(s=1),\qquad-\frac{x^\rho}{\rho}\quad(s=\rho),\qquad-\frac12\log(1-x^{-2})\quad(s=-2,-4,\ldots),\qquad-\frac{\zeta'(0)}{\zeta(0)}\quad(s=0).$$
Zeros are counted with multiplicity and $x^\rho=\exp(\rho\log x)$ uses real $\log x$.

## Facts & Assumptions

[L1] The zeros of zeta in $\operatorname{Re}s\le0$ occur exactly at the
negative even integers; in particular, $s=0$ is not a zero
([[thm-trivial-zeros-and-critical-strip]]).

[L2] Zeta satisfies
$$\zeta(s)=2^s\pi^{s-1}\sin(\pi s/2)\Gamma(1-s)\zeta(1-s)$$
as an identity of meromorphic functions
([[thm-riemann-zeta-functional-equation]]).

[L3] Gamma has poles only at the nonpositive integers and has no zeros, while
zeta has no zeros on $\operatorname{Re}s\ge1$
([[thm-gamma-meromorphic-continuation]], [[cor-gamma-function-has-no-zeros]],
[[thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane]]).

## Proof

**Given:** $x>1$ and the meromorphic continuation of zeta.

1.1 A simple pole of zeta at $1$ makes $-\zeta'/\zeta$ have residue $1$; a zero $\rho$ of multiplicity $m$ makes it have residue $-m$.  Multiplication by $x^s/s$ gives the first two entries. [given, algebra]

2.1 By [L1], the remaining zeros crossed on the nonpositive real axis occur at $-2k$.  At $s=-2k$, the sine in [L2] has a simple zero, while all its other factors are finite and nonzero by [L3]; hence these zeros are simple.  Their residues sum to $\sum_{k\ge1}x^{-2k}/(2k)=-\tfrac12\log(1-x^{-2})$.  Also by [L1], zeta is nonzero at $0$, so the pole of $1/s$ gives the final entry. [L1, L2, L3, step 1.1, algebra] ∎
