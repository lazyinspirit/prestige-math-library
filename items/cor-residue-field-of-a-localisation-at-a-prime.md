---
id: cor-residue-field-of-a-localisation-at-a-prime
kind: corollary
title: '$R_{\mathfrak p}/\mathfrak pR_{\mathfrak p}\cong\operatorname{Frac}(R/\mathfrak p)$ is the residue field at $\mathfrak p$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-localisation-commutes-with-quotients, thm-localisation-at-a-prime-is-local, thm-quotient-is-domain-iff-ideal-prime, thm-field-of-fractions-is-a-field-and-the-domain-embeds]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'The Stacks Project, Section 10.18: Local rings'
      url: 'https://stacks.math.columbia.edu/tag/07BH'
pipeline_run: frontier-12
---

## Statement

For a prime ideal $\mathfrak p$ of a commutative ring $R$, there is a canonical field isomorphism
$$ R_{\mathfrak p}/\mathfrak pR_{\mathfrak p}\cong\operatorname{Frac}(R/\mathfrak p),\qquad r/s+\mathfrak pR_{\mathfrak p}\longmapsto (r+\mathfrak p)/(s+\mathfrak p). $$
This quotient is the residue field of the local ring $R_{\mathfrak p}$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a prime ideal $\mathfrak p$.

[F1] Localisation commutes with quotients by the displayed fraction isomorphism ([[thm-localisation-commutes-with-quotients]]).

[F2] The ring $R_{\mathfrak p}$ is local with maximal ideal $\mathfrak pR_{\mathfrak p}$ ([[thm-localisation-at-a-prime-is-local]]).

[F3] The quotient $R/\mathfrak p$ is an integral domain because $\mathfrak p$ is prime ([[thm-quotient-is-domain-iff-ideal-prime]]).

[F4] The localisation of a domain at all of its nonzero elements is its field of fractions and is a field ([[thm-field-of-fractions-is-a-field-and-the-domain-embeds]]).

## Proof

**Proof technique:** direct.

1.1 Apply [F1] with $S=R\setminus\mathfrak p$ and $I=\mathfrak p$. The image of $S$ in $R/\mathfrak p$ is exactly $(R/\mathfrak p)\setminus\{0\}$: a class $s+\mathfrak p$ is nonzero exactly when $s\notin\mathfrak p$. [F1]

2.1 By [F3] and [F4], localisation at that image is $\operatorname{Frac}(R/\mathfrak p)$ and is a field. The formula is the formula from [F1], while [F2] identifies the source quotient as the residue field of $R_{\mathfrak p}$. [F1, F2, F3, F4, step 1.1] ∎
