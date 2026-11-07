---
id: def-compatible-iterated-shtuka-boundary-data
kind: definition
title: "Compatible iterated shtuka data for boundary strata"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-drinfeld-shtuka-with-bounded-modification
  - def-algebraic-stack-and-inertia
  - def-smooth-morphism-schemes
  - def-simple-normal-crossings-divisors
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Laurent Lafforgue, Chtoucas de Drinfeld et correspondance de Langlands"
      url: "https://www.laurentlafforgue.org/math/fulltext.pdf"
      locator: "Chapter III §1(c), boundary-stratum description and Proposition III.3, printed pp. 63–65."
    - title: "Tuan Ngo Dac, Compactification des champs de chtoucas et théorie géométrique des invariants"
      url: "https://smf.emath.fr/system/files/filepdf/AST_2007__313__1_0.pdf"
      locator: "Chapter I §§1.3–1.4, description of Lafforgue compactification and its boundary."
verification:
  precheck: n/a
---

## Definition

Let $r=r_1+\cdots+r_k$ be an ordered composition with $k\ge2$ and each $r_i\ge1$. A right shtuka has diagram $E_i\to E_i'\leftarrow\tau E_i$ and a left shtuka has the reversed diagram $E_i\leftarrow E_i'\to\tau E_i$. **Compatible iterated shtuka boundary data of type $(r_1,\ldots,r_k)$ over a base $S$** consists of a chain of $k$ shtukas whose ranks are $r_1,\ldots,r_k$, with the first factor right-oriented and each later factor left-oriented, such that the zero leg of each factor is the pole leg of the next, together with a line bundle $L_i$ on $S$ at every intermediate rank sum $s_i=r_1+\cdots+r_i$ and an isomorphism identifying the incoming modification-cokernel line of the next factor with the outgoing modification-cokernel line of the preceding factor tensored with the Frobenius pullback of $L_i$. Any open conditions on this chain and its degree bounds are imposed separately by the boundary stratum under consideration. A **gerbe over a stack $Y$** is a stack over $Y$ that is locally nonempty and in which any two objects are locally isomorphic for the faithfully flat, finitely presented topology; it is **banded by a finite flat radicial group scheme** when its automorphism groups are locally identified with a group scheme that is finite, flat, and universally injective over the base.

A divisor on a smooth algebraic stack $Y\to B$ is a **relative normal-crossings divisor** if its pullback to each smooth scheme chart $U\to Y$ is a simple normal-crossings divisor in the scheme sense, with its components locally given by distinct members of a regular system of relative parameters over $B$. Here the chart is smooth over $Y$ and $U$ has the composite smooth morphism to $B$. Smooth charts are required for the full Artin-stack boundary, whose finite flat radicial inertia need not be unramified; no Deligne–Mumford restriction is imposed.

## Definition references

[[def-drinfeld-shtuka-with-bounded-modification|Right and left shtuka diagrams and modification cokernels]]

[[def-algebraic-stack-and-inertia|Algebraic and Deligne–Mumford stack conventions]]

[[def-simple-normal-crossings-divisors|Simple normal-crossings divisor on a scheme]]

[Laurent Lafforgue, Chapter III §1(c)](https://www.laurentlafforgue.org/math/fulltext.pdf)

[Tuan Ngo Dac, Chapter I §§1.3–1.4](https://smf.emath.fr/system/files/filepdf/AST_2007__313__1_0.pdf)
