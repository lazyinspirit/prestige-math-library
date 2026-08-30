---
id: cex-the-mertens-conjecture-is-false
kind: counterexample
title: "The Mertens conjecture is false"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-mertens-function]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "A. M. Odlyzko and H. J. J. te Riele, Disproof of the Mertens conjecture"
      url: "https://doi.org/10.1515/crll.1985.357.138"
pipeline_run: null
---

## Statement refuted

The historical statement

$$
|M(x)|<\sqrt{x}\qquad\text{for every real }x>1
$$

is false, where $M$ is the Mertens function of [[def-mertens-function]].

## Facts & Assumptions

**Given:** The historical Mertens conjecture.

## Counterexample

**Proof technique:** direct.

1.1 The cited paper of Odlyzko and te Riele proves that there exists a real number $x>1$ for which $|M(x)|\ge\sqrt{x}$. So the universal inequality in the Statement refuted fails at that value of $x$. [given]

2.1 Hence the Mertens conjecture is false. This example is historical and non-load-bearing for the finite convolution arguments on the A page. [step 1.1] ∎
