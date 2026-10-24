---
id: rem-transverse-orientability-is-load-bearing-in-the-global-codimension-one-form
kind: remark
title: "Transverse orientability is load-bearing in the global codimension-one form"
status: published
origin: pipeline
provenance: {"statement": "literature-derived", "proof": "not-applicable"}
deps: ["def-countable-choice-principle-for-foliation-pair", "def-transversely-oriented-codimension-one-foliation"]
justified_by: []
aliases: []
landmark: false
sources: {"references": [{"title": "Tomasz Mrowka, MIT 18.965 Differential Topology, lecture notes (complete PDF)", "url": "https://math.mit.edu/~mrowka/math965lectnote.pdf", "locator": "§§20–23, PDF pp. 52–56"}, {"title": "David Gabai, Commentary on Foliations (in Collected Works of William P. Thurston, Vol. 1; author-hosted)", "url": "https://web.math.princeton.edu/facultypapers/Gabai/Commentary-Thurston-Foliations.pdf", "locator": "Theorem 0.8 and Remark 0.9, PDF pp. 2–3"}, {"title": "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)", "url": "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf", "locator": "§4.2, printed pp. 140–143 (PDF pp. 149–152); §4.3, printed pp. 144–145 (PDF pp. 153–154), Example 4.7; Lemma 4.24, printed p. 155 (PDF p. 164)"}]}
dependency_level: 2
---

## Remark

Assume the standing countable choice $\mathrm{AC}_\omega$ ([[def-countable-choice-principle-for-foliation-pair]]); the following finite quotient construction needs no further choice. On $S^2\times S^1$, with $\theta\in\mathbb R/\mathbb Z$, consider $\tau(x,\theta)=(-x,-\theta)$. This involution is free, because the antipodal map on $S^2$ has no fixed point. Small disjoint neighborhoods of a point and its image give smooth quotient charts, so $X=(S^2\times S^1)/\langle\tau\rangle$ is a closed connected smooth three-manifold.

The product foliation descends. For $\theta\ne0,1/2$ a pair of slices at $\theta,-\theta$ has image diffeomorphic to $S^2$. At $0$ and $1/2$ the slice is identified antipodally and its image is $\mathbb RP^2$. All these leaves are compact and have finite fundamental group. The leaf space is the quotient of the circle by reflection, hence a closed interval, with the two projective-plane leaves at its endpoints.

The descended foliation is not transversely orientable ([[def-transversely-oriented-codimension-one-foliation]]). Indeed a hypothetical nonzero coorientation would pull back to $a(x,\theta)\,d\theta$ on the connected product, where $a$ is a continuous nowhere-zero function. Invariance under $\tau$ requires $a(-x,-\theta)=-a(x,\theta)$, impossible because a continuous nowhere-zero real function on a connected space has constant sign. Thus the common-leaf and circle-fibration conclusions of global Reeb stability fail when transverse orientability is removed. Under full AC this is a counterexample to removing just that hypothesis from the global theorem, rather than an application of its proof under countable choice alone.
