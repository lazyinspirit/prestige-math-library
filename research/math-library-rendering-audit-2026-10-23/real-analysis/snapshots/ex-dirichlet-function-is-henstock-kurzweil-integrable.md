---
id: ex-dirichlet-function-is-henstock-kurzweil-integrable
kind: example
title: "The indicator of the irrationals is Henstock–Kurzweil integrable with integral $1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-henstock-kurzweil-integral-on-a-compact-interval, thm-cousins-lemma-for-gauges, thm-rationals-countable, def-dirichlet-and-thomae-functions, lem-q-and-irrationals-dense-r, def-partition-and-refinement, def-darboux-sums, def-darboux-integral]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Alessandro Fonda, The Kurzweil-Henstock Integral for Undergraduates, Ch. 1"
      url: "https://dmi.units.it/~fonda/p2017_book_KH.pdf"
    - title: "Andrew Bruckner, Judith Bruckner and Brian Thomson, Real Analysis, Exercise 1:21.2"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
pipeline_run: null
---

## Example

Let $d:[0,1]\to\mathbb R$ be the indicator of the irrationals. The indicator of the irrationals is Henstock–Kurzweil integrable with integral $1$, but it is not Riemann integrable.

The indicator of the irrationals is Henstock–Kurzweil integrable with integral $1$ and is not Riemann integrable.

The indicator of the irrationals is Henstock–Kurzweil integrable with integral $1$.

## Facts & Assumptions

**Given:** The function $d(x)=1$ for irrational $x$ and $d(x)=0$ for rational $x$.

[L1] The rationals are countably infinite: $\mathbb Q\approx\mathbb N$ ([[thm-rationals-countable]]).

[L2] The rationals and the irrationals are both dense in $\mathbb R$ ([[lem-q-and-irrationals-dense-r]]).

[L3] Darboux integrability means equality of the lower and upper Darboux integrals ([[def-darboux-integral]]).

[L4] HK integrability requires one gauge to control every fine tagged Riemann sum ([[def-henstock-kurzweil-integral-on-a-compact-interval]]).

## Verification

**Proof technique:** direct.

1.1 Enumerate the rationals in $[0,1]$ as $(q_k)$ using [L1]; for a requested $\varepsilon>0$, choose the gauge at $q_k$ below $\varepsilon 2^{-k-3}$ and choose any fixed positive gauge at irrational tags. [given, L1]

2.1 In a fine partition, a fixed tag occurs on at most two cells, so the total length of rational-tagged cells is below $\sum_k4\varepsilon2^{-k-3}=\varepsilon$; hence $|S(d,P)-1|<\varepsilon$, and [L4] gives the stated HK value. [step 1.1, L4, algebra]

3.1 By [L2], every partition cell contains points where $d=0$ and points where $d=1$, so every lower Darboux sum is $0$ and every upper Darboux sum is $1$; [L3] therefore rules out Riemann integrability. [step 2.1, L2, L3, algebra] ∎
