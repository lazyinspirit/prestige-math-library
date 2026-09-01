---
id: def-filtration-and-adic-filtration
kind: definition
title: "Filtered modules and the $I$-adic filtration"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-product-of-an-ideal-and-a-module]
aliases: []
verification:
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
    - title: "J. S. Milne, A Primer of Commutative Algebra, §24"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring and let $M$ be an $R$-module.

A **decreasing filtration** on $M$ is a sequence of submodules
$$
M=F^0M \supseteq F^1M \supseteq F^2M \supseteq \cdots .
$$

If $I \subseteq R$ is an ideal, the **$I$-adic filtration** on $M$ is the
decreasing filtration
$$
M \supseteq IM \supseteq I^2M \supseteq \cdots,
$$
where each $I^nM$ is the product of the ideal $I^n$ with the module $M$ in the
sense of [[def-product-of-an-ideal-and-a-module]].

For the ring $R$ itself, viewed as an $R$-module, this gives the usual
$I$-adic filtration
$$
R \supseteq I \supseteq I^2 \supseteq \cdots.
$$
