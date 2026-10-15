---
id: lem-qft-mass-shell-test-range-dense
kind: lemma
title: Density of Schwartz test restrictions in the scalar shell space
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-qft-scalar-mass-shell
  - def-countable-choice
  - thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-monotone-convergence-for-the-integral
dependency_roles:
  def-qft-scalar-mass-shell: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn: mathematical-premise
  lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set: mathematical-premise
  cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Semyon Dyatlov, MIT 18.155 Lecture Notes
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: Complete 266-page notes; chapter 11, Theorems 11.6, 11.7 and 11.15, pp. 116–128, for Schwartz Fourier maps and inversion.
    - title: Mark Srednicki, Quantum Field Theory, author draft, chapter 3
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page author-hosted draft; chapter 3 equations 3.15–3.19 for the mass-shell parametrization and measure.
---

## Statement

Assume Countable Choice [[def-countable-choice]]. For every $\mu\ge0$, the
space $H_\mu=L^2(H_\mu^+,d\nu_\mu)$ of
[[def-qft-scalar-mass-shell]] is separable, and
$$\{K_\mu f:f\in\mathscr S(\mathbb R^4)\}$$
is dense in $H_\mu$. In fact, the range contains every smooth compactly
supported function of $\mathbf k$ whose support avoids $\mathbf k=0$.

## Facts & Assumptions

**Given:** Countable Choice; the shell chart and Fourier restriction in
[[def-qft-scalar-mass-shell]]; the listed $L^2$ density and Fourier results.

[A1] Countable Choice supplies countable dense families for the $L^2$ spaces
used below. [[def-countable-choice]]

[F1] Rational box step functions form a countable dense subset of
$L^2(\mathbb R^3)$.
[[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]]

[F2] On every open subset of Euclidean space, smooth compactly supported
functions are dense in its $L^2$ space.
[[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]

[F3] The standard Fourier transform is a continuous automorphism of Schwartz
space with a continuous inverse; composing it with the reflection and
rescaling in [[def-qft-scalar-mass-shell]] gives the convention used here.
[[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]

[F4] There is a smooth compactly supported bump equal to one at the origin.
[[lem-smooth-bump-between-concentric-euclidean-balls]]

[F5] Integrals of increasing nonnegative measurable functions converge to the
integral of their pointwise limit.
[[thm-monotone-convergence-for-the-integral]]

## Proof

1.1 In the chart $\mathbf k\mapsto p_\mu(\mathbf k)$, write
$w_\mu(\mathbf k)=[2(2\pi)^3\omega_\mu(\mathbf k)]^{-1}$. Multiplication by
$\sqrt{w_\mu}$ is an isometry from $H_\mu$ onto
$L^2(\mathbb R^3\setminus\{0\},d^3\mathbf k)$ (for $\mu=0$) or
$L^2(\mathbb R^3,d^3\mathbf k)$ (for $\mu>0$), with inverse division by
$\sqrt{w_\mu}$; the omitted point is Lebesgue-null. The full $L^2(\mathbb
R^3)$ is separable by [F1]. In the massless case extend any function on the
punctured space by zero at the null point, approximate it by the countable
dense family from [F1], and restrict those approximants back to the punctured
space; restriction does not increase the norm. Thus both chart spaces, and
therefore $H_\mu$, are separable. [A1, F1, given, algebra]

2.1 Let $\Omega=\mathbb R^3$ for $\mu>0$ and
$\Omega=\mathbb R^3\setminus\{0\}$ for $\mu=0$. For
$\Omega_n=\{1/n<|\mathbf k|<n\}$, these sets increase to $\Omega$.
For $h\in L^2(\Omega,w_\mu d^3\mathbf k)$, monotone convergence [F5]
shows $\|h\mathbf1_{\Omega\setminus\Omega_n}\|_{L^2(w_\mu)}\to0$.
On each $\Omega_n$, $w_\mu$ is smooth and bounded above and below by
positive constants. Approximate $h|_{\Omega_n}$ in ordinary $L^2(\Omega_n)$
by a function in $C_c^\infty(\Omega_n)$ using [F2]; equivalence of the
weighted and ordinary norms on $\Omega_n$ gives weighted approximation.
Thus $C_c^\infty(\Omega)$ is dense in the shell space. [F2, F5, step 1.1,
given, algebra]

3.1 Fix $\psi\in C_c^\infty(\Omega)$. Choose $\rho\in C_c^\infty(\mathbb R)$
with $\rho(0)=1$, using [F4], and put
$$\widehat f(q^0,\mathbf q)=
\psi(\mathbf q)\rho(q^0-\omega_\mu(\mathbf q)).$$
Because $\psi$ has compact support away from the massless apex, $\omega_\mu$
is smooth on a neighborhood of its support, so this is a smooth compactly
supported function on $\mathbb R^4$. By the Fourier automorphism [F3] there
is $f\in\mathscr S(\mathbb R^4)$ whose Fourier transform in the convention
of [[def-qft-scalar-mass-shell]] is this function. On the shell,
$K_\mu f(p_\mu(\mathbf k))=\widehat f(\omega_\mu(\mathbf k),\mathbf k)
=\psi(\mathbf k)$. Hence the test restriction range contains
$C_c^\infty(\Omega)$, which is dense by 2.1. [F3, F4, step 2.1, given,
construct] ∎
