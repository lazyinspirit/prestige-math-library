---
id: def-accessible-manifold-of-a-leaf
kind: definition
title: The accessible manifold of a leaf
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
- def-positive-transverse-accessibility-between-leaves
- def-leaf-of-a-regular-foliation
- def-regular-foliation-atlas
- def-countable-choice-principle-for-foliation-pair
justified_by:
- lem-no-transversal-leaf-bounds-a-positive-accessibility-region-with-finite-inward-boundary
aliases: []
landmark: false
dependency_level: 2
verification:
  precheck: n/a
sources:
  scraped: []
  references:
  - title: Steven Hurder and Remi Langevin, Dynamics and the Godbillon-Vey Class of C1 Foliations (complete author-hosted
      PDF)
    url: https://homepages.math.uic.edu/~hurder/papers/59manuscript-rev2016.pdf
    locator: printed pp. 6-9
  - title: S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber; complete PDF of the translation)
    url: https://homepage.mi-ras.ru/~snovikov/23.pdf
    locator: §1, printed pp. 2-4
  - title: 'Samuel Ranz, Approximately Holomorphic Techniques in Foliations: A Simple Proof of Novikov''s Theorem
      (PhD thesis, Universidad Autonoma de Madrid, 2024; complete PDF)'
    url: https://www.icmat.es/Thesis/2024/Tesis_Samuel_Ranz.pdf
    locator: §2.2, printed pp. 37-38
---

## Definition

Assume $\mathrm{AC}_\omega$. Let $F$ be a smooth cooriented codimension-one foliation of a boundaryless manifold $M$, and let $L$ be a leaf. Its **strict positive accessible set** $N_L$ consists of the endpoints of genuine nonempty smooth positively transverse paths whose starting points lie in $L$. Equality of leaves is not an empty-path convention in this definition: $L$ belongs to $N_L$ only if a genuine positive return exists.

The set is open and saturated. A leaf $L$ meets a closed transversal exactly when $L\subseteq N_L$. On a compact $M$, tautness is equivalent to $N_L$ being the connected component of $M$ containing $L$, for every leaf $L$. Thus the equality $N_L=M$ requires connected $M$. These properties, including the finite box constructions that justify them, are proved in [[lem-no-transversal-leaf-bounds-a-positive-accessibility-region-with-finite-inward-boundary]]. The set is an open submanifold by openness; the word manifold introduces no separate structure or axiom.

## Remarks

The cited lemma states its conclusions for closed $M$. Its openness, saturation and return constructions extend to the boundaryless case used here: their compact sets are the images of finitely many paths, not the whole ambient manifold. Openness follows by varying the last positive chart segment. To move an endpoint along a compact leafwise path $a$, use a positive local field $X$ and its flow $\varphi_u$. For a positive defining form $\omega$, compactness gives $\omega(X)\ge b>0$ and $|\omega(D\varphi_u a')|\le A|u|$. An offset with $u'=B|u|+\delta$, $B>A/b$, makes the displaced path strictly positive; use positive initial and negative terminal offsets vanishing at the desired outer endpoints, and interpolate along the original positive segment. Small offsets and chartwise smoothing preserve positivity. Thus endpoints may be moved within their leaves and returns may be closed.

For the closed immersed return, the finite source-chart perturbation in steps 2.1–3.1 of the cited proof uses only a compact curve neighbourhood: in dimension at least three it removes coincidences; in dimension two it gives finitely many double crossings, resolved by pairing the increasing transverse branches in order. Keep one chosen crossing of $L$ fixed and retain the resulting embedded circle through it. In dimension one, a return is a periodic orbit of a positive field; uniqueness gives the embedded once-around circle in its orbit component, so ambient compactness is unnecessary. Conversely an embedded positive circle supplies a genuine return. The tautness criterion asserted above is restricted to compact $M$ and is exactly the cited lemma's componentwise conclusion.
