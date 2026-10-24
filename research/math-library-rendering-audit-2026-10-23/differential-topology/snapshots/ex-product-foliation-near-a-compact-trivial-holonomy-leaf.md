---
id: ex-product-foliation-near-a-compact-trivial-holonomy-leaf
kind: example
title: "The product foliation near a compact leaf with trivial holonomy"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-trivial-holonomy-gives-a-product-foliated-neighbourhood, thm-local-reeb-stability, def-regular-foliation-atlas, def-two-dimensional-torus, def-euclidean-spheres-and-closed-balls, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, def-local-transversal-to-a-regular-foliation, cor-fundamental-group-of-two-dimensional-torus, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes; complete PDF)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
      locator: "§2.1–§2.2, printed pp. 11–15 (product foliations have trivial holonomy)"
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "§4.2, printed pp. 140–143 (transverse transport in product coordinates)"
dependency_level: 13
---

## Example

Assume Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $L=S^1$ and
consider the product foliation of $M=S^1\times\mathbb R$ by the circles
$L_t=S^1\times\{t\}$. Each leaf is compact and has trivial holonomy: a local
transversal is a vertical interval $\{u\}\times(t_0-\varepsilon,t_0+\varepsilon)$ and
the holonomy of any leafwise loop is the identity. For every leaf $L_{t_0}$ and
every $\delta>0$ the open set
$U_\delta=S^1\times(t_0-\delta,t_0+\delta)$ is a saturated neighbourhood of
$L_{t_0}$ foliated-diffeomorphic to the product $S^1\times(-\delta,\delta)$
with the product foliation, so the conclusion of
[[cor-trivial-holonomy-gives-a-product-foliated-neighbourhood]] is realised
exactly. The same computation with $L=T^2$ gives compact leaves with infinite
fundamental group and trivial holonomy, showing that trivial holonomy does not
require finiteness of $\pi_1$.

## Verification

**Given:** The product foliation of $M=S^1\times\mathbb R$ by the circles $S^1\times\{t\}$, a leaf $L_{t_0}$, and $\delta>0$.

[F1] The product $S^1\times\mathbb R$ carries the product smooth structure and the product foliation by the slices $S^1\times\{t\}$, whose leaves are the maximal connected integral manifolds of the kernel of $dt$ ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]], [[def-regular-foliation-atlas]]).

[F2] A local transversal to the product foliation at a point of $S^1\times\{t_0\}$ can be taken to be the vertical interval $\{u\}\times(t_0-\varepsilon,t_0+\varepsilon)$, and the plaque transport in product coordinates is the identity ([[def-local-transversal-to-a-regular-foliation]]).

[F3] Trivial holonomy on a compact leaf gives a fundamental system of product foliated neighbourhoods $L\times D$, whose leaves are compact and diffeomorphic to $L$ ([[cor-trivial-holonomy-gives-a-product-foliated-neighbourhood]]).

[F4] The fundamental group of the two-dimensional torus is $\mathbb Z^2$, hence infinite ([[cor-fundamental-group-of-two-dimensional-torus]], [[def-two-dimensional-torus]]).


**Proof technique:** direct verification.

1.1 (Leaves and their holonomy.) The slices $S^1\times\{t\}$ are the maximal connected integral manifolds of the kernel of $dt$, hence the leaves of the product foliation [F1]. A leafwise loop lies inside a single slice $L_t$, and following it transports the vertical transversal $\{u\}\times(t-\varepsilon,t+\varepsilon)$ by the identity in product coordinates, since the second coordinate is constant along the slices; hence the holonomy representation of every leaf is trivial [F2]. [F1, F2]

1.2 (Product neighbourhoods.) Fix $t_0$ and $\delta>0$. The set $U_\delta=S^1\times(t_0-\delta,t_0+\delta)$ is open, contains $L_{t_0}$, and is a union of slices, hence saturated; the translation $(u,t)\mapsto(u,t-t_0)$ is a foliated diffeomorphism onto $S^1\times(-\delta,\delta)$ with the product foliation, and these neighbourhoods for shrinking $\delta$ form a fundamental system. This is exactly the conclusion of the product corollary for a compact leaf of trivial holonomy [F3]. [F1, F3]

2.1 (The torus variant.) Replacing $S^1$ by $T^2$ in the same argument gives the product foliation of $T^2\times\mathbb R$: the slices are compact leaves with trivial holonomy by the same computation, while their fundamental group is $\mathbb Z^2$, which is infinite [F4]. Hence trivial holonomy does not require finiteness of $\pi_1$, and the same direct product calculation applies to every nonempty connected closed smooth fibre $L$, independently of its fundamental group. [F3, F4, step 1.1] ∎
