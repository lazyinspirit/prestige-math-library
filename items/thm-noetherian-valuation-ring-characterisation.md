---
id: thm-noetherian-valuation-ring-characterisation
kind: theorem
title: "A Noetherian valuation ring is a field or a DVR"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-noetherian-ring, thm-valuation-ring-characterisations, thm-equivalent-characterisations-of-a-dvr]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Mustata, Commutative Algebra, Proposition 8.13"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise (26.15)(2)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $V$ be a valuation ring. Then $V$ is Noetherian if and only if $V$ is a
field or a discrete valuation ring.

## Facts & Assumptions

**Given:** A valuation ring $V$.

[F1] A ring is Noetherian by the definition fixed earlier ([[def-noetherian-ring]]).

[L1] In a valuation ring the ideals are linearly ordered and every finitely
generated ideal is principal ([[thm-valuation-ring-characterisations]]).

[L2] For a nonfield domain, being a Noetherian valuation ring is equivalent to
being a DVR ([[thm-equivalent-characterisations-of-a-dvr]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $V$ is Noetherian. A valuation ring is a domain, so if $V$ is not a field then [L2] applies and shows that $V$ is a DVR. Thus a Noetherian valuation ring is a field or a DVR. [F1, L2, given]

2.1 Conversely, every field is Noetherian because its only ideals are $(0)$ and the whole ring. If $V$ is a DVR, then [L2] applied in the forward direction shows that it is a Noetherian valuation ring. Hence $V$ is Noetherian exactly in the two stated cases. [L1, L2, algebra] ∎
