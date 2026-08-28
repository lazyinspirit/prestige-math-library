---
id: rem-local-uniform-convergence-dictionary-on-plane-domains
kind: remark
title: "Locally uniform convergence on a plane domain is the already-published compact-convergence notion"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [rem-locally-uniform-convergence-dictionary]
justified_by: []
aliases: [rem-local-uniform-convergence-dictionary]
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Matthias Weber, Complex Analysis, Ch. 5 §§5.1-5.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 2 §5.2 and Ch. 8 §3.2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, Ch. 2"
      url: "https://www.axler.net/HFT.pdf"
pipeline_run: frontier-22
---

## Remark

This page uses the already-published compact-convergence dictionary for local
uniform convergence. Concretely, on a plane domain $\Omega$, a sequence of
continuous maps $f_n:\Omega\to\mathbb C$ converges **locally uniformly** exactly
when it converges uniformly on every compact subset of $\Omega$
([[rem-locally-uniform-convergence-dictionary]]).

The point of the present page is not to redefine that notion, but to package it
through a canonical compact exhaustion and the resulting weighted metric on
function spaces.
