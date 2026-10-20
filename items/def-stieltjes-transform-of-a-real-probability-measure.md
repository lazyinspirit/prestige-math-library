---
id: def-stieltjes-transform-of-a-real-probability-measure
kind: definition
title: "Stieltjes transform of a probability measure on the real line"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-probability-measure
  - def-integrable-real-and-complex-functions-and-their-integrals
provenance:
  statement: literature-derived
  proof: not-applicable
aliases: []
sources:
  references:
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed., Appendix B.2"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
    - title: "Junyi Liao, Random Matrix Theory, §1.3.1"
      url: "https://jurrivhleon.github.io/notes/rmt.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

Let $\mu$ be a Borel probability measure on $\mathbb R$. For $z=u+i\eta$ with $u\in\mathbb R$ and $\eta>0$, its Stieltjes transform, with the $(x-z)^{-1}$ convention, is
$$m_\mu(z):=\int_{\mathbb R}\frac{1}{x-z}\,d\mu(x).$$
The integral is finite because $|x-z|^{-1}\le\eta^{-1}$ for every real $x$.

## Definition references

Bai and Silverstein, Appendix B.2, printed pp. 514–523 ([complete book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

Junyi Liao, §1.3.1, printed pp. 17–18 ([complete lecture notes](https://jurrivhleon.github.io/notes/rmt.pdf)).
