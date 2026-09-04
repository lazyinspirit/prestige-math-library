---
id: def-radical-of-an-ideal
kind: definition
title: "The radical of an ideal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-commutative-ring, def-left-right-and-two-sided-ideal]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §2 Ideals"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §2 Ideals"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring and let $I\trianglelefteq R$ be an ideal. The **radical** of $I$ is
$$ \sqrt{I}=\{x\in R:x^n\in I\text{ for some integer }n\ge 1\}. $$

The ideal $I$ is **radical** when $I=\sqrt{I}$.
