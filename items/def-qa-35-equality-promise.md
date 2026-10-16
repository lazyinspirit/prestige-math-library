---
id: def-qa-35-equality-promise
kind: definition
title: "Equality communication problem"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps: ["def-promise-problem", "def-qa-35-finite-communication-protocol"]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions, sums, bases, and selection sets are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 16 §§16.1 and 16.6, PDF pp.147–153; private/public-coin SMP and equality lower-bound context (§16.1), quantum fingerprint construction and SWAP-test analysis (§16.6)."
    - title: "Harry Buhrman, Richard Cleve, John Watrous, Ronald de Wolf, Quantum Fingerprinting"
      url: https://arxiv.org/pdf/quant-ph/0102001
      locator: "Complete 8-page paper, especially §2, PDF pp.2–4, code fingerprints and swap-test analysis."
---

## Definition

For $n\ge1$, the **Equality promise problem** has $X=Y=\{0,1\}^n$, YES set $\{(x,x):x\in\{0,1\}^n\}$ and NO set $\{(x,y):x\ne y\}$. The required output is $1$ on YES and $0$ on NO. This is a total promise problem, and a bounded-error protocol must meet its error bound on every pair.
