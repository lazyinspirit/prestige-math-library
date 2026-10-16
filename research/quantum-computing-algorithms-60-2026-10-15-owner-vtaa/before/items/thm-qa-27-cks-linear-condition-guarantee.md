---
id: thm-qa-27-cks-linear-condition-guarantee
kind: theorem
title: "CKS nearly-linear condition-number guarantee"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 26
deps:
  - alg-qa-27-cks-variable-time-linear-solver
  - def-qa-27-cks-sparse-oracle-model
  - thm-qa-27-vtaa-amplification
  - lem-qa-27-cks-stopping-time-instantiation
  - thm-qa-25-qubitized-simulation-resource-bound
  - thm-qa-25-sparse-hamiltonian-block-encoding-correctness
  - thm-qa-13-relative-counting-query-cost
  - def-qc-dirac-notation-conversion
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "Andrew M. Childs, Robin Kothari, and Rolando D. Somma, Quantum algorithm for systems of linear equations with exponentially improved dependence on precision"
      url: "https://arxiv.org/pdf/1511.02306"
      locator: "Theorem 5 and full proof in §§5.1–5.4, PDF pp.22–29."
    - title: "Andris Ambainis, Variable time amplitude amplification and a faster quantum algorithm for solving systems of linear equations"
      url: "https://arxiv.org/pdf/1010.4458"
      locator: "Theorem 1 and QLSP application, §§3–4, PDF pp.4–16."
---

## Statement

Let $A$ be an $N\times N$ Hermitian matrix with at most $d$ nonzero entries in each row, $\|A\|_{\rm op}\le1$, supplied with the full sparse access model of [[def-qa-27-cks-sparse-oracle-model]], and let $|b\rangle$ be a normalized state supported on eigenvalues with $|\lambda|\ge1/\kappa$ for declared $\kappa\ge1$. For $0<\epsilon<1$, the source CKS QLSP theorem claims a gate-efficient algorithm that outputs a normalized state within vector-norm error $\epsilon$ of $A^+|b\rangle/\|A^+|b\rangle\|$ using
$$O\!\left(d\kappa\,\operatorname{poly}\!\left(\log\frac{d\kappa}{\epsilon}\right)\right)$$
queries to the declared sparse access and input-preparation operations. If the support of $|b\rangle$ has the smaller condition number $\kappa'<\kappa$, the source permits replacing $\kappa$ by $\kappa'$. The output is a quantum state; no classical coordinate list is promised.

## Proof status

The source proof combines the Fourier or Chebyshev inverse approximation, the dyadic stopping-time calculation, and Theorem 21 variable-time amplification. That complete local derivation is not supplied here, so this theorem is escalated. For the binding OP6/QA25 realization, the additional unresolved checks are: prove the capped coefficient and phase procedures terminate with $\alpha_{\max}=\widetilde O(\kappa)$; prove the CKS input access compiles to the exact reversible sparse block-encoding interface with its costs; fit the QA25 small-time-aware simulator's signal/query/gate costs into every controlled phase-estimation stage; include all QA13 `RelProb` and QA12 `CapAmplify` failure events; and prove the resulting vector error and gate efficiency. CKS Theorem 5 is the source target, not a substitute proof of this custom finite constructor.
