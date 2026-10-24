---
id: prop-sections-of-hom-are-the-same-as-smooth-fibrewise-linear-maps
kind: proposition
title: "Sections of Hom are the same as smooth fibrewise linear maps"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-dual-and-hom-vector-bundles, thm-dual-and-hom-transition-functions-define-smooth-bundles, def-vector-bundle-map-over-a-smooth-base-map, prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical accept review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-10-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---
## Statement

For smooth vector bundles $E,F\to M$, smooth sections of
$\operatorname{Hom}(E,F)$ are in natural bijection with smooth vector bundle maps
$E\to F$ over $\operatorname{id}_M$.

## Facts & Assumptions

**Given:** Smooth vector bundles $E,F\to M$.

[L1] In local frames, a smooth bundle map over the identity is equivalent to a smooth matrix of coefficients ([[prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices]]).

[L2] The Hom bundle is built from the same local matrices ([[thm-dual-and-hom-transition-functions-define-smooth-bundles]]).

## Proof

**Proof technique:** direct.

1.1 A section $s:M\to\operatorname{Hom}(E,F)$ assigns to each $p\in M$ a linear map $s(p):E_p\to F_p$. Define $\Phi_s:E\to F$ by $\Phi_s(v)=s(\pi(v))(v)$. In a pair of local frames, the matrix entries of $s$ are exactly the matrix entries of $\Phi_s$. [L1, L2, given, construct]

2.1 Conversely, a bundle map $\Phi:E\to F$ over $\operatorname{id}_M$ gives a section $s_\Phi(p)=\Phi|_{E_p}\in\operatorname{Hom}(E_p,F_p)$. The constructions are inverse to one another, and [L1] together with [L2] shows that smoothness on either side is the same local matrix condition. [L1, L2, step 1.1, algebra] ∎