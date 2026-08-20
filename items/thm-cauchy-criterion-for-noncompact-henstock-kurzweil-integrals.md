---
id: thm-cauchy-criterion-for-noncompact-henstock-kurzweil-integrals
kind: theorem
title: "The Cauchy criterion for a Henstock–Kurzweil integral at a missing endpoint"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-henstock-kurzweil-integral-on-a-noncompact-interval, thm-henstock-kurzweil-integrability-on-subintervals-and-additivity, thm-cauchy-criterion-via-lub, def-one-sided-limits, def-limits-at-infinity]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alessandro Fonda, The Kurzweil-Henstock Integral for Undergraduates, Ch. 1"
      url: "https://dmi.units.it/~fonda/p2017_book_KH.pdf"
    - title: "Andrew Bruckner, Judith Bruckner and Brian Thomson, Real Analysis, Section 1.21"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
pipeline_run: null
---

## Statement

Let $f$ be HK integrable on every compact subinterval of $[a,b)$, where $b$ may be finite or $+\infty$. Its noncompact integral exists if and only if for every $\varepsilon>0$ there is a truncation point $c_0$ such that

$$\left|\int_c^d f\right|<\varepsilon$$

whenever $c_0<c<d<b$. Thus noncompact integrability is equivalent to uniformly small tail integrals. The reflected criterion holds at a missing left endpoint.

Noncompact integrability is equivalent to uniformly small tail integrals.

A missing finite-endpoint integral exists exactly when all sufficiently late tail integrals are small.

## Facts & Assumptions

**Given:** The locally HK-integrable function and a finite or infinite missing endpoint.

[L1] For points $u,v,w$, $\int_u^w f=\int_u^v f+\int_v^w f$ whenever the compact pieces are integrable ([[thm-henstock-kurzweil-integrability-on-subintervals-and-additivity]]).

[L2] Every Cauchy sequence of reals converges to a real ([[thm-cauchy-criterion-via-lub]]).

[L3] Finite-endpoint limits are defined by one-sided neighborhood control ([[def-one-sided-limits]]).

[L4] A limit at infinity is defined by eventual control beyond a real threshold ([[def-limits-at-infinity]]).

## Proof

**Proof technique:** direct.

1.1 For the forward direction, the truncation primitive $A(c)=\int_a^c f$ has a finite limit, so late values $A(c),A(d)$ are close; [L1] identifies their difference with $\int_c^d f$. [given, L1]

2.1 For the reverse direction, take the explicit cofinal sequence $c_n=b-(b-a)/(n+1)$ at a finite endpoint, or $c_n=a+n$ at $+\infty$. The tail condition makes $A(c_n)$ Cauchy, so [L2] gives a finite limit $I$. For an arbitrary sufficiently late $c$, choose $n$ with $c_n>c$; then [L1] gives $|A(c)-I|\le|\int_c^{c_n}f|+|A(c_n)-I|$, and the two terms are small. This is exactly the limit in [L3] or [L4]; reflection handles a missing left endpoint. [given, L1, L2, L3, L4, algebra] ∎
