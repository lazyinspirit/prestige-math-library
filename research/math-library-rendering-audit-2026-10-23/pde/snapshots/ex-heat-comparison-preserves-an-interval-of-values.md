---
id: ex-heat-comparison-preserves-an-interval-of-values
kind: example
title: Heat comparison preserves an interval of values
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps:
  - def-countable-choice
  - cor-comparison-and-uniqueness-for-the-bounded-cylinder-heat-problem
  - def-parabolic-cylinder-and-parabolic-boundary
  - cor-heat-flow-is-order-preserving-and-lp-contractive
  - cor-heat-flow-preserves-mass-and-positivity
  - def-heat-evolution-of-initial-data
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-laplacian-of-a-c2-function
  - def-directional-and-partial-derivatives
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
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§3.1, printed p. 56, Corollary 3.5 (a priori bound by boundary data) and §6.3, Corollary 6.16"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Universitext, Springer 2011)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§10.2, printed pp. 333–334, Corollary 10.4 (positivity and $L^\\infty$ bounds of semigroup solutions)"
---

## Example

Assume Countable Choice. Let $Q=\Omega\times(0,T]$ be a parabolic cylinder with
$\Omega$ bounded, let $a\le b$ be real constants, and let
$u\in C^{2,1}(\overline Q)$ solve $u_t-\Delta u=0$ in $Q$ with $a\le u\le b$ on
the parabolic boundary $\partial_pQ$. Then $a\le u\le b$ on all of
$\overline Q$. On the whole space the analogous statement is that
$a\le u_0\le b$ almost everywhere implies $a\le H_tu_0\le b$ almost everywhere
for every $t>0$.

## Facts & Assumptions

**Given:** Countable Choice, a bounded parabolic cylinder $Q=\Omega\times(0,T]$, constants $a\le b$, a solution $u\in C^{2,1}(\overline Q)$ with $a\le u\le b$ on $\partial_pQ$, and, for the whole-space clause, $t>0$ and $u_0\in L^p(\mathbb R^n)$ with $a\le u_0\le b$ almost everywhere.

[A1] Countable Choice is the ambient hypothesis ([[def-countable-choice]]).

[F1] Comparison: if $U,V\in C^{2,1}(\overline Q)$ with
$U_t-\Delta U\le V_t-\Delta V$ in $Q$ and $U\le V$ on $\partial_pQ$, then
$U\le V$ on $\overline Q$
([[cor-comparison-and-uniqueness-for-the-bounded-cylinder-heat-problem]]);
the parabolic boundary is that of
[[def-parabolic-cylinder-and-parabolic-boundary]], and a constant function has
$c_t=0=\Delta c$ ([[def-laplacian-of-a-c2-function]],
[[def-directional-and-partial-derivatives]]).

[F2] Heat evolution on $L^p$: for $t>0$, $H_tf$ is the $L^p$ class of
$x\mapsto\int_{\mathbb R^n}\Gamma(x-y,t)f(y)\,dy$, defined for almost every
$x$, and each $H_t$ is linear ([[def-heat-evolution-of-initial-data]]); the
kernel has unit mass $\|\Gamma_t\|_1=1$ for every $t>0$
([[lem-heat-kernel-normalisation-scaling-and-derivatives]]).

[F3] Order preservation and positivity: if $f,g\in L^p(\mathbb R^n)$ satisfy
$f\le g$ almost everywhere, then $H_tf\le H_tg$ almost everywhere for every
$t>0$; and if $f\ge0$ almost everywhere then $H_tf\ge0$ almost everywhere
([[cor-heat-flow-is-order-preserving-and-lp-contractive]],
[[cor-heat-flow-preserves-mass-and-positivity]]).

[F4] The Lebesgue integral is linear on $L^1$ and monotone for nonnegative
functions: $\int(\alpha f+\beta g)=\alpha\int f+\beta\int g$ for
$f,g\in L^1$, and $f\le g$ implies $\int f\le\int g$ for measurable
$f,g\ge0$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]],
[[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

## Verification

**Given:** Countable Choice, the bounded cylinder $Q$, the constants $a\le b$, a solution $u\in C^{2,1}(\overline Q)$ with $a\le u\le b$ on $\partial_pQ$, and the whole-space data $t>0$ and $u_0\in L^p(\mathbb R^n)$ with $a\le u_0\le b$ almost everywhere.

1.1 On the bounded cylinder, apply [F1] to the pair $(U,V)=(a,u)$: both lie in $C^{2,1}(\overline Q)$, $a_t-\Delta a=0=u_t-\Delta u$ in $Q$ by [F1], and $a\le u$ on $\partial_pQ$ by hypothesis, so $a\le u$ on $\overline Q$; applying [F1] to $(U,V)=(u,b)$ in the same way gives $u\le b$ on $\overline Q$. Hence $a\le u\le b$ on all of $\overline Q$. [A1, F1, given]

2.1 The analogous whole-space statement in the bounded-data case $u_0\in L^\infty(\mathbb R^n)$: the constant functions $a$ and $b$ lie in $L^\infty$, and $H_ta=a$, $H_tb=b$ almost everywhere because the constant $c$ convolves to $c\int\Gamma(x-y,t)\,dy=c$ for almost every $x$ by the unit mass of [F2]; since $a\le u_0\le b$ almost everywhere, [F3] applied to the pairs $(a,u_0)$ and $(u_0,b)$ gives $a=H_ta\le H_tu_0\le H_tb=b$ almost everywhere. [step 1.1, F2, F3, given]

3.1 For general $u_0\in L^p(\mathbb R^n)$, $1\le p\le\infty$, the same conclusion follows from the kernel representation: at every $x$ where the defining integral of [F2] converges, $b-H_tu_0(x)=\int_{\mathbb R^n}\Gamma(x-y,t)\bigl(b-u_0(y)\bigr)dy$ by linearity of the integral [F4] and $b=\int_{\mathbb R^n}\Gamma(x-y,t)b\,dy$ by the unit mass of [F2], while the integrand $\Gamma(x-y,t)(b-u_0(y))$ is nonnegative almost everywhere in $y$; its integral is therefore nonnegative by the monotonicity clause of [F4], so $H_tu_0(x)\le b$ at each such $x$, and $H_tu_0\le b$ almost everywhere because the defining integral converges almost everywhere [F2]; the inequality $H_tu_0\ge a$ follows the same way from $u_0-a\ge0$. [step 2.1, F2, F3, F4, given] ∎
