---
id: lem-local-dvr-condition-implies-global-normality
kind: lemma
title: "Local DVRs at the nonzero primes force global normality"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-field-of-fractions, thm-equivalent-characterisations-of-a-dvr, thm-normality-is-local-for-domains]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, §20"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
pipeline_run: null
---
## Statement

Assume the Axiom of Choice. Let $R$ be a Noetherian domain. If $R_{\mathfrak p}$ is a discrete valuation ring for every nonzero prime ideal $\mathfrak p$ of $R$, then $R$ is integrally closed.

## Facts & Assumptions

**Given:** A Noetherian domain $R$ such that $R_{\mathfrak p}$ is a discrete valuation ring for every nonzero prime ideal $\mathfrak p$.

[F1] The fraction field $\operatorname{Frac}(R)$ is formed by inverting the nonzero elements of the domain $R$ ([[def-field-of-fractions]]).

[L1] A nonfield domain is a DVR exactly when it is a one-dimensional Noetherian local integrally closed domain ([[thm-equivalent-characterisations-of-a-dvr]]).

[L2] A domain is integrally closed if and only if each prime localisation is integrally closed ([[thm-normality-is-local-for-domains]]).

## Proof

**Proof technique:** direct.

1.1 At the zero prime, localisation inverts every nonzero element of $R$, so $R_{(0)}=\operatorname{Frac}(R)$ by [F1]. A field is integrally closed, so $R_{(0)}$ is integrally closed. [F1, given, algebra]

1.2 If $\mathfrak p\neq(0)$ is prime, the hypothesis makes $R_{\mathfrak p}$ a discrete valuation ring. By [L1], every discrete valuation ring is integrally closed. Hence each nonzero-prime localisation of $R$ is integrally closed. [L1, given]

2.1 Steps 1.1 and 1.2 show that every prime localisation of $R$ is integrally closed. Therefore [L2] gives that $R$ itself is integrally closed. [L2, step 1.1, step 1.2] ∎
