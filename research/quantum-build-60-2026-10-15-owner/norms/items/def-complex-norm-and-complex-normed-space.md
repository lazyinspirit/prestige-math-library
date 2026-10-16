---
id: def-complex-norm-and-complex-normed-space
kind: definition
title: "A complex norm and its norm metric"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-vector-space, def-complex-numbers-and-arithmetic, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws, def-metric-space]
sources:
  references:
    - title: "Tomasz Kochanek, Functional analysis, Lecture 1, Definition 1.1 and Example 1.2"
      url: "https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf"
---

## Definition

Let $V$ be a vector space over $\mathbb C$ ([[def-vector-space]], [[def-complex-numbers-and-arithmetic]]). A **complex norm** on $V$ is a function $N:V\to\mathbb R$ satisfying, for all $u,v\in V$ and $\lambda\in\mathbb C$:

- $N(v)=0$ if and only if $v=0$;
- $N(\lambda v)=|\lambda|N(v)$, with the complex modulus of [[def-complex-conjugate-real-imaginary-part-and-modulus]];
- $N(u+v)\le N(u)+N(v)$.

A **complex normed space** is such a pair $(V,N)$. All norm values are finite real numbers. Nonnegativity follows from the axioms: $|-1|=1$ by the modulus formula, hence $N(-v)=N(v)$, and $0=N(0)\le N(v)+N(-v)=2N(v)$ implies $N(v)\ge0$.

The **induced norm metric** is $d_N(u,v)=N(u-v)$. It is a metric in the sense of [[def-metric-space]]: separation is the first axiom; symmetry follows from $N(-w)=N(w)$; and $u-w=(u-v)+(v-w)$ gives the metric triangle inequality. All topological and sequential notions for $(V,N)$ refer to this metric. Its restriction to the singleton zero space is allowed.
