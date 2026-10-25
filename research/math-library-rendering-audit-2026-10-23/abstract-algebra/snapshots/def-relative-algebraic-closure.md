---
id: def-relative-algebraic-closure
kind: definition
title: "The relative algebraic closure of $F$ in an extension $K$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-algebraic-elements-form-a-subfield]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 1"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Definition

For a field extension $K/F$, the **relative algebraic closure of $F$ in $K$** is

$$\operatorname{acl}_K(F):=\{a\in K:a\text{ is algebraic over }F\}.$$

By [[thm-algebraic-elements-form-a-subfield]], this set is a subfield of $K$ containing $F$.
