---
id: ex-sgd-nonlipschitz-loss-no-uniform-stability
kind: example
title: A smooth quadratic loss without global Lipschitzness has unbounded stability
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-uniform-stability
  - thm-sgd-stability-convex-loss
  - def-supervised-learning-problem
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification: {}
sources:
  references:
    - title: "Moritz Hardt, Benjamin Recht, and Yoram Singer, Train faster, generalize better: Stability of stochastic gradient descent, arXiv-version Theorem 3.8 (conference Theorem 3.7)"
      url: "https://arxiv.org/pdf/1509.01240"
      locator: "§3.3, convex stability theorem and its global Lipschitz hypothesis"
---

## Example

Let the instance space be $\{*\}$ with its full sigma-algebra, let the label and action spaces be $\mathbb R$ with their Borel sigma-algebras, take $P$ to be the point mass at $0$, use predictors $f_w(*)=w$, and use loss $\ell(u,y)=\frac12(u-y)^2$. For $w,y\in\mathbb R$, write $g(w,(*,y))=\ell(f_w(*),y)=\frac12(w-y)^2$. For sample size $n=1$, start at $w_0=0$, use $I_1=1$ and $\alpha_1=1/2$, and set $w_1=w_0-\alpha_1\partial_wg(w_0,Z_{I_1})$. For every $a\in\mathbb R$, compare the neighboring samples $S_a=((*,a))$ and $S_0=((*,0))$ at test observation $z_0=(*,0)$. Their output losses differ by $a^2/8$. Since $a$ is arbitrary, this procedure has no finite uniform replacement stability coefficient. The loss is convex and its gradient is $1$-Lipschitz but its values are not globally Lipschitz in $w$, so this example lies outside the convex SGD theorem's hypotheses and is not a counterexample to that theorem.

## Example references

[[def-uniform-stability]] defines the finite replacement-stability requirement.

[[thm-sgd-stability-convex-loss]] requires global Lipschitzness of the per-example loss.

Hardt, Recht, and Singer, arXiv-version Theorem 3.8 (conference Theorem 3.7): [full arXiv paper](https://arxiv.org/pdf/1509.01240).

## Facts & Assumptions

**Given:** The singleton instance space, quadratic loss, one-step update, neighboring samples, and test observation in the Example.

[F1] [[def-uniform-stability]]: a finite stability coefficient must bound the expected test-loss difference for every pair of samples differing in at most one coordinate and every test observation.

[F2] [[thm-sgd-stability-convex-loss]]: the convex SGD guarantee requires a finite global value-Lipschitz constant for every per-example loss.

## Verification

1.1 For any $w,y$ and increment $h$, $g(w+h,(*,y))-g(w,(*,y))=h(w-y)+h^2/2$, so the difference quotient tends to $w-y$ and $\partial_wg(w,(*,y))=w-y$. Thus for $S_a=((*,a))$ the first update is $w_1(S_a)=0-\frac12(0-a)=a/2$, while for $S_0$ it is $w_1(S_0)=0$. [given, construct, algebra]

2.1 At test observation $z_0=(*,0)$, $g(w_1(S_a),z_0)=\frac12(a/2)^2=a^2/8$ and $g(w_1(S_0),z_0)=0$. As $|a|\to\infty$ the absolute difference is unbounded, contradicting any finite uniform coefficient by [F1]. [F1, step 1.1, given, algebra]

3.1 By step 1.1, $|\partial_wg(w,(*,y))-\partial_wg(v,(*,y))|=|w-v|$, so its gradient is $1$-Lipschitz. For $0\le t\le1$, direct expansion gives $(1-t)g(w,(*,y))+tg(v,(*,y))-g((1-t)w+tv,(*,y))=t(1-t)(w-v)^2/2\ge0$, so it is convex. But for $y=0$, $|g(w,(*,0))-g(0,(*,0))|/|w|=|w|/2$ for $w\ne0$, which is unbounded. Thus no finite global Lipschitz constant exists, and [F2] does not apply. [F2, given, step 1.1, algebra] ∎
