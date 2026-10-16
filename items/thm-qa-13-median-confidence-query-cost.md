---
id: thm-qa-13-median-confidence-query-cost
kind: theorem
title: "Median amplitude-estimation query cost"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
deps:
  - alg-qa-13-median-confidence-estimation
  - thm-qa-13-median-confidence-guarantee
  - thm-qa-13-amplitude-estimation-query-complexity
  - def-qa-quantum-query-complexity
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - cor-mean-value-theorem
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all constructions and measurement schedules are finite, and the analytic estimates use the stated real-analysis suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Brassard, Høyer, Mosca, and Tapp, Quantum Amplitude Amplification and Estimation, complete article, §§4–5, Theorems 11–18"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, complete lecture notes, §§19.1–19.3"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, complete 239-page notes, §7.3"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement

In the repeated controlled-$Q$ access mode, the median estimator uses exactly $r(M-1)$ controlled-$Q$ calls. With the explicit thresholds in [[alg-qa-13-median-confidence-estimation]], this is $O(\epsilon^{-1}(1+\ln(1/\delta)))$ calls. For the conventional range $0<\delta\le1/2$, this is $O(\epsilon^{-1}\ln(1/\delta))$. Controlled $A$, controlled $A^*$, controlled predicate reflections, state preparation, gate counts, and classical order-statistic work are separately charged.

## Facts & Assumptions

**Given:** The median procedure with its integer parameters $M,r$ and repeated controlled-$Q$ access.

[F1] The procedure makes $r$ fresh runs with a common $M$ ([[alg-qa-13-median-confidence-estimation]]).

[F2] Each run uses exactly $M-1$ repeated controlled-$Q$ calls ([[thm-qa-13-amplitude-estimation-query-complexity]]).

[F3] The access model charges declared quantum query actions separately from ordinary gates and classical bits ([[def-qa-quantum-query-complexity]]).

[F4] The least power-of-two threshold is $M\ge88/(7\epsilon)$ and the least odd sample size satisfies $2^r\ge(2/\delta)^8$ ([[alg-qa-13-median-confidence-estimation]]).

[F5] $\ln$ is strictly increasing, $\ln2>0$, and $\ln2<1$ ([[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]], [[cor-mean-value-theorem]]).

[F6] The natural logarithm is strictly increasing and satisfies the product, reciprocal, and power laws on positive reals ([[thm-natural-logarithm-laws]]).

## Proof

1.1 By [F1] and [F2], each of the $r$ runs makes $M-1$ calls, so the exact total is $r(M-1)$. [given, F1, F2, algebra]

2.1 The least-power rule gives $M<2\cdot88/(7\epsilon)=176/(7\epsilon)$. Put $X=2/\delta>2$. Since $X^8>256$, the least positive odd $r$ with $2^r\ge X^8$ satisfies $r\ge9$, so $r-2$ is a positive odd integer that fails the threshold: $2^{r-2}<X^8$. By [F6], taking logarithms gives $(r-2)\ln2<8\ln X$, hence $r<2+8\ln X/\ln2$ by [F5]. Also $\ln X=\ln2+\ln(1/\delta)$ by [F6], so [F5] gives $r=O(1+\ln(1/\delta))$. When $\delta\le1/2$, [F5]–[F6] give $\ln(1/\delta)\ge\ln2>0$, so this simplifies to $O(\ln(1/\delta))$. Multiplying these bounds proves both asymptotic counts in the Statement. [given, F4, F5, F6, step 1.1, algebra]

3.1 Each controlled-$Q$ call expands into the separately declared controlled constituents of the task definition; [F3] keeps their gate/query costs distinct, as well as the initial preparations and classical median work. [given, F3, step 1.1, step 2.1] ∎

