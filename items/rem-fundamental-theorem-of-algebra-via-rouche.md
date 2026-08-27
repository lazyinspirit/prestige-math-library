---
id: rem-fundamental-theorem-of-algebra-via-rouche
kind: remark
title: "Rouche gives the standard leading-term proof of the fundamental theorem of algebra"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-rouche-theorem,
       thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.4"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Remark

Let

$$p(z)=a_n z^n+a_{n-1}z^{n-1}+\cdots+a_0,\qquad a_n\ne0.$$

On the circle $|z|=R$ one has

$$|a_{n-1}z^{n-1}+\cdots+a_0|\le |a_{n-1}|R^{n-1}+\cdots+|a_0|,$$

so for sufficiently large $R$ the lower-degree tail is strictly smaller than
$|a_n|R^n=|a_n z^n|$. Rouché's theorem therefore gives the same number of zeros
for $p$ and its leading term $a_n z^n$ inside $|z|<R$, namely $n$ counting
multiplicity.

This is exactly the standard leading-term proof that every nonconstant complex
polynomial has roots and, more sharply, that a degree-$n$ polynomial has
exactly $n$ roots counted with multiplicity, agreeing with the canonical result
[[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]].
