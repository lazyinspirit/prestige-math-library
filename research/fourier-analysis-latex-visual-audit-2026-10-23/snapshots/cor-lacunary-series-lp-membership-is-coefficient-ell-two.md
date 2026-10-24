---
id: cor-lacunary-series-lp-membership-is-coefficient-ell-two
kind: corollary
title: "L-p convergence of a lacunary series is equivalent to ell-two coefficients"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, thm-lacunary-lp-norm-equivalence, thm-riesz-fischer-completeness-of-l-p, thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric]
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed., Theorem 3.6.4"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-08-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice. For a $q$-Hadamard-lacunary sequence and coefficients $(a_j)$, the partial
sums of $\sum_{j\ge1}a_je_{\lambda_j}$ converge in $L^p(\mathbb T)$ if and
only if $(a_j)\in\ell^2$, for every $1\le p<\infty$. For $0<p<1$, they
converge if and only if $(a_j)\in\ell^2$ in the complete metric $d_p$ of
[[thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric]].
Completeness above one is supplied by
[[thm-riesz-fischer-completeness-of-l-p]], and the finite estimate is
[[thm-lacunary-lp-norm-equivalence]].

## Facts & Assumptions

**Given:** The Axiom of Choice and $p,q,(\lambda_j)$ and $(a_j)$ as in the Statement.

[A1] AC is used through the two completeness suppliers [F2] in step 2.1.

[F1] The two-sided finite lacunary estimate holds uniformly over finite coefficient sets ([[thm-lacunary-lp-norm-equivalence]]).

[F2] Under the Axiom of Choice, $L^p$ is complete for $1\le p<\infty$ ([[thm-riesz-fischer-completeness-of-l-p]]), and $d_p$ is complete for $0<p<1$ ([[thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric]]).

## Proof

**Proof technique:** apply the finite estimate to tails and use completeness.

1.1 If $(a_j)\in\ell^2$, its coefficient tails tend to zero. Apply the upper bound in [F1] to each difference $S_m-S_n$ of partial sums. The differences tend to zero in the $L^p$ norm for $p\ge1$ and in the metric $d_p$ for $0<p<1$, since $d_p(S_m,S_n)=\|S_m-S_n\|_p^p$. [F1, given, algebra]

2.1 By [F2], these Cauchy sequences have limits in their respective spaces. [F2, step 1.1]

3.1 Conversely, convergence makes the partial sums Cauchy in the relevant norm or metric. The lower bound in [F1] applied to every $S_m-S_n$ forces $\sum_{n<j\le m}|a_j|^2\to0$ uniformly as $m>n\to\infty$; in the metric case take the $p$-th root first. The nonnegative partial sums $\sum_{j\le n}|a_j|^2$ are then Cauchy and converge, so $(a_j)\in\ell^2$. This proves both implications. [F1, step 1.1, step 2.1, algebra] ∎
