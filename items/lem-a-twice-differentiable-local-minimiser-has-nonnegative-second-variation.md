---
id: lem-a-twice-differentiable-local-minimiser-has-nonnegative-second-variation
kind: lemma
title: "A twice differentiable local minimiser has nonnegative second variation"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-c-k-map-between-banach-spaces, def-frechet-derivative-between-banach-spaces, def-local-extremum, thm-fermat-interior-extremum, cor-taylor-lagrange-and-cauchy-remainders, thm-chain-sum-product-and-composition-rules-for-banach-derivatives]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 5 Section 5.1, non-negativity of the second variation, printed p. 57"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.1, differentiation in Banach spaces (framework for differentiating along a curve), printed pp. 293-296"
verification:
  precheck: pass
---

## Statement

Let $X$ be a real Banach space, $U\subseteq X$ open, $F:U\to\mathbb R$ of class $C^2$ ([[def-c-k-map-between-banach-spaces]]) and let $u\in U$ be a local minimiser of $F$, meaning that there is $\delta>0$ such that $F(w)\ge F(u)$ whenever $w\in U$ and $\|w-u\|<\delta$. Then for every $v\in X$
$$D^2F(u)[v,v]\ge0,$$
where $D^2F(u)\in\mathcal B(X,\mathcal B(X,\mathbb R))$ is the second Frechet derivative of $F$ at $u$ ([[def-frechet-derivative-between-banach-spaces]]); that is, the second variation of $F$ at $u$ is nonnegative in every direction.

## Facts & Assumptions

**Given:** A real Banach space $X$, an open set $U\subseteq X$, a map $F:U\to\mathbb R$ of class $C^2$, a local minimiser $u\in U$ of $F$, and a direction $v\in X$.

[F1] By the stated definition of local minimality, there is $\delta>0$ with $F(w)\ge F(u)$ for every $w\in U$ with $\|w-u\|<\delta$; in the terminology of [[def-local-extremum]], $0$ is then an interior local minimum of the one-variable function $\varepsilon\mapsto F(u+\varepsilon v)$ ([[def-local-extremum]]).

[F2] The Banach-space calculus of [[def-c-k-map-between-banach-spaces]] together with the chain rule of [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]] gives that $\varphi(\varepsilon):=F(u+\varepsilon v)$, defined for $|\varepsilon|$ small, is of class $C^2$ with $\varphi'(\varepsilon)=DF(u+\varepsilon v)v$ and $\varphi''(\varepsilon)=D^2F(u+\varepsilon v)[v,v]$; in particular $\varphi'(0)=DF(u)v$ and $\varphi''(0)=D^2F(u)[v,v]$, where $D^2F(u)\in\mathcal B(X,\mathcal B(X,\mathbb R))$ is the second Frechet derivative ([[def-frechet-derivative-between-banach-spaces]]).

[F3] If a differentiable function on a real interval has an interior local extremum at a point, then its derivative vanishes there ([[thm-fermat-interior-extremum]]).

[F4] Taylor's formula with Lagrange remainder at order $1$: if $\varphi$ has derivatives through order $2$ on $[0,h]$, then for some $\xi\in(0,h)$ one has $\varphi(h)=\varphi(0)+\varphi'(0)h+\tfrac12\varphi''(\xi)h^2$ ([[cor-taylor-lagrange-and-cauchy-remainders]]).

## Proof

**Proof technique:** direct, by reduction to a one-variable function along a line.

1.1 Reduction to one variable. If $v=0$ then $D^2F(u)[0,0]=0$ because $D^2F(u)$ is linear in each variable, so assume $v\ne0$. Since $U$ is open, there is $\eta>0$ with $u+\varepsilon v\in U$ for $|\varepsilon|<\eta$, and by [F1] there is $\delta>0$ with $F(w)\ge F(u)$ for $\|w-u\|<\delta$. For $|\varepsilon|<\min(\eta,\delta/\|v\|)$ the point $u+\varepsilon v$ lies in $U$ and $\|(u+\varepsilon v)-u\|=|\varepsilon|\|v\|<\delta$, so $\varphi(\varepsilon)\ge\varphi(0)$: the point $0$ is an interior local minimum of $\varphi$. [F1, algebra]

1.2 The derivatives of the reduced function. By [F2] the function $\varphi$ is of class $C^2$ near $0$, its second derivative is continuous there, and $\varphi'(0)=DF(u)v$, $\varphi''(0)=D^2F(u)[v,v]$. [F2]

2.1 Fermat's theorem. In the case $v\ne0$ of step 1.1 the point $0$ lies in the interior of the interval on which $\varphi$ is defined and is an interior local minimum of the differentiable function $\varphi$, so $\varphi'(0)=0$ by [F3]; combined with step 1.2 this gives $DF(u)v=0$. [F3, step 1.2]

3.1 Taylor expansion at order one. Let $h>0$ be small enough that $\varphi$ is of class $C^2$ on $[0,h]$ and $\varphi(h)\ge\varphi(0)$. By [F4] there is $\xi_h\in(0,h)$ with $\varphi(h)-\varphi(0)=\varphi'(0)h+\tfrac12\varphi''(\xi_h)h^2$, and $\varphi'(0)=0$ by step 2.1, so $\varphi(h)-\varphi(0)=\tfrac12\varphi''(\xi_h)h^2$. Since $\varphi(h)-\varphi(0)\ge0$ and $h^2>0$, it follows that $\varphi''(\xi_h)\ge0$. [F4, step 2.1, algebra]

4.1 Passage to the limit. As $h\downarrow0$ one has $\xi_h\to0$ because $0<\xi_h<h$, and $\varphi''$ is continuous at $0$ by step 1.2, so $\varphi''(0)=\lim_{h\downarrow0}\varphi''(\xi_h)\ge0$. In the case $v\ne0$, $\varphi''(0)=D^2F(u)[v,v]$ by step 1.2 and hence $D^2F(u)[v,v]\ge0$; the case $v=0$ was settled in step 1.1. As $v$ was arbitrary, the second variation of $F$ at $u$ is nonnegative in every direction. [step 3.1, step 1.2, step 1.1] ∎
