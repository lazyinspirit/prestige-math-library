---
id: def-adjunct-and-transposition-under-an-adjunction
kind: definition
title: 'Adjuncts and transposition under an adjunction'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-adjunction-by-unit-counit-and-triangle-identities]
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
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Section 4.2'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Lemma 2.2.4'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Definition

Let $F\dashv G:\mathcal D\to\mathcal C$ be an adjunction in the sense of [[def-adjunction-by-unit-counit-and-triangle-identities]], with unit $\eta$ and counit $\varepsilon$. For objects $c\in\mathcal C$ and $d\in\mathcal D$:

- the **right adjunct**, or **transpose**, of $u:Fc\to d$ is
  $$u^\flat:=G(u)\circ\eta_c:c\to Gd;$$
- the **left adjunct**, or **inverse transpose**, of $v:c\to Gd$ is
  $$v^\sharp:=\varepsilon_d\circ F(v):Fc\to d.$$

The symbols $(-)^\flat$ and $(-)^\sharp$ always refer to the displayed adjunction; when several adjunctions occur, the relevant unit and counit are named explicitly.
