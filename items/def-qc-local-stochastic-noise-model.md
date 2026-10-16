---
id: def-qc-local-stochastic-noise-model
kind: definition
title: "Local-Stochastic Correlated Quantum Noise"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-qc-local-stochastic-fault-set-law
  - def-qc-finite-channel-location-schedule
  - def-qc-noise-channel-model
  - def-qc-fault-location-path-and-rectangle
  - def-qc-ft-gadget-and-proper-code-contract
  - def-qc-quantum-channel
dependency_level: 21
verification:
  precheck: n/a
sources:
  references:
    - title: "D. Aharonov and M. Ben-Or, Fault-Tolerant Quantum Computation With Constant Error"
      url: "https://arxiv.org/pdf/quant-ph/9611025"
    - title: "John Preskill, Toric code recovery, fault-tolerant recovery, fault-tolerant gates (2011 handwritten lecture notes)"
      url: "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf"
    - title: "P. Aliferis, D. Gottesman, J. Preskill, Accuracy Threshold for Postselected Quantum Computation"
      url: "https://arxiv.org/pdf/quant-ph/0703264"
---

## Definition

Use the finite channel-location schedule from [[def-qc-finite-channel-location-schedule]] and its location set $L$. Let $(\Omega,w)$ be a finite probability space and $F:\Omega\to\mathcal P(L)$ a random fault set. Its law is $\eta$-local-stochastic as in [[def-qc-local-stochastic-fault-set-law]]. For each pattern $F\subseteq L$ and each $\ell\in F$, specify a CPTP replacement map supported on the same declared support $S_\ell$ as the ideal channel at $\ell$. The replacement at one location may depend on the full pattern $F$. For each outcome, the conditional noisy denotation is the chronological schedule obtained by using those replacements at faulty locations and the ideal channels elsewhere. It is a composition of per-location channels; the model does not add a joint operation across distinct locations.

This is a separate noise model from the independent local replacement model. Its probability hypothesis is the bound on every specified subset of fault locations; it does not assert independence. Correlation is allowed in the fault-set law and in the pattern-dependent choice of local fault maps, while each map remains attached to its own location.

