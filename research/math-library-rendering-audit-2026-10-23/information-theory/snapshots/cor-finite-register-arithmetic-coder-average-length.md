---
id: cor-finite-register-arithmetic-coder-average-length
kind: corollary
title: "The finite-register rational coder is within two bits per block"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-finite-discrete-source-and-blocks, def-base-two-entropy-of-a-finite-source, thm-finite-register-rational-arithmetic-coder-is-prefix-and-lossless, def-it-information-units-and-logarithm-base, thm-natural-logarithm-laws]
justified_by: []
proof_strategy: direct
strategy: "Average the pointwise exact interval bound under the rational product source."
axiom_use: "No choice axiom is used; all expectations are finite sums."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Scott D. Roweis, CSC310 Lecture 8x: Arithmetic Coding Without Blocks, version 1.1"
      url: "https://cs.nyu.edu/home/people/in_memoriam/roweis/csc310-2005/notes/lec8x.pdf"
      locator: "slides 10–15, finite rational source frequencies and integer interval coding"
    - title: "Stanford EE376A, Information Theory Course Notes, Chapter 4: Lossless Compression"
      url: "https://web.stanford.edu/class/ee376a/files/lecture_notes.pdf"
      locator: "§4.3, finite-block entropy and expected length"
---
## Statement

For the rational source and length-$n$ frames of [[alg-finite-register-rational-arithmetic-coder]],
$$\mathbb E[\ell(X^n)]\le nH_2(p)+2.$$

## Facts & Assumptions

**Given:** A product source block $X^n$, its rational frequencies, and the pointwise length bound of the finite-register coding theorem.

[F1] [[thm-finite-register-rational-arithmetic-coder-is-prefix-and-lossless]]: $\ell(x^n)\le-\log_2p^n(x^n)+2$ for every block.

[F2] [[def-finite-discrete-source-and-blocks]]: $p^n(x^n)=\prod_{t=1}^np_{x_t}$.

[F3] [[def-base-two-entropy-of-a-finite-source]]: $H_2(p)=-\sum_i p_i\log_2p_i$.

[F4] [[def-it-information-units-and-logarithm-base]]: $\log_2t=\ln t/\ln2$.

[F5] [[thm-natural-logarithm-laws]]: $\ln(xy)=\ln x+\ln y$ for positive $x,y$.

## Proof

1.1 Take the expectation of [F1] under the finite product law [F2], obtaining $\mathbb E[\ell(X^n)]\le\mathbb E[-\log_2p^n(X^n)]+2$. [F1, F2, given, algebra]

2.1 By [F2], [F4], and [F5], $-\log_2p^n(X^n)=\sum_{t=1}^n-\log_2p_{X_t}$. For each coordinate $t$, summing $p^n$ over blocks with $x_t=i$ gives $p_i(\sum_jp_j)^{n-1}=p_i$, so $X_t$ has law $p$. Linearity of finite expectation and [F3] then give $\mathbb E[-\log_2p^n(X^n)]=nH_2(p)$. Substitute in step 1.1. [F2, F3, F4, F5, step 1.1, algebra] ∎

