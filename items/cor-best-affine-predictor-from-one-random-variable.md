---
id: cor-best-affine-predictor-from-one-random-variable
kind: corollary
title: "Best affine prediction from one random variable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-normal-equations-for-best-affine-l2-prediction, def-moments-variance-and-covariance]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Jean-Francois Le Gall, Integration, Probabilities and Stochastic Processes, Section 8.2.2"
      url: "https://www.imo.universite-paris-saclay.fr/~jean-francois.le-gall/IPPA2.pdf"
---

## Statement

Let $X$ and $Y$ be square-integrable real random variables.

- If $\operatorname{Var}(Y)>0$, the unique best affine predictor of $X$ from $Y$
  is
  $$\mathbb E[X]+\frac{\operatorname{Cov}(X,Y)}{\operatorname{Var}(Y)}(Y-\mathbb E[Y]).$$
- If $\operatorname{Var}(Y)=0$, then every best affine predictor is almost surely
  equal to the constant $\mathbb E[X]$.

## Facts & Assumptions

**Given:** Square-integrable real random variables $X,Y$.

[L1] Best affine $L^2$ predictors are characterized by the normal equations ([[thm-normal-equations-for-best-affine-l2-prediction]]).

[L2] Variance is $\operatorname{Cov}(Y,Y)$ ([[def-moments-variance-and-covariance]]).

## Proof

**Proof technique:** direct.

1.1 With one predictor variable, the normal equation from [L1] is $$\operatorname{Cov}(Y,Y)a_1=\operatorname{Cov}(X,Y).$$ By [L2], this is $$\operatorname{Var}(Y)a_1=\operatorname{Cov}(X,Y).$$ [L1, L2]

2.1 If $\operatorname{Var}(Y)=0$, then step 1.1 makes the normal equation $$0\cdot a_1=\operatorname{Cov}(X,Y).$$ Hence every real $a_1$ solves it, and [L1] says that all corresponding affine predictors yield the same optimal class. Taking $a_1=0$ gives the constant predictor $\mathbb E[X]$, so every best affine predictor is almost surely equal to that constant. [step 1.1, L1, L2, algebra]

2.2 If $\operatorname{Var}(Y)>0$, step 1.1 gives $$a_1=\frac{\operatorname{Cov}(X,Y)}{\operatorname{Var}(Y)}.$$ Substituting this into the intercept formula from [L1] yields the displayed predictor $$a_0+a_1Y=\mathbb E[X]+\frac{\operatorname{Cov}(X,Y)}{\operatorname{Var}(Y)}(Y-\mathbb E[Y]).$$ [step 1.1, L1, L2, algebra]

3.1 Steps 2.2 and 2.1 give the positive-variance and zero-variance cases. [step 2.2, step 2.1] ∎
