---
id: def-polynomial-evaluation-and-root
kind: definition
title: 'Evaluation and roots of a polynomial in a commutative target ring'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-polynomial-ring-over-a-commutative-ring, def-ring-homomorphism]
justified_by: [thm-universal-property-of-a-polynomial-ring]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Neil Donaldson, Math 120B Notes, Section 22.4'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
    - title: 'James McKernan, MIT 18.703 Lecture 21, Definition 21.4'
      url: 'https://opencw.aprende.org/courses/mathematics/18-703-modern-algebra-spring-2013/lecture-notes/MIT18_703S13_pra_l_21.pdf'
pipeline_run: null
---

## Definition

Let $\varphi\colon R\to S$ be a unital ring homomorphism between commutative rings ([[def-ring-homomorphism]]), let $s\in S$, and let $f=\sum_i a_i x^i\in R[x]$. The **value of $f$ at $s$ along $\varphi$** is

$$ f_\varphi(s):=\sum_i\varphi(a_i)s^i\in S. $$

The sum is finite because the coefficient sequence of $f$ has finite support ([[def-polynomial-ring-over-a-commutative-ring]]). When $R$ is identified with a subring of $S$, the inclusion is understood and the subscript is omitted. An element $s\in S$ is a **root** or **zero** of $f$ when $f_\varphi(s)=0_S$.

Evaluation produces an element of the target ring from a formal polynomial. It does not identify the polynomial with the function that it induces.
