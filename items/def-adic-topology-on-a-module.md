---
id: def-adic-topology-on-a-module
kind: definition
title: "The $I$-adic topology on a module"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-filtration-and-adic-filtration]
aliases: []
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §22.1"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, Lemma 24.1"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring, let $I \subseteq R$ be an ideal, and let $M$ be
an $R$-module.

The **$I$-adic topology** on $M$ is the linear topology whose distinguished
neighbourhood basis of $0$ is
$$
\{I^nM : n \ge 0\}.
$$
Equivalently, a subset $U \subseteq M$ is open when for every $x \in U$ there
exists $n$ such that
$$
x + I^nM \subseteq U.
$$

Thus the basic open neighbourhoods of an arbitrary point $x \in M$ are the
cosets
$$
x + I^nM \qquad (n \ge 0).
$$
