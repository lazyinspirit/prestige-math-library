---
id: def-discrete-valuation-ring
kind: definition
title: "Discrete valuation rings"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-discrete-valuation, def-valuation-ring]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "M. Mustata, Commutative Algebra, Definition 8.8"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., (23.1)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Definition

Let $K$ be a field and let $v$ be a discrete valuation on $K$
([[def-discrete-valuation]]). Its **valuation ring** is
$$
V_v:=\{x\in K:v(x)\ge 0\}.
$$
This is a valuation ring in the sense of [[def-valuation-ring]].

A **discrete valuation ring** (DVR) is a subring $V\subseteq K$ of the form
$V=V_v$ for some discrete valuation $v$ on $K$. Because $v$ is surjective,
there is an element of value $1$, so $V$ has a nonunit and is therefore not a
field.
