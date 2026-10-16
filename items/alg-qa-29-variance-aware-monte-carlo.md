---
id: alg-qa-29-variance-aware-monte-carlo
kind: algorithm
title: "Variance-aware quantum Monte Carlo"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
deps:
  - def-qa-29-coherent-sampler
  - lem-qa-29-coherent-sampler-outcome-law
  - def-qa-29-expectation-estimation-task
  - alg-qa-29-quantum-expectation-estimation
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-dirac-notation-conversion
  - def-qc-circuit-cost-model
  - def-natural-logarithm
  - def-qa-quantum-query-algorithm
  - lem-qa-29-certified-natural-logarithm-series
  - alg-qa-29-certified-natural-logarithm-enclosure
  - lem-qa-29-dyadic-parameters-terminate
  - thm-of-square-roots
  - lem-of-square-monotone
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ashley Montanaro, Quantum speedup of Monte Carlo methods, Algorithms 1–3 and Theorems 3 and 5"
      url: "https://arxiv.org/pdf/1504.06987v3"
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation, Section 4"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
verification:
  precheck: n/a
---

## Definition

**Input.** A coherent finite sampler $V$ whose decoded real output $v$ has finite range, a known rational upper bound $\sigma\ge0$ with $\operatorname{Var}(v)\le\sigma^2$, rational target $\varepsilon>0$, and rational desired failure probability $0<\rho<1$. All sample, value, inverse, controlled, predicate, and rotation circuits are explicit inputs with separately recorded costs. [[lem-qa-29-coherent-sampler-outcome-law]] identifies the distribution of each measured output with the sampler law. Every observable supplied to $\operatorname{PositiveMean}$ is computed on fresh executions of $V$ using its explicitly supplied, costed value, predicate, rotation, inverse, and controlled operations. For an observable depending on a previously measured classical value, the input supplies the corresponding circuits for each admissible value and charges their selection or computation; the measured value is held fixed while those circuits are used.

If $\sigma=0$, measure one fresh output and return it. Otherwise set $\varepsilon'=\min(\varepsilon,\sigma/2)$ and reserve $\varepsilon_0=7\varepsilon'/8$ for the ideal estimator. Define the following finite routine for any nonnegative finite-valued output $h$ and rational parameters $a,\rho_1$ with $0<a<1/2$ and $0<\rho_1<1$:

1. Let $k$ be the least nonnegative integer with $2^ka\ge1$, and let $M=2^m$ be the least power of two, with $m\ge0$ an integer, for which $M^2a^2\ge10^6k$. Their exact rational searches terminate by [[lem-qa-29-dyadic-parameters-terminate]]. Moreover $k\ge2$ because $2a<1$; since $Ma\ge0$ and $(Ma)^2\ge10^6k$, [[thm-of-square-roots]] and [[lem-of-square-monotone]] give $Ma\ge1000\sqrt{k}$, hence $M\ge1000\sqrt{k}/a>2000$.
2. For $\ell=0$, define $h_0=h\mathbf1_{[0,1)}$. For $1\le\ell\le k$, define $h_\ell=2^{-\ell}h\mathbf1_{[2^{\ell-1},2^\ell)}$. Each $h_\ell$ lies in $[0,1)$.
3. Since $M>2000$, the target $\eta_M=88/(7M)$ satisfies $0<\eta_M<1$ and $M\ge4$. For each $\ell=0,\ldots,k$, run [[alg-qa-29-quantum-expectation-estimation]] on $h_\ell$ over $[0,1]$ with target $\eta_M$ and failure probability $1/[10(k+1)]$. This selects phase-register size exactly $M$ under the current QA13 interface. Call the result $u_\ell$ and form $P(h)=u_0+\sum_{\ell=1}^k2^\ell u_\ell$.
4. Repeat this whole binned procedure an odd number $R_1$ of fresh independent circuit executions, as required by [[def-qa-quantum-query-algorithm]], where $R_1$ is the least odd positive integer at least $\lceil2U_1/(3/10)^2\rceil+1$. Here $U_1$ is the upper endpoint of the certified logarithm interval for $\ln(1/\rho_1)$ from [[lem-qa-29-certified-natural-logarithm-series]], computed with interval width at most $1/4$. Return the median. This defines $\operatorname{PositiveMean}(h,a,\rho_1)$ for $0<\rho_1<1$.

For one outer trial, measure one fresh sampler output $v_0$ and set $m=v_0/\sigma$. Holding this coarse value fixed, let $Y=v_1/\sigma$ be the normalized output of a new sampler execution independent of the coarse measurement and define
$$B_m(Y)=Y-m,\qquad h_{-,m}(Y)=(-B_m(Y))\mathbf1_{B_m(Y)<0}/4,\qquad h_{+,m}(Y)=B_m(Y)\mathbf1_{B_m(Y)\ge0}/4.$$
Run $\operatorname{PositiveMean}$ separately on $h_{-,m}$ and $h_{+,m}$ with $a=\varepsilon_0/(32\sigma)$ and $\rho_1=1/9$, using fresh sampler executions independent of the coarse measurement and of the other call, conditional on the fixed $m$. If the results are $u_-,u_+$, return $\sigma(m-4u_-+4u_+)$. Count the coarse state preparation and all fresh preparations used by both $\operatorname{PositiveMean}$ calls in the total preparation count; every controlled or inverse call remains separately charged. Let $U_0$ be the upper endpoint of the certified logarithm interval for $\ln(1/\rho)$ from [[lem-qa-29-certified-natural-logarithm-series]], computed with interval width at most $1/4$. Repeat the outer trial an odd number $R_0$ of fresh independent circuit executions, as required by [[def-qa-quantum-query-algorithm]], where $R_0$ is the least odd positive integer at least $\lceil18U_0\rceil+1$, and output the median.

Here $\ln$ is the natural logarithm from [[def-natural-logarithm]]. For each logarithm input $x=1/\rho_1$ or $x=1/\rho$, its rational subroutine runs [[alg-qa-29-certified-natural-logarithm-enclosure]] on $(x,1/8)$; [[lem-qa-29-certified-natural-logarithm-series]] certifies tail at most $1/8$ and interval width at most $1/4$; every ceiling uses the interval's upper endpoint. The procedure is a finite sequence of operations in the supplied exact-access model, and the accuracy theorem assumes exact value, predicate, rotation, and reflection operations. It makes no guarantee for approximate replacements: any finite-gate implementation needs a separate certified error analysis that transfers both output accuracy and success probability, with compilation, gate, precision, bit, and ancilla costs recorded. No state reflection or value-loading operation is free.
