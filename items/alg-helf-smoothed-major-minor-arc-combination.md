---
id: alg-helf-smoothed-major-minor-arc-combination
kind: algorithm
title: "Combine Smoothed Major- and Minor-Arc Bounds"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-smoothed-prime-exponential-sum
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "H. A. Helfgott, The ternary Goldbach conjecture is true"
      url: "https://arxiv.org/pdf/1312.7748v2"
      locator: "§1.3, equations (1.1)–(1.7), printed pp. 5–7."
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§6.1, representation integral and major/minor arc partition, printed pp. 34–36."
---

## Definition

For an odd integer $N\ge7$, a real $x>0$, a finite union of intervals $M\subseteq[0,1]$, and smoothings $\eta_+,\eta_*$ for which the following sums and integrals exist, define
$$I_M=\operatorname{Re}\int_M S_{\eta_+}(\alpha,x)^2S_{\eta_*}(\alpha,x)e(-N\alpha)\,d\alpha,\qquad I_m=\int_{[0,1]\setminus M}S_{\eta_+}(\alpha,x)^2S_{\eta_*}(\alpha,x)e(-N\alpha)\,d\alpha.$$
The input also supplies rational numbers $A\in\mathbb Q$ and $B\in\mathbb Q_{\ge0}$, together with proof objects asserting $A\le I_M$ and $|I_m|\le B$. Compare $A$ and $B$. Return \texttt{positive} with the rational lower bound $A-B$ for $\operatorname{Re}(I_M+I_m)$ when $A>B$, and return \texttt{inconclusive} otherwise. The procedure checks the rational comparison only; it does not validate the supplied analytic proof objects.

## Definition references

[[def-smoothed-prime-exponential-sum|$S_\eta(\alpha,x)=\sum_{n\ge1}\Lambda(n)e(\alpha n)\eta(n/x)$ with $e(t)=e^{2\pi it}$ and von Mangoldt weights]]

[Helfgott, *The ternary Goldbach conjecture is true*, §1.3](https://arxiv.org/pdf/1312.7748v2)

[Assing, *The Circle Method and Waring's Problem*, §6.1](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)
