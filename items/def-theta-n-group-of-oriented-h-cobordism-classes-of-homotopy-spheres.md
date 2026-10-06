---
id: def-theta-n-group-of-oriented-h-cobordism-classes-of-homotopy-spheres
kind: definition
title: "The homotopy-sphere group $\\Theta_n$"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-homotopy-sphere, lem-theta-n-connected-sum-operation-is-well-defined, lem-orientation-reversal-is-inverse-in-theta-n, def-countable-choice, thm-smooth-simply-connected-h-cobordism-theorem]
justified_by: []
aliases: []
landmark: false
dependency_level: 7
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Michel Kervaire and John Milnor, Groups of Homotopy Spheres I, Annals of Mathematics 77 (1963), 504-537"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/kervmiln.pdf"
      locator: "printed pp. 504-508, the group Theta_n of oriented h-cobordism classes of homotopy n-spheres"
---

## Definition

Assume $\mathrm{AC}_\omega$. For $n\ge5$, let $\Theta_n$ be the set of oriented
h-cobordism classes of oriented smooth homotopy $n$-spheres
([[def-smooth-homotopy-sphere]]). Addition is the oriented connected sum of
homotopy spheres, the zero class is the class of the standard sphere $S^n$
with its standard orientation, and the inverse of the class of $\Sigma$ is the
class of $-\Sigma$.

These classes form a set: compactness gives a finite coordinate atlas for each manifold. The finite chart domains are open subsets of $\mathbb R^n$ and the transition maps are functions between such subsets, so all finite oriented atlas data range over a set. Their quotients represent every compact oriented smooth $n$-manifold, and hence taking the homotopy-sphere subcollection and its quotient by the relation is a set operation. The relation is indeed an equivalence here: an h-cobordism has dimension $n+1\ge6$ and simply connected faces, so the relative product theorem gives an orientation-preserving diffeomorphism ([[thm-smooth-simply-connected-h-cobordism-theorem]]); conversely any such diffeomorphism supplies a product h-cobordism. Thus reflexivity, symmetry and transitivity follow from those of oriented diffeomorphism.

The operation is well defined on h-cobordism classes, associative and
commutative with the class of $S^n$ as two-sided identity by
[[lem-theta-n-connected-sum-operation-is-well-defined]], and
$\Sigma\#(-\Sigma)$ is oriented h-cobordant to $S^n$ by
[[lem-orientation-reversal-is-inverse-in-theta-n]]; hence these data form an
abelian group. The inverse is well defined on classes because an oriented
h-cobordism between $\Sigma$ and $\Sigma'$ can be composed with the given
one and reversed in orientation. All choices enter only through the verified
connected-sum and inverse lemmas, and no choice principle stronger than
$\mathrm{AC}_\omega$ is used.
