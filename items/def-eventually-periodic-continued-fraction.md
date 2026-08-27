---
id: def-eventually-periodic-continued-fraction
kind: definition
title: "Eventually periodic regular continued fractions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-regular-continued-fraction, thm-well-ordering-principle]
justified_by: []
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
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "William Stein, Elementary Number Theory: Primes, Congruences, and Secrets"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Definition

An infinite regular continued fraction
$$[a_0; a_1,a_2,\ldots]$$
([[def-regular-continued-fraction]]) is **eventually periodic** if there are
integers $N\ge0$ and $h\ge1$ such that
$$a_{n+h}=a_n\qquad\text{for every }n\ge N.$$
The smallest such $h$ is the period of the eventual tail.
It exists because the admissible positive integers $h$ form a nonempty subset
of $\mathbb N$, to which [[thm-well-ordering-principle]] applies.
