---
id: def-qc-instrument-and-conditional-state
kind: definition
title: "Finite instruments and conditional states"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-completely-positive-map, def-trace-of-an-endomorphism, def-qc-density-operator]
justified_by: [thm-qc-instrument-outcome-law-normalizes, thm-qc-instrument-conditional-state-is-density]
dependency_level: 5
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.3.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution, §3.2.4"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

Let $H$ be a nonzero finite-dimensional complex-inner-product space, let $K$ be a finite-dimensional complex-inner-product space, and let $\Omega$ be a finite nonempty outcome set. A **finite instrument** from $H$ to $K$ is a family of complex-linear maps $\mathcal I_a:\mathcal L(H)\to\mathcal L(K)$, one for each $a\in\Omega$, such that each $\mathcal I_a$ is completely positive ([[def-qc-completely-positive-map]]) and

$$\sum_{a\in\Omega}\operatorname{tr}_K(\mathcal I_a(X))=\operatorname{tr}_H(X)\qquad\text{for every }X\in\mathcal L(H).$$

For a density operator $\rho$ on $H$ (nonnegative with trace one, [[def-qc-density-operator]]), define the outcome weight $p_a(\rho):=\operatorname{tr}_K(\mathcal I_a(\rho))$. The **conditional state** for outcome $a$ is

$$\rho_a:=\begin{cases}\mathcal I_a(\rho)/p_a(\rho),&p_a(\rho)>0,\\[2pt]\bot,&p_a(\rho)=0.\end{cases}$$

Here $\bot$ is a symbol meaning that no conditional density operator is assigned; it is not a state. Positivity and normalization of the outcome weights, and density of every positive-probability conditional state, are proved in [[thm-qc-instrument-outcome-law-normalizes]] and [[thm-qc-instrument-conditional-state-is-density]].
