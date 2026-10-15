---
id: lem-wavelet-product-prior-is-l2-valued
kind: lemma
title: The wavelet product prior is L2-valued
status: draft
origin: pipeline
dependency_level: 0
deps:
  - def-countable-choice
  - def-identically-distributed-and-iid-random-variables
  - def-hilbert-space
  - def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
  - def-l-p-space-as-a-quotient-by-null-functions
  - thm-riesz-fischer-completeness-of-l-p
  - thm-monotone-convergence-for-the-integral
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Castillo and Nickl, Nonparametric Bernstein–von Mises theorems in Gaussian white noise, Condition 1 and proof of Theorem 5, printed pp. 2013–2016"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, Condition 7.3.11 and proof of Theorem 7.3.12, printed pp. 583–585"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Statement

Let $H$ be a real Hilbert space with a countable orthonormal basis $(\psi_{lk})$, where $K_l$ is the level-$l$ index set and $|K_l|=2^l$ for each $l\ge0$ ([[def-hilbert-space]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]). Such an $H$ is separable because finite rational linear combinations of the countable basis are dense. Let $\xi_{lk}$ be IID real random variables with common density $\varphi$ and finite second moment $m_2=\int x^2\varphi(x)\,dx<\infty$ ([[def-identically-distributed-and-iid-random-variables]]). For $\alpha>0$, set $\sigma_l=2^{-l(\alpha+1/2)}$ and form the partial wavelet sums

$$f_N=\sum_{0\le l\le N}\sum_{k\in K_l}\sigma_l\xi_{lk}\psi_{lk}.$$

Assume countable choice, denoted $\mathrm{AC}_\omega$, when specializing to $H=L^2([0,1])$. Then $f_N$ converges almost surely in $H$ to a Borel $H$-valued random element $f$, and

$$\mathbb E\|f\|_H^2=m_2\sum_{l\ge0}2^l\sigma_l^2=m_2\sum_{l\ge0}2^{-2\alpha l}<\infty.$$

The abstract Hilbert-space assertion is choice-free; for $H=L^2([0,1])$, completeness follows from the Riesz–Fischer theorem under countable choice ([[def-countable-choice]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[thm-riesz-fischer-completeness-of-l-p]]). More generally, finitely many additional coarsest orthogonal coordinates with fixed scales and finite coefficient second moments may be added; they contribute only a finite expectation to the displayed sum.

## Facts & Assumptions

**Given:** The orthonormal wavelet basis, $\alpha>0$, and an IID coefficient family with density $\varphi$ and finite second moment $m_2$; countable choice is additionally assumed only for the $L^2$ specialization.

[F1] [[def-hilbert-space]]: A real Hilbert space is complete in the norm induced by its inner product.

[F2] [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]: Vectors in an orthonormal family are pairwise orthogonal and have norm one.

[F3] [[def-identically-distributed-and-iid-random-variables]]: IID means mutual independence together with equality of all coordinate laws; it imposes no moment hypothesis.

[F4] [[thm-monotone-convergence-for-the-integral]]: For nonnegative measurable functions increasing pointwise to $S$, their integrals increase to $\int S$.

[F5] [[thm-riesz-fischer-completeness-of-l-p]]: Under countable choice, $L^2([0,1])$ with its usual norm is complete.

[A1] [[def-countable-choice]]: Countable choice is assumed only to apply [F5] in the $L^2$ instance; the abstract complete-Hilbert-space argument makes no choice-axiom appeal.

## Proof

1.1 For each finite $N$, orthonormality [F2] gives $\|f_N\|_H^2=\sum_{0\le l\le N}\sum_{k\in K_l}\sigma_l^2\xi_{lk}^2.$ The nonnegative partial sums increase to the full coefficient-square sum, so [F4] gives its expectation as the limit of the finite expectations, $\sum_{l\ge0}\sum_{k\in K_l}\sigma_l^2\mathbb E\xi_{lk}^2=m_2\sum_{l\ge0}2^l2^{-2l(\alpha+1/2)}=m_2\sum_{l\ge0}2^{-2\alpha l}<\infty,$ since the final series is geometric with ratio $2^{-2\alpha}<1$. If the coefficient-square sum were infinite on an event of probability $p>0$, its expectation would be at least $Rp$ for every $R>0$, contradicting finiteness. Thus that sum is finite almost surely. [F2, F3, F4, given, algebra]

2.1 On the probability-one event where that sum is finite, for $M>N$ orthonormality gives $\|f_M-f_N\|_H^2=\sum_{N<l\le M}\sum_{k\in K_l}\sigma_l^2\xi_{lk}^2.$ The right side tends to zero uniformly over $M>N$ as $N\to\infty$, since it is a tail of a convergent nonnegative series. Thus $(f_N)$ is Cauchy in $H$ and has a limit $f$ by completeness [F1]. When $H=L^2([0,1])$, completeness is supplied by [F5] under [A1]. The Cauchy event is measurable because it is a countable combination of conditions on the measurable distances $\|f_M-f_N\|_H$. On that event the pointwise limit is measurable as a limit into the separable metric space $H$; setting the limit equal to zero on the measurable complement gives a Borel $H$-valued random element. [A1, F1, F2, F5, given, algebra, step 1.1]

3.1 The same monotone-convergence calculation in [F4] gives $\mathbb E\|f\|_H^2=\mathbb E\sum_{l\ge0}\sum_{k\in K_l}\sigma_l^2\xi_{lk}^2=m_2\sum_{l\ge0}2^{-2\alpha l}<\infty.$ This proves both the stated second-moment formula and the claimed well-definedness. [F3, F4, step 2.1] ∎
