---
id: ex-no-square-root-of-p-in-qp
kind: example
title: "There is no square root of p in Q_p"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-square-criterion-in-qp-for-odd-p, thm-square-criterion-in-q2]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Hensel's Lemma"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/hensel.pdf"
pipeline_run: null
---

## Example

For every prime $p$, the element $p$ is not a square in $\mathbb Q_p$.

## Facts & Assumptions

**Given:** A prime $p$.

[L1] The odd-prime and $2$-adic square criteria describe exactly which elements
are squares ([[thm-square-criterion-in-qp-for-odd-p]],
[[thm-square-criterion-in-q2]]).

## Verification

**Proof technique:** direct.

1.1 If $p$ is odd, then $p = p^1 \cdot 1$ has odd valuation, so [L1] rules out its being a square in $\mathbb Q_p$. [L1, given, cases]

1.2 If $p=2$, then $2 = 2^1 \cdot 1$ also has odd valuation, so the $2$-adic criterion in [L1] rules it out as well. [L1, given, cases]

2.1 Hence no prime has a square root in its own $p$-adic field. [step 1.1, step 1.2, cases-exhaustive] ∎
