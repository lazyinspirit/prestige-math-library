---
id: fs-continuation-along-same-endpoint-paths-always-agrees
kind: false-statement
title: "FALSE: continuation along two paths with the same endpoints always agrees"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-logarithm-continuation-around-the-unit-circle-shifts-by-two-pi-i]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 8 §1.4"
      url: "https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Statement

**False claim.** Analytic continuation along two paths with the same endpoints
always gives the same terminal germ.

## Facts & Assumptions

**Given:** The logarithm loop example.

[L1] Starting from the principal logarithm germ at $1$, one loop once around the
origin ends at the germ of $\operatorname{Log}+2\pi i$ rather than at the
initial germ
([[ex-logarithm-continuation-around-the-unit-circle-shifts-by-two-pi-i]]).

## Refutation

**Proof technique:** direct.

1.1 Compare the constant path at $1$ with the once-around loop based at $1$. These two paths have the same endpoints, but [L1] gives different terminal germs. [L1]

2.1 Therefore the universal claim is false. [step 1.1] ∎
