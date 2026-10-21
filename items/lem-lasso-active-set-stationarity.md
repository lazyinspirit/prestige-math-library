---
id: lem-lasso-active-set-stationarity
kind: lemma
title: The active coordinates of a signed Lasso optimizer satisfy restricted normal equations
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-linear-regression-objectives]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Wainwright, Sharp Thresholds for High-Dimensional and Noisy Recovery of Sparsity, 2006, §2.3"
      url: "https://arxiv.org/pdf/math/0605740"
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Definition 2.12"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Statement

Let $X\in\mathbb R^{n\times p}$, $y\in\mathbb R^n$, $\lambda>0$, and let $S\subseteq\{1,\ldots,p\}$ be nonempty. Assume the active design $X_S$ has full column rank. If an optimizer $\widehat\beta$ of $\|y-X\beta\|_2^2/(2n)+\lambda\|\beta\|_1$ has support exactly $S$ and sign vector $b=\operatorname{sgn}(\widehat\beta_S)\in\{-1,1\}^{|S|}$, then
$$\widehat\beta_S=(X_S^{\mathsf T}X_S/n)^{-1}(X_S^{\mathsf T}y/n-\lambda b).$$
This is a necessary active-coordinate condition only; it does not assert that the candidate satisfies any inactive-coordinate condition.

## Statement references

[Wainwright 2006, §2.3, primal-dual witness construction](https://arxiv.org/pdf/math/0605740)

[Rigollet and Hütter, Definition 2.12](https://arxiv.org/pdf/2310.19244v1)

## Facts & Assumptions

**Given:** A finite fixed-design Lasso problem, a nonempty active set $S$, an optimizer supported on $S$ with nonzero active coordinates, and full column rank of $X_S$.

[F1] The objective uses loss $\|y-X\beta\|_2^2/(2n)$ and penalty $\lambda\|\beta\|_1$ ([[def-linear-regression-objectives]]).

## Proof

1.1 Fix an active coordinate $j$. For $|h|<|\widehat\beta_j|$, changing that coefficient by $h$ preserves its sign $b_j$, so the restricted objective is differentiable in $h$ and has a local minimum at $h=0$. Its positive difference quotients are nonnegative and its negative difference quotients are nonpositive; since the derivative exists, it is zero. Differentiating the squared loss and the fixed-sign penalty in each active coordinate gives $X_S^{\mathsf T}(X_S\widehat\beta_S-y)/n+\lambda b=0$. [F1, given, algebra]

2.1 Full column rank makes $X_S^{\mathsf T}X_S/n$ invertible. Rearranging step 1.1 and multiplying by this inverse gives the displayed formula. The argument uses only active stationarity and makes no assertion about inactive coordinates. [step 1.1, given, algebra] ∎
