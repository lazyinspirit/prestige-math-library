---
id: thm-legendre-duplication-formula
kind: theorem
title: "Legendre's duplication formula"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-gauss-multiplication-formula]
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

For every $z\in\mathbb C$ away from the poles,

$$\Gamma(z)\Gamma\!\left(z+\frac12\right)=2^{1-2z}\sqrt{\pi}\,\Gamma(2z).$$

## Facts & Assumptions

**Given:** Gauss's multiplication formula.

[L1] For $m=2$,
$\Gamma(z)\Gamma(z+1/2)=(2\pi)^{1/2}2^{1/2-2z}\Gamma(2z)$
([[thm-gauss-multiplication-formula]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] with $m=2$. This gives $\Gamma(z)\Gamma(z+1/2)=(2\pi)^{1/2}2^{1/2-2z}\Gamma(2z)$. [L1, given]

2.1 Step 1.1 is exactly the duplication formula after rewriting $(2\pi)^{1/2}2^{1/2-2z}$ as $2^{1-2z}\sqrt{\pi}$. [L1, algebra] ∎
