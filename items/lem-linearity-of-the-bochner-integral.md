---
id: lem-linearity-of-the-bochner-integral
kind: lemma
title: "Linearity of the Bochner integral"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - def-bochner-integrable-function
  - thm-bochner-integrability-criterion
  - lem-banach-valued-simple-integral-is-well-defined
  - lem-vector-operations-are-continuous-in-a-normed-space
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.1, the integral of regulated functions and its linearity, printed pp. 249-250"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, Universitext, Springer 2011 (complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "Chapter 7, integral manipulations in the proof of Theorems 7.4 and 7.10, printed pp. 186-198"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $(\Omega,\mathcal A,\mu)$ be a measure space, let $X$ be a real or complex Banach space, and let $f,g:\Omega\to X$ be Bochner integrable ([[def-bochner-integrable-function]]) with $\alpha,\beta$ scalars. Then $\alpha f+\beta g$ is Bochner integrable and $\int_\Omega(\alpha f+\beta g)\,d\mu=\alpha\int_\Omega f\,d\mu+\beta\int_\Omega g\,d\mu$; for a measurable set $E$ the same identity holds with $f,g$ replaced by $f\mathbf 1_E,g\mathbf 1_E$. The integral is therefore additive and homogeneous, and in particular well defined on differences.

## Facts & Assumptions

**Given:** A measure space $(\Omega,\mathcal A,\mu)$, a real or complex Banach space $X$, Bochner integrable functions $f,g:\Omega\to X$, scalars $\alpha,\beta$, and a measurable set $E$.

[F1] By the definition of Bochner integrability ([[def-bochner-integrable-function]]) there are sequences $(s_n)$, $(t_n)$ of integrable $X$-valued simple functions with $\int_\Omega\|f-s_n\|\,d\mu\to0$, $\int_\Omega\|g-t_n\|\,d\mu\to0$, and $\int_\Omega f\,d\mu=\lim_n\int_\Omega s_n\,d\mu$, $\int_\Omega g\,d\mu=\lim_n\int_\Omega t_n\,d\mu$.

[F2] The integral of an integrable Banach-valued simple function is independent of its representation, is linear, and satisfies $\bigl\|\int_E s\,d\mu\bigr\|\le\int_E\|s\|\,d\mu$ for every measurable $E$ ([[lem-banach-valued-simple-integral-is-well-defined]]).

[F3] A strongly measurable $h:\Omega\to X$ is Bochner integrable if and only if $\int_\Omega\|h\|\,d\mu<\infty$; for such $h$ and any defining approximating sequence of integrable simple functions, the integral is the limit of the simple integrals ([[thm-bochner-integrability-criterion]], [[def-bochner-integrable-function]]).

[F4] Addition in $X$ and scalar multiplication $\mathbb K\times X\to X$ are continuous ([[lem-vector-operations-are-continuous-in-a-normed-space]]).



## Proof

**Proof technique:** direct, approximating $\alpha f+\beta g$ by the corresponding linear combinations of the defining simple functions.

1.1 The functions $f,g$ are strongly measurable by [F1]. Let $u_n,v_n$ be their measurable simple approximations converging pointwise outside measurable null sets $N,N\prime$; these need not be the defining $L^1$ approximations $s_n,t_n$. The simple functions $\alpha u_n+\beta v_n$ converge to $\alpha f+\beta g$ off $N\cup N\prime$ by [F4], proving strong measurability. [F1, F4]

1.2 Norm estimate: for every $n$, $\|\alpha f+\beta g-(\alpha s_n+\beta t_n)\|\le|\alpha|\,\|f-s_n\|+|\beta|\,\|g-t_n\|$ pointwise, hence after integration $\int_\Omega\|\alpha f+\beta g-(\alpha s_n+\beta t_n)\|\,d\mu\le|\alpha|\int_\Omega\|f-s_n\|\,d\mu+|\beta|\int_\Omega\|g-t_n\|\,d\mu\to0$; in particular $\int_\Omega\|\alpha f+\beta g\|\,d\mu\le|\alpha|\int_\Omega\|f\|\,d\mu+|\beta|\int_\Omega\|g\|\,d\mu<\infty$, since $\int\|f\|,\int\|g\|<\infty$ by [F3]. [F1, F3, algebra]

2.1 By [step 1.1], [step 1.2] and the integrability criterion [F3], the function $\alpha f+\beta g$ is Bochner integrable, and $\alpha s_n+\beta t_n$ is a defining sequence of integrable simple functions for it, so $\int_\Omega(\alpha f+\beta g)\,d\mu=\lim_n\int_\Omega(\alpha s_n+\beta t_n)\,d\mu$. [F1, F3, step 1.1, step 1.2]

3.1 Linearity of the simple integral [F2] gives $\int_\Omega(\alpha s_n+\beta t_n)\,d\mu=\alpha\int_\Omega s_n\,d\mu+\beta\int_\Omega t_n\,d\mu$ for every $n$, whose right-hand side converges to $\alpha\int_\Omega f\,d\mu+\beta\int_\Omega g\,d\mu$ by [F1] and continuity of the vector operations [F4]; combining with [step 2.1] yields $\int_\Omega(\alpha f+\beta g)\,d\mu=\alpha\int_\Omega f\,d\mu+\beta\int_\Omega g\,d\mu$. [F1, F2, F4, step 2.1]

4.1 Restricted form: the functions $f\mathbf 1_E$ and $g\mathbf 1_E$ are Bochner integrable, because they are strongly measurable and dominated in norm by $\|f\|$ and $\|g\|$ respectively, and $(\alpha f+\beta g)\mathbf 1_E=\alpha(f\mathbf 1_E)+\beta(g\mathbf 1_E)$ pointwise; applying [step 3.1] to the pair $f\mathbf 1_E,g\mathbf 1_E$ gives $\int_E(\alpha f+\beta g)\,d\mu=\alpha\int_E f\,d\mu+\beta\int_E g\,d\mu$. [F1, F2, F3, step 3.1]

5.1 The integral is thus additive and homogeneous on the Bochner integrable functions: taking $\alpha=\beta=1$ gives additivity, $\beta=0$ with $\alpha$ arbitrary gives homogeneity, and $\beta=-1$ shows the difference $f-g$ is Bochner integrable with $\int_\Omega(f-g)\,d\mu=\int_\Omega f\,d\mu-\int_\Omega g\,d\mu$, so the integral is well defined on differences. [step 4.1] ∎
