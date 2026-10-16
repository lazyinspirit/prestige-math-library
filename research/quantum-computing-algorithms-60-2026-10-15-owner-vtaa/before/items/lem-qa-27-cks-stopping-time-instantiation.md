---
id: lem-qa-27-cks-stopping-time-instantiation
kind: lemma
title: "CKS stopping-time and success-mass instantiation"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 25
deps:
  - alg-qa-27-cks-variable-time-linear-solver
  - def-qa-27-variable-time-model
  - thm-qa-27-vtaa-amplification
  - thm-qa-13-relative-counting-success
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
      locator: "Lemma 22, Lemma 23, equations (107)–(123), §§5.2–5.4, PDF pp.25–29."
    - title: "Andris Ambainis, Variable time amplitude amplification and a faster quantum algorithm for solving systems of linear equations"
      url: "https://arxiv.org/pdf/1010.4458"
      locator: "Theorem 1 and §3.3, PDF pp.4–8."
---

## Statement

For the CKS dyadic eigenvalue-resolution procedure with $m=\lceil\log_2\kappa\rceil+1$ stages, a supported eigenvalue $\lambda$ is routed to one of two adjacent stopping intervals by the source's gapped phase-estimation test; the transition-band and estimator-failure mass must be included in the error budget. If $c_k$ are the input spectral amplitudes, the source analysis gives stage costs $t_j=\widetilde O(d2^j)$, maximum time $T_{\max}=\widetilde O(d\kappa)$, and, up to the allocated approximation error, a success amplitude proportional to $1/(\alpha_{\max}\lambda)$ on eigenvalue $\lambda$. Consequently
$$T_{\rm av}^2=\widetilde O\!\left(d^2\sum_k\frac{|c_k|^2}{\lambda_k^2}\right),\qquad \sqrt{p_{\rm succ}}=\widetilde\Theta\!\left(\frac1{\alpha_{\max}}\sqrt{\sum_k\frac{|c_k|^2}{\lambda_k^2}}\right).$$
The source coefficient estimate $\alpha_{\max}=\widetilde O(\kappa)$ then gives $T_{\rm av}/\sqrt{p_{\rm succ}}=\widetilde O(d\kappa)$. These are the source-efficient stopping quantities; the binding capped OP6 wrapper must separately establish the same estimates after its finite `RelProb`, `CapAmplify`, normalization, and failure events.

## Proof status

The source proof is present in CKS equations (107)–(123), but the local derivation for OP6 is not supplied. In particular, no proof here bounds bad-eigenvalue mass, resolves adjacent-stage ambiguity, shows $\alpha_{\max}=\widetilde O(\kappa)$ for the declared finite coefficient generator, or transfers the source RMS and success expressions through the capped wrapper. The claim is therefore escalated, not a proof supplier.
