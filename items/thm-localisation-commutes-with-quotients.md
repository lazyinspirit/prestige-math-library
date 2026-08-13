---
id: thm-localisation-commutes-with-quotients
kind: theorem
title: 'Localisation commutes with quotient rings: $S^{-1}R/S^{-1}I\cong \bar S^{-1}(R/I)$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-property-of-localisation, thm-quotient-ring-universal-property, def-quotient-ring, thm-ideal-correspondence-for-localisation]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
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
    - title: 'The Stacks Project, Proposition 10.9.14'
      url: 'https://stacks.math.columbia.edu/tag/00CM'
pipeline_run: frontier-12
---

## Statement

Let $I$ be an ideal of a commutative ring $R$, let $S\subseteq R$ be multiplicative, and let $\bar S$ be the image of $S$ in $R/I$. There is a canonical isomorphism
$$ (S^{-1}R)/(S^{-1}I)\cong \bar S^{-1}(R/I),\qquad r/s+S^{-1}I\longmapsto (r+I)/(s+I). $$
This includes the case $S\cap I\ne\varnothing$, when both sides are the zero ring.

## Facts & Assumptions

**Given:** A commutative ring $R$, an ideal $I$, and a multiplicative subset $S$ with image $\bar S$ in $R/I$.

[F1] A map that sends a multiplicative subset to units factors uniquely through the corresponding localisation ([[thm-universal-property-of-localisation]]).

[F2] A homomorphism killing an ideal factors uniquely through the quotient by that ideal ([[thm-quotient-ring-universal-property]]).

[F3] The extended ideal $S^{-1}I$ consists of the fractions with a numerator in $I$ ([[thm-ideal-correspondence-for-localisation]]).

## Proof

**Proof technique:** construction of inverse maps.

1.1 The map $R\to\bar S^{-1}(R/I)$ given by $r\mapsto(r+I)/1$ sends $S$ to units, so [F1] gives $\Phi:S^{-1}R\to\bar S^{-1}(R/I)$ with $\Phi(r/s)=(r+I)/(s+I)$. It kills $S^{-1}I$ by [F3], so [F2] gives a homomorphism $\overline\Phi:(S^{-1}R)/(S^{-1}I)\to\bar S^{-1}(R/I)$. [F1, F2, F3, construct]

1.2 The map $R\to(S^{-1}R)/(S^{-1}I)$ given by $r\mapsto r/1+S^{-1}I$ kills $I$, so [F2] induces $R/I\to(S^{-1}R)/(S^{-1}I)$. Every $s+I\in\bar S$ maps to the unit $s/1+S^{-1}I$, so [F1] extends this to $\Psi:\bar S^{-1}(R/I)\to(S^{-1}R)/(S^{-1}I)$. [F1, F2, F3]

2.1 The composites $\Psi\overline\Phi$ and $\overline\Phi\Psi$ fix, respectively, every class $r/s+S^{-1}I$ and every fraction $(r+I)/(s+I)$ by the formulas in steps 1.1 and 1.2. Hence the maps are inverse isomorphisms. If $s\in S\cap I$, then $1=s/s\in S^{-1}I$, so the left side is zero; also $s+I=0$ lies in $\bar S$, so the right localisation is zero. [step 1.1, step 1.2, F3, algebra, discharge-construct] ∎
