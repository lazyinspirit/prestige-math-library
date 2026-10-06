---
id: def-transversely-oriented-codimension-one-foliation
kind: definition
title: Transversely oriented codimension-one foliations
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
- def-regular-foliation-atlas
- def-smooth-distribution-on-a-manifold
- def-annihilator-bundle-of-a-distribution
- def-orientable-manifold
- def-countable-choice-principle-for-foliation-pair
- thm-smooth-partitions-of-unity-exist-on-manifolds
- def-c1-regular-codimension-one-foliation-and-transverse-orientation
justified_by: []
aliases: []
landmark: false
sources:
  scraped: []
  references:
  - title: Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete
      author-hosted PDF)
    url: https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf
    locator: §4.2, printed pp. 140–143 (PDF pp. 149–152); §4.3, printed pp. 144–145 (PDF pp. 153–154), Example 4.7;
      Lemma 4.24, printed p. 155 (PDF p. 164)
  - title: Tomasz Mrowka, MIT 18.965 Differential Topology, lecture notes (complete PDF)
    url: https://math.mit.edu/~mrowka/math965lectnote.pdf
    locator: §§20–23, PDF pp. 52–56
  - title: Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes; complete PDF)
    url: https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf
    locator: §1.3.6, printed p. 10 (PDF p. 11); §2.1, printed pp. 11–14 (PDF pp. 12–15); §2.2, printed pp. 14–15
      (PDF pp. 15–16)
dependency_level: 1
---

## Definition

Assume $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]],
[[thm-smooth-partitions-of-unity-exist-on-manifolds]]). Let $F$ be a regular
codimension-one foliation of a smooth manifold $M$
([[def-regular-foliation-atlas]]) with tangent distribution $D=TF$, a smooth
rank-$(n-1)$ subbundle of $TM$
([[def-smooth-distribution-on-a-manifold]]).

The foliation $F$ is **transversely oriented**, or **co-oriented**, when there
is a nowhere-vanishing smooth $1$-form $\omega$ on $M$ whose kernel is $D$:
$$D=\ker\omega .$$
Equivalently, $F$ is transversely oriented when there is a nowhere-vanishing
smooth vector field $X$ on $M$ transverse to $F$, that is, $X_p\notin D_p$ for
every $p\in M$.

The two formulations are equivalent because either object is a trivialization
of the same line bundle. A smooth $1$-form vanishing on $D$ is a section of the
annihilator bundle $D^\circ\subseteq T^*M$
([[def-annihilator-bundle-of-a-distribution]]), which has rank one; vanishing of
this section is an intrinsic condition, so a nowhere-vanishing $\omega$ with
$D=\ker\omega$ is exactly a global frame of $D^\circ$, and a line bundle admits
a nowhere-vanishing section exactly when it is trivial. Dually, a vector field
$X$ transverse to $F$ descends to a nowhere-vanishing section of the normal line
bundle $TM/D$, with the normalizations $\omega(X)=1$ identifying the two
trivializations pointwise. Thus transverse orientability is exactly triviality
of the normal line bundle $TM/D$. When $M$ is closed this triviality is a
genuine restriction, related to orientability of $M$ and of the foliation
([[def-orientable-manifold]]).

On a transversely oriented codimension-one foliation the local transversals to
$F$ are ordered: in a foliation chart the sign of $\omega$ orients the
one-dimensional transverse coordinate, and this orientation is respected by all
plaque transports, so the transverse direction is globally coherent along each
leaf. This definition concerns smooth foliations; the C¹ block uses
[[def-c1-regular-codimension-one-foliation-and-transverse-orientation]] instead.

The passage between the two smooth global objects uses only the declared $\mathrm{AC}_\omega$ partition-of-unity input ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]). Given $\omega$, locally choose smooth transverse fields $X_i$ with $\omega(X_i)=1$ and patch them with a subordinate partition $\rho_i$; then $X=\sum_i\rho_iX_i$ satisfies $\omega(X)=1$. Conversely, given transverse $X$, choose local annihilator forms $\omega_i$ normalized by $\omega_i(X)=1$ and patch them the same way. Their sum annihilates $D$ and evaluates to one on $X$, so its kernel is exactly $D$. This supplies the lift from the normal line to actual smooth fields/forms rather than treating the lift as automatic.
