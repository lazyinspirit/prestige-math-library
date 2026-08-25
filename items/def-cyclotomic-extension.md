---
id: def-cyclotomic-extension
kind: definition
title: "The cyclotomic extension $K(\\mu_n)$ as a splitting field of $t^{n}-1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-roots-of-unity-in-a-field, thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity, def-polynomials-that-split-and-splitting-fields, thm-splitting-fields-exist-for-nonzero-polynomials, cor-splitting-fields-are-unique-up-to-base-isomorphism, def-finitely-generated-field-extension]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Section 1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "P. L. Clark, Field Theory (course notes/monograph), Section 9.1.1"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
pipeline_run: null
---

## Definition

Let $K$ be a field and $n\ge1$. A **cyclotomic extension of $K$ of order $n$** is
a splitting field $E$ of $t^{n}-1$ over $K$
([[def-polynomials-that-split-and-splitting-fields]]); one exists by
[[thm-splitting-fields-exist-for-nonzero-polynomials]]. It is written

$$K(\mu_n):=E .$$

**The notation is accurate.** The roots of $t^{n}-1$ in $E$ are exactly the
elements of $\mu_n(E)$ ([[def-roots-of-unity-in-a-field]]), and a splitting field
is generated over $K$ by the roots, so

$$E=K\bigl(\mu_n(E)\bigr)$$

in the sense of [[def-finitely-generated-field-extension]]: $E$ is the smallest
subfield of itself containing $K$ and the $n$-th roots of unity it holds.

**When the characteristic does not divide $n$** the extension has a single
generator: by
[[thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity]]
the group $\mu_n(E)$ is then cyclic of order $n$ and

$$K(\mu_n)=K(\zeta)$$

for any primitive $n$-th root of unity $\zeta\in E$. Without that hypothesis the
notation still names a splitting field, but $\mu_n(E)$ can be much smaller than
$n$ and no primitive $n$-th root of unity need exist
([[prop-p-power-roots-of-unity-in-characteristic-p]]).

## Remarks

- **Which splitting field.** Any two splitting fields of $t^{n}-1$ over $K$ are
  $K$-isomorphic ([[cor-splitting-fields-are-unique-up-to-base-isomorphism]]),
  and every statement made below about $K(\mu_n)$ is invariant
  under a $K$-isomorphism, so the definite article is harmless; where a fixed
  ambient field matters, as in the compositum and intersection results, the
  statement says so and works inside one chosen extension of $K$.
