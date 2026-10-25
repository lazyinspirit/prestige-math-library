---
id: def-qa-simon-rank-process
kind: definition
title: "Simon independent-sample rank process"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - def-qa-simon-promise
  - alg-qa-simon-one-sample
  - thm-qa-simon-hadamard-sampling-law
  - lem-qa-simon-annihilator-subspace-basis
  - def-qa-binary-field-f2
  - thm-qa-binary-field-f2-is-a-field
  - def-qa-binary-vector-space
  - def-qa-expected-query-cost
  - def-finite-probability-space-and-event
justified_by: []
axiom_use: "No Choice is used; each finite prefix is a finite product of the specified sample law."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6, 2026)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 3 §§3.1-3.3, PDF pp.35-39: Simon promise, one-sample derivation, uniform s-perp law, rank growth, expected queries and classical lower-bound proof."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
      locator: "§6.1, PDF pp.11-13 and §6.5, PDF pp.27-33: independent Simon sample derivation and finite-abelian HSP context."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 6, PDF pp.33-37: Simon as a finite-abelian hidden-subgroup instance and Fourier sampling context."
---
## Definition

Fix integers $n\ge1$ and $m\ge n-1$, and fix one total oracle $f:\{0,1\}^n\to\{0,1\}^m$ satisfying the [[def-qa-simon-promise]], with its hidden nonzero mask $s$. Put $d=n-1$ and use the coordinate vector space $\mathbb F_2^n$ of [[def-qa-binary-vector-space]]. Start with an empty ordered list of accepted rows and $V_0=\{0\}=\operatorname{span}(\varnothing)$. On each round, reset both registers and run a fresh [[alg-qa-simon-one-sample]] for this same fixed oracle $f$. Its measurement outcomes are independent across these freshly initialized executions: every finite $R$-round history is an outcome in a finite probability space [[def-finite-probability-space-and-event]] with the product of its one-sample probabilities. Obtain its sample row $y$. At current rank $k$, let $V_k$ be the span of the $k$ accepted rows. If $y\notin V_k$, append $y$ and set $V_{k+1}:=\operatorname{span}_{\mathbb F_2}(V_k\cup\{y\})$; if $y\in V_k$, discard it and leave the list and span unchanged. Stop once the span has dimension $d$.

The sample law [[thm-qa-simon-hadamard-sampling-law]] places every row in $s^\perp$, and [[lem-qa-simon-annihilator-subspace-basis]] proves that this subspace has dimension $d$, so this stopping target is attainable and never exceeds the available rank. This is an unbounded rank-collection process, with one oracle query in every sampling round. Its probability and expected-query claims use finite prefix experiments as in [[def-qa-expected-query-cost]]; a finite cap and failure output are specified separately.

