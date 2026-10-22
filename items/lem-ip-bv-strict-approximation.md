---
id: lem-ip-bv-strict-approximation
kind: lemma
title: Strict smooth approximation in BV
status: draft
origin: pipeline
deps:
  - def-ip-spatial-bv-and-distributional-tv
  - lem-ip-bv-test-field-characterization-and-lsc
  - def-countable-choice
  - thm-lebesgue-measure-is-a-radon-measure-on-rn
  - def-l-one-approximate-identity-on-rn
  - def-mollifier-family-generated-by-a-unit-mass-smooth-bump
  - lem-ip-open-euclidean-locally-finite-smooth-partition
  - lem-smooth-bump-between-concentric-euclidean-balls
  - prop-mollifier-families-are-l-one-approximate-identities
  - thm-l-one-approximate-identities-converge-in-l-p
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
    - title: "BV Functions minicourse, Oxford Mathematical Institute, Version 3.0"
      url: "https://www.maths.ox.ac.uk/system/files/attachments/BV_minicourse_Slides_Version3_0.pdf"
    - title: "Piotr Rybka, The space in variational and evolution problems — Lecture Notes in Mathematical Sciences 15"
      url: "https://www.ms.u-tokyo.ac.jp/publication/docs/lecturenotes15-rybka.pdf"
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
---

## Statement

Assume Countable Choice. For every open $\Omega\subseteq\mathbb R^n$ and $u\in BV(\Omega)$ there is a sequence $u_k\in C^\infty(\Omega)$ such that $u_k\to u$ in $L^1(\Omega)$ and $\int_\Omega |\nabla u_k|\,dx\to TV(u;\Omega)$. When $\Omega=\mathbb R^n$, the approximating functions may be chosen compactly supported.

## Statement references

[[def-ip-spatial-bv-and-distributional-tv|Spatial BV and total variation.]]

## Facts & Assumptions

**Given:** Countable Choice, an open set $\Omega\subseteq\mathbb R^n$, and $u\in BV(\Omega)$.

[A1] Countable Choice is used by the Lebesgue regularity and approximate-identity suppliers below. ([[def-countable-choice]])

[F1] Under Countable Choice, Lebesgue measure on $\mathbb R^n$ is Radon and regular, with finite measure on bounded sets. ([[thm-lebesgue-measure-is-a-radon-measure-on-rn]])

[F2] A unit-mass smooth bump generates a nonnegative $L^1$ approximate identity by rescaling. ([[def-l-one-approximate-identity-on-rn]], [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]], [[prop-mollifier-families-are-l-one-approximate-identities]], [[thm-l-one-approximate-identities-converge-in-l-p]])

[F3] Convolution of a locally integrable function with a mollifier is smooth and differentiates under the integral sign. ([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]])

[F4] For nonnegative product-measurable functions on sigma-finite spaces, product and iterated integrals agree. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[F5] The distributional variation equals the test-field supremum and is lower semicontinuous under $L^1$ convergence. ([[lem-ip-bv-test-field-characterization-and-lsc]])

[F6] Every open Euclidean set has a locally finite nonnegative smooth partition of unity with compact supports. ([[lem-ip-open-euclidean-locally-finite-smooth-partition]])

[F7] Smooth cutoffs exist on nested balls, including cutoffs equal to one on a smaller ball. ([[lem-smooth-bump-between-concentric-euclidean-balls]])

[F8] If $w\in C(\Omega;\mathbb R^n)\cap L^1(\Omega;\mathbb R^n)$, then $w\,dx$ is a finite vector Radon measure and its partition variation is $|w|\,dx$. The upper bound follows from the triangle inequality. For the reverse bound, partition the unit sphere into finitely many Borel sets of diameter below $\eta$, project each vector integral onto a representative direction, and let $\eta\downarrow0$. The weighted measure $|w|\,dx$ is finite; truncating its density and using Lebesgue regularity gives outer approximation on Borel sets and compact inner approximation on open sets, hence Radon regularity. Finiteness upgrades compact approximation to all Borel sets: for Borel $A$, choose compact $C\subset\Omega$ with $\rho(\Omega\setminus C)<\epsilon/2$ and open $G\supset\Omega\setminus A$ with $\rho(G\cap A)<\epsilon/2$, where $\rho=|w|\,dx$; then $C\setminus G$ is compact in $A$ and $\rho(A\setminus(C\setminus G))<\epsilon$. ([[thm-lebesgue-measure-is-a-radon-measure-on-rn]])

## Proof

**Given:** Countable Choice, $\Omega$, and $u$ as stated.

1.1 If $\Omega=\varnothing$, take the zero sequence. If $n=0$ and $\Omega\ne\varnothing$, its singleton supports $u$ itself, which is smooth, has zero gradient and variation, and gives the required constant sequence. Assume henceforth $n\ge1$. By [F6], take a countable locally finite nonnegative smooth partition of unity $(\eta_j)_{j\ge1}$ on $\Omega$, with each $\eta_j$ compactly supported in $\Omega$. [F6, given, choose]

2.1 Fix $\delta>0$. Extend each $w_j:=\eta_j u$ by zero to $\mathbb R^n$. Fix a nonnegative unit-mass smooth bump $\rho$ and its rescalings $\rho_\varepsilon$. For each $j$, the approximate-identity property [F2] gives $w_j*\rho_\varepsilon\to w_j$ in $L^1$, and also $(u\nabla\eta_j)*\rho_\varepsilon\to u\nabla\eta_j$ in $L^1$. Choose the least nonnegative integer $m_j$ for which $\varepsilon_j:=2^{-m_j}$ is small enough that $\varepsilon_j<2^{-j}$, the convolution supports remain in $\Omega$, and $\|w_j*\rho_{\varepsilon_j}-w_j\|_1+\|(u\nabla\eta_j)*\rho_{\varepsilon_j}-u\nabla\eta_j\|_1<2^{-j}\delta$. Set $u_\delta:=\sum_j w_j*\rho_{\varepsilon_j}$. This sum is locally finite: for a compact $C\Subset\Omega$, choose $r>0$ so its closed $r$-neighborhood $C_r$ is compactly contained in $\Omega$. For all sufficiently large $j$, $\varepsilon_j<r$; if the thickened support of $w_j$ meets $C$, then $\operatorname{supp}\eta_j$ meets $C_r$, and local finiteness of $(\eta_j)$ leaves only finitely many such indices. Thus $u_\delta$ is smooth by [F3]. Summing the first error terms and using $\sum_j\eta_j=1$ gives $\|u_\delta-u\|_{L^1(\Omega)}<\delta$. [A1, F2, F3, F6, step 1.1, choose, construct]

3.1 The product rule follows by testing against $C_c^\infty$: $D(\eta_j u)=\eta_jDu+u\nabla\eta_j\,dx$. Convolution commutes with distributional derivatives by the defining test pairing and Tonelli [F4] applied to positive and negative parts. These interchanges are product-measurable: each localized $L^1$ density depends only on its own integration variable, and all remaining kernel and smooth test factors are Borel on the product. Absolute integrability follows from the compact supports, the $L^1$ density norms and the finite coordinate variations. Thus [F4] applies before making the interchange. Since $\sum_j\eta_j=1$, local finiteness gives $\sum_j u\nabla\eta_j=0$. Therefore $\nabla u_\delta=\sum_j (\eta_jDu)*\rho_{\varepsilon_j}+\sum_j\big((u\nabla\eta_j)*\rho_{\varepsilon_j}-u\nabla\eta_j\big)$. For the first sum, $| (\eta_jDu)*\rho_{\varepsilon_j}|\le(\eta_j|Du|)*\rho_{\varepsilon_j}$ pointwise, so Tonelli and $\sum_j\eta_j=1$ bound its $L^1$ norm by $|Du|(\Omega)$. The second sum has $L^1$ norm below $\delta$ by the choices in step 2.1. Hence $\int_\Omega|\nabla u_\delta|\,dx\le TV(u;\Omega)+\delta$. [F1, F4, step 2.1, algebra]

4.1 Take $\delta_k=1/(k+1)$ for $k\in\mathbb N$ and set $u_k=u_{\delta_k}$. Step 2.1 gives $u_k\to u$ in $L^1$, while step 3.1 gives $\limsup_k\int_\Omega|\nabla u_k|\,dx\le TV(u;\Omega)$. For each $k$, integration by parts against compactly supported smooth tests identifies $D u_k=\nabla u_k\,dx$. Since $\nabla u_k$ is continuous and integrable by step 3.1, [F8] gives $u_k\in BV(\Omega)$ and $TV(u_k;\Omega)=\int_\Omega|\nabla u_k|\,dx$. The choice-free lower-semicontinuity clause of [F5], now applied to $u_k,u\in BV(\Omega)$, gives the reverse inequality. Thus the variations converge. For $\Omega=\mathbb R^n$, choose a smooth cutoff $\chi_R$ equal to one on $B(0,R)$, supported in $B(0,2R)$, and satisfying $|\nabla\chi_R|\le C/R$, using [F7]. Since each $u_{1/(2(k+1))}$ and its gradient are integrable, choose $R_k$ so its $L^1$ tail, gradient tail, and $C\|u_{1/(2(k+1))}\|_1/R_k$ are all below $1/(k+1)$. The products $\chi_{R_k}u_{1/(2(k+1))}$ are compactly supported and smooth, converge to $u$ in $L^1$, and have gradient integrals bounded above by $TV(u;\mathbb R^n)+O(1/(k+1))$; [F8] puts them in $BV(\mathbb R^n)$ and lower semicontinuity gives convergence of their variations as well. [A1, F5, F7, F8, step 2.1, step 3.1, choose, construct] ∎
