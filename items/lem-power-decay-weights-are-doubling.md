---
id: lem-power-decay-weights-are-doubling
kind: lemma
title: Power decay implies doubling
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [def-weight-and-weighted-lp-space, def-axis-parallel-cube-averages-and-cube-maximal-functions, lem-ball-and-cube-maximal-functions-are-comparable, thm-lebesgue-measure-under-dilations-and-reflections, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 7.3.3, the implication (d) implies (a) and the doubling property of A_infinity weights, printed pp. 527-531"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Theorem 4.34 and its proof, printed p. 86"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $w$ be a weight on $\mathbb R^n$
([[def-weight-and-weighted-lp-space]]) and suppose there are constants $C,\delta>0$
such that
$$\frac{w(E)}{w(Q)}\le C\Bigl(\frac{|E|}{|Q|}\Bigr)^\delta$$
for every axis-parallel cube $Q$ and every measurable $E\subseteq Q$. Then the
measure $w\,d\lambda$ is doubling, with a constant depending only on $n$, $C$
and $\delta$: there is $C'=C'(n,C,\delta)<\infty$ with
$w(B(x,2r))\le C'w(B(x,r))$ for all $x\in\mathbb R^n$ and $r>0$.

## Facts & Assumptions

**Given:** Countable Choice; A weight $w$ and constants $C,\delta>0$ with the displayed power decay property.

[F1] $w>0$ and $w<\infty$ Lebesgue-a.e., $w\in L^1_{\mathrm{loc}}$, and $E\mapsto w(E)=\int_Ew\,d\lambda$ is a locally finite measure with the $w$-null sets equal to the Lebesgue-null sets ([[def-weight-and-weighted-lp-space]]).

[F2] $Q(x,\rho)=\prod_i(x_i-\rho,x_i+\rho)$ has side $2\rho$ and Lebesgue measure $(2\rho)^n$; if $E\subseteq F$ are measurable then $w(E)\le w(F)$, and for nested cubes $|Q(x,\rho')|=\rho'^n\rho^{-n}|Q(x,\rho)|$ ([[def-axis-parallel-cube-averages-and-cube-maximal-functions]], [[thm-lebesgue-measure-under-dilations-and-reflections]]).

[F3] A ball $B(x,2r)$ is contained in the cube $Q(x,4r)$, and a cube $Q(x,\rho)$ is contained in $B(x,\sqrt n\rho)$ ([[lem-ball-and-cube-maximal-functions-are-comparable]]).

## Proof

**Proof technique:** direct.

1.1 Choose $\beta\in(0,1)$ with $C\beta^\delta\le\tfrac12$, for instance $\beta:=\min\{\tfrac12,(2C)^{-1/\delta}\}$, and put $\alpha:=1-C\beta^\delta\ge\tfrac12$. If $E\subseteq Q$ is measurable with $|E|\ge(1-\beta)|Q|$, then $|Q\setminus E|\le\beta|Q|$, so the power decay applied to $Q\setminus E$ gives $w(Q\setminus E)\le C\beta^\delta w(Q)$ and hence $w(E)=w(Q)-w(Q\setminus E)\ge\alpha w(Q)>0$. Both $\beta$ and $\alpha$ depend only on $C$ and $\delta$. [F1, F2, given, algebra]

2.1 Fix $x\in\mathbb R^n$ and $r>0$, let $l_1:=4r$ and $l_{j+1}:=(1-\beta)^{1/n}l_j$, and let $k\ge1$ be the least integer with $l_k\le r/\sqrt n$; then $k$ depends only on $n$ and $\beta$, hence only on $n,C,\delta$. By [F2] one has $|Q(x,l_{j+1})|=(1-\beta)|Q(x,l_j)|$, so the shell $Q(x,l_j)\setminus Q(x,l_{j+1})$ has measure $\beta|Q(x,l_j)|$ and step 1.1 applied to $E=Q(x,l_{j+1})$ (whose complement in $Q(x,l_j)$ has measure $\beta|Q(x,l_j)|$) yields $w(Q(x,l_{j+1}))\ge\alpha w(Q(x,l_j))$ for every $j<k$. Iterating, $w(Q(x,4r))\le\alpha^{-(k-1)}w(Q(x,l_k))$. [F2, step 1.1, given, algebra]

3.1 Since $l_k\le r/\sqrt n$, the cube $Q(x,l_k)$ is contained in $B(x,r)$ by [F3], so [F1] gives $w(Q(x,l_k))\le w(B(x,r))$; and $B(x,2r)\subseteq Q(x,4r)$ by [F3], so $w(B(x,2r))\le w(Q(x,4r))\le\alpha^{-(k-1)}w(B(x,r))$. Thus $w\,d\lambda$ is doubling with $C'=\alpha^{-(k-1)}$, a constant depending only on $n$, $C$ and $\delta$; no property of $x$ or $r$ entered beyond the display, and the degenerate case $r>0$ is the only case needed since doubling is asserted for positive radii. [F1, F3, step 2.1, algebra] ∎
