---
id: prop-normality-descends-to-intermediate-fields
kind: proposition
title: 'If $K/F$ is normal and $F\subseteq E\subseteq K$, then $K/E$ is normal'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-normal-algebraic-extension, thm-evaluation-kernel-and-minimal-polynomial, thm-polynomial-ring-over-a-field-is-a-ufd]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'The Stacks Project, Lemma 9.15.6'
      url: 'https://stacks.math.columbia.edu/tag/09HN'
pipeline_run: frontier-12
---

## Statement

If $K/F$ is a normal algebraic extension and $F\subseteq E\subseteq K$, then $K/E$ is a normal algebraic extension.

## Facts & Assumptions

**Given:** A normal algebraic extension $K/F$ and an intermediate field $E$.

[F1] Normality means that the minimal polynomial over the base of every element of the extension splits there ([[def-normal-algebraic-extension]]).

[F2] The minimal polynomial divides every base-field polynomial that vanishes at the element ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[F3] For every field $L$, the polynomial ring $L[x]$ is a unique factorisation domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

## Proof

**Proof technique:** direct.

1.1 Every element of $K$ is algebraic over $F$, hence also algebraic over $E$ because the same polynomial lies in $E[x]$. Thus $K/E$ is algebraic. [F1]

1.2 Fix $\alpha\in K$. Let $m_F\in F[x]$ and $m_E\in E[x]$ be its minimal polynomials. By [F2], $m_E$ divides $m_F$ in $E[x]$. [F2]

2.1 Normality of $K/F$ makes $m_F$ split over $K$. In the unique factorisation domain $K[x]$ from [F3], every divisor of that product of linear factors is itself a product of linear factors, so $m_E$ splits over $K$. Since $\alpha$ was arbitrary, [F1] makes $K/E$ normal. [F1, F3, step 1.2] ∎
