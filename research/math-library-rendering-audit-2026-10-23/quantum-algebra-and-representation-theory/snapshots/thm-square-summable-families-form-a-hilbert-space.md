---
id: thm-square-summable-families-form-a-hilbert-space
kind: theorem
title: Square-Summable Complex Families Form a Hilbert Space
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison
dependency_level: 0
deps:
  - def-square-summable-family-on-an-arbitrary-index-set
  - thm-complex-plane-is-complete
  - def-hilbert-space
  - def-axiom-schema-of-replacement
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, Chapter 1, sequence-space completeness"
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis, sequence-space completeness"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Statement

For every set $I$, the complex square-summable family space $\ell^2(I,\mathbb C)$ with its canonical norm and inner product from [[def-square-summable-family-on-an-arbitrary-index-set]] is complete. Thus it is a complex Hilbert space. Its finitely supported families are dense, and the coordinate vectors form an orthonormal basis. This result uses no choice principle.

## Facts & Assumptions
**Given:** A set $I$ and a Cauchy sequence $(x^{(m)})_{m\in\mathbb N}$ in $\ell^2(I,\mathbb C)$.

[F1] For $x\in\ell^2(I,\mathbb C)$, $\|x\|_2^2=\sup_{F\subseteq I,\ F\text{ finite}}\sum_{i\in F}|x_i|^2$, and the canonical inner product is defined by the absolutely summable family $\sum_{i\in I}x_i\overline{y_i}$ ([[def-square-summable-family-on-an-arbitrary-index-set]]).

[F2] The complex plane is complete: every Cauchy sequence in $\mathbb C$ has a unique limit ([[thm-complex-plane-is-complete]]).

[F3] A complex Hilbert space is a complete complex inner-product space ([[def-hilbert-space]]).

[A1] Replacement forms the image of a set under a uniquely defined class function ([[def-axiom-schema-of-replacement]]).

## Proof

1.1 For each $i\in I$, the singleton finite-sum bound gives $|x_i^{(m)}-x_i^{(n)}|\le\|x^{(m)}-x^{(n)}\|_2$, so $(x_i^{(m)})_m$ is Cauchy in $\mathbb C$. By [F2] it has a unique limit $x_i$. These uniquely determined coordinates form a function $x:I\to\mathbb C$ by [A1]; no choices are made. [given, A1, F1, F2, construct]

1.2 Let $x\in\ell^2(I,\mathbb C)$ and $\varepsilon>0$. By [F1], $s=\|x\|_2^2$ is the supremum of its finite coordinate sums, so there is a finite $F\subseteq I$ with $\sum_{i\in F}|x_i|^2>s-\varepsilon^2/4$. For every finite $G\subseteq I\setminus F$, disjointness gives $\sum_{i\in G}|x_i|^2\le s-\sum_{i\in F}|x_i|^2<\varepsilon^2/4$. Taking the supremum over such $G$ yields $\|x-x|_F\|_2\le\varepsilon/2<\varepsilon$, proving finite-support families are dense. The coordinate vectors have inner products $\langle e_i,e_j\rangle=\delta_{ij}$ by the canonical inner product in [F1], and their finite span is exactly the finitely supported families, so they form an orthonormal basis. [F1, choose, algebra]

2.1 Since $(x^{(m)})$ is Cauchy, choose $N$ such that $\|x^{(m)}-x^{(n)}\|_2<1$ whenever $m,n\ge N$. Then $\|x^{(m)}\|_2\le\|x^{(N)}\|_2+1$ for $m\ge N$; the finitely many earlier norms have a finite maximum, so there is $M<\infty$ with $\|x^{(m)}\|_2\le M$ for every $m$. For any finite $F\subseteq I$, coordinate convergence and continuity of the finite sum give $\sum_{i\in F}|x_i|^2=\lim_m\sum_{i\in F}|x_i^{(m)}|^2\le M^2$. Taking the supremum over finite $F$ in [F1] shows $x\in\ell^2(I,\mathbb C)$. [F1, step 1.1, algebra]

3.1 Given $\varepsilon>0$, choose $N$ so that $\|x^{(m)}-x^{(n)}\|_2<\varepsilon/2$ for all $m,n\ge N$. Fix $m\ge N$. For every finite $F\subseteq I$, coordinate convergence yields $\sum_{i\in F}|x_i^{(m)}-x_i|^2=\lim_n\sum_{i\in F}|x_i^{(m)}-x_i^{(n)}|^2\le\varepsilon^2/4$. Taking the supremum over finite $F$ gives $\|x^{(m)}-x\|_2\le\varepsilon/2<\varepsilon$. Hence $x^{(m)}\to x$ in $\ell^2(I,\mathbb C)$ and every Cauchy sequence converges. [F1, step 1.1, step 2.1, algebra]

4.1 By [F1], $\ell^2(I,\mathbb C)$ is an inner-product space, and step 3.1 proves it is complete. It is therefore a Hilbert space by [F3]. The proof used no family of choices. [F1, F3, step 3.1] ∎

## Remarks

The proof works for arbitrary index sets, including $I=\varnothing$, and does not require a countable enumeration or Countable Choice.
