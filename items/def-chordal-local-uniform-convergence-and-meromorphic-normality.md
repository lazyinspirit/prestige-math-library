---
id: def-chordal-local-uniform-convergence-and-meromorphic-normality
kind: definition
title: "Chordal local uniform convergence and meromorphic normality"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-chordal-metric-riemann-sphere, rem-local-uniform-convergence-dictionary-on-plane-domains]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
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

Let $\Omega\subseteq\mathbb C$ be a plane domain and let $f_n,f:\Omega\to\widehat{\mathbb C}$.
The sequence $(f_n)$ converges **chordally locally uniformly** to $f$ when for
every compact set $K\subseteq\Omega$,
$$\sup_{z\in K}\chi\bigl(f_n(z),f(z)\bigr)\longrightarrow0,$$
where $\chi$ is the chordal metric of [[def-chordal-metric-riemann-sphere]].
For the empty compact set the displayed supremum is defined to be $0$.

A family $\mathcal F$ of meromorphic maps $\Omega\to\widehat{\mathbb C}$ is
**meromorphically normal** when every sequence in $\mathcal F$ has a subsequence
converging chordally locally uniformly either to a meromorphic map
$\Omega\to\widehat{\mathbb C}$ or to the constant map $\infty$.
