---
id: ex-zeta-zero-equals-minus-one-half
kind: example
title: "The functional equation gives $\\zeta(0)=-1/2$ without substituting into a zero-times-pole expression"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-riemann-zeta-functional-equation, thm-riemann-zeta-meromorphic-continuation]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 11 §3"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Example

$$\zeta(0)=-\frac12.$$

## Facts & Assumptions

**Given:** The classical functional equation and the pole at $1$.

[L1] Zeta satisfies
$$\zeta(s)=2^s\pi^{s-1}\sin(\pi s/2)\Gamma(1-s)\zeta(1-s)$$
([[thm-riemann-zeta-functional-equation]]).

[L2] Zeta has a simple residue-one pole at $1$
([[thm-riemann-zeta-meromorphic-continuation]]).

## Verification

**Proof technique:** direct.

1.1 Let $s\to0$ in [L1]. Then $2^s\to1$, $\pi^{s-1}\to\pi^{-1}$, $\sin(\pi s/2)\sim\pi s/2$, and $\Gamma(1-s)\to1$. Also [L2] gives $\zeta(1-s)\sim -1/s$. [L1, L2, given, algebra]

2.1 Multiplying the limits from step 1.1 yields $$\zeta(0)=\lim_{s\to0}2^s\pi^{s-1}\sin(\pi s/2)\Gamma(1-s)\zeta(1-s)=-\frac12.$$ [step 1.1, algebra] ∎
