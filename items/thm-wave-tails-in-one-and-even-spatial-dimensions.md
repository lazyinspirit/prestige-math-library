---
id: thm-wave-tails-in-one-and-even-spatial-dimensions
kind: theorem
title: "Wave tails in one and even spatial dimensions: strong Huygens fails"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [def-strong-huygens-principle, thm-even-dimensional-wave-formula-by-descent, thm-dalembert-formula, thm-poisson-formula-for-the-two-dimensional-wave-equation, def-spherical-mean-of-space-dependent-data, def-countable-choice, def-wave-equation-cauchy-data-and-wave-speed, thm-differentiation-under-the-integral-sign, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-algebra-of-derivatives, lem-sphere-and-ball-measures-scale, thm-strong-huygens-principle-in-odd-spatial-dimensions, lem-smooth-bump-between-concentric-euclidean-balls, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, prop-order-and-scalar-rules-for-the-nonnegative-integral]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.1, printed pp. 171–172: the two- versus three-dimensional contrast; §7.2, printed p. 175, (7.24): the general even-dimensional kernel; §4.4, printed pp. 89–90, (4.27) and Problem 4.14: one-dimensional tails"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.1, printed pp. 281-289, remarks (c) and (e): descent to even dimensions fills the interior of the cone"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Strong Huygens
fails in dimension $1$ and in every even dimension $n\ge2$, in the sharp sense
that there are admissible compactly supported data whose difference from the
zero data is supported in a compact subset of the open base ball
$B_{ct_0}(x_0)$ (hence vanishes in a neighbourhood of the sphere
$S(x_0,t_0)$, [[def-strong-huygens-principle]]) yet whose values at
$(x_0,t_0)$ differ.

(i) $n=1$: for every $x_0\in\mathbb R$, $t_0>0$ and every
$u_1\in C_c^1(\mathbb R)$ supported in $(x_0-ct_0,x_0+ct_0)$ with
$\int_{\mathbb R}u_1\ne0$, the pair $(0,u_1)$ has
$$u(x_0,t_0)=\frac1{2c}\int_{x_0-ct_0}^{x_0+ct_0}u_1\ne0$$
by d'Alembert's formula [[thm-dalembert-formula]], while the zero data give
$u\equiv0$.

(ii) $n=2k$ even: for every $x_0,t_0$ and all sufficiently small
$\varepsilon>0$ there are $u_1\in C_c^{k+1}(B_\varepsilon(x_0))$, $u_1\ge0$,
$u_1\not\equiv0$, with
$$u(x_0,t_0)=\int_{B_\varepsilon(x_0)}u_1(y)\,K(|y-x_0|,t_0)\,dy\ne0,$$
where, with $D_t=t^{-1}\partial_t$, the kernel of the even-dimensional formula
[[thm-even-dimensional-wave-formula-by-descent]] is
$$K(\rho,t)=c^{1-n}D_t^{k-1}\Bigl[\frac{(c^2t^2-\rho^2)^{-1/2}}{n!!\,V_n}\Bigr],\qquad K(0,t_0)=c^{-n}(n!!\,V_n)^{-1}(-1)^{k-1}(2k-3)!!\,t_0^{-(n-1)}\ne0$$
(with $(2k-3)!!=1$ for $k=1$), so $K$ has a constant sign on a small ball and
the integral is nonzero; the $n=2$ instance is Poisson's formula
[[thm-poisson-formula-for-the-two-dimensional-wave-equation]].

Thus data supported strictly inside the base ball affect the value: failure is
proved by interior data, not merely by a formula contrast.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; the two families of admissible data of (i) and (ii); for (ii) the descended even-dimensional formula with $D_t=t^{-1}\partial_t$, $V_n=|B_1^n|$, $\omega_{n-1}=nV_n$ ([[lem-sphere-and-ball-measures-scale]]).

[F1] Even-dimensional formula by descent: for admissible data $(u_0,u_1)$ in dimension $n=2k$ the solution is given by the descended spherical-mean formula, whose velocity term is $c^{1-n}D_t^{k-1}W_{u_1}(x,t)$ with $W_{u_1}(x,t)=\int_{B_{ct}(x)}u_1(y)(c^2t^2-|y-x|^2)^{-1/2}(n!!V_n)^{-1}\,dy$. ([[thm-even-dimensional-wave-formula-by-descent]], [[def-spherical-mean-of-space-dependent-data]])

[F2] Poisson's formula is the case $n=2$ of the same family. ([[thm-poisson-formula-for-the-two-dimensional-wave-equation]])

[F3] D'Alembert's formula: $u(x,t)=\frac12[u_0(x+ct)+u_0(x-ct)]+\frac1{2c}\int_{x-ct}^{x+ct}u_1$. ([[thm-dalembert-formula]])

[F4] Differentiation under the integral sign, applied on the compact ball where the integrand and all its $t$-derivatives are smooth. ([[thm-differentiation-under-the-integral-sign]])

[F5] The nonnegative integral is monotone and positively homogeneous; a nonnegative function has integral zero exactly when it vanishes almost everywhere. A continuous nonzero function of constant sign on an open ball therefore has nonzero integral, since its absolute value is positive on a smaller ball of positive measure. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]], [[lem-sphere-and-ball-measures-scale]])

[F6] For $D_t=t^{-1}\partial_t$ one has $D_t[t^\alpha]=\alpha t^{\alpha-2}$, hence $D_t^{k-1}[t^{-1}]=(-1)^{k-1}(2k-3)!!\,t^{-(2k-1)}$. ([[thm-algebra-of-derivatives]])

[F7] The strong Huygens principle holds in every odd spatial dimension $n\ge3$ ([[thm-strong-huygens-principle-in-odd-spatial-dimensions]]).

[F8] Translated smooth bumps exist: for $0<a<b$ choose the supplied $0\le\rho\le1$, equal to one on $\overline B_a(0)$ and supported in $B_b(0)$, and use $y\mapsto\rho(y-x_0)$. ([[lem-smooth-bump-between-concentric-euclidean-balls]])

## Proof

1.1 The one-dimensional tail: with $u_0=0$, [F3] gives $u(x_0,t_0)=\frac1{2c}\int_{x_0-ct_0}^{x_0+ct_0}u_1$ for every admissible $u_1\in C_c^1(\mathbb R)$, and if $u_1$ is supported in the open interval $(x_0-ct_0,x_0+ct_0)$ and has nonzero integral then this value is nonzero, while the zero data give $u\equiv0$; the difference $(0,u_1)$ is supported strictly inside the base ball $(x_0-ct_0,x_0+ct_0)$, so this is a genuine failure of strong Huygens in dimension $1$. [given, F3, algebra]

1.2 The descended kernel and its value at the centre: for even $n=2k$ and data $(0,u_1)$, [F1] reads $u(x,t)=c^{1-n}D_t^{k-1}W_{u_1}(x,t)$ with the displayed $W_{u_1}$; for any $u_1$ supported in $B_\varepsilon(x_0)$ with $0<\varepsilon<ct_0$, choose $\delta>0$ with $c(t_0-\delta)>\varepsilon$; then $(c^2t^2-\rho^2)^{-1/2}$ is $C^\infty$ on a neighbourhood of $[t_0-\delta,t_0+\delta]\times\overline B_\varepsilon(x_0)$ on this compact parameter set, its derivatives times the bounded compactly supported $u_1$ have a constant integrable majorant, so [F4] lets $D_t^{k-1}$ be taken under the integral, giving $u(x_0,t_0)=\int_{B_\varepsilon(x_0)}u_1(y)K(|y-x_0|,t_0)\,dy$ with $K$ as displayed; at $\rho=0$, [F6] with $\alpha=-1$ gives $K(0,t_0)=c^{1-n}(n!!V_n)^{-1}c^{-1}D_t^{k-1}[t^{-1}]=c^{-n}(n!!V_n)^{-1}(-1)^{k-1}(2k-3)!!t_0^{-(2k-1)}\ne0$, and for $k=1$ the empty product is $1$, recovering Poisson's kernel at the centre [F2]. [given, F1, F2, F4, F6, algebra]

2.1 Nonzero value from interior data: $K(\rho,t_0)$ is continuous in $\rho$ on a neighbourhood of $0$ because the differentiated expression is smooth there, and $K(0,t_0)\ne0$, so there is $0<\varepsilon_0<ct_0$ with $K$ of one constant sign on $[0,\varepsilon_0]$; choosing now $0<\varepsilon<\varepsilon_0$ and any $u_1\in C_c^{k+1}(B_\varepsilon(x_0))$ with $u_1\ge0$, $u_1\not\equiv0$ (take the translated smooth bump of [F8] with inner radius $\varepsilon/2$ and outer radius $\varepsilon$), the product $u_1(y)K(|y-x_0|,t_0)$ is continuous on the ball, of constant sign and nonzero somewhere, so by [F5] its integral $u(x_0,t_0)$ is nonzero; the data $(0,u_1)$ are admissible and supported in a compact subset of the open base ball, while the zero data give the value $0$, so strong Huygens fails in dimension $n$. [given, step 1.2, F5, F8, algebra]

3.1 Conclusion: dimensions $1$ and every even $n\ge2$ admit admissible data that vanish on a neighbourhood of the sphere $S(x_0,t_0)$ yet change the value $u(x_0,t_0)$, by [step 1.1] and [step 2.1]; by [F7] the strong Huygens principle holds in every odd dimension $n\ge3$. Thus it fails in exactly dimensions $1$ and even $n\ge2$, and the failures are witnessed by data supported strictly inside the base ball. [step 1.1, step 2.1, F7] ∎
