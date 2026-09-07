---
id: lem-blr-acceptance-fourier-identity
kind: lemma
title: "The cubic Fourier identity for BLR"
status: draft
origin: pipeline
deps: [lem-boolean-cube-fourier-inversion-and-parseval]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct calculation
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, January 2007 web draft, Theorem 19.9 proof pp.390\u2013391"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

For a fixed $f:\mathbb F_2^n\to\mathbb F_2$, $n\geq0$, put $h(x)=(-1)^{f(x)}$. If the BLR acceptance probability is $\alpha$, then
$$2\alpha-1=\mathbb E_{x,y}h(x)h(y)h(x+y)=\sum_{a\in\mathbb F_2^n}\widehat h(a)^3,$$
where $x,y$ are independent uniform points and the Fourier coefficients are real and normalized.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] Every real cube function has the stated normalized Fourier expansion and the characters are orthonormal ([[lem-boolean-cube-fourier-inversion-and-parseval]]).

## Proof

1.1 The product $h(x)h(y)h(x+y)$ is one exactly when $f(x)+f(y)+f(x+y)=0$ modulo two, and minus one otherwise. Thus its expectation is $\alpha-(1-\alpha)=2\alpha-1$, including $\alpha=0,1$. [given, algebra]

1.2 Apply Fourier inversion to each of the three factors. The expectation of the resulting finite sum is $\sum_{a,b,c}\widehat h(a)\widehat h(b)\widehat h(c)\mathbb E_{x,y}\chi_a(x)\chi_b(y)\chi_c(x+y)$. [F1, algebra]

2.1 Using $\chi_c(x+y)=\chi_c(x)\chi_c(y)$ and independence of $x,y$, each expectation factors as $(\mathbb E_x\chi_a(x)\chi_c(x))(\mathbb E_y\chi_b(y)\chi_c(y))$. Orthogonality makes this one exactly when $a=b=c$ and zero otherwise. The sum is therefore $\sum_a\widehat h(a)^3$, as asserted. This is also valid for $n=0$, where every sum has one term, and for constant $f$, where $h$ is the constant sign $1$ or $-1$. [F1, step 1.1, step 1.2, algebra] ∎
