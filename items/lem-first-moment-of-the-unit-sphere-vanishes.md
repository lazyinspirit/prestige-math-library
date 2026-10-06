---
id: lem-first-moment-of-the-unit-sphere-vanishes
kind: lemma
title: "Reflection invariance and vanishing first moment of the sphere measure"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
proof_strategy: direct
deps: [def-countable-choice, def-polar-surface-measure-on-the-unit-sphere, thm-polar-coordinates-formula-for-lebesgue-measure, thm-linear-change-of-variables-for-lebesgue-measure, lem-euclidean-chart-measure-agrees-with-polar-surface-measure]
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
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§1.10.2–§1.12, printed pp. 15–18: surface measure on the sphere and rotational/reflection symmetry (the odd-integrand cancellation)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.1, printed p. 168, the computation (7.9), where the $\\sigma_2$-integral of a linear term in $\\omega$ vanishes"
---


## Statement

Assume the Axiom of Countable Choice. Let $n\ge1$ and let $\sigma$ be the polar surface measure on the unit sphere $S^{n-1}\subseteq\mathbb R^n$ ([[def-polar-surface-measure-on-the-unit-sphere]]). Then the reflection $R\omega=-\omega$ preserves $\sigma$, and the first moment vanishes:
$$\int_{S^{n-1}}\omega\,d\sigma(\omega)=0\in\mathbb R^n,\qquad\text{so}\qquad \int_{S^{n-1}}a\cdot\omega\,d\sigma(\omega)=0\quad(a\in\mathbb R^n).$$
The integrals are finite because $\sigma$ is a finite Borel measure.

## Facts & Assumptions

**Given:** the Axiom of Countable Choice, an integer $n\ge1$ and the polar surface measure $\sigma$ on $S^{n-1}$.

[F1] $\sigma(E)=n\lambda_n\{r\omega:\omega\in E,\ 0<r\le1\}$ for Borel $E\subseteq S^{n-1}$ ([[def-polar-surface-measure-on-the-unit-sphere]]).

[F2] For an invertible linear $T:\mathbb R^n\to\mathbb R^n$ with matrix $A$ and every Lebesgue measurable $E$, $\lambda_n(T[E])=|\det A|\lambda_n(E)$; in particular $\lambda_n(-E)=\lambda_n(E)$ ([[thm-linear-change-of-variables-for-lebesgue-measure]]).

[F3] Under Countable Choice, $\sigma$ is a finite Borel measure on $S^{n-1}$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

## Proof

1.1 Reflection invariance. For Borel $E\subseteq S^{n-1}$ the set $-E$ is Borel and $\{r\theta:\theta\in-E,\ 0<r\le1\}=-\{r\omega:\omega\in E,\ 0<r\le1\}$, so [F1] and [F2] give $\sigma(-E)=n\lambda_n\bigl(-\{r\omega:\omega\in E,\ 0<r\le1\}\bigr)=n\lambda_n\{r\omega:\omega\in E,\ 0<r\le1\}=\sigma(E)$. [F1, F2, algebra]

1.2 Vanishing of the moment. Each coordinate function $g_i(\omega)=\omega_i$ is Borel and bounded by $1$ on $S^{n-1}$, so $\int g_i\,d\sigma$ is a finite real number by [F3]. Because $\sigma$ is invariant under the bijection $\omega\mapsto-\omega$, the substitution formula for a measure-preserving bijection — valid for indicators by definition, for simple functions by linearity, and for bounded Borel functions by the supremum definition of the integral — gives $\int_{S^{n-1}}g_i\,d\sigma=\int_{S^{n-1}}g_i(-\omega)\,d\sigma(\omega)=-\int_{S^{n-1}}g_i\,d\sigma$; hence $\int g_i\,d\sigma=0$ for every $i$, that is $\int_{S^{n-1}}\omega\,d\sigma(\omega)=0$. [F3, algebra]

2.1 For $a\in\mathbb R^n$, linearity of the integral in the integrand gives $\int_{S^{n-1}}a\cdot\omega\,d\sigma(\omega)=a\cdot\int_{S^{n-1}}\omega\,d\sigma(\omega)=0$. [algebra] ∎ 