---
id: alg-qa-13-certified-count-output-rounding
kind: algorithm
title: "Rational-interval rounding of a counting output"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - thm-principal-inverse-tangent-calculus
  - thm-alternating-series-test
  - def-qa-classical-bit-cost
justified_by:
  - lem-qa-13-certified-count-output-rounding
axiom_use: "No choice axiom is used; all selections are prescribed rational comparisons and integer arithmetic."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Brassard, Høyer, Mosca, and Tapp, Quantum Amplitude Amplification and Estimation, §4, integer rounding after Theorem 13; rational-interval realization specified here"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
---
## Definition

**Input.** Public integers $N\ge1$, even $M\ge2$, and $0\le y<M$. The output is an integer $q$. All sums, factorials, comparisons and ceiling operations below use exact rational or integer arithmetic, charged as classical bit work under [[def-qa-classical-bit-cost]].

If $y=0$, return $q=0$. Otherwise initialize $r=4$. Compute $R_r=8^{2r+2}/(2r+2)!$; while $NR_r\ge1/24$, increment $r$ by one and recompute $R_r$. At the first $r$ with $NR_r<1/24$, set
$$D_r=\sum_{k=1}^r\frac{2k\,8^{2k-1}}{(2k)!}.$$

Initialize $h=1$. Compute
$$S_h=\sum_{k=0}^{h-1}\frac{(-1)^k}{2k+1},\qquad e_h=\frac4{2h+1},\qquad [a_h,b_h]=\frac{2y}{M}[4S_h-e_h,4S_h+e_h].$$
These are the arctangent-series enclosures from [[thm-principal-inverse-tangent-calculus]] and [[thm-alternating-series-test]]. Set $x_h=(a_h+b_h)/2$ and $\rho_h=(b_h-a_h)/2$. While either $[a_h,b_h]\nsubseteq[0,8]$ or $ND_r\rho_h\ge1/24-NR_r$, increment $h$ by one and recompute $S_h,e_h,a_h,b_h,x_h,\rho_h$.

For the first accepted $h$, compute
$$C_r(x_h)=\sum_{k=0}^r\frac{(-1)^k x_h^{2k}}{(2k)!},\qquad E=D_r\rho_h+R_r,$$
$$u=\frac N2(1-C_r(x_h)-E),\qquad v=\frac N2(1-C_r(x_h)+E).$$
Return $q=\lceil v-2/3\rceil$, computing the rational ceiling by integer division. The termination and error guarantee are established in [[lem-qa-13-certified-count-output-rounding]].
