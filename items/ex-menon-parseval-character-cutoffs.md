---
id: ex-menon-parseval-character-cutoffs
kind: example
title: Arbitrary logarithmic Parseval cutoffs for restricted character twists
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
proof_strategy: direct
axiom_use: No choice axiom is used in this finite-coefficient specialization.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - lem-menon-arbitrary-logarithmic-parseval-reduction
  - lem-dirichlet-character-values
sources:
  references:
    - title: Siddarth Menon, Improved bounds for multiplicative functions in almost all short intervals
      url: https://arxiv.org/pdf/2607.15574v1
      locator: Proposition 3.4, printed pp. 25–26; this example keeps both signs for complex twists.
---

## Example

Fix $R>1$ and $B>0$. Let $X\ge e^{20}$ and $1\le h_1\le h_2=X/(\log X)^{3R}$. For any specified subset $S$ of the integers, any Dirichlet character $\chi$ modulo $q\le(\log X)^B$ (including principal and imprimitive characters and $q=1$), and any specified sequence $\varepsilon_n\in\{-1,1\}$, put $a_n=\mathbf1_S(n)\chi(n)\varepsilon_n$ for $X\le n\le3X$, and zero otherwise. Define $A,D_1,D_2,I,H_{\le X/8}$ as in the lemma. Then
$$\frac1X\int_X^{2X}|D_1-D_2|^2dx\ll(\log X)^{-2R}+I((\log X)^R,X/h_1)+H_{\le X/8}(X/h_1)+1/h_1.$$
The constant is independent of $B,q,\chi,S$ and the signs. In particular one may specify $\varepsilon_n=\lambda(n)$; the estimate does not assert cancellation of the frequency integrals. Any desired low-frequency saving $(\log X)^{-A}$ is available by fixing $R>1$ with $2R\ge A$, with the corresponding change in $h_2$ and the frequency cutoff retained.

## Facts & Assumptions

**Given:** The parameters and finite coefficient sequence above.

[F1] Character values have modulus at most one, with zeros allowed at nonunits. [[lem-dirichlet-character-values]]

[F2] The arbitrary-cutoff Parseval reduction and its bounded-band version hold for arbitrary complex coefficients of modulus at most one. [[lem-menon-arbitrary-logarithmic-parseval-reduction]]

## Verification

1.1 Since the indicator and signs have modulus at most one, [F1] gives $|a_n|\le1$ without requiring primitivity or a restriction on the modulus. The displayed support exactly matches [F2], since $x+h_2\le3X$ on the integration interval. Also $X/h_1\ge(\log X)^{3R}\ge(\log X)^R$. [F1, given, algebra]

2.1 Apply [F2] with $U=(\log X)^R$ and use its bounded-band conclusion. The low-frequency error is $(\log X)^{-2R}$. If $2R\ge A$, this is at most $(\log X)^{-A}$. No symmetry between positive and negative frequencies is needed. This proves the example and its stated uniformity; no long-average estimate or full Menon theorem follows from it alone. [F2, step 1.1, algebra] ∎
