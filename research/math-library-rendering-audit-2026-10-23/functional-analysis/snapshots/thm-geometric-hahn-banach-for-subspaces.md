---
id: thm-geometric-hahn-banach-for-subspaces
kind: theorem
title: Geometric Hahn--Banach theorem for subspaces
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-continuous-annihilator-of-a-subspace, thm-norm-preserving-extension-from-any-subspace, thm-metric-closure-characterisation, def-normed-subspace]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Theo Buehler and Dietmar Salamon, Functional Analysis, Theorem 2.53
      url: https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-08-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice. For a linear subspace $M\subseteq X$ and $x\notin\overline M$, there is
$f\in M^\perp$ with $f(x)=1$.

## Facts & Assumptions

**Given:** The Axiom of Choice, A subspace $M\subseteq X$ and $x\notin\overline M$.

[A1] AC is used through norm-preserving extension [F2] in step 3.1.

[F1] $x\notin\overline M$ exactly when $\delta=\operatorname{dist}(x,M)$ is positive ([[thm-metric-closure-characterisation]]).

[F2] A bounded functional on any subspace extends to the ambient normed space without increasing its norm ([[thm-norm-preserving-extension-from-any-subspace]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $\delta=\operatorname{dist}(x,M)>0$. On $M+\mathbb Kx$ define $g(m+\lambda x)=\lambda$; the representation is unique because $x\notin M$. [F1, given, construct]

2.1 For $\lambda\ne0$, $\|m+\lambda x\|=|\lambda|\|x+m/\lambda\|\ge|\lambda|\delta$, while the case $\lambda=0$ is immediate. Thus $\|g\|\le1/\delta$. [step 1.1, F1, algebra]

3.1 Extend $g$ by [F2] to $f\in X^*$. Then $f|_M=0$ and $f(x)=1$, so $f\in M^\perp$ as required. [step 2.1, F2] ∎
