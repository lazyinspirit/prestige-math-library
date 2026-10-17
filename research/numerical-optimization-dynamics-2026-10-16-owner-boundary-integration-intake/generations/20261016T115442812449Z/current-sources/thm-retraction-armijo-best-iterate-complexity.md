---
id: thm-retraction-armijo-best-iterate-complexity
kind: theorem
title: Retraction Armijo reaches an epsilon-gradient iterate in finite budget
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - thm-retraction-armijo-acceptance-and-step-lower-bound
  - alg-riemannian-armijo-backtracking
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
  - title: "P.-A. Absil, R. Mahony, and R. Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 4 (2008)"
    url: "https://assets.press.princeton.edu/chapters/absil/Absil_Chap4.pdf"
    locator: "Complete 37-page chapter, §4.2: retraction Armijo search and sufficient decrease."
  - title: "Nicolas Boumal, An Introduction to Optimization on Smooth Manifolds (2023 prepublication)"
    url: "https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf"
    locator: "Complete 367-page book, §§4.3–4.5: line searches and pullback regularity."
  - title: "Nicolas Boumal, P.-A. Absil, and Coralia Cartis, Global rates of convergence for nonconvex optimization on manifolds (2018), arXiv v2"
    url: "https://arxiv.org/pdf/1605.08101"
    locator: "Complete 33-page PDF, §2.2 and Appendices B–C: Armijo steps, local retraction radius and sufficient-decrease proof."
verification:
  precheck: n/a
---

## Statement

Under the hypotheses of [[thm-retraction-armijo-acceptance-and-step-lower-bound]],
assume $f$ is bounded below by $f_{\inf}$ and every nonstationary call's finite
budget reaches the stated $\delta$. For $N\ge1$ accepted updates $x_0,\ldots,x_N$,
$$\min_{0\le k<N}\|\operatorname{grad}f(x_k)\|^2 \le\frac{f(x_0)-f_{\inf}}{a\beta\delta N}.$$
In particular, after more than
$(f(x_0)-f_{\inf})/(a\beta\delta\epsilon^2)$ accepted updates, some iterate
among the pre-update points has gradient norm at most $\epsilon$. The order is
$O(\epsilon^{-2})$ with the displayed constants fixed. This counts accepted
updates; it does not assert an evaluation bound independent of the finite
backtracking budgets.

## Facts & Assumptions

**Given:** The Armijo acceptance and step bound, lower bound $f_{\inf}$, constants $a,\beta,\delta>0$, and $N$ accepted updates.

[F1] Every nonstationary call accepts a step $t_k\ge\beta\delta$ ([[thm-retraction-armijo-acceptance-and-step-lower-bound]]).

[F2] An accepted Armijo update satisfies $f(x_{k+1})\le f(x_k)-a t_k\|\operatorname{grad}f(x_k)\|^2$ ([[alg-riemannian-armijo-backtracking]]).

## Proof

**Proof technique:** telescope the sufficient decreases.

1.1 For every accepted update, [F1] and [F2] imply $f(x_k)-f(x_{k+1})\ge a\beta\delta\|\operatorname{grad}f(x_k)\|^2$. Summing for $k=0,\ldots,N-1$ telescopes to $$a\beta\delta\sum_{k=0}^{N-1}\|\operatorname{grad}f(x_k)\|^2\le f(x_0)-f(x_N)\le f(x_0)-f_{\inf}.$$ At least one of the $N$ nonnegative terms is no greater than their average, giving the stated bound. [F1, F2, given, algebra]

2.1 If every pre-update gradient norm were greater than $\epsilon$, the sum in step 1.1 would exceed $N\epsilon^2$. This contradicts its upper bound whenever $N>(f(x_0)-f_{\inf})/(a\beta\delta\epsilon^2)$, proving the finite accepted-update claim. [step 1.1, given, contradiction] ∎