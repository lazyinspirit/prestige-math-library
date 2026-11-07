---
id: thm-kuznetsov-trace-formula-decaying-test-functions
kind: theorem
title: "Kuznetsov Formula for Strip-Holomorphic Decaying Test Functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - thm-kuznetsov-trace-formula-level-and-character
  - def-kuznetsov-paley-wiener-test-function
  - def-kuznetsov-bessel-transform
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-supplied
verification:
  precheck: n/a
sources:
  references:
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, Memoirs of the AMS 224 (2012), arXiv:1202.0189v1"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "§§8.1–8.3, Theorem 8.1 and Proposition 8.25, printed pp. 91–106: truncation proof and explicit sufficient strip/decay range."
    - title: "Dorian Goldfeld, Trace Formulae for SL(2,R), Columbia lecture notes"
      url: "https://www.math.columbia.edu/~goldfeld/TraceFormulae-4-12-2020.pdf"
      locator: "§9, holomorphic strip and polynomial-decay test-function range in the classical formula; printed pp. 46–48."
---

## Statement

Let $A>13$ and $B>14$. Let $h$ be an even function holomorphic in the strip
$|\operatorname{Im}t|<A$ and suppose that there is a constant $C_h$ such that
$|h(t)|\le C_h(1+|t|)^{-B}$ throughout that strip. Assume the level, character,
Maass basis, and normalization of the Kuznetsov trace formula at congruence
level. Then its full level-and-character identity remains valid for this $h$:
the cuspidal sum, continuous Eisenstein integral, diagonal term, and
Kloosterman–$J$-Bessel sum have the same formulas and normalizations, and all
terms converge absolutely. If the continuous $L$-factor has a principal pole
at $t=0$, use reciprocal value $0$ there, which does not change the integral.

## Statement references

[[thm-kuznetsov-trace-formula-level-and-character]]

[[def-kuznetsov-paley-wiener-test-function]]

[[def-kuznetsov-bessel-transform]]

## Facts & Assumptions

**Given:** The base level-and-character trace formula, an even strip-holomorphic
$h$ with $A>13$ and $B>14$, and the associated inverse Selberg transform.

[F1] The base trace formula gives the identity for spectral test functions with $h(i\,\cdot)\in PW^{12}(\mathbb C)_{\mathrm{even}}$ with the stated level, character, and normalization.
([[thm-kuznetsov-trace-formula-level-and-character]])

[F2] The compact-support spectral class means $h(i\,\cdot)\in PW^{12}(\mathbb C)_{\mathrm{even}}$, with the real-axis decay obtained by rotation. ([[def-kuznetsov-paley-wiener-test-function]])

[A1] The inverse Selberg construction and the uniform quantitative domination for all truncated spectral and geometric terms, at order12 with $A>13,B>14$, remain local proof obligations. Citing Knightly–Li Proposition8.25 does not supply their proof.

## Proof

1.1 Conditional on [A1], let $V$ be the inverse Selberg transform attached to $h$, and choose the smooth truncations $V_T(u)=V(u)\rho_T(\log(1+u))$ used in Knightly–Li §8.1. Their spectral Selberg transforms satisfy $h_T(i\,\cdot)\in PW^{12}(\mathbb C)_{\mathrm{even}}$, so [F1] applies to each $h_T$. The uniform estimates assumed in A1 give that the corresponding spectral and geometric terms converge to the terms for $h$ as $T\to\infty$. [A1, F1, F2, given, algebra]

2.1 For the sufficient range $A>13$, $B>14$ and order $12$, conditional on the additional local estimates in [A1], the required dominating bounds hold for the cuspidal, continuous, diagonal, and Kloosterman terms. Dominated convergence therefore permits the limit in the equality for $h_T$ term by term, producing the stated identity for $h$. This proves the extension conditional on the base trace formula. [A1, step 1.1, algebra] ∎

## Proof status

The formal limiting argument is conditional on the base trace formula and A1. The quantitative truncation estimates and the base theorem are not supplied locally; the extension remains held.
