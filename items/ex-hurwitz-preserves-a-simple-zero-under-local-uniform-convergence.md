---
id: ex-hurwitz-preserves-a-simple-zero-under-local-uniform-convergence
kind: example
title: "Hurwitz preserves a simple zero under local uniform convergence"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-continuity-of-zeros-locally-uniform-convergence]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.4"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Example

Define

$$f_n(z)=z+\frac{z^2}{n+1}.$$

Then $f_n\to z$ locally uniformly, and on a small disc around $0$ each
sufficiently large $f_n$ has exactly one zero counted with multiplicity.

## Facts & Assumptions

**Given:** The sequence $f_n(z)=z+z^2/(n+1)$ and the limit function $f(z)=z$.

[L1] Locally uniform convergence preserves the total multiplicity near an
isolated zero ([[thm-continuity-of-zeros-locally-uniform-convergence]]).

## Verification

**Proof technique:** direct.

1.1 On every compact set, $|z^2/(n+1)|\to0$, so $f_n\to f$ locally uniformly. The limit function $f(z)=z$ has a simple zero at $0$. [given, algebra]

2.1 Apply [L1] to the isolated zero at $0$. It follows that on some disc $D(0,r)$, every sufficiently large $f_n$ has exactly one zero counted with multiplicity. [step 1.1, L1] ∎
