---
id: cor-splitting-fields-are-unique-up-to-base-isomorphism
kind: corollary
title: 'Any two splitting fields of a polynomial are isomorphic over the base field'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-isomorphisms-extend-to-splitting-fields]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
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
    - title: 'T. Judson, Abstract Algebra: Theory and Applications, Corollary 21.14'
      url: 'https://judsonbooks.org/aata-files/aata-html/fields-section-splitting-fields.html'
pipeline_run: frontier-12
---

## Statement

If $E/F$ and $E'/F$ are splitting fields of the same nonzero polynomial $f\in F[x]$, then there is a field isomorphism $E\to E'$ that fixes $F$ pointwise.

## Facts & Assumptions

**Given:** Two splitting fields $E/F$ and $E'/F$ of the same nonzero polynomial.

[F1] A base-field isomorphism extends to an isomorphism between splitting fields of the corresponding transported polynomials ([[thm-isomorphisms-extend-to-splitting-fields]]).

## Proof

**Proof technique:** direct.

1.1 Apply [F1] to the identity isomorphism of $F$. It transports $f$ to itself and therefore extends to an isomorphism $E\to E'$ fixing $F$. [F1]

2.1 This includes nonzero constants, whose splitting fields have empty root sets and both equal $F$. [F1, step 1.1] ∎
