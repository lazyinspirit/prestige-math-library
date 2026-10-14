---
id: lem-lasso-objective-has-minimizer
kind: lemma
title: "The Lasso objective has a nonempty compact convex minimizer set"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-euclidean-spheres-and-closed-balls
  - def-lasso-estimator
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 2, Definition 2.12"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Peter J. Bickel, Ya'acov Ritov and Alexandre B. Tsybakov, Simultaneous Analysis of Lasso and Dantzig Selector, Section 7"
      url: "https://www.stat.berkeley.edu/~bickel/BickelRitovTsybakov2009aos.pdf"
---

## Statement

Fix integers $n,d\ge1$, a deterministic matrix $X\in\mathbb R^{n\times d}$, a response $y\in\mathbb R^n$, and a penalty $\tau>0$. The minimizer set $\mathcal M(y)$ of [[def-lasso-estimator]] is nonempty, compact, and convex.

## Facts & Assumptions

**Given:** $n,d\ge1$, $X\in\mathbb R^{n\times d}$, $y\in\mathbb R^n$, and $\tau>0$.

[F1] $Q_y(\theta)=n^{-1}\|y-X\theta\|_2^2+2\tau\|\theta\|_1$ and $\mathcal M(y)=\arg\min_\theta Q_y(\theta)$ ([[def-lasso-estimator]]).

[F2] Closed bounded subsets of $\mathbb R^d$ are compact, and continuous real functions on nonempty compact sets attain minima ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

[F3] The Euclidean norm is $\|\theta\|_2=(\sum_j\theta_j^2)^{1/2}$ ([[def-euclidean-spheres-and-closed-balls]]).

## Proof

1.1 The function $Q_y$ is continuous. For $0\le t\le1$, the identity $\|ta+(1-t)b\|_2^2=t\|a\|_2^2+(1-t)\|b\|_2^2-t(1-t)\|a-b\|_2^2$ proves convexity of the squared-residual term, while $|tu+(1-t)v|\le t|u|+(1-t)|v|$ in each coordinate proves convexity of $\|\cdot\|_1$. Since $\|\theta\|_1=\sum_j|\theta_j|\ge\|\theta\|_2$ (squaring both sides reduces this to nonnegative cross terms $2|\theta_j||\theta_k|$), $Q_y(\theta)\ge2\tau\|\theta\|_2\to\infty$ as $\|\theta\|_2\to\infty$. Choose $R>0$ with $2\tau R>Q_y(0)$. By [F2], $Q_y$ attains a minimum on the closed radius-$R$ ball; every point outside that ball has objective greater than $Q_y(0)$, so a global minimum is attained inside the ball. [F1, F2, F3, given, algebra, choose]

2.1 The minimizer set is closed as the inverse image $Q_y^{-1}(\{\min Q_y\})$ of a closed singleton under a continuous function, and it is contained in the closed radius-$R$ ball from step 1.1. Hence it is compact by [F2]. If $\theta_1,\theta_2$ are minimizers and $0\le t\le1$, convexity gives $Q_y(t\theta_1+(1-t)\theta_2)\le tQ_y(\theta_1)+(1-t)Q_y(\theta_2)=\min Q_y$; by minimality equality holds, so the minimizer set is convex. [F1, F2, step 1.1, algebra] ∎
