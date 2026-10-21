---
id: ex-ip-fourier-translation-reflection-ambiguity
kind: example
title: Translation and reflection ambiguities for a finite Fourier magnitude map
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - thm-complex-numbers-form-a-field
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-complex-conjugation-and-modulus-laws
  - thm-of-square-roots
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Philipp Grohs, Sarah Koppensteiner, and Martin Rathmair, Phase Retrieval: Uniqueness and Stability, arXiv:1901.07911v2, Proposition 3.3"
      url: "https://arxiv.org/pdf/1901.07911v2"
---

## Example

Let $C_3=\mathbb Z/3\mathbb Z$, put $\omega=(-1-i\sqrt3)/2$, and for a real signal $f:C_3\to\mathbb R$ define its unnormalised discrete Fourier transform by $\widehat f(k)=\sum_{n=0}^{2}f(n)\omega^{kn}$ for the representatives $k=0,1,2$. Its Fourier magnitude data are $(|\widehat f(k)|)_{k=0}^{2}$. Define translation by $(\tau_1 f)(n)=f(n-1)$ and reflection by $(Rf)(n)=f(-n)$, with indices in $C_3$. For $f(0)=1$, $f(1)=2$, and $f(2)=0$, both $\tau_1f$ and $Rf$ have the same Fourier magnitude data as $f$, while neither equals $f$ or $-f$.

## Example references

[Philipp Grohs, Sarah Koppensteiner, and Martin Rathmair, finite Fourier translation and conjugate-reflection ambiguities, Proposition 3.3](https://arxiv.org/pdf/1901.07911v2)

## Facts & Assumptions

**Given:** The cyclic group $C_3$, $\omega=(-1-i\sqrt3)/2$, the stated DFT convention, and the real signal $f$ in the example.

[F1] Complex arithmetic is a field operation system; conjugation and modulus are given by $\overline{a+bi}=a-bi$ and $|a+bi|=\sqrt{a^2+b^2}$, and conjugation respects sums, products and modulus ([[thm-complex-numbers-form-a-field]], [[def-complex-conjugate-real-imaginary-part-and-modulus]], [[lem-complex-conjugation-and-modulus-laws]]).

[F2] The nonnegative square root of $3$ squares to $3$ ([[thm-of-square-roots]]).

## Verification


1.1 Write $s=\sqrt3$. By [F1] and [F2], $\omega^2=(-1+is)/2$, $\omega^3=1$, and $|\omega|^2=1$, hence $|\omega|=1$. Reindexing the finite sum with $j=n-1$ gives $\widehat{\tau_1f}(k)=\sum_j f(j)\omega^{k(j+1)}=\omega^k\widehat f(k)$. Multiplicativity of the modulus [F1] gives $|\omega^k|=1$, so every Fourier magnitude is unchanged. [given, F1, F2, algebra]

2.1 Since $|\omega|=1$, [F1] gives $\overline\omega=\omega^{-1}$. Reindexing with $j=-n$ gives $\widehat{Rf}(k)=\sum_j f(j)\omega^{-kj}$. Because every $f(j)$ is real, this equals $\overline{\sum_j f(j)\omega^{kj}}=\overline{\widehat f(k)}$ by the conjugation laws in [F1], so reflection preserves every Fourier magnitude. [step 1.1, F1, algebra]

3.1 The support of $f$ is $\{0,1\}$, that of $\tau_1f$ is $\{1,2\}$, and that of $Rf$ is $\{0,2\}$. These differ from $\{0,1\}$, so neither transformed signal is $f$; each is nonzero, so neither is $-f$ either. Combined with the invariances in steps 1.1 and 2.1, both transformed signals are distinct from the original up to global sign but have identical Fourier magnitude data. [step 1.1, step 2.1, given, construct, algebra] ∎
