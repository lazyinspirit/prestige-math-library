---
id: thm-ringel-map-embedding-and-finite-dynkin-criterion
kind: theorem
title: "The Ringel map embeds the extended positive Borel and is full Hall exactly in finite Dynkin type"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 12
deps:
  - prop-ringel-map-is-well-defined-and-has-composition-image
  - prop-green-hall-pairing-is-nondegenerate
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "Theorem 3.16 and its proof, PDF pp. 39–40: Ringel–Green embedding and finite-type criterion, using Kac classification and a quantum pairing theorem."
    - title: "Claus Michael Ringel, Hall algebras and quantum groups, E.L.A.M. Lectures (1993)"
      url: "https://www.math.uni-bielefeld.de/~ringel/opus/elam.pdf"
      locator: "§4: the Hall realization and finite-type comparison."
---

## Statement

Let $Q$ be a finite loopless quiver over $\mathbb F_q$, using finite-dimensional
nilpotent representations when $Q$ has oriented cycles. The assignment
$E_i\mapsto[S_i]$, $K_i\mapsto k_i$ embeds the extended positive Borel for
the symmetric Cartan matrix of the underlying graph into the extended Hall
algebra, with image the torus extension of the composition subalgebra. Its
positive half maps onto the full Hall algebra exactly when the underlying
graph is finite Dynkin.

## Unresolved proof obligations

The exact missing local supplier checks are:

- `thm-kac-quiver-indec-root-classification`: a proof that the dimension
  vectors of indecomposable representations are precisely the positive roots,
  with one indecomposable per positive root exactly in finite Dynkin type.
- `thm-specialized-positive-quantum-pairing-nondegenerate-v-greater-one`:
  a nondegenerate positive-quantum-group pairing or PBW-rank proof after
  specialization to the fixed real value $\nu=\sqrt q>1$.

The repository’s generic pairing theorem does not itself establish the second
claim after specialization. These suppliers are absent from the active local
item inventory, so the full embedding and finite-Dynkin iff statement are
retained but escalated. The separate cyclic-category hereditary check is
recorded on [[lem-finite-loopless-quiver-nilpotent-category-is-hereditary-finitary]].
