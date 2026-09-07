---
id: "cor-serre-normality-criterion-two-directions"
kind: "corollary"
title: "serre normality criterion two directions"
deps: ["lem-normal-domain-implies-r-one", "lem-normal-domain-implies-s-two", "lem-r-one-s-two-integral-element-membership", "thm-one-dimensional-regular-local-rings-are-dvrs", "thm-normality-is-local-for-domains"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Proposition 8.41 and Lemma 8.40, pp.56–58"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

A commutative Noetherian domain is normal if and only if it satisfies $(R_1)$ and $(S_2)$. Equivalently its integral closedness is characterized by these two conditions.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-normal-domain-implies-r-one]]: Every commutative Noetherian integrally closed domain satisfies $(R_1)$.

[F2] [[lem-normal-domain-implies-s-two]]: Every commutative Noetherian integrally closed domain satisfies $(S_2)$.

[F3] [[lem-r-one-s-two-integral-element-membership]]: A commutative Noetherian $(S_2)$ domain whose height-one localizations are DVRs is integrally closed.

[F4] [[thm-one-dimensional-regular-local-rings-are-dvrs]]: A nonzero Noetherian local ring of dimension one is regular if and only if it is a discrete valuation ring. Fields are excluded from the term DVR.

[F5] [[thm-normality-is-local-for-domains]]: Assume the Axiom of Choice. Let $A$ be a domain. Then the following are equivalent: 1. $A$ is integrally closed. 2. For every prime ideal $\mathfrak p$ of $A$, the localisation $A_{\mathfrak p}$ is integrally closed. 3. For every maximal ideal $\mathfrak m$ of $A$, the localisation $A_{\mathfrak m}$ is integrally closed.

## Proof

1.1 For a domain, normality is equivalent to integral closedness by local normality. An integrally closed Noetherian domain satisfies $(R_1)$ and $(S_2)$ by the two normal-domain lemmas. [F5, F1, F2]

2.1 Conversely, $(R_1)$ makes every height-one localization one-dimensional regular local and hence a DVR. With $(S_2)$, the integral-element membership lemma makes $R$ integrally closed, and local normality makes it normal. Fields satisfy both conditions and are included. [F4, F3, F5] ∎
