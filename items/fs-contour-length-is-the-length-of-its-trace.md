---
id: fs-contour-length-is-the-length-of-its-trace
kind: false-statement
title: "FALSE: contour length depends only on the trace and ignores multiplicity"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-piecewise-c1-paths-have-additive-speed-integral-length, thm-arc-length-is-invariant-under-monotone-reparametrization]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Russell Howell and John Mathews, Complex Analysis, §6.2"
      url: "https://complexanalysis.org/web/sec_contour-integrals.html"
pipeline_run: null
---

## Statement

**False claim.** Two contours with the same trace always have the same length.

## Facts & Assumptions

**Given:** A radius $r>0$, the paths $\gamma(t)=re^{it}$ and $\eta(t)=re^{2it}$ for $0\le t\le2\pi$.

[L1] A piecewise-$C^1$ path has length equal to the integral of its speed ([[cor-piecewise-c1-paths-have-additive-speed-integral-length]]).

[L2] Length is invariant under continuous surjective monotone reparametrization; bijective reparametrization does not add multiple coverings ([[thm-arc-length-is-invariant-under-monotone-reparametrization]]).

## Refutation

**Proof technique:** direct.

1.1 Both traces are the same circle of radius $r$, but their speeds are $r$ and $2r$. [algebra]

2.1 By [L1], $L(\gamma)=2\pi r$ and $L(\eta)=4\pi r$. [step 1.1, L1]

3.1 Since $r>0$, the lengths differ. This does not contradict [L2], because the double covering is not a bijective reparametrization of the single traversal. [step 2.1, L2] ∎
