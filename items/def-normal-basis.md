---
id: def-normal-basis
kind: definition
title: "Normal bases of a finite Galois extension"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-galois-extension-and-galois-group, def-relative-field-automorphism-group, def-linear-basis, thm-finite-galois-extension-characterizations, def-extension-degree-and-finite-extension]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Definition 5.17"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
    - title: "P. L. Clark, Field Theory (course notes/monograph), Chapter 8, Section 5"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
pipeline_run: null
---

## Definition

Let $K/F$ be a finite Galois extension
([[def-finite-galois-extension-and-galois-group]]) of degree $n=[K:F]$
([[def-extension-degree-and-finite-extension]]), and list its Galois group as

$$\operatorname{Gal}(K/F)=\{\sigma_1,\dots,\sigma_n\},$$

which has exactly $n$ elements because $|\operatorname{Gal}(K/F)|=[K:F]$ for a
finite Galois extension ([[thm-finite-galois-extension-characterizations]]).
Scalar multiplication by $F$ makes $K$ an $F$-vector space of dimension $n$.

An element $\alpha\in K$ is a **normal basis generator** for $K/F$ when the list

$$(\sigma_1\alpha,\ \sigma_2\alpha,\ \dots,\ \sigma_n\alpha)$$

is an ordered basis of $K$ as an $F$-vector space ([[def-linear-basis]]). Such a
list is called a **normal basis** of $K$ over $F$: a basis that is a single orbit
of the Galois group.

**Two conditions, not one.** A list is an ordered basis when it is injective and
its image is a basis, so a normal basis generator must in particular have $n$
distinct conjugates $\sigma_i\alpha$. Neither half implies the other: a basis of
$K$ over $F$ need not be a Galois orbit, and a Galois orbit of size $n$ need not
be a basis.

**The list is indexed by the group, not ordered by it.** Reordering
$\sigma_1,\dots,\sigma_n$ permutes the list and leaves the property of being a
basis unchanged, since a basis is a property of the underlying set together with
injectivity of the list ([[def-linear-basis]]). The automorphisms are those of
[[def-relative-field-automorphism-group]].
