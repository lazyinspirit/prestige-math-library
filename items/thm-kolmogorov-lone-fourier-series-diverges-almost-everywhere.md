---
id: "thm-kolmogorov-lone-fourier-series-diverges-almost-everywhere"
kind: "theorem"
title: "Kolmogorov lone fourier series diverges almost everywhere"
deps: ["lem-kolmogorov-gliding-hump-series-converges-in-lone", "lem-kolmogorov-block-maxima-diverge-off-a-null-limsup-set", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Grafakos, Classical Fourier Analysis, third edition
      url: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
      locator: Theorem 4.2.1, printed pp.255–261
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. There exists a complex-valued $f\in L^1(\mathbb T)$ such that $\sup_{N\ge0}|S_Nf(x)|=\infty$ for almost every x. The torus has normalized measure and $e_k(x)=e^{2\pi ikx}$.

## Facts & Assumptions

[F1] The explicit gliding-hump sequence has an $L^1$ limit with norm at most one [[lem-kolmogorov-gliding-hump-series-converges-in-lone]].

[F2] Its symmetric Fourier partial sums are unbounded off a null set [[lem-kolmogorov-block-maxima-diverge-off-a-null-limsup-set]].

[F3] Assume AC [[def-axiom-of-choice]].

## Proof

**Given:** AC and normalized torus conventions.

1.1 Take f to be the $L^1$ limit supplied by F1, represented by the absolutely convergent block sum where defined and zero on its measurable null exceptional set. This is a complex integrable function with norm at most one, so all its Fourier coefficients are well defined. [F1, F3]

2.1 F2 applies to exactly this sequence and limit. It gives $\sup_N|S_Nf(x)|=\infty$ outside a measurable null set. A convergent complex sequence is bounded: beyond some index it lies within one of its limit, and its finite initial segment has a finite maximum. Therefore these partial sums in particular fail to converge almost everywhere. The choice assumption is the one used for the countable norm-one block selection and the complex completeness supplier in F1. [F2, F3, step 1.1] ∎
