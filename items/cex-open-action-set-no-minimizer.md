---
id: cex-open-action-set-no-minimizer
kind: counterexample
title: An open action set need not contain a posterior-risk minimizer
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-loss-function-and-risk
  - def-bayes-and-minimax-risk
  - thm-bayes-rule-minimizes-prior-risk
  - def-probability-measure
  - def-regular-conditional-distribution
  - def-standard-borel-space
justified_by: []
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
sources: {}
---

## Statement refuted

Every posterior expected-loss function on a nonempty open action space attains
its infimum.

## Facts & Assumptions

**Given:** The singleton prior, singleton observation, open action interval, and loss in the Counterexample.

[F1] A probability measure on a singleton assigns mass one to its point ([[def-probability-measure]]).

[F2] Risk is the nonnegative integral of loss ([[def-loss-function-and-risk]]).

[F3] A posterior is a regular conditional distribution ([[def-regular-conditional-distribution]]).

[F4] The Bayes-rule theorem assumes a measurable posterior minimizer is attained ([[thm-bayes-rule-minimizes-prior-risk]]).

## Counterexample

**Given:** A one-point parameter space $\Theta=\{0\}$ with prior mass one, a one-point data space with sampling mass one, the open action interval $\mathsf D=(0,1)$, and loss $L(0,a)=a$.

1.1 The prior and data law are point masses on singleton standard-Borel spaces by [F1]; their joint law is the point mass on the singleton pair. Define the posterior to be the point mass at $0$. The only conditioning events are empty or the whole singleton, and the conditional-law identity holds for both, so this is a regular conditional law by [F3]. Integrating $L(0,a)=a$ against it gives posterior risk $q(a)=a$ by [F2]. [given, F1, F2, F3]

2.1 For every $a\in(0,1)$, $q(a)=a>0$, while the sequence $a_n=1/(n+1)$ lies in $(0,1)$ and has $q(a_n)\to0$. Thus $\inf_{a\in(0,1)}q(a)=0$ and the infimum is not attained. The claimed universal minimizer does not exist, which refutes the statement and illustrates the explicit existence premise in [F4]. [F4, step 1.1, algebra] ∎
