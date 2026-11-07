---
id: def-iwasawa-mu-lambda-invariants-of-power-series
kind: definition
title: Iwasawa $\mu$ and $\lambda$ invariants of a power series
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
- def-formal-power-series-and-coefficient-extraction
- def-local-field-valuation-ring-uniformizer-and-residue-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. Rodrigues Jacinto and C. Williams, An Introduction to p-adic L-functions
    url: https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf
    locator: §§3.3 and 4.1, printed pp. 121–137
  - title: J. Sharifi, Iwasawa Theory lecture notes
    url: https://www.math.ucla.edu/~sharifi/iwasawa.pdf
    locator: §§2.2 and 2.4, printed pp. 43–56
verification: {}
---

## Definition

Let $\mathcal O$ be the valuation ring of a finite extension of $\mathbb Q_p$, with uniformizer $\pi$ and normalized valuation $v_\pi(\pi)=1$, and let $F(T)=\sum_{n\ge0}a_nT^n\in\mathcal O\llbracket T\rrbracket$ be nonzero. Define $\mu(F)=\min_n v_\pi(a_n)$. The normalized series $\pi^{-\mu(F)}F$ has a nonzero reduction modulo $\pi$; define $\lambda(F)$ to be the least exponent whose coefficient in that reduction is nonzero. Thus $\lambda(F)$ is the order of vanishing of the reduced series at $T=0$. For $\mathcal O=\mathbb Z_p$ this is the usual pair of Iwasawa power-series invariants.

## Definition references

[J. Rodrigues Jacinto and C. Williams, *An Introduction to p-adic L-functions*, §3.3, pp. 121–123](https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf)

[J. Sharifi, *Iwasawa Theory*, §2.4, pp. 51–56](https://www.math.ucla.edu/~sharifi/iwasawa.pdf)

## Facts & Assumptions

**Given:** A nonzero power series $F\in\mathcal O\llbracket T\rrbracket$ over a finite extension coefficient ring.

[F1] A nonarchimedean local field has a discrete valuation ring of integers with finite residue field and a uniformizer of valuation one. [[def-local-field-valuation-ring-uniformizer-and-residue-field]]


## Proof

1.1 The nonzero coefficient valuations form a nonempty subset of $\mathbb Z_{\ge0}$, so they have a minimum $\mu(F)$. Division by $\pi^{\mu(F)}$ leaves coefficients in $\mathcal O$ and at least one unit coefficient.[F1, given, algebra]

2.1 Reduction modulo $\pi$ is therefore a nonzero formal power series over the residue field, so its nonzero coefficient indices have a least element. This integer defines $\lambda(F)$ without a choice of factorization.[F1, step 1.1, algebra] ∎
