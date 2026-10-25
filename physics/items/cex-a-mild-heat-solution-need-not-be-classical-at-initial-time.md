---
id: cex-a-mild-heat-solution-need-not-be-classical-at-initial-time
kind: counterexample
title: A mild heat solution need not be classical at the initial time
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps:
  - thm-dominated-convergence
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-instantaneous-smoothing-of-lp-heat-flow
  - thm-heat-cauchy-solution-for-lp-data
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - prop-indicator-function-is-measurable-iff-its-set-is-measurable
  - def-heat-evolution-of-initial-data
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-altered
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
      locator: "§6.3, printed p. 160, Theorem 6.20 (smoothness for $t>0$; no regularity is claimed at $t=0$)"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 5, §5.1.2, printed p. 131 (smoothing for positive time and the hypothesis needed at zero)"
---

## Statement refuted

The claim refuted is that a mild $L^p$ solution of the heat equation is
automatically a classical solution continuous up to $t=0$, so that its
representative tends to the initial datum at the initial time pointwise.

## Facts & Assumptions

**Given:** Countable Choice, the function $f:=\mathbf 1_{[0,1]}$ on $\mathbb R$, and the heat evolution $u(t):=H_tf$.

[A1] Countable Choice is the ambient hypothesis, carried by the heat-flow and smoothing suppliers ([[def-countable-choice]]).

[F1] The indicator of a measurable set is measurable, and $[0,1]$ is Borel measurable ([[prop-indicator-function-is-measurable-iff-its-set-is-measurable]]); the interval has Lebesgue measure one ([[thm-lebesgue-measure-of-a-box-of-every-kind]]), so $\int|f|^p=1$ for every finite $p$ and $\|f\|_\infty=1$, and hence $f$ lies in every $L^p$ as an element of the quotient space ([[def-l-p-space-as-a-quotient-by-null-functions]]).

[F2] $H_tf$ is the $L^p$ class of the representative $u(x,t)=\int_{\mathbb R}\Gamma(x-y,t)f(y)\,dy$ ([[def-heat-evolution-of-initial-data]]).

[F3] For $1\le p<\infty$ the curve $t\mapsto H_tf$ is continuous on $[0,\infty)$ with value $f$ at $t=0$, so the initial datum is attained in the $L^p$ sense ([[thm-heat-cauchy-solution-for-lp-data]]).

[F4] For every $t>0$ the representative is $C^\infty$ in $x$ ([[thm-instantaneous-smoothing-of-lp-heat-flow]]).

[F5] The one-dimensional heat kernel is even in $x$ and has unit mass, $\Gamma(-z,t)=\Gamma(z,t)$ and $\int_{\mathbb R}\Gamma(z,t)\,dz=1$ ([[lem-heat-kernel-normalisation-scaling-and-derivatives]]).

## Counterexample

**Given:** Countable Choice, $f=\mathbf 1_{[0,1]}$ on $\mathbb R$, and $u(t)=H_tf$.

1.1 By [F1] the finite-interval indicator belongs to $L^p(\mathbb R)$ for every $1\le p\le\infty$. For each $1\le p<\infty$, [F3] gives the mild curve $u\in C([0,T];L^p)$ with $u(0)=[f]$, and [F4] gives a smooth representative for every positive time. [A1, F1, F2, F3, F4, given]

1.2 By [F2] and Gaussian scaling, $u(0,t)=\int_0^1\Gamma(y,t)dy=\int_0^{1/\sqrt t}\Gamma(z,1)dz$. As $t\downarrow0$, dominated convergence ([[thm-dominated-convergence]]) and evenness with unit mass [F5] give $u(0,t)\to1/2$, whereas the specified representative has $f(0)=1$. Thus the initial condition is not attained pointwise for that representative. [F2, F5, given]

1.3 This failure is not removable by changing $f$ only on a null set. Any continuous representative of $[f]$ would be identically one on $(0,1)$ and zero on $(-\infty,0)$: otherwise continuity would give a nondegenerate interval of disagreement, whose measure is positive by the box measure in [F1]. The two one-sided limits at zero would then be one and zero, a contradiction. Hence the initial class has no continuous representative at all. [F1, given]

2.1 The mild curve from step 1.1 therefore cannot have a jointly continuous classical extension to time zero with its prescribed initial class. Positive-time smoothness and finite-$p$ norm convergence do not supply corner or initial-time continuity, and step 1.2 also gives the explicit failure of pointwise attainment for the chosen representative. No $L^\infty$ norm convergence at zero is claimed. [step 1.1, step 1.2, step 1.3, F3, given] ∎
