---
id: def-c-c-and-c-c-infinity-on-rn
kind: definition
title: "The spaces $C_c(\\mathbb{R}^n)$ and $C_c^\\infty(\\mathbb{R}^n)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-support-and-compactly-supported-riemann-integral-in-rn, def-vector-valued-functions-limits-and-continuity, def-ck-and-multi-index-notation-in-several-variables]
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---
## Definition

For $n \ge 1$, let $C_c(\mathbb{R}^n)$ be the vector space of continuous
functions $f : \mathbb{R}^n \to \mathbb{R}$ with compact support
([[def-support-and-compactly-supported-riemann-integral-in-rn]],
[[def-vector-valued-functions-limits-and-continuity]]).

Let $C_c^\infty(\mathbb{R}^n)$ be the subspace of those $f \in C_c(\mathbb{R}^n)$
that are smooth in the Euclidean multi-index sense
([[def-ck-and-multi-index-notation-in-several-variables]]).
