---
id: lem-negative-semidefinite-hessian-at-an-interior-local-maximum
kind: lemma
title: The Hessian is negative semidefinite at an interior local maximum
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - def-euclidean-local-extrema-and-critical-points
  - thm-fermat-for-euclidean-local-extrema
  - cor-second-order-taylor-expansion-with-the-hessian
  - def-hessian-and-euclidean-critical-point
  - def-laplacian-of-a-c2-function
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
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Universitext, Springer 2011)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§10.2, printed p. 335, inequalities (25)–(26) and the surrounding maximum-principle argument"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Maximum-principle background; the exact local calculus claim is proved here from Fermat and Taylor, and the nonpositive Laplacian is also Brezis §10.2, p. 335, (25)."
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, let $f\in C^2(U)$, and let $a\in U$ be a
local maximum of $f$. Then
$$h^{\mathsf T}H_f(a)h\le0\qquad\text{for every }h\in\mathbb R^n;$$
in particular $\nabla f(a)=0$ and $\Delta f(a)=\operatorname{tr}H_f(a)\le0$.

## Facts & Assumptions

**Given:** An open $U\subseteq\mathbb R^n$, $f\in C^2(U)$, an interior local maximum $a\in U$, and an arbitrary $h\in\mathbb R^n$.

[F1] At an interior local extremum of a differentiable scalar field the gradient vanishes: $\nabla f(a)=0$ ([[thm-fermat-for-euclidean-local-extrema]]).

[F2] For a $C^2$ scalar field, $f(a+h)=f(a)+\nabla f(a)\cdot h+\frac12\langle H_f(a)h,h\rangle+o(\|h\|^2)$ ([[cor-second-order-taylor-expansion-with-the-hessian]]).

[F3] The Hessian $H_f(a)$ is the matrix of second partial derivatives, and $\Delta f=\sum_i\partial_i\partial_if$ is the trace of the Hessian ([[def-hessian-and-euclidean-critical-point]], [[def-laplacian-of-a-c2-function]]).

[F4] Local maximality means $f(a)\ge f(x)$ for all $x$ in some Euclidean neighbourhood of $a$ ([[def-euclidean-local-extrema-and-critical-points]]).

## Proof

**Given:** An open $U\subseteq\mathbb R^n$, $f\in C^2(U)$, an interior local maximum $a\in U$, and $h\in\mathbb R^n$.

1.1 Since $a$ is an interior point of $U$ at which $f$ has a local maximum, [F1] applies and gives $\nabla f(a)=0$. [F1, F4, given]

2.1 Suppose $h^{\mathsf T}H_f(a)h=:c>0$; then $h\ne0$ and [F2] and step 1.1 give $f(a+th)=f(a)+\frac{t^2}2h^{\mathsf T}H_f(a)h+o(t^2)=f(a)+t^2\bigl(\frac c2+o(1)\bigr)>f(a)$ for every sufficiently small $t\ne0$, and $a+th$ lies in the neighbourhood of $a$ on which the local maximum is attained for small $t$; this contradicts [F4]. Hence $h^{\mathsf T}H_f(a)h\le0$, and since $h$ was arbitrary the quadratic form of the Hessian is negative semidefinite. [step 1.1, F2, F4, given]

3.1 Taking $h=e_i$ in step 2.1 gives $H_{ii}(a)\le0$ for every coordinate index $i$, and by the trace formula [F3] the Laplacian is $\Delta f(a)=\sum_iH_{ii}(a)\le0$; together with step 1.1 this is the stated conclusion. [step 2.1, F3, given] ∎ 