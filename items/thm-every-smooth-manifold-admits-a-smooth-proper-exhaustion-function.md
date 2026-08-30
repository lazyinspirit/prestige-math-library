---
id: thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function
kind: theorem
title: "Every smooth manifold admits a smooth proper exhaustion function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-every-manifold-has-a-compact-exhaustion, thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set, thm-a-locally-finite-sum-of-smooth-functions-is-smooth]
justified_by: []
aliases: []
landmark: true
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

Every smooth manifold admits a smooth proper function $h:M\to [0,\infty)$.

## Facts & Assumptions

**Given:** A smooth manifold $M$.

[L1] The manifold admits a compact exhaustion $(K_n)_{n\ge 1}$ ([[lem-every-manifold-has-a-compact-exhaustion]]).

[L2] Closed sets inside open sets admit smooth cutoffs equal to $1$ near the closed set and supported in the open set ([[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]]).

[L3] Locally finite sums of smooth functions are smooth ([[thm-a-locally-finite-sum-of-smooth-functions-is-smooth]]).

[A1] Closed subsets of compact spaces are compact.

## Proof

**Proof technique:** direct.

1.1 Let $(K_n)$ be the exhaustion from [L1], and set $K_0=K_{-1}=\varnothing$. For each $n\ge 1$, apply [L2] to $A_n:=K_n\setminus \operatorname{int}(K_{n-1})$ inside the open set $\operatorname{int}(K_{n+1})\setminus K_{n-2}$ to obtain a smooth function $\rho_n:M\to [0,1]$ equal to $1$ on a neighbourhood of $A_n$ and supported in $\operatorname{int}(K_{n+1})\setminus K_{n-2}$. [L1, L2, choose]

2.1 The supports of $(\rho_n)$ are locally finite. Indeed, if $x\in A_m:=K_m\setminus \operatorname{int}(K_{m-1})$, then $$\operatorname{supp}(\rho_n)\subseteq \operatorname{int}(K_{n+1})\setminus K_{n-2}$$ from step 1.1. If $n\le m-3$, then $\operatorname{int}(K_{n+1})\subseteq \operatorname{int}(K_{m-2})\subseteq \operatorname{int}(K_{m-1})$, so $x\notin \operatorname{supp}(\rho_n)$. If $n\ge m+3$, then $K_{n-2}\supseteq K_{m+1}\supseteq K_m$, so again $x\notin \operatorname{supp}(\rho_n)$. Thus only $\rho_{m-2},\rho_{m-1},\rho_m,\rho_{m+1},\rho_{m+2}$ can be nonzero at $x$. Therefore $$h:=\sum_{n\ge 1} n\rho_n$$ is a smooth nonnegative function by [L3]. [L3, step 1.1, algebra]

3.1 If $c\ge 0$ and $N>c$, then any point $x\notin K_N$ lies in some annulus $A_n$ with $n>N$, so $\rho_n(x)=1$ and hence $h(x)\ge n>N>c$. Thus $\{x:h(x)\le c\}\subseteq K_N$, and this sublevel set is compact by [A1]. [A1, step 1.1, step 2.1]

4.1 Every closed sublevel set of $h$ is compact, so $h$ is proper. [step 3.1] ∎
