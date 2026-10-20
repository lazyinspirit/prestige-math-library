---
id: alg-radix-two-fft
kind: algorithm
title: Radix-two discrete Fourier transform
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Gu, Goel, and Ré, Efficiently Modeling Long Sequences with Structured State Spaces, Appendix C.2"
      url: "https://arxiv.org/pdf/2111.00396"
---

## Definition

For a nonnegative integer $q$, let $M=2^q$, let $\omega=e^{-2\pi i/M}$ when $M>1$, and let $a=(a_0,\ldots,a_{M-1})\in\mathbb C^M$. The forward discrete Fourier transform (DFT) is the vector $\widehat a\in\mathbb C^M$ with $\widehat a_k=\sum_{j=0}^{M-1}a_j\omega^{jk}$. The radix-two procedure returns this vector by the following exact recursion. If $M=1$, return $(a_0)$. If $M>1$, recursively compute the length-$M/2$ DFTs $E$ and $O$ of $(a_0,a_2,\ldots,a_{M-2})$ and $(a_1,a_3,\ldots,a_{M-1})$, using the primitive root $\omega^2$. For $0\le k<M/2$, return $\widehat a_k=E_k+\omega^k O_k$ and $\widehat a_{k+M/2}=E_k-\omega^kO_k$. The inverse transform is obtained by running the same procedure with $\overline\omega$ and dividing every output by $M$.

## Definition references

[Gu, Goel, and Ré, “Efficiently Modeling Long Sequences with Structured State Spaces,” Appendix C.2](https://arxiv.org/pdf/2111.00396)
