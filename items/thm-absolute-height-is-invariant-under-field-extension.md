---
id: thm-absolute-height-is-invariant-under-field-extension
kind: theorem
title: "Absolute height is invariant under finite field extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field
  - def-archimedean-embeddings-and-number-field-signature
  - def-axiom-of-choice
  - def-prime-above-and-residue-degree
  - def-ramification-index
  - thm-algebraic-embedding-extension
  - thm-field-norm-and-trace-by-embeddings
  - thm-fundamental-identity-for-primes-in-number-fields
  - thm-number-field-places-classification
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph H. Silverman, The Theory of Height Functions"
      url: "https://unina2.on-line.it/sebina/repository/catalogazione/documenti/Cornell%2C%20Silverman%20-%20Arithmetic%20Geometry.pdf"
    - title: "J. H. Silverman, Arithmetic Geometry"
      url: "https://doi.org/10.1007/978-1-4613-8655-1_6"
verification: {}
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $K\subseteq L$ be a finite extension of number fields, let $d=[L:K]$, and let $P\in\mathbb P^n(K)$. Compute the relative multiplicative height using $K$ or $L$ and the same coordinate tuple. Then $H_L(P)=H_K(P)^d$. Consequently the absolute multiplicative and logarithmic heights agree: $H_L(P)^{1/[L:\mathbb Q]}=H_K(P)^{1/[K:\mathbb Q]}$ and $h_L(P)=h_K(P)$.

## Statement references

[[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]]

[[thm-number-field-places-classification]]

[[thm-fundamental-identity-for-primes-in-number-fields]]

## Facts & Assumptions

**Given:** AC; a finite extension $L/K$ of number fields; $d=[L:K]$; and a nonzero coordinate tuple $x=(x_0,\ldots,x_n)\in K^{n+1}$ representing $P$.

[A1] AC is assumed in the number-field places classification and product-formula height definitions used here. ([[def-axiom-of-choice]], [[thm-number-field-places-classification]], [[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]])

[F1] For a prime $\mathfrak p$ of $K$ above the rational prime $p$, the finite-place factor is $(Np)^{-v_{\mathfrak p}(z)}=(Np)^{-f(\mathfrak p/p)\operatorname{ord}_{\mathfrak p}(z)}$. ([[thm-number-field-places-classification]], [[def-prime-above-and-residue-degree]])

[F2] For $\mathfrak P$ above $\mathfrak p$ in $L$, $\operatorname{ord}_{\mathfrak P}(z)=e(\mathfrak P/\mathfrak p)\operatorname{ord}_{\mathfrak p}(z)$ for $z\in K^\times$, and $\sum_{\mathfrak P\mid\mathfrak p}e(\mathfrak P/\mathfrak p)f(\mathfrak P/\mathfrak p)=d$. ([[def-prime-above-and-residue-degree]], [[def-ramification-index]], [[thm-fundamental-identity-for-primes-in-number-fields]])

[F3] Every embedding of $K$ into an algebraic closure extends to exactly $d$ embeddings of $L$, counted with conjugate embeddings separately; number fields are separable. ([[thm-algebraic-embedding-extension]], [[thm-field-norm-and-trace-by-embeddings]])

[F4] The relative height has the finite ideal-norm factor and the real/complex maximum factors with exponents $1$ and $2$; the absolute height is its $1/[K:\mathbb Q]$ power. ([[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]], [[def-archimedean-embeddings-and-number-field-signature]])

## Proof

1.1 Fix a rational prime $p$ and a prime $\mathfrak p$ of $K$ above it. For every $i$, [F2] multiplies $\operatorname{ord}_{\mathfrak p}(x_i)$ by $e(\mathfrak P/\mathfrak p)$ at $\mathfrak P$ above $\mathfrak p$, while [F1] weights that valuation by $f(\mathfrak P/\mathfrak p)f(\mathfrak p/p)$. Thus the total exponent of $Np$ in the finite factor over all $\mathfrak P\mid\mathfrak p$ is $-f(\mathfrak p/p)\min_i\operatorname{ord}_{\mathfrak p}(x_i)\sum_{\mathfrak P\mid\mathfrak p}ef=-d f(\mathfrak p/p)\min_i\operatorname{ord}_{\mathfrak p}(x_i)$ by [F2]. This is $d$ times the $K$-factor. [given, F1, F2, algebra]

1.2 For a real embedding $\sigma:K\hookrightarrow\mathbb R$, its $d$ extensions to $L$ consist of real embeddings and pairs of conjugate complex embeddings. A real extension contributes one copy of $\log M_\sigma$, while a complex pair contributes $2\log M_\sigma$ under the doubled-complex convention, so the total is $d\log M_\sigma$. For a complex place represented by $\tau:K\hookrightarrow\mathbb C$, each of its $d$ extensions determines one complex place of $L$ above it (the conjugate embedding extends $\bar\tau$); each contributes $2\log M_\tau$. Thus [F3] and [F4] give a total archimedean logarithm over $L$ equal to $d$ times that over $K$. [given, F3, F4, algebra]

2.1 The finite and archimedean factors in [F4] exhaust the relative height, so [step 1.1] and [step 1.2] give $\log H_L(P)=d\log H_K(P)$, hence $H_L(P)=H_K(P)^d$. Since $[L:\mathbb Q]=d[K:\mathbb Q]$, taking the normalized powers gives equal absolute multiplicative heights; taking logarithms gives $h_L(P)=h_K(P)$. [given, F4, step 1.1, step 1.2, algebra] ∎
