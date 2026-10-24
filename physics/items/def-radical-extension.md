---
id: def-radical-extension
kind: definition
title: "A radical extension is a tower obtained by adjoining one $n$-th root at each step"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Section 7"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
    - title: "J. Ash, Basic Abstract Algebra, Section 6.8"
      url: "https://faculty.math.illinois.edu/~r-ash/Algebra.html"
pipeline_run: null
---

## Definition

Let $L/F$ be a field extension. It is a **radical extension** when there is a
finite tower

$$F=F_0\subseteq F_1\subseteq\cdots\subseteq F_r=L$$

such that for each $i$ with $1\le i\le r$ there are an integer $m_i\ge1$ and an
element $a_i\in F_{i-1}$ with

$$F_i=F_{i-1}(\alpha_i)\qquad\text{and}\qquad \alpha_i^{m_i}=a_i.$$

No Galois or root-of-unity hypothesis is built into the definition. Trivial
steps with $m_i=1$ are allowed.
