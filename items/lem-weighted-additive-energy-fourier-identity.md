---
id: lem-weighted-additive-energy-fourier-identity
kind: lemma
title: "Weighted additive-energy identity for complex functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-integers-modulo-n
  - def-unitary-discrete-fourier-transform-on-z-mod-n
  - def-cyclic-convolution-on-z-mod-n
  - thm-integers-modulo-n-basic-algebra
  - thm-finite-parseval-and-plancherel
  - lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "§4.2, equation (4.14) and Lemma 4.9, printed pp. 157–158; the complex-weighted extension is proved locally here"
---

## Statement

Let $N\ge1$, let $G=\mathbb Z/N\mathbb Z$, and let $f:G\to\mathbb C$. Use the negative-sign unitary discrete Fourier transform $\widehat f(\xi)=N^{-1/2}\sum_{x=0}^{N-1}f([x]_N)e^{-2\pi i\xi x/N}$. Define the weighted additive energy by

$$\mathcal E(f):=\sum_{\substack{a,b,c,d\in G\\a+b=c+d}} f(a)f(b)\overline{f(c)f(d)}.$$

Then $\mathcal E(f)=N\sum_{\xi\in G}|\widehat f(\xi)|^4$.

## Statement references

[[def-unitary-discrete-fourier-transform-on-z-mod-n]]

[Tao and Vu, *Additive Combinatorics*, §4.2](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

## Facts & Assumptions

**Given:** $N\ge1$, $G=\mathbb Z/N\mathbb Z$, and $f:G\to\mathbb C$.

[F1] The negative-sign unitary transform is $\widehat h(\xi)=N^{-1/2}\sum_{x=0}^{N-1}h([x]_N)e^{-2\pi i\xi x/N}$ ([[def-unitary-discrete-fourier-transform-on-z-mod-n]]).

[F2] The unnormalised cyclic convolution is $(f*f)(x)=\sum_{a\in G}f(a)f(x-a)$ ([[def-cyclic-convolution-on-z-mod-n]]).

[F3] Parseval gives $\sum_{x\in G}|h(x)|^2=\sum_{\xi\in G}|\widehat h(\xi)|^2$ ([[thm-finite-parseval-and-plancherel]]).

[F4] The transform of unnormalised cyclic convolution is $\widehat{f*f}(\xi)=\sqrt N\,\widehat f(\xi)^2$ ([[lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product]]).

## Proof

1.1 Put $r=f*f$. Expanding the definition in [F2], grouping pairs $(a,b)$ by their sum $x=a+b$, and using complex conjugation on the second copy gives $\sum_{x\in G}|r(x)|^2=\sum_{a+b=c+d}f(a)f(b)\overline{f(c)f(d)}=\mathcal E(f)$. The sums are finite, so the regrouping changes no terms. [given, F2, algebra]

2.1 Apply Parseval [F3] to $r$ and use step 1.1 to obtain $\mathcal E(f)=\sum_{\xi\in G}|\widehat r(\xi)|^2$. [F3, step 1.1]

3.1 By [F4], $\widehat r(\xi)=\sqrt N\,\widehat f(\xi)^2$ for every $\xi$. Substituting this into step 2.1 yields $\mathcal E(f)=N\sum_{\xi\in G}|\widehat f(\xi)|^4$. [F4, step 2.1, algebra] ∎

## Proof references

