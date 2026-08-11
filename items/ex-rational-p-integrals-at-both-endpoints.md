---
id: ex-rational-p-integrals-at-both-endpoints
kind: example
title: "The rational $p$-threshold reverses between zero and infinity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-improper-p-test-rational,
       lem-truncated-integrals-of-rational-powers,
       ex-one-over-square-root-improper-integral]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Examples 3.4.1–3"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Example

The exponents $2$ and $1/2$ display the opposite convergence thresholds:
$$\int_1^\infty x^{-2}dx=1,\qquad \int_0^1x^{-2}dx\text{ diverges},$$
while
$$\int_0^1x^{-1/2}dx=2,\qquad \int_1^\infty x^{-1/2}dx\text{ diverges}.$$

## Facts & Assumptions

**Given:** The two rational exponents $2$ and $1/2$.

[L1] At infinity the $p$-integral converges exactly for $p>1$, while at zero it converges exactly for $p<1$ ([[thm-improper-p-test-rational]]).

[L2] Convergent values follow from the truncated rational-power formula ([[lem-truncated-integrals-of-rational-powers]]).

## Verification

**Proof technique:** direct.

1.1 Applying [L1] at $p=2$ proves convergence only at infinity, and [L2] gives the value $1/(2-1)=1$ there. [L1, L2]

2.1 Applying [L1] at $p=1/2$ proves convergence only at zero, and [L2] gives $1/(1-1/2)=2$. These are precisely the four assertions displayed above. [L1, L2] ∎
