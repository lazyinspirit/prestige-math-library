---
id: def-it-stationary-finite-block-information-rdf
kind: definition
title: "Stationary finite-block information rate-distortion function"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-finite-alphabet-stationary-source
  - def-it-finite-mutual-information
  - def-it-single-letter-distortion-and-block-distortion
  - lem-it-finite-rate-distortion-minimum-attained
  - thm-it-information-unit-conversion
justified_by: []
aliases: []
axiom_use: "No choice axiom is used in the finite block definitions."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected first edition"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 10, §10.6: stationary-source block rate-distortion functions and their limit."
    - title: "Robert M. Gray, Source Coding Theory, first edition"
      url: "https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf"
      locator: "Chapter 3, §§3.2–3.4: stationary source and block coding conventions."
---

## Definition

Let $(X_t)_{t\in\mathbb Z}$ be a stationary source on a finite nonempty alphabet $\mathcal X$, let $\widehat{\mathcal X}$ be finite nonempty, and let $d:\mathcal X\times\widehat{\mathcal X}\to[0,d_{\max}]$ be a bounded finite-valued distortion. For $n\ge1$ and $D\ge0$, define
$$
R_n(D):=\frac{1}{n\ln2}\min_{W_n:\,\mathbb E d_n(X_0^{n-1},\widehat X_0^{n-1})\le D} I(X_0^{n-1};\widehat X_0^{n-1})\quad\text{bits/symbol},
$$
with value $+\infty$ when the constraint is infeasible. The minimum is attained whenever feasible by [[lem-it-finite-rate-distortion-minimum-attained]] applied to the block alphabets. Put
$$
D_{\min}:=\mathbb E\min_{\hat x\in\widehat{\mathcal X}}d(X_0,\hat x),\qquad D_{\rm c}:=\min_{\hat x\in\widehat{\mathcal X}}\mathbb E d(X_0,\hat x),\qquad R_{\rm block}(D):=\inf_{n\ge1}R_n(D).
$$
The stationary-ergodic process information rate-distortion quantity is
$$
R_{\rm erg}(D):=\inf \limsup_{n\to\infty}\frac{1}{n\ln2} I(X_0^{n-1};\widehat X_0^{n-1}),
$$
where the infimum ranges over jointly stationary ergodic pairs of finite-alphabet processes with the given source marginal and $\mathbb E d(X_0,\widehat X_0)\le D$; an empty infimum is $+\infty$.
