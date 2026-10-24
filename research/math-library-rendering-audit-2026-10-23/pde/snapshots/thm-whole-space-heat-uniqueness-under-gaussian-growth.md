---
id: thm-whole-space-heat-uniqueness-under-gaussian-growth
kind: theorem
title: Uniqueness for the whole-space heat equation under Gaussian growth
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps:
  - def-countable-choice
  - lem-whole-space-maximum-principle-under-gaussian-growth
  - thm-of-archimedean
  - thm-algebra-of-derivatives
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
      locator: "§6.3, printed p. 159, Corollary 6.19 (uniqueness under $|u|\\le Ae^{a|x|^2}$) and its proof from Theorem 6.18"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 5, §5.1.4, printed p. 133 (uniqueness under growth more slowly than $Ce^{a|x|^2}$)"
---

## Statement

Assume Countable Choice. Let $T>0$, $C<\infty$, $a\ge0$, and let
$u\in C([0,T]\times\mathbb R^n)\cap C^{1,2}((0,T]\times\mathbb R^n)$ satisfy
$u_t-\Delta u=0$ on $\mathbb R^n\times(0,T)$, $u(0,\cdot)=0$ and
$$|u(t,x)|\le Ce^{a|x|^2}\qquad((t,x)\in[0,T]\times\mathbb R^n).$$
Then $u\equiv0$.

## Facts & Assumptions

**Given:** Countable Choice, $T>0$, $C<\infty$, $a\ge0$, and $u$ in the stated class with $u_t-\Delta u=0$ on $\mathbb R^n\times(0,T)$, $u(0,\cdot)=0$ and $|u|\le Ce^{a|x|^2}$ on the closed strip.

[A1] Countable Choice is the ambient hypothesis ([[def-countable-choice]]).

[F1] Whole-space maximum principle under Gaussian growth: if
$w\in C([0,T]\times\mathbb R^n)\cap C^{1,2}((0,T]\times\mathbb R^n)$ satisfies
$w_t-\Delta w\le0$ and $w(t,x)\le Ae^{a|x|^2}$ on the closed strip, then
$\sup_{[0,T]\times\mathbb R^n}w\le\sup_{\mathbb R^n}w(0,\cdot)$, the finite
subdivision into strips being available by the Archimedean property
([[lem-whole-space-maximum-principle-under-gaussian-growth]],
[[thm-of-archimedean]]).

[F2] The heat operator $\partial_t-\Delta$ is linear: for a constant $\alpha$
and a $C^{1,2}$ function $w$, $(\alpha w)_t=\alpha w_t$ and
$\Delta(\alpha w)=\alpha\Delta w$, by the constant-multiple rule applied to the
one-variable derivatives along lines and the sum formula
$\Delta=\sum_i\partial_i\partial_i$
([[thm-algebra-of-derivatives]], [[def-directional-and-partial-derivatives]],
[[def-laplacian-of-a-c2-function]]).

## Proof

**Given:** Countable Choice, $T>0$, $C<\infty$, $a\ge0$, and $u$ satisfying $u_t-\Delta u=0$ on the open strip, $u(0,\cdot)=0$ and $|u|\le Ce^{a|x|^2}$ on the closed strip.

1.1 The function $u$ satisfies the hypotheses of [F1]: it lies in the stated class, $u_t-\Delta u=0\le0$ on $\mathbb R^n\times(0,T)$, and $u\le|u|\le Ce^{a|x|^2}$ on the closed strip. Hence [F1] gives $\sup_{[0,T]\times\mathbb R^n}u\le\sup_{\mathbb R^n}u(0,\cdot)=0$, that is $u\le0$ everywhere on the strip. [A1, F1, given]

2.1 By [F2] the function $-u$ also lies in the class, with $(-u)_t-\Delta(-u)=-(u_t-\Delta u)=0\le0$ on the open strip and $(-u)(0,\cdot)=0$; moreover $-u\le|u|\le Ce^{a|x|^2}$ on the closed strip. So [F2] and [F1] apply to $-u$ and give $\sup(-u)\le\sup(-u)(0,\cdot)=0$, that is $u\ge0$ everywhere on the strip. [step 1.1, F1, F2, given]

3.1 Steps 1.1 and 2.1 give $u\le0\le u$ on $[0,T]\times\mathbb R^n$, hence $u\equiv0$; the only choices made are the finite subdivisions supplied by the Archimedean property inside [F1], and Countable Choice is inherited from that supplier. [step 1.1, step 2.1, F1, given] ∎
