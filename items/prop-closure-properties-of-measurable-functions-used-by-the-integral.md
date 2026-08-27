---
id: prop-closure-properties-of-measurable-functions-used-by-the-integral
kind: proposition
title: "Closure properties of measurable functions used by the integral"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-extended-real-valued-measurable-function]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Proposition 6.3"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "John K. Hunter, Measure Theory Notes, §4.2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space.

1. If $f,g:X\to\overline{\mathbb R}$ are measurable and $f+g$ is defined
   pointwise, then $f+g$ is measurable.
2. If $c\in\mathbb R$ and $f:X\to\mathbb R$ is measurable, then $cf$ is
   measurable.
3. If $f:X\to\mathbb R$ is measurable, then $f^+=\max\{f,0\}$,
   $f^-=\max\{-f,0\}$, and $|f|=f^++f^-$ are measurable.
4. If $E\in\mathcal A$ and $f:X\to[0,+\infty]$ is measurable, then
   $f\chi_E$ is measurable.
5. If $(f_n)$ is a sequence of measurable functions $X\to\overline{\mathbb R}$,
   then $\inf_n f_n$ is measurable; if moreover $f_n\uparrow f$ pointwise, then
   $f$ is measurable.

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$ and functions or sets as in the relevant clause.

[L1] A function $h:X\to\overline{\mathbb R}$ is measurable exactly when $\{h>a\}\in\mathcal A$ for every real $a$ ([[def-extended-real-valued-measurable-function]]).

## Proof

**Proof technique:** direct.

1.1 If $f+g$ is defined pointwise, then for every real $a$, [L1, algebra]
$$\{f+g>a\}=\bigcup_{q\in\mathbb Q}\bigl(\{f>q\}\cap\{g>a-q\}\bigr),$$
so clause 1 follows from [L1].

1.2 For $c\ne0$ one has $\{cf>a\}=\{f>a/c\}$ when $c>0$ and [L1, algebra]
$\{cf>a\}=\{f<a/c\}$ when $c<0$; for $c=0$ the function is constant. Applying
[L1] proves clause 2. The formulas
$f^+=\max\{f,0\}$ and $f^-=\max\{-f,0\}$ therefore give clause 3.

2.1 If $E\in\mathcal A$ and $f\ge0$, then [L1, algebra] ∎
$$\{f\chi_E>a\}=E\cap\{f>a\}\qquad(a>0),$$
so clause 4 follows from [L1]. Also
$$\left\{\inf_n f_n>a\right\}=\bigcap_n\{f_n>a\},\qquad \left\{\sup_n f_n>a\right\}=\bigcup_n\{f_n>a\},$$
so clause 5 follows from [L1] as well, including the monotone-limit case
$f=\sup_n f_n$.
