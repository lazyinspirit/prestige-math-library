---
id: cex-conformal-rare-subgroup-poor-conditional-coverage
kind: counterexample
title: "Marginal split coverage need not give rare-subgroup coverage"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 8
deps:
  - alg-split-conformal-prediction-set
  - thm-split-conformal-marginal-coverage
  - def-independent-random-elements
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
---

## Statement refuted

Marginal split-conformal coverage at level $1-\alpha$ forces coverage at least
$1-\alpha$ conditional on every feature subgroup.

## Facts & Assumptions

**Given:** The feature group space $\{A,B\}$ and response space $\{0,1\}$ have
their power-set sigma-algebras. The group variable satisfies $P(G=A)=0.01$ and
$P(G=B)=0.99$, and the response is always $Y=0$. There are nine calibration
examples and one test example, all mutually independent and identically
distributed according to this law. The score is $s(G,y)=\mathbf1\{G=A\}$, and
$\alpha=0.1$.

[F1] Independence of random elements means their generated sigma-algebras are independent, so events determined by distinct examples factor. [[def-independent-random-elements]]

[F2] The split algorithm uses $k=\lceil(m+1)(1-\alpha)\rceil$ and predicts $y$ when its score is at most the calibration threshold. [[alg-split-conformal-prediction-set]]

[F3] The split conformal theorem guarantees marginal coverage at least $1-\alpha$ under exchangeability. [[thm-split-conformal-marginal-coverage]]

## Counterexample

1.1 For $m=9$ and $\alpha=1/10$, $k=\lceil10\cdot9/10\rceil=9$, so $q$ is the maximum of the nine calibration scores. Each score is $1$ with probability $1/100$ and $0$ with probability $99/100$. The events $\{G_i=B\}$ are measurable from their respective examples, so [F1] makes them mutually independent and independent of $\{G_{10}=A\}$. Conditional on $G_{10}=A$, no calibration example is in group $A$ with probability $\prod_{i=1}^9\mathbb P(G_i=B)=(99/100)^9$. The test score is $1$ and is covered exactly when at least one calibration example has group $A$; thus the conditional coverage is $1-(99/100)^9\approx864827/10^7<9/10$. [given, F1, F2]

2.1 A group-$B$ test has score $0\le q$ and is always covered. Hence marginal coverage is $99/100+(1/100)(1-(99/100)^9)\approx9908648/10^7\ge9/10$, consistent with [F3], while the rare-group conditional coverage violates the refuted claim. [given, F2, F3, step 1.1] ∎
