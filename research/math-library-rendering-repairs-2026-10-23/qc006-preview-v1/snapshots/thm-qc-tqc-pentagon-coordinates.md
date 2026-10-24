---
id: thm-qc-tqc-pentagon-coordinates
kind: theorem
title: Pentagon in fusion-tree coordinates
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-qc-tqc-f-symbol, def-monoidal-category, lem-qc-tqc-fusion-tree-dimension]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§3.5, PDF pp. 15–16: F-matrix coordinates of associativity coherence."
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, author final text"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§2.1, Definition 2.1.1, associator pentagon axiom."
---

## Statement

Let $a,b,c,d$ be four simple input charges and $t$ a simple total charge. The
root associator identity

$$\alpha_{a,b,c\otimes d}\circ\alpha_{a\otimes b,c,d} =(\operatorname{id}_a\otimes\alpha_{b,c,d})\circ\alpha_{a,b\otimes c,d} \circ(\alpha_{a,b,c}\otimes\operatorname{id}_d)$$

has equal matrices along its two routes in the fusion-tree bases. If $A_1,A_2,A_3$
are the three successive matrices on the right and $A_4,A_5$ the two successive
matrices on the left, then

$$A_3A_2A_1=A_5A_4.$$

Each matrix coefficient sums over every intermediate simple charge and every
multiplicity-basis index.

## Facts & Assumptions

**Given:** a unitary fusion category, simple objects $a,b,c,d$, and a simple
total charge $t$.

[F1] [[def-monoidal-category]]: the associator satisfies the pentagon equation
displayed in the Statement for all objects, including tensor products that are
not simple.

[F2] [[def-qc-tqc-f-symbol]]: an associator move between two fusion-tree bases
has matrix $F$, with the row/column convention and all vertex multiplicity
indices specified there.

[F3] [[lem-qc-tqc-fusion-tree-dimension]]: each parenthesized tree basis is a
complete orthonormal basis indexed by all admissible internal charges and
vertex multiplicity indices.

## Proof
1.1 Fix the source and target parenthesized tensor products in the pentagon. For each intermediate parenthesization, decompose every tensor product into simple summands and choose the tree basis of [F3]. Each associator in [F1] acts on these coordinates by the appropriate direct sum of F blocks from [F2], with identity factors on vertices it does not change. Thus the two sides of [F1] have coordinate matrices $A_3A_2A_1$ and $A_5A_4$, respectively. [F1, F2, F3, construct]

2.1 For fixed endpoint basis indices $x$ and $z$, let $u,v$ range over the complete composite indices of the two intermediate trees on the three-move route, and let $w$ range over the complete composite indices of the intermediate tree on the two-move route. Matrix multiplication gives $$\sum_{u,v}(A_3)_{z,v}(A_2)_{v,u}(A_1)_{u,x} =\sum_w(A_5)_{z,w}(A_4)_{w,x}.$$ Here each composite index consists of every simple internal charge together with every multiplicity-basis index at its vertices. Equality follows because the morphisms in [F1] are equal and [F3] supplies bases of the same Hom space; coordinates in a basis are unique. [F1, F2, F3, step 1.1, algebra]

3.1 The endpoint indices $x,z$ were arbitrary, so all entries of the two route matrices agree, proving $A_3A_2A_1=A_5A_4$ with all intermediate charge and multiplicity sums included. All sums are finite by finite semisimplicity. [F3, step 2.1] ∎
## Pentagon diagram

The vertices are the five parenthesizations of $a\otimes b\otimes c\otimes d$;
each arrow is the indicated associator. The diagram encodes exactly the two
composites stated and proved above; the proof uses the equations and coordinate
expansion, not the drawing.

```tikzcd
((a\otimes b)\otimes c)\otimes d
  \arrow[r,"\alpha_{a\otimes b,c,d}"]
  \arrow[d,"\alpha_{a,b,c}\otimes\mathrm{id}_d"']
& (a\otimes b)\otimes(c\otimes d)
  \arrow[r,"\alpha_{a,b,c\otimes d}"]
& a\otimes(b\otimes(c\otimes d)) \\
(a\otimes(b\otimes c))\otimes d
  \arrow[r,"\alpha_{a,b\otimes c,d}"']
& a\otimes((b\otimes c)\otimes d)
  \arrow[ru,"\mathrm{id}_a\otimes\alpha_{b,c,d}"']
&
```
