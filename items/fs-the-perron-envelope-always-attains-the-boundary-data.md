---
id: fs-the-perron-envelope-always-attains-the-boundary-data
kind: false-statement
title: "FALSE: the regularized Perron envelope always attains the prescribed boundary data"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cex-the-punctured-disc-has-an-irregular-boundary-point-and-a-nonsolvable-datum]
proof_strategy: direct
verification:
  audited: 2026-09-27
  precheck: pass
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

[L1] For the punctured-disc datum $0$ on $|z|=1$ and $1$ at the puncture, the annulus comparison in the published counterexample proves directly that every Perron lower function is at most $0$ and the constant $0$ belongs to the lower family ([[cex-the-punctured-disc-has-an-irregular-boundary-point-and-a-nonsolvable-datum]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the Perron envelope and its upper-semicontinuous regularization for this datum are identically $0$. [L1]

2.1 Their limit at the puncture is therefore $0$, while the prescribed value there is $1$. This single bounded-domain datum refutes the universal boundary-attainment claim. [step 1.1, given] ∎
