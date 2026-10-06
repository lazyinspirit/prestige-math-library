---
id: lem-a-non-closed-leaf-of-a-codimension-one-foliation-meets-a-closed-transversal
kind: lemma
title: "A non-closed leaf of a codimension-one foliation meets a closed transversal"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-foliation-atlas, def-leaf-of-a-regular-foliation, prop-embedded-leaves-need-not-be-closed-and-leaves-need-not-be-embedded, def-smooth-embedding, def-embedded-submanifold-and-slice-chart, def-compact-space, def-countable-choice-principle-for-foliation-pair, def-transversely-oriented-codimension-one-foliation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "§4.3, Example 4.23 and Lemma 4.24 with its complete proof, printed pp. 154–155 (PDF pp. 163–164)"
    - title: "Tomasz Mrowka, MIT 18.965 Differential Topology, lecture notes (complete PDF)"
      url: "https://math.mit.edu/~mrowka/math965lectnote.pdf"
      locator: "§§20–23, PDF pp. 52–56 (closed transversals through recurrent leaves)"
dependency_level: 2
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice-principle-for-foliation-pair]]). Let $F$ be a smooth cooriented codimension-one foliation of a smooth manifold $M$, and let $A$ be a leaf that is not a closed subset of $M$. There is a smooth embedded circle transverse to $F$ that meets $A$.

The circle need not lie in every prescribed open neighborhood of $A$; the localization claim is false. The stronger finite-compact-barrier version needed in compact ambient manifolds is constructed directly in the global closedness lemma.

## Facts & Assumptions

**Given:** The smooth foliation, coorientation and nonclosed leaf $A$ of the statement.

[F1] Foliation boxes have plaques at fixed transverse coordinates, and transverse coordinates change only as functions of the old transverse coordinate ([[def-regular-foliation-atlas]]).

[F2] Points on a leaf can be joined by finite plaque chains and hence by compact leafwise paths ([[def-leaf-of-a-regular-foliation]]).

[F3] Coorientation consistently orders transversals and makes plaque transports increasing ([[def-transversely-oriented-codimension-one-foliation]]).

## Proof

1.1 Choose $x\in\overline A\setminus A$ and a product box centered at $x$. Infinitely many distinct plaques of $A$ meet smaller boxes about $x$; otherwise their finitely many transverse levels could not accumulate at the level of $x$ without including its plaque. Thus a short vertical segment $T$ meets $A$ twice. Join two such intersections by a compact embedded leafwise arc using F2 and removal of loops. Its intersections with $T$ are finite: they are closed in the compact arc and locally isolated by foliation boxes. Taking consecutive intersections along this arc gives a subarc whose interior misses $T$. Orient it from its higher endpoint to its lower endpoint. [F1, F2, F3, choose]

2.1 Cover this compact arc by finitely many foliation boxes. Compose their plaque transports to obtain a thin foliated strip with central arc coordinate $u=0$ and positive transverse coordinate $u$; the transverse direction is consistent by F3. On this strip tilt the arc from $u=-\varepsilon$ to $u=\varepsilon$ with strictly positive derivative in $u$. Choose $\varepsilon$ small enough that its final endpoint is still below its initial endpoint on $T$. Close it by the positive vertical segment between those endpoints. The central arc meets $T$ only at its endpoints, so a sufficiently thin strip and sufficiently small endpoint modifications make the closed curve embedded. It crosses $A$ where $u=0$, and every segment is positively transverse. Smooth the two corners inside product boxes. Convexity of the positive transverse tangent half-space preserves transversality, and a sufficiently small modification preserves embedding and the interior crossing of $A$. [F1, F3, step 1.1, construct]

3.1 The resulting curve is the required smooth embedded transverse circle meeting $A$. The construction uses finitely many boxes, one compact arc and finitely many shrinkings. It makes no arbitrary-neighborhood localization assertion. [step 2.1] ∎

## Localization counterexample

On $\mathbb R\times S^1$, with angle $\theta$ in radians modulo $2\pi$, take the smooth foliation tangent to $\partial_\theta-r\partial_r$. The leaf $A=\{(e^{-t},t\bmod 2\pi):t\in\mathbb R\}$ is nonclosed and accumulates on $r=0$. On $r>0$ the circle-valued function $\Phi=\theta+\log r\bmod 2\pi$ is a first integral. For $0<\varepsilon<\pi$, the open set $U=\Phi^{-1}((-\varepsilon,\varepsilon))$ contains all of $A$, and $\Phi$ lifts on $U$ to a real-valued smooth submersion. Along a closed transverse curve in $U$, the derivative of this real-valued first integral would be continuous and nowhere zero, hence have a constant sign, which is impossible for a periodic real function. Thus $U$ contains no closed transverse curve at all. Removing the localization clause preserves the actual source theorem and the global finite-barrier proof route.
