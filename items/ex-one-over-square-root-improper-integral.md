---
id: ex-one-over-square-root-improper-integral
kind: example
title: "$\int_0^1 x^{-1/2}\,dx=2$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-improper-p-test-rational,
       lem-truncated-integrals-of-rational-powers,
       def-improper-integral-at-a-finite-endpoint,
       def-rational-power, thm-nth-roots-exist, def-darboux-sums]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Example 8.3.1"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Example

The endpoint-singular integral satisfies
$$\int_0^1\frac{dx}{\sqrt{x}}=2.$$

## Facts & Assumptions

**Given:** The integrand $x^{-1/2}$ on $(0,1]$.

[L1] The rational $p$-test gives convergence at zero when $p<1$ ([[thm-improper-p-test-rational]]).

[L2] The truncated power formula evaluates proper integrals ([[lem-truncated-integrals-of-rational-powers]]).

## Verification

**Proof technique:** computation.

1.1 Since $1/2<1$, convergence follows from [L1]. For $0<c<1$, [L2] gives
$$\int_c^1x^{-1/2}dx=2(1-\sqrt c).$$
As $c\downarrow0$, $\sqrt c\to0$, so the limit is two.

2.1 This is not a proper Riemann integral on $[0,1]$: the displayed integrand is unbounded at zero, whereas every properly Riemann-integrable function is bounded. ∎
