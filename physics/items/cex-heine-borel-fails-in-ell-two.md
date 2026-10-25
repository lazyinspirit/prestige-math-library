---
id: cex-heine-borel-fails-in-ell-two
kind: counterexample
title: "Heine-Borel fails in ell^2"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-infinite-dimensional-closed-unit-ball-is-not-compact,
       rem-lp-spaces-are-banach-spaces,
       cor-independent-set-is-no-larger-than-a-finite-spanning-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis"
      url: "https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
pipeline_run: frontier-29
---

## Statement refuted

**Refuted claim:** every closed and bounded subset of an infinite-dimensional
Banach space is compact.

Take the Hilbert space

$$\ell^2:=\left\{x=(x_n)_{n\ge0}:\sum_{n=0}^\infty |x_n|^2<\infty\right\}.$$

Its closed unit ball is closed and bounded, but it is not compact.

## Facts & Assumptions

**Given:** The space $\ell^2$, its standard unit vectors $e_n$, and its closed unit ball $\overline B_{\ell^2}$.

[L1] In any normed space with no ordered basis of finite length, the closed unit ball is not compact ([[cor-infinite-dimensional-closed-unit-ball-is-not-compact]]).

[L2] The classical sequence spaces $\ell^p$ are Banach; in particular $\ell^2$ is Banach ([[rem-lp-spaces-are-banach-spaces]]).

[L3] A vector space with a finite spanning set has no linearly independent subset equinumerous with $\mathbb N$ ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]).

## Counterexample

**Proof technique:** direct.

1.1 The standard unit vectors are linearly independent: if $\sum_{j=0}^m a_je_j=0$, then the $j$-th coordinate of that sequence is $a_j$, so every $a_j=0$. Therefore the set $\{e_n:n\in\mathbb N\}$ is linearly independent and is equinumerous with $\mathbb N$. By [L3], $\ell^2$ cannot be spanned by any finite list, hence it admits no ordered basis of finite length. Each $e_n$ belongs to $\ell^2$ and has norm $1$, so every $e_n$ lies in the closed unit ball. Also for $m\ne n$ one has $\|e_n-e_m\|_2=\sqrt2$. [L3, given, algebra]

2.1 By [L2], $\ell^2$ is a Banach space. Since step 1.1 shows that $\ell^2$ admits no ordered basis of finite length, [L1] implies that $\overline B_{\ell^2}$ is not compact. This closed unit ball is closed and bounded by definition, so it refutes the claim. [L1, L2, step 1.1] ∎

## Remarks

- The Banach-space adjective in the refuted claim is there because the failure is not an incompleteness issue. The obstruction is infinite dimension.
