---
id: thm-pathwise-error-ledger-decomposition
kind: theorem
title: "Pathwise error decomposition along a reference chain"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-statistical-and-computational-error-ledger
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Anthony Davison and David Hinkley, Bootstrap Methods and Their Application, Chapter 2 §2.5.1–§2.5.2"
      url: "https://api.pageplace.de/preview/DT0400.9781107266384_A23760363/preview-9781107266384_A23760363.pdf"
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §§17.1 and 17.4 and end notes"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
---

## Statement

Let $\theta=r_0,r_1,\ldots,r_m,\widetilde r$ be the finite scalar reference chain and returned value of [[def-statistical-and-computational-error-ledger]], with $m\ge0$. Then, pointwise,
$$\widetilde r-\theta=\sum_{j=1}^{m}(r_j-r_{j-1})+(\widetilde r-r_m),$$
and consequently
$$|\widetilde r-\theta|\le\sum_{j=1}^{m}|r_j-r_{j-1}|+|\widetilde r-r_m|.$$
The sum is empty when $m=0$. No independence, unbiasedness, or distributional assumption is needed.

## Facts & Assumptions

**Given:** A finite chain $\theta=r_0,r_1,\ldots,r_m,\widetilde r$ of real values, with $m\ge0$. Prove the stated identity and bound.

[F1] The successive signed errors are $e_j=r_j-r_{j-1}$ for $1\le j\le m$, the last numerical error is $e_{\mathrm{fp}}=\widetilde r-r_m$, and $r_0=\theta$. ([[def-statistical-and-computational-error-ledger]])

## Proof

1.1 By [F1], the finite sum telescopes: $\sum_{j=1}^{m}(r_j-r_{j-1})=r_m-r_0$; for $m=0$ both sides are $0$. [given, F1, algebra]

2.1 Adding $\widetilde r-r_m$ to the equality in step 1.1 and using $r_0=\theta$ gives $\widetilde r-\theta=\sum_{j=1}^{m}(r_j-r_{j-1})+(\widetilde r-r_m)$. [step 1.1, F1, algebra]

3.1 Apply the triangle inequality to the finite sum in step 2.1 to obtain the absolute-error bound. [step 2.1, algebra] ∎
