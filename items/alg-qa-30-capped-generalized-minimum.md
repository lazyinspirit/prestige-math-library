---
id: alg-qa-30-capped-generalized-minimum
kind: algorithm
title: Finite capped quantum quantile minimum
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
page: quantum-optimization-sdp-and-variational-algorithms
deps:
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-reflection
  - def-qc-projective-measurement
justified_by: [thm-qa-30-generalized-minimum-guarantee]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: van Apeldoorn et al., Quantum SDP-solvers, Appendix C
      url: https://arxiv.org/pdf/1705.01843v4
---

## Definition

Supply a finite coherent sampler $V$, its inverse, an exactly ordered finite score/label encoding, and a reversible exact comparison circuit. Supply controlled versions when used, the all-zero input reflection $R_0=I-2|0\rangle\langle0|$, and the reflection $R_v=I-2\Pi_v$ for the predicate score strictly smaller than an incumbent $v$. Each preparation retains its value/label work; every named access, comparison, reflection, gate and numerical precision cost is charged. The input quantile parameter is an integer $N\ge1$, with rational confidence $0<\delta<1$.

A trial first samples an incumbent using $V$. Set its charged counter to one. To search for an improvement, use stages $j=0,1,\ldots$, with $K_j=\lceil(3/2)^j\rceil$ and worst-case stage charge $4K_j+4$ for preparation/inverse/reflection calls. Before starting a stage that would exceed $100000\lceil\sqrt N\rceil$ total charge, stop the trial and return its incumbent. Otherwise charge that amount and do the following:

1. Take one fresh direct sample. If its score is strictly smaller, replace the incumbent and restart at $j=0$.
2. If not, draw at most five independent blocks of $\lceil\log_2K_j\rceil$ unbiased bits and use the first resulting integer $q<K_j$. If every draw is out of range, treat this stage as failed and increase $j$. For $K_j=1$ the zero-bit draw is $q=0$.
3. If an index was accepted, prepare a fresh $V|0\rangle$, apply $q$ copies of $-VR_0V^\dagger R_v$, and measure the score/label. Verify the same exact comparison. On improvement replace the incumbent and restart at $j=0$; otherwise increase $j$.

Run $R$ independent trials, where $R$ is the least positive integer for which the exact rational comparison $8^{-R}\le\delta$ holds; find it by repeated rational multiplication and comparison. Return their least measured score and label. The loop is finite because $8^R\ge1+7R$ by the binomial theorem. Integer square-root ceilings use integer squaring comparisons; powers, ceilings, comparisons, and bit generation have their finite classical costs. The query theorem is [[thm-qa-30-generalized-minimum-guarantee]].
