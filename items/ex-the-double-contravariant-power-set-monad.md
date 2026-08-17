---
id: ex-the-double-contravariant-power-set-monad
kind: example
title: "The self-adjunction of the contravariant power-set functor induces the double-power-set monad"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint, def-power-set, def-functor-and-contravariant-functor, thm-equivalent-encodings-of-an-adjunction]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 5.1.4(vii)"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

The contravariant power-set functor is self-adjoint between $\mathbf{Set}$ and $\mathbf{Set}^{\mathrm{op}}$. The induced monad on $\mathbf{Set}$ is the covariant double-power-set functor $X\mapsto\mathcal P\mathcal P X$.

## Facts & Assumptions

**Given:** The contravariant power-set operation, acting on functions by inverse image.

[L1] A natural hom-set bijection determines an adjunction ([[thm-equivalent-encodings-of-an-adjunction]]).

[L2] Every adjunction induces a monad on the domain of its left adjoint ([[thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint]]).

[L3] $\mathcal P(X)$ is the set of all subsets of $X$ ([[def-power-set]]).

## Verification

**Proof technique:** direct.

1.1 A function $X\to\mathcal P(Y)$ is the characteristic assignment of a relation $R\subseteq X\times Y$; transposing $R$ gives a function $Y\to\mathcal P(X)$. This natural bijection $\mathbf{Set}(X,\mathcal P Y)\cong\mathbf{Set}(Y,\mathcal P X)$ supplies the self-adjunction by [L1]. [L1, L3]

2.1 Applying [L2], the induced endofunctor is $T(X)=\mathcal P\mathcal P X$, and its unit is $\eta_X(x)=\{A\subseteq X:x\in A\}$. [L2, L3, step 1.1]

3.1 For $\mathbb W\in\mathcal P(\mathcal P(\mathcal P(\mathcal P X)))$, the multiplication is $\mu_X(\mathbb W)=\{A\subseteq X:\{\mathcal A\subseteq\mathcal P X:A\in\mathcal A\}\in\mathbb W\}$. This has type $T^2X\to TX$. In particular, the construction does not assert a natural map $\mathcal P\mathcal P X\to X$. [L2, L3, step 2.1] ∎
