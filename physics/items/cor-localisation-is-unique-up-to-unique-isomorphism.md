---
id: cor-localisation-is-unique-up-to-unique-isomorphism
kind: corollary
title: 'A localisation is unique up to a unique isomorphism compatible with the map from $R$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-universal-property-of-localisation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'The Stacks Project, Proposition 10.9.3'
      url: 'https://stacks.math.columbia.edu/tag/00CM'
pipeline_run: frontier-12
---

## Statement

Let $\lambda:R\to L$ and $\lambda':R\to L'$ be unital homomorphisms of commutative rings. Suppose each map sends every $s\in S$ to a unit and has the localisation universal property: every homomorphism from $R$ that inverts $S$ factors uniquely through it. Then there is a unique ring isomorphism $\Phi:L\to L'$ such that $\Phi\lambda=\lambda'$.

## Facts & Assumptions

**Given:** Two objects $(L,\lambda)$ and $(L',\lambda')$ satisfying the stated universal property for the same pair $(R,S)$.

[F1] A homomorphism from $R$ that takes $S$ to units factors uniquely through a localisation map ([[thm-universal-property-of-localisation]]).

## Proof

**Proof technique:** direct universal-property argument.

1.1 Apply the universal property of $L$ to $\lambda'$ and that of $L'$ to $\lambda$. This gives unique homomorphisms $\Phi:L\to L'$ and $\Psi:L'\to L$ with $\Phi\lambda=\lambda'$ and $\Psi\lambda'=\lambda$. [F1]

2.1 Both $\Psi\Phi$ and $\operatorname{id}_L$ compose with $\lambda$ to give $\lambda$. Uniqueness for $L$ gives $\Psi\Phi=\operatorname{id}_L$; similarly $\Phi\Psi=\operatorname{id}_{L'}$. Thus $\Phi$ is an isomorphism. [F1, step 1.1]

3.1 Any isomorphism compatible with the maps from $R$ is, in particular, a factorisation of $\lambda'$ through $\lambda$, so it equals $\Phi$ by uniqueness. [F1, step 1.1] ∎
