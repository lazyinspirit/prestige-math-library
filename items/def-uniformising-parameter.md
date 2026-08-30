---
id: def-uniformising-parameter
kind: definition
title: "Uniformising parameters"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-discrete-valuation-ring, lem-valuation-ring-is-local]
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
    - title: "M. Mustata, Commutative Algebra, Remark 8.9"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., (23.1)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a discrete valuation ring with discrete valuation $v$ and maximal
ideal $\mathfrak m$. A **uniformising parameter** or **uniformiser** is an
element $\pi\in V$ with
$$
v(\pi)=1.
$$

This is equivalent to requiring that $\pi$ generate the maximal ideal
$\mathfrak m$. Indeed, if $v(\pi)=1$ and $x\in\mathfrak m$ is nonzero, then
$v(x)\ge1$, so $v(x/\pi)\ge0$ and therefore $x\in(\pi)$. Conversely, if
$\mathfrak m=(\pi)$ and $v(\pi)\ge2$, then surjectivity of the valuation gives
an element $y$ with $v(y)=1$, and $y\in\mathfrak m=(\pi)$ would force
$1=v(y)\ge v(\pi)\ge2$, impossible.
