---
id: lem-cz-good-part-has-controlled-ltwo-image
kind: lemma
title: "The good part has controlled L2 image"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-calderon-zygmund-kernel-and-principal-value-operator, def-countable-choice, lem-calderon-zygmund-decomposition-at-height-lambda, thm-chebyshev-markov-inequality-for-the-integral]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "proof of Theorem 5.3.3, treatment of the good part, printed pp. 360–362"
    - title: "Terence Tao, Math 247A Lecture Notes 4"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "Corollary 2.9, first term, printed p. 8"
---

## Statement

Assume Countable Choice. Let $T$ be a Calderón–Zygmund operator with kernel
constants $A_1,A_2$ and $L^2$ norm $B$, and let $f=g+\sum_jb_j$ be the
Calderón–Zygmund decomposition of $f\in L^1(\mathbb R^n)$ at height $\lambda>0$
([[lem-calderon-zygmund-decomposition-at-height-lambda]]). Then
$$|\{|Tg|>\lambda/2\}|\le4B^22^n\lambda^{-1}\|f\|_1.$$

## Facts & Assumptions

**Given:** $f\in L^1$, $\lambda>0$, its Calderón–Zygmund decomposition with good part $g$ at height $\lambda$; a Calderón–Zygmund operator $T$ with $L^2$ norm bound $B$.

[F1] The good part satisfies $g\in L^2(\mathbb R^n)$ with $\|g\|_2^2\le2^n\lambda\|f\|_1$ ([[lem-calderon-zygmund-decomposition-at-height-lambda]]).

[F2] $T:L^2\to L^2$ is linear with $\|Th\|_2\le B\|h\|_2$ for every $h\in L^2$ ([[def-calderon-zygmund-kernel-and-principal-value-operator]]).

[F3] For a measurable $u$ and $\mu>0$, $\mu(\{|u|\ge\mu\})\le\mu^{-2}\int|u|^2\,d\mu$; more precisely $\lambda(\{|u|>\mu\})\le\mu^{-2}\int|u|^2d\lambda$ by Chebyshev's inequality applied to $|u|^2$ at level $\mu^2$ ([[thm-chebyshev-markov-inequality-for-the-integral]]).

## Proof

**Proof technique:** direct.

1.1 Since $g\in L^2$ by [F1], linearity of $T$ gives $Tg\in L^2$ with $\|Tg\|_2\le B\|g\|_2$. [F1, F2, given]

2.1 Chebyshev's inequality at level $(\lambda/2)^2$ applied to $|Tg|^2$, followed by step 1.1 and the bound of [F1], gives $$|\{|Tg|>\lambda/2\}|\le\frac{4}{\lambda^2}\|Tg\|_2^2\le\frac{4B^2}{\lambda^2}\|g\|_2^2\le\frac{4B^2}{\lambda^2}\,2^n\lambda\|f\|_1=4B^22^n\lambda^{-1}\|f\|_1,$$ which is the asserted estimate. [F1, F3, step 1.1, algebra] ∎
