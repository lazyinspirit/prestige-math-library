---
id: cor-lacunary-series-lp-membership-is-coefficient-ell-two
kind: corollary
title: "L-p convergence of a lacunary series is equivalent to ell-two coefficients"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-lacunary-lp-norm-equivalence, thm-riesz-fischer-completeness-of-l-p, thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed., Theorem 3.6.4"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Statement

For a $q$-Hadamard-lacunary sequence and coefficients $(a_j)$, the partial
sums of $\sum_{j\ge1}a_je_{\lambda_j}$ converge in $L^p(\mathbb T)$ if and
only if $(a_j)\in\ell^2$, for every $1\le p<\infty$. For $0<p<1$, they
converge if and only if $(a_j)\in\ell^2$ in the complete metric $d_p$ of
[[thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric]].
Completeness above one is supplied by
[[thm-riesz-fischer-completeness-of-l-p]], and the finite estimate is
[[thm-lacunary-lp-norm-equivalence]].

## Facts & Assumptions

**Given:** $p,q,(\lambda_j)$ and $(a_j)$ as in the Statement.

## Proof

**Proof technique:** apply the finite estimate to tails and use completeness.

1.1 If $(a_j)\in\ell^2$, its coefficient tails tend to zero. The finite [given, algebra]
estimate applied to differences of partial sums therefore makes them Cauchy
in $L^p$ for $p\ge1$, and Cauchy in $d_p$ for $0<p<1$ (raise the displayed
finite estimate to the power $p$). [given, algebra]

2.1 The relevant cited completeness theorem gives a limit in the respective [step 1.1]
space, so the partial sums converge. [step 1.1]

3.1 Conversely, convergence makes the partial sums Cauchy. The lower finite [step 1.1, step 2.1, algebra]
estimate applied to every difference of two partial sums forces the
corresponding coefficient tail to tend to zero in $\ell^2$. Thus
$(a_j)\in\ell^2$, proving both implications. [step 1.1, step 2.1, algebra] ∎
