---
id: lem-relative-projective-height-coordinate-invariance
kind: lemma
title: The relative projective height is invariant under coordinate scaling
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-fractional-ideal
  - def-fractional-ideal-norm-number-field
  - def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field
  - thm-principal-ideal-norm-is-absolute-field-norm
  - thm-field-norm-and-trace-by-embeddings
  - thm-clearing-denominators-for-an-algebraic-number
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Joseph H. Silverman, The Theory of Height Functions, Chapter VI §§1–2"
      url: "https://yhzhumath.github.io/Mordell2024/CS.pdf"
    - title: "H. W. Lenstra Jr., Algorithms in Algebraic Number Theory, §6"
      url: "https://arxiv.org/pdf/math/9204234"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, let $n\ge0$, and let $x=(x_0,\ldots,x_n)\in K^{n+1}$ be nonzero. For a nonzero fractional ideal $I=(x_0,\ldots,x_n)$, define
$$
H_K([x_0:\cdots:x_n])=N_K(I)^{-1}
\prod_{\sigma:K\hookrightarrow\mathbb R}\max_i|\sigma(x_i)|
\prod_{\tau:K\hookrightarrow\mathbb C\,/\,\text{conjugation}}\max_i|\tau(x_i)|^2.
$$
For every $\lambda\in K^\times$, one has $H_K([\lambda x_0:\cdots:\lambda x_n])=H_K([x_0:\cdots:x_n])$; consequently its $[K:\mathbb Q]$-th root is also independent of the chosen projective coordinates.

## Statement references

[Silverman, Chapter VI §§1–2, printed pp. 151–152](https://yhzhumath.github.io/Mordell2024/CS.pdf)

[Lenstra, §6, pp. 26–28](https://arxiv.org/pdf/math/9204234)

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$, a nonzero coordinate tuple $x$, and a scalar $\lambda\in K^\times$.

[A1] The relative projective-height convention is stated under the Axiom of Choice ([[def-axiom-of-choice]], [[def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field]]).

[F1] The relative height is the inverse norm of the fractional coordinate ideal times the real and complex embedding maxima, with complex weight two ([[def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field]]).

[F2] The norm of a nonzero fractional ideal is the finite product of prime-ideal norms to its integer valuation exponents and is multiplicative ([[def-fractional-ideal-norm-number-field]]).

[F3] For $0\ne a\in\mathcal O_K$, the norm of $(a)$ is $|N_{K/\mathbb Q}(a)|$ ([[thm-principal-ideal-norm-is-absolute-field-norm]]).

[F4] The number-field norm is the product of the values over all embeddings, and $K/\mathbb Q$ is separable ([[thm-field-norm-and-trace-by-embeddings]], [[def-number-field]]).

[F5] A nonzero denominator clears any algebraic number into an algebraic integer ([[thm-clearing-denominators-for-an-algebraic-number]]).

[F6] A fractional ideal is a nonzero $\mathcal O_K$-submodule of $K$ that is cleared into $\mathcal O_K$ by a nonzero element ([[def-fractional-ideal]]).

## Proof


1.1 Choose $0\ne d\in\mathcal O_K$ with $d\lambda\in\mathcal O_K$ by [F5]. Since $(d\lambda)=(d)(\lambda)$, multiplicativity [F2] and the principal integral-ideal norm formula [F3] give [given]
$$
N_K((\lambda))=\frac{N_K((d\lambda))}{N_K((d))}=\frac{|N_{K/\mathbb Q}(d\lambda)|}{|N_{K/\mathbb Q}(d)|}=|N_{K/\mathbb Q}(\lambda)|,
$$
where the last equality follows by writing each field norm as its embedding product [F4]. [F2, F3, F4, F5, given, choose]

2.1 Let $I=(x_0,\ldots,x_n)$. Applying [F5] to its finitely many generators and multiplying the resulting denominators gives $0\ne D\in\mathcal O_K$ with $DI\subseteq\mathcal O_K$; because some $x_i\ne0$, [F6] makes $I$ a nonzero fractional ideal. The ideal $I'=(\lambda x_0,\ldots,\lambda x_n)=(\lambda)I$ is also a nonzero fractional ideal. By [F1], [F2], and step 1.1, $N_K(I')=|N_{K/\mathbb Q}(\lambda)|N_K(I)$. The archimedean product for $\lambda x$ is the product for $x$ multiplied by [A1, step 1.1]
$$
\prod_{\sigma:K\hookrightarrow\mathbb R}|\sigma(\lambda)|\prod_{\tau:K\hookrightarrow\mathbb C\,/\,\text{conjugation}}|\tau(\lambda)|^2=|N_{K/\mathbb Q}(\lambda)|
$$
by [F4]. These two factors cancel in the defining formula [F1], so the relative height is invariant under scaling; taking the same positive $[K:\mathbb Q]$-th root preserves equality. [A1, F1, F2, F4, F5, F6, step 1.1, algebra] ∎

