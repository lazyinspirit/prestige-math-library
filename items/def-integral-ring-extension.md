---
id: def-integral-ring-extension
kind: definition
title: "Integral ring maps and integral extensions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-integral-element-and-algebraic-integer]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Definition (10.21)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Definition 6.6"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Definition

Let $f:A\to B$ be a homomorphism of commutative rings. The map $f$ is an **integral ring map** when every element of $B$ is integral over $A$ in the sense of [[def-integral-element-and-algebraic-integer]]. When $A$ is identified with a subring of $B$, one also says that $B$ is an **integral extension** of $A$ and writes $A\subseteq B$ integral.
