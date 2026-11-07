---
id: lem-minimal-polynomial-height-coefficient-bound
kind: lemma
title: Bounded height bounds the coefficients of a minimal polynomial
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field
  - def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field
  - def-algebraic-and-transcendental-elements
  - def-axiom-of-choice
  - def-number-field
  - def-prime-above-and-residue-degree
  - def-ramification-index
  - def-completion-of-a-number-field-at-a-prime
  - thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots
  - thm-evaluation-kernel-and-minimal-polynomial
  - thm-field-norm-and-trace-by-embeddings
  - thm-fundamental-identity-for-primes-in-number-fields
  - thm-number-field-places-classification
  - thm-product-formula-for-number-fields
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Gregory S. Call and Joseph H. Silverman, Canonical heights on varieties with morphisms, §1, Corollary 1.1.1(b), printed p. 168"
      url: "https://www.numdam.org/item/CM_1993__89_2_163_0.pdf"
    - title: "Joseph H. Silverman, Lecture Notes on Arithmetic Dynamics, Arizona Winter School 2010, §4.1, Theorem 12(b), printed pp. 9–10"
      url: "https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf"
---

## Statement

Assume the Axiom of Choice. Let $\alpha$ be algebraic over $\mathbb Q$, let $m=[\mathbb Q(\alpha):\mathbb Q]\ge1$, and write $f$ for the primitive integer rescaling of its monic irreducible minimal polynomial, normalized to have positive leading coefficient; thus the integer coefficients of $f$ have gcd $1$:
$$f(T)=a_mT^m+a_{m-1}T^{m-1}+\cdots+a_0\in\mathbb Z[T].$$
For every real $B\ge0$, if the absolute logarithmic projective height satisfies $h([1:\alpha])\le B$, then
$$|a_{m-k}|\le {m\choose k}e^{mB}\qquad(0\le k\le m).$$

## Statement references

[[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field|Absolute logarithmic projective height]]

[[thm-evaluation-kernel-and-minimal-polynomial|Minimal polynomial]]

[Call and Silverman, §1, Corollary 1.1.1(b), printed p. 168](https://www.numdam.org/item/CM_1993__89_2_163_0.pdf)

[Silverman, §4.1, Theorem 12(b), printed pp. 9–10](https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice; an algebraic number $\alpha$; its degree $m$ and primitive irreducible polynomial $f$ with positive leading coefficient; and $B\ge0$ with $h([1:\alpha])\le B$.

[A1] The number-field height and embedding inputs are stated under the Axiom of Choice. [[def-axiom-of-choice]]

[F1] In a number field $E$, the absolute multiplicative height is the relative height to the power $1/[E:\mathbb Q]$; for $[1:\alpha]$, its finite factor is $\prod_{\mathfrak p}\max(1,|\alpha|_{\mathfrak p})$ and its archimedean factors are real maxima and squared complex maxima. [[def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field]] [[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]] [[thm-number-field-places-classification]]

[F2] For $\mathfrak p\mid p$ in $E/\mathbb Q$, the completion $E_{\mathfrak p}/\mathbb Q_p$ has degree $ef$, with ramification index $e$ and residue degree $f$. Its residue field is $\mathcal O_E/\mathfrak p$ and its normalized absolute value is $|\cdot|_{\mathfrak p}^{1/(ef)}$. The embeddings of $E$ into an algebraic closure of $\mathbb Q_p$ inducing $\mathfrak p$ correspond to embeddings of this completion; there are $ef$ of them, each giving $|\sigma\alpha|_p=p^{-\operatorname{ord}_{\mathfrak p}(\alpha)/e}$. The sum of these local degrees over $\mathfrak p\mid p$ is $[E:\mathbb Q]$. [[def-completion-of-a-number-field-at-a-prime]] [[thm-number-field-places-classification]] [[def-prime-above-and-residue-degree]] [[def-ramification-index]] [[thm-fundamental-identity-for-primes-in-number-fields]] [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]] [[thm-field-norm-and-trace-by-embeddings]]

[F3] Since number fields have characteristic zero, $E=\mathbb Q(\alpha)$ is separable and has exactly $m$ embeddings into each algebraic closure; their images are the distinct roots of the minimal polynomial. [[thm-field-norm-and-trace-by-embeddings]] [[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]] [[thm-evaluation-kernel-and-minimal-polynomial]]

[F4] For every nonzero rational number $a$, its ordinary and $p$-adic absolute values satisfy $|a|_\infty\prod_p|a|_p=1$. [[thm-product-formula-for-number-fields]]

## Proof

1.1 Let $E=\mathbb Q(\alpha)$ and let $\alpha_1,\ldots,\alpha_m$ be the complex roots of $f$, the images under the embeddings in [F3]. At a finite prime $\mathfrak p$ of $E$, the valuation of the coordinate ideal $(1,\alpha)$ is $\min(0,\operatorname{ord}_{\mathfrak p}(\alpha))$, so its inverse norm factor is $\max(1,|\alpha|_{\mathfrak p})$. The height formula [F1] therefore gives $e^{m h([1:\alpha])}=\prod_{\mathfrak p\text{ finite}}\max(1,|\alpha|_{\mathfrak p})\prod_{\sigma:E\hookrightarrow\mathbb R}\max(1,|\sigma\alpha|)\prod_{\tau:E\hookrightarrow\mathbb C,\ \tau\text{ one per pair}}\max(1,|\tau\alpha|)^2$; its archimedean product is $\prod_{i=1}^m\max(1,|\alpha_i|)$. [given, A1, F1, F3]

1.2 Fix a rational prime $p$ and write $\alpha_{1,p},\ldots,\alpha_{m,p}$ for the roots of $f$ in an algebraic closure of $\mathbb Q_p$. For each $\mathfrak p\mid p$, [F2] gives $ef$ local embeddings inducing $\mathfrak p$, all with $|\sigma\alpha|_p=p^{-\operatorname{ord}_{\mathfrak p}(\alpha)/e}$; their maximum factors multiply to $\max(1,p^{-\operatorname{ord}_{\mathfrak p}(\alpha)/e})^{ef}=\max(1,p^{-f\operatorname{ord}_{\mathfrak p}(\alpha)})=\max(1,|\alpha|_{\mathfrak p})$. Thus the finite-place product above $p$ is $\prod_{i=1}^m\max(1,|\alpha_{i,p}|_p)$. [given, A1, F2, F3]

2.1 On $\overline{\mathbb Q}_p[T]$, define the Gauss norm of a polynomial as the maximum $p$-adic absolute value of its coefficients. Coefficient convolution and the ultrametric inequality give submultiplicativity. After scaling two nonzero polynomials to norm $1$, their nonzero reductions over the residue field have nonzero product, so the product has norm $1$; this proves multiplicativity. Since $f$ is primitive, its Gauss norm is $1$, and factoring over the $p$-adic algebraic closure gives $\prod_{i=1}^m\max(1,|\alpha_{i,p}|_p)=|a_m|_p^{-1}$. [given, A1, F3, step 1.2, algebra]

3.1 By steps 1.2 and 2.1, the finite-place product above each $p$ equals $|a_m|_p^{-1}$. Multiplying over $p$ and applying [F4] to the positive integer $a_m$ shows that the total finite contribution is $a_m$. [given, F4, step 1.2, step 2.1, algebra]

4.1 Combining steps 1.1 and 3.1 gives $e^{m h([1:\alpha])}=a_m\prod_{i=1}^m\max(1,|\alpha_i|)$. [step 1.1, step 3.1, algebra]

5.1 For each $k$, Vieta’s formula expresses $a_{m-k}$ as $(-1)^ka_m$ times a sum of $\binom{m}{k}$ products of $k$ distinct roots. Each product has absolute value at most $\prod_{i=1}^m\max(1,|\alpha_i|)$, so $|a_{m-k}|\le\binom{m}{k}a_m\prod_i\max(1,|\alpha_i|)=\binom{m}{k}e^{m h([1:\alpha])}\le\binom{m}{k}e^{mB}$. This includes $k=0$ and $k=m$. [given, step 4.1, algebra] ∎
