---
id: "lem-kolmogorov-gliding-hump-series-converges-in-lone"
kind: "lemma"
title: "Kolmogorov gliding hump series converges in lone"
deps: ["lem-kolmogorov-block-polynomial-with-large-partial-sums", "lem-separated-frequency-blocks-do-not-disturb-earlier-partial-sum-maxima", "thm-complex-lp-completeness-and-almost-everywhere-subsequences", "thm-monotone-convergence-for-the-integral", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Grafakos, Classical Fourier Analysis, third edition
      url: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
      locator: Grafakos 4.2.7–4.2.10, printed pp.259–260; proposed separated adaptation
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. For $j\ge1$ one can choose analytic polynomials $P_j$ of degree $d_j$ with $\|P_j\|_1=1$ and $m(E_j)<2^{-j}$, where $E_j=\{A_*P_j\le j2^j\}$. Set $a_j=2^{-j}$, $m_1=1$, $m_{j+1}=m_j+d_j+1$ and $Q_j=a_je_{m_j}P_j$. Their positive frequency intervals are pairwise disjoint and increasing. The series $\sum_jQ_j$ converges in complex $L^1(\mathbb T)$ to f, with $\|f\|_1\le1$ and $\|f-\sum_{j\le J}Q_j\|_1\le2^{-J}$. Moreover $\sum_j|Q_j(x)|<\infty$ almost everywhere, and its pointwise sum represents f.

## Facts & Assumptions

[F1] Analytic norm-one blocks can have arbitrarily large partial-sum maxima outside a set of prescribed small measure [[lem-kolmogorov-block-polynomial-with-large-partial-sums]].

[F2] Modulation translates frequency support and preserves pointwise magnitude up to the scalar amplitude [[lem-separated-frequency-blocks-do-not-disturb-earlier-partial-sum-maxima]].

[F3] Complex $L^1$ is complete under countable choice [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]].

[F4] Nonnegative increasing measurable functions satisfy monotone convergence [[thm-monotone-convergence-for-the-integral]].

[F5] Assume AC [[def-axiom-of-choice]].

## Proof

**Given:** AC and the block supplier F1.

1.1 Apply F1 for each $j\ge1$ with $H=j2^j$ and $\eta=2^{-j}$. AC selects one polynomial from each nonempty set of possible polynomials. Its degree can be taken as its greatest nonzero coefficient index, which exists because its norm is one. The stated exceptional sets are measurable because the maxima are finite continuous maxima. The recursion for $m_j$ is explicit; it gives $m_{j+1}>m_j+d_j$ and $m_j\ge j\ge1$. F2 therefore places each $Q_j$ in the claimed disjoint positive interval and gives $\|Q_j\|_1=a_j=2^{-j}$. [F1, F2, F5]

2.1 For partial sums $f_J=\sum_{j\le J}Q_j$ and $K>J$, the triangle inequality gives $\|f_K-f_J\|_1\le\sum_{j=J+1}^K2^{-j}\le2^{-J}$. They are Cauchy, so F3 supplies an $L^1$ limit f. Passing K to infinity in the norm inequality gives $\|f-f_J\|_1\le2^{-J}$, and $\|f\|_1\le\sum_{j\ge1}2^{-j}=1$. AC includes the countable choice required by F3. [F3, F5, step 1.1]

3.1 Apply F4 to $G_J=\sum_{j\le J}|Q_j|$. Its increasing limit G is measurable and has integral $\int G=\lim_J\sum_{j\le J}2^{-j}=1$. For every positive integer M, $M m\{G=\infty\}\le\int G=1$, so $G<\infty$ off a null set. There the numerical series converges absolutely; set its sum h to zero on that measurable exceptional set. The resulting function is measurable, $|h|\le G$ a.e., and $|h-f_J|\le\sum_{j>J}|Q_j|$ a.e. A further application of F4 to the nonnegative tail gives $\|h-f_J\|_1\le2^{-J}$. Consequently $\|h-f\|_1\le\|h-f_J\|_1+\|f_J-f\|_1\to0$, so h represents f. No smallness of completed blocks is attributed to their frequency shifts. [F4, step 1.1, step 2.1] ∎
