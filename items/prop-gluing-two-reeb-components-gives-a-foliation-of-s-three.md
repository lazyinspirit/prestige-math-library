---
id: prop-gluing-two-reeb-components-gives-a-foliation-of-s-three
kind: proposition
title: "Gluing two Reeb components gives a foliation of the three-sphere"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf, lem-gluing-manifolds-with-boundary-along-a-boundary-diffeomorphism, def-euclidean-spheres-and-closed-balls, def-two-dimensional-torus, def-diffeomorphism-and-local-diffeomorphism-of-manifolds, def-smooth-embedding, def-foliation-tangent-to-the-boundary-of-a-manifold-with-boundary, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes; complete PDF)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
      locator: "§2.1–§2.2, printed pp. 11–15 (the doubly suspended Reeb foliation of $S^3$)"
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "§4.3, printed pp. 144–145 (gluing two Reeb components along their boundary tori)"
dependency_level: 3
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $X_1,X_2$ be two
copies of the solid torus $\overline D^2\times S^1$ with their Reeb foliations
([[prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf]]) and let
$\sigma:\partial X_1\to\partial X_2$ be the diffeomorphism which interchanges
the two circle factors, written in the boundary coordinates
$\partial X_j\cong S^1\times S^1$ as $\sigma(u,v)=(v,u)$. Then the glued
manifold $X_1\cup_\sigma X_2$ is diffeomorphic to the three-sphere $S^3$
([[def-euclidean-spheres-and-closed-balls]]), the standard genus-one splitting,
and the two Reeb foliations glue by
[[lem-gluing-manifolds-with-boundary-along-a-boundary-diffeomorphism]] to a
codimension-one regular foliation $F_{\mathrm{Reeb}}$ of $S^3$. This foliation
has exactly one compact leaf, the Heegaard torus
$\partial X_1=\partial X_2$
([[def-two-dimensional-torus]]), whose holonomy group is infinite; every other
leaf is diffeomorphic to $\mathbb R^2$ and accumulates on the torus leaf. Hence
a compact manifold can carry a codimension-one foliation with non-compact
leaves and a single unstable compact leaf.

## Facts & Assumptions

**Given:** Two copies $X_1,X_2$ of the solid torus with their Reeb foliations, and the boundary diffeomorphism $\sigma(u,v)=(v,u)$.

[F1] The Reeb foliation of the solid torus is tangent to the boundary, has the boundary torus as a single compact leaf with infinite holonomy, and all other leaves are planes accumulating on the boundary leaf ([[prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf]]).

[F2] Assume $\mathrm{AC}_\omega$. If $\varphi:\partial W_1\to\partial W_2$ is a diffeomorphism of boundaries and the foliations $F_i$ tangent to $\partial W_i$ induce boundary foliations matched by $\varphi$, and their plane fields have matching jets in signed collar coordinates, then the foliations glue to a regular foliation of the quotient, restricting to $F_i$ ([[lem-gluing-manifolds-with-boundary-along-a-boundary-diffeomorphism]]).

[F3] The three-sphere is $S^3=\{(z_1,z_2)\in\mathbb C^2:|z_1|^2+|z_2|^2=1\}$, and the closed unit disk and the solid torus $\overline D^2\times S^1$ are as in [[def-euclidean-spheres-and-closed-balls]]; the boundary of the solid torus is $T^2=S^1\times S^1$ ([[def-two-dimensional-torus]]).

[F4] A diffeomorphism is a bijective smooth map with smooth inverse ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]). In the signed-collar smooth structure, smoothness across the seam is checked in those charts; agreement of the two boundary restrictions alone does not suffice.

## Proof

**Proof technique:** direct.

1.1 (The genus-one Heegaard splitting of $S^3$.) Put $V_1=\{|z_1|^2\le1/2\}$ and $V_2=\{|z_2|^2\le1/2\}$ in $S^3$. At least one coordinate has square modulus at most $1/2$, so $V_1\cup V_2=S^3$; their intersection is $|z_1|=|z_2|=1/\sqrt2$. The map $V_1\to\overline D^2\times S^1$, $(z_1,z_2)\mapsto(\sqrt2 z_1,z_2/|z_2|)$, is a diffeomorphism with inverse $(w,\zeta)\mapsto(w/\sqrt2,\sqrt{1-|w|^2/2}\,\zeta)$. The corresponding map for $V_2$ swaps the complex coordinates and has inverse $(w,\zeta)\mapsto(\sqrt{1-|w|^2/2}\,\zeta,w/\sqrt2)$. The denominators are at least $1/\sqrt2$ on their respective domains. On the shared boundary the disk-angle and longitude parameters interchange, giving $\sigma(u,v)=(v,u)$. Write $s=|z_1|^2-1/2$ near the shared torus and let $(\theta_1,\theta_2)$ denote its two angles. The map from the signed collar to $S^3$ is the single smooth formula $(\theta_1,\theta_2,s)\mapsto(\sqrt{1/2+s}e^{i\theta_1},\sqrt{1/2-s}e^{i\theta_2})$; its inverse is given by those angles and $|z_1|^2-1/2$. Pulling these collars back to the two solid tori makes the piece identifications a smooth diffeomorphism across the seam, and F2 gives the same diffeomorphism type for any other smooth collars. [F3, F4]

2.1 (The glued foliation.) By F1 each boundary torus is itself a whole leaf; its induced foliation has codimension zero, not a circle decomposition. Use a signed radial collar $s$ with $r_1=1-s$ for $s\ge0$ and $r_2=1+s$ for $s\le0$, and let $(\theta,t)$ be the meridional and longitudinal angles from the first boundary. Factor swapping makes the second longitude $\theta$. By the flat boundary form constructed in F1, the first plane field has annihilator $ds+v(1-s)\,dt$ and the second has annihilator $ds-v(1+s)\,d\theta$, after multiplication by a nonzero scalar. On $s=0$ both forms equal $ds$, and every derivative of either additional coefficient vanishes there. The plane fields, expressed as graphs over $\operatorname{span}(\partial_\theta,\partial_t)$, therefore have matching jets of every order. This checks the strengthened gluing hypothesis of F2 explicitly; its construction gives a smooth regular foliation restricting to both Reeb components on the glued manifold of step 1.1. [F1, F2, step 1.1]

3.1 (Leaves.) The common boundary torus is a single leaf of each Reeb foliation and survives the gluing as the Heegaard torus leaf, with infinite holonomy: a longitude loop from either component retains its nonidentity contracting one-sided germ on that side [F1]. Every other leaf lies entirely inside one of the two open Reeb components, hence is a plane accumulating on the boundary torus [F1]. Therefore $S^3$ carries a codimension-one foliation with exactly one compact leaf, that leaf being unstable because every collar meets plane leaves which leave the collar, as in F1, while all other leaves are non-compact planes. [F1, step 2.1] ∎
