---
id: "lem-r-one-s-two-integral-element-membership"
kind: "lemma"
title: "r one s two integral element membership"
deps: ["lem-r-one-s-two-intersection-of-height-one-localisations", "thm-valuation-ring-is-integrally-closed"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Proposition 8.41 final proof paragraph, p.58"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

A commutative Noetherian $(S_2)$ domain whose height-one localizations are DVRs is integrally closed.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-r-one-s-two-intersection-of-height-one-localisations]]: If $R$ is a commutative Noetherian domain satisfying $(S_2)$, then inside its fraction field $K$ one has $R=\bigcap_{\operatorname{ht}\mathfrak p=1}R_{\mathfrak p}$. For a field the empty intersection is interpreted as $K=R$.

[F2] [[thm-valuation-ring-is-integrally-closed]]: Every valuation ring is an integrally closed domain.

## Proof

1.1 Let $u\in\operatorname{Frac}R$ satisfy a monic equation over $R$. At each height-one prime the same equation is monic over $R_{\mathfrak p}$. A DVR is a valuation ring, hence integrally closed, so $u\in R_{\mathfrak p}$. [F2, given]

2.1 The height-one intersection theorem now gives $u\in R$. If there are no height-one primes, its empty-intersection convention says $R$ is already the fraction field; the conclusion remains valid. Since $u$ was arbitrary, $R$ is integrally closed. [F1, step 1.1] ∎
