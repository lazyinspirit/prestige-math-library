---
id: thm-field-of-fractions-is-a-field-and-the-domain-embeds
kind: theorem
title: '$\operatorname{Frac}(D)$ is a field and $d\mapsto d/1$ embeds the integral domain $D$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-field-of-fractions, prop-localisation-zero-equality-and-kernel-criteria, thm-localisation-equivalence-and-ring-laws, def-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'The CRing Project, Chapter 13: Fields and Extensions'
      url: 'https://math.colorado.edu/topology/cringproject.pdf'
pipeline_run: frontier-12
---

## Statement

For every integral domain $D$, the localisation $\operatorname{Frac}(D)$ is a field. Its canonical map
$$ D\longrightarrow\operatorname{Frac}(D),\qquad d\longmapsto d/1, $$
is an injective unital ring homomorphism.

## Facts & Assumptions

**Given:** An integral domain $D$.

[F1] The field of fractions is the localisation at $D\setminus\{0\}$ ([[def-field-of-fractions]]).

[F2] A localisation map is injective exactly when every denominator has trivial annihilator ([[prop-localisation-zero-equality-and-kernel-criteria]]).

[F3] Localisation is a commutative ring with the stated fraction arithmetic ([[thm-localisation-equivalence-and-ring-laws]]).

[F4] A field is a nonzero commutative ring in which every nonzero element is a unit ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 Every nonzero element of the domain $D$ has trivial annihilator. Hence [F2], applied to $S=D\setminus\{0\}$, makes the canonical homomorphism injective. In particular $1/1\ne0/1$, so the localisation is nonzero. [F1, F2]

1.2 Let $a/b$ be nonzero. By the vanishing criterion in [F2], $a\ne0$, because otherwise $a/b=0$. Thus $a\in D\setminus\{0\}$, and [F3] gives $(a/b)(b/a)=1$. [F1, F2, F3]

2.1 Every nonzero element is therefore a unit, and [F3] supplies the commutative-ring structure. By [F4], $\operatorname{Frac}(D)$ is a field. [F3, F4, step 1.1, step 1.2] ∎
