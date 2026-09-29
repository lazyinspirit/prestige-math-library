---
id: def-polygonal-schema-and-edge-pairing
kind: definition
title: "Polygonal schemas and paired boundary edges"
status: draft
origin: pipeline
deps: [def-topological-manifold-without-boundary, def-quotient-topology, thm-heine-borel-rn, thm-compact-subset-of-a-hausdorff-space-is-closed]
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Gallier and Xu, A Guide to the Classification Theorem for Compact Surfaces"
      url: "https://www.cis.upenn.edu/~jean/surfclassif-root.pdf"
      locator: "Chapter 6 §6.1, Definitions 6.1–6.2 and Figures 6.2–6.4, printed pp.79–84"
    - title: "Koch, Classification of Surfaces"
      url: "https://pages.uoregon.edu/koch/math431/Surfaces.pdf"
      locator: "§§2–3, printed pp.2–4"
pipeline_run: frontier-36-complete
---

## Definition

A **polygonal schema** is finite data consisting of a nonempty family of
oriented, nondegenerate closed disks, each with its boundary divided into
finitely many sides meeting only at their common endpoints, together with a
partition of the sides into pairs. A disk with at least three sides is
*polygonal*: its sides are the straight edges of that polygon. A disk with
exactly two sides — a **bigon** — has its two sides realized as simple arcs
meeting exactly at the two corners, and a disk with a single side — a
**monogon** — has its sole side realized as the whole boundary arc from the
corner to itself. Polygons are the general case; bigons and monogons occur
only in the degenerate standard presentations (the digon $aa^{-1}$ for the
sphere and the digon $aa$ for the projective plane) and as intermediate
pieces of the cut-and-paste moves. Each paired pair of sides is identified by
a specified homeomorphism that maps the marked corners of one side onto
the marked corners of the other (in particular, a monogon corner maps to
the other monogon corner). The map is required to be affine whenever both
sides are straight edges. Give the disjoint union $X$ of the disks its usual
topology and give the realization $Y$ the quotient topology
([[def-quotient-topology]]). The quotient vertices are the equivalence classes
of disk corners, its edges are the classes of paired side interiors, and its
faces are the images of disk interiors.

A schema is a **connected surface schema** when $Y$ is connected, every edge
class has exactly two incident face-sides, and the link at each vertex class
is a single cycle. Here the link has one arc for each disk corner in that
class, with link endpoints joined according to the paired side germs. The
cycle condition means that a sufficiently small vertex star is a disk. Each
paired edge interior has two half-disk neighborhoods, which join to a disk;
disk-interior points already have disk neighborhoods. Thus these local
conditions give a boundaryless surface.

The topology has the required global properties as well. Each disk is a closed
bounded subset of the plane and is compact by
[[thm-heine-borel-rn]], so $X$ is a finite disjoint union of compact metric
spaces. The pairing relation $R$ on $X$ is a finite union of the diagonal,
the closed graphs of the side maps (each a continuous map of a compact side
into a Hausdorff space, hence with closed graph), and the finitely many
vertex-class pairs; hence $R$ is closed in $X\times X$. If $q:X\to Y$ is the
quotient map and $F\subseteq X$ is closed, then

$$q^{-1}(q(F))=\operatorname{pr}_2\bigl(R\cap(F\times X)\bigr).$$

The product $X\times X$ is a finite disjoint union of products of closed
bounded disks in $\mathbb R^4$, hence compact by
[[thm-heine-borel-rn]]. This projection is compact and closed in the Hausdorff
space $X$ ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]).
The quotient topology therefore makes $q(F)$ closed, so $q$ is a closed map.
Two distinct fibers are disjoint compact subsets of $X$ and have disjoint
open neighborhoods $U,V$ by the same compact-separation theorem. The open
sets $Y\setminus q(X\setminus U)$ and $Y\setminus q(X\setminus V)$ then
separate their quotient points. Hence $Y$ is Hausdorff.

The space $X$ has a countable basis, obtained by intersecting rational open
rectangles with its finitely many disks. For each finite union $B$ of
members of this basis, put $W_B=Y\setminus q(X\setminus B)$. The closed-map
property makes every $W_B$ open. If $O\subseteq Y$ is open and $y\in O$, the
compact fiber $q^{-1}(y)$ is covered by finitely many basis members whose
union $B$ lies in $q^{-1}(O)$. Then $y\in W_B\subseteq O$. There are only
countably many such finite unions, so the $W_B$ form a countable basis. Thus
every connected surface schema realizes a nonempty compact connected
Hausdorff, second-countable topological $2$-manifold, in the convention of
[[def-topological-manifold-without-boundary]]. These finite constructions use
no full Axiom of Choice.

The quotient has a finite CW structure: the vertex classes are its $0$-cells,
the paired side classes its $1$-cells, and the disk interiors its $2$-cells.
If there are $V$ vertex classes, $E$ side pairs, and $F$ disks, then the
cell counts are $(n_0,n_1,n_2)=(V,E,F)$.

A **one-polygon schema** is a connected surface schema with one face. Choose a
reference direction on each paired edge and give it a letter. Read the face
boundary cyclically: write $a$ when traversal agrees with the reference
direction and $a^{-1}$ when it disagrees. Every letter occurs exactly twice.
Changing letter names changes only labels; changing the starting side cyclically
rotates the word; reversing the polygon orientation reverses the word and
inverts each letter. These changes give homeomorphic quotient descriptions.
For a one-polygon schema, each pair with opposite exponents is orientation
compatible, while equal exponents give a twisted pairing. The sphere,
orientable handles, and crosscaps below use this boundary-direction
convention. The empty schema and schemas with unpaired boundary sides are
excluded.
