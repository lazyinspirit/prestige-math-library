---
id: thm-every-derivative-is-henstock-kurzweil-integrable
kind: theorem
title: "Every derivative is Henstock–Kurzweil integrable and satisfies Newton–Leibniz"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-henstock-kurzweil-integral-on-a-compact-interval, def-derivative, cor-archimedean-reciprocal, thm-well-ordering-principle, thm-cousins-lemma-for-gauges, lem-finite-sum-laws]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "Every derivative is HK integrable"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Alessandro Fonda, The Kurzweil-Henstock Integral for Undergraduates, Ch. 1"
      url: "https://dmi.units.it/~fonda/p2017_book_KH.pdf"
    - title: "Andrew Bruckner, Judith Bruckner and Brian Thomson, Real Analysis, Sections 1.2 and 1.21"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
pipeline_run: null
---

## Statement

Let $a<b$, let $F:[a,b]\to\mathbb R$ be differentiable in the domain-relative sense, including one-sided endpoint derivatives, and put $f=F'$. Every derivative is Henstock–Kurzweil integrable and its integral equals the endpoint increment:

$$\int_a^b f=F(b)-F(a).$$

No boundedness or prior integrability of $f$ is assumed.

Every derivative is Henstock–Kurzweil integrable and its integral is the endpoint increment. Every derivative is Henstock–Kurzweil integrable and evaluates by endpoint difference.

Every derivative is Henstock–Kurzweil integrable and its integral equals the endpoint increment. Every derivative is Henstock–Kurzweil integrable.

## Facts & Assumptions

**Given:** The differentiable function $F$ and $f=F'$.

[L1] The derivative at a point is the limit of the difference quotient there, including the domain-relative endpoint cases ([[def-derivative]]).

[L2] For every positive real $r$, there is a natural $n\ge1$ with $1/n<r$ ([[cor-archimedean-reciprocal]]).

[L3] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

[L4] Finite sums telescope: $\sum_{i=1}^m(c_i-c_{i-1})=c_m-c_0$ ([[lem-finite-sum-laws]]).

## Proof

**Proof technique:** direct.

1.1 Given $\varepsilon>0$, put $\eta=\varepsilon/(2(b-a))$. For each $\xi\in[a,b]$, let $N(\xi)$ be the least natural $n\ge1$ such that the derivative estimate with error $\eta$ holds whenever $0<|y-\xi|<1/n$ in the domain. Differentiability and [L2] make this set nonempty, and [L3] makes its least element unique; hence $\delta(\xi)=1/N(\xi)$ is a gauge defined without an uncountable choice. [given, L1, L2, L3]

2.1 For a fine tagged cell, split $F(v_i)-F(u_i)$ at its tag, apply the two estimates from step 1.1, sum over all cells, and telescope by [L4]; the total error is below $2\eta(b-a)=\varepsilon$, proving the displayed HK value. [step 1.1, L4, algebra] ∎
