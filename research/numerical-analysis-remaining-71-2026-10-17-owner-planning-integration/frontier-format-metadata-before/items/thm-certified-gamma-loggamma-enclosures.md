---
id: thm-certified-gamma-loggamma-enclosures
kind: theorem
title: Soundness of finite Gamma and log-Gamma enclosures
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [alg-certified-gamma-loggamma-evaluation, def-certified-evaluation-result-contract, lem-loggamma-shift-independent]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §5.11, asymptotic expansions
      url: https://dlmf.nist.gov/5.11
    - title: DLMF, §5.5, functional relations
      url: https://dlmf.nist.gov/5.5
    - title: DLMF, §§5.5, 5.8, and 5.11
      url: https://dlmf.nist.gov/5.8
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 3
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
---

## Statement

For any finite dyadic rectangle $Z\subset\mathbb C\setminus(-\infty,0]$,
whenever [[alg-certified-gamma-loggamma-evaluation]] returns `success`, its
returned enclosure contains the range of $\Gamma$ or the continued log-Gamma
branch on $Z$ and passes the stated absolute-radius test. Any reported
relative certificate obeys the zero-exclusion condition. No assertion
guarantees success for every valid input or finite cap.

## Facts & Assumptions

**Given:** A successful return on $Z$ of
[[alg-certified-gamma-loggamma-evaluation]] using a sound outward interval
backend.

[F1] [[alg-certified-gamma-loggamma-evaluation]]: the product and Stirling
branches each enclose the same continued log-Gamma value before any requested
exponential is applied.

[F2] [[def-certified-evaluation-result-contract]]: a `success` enclosure
contains the exact value and passes the absolute-radius test; relative
certification also requires zero exclusion.

[F3] [[lem-loggamma-shift-independent]]: $e^{\ell(z)}=\Gamma(z)$ on the
slit plane.

## Proof
1.1 In the product branch, the log-Gamma series truncation and its explicit tail enclosure contain $\ell(z)$ by [F1]. In the Stirling branch, the sectorial remainder enlargement contains the same $\ell(z)$ by [F1]. Thus either candidate passed to the output stage contains the exact requested log-Gamma value. [F1]

1.2 If the requested value is $\Gamma(z)$, the algorithm exponentiates the log-Gamma enclosure with outward interval operations. By [F3], its exact exponential is $\Gamma(z)$, so the resulting enclosure contains $\Gamma(z)$. [F1, F3]

2.1 The algorithm reports `success` only after the enclosure passes the absolute-radius and any applicable relative-radius tests. By [F2] these are sound accuracy claims; zero-containing enclosures carry no relative guarantee. Finite caps may instead yield `inconclusive`, and representational failure may yield `range`, so success is not asserted for every input. [F1, F2, F3, step 1.1, step 1.2] ∎