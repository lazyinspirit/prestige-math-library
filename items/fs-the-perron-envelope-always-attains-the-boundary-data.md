---
id: fs-the-perron-envelope-always-attains-the-boundary-data
kind: false-statement
title: "FALSE: the regularized Perron envelope always attains the prescribed boundary data"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cex-the-punctured-disc-has-an-irregular-boundary-point-and-a-nonsolvable-datum, thm-perron-envelope-is-harmonic]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Boris Khoruzhenko, Potential Theory lecture notes"
      url: "https://www.yumpu.com/en/document/view/12029492/potential-theory"
---

## Statement refuted

For every bounded plane domain and every continuous boundary datum, the
regularized Perron envelope always attains the prescribed boundary values at
every boundary point.

## Facts & Assumptions

**Given:** The universal claim in the Statement refuted.

[L1] On any bounded domain, the regularized Perron envelope is harmonic in the interior ([[thm-perron-envelope-is-harmonic]]).

[L2] On the punctured disc, the boundary datum $0$ on $|z|=1$ and $1$ at the puncture has no harmonic solution ([[cex-the-punctured-disc-has-an-irregular-boundary-point-and-a-nonsolvable-datum]]).

## Refutation

**Proof technique:** direct.

1.1 Let $H$ be the regularized Perron envelope for the punctured-disc datum from [L2]. By [L1], $H$ is harmonic on the punctured disc. [L1, L2]

2.1 If the universal claim were true, then $H$ would also attain the prescribed boundary values at the puncture and on the outer circle, so it would be a harmonic solution of exactly the boundary-value problem ruled out in [L2]. Therefore the claim is false. [L2, step 1.1] ∎
