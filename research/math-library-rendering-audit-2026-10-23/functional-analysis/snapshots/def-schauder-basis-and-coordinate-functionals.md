---
id: def-schauder-basis-and-coordinate-functionals
kind: definition
title: "Schauder basis and coordinate functionals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-banach-space, def-series-and-absolute-convergence-in-a-normed-space]
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  audited: 2026-09-14
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Thomas Schlumprecht, Course Notes in Functional Analysis, Math 655"
      url: "https://people.tamu.edu/~t-schlumprecht/course_notes_math655_23c.pdf"
      locator: "Definition 3.1.1 and the following uniqueness remarks, printed pp.63-64"
pipeline_run: phase-2-next-18
---

## Definition

Let $X$ be a real or complex Banach space. A **positively indexed sequence**
$(e_n)_{n\ge 1}$ in $X$ means a function from
$\mathbb N_{\ge 1}$ to $X$. Such a sequence is a **Schauder basis** of $X$ if
for every $x\in X$ there is a unique scalar family
$a:\mathbb N_{\ge 1}\to\mathbb K$, written $(a_n)_{n\ge 1}$, such that

$$x=\sum_{n=1}^{\infty}a_ne_n$$

in the fixed displayed order. This notation denotes the zero-indexed series
from [[def-series-and-absolute-convergence-in-a-normed-space]] whose term at
$m\in\mathbb N$ is $a_{m+1}e_{m+1}$; equivalently,
$\sum_{n=1}^N a_ne_n\to x$ in norm. The uniqueness is part of the definition.

For each $n$, the algebraically defined map

$$e_n^*:X\longrightarrow\mathbb K,\qquad e_n^*(x)=a_n,$$

is the $n$th **coordinate functional**. It is linear: uniqueness applied to
the expansions of $x+y$ and $\lambda x$ gives
$e_n^*(x+y)=e_n^*(x)+e_n^*(y)$ and
$e_n^*(\lambda x)=\lambda e_n^*(x)$. No continuity is included in this
definition; boundedness will be proved later.

## Remarks

- A Schauder basis is ordered. Rearranging a conditional basis expansion can
  destroy convergence.
- Every basis vector is nonzero, since otherwise the zero vector would have
  two coefficient sequences.
