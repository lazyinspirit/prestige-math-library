---
id: prop-closure-properties-of-measurable-functions-used-by-the-integral
kind: proposition
title: "Closure properties of measurable functions used by the integral"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-extended-real-valued-measurable-function, def-sigma-algebra, lem-q-and-irrationals-dense-r, thm-rationals-countable]
proof_strategy: direct
verification:
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-08
    scope: "Owner-authorized measurable-closure repair; local checks only, no independent judge"
    delegated_by: owner
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Proposition 6.3"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "John K. Hunter, Measure Theory Notes, Chapter 3, Propositions 3.5–3.7 and Theorem 3.8"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch3.pdf"
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
   $f\chi_E$ is measurable, where this function equals $f$ on $E$ and $0$
   off $E$ (in particular, $0\cdot(+\infty)=0$ here).
5. If $(f_n)$ is a sequence of measurable functions $X\to\overline{\mathbb R}$,
   then $\inf_n f_n$ is measurable; if moreover $f_n\uparrow f$ pointwise, then
   $f$ is measurable.

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$ and functions or sets as in the relevant clause.

[L1] A function $h:X\to\overline{\mathbb R}$ is measurable exactly when $\{h>a\}\in\mathcal A$ for every real $a$ ([[def-extended-real-valued-measurable-function]]).

[L2] A sigma-algebra contains $X$ and $\varnothing$ and is closed under complements and countable unions; countable intersections follow by taking complements ([[def-sigma-algebra]]).

[L3] The rationals are countable and dense in the reals ([[thm-rationals-countable]], [[lem-q-and-irrationals-dense-r]]).

## Proof

**Proof technique:** direct.

1.1 For any extended-real-valued $h$, the identities $\{h<a\}=\bigcup_{q\in\mathbb Q,\ q<a}(X\setminus\{h>q\})$ and $\{h>a\}=\bigcup_{q\in\mathbb Q,\ q>a}(X\setminus\{h<q\})$ follow from rational density, including when $h(x)$ is infinite. Thus [L2] and [L3] show that measurability of all strict sublevels is equivalent to measurability of all strict superlevels. [L1, L2, L3]

1.2 Put $h=f\chi_E$ as defined in clause 4. For $a<0$, $\{h>a\}=X$, since $h\ge0$. For $a\ge0$, $\{h>a\}=E\cap\{f>a\}$. Both sets are measurable, including at $a=0$, so clause 4 follows. [given, L1, L2]

1.3 For a pointwise-defined sum, $\{f+g>a\}=\bigcup_{q\in\mathbb Q}(\{f>q\}\cap\{g>a-q\})$. Indeed, if both summands are finite and their sum exceeds $a$, choose a rational strictly between $a-g(x)$ and $f(x)$. If one summand is $+\infty$, the other is not $-\infty$, and a rational meeting the two inequalities still exists; if a summand is $-\infty$, the defined sum cannot exceed $a$. The reverse inclusion follows by adding the inequalities. The union is countable and measurable, proving clause 1. [L1, L2, L3, given]

2.1 For $c>0$, $\{cf>a\}=\{f>a/c\}$; for $c<0$, $\{cf>a\}=\{f<a/c\}$. If $c=0$, each superlevel is either $X$ or $\varnothing$. Step 1.1 and [L1] therefore prove clause 2. [L1, L2, step 1.1]

2.2 Put $u=\inf_n f_n$ and $v=\sup_n f_n$. The defining order properties of infimum and supremum give $\{u<a\}=\bigcup_n\{f_n<a\}$ and $\{v>a\}=\bigcup_n\{f_n>a\}$, including infinite values. By step 1.1 and [L2] these sets are measurable, so $u$ and $v$ are measurable by [L1]. If $f_n\uparrow f$, then $f=v$ pointwise. This proves clause 5. [given, L1, L2, step 1.1]

3.1 The function $-f$ is measurable by step 2.1. For any real-valued measurable $h$, the superlevel of $\max(h,0)$ is $X$ when $a<0$ and $\{h>a\}$ when $a\ge0$. Apply this to $h=f$ and $h=-f$ to obtain measurable $f^+$ and $f^-$. They are finite-valued, so step 1.3 makes $|f|=f^++f^-$ measurable, proving clause 3. [L1, L2, step 1.3, step 2.1]

4.1 Clauses 1–5 follow respectively from steps 1.3, 2.1, 3.1, 1.2, and 2.2. [step 1.3, step 2.1, step 3.1, step 1.2, step 2.2] ∎
