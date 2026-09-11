---
id: "lem-kolmogorov-block-maxima-diverge-off-a-null-limsup-set"
kind: "lemma"
title: "Kolmogorov block maxima diverge off a null limsup set"
deps: ["lem-kolmogorov-gliding-hump-series-converges-in-lone", "lem-kolmogorov-block-polynomial-with-large-partial-sums", "lem-separated-frequency-blocks-do-not-disturb-earlier-partial-sum-maxima", "thm-first-borel-cantelli", "def-period-one-fourier-coefficients-partial-sums-and-convolution", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Grafakos, Classical Fourier Analysis, third edition
      url: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
      locator: FR-4K boundary obligation; compare Grafakos 4.2.11–4.2.13
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. For the sequence and $L^1$ limit f constructed in the preceding gliding-hump lemma, $\sup_{N\ge0}|S_Nf(x)|=\infty$ off a measurable null set.

## Facts & Assumptions

[F1] The blocks have $a_j=2^{-j}$, thresholds $j2^j$, exceptional measures less than $2^{-j}$ and increasing disjoint positive supports; their series converges in $L^1$ and absolutely a.e. [[lem-kolmogorov-gliding-hump-series-converges-in-lone]].

[F2] The blocks' strict good-set maxima are furnished by the local polynomial lemma [[lem-kolmogorov-block-polynomial-with-large-partial-sums]].

[F3] A block contributes nothing below its starting frequency and its internal sums are modulated analytic sums [[lem-separated-frequency-blocks-do-not-disturb-earlier-partial-sum-maxima]].

[F4] Summable exceptional measures imply a null limsup [[thm-first-borel-cantelli]].

[F5] Fourier coefficients and symmetric partial sums use normalized period-one integration [[def-period-one-fourier-coefficients-partial-sums-and-convolution]].

[F6] Assume AC [[def-axiom-of-choice]].

## Proof

**Given:** The exact constructed blocks and their limit from F1.

1.1 For any integer k and integrable functions u,v, the definition gives $|\widehat u(k)-\widehat v(k)|\le\int|u-v|$, since $|e_{-k}|=1$. Hence the coefficients of F1's partial block sums converge to those of f. For each fixed k, the polynomial coefficients stabilize once the block containing k has been included; if no block contains k, all are zero. Thus f has exactly the prescribed block coefficients and no negative coefficients. In particular every fixed symmetric partial sum is determined by finitely many of these coefficients, with no pointwise infinite-series interchange. [F1, F3, F5]

1.2 By F4 and F1, $m(\limsup_jE_j)=0$. Remove this set and F1's null set on which $G(x)=\sum_j|Q_j(x)|$ may be infinite. Fix any remaining x. There is $j_0(x)$ such that for all $j\ge j_0(x)$ the point lies in the strict good set of F2, so some $0\le r_j\le d_j$ has $|A_{r_j}P_j(x)|>j2^j$. These witnesses may be taken as least indices; no choice of a measurable family of cutoffs is needed for a pointwise supremum. [F1, F2, F4, F6]

2.1 Set $N_j=m_j+r_j$. At this cutoff every earlier block is completed and every later block is absent. Steps 1.1 and F3 give the exact identity $S_{N_j}f(x)=\sum_{i<j}Q_i(x)+a_je_{m_j}(x)A_{r_j}P_j(x)$. Consequently $|S_{N_j}f(x)|>j-\sum_{i<j}|Q_i(x)|\ge j-G(x)\to\infty$. Also $N_j\ge m_j\ge j$, so these are unbounded cutoffs. This proves the assertion. AC is inherited from F1's countable block choice; Borel–Cantelli requires no independence. [F1, F3, F6, step 1.1, step 1.2] ∎
