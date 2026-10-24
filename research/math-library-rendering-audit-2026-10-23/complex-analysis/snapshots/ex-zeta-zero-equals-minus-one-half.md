---
id: ex-zeta-zero-equals-minus-one-half
kind: example
title: "The fractional-part continuation gives $\\zeta(0)=-1/2$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-riemann-zeta-continuation-to-the-right-half-plane]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 11 §3"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Example

$$\zeta(0)=-\frac12.$$

## Facts & Assumptions

**Given:** The fractional-part continuation of the zeta function.

[L1] For $\operatorname{Re}s>0$ and $s\ne1$, $$\zeta(s)=\frac{s}{s-1}-s\int_1^\infty\{x\}x^{-s-1}\,dx$$ ([[thm-riemann-zeta-continuation-to-the-right-half-plane]]).

Here $\{x\}=x-\lfloor x\rfloor$.

## Verification

**Proof technique:** direct.

1.1 Put $q(x)=\{x\}-1/2$ and $Q(x)=\int_1^x q(t)\,dt$. The function $q$ has integral zero over each interval $[n,n+1]$, so $Q$ is bounded. Integration by parts shows that, for $\operatorname{Re}s>-1$, $$\int_1^\infty q(x)x^{-s-1}\,dx=(s+1)\int_1^\infty Q(x)x^{-s-2}\,dx.$$ The integral on the right converges locally uniformly in this half-plane and defines a holomorphic function there. [given, algebra]

2.1 For $\operatorname{Re}s>0$, $$\int_1^\infty\{x\}x^{-s-1}\,dx=\frac{1}{2s}+\int_1^\infty q(x)x^{-s-1}\,dx.$$ Substituting this into [L1] gives $$\zeta(s)=\frac{s}{s-1}-\frac12-s\int_1^\infty q(x)x^{-s-1}\,dx.$$ By step 1.1, the right-hand side extends holomorphically across $s=0$ and has value $-1/2$ there. Uniqueness of analytic continuation identifies this value with $\zeta(0)$. [L1, step 1.1, algebra] ∎
