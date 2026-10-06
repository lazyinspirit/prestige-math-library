---
id: lem-average-convergence-of-a-continuous-banach-valued-function
kind: lemma
title: "Average convergence for a continuous Banach-valued function"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps:
  - def-countable-choice
  - lem-linearity-of-the-bochner-integral
  - def-bochner-integrable-function
  - lem-bochner-integral-norm-inequality
  - def-metric-continuity
  - thm-heine-cantor-metric
  - thm-heine-borel-rn
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
      locator: "Chapter 11 Section 11.1, proof of Theorem 11.3, printed p. 249"
    - title: "Mathew A. Johnson, Math 951 Lecture Notes, Chapter 6: Introduction to Semigroup Methods, University of Kansas (complete 37-page chapter)"
      url: "https://matjohn.ku.edu/sites/matjohn/files/files/Math951Notes_Ch6A.pdf"
      locator: "Chapter 6 Section 2.1, difference-quotient estimate in the proof of Theorem 2, printed p. 12"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the Lebesgue-measure interfaces. Let $X$ be a real or complex Banach space, let $a<b$ and let $f:[a,b]\to X$ be continuous. Then $f$ is Bochner integrable, and for $t\in[a,b)$ and $h>0$ with $t+h\le b$ one has $\bigl\|\frac1h\int_t^{t+h}f(s)\,ds-f(t)\bigr\|\le\sup_{s\in[t,t+h]}\|f(s)-f(t)\| \to0$ as $h\downarrow0$; analogously $\frac1h\int_{t-h}^t f\to f(t)$ as $h\downarrow0$ for $t\in(a,b]$. The same one-sided limits hold for vector-valued curves that are merely continuous at $t$ provided they are Bochner integrable on some neighbourhood of $t$.

## Facts & Assumptions

**Given:** Countable Choice; A real or complex Banach space $X$, real numbers $a<b$, and a continuous $f:[a,b]\to X$.

[F1] $f$ is Bochner integrable when there are integrable $X$-valued simple functions $s_n$ with $\int_a^b\|f-s_n\|\,ds\to0$, and then $\int_a^b f\,ds=\lim_n\int_a^b s_n\,ds$; integrals over subintervals are defined through the indicators $\mathbf 1_{[t,t+h]}$, and constant functions have the expected integrals ([[def-bochner-integrable-function]], [[lem-linearity-of-the-bochner-integral]]).

[F2] The Bochner integral is linear: for Bochner integrable $u,v$ and scalars $\alpha,\beta$ the function $\alpha u+\beta v$ is Bochner integrable with $\int(\alpha u+\beta v)=\alpha\int u+\beta\int v$ ([[lem-linearity-of-the-bochner-integral]]).

[F3] Norm inequality: $\bigl\|\int_E u\,ds\bigr\|\le\int_E\|u\|\,ds$ for every Bochner integrable $u$ and measurable $E$ ([[lem-bochner-integral-norm-inequality]]).

[F4] Continuity of $f$ at a point $t$ means: for every $\eta>0$ there is $\delta>0$ with $|s-t|<\delta$, $s\in[a,b]$, implying $\|f(s)-f(t)\|<\eta$ ([[def-metric-continuity]]).

[F5] The interval $[a,b]$ is a compact metric space ([[thm-heine-borel-rn]]), and a continuous map from a compact metric space to a metric space is uniformly continuous ([[thm-heine-cantor-metric]]): for every $\eta>0$ there is $\delta>0$ such that $\|f(s)-f(u)\|<\eta$ whenever $s,u\in[a,b]$ and $|s-u|<\delta$.



## Proof

**Proof technique:** direct, using explicit uniform step approximation, then linearity and the integral norm inequality.

1.1 By [F5], $f$ is uniformly continuous on $[a,b]$. Its oscillation over pairs at distance at most $\ell$ therefore tends to zero as $\ell\downarrow0$. [F5]

2.1 For each $n\in\mathbb N$, set $\ell_n=(b-a)/(n+1)$, $x_k=a+k\ell_n$ for $0\le k\le n+1$, and $s_n=\sum_{k<n+1}f(x_k)\mathbf1_{[x_k,x_{k+1})}$, with the last interval including $b$. These are integrable simple functions and converge uniformly, hence pointwise, to $f$. [F1, step 1.1]

3.1 The norm error is at most the oscillation from step 1.1, so $\int_a^b\|f-s_n\|\le(b-a)\sup_{|s-u|\le\ell_n}\|f(s)-f(u)\|\to0$. Together with the pointwise simple approximation, [F1] proves Bochner integrability of $f$. [F1, step 1.1, step 2.1]

4.1 For $t\in[a,b)$ and $0<h\le b-t$, linearity gives $h^{-1}\int_t^{t+h}f-f(t)=h^{-1}\int_t^{t+h}(f(s)-f(t))\,ds$, since the constant function has integral $hf(t)$. [F1, F2, step 3.1]

5.1 By the norm inequality, the norm of this difference is at most $h^{-1}\int_t^{t+h}\|f(s)-f(t)\|\,ds\le\sup_{s\in[t,t+h]}\|f(s)-f(t)\|$. [F3, step 4.1]

6.1 Continuity at $t$ makes the last supremum tend to zero as $h\downarrow0$: given $\eta>0$, take $h$ below a continuity radius for $f$ at $t$. Hence the forward averages converge to $f(t)$. [F4, step 5.1]

7.1 For $t\in(a,b]$ and $0<h\le t-a$, the same linearity and norm estimates give $\|h^{-1}\int_{t-h}^tf-f(t)\|\le\sup_{s\in[t-h,t]}\|f(s)-f(t)\|\to0$. This proves the backward form directly. [F2, F3, F4, step 3.1, step 6.1]

8.1 If instead $f$ is only continuous at $t$ and Bochner integrable on a neighbourhood of $t$, the forward and backward estimates above still apply: local integrability supplies the integrals and continuity at $t$ makes their norm errors vanish. Thus the stated general one-sided limits also hold. [F2, F3, F4, step 6.1, step 7.1] ∎
