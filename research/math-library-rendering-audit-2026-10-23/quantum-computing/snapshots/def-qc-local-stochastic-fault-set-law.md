---
id: def-qc-local-stochastic-fault-set-law
kind: definition
title: "Local-Stochastic Fault-Set Law"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-finite-probability-space-and-event
  - def-finite-cardinality
dependency_level: 0
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "D. Aharonov and M. Ben-Or, Fault-Tolerant Quantum Computation With Constant Error"
      url: "https://arxiv.org/pdf/quant-ph/9611025"
    - title: "P. Aliferis, D. Gottesman, J. Preskill, Accuracy Threshold for Postselected Quantum Computation"
      url: "https://arxiv.org/pdf/quant-ph/0703264"
---

## Definition

Let $L$ be a finite set of elementary fault-location labels and let $(\Omega,w)$ be a finite probability space as in [[def-finite-probability-space-and-event]]. A fault-set random variable is a map $F:\Omega\to\mathcal P(L)$. For a parameter $\eta\in[0,1]$, the fault-set law is $\eta$-local-stochastic if, for every subset $S\subseteq L$,
$$
\mathbb P\{\omega\in\Omega:S\subseteq F(\omega)\}\le \eta^{|S|}.
$$
Here $\eta^k$ is the ordinary $k$-fold product, with $\eta^0=1$. This condition allows correlations among fault indicators; it does not assert mutual independence.

