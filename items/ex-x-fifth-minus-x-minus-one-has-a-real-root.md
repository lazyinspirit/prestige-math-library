---
id: ex-x-fifth-minus-x-minus-one-has-a-real-root
kind: example
title: "$x^5-x-1$ has a real root"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-odd-degree-real-polynomial-has-a-real-root]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Applications of Galois Theory, Theorem 2.1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoisappn.pdf"
pipeline_run: frontier-20
---

## Example

The polynomial
$$
f(x)=x^5-x-1
$$
has a real root.

## Facts & Assumptions

**Given:** The polynomial $f(x)=x^5-x-1$.

[L1] Every odd-degree real polynomial has a real root ([[thm-odd-degree-real-polynomial-has-a-real-root]]).

## Verification

**Proof technique:** direct.

1.1 Direct evaluation gives $$ f(1)=1-1-1=-1 \quad\text{and}\quad f(2)=32-2-1=29. $$ [given, algebra]

2.1 The sign change in step 1.1 is exactly the kind of endpoint behaviour used in the proof of [L1]. Since $f$ has odd degree, [L1] gives a real root. [step 1.1, L1]

3.1 Thus $x^5-x-1$ is a concrete odd-degree polynomial with a real zero. [step 2.1] ∎
