---
id: prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category
kind: proposition
title: "Zero homology does not make an object zero in the homotopy category"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-contractible-complex, cor-a-contractible-complex-is-acyclic, def-homotopy-category-of-chain-complexes, thm-the-homotopy-category-is-additive, thm-abelian-groups-form-an-abelian-category]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-25
---

## Statement

Let $\mathcal A$ be an abelian category and let $C_\bullet$ be a chain complex
in $\mathcal A$. The identity class
$$[1_C]\in\operatorname{Hom}_{K(\mathcal A)}(C,C)$$
is zero if and only if $C_\bullet$ is contractible. Consequently, vanishing
homology alone does not force an object to be zero in the homotopy category.

## Facts & Assumptions

**Given:** An abelian category $\mathcal A$, a chain complex $C_\bullet$ in $\mathcal A$, and the three-term complex $$E_\bullet:\ 0\to\mathbb Z\xrightarrow{2}\mathbb Z\xrightarrow{\bmod 2}\mathbb Z/2\to0$$ in $\mathbf{Ab}$.

[L1] A complex is contractible exactly when $1_C$ is null-homotopic ([[def-contractible-complex]]).

[L2] Morphisms in $K(\mathcal A)$ are homotopy classes of chain maps ([[def-homotopy-category-of-chain-complexes]]).

[L3] $K(\mathcal A)$ is additive, so each endomorphism set has a zero morphism ([[thm-the-homotopy-category-is-additive]]).

[L4] Contractible complexes are acyclic ([[cor-a-contractible-complex-is-acyclic]]).

[L5] $\mathbf{Ab}$ is an abelian category ([[thm-abelian-groups-form-an-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the equality $[1_C]=0$ means precisely that the identity map and the zero map define the same homotopy class. That is equivalent to $1_C$ being null-homotopic, which [L1] says is exactly contractibility. [L1, L2, L3, given, algebra]

2.1 In the complex $E_\bullet$, multiplication by $2$ is injective, reduction modulo $2$ is surjective, and $$\ker(\bmod 2)=2\mathbb Z=\operatorname{im}(2),$$ so $E_\bullet$ is acyclic. If $E_\bullet$ were contractible, then step 1.1 would make $[1_E]=0$, equivalently $1_E$ would be null-homotopic. In degree $0$ that would force a section $\mathbb Z/2\to\mathbb Z$ of the quotient map $\mathbb Z\to\mathbb Z/2$, which is impossible. Thus $E_\bullet$ is not contractible. [L5, step 1.1, given, algebra]

3.1 Step 2.1 gives an acyclic complex that is not contractible, so by step 1.1 its identity class is not zero in the homotopy category. Therefore vanishing homology alone does not force an object to be zero there. This does not contradict [L4], which gives only the forward implication contractible $\Rightarrow$ acyclic. [L4, L5, step 1.1, step 2.1, algebra] ∎
