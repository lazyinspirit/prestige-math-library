---
id: def-mu-minimization-and-partial-recursive-function
kind: definition
title: "Unbounded minimization and partial recursive functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-function, def-primitive-recursive-function]
justified_by: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Jeremy Avigad and Richard Zach, Recursive Functions"
      url: "https://builds.openlogicproject.org/content/computability/recursive-functions/recursive-functions.pdf"
    - title: "Klaus Sutner, Other Models"
      url: "https://www.cs.cmu.edu/~cdm/resources/20-models.pdf"
---

## Definition

A **partial function** $f:\mathbb N^k\rightharpoonup\mathbb N$ is a function
whose domain is some subset of $\mathbb N^k$ and whose values lie in
$\mathbb N$. Thus the hooked arrow records the ambient input set, while the
actual domain may be smaller.

Let $g:\mathbb N^{k+1}\rightharpoonup\mathbb N$ be a partial function. Its
**unbounded minimization** is the partial function
$$ \mu y\,g(x,y) $$
defined at $x\in\mathbb N^k$ exactly when there exists $y$ such that
$g(x,y)=0$ and $g(x,z)$ is defined and nonzero for every $z<y$; in that case
$\mu y\,g(x,y)$ is the least such $y$.

Composition of partial functions is **strict**: if
$g:\mathbb N^m\rightharpoonup\mathbb N$ and
$h_1,\dots,h_m:\mathbb N^k\rightharpoonup\mathbb N$, then
$g(h_1(x),\dots,h_m(x))$ is defined exactly when every $h_i(x)$ is defined and
$g$ is defined at the resulting tuple. Primitive recursion for partial
functions uses the same two recursive clauses as in the total case, with a
value undefined as soon as a required earlier value or an application of a
defining function is undefined.

A partial function $f:\mathbb N^k\rightharpoonup\mathbb N$ is
**partial recursive** when it belongs to the smallest class of partial
functions on finite powers of $\mathbb N$ that:

- contains every initial arithmetic function, viewed as a total partial
  function,
- is closed under strict composition,
- is closed under partial primitive recursion, and
- is closed under unbounded minimization.

## Remarks

- Minimization is the first closure operation here that can destroy totality.

- A partial recursive function is therefore allowed to be undefined on some
  inputs even though the primitive recursive functions are always total.
