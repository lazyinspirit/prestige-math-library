---
id: rem-conjugates-preserve-isomorphisms-but-arbitrary-mates-need-not
kind: remark
title: 'Conjugation preserves invertibility but the general mates correspondence need not'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-mates-under-a-pair-of-adjunctions]
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
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Exercise 4.3.iv'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

When both adjunctions in [[thm-mates-under-a-pair-of-adjunctions]] are adjoint equivalences, all unit and counit components in the mate formulas are isomorphisms. A mate is then obtained from the original transformation by whiskering and composing with isomorphisms, so invertibility is preserved. For a general adjunction the unit or counit need not be invertible; an identity transformation can have such a component as its mate. The mates bijection therefore preserves equations and typed pasting, not invertibility in general.
