---
id: lem-smooth-bump-between-concentric-euclidean-balls
kind: lemma
title: "A smooth bump between concentric Euclidean balls"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-the-standard-smooth-step-function, thm-chain-rule-for-total-derivatives, thm-algebra-of-total-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Statement

Let $0<r<R$ and $n\ge 1$. Then there exists a smooth function $\rho:\mathbb R^n\to [0,1]$ such that $\rho=1$ on $\overline B_r(0)$ and $\operatorname{supp}(\rho)\subseteq B_R(0)$.

## Facts & Assumptions

**Given:** Real numbers $0<r<R$.

[F1] The standard smooth step function $\sigma$ is smooth, vanishes on $(-\infty,0]$, and equals $1$ on $[1,\infty)$ ([[def-the-standard-smooth-step-function]]).

[L1] Total derivatives satisfy the Euclidean chain rule and are stable under sums and scalar multiples ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-total-derivatives]]).

[A1] The function $q(x):=\|x\|^2$ is smooth on $\mathbb R^n$.

## Proof

**Proof technique:** direct.

1.1 Define $u(x):=(R^2-\|x\|^2)/(R^2-r^2)$ and $\rho(x):=\sigma(u(x))$; then $u$ is smooth by [A1] and [L1], so $\rho$ is smooth by [F1] and [L1]. [A1, F1, L1, construct]

2.1 If $\|x\|\le r$, then $u(x)\ge 1$, so $\rho(x)=1$ by [F1]; if $\|x\|\ge R$, then $u(x)\le 0$, so $\rho(x)=0$ by [F1]. [F1, step 1.1]

3.1 Thus $\rho$ maps into $[0,1]$, equals $1$ on $\overline B_r(0)$, and vanishes on $\mathbb R^n\setminus B_R(0)$, so $\operatorname{supp}(\rho)\subseteq B_R(0)$. [step 2.1] ∎
