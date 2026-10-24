---
id: lem-borel-representatives-make-the-convolution-integrand-borel-measurable
kind: lemma
title: "Borel representatives make the convolution integrand Borel measurable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-borel-products-of-euclidean-spaces-are-euclidean-borel, thm-composition-with-borel-functions-preserves-measurability]
landmark: false
proof_strategy: "Given Borel functions, compose with subtraction, pair the two factors, and apply continuous complex multiplication; obtain each section by a continuous embedding."
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---
## Statement

Let $\tilde f,\tilde g : \mathbb{R}^n \to \mathbb{C}$ be Borel measurable
functions. Then

$$ H(x,y) := \tilde f(x-y)\tilde g(y) $$

is Borel measurable on $\mathbb{R}^{2n}$. In particular, for each fixed
$x \in \mathbb{R}^n$, the section $y \mapsto H(x,y)$ is measurable.

## Facts & Assumptions

**Given:** Borel measurable functions $\tilde f,\tilde g$ on $\mathbb{R}^n$.

[A1] The functions $\tilde f$ and $\tilde g$ are Borel measurable by hypothesis.

[L2] For positive Euclidean dimensions, the Borel product is the Euclidean Borel sigma-algebra; in particular this applies to $\mathbb R^n\times\mathbb R^n$ and $\mathbb C\times\mathbb C\cong\mathbb R^4$ ([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]).

[L3] Composition of Borel measurable maps preserves measurability ([[thm-composition-with-borel-functions-preserves-measurability]]).

## Proof

**Proof technique:** direct.

1.1 If $n=0$, every space and function in the statement has a one-point domain, so the conclusion is immediate. For $n\ge1$, the map $T:\mathbb R^{2n}\to\mathbb R^{2n}$, $T(x,y)=(x-y,y)$, is continuous and hence Borel measurable. The coordinate projections are continuous, so [L3] makes $h_1(x,y)=\tilde f(x-y)$ and $h_2(x,y)=\tilde g(y)$ Borel measurable maps to $\mathbb C$. [A1, L3, given, construct]

2.1 The pair $(h_1,h_2):\mathbb R^{2n}\to\mathbb C^2$ is Borel measurable: the preimage of every open rectangle $U\times V$ is $h_1^{-1}(U)\cap h_2^{-1}(V)$, and such rectangles generate the product Borel sigma-algebra by [L2]. Complex multiplication $\mathbb C^2\to\mathbb C$ is continuous, so [L3] makes $H=h_1h_2$ Borel measurable. For fixed $x$, the map $y\mapsto(x,y)$ is continuous, and its composite with $H$ is the stated measurable section. [L2, L3, step 1.1] ∎
