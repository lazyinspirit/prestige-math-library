---
id: def-field-norm-and-trace
kind: definition
title: "The norm $N_{K/F}$ and trace $\\operatorname{Tr}_{K/F}$ of a finite field extension"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-extension-degree-and-finite-extension, def-determinant-of-a-linear-operator, def-trace-of-an-endomorphism]
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 6, Section 5"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
    - title: "B. Conrad, Norm and trace, Sections 1-3"
      url: "https://virtualmath1.stanford.edu/~conrad/248APage/handouts/normtrace.pdf"
pipeline_run: null
---

## Definition

Let $K/F$ be a finite field extension, so $K$ is a finite-dimensional
$F$-vector space of degree $[K:F]$ ([[def-extension-degree-and-finite-extension]]).
For $a\in K$, let

$$m_a\colon K\to K,\qquad x\mapsto ax,$$

the $F$-linear operator of multiplication by $a$.

The **norm** and **trace** of $a$ from $K$ to $F$ are

$$N_{K/F}(a):=\det(m_a),\qquad \operatorname{Tr}_{K/F}(a):=\operatorname{tr}(m_a),$$

where determinant and trace are those of the published linear-operator notions
([[def-determinant-of-a-linear-operator]], [[def-trace-of-an-endomorphism]]).

Because $K$ is a field, $m_a$ is the zero operator exactly when $a=0$ and is an
automorphism exactly when $a\ne0$. Later items identify these two quantities
with the classical embedding formulas and the trace form.
