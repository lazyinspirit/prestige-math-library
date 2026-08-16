---
id: lem-local-composition-of-complex-power-series
kind: lemma
title: "A composition of convergent complex power series has a convergent local power-series expansion when the inner sum maps the centre to the outer centre"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-cauchy-products-of-complex-power-series, thm-complex-power-series-converge-locally-uniformly, thm-absolute-convergence-of-complex-series]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Power-series supplementary notes, Colby College"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
pipeline_run: null
---

## Statement

Let $H(z)=\sum_{n\ge1}h_n(z-a)^n$ converge near $a$, and let $G(w)=\sum_{m\ge0}g_mw^m$ converge for $|w|<R$ for some $R>0$. If $H(a)=0$, then $G(H(z))$ has a convergent power-series expansion about $a$ on some neighbourhood of $a$. The conclusion includes constant $H$.

## Facts & Assumptions

**Given:** Power series $H,G$ as in the Statement.

[L1] Products of locally convergent complex power series are given by their Cauchy-product coefficients ([[prop-cauchy-products-of-complex-power-series]]).

[L2] A complex power series converges absolutely on every closed subdisc strictly inside its radius ([[thm-complex-power-series-converge-locally-uniformly]]).

[L3] An absolutely convergent complex series may be rearranged without changing its sum ([[thm-absolute-convergence-of-complex-series]]).

## Proof

**Proof technique:** direct.

1.1 Choose $\rho>0$ inside the radius of $H$. By [L2], $A=\sum_{n\ge1}|h_n|\rho^n$ is finite. Since $R>0$, choose $0<r\le\rho$ and $0\le q<R$ with $(r/\rho)A\le q$; then $\sum_{n\ge1}|h_n|r^n\le(r/\rho)A\le q$. If $A=0$, then $H\equiv0$ and this estimate holds with $q=0$. [L2, choose, algebra]

2.1 Repeated use of [L1] expands each $H(z)^m$ as a power series about $a$. Its absolute coefficient sum at radius $r$ is bounded by $q^m$ from step 1.1, and [L2] applied to $G$ gives convergence of the scalar majorant $\sum |g_m|q^m$. [step 1.1, L1, L2]

3.1 The resulting double series is absolutely convergent, so [L3] regroups it by powers of $z-a$ and produces the desired local series. If $H\equiv0$, it reduces to the constant $G(0)$. [step 2.1, L3] ∎
