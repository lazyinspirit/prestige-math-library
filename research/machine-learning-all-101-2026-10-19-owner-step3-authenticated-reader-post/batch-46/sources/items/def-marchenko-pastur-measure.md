---
id: def-marchenko-pastur-measure
kind: definition
title: "Marchenko–Pastur measure with aspect ratio gamma"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - def-borel-sigma-algebra
  - def-dirac-measure
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
justified_by:
  - lem-marchenko-pastur-formula-defines-a-finite-measure
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed., Chapter 3"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
    - title: "Junyi Liao, Random Matrix Theory, Theorem 2.1"
      url: "https://jurrivhleon.github.io/notes/rmt.pdf"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Countable Choice.

For $\gamma>0$, set
$$a_\gamma=(1-\sqrt\gamma)^2,\qquad b_\gamma=(1+\sqrt\gamma)^2,\qquad r_+:=\max\{r,0\}\quad(r\in\mathbb R).$$
Define the Marchenko–Pastur set function on Borel $A\subseteq\mathbb R$ by
$$\mu_\gamma(A):=\int_{A\cap(a_\gamma,b_\gamma)}\frac{\sqrt{(b_\gamma-x)(x-a_\gamma)}}{2\pi\gamma x}\,d\lambda(x)+\left(1-\frac1\gamma\right)_+\delta_0(A),$$
where $\lambda$ is Lebesgue measure on $\mathbb R$. The formula defines a finite Borel measure; its total mass is established by the Marchenko–Pastur law below.

## Definition references

Bai and Silverstein, Chapter 3, §3.3, printed pp. 52–58 ([complete book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

Junyi Liao, Theorem 2.1 and Lemma 2.5, printed pp. 29–34 ([complete lecture notes](https://jurrivhleon.github.io/notes/rmt.pdf)).
