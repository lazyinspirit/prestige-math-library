---
id: ex-plane-curve-local-ring-not-dvr
kind: example
title: "A cusp local ring is not a DVR"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-localisation-at-a-prime-ideal, thm-equivalent-characterisations-of-a-dvr]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "M. Mustata, Commutative Algebra, Proposition 8.7"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (23.10)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Example

Let $A:=k[t^2,t^3]\subseteq k[t]$, and let $\mathfrak m=(t^2,t^3)\subset A$.
Then the local ring $A_{\mathfrak m}$ is not a discrete valuation ring.

## Facts & Assumptions

**Given:** A field $k$, the cusp ring $A=k[t^2,t^3]$, and the prime ideal $\mathfrak m=(t^2,t^3)$.

[F1] Localisation at a prime ideal means inverting the complement of that prime
([[def-localisation-at-a-prime-ideal]]).

[L1] A nonfield domain is a DVR exactly when it is a one-dimensional Noetherian
local integrally closed domain ([[thm-equivalent-characterisations-of-a-dvr]]).

## Verification

**Proof technique:** direct.

1.1 The element $t\in k[t]$ is integral over $A_{\mathfrak m}$ because it satisfies the monic equation $T^2-t^2=0$ with coefficient $t^2\in A\subseteq A_{\mathfrak m}$. [F1, given, algebra]

2.1 The element $t$ does not belong to $A_{\mathfrak m}$. Indeed, if $t=a/s$ with $a\in A$ and $s\in A\setminus\mathfrak m$, then $st=a\in A$. Since $s\notin\mathfrak m$, its constant term is nonzero, so $s=c+t^2h(t)$ with $c\in k^\times$. Then $st=ct+t^3h(t)$. Every element of $A=k[t^2,t^3]$ is a $k$-linear combination of monomials $t^n$ with $n=0$ or $n\ge2$, so no element of $A$ has a nonzero $t^1$ term. But $ct+t^3h(t)$ does, contradiction. [F1, step 1.1, algebra]

3.1 Thus $A_{\mathfrak m}$ contains an element of its fraction field integral over it that does not lie in the ring. By [L1], $A_{\mathfrak m}$ is not a DVR. [L1, step 1.1, step 2.1] ∎
