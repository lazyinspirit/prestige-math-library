---
id: ex-diagonal-inverse-noise-amplification
kind: example
title: "A small singular value makes the Tikhonov noise bound sharp"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - lem-hilbert-tikhonov-noise-amplification-bound
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 4: Regularization Methods"
      url: "https://www2.compute.dtu.dk/~pcha/DIP/chap4.pdf"
      locator: "Slides 3–5 on conditioning and spectral filters."
    - title: "Guido Clason, Regularization of Inverse Problems, full lecture notes"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
      locator: "Chapter 6, Hilbert-space Tikhonov regularization."
---

## Example

Assume Countable Choice. Take $A=\operatorname{diag}(1,10^{-3})$ on $\mathbb R^2$, exact target
$x^\dagger=0$, noise $e=(0,10^{-6})$, observed data $b=e$, and
$\lambda=10^{-6}$. The regularized inverse sends this noise to a vector of
norm $5\cdot10^{-4}$, exactly the general bound $\|e\|/(2\sqrt\lambda)$.

## Facts & Assumptions

**Given:** Countable Choice, the diagonal matrix, target, noise and parameter above; verify the regularized noise amplification and the claimed sharp bound.

[F1] [[lem-hilbert-tikhonov-noise-amplification-bound]]: For every data vector $g$, the Tikhonov map satisfies $\|R_\lambda g\| \le\|g\|/(2\sqrt\lambda)$.

## Verification

1.1 Here $A^*A+\lambda I=\operatorname{diag}(1+10^{-6},2\cdot10^{-6})$ and $A^*e=(0,10^{-9})$, so $R_\lambda e=(0,5\cdot10^{-4})$ and $\|e\|=10^{-6}$. [given, algebra]

2.1 Since $\sqrt\lambda=10^{-3}$, [F1] gives the upper bound $10^{-6}/(2\cdot10^{-3})=5\cdot10^{-4}$, equal to the computed output norm. Thus the constant is attained in this example. [given, F1, step 1.1, algebra] ∎
