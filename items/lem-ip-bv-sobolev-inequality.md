---
id: lem-ip-bv-sobolev-inequality
kind: lemma
title: BV Sobolev inequality in full space
status: published
origin: pipeline
deps:
  - def-countable-choice
  - def-ip-spatial-bv-and-distributional-tv
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-calligraphic-l-p-on-a-measure-space
  - lem-ip-bv-strict-approximation
  - lem-ip-lw-integral-inequality
  - lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
    - title: "Piotr Rybka, The space in variational and evolution problems — Lecture Notes in Mathematical Sciences 15"
      url: "https://www.ms.u-tokyo.ac.jp/publication/docs/lecturenotes15-rybka.pdf"
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume Countable Choice and let $n\ge2$. Every $u\in BV(\mathbb R^n)$ satisfies $$\|u\|_{L^{n/(n-1)}(\mathbb R^n)}\le TV(u;\mathbb R^n).$$

## Statement references

[[def-ip-spatial-bv-and-distributional-tv|Spatial BV and total variation.]]

[[def-calligraphic-l-p-on-a-measure-space|The Lp spaces are defined using Lebesgue measure on Rn.]]

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge2$, and $u\in BV(\mathbb R^n)$.

[A1] Countable Choice is needed for the strict smooth approximation used below. ([[def-countable-choice]])

[F1] Every full-space BV function has a compactly supported smooth strict approximation converging in $L^1$ and in gradient integral. ([[lem-ip-bv-strict-approximation]])

[F2] The Loomis–Whitney integral inequality bounds the coordinate-product integral by the product of its $(n-1)$-dimensional integrals. ([[lem-ip-lw-integral-inequality]])

[F3] For a smooth function with continuous derivative, the one-dimensional fundamental theorem gives its value from the integral of its derivative along each coordinate line. ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]])

[F4] Tonelli allows the coordinate-line integrals to be assembled into the full-space integrals below. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

## Proof

**Given:** The hypotheses listed above.

1.1 First let $f\in C_c^\infty(\mathbb R^n)$. For each $i$, put $$g_i(x_{\widehat i}):=\int_\mathbb R|\partial_i f(x_1,\ldots,x_{i-1},s,x_{i+1},\ldots,x_n)|\,ds.$$ Tonelli [F4] shows $g_i$ is nonnegative measurable and integrable. By [F3], integrating from a point to the left of the compact support up to $x_i$ gives $|f(x)|\le g_i(x_{\widehat i})$ for every coordinate $i$. Multiplication and raising to the power $1/(n-1)$ yield $$|f(x)|^{n/(n-1)}\le\prod_{i=1}^n g_i(x_{\widehat i})^{1/(n-1)}.$$ [F3, F4, given, algebra]

2.1 Integrating this inequality and applying [F2] gives $$\|f\|_{L^{n/(n-1)}}\le\prod_{i=1}^n\|\partial_i f\|_1^{1/n}\le\frac1n\sum_{i=1}^n\|\partial_i f\|_1\le\frac1{\sqrt n}\int_{\mathbb R^n}|\nabla f|\,dx.$$ The middle inequality is arithmetic-geometric mean; the last follows pointwise from $\sum_i|\partial_i f|\le\sqrt n|\nabla f|$. Thus the desired inequality holds for smooth compactly supported $f$, with the stronger constant $1/\sqrt n$. [F2, step 1.1, algebra]

3.1 By [A1] and [F1], choose $f_k\in C_c^\infty(\mathbb R^n)$ with $f_k\to u$ in $L^1$ and $\int|\nabla f_k|\to TV(u;\mathbb R^n)$. Select a subsequence with $\|f_{k_j}-u\|_1<2^{-2j}$; Tonelli [F4] gives $\int\sum_j|f_{k_j}-u|<\infty$, hence $f_{k_j}\to u$ almost everywhere. Fatou and step 2.1 imply $$\int|u|^{n/(n-1)}\,dx\le\liminf_j\int|f_{k_j}|^{n/(n-1)}\,dx\le TV(u;\mathbb R^n)^{n/(n-1)}.$$ Taking the $(n-1)/n$ power proves the stated inequality and at the same time shows $u\in L^{n/(n-1)}$. [A1, F1, F4, step 2.1, choose] ∎
