---
id: ex-endpoint-interpolation-for-a-finite-matrix
kind: example
title: Interpolation for the two-by-two Hadamard matrix
deps: [cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime, def-complex-lp-and-euclidean-test-function-conventions]
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Laugesen Theorem C.6; explicit finite matrix calculation
      url: https://arxiv.org/pdf/0903.3845
  scraped: []
status: draft
origin: pipeline
generation:
  role: example
proof_strategy: direct
---

## Example

For two-point counting measure, the matrix $H=\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ acts by $H(a,b)=(a+b,a-b)$. Its $\ell^1\to\ell^\infty$ norm is 1 and its $\ell^2\to\ell^2$ norm is $\sqrt2$. For $1\le p\le2$ its $\ell^p\to\ell^{p'}$ norm is at most $2^{1-1/p}$.

## Facts & Assumptions

[F1] On counting measure the Lp norms are the corresponding finite sums or essential maximum [[def-complex-lp-and-euclidean-test-function-conventions]].

[F2] A complex-linear core map with endpoint bounds A and B has the stated conjugate-exponent bound [[cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime]].

## Verification

**Given:** The objects and hypotheses in the statement.

1.1 Counting measure assigns masses $0,1,1,2$ to the four subsets and is countably additive because a disjoint family has at most two nonempty members. Every complex tuple is a finite simple function and H is complex-linear. The complex Lp conventions give $\|(a,b)\|_1=|a|+|b|$, $\|(a,b)\|_2^2=|a|^2+|b|^2$, and $\|(a,b)\|_\infty=\max(|a|,|b|)$. Since $|a\pm b|\le|a|+|b|$, the first operator norm is at most one; the input (1,0) has input norm one and output (1,1) of infinity norm one, so the norm is exactly one. [F1, given]

2.1 Expanding with complex conjugates gives $|a+b|^2+|a-b|^2=2|a|^2+2|b|^2$, since the two cross terms cancel. Hence $\|H(a,b)\|_2=\sqrt2\|(a,b)\|_2$, proving the second operator norm exactly. For $1<p<2$, apply F2 with A=1 and B=sqrt(2): $1^{2/p-1}(\sqrt2)^{2-2/p}=2^{1-1/p}$. The endpoints are the two direct calculations. [F2, step 1.1] ∎
