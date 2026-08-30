---
id: thm-gauss-multiplication-formula
kind: theorem
title: "Gauss's multiplication formula"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-gamma-weierstrass-product,
       thm-euler-limit-formula-for-gamma,
       thm-real-stirling-formula]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 7 §5"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Statement

For every integer $m\ge1$ and every $z\in\mathbb C$ away from the poles of the
factors,

$$\prod_{k=0}^{m-1}\Gamma\!\left(z+\frac{k}{m}\right)=(2\pi)^{(m-1)/2}m^{1/2-mz}\Gamma(mz).$$

## Facts & Assumptions

**Given:** An integer $m\ge1$ and a complex number $z$ off the poles.

[L1] Euler's limit formula holds for Gamma
([[thm-euler-limit-formula-for-gamma]]).

[L2] Real Stirling gives
$n!\sim\sqrt{2\pi n}\,(n/e)^n$ as $n\to\infty$
([[thm-real-stirling-formula]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to each factor $\Gamma(z+k/m)$ and multiply. The denominator collapses by $$\prod_{k=0}^{m-1}\prod_{j=0}^{n}\left(z+\frac{k}{m}+j\right) =m^{-m(n+1)}\prod_{r=0}^{m(n+1)-1}(mz+r).$$ Therefore $$\prod_{k=0}^{m-1}\Gamma\!\left(z+\frac{k}{m}\right) =\Gamma(mz)\lim_{n\to\infty} \frac{(n!)^m\,m^{m(n+1)}\,n^{mz+(m-1)/2}} {(m(n+1)-1)!\,(m(n+1)-1)^{mz}}.$$ [L1, given, algebra]

2.1 Apply [L2] to the factorial ratio in step 1.1. After the standard cancellation of the exponential and power terms, the limit becomes $(2\pi)^{(m-1)/2}m^{1/2-mz}$. Substituting this into step 1.1 yields the displayed multiplication formula. [step 1.1, L2, algebra] ∎
