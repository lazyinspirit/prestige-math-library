---
id: def-locally-equicontinuous-family-on-a-plane-domain
kind: definition
title: "Locally equicontinuous families of functions on a plane domain"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
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
of functions $\Omega\to\mathbb C$. The family $\mathcal F$ is
**locally equicontinuous** when for every $a\in\Omega$ there is a radius $r>0$
with $\overline D(a,r)\subseteq\Omega$ such that for every $\varepsilon>0$ there
is $\delta>0$ satisfying
$$|z-w|<\delta\quad\Longrightarrow\quad |f(z)-f(w)|<\varepsilon$$
for every $f\in\mathcal F$ and every $z,w\in\overline D(a,r)$.

Thus the continuity modulus is shared by the whole family on some neighbourhood
of each point.
