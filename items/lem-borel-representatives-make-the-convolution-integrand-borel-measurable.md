---
id: lem-borel-representatives-make-the-convolution-integrand-borel-measurable
kind: lemma
title: "Borel representatives make the convolution integrand Borel measurable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convolution-of-two-functions-on-rn, thm-completion-measurable-functions-have-base-measurable-representatives, thm-borel-products-of-euclidean-spaces-are-euclidean-borel, thm-composition-with-borel-functions-preserves-measurability, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-sections-of-product-measurable-functions-are-measurable]
landmark: false
proof_strategy: "Choose Borel representatives of the two $L^1$ classes, compose one with the continuous subtraction map $(x,y) \\mapsto x-y$, and multiply by the second factor. Product Borel structure on $\\mathbb{R}^{2n}$ turns this into a bona fide measurable integrand."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---
## Statement

Let $\tilde f,\tilde g : \mathbb{R}^n \to \mathbb{C}$ be Borel measurable
functions. Then

$$
H(x,y) := \tilde f(x-y)\tilde g(y)
$$

is Borel measurable on $\mathbb{R}^{2n}$. In particular, for each fixed
$x \in \mathbb{R}^n$, the section $y \mapsto H(x,y)$ is measurable.

## Facts & Assumptions

**Given:** Borel measurable functions $\tilde f,\tilde g$ on $\mathbb{R}^n$.

[A1] The functions $\tilde f$ and $\tilde g$ are Borel measurable by hypothesis.

[L2] The Borel product on $\mathbb{R}^n \times \mathbb{R}^n$ is the Euclidean
Borel sigma-algebra on $\mathbb{R}^{2n}$
([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]).

[L3] Composition with Borel functions preserves measurability, and measurable
arithmetic operations preserve measurability
([[thm-composition-with-borel-functions-preserves-measurability]],
[[thm-arithmetic-and-lattice-operations-preserve-measurability]]).

[L4] Sections of product-measurable functions are measurable
([[thm-sections-of-product-measurable-functions-are-measurable]]).

## Proof

**Proof technique:** direct.

1.1 The map $T : \mathbb{R}^{2n} \to \mathbb{R}^{2n}$ given by [L2, L3, given, construct]
$T(x,y) := (x-y,y)$ is continuous, hence Borel measurable. Since
$(u,v) \mapsto \tilde f(u)$ and $(u,v) \mapsto \tilde g(v)$ are Borel
measurable on $\mathbb{R}^{2n}$ by [L2] and [L3], the functions
$(x,y) \mapsto \tilde f(x-y)$ and $(x,y) \mapsto \tilde g(y)$ are Borel
measurable. [L2, L3, given, construct]

2.1 Multiplication on $\mathbb{C}$ is continuous, so [L3] makes [L3, L4, step 1.1]
$$
H(x,y)=\tilde f(x-y)\tilde g(y)
$$
Borel measurable on $\mathbb{R}^{2n}$. Then [L4] gives measurability of each
section $y \mapsto H(x,y)$. [L3, L4, step 1.1] ∎
