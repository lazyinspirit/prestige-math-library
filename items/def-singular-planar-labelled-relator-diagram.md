---
id: "def-singular-planar-labelled-relator-diagram"
kind: "definition"
title: "Singular planar labelled relator diagrams and their outer walks"
status: "draft"
origin: "pipeline"
deps: ["def-group-presentation", "def-alphabet-words-and-reduction", "def-multigraph-loop-and-digraph"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
sources:
  scraped: []
  references:
    - title: "Bridson, The geometry of the word problem — §4.1 and §4.2 Definition 4.2.1, PDF pp.20–22"
      url: "https://people.maths.ox.ac.uk/bridson/papers/bfs/bfs.pdf"
pipeline_run: "phase-2-hg-prerequisite"
---

## Definition

Fix a presentation $\mathcal P=\langle X\mid R\rangle$ ([[def-group-presentation]]) and words with formal inverses as in [[def-alphabet-words-and-reduction]]. A **singular planar labelled relator diagram** consists of an embedded finite connected plane multigraph, with loops and parallel edges as in [[def-multigraph-loop-and-digraph]], and finitely many characteristic polygon disks attached along cyclic edge-occurrence walks. Each characteristic map is injective on its open disk; its open-disk image is disjoint from the entire embedded graph, and the open-disk images of distinct faces are disjoint from one another. Edges are polygonal arcs, with distinct germs at the two ends of a loop. Geometric bends are not additional labelled edge occurrences.

Oriented edges carry letters in $X\sqcup X^{-1}$; reversing orientation inverts the letter. Each face's attaching walk reads a cyclic conjugate of a defining relator or its inverse. Occurrences are counted with multiplicity, even if an attaching walk repeats vertices or edges; neither its closed frontier nor its attaching map is required to be injective.

The **outer boundary walk** follows the edge occurrences bordering the unbounded region, in their plane cyclic order. An initial occurrence is specified when a literal linear word is read. Excursions at cut vertices are retained. A **thin edge** has no incident relator face. A **bridge** disconnects the graph when its open edge is deleted; a **cut vertex** disconnects it upon vertex deletion. These are distinct notions in the definition. The constructed diagrams below will have every thin edge a bridge traversed twice by the outer walk.

The diagram is **contractible** if its plane carrier has a contraction to a point. The single-vertex zero-face diagram is allowed. A **Cayley vertex labelling** is a map $g:V\to\langle X\mid R\rangle$ satisfying $g(w)=g(v)x$ on each oriented edge $v\to w$ labelled $x$. This condition includes loop edges.

The plane has its standard orientation. Whenever a literal outer word is read,
the outer walk is the directed facial walk with the unbounded region locally on
its left, and the specified initial occurrence is a directed edge occurrence.
Thus both the traversal direction and the first letter are fixed, including for
loop edges and the two occurrences of a bridge.
