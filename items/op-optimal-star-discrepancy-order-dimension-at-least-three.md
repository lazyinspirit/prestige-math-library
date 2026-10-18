---
id: op-optimal-star-discrepancy-order-dimension-at-least-three
kind: open-problem
title: "Optimal star-discrepancy order at fixed dimension at least three"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-star-discrepancy-and-digital-net
justified_by: []
aliases: []
axiom_use: "None; the formulation uses finite point configurations and a real infimum."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  sources_checked:
    date: "2026-10-17"
    scope: "Fixed-dimension formulation, current source versions, cited rate context, and bounded status review; no exhaustive-absence claim."
    by: "Step 1 beta author, reusing the ROOT cycle-1 full-text review where identified"
sources:
  references:
    - title: "Art B. Owen, Practical Quasi-Monte Carlo, Chapter 15, printed pp. 17–19 and Theorem 15.7"
      url: "https://artowen.su.domains/mc/practicalqmc.pdf"
    - title: "Josef Dick, Optimal Polynomial Tractability Exponents for the Inverse Star Discrepancy, arXiv:2607.23571v3"
      url: "https://arxiv.org/pdf/2607.23571v3"
---

## Open problem

Fix an integer $d\ge3$. For each integer $n\ge2$, let $P=(x_1,\ldots,x_n)$ range over the ordered configurations in $([0,1)^d)^n$, with repeated points counted with multiplicity, and set
$$\delta_d(n):=\inf\{D_n^*(P):P\in([0,1)^d)^n\},$$
where $D_n^*$ is the normalized half-open anchored-box star discrepancy of [[def-star-discrepancy-and-digital-net]]. Determine the exact asymptotic order of $\delta_d(n)$ as $n\to\infty$ with $d$ fixed. In particular, prove or disprove the conjectured order
$$\delta_d(n)\asymp_d n^{-1}(\log n)^{d-1},$$
and determine the correct order if this conjecture fails. Here $\log$ is the natural logarithm, and $\asymp_d$ means that positive constants $c_d,C_d$ and an integer $n_0(d)$ exist such that $c_dn^{-1}(\log n)^{d-1}\le\delta_d(n)\le C_dn^{-1}(\log n)^{d-1}$ for all $n\ge n_0(d)$.

The configuration set is nonempty because it contains the list with every point equal to $0\in[0,1)^d$. Each empirical fraction and box volume lies in $[0,1]$, so $0\le D_n^*(P)\le1$ for every configuration. Thus $\delta_d(n)$ is a well-defined finite real infimum; attainment is not asserted.

## Status

Status reviewed on 2026-10-17: the inspected sources support retaining the fixed-$d\ge3$ question as open. Owen's *Practical Quasi-Monte Carlo*, printed pp. 18–19, says the best possible rate is not known, records the classical Roth lower baseline $n^{-1}(\log n)^{(d-1)/2}$ and the conjectural $n^{-1}(\log n)^{d-1}$ rate, and distinguishes the settled planar order $n^{-1}\log n$. The Roth bound is stated here only as a classical baseline, not as the strongest known lower bound. Owen's Theorem 15.7, printed p. 27, supplies an upper-order construction.

Dick's version 3 paper, dated 2026-10-15, states a result on uniform polynomial tractability exponents for inverse star discrepancy. Its Remark 1.4 explicitly separates that growing-dimension result from each fixed-dimension ray and gives a fixed-d construction upper bound; it does not state a matching fixed-d lower bound. The refreshed bounded current-results review recorded in the batch coverage and the ROOT cycle-1 report found no inspected source resolving this exact question. That review is not exhaustive and does not prove that no resolution exists. Publication requires a fresh source/version/status check. No proof of the conjectured lower bound is claimed, and this open problem is never a logical supplier.
