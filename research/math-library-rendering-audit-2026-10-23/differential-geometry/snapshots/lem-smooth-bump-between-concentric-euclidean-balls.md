---
id: lem-smooth-bump-between-concentric-euclidean-balls
kind: lemma
title: "A smooth bump between concentric Euclidean balls"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-the-standard-smooth-step-function, def-ck-and-multi-index-notation-in-several-variables, thm-chain-rule, thm-algebra-of-derivatives, def-support-and-compactly-supported-riemann-integral-in-rn]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-08
    scope: "Owner-authorized support and smoothness repair; local checks only, no independent judge"
    delegated_by: owner
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

[F1] The standard smooth step function $\sigma$ is smooth, takes values in $[0,1]$, vanishes on $(-\infty,0]$, and equals $1$ on $[1,\infty)$ ([[def-the-standard-smooth-step-function]]).

[L1] Coordinate differentiation uses the one-variable chain, sum and product rules ([[thm-chain-rule]], [[thm-algebra-of-derivatives]]). Smoothness means that every iterated coordinate derivative exists and is continuous ([[def-ck-and-multi-index-notation-in-several-variables]]).

[F2] The support is the closure of the nonzero locus ([[def-support-and-compactly-supported-riemann-integral-in-rn]]).

## Proof

**Proof technique:** direct.

1.1 Put $s=(r+R)/2$ and $d=s^2-r^2>0$, and define $u(x)=(s^2-\sum_{j=1}^n x_j^2)/d$ and $\rho(x)=\sigma(u(x))$. The coordinate derivatives of $u$ are $\partial_i u=-2x_i/d$, $\partial_j\partial_i u=-2\delta_{ij}/d$, and zero at every higher order, so $u$ is smooth. Here $\delta_{ij}$ is $1$ when $i=j$ and $0$ otherwise. [L1, given, construct]

2.1 Every iterated coordinate derivative of $\rho$ is a finite sum of products of derivatives of $u$ and factors $\sigma^{(k)}(u)$: induction follows by applying the chain and product rules in [L1] to each factor. These factors are continuous by [F1] and step 1.1, so $\rho$ is smooth. [F1, L1, step 1.1]

2.2 If $\|x\|\le r$, then $u(x)\ge1$, so $\rho(x)=1$; if $\|x\|\ge s$, then $u(x)\le0$, so $\rho(x)=0$. Also $0\le\rho\le1$ by [F1]. [F1, step 1.1]

3.1 The nonzero locus lies in $B_s(0)$, whose closure is contained in the closed ball $\overline B_s(0)$. Thus [F2] gives $\operatorname{supp}\rho\subseteq\overline B_s(0)\subseteq B_R(0)$, since $s<R$. Together with steps 2.1 and 2.2 this proves the claim. [F2, step 1.1, step 2.1, step 2.2] ∎
