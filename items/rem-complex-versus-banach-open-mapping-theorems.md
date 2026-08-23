---
id: rem-complex-versus-banach-open-mapping-theorems
kind: remark
title: "Complex-analytic and Banach-space open mapping theorems"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-open-mapping-theorem-holomorphic-functions]
justified_by: []
external_refs: []
forward_refs: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Theorem 5.5.1"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "MIT 18.102, Introduction to Functional Analysis, Theorem 2.32"
      url: "https://math.mit.edu/~kehle/files/Introduction_to_functional_analysis_18_102.pdf"
pipeline_run: null
---

The complex-analytic open mapping theorem, [[thm-open-mapping-theorem-holomorphic-functions]], concerns a nonconstant holomorphic function on a complex domain. Its conclusion comes from the local power form of a one-variable holomorphic map.

The Banach-space result documented in the references has different hypotheses and a different proof: it concerns a surjective bounded linear map between complete normed spaces. It is not used here, and neither theorem is a specialization of the other despite the shared name.
