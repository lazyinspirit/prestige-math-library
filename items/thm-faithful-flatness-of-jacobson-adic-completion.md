---
id: thm-faithful-flatness-of-jacobson-adic-completion
kind: theorem
title: "Jacobson-adic completion is faithfully flat"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-flatness-of-noetherian-completion, cor-completion-commutes-with-finite-quotients-and-submodules, thm-faithfully-flat-ring-map-characterisations]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise 22.24"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Lemma 10.97.3"
      url: "https://stacks.math.columbia.edu/tag/0BNH"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a Noetherian commutative ring and let $I \subseteq J(R)$ be an ideal. Then the
completion map
$$
R \to \widehat R
$$
is faithfully flat.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$ and an ideal $I \subseteq J(R)$.

[L1] The completion $\widehat R$ is flat over $R$ ([[thm-flatness-of-noetherian-completion]]).

[L2] For every maximal ideal $\mathfrak m \supseteq I$, one has $$ \widehat R/\mathfrak m\widehat R \cong \widehat{R/\mathfrak m}\cong R/\mathfrak m, $$ because completion commutes with finite quotients and the $I$-adic filtration on $R/\mathfrak m$ is already zero after one step ([[cor-completion-commutes-with-finite-quotients-and-submodules]]).

[L3] A flat ring map is faithfully flat exactly when every maximal ideal of the source has a prime ideal lying over it ([[thm-faithfully-flat-ring-map-characterisations]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathfrak m\subset R$ be a maximal ideal. Because $I\subseteq J(R)$, one has $I\subseteq\mathfrak m$, so [L2] gives $$ \widehat R/\mathfrak m\widehat R \cong R/\mathfrak m \neq 0. $$ [L2, given]

2.1 The ring $R/\mathfrak m$ is a field, so step 1.1 shows directly that $\mathfrak m\widehat R$ is a maximal, hence prime, ideal of $\widehat R$. Its contraction to $R$ contains $\mathfrak m$; the contraction is proper because it is the preimage of a prime ideal, so maximality of $\mathfrak m$ forces the contraction to equal $\mathfrak m$. Thus every maximal ideal of $R$ has a prime ideal of $\widehat R$ above it. [step 1.1, algebra]

3.1 The completion map $R\to\widehat R$ is flat by [L1]. Together with step 2.1, [L3] now shows that $R\to\widehat R$ is faithfully flat. [L1, L3, step 2.1] ∎
