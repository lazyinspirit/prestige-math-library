---
id: def-h-cobordism
kind: definition
title: h-Cobordism
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
deps:
- def-smooth-cobordism-triad-for-morse-theory
- def-homotopy-equivalence
- def-smooth-embedding
- def-compact-space
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Introduction and §§1--9, printed pp. 1--113; Concluding Remarks, printed pp. 113--114
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 1, printed pp. 1--22 (§§1.1--1.5)
verification:
  precheck: n/a
---
## Definition

An **h-cobordism** is a compact smooth cobordism triad $(W;M_0,M_1)$
([[def-smooth-cobordism-triad-for-morse-theory]]) with $\dim W=n+1\ge2$ for
which both inclusions

$$M_0\hookrightarrow W,\qquad M_1\hookrightarrow W$$

are homotopy equivalences ([[def-homotopy-equivalence]]). The inclusions are
smooth embeddings of the faces into $W$ ([[def-smooth-embedding]]), and
compactness of $W$ is the compactness carried by the triad
([[def-compact-space]]).

Because the triad has $\partial W=M_0\sqcup M_1$ with $M_0$ and $M_1$ closed
embedded smooth submanifolds of $\partial W$ of dimension $n=\dim W-1$, the two
faces of an h-cobordism are closed smooth $n$-manifolds. By
[[def-homotopy-equivalence]], the inclusion $\iota_i:M_i\hookrightarrow W$ is a
homotopy equivalence exactly when there is a continuous map $r_i:W\to M_i$ with

$$r_i\circ\iota_i\simeq\operatorname{id}_{M_i},\qquad\iota_i\circ r_i\simeq\operatorname{id}_W;$$

these are the homotopy-inverse identities. They do not by themselves specify a
retraction fixing the face pointwise or a homotopy relative to that face. No map
$W\to M_i$ is required to be smooth.

The definition is symmetric in the two faces: interchanging $M_0$ and $M_1$
leaves both conditions unchanged, so whenever $(W;M_0,M_1)$ is an h-cobordism
the reversed triad $(W;M_1,M_0)$ is one as well, with the same collars read in
the reversed order. A **trivial h-cobordism** is an h-cobordism diffeomorphic
to the product $M_0\times[0,1]$ relative to $M_0$; the faces $M_0$ and $M_1$ of
an h-cobordism are called **h-cobordant**, whether or not that h-cobordism is
trivial. Equivalently, two closed smooth manifolds are h-cobordant when there
exists an h-cobordism with those faces.

No simple connectivity, orientability or coefficient hypothesis is part of the
definition, no hypothesis on the fundamental groups beyond what the homotopy
equivalences already impose is made, and the two faces need not be
diffeomorphic.
