---
id: ex-squared-loss-conditional-mean
kind: example
title: "Squared loss and a conditional mean"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-supervised-learning-problem
  - def-population-and-empirical-risk
  - lem-finite-event-conditional-expectation-formula
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, Chapter 3 §3.2.2"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
---

## Example

Let $\mathsf X=\{u,v\}$ with its discrete sigma-algebra, let $\mathsf Y=\{0,2,4,6\}$ with its discrete sigma-algebra, let the action space be $\mathsf A=\mathbb R$ with its Borel sigma-algebra, and let $\mathcal F$ be all functions from $\mathsf X$ to $\mathbb R$. Define $X(x,y)=x$ and $Y(x,y)=y$ on $\Omega=\mathsf X\times\mathsf Y$. Give the joint law by
$$P(u,0)=\tfrac18,\quad P(u,2)=\tfrac14,\quad P(u,4)=\tfrac18,\quad P(v,2)=\tfrac14,\quad P(v,6)=\tfrac14,$$
with all other atoms having probability zero, and set $P_X(x):=\sum_yP(x,y)$. Use squared loss $\ell(a,y)=(a-y)^2$. For $x\in\{u,v\}$ define the conditional mean $m(x):=\sum_y yP(x,y)/P_X(x)$. Then $m(u)=2$ and $m(v)=4$, and the predictor $f^*(x)=m(x)$ uniquely minimizes population squared risk over $\mathcal F$, with risk $3$.

## Facts & Assumptions

**Given:** The finite spaces, joint law, real-valued predictor class and squared loss stated in the example.

[F1] Population risk is the expectation of the nonnegative loss under the joint law. [[def-population-and-empirical-risk]]

[F2] On a positive-probability event in a finite probability space, conditional expectation is the normalized finite weighted sum. [[lem-finite-event-conditional-expectation-formula]]

[F3] Expectation splits over a finite positive-probability partition as the probability-weighted sum of the conditional expectations. [[lem-finite-event-conditional-expectation-formula]]

## Verification

1.1 The displayed atom weights sum to one and $P_X(u)=P_X(v)=1/2$. Applying [F2] to the two events $\{X=u\}$ and $\{X=v\}$ gives conditional means $m(u)=2$, $m(v)=4$, and conditional second moments $E[Y^2\mid X=u]=6$, $E[Y^2\mid X=v]=20$. [given, F2, algebra]

2.1 For any predictor $g$, expansion on each event gives $E[(g(u)-Y)^2\mid X=u]=(g(u)-2)^2+2$ and $E[(g(v)-Y)^2\mid X=v]=(g(v)-4)^2+4$. The partition identity in [F3] and [F1] therefore give $R_P(g)=\tfrac12((g(u)-2)^2+2)+\tfrac12((g(v)-4)^2+4)\ge3$, with equality exactly when $g(u)=2$ and $g(v)=4$. [F1, F3, given, step 1.1, algebra] ∎
