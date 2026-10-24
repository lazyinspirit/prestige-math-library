---
id: thm-box-step-functions-are-dense-in-l-p-of-rn
kind: theorem
title: "Finite linear combinations of box indicators are dense in $L^p(\\mathbb{R}^n)$ for $1 \\le p < \\infty$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p, lem-finite-measure-sets-are-approximable-by-finite-unions-of-boxes, thm-minkowski-inequality-for-integrals]
landmark: false
proof_strategy: "Start from finite-support simple-function density and replace each measurable support set by a finite union of boxes with small symmetric-difference measure. Minkowski and the coefficient bounds sum the set-approximation errors."
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Statement

Assume the Axiom of Countable Choice.

Let $1 \le p < \infty$. Finite linear combinations of indicator functions of
boxes are dense in $L^p(\mathbb{R}^n)$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, $1 \le p < \infty$, $\varepsilon > 0$, and $f \in L^p(\mathbb{R}^n)$.

[L1] Simple functions with finite-measure support are dense in $L^p$ ([[thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p]]).

[L2] Every finite-measure measurable set can be approximated in symmetric difference by a finite union of boxes ([[lem-finite-measure-sets-are-approximable-by-finite-unions-of-boxes]]).

[L3] Minkowski's inequality is available in $L^p$ ([[thm-minkowski-inequality-for-integrals]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose a simple function [L1, L2, given, choose] $$ s = \sum_{j=1}^m a_j\,\mathbf{1}_{E_j} $$ with each $E_j$ of finite measure and $\|f-s\|_p < \varepsilon/2$. For each $j$, choose a finite union of boxes $B_j$ with $$ \lambda_n(E_j \triangle B_j) < \left(\frac{\varepsilon}{2m(1+\sum_{j=1}^m |a_j|)}\right)^p $$ by [L2]. [L1, L2, given, choose]

2.1 Put [L3, step 1.1, algebra] $$ t := \sum_{j=1}^m a_j\,\mathbf{1}_{B_j}. $$ Then $$ \|s-t\|_p \le \sum_{j=1}^m |a_j|\,\|\mathbf{1}_{E_j}-\mathbf{1}_{B_j}\|_p = \sum_{j=1}^m |a_j|\,\lambda_n(E_j \triangle B_j)^{1/p} < \varepsilon/2 $$ by [L3] and the choice of the $B_j$. [L3, step 1.1, algebra]

3.1 Therefore [step 1.1, step 2.1, algebra] $$ \|f-t\|_p \le \|f-s\|_p + \|s-t\|_p < \varepsilon. $$ Since $t$ is a finite linear combination of box indicators, these functions are dense in $L^p(\mathbb{R}^n)$. [step 1.1, step 2.1, algebra] ∎
