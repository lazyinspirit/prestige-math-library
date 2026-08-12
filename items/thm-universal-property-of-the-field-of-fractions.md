---
id: thm-universal-property-of-the-field-of-fractions
kind: theorem
title: 'Every injective ring map from a domain into a field factors uniquely through its field of fractions'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-field-of-fractions-is-a-field-and-the-domain-embeds, thm-universal-property-of-localisation, def-field, def-ring-homomorphism]
justified_by: []
aliases: []
landmark: true
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

## Statement

Let $D$ be an integral domain, $K$ a field, and $f:D\to K$ an injective unital ring homomorphism. There is a unique unital ring homomorphism
$$ \widetilde f:\operatorname{Frac}(D)\longrightarrow K $$
such that $\widetilde f(d/1)=f(d)$ for all $d\in D$. It is injective and satisfies $\widetilde f(a/b)=f(a)f(b)^{-1}$.

## Facts & Assumptions

**Given:** An injective unital ring homomorphism $f:D\to K$ from an integral domain to a field.

[F1] Every nonzero element of a field is a unit ([[def-field]]).

[F2] A map that sends every localisation denominator to a unit factors uniquely through the localisation, by the displayed fraction formula ([[thm-universal-property-of-localisation]]).

[F3] The canonical map embeds $D$ in $\operatorname{Frac}(D)$ ([[thm-field-of-fractions-is-a-field-and-the-domain-embeds]]).

## Proof

**Proof technique:** direct.

1.1 If $b\ne0$ in $D$, injectivity gives $f(b)\ne0$, so [F1] makes $f(b)$ a unit. Since the denominators defining $\operatorname{Frac}(D)$ are exactly the nonzero elements, [F2] gives the unique extension and its formula. [F1, F2]

2.1 If $\widetilde f(a/b)=0$, multiply $f(a)f(b)^{-1}=0$ by the unit $f(b)$ to obtain $f(a)=0$. Injectivity of $f$ gives $a=0$, hence $a/b=0$. Thus $\widetilde f$ is injective. [step 1.1, F3, algebra] ∎
