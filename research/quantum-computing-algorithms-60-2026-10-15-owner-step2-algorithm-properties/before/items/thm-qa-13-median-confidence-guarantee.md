---
id: thm-qa-13-median-confidence-guarantee
kind: theorem
title: "Explicit median confidence guarantee for amplitude estimation"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - alg-qa-13-median-confidence-estimation
  - thm-qa-13-amplitude-estimation-guarantee
  - lem-chernoff-bound-for-independent-bernoulli-trials
  - lem-qa-13-pi-rational-bounds
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

For rational $0<\epsilon\le1$ and $0<\delta<1$, the median procedure of [[alg-qa-13-median-confidence-estimation]] returns $\widetilde a$ with $|\widetilde a-a|\le\epsilon$ with probability at least $1-\delta$.

## Facts & Assumptions

**Given:** The median algorithm, its rational $\epsilon,\delta$, and the one-run amplitude estimator.

[F1] The median algorithm uses $M\ge88/(7\epsilon)$ and odd $r$ with $2^r\ge(2/\delta)^8$ ([[alg-qa-13-median-confidence-estimation]]).

[F2] A one-run estimate has error at most $\pi/M+\pi^2/M^2$ with probability at least $8/\pi^2$ ([[thm-qa-13-amplitude-estimation-guarantee]]).

[F3] Independent Bernoulli variables satisfy $\Pr(|S-\mathbb ES|\ge u)\le2e^{-2u^2/r}$ for $r$ trials ([[lem-chernoff-bound-for-independent-bernoulli-trials]]).

[F4] $8/\pi^2>98/121$ from $\pi<22/7$ ([[lem-qa-13-pi-rational-bounds]]).

[F5] $\ln x=\int_1^x dt/t$ for $x>0$, so $\ln$ is strictly increasing and $0<\ln2<1$ ([[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]], [[cor-mean-value-theorem]]).

[F6] The natural logarithm is strictly increasing, satisfies $\ln(xy)=\ln x+\ln y$ and $\ln(1/x)=-\ln x$ for positive inputs, and is inverse to the exponential ([[thm-natural-logarithm-laws]], [[def-natural-logarithm]]).

## Proof

1.1 From [F1]–[F2] and $\epsilon\le1$, a good run has error at most $\epsilon/4+\epsilon^2/16\le5\epsilon/16<\epsilon$. Its success probability is at least $p=8/\pi^2>p_0:=98/121$, so each failure indicator has mean at most $1-p_0$. [given, F1, F2, F4, algebra]

2.1 If the median lies outside $[a-\epsilon,a+\epsilon]$, at least $(r+1)/2$ runs are failures. For their sum $S$, this entails $S-\mathbb ES\ge r(p_0-1/2)$. Applying the two-sided additive bound [F3] to this containing event gives probability at most $2\exp(-2r(p_0-1/2)^2)$. [given, F3, step 1.1, algebra]

3.1 Here $p_0-1/2=75/242$ and $c=2(75/242)^2=5625/29282$, so $8c>1$. By [F6], monotonicity and the logarithm product law turn $2^r\ge(2/\delta)^8$ into $r\ln2\ge8\ln(2/\delta)$. Put $L=\ln(2/\delta)>0$. By [F5], $0<\ln2<1$, so $r>8L$ and hence $cr>8cL>L$. The reciprocal law in [F6] gives $\ln(\delta/2)=-L$, while the inverse identity gives $\ln(e^{-cr})=-cr<\ln(\delta/2)$. Strict increase of $\ln$ therefore implies $2e^{-cr}<\delta$. Step 2.1 bounds median failure by this quantity, proving success at least $1-\delta$. [given, F1, F5, F6, step 2.1, algebra] ∎

