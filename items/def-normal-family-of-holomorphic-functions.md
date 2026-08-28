---
id: def-normal-family-of-holomorphic-functions
kind: definition
title: "Normal families of holomorphic functions on a plane domain"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [rem-local-uniform-convergence-dictionary-on-plane-domains]
justified_by: []
aliases: []
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

## Definition

Let $\Omega\subseteq\mathbb C$ be a plane domain and let $\mathcal F$ be a family
of holomorphic functions on $\Omega$. The family $\mathcal F$ is **normal** when
every sequence $(f_n)$ in $\mathcal F$ has a subsequence $(f_{n_k})$ and a
holomorphic function $f$ on $\Omega$ such that $f_{n_k}\to f$ locally uniformly on
$\Omega$.

By [[rem-local-uniform-convergence-dictionary]], the same condition can be read as
uniform convergence on every compact subset of $\Omega$.
