---
id: def-nilradical-and-reduced-ring
kind: definition
title: "The nilradical and reduced rings"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-radical-of-an-ideal]
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

Let $R$ be a commutative ring.

The **nilradical** of $R$ is the radical of the zero ideal,
$$
\operatorname{Nil}(R)=\sqrt{(0)}.
$$
Thus $x\in\operatorname{Nil}(R)$ exactly when $x^n=0$ for some integer $n\ge 1$.

The ring $R$ is **reduced** when $\operatorname{Nil}(R)=(0)$, equivalently when the only nilpotent element of $R$ is $0$.
