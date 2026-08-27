---
id: fs-every-real-polynomial-has-a-real-root
kind: false-statement
title: "FALSE: every polynomial with real coefficients has a real root"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-x-squared-plus-one-is-irreducible-over-the-reals]
justified_by: []
aliases: []
landmark: false
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
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, extension fields"
      url: "https://judsonbooks.org/aata-files/aata-html/fields-section-extension-fields.html"
pipeline_run: frontier-20
---

## Statement

**False claim:** every polynomial with real coefficients has a real root.

## Facts & Assumptions

**Given:** The polynomial $f(x)=x^2+1$.

[L1] The polynomial $x^2+1$ is irreducible in $\mathbb R[x]$ ([[lem-x-squared-plus-one-is-irreducible-over-the-reals]]).

## Refutation

**Proof technique:** direct.

1.1 Since $f$ is irreducible and has degree $2$, it has no real root. [L1, algebra]

2.1 Thus $f$ is a real polynomial without any real zero. [step 1.1]

3.1 This single counterexample refutes the claim that every real polynomial has a real root. [step 2.1] ∎
