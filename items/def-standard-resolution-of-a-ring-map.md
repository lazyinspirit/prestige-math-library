---
id: def-standard-resolution-of-a-ring-map
kind: definition
title: "The standard simplicial resolution of a ring map"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
justified_by:
  - lem-standard-polynomial-resolution-admissibility
aliases: []
deps:
  - def-simplicial-object-and-simplicial-commutative-ring
  - def-ring-homomorphism
  - def-polynomial-ring-on-a-family-of-indeterminates
  - def-kahler-differentials-algebra
  - def-derivation-algebra
  - def-commutative-ring
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Chapter 92 (The Cotangent Complex), Section 92.3"
      url: "https://stacks.math.columbia.edu/download/cotangent.pdf"
      locator: "Definition 92.3.1 (tag 08PM), the standard polynomial resolution"
    - title: "The Stacks Project, Chapter 14 (Simplicial Methods), Example 14.34.7"
      url: "https://stacks.math.columbia.edu/download/simplicial.pdf"
      locator: "Example 14.34.7 (tag 09CB), the standard resolution as a monadic bar construction"
---

## Definition

Let $A\to B$ be a homomorphism of commutative unital rings
([[def-commutative-ring]], [[def-ring-homomorphism]]), and for a set $S$ let
$A[S]$ denote the polynomial $A$-algebra on the variable set $S$
([[def-polynomial-ring-on-a-family-of-indeterminates]]). Write $U$ for the
forgetful functor from $A$-algebras to sets, and write $F=A[-]$. The free
polynomial universal property gives $F\dashv U$, with unit
$\eta\colon\mathrm{id}_{\mathrm{Set}}\to UF$ sending a set element to
its variable, and counit $\epsilon\colon FU\to\mathrm{id}_{A\text{-}\mathrm{Alg}}$
sending a variable labelled by an algebra element to that element. Put
$G=FU$ and $\delta=F\eta U:G\to G^2$.

The **standard resolution** of $B$ over $A$ is the augmented simplicial
$A$-algebra $\epsilon\colon P_\bullet\to B$
([[def-simplicial-object-and-simplicial-commutative-ring]]) with
$$P_0=A[B],\qquad P_1=A[A[B]],\qquad P_n=A[P_{n-1}]\ \ (n\ge1),$$
equivalently $P_n=G^{n+1}(B)$. Its face maps are
$d_i=G^i\epsilon G^{n-i}:G^{n+1}B\to G^nB$ for $n\ge1$,
and its degeneracy maps are
$s_i=G^i\delta G^{n-i}:G^{n+1}B\to G^{n+2}B$ for $0\le i\le n$; and the augmentation $P_0=A[B]\to B$ is induced by the
structure map of the $A$-algebra $B$ on the free generators. The adjunction triangle identities imply the comonad identities
$(\epsilon G)\delta=(G\epsilon)\delta=\mathrm{id}_G$ and
$(\delta G)\delta=(G\delta)\delta$. Substituting these identities in the
face and degeneracy formulas gives the simplicial identities, so
$P_\bullet$ is a simplicial $A$-algebra and $\epsilon$ is a morphism of
simplicial $A$-algebras to the constant simplicial algebra $B$.

Each $P_n=A[P_{n-1}]$ is a polynomial $A$-algebra, hence a free $A$-module on
its monomials; in particular every $P_n$ is flat and the associated complex
of $A$-modules with the alternating face differential is a complex of free
$A$-modules. The augmentation admits an explicit homotopy contraction
of underlying simplicial sets over $B$, making it a weak equivalence of
simplicial rings once homotopy groups are read through the Moore complex; this is proved as
[[lem-standard-polynomial-resolution-admissibility]], which is the
well-definedness statement for the present construction and which is where
the simplex-level contraction is exhibited.

The well-definedness lemma uses only the displayed polynomial construction,
its face and degeneracy formulas, and the polynomial universal property.
It proves the augmentation properties just stated; those properties are not
prerequisites of its proof.
