---
id: lem-perron-kernel
kind: lemma
title: "The symmetric Perron kernel"
status: published
origin: pipeline
deps: []
proof_strategy: contour
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

For $c,y>0$, define the integral by symmetric truncation.  Then
$$\lim_{T\to\infty}\frac1{2\pi i}\int_{c-iT}^{c+iT}\frac{y^s}{s}\,ds=\begin{cases}0&0<y<1,\\1/2&y=1,\\1&y>1.\end{cases}$$

## Proof

**Given:** $c,y>0$ and the displayed symmetric truncations.

1.1 If $0<y<1$, close the segment to the right by a semicircle and let its radius tend to infinity; $y^s$ decays there and no pole is enclosed, so the limit is $0$.  If $y>1$, close to the left instead; the enclosed simple pole at $0$ has residue $1$, so the limit is $1$. [given, cases]

2.1 If $y=1$, the integrand is $1/s$, and direct parametrisation gives $(2\pi)^{-1}\int_{-T}^{T}c(c^2+t^2)^{-1}\,dt\to1/2$.  These three cases prove the claim. [step 1.1, algebra] ∎
