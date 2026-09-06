---
id: prop-the-exterior-derivative-does-not-enlarge-support
kind: proposition
title: "The exterior derivative does not enlarge support"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-the-exterior-derivative-is-local, def-smooth-section-local-section-and-support]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Statement

For every form $\omega$, $\operatorname{supp}(d\omega)\subseteq\operatorname{supp}(\omega)$.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that If $\omega=\eta$ on an open set $U$, then $d\omega=d\eta$ on $U$. ([[prop-the-exterior-derivative-is-local]]).

## Proof

**Proof technique:** direct.

1.1 On the open complement of $\operatorname{supp}\omega$, the form is identically zero. [F1, given]

2.1 Locality gives $d\omega=0$ there, so no point of that open set lies in $\operatorname{supp}(d\omega)$. [step 1.1] ∎

