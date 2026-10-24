---
id: rem-sauer-shelah-uses-no-linear-algebra
kind: remark
title: "The shifting proof of Sauer–Shelah uses no field and no vector space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-sauer-shelah, thm-sauer-shelah-by-multilinear-polynomials, lem-the-down-shift-creates-no-new-shattered-set, def-shattering-and-vc-dimension]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §7.4"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Remarks

The proof of [[thm-sauer-shelah]] uses only the down-shifts, the weight function,
the shattered-set definition and a count of subsets. No incidence vector, field,
bilinear form or dimension appears there.

By contrast, [[thm-sauer-shelah-by-multilinear-polynomials]] does use the page's
linear-algebra machinery: it works in a polynomial function space, compares spans
of monomials, and closes by a dimension count. The page keeps both proofs because
the bound belongs in this topic, but only one of the two routes spends the
linear-algebra apparatus built here.
