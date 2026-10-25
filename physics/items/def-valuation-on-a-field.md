---
id: def-valuation-on-a-field
kind: definition
title: "Valuations on a field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-totally-ordered-abelian-group]
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
    - title: "M. Mustata, Commutative Algebra, Definition 8.1 and Remark 8.2"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., (26.11)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Definition

Let $K$ be a field and let $\Gamma$ be a totally ordered abelian group
([[def-totally-ordered-abelian-group]]). Adjoin a symbol $\infty$ with
$$\gamma<\infty,\qquad \gamma+\infty=\infty+\gamma=\infty,\qquad \infty+\infty=\infty.$$
for every $\gamma\in\Gamma$.

A **valuation on $K$ with value group in $\Gamma$** is a map
$$ v:K\to\Gamma\cup\{\infty\} $$
such that for all $x,y\in K$,
$$ v(x)=\infty \Longleftrightarrow x=0, $$
$$ v(xy)=v(x)+v(y), $$
and
$$ v(x+y)\ge\min\{v(x),v(y)\}. $$

When $x\ne 0$, the value $v(x)$ lies in $\Gamma$. The displayed laws imply
$v(1)=0$ and $v(x^{-1})=-v(x)$ for $x\in K^\times$.
