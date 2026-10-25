---
id: lem-complex-time-heat-kernel-is-lone-differentiable-in-its-parameter
kind: lemma
title: The complex-time heat kernel is L1-differentiable in its parameter
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps:
  - thm-ftc-second-part
  - thm-chain-rule-for-complex-derivatives
  - def-complex-time-heat-kernel-on-a-proper-sector
  - def-countable-choice
  - thm-dominated-convergence
  - cor-mean-value-theorem
  - def-ck-euclidean-maps-and-diffeomorphisms
  - thm-algebra-of-complex-derivatives
  - thm-chain-rule
  - def-metric-compactness
  - thm-heine-borel-rn
  - cor-bolzano-weierstrass-in-rn
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Roland Schnaubelt, Evolution Equations (KIT lecture notes, Chapter 2)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "§2.3 (analyticity and differentiation of the semigroup in its parameter)"
    - title: "Martin Hairer, An Introduction to Stochastic PDEs (lecture notes, Chapter 4)"
      url: "https://www.hairer.org/SPDEs.pdf"
      locator: '§4.3, printed pp. 46–47 (the definition of analytic semigroup includes analyticity of $z\mapsto T(z)$ in the operator norm)'
---

## Statement

Assume Countable Choice. Let $\theta\in(0,\pi/2)$ and let $\Gamma_z$ be the
complex-time heat kernel of
[[def-complex-time-heat-kernel-on-a-proper-sector]]. Then for every
$z\in S_\theta$ the complex difference quotients converge in
$L^1(\mathbb R^n)$:
$$\Bigl\|\frac{\Gamma_{z+h}-\Gamma_z}{h}-\partial_z\Gamma_z\Bigr\|_1\longrightarrow0\qquad(h\to0),$$
so $z\mapsto\Gamma_z$ is complex differentiable on $S_\theta$ with values in
$L^1(\mathbb R^n)$ and derivative $\partial_z\Gamma_z$. The convergence is
uniform on compact subsets of $S_\theta$.

## Facts & Assumptions

**Given:** Countable Choice, $\theta\in(0,\pi/2)$, the complex-time heat kernel $\Gamma_z$ on $S_\theta$, a point $z\in S_\theta$ and a compact $K\Subset S_\theta$.

[A1] Countable Choice is the ambient hypothesis ([[def-countable-choice]]).

[F1] For every compact $K\Subset S_\theta$ there are constants $c_K,C_K>0$ with $|\Gamma_\zeta(x)|\le C_Ke^{-c_K|x|^2}$ and $|\partial_\zeta\Gamma_\zeta(x)|\le C_K(1+|x|^2)e^{-c_K|x|^2}$ for all $\zeta\in K$, $x\in\mathbb R^n$ ([[def-complex-time-heat-kernel-on-a-proper-sector]]).

[F2] For every fixed $x$ the map $\zeta\mapsto\Gamma_\zeta(x)$ is holomorphic on $S_\theta$ with $\partial_\zeta\Gamma_\zeta(x)=\bigl(-\frac n{2\zeta}+\frac{|x|^2}{4\zeta^2}\bigr)\Gamma_\zeta(x)$ ([[def-complex-time-heat-kernel-on-a-proper-sector]]).

[F3] The fundamental theorem evaluates the integral of a continuous derivative on a real interval ([[thm-ftc-second-part]]), applied separately to the real and imaginary parts.

[F4] The complex chain rule is [[thm-chain-rule-for-complex-derivatives]]. For holomorphic $G$, its restriction to the segment has real-parameter derivative $hG'(z+sh)$ directly from the complex derivative's difference quotient.

[F5] Dominated convergence ([[thm-dominated-convergence]]).

## Proof

**Given:** Countable Choice, $\theta\in(0,\pi/2)$, $\Gamma_z$ the complex-time kernel, $z\in S_\theta$, and a compact $K\Subset S_\theta$.

1.1 For a compact $K\Subset S_\theta$, choose $d>0$ such that its closed $d$-neighbourhood $K^+$ is compact and contained in $S_\theta$. For $z\in K$ and $0<|h|<d$, the segment $z+sh$ lies in $K^+$. By [F2] and the segment derivative in [F4], [F3] gives $(\Gamma_{z+h}(x)-\Gamma_z(x))/h=\int_0^1\partial_z\Gamma_{z+sh}(x)ds$. Hence [F1] on $K^+$ bounds the quotient by $C(1+|x|^2)e^{-c|x|^2}$, an integrable function independent of $z$ and $h$. [A1, F1, F2, F3, F4, given]


2.1 For every fixed $x$, the definition's derivative formula of [F2] shows that the difference quotients converge to $\partial_z\Gamma_z(x)$ as $h\to0$; for $z\in K$ and $0<|h|<d$ as in step 1.1 both the difference quotient and $\partial_z\Gamma_z(x)$ are bounded by the $L^1$ majorant of step 1.1, so the difference is bounded by $2C(1+|x|^2)e^{-c|x|^2}$ and converges pointwise to $0$; [F5] therefore gives $\bigl\|(\Gamma_{z+h}-\Gamma_z)/h-\partial_z\Gamma_z\bigr\|_1\to0$. Since $z$ was arbitrary, $z\mapsto\Gamma_z$ is complex differentiable on $S_\theta$ with derivative $\partial_z\Gamma_z$, first as a limit in $L^1$. [step 1.1, F2, F5, given]

3.1 For each fixed $x$, the explicit derivative $\partial_z\Gamma_z(x)$ is continuous and therefore uniformly continuous on $K^+$. The segment identity of step 1.1 consequently implies $\sup_{z\in K}|(\Gamma_{z+h}(x)-\Gamma_z(x))/h-\partial_z\Gamma_z(x)|\to0$. This supremum is measurable in $x$: the integrand is jointly continuous in $(z,x)$ and a maximum over compact $K$ is continuous in $x$, as follows from uniform continuity on $K$ times a compact spatial neighbourhood. It is bounded by twice the integrable majorant of step 1.1. Dominated convergence [F5] gives convergence of its integral to zero, which bounds the supremum over $z\in K$ of the $L^1$ error. This proves uniform convergence on every compact $K$, as well as the asserted $L^1$ differentiability. [step 1.1, step 2.1, F1, F2, F5, given] ∎
