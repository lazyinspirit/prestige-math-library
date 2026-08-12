---
id: ex-fraction-field-of-the-integers-is-the-rationals
kind: example
title: '$\operatorname{Frac}(\mathbb Z)$ is canonically isomorphic to $\mathbb Q$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-field-of-fractions, thm-universal-property-of-the-field-of-fractions, def-rationals, thm-rat-field, thm-int-comm-ring, lem-int-cancellation, lem-nat-embeds-int, def-natural-numbers, def-zero-divisor-and-integral-domain]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'The CRing Project, Chapter 13: Fields and Extensions'
      url: 'https://math.colorado.edu/topology/cringproject.pdf'
pipeline_run: frontier-12
---

## Example

The field of fractions of $\mathbb Z$ is canonically isomorphic to $\mathbb Q$ by
$$ \frac ab\longmapsto\frac ab,\qquad a,b\in\mathbb Z,\ b\ne0. $$

## Facts & Assumptions

**Given:** The standard inclusion $\mathbb Z\hookrightarrow\mathbb Q$.

[F1] The rationals are the equivalence classes written $a/b$ for integers $a,b$ with $b\ne0$ ([[def-rationals]]).

[F2] The rationals form a field ([[thm-rat-field]]).

[F3] An injective ring map from a domain into a field extends uniquely to its field of fractions ([[thm-universal-property-of-the-field-of-fractions]]).

[F4] The integers form a commutative ring ([[thm-int-comm-ring]]).

[F5] A product of two nonzero integers is nonzero ([[lem-int-cancellation]]).

[F6] The natural numbers embed injectively in the integers, while $0$ and $1$ are distinct natural numbers ([[lem-nat-embeds-int]], [[def-natural-numbers]]).

[F7] An integral domain is a commutative ring with $1\ne0$ and no zero divisors ([[def-zero-divisor-and-integral-domain]]).

## Verification

**Proof technique:** direct.

1.1 Facts [F4] and [F5] give the commutative-ring and no-zero-divisor clauses for $\mathbb Z$, while [F6] gives $1\ne0$; hence [F7] makes $\mathbb Z$ an integral domain. The map $a\mapsto a/1$ from $\mathbb Z$ to $\mathbb Q$ is injective by the defining equivalence relation in [F1]. Since $\mathbb Q$ is a field by [F2], [F3] extends it uniquely to an injective homomorphism $\operatorname{Frac}(\mathbb Z)\to\mathbb Q$ with the displayed formula. [F1, F2, F3, F4, F5, F6, F7]

2.1 Every rational is $a/b$ with $b\ne0$ by [F1], so the homomorphism is surjective and hence an isomorphism. It fixes each integer, which makes it canonical over $\mathbb Z$. [F1, step 1.1] ∎
