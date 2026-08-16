---
id: def-monomials-on-an-index-set
kind: definition
title: "Monomials on an index set as finitely supported exponent families"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-function, def-natural-numbers, def-nat-addition, def-countable]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "U. Thiel, Commutative Algebra, Section 1.4"
      url: "https://ulthiel.com/math/files/Commutative-Algebra.pdf"
pipeline_run: null
---

## Definition

Let $I$ be a set. A **monomial on $I$** is a function $a:I\to\mathbb N$
([[def-function]], [[def-natural-numbers]]) whose support

$$\operatorname{supp}(a):=\{i\in I:a_i\ne0\}$$

is finite in the sense of [[def-countable]]. The set of all such exponent
families is denoted $\mathcal M(I)$. The **zero monomial** is the constant-zero
function, and the sum $a+b$ is defined pointwise using natural-number addition
([[def-nat-addition]]). It again has finite support because
$\operatorname{supp}(a+b)\subseteq\operatorname{supp}(a)\cup\operatorname{supp}(b)$.

We write $x^a$ for the formal monomial indexed by $a$. If $I=\varnothing$,
there is exactly one function $I\to\mathbb N$, so $\mathcal M(I)$ consists only
of the zero monomial.
