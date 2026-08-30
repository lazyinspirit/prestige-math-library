---
id: def-totally-ordered-abelian-group
kind: definition
title: "Totally ordered abelian groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., (26.11)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "M. Mustata, Commutative Algebra, Definition 8.1"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
pipeline_run: null
---

## Definition

A **totally ordered abelian group** is an abelian group $(\Gamma,+,0)$ together
with a total order $\le$ such that translation preserves the order:
$$
\gamma\le\delta \Longrightarrow \gamma+\eta\le\delta+\eta
$$
for all $\gamma,\delta,\eta\in\Gamma$.

The positive cone is
$$
\Gamma_{\ge 0}:=\{\gamma\in\Gamma:\gamma\ge 0\},
$$
and similarly $\Gamma_{>0}$, $\Gamma_{\le 0}$, and $\Gamma_{<0}$.
