---
id: ex-sl2-level-zero-trivial-sugawara
kind: example
title: The level-zero trivial sl2 module
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - thm-sugawara-modes-satisfy-virasoro
  - def-sugawara-modes
  - def-positive-energy-unitary-affine-module
  - def-dual-coxeter-number-for-normalized-form
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
    - title: Antony Wassermann, Kac–Moody and Virasoro Algebras, Chapter III §6
      url: https://arxiv.org/pdf/1004.1287
---

## Example

The one-dimensional trivial representation of the loop central extension, with central level $k=0$, is irreducible, unitary, and positive-energy in degree zero. Every Sugawara mode is zero on it, and its Virasoro central charge is $0$.

## Facts & Assumptions

**Given:** The one-dimensional complex Hilbert space $H=\mathbb C$, with every loop-current mode and the central generator acting by zero, and the degree-zero grading.

[F1] [[def-positive-energy-unitary-affine-module]]: a positive-energy unitary module has nonnegative energy grading, skew-adjoint compact modes, and a scalar central level.

[F2] [[def-sugawara-modes]]: each Sugawara mode is a scalar multiple of a sum of normally ordered products of two current modes.

[F3] [[thm-sugawara-modes-satisfy-virasoro]]: the central charge is $k\dim(\mathfrak g)/(k+h^\vee)$ in this module regime.

[F4] [[def-dual-coxeter-number-for-normalized-form]]: $h^\vee>0$ for the normalized compact simple algebra.

## Verification

1.1 The zero action respects the affine bracket because both the current bracket and its central term act as zero; $H_0=H$ is one-dimensional and every positive energy space is zero. The inner product is positive and the adjoint relation $0^*=-0$ holds, so the stated representation meets [F1] and is irreducible. [given, F1, algebra]

2.1 Every summand in [F2] is a product of zero operators, hence $L_m=0$ for all $m$. In [F3], $k=0$ and $h^\vee>0$ by [F4], so the denominator is nonzero and $c=0$. Thus the Virasoro relation is the zero identity on this example. [F2, F3, F4, algebra] ∎
