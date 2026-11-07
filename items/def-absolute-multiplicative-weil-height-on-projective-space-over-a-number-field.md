---
id: def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field
kind: definition
title: "Absolute multiplicative Weil height on projective space over a number field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-archimedean-embeddings-and-number-field-signature
  - def-fractional-ideal-norm-number-field
  - def-number-field
  - def-prime-ideal-valuations-on-fractional-ideals
  - thm-product-formula-for-number-fields
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph H. Silverman, The Theory of Height Functions"
      url: "https://unina2.on-line.it/sebina/repository/catalogazione/documenti/Cornell%2C%20Silverman%20-%20Arithmetic%20Geometry.pdf"
verification: {}
proof_strategy: direct
---

## Definition

Assume the Axiom of Choice. Let $K$ be a number field of degree $N=[K:\mathbb Q]$, with $r_1$ real embeddings and $r_2$ pairs of complex-conjugate embeddings. For $P=[x_0:\cdots:x_n]\in\mathbb P^n(K)$, choose a nonzero coordinate tuple $x=(x_0,\ldots,x_n)\in K^{n+1}$, let $\mathfrak a=(x_0,\ldots,x_n)\subset K$ be the fractional ideal it generates, and set
$$
H_K(P)=N_K(\mathfrak a)^{-1}
\prod_{\sigma:K\hookrightarrow\mathbb R}\max_i|\sigma(x_i)|
\prod_{\tau:K\hookrightarrow\mathbb C\,/\,\text{conjugation}}
\max_i|\tau(x_i)|^2,
\qquad
H(P)=H_K(P)^{1/N}.
$$
The product uses one representative from each complex-conjugate pair. The value $H(P)$ is the absolute multiplicative Weil height; it is independent of the chosen projective coordinates and satisfies $H(P)\ge1$.

## Definition references

[[def-axiom-of-choice]]

[[def-number-field]]

[[def-archimedean-embeddings-and-number-field-signature]]

[[def-fractional-ideal-norm-number-field]]

[[thm-product-formula-for-number-fields]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$, a nonzero tuple $x\in K^{n+1}$, and its projective point $P=[x_0:\cdots:x_n]$.

[A1] The Axiom of Choice is the premise required by the cited number-field product formula. ([[def-axiom-of-choice]])

[F1] For the number field $K$, the ideal norm on nonzero fractional ideals is multiplicative, and the valuation of the coordinate ideal is $v_{\mathfrak p}(\mathfrak a)=\min_i v_{\mathfrak p}(x_i)$, so its norm is $\prod_{\mathfrak p}(N\mathfrak p)^{v_{\mathfrak p}(\mathfrak a)}$. ([[def-number-field]], [[def-fractional-ideal-norm-number-field]], [[def-prime-ideal-valuations-on-fractional-ideals]])

[F2] The number-field product formula is
$$
\prod_{\mathfrak p}(N\mathfrak p)^{-v_{\mathfrak p}(z)}
\prod_{\sigma:K\hookrightarrow\mathbb R}|\sigma z|
\prod_{\tau:K\hookrightarrow\mathbb C\,/\,\text{conjugation}}|\tau z|^2=1
$$
for every $z\in K^\times$, with only finitely many nontrivial finite factors. ([[thm-product-formula-for-number-fields]])

[F3] The normalized real and complex factors use exponents $1$ and $2$, respectively. ([[def-archimedean-embeddings-and-number-field-signature]])

## Proof

1.1 The finite factor in the displayed definition is
$\prod_{\mathfrak p}(N\mathfrak p)^{-\min_i v_{\mathfrak p}(x_i)}$ by [F1]; only finitely many terms differ from $1$. Multiplying all coordinates by $\lambda\in K^\times$ changes this factor by $\prod_{\mathfrak p}(N\mathfrak p)^{-v_{\mathfrak p}(\lambda)}$ and changes the archimedean product by $\prod_\sigma|\sigma\lambda|\prod_\tau|\tau\lambda|^2$. Their product is $1$ by [F2], so $H_K$ and $H$ depend only on $P$. [given, A1, F1, F2, algebra]

1.2 Choose an index $j$ with $x_j\ne0$. At every finite and archimedean place, the maximum of the coordinate absolute values is at least the absolute value of $x_j$. The product of the local factors for $x_j$ is $1$ by [F2], so the product defining $H_K(P)$ is at least $1$. Since $N>0$, $H(P)=H_K(P)^{1/N}\ge1$. [given, A1, F2, F3, algebra] ∎
