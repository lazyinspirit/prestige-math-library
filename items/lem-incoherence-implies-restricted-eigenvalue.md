---
id: lem-incoherence-implies-restricted-eigenvalue
kind: lemma
title: "The stated incoherence bound implies the Lasso restricted eigenvalue condition"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-fixed-design-incoherence-condition
  - def-restricted-eigenvalue-condition
  - thm-cauchy-schwarz-finite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet, 18.S997 High-Dimensional Statistics, Lemma 2.17"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Lemma 2.17"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Peter J. Bickel, Ya'acov Ritov and Alexandre B. Tsybakov, Simultaneous Analysis of Lasso and Dantzig Selector, Section 3"
      url: "https://www.stat.berkeley.edu/~bickel/BickelRitovTsybakov2009aos.pdf"
---

## Statement

Let $n\ge1$, $1\le s\le d$, and let $X\in\mathbb R^{n\times d}$ satisfy the incoherence condition of [[def-fixed-design-incoherence-condition]]. For every $S\subseteq\{1,\ldots,d\}$ with $|S|\le s$ and every $v\in\mathcal C(S)$,
$$\frac{\|Xv\|_2^2}{n}\ge\frac12\|v_S\|_2^2.$$
Consequently the restricted eigenvalue condition of [[def-restricted-eigenvalue-condition]] holds with $\kappa^2=1/2$.

## Facts & Assumptions

**Given:** $X\in\mathbb R^{n\times d}$, $n\ge1$, $1\le s\le d$, and the incoherence bound $\max_{j,k}|(X^{\mathsf T}X/n-I)_{jk}|\le1/(14s)$.

[F1] Put $G=X^{\mathsf T}X/n$. The incoherence bound is entrywise and equals $1/(14s)$ ([[def-fixed-design-incoherence-condition]]).

[F2] $\mathcal C(S)$ means $\|v_{S^c}\|_1\le3\|v_S\|_1$ ([[def-restricted-eigenvalue-condition]]).

[F3] For a set $S$ of at most $s$ coordinates, $\|v_S\|_1^2\le |S|\|v_S\|_2^2\le s\|v_S\|_2^2$ ([[thm-cauchy-schwarz-finite]]).

[F4] $v^{\mathsf T}Gv=\|Xv\|_2^2/n\ge0$ for every $v$, by the definition of $G$.

## Proof

1.1 Write $v=v_S+v_{S^c}$. Since $v_S$ and $v_{S^c}$ have disjoint supports, [F1] gives $v_S^{\mathsf T}Gv_S\ge\|v_S\|_2^2-\frac{1}{14s}\|v_S\|_1^2\ge\frac{13}{14}\|v_S\|_2^2,$ where the second inequality uses [F3]. [F1, F3, algebra]

1.2 The same disjoint-support fact makes $v_S^{\mathsf T}Iv_{S^c}=0$. Thus $|v_S^{\mathsf T}Gv_{S^c}|\le\frac{1}{14s}\|v_S\|_1\|v_{S^c}\|_1\le\frac{3}{14s}\|v_S\|_1^2\le\frac{3}{14}\|v_S\|_2^2,$ using [F1], [F2] and [F3]. Also $v_{S^c}^{\mathsf T}Gv_{S^c}\ge0$ by [F4]. [F1, F2, F3, F4, algebra]

2.1 Expanding $v^{\mathsf T}Gv$ and using steps 1.1–1.2 gives $v^{\mathsf T}Gv\ge\left(\frac{13}{14}-2\frac{3}{14}\right)\|v_S\|_2^2=\frac12\|v_S\|_2^2.$ This is the stated restricted eigenvalue inequality, including $v_S=0$ (then the cone condition forces $v=0$, for which both sides are zero). [step 1.1, step 1.2, algebra] ∎
