---
id: cor-rational-function-field-as-a-fraction-field
kind: corollary
title: 'For a field $F$, $F(t)=\operatorname{Frac}(F[t])$ is its rational function field; in particular $\mathbb R(t)=\operatorname{Frac}(\mathbb R[t])$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-field-of-fractions-is-a-field-and-the-domain-embeds, cor-polynomial-ring-over-a-domain-is-a-domain, def-field-of-fractions, lem-field-is-a-commutative-ring]
justified_by: []
aliases: [rational function field]
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

## Statement

For every field $F$, the polynomial ring $F[t]$ is an integral domain, and
$$ F(t):=\operatorname{Frac}(F[t])=\left\{\frac{f(t)}{g(t)}:f,g\in F[t],\ g\ne0\right\} $$
is a field containing an embedded copy of $F[t]$. It is called the **rational function field** over $F$. In particular, $\mathbb R(t)=\operatorname{Frac}(\mathbb R[t])$.

## Facts & Assumptions

**Given:** A field $F$.

[F1] Every field is an integral domain ([[lem-field-is-a-commutative-ring]]).

[F2] If $R$ is an integral domain, then $R[t]$ is an integral domain ([[cor-polynomial-ring-over-a-domain-is-a-domain]]).

[F3] The field of fractions of a domain consists of fractions with nonzero denominator and is a field containing the domain injectively ([[def-field-of-fractions]], [[thm-field-of-fractions-is-a-field-and-the-domain-embeds]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F2], $F[t]$ is an integral domain. Applying [F3] gives the displayed set of fractions, its field structure, and the embedding of $F[t]$. [F1, F2, F3]

2.1 Taking $F=\mathbb R$ gives the final assertion. [step 1.1] ∎
