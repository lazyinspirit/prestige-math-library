---
id: alg-qa-relative-probability-estimation
kind: algorithm
title: "Relative estimation of a promised coherent success probability"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - lem-qa-coherent-amplitude-grid-rounding
  - def-qa-13-amplitude-estimation-task
  - alg-qa-13-phase-estimation-amplitude-estimation
  - lem-qa-13-real-cyclotomic-comparison
  - def-qa-classical-bit-cost
justified_by:
  - thm-qa-relative-probability-guarantee
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Brassard, Høyer, Mosca, and Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
---

## Definition

**Rounding mode.** Select `exact-cyclotomic` (the original finite comparison mode below) or `efficient-grid`. In `efficient-grid` mode replace only RoundedAE output rounding: run [[lem-qa-coherent-amplitude-grid-rounding]] on the measured $k$-bit label $y$, with $M=2^k$, and return $a_M(y)/M^2$. Its range is $[0,1]$, zero label returns zero, and absolute error is at most $3/(4M^2)<M^{-2}$. All following thresholds, medians, caps and scale choices are unchanged. The helper supplies actual uniform polynomial-in-$\log M$ generation, elementary reversible gates and work, with actual inverse/control versions; use those costs in this mode.

**Input.** An arbitrary finite-dimensional amplitude-estimation instance from [[def-qa-13-amplitude-estimation-task]], with unitary sampler $A$, initial vector $|0\rangle$, supplied orthogonal success projection $\Pi$, and unknown probability $p=\|\Pi A|0\rangle\|^2$; rational parameters $0<p_{\min}\le1$, $0<c<1/4$, and $0<\beta<1$; and the promise $p=0$ or $p\ge p_{\min}$.

Use the repeated controlled-unitary access mode with $Q=-AS_0A^*S_{\rm good}$ from that task definition. Controlled $A$, controlled $A^*$, controlled $S_0$, controlled $S_{\rm good}$, and the control phase are explicitly supplied or implemented with declared costs. An ordinary preparation $A|0\rangle$ is also available and charged. Ordinary uncontrolled sampler access alone does not supply these controlled capabilities.

**Output.** A rational estimate $\widehat p\in[0,1]$. The procedure uses independent fresh estimator workspaces, measures and discards them, and returns only classical data. Any subsequent use of a sampler starts a fresh execution from its declared initial vector.

**Instructions.** Set $M_j=4\cdot2^j$. Determine the least integer $L\ge0$ with $M_L^2p_{\min}\ge1024$ by doubling and rational comparison. Set $\delta=\min\{1/16,\beta/(L+2)\}$. Choose the least positive odd integer $r$ with $(4/5)^r\le\delta$, using rational multiplication and comparison.

For each dyadic integer $M\ge4$, define the following two subprocedures.

1. $\operatorname{RoundedAE}(M)$ runs [[alg-qa-13-phase-estimation-amplitude-estimation]] with label size $M$, obtaining the exact real cyclotomic output $z=\sin^2(\pi y/M)$. If $y=0$, return zero. Otherwise use [[lem-qa-13-real-cyclotomic-comparison]] and binary search among the integers $0\le t\le M^2$ to find the largest $t$ with $t/M^2\le z$, and return $t/M^2$. Equality is decided by the same exact comparison procedure; $z=1$ returns $1$.
2. $\operatorname{MedAE}(M)$ runs $r$ independent copies of $\operatorname{RoundedAE}(M)$ and returns their middle order statistic, using rational comparisons.

For $j=0,\ldots,L$ in order, compute $b_j=\operatorname{MedAE}(M_j)$. If $b_j\ge256/M_j^2$, stop this loop at $J=j$, choose the least power of two $N\ge16M_J/c$, and return the output of a fresh $\operatorname{MedAE}(N)$. If no such detection occurs through $j=L$, return zero without a final estimation call.

Query, preparation, ordinary-gate, measurement and classical-bit costs are separate coordinates. All exact comparisons, cyclotomic encoding, rational arithmetic, sorting, and output writing are charged as classical bit operations under [[def-qa-classical-bit-cost]]. The comparison supplier asserts termination, without a polynomial bit-cost bound.
