---
id: thm-the-ultrafilter-monad-is-a-monad
kind: theorem
title: "The ultrafilter endofunctor with principal unit and flattening multiplication is a monad"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-ultrafilter-endofunctor-unit-and-multiplication, thm-ultrafilter-characterisation]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 5.1.4(v) and Exercise 5.1.ii"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

The ultrafilter endofunctor $\beta$ together with the principal unit $\eta$ and flattening multiplication $\mu$ is a monad on $\mathbf{Set}$.

## Facts & Assumptions

**Given:** The functor $\beta$ and the natural transformations $\eta$ and $\mu$ from [[def-the-ultrafilter-endofunctor-unit-and-multiplication]].

[L1] For $A\subseteq X$, write $\widehat A=\{\mathcal U\in\beta X:A\in\mathcal U\}$; then $A\in\mu_X(\mathbb W)$ exactly when $\widehat A\in\mathbb W$ ([[def-the-ultrafilter-endofunctor-unit-and-multiplication]]).

[L2] The data in [L1] are already well-defined and natural ([[def-the-ultrafilter-endofunctor-unit-and-multiplication]]).

## Proof

**Proof technique:** direct.

1.1 For $\mathcal U\in\beta X$, one has $A\in\mu_X(\eta_{\beta X}(\mathcal U))$ iff $\widehat A\in\eta_{\beta X}(\mathcal U)$ iff $\mathcal U\in\widehat A$ iff $A\in\mathcal U$. Thus $\mu\eta\beta=1_\beta$. [L1]

1.2 Likewise $A\in\mu_X(\beta\eta_X(\mathcal U))$ iff $(\eta_X)^{-1}[\widehat A]\in\mathcal U$. This inverse image is $A$, so $\mu\,\beta\eta=1_\beta$. [L1, L2]

2.1 For $\mathbb Z\in\beta^3X$, expanding membership in $A$ along either $\mu_X\circ\beta\mu_X$ or $\mu_X\circ\mu_{\beta X}$ gives the same condition $\widehat{\widehat A}\in\mathbb Z$. Hence multiplication is associative, and steps 1.1–1.2 give the unit laws. [L1, L2, step 1.1, step 1.2] ∎
