---
id: def-adic-completion-of-a-module
kind: definition
title: "The $I$-adic completion of a module"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-adic-topology-on-a-module, def-inverse-system-and-inverse-limit-of-modules]
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
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition 22.8"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, Lemma 24.1"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring, let $I \subseteq R$ be an ideal, and let $M$ be
an $R$-module.

The **$I$-adic completion** of $M$ is the inverse limit
$$\widehat{M}^{\,I}:=\varprojlim_{n \ge 1} M/I^nM$$
of the quotient system
$$M/IM \leftarrow M/I^2M \leftarrow M/I^3M \leftarrow \cdots.$$

When the ideal $I$ is fixed, this module is denoted simply by $\widehat M$.

The associated **completion map** is
$$\kappa_M \colon M \to \widehat M, \qquad m \mapsto (m \bmod I^nM)_{n \ge 1}.$$
